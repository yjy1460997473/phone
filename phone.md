# phone 

### 前期准备

1. 项目功能
	* 用户注册
	* 用户登录

2. 开发环境
	* window7
	* vscode
	* git
	* nodejs
	* express
	* supervisor
	* mongodb
	* koala

3. 项目具体实现
	* 新建phone文件夹
	`$ mkdir phone`
	* 进入phone文件夹
	`$ cd phone`
	* 初始化项目创建package.json
	`$ npm init`
	* 使用ejs作为模板
	`$ express -e`
	* 使用npm安装依赖项
	`$ npm install`
	* 运行
	`$ npm start`
	* 将stylesheets导入koala，创建public.scss文件初始化css样式。
	`$ touch public.scss`
	* 创建phone.md文件记录项目开发
	`$ touch phone.md`
	* 创建.gitignore文件并将node_modules写入
	`$ touch .gitignore`
	* 初始化本地git仓库
	`$ git init`
	* 在github上创建phone数据库并在本地关联
	`$ git remote add origin https://github.com/yjy1460997473/phone.git`
	* 添加所用文件
	`$ git add *`
	* 提交文件输入的是本次提交的说明
	`$ git commit -m "first_phone"`
	* 推到github上
	`$ git push origin master`

### 项目开发

	1. 插件安装

	* npm install mongoose
	* npm install body-parser
	* npm install cookie-parser
	* npm install multer

	2. 数据库

	* 启动mongodb
	* 另开一个cmd
	* 输入mongo
	* 创建数据库phone
	`use phone`
	* 检查当前选择的数据库
	`db `
	* 创建集合login
	`db.createCollection("login")`
	* 插入数据
	db.login.insert({
	    "_id" : "15770878703",
	    "name" : "李雷",
	    "pass" : "asdfgh123",
	    "_name" : "Mike",
	    "is" : true
	})
	
	 






