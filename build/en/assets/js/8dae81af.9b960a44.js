"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9340],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"FAQ",keywords:["Nacos","FAQ"],description:"Nacos FAQ"},i="FAQ",s={unversionedId:"faq",id:"version-2.X/faq",title:"FAQ",description:"Nacos FAQ",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/faq.md",sourceDirName:".",slug:"/faq",permalink:"/en/docs/faq",draft:!1,tags:[],version:"2.X",frontMatter:{title:"FAQ",keywords:["Nacos","FAQ"],description:"Nacos FAQ"}},l={},c=[{value:"Nacos standard questions",id:"nacos-standard-questions",level:2},{value:"Nacos operational questions",id:"nacos-operational-questions",level:2},{value:"Nacos used questions",id:"nacos-used-questions",level:2},{value:"Nacos principle questions",id:"nacos-principle-questions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos standard questions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.1"},"What is Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.2"},"Nacos how to support more than the environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.3"},"Nacos whether production is available")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.4"},"Nacos version plan")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.5"},"Nacos dependent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.6"},"Nacos using open source licenses")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos operational questions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.1"},"Nacos standalone deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.2"},"Nacos standalone deployment using Mysql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.3"},"Nacos production deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.4"},"Nacos Docker deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.5"},"How to deploy in k8s Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.6"},"How to monitor Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.7"},"Nacos cannot start in Docker, always print Nacos is starting...")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos used questions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.1"},"Zookeeper service can be migrated to Nacos?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.2"},"Nacos support multiple configuration files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.3"},"Nacos support Dubbo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.4"},"Nacos support Spring system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.5"},"Don't use Nacos SDK how to access the Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.6"},"Nacos support for multiple languages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.7"},"Nacos 0.8 version logon failure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.8"},"Server error ",(0,o.kt)("inlineCode",{parentName:"a"},"java.lang.IllegalStateException: unable to find local peer: 127.0.0.1:8848"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.9"},"Nacos configuration for encryption")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.10"},"Nacos at 401 error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.11"},"Nacos weight not to take effect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.12"},"Nacos how to enlarge shrinks capacity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.13"},"Nacos client modify the log level")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.14"},"Nacos and Zipkin integration ",(0,o.kt)("inlineCode",{parentName:"a"},"Service not found")," error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.15"},"Why service registration is successful, the console can't see")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.19"},(0,o.kt)("inlineCode",{parentName:"a"},"com.alibaba.nacos.consistency.entity")," can't be found in source codes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.20"},"How to use Beta releases")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos principle questions"))),(0,o.kt)("h2",{id:"nacos-standard-questions"},"Nacos standard questions"),(0,o.kt)("h4",{id:"1.1"},"What is Nacos"),(0,o.kt)("p",null,"Nacos dedicated to help you find, micro configuration and management services. Nacos provides a set of simple and easy to use feature set, help you quickly realize dynamic service discovery, service configuration, service metadata, and traffic management. Details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/what-is-nacos.html"},"Nacos website"),"."),(0,o.kt)("h4",{id:"1.2"},"Nacos how to support more than the environment"),(0,o.kt)("p",null,"In daily use are often need different environment, such as daily, pretest, online environment, if it is a logical isolation, can use the namespace Nacos support namespace to support more environmental isolation, can create multiple namespaces in Nacos console. If you need physical isolation, will deploy more sets of Nacos environment."),(0,o.kt)("h4",{id:"1.3"},"Nacos whether production is available"),(0,o.kt)("p",null,"Nacos in January 2019 issued a Pre - GA version, to support the security isolation, monitoring and service migration on the last mile of production, in a more stable support the user's production environment. Details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.oschina.net/news/104019/nacos-0-8-0-pre-ga"},"Nacos release v0.8.0 Pre - GA version, the safe and stable production"),"."),(0,o.kt)("h4",{id:"1.4"},"Nacos version plan"),(0,o.kt)("p",null,"Nacos 0.8.0 to support production available, version 1.0 to mass production is available, version 2.0 plan and K8s, Spring Cloud, and further integration Service Mesh, Serverless, details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/roadmap.html"},"Nacos roadmap"),"."),(0,o.kt)("h4",{id:"1.5"},"Nacos dependent"),(0,o.kt)("p",null,"In stand-alone mode, Nacos without any rely on, in cluster mode, Nacos rely on Mysql storage, details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/deployment.html"},"Nacos deployment"),"."),(0,o.kt)("h4",{id:"1.6"},"Nacos using open source licenses"),(0,o.kt)("p",null,"Nacos using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/LICENSE"},"Apache 2.0"),"."),(0,o.kt)("h2",{id:"nacos-operational-questions"},"Nacos operational questions"),(0,o.kt)("h4",{id:"2.1"},"Nacos standalone deployment"),(0,o.kt)("p",null,"You can refer to the manual Nacos website deployment ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start.html"},"quick start"),"."),(0,o.kt)("h4",{id:"2.2"},"Nacos standalone deployment using Mysql"),(0,o.kt)("p",null,"Nacos stand-alone mode defaults to using the embedded database as the storage engine, if you want to change your mysql installation, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/deployment.html"},"website document"),"."),(0,o.kt)("h4",{id:"2.3"},"Nacos production deployment"),(0,o.kt)("p",null,"Production environment using Nacos in order to achieve high availability cannot use stand-alone mode, need to build Nacos cluster, specific details can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/cluster-mode-quick-start.html"},"the manual cluster deployment"),"."),(0,o.kt)("h4",{id:"2.4"},"Nacos Docker deployment"),(0,o.kt)("p",null,"In addition to using compressed package deployment Nacos, Nacos also provides a corresponding Docker image, when Nacos release new versions, Nacos will release the corresponding image version supports Docker deployment.Specific details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start-docker.html"},"Nacos Docker"),"."),(0,o.kt)("h4",{id:"2.5"},"How to deploy in k8s Nacos"),(0,o.kt)("p",null,"In production deployment Nacos cluster, if for Nacos expansion operation, need to manually change the cluster IP file, start a new Nacos service.In order to automate operations, k8s Nacos and combined use of StatefulSets provides automatic operations plan, to dynamic scalability Nacos capacity, specific details reference ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-k8s/blob/master/README.md"},"Kubernetes Nacos"),"."),(0,o.kt)("h4",{id:"2.6"},"How to monitor Nacos"),(0,o.kt)("p",null,"Nacos0.8 version provides the Metrics data exposed ability, can pass the Metrics data to monitor the running status of Nacos, the content of the details you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/monitor-guide.html"},"Nacos monitor"),"."),(0,o.kt)("h4",{id:"2.7"},"Nacos cannot start in Docker, always print Nacos is starting..."),(0,o.kt)("p",null,"The reason may be due to insufficient memory in the Docker environment, causing other services to fail to start normally, and finally causing the service to report an error and keep restarting. You can try to solve it by increasing the Docker memory limit."),(0,o.kt)("h2",{id:"nacos-used-questions"},"Nacos used questions"),(0,o.kt)("h4",{id:"3.1"},"Zookeeper service can be migrated to Nacos?"),(0,o.kt)("p",null,"Can through the Nacos - Sync moved the Zookeeper service and Nacos, can also be migrated from Nacos Zookeeper, specific details can be used as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paderlol/nacos-sync-example"},"Nacos Sync reference"),"."),(0,o.kt)("h4",{id:"3.2"},"Nacos support multiple configuration files"),(0,o.kt)("p",null,"Nacos through Spring Cloud Alibaba Nacos Config support multiple configuration files, configuration can be stored in a separate configuration file.The associated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/320"},"issue"),", details refer to the document ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Nacos-config"},"Spring Cloud Alibaba Nacos Config"),"."),(0,o.kt)("h4",{id:"3.3"},"Nacos support Dubbo"),(0,o.kt)("p",null,"Nacos version 0.6 and Dubbo integration, support the use of Nacos as registry, related ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/390"},"issue"),", details refer to the document ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/use-nacos-with-dubbo.html"},"Nacos and Dubbo fusion become registry"),"."),(0,o.kt)("h4",{id:"3.4"},"Nacos support Spring system"),(0,o.kt)("p",null,"Nacos perfect supports the Sping technology stack, details refer to the document ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start-spring.html"},"Nacos Spring"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start-spring-boot.html"},"Nacos Spring Boot"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start-spring-cloud.html"},"Spring Cloud"),"."),(0,o.kt)("h4",{id:"3.5"},"Don't use Nacos SDK how to access the Nacos"),(0,o.kt)("p",null,"Nacos network interaction is implemented based on Http protocol, provides the ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/open-api"},"Open-API")," can easily achieve Nacos access."),(0,o.kt)("h4",{id:"3.6"},"Nacos support for multiple languages"),(0,o.kt)("p",null,"Nacos currently only supports Java, support for other languages are being developed, also need your support to build together."),(0,o.kt)("h4",{id:"3.7"},"Nacos 0.8 version logon failure"),(0,o.kt)("p",null,"Nacos version 0.8 when using its and no ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable, Nacos can launch successful, because ",(0,o.kt)("inlineCode",{parentName:"p"},"yum install")," installed its the Java command to register a beneath ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin")," directory, and so can cause abnormal ",(0,o.kt)("inlineCode",{parentName:"p"},"SignatureException"),".This problem has been repair, version 0.9 release, the specific details can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/711"},"issue"),"."),(0,o.kt)("h4",{id:"3.8"},"Server error java.lang.IllegalStateException: unable to find local peer: 127.0.0.1:8848"),(0,o.kt)("p",null,"This problem because Nacos get native IP, don't get to the correct external IP. The need to guarantee the ",(0,o.kt)("inlineCode",{parentName:"p"},"InetAddress.getLocalHost().getHostAddress()")," or the result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname -i")," was with the cluster. The conf configuration of IP is the same."),(0,o.kt)("h4",{id:"3.9"},"Nacos configuration for encryption"),(0,o.kt)("p",null,"Nacos plan in 1.X version's ability to provide encryption, currently does not support encryption, can only rely on the SDK prepared encryption endures Nacos again."),(0,o.kt)("h4",{id:"3.10"},"Nacos at 401 error"),(0,o.kt)("p",null,"Nacos server error, check the server logs, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/816"},"issue"),"."),(0,o.kt)("h4",{id:"3.11"},"Nacos weight not to take effect"),(0,o.kt)("p",null,"Nacos console editors weights, at present from SpringCloud client and Dubbo client didn't get through, so can't take effect. For SpringCloud client application can realize the load balancer Ribbon for weighting filter."),(0,o.kt)("h4",{id:"3.12"},"Nacos how to enlarge shrinks capacity"),(0,o.kt)("p",null,"Currently supported modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.conf")," file in a way that expanding capacity, after the change without restart, the Server will automatically refresh the new content to the file."),(0,o.kt)("h4",{id:"3.13"},"Nacos client modify the log level"),(0,o.kt)("p",null,"Configuration - D parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.naming.log.level")," set naming the client log level, such as setting for the error:",(0,o.kt)("inlineCode",{parentName:"p"},"-Dcom.alibaba.nacos.naming.log.level=error")," Similarly, - D parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.config.log.level")," is used to set the config client log level."),(0,o.kt)("h4",{id:"3.14"},"Nacos and Zipkin integration Service not found error"),(0,o.kt)("p",null,"Configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-seluth")," parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"spring.zipkin.discovery-client-enabled=false"),"."),(0,o.kt)("p",null,"If there is still a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service not found")," error, is recommended to use the open-api will Zipkin-server instance is registered as a permanent Service:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?port=9411&healthy=true&ip=127.0.0.1&weight=1.0&serviceName=zipkin-server&ephemeral=false&namespaceId=public'")),(0,o.kt)("p",null,"Then, went to nacos console, find a service called ",(0,o.kt)("inlineCode",{parentName:"p"},"zipkin-server")," service, find the cluster configuration, set the health examination mode to ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP"),", port number of ",(0,o.kt)("inlineCode",{parentName:"p"},"9411")," (zipkin-server port)."),(0,o.kt)("h4",{id:"3.15"},"Why service registration is successful, the console can't see"),(0,o.kt)("p",null,"This problem appeared in cluster mode, in the use of nacos cluster pattern, ensure that all of the machine time is consistent, can appear otherwise unable to synchronize data."),(0,o.kt)("h4",{id:"3.19"}," `com.alibaba.nacos.consistency.entity` can't be found in source codes"),(0,o.kt)("p",null,"This package will be auto-generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"protobuf"),", so if you want to read source code or do some develop, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn compile")," to generate them. If you are using IDEA, you can also use IDEA's protobuf plugin."),(0,o.kt)("h4",{id:"3.20"},"How to use Beta releases"),(0,o.kt)("p",null,'Service - a service in 192.168.31.114 192.168.31.115, 192.168.31.116 launched three instances.\nWe are thinking of them 192.168.31.114 instance configuration items ". The user password "to change the value of XXX (i.e., Beta release), 192.168.31.115, 192.168.31.116 configuration does not change.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"beta",src:a(69326).Z,width:"1652",height:"745"})),(0,o.kt)("h2",{id:"nacos-principle-questions"},"Nacos principle questions"))}d.isMDXComponent=!0},69326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/beta-4a8440c316abba7b86130848bbab5c67.png"}}]);