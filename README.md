# vue-vuex-example

## 主要研究了Vuex的下面几点内容
- 概念
  - State
  - Getter
  - Mutation
  - Action
  - Module
- 实战
  - 如何集成Vuex
  - 根据state, getters, mutations, actions创建store
  - 在组件中使用mapState
  - 在组件中使用mapGetter
  - 在组件中使用mapMutation
  - 在组件中使用mapAction

### 技术栈
- Vue
- Vue-Router
- Vuex
- Bootstrap
- Sass
- Promise
- mongodb

---
## 安装mongodb
### 提前准备
- 确保xcode-select已经安装。可以使用`xcode-select -v`查看；如果没有，使用`xcode-select install`安装
- 确保homebrew已经安装。可以使用`brew -v`查看；如果没有，执行`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;参考[homebrew官网](https://brew.sh/)

### 使用homebrew安装mongodb(使用vpn，解决网络问题)
- `brew tap mongodb/brew`
- `brew update`(可忽略)
- `brew install mongodb-community@6.0`

### 启动/关闭mongodb服务
- 启动：`brew services start mongodb-community@6.0`
- 关闭：`brew services stop mongodb-community@6.0` 

### 查看mongodb服务是否已经启动
- `brew services list`

参考：[mongodb官网](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

---
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
