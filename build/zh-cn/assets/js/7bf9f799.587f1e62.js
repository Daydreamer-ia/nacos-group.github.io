"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[696],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=k(a),c=l,N=s["".concat(o,".").concat(c)]||s[c]||m[c]||r;return a?n.createElement(N,p(p({ref:e},u),{},{components:a})):n.createElement(N,p({ref:e},u))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:l,p[1]=i;for(var k=2;k<r;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98551:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={title:"Kubernetes Nacos",keywords:["nacos","kubernetes"],description:"\u672c\u9879\u76ee\u5305\u542b\u4e00\u4e2a\u53ef\u6784\u5efa\u7684Nacos Docker Image\uff0c\u65e8\u5728\u5229\u7528 StatefulSets \u5728 Kubernetes\u4e0a\u90e8\u7f72 Nacos\u3002"},p="Kubernetes Nacos",i={unversionedId:"v2/quickstart/quick-start-kubernetes",id:"v2/quickstart/quick-start-kubernetes",title:"Kubernetes Nacos",description:"\u672c\u9879\u76ee\u5305\u542b\u4e00\u4e2a\u53ef\u6784\u5efa\u7684Nacos Docker Image\uff0c\u65e8\u5728\u5229\u7528 StatefulSets \u5728 Kubernetes\u4e0a\u90e8\u7f72 Nacos\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/quickstart/quick-start-kubernetes.md",sourceDirName:"v2/quickstart",slug:"/v2/quickstart/quick-start-kubernetes",permalink:"/zh-cn/docs/next/v2/quickstart/quick-start-kubernetes",draft:!1,tags:[],version:"current",frontMatter:{title:"Kubernetes Nacos",keywords:["nacos","kubernetes"],description:"\u672c\u9879\u76ee\u5305\u542b\u4e00\u4e2a\u53ef\u6784\u5efa\u7684Nacos Docker Image\uff0c\u65e8\u5728\u5229\u7528 StatefulSets \u5728 Kubernetes\u4e0a\u90e8\u7f72 Nacos\u3002"},sidebar:"docs",previous:{title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/docs/next/v2/quickstart/quick-start-docker"},next:{title:"Nacos 2.0.0 \u517c\u5bb9\u6027\u6587\u6863",permalink:"/zh-cn/docs/next/v2/upgrading/2.0.0-compatibility"}},o={},k=[{value:"\u90e8\u7f72 NFS",id:"\u90e8\u7f72-nfs",level:2},{value:"\u90e8\u7f72\u6570\u636e\u5e93",id:"\u90e8\u7f72\u6570\u636e\u5e93",level:2},{value:"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u8bed\u53e5",id:"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u8bed\u53e5",level:2},{value:"\u90e8\u7f72Nacos",id:"\u90e8\u7f72nacos",level:2},{value:"\u6269\u5bb9\u6d4b\u8bd5",id:"\u6269\u5bb9\u6d4b\u8bd5",level:2}],u={toc:k},s="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetes-nacos"},"Kubernetes Nacos"),(0,l.kt)("p",null,"\u672c\u9879\u76ee\u5305\u542b\u4e00\u4e2a\u53ef\u6784\u5efa\u7684Nacos Docker Image\uff0c\u65e8\u5728\u5229\u7528StatefulSets\u5728",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),"\u4e0a\u90e8\u7f72",(0,l.kt)("a",{parentName:"p",href:"https://nacos.io"},"Nacos")),(0,l.kt)("h1",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-k8s/blob/master/operator/README-CN.md"},"Nacos Operator"),"\u5728Kubernetes\u90e8\u7f72Nacos Server.")),(0,l.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Clone \u9879\u76ee"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nacos-group/nacos-k8s.git\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7b80\u5355\u4f8b\u5b50"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u4f7f\u7528\u7b80\u5355\u65b9\u5f0f\u5feb\u901f\u542f\u52a8,\u8bf7\u6ce8\u610f\u8fd9\u662f\u6ca1\u6709\u4f7f\u7528\u6301\u4e45\u5316\u5377\u7684,\u53ef\u80fd\u5b58\u5728\u6570\u636e\u4e22\u5931\u98ce\u9669:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd nacos-k8s\nchmod +x quick-startup.sh\n./quick-startup.sh\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1\u6ce8\u518c"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://cluster-ip:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://cluster-ip:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53d1\u5e03\u914d\u7f6e"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://cluster-ip:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u83b7\u53d6\u914d\u7f6e"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://cluster-ip:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n')))),(0,l.kt)("h1",{id:"\u9ad8\u7ea7\u4f7f\u7528"},"\u9ad8\u7ea7\u4f7f\u7528"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u9ad8\u7ea7\u4f7f\u7528\u4e2d,Nacos\u5728K8S\u62e5\u6709\u81ea\u52a8\u6269\u5bb9\u7f29\u5bb9\u548c\u6570\u636e\u6301\u4e45\u7279\u6027,\u8bf7\u6ce8\u610f\u5982\u679c\u9700\u8981\u4f7f\u7528\u8fd9\u90e8\u5206\u529f\u80fd\u8bf7\u4f7f\u7528PVC\u6301\u4e45\u5377,Nacos\u7684\u81ea\u52a8\u6269\u5bb9\u7f29\u5bb9\u9700\u8981\u4f9d\u8d56\u6301\u4e45\u5377,\u4ee5\u53ca\u6570\u636e\u6301\u4e45\u5316\u4e5f\u662f\u4e00\u6837,\u672c\u4f8b\u4e2d\u4f7f\u7528\u7684\u662fNFS\u6765\u4f7f\u7528PVC.")),(0,l.kt)("h2",{id:"\u90e8\u7f72-nfs"},"\u90e8\u7f72 NFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u89d2\u8272 ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/rbac.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u7684K8S\u547d\u540d\u7a7a\u95f4\u4e0d\u662f",(0,l.kt)("strong",{parentName:"p"},"default"),"\uff0c\u8bf7\u5728\u90e8\u7f72RBAC\u4e4b\u524d\u6267\u884c\u4ee5\u4e0b\u811a\u672c:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Set the subject of the RBAC objects to the current namespace where the provisioner is being deployed\n$ NS=$(kubectl config get-contexts|grep -e \"^\\*\" |awk '{print $5}')\n$ NAMESPACE=${NS:-default}\n$ sed -i'' \"s/namespace:.*/namespace: $NAMESPACE/g\" ./deploy/nfs/rbac.yaml\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," \u548c\u90e8\u7f72 ",(0,l.kt)("inlineCode",{parentName:"li"},"NFS-Client Provisioner"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/deployment.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa NFS StorageClass")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/class.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1NFS\u90e8\u7f72\u6210\u529f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -l app=nfs-client-provisioner\n")),(0,l.kt)("h2",{id:"\u90e8\u7f72\u6570\u636e\u5e93"},"\u90e8\u7f72\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\ncd nacos-k8s\n\nkubectl create -f deploy/mysql/mysql-nfs.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6570\u636e\u5e93\u662f\u5426\u6b63\u5e38\u5de5\u4f5c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nkubectl get pod \nNAME                         READY   STATUS    RESTARTS   AGE\nmysql-gf2vd                        1/1     Running   0          111m\n\n")),(0,l.kt)("h2",{id:"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u8bed\u53e5"},"\u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u8bed\u53e5"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u521d\u59cb\u5316\u8bed\u53e5\u4f4d\u7f6e  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/develop/distribution/conf/nacos-mysql.sql"},"https://github.com/alibaba/nacos/blob/develop/distribution/conf/nacos-mysql.sql")),(0,l.kt)("h2",{id:"\u90e8\u7f72nacos"},"\u90e8\u7f72Nacos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539  ",(0,l.kt)("strong",{parentName:"li"},"deploy/nacos/nacos-pvc-nfs.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  mysql.host: "\u6570\u636e\u5e93\u5730\u5740"\n  mysql.db.name: "\u6570\u636e\u5e93\u540d\u79f0"\n  mysql.port: "\u7aef\u53e3"\n  mysql.user: "\u7528\u6237\u540d"\n  mysql.password: "\u5bc6\u7801"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa Nacos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f nacos-k8s/deploy/nacos/nacos-pvc-nfs.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u8282\u70b9\u542f\u52a8\u6210\u529f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -l app=nacos\n\n\nNAME      READY   STATUS    RESTARTS   AGE\nnacos-0   1/1     Running   0          19h\nnacos-1   1/1     Running   0          19h\nnacos-2   1/1     Running   0          19h\n")),(0,l.kt)("h2",{id:"\u6269\u5bb9\u6d4b\u8bd5"},"\u6269\u5bb9\u6d4b\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u6269\u5bb9\u524d\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec")),"\u83b7\u53d6\u5728pod\u4e2d\u7684Nacos\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"for i in 0 1; do echo nacos-$i; kubectl exec nacos-$i cat conf/cluster.conf; done\n")),(0,l.kt)("p",null,"StatefulSet\u63a7\u5236\u5668\u6839\u636e\u5176\u5e8f\u6570\u7d22\u5f15\u4e3a\u6bcf\u4e2aPod\u63d0\u4f9b\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002 \u4e3b\u673a\u540d\u91c7\u7528",(0,l.kt)("statefulset",{name:!0}),"  -  ",(0,l.kt)("ordinal",{index:!0}),"\u7684\u5f62\u5f0f\u3002 \u56e0\u4e3anacos StatefulSet\u7684\u526f\u672c\u5b57\u6bb5\u8bbe\u7f6e\u4e3a2\uff0c\u6240\u4ee5\u5f53\u524d\u96c6\u7fa4\u6587\u4ef6\u4e2d\u53ea\u6709\u4e24\u4e2aNacos\u8282\u70b9\u5730\u5740"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846123635-e361d2b5-4bbe-4347-acad-8f11f75e6d38.gif",alt:"k8s"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528kubectl scale \u5bf9Nacos\u52a8\u6001\u6269\u5bb9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale sts nacos --replicas=3\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846139093-7a79b709-9afa-448a-b7d6-f57571d3a902.gif",alt:"scale"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u6269\u5bb9\u540e\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec")),"\u83b7\u53d6\u5728pod\u4e2d\u7684Nacos\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for i in 0 1 2; do echo nacos-$i; kubectl exec nacos-$i cat conf/cluster.conf; done\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846177553-c1c7f379-1b41-4026-9f0b-23e15dde02a8.gif",alt:"get_cluster_after"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec")),"\u6267\u884cNacos API \u5728\u6bcf\u53f0\u8282\u70b9\u4e0a\u83b7\u53d6\u5f53\u524d",(0,l.kt)("strong",{parentName:"li"},"Leader"),"\u662f\u5426\u4e00\u81f4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for i in 0 1 2; do echo nacos-$i; kubectl exec nacos-$i curl -X GET "http://localhost:8848/nacos/v1/ns/raft/state"; done\n')),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\u4f60\u53ef\u4ee5\u53d1\u73b0\u65b0\u8282\u70b9\u5df2\u7ecf\u6b63\u5e38\u52a0\u5165Nacos\u96c6\u7fa4\u5f53\u4e2d"),(0,l.kt)("h1",{id:"\u4f8b\u5b50\u90e8\u7f72\u73af\u5883"},"\u4f8b\u5b50\u90e8\u7f72\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u673a\u5668\u914d\u7f6e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u7f51IP"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673a\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.3"),(0,l.kt)("td",{parentName:"tr",align:null},"k8s-master"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.4"),(0,l.kt)("td",{parentName:"tr",align:null},"node01"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.5"),(0,l.kt)("td",{parentName:"tr",align:null},"node02"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u7248\u672c\uff1a",(0,l.kt)("strong",{parentName:"li"},"1.20.11")," \uff08\u5982\u679c\u4f60\u548c\u6211\u4e00\u6837\u53ea\u4f7f\u7528\u4e86\u4e09\u53f0\u673a\u5668\uff0c\u90a3\u4e48\u8bb0\u5f97\u5f00\u542fmaster\u8282\u70b9\u7684\u90e8\u7f72\u529f\u80fd\uff09"),(0,l.kt)("li",{parentName:"ul"},"NFS \u7248\u672c\uff1a",(0,l.kt)("strong",{parentName:"li"},"4.1")," \u5728k8s-master\u8fdb\u884c\u5b89\u88c5Server\u7aef\uff0c\u5e76\u4e14\u6307\u5b9a\u5171\u4eab\u76ee\u5f55\uff0c\u672c\u9879\u76ee\u6307\u5b9a\u7684",(0,l.kt)("strong",{parentName:"li"},"/data/nfs-share")),(0,l.kt)("li",{parentName:"ul"},"Git")),(0,l.kt)("h1",{id:"\u9650\u5236"},"\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u8981\u4f7f\u7528\u6301\u4e45\u5377\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5")),(0,l.kt)("h1",{id:"\u9879\u76ee\u76ee\u5f55"},"\u9879\u76ee\u76ee\u5f55"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u76ee\u5f55"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e2e\u52a9Nacos\u96c6\u7fa4\u8fdb\u884c\u52a8\u6001\u6269\u5bb9\u7684\u63d2\u4ef6Docker\u955c\u50cf\u6e90\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deploy")),(0,l.kt)("td",{parentName:"tr",align:null},"K8s \u90e8\u7f72\u6587\u4ef6")))),(0,l.kt)("h1",{id:"\u914d\u7f6e\u5c5e\u6027"},"\u914d\u7f6e\u5c5e\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nacos-pvc-nfs.yaml or nacos-quick-start.yaml ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.host")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5efa\u6570\u636e\u5e93\u5730\u5740,\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\u65f6\u5fc5\u987b\u6307\u5b9a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.db.name")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.port")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.user")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d(\u8bf7\u4e0d\u8981\u542b\u6709\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"td"},","),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.password")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801(\u8bf7\u4e0d\u8981\u542b\u6709\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"td"},","),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SPRING_DATASOURCE_PLATFORM")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b,\u9ed8\u8ba4\u4e3aembedded\u5d4c\u5165\u5f0f\u6570\u636e\u5e93,\u53c2\u6570\u53ea\u652f\u6301mysql\u6216embedded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NACOS_REPLICAS")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u5b9a\u6267\u884cNacos\u542f\u52a8\u8282\u70b9\u6570\u91cf,\u5982\u679c\u4e0d\u9002\u7528\u52a8\u6001\u6269\u5bb9\u63d2\u4ef6,\u5c31\u5fc5\u987b\u914d\u7f6e\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5426\u5219\u4f7f\u7528\u6269\u5bb9\u63d2\u4ef6\u540e\u4e0d\u4f1a\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NACOS_SERVER_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos \u7aef\u53e3 \u4e3apeer_finder\u63d2\u4ef6\u63d0\u4f9b\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NACOS_APPLICATION_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos \u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PREFER_HOST_MODE")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8Nacos\u96c6\u7fa4\u6309\u57df\u540d\u89e3\u6790")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nfs")," deployment.yaml ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NFS_SERVER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u670d\u52a1\u7aef\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NFS_PATH")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u5171\u4eab\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"server")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u670d\u52a1\u7aef\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u5171\u4eab\u76ee\u5f55")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mysql ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_ROOT_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"ROOT \u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_DATABASE")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_REPLICATION_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u590d\u5236\u7528\u6237")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_REPLICATION_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u590d\u5236\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Nfs:server")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u670d\u52a1\u7aef\u5730\u5740\uff0c\u5982\u679c\u4f7f\u7528\u672c\u5730\u90e8\u7f72\u4e0d\u9700\u8981\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Nfs:path")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS \u5171\u4eab\u76ee\u5f55\uff0c\u5982\u679c\u4f7f\u7528\u672c\u5730\u90e8\u7f72\u4e0d\u9700\u8981\u914d\u7f6e")))))}m.isMDXComponent=!0}}]);