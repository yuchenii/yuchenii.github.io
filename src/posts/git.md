---
icon: fa-brands fa-git-alt
date: 2023-10-31
star: true
category:
 - Git
tag:
 - Git
---

# Git 操作指南

> [官方文档](http://git-scm.com/docs)

## 安装

[windows 版本](https://git-scm.com/download/win)

[Linux/Unix 版本](https://git-scm.com/download/linux)

[Mac OS 版本](https://git-scm.com/download/mac)

## Git 常用命令

### 生成 SSH Key

```bash
ssh-keygen -t rsa -C "your-email"
```

生成时会要求确认路径和输入密码

key 默认会保存在 ~/.ssh/id_rsa.pub 里

### git init/clone

`git init` 初始化仓库，`git clone`克隆仓库

```bash
# 使用当前目录作为根目录初始化仓库
git init

# 将newrepo目录作为仓库根目录，若newrepo不存在会自动在当前目录下新建一个newrepo目录
git init <newrepo>

# 下载一个完整的项目
git clone <repo-url>
```

### git config

更改配置

```bash
# 显示当前配置
git config --list

# 编辑(全局)配置文件
git config -e [--global]

# 输出(全局)用户信息
git config [--global] user.name
git config [--global] user.email

# 编辑(全局)用户信息
git config [--global] user.name "your-name"
git config [--global] user.email "your-email"
```

如果添加了 `--global` 参数就是全局配置，如果想要在某个项目下使用其他的用户名或邮件， 去掉 `--global` 参数重新配置即可

### git add

将工作区文件添加到暂存区

```bash
# 添加一个文件到暂存区
git add <file1>

# 添加多个文件到暂存区
git add <file1> <file2>

# 添加指定目录到暂存区，包括子目录
git add <dir>

# 添加当前目录下所有文件到暂存区
git add .
```

### git commit

将暂存区的文件添加到本地仓库

```bash
# 提交暂存区文件到本地仓库
# message为代码提交的详细信息
git commit -m "message"

# 提交指定文件到本地仓库
git commit <file1> <file2> -m "message"

# 提交工作区自上次commit之后的变化，直接到仓库区
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m "message"

# 重做上一次commit，并包括指定文件的新变化
git commit --amend <file1> <file2> 
```

### git push

将本地的仓库分支上传到远程仓库并合并

```bash
# 命令格式
# git push <远程主机名> <本地分支名>:<远程分支名>
git push origin main:main
# 如果本地分支名与远程分支名相同可以省略远程分支名
git push origin main

# 推送所有分支到远程仓库
git push origin --all
```

如果本地版本和远程版本有差异，可以使用`--force` 强制推送

```bash
git push --force origin main
```

### git pull

下载远程代码并合并到本地版本

```bash
# 命令格式
# git pull <远程主机名> <本地分支名>:<远程分支名>
git pull origin main:main
# 如果与当前分支合并可以省略远程分支名
git pull origin main
```

### git remote

```bash
# 显示所有远程仓库
git remote -v

# 添加远程仓库地址
git remote add origin address

# 修改远程仓库地址
git remote set-url origin <url>

# 移除远程仓库
git remote remove <repository>
```

### git branch

```bash
# 查看本地分支
git branch

# 查看所有远程分支
git branch -r

# 查看所有分支包括本地和远程分支
git branch -a

# 新建分支，但仍停留在当前分支
git branch <branch-name>  # branch-name为要创建的分支名

# 新建分支，并切换到该分支
git checkout -b <branch-name>

# 新建分支，指定commit
git branch <branch-name> <commit>

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track <branch> <remote-branch>

# 重命名分支

git branch -m <old-branch-name> <new-branch-name>

# 编辑分支介绍
git branch <branch-name> --edit-description

# 切换分支
git checkout <branch-name>

# 切换到上一个分支
git checkout -

# 合并分支到当前分支
git merge <branch-name>

# 选择一个commit，合并进当前分支
git cherry-pick <commit>

# 删除分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>
# or
git branch -dr <remote/branch>

```

### git merge

```shell
# 合并分支
git merge <branch-name>
# 合并单个文件
git checkout <branch name> <path to file> --patch
```

### git rebase

```shell
# 合并分支
git rebase <branch name>
# 合并远程
git pull --rebase origin <branch name>
# 交互式编辑从当前分支向前最近n个提交
git rebase -i HEAD~n
```

`git rebase` 会更改提交历史记录，确保仅在本地使用，永远不要在公共分支上使用 rebase

### git tag

```bash
# 列出所有标签
git tag

# 新建标签
git tag <tag-name>

# 指定标签信息
git tag -a <tag-name> -m "message"

# 在指定commit上新建一个标签
git tag -a <tag-name> <commit>

# 在指定commit上新建一个标签，并添加信息
git tag -a <tag-name> <commit> -m "message"

# 查看标签所修改的内容
git show <tag-name>

# 推送一个本地标签
git push origin <tag-name>

#推送全部未推送过的本地标签
git push origin --tags

# 删除本地标签
git tag -d <tag-name>

# 删除一个远程标签
git push origin :refs/tags/<tagname>
# or
git push origin --delete tag <tagname>

```

### git log

```bash
# 显示自上次提交后有变更的文件
git status
git status -s # 查看更详细的信息

# 查看所有提交记录
git log

# 显示几条提交信息
git log -n <num>
git log -n 10    # 显示10条提交信息

# 查看指定文件的提交记录
git log <file-name>

# 查看最近两次详细的修改内容
git log -p -2

# 查找指定用户
git log --author=[user-name]

# 显示指定文件是什么人在什么时间修改过
 git blame <file-name>
```

## 撤销操作

### 撤销 add

```bash
# 适用于已 add 但未 commit
git status        # 首先查看哪些文件已经add
git reset file    # 撤销 file
```

### 撤销 commit

```bash
git reset --hard HEAD^     # 返回到上个版本，既上一个commit
git reset --hard HEAD~n    # 返回到倒数第n版本
```

还可以根据 commitId 返回到特定的版本

```bash
# 首先获取 commitId
git log    # commit后面一长串就是id， 按q退出log
git reset --hard commitId  # 返回到commitId这个版本

# 如果撤销错了，想取消这次操作
git reflog    # 查看操作记录
git reset --hard commitId   # 返回到想回到的commit
```

### 删除远程文件或文件夹

预览文件，检查文件是否存在(不会删除源文件)

```bash
git rm -r -n --cached file/fileName
```

确定删除文件(不会删除本地的文件，只是从 git 仓库中移出文件)

```bash
git rm -r --cached file/fileName
```

提交到本地并推送到远程服务器

```bash
git commit -m "message"  # message为代码提交的详细信息
git push origin main
```
