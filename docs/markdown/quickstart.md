# 快速上手

## 背景知识

使用 iny weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 步骤一 通过 npm 安装

```bash
# 通过 npm 安装
npm i iny-weapp -S --production

# 通过 yarn 安装
yarn add iny-weapp --production
```

## 使用

### 引入组件

以 Button 组件为例，只需要在`app.json`或`index.json`中配置 Button 对应的路径即可。如果你是通过下载源代码的方式使用 iny-weapp，请将路径修改为项目中 iny-weapp 所在的目录。

```json
// app.json
"usingComponents": {
  "iny-button": "iny-weapp/button"
}
```

### 使用组件

引入组件后，可以在 wxml 中直接使用组件

```xml
<iny-button type="primary">按钮</iny-button>
```

## 其他

### 在开发者工具中预览示例小程序

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
  
```

接着打开微信开发者工具，导入`example`目录的项目就可以预览示例了。
