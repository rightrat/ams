(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1197:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h3",{attrs:{id:"已经用其他框架开发的项目，如何半途接入？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已经用其他框架开发的项目，如何半途接入？","aria-hidden":"true"}},[t._v("#")]),t._v(" 已经用其他框架开发的项目，如何半途接入？")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("AMS底层依赖是"),s("code",[t._v("Vue.js")]),t._v("，而AMS里的区块（block）概念本质就是封装好的Vue组件。接入及剥离都是以组件为单位，对其它代码没有过多侵入性。")]),t._v(" "),s("p",[t._v("第一种情况：在一个已经写好的Vue.js的页面里，可以像插入普通组件的方式在某个位置接入AMS区块的："),s("router-link",{attrs:{to:"/api/block.html#使用-block"}},[t._v("使用block")])],1),t._v(" "),s("p",[t._v("第二种情况：如果在非Vue.js项目接入，支持以单独新页面的方式接入AMS。但是如果想在原有的页面去改造某一块功能或新增一块功能，结果不确定，要看具体接入案例。")]),t._v(" "),s("p",[t._v("包含普通Vue、ncform和AMS组成的在线Demo演示："),s("a",{attrs:{href:"https://jsbin.com/nizuvigije/1/edit?html,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看Demo"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"vue的组件如何整合？本来是vue的配置，能否部分页面接入ams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的组件如何整合？本来是vue的配置，能否部分页面接入ams","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue的组件如何整合？本来是Vue的配置，能否部分页面接入ams?")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("AMS里的区块（block）概念本质就是封装好的Vue组件，可以参考："),s("router-link",{attrs:{to:"/api/block.html#使用-block"}},[t._v("使用block")])],1)]),t._v(" "),s("h3",{attrs:{id:"同名ams的block如何检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同名ams的block如何检测","aria-hidden":"true"}},[t._v("#")]),t._v(" 同名ams的block如何检测")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("AMS的区块都是通过name来注册和使用的，和其它Vue组件一样，名字成为唯一标识。如果同一个项目里出现名字重复的组件就会发生重复冲突警告。")])]),t._v(" "),s("h3",{attrs:{id:"如果新开项目都是用ams开发，需要在部分页面使用外部系统页面，如何处理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果新开项目都是用ams开发，需要在部分页面使用外部系统页面，如何处理？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如果新开项目都是用ams开发，需要在部分页面使用外部系统页面，如何处理？")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("可以使用"),s("router-link",{attrs:{to:"/block/component.html"}},[t._v("component")]),t._v("区块注册一个iframe，设置src为外部页面的url，即可接入")],1)]),t._v(" "),s("p",[t._v("示例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("iframeBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iframe'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.vip.com/id=11'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    frameborder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"表格是否可以接入ncform类似产品"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格是否可以接入ncform类似产品","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格是否可以接入ncform类似产品?")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[s("code",[t._v("ncform")]),t._v("的底层依赖和AMS一样，都是"),s("code",[t._v("Vue.js")]),t._v("和"),s("code",[t._v("Elemen-UI")]),t._v("，而"),s("code",[t._v("ncform")]),t._v("也是以Vue的组件方式插入Vue的项目中，也和AMS一样。所以分两种情况接入：")]),t._v(" "),s("p",[t._v("（1）"),s("code",[t._v("ncform")]),t._v("和"),s("code",[t._v("ams-block")]),t._v("都以独立的组件方式插入到同一个页面，各自独立工作（比如用"),s("code",[t._v("ams-block")]),t._v("搭建一个列表，用"),s("code",[t._v("ncform")]),t._v("搭建一个表单），是没有问题的。")]),t._v(" "),s("p",[t._v("（2）如果想在"),s("code",[t._v("ams-block")]),t._v("组件里插入一个"),s("code",[t._v("ncform")]),t._v("（比如，"),s("code",[t._v("ams-block")]),t._v("开发了一个弹窗，然后想在弹窗里面放一个"),s("code",[t._v("ncform")]),t._v("表单），这种方式暂时不支持。")]),t._v(" "),s("p",[t._v("结论："),s("code",[t._v("ncform")]),t._v("只是实现比较较单一的表单功能，作为独立工作和AMS互不影响。但是如果想要AMS完全兼容它的配置融合在一起相互作用，感觉没必要。原因："),s("code",[t._v("ncform")]),t._v("并不是一个很流行的产品（其实只是一个Vue组件），而且配置也说不上简单易用，AMS的简单配置可以达到同样的功能。硬要AMS兼容ncform反而增加用户上手成本（需要额外学习"),s("code",[t._v("ncform")]),t._v("）和增加AMS的复杂度，除非未来真有大量用户需求。")])]),t._v(" "),s("h3",{attrs:{id:"底层是否有支持react-angular的计划？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#底层是否有支持react-angular的计划？","aria-hidden":"true"}},[t._v("#")]),t._v(" 底层是否有支持React/Angular的计划？")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("目前AMS底层以Vue为主，考虑到即将发布的"),s("code",[t._v("Vue3.0")]),t._v("提供的"),s("code",[t._v("Function-based API")]),t._v("跟"),s("code",[t._v("AMS")]),t._v("的action思维结合的更好，考虑会优先支持Vue3.0+typescript，其他框架如React和Augular看用户使用规模和市场需求再做计划")])])])}),[],!1,null,null,null);a.default=n.exports}}]);