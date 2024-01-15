---
# 这是文章的标题
# title: Git 指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: fa-brands fa-git-alt
# 这是侧边栏的顺序
# order: 3
date: 2024-1-14
category:
  - JS
tag:
  - JS
  - Vue
# # 此页面会在文章列表置顶
# sticky: true
# # 此页面会出现在文章收藏中
star: true
# # 你可以自定义页脚
# footer: 这是测试显示的页脚
# # 你可以自定义版权信息
# copyright: 无版权
---

# IntersectionObserver

IntersectionObserver 提供了一种异步监听目标元素是否出现在视口的方法，它可以用于判断元素是否可见，从而执行相应的操作。

## 基本用法

### 创建 IntersectionObserver 对象

要使用 IntersectionObserver，首先需要创建一个 IntersectionObserver 对象，然后使用该对象来监听目标元素。当目标元素出现在视口或者达到一定阈值时，会触发回调函数，从而执行相应的操作。

```js
const observer = new IntersectionObserver(callback, options);
```

#### callback 回调函数

```js
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 目标元素可见
    } else {
      // 目标元素不可见
    }
  });
}
```

- entries：一个包含了一组 IntersectionObserverEntry 对象的数组，每个对象代表了一个交叉的目标元素。
- observer：IntersectionObserver 对象。

IntersectionObserverEntry 对象包含了以下属性：

- time：可见性变化的时间，是一个高精度时间戳，单位为毫秒。
- target：可见性变化的目标元素。
- intersectionRatio：可见性变化的比例。
- intersectionRect：目标元素的可见矩形区域。
- boundingClientRect：目标元素的边界矩形区域。
- rootBounds：可见性变化的根元素的边界矩形区域。
- isIntersecting：可见性变化的目标元素是否与视窗交叉。

#### options 选项

IntersectionObserver 提供了以下常见的选项：

- root：指定根元素，即目标元素所在的容器元素。
- rootMargin：指定根元素的边界距离，可以是一个具有以下格式的字符串：'10px 20px 30px 40px'，分别表示上、右、下、左的边界距离。
- threshold：指定监听的目标元素的可见性变化的阈值，可以是一个数字或一个包含多个阈值的数组。

### 监听目标元素

接下来，需要使用 observe() 方法来监听目标元素。

```js
observer.observe(target);
```

- target：要监听的目标元素。

当目标元素出现在视口或者达到一定阈值时，就会会触发回调函数

### 停止监听

当不需要监听目标元素时，可以使用 unobserve() 方法来停止监听。

```js
observer.unobserve(target);
```

- target：要停止监听的目标元素。

## 图片懒加载指令


Vue指令实现

```ts
export default {
  mounted(el: HTMLElement, binding: any) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage: HTMLImageElement = entry.target as HTMLImageElement;
          lazyImage.src = binding.value;
          observer.unobserve(lazyImage);
        }
      });
    });
    observer.observe(el);
  }
};
```

在 main.ts 中注册指令

```ts
import vLazy from './directives/lazy';

const app = createApp(App);
app.directive('lazy', vLazy);
```

使用

```vue
<template>
  <div>
    <img v-lazy="'https://picsum.photos/id/237/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/238/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/239/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/240/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/241/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/242/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/243/900/600'" alt="" />
    <img v-lazy="'https://picsum.photos/id/244/900/600'" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
  display: block;
  height: 100vh;
}
</style>
```

## 无限滚动

```vue
<template>
  <div>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
      <li ref="loadingRef">加载中...</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const itemList = ref<Array<string>>([]);

const loadingRef = ref<HTMLLIElement>();

onMounted(() => {
  const loadingObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      for (let i = 0; i < 10; i++) {
        itemList.value.push('item' + (itemList.value.length + 1));
      }
    }
  });
  loadingObserver.observe(loadingRef.value!);
});
</script>

<style scoped lang="scss">
div {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 80vw;
    height: 20vh;
    overflow-y: auto;

    li {
      height: 5vh;
    }
  }
}
</style>
```

## 组件懒加载

```vue
<template>
  <div ref="rootElement">
    <slot v-if="renderComponent" />
    <div style="height: 100vh" v-else>加载中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const rootElement = ref(null);
const renderComponent = ref(false);
const emit = defineEmits(['onLoad']);
const props = withDefaults(
  defineProps<{
    rootMargin?: string;
  }>(),
  {
    rootMargin: '50% 0px'
  }
);

let observer: IntersectionObserver;

onMounted(() => {
  observer = createIntersectionObserver();
  observer.observe(rootElement.value!);
});

onUnmounted(() => {
  observer.disconnect();
});

const createIntersectionObserver = () => {
  return new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // console.log(entry);
          renderComponent.value = true;
          emit('onLoad');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      root: null,
      rootMargin: props.rootMargin || '50% 0px'
    }
  );
};
</script>

<style lang="scss" scoped></style>
```

使用

```vue
<template>
  <div>
    <LazyLoading @on-load="console.log('load1')">
      <img src="https://picsum.photos/id/237/900/600" alt="" />
    </LazyLoading>
    <LazyLoading @on-load="console.log('load2')">
      <img src="https://picsum.photos/id/238/900/600" alt="" />
    </LazyLoading>
    <LazyLoading @on-load="console.log('load3')">
      <img src="https://picsum.photos/id/239/900/600" alt="" />
    </LazyLoading>
    <LazyLoading @on-load="console.log('load4')">
      <img src="https://picsum.photos/id/240/900/600" alt="" />
    </LazyLoading>
    <LazyLoading @on-load="console.log('load5')">
      <img src="https://picsum.photos/id/241/900/600" alt="" />
    </LazyLoading>
  </div>
</template>

<script setup lang="ts">
import LazyLoading from '@/components/LazyLoading/index.vue';
</script>

<style scoped lang="scss">
img {
  display: block;
  height: 80vh;
}
</style>
```

## slideIn 效果指令

```ts
const distance = 200;
const map = new WeakMap();

function isBelowViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
}

const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // console.log(entry)

      const animation = map.get(entry.target);
      if (animation && entry.boundingClientRect.top > 0) {
        // 出现在视口中且从视口下方进入时，播放动画
        animation.play();
        ob.unobserve(entry.target);
      }
    }
  }
});

export default {
  mounted(el: HTMLElement) {
    // 如果元素不在视口下方，不需要动画
    if (!isBelowViewport(el)) {
      return;
    }

    /**
     * Animations API
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API
     * 先向下移动200px，在移动到原位
     */
    const animation = el.animate(
      [
        {
          transform: `translateY(${distance}px) scale(1.2)`,
          opacity: 0
        },
        {
          marginBottom: 0, // 防止快速下滑最后几个元素异常抖动
          transform: 'translateY(0) scale(1)',
          opacity: 1
        }
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );

    // 最开始暂停动画
    animation.pause();
    ob.observe(el);

    // 用于出现在视口中时获取动画并播放
    map.set(el, animation);
  },
  unmounted(el: HTMLElement) {
    ob.unobserve(el);
  }
};
```

在 main.ts 中注册指令

```ts
import vSlideIn from './directives/slideIn';

const app = createApp(App);

app.directive('slide-in', vSlideIn);
```

使用

```vue
<template>
  <div class="container">
    <div v-slide-in class="item" v-for="(item, index) in 20" :key="index">{{ item }}</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  .item {
    height: 40vh;
    width: 90vw;
    margin: 0 auto;
    background-color: skyblue;

    text-align: center;
    line-height: 40vh;
    font-size: 30px;
    font-weight: bold;
    color: red;
  }

  .item + .item {
    margin-top: 5vh;
  }
}
</style>
```
