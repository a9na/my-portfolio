(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9957:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(5398),r(8295),r(5866);var s=r(3191),a=r(8716),i=r(7922),o=r.n(i),n=r(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5398)),"C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\contact\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Korisnik\\Desktop\\my-portfolio\\src\\app\\contact\\page.jsx"],p="/contact/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2444:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5731:()=>{},1219:(e,t,r)=>{Promise.resolve().then(r.bind(r,5517))},5517:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var s=r(326),a=r(3926),i=r(7577);class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},c=async(e,t,r={})=>{let s=await fetch(n.origin+e,{method:"POST",headers:r,body:t}),a=await s.text(),i=new o(s.status,a);if(s.ok)return i;throw i},d=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},p=e=>e.webdriver||!e.languages||0===e.languages.length,u=()=>new o(451,"Unavailable For Headless Browser"),m=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},h=e=>!e.list?.length||!e.watchVariable,g=(e,t)=>e instanceof FormData?e.get(t):e[t],x=(e,t)=>{if(h(e))return!1;m(e.list,e.watchVariable);let r=g(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},f=()=>new o(403,"Forbidden"),b=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},y=async(e,t,r)=>{let s=Number(await r.get(e)||0);return t-Date.now()+s},v=async(e,t,r)=>{if(!t.throttle||!r)return!1;b(t.throttle,t.id);let s=t.id||e;return await y(s,t.throttle,r)>0||(await r.set(s,Date.now().toString()),!1)},w=()=>new o(429,"Too Many Requests"),j=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},P=e=>"string"==typeof e?document.querySelector(e):e,k={sendForm:async(e,t,r,s)=>{let a=l(s),i=a.publicKey||n.publicKey,o=a.blockHeadless||n.blockHeadless,m=n.storageProvider||a.storageProvider,h={...n.blockList,...a.blockList},g={...n.limitRate,...a.limitRate};if(o&&p(navigator))return Promise.reject(u());let b=P(r);d(i,e,t),j(b);let y=new FormData(b);return x(h,y)?Promise.reject(f()):await v(location.pathname,g,m)?Promise.reject(w()):(y.append("lib_version","4.3.3"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",i),c("/api/v1.0/email/send-form",y))}},_=()=>{let[e,t]=(0,i.useState)(!1),[r,o]=(0,i.useState)(!1),n=(0,i.useRef)();return s.jsx(a.E.div,{className:"h-full",initial:{y:"-200vh"},animate:{y:"0%"},transition:{duration:1},children:(0,s.jsxs)("div",{className:"h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48",children:[s.jsx("div",{className:"h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl",children:(0,s.jsxs)("div",{children:["Say Hello".split("").map((e,t)=>s.jsx(a.E.span,{initial:{opacity:1},animate:{opacity:0},transition:{duration:3,repeat:1/0,delay:.1*t},children:e},t)),"\uD83D\uDE0A"]})}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(!1),t(!1),k.sendForm("service_plbcvqn","template_or7rj7h",n.current,"gOTdwTuNCN6QRvTtu").then(()=>{t(!0),n.current.reset()},()=>{o(!0)})},ref:n,className:"h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24",children:[s.jsx("span",{children:"My Message:"}),s.jsx("textarea",{rows:6,className:"bg-transparent border-b-2 border-b-black outline-none resize-none",name:"user_message"}),s.jsx("span",{children:"My mail address is:"}),s.jsx("input",{name:"user_email",type:"text",className:"bg-transparent border-b-2 border-b-black outline-none"}),s.jsx("span",{children:"Regards"}),s.jsx("button",{className:"bg-purple-200 rounded font-semibold text-gray-600 p-4",children:"Send"}),e&&s.jsx("span",{className:"text-green-600 font-semibold",children:"Your message has been sent successfully!"}),r&&s.jsx("span",{className:"text-red-600 font-semibold",children:"Something went wrong!"})]})]})})}},5398:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var s=r(8570);let a=(0,s.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\app\contact\page.jsx`),{__esModule:i,$$typeof:o}=a;a.default;let n=(0,s.createProxy)(String.raw`C:\Users\Korisnik\Desktop\my-portfolio\src\app\contact\page.jsx#default`)},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>o});var s=r(9510),a=r(1723),i=r.n(a);r(5023);let o={title:"Ana Novkovic Portfolio",description:"My portfolio page"};function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:s.jsx("transitionProvider",{children:e})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[741,926],()=>r(9957));module.exports=s})();