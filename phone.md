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

	1. 配置路由



