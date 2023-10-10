"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Authorization Plugin",keywords:["Authorization","Plugin"],description:"This article describes how to develop and use Nacos' authentication plugin."},l="Authorization Plugin",o={unversionedId:"v2/plugin/auth-plugin",id:"version-2.X/v2/plugin/auth-plugin",title:"Authorization Plugin",description:"This article describes how to develop and use Nacos' authentication plugin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/plugin/auth-plugin.md",sourceDirName:"v2/plugin",slug:"/v2/plugin/auth-plugin",permalink:"/en/docs/v2/plugin/auth-plugin",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Authorization Plugin",keywords:["Authorization","Plugin"],description:"This article describes how to develop and use Nacos' authentication plugin."},sidebar:"docs",previous:{title:"Nacos 2.0 \u5347\u7ea7\u6587\u6863",permalink:"/en/docs/v2/upgrading/2.0.0-upgrading"},next:{title:"CONFIGURE ENCRYPTION",permalink:"/en/docs/v2/plugin/config-encryption-plugin"}},p={},u=[{value:"Concepts in Authentication Plugins",id:"concepts-in-authentication-plugins",level:2},{value:"IdentityContext",id:"identitycontext",level:3},{value:"Resource",id:"resource",level:3},{value:"Action",id:"action",level:3},{value:"Server Plugin",id:"server-plugin",level:2},{value:"Load Server Plugin",id:"load-server-plugin",level:3},{value:"Use the default Nacos authentication plugin",id:"use-the-default-nacos-authentication-plugin",level:3},{value:"Client Plugin",id:"client-plugin",level:2},{value:"Default implementation",id:"default-implementation",level:3},{value:"Aliyun implementation",id:"aliyun-implementation",level:3},{value:"Custom Plugin",id:"custom-plugin",level:3},{value:"Plugin for other programming language",id:"plugin-for-other-programming-language",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorization-plugin"},"Authorization Plugin"),(0,i.kt)("p",null,"Since version 2.1.0, Nacos support to inject authentication plugins through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),", and select a plugin implementation in the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties ")," as the actual authentication service. This document will describe how to implement an authentication plugin and how to make it work."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Attention:\nAt present, the authentication plugin is still in the beta stage, and its API and interface definitions maybe modified with version upgrades. Please pay attention to the applicable version of your plugin.")),(0,i.kt)("h2",{id:"concepts-in-authentication-plugins"},"Concepts in Authentication Plugins"),(0,i.kt)("p",null,"Authentication, the common expression is to verify whether ",(0,i.kt)("strong",{parentName:"p"},"who")," can perform ",(0,i.kt)("strong",{parentName:"p"},"some operation")," on ",(0,i.kt)("strong",{parentName:"p"},"something"),". So when Nacos designs the authentication plugin, the authentication information abstracted as three main concepts: ",(0,i.kt)("inlineCode",{parentName:"p"},"identity context"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action type"),"."),(0,i.kt)("h3",{id:"identitycontext"},"IdentityContext"),(0,i.kt)("p",null,"IdentityContext is the abstraction of the request originator in the Nacos authentication plugin. Due to different plugin implementations, the identity context may be different, for example, username and password are one type of identity information, and accessToken is another type of identity information. Therefore, the IdentityContext does not limit the specific size and key. The plugin implementation can customize any size and keywords. Nacos will automatically obtain the identity keywords defined by the plugin implementation and their corresponding value from the request and inject them into IdentityContext which will be used in plugins."),(0,i.kt)("p",null,"IdentityContext must include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"remote_ip"),(0,i.kt)("td",{parentName:"tr",align:null},"source ip of request")))),(0,i.kt)("h3",{id:"resource"},"Resource"),(0,i.kt)("p",null,"Resource is the abstraction of the object operated by the request in the Nacos authentication plugin. It is mainly defined by Nacos, which can be a configuration, a service, or a group."),(0,i.kt)("p",null,"Resource mainly consists of the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"namespaceId"),(0,i.kt)("td",{parentName:"tr",align:null},"Namespace ID of the requested resource, some interfaces may not have this value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"group"),(0,i.kt)("td",{parentName:"tr",align:null},"The group name of the requested resource, some interfaces may not have this value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The resource name of the requested resource, such as the service name or the configuration dataId, some interfaces may be defined special values, such as ",(0,i.kt)("inlineCode",{parentName:"td"},"nacos/admin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the requested resource, which may be an enumeration value in ",(0,i.kt)("inlineCode",{parentName:"td"},"SignType"),", which mainly represents the module related to the resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"properties"),(0,i.kt)("td",{parentName:"tr",align:null},"The extended configuration of the requested resource, which does not belong to the above-mentioned resource-related information, will be placed in properties, such as the Request name of the Grpc request or the tags on the ",(0,i.kt)("inlineCode",{parentName:"td"},"@Secured")," annotation, etc.")))),(0,i.kt)("h3",{id:"action"},"Action"),(0,i.kt)("p",null,"Action is the abstraction of the request operation in the Nacos authentication plugin, mainly include the read operation ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," and write operation ",(0,i.kt)("inlineCode",{parentName:"p"},"W"),". For details, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionTypes")," enumeration."),(0,i.kt)("h2",{id:"server-plugin"},"Server Plugin"),(0,i.kt)("p",null,"To develop a Nacos server-side authentication plugin, developer first need to depend on the relevant API of the authentication plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-auth-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the version of Nacos for your development plugin."),(0,i.kt)("p",null,"Then implement interface ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.auth.spi.server.AuthPluginService"),", and put your implementation into services of SPI."),(0,i.kt)("p",null,"The methods of interface in following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"method name"),(0,i.kt)("th",{parentName:"tr",align:null},"parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"returns"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getAuthServiceName"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the plugin. When the name is the same, the plugin loaded later will overwrite the plugin loaded first.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identityNames"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"Collection","<","String>"),(0,i.kt)("td",{parentName:"tr",align:null},"The identity context keywords of the plugin. Nacos will obtain the parameters with these keywords as the key from the request and inject them into the IdentityContext.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enableAuth"),(0,i.kt)("td",{parentName:"tr",align:null},"ActionTypes,SignType"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Called before ",(0,i.kt)("inlineCode",{parentName:"td"},"validateIdentity")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"validateAuthority"),", the plugin can decide whether to authenticate this type of operation or this type of module.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"validateIdentity"),(0,i.kt)("td",{parentName:"tr",align:null},"IdentityContext, Resource"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Validate identity, called before ",(0,i.kt)("inlineCode",{parentName:"td"},"validateAuthority"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"validateAuthority"),(0,i.kt)("td",{parentName:"tr",align:null},"IdentityContext, Permission"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Validate permissions, called when ",(0,i.kt)("inlineCode",{parentName:"td"},"validateIdentity")," returns ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h3",{id:"load-server-plugin"},"Load Server Plugin"),(0,i.kt)("p",null,"After the plugin finished, it needs to be packaged into jar/zip and places in the classpath of the nacos server. If you don't know how to add plugins into the classpath, please place plugins under ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directly."),(0,i.kt)("p",null,"After Adding plugins into classpath, also need to modify some configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"### The plugin name nacos using\uff0cshould be same as the return value of  `com.alibaba.nacos.plugin.auth.spi.server.AuthPluginService#getAuthServiceName`\nnacos.core.auth.system.type=${authServiceName}\n\n### open authorization\nnacos.core.auth.enabled=true\n")),(0,i.kt)("p",null,"Restart nacos cluster, and after any request, some logs can be saw in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/core-auth.log"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[AuthPluginManager] Load AuthPluginService(xxxx) AuthServiceName(xxx) successfully.\n")),(0,i.kt)("h3",{id:"use-the-default-nacos-authentication-plugin"},"Use the default Nacos authentication plugin"),(0,i.kt)("p",null,"Nacos provides a simple authentication plugin. It is a weak authentication system to prevent business misuse, not a strong authentication system to prevent malicious attacks. The usage detail see ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/v2/guide/user/auth"},"User Guide-Authentication"),"."),(0,i.kt)("h2",{id:"client-plugin"},"Client Plugin"),(0,i.kt)("p",null,"The authentication plugin for Nacos Client is to inject authentication-related identity context into the request so that each request can be recognized by the server authentication plugin."),(0,i.kt)("p",null,"The Java client of Nacos comes with two implementations by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A default implementation using ",(0,i.kt)("inlineCode",{parentName:"li"},"username"),",",(0,i.kt)("inlineCode",{parentName:"li"},"password")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"accessToken"),";"),(0,i.kt)("li",{parentName:"ul"},"An Aliyun implementation using ",(0,i.kt)("inlineCode",{parentName:"li"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"secretKey"),".")),(0,i.kt)("h3",{id:"default-implementation"},"Default implementation"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," are included in the properties passed into a nacos client instance, the nacos client will use the simple authentication plugin to inject identity context;\ne.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Properties properties = new Properties();\nproperties.setProperty(PropertyKeyConst.SERVER_ADDR, "localhost:8848");\nproperties.setProperty(PropertyKeyConst.USERNAME, "nacos");\nproperties.setProperty(PropertyKeyConst.PASSWORD, "nacos");\nNamingFactory.createNamingService(properties);\nConfigFactory.createConfigService(properties);\n')),(0,i.kt)("p",null,"The plugin will login through ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," asynchronously, and obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken")," after the login is successful. Finally, the plugin will inject the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken")," into all requests, which make the server plugins can validate identity and permission according to ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken"),"."),(0,i.kt)("h3",{id:"aliyun-implementation"},"Aliyun implementation"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," are included in the properties, the nacos client will use the aliyun authentication plugin to inject identity context."),(0,i.kt)("p",null,"e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Properties properties = new Properties();\nproperties.setProperty(PropertyKeyConst.SERVER_ADDR, "localhost:8848");\nproperties.setProperty(PropertyKeyConst.ACCESS_KEY, "nacos");\nproperties.setProperty(PropertyKeyConst.SECRET_KEY, "nacos");\nNamingFactory.createNamingService(properties);\nConfigFactory.createConfigService(properties);\n')),(0,i.kt)("p",null,"The plugin will generate signatures by ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," and the request resource, and inject into the request."),(0,i.kt)("p",null,"The identity context may be different for the different request resource:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Identity keys"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NamingService"),(0,i.kt)("td",{parentName:"tr",align:null},"ak"),(0,i.kt)("td",{parentName:"tr",align:null},"accessKey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NamingService"),(0,i.kt)("td",{parentName:"tr",align:null},"signature"),(0,i.kt)("td",{parentName:"tr",align:null},"naming signature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NamingService"),(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"signature datum, include timestamp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConfigService"),(0,i.kt)("td",{parentName:"tr",align:null},"Spas-AccessKey"),(0,i.kt)("td",{parentName:"tr",align:null},"accessKey")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConfigService"),(0,i.kt)("td",{parentName:"tr",align:null},"Spas-Signature"),(0,i.kt)("td",{parentName:"tr",align:null},"config signature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConfigService"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"request timestamp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConfigService"),(0,i.kt)("td",{parentName:"tr",align:null},"Spas-SecurityToken"),(0,i.kt)("td",{parentName:"tr",align:null},"Temporary token (used when Alibaba Cloud STS function is enabled)")))),(0,i.kt)("p",null,"Developers can validate authentication and authorization in the server plugin based on the above information."),(0,i.kt)("h3",{id:"custom-plugin"},"Custom Plugin"),(0,i.kt)("p",null,"Considering that the developer's authentication plugin may have custom identity keywords, the Java client of Nacos can also use the SPI to inject the plugin implementation."),(0,i.kt)("p",null,"To develop a Nacos client authentication plugin, developers first need to depend on the relevant API of the authentication plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-auth-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the version of Nacos for your development plugin."),(0,i.kt)("p",null,"Then implement interface ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.auth.spi.client.ClientAuthService"),", and put your implementation into services of SPI."),(0,i.kt)("p",null,"The methods of interface in following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"method name"),(0,i.kt)("th",{parentName:"tr",align:null},"parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"returns"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setServerList"),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","String>,Nacos server address list"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"Called during initialization, to inject the Nacos service list, which is convenient for plugins to access the nacos server, such as calling the login interface, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setNacosRestTemplate"),(0,i.kt)("td",{parentName:"tr",align:null},"NacosRestTemplate,http client for Nacos"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"Called during initialization, to inject Nacos' http client, which is convenient for plugins to access the nacos server, such as calling the login interface, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"login"),(0,i.kt)("td",{parentName:"tr",align:null},"Properties,properties of initialization"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"mainly performs the conversion of identity context, such as ",(0,i.kt)("inlineCode",{parentName:"td"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"password")," is converted to ",(0,i.kt)("inlineCode",{parentName:"td"},"accessToken"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getLoginIdentityContext"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource"),(0,i.kt)("td",{parentName:"tr",align:null},"IdentityContext"),(0,i.kt)("td",{parentName:"tr",align:null},"Get the identity context converted by the login interface, and the client will inject all the content of the returned object into the request")))),(0,i.kt)("p",null,"Developers can choose to inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.auth.spi.client.AbstractClientAuthService"),", which implements ",(0,i.kt)("inlineCode",{parentName:"p"},"setServerList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setNacosRestTemplate"),"."),(0,i.kt)("p",null,"Then package the developed client plugin into jar/zip and put it into the classpath of your application and take effect automatically."),(0,i.kt)("h3",{id:"plugin-for-other-programming-language"},"Plugin for other programming language"),(0,i.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);