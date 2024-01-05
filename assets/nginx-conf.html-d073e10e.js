import{_ as n,o as s,c as a,f as e}from"./app-2da50e2c.js";const t={},i=e(`<h1 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> Nginx 配置</h1><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><p>location 下添加如下配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
	<span class="token comment">#CORS 配置</span>
	<span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> <span class="token string">&#39;GET, POST, OPTIONS, PUT, DELETE&#39;</span></span><span class="token punctuation">;</span>
	<span class="token comment">#是否允许cookie传输</span>
	<span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span>
		<span class="token string">&#39;Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token&#39;</span></span><span class="token punctuation">;</span>

	<span class="token comment">#针对浏览器的options预请求直接返回200，否则会被403 forbidden--invalie CORS request</span>
	<span class="token directive"><span class="token keyword">if</span> ( <span class="token variable">$request_method</span> = <span class="token string">&#39;OPTIONS&#39;</span> )</span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="带下划线的-header-丢失问题" tabindex="-1"><a class="header-anchor" href="#带下划线的-header-丢失问题" aria-hidden="true">#</a> 带下划线的 header 丢失问题</h2><p>nginx 默认会忽略带下划线的请求头, 需在 http 下添加配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># ...</span>
    <span class="token comment"># 启用下划线</span>
    <span class="token directive"><span class="token keyword">underscores_in_headers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[i];function o(l,p){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","nginx-conf.html.vue"]]);export{r as default};
