"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,f=u["".concat(i,".").concat(y)]||u[y]||m[y]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const c={title:"NacosSync \u4ecb\u7ecd",keywords:["NacosSync","\u4ecb\u7ecd"],description:"NacosSync \u4ecb\u7ecd"},o="NacosSync \u4ecb\u7ecd",l={unversionedId:"nacos-sync",id:"nacos-sync",title:"NacosSync \u4ecb\u7ecd",description:"NacosSync \u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/nacos-sync.md",sourceDirName:".",slug:"/nacos-sync",permalink:"/zh-cn/docs/next/nacos-sync",draft:!1,tags:[],version:"current",frontMatter:{title:"NacosSync \u4ecb\u7ecd",keywords:["NacosSync","\u4ecb\u7ecd"],description:"NacosSync \u4ecb\u7ecd"}},i={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784:",id:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacossync-\u4ecb\u7ecd"},"NacosSync \u4ecb\u7ecd"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NacosSync\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6ce8\u518c\u4e2d\u5fc3\u7684\u540c\u6b65\u7ec4\u4ef6,\u57fa\u4e8eSpring boot\u5f00\u53d1\u6846\u67b6,\u6570\u636e\u5c42\u91c7\u7528Spring Data JPA,\u9075\u5faa\u4e86\u6807\u51c6\u7684JPA\u8bbf\u95ee\u89c4\u8303,\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u5b58\u50a8,\u9ed8\u8ba4\u4f7f\u7528Hibernate\u5b9e\u73b0,\u66f4\u52a0\u65b9\u4fbf\u7684\u652f\u6301\u8868\u7684\u81ea\u52a8\u521b\u5efa\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86\u9ad8\u6548\u7684\u4e8b\u4ef6\u5f02\u6b65\u9a71\u52a8\u6a21\u578b, \u652f\u6301\u591a\u79cd\u81ea\u5b9a\u4e49\u4e8b\u4ef6,\u4f7f\u5f97\u540c\u6b65\u4efb\u52a1\u5904\u7406\u7684\u5ef6\u65f6\u63a7\u5236\u57283s,8C16G\u7684\u5355\u673a\u80fd\u591f\u652f\u63016K\u7684\u540c\u6b65\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"NacosSync\u9664\u4e86\u5355\u673a\u90e8\u7f72,\u4e5f\u63d0\u4f9b\u4e86\u9ad8\u53ef\u7528\u7684\u96c6\u7fa4\u90e8\u7f72\u6a21\u5f0f,NacosSync\u662f\u65e0\u72b6\u6001\u8bbe\u8ba1,\u5c06\u4efb\u52a1\u7b49\u72b6\u6001\u6570\u636e\u8fc1\u79fb\u5230\u4e86\u6570\u636e\u5e93,\u4f7f\u5f97\u96c6\u7fa4\u6269\u5c55\u975e\u5e38\u65b9\u4fbf"),(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u51fa\u4e86Sync\u7ec4\u4ef6\u6838\u5fc3\u63a5\u53e3,\u901a\u8fc7\u6ce8\u89e3\u5bf9\u540c\u6b65\u7c7b\u578b\u8fdb\u884c\u533a\u5206,\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u6839\u636e\u81ea\u5df1\u9700\u6c42,\u53bb\u6269\u5c55\u4e0d\u540c\u6ce8\u518c\u4e2d\u5fc3,\u76ee\u524d\u5df2\u652f\u6301\u7684\u540c\u6b65\u7c7b\u578b:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Nacos\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,a.kt)("li",{parentName:"ul"},"Zookeeper\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,a.kt)("li",{parentName:"ul"},"Nacos\u6570\u636e\u540c\u6b65\u5230Zookeeper"),(0,a.kt)("li",{parentName:"ul"},"Eureka\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,a.kt)("li",{parentName:"ul"},"Consul\u6570\u636e\u540c\u6b65\u5230Nacos",(0,a.kt)("a",{name:"d384971e"}))))),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784"},"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB12VPaJVzqK1RjSZSgXXcpAVXa-886-752.png",alt:"image.png"}),(0,a.kt)("br",null),"\u63a7\u5236\u53f0",(0,a.kt)("br",null),"\u63d0\u4f9b\u4e86\u7cbe\u7b80Web\u64cd\u4f5c\u63a7\u5236\u53f0,\u652f\u6301\u56fd\u9645\u5316:",(0,a.kt)("br",null)),(0,a.kt)("a",{name:"b3408d06"}),"### \u540c\u6b65\u4efb\u52a1\u7ba1\u7406\u9875\u9762 ![](https://img.alicdn.com/tfs/TB1eSYyJ5LaK1RjSZFxXXamPFXa-2866-1064.png)",(0,a.kt)("a",{name:"091bc34b"}),"### \u6ce8\u518c\u4e2d\u5fc3\u7ba1\u7406\u9875\u9762",(0,a.kt)("a",{name:"53fdb015"}),"## ![image.png](https://img.alicdn.com/tfs/TB1e_rdJ7voK1RjSZFNXXcxMVXa-2876-1124.png)",(0,a.kt)("a",{name:"f6a633db"}),"## \u4f7f\u7528\u573a\u666f: * \u591a\u4e2a\u7f51\u7edc\u4e92\u901a\u7684Region\u4e4b\u95f4\u670d\u52a1\u5171\u4eab,\u6253\u7834Region\u4e4b\u95f4\u7684\u670d\u52a1\u8c03\u7528\u9650\u5236",(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Mo6yJ4jaK1RjSZKzXXXVwXXa-1136-798.png",alt:"image.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53cc\u5411\u540c\u6b65\u529f\u80fd,\u652f\u6301Dubbo+Zookeeper\u670d\u52a1\u5e73\u6ed1\u8fc1\u79fb\u5230Dubbo+Nacos,\u4eab\u53d7Nacos\u66f4\u52a0\u4f18\u8d28\u7684\u670d\u52a1")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Dza8J9zqK1RjSZPxXXc4tVXa-1728-838.png",alt:"image.png"})))}m.isMDXComponent=!0}}]);