"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"CustomEnvironment",keywords:["CustomEnvironment","CustomConfiguration","DatabasePasswordencryption"],description:"Nacos Custom environment variable plugin, can customize the extension server configuration and other functions, such as database password encryption."},i="CustomEnvironmentPlugins",l={unversionedId:"v2/plugin/custom-environment-plugin",id:"v2/plugin/custom-environment-plugin",title:"CustomEnvironment",description:"Nacos Custom environment variable plugin, can customize the extension server configuration and other functions, such as database password encryption.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/v2/plugin/custom-environment-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/custom-environment-plugin",permalink:"/en/docs/next/v2/plugin/custom-environment-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"CustomEnvironment",keywords:["CustomEnvironment","CustomConfiguration","DatabasePasswordencryption"],description:"Nacos Custom environment variable plugin, can customize the extension server configuration and other functions, such as database password encryption."},sidebar:"docs",previous:{title:"Tracing",permalink:"/en/docs/next/v2/plugin/trace-plugin"},next:{title:"Java SDK",permalink:"/en/docs/next/v2/guide/user/sdk"}},p={},s=[{value:"Plugin Development",id:"plugin-development",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customenvironmentplugins"},"CustomEnvironmentPlugins"),(0,a.kt)("p",null,"Since version 2.2.0, Nacos support to inject custom environment plugins through ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),",to customize the configuration of nacos in the plugin and do it the way you expect (such as database password encryption).\nThis document will describe how to implement a custom environment plugin and how to make it work."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Attention:\nAt present, the track tracing plugin is still in the beta stage, and its API and interface definitions maybe modified with version upgrades. Please pay attention to the applicable version of your plugin.")),(0,a.kt)("h2",{id:"plugin-development"},"Plugin Development"),(0,a.kt)("p",null,"To develop a Nacos custom environment plugin, developer first need to depend on the relevant API of the custom environment plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-custom-environment-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the version of Nacos for your development plugin."),(0,a.kt)("p",null,"Then implement interface ",(0,a.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.environment.spi.CustomEnvironmentPluginService"),", and put your implementation into services of SPI."),(0,a.kt)("p",null,"The methods of interface in following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"method name"),(0,a.kt)("th",{parentName:"tr",align:null},"parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"returns"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pluginName"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the plugin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"propertyKey"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Set<String>")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the name of the configuration item that you want to customize for the server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"order"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"The higher the number, the higher the priority of the plugin. Multiple plugins customize the same configuration item at the same time. The plugin with a higher priority overwrites the plugin with a lower priority.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customValue"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Map<String, Object>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Map<String, Object>")),(0,a.kt)("td",{parentName:"tr",align:null},"The entry parameter is the value of the configuration item corresponding to propertyKey, and the exit parameter is the value of the self-defined configuration item.")))),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-group/nacos-plugin"),"\uff0cproviding a demo implementation for custom environment plugin. This demo implements the database password Base64 decryption,\nSo,you can set the ciphertext database password instead of the plaintext password in the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties")," configuration file."),(0,a.kt)("h1",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"After the plugin finished, it needs to be packaged into jar/zip and places in the classpath of the nacos server. If you don't know how to add plugins into the classpath, please place plugins under ",(0,a.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directly."),(0,a.kt)("p",null,"After Adding plugins into classpath, also need to modify some configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"### open custom environment\nnacos.custom.environment.enabled=true\n")),(0,a.kt)("p",null,"Restart nacos cluster, some logs can be saw in ",(0,a.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/core-auth.log"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[CustomEnvironmentPluginManager] Load customEnvironmentPluginService(xxx) customEnvironmentPluginName(xxx) successfully..\n")))}m.isMDXComponent=!0}}]);