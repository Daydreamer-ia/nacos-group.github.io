"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={title:"CONFIGURE ENCRYPTION",keywords:["AES","ENCRYPTION","CONFIGURE ENCRYPTION"],description:"CONFIGURE ENCRYPTION"},r=void 0,l={unversionedId:"v2/plugin/config-encryption-plugin",id:"version-1.X/v2/plugin/config-encryption-plugin",title:"CONFIGURE ENCRYPTION",description:"CONFIGURE ENCRYPTION",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/v2/plugin/config-encryption-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/config-encryption-plugin",permalink:"/en/docs/1.X/v2/plugin/config-encryption-plugin",draft:!1,tags:[],version:"1.X",frontMatter:{title:"CONFIGURE ENCRYPTION",keywords:["AES","ENCRYPTION","CONFIGURE ENCRYPTION"],description:"CONFIGURE ENCRYPTION"},sidebar:"docs",previous:{title:"Authorization Plugin",permalink:"/en/docs/1.X/v2/plugin/auth-plugin"},next:{title:"\u591a\u6570\u636e\u6e90",permalink:"/en/docs/1.X/v2/plugin/datasource-plugin"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To ensure the security of users' sensitive configuration data, Nacos provides a new feature of configuration encryption. The risk of user usage is reduced, and the configuration is no longer required to be encrypted separately.")),(0,i.kt)("h1",{id:"preconditions"},"Preconditions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Version:")),(0,i.kt)("p",null,"The old version is temporarily incompatible. Currently, it is only based on the 2.x version. The recommended version is > 2.0.4."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Embedded database startup:")),(0,i.kt)("p",null,"The database table config_info, config_info_beta, his_config_info needs to add a new field ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted_data_key")," to store the key used for encryption of each configuration item. This field has been added to the sql of the new version of the default table creation."),(0,i.kt)("p",null,"If you have used the single-machine mode of the embedded database before, you need to delete the nacos/data folder, and the table will be recreated after restarting."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MySQL start:")),(0,i.kt)("p",null,"The database table config_info, config_info_beta, his_config_info needs to add a new field ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted_data_key")," to store the key used for encryption of each configuration item. This field has been added to the sql of the new version of the default table creation."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For the currently built Nacos, use the following sql to add fields to the corresponding table:"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE table_name ADD COLUMN `encrypted_data_key` text  NOT NULL COMMENT '\u79d8\u94a5'"))),(0,i.kt)("h1",{id:"plug-in-implementation"},"Plug-in implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gvsu112vnnj314b0u0764.jpg",alt:null})),(0,i.kt)("p",null,"The operations of encryption and decryption are abstracted through the SPI mechanism, and Nacos provides the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"AES")," by default. Users can also customize the implementation of encryption and decryption. The specific implementation is in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-plugin")," repository."),(0,i.kt)("p",null,"When the Nacos server starts, all dependent encryption and decryption algorithms will be loaded, and then by publishing the prefix of the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"dataId")," to match whether encryption and decryption are required and the encryption and decryption algorithms used."),(0,i.kt)("p",null,"The configuration published by the client will be encrypted and decrypted by the filter on the client side, that is, the configuration is in cipher text during the transmission process. The configuration published by the console will be processed on the server side."),(0,i.kt)("h1",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"The Nacos encryption and decryption plug-in is pluggable, and it does not affect the operation of the core functions of Nacos. If you want to use the configuration encryption and decryption functions of Naocs, you need to refer to the implementation of the encryption algorithm separately. Both the client and the server use the AES encryption and decryption algorithm by adding the following dependencies. The server is recommended to add it to the config module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-aes-encryption-plugin</artifactId>\n            <version>${nacos-aes-encryption-plugin.version}</version>\n        </dependency>\n")),(0,i.kt)("p",null,"${nacos-aes-encryption-plugin.version} Get the latest version of the plugin\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The plugin doesn't upload to Maven Central Repository, you need to compile it by yourslfe")),(0,i.kt)("h1",{id:"how-to-compile"},"How to compile"),(0,i.kt)("p",null,"You need to compile ",(0,i.kt)("inlineCode",{parentName:"p"},"nacos")," and install to your local repository,before all the things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"mailto:git@github.com"},"git@github.com"),":alibaba/nacos.git"),(0,i.kt)("li",{parentName:"ol"},"cd nacos && mvn -B clean package install -Dmaven.test.skip=true")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if during this time occur an error that maven can't resolve ",(0,i.kt)("inlineCode",{parentName:"p"},"${revision}"),", you may need to update maven version to latest.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"mailto:git@github.com"},"git@github.com"),":nacos-group/nacos-plugin.git"),(0,i.kt)("li",{parentName:"ol"},"mvn install")),(0,i.kt)("p",null,"Done, enjoy it!"),(0,i.kt)("p",null,"Suggestion: upload to your company repository if you can"),(0,i.kt)("h1",{id:"create-encryption-configuration"},"Create encryption configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the Nacos console and click New Configuration."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxaklw10j21g20u0ac8.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The configuration prefix uses cipher-","[encryption algorithm name]","-dataId to identify that the configuration needs to be encrypted, and the system will automatically identify and encrypt it. For example use the AES algorithm to decrypt the configuration: cipher-aes-application-dev.yml."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxs40s2tj21b40u0whw.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Save to view the database"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxwhdc77j21xm0bumz2.jpg",alt:null})))))}d.isMDXComponent=!0}}]);