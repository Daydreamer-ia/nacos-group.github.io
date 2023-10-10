"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={},r="Nacos 1.1.0\u53d1\u5e03\uff0c\u652f\u6301\u7070\u5ea6\u914d\u7f6e\u548c\u5730\u5740\u670d\u52a1\u5668\u6a21\u5f0f",o={permalink:"/zh-cn/blog/nacos 1.1.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos 1.1.0.md",title:"Nacos 1.1.0\u53d1\u5e03\uff0c\u652f\u6301\u7070\u5ea6\u914d\u7f6e\u548c\u5730\u5740\u670d\u52a1\u5668\u6a21\u5f0f",description:"Nacos \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u914d\u7f6e\u4e2d\u5fc3\u548c\u670d\u52a1\u53d1\u73b0\u4ea7\u54c1\uff0c\u5f00\u6e90\u8ddd\u4eca\u5df2\u7ecf\u8d85\u8fc7\u4e00\u5e74\u7684\u65f6\u95f4\u3002\u672c\u6b211.1.0\u7684\u53d1\u5e03\uff0c\u5e26\u6765\u4e86\u8bb8\u591a\u91cd\u91cf\u7ea7\u7684\u7279\u6027\u66f4\u65b0\uff0c\u5305\u62ec\u7070\u5ea6\u914d\u7f6e\u7b49\u793e\u533a\u547c\u58f0\u5f88\u9ad8\u7684\u7279\u6027\uff0c\u4e0b\u9762\u4f1a\u4ecb\u7ecd1.1.0\u7248\u672c\u53d1\u5e03\u7684\u65b0\u7279\u6027\u548c\u6bcf\u4e2a\u7279\u6027\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",date:"2023-10-10T08:15:08.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:14.555,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Nacos\u5f00\u6e90\u4e4b\u590f2023\uff0c\u8d21\u732e\u793e\u533a\u8d62\u53d612000\u5956\u91d1",permalink:"/zh-cn/blog/iscas2023"},nextItem:{title:"Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",permalink:"/zh-cn/blog/nacos 1.1.4"}},s={authorsImageUrls:[]},p=[],c={toc:p},g="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nacos \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u914d\u7f6e\u4e2d\u5fc3\u548c\u670d\u52a1\u53d1\u73b0\u4ea7\u54c1\uff0c\u5f00\u6e90\u8ddd\u4eca\u5df2\u7ecf\u8d85\u8fc7\u4e00\u5e74\u7684\u65f6\u95f4\u3002\u672c\u6b211.1.0\u7684\u53d1\u5e03\uff0c\u5e26\u6765\u4e86\u8bb8\u591a\u91cd\u91cf\u7ea7\u7684\u7279\u6027\u66f4\u65b0\uff0c\u5305\u62ec\u7070\u5ea6\u914d\u7f6e\u7b49\u793e\u533a\u547c\u58f0\u5f88\u9ad8\u7684\u7279\u6027\uff0c\u4e0b\u9762\u4f1a\u4ecb\u7ecd1.1.0\u7248\u672c\u53d1\u5e03\u7684\u65b0\u7279\u6027\u548c\u6bcf\u4e2a\u7279\u6027\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,i.kt)("a",{name:"CQSXH"}),"## \u5347\u7ea7\u6307\u5357",(0,i.kt)("a",{name:"6l7mA"}),"#### Server\u7aef 0.8.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff1a",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u89e3\u538b\u5b89\u88c5\u5305\u540e\u66ff\u6362{nacos.home}/target/nacos-server.jar"),(0,i.kt)("li",{parentName:"ol"},"\u5220\u9664{nacos.home}/plugins/cmdb/\u53ca{nacos.home}/plugins/health/\u4e0b\u7684\u6240\u6709\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u9010\u53f0\u91cd\u542fNacos Server\u5373\u53ef")),(0,i.kt)("p",null,"0.8.0\u4ee5\u4e0b\u7248\u672c\uff0c\u5148\u5347\u7ea7\u52301.0.0\u7248\u672c\u3002"),(0,i.kt)("a",{name:"yfczA"}),"#### Client\u7aef \u8bf7\u4f7f\u7528\u6700\u65b0\u76841.1.1\u7248\u672c\uff0c\u4fee\u590d\u4e861.1.0\u7248\u672c\u7684\u4e00\u4e2a\u5ba2\u6237\u7aef\u7248\u672c\u663e\u793a\u95ee\u9898\u3002",(0,i.kt)("a",{name:"CfMxA"}),"## \u65b0\u589e\u7279\u6027",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5bfc\u5165\u5bfc\u51fa\u53ca\u914d\u7f6e\u540c\u6b65\xa0"),(0,i.kt)("li",{parentName:"ul"},"\u5730\u5740\u670d\u52a1\u5668\u6a21\u5757"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8ba2\u9605\u8005\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u5fc3\u8df3\u5468\u671f"),(0,i.kt)("li",{parentName:"ul"},"Config\u76d1\u542c\u5668\u4f18\u5316"),(0,i.kt)("li",{parentName:"ul"},"Nacos Go SDK\u53d1\u5e03")),(0,i.kt)("a",{name:"LYY0I"}),"### \u7070\u5ea6\u914d\u7f6e @yanlinly\xa0@loadchange",(0,i.kt)("p",null,"\u7070\u5ea6\u914d\u7f6e\u6307\u7684\u662f\u6307\u5b9a\u90e8\u5206\u5ba2\u6237\u7aefIP\u8fdb\u884c\u65b0\u914d\u7f6e\u7684\u4e0b\u53d1\uff0c\u5176\u4f59\u5ba2\u6237\u7aef\u914d\u7f6e\u4fdd\u6301\u4e0d\u53d8\uff0c\u7528\u4ee5\u9a8c\u8bc1\u65b0\u914d\u7f6e\u5bf9\u5ba2\u6237\u7aef\u7684\u5f71\u54cd\uff0c\u4fdd\u8bc1\u914d\u7f6e\u7684\u5e73\u7a33\u53d1\u5e03\u3002\u7070\u5ea6\u914d\u7f6e\u662f\u751f\u4ea7\u73af\u5883\u4e2d\u4e00\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u529f\u80fd\uff0c\u5bf9\u4e8e\u4fdd\u8bc1\u751f\u4ea7\u73af\u5883\u7684\u7a33\u5b9a\u6027\u975e\u5e38\u91cd\u8981\u3002\u57281.1.0\u4e2d\uff0cNacos\u652f\u6301\u4e86\u4ee5IP\u4e3a\u7c92\u5ea6\u7684\u7070\u5ea6\u914d\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u5217\u8868\u9875\u9762\uff0c\u70b9\u51fb\u67d0\u4e2a\u914d\u7f6e\u7684\u201c\u7f16\u8f91\u914d\u7f6e\u201d\u6309\u94ae\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562579955002-bc2de409-26a4-43b7-8cdb-4bc83653ce8a.png#align=left&display=inline&height=262&name=image.png&originHeight=524&originWidth=2506&size=183572&status=done&width=1253",alt:"image.png"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u52fe\u9009\u201cBeta\u53d1\u5e03\u201d\uff0c\u5728\u6587\u672c\u6846\u91cc\u586b\u5165\u8981\u4e0b\u53d1\u914d\u7f6e\u914d\u7f6e\u7684IP\uff0c\u591a\u4e2aIP\u7528\u9017\u53f7\u5206\u9694\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562580241038-085504e7-b63a-42ec-9304-08256ae3beba.png#align=left&display=inline&height=429&name=image.png&originHeight=858&originWidth=1766&size=148534&status=done&width=883",alt:"image.png"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u4fee\u6539\u914d\u7f6e\u5185\u5bb9\uff0c\u70b9\u51fb\u201c\u53d1\u5e03Beta\u201d\u6309\u94ae\uff0c\u5373\u53ef\u5b8c\u6210\u7070\u5ea6\u914d\u7f6e\u7684\u53d1\u5e03\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562580334216-78ac746b-e0de-4c33-b67d-bde89ef13f55.png#align=left&display=inline&height=527&name=image.png&originHeight=1054&originWidth=2506&size=179061&status=done&width=1253",alt:"image.png"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u201c\u53d1\u5e03Beta\u201d\u540e\uff0c\u201c\u53d1\u5e03Beta\u201d\u6309\u94ae\u53d8\u7070\uff0c\u6b64\u65f6\u53ef\u4ee5\u9009\u62e9\u201c\u505c\u6b62Beta\u201d\u6216\u8005\u201c\u53d1\u5e03\u201d\u3002\u201c\u505c\u6b62Beta\u201d\u8868\u793a\u53d6\u6d88\u505c\u6b62\u7070\u5ea6\u53d1\u5e03\uff0c\u5f53\u524d\u7070\u5ea6\u53d1\u5e03\u914d\u7f6e\u7684IP\u5217\u8868\u548c\u914d\u7f6e\u5185\u5bb9\u90fd\u4f1a\u5220\u9664\uff0c\u9875\u9762\u56de\u5230\u6b63\u5e38\u53d1\u5e03\u7684\u6837\u5f0f\u3002\u201c\u53d1\u5e03\u201d\u8868\u793a\u5c06\u7070\u5ea6\u914d\u7f6e\u5728\u6240\u6709\u5ba2\u6237\u7aef\u751f\u6548\uff0c\u4e4b\u524d\u7684\u914d\u7f6e\u4e5f\u4f1a\u88ab\u8986\u76d6\uff0c\u540c\u65f6\u9875\u9762\u56de\u5230\u6b63\u5e38\u53d1\u5e03\u7684\u6837\u5f0f\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562595148249-e64b0585-525d-450d-a87c-6e3fd194351c.png#align=left&display=inline&height=489&name=image.png&originHeight=978&originWidth=2512&size=184032&status=done&width=1256",alt:"image.png"})),(0,i.kt)("a",{name:"1t0AL"}),"### \u914d\u7f6e\u5bfc\u5165\u5bfc\u51fa\u53ca\u914d\u7f6e\u540c\u6b65 @KeRan213539",(0,i.kt)("p",null,"\u914d\u7f6e\u7ba1\u7406\u7684\u53e6\u4e00\u4e2a\u5e38\u89c1\u9700\u6c42\u662f\u80fd\u591f\u5c06\u4e00\u4e2a\u96c6\u7fa4\u7684\u914d\u7f6e\u540c\u6b65\u5230\u53e6\u5916\u4e00\u4e2a\u96c6\u7fa4\uff0c\u6216\u8005\u4ece\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u540c\u6b65\u5230\u53e6\u5916\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u6765\u81ea\u793e\u533a\u7684\u8d21\u732e\u8005KeRan213539\u8d21\u732e\u8fd9\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u529f\u80fd\uff0c\u5177\u4f53\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\u3002\u53ef\u4ee5\u6839\u636e\u67e5\u8be2\u6761\u4ef6\uff0c\u5c06\u5f53\u671f\u67e5\u8be2\u51fa\u7684\u6240\u6709\u7ed3\u679c\u6253\u5305\u4e3a\u4e00\u4e2a\u6587\u4ef6\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562596769546-89546d16-a764-488c-8f87-b1d038a207d2.png#align=left&display=inline&height=415&name=image.png&originHeight=830&originWidth=2526&size=368179&status=done&width=1263",alt:"image.png"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u9009\u4e2d\u7684\u914d\u7f6e\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597197759-8cefeff9-13f6-4ef1-8c84-570efcd268e0.png#align=left&display=inline&height=367&name=image.png&originHeight=734&originWidth=2506&size=412720&status=done&width=1253",alt:"image.png"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u914d\u7f6e\uff0c\u53ef\u4ee5\u9009\u62e9\u76f8\u540c\u914d\u7f6e\u7684\u5904\u7406\u7b56\u7565\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597316659-9b4e673b-e74a-47ca-b4f6-a95ed63aebfb.png#align=left&display=inline&height=443&name=image.png&originHeight=886&originWidth=2500&size=472512&status=done&width=1250",alt:"image.png"})),(0,i.kt)("p",null,"\u5f53\u53d1\u73b0\u6709\u76f8\u540c\u7684\u914d\u7f6e\u65f6\uff0c\u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a\uff1a",(0,i.kt)("br",null),(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597345803-2cb1c6b2-aed5-41af-9e18-c43fd2fc3822.png#align=left&display=inline&height=478&name=image.png&originHeight=956&originWidth=2370&size=427447&status=done&width=1185",alt:"image.png"})),(0,i.kt)("p",null,"\u540c\u65f6\u5982\u679c\u5bfc\u5165\u7684\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u4e5f\u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a\uff1a",(0,i.kt)("br",null),(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597543119-019c1e1d-0712-4d1e-9f53-bc8e01156290.png#align=left&display=inline&height=398&name=image.png&originHeight=796&originWidth=2508&size=411258&status=done&width=1254",alt:"image.png"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u540c\u6b65\uff0c\u9009\u53d6\u60f3\u8981\u540c\u6b65\u7684\u914d\u7f6e\uff0c\u70b9\u51fb\u201c\u514b\u9686\u201d\uff0c\u7136\u540e\u518d\u9009\u62e9\u8981\u540c\u6b65\u7684\u76ee\u6807\u547d\u540d\u7a7a\u95f4\uff0c\u5c31\u53ef\u4ee5\u5c06\u914d\u7f6e\u540c\u6b65\u5230\u5bf9\u5e94\u7684\u547d\u540d\u7a7a\u95f4\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597665286-c5427451-62e6-4a47-b819-644d9709d089.png#align=left&display=inline&height=470&name=image.png&originHeight=940&originWidth=2516&size=499705&status=done&width=1258",alt:"image.png"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562597707334-4766ffef-cf8e-4791-a634-0857ac3eb40a.png#align=left&display=inline&height=466&name=image.png&originHeight=932&originWidth=2536&size=427102&status=done&width=1268",alt:"image.png"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u5bfc\u5165\u5bfc\u51fa\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e\u3002\u5747\u4e3azip\u538b\u7f29\u5305\uff0c\u538b\u7f29\u5305\u5185\u6709\u591a\u4e2a\u76ee\u5f55\uff0c\u76ee\u5f55\u540d\u4e3a\u914d\u7f6e\u7684group\uff0c\u76ee\u5f55\u4e0b\u6709\u5177\u4f53\u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u4e3a\u914d\u7f6e\u7684dataId\uff0c\u6bcf\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\u4e3a\u914d\u7f6e\u5177\u4f53\u7684\u5185\u5bb9\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562654528090-ab113140-c7d9-4eda-8a67-051a9f13f591.png#align=left&display=inline&height=75&name=image.png&originHeight=81&originWidth=635&size=34863&status=done&width=591",alt:"image.png"})),(0,i.kt)("a",{name:"a9Rf1"}),"### \u5730\u5740\u670d\u52a1\u5668\u6a21\u5757 @pbting",(0,i.kt)("p",null,"1.1.0\u7684\u5b89\u88c5\u5305\u5217\u8868\u91cc\u591a\u4e86\u4e00\u4e2anacos-address-server-1.1.0\u3002\u8fd9\u4e2a\u5b89\u88c5\u5305\u7684\u4f5c\u7528\u662f\u4f5c\u4e3a\u5730\u5740\u670d\u52a1\u5668\u6a21\u5757\uff0c\u5355\u72ec\u90e8\u7f72\u3002\u5173\u4e8e\u5730\u5740\u670d\u52a1\u5668\u7684\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003Nacos\u5b98\u7f51",(0,i.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/blog/address-server.html"},"\u5730\u5740\u670d\u52a1\u5668\u6587\u7ae0"),"\uff0c\u8fd9\u91cc\u53ea\u505a\u4e00\u4e2a\u7b80\u5355\u7684\u8bf4\u660e\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u4e2d\u95f4\u4ef6\u4ea7\u54c1\uff0c\u5ba2\u6237\u7aef\u5bfb\u5740\u670d\u52a1\u7aef\u7684\u65b9\u5f0f\u90fd\u662f\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u670d\u52a1\u7aef\u7684\u5730\u5740\u5217\u8868\uff0c\u8fd9\u6837\u6709\u4e00\u4e2a\u7f3a\u70b9\u662f\u5f53\u670d\u52a1\u7aef\u7684\u5730\u5740\u53d1\u751f\u53d8\u52a8\u65f6\uff0c\u5ba2\u6237\u7aef\u65e0\u6cd5\u5b9e\u65f6\u7684\u611f\u77e5\u5230\uff0c\u4e5f\u65e0\u6cd5\u52a8\u6001\u8c03\u6574\u8bbf\u95ee\u7684\u670d\u52a1\u7aef\u96c6\u7fa4\u3002\u800c\u5728\u963f\u91cc\u5df4\u5df4\u7684\u4e00\u79cd\u6bd4\u8f83\u5e38\u89c1\u7684\u5ba2\u6237\u7aef\u5bfb\u5740\u670d\u52a1\u7aef\u7684\u65b9\u5f0f\u662f\u5730\u5740\u670d\u52a1\u5668\u3002\u7b80\u5355\u7684\u8bf4\u5c31\u662f\u90e8\u7f72\u5355\u72ec\u7684\u5730\u5740\u670d\u52a1\u5668\uff0c\u5730\u5740\u670d\u52a1\u5668\u63d0\u4f9b\u63a5\u53e3\uff0c\u83b7\u53d6\u76f8\u5173\u4e2d\u95f4\u4ef6\u4ea7\u54c1\u670d\u52a1\u7aef\u96c6\u7fa4\u7684\u5730\u5740\u3002\u7531\u4e8e\u5730\u5740\u670d\u52a1\u5668\u529f\u80fd\u6bd4\u8f83\u5355\u4e00\uff0c\u56e0\u6b64\u7a33\u5b9a\u6027\u6bd4\u8f83\u5bb9\u6613\u4fdd\u8bc1\u3002\u5ba2\u6237\u7aef\u53ea\u9700\u8981\u914d\u7f6e\u5730\u5740\u670d\u52a1\u5668\u7684\u57df\u540d\uff0c\u901a\u8fc7\u5730\u5740\u670d\u52a1\u5668\u83b7\u53d6\u60f3\u8981\u8bbf\u95ee\u7684\u4e2d\u95f4\u4ef6\u7684\u96c6\u7fa4\u5730\u5740\uff0c\u8fd9\u6837\u65e2\u4fdd\u8bc1\u80fd\u591f\u611f\u77e5\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u7684\u52a8\u6001\u53d8\u5316\uff0c\u4e5f\u80fd\u591f\u4e3a\u5ba2\u6237\u7aef\u914d\u7f6e\u66f4\u7075\u6d3b\u7684\u96c6\u7fa4\u8bbf\u95ee\u7b56\u7565\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u4ecb\u7ecd\u5730\u5740\u670d\u52a1\u5668\u6a21\u5757\u7684\u4f7f\u7528\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u5730\u5740\u670d\u52a1\u5668"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u5b89\u88c5\u5305\u5217\u8868\u91cc\u7684nacos-address-server.tar.gz\u6216\u8005nacos-address-server.zip\u89e3\u538b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u673a\u6a21\u5f0f\u542f\u52a8\uff1a\u6267\u884c sh bin/startup.sh -m standalone -s nacos-address \u4ee5 standalone \u7684\u65b9\u5f0f\u542f\u52a8 address server\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u6a21\u5f0f\u542f\u52a8\uff1a\u5728 conf \u76ee\u5f55\u4e0b \u5c06 cluster.conf.example \u91cd\u540d\u540d\u4e3a cluster.conf\uff0c\u7136\u540e\u52a0\u5165\u5176\u5b83 server \u7684\u8282\u70b9\u3002\u52a0\u5b8c\u540e\uff0c\u6267\u884c sh bin/startup.sh -s nacos-address \u5373\u53ef\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5730\u5740\u670d\u52a1\u5668\u57df\u540d\uff1a\u5c06\u90e8\u7f72\u597d\u7684\u5730\u5740\u670d\u52a1\u5668\u96c6\u7fa4IP\u6302\u8f7d\u5230\u4e00\u4e2a\u57df\u540d\u4e0b\uff0c\u6211\u4eec\u5047\u8bbe\u4e3aaddress.nacos.com"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5730\u5740\u670d\u52a1\u5668\u4e0a\u914d\u7f6eNacos\u96c6\u7fa4\u7684\u5730\u5740\u5217\u8868\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"# Add IP to nacos cluster:\ncurl -X POST '$ADDRESS_SERVER:8080/nacos/v1/as/nodes?ips=1.1.1.1:8848,2.2.2.2:8848,3.3.3.3:8848'\n\n# Remove IP from nacos cluster:\ncurl -X DELETE '$ADDRESS_SERVER:8080/nacos/v1/as/nodes?ips=1.1.1.1:8848,2.2.2.2:8848,3.3.3.3:8848'\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u914d\u7f6eendpoint\u4e3a\u8be5\u5730\u5740\u670d\u52a1\u5668\u96c6\u7fa4\u57df\u540d\uff1a\u5728\u6784\u9020Nacos\u5ba2\u6237\u7aef\u65f6\uff0c\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9aserverAddr\u6765\u8bbf\u95eeNacos\u96c6\u7fa4\u5916\uff0c\u8fd8\u53ef\u4ee5\u914d\u7f6eendpoint\u5c5e\u6027\uff0c\u5c06\u8fd9\u4e2a\u5c5e\u6027\u7684\u503c\u8bbe\u4e3aaddress.nacos.com\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8fbe\u5230\u548c\u914d\u7f6eserverAddr\u76f8\u540c\u7684\u6548\u679c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u6e90\u7801\u6784\u5efa\u5730\u5740\u670d\u52a1\u5668\u5b89\u88c5\u5305\uff0c\u5728Nacos\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"mvn -Prelease-address clean install -Dmaven.test.skip=true\n")),(0,i.kt)("p",null,"\u5b89\u88c5\u5305\u4f1a\u751f\u6210\u5728distribution/target\u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("a",{name:"6COIS"}),"### \u670d\u52a1\u8ba2\u9605\u8005\u5217\u8868 @nicholas2015",(0,i.kt)("p",null,"\u670d\u52a1\u8ba2\u9605\u8005\u5217\u8868\u662f1.1.0\u589e\u52a0\u7684\u53e6\u5916\u4e00\u4e2a\u529f\u80fd\uff0c\u5c31\u662f\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e0a\u67e5\u770b\u4e00\u4e2a\u670d\u52a1\u7684\u6d88\u8d39\u8005\uff0c\u6267\u884c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u5217\u8868\u9875\u9762\uff0c\u627e\u5230\u60f3\u8981\u67e5\u8be2\u8ba2\u9605\u8005\u7684\u670d\u52a1\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562640498681-5ab822e5-e293-4c17-9abe-63d541cb8058.png#align=left&display=inline&height=266&name=image.png&originHeight=532&originWidth=2504&size=149955&status=done&width=1252",alt:"image.png"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u8ba2\u9605\u8005\u5217\u8868\u9875\u9762\uff0c\u5728\u201c\u670d\u52a1\u540d\u79f0\u201d\u8f93\u5165\u6846\u8f93\u5165\u60f3\u8981\u67e5\u8be2\u7684\u670d\u52a1\u540d\uff0c\u5728\u201c\u5206\u7ec4\u540d\u79f0\u201d\u8f93\u5165\u6846\u8f93\u5165\u670d\u52a1\u7684\u5206\u7ec4\u540d\uff08\u9ed8\u8ba4\u4e3aDEFAULAT_GROUP\uff09\uff0c\u70b9\u51fb\u201c\u67e5\u8be2\u201d\u540e\uff0c\u5f97\u5230\u8ba2\u9605\u8005\u7684\u4fe1\u606f\uff0c\u5305\u62ecIP\u548c\u7aef\u53e3\u3001\u5ba2\u6237\u7aef\u7248\u672c\u548c\u5e94\u7528\u540d\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562640552803-6fa89abd-a5c0-4ecd-90ce-cd9e6eacab1c.png#align=left&display=inline&height=280&name=image.png&originHeight=560&originWidth=2492&size=120344&status=done&width=1246",alt:"image.png"})),(0,i.kt)("a",{name:"Gw6wo"}),"### \u670d\u52a1\u81ea\u5b9a\u4e49\u5fc3\u8df3\u5468\u671f @lanCao",(0,i.kt)("p",null,"\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5ba2\u6237\u7aef\u6ce8\u518c\u670d\u52a1\u65f6\uff0c\u4e0d\u80fd\u81ea\u5b9a\u4e49\u4e0a\u62a5\u5fc3\u8df3\u7684\u5468\u671f\u4ee5\u53ca\u5ba2\u6237\u7aef\u4e0b\u7ebf\u65f6\u81ea\u52a8\u5220\u9664\u5b9e\u4f8b\u7684\u95f4\u9694\u3002\u57281.1.0\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86\u8fd9\u4e2a\u7279\u6027\uff0c\u5e94\u7528\u53ef\u4ee5\u5728\u6ce8\u518c\u65f6\uff0c\u901a\u8fc7\u8bbe\u7f6e\u5b9e\u4f8b\u7684metadata\uff0c\u6765\u6307\u5b9a\u5fc3\u8df3\u5468\u671f\u3001\u5065\u5eb7\u68c0\u67e5\u8fc7\u671f\u65f6\u95f4\u53ca\u5220\u9664\u5b9e\u4f8b\u65f6\u95f4\u3002\u5177\u4f53\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String serviceName = randomDomainName();\n\nInstance instance = new Instance();\ninstance.setIp("1.1.1.1");\ninstance.setPort(9999);\nMap<String, String> metadata = new HashMap<String, String>();\n// \u8bbe\u7f6e\u5fc3\u8df3\u7684\u5468\u671f\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u8fd9\u91cc\u5c06\u5fc3\u8df3\u95f4\u9694\u8bbe\u7f6e\u4e3a3\u79d2\uff1a\nmetadata.put(PreservedMetadataKeys.HEART_BEAT_INTERVAL, "3000");\n// \u8bbe\u7f6e\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u8fd9\u91cc\u5c06\u5fc3\u8df3\u8d85\u65f6\u65f6\u95f4\u8bbe\u4e3a6\u79d2\uff0c\n// \u5373\u670d\u52a1\u7aef6\u79d2\u6536\u4e0d\u5230\u5ba2\u6237\u7aef\u5fc3\u8df3\uff0c\u4f1a\u5c06\u8be5\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u5b9e\u4f8b\u8bbe\u4e3a\u4e0d\u5065\u5eb7\uff1a\nmetadata.put(PreservedMetadataKeys.HEART_BEAT_TIMEOUT, "6000");\n// \u8bbe\u7f6e\u5b9e\u4f8b\u5220\u9664\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u8fd9\u91cc\u5c06\u5b9e\u4f8b\u5220\u9664\u8d85\u65f6\u65f6\u95f4\u8bbe\u4e3a9\u79d2\uff0c\n// \u5373\u670d\u52a1\u7aef9\u79d2\u6536\u4e0d\u5230\u5ba2\u6237\u7aef\u5fc3\u8df3\uff0c\u4f1a\u5c06\u8be5\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u5b9e\u4f8b\u5220\u9664\uff1a\nmetadata.put(PreservedMetadataKeys.IP_DELETE_TIMEOUT, "9000");\ninstance.setMetadata(metadata);\n\nnaming.registerInstance(serviceName, instance);\n')),(0,i.kt)("a",{name:"QFEGE"}),"### Config \u76d1\u542c\u5668\u7684\u4f18\u5316 @chuntaojun",(0,i.kt)("br",null),"\u5f53\u5b58\u5728\u7a0b\u5e8f\u542f\u52a8\u4e4b\u521d\uff0c\u5982\u679c\u7528\u6237\u901a\u8fc7`ConfigService.getConfig`\u83b7\u53d6\u914d\u7f6e\u7684\u540c\u65f6\uff0c\u53c8\u6ce8\u518c\u4e86\u76d1\u542c\u5668\uff0c\u90a3\u4e48\u4f1a\u5b58\u5728\u76d1\u542c\u5668\u518d\u6b21\u901a\u77e5\u7528\u6237\u521a\u521a\u83b7\u53d6\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u56e0\u6b64\u5728`version 1.1.0`\u7248\u672c\u4e2d\uff0c\u589e\u52a0\u4e86\u65b0\u7684\u63a5\u53e3\u4ee5\u53ca\u4e00\u4e2a\u7cfb\u7edf\u53c2\u6570\uff08\u4f7f\u7528\u6237\u65e0\u9700\u4fee\u6539\u73b0\u6709\u4ee3\u7801\uff09 ```java String getConfigAndSignListener(String dataId, String group, long timeoutMs, Listener listener) throws NacosException; ```",(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u5728\u83b7\u53d6\u914d\u7f6e\u540e\uff0c\u968f\u5373\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u907f\u514d\u76d1\u542c\u5668\u901a\u77e5\u7528\u6237\u521a\u521a\u624d\u62c9\u53d6\u7684\u914d\u7f6e\u4fe1\u606f",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"p"},"nacos.enableRemoteSyncConfig=true | false"),(0,i.kt)("br",null),"\u8bbe\u7f6e\u8be5\u7cfb\u7edf\u53c2\u6570\uff0c\u5c06\u5728\u76d1\u542c\u5668\u6ce8\u518c\u65f6\u4e3b\u52a8\u53bb\u5411\u8fdc\u7aef\u62c9\u53d6\u5f53\u524d\u6700\u65b0\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f46\u662f\u5b58\u5728\u4e00\u5b9a\u7684\u7f51\u7edc\u5f00\u9500\uff0c\u56e0\u6b64\u5efa\u8bae\u7528\u6237\u91c7\u53d6\u63a5\u53e3\u7684\u65b9\u5f0f"),(0,i.kt)("a",{name:"unUgM"}),"### Nacos Go SDK @lzp0412\xa0@peggypig @atlanssia",(0,i.kt)("p",null,"Nacos\u4e0a\u5468\u8fd8\u53d1\u5e03\u4e86Go\u8bed\u8a00\u7684SDK\uff0c\u76ee\u524d\u53d1\u5e03\u4e860.1.0-beta\u7248\u672c\uff0c\u4ed3\u5e93\u5730\u5740\u662f\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-go"},"https://github.com/nacos-group/nacos-sdk-go"),"\u3002Nacos Go SDK\u662f\u5355\u72ec\u7684\u4ed3\u5e93\uff0c\u7531Nacos Committer\u53c2\u4e0e\u7ef4\u62a4\uff0c\u5728\u4ee3\u7801\u4e0a\u4e0d\u5c5e\u4e8eNacos 1.1.0\u3002\u5728\u6b64\u4e5f\u975e\u5e38\u6b22\u8fce\u793e\u533a\u7684Go\u8bed\u8a00\u9ad8\u624b\uff0c\u53c2\u4e0eNacos Go SDK\u7684\u6f14\u8fdb\u3002"),(0,i.kt)("a",{name:"0LhDq"}),"## \u5982\u4f55\u5171\u5efa",(0,i.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u4f60\u9700\u8981\u79ef\u6781\u53c2\u4e0eNacos\u793e\u533a\u3002\u5982\u679c\u60a8\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u5728\u4ee3\u7801\u4e2d\u53d1\u73b0\u9519\u8bef\uff0c\u6216\u60f3\u8981\u65b0\u529f\u80fd\u6216\u60f3\u8981\u63d0\u4f9b\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/Nacos/issues/new"},"\u5728GitHub\u4e0a\u521b\u5efa\u4e00\u4e2aissues"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5f00\u59cb\u7740\u624b\uff0c\u53ef\u4ee5\u9009\u62e9github\u4ed3\u5e93\u4e2d\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684issues\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/good%20first%20issue"},"good first issue"),"\uff1a\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u662f\u975e\u5e38\u597d\u7684\u5165\u95e8issues\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/labels/contribution%20%E6%AC%A2%E8%BF%8E"},"contribution welcome"),"\uff1a\u975e\u5e38\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u548c\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5757\uff0c\u4f46\u76ee\u524d\u7f3a\u5c11\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u8d21\u732e\u8005\u6765\u8d21\u732e\u3002")),(0,i.kt)("a",{name:"7ddae8a4"}),"## \u84ec\u52c3\u53d1\u5c55\u7684 Nacos \u793e\u533a",(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand\n\u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u7528\u6237\u5173\u6ce8\u548c\u52a0\u5165 Nacos \u793e\u533a")),(0,i.kt)("p",null,"Nacos \u793e\u533a\u6b63\u5728\u84ec\u52c3\u53d1\u5c55\uff0c\u622a\u6b62\u5230\u53d1\u6587\u4e3a\u6b62\uff0cNacos \u5df2\u7ecf\u6709 9 \u4e2a\u5fae\u4fe1\u7fa4\uff0c\u5176\u4e2d 7 \u4e2a\u5df2\u6ee1\u5458\uff0c1\u4e2aQQ\u7fa4\uff0c1\u4e2a\u9489\u9489\u7fa4\uff0c\u5173\u6ce8 Nacos \u7684\u793e\u533a\u4eba\u6570\u5df2\u7ecf\u8fd15000\u4eba\uff0c\u5728 Nacos \u7fa4\u91cc\u8ddf \u201c\u9053\uff08\u57fa\uff09\u53cb\u201d \u5207\u78cb\u6280\u672f\uff0c\u4ea4\u6d41\u7ecf\u9a8c\uff0c\u62db\u8058\u4ea4\u53cb\uff0c\u62a2\u62a2\u7ea2\u5305...\u4e0d\u4ea6\u4e50\u4e4e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1560397428130-a878b99a-665f-413d-9e69-ec36b13f731f.png#align=left&display=inline&height=431&name=image.png&originHeight=420&originWidth=698&size=144746&status=done&width=716",alt:"image.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4ee3\u7801\u8d21\u732e\u8005\u52a0\u5165 Nacos \u793e\u533a")),(0,i.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u4e0e\u4ee3\u7801\u8d21\u732e\u8005\u66f4\u65b9\u4fbf\u7684\u4ea4\u6d41\uff0c\u6211\u4eec\u7ec4\u5efa\u4e86\u9489\u9489\u7fa4\u201cNacos\u793e\u533a\u6838\u5fc3\u8d21\u732e\u5c0f\u7ec4\uff08",(0,i.kt)("strong",{parentName:"p"},"23335652"),"\uff09\u201d\uff0c\u8fd9\u4e2a\u7fa4\u91cc\u90fd\u662f\u90fd\u662f\u5bf9Nacos\u8d21\u732e\u975e\u5e38\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\uff0c\u5982\u679c\u4f60\u4e5f\u60f3\u6210\u4e3aNacos\u8d21\u732e\u8005\uff0c\u751a\u81f3\u6210\u4e3aCommitter\uff0c\u6b22\u8fce\u52a0\u5165\u8fd9\u4e2a\u7fa4\u548c\u7fa4\u91cc\u7684\u5c0f\u4f19\u4f34\u4e00\u8d77\u5207\u78cb\uff01"),(0,i.kt)("p",null,"\u5728Nacos\u5b98\u7f51\xa0",(0,i.kt)("a",{parentName:"p",href:"http://nacos.io/"},"nacos.io"),"\xa0\u4e2d\uff0c\u5df2\u7ecf\u6dfb\u52a0",(0,i.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/nacos-dev.html"},"\u56e2\u961f\u4ecb\u7ecd\u9875"),"\uff0c\u91cc\u9762\u5305\u62ecNacos\u7684\u5f00\u53d1\u8005\u89d2\u8272\u5b9a\u4e49\u53ca\u804c\u8d23\u5212\u5206\uff0c\u540c\u65f6\u5305\u542b\u4e86Naocs\u7684\u5f00\u53d1\u8005\u4eec\u4ecb\u7ecd\u548c\u9753\u7167\u54e6\uff0c\u6b22\u8fce\u5927\u5bb6\u52a0\u5165Nacos\u793e\u533a\uff0c\u8d21\u732e\u793e\u533a\u3002\u7528Apache\u7684\u8bdd\u8bf4\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u201c\u793e\u533a\u9ad8\u4e8e\u4ee3\u7801\u201d!")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15914/1542704700864-a9d54856-9bf6-4176-b449-c13fa02c5800.png#align=left&display=inline&height=387&linkTarget=_blank&originHeight=888&originWidth=1716&width=748#align=left&display=inline&height=386&originHeight=888&originWidth=1716&status=done&width=746",alt:null})),(0,i.kt)("a",{name:"2461e1c0"}),'## \u65b0\u4eba\u65f6\u523b - "\u4ec0\u4e48\u662fNacos\uff1f"',(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd8\u4e0d\u77e5\u9053\u4ec0\u4e48\u662fNacos? \u6ca1\u5173\u7cfb\uff0c\u5728github\u4e0astar\u4e00\u4e0b\u8ddf\u7a0b\u5e8f\u733f\u5144\u5f1f\u6253\u4e2a\u62db\u547c\u5427!!")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"Nacos"),"\xa0\u662f\u963f\u91cc\u5df4\u5df4\u4e8e2018\u5e747\u6708\u4efd\u65b0\u5f00\u6e90\u7684\u9879\u76ee\uff0cNacos\u7684\u4e3b\u8981\u613f\u666f\u662f\u671f\u671b\u901a\u8fc7\u63d0\u4f9b\u6613\u7528\u7684\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e\u7ba1\u7406"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406"),"\xa0\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1562644065145-5f315c7d-b48a-453d-9718-20fb9121dd14.png#align=left&display=inline&height=374&name=image.png&originHeight=748&originWidth=1722&size=456424&status=done&width=861",alt:"image.png"})),(0,i.kt)("p",null,"github\u9879\u76ee\u5730\u5740\u5728\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"\u8fd9\u91cc")),(0,i.kt)("a",{name:"f26dbb6d"}),"## \u66f4\u591a\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee\u4fe1\u606f",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dubbo/dubbo-registry-nacos"},"Dubbo Registry Nacos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-coredns-plugin"},"Nacos DNS-F")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring Project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"Spring Cloud Alibaba")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://dubbo.io/"},"Dubbo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/Sentinel"},"Sentinel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://projects.spring.io/spring-cloud/"},"Spring Cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Nepxion/Discovery"},"Nepxion Discovery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SpringCloud/spring-cloud-gateway-nacos"},"Spring Cloud Gateway Nacos"))))}m.isMDXComponent=!0}}]);