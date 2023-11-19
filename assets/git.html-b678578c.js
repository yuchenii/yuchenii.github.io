import{_ as i,r as t,o as l,c,a as n,b as s,d as e,f as o}from"./app-a222833e.js";const p={},r=n("h1",{id:"git-操作指南",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-操作指南","aria-hidden":"true"},"#"),s(" Git 操作指南")],-1),d={href:"http://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),v={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},u={href:"https://git-scm.com/download/linux",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/download/mac",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> Git 常用命令</h2><h3 id="生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#生成-ssh-key" aria-hidden="true">#</a> 生成 SSH Key</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;your-email&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成时会要求确认路径和输入密码</p><p>key 默认会保存在 ~/.ssh/id_rsa.pub 里</p><h3 id="git-init-clone" tabindex="-1"><a class="header-anchor" href="#git-init-clone" aria-hidden="true">#</a> git init/clone</h3><p><code>git init</code> 初始化仓库，<code>git clone</code>克隆仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用当前目录作为根目录初始化仓库</span>
<span class="token function">git</span> init

<span class="token comment"># 将newrepo目录作为仓库根目录，若newrepo不存在会自动在当前目录下新建一个newrepo目录</span>
<span class="token function">git</span> init <span class="token operator">&lt;</span>newrepo<span class="token operator">&gt;</span>

<span class="token comment"># 下载一个完整的项目</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>repo-url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-config" tabindex="-1"><a class="header-anchor" href="#git-config" aria-hidden="true">#</a> git config</h3><p>更改配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 编辑(全局)配置文件</span>
<span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># 输出(全局)用户信息</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email

<span class="token comment"># 编辑(全局)用户信息</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;your-name&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;your-email&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果添加了 <code>--global</code> 参数就是全局配置，如果想要在某个项目下使用其他的用户名或邮件， 去掉 <code>--global</code> 参数重新配置即可</p><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add</h3><p>将工作区文件添加到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加一个文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>

<span class="token comment"># 添加多个文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>

<span class="token comment"># 添加当前目录下所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><p>将暂存区的文件添加到本地仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交暂存区文件到本地仓库</span>
<span class="token comment"># message为代码提交的详细信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 提交指定文件到本地仓库</span>
<span class="token function">git</span> commit <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># 提交时显示所有diff信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><p>将本地的仓库分支上传到远程仓库并合并</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令格式</span>
<span class="token comment"># git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</span>
<span class="token function">git</span> push origin main:main
<span class="token comment"># 如果本地分支名与远程分支名相同可以省略远程分支名</span>
<span class="token function">git</span> push origin main

<span class="token comment"># 推送所有分支到远程仓库</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果本地版本和远程版本有差异，可以使用<code>--force</code> 强制推送</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--force</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><p>下载远程代码并合并到本地版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令格式</span>
<span class="token comment"># git pull &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;</span>
<span class="token function">git</span> pull origin main:main
<span class="token comment"># 如果与当前分支合并可以省略远程分支名</span>
<span class="token function">git</span> pull origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示所有远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 添加远程仓库地址</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin address

<span class="token comment"># 修改远程仓库地址</span>
<span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>

<span class="token comment"># 移除远程仓库</span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>repository<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 查看所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 查看所有分支包括本地和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 新建分支，但仍停留在当前分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>  <span class="token comment"># branch-name为要创建的分支名</span>

<span class="token comment"># 新建分支，并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># 新建分支，指定commit</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
<span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote-branch<span class="token operator">&gt;</span>

<span class="token comment"># 重命名分支</span>

<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>old-branch-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span>

<span class="token comment"># 编辑分支介绍</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span> --edit-description

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># 切换到上一个分支</span>
<span class="token function">git</span> checkout -

<span class="token comment"># 合并分支到当前分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
<span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># or</span>
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token operator">&lt;</span>remote/branch<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-merge" tabindex="-1"><a class="header-anchor" href="#git-merge" aria-hidden="true">#</a> git merge</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 合并分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span>
<span class="token comment"># 合并单个文件</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path to file<span class="token operator">&gt;</span> <span class="token parameter variable">--patch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-rebase" tabindex="-1"><a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a> git rebase</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 合并分支</span>
<span class="token function">git</span> rebase <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
<span class="token comment"># 合并远程</span>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
<span class="token comment"># 交互式编辑从当前分支向前最近n个提交</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git rebase</code> 会更改提交历史记录，确保仅在本地使用，永远不要在公共分支上使用 rebase</p><h3 id="git-tag" tabindex="-1"><a class="header-anchor" href="#git-tag" aria-hidden="true">#</a> git tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有标签</span>
<span class="token function">git</span> tag

<span class="token comment"># 新建标签</span>
<span class="token function">git</span> tag <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment"># 指定标签信息</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 在指定commit上新建一个标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># 在指定commit上新建一个标签，并添加信息</span>
<span class="token function">git</span> tag <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>

<span class="token comment"># 查看标签所修改的内容</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment"># 推送一个本地标签</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment">#推送全部未推送过的本地标签</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token comment"># 删除本地标签</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tag-name<span class="token operator">&gt;</span>

<span class="token comment"># 删除一个远程标签</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
<span class="token comment"># or</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> tag <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示自上次提交后有变更的文件</span>
<span class="token function">git</span> status
<span class="token function">git</span> status <span class="token parameter variable">-s</span> <span class="token comment"># 查看更详细的信息</span>

<span class="token comment"># 查看所有提交记录</span>
<span class="token function">git</span> log

<span class="token comment"># 显示几条提交信息</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>num<span class="token operator">&gt;</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token number">10</span>    <span class="token comment"># 显示10条提交信息</span>

<span class="token comment"># 查看指定文件的提交记录</span>
<span class="token function">git</span> log <span class="token operator">&lt;</span>file-name<span class="token operator">&gt;</span>

<span class="token comment"># 查看最近两次详细的修改内容</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token parameter variable">-2</span>

<span class="token comment"># 查找指定用户</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token punctuation">[</span>user-name<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
 <span class="token function">git</span> blame <span class="token operator">&lt;</span>file-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h2><h3 id="撤销-add" tabindex="-1"><a class="header-anchor" href="#撤销-add" aria-hidden="true">#</a> 撤销 add</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 适用于已 add 但未 commit</span>
<span class="token function">git</span> status        <span class="token comment"># 首先查看哪些文件已经add</span>
<span class="token function">git</span> reset <span class="token function">file</span>    <span class="token comment"># 撤销 file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销-commit" tabindex="-1"><a class="header-anchor" href="#撤销-commit" aria-hidden="true">#</a> 撤销 commit</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^     <span class="token comment"># 返回到上个版本，既上一个commit</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~n    <span class="token comment"># 返回到倒数第n版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以根据 commitId 返回到特定的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先获取 commitId</span>
<span class="token function">git</span> log    <span class="token comment"># commit后面一长串就是id， 按q退出log</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitId  <span class="token comment"># 返回到commitId这个版本</span>

<span class="token comment"># 如果撤销错了，想取消这次操作</span>
<span class="token function">git</span> reflog    <span class="token comment"># 查看操作记录</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitId   <span class="token comment"># 返回到想回到的commit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除远程文件或文件夹" tabindex="-1"><a class="header-anchor" href="#删除远程文件或文件夹" aria-hidden="true">#</a> 删除远程文件或文件夹</h3><p>预览文件，检查文件是否存在(不会删除源文件)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">--cached</span> file/fileName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确定删除文件(不会删除本地的文件，只是从 git 仓库中移出文件)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> file/fileName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交到本地并推送到远程服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span>  <span class="token comment"># message为代码提交的详细信息</span>
<span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function g(h,f){const a=t("ExternalLinkIcon");return l(),c("div",null,[r,n("blockquote",null,[n("p",null,[n("a",d,[s("官方文档"),e(a)])])]),m,n("p",null,[n("a",v,[s("windows 版本"),e(a)])]),n("p",null,[n("a",u,[s("Linux/Unix 版本"),e(a)])]),n("p",null,[n("a",b,[s("Mac OS 版本"),e(a)])]),k])}const _=i(p,[["render",g],["__file","git.html.vue"]]);export{_ as default};
