# Git视频教程-尚硅谷Git入门到精通全套教程（涵盖GitHub\Gitee码云\GitLab）

## 00_教程简介

视频地址:[尚硅谷Git入门到精通全套教程（涵盖GitHub\Gitee码云\GitLab）](https://www.bilibili.com/video/BV1vy4y1s7k6/?p=1)

## 01_Git概述

### 版本控制-Version Control

- 本地版本控制系统-Local Version Control Systems(**RCS**)

- 集中式版本控制系统-Centralized Version Control Systems(**SVN**)

- 分布式版本控制系统-Distributed Version Control Systems(**Git**)

### [Git安装](https://www.bilibili.com/video/BV1vy4y1s7k6/?p=7&spm_id_from=pageDriver&vd_source=6e9c2de5b89c2ba4e13469e295319397)

## 02_Git入门

| 命令                                     | 描述                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| git config --list                        | 获取config信息                                               |
| git config --global user.name <username> | 设置用户名为<username>                                       |
| git config --global user.email <email>   | 设置邮箱为<email>                                            |
| git init                                 | 初始化本地库                                                 |
| git status                               | 查看状态                                                     |
| git add <file>                           | 把文件<file>添加到暂存区                                     |
| git rm --cached <file>                   | 把文件<file>从暂存区中移除                                   |
| git commit -m <commitDescribe>           | 将暂存区的文件提交到本地库,并记录提交信息<commitDescribe>,<commitDescribe>需要在引号""之中 |
| git reflog                               | 查看项目版本记录(简洁)                                       |
| git log                                  | 查看项目版本记录(详细)                                       |
| git reset --hard <版本号>                | hard模式切换到<版本号>                                       |

## 03_git分支

| 命令                      | 描述                             |
| ------------------------- | -------------------------------- |
| git branch <branchName>   | 创建<branchName>分支             |
| git branch -v             | 查看分支                         |
| git checkout <branchName> | 切换到<branchName>分支           |
| git merge <branchName>    | 把<branchName>分支合并到当前分支 |

## 04_远程仓库

| 命令                                    | 描述                                               |
| --------------------------------------- | -------------------------------------------------- |
| git remote -v                           | 查看远程库                                         |
| git remote add <remoteName> <remoteURL> | 添加远程库<remoteURL>,并取别名<remoteName>         |
| git push <remoteName> <branchName>      | 把<branchName>分支推送到<remoteName>远程仓库       |
| git pull <remoteName> <branchName>      | 把<remoteName>远程仓库的<branchName>分支拉取到本地 |
| git clone <remoteURL>                   | 克隆<remoteURL>远程仓库到本地                      |

## [05_跨团队合作](https://www.bilibili.com/video/BV1vy4y1s7k6/?p=25)

外援fork团队代码,开发后发送pull request给团队,团队审核后同意pull request请求,并合并代码

## [06_SSH免密登录](https://www.bilibili.com/video/BV1vy4y1s7k6/?p=26&vd_source=6e9c2de5b89c2ba4e13469e295319397)

## 07_IDEA集成GitHub/Gitee

## [08_GitLab](https://www.bilibili.com/video/BV1vy4y1s7k6/?p=41&vd_source=6e9c2de5b89c2ba4e13469e295319397)