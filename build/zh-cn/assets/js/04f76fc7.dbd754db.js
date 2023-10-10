"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},v=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,k=p["".concat(i,".").concat(v)]||p[v]||d[v]||a;return n?l.createElement(k,o(o({ref:t},s),{},{components:n})):l.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}v.displayName="MDXCreateElement"},38527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={title:"Nacos \u6982\u5ff5",keywords:["Nacos","\u6982\u5ff5"],description:"Nacos \u6982\u5ff5"},o="Nacos \u6982\u5ff5",c={unversionedId:"v2/concepts",id:"v2/concepts",title:"Nacos \u6982\u5ff5",description:"Nacos \u6982\u5ff5",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/concepts.md",sourceDirName:"v2",slug:"/v2/concepts",permalink:"/zh-cn/docs/next/v2/concepts",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos \u6982\u5ff5",keywords:["Nacos","\u6982\u5ff5"],description:"Nacos \u6982\u5ff5"},sidebar:"docs",previous:{title:"\u4ec0\u4e48\u662f Nacos",permalink:"/zh-cn/docs/next/v2/what-is-nacos"},next:{title:"Nacos \u67b6\u6784",permalink:"/zh-cn/docs/next/v2/architecture"}},i={},u=[{value:"\u5730\u57df",id:"\u5730\u57df",level:2},{value:"\u53ef\u7528\u533a",id:"\u53ef\u7528\u533a",level:2},{value:"\u63a5\u5165\u70b9",id:"\u63a5\u5165\u70b9",level:2},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u7ba1\u7406",id:"\u914d\u7f6e\u7ba1\u7406",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u914d\u7f6e\u96c6",id:"\u914d\u7f6e\u96c6",level:2},{value:"\u914d\u7f6e\u96c6 ID",id:"\u914d\u7f6e\u96c6-id",level:2},{value:"\u914d\u7f6e\u5206\u7ec4",id:"\u914d\u7f6e\u5206\u7ec4",level:2},{value:"\u914d\u7f6e\u5feb\u7167",id:"\u914d\u7f6e\u5feb\u7167",level:2},{value:"\u670d\u52a1",id:"\u670d\u52a1",level:2},{value:"\u670d\u52a1\u540d",id:"\u670d\u52a1\u540d",level:2},{value:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",id:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",level:2},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:2},{value:"\u5143\u4fe1\u606f",id:"\u5143\u4fe1\u606f",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"\u670d\u52a1\u5206\u7ec4",id:"\u670d\u52a1\u5206\u7ec4",level:2},{value:"\u865a\u62df\u96c6\u7fa4",id:"\u865a\u62df\u96c6\u7fa4",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u6743\u91cd",id:"\u6743\u91cd",level:2},{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",level:2},{value:"\u5065\u5eb7\u4fdd\u62a4\u9608\u503c",id:"\u5065\u5eb7\u4fdd\u62a4\u9608\u503c",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-\u6982\u5ff5"},"Nacos \u6982\u5ff5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: Nacos \u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6982\u5ff5\uff0c\u7cfb\u7edf\u6027\u7684\u4e86\u89e3\u4e00\u4e0b\u8fd9\u4e9b\u6982\u5ff5\u53ef\u4ee5\u5e2e\u52a9\u60a8\u66f4\u597d\u7684\u7406\u89e3\u548c\u6b63\u786e\u7684\u4f7f\u7528 Nacos \u4ea7\u54c1\u3002")),(0,r.kt)("h2",{id:"\u5730\u57df"},"\u5730\u57df"),(0,r.kt)("p",null,"\u7269\u7406\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u8d44\u6e90\u521b\u5efa\u6210\u529f\u540e\u4e0d\u80fd\u66f4\u6362\u3002"),(0,r.kt)("h2",{id:"\u53ef\u7528\u533a"},"\u53ef\u7528\u533a"),(0,r.kt)("p",null,"\u540c\u4e00\u5730\u57df\u5185\uff0c\u7535\u529b\u548c\u7f51\u7edc\u4e92\u76f8\u72ec\u7acb\u7684\u7269\u7406\u533a\u57df\u3002\u540c\u4e00\u53ef\u7528\u533a\u5185\uff0c\u5b9e\u4f8b\u7684\u7f51\u7edc\u5ef6\u8fdf\u8f83\u4f4e\u3002"),(0,r.kt)("h2",{id:"\u63a5\u5165\u70b9"},"\u63a5\u5165\u70b9"),(0,r.kt)("p",null,"\u5730\u57df\u7684\u67d0\u4e2a\u670d\u52a1\u7684\u5165\u53e3\u57df\u540d\u3002"),(0,r.kt)("h2",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("p",null,"\u7528\u4e8e\u8fdb\u884c\u79df\u6237\u7c92\u5ea6\u7684\u914d\u7f6e\u9694\u79bb\u3002\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u53ef\u4ee5\u5b58\u5728\u76f8\u540c\u7684 Group \u6216 Data ID \u7684\u914d\u7f6e\u3002Namespace \u7684\u5e38\u7528\u573a\u666f\u4e4b\u4e00\u662f\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\u7684\u533a\u5206\u9694\u79bb\uff0c\u4f8b\u5982\u5f00\u53d1\u6d4b\u8bd5\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u8d44\u6e90\uff08\u5982\u914d\u7f6e\u3001\u670d\u52a1\uff09\u9694\u79bb\u7b49\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5f00\u53d1\u8005\u901a\u5e38\u4f1a\u5c06\u4e00\u4e9b\u9700\u8981\u53d8\u66f4\u7684\u53c2\u6570\u3001\u53d8\u91cf\u7b49\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\u72ec\u7acb\u7ba1\u7406\uff0c\u4ee5\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u5f62\u5f0f\u5b58\u5728\u3002\u76ee\u7684\u662f\u8ba9\u9759\u6001\u7684\u7cfb\u7edf\u5de5\u4ef6\u6216\u8005\u4ea4\u4ed8\u7269\uff08\u5982 WAR\uff0cJAR \u5305\u7b49\uff09\u66f4\u597d\u5730\u548c\u5b9e\u9645\u7684\u7269\u7406\u8fd0\u884c\u73af\u5883\u8fdb\u884c\u9002\u914d\u3002\u914d\u7f6e\u7ba1\u7406\u4e00\u822c\u5305\u542b\u5728\u7cfb\u7edf\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u8fd0\u7ef4\u4eba\u5458\u5b8c\u6210\u3002\u914d\u7f6e\u53d8\u66f4\u662f\u8c03\u6574\u7cfb\u7edf\u8fd0\u884c\u65f6\u7684\u884c\u4e3a\u7684\u6709\u6548\u624b\u6bb5\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u7ba1\u7406"},"\u914d\u7f6e\u7ba1\u7406"),(0,r.kt)("p",null,"\u7cfb\u7edf\u914d\u7f6e\u7684\u7f16\u8f91\u3001\u5b58\u50a8\u3001\u5206\u53d1\u3001\u53d8\u66f4\u7ba1\u7406\u3001\u5386\u53f2\u7248\u672c\u7ba1\u7406\u3001\u53d8\u66f4\u5ba1\u8ba1\u7b49\u6240\u6709\u4e0e\u914d\u7f6e\u76f8\u5173\u7684\u6d3b\u52a8\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5177\u4f53\u7684\u53ef\u914d\u7f6e\u7684\u53c2\u6570\u4e0e\u5176\u503c\u57df\uff0c\u901a\u5e38\u4ee5 param-key=param-value \u7684\u5f62\u5f0f\u5b58\u5728\u3002\u4f8b\u5982\u6211\u4eec\u5e38\u914d\u7f6e\u7cfb\u7edf\u7684\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\uff08logLevel=INFO|WARN|ERROR\uff09 \u5c31\u662f\u4e00\u4e2a\u914d\u7f6e\u9879\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u96c6"},"\u914d\u7f6e\u96c6"),(0,r.kt)("p",null,"\u4e00\u7ec4\u76f8\u5173\u6216\u8005\u4e0d\u76f8\u5173\u7684\u914d\u7f6e\u9879\u7684\u96c6\u5408\u79f0\u4e3a\u914d\u7f6e\u96c6\u3002\u5728\u7cfb\u7edf\u4e2d\uff0c\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u901a\u5e38\u5c31\u662f\u4e00\u4e2a\u914d\u7f6e\u96c6\uff0c\u5305\u542b\u4e86\u7cfb\u7edf\u5404\u4e2a\u65b9\u9762\u7684\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u914d\u7f6e\u96c6\u53ef\u80fd\u5305\u542b\u4e86\u6570\u636e\u6e90\u3001\u7ebf\u7a0b\u6c60\u3001\u65e5\u5fd7\u7ea7\u522b\u7b49\u914d\u7f6e\u9879\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u96c6-id"},"\u914d\u7f6e\u96c6 ID"),(0,r.kt)("p",null,"Nacos \u4e2d\u7684\u67d0\u4e2a\u914d\u7f6e\u96c6\u7684 ID\u3002\u914d\u7f6e\u96c6 ID \u662f\u7ec4\u7ec7\u5212\u5206\u914d\u7f6e\u7684\u7ef4\u5ea6\u4e4b\u4e00\u3002Data ID \u901a\u5e38\u7528\u4e8e\u7ec4\u7ec7\u5212\u5206\u7cfb\u7edf\u7684\u914d\u7f6e\u96c6\u3002\u4e00\u4e2a\u7cfb\u7edf\u6216\u8005\u5e94\u7528\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u914d\u7f6e\u96c6\uff0c\u6bcf\u4e2a\u914d\u7f6e\u96c6\u90fd\u53ef\u4ee5\u88ab\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u540d\u79f0\u6807\u8bc6\u3002Data ID \u901a\u5e38\u91c7\u7528\u7c7b Java \u5305\uff08\u5982 com.taobao.tc.refund.log.level\uff09\u7684\u547d\u540d\u89c4\u5219\u4fdd\u8bc1\u5168\u5c40\u552f\u4e00\u6027\u3002\u6b64\u547d\u540d\u89c4\u5219\u975e\u5f3a\u5236\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u5206\u7ec4"},"\u914d\u7f6e\u5206\u7ec4"),(0,r.kt)("p",null,"Nacos \u4e2d\u7684\u4e00\u7ec4\u914d\u7f6e\u96c6\uff0c\u662f\u7ec4\u7ec7\u914d\u7f6e\u7684\u7ef4\u5ea6\u4e4b\u4e00\u3002\u901a\u8fc7\u4e00\u4e2a\u6709\u610f\u4e49\u7684\u5b57\u7b26\u4e32\uff08\u5982 Buy \u6216 Trade \uff09\u5bf9\u914d\u7f6e\u96c6\u8fdb\u884c\u5206\u7ec4\uff0c\u4ece\u800c\u533a\u5206 Data ID \u76f8\u540c\u7684\u914d\u7f6e\u96c6\u3002\u5f53\u60a8\u5728 Nacos \u4e0a\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u65f6\uff0c\u5982\u679c\u672a\u586b\u5199\u914d\u7f6e\u5206\u7ec4\u7684\u540d\u79f0\uff0c\u5219\u914d\u7f6e\u5206\u7ec4\u7684\u540d\u79f0\u9ed8\u8ba4\u91c7\u7528 DEFAULT","_","GROUP \u3002\u914d\u7f6e\u5206\u7ec4\u7684\u5e38\u89c1\u573a\u666f\uff1a\u4e0d\u540c\u7684\u5e94\u7528\u6216\u7ec4\u4ef6\u4f7f\u7528\u4e86\u76f8\u540c\u7684\u914d\u7f6e\u7c7b\u578b\uff0c\u5982 database","_","url \u914d\u7f6e\u548c MQ","_","topic \u914d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u5feb\u7167"},"\u914d\u7f6e\u5feb\u7167"),(0,r.kt)("p",null,"Nacos \u7684\u5ba2\u6237\u7aef SDK \u4f1a\u5728\u672c\u5730\u751f\u6210\u914d\u7f6e\u7684\u5feb\u7167\u3002\u5f53\u5ba2\u6237\u7aef\u65e0\u6cd5\u8fde\u63a5\u5230 Nacos Server \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u5feb\u7167\u663e\u793a\u7cfb\u7edf\u7684\u6574\u4f53\u5bb9\u707e\u80fd\u529b\u3002\u914d\u7f6e\u5feb\u7167\u7c7b\u4f3c\u4e8e Git \u4e2d\u7684\u672c\u5730 commit\uff0c\u4e5f\u7c7b\u4f3c\u4e8e\u7f13\u5b58\uff0c\u4f1a\u5728\u9002\u5f53\u7684\u65f6\u673a\u66f4\u65b0\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u7f13\u5b58\u8fc7\u671f\uff08expiration\uff09\u7684\u6982\u5ff5\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1"},"\u670d\u52a1"),(0,r.kt)("p",null,"\u901a\u8fc7\u9884\u5b9a\u4e49\u63a5\u53e3\u7f51\u7edc\u8bbf\u95ee\u7684\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u7684\u8f6f\u4ef6\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u540d"},"\u670d\u52a1\u540d"),(0,r.kt)("p",null,"\u670d\u52a1\u63d0\u4f9b\u7684\u6807\u8bc6\uff0c\u901a\u8fc7\u8be5\u6807\u8bc6\u53ef\u4ee5\u552f\u4e00\u786e\u5b9a\u5176\u6307\u4ee3\u7684\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3"},"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u5b58\u50a8\u670d\u52a1\u5b9e\u4f8b\u548c\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u6570\u636e\u5e93\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,"\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u4e0a\uff0c\uff08\u901a\u5e38\u4f7f\u7528\u670d\u52a1\u540d\uff09\u5bf9\u670d\u52a1\u4e0b\u7684\u5b9e\u4f8b\u7684\u5730\u5740\u548c\u5143\u6570\u636e\u8fdb\u884c\u63a2\u6d4b\uff0c\u5e76\u4ee5\u9884\u5148\u5b9a\u4e49\u7684\u63a5\u53e3\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u8fdb\u884c\u67e5\u8be2\u3002"),(0,r.kt)("h2",{id:"\u5143\u4fe1\u606f"},"\u5143\u4fe1\u606f"),(0,r.kt)("p",null,"Nacos\u6570\u636e\uff08\u5982\u914d\u7f6e\u548c\u670d\u52a1\uff09\u63cf\u8ff0\u4fe1\u606f\uff0c\u5982\u670d\u52a1\u7248\u672c\u3001\u6743\u91cd\u3001\u5bb9\u707e\u7b56\u7565\u3001\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u3001\u9274\u6743\u914d\u7f6e\u3001\u5404\u79cd\u81ea\u5b9a\u4e49\u6807\u7b7e (label)\uff0c\u4ece\u4f5c\u7528\u8303\u56f4\u6765\u770b\uff0c\u5206\u4e3a\u670d\u52a1\u7ea7\u522b\u7684\u5143\u4fe1\u606f\u3001\u96c6\u7fa4\u7684\u5143\u4fe1\u606f\u53ca\u5b9e\u4f8b\u7684\u5143\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,r.kt)("p",null,"\u7528\u4e8e\u6807\u8bc6\u670d\u52a1\u63d0\u4f9b\u65b9\u7684\u670d\u52a1\u7684\u5c5e\u6027\u3002"),(0,r.kt)("h2",{id:"\u670d\u52a1\u5206\u7ec4"},"\u670d\u52a1\u5206\u7ec4"),(0,r.kt)("p",null,"\u4e0d\u540c\u7684\u670d\u52a1\u53ef\u4ee5\u5f52\u7c7b\u5230\u540c\u4e00\u5206\u7ec4\u3002"),(0,r.kt)("h2",{id:"\u865a\u62df\u96c6\u7fa4"},"\u865a\u62df\u96c6\u7fa4"),(0,r.kt)("p",null,"\u540c\u4e00\u4e2a\u670d\u52a1\u4e0b\u7684\u6240\u6709\u670d\u52a1\u5b9e\u4f8b\u7ec4\u6210\u4e00\u4e2a\u9ed8\u8ba4\u96c6\u7fa4, \u96c6\u7fa4\u53ef\u4ee5\u88ab\u8fdb\u4e00\u6b65\u6309\u9700\u6c42\u5212\u5206\uff0c\u5212\u5206\u7684\u5355\u4f4d\u53ef\u4ee5\u662f\u865a\u62df\u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2a\u6216\u591a\u4e2a\u670d\u52a1\u7684\u5177\u6709\u53ef\u8bbf\u95ee\u7f51\u7edc\u5730\u5740\uff08IP:Port\uff09\u7684\u8fdb\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u6743\u91cd"},"\u6743\u91cd"),(0,r.kt)("p",null,"\u5b9e\u4f8b\u7ea7\u522b\u7684\u914d\u7f6e\u3002\u6743\u91cd\u4e3a\u6d6e\u70b9\u6570\u3002\u6743\u91cd\u8d8a\u5927\uff0c\u5206\u914d\u7ed9\u8be5\u5b9e\u4f8b\u7684\u6d41\u91cf\u8d8a\u5927\u3002"),(0,r.kt)("h2",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,r.kt)("p",null,"\u4ee5\u6307\u5b9a\u65b9\u5f0f\u68c0\u67e5\u670d\u52a1\u4e0b\u6302\u8f7d\u7684\u5b9e\u4f8b (Instance) \u7684\u5065\u5eb7\u5ea6\uff0c\u4ece\u800c\u786e\u8ba4\u8be5\u5b9e\u4f8b (Instance) \u662f\u5426\u80fd\u63d0\u4f9b\u670d\u52a1\u3002\u6839\u636e\u68c0\u67e5\u7ed3\u679c\uff0c\u5b9e\u4f8b (Instance) \u4f1a\u88ab\u5224\u65ad\u4e3a\u5065\u5eb7\u6216\u4e0d\u5065\u5eb7\u3002\u5bf9\u670d\u52a1\u53d1\u8d77\u89e3\u6790\u8bf7\u6c42\u65f6\uff0c\u4e0d\u5065\u5eb7\u7684\u5b9e\u4f8b (Instance) \u4e0d\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("h2",{id:"\u5065\u5eb7\u4fdd\u62a4\u9608\u503c"},"\u5065\u5eb7\u4fdd\u62a4\u9608\u503c"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u56e0\u8fc7\u591a\u5b9e\u4f8b (Instance) \u4e0d\u5065\u5eb7\u5bfc\u81f4\u6d41\u91cf\u5168\u90e8\u6d41\u5411\u5065\u5eb7\u5b9e\u4f8b (Instance) \uff0c\u7ee7\u800c\u9020\u6210\u6d41\u91cf\u538b\u529b\u628a\u5065\u5eb7\u5b9e\u4f8b (Instance) \u538b\u57ae\u5e76\u5f62\u6210\u96ea\u5d29\u6548\u5e94\uff0c\u5e94\u5c06\u5065\u5eb7\u4fdd\u62a4\u9608\u503c\u5b9a\u4e49\u4e3a\u4e00\u4e2a 0 \u5230 1 \u4e4b\u95f4\u7684\u6d6e\u70b9\u6570\u3002\u5f53\u57df\u540d\u5065\u5eb7\u5b9e\u4f8b\u6570 (Instance) \u5360\u603b\u670d\u52a1\u5b9e\u4f8b\u6570 (Instance) \u7684\u6bd4\u4f8b\u5c0f\u4e8e\u8be5\u503c\u65f6\uff0c\u65e0\u8bba\u5b9e\u4f8b (Instance) \u662f\u5426\u5065\u5eb7\uff0c\u90fd\u4f1a\u5c06\u8fd9\u4e2a\u5b9e\u4f8b (Instance) \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\u8fd9\u6837\u505a\u867d\u7136\u635f\u5931\u4e86\u4e00\u90e8\u5206\u6d41\u91cf\uff0c\u4f46\u662f\u4fdd\u8bc1\u4e86\u96c6\u7fa4\u4e2d\u5269\u4f59\u5065\u5eb7\u5b9e\u4f8b (Instance) \u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"))}d.isMDXComponent=!0}}]);