"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1881],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,N=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(N,o(o({ref:e},i),{},{components:a})):n.createElement(N,o({ref:e},i))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[u]="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97308:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u5728 Rainbond \u4e2d\u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4",keywords:["nacos","kubernetes","rainbond","\u4e91\u539f\u751f"],description:"\u5f53\u524d\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0 Rainbond \u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4\u3002"},o="Rainbond Nacos",p={permalink:"/zh-cn/blog/use-nacos-with-rainbond",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/use-nacos-with-rainbond.md",title:"\u5728 Rainbond \u4e2d\u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4",description:"\u5f53\u524d\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0 Rainbond \u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4\u3002",date:"2023-10-10T08:15:08.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:4.82,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5728 Rainbond \u4e2d\u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4",keywords:["nacos","kubernetes","rainbond","\u4e91\u539f\u751f"],description:"\u5f53\u524d\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0 Rainbond \u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 Nacos \u96c6\u7fa4\u3002"},prevItem:{title:"\u53cc\u5341\u4e00\u732e\u793c | Nacos Star\u7834\u4e24\u4e07\u7684\u56de\u987e\u4e0e\u5c55\u671b",permalink:"/zh-cn/blog/up-to-2w-star"},nextItem:{title:"\u5c0f\u7c73Nacos2.0\u6269\u7f29\u5bb9\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-cn/blog/xiaomi-scale"}},c={authorsImageUrls:[]},s=[{value:"Rainbond \u4e0e Nacos \u7684\u7ed3\u5408",id:"rainbond-\u4e0e-nacos-\u7684\u7ed3\u5408",level:2},{value:"\u5173\u4e8e\u5e94\u7528\u6a21\u7248",id:"\u5173\u4e8e\u5e94\u7528\u6a21\u7248",level:2}],i={toc:s},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f53\u524d\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/?channel=nacos"},"Rainbond")," \u4e00\u952e\u5b89\u88c5\u9ad8\u53ef\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io"},"Nacos")," \u96c6\u7fa4\u3002\u8fd9\u79cd\u65b9\u5f0f\u9002\u5408\u4e0d\u592a\u4e86\u89e3 Kubernetes\u3001\u5bb9\u5668\u5316\u7b49\u590d\u6742\u6280\u672f\u7684\u7528\u6237\u4f7f\u7528\uff0c\u964d\u4f4e\u4e86\u5728 Kubernetes \u4e2d\u90e8\u7f72 Nacos \u7684\u95e8\u69db\u3002"),(0,r.kt)("h1",{id:"\u80cc\u666f\u4fe1\u606f"},"\u80cc\u666f\u4fe1\u606f"),(0,r.kt)("h2",{id:"rainbond-\u4e0e-nacos-\u7684\u7ed3\u5408"},"Rainbond \u4e0e Nacos \u7684\u7ed3\u5408"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/?channel=nacos"},"Rainbond")," \u662f\u4e00\u6b3e\u6613\u4e8e\u4f7f\u7528\u7684\u5f00\u6e90\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\u3002\u501f\u52a9\u4e8e\u5b83\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u56fe\u5f62\u5316\u754c\u9762\u4e2d\u5b8c\u6210\u5fae\u670d\u52a1\u7684\u90e8\u7f72\u4e0e\u8fd0\u7ef4\u3002\u501f\u52a9 Kubernetes \u548c\u5bb9\u5668\u5316\u6280\u672f\u7684\u80fd\u529b\uff0c\u5c06\u6545\u969c\u81ea\u6108\u3001\u5f39\u6027\u4f38\u7f29\u7b49\u81ea\u52a8\u5316\u8fd0\u7ef4\u80fd\u529b\u8d4b\u80fd\u7ed9\u7528\u6237\u7684\u4e1a\u52a1\u3002"),(0,r.kt)("p",null,"Rainbond \u5185\u7f6e\u539f\u751f Service Mesh \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u540c\u65f6\u4e0e Spring Cloud\u3001Dubbo \u7b49\u5176\u4ed6\u5fae\u670d\u52a1\u6846\u67b6\u4e5f\u6709\u5f88\u597d\u7684\u6574\u5408\u4f53\u9a8c\u3002\u6545\u800c\u5927\u91cf\u7684 Rainbond \u7528\u6237\u4e5f\u53ef\u80fd\u662f Nacos \u5fae\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7684\u7528\u6237\u3002\u8fd9\u7c7b\u7528\u6237\u4e0d\u5fc5\u518d\u5173\u5fc3\u5982\u4f55\u90e8\u7f72 Nacos \u96c6\u7fa4\uff0cRainbond \u56e2\u961f\u5c06 Nacos \u5236\u4f5c\u6210\u4e3a\u53ef\u4ee5\u4e00\u952e\u90e8\u7f72\u7684\u5e94\u7528\u6a21\u7248\uff0c\u4f9b\u5f00\u6e90\u7528\u6237\u514d\u8d39\u4e0b\u8f7d\u5b89\u88c5\u3002\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u6781\u5927\u7684\u964d\u4f4e\u4e86\u7528\u6237\u4f7f\u7528 Nacos \u96c6\u7fa4\u7684\u90e8\u7f72\u8d1f\u62c5\uff0c\u76ee\u524d\u652f\u6301 1.4.2 \u4e0e 2.0.4 \u7248\u672c\u3002"),(0,r.kt)("h2",{id:"\u5173\u4e8e\u5e94\u7528\u6a21\u7248"},"\u5173\u4e8e\u5e94\u7528\u6a21\u7248"),(0,r.kt)("p",null,"\u5e94\u7528\u6a21\u7248\u662f\u9762\u5411 Rainbond \u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\u7684\u5b89\u88c5\u5305\uff0c\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u5b83\u4e00\u952e\u5b89\u88c5\u4e1a\u52a1\u7cfb\u7edf\u5230\u81ea\u5df1\u7684 Rainbond \u4e2d\u53bb\u3002\u65e0\u8bba\u8fd9\u4e2a\u4e1a\u52a1\u7cfb\u7edf\u591a\u4e48\u590d\u6742\uff0c\u5e94\u7528\u6a21\u7248\u90fd\u4f1a\u5c06\u5176\u62bd\u8c61\u6210\u4e3a\u4e00\u4e2a\u5e94\u7528\uff0c\u88f9\u631f\u7740\u5e94\u7528\u5185\u6240\u6709\u7ec4\u4ef6\u7684\u955c\u50cf\u3001\u914d\u7f6e\u4fe1\u606f\u4ee5\u53ca\u6240\u6709\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\u4e00\u5e76\u5b89\u88c5\u8d77\u6765\u3002"),(0,r.kt)("h1",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u90e8\u7f72\u597d\u7684 Rainbond \u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/quick-start/quick-install/?channel=nacos"},"\u5feb\u901f\u4f53\u9a8c\u7248\u672c")," \u53ef\u4ee5\u5728\u4e2a\u4eba PC \u73af\u5883\u4e2d\u4ee5\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u7684\u4ee3\u4ef7\u8fd0\u884c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e92\u8054\u7f51\u8fde\u63a5\u3002"))),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8bbf\u95ee\u5185\u7f6e\u7684\u5f00\u6e90\u5e94\u7528\u5546\u5e97"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9009\u62e9\u5de6\u4fa7\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u5e94\u7528\u5e02\u573a")," \u6807\u7b7e\u9875\uff0c\u5728\u9875\u9762\u4e2d\u5207\u6362\u5230 ",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u6e90\u5e94\u7528\u5546\u5e97")," \u6807\u7b7e\u9875\uff0c\u641c\u7d22\u5173\u952e\u8bcd ",(0,r.kt)("strong",{parentName:"p"},"nacos")," \u5373\u53ef\u627e\u5230 Nacos-cluster \u5e94\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-1.png",alt:"nacos-1"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e00\u952e\u5b89\u88c5"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u70b9\u51fb Nacos-cluster \u53f3\u4fa7\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5")," \u53ef\u4ee5\u8fdb\u5165\u5b89\u88c5\u9875\u9762\uff0c\u586b\u5199\u7b80\u5355\u7684\u4fe1\u606f\u4e4b\u540e\uff0c\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u786e\u5b9a")," \u5373\u53ef\u5f00\u59cb\u5b89\u88c5\uff0c\u9875\u9762\u81ea\u52a8\u8df3\u8f6c\u5230\u62d3\u6251\u89c6\u56fe\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-2.png",alt:"nacos-2"})),(0,r.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u62e9\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u56e2\u961f\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u81ea\u5efa\u7684\u5de5\u4f5c\u7a7a\u95f4\uff0c\u4ee5\u547d\u540d\u7a7a\u95f4\u9694\u79bb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 Nacos \u88ab\u90e8\u7f72\u5230\u54ea\u4e00\u4e2a K8s \u96c6\u7fa4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u5e94\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 Nacos \u88ab\u90e8\u7f72\u5230\u54ea\u4e00\u4e2a\u5e94\u7528\uff0c\u5e94\u7528\u4e2d\u5305\u542b\u6709\u82e5\u5e72\u6709\u5173\u8054\u7684\u7ec4\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9 Nacos \u7684\u7248\u672c\uff0c\u76ee\u524d\u53ef\u9009\u7248\u672c\u4e3a 1.4.2\u30012.0.4")))),(0,r.kt)("p",null,"\u7b49\u5f85\u51e0\u5206\u949f\u540e\uff0cNacos \u96c6\u7fa4\u5c31\u4f1a\u5b89\u88c5\u5b8c\u6210\uff0c\u5e76\u8fd0\u884c\u8d77\u6765\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-3.png",alt:"nacos-3"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6d4b\u8bd5"))),(0,r.kt)("p",null,"\u9700\u8981\u6267\u884c\u670d\u52a1\u6ce8\u518c\u7684\u5176\u4ed6\u5fae\u670d\u52a1\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u5efa\u7acb\u9762\u5411 Nacos \u7684",(0,r.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/use-manual/user-manual/component-connection/regist_and_discover"},"\u4f9d\u8d56\u5173\u7cfb"),"\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"${NACOS_HOST}:${NACOS_PORT}")," \u6765\u8fde\u63a5\u5230 Nacos \u96c6\u7fa4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u6ce8\u518c")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53d1\u5e03\u914d\u7f6e")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u914d\u7f6e")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://${NACOS_HOST}:${NACOS_PORT}/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n')))),(0,r.kt)("h1",{id:"\u9ad8\u7ea7\u7279\u6027"},"\u9ad8\u7ea7\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b89\u88c5\u800c\u6765\u7684 Nacos \u96c6\u7fa4\u4e2d\u5305\u542b 3 \u4e2a\u5b9e\u4f8b\uff0c\u5e76\u4e14\u901a\u8fc7\u521d\u59cb\u5316\u63d2\u4ef6\u81ea\u52a8\u5b8c\u6210\u81ea\u7ec4\u96c6\u7fa4\u5e76\u9009\u4e3e\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-4.png",alt:"nacos-4"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u96c6\u6210\u4e86 Mysql \u4f5c\u4e3a\u6570\u636e\u6e90\u3002\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," \u7ec4\u4ef6\u7684\u73af\u5883\u914d\u7f6e\u4e2d\u914d\u7f6e\u5982\u4e0b\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5207\u6362\u5230\u5176\u4ed6\u5916\u90e8\u6570\u636e\u6e90\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_HOST")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_SERVICE_DB_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u751f\u6210\u4e86 ",(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," \u7684\u6570\u636e\u6301\u4e45\u5316\u76ee\u5f55\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-5.png",alt:"nacos-5"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u4e86 ",(0,r.kt)("strong",{parentName:"li"},"Nacos-server-2.0.4")," \u7684\u5065\u5eb7\u68c0\u67e5\u673a\u5236\uff0c\u4fdd\u969c\u5b9e\u4f8b\u6545\u969c\u65f6\u81ea\u52a8\u4e0b\u7ebf\uff0c\u6062\u590d\u540e\u81ea\u52a8\u4e0a\u7ebf\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nacos-cluster/nacos-cluster-6.png",alt:"nacos-6"})))}m.isMDXComponent=!0}}]);