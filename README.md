使用方法：
    git clone 此项目
    修改远程仓库地址到自己的git项目上 git remote set-url origin git@git.xxx.com:xxx/example.git
    git remote -v 查看修改后的内容

修改项目名称
    修改文件1：
        package.json
            {
               "name": "XXXXXXXXXXXXXXX",
               "version": "0.0.1",// 你需要的版本
               "private": true,
               "scripts": {
                 "start": "node node_modules/react-native/local-cli/cli.js start",
                 "test": "jest"
            },
    修改文件2：
        app.json
            {
              "name": "XXXXXXXXXXXXXXX",
              "displayName": "XXXXXXXXXXXXXXX"
            }
    生成对应的android和ios的项目：react-native upgrade


apollo-react若提示缺少的话就，需要自己安装：
    npm install apollo-boost react-apollo graphql apollo-link-http  --save


react-native-vector-icons 图标查找网址
https://oblador.github.io/react-native-vector-icons/
