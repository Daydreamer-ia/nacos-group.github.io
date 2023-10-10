"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6864],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(v,s(s({ref:n},l),{},{components:t})):r.createElement(v,s({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae",keywords:["Istio","xDs","Envoy"],description:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae"},s="Istio \u6307\u5357",c={unversionedId:"v2/ecology/use-nacos-with-istio",id:"v2/ecology/use-nacos-with-istio",title:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae",description:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/ecology/use-nacos-with-istio.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-with-istio",permalink:"/zh-cn/docs/next/v2/ecology/use-nacos-with-istio",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae",keywords:["Istio","xDs","Envoy"],description:"Nacos \u878d\u5408Istio \u4e0b\u53d1xDS\u534f\u8bae"}},i={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"CDS \u793a\u4f8b",id:"cds-\u793a\u4f8b",level:2},{value:"EDS \u793a\u4f8b",id:"eds-\u793a\u4f8b",level:2},{value:"\u5168\u91cf CDS \u793a\u4f8b",id:"\u5168\u91cf-cds-\u793a\u4f8b",level:2},{value:"\u589e\u91cf EDS \u793a\u4f8b",id:"\u589e\u91cf-eds-\u793a\u4f8b",level:2}],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"istio-\u6307\u5357"},"Istio \u6307\u5357"),(0,o.kt)("p",null,"\u652f\u6301\u4e86 xDS \u534f\u8bae\u4e2d\u7684 CDS\u3001EDS \u670d\u52a1\uff0c\u5e76\u4e3a EDS \u4ee5\u53ca MCP \u5b9e\u73b0\u4e86\u589e\u91cf\u63a8\u9001\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 Envoy \u6216\u5176\u4ed6\u652f\u6301 xDS \u534f\u8bae\u7684\u5ba2\u6237\u7aef\u4e0e Nacos \u8fdb\u884c\u5bf9\u63a5\uff0c\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u53d1\u884c\u5305\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos/conf/application.properties")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos.istio.mcp.server.enabled")," \u4e3a true\uff1b"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6e90\u7801\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos/distribution/conf/application.properties")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos.istio.mcp.server.enabled")," \u4e3a true \u3002"),(0,o.kt)("p",null,"\u82e5\u8981\u4f7f\u7528 MCP \u589e\u91cf\u670d\u52a1\uff0c\u9664\u4e0a\u8ff0\u914d\u7f6e\u9700\u4fee\u6539\u5916\uff0c\u8fd8\u9700\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos/istio/misc/IstioConfig")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos.istio.server.full")," \u4e3a false\u3002"),(0,o.kt)("h3",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,o.kt)("p",null,"\u5173\u4e8e\u5ba2\u6237\u7aef\uff0c\u4e0b\u9762\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f Envoy\uff0c\u53ef\u76f4\u63a5\u4e0b\u8f7d Envoy \u6216\u521b\u5efa\u955c\u50cf\u5e76\u5c06\u4e0b\u8ff0\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u6302\u8f7d\u5373\u53ef\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config"),"\uff1a\u5176\u4e2d\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u6839\u636e\u9700\u6c42\u53ef\u81ea\u884c\u66f4\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'node:\n  cluster: test-cluster\n  id: test-idn\n\nadmin:\n  address:\n    socket_address: { address: 0.0.0.0, port_value: 15000 }\n\ndynamic_resources:\n  ads_config:\n    api_type: GRPC\n    transport_api_version: V3\n    grpc_services:\n    - envoy_grpc:\n        cluster_name: nacos_xds\n  cds_config:\n    ads: {}\n  lds_config:\n    path: /etc/envoy/lds.yaml\n  # ads: {}\n\nstatic_resources:\n  clusters:\n  - type: STATIC\n    connect_timeout: 1s\n    typed_extension_protocol_options:\n      envoy.extensions.upstreams.http.v3.HttpProtocolOptions:\n        "@type": type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\n        explicit_http_config:\n          http2_protocol_options: {}\n    name: nacos_xds \n    load_assignment:\n      cluster_name: nacos_xds \n      endpoints:\n      - lb_endpoints:\n        - endpoint:\n            address:\n              socket_address:\n                address: 127.0.0.1 \n                port_value: 18848\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lds"),"\uff1a\u5bf9\u4e8e\u76d1\u542c\u7684\u670d\u52a1\u83b7\u53d6 CDS \u540e\u4f1a\u4e3b\u52a8\u5411\u670d\u52a1\u7aef\u83b7\u53d6 EDS\uff0c\u76d1\u542c\u7684\u670d\u52a1\u53ef\u81ea\u884c\u66f4\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n- "@type": type.googleapis.com/envoy.config.listener.v3.Listener\n  name: listener_0\n  address:\n    socket_address: { address: 0.0.0.0, port_value: 80 }\n  # listener_filters:\n  # - name: "envoy.filters.listener.tls_inspector"\n  filter_chains:\n  - filters:\n    - name: envoy.filters.network.http_connection_manager\n      typed_config:\n        "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\n        stat_prefix: ingress_http\n        access_log:\n        - name: envoy.access_loggers.stdout\n          typed_config:\n            "@type": type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog\n        codec_type: AUTO\n        route_config:\n          name: local_route\n          virtual_hosts:\n          - name: local_service\n            domains: ["*"]\n            routes:\n            - match: { prefix: "/" }\n              name: test\n              route:\n                cluster: outbound|8071||service-provider.DEFAULT-GROUP.e77d7925-1c90-4fa9-93cb-83153a099636.nacos\n        http_filters:\n        - name: envoy.filters.http.router\n')),(0,o.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("p",null,"\u6ce8\uff1a\u540c\u4e00\u670d\u52a1\u4e0b\u7684\u5404\u4e2a\u5b9e\u4f8b\u4f7f\u7528\u7684\u534f\u8bae\u9700\u4e00\u81f4\uff0cEDS \u9ed8\u8ba4\u4f7f\u7528\u589e\u91cf\u63a8\u9001\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u90e8\u7f72 Nacos\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"\u90e8\u7f72\u53c2\u8003"),"\uff1b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6309\u4e0a\u8ff0\u8981\u6c42\u4fee\u6539\u914d\u7f6e\uff1b")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u670d\u52a1\u5668\uff0c\u8be6\u7ec6\u7684\u542f\u52a8\u547d\u4ee4\u53ef\u5728\u4e0a\u8ff0\u90e8\u7f72\u53c2\u8003\u4e2d\u67e5\u770b\uff1b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash startup.sh -m standalone -p embedded\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker start envoy\n")))),(0,o.kt)("h2",{id:"cds-\u793a\u4f8b"},"CDS \u793a\u4f8b"),(0,o.kt)("p",null,"\u6ce8\uff1a\u65e5\u5fd7\u5728 nacos/logs/istio-main.log \u67e5\u770b"),(0,o.kt)("p",null,"\u793a\u4f8b\u4e2d\u6ce8\u518c\u7684\u670d\u52a1\u914d\u7f6e\u5982\u4e0b\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-discovery-example"},"\u793a\u4f8b\u53c2\u8003"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"server.port=8071\nspring.application.name=service-provider\nspring.cloud.nacos.discovery.namespace=e77d7925-1c90-4fa9-93cb-83153a099636\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/28990648/1666247341241-4e9b2dde-55c7-43ae-af1e-dc081565ab72.png",alt:"CDS"})),(0,o.kt)("h2",{id:"eds-\u793a\u4f8b"},"EDS \u793a\u4f8b"),(0,o.kt)("p",null,"\u670d\u52a1\u914d\u7f6e\u5982\u4e0a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/28990648/1666247341176-fe312687-6488-41c2-bdd1-346d7a344bd2.png",alt:"EDS"})),(0,o.kt)("h2",{id:"\u5168\u91cf-cds-\u793a\u4f8b"},"\u5168\u91cf CDS \u793a\u4f8b"),(0,o.kt)("p",null,"\u73b0\u6ce8\u518c\u4e24\u4e2a\u670d\u52a1\uff0c\u5176\u914d\u7f6e\u5206\u522b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#service-provider\nserver.port=8071\nspring.application.name=service-provider\nspring.cloud.nacos.discovery.namespace=e77d7925-1c90-4fa9-93cb-83153a099636\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\n\n#service-consumer\nserver.port=8080\nspring.application.name=service-consumer\nspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,o.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4ec5\u4fee\u6539 service-consumer \u670d\u52a1\u914d\u7f6e\uff0c\u63a8\u9001\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/28990648/1666247341233-bc35de56-5653-4d5f-a510-819180dfe7f0.png",alt:"Full CDS"})),(0,o.kt)("h2",{id:"\u589e\u91cf-eds-\u793a\u4f8b"},"\u589e\u91cf EDS \u793a\u4f8b"),(0,o.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4ec5\u4fee\u6539 service-consumer \u5b9e\u4f8b\u914d\u7f6e\uff0c\u63a8\u9001\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/28990648/1666247341234-aa195810-c76d-4ff5-977a-55626775e697.png",alt:"Incremental EDS"})))}u.isMDXComponent=!0}}]);