"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>N});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,N=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(N,c(c({ref:n},p),{},{components:t})):r.createElement(N,c({ref:n},p))}));function N(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const a={title:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d",keywords:["CoreDNS","DNS-F"],description:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d"},c="Nacos DNS \u4f7f\u7528\u624b\u518c",l={unversionedId:"v2/ecology/use-nacos-with-coredns",id:"v2/ecology/use-nacos-with-coredns",title:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d",description:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/ecology/use-nacos-with-coredns.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-with-coredns",permalink:"/zh-cn/docs/next/v2/ecology/use-nacos-with-coredns",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d",keywords:["CoreDNS","DNS-F"],description:"Nacos \u878d\u5408CoreDNS \u4e0b\u53d1DNS\u57df\u540d"},sidebar:"docs",previous:{title:"NacosSync \u7528\u6237\u624b\u518c",permalink:"/zh-cn/docs/next/v2/ecology/use-nacos-sync"},next:{title:"\u5982\u4f55\u8d21\u732e",permalink:"/zh-cn/docs/next/v2/contribution/contributing"}},s={},i=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"\u670d\u52a1\u53d1\u73b0\u4f8b\u5b50",id:"\u670d\u52a1\u53d1\u73b0\u4f8b\u5b50",level:2}],p={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nacos-dns-\u4f7f\u7528\u624b\u518c"},"Nacos DNS \u4f7f\u7528\u624b\u518c"),(0,o.kt)("p",null,"\u672c\u63d2\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8eCoreDNS\u7684DNS-F\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u5c06Nacos\u4e0a\u6ce8\u518c\u7684\u670d\u52a1\u5bfc\u51fa\u4e3aDNS\u57df\u540d\u3002 \u672cDNS-F\u5ba2\u6237\u7aef\u662f\u5e94\u7528\u7a0b\u5e8f\u8fdb\u7a0b\u65c1\u8fb9\u7684\u4e00\u4e2a\u4e13\u7528\u4ee3\u7406\u8fdb\u7a0b\uff08side car\uff09\uff0c\u53ef\u4ee5\u5c06\u670d\u52a1\u540d\u4f5c\u4e3aDNS\u57df\u540d\u67e5\u8be2\u8bf7\u6c42\u8f6c\u53d1\u5230\u672c\u5ba2\u6237\u7aef\uff0c\u63d0\u4f9b\u670d\u52a1\u53d1\u73b0\u7684\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u8981\u6784\u5efa\u548c\u8fd0\u884c\u672c nacos-coredns \u63d2\u4ef6\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5fc5\u987b\u662f Linux \u6216 Mac\u3002 \u53e6\u5916\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684 nacos \u670d\u52a1\u7aef\u7248\u672c\u4e3a2.2\u6216\u66f4\u9ad8\u7ea7\u7248\u672c\uff0c\u4ee5\u53ca golang \u7248\u672c\u4e3a 1.17 \u6216\u66f4\u9ad8\u7ea7\u7248\u672c\uff0c \u5e76\u4e14\u5fc5\u987b\u6b63\u786e\u914d\u7f6e golang \u73af\u5883\uff08GOPATH\u3001GOROOT\uff09\u3002\u56e0\u4e3a\u9700\u8981\u652f\u6301 nacos2.x \u7248\u672c\u7684gRPC\u8fde\u63a5\u529f\u80fd\u548c go mod \u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/nacos-group/nacos-coredns-plugin.git \ncp nacos-coredns-plugin/bin/build.sh ~/\ncd ~/\nsh build.sh\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u8fd0\u884c\u672c nacos-coredns \u63d2\u4ef6\uff0c\u60a8\u9700\u8981\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u3002 \u4e00\u4e2a\u6807\u51c6\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},". {\n    log\n    nacos {\n    nacos_namespaceId public\n    nacos_server_host 127.0.0.1:8848\n    }\n    forward . /etc/resolv.conf\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"forward\uff1a\u672a\u5728 nacos \u6ce8\u518c\u7684\u57df\u540d\u5c06\u88ab\u8f6c\u53d1\u5230upstream\u3002"),(0,o.kt)("li",{parentName:"ul"},"nacos_namespaceId\uff1anacos namespaceId\uff0c\u9ed8\u8ba4\u4e3apublic\u3002"),(0,o.kt)("li",{parentName:"ul"},"nacos_server_host\uff1anacos \u670d\u52a1\u7aef\u7684IP\u5730\u5740\u548c\u7aef\u53e3\uff0c\u5982\u679c\u6709\u4e24\u4e2a\u6216\u591a\u4e2a nacos \u670d\u52a1\u7aef\uff0c\u7528\u9017\u53f7\u5206\u9694")),(0,o.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u90e8\u7f72\u4e00\u4e2anacos\u670d\u52a1\u7aef\u3002 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"\u90e8\u7f72\u53c2\u8003")),(0,o.kt)("li",{parentName:"ol"},"\u5176\u6b21\uff0c\u5728nacos\u4e0a\u6ce8\u518c\u670d\u52a1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7136\u540e\u8f93\u5165\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("strong",{parentName:"li"},"($path_to_corefile)")," \u548c\u6307\u5b9a\u7aef\u53e3 ",(0,o.kt)("strong",{parentName:"li"},"($dns_port)")," \uff0c\u8fd0\u884c\u672c\u63d2\u4ef6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$GOPATH/src/coredns/coredns   -conf $path_to_corefile   -dns.port $dns_port \n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/29425667/1663504581023-95437fee-0e3d-4b6a-851c-44a352dedd81.png",alt:null})),(0,o.kt)("h2",{id:"\u670d\u52a1\u53d1\u73b0\u4f8b\u5b50"},"\u670d\u52a1\u53d1\u73b0\u4f8b\u5b50"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f93\u5165\u670d\u52a1\u540d ",(0,o.kt)("strong",{parentName:"li"},"($nacos_service_name)")," \uff0c\u4ee5\u53ca\u63d2\u4ef6\u7684IP\u5730\u5740 ",(0,o.kt)("strong",{parentName:"li"},"($dns_ip)")," \u548c\u7aef\u53e3 ",(0,o.kt)("strong",{parentName:"li"},"($dns_port)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dig   $nacos_service_name   @$dns_ip   -p $dns_port \n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/29425667/1663504588231-341b38fe-da55-41eb-a24b-e3752b86faa4.png",alt:null})))}d.isMDXComponent=!0}}]);