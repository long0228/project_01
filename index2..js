//github
//查看本地工程关联的远程仓库是哪个  git remote -v

//git remote add origin https://github.com/long0228/project_01.git(是用来关联本地仓库和远程仓库的)
//remote 远程
//add 添加
//origin 后面的git仓库地址的别名
//远程仓库的地址  路径 https://github.com/long0228/project_01.git

//git branch -M main (把默认的master分支名称改成了main)
//git push -u origin main (表示第一次本地仓库往远程仓库提交的时候 必须这么写)

//push 推送
//-u  第一次推送的时候必须添加 -u参数
//origin 表示工程推送到的地址
//main 上面地址所在的某一个点（分支）

//修改完再次提交 只需要git push 即可