"use strict";(self.webpackChunkanis_saied=self.webpackChunkanis_saied||[]).push([[6590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(y,s(s({ref:t},i),{},{components:r})):n.createElement(y,s({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},s="Web servers",p={unversionedId:"Softwares/web-servers",id:"Softwares/web-servers",title:"Web servers",description:"Apache",source:"@site/docs/Softwares/web-servers.md",sourceDirName:"Softwares",slug:"/Softwares/web-servers",permalink:"/docs/Softwares/web-servers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux Softwares",permalink:"/docs/Softwares/linux-softwares"},next:{title:"Open API",permalink:"/docs/api/Open API"}},l={},c=[{value:"Apache",id:"apache",level:2},{value:"XAMPP",id:"xampp",level:3}],i={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-servers"},"Web servers"),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("h3",{id:"xampp"},"XAMPP"),(0,a.kt)("p",null,"on ubuntu, "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/lampp\nsudo ./xampp start\n")),(0,a.kt)("p",null,"To view all possibilities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"orca@orca-pc:/opt/lampp$ sudo ./xampp control\n\n    start         Start XAMPP (Apache, MySQL and eventually others)\n    startapache   Start only Apache\n    startmysql    Start only MySQL\n    startftp      Start only ProFTPD\n    \n    stop          Stop XAMPP (Apache, MySQL and eventually others)\n    stopapache    Stop only Apache\n    stopmysql     Stop only MySQL\n    stopftp       Stop only ProFTPD\n    \n    reload        Reload XAMPP (Apache, MySQL and eventually others)\n    reloadapache  Reload only Apache\n    reloadmysql   Reload only MySQL\n    reloadftp     Reload only ProFTPD\n    \n    restart       Stop and start XAMPP\n    security      Check XAMPP's security\n    \n    enablessl     Enable SSL support for Apache\n    disablessl    Disable SSL support for Apache\n    \n    backup        Make backup file of your XAMPP config, log and data files\n    \n    oci8          Enable the oci8 extenssion\n    \n    panel         Starts graphical XAMPP control panel\n")))}f.isMDXComponent=!0}}]);