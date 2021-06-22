const headConf = require("./config/headConf");
const navConf = require("./config/navConf");
const pluginConf = require("./config/pluginConf");
module.exports = {
  title: "夢瓛-随记",
  description: "夢瓛的博客",
  base: process.env.NODE_ENV == 'development' ? "/" : "/blog/",
  head: headConf,
  plugins: pluginConf,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "上次更新", // 文档更新时间：每个文件git最后提交的时间
    nav: navConf
  }
}
