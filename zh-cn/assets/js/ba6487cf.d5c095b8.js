"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),v=a,f=s["".concat(c,".").concat(v)]||s[v]||m[v]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},78195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1",keywords:["nacos 0.1.0"],description:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1"},l="Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1",i={permalink:"/zh-cn/blog/nacos",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos.md",title:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1",description:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1",date:"2023-10-10T08:15:08.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:2.36,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1",keywords:["nacos 0.1.0"],description:"Nacos 0.1.0 \u7248\u672cReview \u6d3b\u52a8\u8bbe\u8ba1"},prevItem:{title:"Nacos Roadmap\uff1aNacos GA\u540e\u4f1a\u6709\u54ea\u4e9b\u5927\u52a8\u4f5c\uff1f",permalink:"/zh-cn/blog/nacos-roadmap"},nextItem:{title:"Nacos0.5\u53d1\u5e03\uff0c\u652f\u6301DNS-based Service Discovery\uff0cJAVA 11",permalink:"/zh-cn/blog/nacos0.5"}},c={authorsImageUrls:[]},p=[{value:"I. \u6d3b\u52a8\u4efb\u52a1\u5217\u8868",id:"i-\u6d3b\u52a8\u4efb\u52a1\u5217\u8868",level:2},{value:"II. \u6d3b\u52a8\u53c2\u4e0e\u65b9\u5f0f",id:"ii-\u6d3b\u52a8\u53c2\u4e0e\u65b9\u5f0f",level:2},{value:"III. \u95ee\u9898Report\u65b9\u5f0f",id:"iii-\u95ee\u9898report\u65b9\u5f0f",level:2},{value:"IV. \u5956\u52b1\u65b9\u5f0f",id:"iv-\u5956\u52b1\u65b9\u5f0f",level:2},{value:"V. \u5176\u5b83\u8bf4\u660e",id:"v-\u5176\u5b83\u8bf4\u660e",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"i-\u6d3b\u52a8\u4efb\u52a1\u5217\u8868"},"I. \u6d3b\u52a8\u4efb\u52a1\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9605\u8bfb\u5b98\u7f51\u6587\u6848\uff0c\u627e\u5b98\u7f51bug, \u7ed9\u4e2d\u3001\u82f1\u6587\u5b98\u7f51\u63d0\u5efa\u8bbe\u6027\u5efa\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u9605\u8bfb\u4e2d\u82f1\u6587\u6863\uff0c\u627e\u6587\u6863bug, \u7ed9\u4e2d\u3001\u82f1\u6587\u6863\u6539\u5584\u63d0\u5efa\u8bae\uff08\u5c24\u5176\u662f\u5173\u6ce8\u82f1\u6587\u7ffb\u8bd1\u4e0d\u597d\u7684\u5730\u65b9\uff0c\u56e0\u4e3a\u82f1\u6587\u90fd\u662f\u6211\u4eec\u7a0b\u5e8f\u5458\u81ea\u5df1\u64b8\u7684\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4e0b\u4ee3\u7801 ->\u7f16\u8bd1\u6253\u5305 -> \u542f\u52a8Nacos server -> \u505c\u6b62Nacos server\u6d41\u7a0b\uff0c\u63d0\u51fa\u6539\u8fdb\u610f\u89c1"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u914d\u7f6e\u4ee5\u53ca\u542f\u52a8\u591a\u8282\u70b9 Nacos \u96c6\u7fa4\u6a21\u5f0f\u4efb\u52a1\uff0c\u63d0\u6539\u8fdb\u610f\u89c1"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4f7f\u7528Nacos Java SDK, \u7ed9Java SDK\u63d0\u6539\u8fdb\u5efa\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4f7f\u7528Nacos Open API\uff0c\u7ed9OpenAPI\u63d0\u6539\u8fdb\u5efa\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u6839\u636e\u300a\u5982\u4f55\u8d21\u732eNacos\u6587\u6863 TODO\u300b\u8bd5\u4e00\u4e0b \u8d21\u732e\u6d41\u7a0b\uff0c\u7ed9\u8d21\u732e\u8005\u6d41\u7a0b\u63d0\u5efa\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u7ed9Nacos\u63d0\u9700\u6c42\u3001\u53d1\u5c55\u8ba1\u5212\u3001\u60f3\u6cd5\u548c\u8981\u6c42\u7b49")),(0,a.kt)("h2",{id:"ii-\u6d3b\u52a8\u53c2\u4e0e\u65b9\u5f0f"},"II. \u6d3b\u52a8\u53c2\u4e0e\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u626b\u63cf \u201c\u8d85\u54e5\u201d \u5fae\u4fe12\u5fae\u7801\uff0c\u8ba9\u8d85\u54e5\u5e2e\u52a9\u52a0\u5165 \u201cNacos\u793e\u533a\u4ea4\u6d41\u7fa4\u201d"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/11189/1532004866850-5e03b901-6d76-4380-b7bf-66e227808bdc.png",alt:"\u5fae\u4fe1\u4e8c\u7ef4\u7801"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9I \u4e2d\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u4f53\u9a8c\u4efb\u52a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d1\u73b0\u95ee\u9898\u6216\u8005BUG\u4e4b\u540e\uff0c\u6309\u7167III\u4e2d\u7684\u300a\u95ee\u9898Report\u65b9\u5f0f\u300b\uff0c\u53d1\u4e00\u4e2a\u76f8\u5e94\u7684 github issue, \u5e76\u6307\u6d3e\u7ed9 @ github\u8d26\u53f7",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xuechaos"},"xuechaos")))),(0,a.kt)("h2",{id:"iii-\u95ee\u9898report\u65b9\u5f0f"},"III. \u95ee\u9898Report\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d41\u7a0b\u8bf4\u660e TODO")),(0,a.kt)("h2",{id:"iv-\u5956\u52b1\u65b9\u5f0f"},"IV. \u5956\u52b1\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u6b63\u5728\u4e3a\u53c2\u4e0e\u5e76\u4f5c\u51fa\u7a81\u51fa\u8d21\u732e\u7684\u5c0f\u4f19\u4f34\u5b9a\u5236\u4e00\u4e9b\u5c0f\u793c\u54c1\uff0c\u4f1a\u8003\u8651\u5feb\u9012\u7ed9\u8fc7\u7a0b\u4e2d\u6709\u7a81\u51fa\u8d21\u732e\u7684\u5c0f\u4f19\u4f34"),(0,a.kt)("li",{parentName:"ul"},"\u793c\u7269\u867d\u8f7b\uff0c\u4f46\u5e0c\u671b\u80fd\u8868\u8fbe\u5bf9\u4f60\u4eec\u7684\u5e2e\u52a9\u7684\u611f\u6fc0\u4e4b\u60c5\u7684\u4e07\u4e00")),(0,a.kt)("h2",{id:"v-\u5176\u5b83\u8bf4\u660e"},"V. \u5176\u5b83\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4e0d\u786e\u5b9a\u6bcf\u4e2a\u5efa\u8bae\u6700\u540e\u90fd\u4f1a\u88ab\u91c7\u7528\uff0c\u4f46\u662f\u6211\u4eec\u5c3d\u91cf\u4f1a\u8ddf\u60a8\u6c9f\u901a\u6211\u4eec\u57fa\u4e8e\u4f55\u79cd\u8003\u8651\uff0c\u60a8\u7684\u5efa\u8bae\u6211\u4eec\u6700\u540e\u6ca1\u6709\u91c7\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u901a\u8fc7\u90ae\u4ef6\u5217\u8868\u6216\u8005report issue\u7684\u65b9\u5f0f\uff0c\u800c\u4e0d\u662f\u5728\u5fae\u4fe1\u7fa4\u91ccreport\u95ee\u9898\uff0c\u4ee5\u4fbf\u5c06\u6211\u4eec\u7684\u6c9f\u901a\u8fc7\u7a0b\u6587\u6863\u5316\u548c\u66f4\u5bb9\u6613\u6c89\u6dc0")))}m.isMDXComponent=!0}}]);