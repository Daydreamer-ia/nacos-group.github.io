"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,h=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(h,p(p({ref:t},c),{},{components:a})):n.createElement(h,p({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",keywords:["Apache APISIX"],description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c"},p="\u80cc\u666f\u4fe1\u606f",o={permalink:"/zh-cn/blog/apisix",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/apisix.md",title:"Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c",date:"2023-10-12T09:42:31.000Z",formattedDate:"2023\u5e7410\u670812\u65e5",tags:[],readingTime:8.5,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0",keywords:["Apache APISIX"],description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX\u3001Nacos \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c"},prevItem:{title:"\u5173\u4e8eNacos\u9ed8\u8ba4token.secret.key\u53caserver.identity\u98ce\u9669\u8bf4\u660e\u53ca\u89e3\u51b3\u65b9\u6848\u516c\u544a",permalink:"/zh-cn/blog/announcement-token-secret-key"},nextItem:{title:"Nacos \u8ba1\u5212\u53d1\u5e03v0.2\u7248\u672c\uff0c\u8fdb\u4e00\u6b65\u878d\u5408Dubbo\u548cSpringCloud\u751f\u6001",permalink:"/zh-cn/blog/chengdu-dubbo"}},i={authorsImageUrls:[]},s=[{value:"\u5173\u4e8e Apache APISIX",id:"\u5173\u4e8e-apache-apisix",level:2},{value:"\u5173\u4e8e Nacos",id:"\u5173\u4e8e-nacos",level:2},{value:"\u4ec0\u4e48\u662f\u6ce8\u518c\u4e2d\u5fc3",id:"\u4ec0\u4e48\u662f\u6ce8\u518c\u4e2d\u5fc3",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3\uff1f",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3",level:2},{value:"Apache APISIX + Nacos \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4ec0\u4e48\u5e94\u7528\u573a\u666f\uff1f",id:"apache-apisix--nacos-\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4ec0\u4e48\u5e94\u7528\u573a\u666f",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c",id:"\u6b65\u9aa4\u4e00\u670d\u52a1\u6ce8\u518c",level:2},{value:"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e Nacos \u8def\u7531",id:"\u6b65\u9aa4\u4e8c\u65b0\u589e-nacos-\u8def\u7531",level:2},{value:"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c",id:"\u6b65\u9aa4\u4e09\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5173\u4e8e-apache-apisix"},"\u5173\u4e8e Apache APISIX"),(0,r.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u4e0d\u4ec5\u62e5\u6709\u4f17\u591a\u5b9e\u7528\u7684\u63d2\u4ef6\uff0c\u800c\u4e14\u652f\u6301\u63d2\u4ef6\u52a8\u6001\u53d8\u66f4\u548c\u70ed\u63d2\u62d4\u3002"),(0,r.kt)("h2",{id:"\u5173\u4e8e-nacos"},"\u5173\u4e8e Nacos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nacos")," \u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\uff0c\u670d\u52a1\u914d\u7f6e\uff0c\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\uff0c\u8ba9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\uff0c\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\uff08\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f\uff09\u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("h1",{id:"\u6ce8\u518c\u4e2d\u5fc3"},"\u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6ce8\u518c\u4e2d\u5fc3"},"\u4ec0\u4e48\u662f\u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u662f\u670d\u52a1\u8981\u5b9e\u73b0\u670d\u52a1\u5316\u7ba1\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u7c7b\u4f3c\u4e8e\u76ee\u5f55\u670d\u52a1\u7684\u4f5c\u7528\uff0c\u4e5f\u662f\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u6700\u57fa\u7840\u7684\u8bbe\u65bd\u4e4b\u4e00\uff0c\u4e3b\u8981\u7528\u6765\u5b58\u50a8\u670d\u52a1\u4fe1\u606f\uff0c\u8b6c\u5982\u670d\u52a1\u63d0\u4f9b\u8005 URL \u3001\u8def\u7531\u4fe1\u606f\u7b49\u3002\u6ce8\u518c\u4e2d\u5fc3\u7684\u5b9e\u73b0\u662f\u901a\u8fc7\u4e00\u79cd\u6620\u5c04\u7684\u65b9\u5f0f\uff0c\u5c06\u590d\u6742\u7684\u670d\u52a1\u7aef\u4fe1\u606f\u6620\u5c04\u4e3a\u7b80\u5355\u6613\u61c2\u7684\u4fe1\u606f\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u7684\u6838\u5fc3\u529f\u80fd\u4e3a\u4ee5\u4e0b\u4e09\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u6ce8\u518c\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u670d\u52a1\u63d0\u4f9b\u65b9"),"\u5411",(0,r.kt)("strong",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3"),"\u8fdb\u884c\u6ce8\u518c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u53d1\u73b0\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u670d\u52a1\u6d88\u8d39\u65b9"),"\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u5bfb\u627e\u5230\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u8c03\u7528\u8def\u7531\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5065\u5eb7\u68c0\u6d4b\uff1a\u786e\u4fdd\u6ce8\u518c\u5230\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u8282\u70b9\u662f\u53ef\u4ee5\u88ab\u6b63\u5e38\u8c03\u7528\u7684\uff0c\u907f\u514d\u65e0\u6548\u8282\u70b9\u5bfc\u81f4\u7684\u8c03\u7528\u8d44\u6e90\u6d6a\u8d39\u7b49\u95ee\u9898\u3002")),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3\uff1f"),(0,r.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u672c\u8d28\u4e0a\u662f\u4e3a\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u89e3\u8026\u670d\u52a1\u63d0\u4f9b\u8005\u548c\u670d\u52a1\u6d88\u8d39\u8005"),"\uff0c\u5728\u5fae\u670d\u52a1\u4f53\u7cfb\u4e2d\uff0c\u5404\u4e2a\u4e1a\u52a1\u670d\u52a1\u4e4b\u95f4\u4f1a\u9891\u7e41\u4e92\u76f8\u8c03\u7528\uff0c\u5e76\u4e14\u9700\u8981\u5bf9\u5404\u4e2a\u670d\u52a1\u7684 IP\u3001port \u7b49\u8def\u7531\u4fe1\u606f\u8fdb\u884c\u7edf\u4e00\u7684\u7ba1\u7406\u3002\u4f46\u662f\u8981\u5982\u4f55\u8fdb\u884c\u7ba1\u7406\u5462\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u6ce8\u518c")," \u529f\u80fd\u5c06\u5df2\u6709\u670d\u52a1\u7684\u76f8\u5173\u4fe1\u606f\u63d0\u4f9b\u5230\u7edf\u4e00\u7684\u6ce8\u518c\u4e2d\u5fc3\u8fdb\u884c\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u63cf\u8ff0\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u901a\u8fc7\u6620\u5c04\u5feb\u901f\u627e\u5230\u670d\u52a1\u548c\u670d\u52a1\u5730\u5740\u3002\u968f\u7740\u4e1a\u52a1\u66f4\u65b0\u8fed\u4ee3\uff0c\u670d\u52a1\u4f1a\u9891\u7e41\u53d1\u751f\u53d8\u5316\uff0c\u5728\u670d\u52a1\u7aef\u4e2d\u6ce8\u518c\u4e86\u65b0\u7684\u670d\u52a1\u6216\u8005\u670d\u52a1\u5b95\u673a\u540e\uff0c\u5ba2\u6237\u7aef\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0")," \u529f\u80fd\u62c9\u53d6\u670d\u52a1\u5217\u8868\uff0c\u5982\u679c\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u8282\u70b9\u53d1\u751f\u53d8\u66f4\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4f1a\u53d1\u9001\u8bf7\u6c42\u901a\u77e5\u5ba2\u6237\u7aef\u91cd\u65b0\u62c9\u53d6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u670d\u52a1\u7aef\u7684\u670d\u52a1\u7a81\u7136\u5b95\u673a\uff0c\u5e76\u4e14\u6ca1\u6709\u5411\u6ce8\u518c\u4e2d\u5fc3\u53cd\u9988\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5065\u5eb7\u68c0\u67e5"),"\u529f\u80fd\uff0c\u8fdb\u884c\u56fa\u5b9a\u65f6\u95f4\u95f4\u9694\u7684\u4e3b\u52a8\u4e0a\u62a5\u5fc3\u8df3\u65b9\u5f0f\u5411\u670d\u52a1\u7aef\u8868\u660e\u81ea\u5df1\u7684\u670d\u52a1\u72b6\u6001\u3002\u5982\u679c\u670d\u52a1\u72b6\u6001\u5f02\u5e38\uff0c\u5219\u4f1a\u901a\u77e5\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u53ca\u65f6\u628a\u5df2\u7ecf\u5b95\u673a\u7684\u670d\u52a1\u8282\u70b9\u8fdb\u884c\u5254\u9664\uff0c\u907f\u514d\u8d44\u6e90\u7684\u6d6a\u8d39\u3002"),(0,r.kt)("h2",{id:"apache-apisix--nacos-\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4ec0\u4e48\u5e94\u7528\u573a\u666f"},"Apache APISIX + Nacos \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4ec0\u4e48\u5e94\u7528\u573a\u666f\uff1f"),(0,r.kt)("p",null,"Apache APISIX + Nacos \u53ef\u4ee5\u5c06\u5404\u4e2a\u5fae\u670d\u52a1\u8282\u70b9\u4e2d\u4e0e\u4e1a\u52a1\u65e0\u5173\u7684\u5404\u9879\u63a7\u5236\uff0c\u96c6\u4e2d\u5728 Apache APISIX \u4e2d\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5373\u901a\u8fc7Apache APISIX \u5b9e\u73b0\u63a5\u53e3\u670d\u52a1\u7684\u4ee3\u7406\u548c\u8def\u7531\u8f6c\u53d1\u7684\u80fd\u529b\u3002\u5404\u4e2a\u5fae\u670d\u52a1\u5728 Nacos \u4e0a\u6ce8\u518c\u540e\uff0cApache APISIX \u53ef\u4ee5\u901a\u8fc7 Nacos \u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u83b7\u53d6\u670d\u52a1\u5217\u8868\uff0c\u67e5\u627e\u5bf9\u5e94\u7684\u670d\u52a1\u5730\u5740\u4ece\u800c\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(97294).Z,width:"1280",height:"913"})),(0,r.kt)("h1",{id:"apache-apisix-\u57fa\u4e8e-nacos-\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0"},"Apache APISIX \u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u672c\u6587\u64cd\u4f5c\u57fa\u4e8e\u4ee5\u4e0b\u73af\u5883\u8fdb\u884c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf Centos 7.9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Apache APISIX 12.1.0\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/how-to-buildhttps://apisix.apache.org/zh/docs/apisix/how-to-build"},"Apache APISIX how-to-bulid"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Nacos 2.0.4 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"quick start"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5 Node.js\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"node.js Installation"),"\u3002")),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e00\u670d\u52a1\u6ce8\u518c"},"\u6b65\u9aa4\u4e00\uff1a\u670d\u52a1\u6ce8\u518c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Node.js \u7684 Koa \u6846\u67b6\u5728 3005 \u7aef\u53e3\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u670d\u52a1\u4f5c\u4e3a",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/docs/apisix/admin-api#upstream"},"\u4e0a\u6e38\uff08Upstream\uff09"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const Koa = require('koa');\nconst app = new Koa();\n\napp.use(async ctx => {\n  ctx.body = 'Hello World';\n});\n\napp.listen(3005);\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u547d\u4ee4\u884c\u4e2d\u901a\u8fc7\u8bf7\u6c42 Nacos Open API \u7684\u65b9\u5f0f\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=APISIX-NACOS&ip=127.0.0.1&port=3005&ephemeral=false'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u670d\u52a1\u6ce8\u518c\u540e\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\u5f53\u524d\u670d\u52a1\u60c5\u51b5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=APISIX-NACOS'\n")),(0,r.kt)("p",null,"\u6b63\u786e\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "name": "DEFAULT_GROUP@@APISIX-NACOS",\n  "groupName": "DEFAULT_GROUP",\n  "clusters": "",\n  "cacheMillis": 10000,\n  "hosts": [\n    {\n      "instanceId": "127.0.0.1#3005#DEFAULT#DEFAULT_GROUP@@APISIX-NACOS",\n      "ip": "127.0.0.1",\n      "port": 3005,\n      "weight": 1.0,\n      "healthy": true,\n      "enabled": true,\n      "ephemeral": true,\n      "clusterName": "DEFAULT",\n      "serviceName": "DEFAULT_GROUP@@APISIX-NACOS",\n      "metadata": {},\n      "instanceHeartBeatInterval": 5000,\n      "instanceHeartBeatTimeOut": 15000,\n      "ipDeleteTimeout": 30000,\n      "instanceIdGenerator": "simple"\n    }\n  ],\n  "lastRefTime": 1643191399694,\n  "checksum": "",\n  "allIPs": false,\n  "reachProtectionThreshold": false,\n  "valid": true\n}\n')),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e8c\u65b0\u589e-nacos-\u8def\u7531"},"\u6b65\u9aa4\u4e8c\uff1a\u65b0\u589e Nacos \u8def\u7531"),(0,r.kt)("p",null,"\u4f7f\u7528 Apache APISIX \u63d0\u4f9b\u7684 Admin API \u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/admin-api#route"},"\u8def\u7531\uff08Route\uff09"),"\uff0cAPISIX \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.discovery_type")," \u5b57\u6bb5\u9009\u62e9\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.service_name")," \u9700\u8981\u4e0e\u6ce8\u518c\u4e2d\u5fc3\u7684\u5bf9\u5e94\u670d\u52a1\u540d\u8fdb\u884c\u5173\u8054\uff0c\u56e0\u6b64\u521b\u5efa\u8def\u7531\u65f6\u6307\u5b9a\u670d\u52a1\u53d1\u73b0\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/nacos/*",\n    "upstream": {\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin",\n        "discovery_type": "nacos"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u8bf7\u6c42\u5934 ",(0,r.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," \u662f Admin API \u7684\u8bbf\u95ee token\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.admin_key.key")," \u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u6b63\u786e\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "action": "set",\n  "node": {\n    "key": "\\/apisix\\/routes\\/1",\n    "value": {\n      "update_time": 1643191044,\n      "create_time": 1643176603,\n      "priority": 0,\n      "uri": "\\/nacos\\/*",\n      "upstream": {\n        "hash_on": "vars",\n        "discovery_type": "nacos",\n        "scheme": "http",\n        "pass_host": "pass",\n        "type": "roundrobin",\n        "service_name": "APISIX-NACOS"\n      },\n      "id": "1",\n      "status": 1\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.discovery_args")," \u4e2d\u4f20\u9012\u5176\u4ed6\u670d\u52a1\u76f8\u5173\u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u670d\u52a1\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u6216\u7ec4\u522b\uff0c\u5177\u4f53\u5185\u5bb9\u53ef\u53c2\u8003\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u540d\u5b57")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u7c7b\u578b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u53ef\u9009\u9879")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u6709\u6548\u503c")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"DEFAULT_GROUP"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6240\u5728\u7684\u7ec4")))),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e09\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c"},"\u6b65\u9aa4\u4e09\uff1a\u9a8c\u8bc1\u914d\u7f6e\u7ed3\u679c"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53d1\u9001\u8bf7\u6c42\u81f3\u9700\u8981\u914d\u7f6e\u7684\u8def\u7531\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"curl -i http://127.0.0.1:9080/nacos/\n")),(0,r.kt)("p",null,"\u6b63\u5e38\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Apache"},"HTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nContent-Length: 11\nConnection: keep-alive\nDate: Thu, 27 Jan 2022 00:48:26 GMT\nServer: APISIX/2.12.0\n\nHello World\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u793a\u4f8b\u770b\u5230\uff0cApache APISIX \u4e2d\u65b0\u589e\u7684\u8def\u7531\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 Nacos \u670d\u52a1\u53d1\u73b0\u627e\u5230\u6b63\u786e\u7684\u670d\u52a1\u5730\u5740\uff0c\u5e76\u6b63\u5e38\u54cd\u5e94\u3002"),(0,r.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u4e86\u6ce8\u518c\u4e2d\u5fc3\u7684\u6982\u5ff5\u4ee5\u53ca Apache APISIX \u5982\u4f55\u914d\u5408 Nacos \u5b9e\u73b0\u57fa\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u8def\u7531\u4ee3\u7406\u3002\u5b9e\u9645\u573a\u666f\u4e2d\u5982\u4f55\u8fdb\u884c Apache APISIX \u4e0e Nacos \u7684\u914d\u5408\u4f7f\u7528\uff0c\u60a8\u9700\u8981\u770b\u5177\u4f53\u7684\u4e1a\u52a1\u9700\u6c42\u548c\u8fc7\u5f80\u6280\u672f\u67b6\u6784\u3002\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos")," \u63d2\u4ef6\u7684\u66f4\u591a\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u53c2\u8003\u5b98\u7f51\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/discovery/nacos"},"nacos"),"\u3002"))}m.isMDXComponent=!0},97294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apisix-f63e74884230417502884336fd02c92a.png"}}]);