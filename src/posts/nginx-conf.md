---
# 这是文章的标题
# title: Git 指南
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: fa-brands fa-git-alt
# 这是侧边栏的顺序
# order: 3
date: 2024-1-5
category:
  - Nginx
tag:
  - Nginx
# # 此页面会在文章列表置顶
# sticky: true
# # 此页面会出现在文章收藏中
star: true
# # 你可以自定义页脚
# footer: 这是测试显示的页脚
# # 你可以自定义版权信息
# copyright: 无版权
---

# Nginx 配置

## 跨域

location 下添加如下配置

```nginx
location / {
	#CORS 配置
	add_header 'Access-Control-Allow-Origin' '*';
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
	#是否允许cookie传输
	add_header 'Access-Control-Allow-Credentials' 'true';
	add_header 'Access-Control-Allow-Headers'
		'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token';

	#针对浏览器的options预请求直接返回200，否则会被403 forbidden--invalie CORS request
	if ( $request_method = 'OPTIONS' ) {
		return 200;
	}
}
```

## 带下划线的 header 丢失问题

nginx 默认会忽略带下划线的请求头, 需在 http 下添加配置

```nginx
http {
    # ...
    # 启用下划线
    underscores_in_headers on;
}
```
