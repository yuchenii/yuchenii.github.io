const n=JSON.parse('{"key":"v-8ee4d50e","path":"/snippets/vue/snake-layout.html","title":"蛇形布局","lang":"zh-CN","frontmatter":{"category":["Vue"],"tag":["Vue","Snippets"],"description":"蛇形布局 实现的效果如下图所示 查看源码 使用 flex 完成 m*n 的布局 首先使用 flex 完成一个简单的 m*n 布局 &lt;template&gt; &lt;div class=\\"container\\"&gt; &lt;div class=\\"item\\" v-for=\\"(item, index) in list\\" :key=\\"index\\"&gt; step{{ index + 1 }} &lt;/div&gt; &lt;/div&gt; &lt;/template&gt; &lt;script setup lang=\\"ts\\"&gt; import { ref } from \\"vue\\"; const list = ref(new Array(12).fill(\\"\\")); &lt;/script&gt; &lt;style lang=\\"scss\\" scoped&gt; $colNum: 4; // 列数 $rowDistance: 40px; // 行间距 $colDistance: 30px; // 列间距 .container { display: flex; flex-wrap: wrap; gap: $rowDistance $colDistance; .item { width: calc((100% - $colDistance * ($colNum - 1)) / $colNum); height: 30px; display: flex; align-items: center; justify-content: center; background-color: skyblue; } } &lt;/style&gt;","head":[["meta",{"property":"og:url","content":"https://blog.yuchen.tech/snippets/vue/snake-layout.html"}],["meta",{"property":"og:site_name","content":"雨辰的博客"}],["meta",{"property":"og:title","content":"蛇形布局"}],["meta",{"property":"og:description","content":"蛇形布局 实现的效果如下图所示 查看源码 使用 flex 完成 m*n 的布局 首先使用 flex 完成一个简单的 m*n 布局 &lt;template&gt; &lt;div class=\\"container\\"&gt; &lt;div class=\\"item\\" v-for=\\"(item, index) in list\\" :key=\\"index\\"&gt; step{{ index + 1 }} &lt;/div&gt; &lt;/div&gt; &lt;/template&gt; &lt;script setup lang=\\"ts\\"&gt; import { ref } from \\"vue\\"; const list = ref(new Array(12).fill(\\"\\")); &lt;/script&gt; &lt;style lang=\\"scss\\" scoped&gt; $colNum: 4; // 列数 $rowDistance: 40px; // 行间距 $colDistance: 30px; // 列间距 .container { display: flex; flex-wrap: wrap; gap: $rowDistance $colDistance; .item { width: calc((100% - $colDistance * ($colNum - 1)) / $colNum); height: 30px; display: flex; align-items: center; justify-content: center; background-color: skyblue; } } &lt;/style&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.yuchen.tech/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T11:33:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"蛇形布局"}],["meta",{"property":"article:author","content":"Yuchen"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Snippets"}],["meta",{"property":"article:modified_time","content":"2023-11-19T11:33:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"蛇形布局\\",\\"image\\":[\\"https://blog.yuchen.tech/\\"],\\"dateModified\\":\\"2023-11-19T11:33:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yuchen\\",\\"url\\":\\"https://blog.yuchen.tech\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.yuchen.tech/atom.xml","title":"雨辰的博客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.yuchen.tech/feed.json","title":"雨辰的博客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.yuchen.tech/rss.xml","title":"雨辰的博客 RSS Feed"}]]},"headers":[{"level":2,"title":"使用 flex 完成 m*n 的布局","slug":"使用-flex-完成-m-n-的布局","link":"#使用-flex-完成-m-n-的布局","children":[]},{"level":2,"title":"调整偶数行顺序","slug":"调整偶数行顺序","link":"#调整偶数行顺序","children":[]},{"level":2,"title":"添加箭头","slug":"添加箭头","link":"#添加箭头","children":[{"level":3,"title":"item 间添加箭头","slug":"item-间添加箭头","link":"#item-间添加箭头","children":[]},{"level":3,"title":"隐藏行末的箭头","slug":"隐藏行末的箭头","link":"#隐藏行末的箭头","children":[]},{"level":3,"title":"偶数行箭头反向","slug":"偶数行箭头反向","link":"#偶数行箭头反向","children":[]},{"level":3,"title":"添加向下的箭头","slug":"添加向下的箭头","link":"#添加向下的箭头","children":[]},{"level":3,"title":"隐藏最后一个元素的箭头","slug":"隐藏最后一个元素的箭头","link":"#隐藏最后一个元素的箭头","children":[]},{"level":3,"title":"偶数行结尾位置偏移问题","slug":"偶数行结尾位置偏移问题","link":"#偶数行结尾位置偏移问题","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]}],"git":{"createdTime":1700393601000,"updatedTime":1700393601000,"contributors":[{"name":"yuchen","email":"dev.chenyu@gmail.com","commits":1}]},"readingTime":{"minutes":8.57,"words":2570},"filePathRelative":"snippets/vue/snake-layout.md","localizedDate":"2023年11月19日","excerpt":"<h1> 蛇形布局</h1>\\n<p>实现的效果如下图所示</p>\\n<figure><figcaption></figcaption></figure>\\n<p><a href=\\"#%E6%BA%90%E7%A0%81\\">查看源码</a></p>\\n<h2> 使用 flex 完成 m*n 的布局</h2>\\n<p>首先使用 flex 完成一个简单的 m*n 布局</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>container<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>(item, index) in list<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>index<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      step{{ index + 1 }}\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ts<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vue\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> list <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">12</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fill</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>scss<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">scoped</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n$<span class=\\"token property\\">colNum</span><span class=\\"token punctuation\\">:</span> 4<span class=\\"token punctuation\\">;</span> // 列数\\n$<span class=\\"token property\\">rowDistance</span><span class=\\"token punctuation\\">:</span> 40px<span class=\\"token punctuation\\">;</span> // 行间距\\n$<span class=\\"token property\\">colDistance</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span> <span class=\\"token selector\\">// 列间距\\n\\n.container</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">flex-wrap</span><span class=\\"token punctuation\\">:</span> wrap<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">gap</span><span class=\\"token punctuation\\">:</span> $rowDistance $colDistance<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token selector\\">.item</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">calc</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>100% - $colDistance * <span class=\\"token punctuation\\">(</span>$colNum - 1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> / $colNum<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">align-items</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">justify-content</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> skyblue<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
