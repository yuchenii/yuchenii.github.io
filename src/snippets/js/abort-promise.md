---
date: 2023-12-2
category:
  - JS
tag:
  - JS
  - TS
  - Snippets
---

# 取消 Promise

fetch 和 axios 都支持使用[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)的方式来取消请求。以 fetch 为例，想要取消请求，分为三步：

```js
const url = "https://blog.yuchen.tech/";

// 1. 创建AbortController
const controller = new AbortController();
const signal = controller.signal;

// 2. 发送请求时传入AbortController的signal
fetch(url, { signal })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. 使用AbortController的abort方法来取消请求
controller.abort();
// Node 下输出
// DOMException [AbortError]: This operation was aborted
// 浏览器下输出
// DOMException: The user aborted a request.
```

原生的 promise 只有 pending、fulfilled 和 rejected 三种状态，是不支持取消的，要想像 fetch 和 axios 一样取消 promise, 需要在使用时对其做一些封装。主要的方法有以下 3 种：

## 借助 reject 方法

一个简单的例子

```js
// 返回一个promise和abort方法
function abortPromise() {
  let _reject;

  const promise = new Promise((resolve, reject) => {
    _reject = reject;
    // 模拟异步任务
    setTimeout(() => {
      resolve("success");
    }, 5000);
  });

  return {
    promise,
    abort: () => {
      _reject({
        name: "AbortError",
        message: "The promise was aborted",
      });
    },
  };
}

const { promise, abort } = abortPromise();
promise
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });

abort(); // { name: 'AbortError', message: 'The promise was aborted' }
```

可以看到调用 abort 方法后 promise 被终止了，为了更加通用，需要给 abortPromise 传入一个回掉函数。

```js
// 返回一个promise和abort方法
function abortPromise(cb) {
  let _reject;

  const promise = new Promise((resolve, reject) => {
    _reject = reject;
    cb && cb(resolve, reject);
  });

  return {
    promise,
    abort: () => {
      _reject({
        name: "AbortError",
        message: "The promise was aborted",
      });
    },
  };
}

const { promise, abort } = abortPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 5000);
});
promise
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });

abort(); // { name: 'AbortError', message: 'The promise was aborted' }
```

这样就实现了一个最简单的取消 promise 的功能。

## 借助 race 方法

Promise.race()的状态与最先 resolve/reject 的那个 promise 的状态相同。我们可以用它来实现一个取消 promise 的功能。

```js
// 返回一个promise和abort方法
function abortPromise(p) {
  let _reject;

  const promise = Promise.race([
    p,
    new Promise((resolve, reject) => {
      _reject = reject;
    }),
  ]);

  return {
    promise,
    abort: () => {
      _reject({
        name: "AbortError",
        message: "The promise was aborted",
      });
    },
  };
}

const { promise, abort } = abortPromise(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  })
);
promise
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });

abort(); // { name: 'AbortError', message: 'The promise was aborted' }
```

## 借助 AbortController

除了上面两种方法，还可以和 fetch 和 axios 一样使用 AbortController 来取消 promise。

根据 MDN 上[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal#implementing_an_abortable_api)的例子，有以下代码：

```js
function abortPromise(p, { signal } = {}) {
  return new Promise((resolve, reject) => {
    if (signal && signal.aborted) {
      reject(signal.reason);
    }

    p.then(resolve).catch(reject);

    if (signal) {
      signal.addEventListener("abort", () => {
        reject(signal.reason);
      });
    }
  });
}
```

使用

```js
let controller = new AbortController();
let signal = controller.signal;

abortPromise(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  }),
  { signal }
)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

controller.abort(); // DOMException [AbortError]: This operation was aborted
```

还可以在括号里传入 reason

```js
controller.abort({ name: "AbortError", message: "The promise was aborted" });
// { name: 'AbortError', message: 'The promise was aborted' }
```
