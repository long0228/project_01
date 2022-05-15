//  未被追踪的文件：untrack
//  通过git status 查看当前文件状态
//  可以使用clear 清除屏幕信息
//  查看状态精简命令  git status -s
//  ??表示未被追踪
//  添加追踪文件 git add 文件名
//  可以先写两个字母 按 tab 可以补齐路径
//  A 表示文件已被追踪
//  M 表示当前文件已经修改
//  git commit -m '描述信息'
//  -m 就是message的意思 命令后面描述信息一定要写
//  暂存已修改的文件 git add 文件名
//  add添加文件追踪   缓存文件   解决冲突
//  一键加入多个文件到暂存区  git add .
//  git reset HEAD 要移除暂存区的文件名称
//  git commit -a 自动把跟踪文件暂存起来一并提交 跳过暂存区
//  是git add和git commit的符合写法  git commit -a -m '增加html内容和css背景颜色和js注释内容'
//  移除文件： 1.从git仓库和工作区中同时移除对应文件 git rm -f 文件名  (rm remove的意思 f force强制的意思)
//            2.从仓库移除对应文件 保留工作区的对应文件 git rm --cached 文件名
//  忽略文件:创建.gitignore配置文件 列出要忽略文件的匹配模式
//  回顾历史 git log
//  格式  git log -? 显示几行
//       git log -2 --pretty=oneline  两次历史一行显示
//  回到指定嘻哈值的文件     git reset --hard commitID
//  再次查看历史  git reflog
//  再次跳转指定文件  git reset --hard commitID


//github
//查看本地工程关联的远程仓库是哪个  git remote -v