"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||r;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},36609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Kubernetes Nacos",keywords:["nacos","kubernetes"],description:"This project contains a Nacos Docker image meant to facilitate the deployment of Nacos on Kubernetes via StatefulSets."},s="Kubernetes Nacos",i={unversionedId:"v2/quickstart/quick-start-kubernetes",id:"version-2.X/v2/quickstart/quick-start-kubernetes",title:"Kubernetes Nacos",description:"This project contains a Nacos Docker image meant to facilitate the deployment of Nacos on Kubernetes via StatefulSets.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/v2/quickstart/quick-start-kubernetes.md",sourceDirName:"v2/quickstart",slug:"/v2/quickstart/quick-start-kubernetes",permalink:"/en/docs/v2/quickstart/quick-start-kubernetes",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Kubernetes Nacos",keywords:["nacos","kubernetes"],description:"This project contains a Nacos Docker image meant to facilitate the deployment of Nacos on Kubernetes via StatefulSets."},sidebar:"docs",previous:{title:"Quick Start for Nacos Docker",permalink:"/en/docs/v2/quickstart/quick-start-docker"},next:{title:"Nacos 2.0.0 compatibility",permalink:"/en/docs/v2/upgrading/2.0.0-compatibility"}},o={},p=[{value:"Deploy NFS",id:"deploy-nfs",level:2},{value:"Deploy database",id:"deploy-database",level:2},{value:"Deploy Nacos",id:"deploy-nacos",level:2},{value:"Scale Testing",id:"scale-testing",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kubernetes-nacos"},"Kubernetes Nacos"),(0,l.kt)("p",null,"This project contains a Nacos Docker image meant to facilitate the deployment of ",(0,l.kt)("a",{parentName:"p",href:"https://nacos.io"},"Nacos")," on ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," via StatefulSets."),(0,l.kt)("h1",{id:"quick-start"},"Quick Start"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Clone Project"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nacos-group/nacos-k8s.git\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Simple Start"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you want to start Nacos without NFS, but ",(0,l.kt)("strong",{parentName:"p"},"emptyDirs will possibly result in a loss of data"),". as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd nacos-k8s\nchmod +x quick-startup.sh\n./quick-startup.sh\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Testing")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Service registration"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X POST 'http://cluster-ip:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Service discovery"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X GET 'http://cluster-ip:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Publish config"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST "http://cluster-ip:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Get config"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'curl -X GET "http://cluster-ip:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n')))),(0,l.kt)("h1",{id:"advanced"},"Advanced"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In advanced use, the cluster is automatically scaled and data is persisted, but ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"PersistentVolumeClaims")," must be deployed. In this example, NFS is used.")),(0,l.kt)("h2",{id:"deploy-nfs"},"Deploy NFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create Role ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/rbac.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If your K8S namespace is not default, execute the following script before creating RBAC")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Set the subject of the RBAC objects to the current namespace where the provisioner is being deployed\n$ NS=$(kubectl config get-contexts|grep -e \"^\\*\" |awk '{print $5}')\n$ NAMESPACE=${NS:-default}\n$ sed -i'' \"s/namespace:.*/namespace: $NAMESPACE/g\" ./deploy/nfs/rbac.yaml\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create ",(0,l.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," And deploy ",(0,l.kt)("inlineCode",{parentName:"li"},"NFS-Client Provisioner"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/deployment.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create NFS StorageClass")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f deploy/nfs/class.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify that NFS is working")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -l app=nfs-client-provisioner\n")),(0,l.kt)("h2",{id:"deploy-database"},"Deploy database"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deploy master")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\ncd nacos-k8s\n\nkubectl create -f deploy/mysql/mysql-master-nfs.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deploy slave")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\ncd nacos-k8s \n\nkubectl create -f deploy/mysql/mysql-slave-nfs.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify that Database is working")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# master\nkubectl get pod \nNAME                         READY   STATUS    RESTARTS   AGE\nmysql-master-gf2vd                        1/1     Running   0          111m\n\n# slave\nkubectl get pod \nmysql-slave-kf9cb                         1/1     Running   0          110m\n")),(0,l.kt)("h2",{id:"deploy-nacos"},"Deploy Nacos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify  ",(0,l.kt)("strong",{parentName:"li"},"deploy/nacos/nacos-pvc-nfs.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'data:\n  mysql.master.db.name: "db name"\n  mysql.master.port: "master db port"\n  mysql.slave.port: "slave db port"\n  mysql.master.user: "master db username"\n  mysql.master.password: "master db password"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create Nacos")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f nacos-k8s/deploy/nacos/nacos-pvc-nfs.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify that Nacos is working")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -l app=nacos\n\n\nNAME      READY   STATUS    RESTARTS   AGE\nnacos-0   1/1     Running   0          19h\nnacos-1   1/1     Running   0          19h\nnacos-2   1/1     Running   0          19h\n")),(0,l.kt)("h2",{id:"scale-testing"},"Scale Testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec"))," to get the cluster config of the Pods in the ",(0,l.kt)("inlineCode",{parentName:"li"},"nacos")," StatefulSet.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"for i in 0 1; do echo nacos-$i; kubectl exec nacos-$i cat conf/cluster.conf; done\n")),(0,l.kt)("p",null,"The StatefulSet controller provides each Pod with a unique hostname based on its ordinal index. The hostnames take the form of ",(0,l.kt)("inlineCode",{parentName:"p"},"<statefulset name>-<ordinal index>"),". Because the ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," field of the ",(0,l.kt)("inlineCode",{parentName:"p"},"nacos")," StatefulSet is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),", In the cluster file only two nacos address"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846123635-e361d2b5-4bbe-4347-acad-8f11f75e6d38.gif",alt:"k8s"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use kubectl to scale StatefulSets")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale sts nacos --replicas=3\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846139093-7a79b709-9afa-448a-b7d6-f57571d3a902.gif",alt:"scale"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec"))," to get the cluster config of the Pods in the ",(0,l.kt)("inlineCode",{parentName:"li"},"nacos")," StatefulSet after scale StatefulSets")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for i in 0 1 2; do echo nacos-$i; kubectl exec nacos-$i cat conf/cluster.conf; done\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/gif/338441/1562846177553-c1c7f379-1b41-4026-9f0b-23e15dde02a8.gif",alt:"get_cluster_after"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/#exec"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl exec"))," to get the ",(0,l.kt)("strong",{parentName:"li"},"state")," of the Pods in the ",(0,l.kt)("inlineCode",{parentName:"li"},"nacos")," StatefulSet after scale StatefulSets")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'for i in 0 1 2; do echo nacos-$i; kubectl exec nacos-$i curl -X GET "http://localhost:8848/nacos/v1/ns/raft/state"; done\n')),(0,l.kt)("p",null,"You can find that the new node has joined the cluster"),(0,l.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes Node configuration(for reference only)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Network IP"),(0,l.kt)("th",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.3"),(0,l.kt)("td",{parentName:"tr",align:null},"k8s-master"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.4"),(0,l.kt)("td",{parentName:"tr",align:null},"node01"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"172.17.79.5"),(0,l.kt)("td",{parentName:"tr",align:null},"node02"),(0,l.kt)("td",{parentName:"tr",align:null},"CentOS Linux release 7.4.1708 (Core) Single-core processor Mem 4G Cloud disk 40G")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes version\uff1a",(0,l.kt)("strong",{parentName:"li"},"1.12.2+")," "),(0,l.kt)("li",{parentName:"ul"},"NFS version\uff1a",(0,l.kt)("strong",{parentName:"li"},"4.1+")," ")),(0,l.kt)("h1",{id:"limitations"},"Limitations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Persistent Volumes must be used. emptyDirs will possibly result in a loss of data")),(0,l.kt)("h1",{id:"project-directory"},"Project directory"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Directory Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Help Nacos cluster achieve automatic scaling in K8s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deploy")),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy the required files")))),(0,l.kt)("h1",{id:"configuration-properties"},"Configuration properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nacos-pvc-nfs.yaml or nacos-quick-start.yaml ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.master.db.name")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Master database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.master.port")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Master database port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.slave.port")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Slave database port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.master.user")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Master database username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mysql.master.password")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Master database password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NACOS_REPLICAS")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of clusters must be consistent with the value of the replicas attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NACOS_SERVER_PORT")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos port,default:8848")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PREFER_HOST_MODE")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Nacos cluster node domain name support")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nfs")," deployment.yaml ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NFS_SERVER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NFS_PATH")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server shared directory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"server")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server shared directory")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mysql yaml ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_ROOT_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Root password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_DATABASE")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Database Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Database Username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Database Password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_REPLICATION_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Master-slave replication username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MYSQL_REPLICATION_PASSWORD")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Master-slave replication password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Nfs:server")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Nfs:path")),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"NFS server shared path")))))}c.isMDXComponent=!0}}]);