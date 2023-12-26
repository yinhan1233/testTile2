
(()=>{var Kt=Object.create;var R=Object.defineProperty;var Jt=Object.getOwnPropertyDescriptor;var Wt=Object.getOwnPropertyNames;var Xt=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var Yt=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ft=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Zt=(i,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Wt(t))!Qt.call(i,n)&&n!==e&&R(i,n,{get:()=>t[n],enumerable:!(s=Jt(t,n))||s.enumerable});return i};var k=(i,t,e)=>(e=i!=null?Kt(Xt(i)):{},Zt(t||!i||!i.__esModule?R(e,"default",{value:i,enumerable:!0}):e,i));var ut=(i,t,e)=>(Yt(i,typeof t!="symbol"?t+"":t,e),e);var vt=ft((je,te)=>{te.exports={name:"spray-conch-compile",version:"2.1.10",description:"",private:!0,egg:{declarations:!0},dependencies:{"@babel/core":"^7.12.3","@babel/generator":"^7.18.2","@babel/parser":"^7.18.5","@babel/preset-env":"^7.12.1","@babel/traverse":"^7.18.2","@babel/types":"^7.18.4","@rollup/plugin-node-resolve":"^13.3.0","@rollup/plugin-strip":"^2.1.0","@vue/babel-helper-vue-jsx-merge-props":"^1.2.1","@vue/babel-preset-jsx":"^1.2.3","@vue/compiler-sfc":"^2.6.14",babylon:"^6.18.0","cross-env":"^7.0.2",egg:"^2.15.1","egg-axios":"^1.1.5","egg-cors":"^2.2.3","egg-logrotator":"^3.1.0","egg-scripts":"^2.11.0",esbuild:"^0.14.43",jscodeshift:"^0.13.1","patch-package":"^6.5.0",rimraf:"^3.0.2",rollup:"^2.32.1","rollup-plugin-babel":"^4.4.0","rollup-plugin-terser":"^7.0.2",sass:"^1.27.0",shelljs:"^0.8.4","string-to-file-stream":"^1.2.0"},devDependencies:{"@release-it/conventional-changelog":"^3.3.0",autod:"^3.0.1","autod-egg":"^1.1.0",compressing:"^1.5.1","egg-bin":"^4.11.0","egg-ci":"^1.11.0","egg-mock":"^3.21.0",eslint:"^5.13.0","eslint-config-egg":"^7.1.0","release-it":"^14.11.8",rimraf:"^3.0.2"},engines:{node:">=10.0.0"},scripts:{start:"cross-env EGG_SERVER_ENV=prod egg-scripts start --daemon --workers=4 --title=egg-server-spray-conch-compile","start-test":"cross-env EGG_SERVER_ENV=test egg-scripts start --daemon --workers=4 --title=egg-server-spray-conch-compile",stop:"egg-scripts stop --title=egg-server-spray-conch-compile",dev:"egg-bin dev EGG_SERVER_ENV=local",debug:"egg-bin debug",test:"npm run lint -- --fix && npm run test-local","test-local":"egg-bin test",cov:"egg-bin cov",lint:"eslint .",ci:"npm run lint && npm run cov",autod:"autod",build:"node ./script/build.js",restart:"npm run stop && npm run start","restart-test":"npm run stop && npm run start-test",release:"release-it --no-npm.publish",postinstall:"patch-package"},ci:{version:"10"},repository:{type:"git",url:"git@git.uino.com:hundun/nanshan-compile-preview.git"},author:"zhanglin@uinnova.com",license:"MIT",babel:{presets:["@vue/babel-preset-jsx"]}}});var j=ft(($e,St)=>{var ee=vt(),Dt=[["rgb(255, 255, 204)","rgb(222, 252, 205)","rgb(189, 249, 206)","rgb(157, 246, 207)","rgb(124, 242, 208)","rgb(91, 239, 209)"],["rgb(52, 255, 245)","rgb(49, 224, 242)","rgb(45, 192, 238)","rgb(42, 161, 235)","rgb(39, 130, 231)","rgb(35, 98, 228)"],["rgb(255, 220, 132)","rgb(255, 196, 124)","rgb(254, 171, 117)","rgb(254, 147, 109)","rgb(254, 123, 101)","rgb(253, 98, 94)"],["rgb(109, 212, 0)","rgb(91, 218, 39)","rgb(73, 224, 78)","rgb(55, 230, 117)","rgb(36, 235, 156)","rgb(18, 241, 195)"],["rgb(215, 74, 255)","rgb(198, 78, 255)","rgb(181, 82, 255)","rgb(164, 86, 255)","rgb(146, 90, 255)","rgb(129, 94, 255)"],["rgb(68, 215, 182)","rgb(99, 198, 159)","rgb(130, 182, 137)","rgb(162, 165, 114)","rgb(193, 148, 91)","rgb(224, 132, 69)"],["rgb(255, 87, 56)","rgb(239, 141, 122)","rgb(223, 196, 189)","rgb(207, 250, 255)","rgb(138, 214, 255)","rgb(69, 178, 255)"],["rgb(120, 69, 255)","rgb(165, 121, 251)","rgb(210, 173, 247)","rgb(255, 225, 243)","rgb(255, 170, 197)","rgb(255, 116, 151)"],["rgb(255, 104, 61)","rgb(255, 144, 122)","rgb(255, 185, 182)","rgb(255, 225, 243)","rgb(170, 209, 219)","rgb(85, 192, 196)"],["rgb(91, 11, 255)","rgb(146, 82, 251)","rgb(200, 154, 247)","rgb(255, 225, 243)","rgb(255, 170, 237)","rgb(255, 116, 231)"],["rgb(255, 112, 76)","rgb(255, 150, 132)","rgb(255, 187, 187)","rgb(255, 225, 243)","rgb(255, 204, 162)","rgb(255, 182, 81)"],["rgb(77, 177, 86)","rgb(136, 193, 138)","rgb(196, 209, 191)","rgb(255, 225, 243)","rgb(190, 197, 247)","rgb(126, 170, 251)"]];St.exports={version:ee.version,globalVar:{themeColor:Dt,scripts:{},async:!1,printLog:!0},themeColor:Dt}});function H(i){let t=parseInt(i.style.display==="none"?0:getComputedStyle(i).height);return Number.isNaN(t)?0:t}function dt(i,t){t.forEach(e=>{B(i.prototype,e.prototype)})}function B(i,t,e=!0){Object.getOwnPropertyNames(t).forEach(s=>{(!i[s]||i[s]&&e)&&(i[s]=t[s])})}function z(i={}){if(i){if(!Array.isArray(i)){let{top:t=0,right:e=0,bottom:s=0,left:n=0}=i;i=[t,e,s,n]}return i.map(t=>p(t)).join(" ")}return 0}function A(i,t=""){if(!i)return;let e=t.split("."),s;for(;s=e.shift();)if(i[s])i=i[s];else return null;return i}function D(i){if(!i||typeof i!="object")return i;let t=i instanceof Array?[]:{};for(let e in i)t[e]=typeof i[e]=="object"?D(i[e]):i[e];return t}function w(i,t){return typeof i!=typeof t&&console.warn("\u7EC4\u4EF6\u6570\u636E\u7C7B\u578B\u53D1\u751F\u66F4\u6539\u53EF\u80FD\u5B58\u5728\u9519\u8BEF"),i&&t&&!Array.isArray(i)&&!Array.isArray(t)&&typeof i=="object"&&typeof t=="object"?Object.assign(t,i):i}function q(i,t){!i||Object.entries(i).forEach(t)}var gt=i=>typeof i=="boolean",p=i=>`${i||0}px`,mt=i=>i.substring(0,1).toUpperCase()+i.substring(1),g=i=>typeof i=="function",E=i=>i==null;function _t(i,t){if(i==="1.0.0"||i==="2")return!0;let e=i.split("."),s=t.split("."),n=e.length,o=s.length,r=Math.min(n,o),a=0;for(a;a<r;a++){let c=parseInt(e[a]),h=parseInt(s[a]);if(c>h)return 1;if(c<h)return-1}if(n>o){for(let c=a;c<n;c++)if(parseInt(e[c])!=0)return 1;return 0}else if(n<o){for(let c=a;c<o;c++)if(parseInt(s[c])!=0)return-1;return 0}return 0}function I({id:i="",instance:t={},error:e}){conch.__globalVar.printLog&&console.error(i+`\u56FE\u8868\u6267\u884C\u9519\u8BEF:
`+e),conch.errorHandler&&conch.errorHandler({id:i,...t},e)}var yt=()=>({name:"\u84DD\u56FE\u8282\u70B9",group:"UI-Chart",inputs:[{name:"\u663E\u793A",type:"exec"},{name:"\u9690\u85CF",type:"exec"},{name:"\u6570\u636E",type:"any"}],outputs:[]}),U=class{static init(){let{options:t}=this.__richConfig;if(!t)t={};else if(typeof t=="string")try{t=new Function("return "+t)()}catch{throw t={},new Error("\u8F6C\u6362\u56FE\u8868json\u51FA\u73B0\u9519\u8BEF")}else t=D(t);if(Array.isArray(t)?t={blueprint:yt(),propertyPanel:t}:(!t.blueprint||Object.keys(t.blueprint).length<2)&&(t.blueprint=yt()),Array.isArray(t.propertyPanel)&&t.propertyPanel.length>0){let e={};(function(s){s.forEach(n=>{let o=e;if(n.key){let r=n.key.split(".");r.shift();for(let a=0;a<r.length;a++)a<r.length-1?(o[r[a]]||(o[r[a]]={name:r[a],type:"group",children:{}}),o=o[r[a]].children):(n.default=n.value,delete n.value,delete n.key,o[r[a]]=n)}else func(n.children)})})(t.propertyPanel),t.propertyPanel=e}this._options=t}getBlueprintNode(t,e){let s=this;return class extends BaseNode{static config={...s._options.blueprint,name:t||s._options.blueprint.name,id:e};constructor(){super()}isEntrance(){return!0}onExecute(o,r,a){s.onExecute(o,r,a,this)}onStop(){s.onStop(this)}}}onExecute(t,e,s,n){switch(n.curExecName){case"\u663E\u793A":this.show();break;case"\u9690\u85CF":this.hide();break}e._updateData_&&this.setData(e._updateData_)}onStop(){}},bt=U;function wt(i){return[i.text,{...i.font,textAlign:i.site,fontSize:p(i.font.fontSize),lineHeight:i.lineHeight?p(i.lineHeight):null,padding:z(i.padding)}]}function Ct(i,t,e){i.innerHTML=t,e&&Object.assign(i.style,e)}var G=class{static init(){this.titleDom=document.createElement("div"),this.subTitleDom=document.createElement("div"),this.parentDom.appendChild(this.titleDom),Object.assign(this.titleDom.style,{flexShrink:0}),Object.assign(this.subTitleDom.style,{flexShrink:0}),this.parentDom.appendChild(this.subTitleDom)}__resizeParentHeight(){this.dom.style.height=`calc(100% - ${p(H(this.titleDom)+H(this.subTitleDom))})`}setTitle(t,e){Ct(this.titleDom,t,e)}setSubTitle(t,e){Ct(this.subTitleDom,t,e)}openTitle(){this.titleDom.style.display="block",this.resize()}closeTitle(){this.titleDom.style.display="none",this.resize()}openSubTitle(){this.subTitleDom.style.display="block",this.resize()}closeSubTitle(){this.subTitleDom.style.display="none",this.resize()}updateTitle(t){t&&(this.titleDom.style.display=t.show?"block":"none",this.setTitle(...wt(t)))}updateSubTitle(t){t&&(this.subTitleDom.style.display=t.show?"block":"none",this.setSubTitle(...wt(t)))}},Ot=G;var xt=k(j());var K=class{static init(){this.themes=xt.themeColor,this.themeIndex=1}__setPadding(t){this.padding!==t&&(this.padding=t),Object.assign(this.parentDom.style,{padding:z(t)})}setPadding(t){this.__setPadding(t),this.resize()}setCompBG(t=""){Object.assign(this.parentDom.style,{background:t,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"})}setTheme(t){this.theme!==t&&(this.theme=t),this.render()}__updateTheme(t=this.theme){if(!!t)if(t.backgroundColor&&t.backgroundColor.show){let e=t.backgroundColor,{type:s,value:n}=e,o="";if(s==="image")e.url&&(o=`url(${e.url})`);else if(n)switch(s){case"flat":o=n;break;case"linearGradient":let{angle:r,stops:a}=n;o=`linear-gradient(${r}deg, ${a.map(c=>`${c.color} ${c.offset}%`).join(",")})`;break;case"radialGradient":o=`radial-gradient(${n.stops.map(c=>`${c.color} ${c.offset}%`).join(",")})`;break}this.setCompBG(o)}else this.setCompBG("")}__transform(){this.padding&&this.__setPadding(this.padding);let t=A(this.config||this.opts,"menu.title");if(t){let{title:e,subTitle:s}=t;this.updateTitle(e),this.updateSubTitle(s)}}},Et=K;var J=class{constructor(t){this.identified=t,this.operations=[]}done(...t){this.operations=this.operations.concat(t.filter(e=>typeof e=="function"))}async _run(...t){for(let e=0,s;s=this.operations[e];e++)await s(...t)}destroy(){this.identified=null,this.operations=null}},jt=J;var W=class{constructor(t){this.actions={},this.instance=t}wait(t){return this.actions[t]?this.actions[t]:this.actions[t]=new jt(t)}clearWait(){Object.values(this.actions).forEach(t=>t.destroy()),this.actions={}}trigger(t,...e){this.actions[t]&&this.actions[t]._run(...e)}},$t=W;var X=class{static init(){this._waiter=new $t(this)}trigger(...t){return this._waiter.trigger(...t)}on(t,e){this._waitAction(t).done(e)}_waitAction(t){return this._waiter.wait(t)}_clearWaitAction(){this._waiter.clearWait()}},Pt=X;var Q=class{static init(){this._eventTypes={},this._eventBus={}}$on(t,e,s=this){return this.hasType(t)||(this._eventTypes[t]=t,this._eventBus[t]=[]),this._eventBus[t].push([e,s]),this}$once(t,e,s){let n=(...o)=>{this.$off(t,n),e.apply(s,o)};return n.fn=e,this.$on(t,n),this}$off(t,e,s){if(!t&&!e)return this.destroy(),this;if(!this.hasType(t))return this;if(!e)return this._eventBus[t]=[],this;let n=this._eventBus[t],o=n.length;for(;o>-1;){if(!n[o]){o--;continue}let[r,a]=n[o];(r===e||r.fn===e)&&(s?a===s&&n.splice(o,1):n.splice(o,1)),o--}return this}$emit(t,...e){if(!this.hasType(t))return this;let s=this._eventBus[t];if(s&&s.length){let n=[...s];for(let o of n){let[r,a]=o;r.apply(a,e)}}return this}$offAll(){this._eventTypes={},this._eventBus={}}hasType(t){return this._eventTypes[t]===t}},$=Q;var Tt=k(j());var m={script([i,t],e){return new Promise(s=>{let n=window.document.head.querySelector("#"+i);n?n.isLoading?s():n.addEventListener("load",()=>{s()}):(n=document.createElement("script"),n.src=(e||"")+t,n.type="text/javascript",n.isLoading=!1,n.addEventListener("load",()=>{n.isLoading=!0,s()}),n.addEventListener("error",()=>{s()}),n.id=i,window.document.head.appendChild(n))})},css([i,t],e){let s=window.document.head.querySelector("#"+i+"css");s||(s=document.createElement("link"),s.href=(e||"")+t,s.rel="stylesheet",s.id=i+"css",window.document.head.appendChild(s))},font(i,t){return new Promise(async e=>{let s=Array.from(window.document.fonts.values());for(let n=0;n<i.length;n++){let{file:o,psName:r,descriptors:a,files:c}=i[n];if(s.some(h=>h.family===r))return;if(c&&a){let h=c.map(d=>new window.FontFace(r,`url('${t}/cssfonts/${d}')`,a).load()),l=await Promise.any(h);window.document.fonts.add(l)}else{let h=new window.FontFace(r,`url('${t}/fonts/${o}')`);h.load().then(l=>{window.document.fonts.add(l)}).catch(l=>{console.log(l)}),await h.loaded}}e()})},style(i,t=""){let e=document.head.querySelector("#styles_comp_global_"+t);e||(e=document.createElement("style"),e.type="text/css",e.id="styles_comp_global_"+t,e.appendChild(document.createTextNode(i)),document.head.appendChild(e)),t||e.appendChild(document.createTextNode(i))}};var Y=class{async __initScript(){let{script:t}=this.__richConfig,e=this._config.prefix||"";if(!Tt.globalVar.async&&t){this.script=t,this._config&&this._config.script&&Object.entries(this._config.script).forEach(([o,r])=>{this.script[o]=r});let s=Object.entries(this.script).filter(([o,r])=>typeof r=="string"),n=s.shift();for(;n;)await m.script(n,e),n=s.shift()}}__initResource(){let{img:t,fonts:e,cssfonts:s,css:n,script:o}=this.__richConfig,r=this._config.prefix||"";e&&m.font(Object.values(e),r),s&&m.font(s,r),this.img={},this.fonts={},q(t,([a,c])=>{this.img[a]=(r||"")+c}),q(e,([a,c])=>{this.fonts[a]=c.file}),n&&Object.entries(this.css=n).filter(([a,c])=>typeof c=="string").forEach(a=>{m.css(a,r)}),this.script=o}},kt=Y;var se=["create","mounted","update","dataChange","optsChange","destory"],V=class{static init(){this.__LifeCycle={},g(this.setup)&&(this.__getDom=this.setup())}__callHook(t,e){return this.__LifeCycle[t]?this.__LifeCycle[t].reduce((s,n)=>n(s),e):e}};se.forEach(i=>{i=mt(i),[`onBefore${i}`,`onAfter${i}`].forEach(t=>{V.prototype[t]=function(e){g(e)&&(this.__LifeCycle[t]||(this.__LifeCycle[t]=[]),this.__LifeCycle[t].push(e))}})});var zt=V;var Z=class{changeOptsToConfig(t=!0){if(this.type==="complex"){this._componentInstances.forEach((s,n)=>{s.changeOptsToConfig(t),this.updateConfig(s,n)});return}if(!this.opts||!this._options.propertyPanel||Object.prototype.toString.call(this._options.propertyPanel).slice(8,-1)!=="Array")return;let e=s=>{if(s.type==="group")for(let n of s.children)e(n);else{if(!(typeof s.key=="string"&&s.key!==""))return;let n=s.key.split(".");n.length>=1&&n.shift();let o=this.opts,r=o,a="";for(a of n)if(r=o,o=o[a],o===void 0||isNaN(o)){o=void 0;break}(o!==void 0||!isNaN(o))&&(t?s.value=o:r[a]=s.value)}};for(let s of this._options.propertyPanel)e(s);t||this.setOption(this.opts)}changeConfigToOpts(){this.changeOptsToConfig(!1)}changeOptsToPropertyPanel(t){if(this.type==="complex"){this._componentInstances.forEach((r,a)=>{r.changeOptsToPropertyPanel(this.opts[a]),this.updateConfig(r,a)});return}let e=this._options.propertyPanel||{},s=t||(this.type==="echarts"?this.config:this.opts);if(Object.prototype.toString.call(s).slice(8,-1)!=="Object"){console.warn("opts\u9700\u8981\u662F\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u636E");return}Object.keys(s).forEach(r=>{o(r,e,s)});function o(r,a,c){let h=a,l=c;Object.prototype.toString.call(l[r]).slice(8,-1)==="Object"?(l=l[r],h[r]&&h[r].children?h=h[r].children:h[r]&&h[r].default&&!h[r].children&&(h[r].default=l),Object.keys(l).forEach(f=>{o(f,h,l)})):h[r]&&h[r].default!==void 0&&(h[r].default=l[r])}}changePropertyPanelToOpts(){if(this.type==="complex")return this._componentInstances.map((r,a)=>{let c=r.changePropertyPanelToOpts();return this.updateConfig(r,a),c});let t=this._options.propertyPanel||{},e=this.type==="echarts"?this.config:this.opts;Object.keys(t).forEach(o=>{n(o,t,e)});function n(o,r,a){let c=r,h=a;!c[o].default&&c[o].children&&h[o]?(h=h[o],c=c[o].children,Object.keys(c).forEach(d=>{n(d,c,h)})):h.hasOwnProperty(o)&&(h[o]=c[o].default)}return this.setOption(e),e}changeProperty(t,e,s,n){this.setOption(s)}},At=Z;var Mt=k(j());var ie={info:"background:#606060;color:#fff;",warn:"background:#E9A400;color:#fff;",error:"background:#EC3941;color:#fff;"};function ne(i){return[ie[i],"background:#1375B2;color:#fff;"]}function oe(){let i=new Date;return`${i.toLocaleDateString()} ${i.toLocaleTimeString()}`}var tt=class{info(...t){this._recordLog("info",...t)}warn(...t){this._recordLog("warn",...t)}error(...t){this._recordLog("error",...t)}_recordLog(t,...e){window.console[t](`%c [conch ${t}] %c ${oe()} `,...ne(t),...e)}memory(){let{memory:t}=performance;if(t){let e=r=>`${r/1024/1024}M`,{jsHeapSizeLimit:s,totalJSHeapSize:n,usedJSHeapSize:o}=t;console.table({max:e(s),has:e(n),used:e(o)})}}},It=new tt;var Vt=new $;$.init.call(Vt);var C=Vt;var Ft=new WeakMap,S=class{static __richComp(t){let e=t.prototype,s=e.destroy;e.destroy=function(){this.__callHook("onBeforeDestory"),(g(s)?function(){this.__destroy(),s.call(this)}:this.__destroy).call(this),this.__callHook("onAfterDestory"),this._clearWaitAction(),this.$offAll()},e.render=e.__initRender;let n=e.setData;e.setData=function(r,...a){let c=this.__callHook("onBeforeDataChange",r);E(c)&&(r=c),n&&n.call(this,r,...a),this.__callHook("onAfterDataChange")};let o=e.setOption;e.setOption=function(r,...a){let c=this.__callHook("onBeforeOptsChange",r);E(c)&&(r=c),o&&o.call(this,r,...a),this.__callHook("onAfterOptsChange")}}static __use(t){dt(S,S.used=t)}constructor(t,e={}){for(e.prefix||(e.prefix="");!e.fromComplex&&t.hasChildNodes();)t.removeChild(t.firstChild);if(e.fromComplex&&e.select){let c=e.select[e._id];c&&(t.style.border=c)}this.log=It,this._config=e,this.root=C;let s=this._config.prefix;this._registerImg&&this._registerImg(s),this.parentDom=t,Object.assign(t.style,{transformOrigin:"0 0",display:"flex",flexDirection:"column"});let n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.boxSizing="border-box";let{key:o,width:r,height:a}=this.__richConfig;this.size={width:r,height:a},this._key=o,this.__setClassName(),Array.isArray(S.used)&&S.used.forEach(c=>c.init&&c.init.call(this)),this.__initResource(),t.appendChild(this.dom=n)}get instance(){return Ft.get(this)}set instance(t){t&&Ft.set(this,t)}show(){if(this.parent)return this.parent.show();this.parentDom.style.display="block"}hide(){if(this.parent)return this.parent.hidden();this.parentDom.style.display="none"}hidden(){return this.hide()}toJSON(){return{data:this.data,opts:this.type==="echarts"?this.config:this.opts,theme:this.theme,padding:this.padding,events:this.events}}__setClassName(){this.parentDom.classList.contains(this._key)||this.parentDom.classList.add(this._key)}async __initComp(){await Promise.resolve(),this.__callHook("onBeforeCreate"),Mt.globalVar.async?this.__initScript():await this.__initScript(),this.__initConfig(),this.__callHook("onAfterCreate"),this.created&&this.created(),this._isLoadingComp=!0,this.cb&&this.cb(),this.cb=null}__initConfig(){this._options&&(!this.data&&this._options.data&&(this.data=D(this._options.data)),!this.opts&&this._options.options&&(this.opts=D(this._options.options)));let{theme:t,padding:e,data:s,opts:n,events:o}=this._config.config||{};t&&(this.theme=t),e&&(this.padding=e),s&&(this.data=s),n&&(this.type==="echarts"?this.config=n:this.opts=n)}__initRender(){return new Promise(t=>{let e=async()=>{try{this.__setClassName(),this.__updateTheme(),this.transformOptions&&this.transform(),this.__transform(),this.instance||this._instance?(this.__callHook("onBeforeUpdate"),this.__update(),this.__callHook("onAfterUpdate"),this.updated&&this.updated()):(this.__callHook("onBeforeMounted"),await this.__render(),this.__callHook("onAfterMounted"),this.mounted&&this.mounted())}catch(s){I({id:this._compId,instance:this,error:s})}finally{t()}};this._isLoadingComp?e():this.cb=e})}},P=S;ut(P,"used");P.__use([bt,Ot,Et,Pt,$,kt,zt,At]);var _=P;var et=class{constructor(t){this.instance=t||{},this.typeFnMapping={showOrHidden:this.__doShowOrHidden.bind(this),changeOptions:this.__doSetOptions.bind(this),callback:this.__doCallback.bind(this),secondFunction:this._doSecondFunction.bind(this),link:this.__doLink}}_registerType(t,e,s){if(typeof e!="function")return;let n=s||this;this.typeFnMapping[t]=e.bind(n)}__run(t,e){for(let s=0,n;n=e[s];s++)t._waitAction(n.identified).done(async r=>{if(re(n.condition,r)){this._beforeRun&&this._beforeRun({events:n,data:r});for(let c=0,h;h=n.actions[c];c++)await this.__runAction(h,r);this._afterRun&&this._afterRun({events:n,data:r})}})}__runAction(t,e){let s=t.type;if(s!==void 0){if(!this.typeFnMapping[s]){console.error(`\u4E8B\u4EF6\u52A8\u4F5C${s}\u672A\u6CE8\u518C`);return}return this.typeFnMapping[s](t[s],e)}}_query(t){return typeof this.instance.query!="function"?null:Array.isArray(t)?t.map(e=>this.instance.query(e)):this.instance.query(t)}async __doShowOrHidden(t){let{showComps:e,hiddenComps:s,type:n}=t;return n==="group"&&(e=e.map(o=>o.split(",")).flat(),s=s.map(o=>o.split(",")).flat()),await Promise.all(s.map(async o=>{let r=this._query(o);r&&await r.hidden()})),Promise.all(e.map(async o=>{let r=this._query(o);r&&await r.show()}))}__doSetOptions(t){let{comp:e,opts:s}=t,n=this._query(e);n&&n.setOption(s)}__doLink(t){!t.url||pe(t.url)||window.open(t.url)}__doCallback(){}_doSecondFunction(t){let{name:e,arg:s}=t;this.instance[e]&&this.instance[e](s)}};function re(i,t){if(i.enabled===!1)return!0;switch(i.type){case"code":return ae(i.filterCode,t);case"tree":return ce(i,t);default:return!0}}function ae(i,t){return new Function("data",i)(t)}function ce(i,t){return Lt(i,e=>Lt(e,s=>le(t,...s)))}function Lt(i,t){let e=he(i.operator);return i.expressions.length?e.call(i.expressions,t):!0}function he(i){switch(i){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function le(i,t,e,s){let o=(i||{})[t];if(o==null||o==="")return!1;switch(e==="eq"||e==="in"||e==="nin"?(o=o.toString(),s=s.toString()):(o=o*1,s=s*1),e){case"eq":return o===s;case"gt":return o>s;case"lt":return o<s;case"gte":return o>=s;case"lte":return o<=s;case"ne":return o!=s;case"in":return o.toString().includes(s.toString());case"nin":return!o.toString().includes(s.toString())}}function pe(i){return!/(http|https):\/\/([\w.]+\/?)\S*/.test(i)}var F=et;var fe=/\/s-static(\/[\w-]+)+\.(bmp|gif|ico|tif|png|jpg|jpeg|webp|svg|mp4|webm|mp3|wav)/gi,Nt=({prefix:i,status:t})=>{switch(t){case"component":return{js:`${i}/component-source`,def:`${i}/complex-group-def`};default:return{js:`${i}/component`,def:`${i}/complex-group-version-def`}}};function st(i,t){return i&&JSON.parse(JSON.stringify(i).replace(fe,e=>e.replace(/^(\/s-static)/,t)))}function ue(i,t){let e=i.indexOf("C")>-1?i.slice(1):i,s=Nt(t).def;return new Promise(n=>{fetch(`${s}/${e}.def`).then(o=>o.json()).then(o=>{n(o)}).catch(o=>console.error("Request Failed",o))})}function de(i,{prefix:t}){let e=A(i,"scene.option.style")||{},s=[],n=[],o=[],r=[],a=[],c=[],h=[],l=[],d=[],f=i.scene.children[0],u=f.children||[],Gt=i.userData,N=[...u];if(f.option.visible!==!1)for(;N.length;){let b=N.shift();if(b.children)b.option.visible!==!1&&N.push(...b.children);else if(b.option.visible!==!1&&b.type==="Container"){let v=Gt[b.option.id],ht=v.name.substr(1);h.push(ht),l.push(b.option.id),n.push(st(v.data,t)),o.push(st(v.opts,t)),r.push(st(v.theme,t)),c.push(v.padding),a.push(v.events);let lt={title:b.option.name,id:ht},O=b.option.style,pt={width:O.width,height:O.height,top:O.top,left:O.left,backgroundColor:O.backgroundColor||"",rotate:O.rotate};s.push(pt),O&&Object.assign(lt,pt),d.push(lt)}}return{width:e.width||"",height:e.height||"",childStyle:s,datas:n,opts:o,component:h,container:l,simpleCompInfo:d,themes:r,paddings:c,events:a}}var it=class extends _{constructor(t,e){super(t,e),this.__initComp()}async __initComp(){this.customEvent=new F(this),this.useResizeScale=gt(this.useResizeScale)?this.useResizeScale:!0,this._componentInstances=[],this._options=[];let t=de(await ue(this._compId,this._config),this._config);this.events=t.events||[],this.simpleCompInfo=t.simpleCompInfo,this.data=t.datas,this.opts=t.opts;let e=this.childStyle=t.childStyle,s=t.themes,n=t.paddings,o=t.container;(!this.size.width||!this.size.height)&&(this.size.width=t.width,this.size.height=t.height),this.parentDom.style.width=p(t.width),this.parentDom.style.height=p(t.height),this.dom.style.position="relative",this.resize();let r=Nt(this._config).js,a=this._config.status==="component"?"src":"";await Promise.all(t.component.map(c=>m.script([`C${c}`,`${r}/${c}${a}.js`]))),t.component.forEach((c,h)=>{let l=`C${c}`,d=document.createElement("div"),f=document.createElement("div");if(d.appendChild(f),this.dom.appendChild(d),e[h]){let u=e[h];Object.assign(f.style,{width:p(u.width),height:p(u.height)}),Object.assign(d.style,{position:"absolute",top:p(u.top),left:p(u.left),width:p(u.width),height:p(u.height),transform:`rotate(${u.rotate||0}deg)`,backgroundColor:u.backgroundColor})}this._config.config={theme:s[h],padding:n[h],data:this.data[h],opts:this.opts[h],events:this.events[h]};try{let u=new window.conch[l](f,{fromComplex:!0,_id:c,_ctId:o[h],...this._config});u._getParent=()=>this,this._componentInstances.push(u),this._options.push(u._options)}catch(u){console.error(u),this.loadCompError({boundDom:d,graphDom:f,id:c,index:h})}}),this._config.config=null,await super.__initComp()}__render(){return Promise.all(this._componentInstances.map(async(t,e)=>{await t.render(),this.events[e]&&this.customEvent.__run(t,this.events[e])}))}__update(){this.eachInstance("__update")}__destroy(){this.eachInstance("destroy")}resize(){if(this.useResizeScale){let{width:t,height:e}=this.size,s=getComputedStyle(this.parentDom);this.parentDom.style.transform=`scale(${Math.min(parseInt(s.width)/t,parseInt(s.height)/e)})`,this.parentDom.style.width=p(t),this.parentDom.style.height=p(e)}}setData(t){this.eachInstance((e,s)=>{let n=t[s];n&&e.setData(n)})}setOption(t){this.eachInstance((e,s)=>{let n=t[s];n&&e.setOption(n)})}transform(){this.eachInstance("transform"),this.__transform()}__changeTitleDOM(t,e,s){super.__changeTitleDOM(t,e,s),this.__resizeParentHeight()}eachInstance(t){this._componentInstances.forEach((e,s)=>{typeof t=="string"?this[t].call(e):t(e,s)})}query(t){return t&&this._componentInstances.find(e=>e._config._id===t||e._config._ctId===t)}updateComponentStyle({width:t,height:e,backgroundColor:s,left:n,top:o,id:r,rotate:a}){let c=this.query(r);if(c){let h=c.dom.parentNode,l=h.parentNode;typeof t=="number"&&(h.style.width=l.style.width=p(t)),typeof e=="number"&&(h.style.height=l.style.height=p(e)),c.resize(),typeof a=="number"&&(l.style.transform=`rotate(${a}deg)`),typeof s=="string"&&(h.style.backgroundColor=s),typeof n=="number"&&(l.style.left=p(n)),typeof o=="number"&&(l.style.top=p(o))}}updateConfig(t,e){e===0&&(this._options=[]),this._options.push(t._options)}loadCompError(t){let{boundDom:e,graphDom:s,id:n,index:o}=t,r=this.childStyle[o];r&&(s.style.width=r.width,s.style.height=r.height,s.style.border="1px dashed red",e.style.position="absolute",e.style.top=r.top,e.style.left=r.left),s.innerHTML='<span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: red">Error: \u56FE\u8868\u52A0\u8F7D\u5931\u8D25</span>'}},T=it;var nt=class extends _{constructor(t,e){super(t,e),this.__initComp()}__render(){this.instance=window.echarts.init(this.dom),this.__update()}__update(){this.instance.clear(),this.instance.setOption(this.opts)}__destroy(){this.instance&&window.echarts.dispose(this.instance)}resize(){this.instance&&this.instance.resize()}setOption(t){if(this.config&&Object.prototype.toString.call(this.config).slice(8,-1)==="Object"){this.config=t,this.render();return}if(!this.instance)return;this.instance.setOption(t);let e={};Object.entries(this.instance._model._optionManager.mountOption()).forEach(([s,n])=>{if(n!=null){let o=JSON.stringify(n);if(o==="{}"||o==="[]")return;e[s]=n}}),this.opts=e}setData(t){if(this.config&&typeof this.config=="object"){this.data=w(t,this.data),this.render();return}if(t&&typeof t=="object"){let e=this.opts.series;if(Array.isArray(t)){if(t.length===0)return;let s;t[0].key&&t[0].value?(t=t.filter(n=>n.key&&n.value),s=n=>e.find(o=>o.name===n)):s=(n,o)=>e[o],t.forEach(({key:n,value:o},r)=>{let a=s(n,r);a&&(a.data=o)})}else Object.keys(t).forEach(s=>{let n=e.find(o=>o.name===s);n&&(n.data=t[s])});this.data=w(t,this.data),this.render()}}transform(){this.opts=this.transformOptions()}},M=nt;var ge=i=>{if(!i)throw new Error("\u627E\u4E0D\u5230 vue \u73AF\u5883");return i},ot=class extends _{static __richComp(t){let e=t.prototype;e.__getDom=e.render,super.__richComp(t)}constructor(t,e){window.conch.registerVue(e.Vue),super(t,e),this.__initComp()}__render(){let t=ge(window.conch.Vue||window.Vue),e=20,s=performance.now(),n=this;this.instance=new t({el:this.dom,render:o=>{try{return this.catchRender(o,e,s)}catch(r){I({id:this._compId,instance:n,error:r})}}}),this.dom=this.instance.$el}catchRender(t,e,s){if(e<=0){let n="[conch error] \u56FE\u8868\u88AB\u91CD\u590D\u6E32\u67D3\uFF0C\u8BF7\u6CE8\u610F";throw console.error(n),new Error(n)}return performance.now()-s<20?e-=1:e=20,this.$createElement=t,this.__getDom(t,this.data,this.opts)}__update(){this.instance.$forceUpdate()}__destroy(){this.instance.$destroy()}resize(){this.useResizeScale&&(this.parentDom.style.width="100%",this.parentDom.style.height="100%")}setData(t,e){this.data=w(t,this.data),this.instance&&this.render()}setOption(t,e){this.opts=w(t,this.opts),this.instance&&this.render()}transform(){this.transformOptions()}__changeTitleDOM(t,e,s){super.__changeTitleDOM(t,e,s),this.__resizeParentHeight()}},L=ot;var me={default:L,echarts:M,complex:T},rt=class extends _{static __richComp(t){let e=t.prototype;e.__getDom=e.render,e.render=e.__initRender;let s=e.destroy;e.destroy=function(){(g(s)?function(){this.__destroy(),s.call(this)}:this.__destroy).call(this)}}constructor(t,e={}){super(t,e),this.type=this.type||"default",window.conch.registerVue(this._config.Vue);let s=["setData","setOption"],n={};s=s.filter(o=>{let r=typeof this[o]!="function";return r&&(this[o]=function(a){n[o]=a}),r}),setTimeout(()=>{s.forEach(o=>{this[o]=null}),B(this,me[this.type].prototype,!1),this.type==="complex"?T.prototype.__initComp.call(this):this.__initComp(),Object.entries(n).forEach(([o,r])=>{this[o].call(this,r)})})}},Rt=rt;function y(i,t){if(!(this instanceof y))return new y(i,t);this.proto=i,this.target=t,this.methods=[],this.getters=[],this.setters=[],this.fluents=[]}y.auto=function(i,t,e){for(var s=y(i,e),n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],a=Object.getOwnPropertyDescriptor(t,r);if(a.get&&s.getter(r),a.set&&s.setter(r),a.hasOwnProperty("value")){var c=a.value;c instanceof Function?s.method(r):s.getter(r),a.writable&&s.setter(r)}}};y.prototype.method=function(i){var t=this.proto,e=this.target;return this.methods.push(i),t[i]=function(){return this[e][i].apply(this[e],arguments)},this};y.prototype.access=function(i){return this.getter(i).setter(i)};y.prototype.getter=function(i){var t=this.proto,e=this.target;return this.getters.push(i),t.__defineGetter__(i,function(){return this[e][i]}),this};y.prototype.setter=function(i){var t=this.proto,e=this.target;return this.setters.push(i),t.__defineSetter__(i,function(s){return this[e][i]=s}),this};y.prototype.fluent=function(i){var t=this.proto,e=this.target;return this.fluents.push(i),t[i]=function(s){return typeof s<"u"?(this[e][i]=s,this):this[e][i]},this};var Ht=y;var _e=i=>{if(!i)throw new Error("\u627E\u4E0D\u5230 vue \u73AF\u5883");return i},ye=["data","opts","config","parentDom","themes","themeIndex","type","useResizeScale","titleDom","subTitleDom","padding","theme","size","_config","_options","_isLoadingComp","_key","img","fonts","css","script","log"],be=["setData","setOption","resize","render","$on","$once","$off","$emit","show","hide","transformOptions","getBlueprintNode","onExecute","onStop","query","updateComponentStyle","setTitle","openTitle","closeTitle","setSubTitle","openSubTitle","closeSubTitle","setCompBG","setPadding","setTheme","trigger"],Bt=new Set(["resize"]),we=new Set(["dom","instance"]),qt=new Set(["setData","setOption","setTheme"]),at=class extends _{static __richComp(t){super.__richComp(t)}constructor(t,e){window.conch.registerVue(e.Vue),super(t,e),this.__initComp(),this.useResizeScale=!1,this.vmUseProtoMethods=new Set}__render(){let t=_e(window.conch.Vue||window.Vue),e=this.__mergeVueInstData(),s=function(){return{...e}},{data:n,mounted:o,...r}=this.vueInstConfig,a=this.__instanceKey,c=this.type==="echarts",h=this.__initChart.bind(this);this[a]=new t({el:this.dom,data:s,mounted:this.__vueInstMounted(o,c&&h),...r});let l=this.render.bind(this);this.type==="echarts"?this[a].$watch("config",l):this[a].$watch("opts",l),this[a].$watch("theme",l),this[a].$watch("data",l),this[a].$watch("padding",l),this.dom=this[a].$el,this.__getMethodsFromProp(),this.render();let d=new Ht(this,a);for(let f in this[a])we.has(f)||!qt.has(f)&&!Bt.has(f)&&(g(this[a][f])?d.method(f):d.access(f))}__update(){let t=this.__instanceKey;this[t]?.$forceUpdate(),this.type==="echarts"&&this.__updateChart(this.opts),this.__transform()}__destroy(){let t=this.__instanceKey;this[t]?.$destroy()}resize(){let t=this.type==="echarts",e=!this.vmUseProtoMethods.has("resize");t?e?this._instance?.resize&&this._instance.resize():this.instance&&this.instance.resize():e?this.instance?.resize&&this.instance.resize():this.useResizeScale&&(this.parentDom.style.width="100%",this.parentDom.style.height="100%")}setData(t){let e=this.__instanceKey;if(!this[e]){this.data=w(t,this.data);return}this.data=w(t,this[e].data),this[e].data=this.data,this[e]&&this.render()}setOption(t){let e=this.__instanceKey,s=this.type==="echarts";if(!this[e]){if(s){this.config=opts;return}this.opts=t;return}s?this.config&&Object.prototype.toString.call(this.config).slice(8,-1)==="Object"&&(this.config={...this[e].config,...t},this[e].config=this.config):(this.opts={...this[e].opts,...t},this[e].opts=this.opts),this[e]&&this.render()}setTheme(t){let e=this.__instanceKey;if(!this[e]){this.theme=t;return}this.theme={...this[e].theme,...t},this[e].theme=this.theme,this.render()}transform(){this.opts=this.transformOptions()}__changeTitleDOM(t,e,s){super.__changeTitleDOM(t,e,s),this.__resizeParentHeight()}__mergeVueInstData(){let t=ye,e={};for(let a in this){let c=g(this[a]);t.includes(a)&&!c&&(e[a]=this[a])}let{data:s}=this.vueInstConfig,n=g(s)?s():s,o={...n,...e,type:n?.type||"vueSFC"};Object.assign(this,o);let r=o.type==="echarts";return this.__instanceKey=`${r?"_":""}instance`,o}__initChart(t,e){if(t.nodeType!==1)throw new Error("echart \u521D\u59CB\u5316\u7F3A\u5C11 element \u8282\u70B9");return this.opts=e,this.instance=window.echarts.init(t),this.__updateChart(e),this.instance}__updateChart(t){this.instance&&(this.instance.clear(),this.instance.setOption(t))}__vueInstMounted(t,e){let s=this.parent;return function(){if(e){let n;if(this.transformOptions)n=this.transformOptions();else throw new Error("echarts\u7C7B\u7EC4\u4EF6\u9700\u5B9E\u73B0transformOptions\u65B9\u6CD5");this.instance||(this.instance=e(this.$refs.echarts||this.$el,n))}else this.instance=this;this.dom=this.$el,this.parent=s,t&&t.call(this)}}__getMethodsFromProp(){let t=this.__instanceKey;for(let e of be)if(!!g(this[e]))if(E(this[t][e]))this[t][e]=this[e].bind(this),this.vmUseProtoMethods.add(e);else{if(qt.has(e)){let n=this[t][e],o=function(...r){n.apply(this,r)};this[t][e]=o.bind(this[t])}Bt.has(e)||(this[e]=this[t][e].bind(this[t]))}}},Ut=at;var ct={Default:L,Complex:T,Echarts:M,OldBase:Rt,VueSFC:Ut};var x=k(j());console.log("compile version is "+x.version);window.conch={version:x.version,Vue:null,__globalVar:x.globalVar,Base:ct.OldBase,CustomEvent:F,...ct,createCss:m.style,$on:C.$on.bind(C),$emit:C.$emit.bind(C),$off:C.$off.bind(C),install(i){this.Vue=i},register(i,t,e,s,n="default",o="1"){_t(o,x.version)===1&&console.error(`\u5F53\u524D\u7EC4\u4EF6${i}\u7248\u672C\u9AD8\u4E8E\u8FD0\u884C\u7248\u672C\uFF0C\u9700\u8981\u5347\u7EA7\u7EC4\u4EF6\u8FD0\u884C\u73AF\u5883`),s&&this.registerVue(s),e.script&&(this.__globalVar.scripts=Object.assign(this.__globalVar.scripts,e.script)),t.prototype.version=o,t.prototype.__richConfig=e,t.prototype._compId=i,t.__richComp(t,i,e),this[i]=t},registerVue(i){i&&(!this.Vue&&(this.Vue=i),!window.Vue&&(window.Vue=i))},async loadAllScript(){this.__globalVar.async=!0;let i=Object.entries(this.__globalVar.scripts).filter(([t,e])=>typeof e=="string");await Promise.all(i.map(t=>m.script(t,prefix)))}};})();

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  // 绑定dom事件
  function addEventListener(instance, name, fn, capture, context) {
    const { elements } = instance.$events;

    const _fn = fn.bind(context);

    if (elements[name]) {
      elements[name].push({ fn, _fn, context });
    } else {
      elements[name] = [{ fn, _fn, context }];
    }

    instance.$el.addEventListener(name, _fn, capture);

    return instance
  }

  // 解绑dom事件
  function removeEventListener(instance, name, fn, capture, context) {
    const { elements } = instance.$events;
    const events = elements[name];

    if (events) {
      const index = events.findIndex(
        (item) => item.fn === fn && item.context === context
      );

      if (index !== -1) {
        const event = events[index];
        events.splice(index, 1);
        instance.$el.removeEventListener(name, event._fn, capture);
      }
    }

    return instance
  }

  // 绑定事件
  function on(instance, name, fn, context) {
    const { events } = instance.$events;

    if (!events[name]) {
      events[name] = [];
    }
    events[name].push({ fn, context });

    return instance
  }

  // 绑定一次事件
  function once(instance, name, fn, context) {
    function _on() {
      off(instance, name, _on);
      fn.apply(context || instance, arguments);
    }
    return on(instance, name, _on, context)
  }

  // 解绑事件
  function off(instance, name, fn, context) {
    const { events } = instance.$events;
    const eventList = events[name];

    if (fn) {
      if (eventList) {
        let i = eventList.length;
        while (i--) {
          const event = eventList[i];
          if (event.fn === fn && event.context === context) {
            eventList.splice(i, 1);
            break
          }
        }
      }
    } else {
      events[name] = null;
    }

    return instance
  }

  // 触发事件
  function emit(instance, name, args) {
    const eventList = [...(instance.$events.events[name] || [])];

    eventList.forEach((event) => {
      emitHandler(event.fn, event.context, args);
    });

    return instance
  }

  // 触发执行
  function emitHandler(eventFn, instance, args) {
    try {
      eventFn.apply(instance, args);
    } catch (e) {
      console.error(e);
    }
  }

  // 异步触发
  async function syncEmit(instance, name, args) {
    const events = instance.$events.events[name];

    if (events) {
      for (let i = 0, l = events.length; i < l; i++) {
        const event = events[i];
        await syncEmitHandler(event.fn, event.context, args);
      }
    }
    return this
  }

  // 异步触发执行
  async function syncEmitHandler(eventFn, instance, args) {
    try {
      await eventFn.apply(instance, args);
    } catch (e) {
      console.error(e);
    }
  }

  // 获取下一个有效节点
  function getNextValidComp(instance, comps) {
    const next = instance.$next;
    if (next) {
      if (comps.includes(next)) {
        return getNextValidComp(next, comps)
      } else {
        return next
      }
    }
    return null
  }

  // 排序数组
  function arraySort(arr, cb) {
    const list = [...arr];
    return list.sort(cb)
  }

  // 编组初始化
  async function groupInit(group, comps = [], option = {}, config = {}) {
    const children = arraySort(comps, (a, b) => a.$ranking - b.$ranking);
    const childrenOptions = children.map((comp) => comp.toJSON());
    const options = {
      type: 'Group',
      option,
      children: childrenOptions,
    };

    const minRankComp = children.reduce((acc, value) => {
      if (acc) {
        if (acc.$ranking > value.$ranking) {
          return value
        } else {
          return acc
        }
      }
      return value
    }, null);
    const nextComp = getNextValidComp(minRankComp, children);

    await group.init(comps[0].$parent, options, { nextComp });

    if (config.select) {
      group.select(true);
    }

    return group
  }

  // 获取唯一属性名
  function getNodeOnlyAttr(attr, value) {
    let i = 0;

    function getAttr(name) {
      const newName = '' + name + i++;
      if (document.querySelector(`[${newName}=${value}]`)) {
        return getAttr(newName)
      }
      return newName
    }

    return getAttr(attr)
  }

  // 是否是数字类型
  function isNumber$1(value) {
    return value === +value
  }

  // 获取适配器类型
  function getAdapterType(option, kpAdapter) {
    switch (kpAdapter?.thingType) {
      case 'Campus':
        return 'CampusAdapter'
      case 'LowCode':
        return 'LowCodeAdapter'
      case 'Map':
        return 'MapAdapter'
      case 'Topology':
        return 'TopologyAdapter'
      default:
        return option.type
    }
  }

  // 合并数据字段映射
  function mergeDataFields(source, target) {
    if (!target) {
      return null
    }

    const cache = {};

    if (source) {
      source.forEach((item) => {
        cache[item.name] = item;
      });
    }

    return target.map((item) => {
      const temp = cache[item.name] || item;
      return { ...item, value: temp.value || temp.name }
    })
  }

  /**
   * @desc 深拷贝
   * @param {*} source
   * @returns {*[]|*}
   */
  const deepClone$1 = (source) => {
    if (!source || typeof source !== 'object') {
      return source
    }

    const target = source instanceof Array ? [] : {};

    for (const key in source) {
      target[key] = deepClone$1(source[key]);
    }

    return target
  };

  /**
   * @desc 判断值是否为空
   * @param value
   * @return {boolean}
   */
  const isEmpty$1 = (value) => {
    return value === null || value === undefined
  };

  /**
   * @desc 加载图片
   * @param {String} src 图片地址
   * @returns {Promise<unknown>}
   */
  const loadImg$1 = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (e) => {
        resolve(e);
      };
      img.onerror = (e) => {
        reject(e);
      };
      img.src = src;
    })
  };

  /**
   * @desc 返回数据类型
   * @param {*} v 数据
   * @returns {string}
   */
  const _toString = (v) => {
    return Object.prototype.toString.call(v)
  };

  /**
   * @desc 判断数据类型是否已知的数据类型，String,Array,Number,Boolean,Null,Undefined,Symbol首字母大写，HTMLDivElement等
   * @param {object} obj 被判断的数据类型
   * @param {string} type 数据类型值
   */
  const isType$3 = (obj, type) =>
    Object.prototype.toString.call(obj).includes(type);

  // 转换数据
  const parseData$1 = (d) => {
    try {
      return JSON.parse(d)
    } catch (error) {
      console.error(error);
      return {}
    }
  };

  // 获取唯一值
  function getUid() {
    const result = Math.random().toString(16);
    return result.substring(result.length - 6)
  }

  // 接数管理
  class RestDataManager {
    constructor(parent, config = {}) {
      // 父
      this.parent = parent;
      // 根
      this.root = parent.root;
      // 参数
      this.config = config;
      // 地址
      this.url = null;
      // webSocket实例
      this.ws = null;
      // 等待队列
      this.waitQueueList = null;
      // 请求队列
      this.requestQueue = null;
      // 最大请求队列
      this.requestQueueMax = null;
      // 定时器
      this.timer = null;
      // ping定时
      this.pingTimer = null;
      // 重连定时器
      this.reconnectTimer = null;
      // 重连时间
      this.reconnectTime = null;
      // 状态 true开启, false关闭
      this.status = null;
    }

    // 初始化
    init() {
      if (this.config.disable) return console.warn('接数功能已关闭，无法使用')
      this.status = true;
      this.requestQueue = {};
      this.waitQueueList = [];

      this.url = this.config.websocketUrl;
      this.requestQueueMax = +this.config.restApiMaxQueue;
      this.reconnectTime = 10;

      if (!this.url) {
        return console.error('没有地址')
      }

      this._initWs();
      this._initTime();
    }

    // 初始化webSocket
    _initWs() {
      const ws = (this.ws = new WebSocket(this.url));

      ws.onopen = () => {
        console.log(`数据服务连接成功`);
        this._startPing();
        this.reconnectTime = 10;
        this.sendWaitQueue();
      };

      ws.onmessage = (e) => {
        this.root.$emit('getRestData', e.data);

        if (e.data + '' === '423') {
          this.root.$emit('license-invalid');
          return
        }

        if (e.data === 'ping' || e.data === '连接成功') return
        const res = parseData$1(e.data);
        if (typeof res === 'object') {
          for (const key in res) {
            this._dataHandler(key, res[key]);
          }
        }
      };

      ws.onclose = (e) => {
        this._wsExtract(e, ws);
      };
      ws.onerror = (e) => {
        this._wsExtract(e, ws);
      };
    }

    _wsExtract(e, ws) {
      console.error(`链接接数中断`, e);
      ws.close();
      this.clearQueue();
      this._closePing();
      this._reconnect();
    }

    // 关闭ws
    _closeWs() {
      this._closeReconnect();
      this._closePing();
      this._closeTime();

      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
    }

    // 重连接
    _reconnect() {
      this._closeReconnect();

      console.log(`${this.reconnectTime}秒后重新链接接数功能`);
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTime += 10;
        this._closeWs();
        this._initWs();
      }, this.reconnectTime * 1000);
    }

    // 关闭重连
    _closeReconnect() {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
    }

    // 开始ping
    _startPing() {
      this._closePing();

      this.pingTimer = setInterval(() => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send('ping');
        }
      }, 30000);
    }

    // 停止ping
    _closePing() {
      if (this.pingTimer) {
        clearInterval(this.pingTimer);
      }
      this.pingTimer = null;
    }

    // 初始化定时器
    _initTime() {
      this._closeTime();

      const timeOutHandler = () => {
        const now = Date.now();
        const requestQueue = this.requestQueue;

        for (const id in requestQueue) {
          const request = requestQueue[id];
          if (now - request.time > request.timeout) {
            this._dataHandler(request.data[0].id, {
              type: 'error',
              message: '链接已超时！',
            });
          }
        }
      };

      this.timer = window.setInterval(() => {
        timeOutHandler();
      }, 1000);
    }

    // 关闭定时器
    _closeTime() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    }

    // 数据处理
    _dataHandler(dataId, data) {
      this.requestQueue[dataId]?.handler(data);

      delete this.requestQueue[dataId];

      this.sendWaitQueue();
    }

    // 发送
    send(queue) {
      this.root.$emit('setRestData', queue.data);
      this.ws.send(JSON.stringify(queue.data));
      queue.time = Date.now();
    }

    // 发送等待请求
    sendWaitQueue() {
      // ws异常无法发送
      if (this.ws.readyState !== WebSocket.OPEN) {
        return
      }

      // 能发送请求的数量
      let num = this.requestQueueMax - Object.values(this.requestQueue).length;
      if (num > this.waitQueueList.length) {
        num = this.waitQueueList.length;
      }

      let i = 0;
      while (i < num) {
        const queue = this.waitQueueList.shift();
        this.requestQueue[queue.data[0].id] = queue;
        this.send(queue);
        i++;
      }
    }

    // 加入队列
    addQueue(queue) {
      this.waitQueueList.push(queue);
      this.sendWaitQueue();
    }

    // 清空队列
    clearQueue() {
      const requestQueue = this.requestQueue || {};
      for (const dataId in requestQueue) {
        const queue = requestQueue[dataId];
        queue.handler({
          type: 'error',
          message: '主动退出请求',
        });
      }
      this.requestQueue = {};
    }

    // 清空等待队列
    clearWaitQueue() {
      const waitQueueList = this.waitQueueList || [];
      waitQueueList.forEach((queue) =>
        queue.handler({
          type: 'error',
          message: '主动退出请求',
        })
      );
      this.waitQueueList = [];
    }

    // 移除队列通过编号
    removeQueueById(id) {
      const index = this.waitQueueList.findIndex((item) => item.id === id);

      if (~index) {
        this.waitQueueList.splice(index, 1);
      }

      const queue = Object.entries(this.requestQueue).find(
        (item) => item.id === id
      );

      if (queue) {
        queue.handler({
          type: 'error',
          message: '主动退出请求',
        });
        delete this.requestQueue[queue.data[0].id];
        this.sendWaitQueue();
      }
    }

    // 查询任务通过编号
    getQueueByDataId(id) {
      return this.waitQueueList.find((item) => item.data[0].id === id)
    }

    // 获取编号
    _getId(id) {
      let result = `${id}-${getUid()}`;

      if (this.getQueueByDataId(result)) {
        result = this._getId();
      }

      return result
    }

    // 获取数据
    getData(dataItem, item, cancel) {
      return new Promise((resolve) => {
        function resolveHandler(status, data) {
          return resolve({ status, data })
        }

        if (!this.status || this.config.disable) {
          return resolveHandler(200, {
            type: 'error',
            message: '接数功能已关闭，无法使用',
          })
        }

        const id = dataItem.parent.$parent.id;
        this.removeQueueById(id);

        const { header, body, level, method, url } = item;

        if (!url) {
          return resolveHandler(200, {
            type: 'error',
            message: 'url无效',
          })
        }

        const queue = {
          id,
          dataItem,
          data: [
            {
              id: this._getId(dataItem.parent.$parent.id),
              type: 'rest',
              config: {
                header,
                level,
                body,
                method,
                url,
              },
            },
          ],
          time: null,
          timeout: +this.config.restApiTimeout,
          handler(data) {
            return resolveHandler(200, data)
          },
          errorHandler(data) {
            return resolveHandler(0, data)
          },
        };

        this.addQueue(queue);

        cancel &&
          cancel(() => {
            queue.errorHandler({
              type: 'error',
              message: '主动退出请求',
            });
          });
      })
    }

    // 清空
    clear() {
      this.clearQueue();
      this.clearWaitQueue();
    }

    // 销毁
    destroy() {
      this.status = false;

      this.clear();
      this._closeWs();

      this.url = null;
      this.waitQueueList = null;
      this.requestQueue = null;
      this.requestQueueMax = null;
      this.reconnectTime = null;
    }
  }

  // 过滤器
  let Filter$1 = class Filter {
    constructor(parent, options = {}) {
      // 父
      this.parent = parent;
      // 根
      this.root = parent.root;
      // 数据管理
      this.dataManager = parent.parent;
      // 配置项
      this.options = deepClone$1(options);
      // 使用列表
      this.list = [];
      // 名称
      this.name = options.name;
      // 代码
      this.code = options.code;
      // 回调
      this.callbackArgs = deepClone$1(options.callbackArgs);
    }

    // 添加使用
    addUse(filterWork) {
      if (!this.list.find((item) => item === filterWork)) {
        this.list.push(filterWork);
      }
    }

    // 移除使用
    removeUse(filterWork) {
      const index = this.list.findIndex((item) => item === filterWork);

      if (~index) {
        const filter = this.list.splice(index, 1)[0];
        filter.remove(this.name);
      }
    }

    // 更新名称
    updateName(name) {
      this.name = name;
    }

    // 更新内容
    updateData(code, callbackArgs) {
      this.code = code;
      this.callbackArgs = callbackArgs;

      this.list.forEach((item) => {
        item.parent.refresh();
      });
    }

    // 执行
    execute(data) {
      return this.parent.execute(this, data)
    }

    // 获取
    get() {
      const { options, name, list } = this;

      return { options: deepClone$1(options), name, useCount: list.length }
    }

    // 清空
    clear() {
      const list = [...this.list];
      list.forEach((item) => item.remove(this));
      this.list = [];
    }

    // 销毁
    destroy() {
      this.clear();

      this.name = null;
      this.code = null;
      this.callbackArgs = null;
      this.list = null;
      this.options = null;
      this.dataManager = null;
      this.root = null;
      this.parent = null;
    }
  };

  // 数据过滤管理
  class FilterManager {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 根
      this.root = parent.root;
      // 过滤器集合
      this.filterList = null;
      // 配置项
      this.options = null;
    }

    // 初始化
    init() {
      this.filterList = [];
      this.options = null;
    }

    // 添加过滤器列表
    addFilterList(options = {}) {
      this.options = options;
      const dataFilters = options.dataFilters || [];

      this.filterList = dataFilters.map((filter) => {
        return new Filter$1(this, filter)
      });

      this.filterList.forEach((filter) => {
        this.root._update('data:filterAdd', filter, null);
      });
    }

    // 添加过滤器
    add(options = {}, startIndex = null) {
      let filter = this.getFilterByName(options.name);

      if (!filter) {
        filter = new Filter$1(this, options);
        if (isNumber$1(startIndex)) {
          this.filterList.splice(startIndex, 0, filter);
        } else {
          this.filterList.push(filter);
        }

        this.root._update('data:filterAdd', filter, null);
      }

      return filter
    }

    // 通过name查找单个过滤器
    getFilterByName(name) {
      return this.filterList.find((filter) => filter.name === name)
    }

    // 获取过滤器索引
    getFilterIndex(filter) {
      return this.filterList.findIndex((item) => item === filter)
    }

    // 获取定义文件
    toJSON() {
      return this.filterList.map((filter) => {
        return {
          name: filter.name,
          code: filter.code,
          callbackArgs: deepClone$1(filter.callbackArgs),
        }
      })
    }

    // 更新名称
    updateName(filter, name) {
      if (filter && name && !this.getFilterByName(name)) {
        filter.updateName(name);
        return true
      }
      return false
    }

    // 更新内容
    updateData(filter, code, callbackArgs = []) {
      filter.updateData(code, callbackArgs);
      return this
    }

    // 执行
    execute(filter, data) {
      const callbackArgs = {};
      let result;

      filter.callbackArgs.forEach((item) => {
        callbackArgs[item] = this.parent.filterArgs[item];
      });

      try {
        // eslint-disable-next-line no-new-func
        result = new Function('data', 'callbackArgs', filter.code)(
          deepClone$1(data),
          callbackArgs
        );
      } catch (e) {
        result = e.message;
      }

      return result
    }

    // 测试
    test(filter, data) {
      return this.execute(filter, data)
    }

    // 删除过滤器
    remove(filter) {
      filter.destroy();
      const index = this.filterList.findIndex((item) => item === filter);

      if (~index) {
        this.filterList.splice(index, 1);
        this.root._update('data:filterRemove', null, {
          name: filter.name,
          code: filter.code,
          callbackArgs: deepClone$1(filter.callbackArgs),
        });
        return filter
      }
    }

    // 删除所有过滤器
    clear() {
      const filterList = [...this.filterList];

      filterList.forEach((filter) => {
        filter.destroy();
      });
      this.filterList = [];
    }

    // 销毁
    destroy() {
      this.clear();

      this.options = null;
      this.filterList = null;
      this.root = null;
      this.parent = null;
    }
  }

  // 定时管理
  class TimerManager {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 数据列表
      this.dataList = null;
      // 定时器
      this.timer = null;
      // 运行状态
      this.started = null;
    }

    // 初始化
    init() {
      this.dataList = [];
      this.stop();
    }

    // 初始化定时器
    _initTime() {
      this._destroyTime();

      this.timer = window.setInterval(() => {
        if (!this.started) {
          return
        }

        const list = this._getExpireData();
        list.forEach((item) => item.run().updateNow());
      }, 1000);
    }

    // 销毁定时器
    _destroyTime() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
    }

    // 开始
    start() {
      this.started = true;
      this._initTime();
    }

    // 停止
    stop() {
      this.started = false;
      this._destroyTime();
    }

    // 获取到期
    _getExpireData() {
      return this.dataList.filter((item) => item.getRefreshable())
    }

    // 添加
    add(timerWork) {
      if (!this.dataList.find((item) => item === timerWork)) {
        this.dataList.push(timerWork);
      }
    }

    // 清除
    remove(timer) {
      const index = this.dataList.findIndex((item) => item === timer);

      if (~index) {
        this.dataList.splice(index, 1);
      }
    }

    // 清空
    clear() {
      const dataList = [...this.dataList];

      for (const item of dataList) {
        item.destroy();
      }
      this.dataList = [];
    }

    // 销毁
    destroy() {
      this.clear();
      this._destroyTime();
      this.dataList = null;
      this.timer = null;
      this.started = null;
    }
  }

  // 数据管理
  class DataManager {
    constructor(parent, config = {}) {
      // 父级
      this.parent = parent;
      // 根
      this.root = parent;
      // 参数
      this.config = config;
      // 定时管理
      this.timeManager = new TimerManager(this);
      // 接数管理
      this.restDataManager = new RestDataManager(this, config);
      // 过滤器管理
      this.filterManager = new FilterManager(this);
      // 是否开始
      this.started = null;
      // 数据集合
      this.dataList = null;
      // 回调数据
      this.filterArgs = null;

      this.root.$on('beforeCreate:Canvas', this.beforeCreateCanvas, this);
    }

    // 初始化
    init() {
      this.dataList = [];
      this.timeManager.init();
      this.filterManager.init();
      this.restDataManager.init();
      this.filterArgs = {};
      return this
    }

    // 画布创建前
    beforeCreateCanvas(canvas) {
      this.filterManager.addFilterList({
        dataFilters: deepClone$1(canvas.$options.kpOption?.dataFilters || []),
      });
      return this
    }

    // 添加
    _add(dataItem) {
      if (!this.dataList.find((item) => item === dataItem)) {
        this.dataList.push(dataItem);
      } else {
        console.warn('数据节点已经添加过了');
      }
      return this
    }

    // 开始
    start() {
      if (this.started) {
        console.warn('已经开始了');
      } else {
        this.started = true;
        // 最后开始执行订阅数据
        const subscribeList = [];
        this.dataList.forEach((item) => {
          if (item.subscriber.subscriberList.length) {
            subscribeList.push(item);
          } else {
            item.start();
          }
        });

        subscribeList.forEach((item) => item.start());
        this.timeManager.start();
      }
      return this
    }

    // 停止
    stop() {
      if (this.started) {
        this.started = false;
        this.timeManager.stop();
      }
      return this
    }

    // 删除
    remove(dataItem) {
      const index = this.dataList.findIndex((item) => item === dataItem);

      if (~index) {
        this.dataList.splice(index, 1);
      } else {
        console.warn('没有数据节点需要删除');
      }
      return this
    }

    // 清空
    clear() {
      const dataList = [...this.dataList];

      dataList.forEach((item) => item.destroy());

      this.dataList = [];
      this.filterManager.clear();
      this.timeManager.clear();
      this.restDataManager.clear();
      this.filterArgs = {};

      return this
    }

    // 获取全部配置信息
    toJSON() {
      const { dataList } = this;
      const result = {};

      for (const id in dataList) {
        const item = dataList[id];

        result[id] = item.toJSON();
      }

      result.global = this.filterManager.toJSON();

      return result
    }

    // 销毁
    destroy() {
      this.root.$off('beforeCreate:Canvas', this.beforeCreateCanvas, this);

      this.clear();

      this.timeManager = null;
      this.restDataManager = null;
      this.filterManager = null;
      this.config = null;
      this.dataList = null;
      this.started = null;
      this.filterArgs = null;

      return this
    }
  }

  // 交互
  class Mutual {
    constructor(ui) {
      this.ui = ui;
      this.dataManager = ui.$dataManager;
      // conch事件
      this.conchEvent = null;
      // 回调字段
      this.callbackFields = null;

      this.init();
    }

    // todo 支持数据调整
    // 初始化
    init() {
      this.callbackFields = {};

      this.initConchCustomEvent();
      if (!this.ui.$options.isEdit) {
        this.ui.$on('mounted:Container', this.mountedContainer, this);
        this.ui.$on('mounted:Canvas', this.mountedCanvas, this);
        this.ui.$on('adapterCompleted', this.adapterCompleted, this);
      }
    }

    // 初始化图表事件
    initConchCustomEvent() {
      const that = this;
      class MyCustomEvents extends window.conch.CustomEvent {
        /**
         * @param {String|Array} arg id|id[]
         * @returns {Object|Array<Object>|null}
         */
        _query(arg) {
          return that.getUiComp(arg)
        }

        /**
         * @desc 组件的控制显隐动作
         * @param {Object} action 动作对象
         */
        // __doShowOrHidden(action) {
        //   return super.__doShowOrHidden(action)
        // }

        /**
         * @desc 组件的更新图表样式动作
         * @param {Object} action 动作对象
         */
        __doSetOptions(action) {
          const { comp: ctId, opts } = action;
          const ct = that.getUiComp(ctId);
          ct && ct.app.setOption(deepClone$1(opts));
        }

        /**
         * @desc 组件的打开链接动作
         * @param {Object} action 动作对象
         */
        // __doLink(action) {
        //   super.__doLink(action)
        // }

        /**
         * @desc 组件的触发回调动作
         */
        // __doCallback(callback, data) {
        //   that._doCallback((data || {})[callback.value], callback.callback)
        // }

        _afterRun(obj) {
          const { events, data } = obj;
          const callbacks = events.actions
            .filter((action) => action.type === 'callback')
            .map((action) => {
              const { callback } = action;
              return {
                param: (data || {})[callback.value],
                key: callback.callback,
              }
            });

          that._doCallback(callbacks);
        }
      }

      const myCustomEvents = (this.conchEvent = new MyCustomEvents());

      /**
       * @desc 注册自定义事件
       * @param {String} type 事件动作名称
       * @param {Function} fn 执行函数
       * @param {Object} context 执行上下文
       */
      // myCustomEvents._registerType('showOrHidden', () => {
      //   console.log('重新注册showOrHidden动作的执行方法，该方法会覆盖原执行方法')
      // })
      // 蓝图事件
      myCustomEvents._registerType('blueprintEvent', (blueprintEvent) => {
        this._doBlueprintEvent(blueprintEvent);
      });
      // 3d视角
      myCustomEvents._registerType('thingJsCamera', (thingJsCamera) => {
        this._doThingJsCamera(thingJsCamera);
      });
      // 二开代码调用
      myCustomEvents._registerType('secondFunction', (secondFunction, data) => {
        this._doSecondFunction(secondFunction, data);
      });
    }

    // 初始化过滤器回调字段
    initFilterCallback() {
      this.dataManager.filterManager.filterList.forEach((filter) => {
        filter.callbackArgs.forEach((arg) => {
          filter.list.forEach((filterWork) => {
            if (
              filterWork.enabled &&
              filterWork.filterList.find(
                (filterItem) => filterItem.filter === filter && filterItem.enabled
              )
            ) {
              this._addCallbackFields(arg, filterWork.parent.parent);
            }
          });
        });
      });
    }

    // 添加回调字段
    _addCallbackFields(id, adapter) {
      if (!this.callbackFields[id]) {
        this.callbackFields[id] = [];
      }
      if (!this.callbackFields[id].includes(adapter)) {
        this.callbackFields[id].push(adapter);
      }
    }

    // 容器挂载
    mountedContainer(container) {
      if (container.adapter?.type === 'ConchAdapter') {
        const events = container.adapter.events;
        this.conchEvent.__run(container.$uiApp, deepClone$1(events));
      }
    }

    // 容器挂载
    mountedCanvas() {
      this.initFilterCallback();
    }

    // 适配器加载完成
    adapterCompleted(adapter) {
      const dataSource = adapter.$data.dataSource;
      if (dataSource.dataType === 'restData') {
        dataSource.typeMap[dataSource.dataType].options.callbackArgs.forEach(
          (arg) => {
            this._addCallbackFields(arg, adapter);
          }
        );
      }
    }

    // 获取ui实例
    _getUiComp(id) {
      return this.ui.$ui.query('#' + id)
    }

    // 获取ui实例
    getUiComp(compIds) {
      let result;
      const errorIds = [];

      if (Array.isArray(compIds)) {
        result = [];
        compIds.forEach((id) => {
          const comp = this._getUiComp(id);

          if (comp) {
            result.push(comp);
          } else {
            errorIds.push(id);
          }
        });
      } else {
        const comp = this._getUiComp(compIds);

        if (comp) {
          result = comp;
        } else {
          errorIds.push(compIds);
        }
      }

      if (errorIds.length) {
        console.error('画布中没有找到图表，编号为', errorIds.join());
      }

      return result
    }

    _doCallback(callbacks) {
      let list = [];
      for (const c of callbacks) {
        const { param, key } = c;
        // 先更新参数池
        this.dataManager.filterArgs[key] = param;

        list.push(...(this.callbackFields[key] || []));
      }

      // 去重
      list = list.filter((item, index) => list.indexOf(item) === index);

      list.forEach((adapter) => {
        adapter.$data.refresh();
      });
    }

    // _doCallback(param, key) {
    //   // 先更新参数池
    //   this.dataManager.filterArgs[key] = param

    //   const list = this.callbackFields[key] || []
    //   list.forEach((adapter) => {
    //     adapter.$data.refresh()
    //   })
    // }

    // 触发蓝图事件
    _doBlueprintEvent(action) {
      const bluePrint = this.ui.$bluePrint.blueprint;
      const { name, arg } = action;
      if (bluePrint && name) {
        bluePrint.triggerEvent(name, arg);
      }
    }

    // 执行3d摄像机
    _doThingJsCamera(data) {
      const { uuid, position, target } = data;
      const comp = this.ui.$queryById(data.compId);

      if (comp?.adapter) {
        if (uuid) {
          comp.adapter.fly(uuid, position, target);
        } else {
          comp.adapter.earthFly(position, target);
        }
      }
    }

    // 执行二开方法调用
    _doSecondFunction(action, data) {
      const { name, arg } = action;
      const obj = this.ui.$jsCode.kunpengApi;

      if (obj[name]) {
        try {
          obj[name](arg, data);
        } catch (e) {
          console.warn(` ${name} 这个代码二开的方法执行失败`, e);
        }
      } else {
        console.warn(`没有找到 ${name} 这个代码二开的方法`);
      }
    }

    // 销毁
    destroy() {
      this.ui.$off('mounted:Container', this.mountedContainer, this);
      this.ui.$off('mounted:Canvas', this.mountedCanvas, this);
      this.ui.$off('adapterCompleted', this.adapterCompleted, this);

      this.callbackFields = null;
      this.conchEvent = null;
      this.dataManager = null;
      this.ui = null;
    }
  }

  // 当前大屏定义文件版本
  const currentKpVersion = 1;

  // 转换定义文件
  function transform$2(ui, def = {}) {
    let result = deepClone$1(def);
    const kpVersion = def.kpVersion || 0;

    if (kpVersion > currentKpVersion) {
      console.warn(
        `您使用的${kpVersion}版本的大屏文件高于当前版本${currentKpVersion}；如果遇到功能丢失或者渲染异常，请联系管理员升级。`
      );
    }

    // seabed版本
    if (!Reflect.has(result, 'version') && result.type === 'Canvas') {
      try {
        result = ui.sprayToUI(result);
      } catch (e) {
        console.warn('定义文件转换失败');
      }
    }

    // 老版本
    if (!result.kpVersion || result.kpVersion === 1) {
      result = transformSceneDefTo1(result);
    }

    return result
  }

  // 转换场景定义文件
  function transformSceneDefTo1(def) {
    const result = deepClone$1(def);
    const compList = {};

    function each(target) {
      const { option, children } = target;
      compList[option.id] = target;
      if (children) {
        children.forEach((child) => {
          each(child);
        });
      }
    }

    each(result.scene);

    transform1AnimationNullData(result, compList);
    transform1DefaultContainer(result, compList);
    transform1Events(result);
    transform1UserData(result);
    transform1KpUserData(result);

    return result
  }

  // 处理动画空数据
  function transform1AnimationNullData(result, compList) {
    Object.values(compList).forEach((item) => {
      const animation = item.option.animation;
      if (animation) {
        if (animation.enter && animation.enter[0] === null) {
          delete animation.enter;
        }
        if (animation.leave && animation.leave[0] === null) {
          delete animation.leave;
        }
      }
    });
  }

  // 处理默认容器格式
  function transform1DefaultContainer(result, compList) {
    Object.entries(result.kpUserData)
      .filter((item) => item[1].adapter?.thingType)
      .forEach(([id]) => {
        if (compList[id]) {
          compList[id].type = 'DefaultContainer';
        }
      });
  }

  // 处理版本1之前的交互数据
  function transform1Events(result) {
    Object.entries(result.userData).forEach(([id, item]) => {
      // 处理交互事件
      if (!item.events) {
        if (result.kpUserData[id]?.adapter?.events) {
          item.events = result.kpUserData[id]?.adapter?.events;
        } else {
          item.events = [];
        }
      }

      item.events.forEach((event) => {
        if (event && event.actions) {
          event.actions = event.actions.map(transformEventAction);
        }
      });
    });
  }

  // 处理版本1之前的用户数据
  function transform1UserData(result) {
    Object.entries(result.userData).forEach(([id, item]) => {
      transform1UserDataItem(item, result.kpUserData[id]?.adapter);
    });
  }
  // 处理版本1之前的用户数据
  function transform1UserDataItem(userData, kpUserDataAdapter) {
    if (Reflect.has(userData, 'data')) {
      const data = userData.data;
      if (
        data?.source &&
        data.dataType &&
        Reflect.has(data, 'close') &&
        Reflect.has(data, 'time') &&
        Reflect.has(data.source, 'staticData')
      ) {
        userData.data = data.source.staticData;
      }
    } else {
      if (kpUserDataAdapter?.data?.source) {
        userData.data = kpUserDataAdapter.data.source.staticData;
      }
    }

    if (
      !Reflect.has(userData, 'opts') &&
      Reflect.has(kpUserDataAdapter, 'opts')
    ) {
      userData.opts = kpUserDataAdapter.opts;
    }

    if (
      !Reflect.has(userData, 'events') &&
      Reflect.has(kpUserDataAdapter, 'events')
    ) {
      userData.events = kpUserDataAdapter.events;
    }

    if (
      !Reflect.has(userData, 'padding') &&
      Reflect.has(kpUserDataAdapter, 'padding')
    ) {
      userData.padding = kpUserDataAdapter.padding;
    }

    if (
      !Reflect.has(userData, 'theme') &&
      Reflect.has(kpUserDataAdapter, 'theme')
    ) {
      userData.theme = kpUserDataAdapter.theme;
    }
  }

  // 处理版本1之前的大屏用户数据
  function transform1KpUserData(result) {
    Object.entries(result.kpUserData).forEach(([id, item]) => {
      if (
        item.adapter &&
        !Reflect.has(item.adapter, 'kpData') &&
        item.adapter.data &&
        Reflect.has(item.adapter.data, 'source') &&
        Reflect.has(item.adapter.data.source, 'staticData') &&
        Reflect.has(item.adapter.data, 'dataType') &&
        Reflect.has(item.adapter.data, 'close') &&
        Reflect.has(item.adapter.data, 'time')
      ) {
        item.adapter.kpData = item.adapter.data;
      }
    });
  }

  function transformEventAction(action) {
    const { type, name } = action;

    if (type === 'chart' || type === 'layer') {
      const _action = action[type];
      if (_action) {
        if (_action.action === 'show') {
          return {
            type: 'showOrHidden',
            showOrHidden: {
              type: action.type,
              showComps: _action.comps,
              hiddenComps: [],
            },
          }
        } else if (_action.action === 'hidden') {
          return {
            type: 'showOrHidden',
            showOrHidden: {
              type: action.type,
              showComps: [],
              hiddenComps: _action.comps,
            },
          }
        } else if (_action.action === 'changeOptions') {
          return {
            type: 'changeOptions',
            changeOptions: {
              comp: _action.comps[0],
              opts: _action.options,
            },
          }
        } else {
          return {}
        }
      } else {
        return {}
      }
    } else {
      return {
        name,
        type,
        [type]: action[type],
      }
    }
  }

  // 转换kpOption定义文件
  function transformKpOptionDef(def) {
    const result = deepClone$1(def);
    const kpUserData = result.kpUserData;
    const userData = result.userData;

    function each(target) {
      const { option, children } = target;

      if (option.adapter) {
        option.adapter = userData[option.id];
      }
      target.kpOption = kpUserData[option.id];

      children &&
        children.forEach((child) => {
          each(child);
        });
    }

    each(result.scene);

    return result
  }

  // 代码二开
  class JsCode {
    constructor(ui) {
      this.ui = ui;
      this.kunpengApi = {};
    }

    // 运行
    run(code) {
      if (code && code.trim()) {
        try {
          // eslint-disable-next-line no-new-func
          const fn = new Function('ui', `${code}`);
          fn.bind(this.kunpengApi)(this.ui.$ui);
        } catch (e) {
          console.error('代码二开执行错误', e);
        }
      }
    }
  }

  const icon$3 =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE0IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT7liIfniYc8L3RpdGxlPg0KICAgIDxnIGlkPSLmlbDmja4v5Lqk5LqS6Z2i5p2/77yIMzMwLea3se+8iSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLok53lm77oioLngrkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MDIuMDAwMDAwLCAtNjIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTPlpIfku70tMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzkyLjAwMDAwMCwgNTcuNTAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY29uX+iTneWbvuiEmuacrCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiB4PSIwLjMxNDA5NzgxOCIgeT0iMC4zMTQwOTc4MTgiIHdpZHRoPSIxMy4zNzE4MDQ0IiBoZWlnaHQ9IjEzLjM3MTgwNDQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy4yMDY3NTE5LDguMzY5NzgwOTcgTDEzLjIwMTA3NTUsOC4zNjgzNjU2OSBMMTMuMTg4NTA0Miw4LjQzMjQyNDA0IEMxMy4xMTg1OTg4LDguNzU0NTkxMTEgMTIuOTU3Mzc1OCw5LjE5NzE0MTA5IDEyLjcwNDgzNTEsOS43NjAwNzQwNyBMMTAuOTI1MDYzMyw3LjE3NTAxMjQ1IEwxMi4zNzk3NjgyLDcuMjE1MDgwOTggQzEyLjU2NTAzMDgsNC42Njg3OTkzNyAxMC44OTk1NTU2LDIuMjgyMDY2ODEgOC4zMzc3ODc2MywxLjY0MzM0NjMgQzUuOTUxMjg0OTMsMS4wNDgzMjQzNSAzLjQ5MDc0NTAyLDIuMTU5NDMyOTkgMi4zNDIwNzk4Nyw0LjI4MDE1MDAyIEwyLjI0Njg2Nzk0LDQuNDY0MzgyMDQgTDEuMzQ3MTc0NDQsNC4wMjEyODk5NiBDMi42NTc5MDgxLDEuMzU5ODU5OTkgNS42NjUzMTgxMSwtMC4wNTY1NjI0NzA3IDguNTgwNDA3NTQsMC42NzAyNTA5NTUgQzExLjkxNzM2NDYsMS41MDIyNDc4IDEzLjk3MzY0OTUsNC44MzE4OTk2MSAxMy4yNTMzMTU5LDguMTY5NTMzMyBMMTMuMjA2NzUxOSw4LjM2OTc4MDk3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjQ2MjY1NjIsMTIuMTI4OTQzOCBMMTIuNDU2OTc5OCwxMi4xMjc1Mjg1IEwxMi40NDQ0MDg1LDEyLjE5MTU4NjggQzEyLjM3NDUwMzEsMTIuNTEzNzUzOSAxMi4yMTMyODAxLDEyLjk1NjMwMzkgMTEuOTYwNzM5NCwxMy41MTkyMzY5IEwxMC4xODA5Njc2LDEwLjkzNDE3NTIgTDExLjYzNTY3MjUsMTAuOTc0MjQzOCBDMTEuODIwOTM1MSw4LjQyNzk2MjE2IDEwLjE1NTQ1OTksNi4wNDEyMjk2IDcuNTkzNjkxOTQsNS40MDI1MDkxIEM1LjIwNzE4OTI0LDQuODA3NDg3MTQgMi43NDY2NDkzMyw1LjkxODU5NTc4IDEuNTk3OTg0MTgsOC4wMzkzMTI4MiBMMS41MDI3NzIyNSw4LjIyMzU0NDgzIEwwLjYwMzA3ODc1MSw3Ljc4MDQ1Mjc1IEMxLjkxMzgxMjQxLDUuMTE5MDIyNzggNC45MjEyMjI0MiwzLjcwMjYwMDMyIDcuODM2MzExODUsNC40Mjk0MTM3NSBDMTEuMTczMjY4OSw1LjI2MTQxMDU5IDEzLjIyOTU1MzgsOC41OTEwNjI0MSAxMi41MDkyMjAyLDExLjkyODY5NjEgTDEyLjQ2MjY1NjIsMTIuMTI4OTQzOCBaIiBpZD0i5b2i54q25aSH5Lu9IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNjI3OTUyLCA4Ljg3OTU4MSkgc2NhbGUoLTEsIC0xKSB0cmFuc2xhdGUoLTYuNjI3OTUyLCAtOC44Nzk1ODEpICI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNjY5MDI0Myw3LjM1MDUyMzEgTDUuNjY5MDI0Myw3LjgzNDYwMjA1IEw5Ljc0ODA0MDIxLDcuODM0NjAyMDUgTDkuNzQ4MDQwMjEsOC44MzQ2MDIwNSBMNS42NjkwMjQzLDguODM0NjAyMDUgTDUuNjY5MDI0Myw5LjE3NzcyNzkzIEw0LjI1MTk1OTc5LDguMjY0MTI1NTEgTDUuNjY5MDI0Myw3LjM1MDUyMzEgWiBNOC4zMzA5NzU3LDQuODIyMjcyMDcgTDkuNzQ4MDQwMjEsNS43MzU4NzQ0OSBMOC4zMzA5NzU3LDYuNjQ5NDc2OSBMOC4zMzA5NzU3LDYuMzA2MzUxMDMgTDQuMjUxOTU5NzksNi4zMDYzNTEwMyBMNC4yNTE5NTk3OSw1LjMwNjM1MTAzIEw4LjMzMDk3NTcsNS4zMDYzNTEwMyBMOC4zMzA5NzU3LDQuODIyMjcyMDcgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=';

  function createDataProcessNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class VisibilityNode
     * The print node.
     * @memberof THING.CODELESS
     * @extends THING.CODELESS.BaseNode
     */
    return class DataProcessNode extends BaseNode {
      static config = {
        icon: icon$3,
        name: 'DataProcess',
        inputs: [
          {
            name: 'code',
            type: 'string',
            visible: false,
            value: `return ''`,
          },
          {
            name: 'argLength',
            type: 'number',
            visible: false,
          },
        ],
        outputs: [
          // {
          //   name: 'done',
          //   type: 'callback',
          // },
          {
            name: 'result',
            type: 'unknown',
          },
        ],

        dynamic: {
          inputOrOutput: 'input',
          type: 'any',
          label: '数据 [index]', // '[[index]]'2
          length: 1,
        },
      }

      isDynamicInputs() {
        return true
      }

      static isDynamicInput = (inputName) =>
        new RegExp(`^${this.config.name}.{2}\\d+$`, 'i').test(inputName)

      static getDynamicInputIndex = (inputName) =>
        parseInt(inputName.substring(this.config.name.length + 2))

      static getArgNameByIndex = (index) => `data${index + 1}`

      onExecute(data, inputs, outputs) {
        // console.error('inputs.function-', inputs.code, inputs)
        const { code = 'return => arg1' } = inputs;

        const args = Object.keys(inputs).reduce((arg, input) => {
          if (DataProcessNode.isDynamicInput(input)) {
            const index = DataProcessNode.getDynamicInputIndex(input);
            arg[index] = inputs[input];
          }
          return arg
        }, []);

        const argLength = inputs.argLength || 1;
        const functionCode = `function (${new Array(argLength)
        .fill('')
        .map((omit, index) => DataProcessNode.getArgNameByIndex(index))
        .join(',')}){${code}}`;

        // console.error('************args', args, functionCode)

        // eslint-disable-next-line no-new-func
        const handler = new Function('return ' + functionCode)();
        outputs.result = handler(...args);
      }
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear$1;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$3(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq$3;

  var eq$2 = eq_1;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$2(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf$4;

  var assocIndexOf$3 = _assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
        index = assocIndexOf$3(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete$1;

  var assocIndexOf$2 = _assocIndexOf;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
        index = assocIndexOf$2(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet$1;

  var assocIndexOf$1 = _assocIndexOf;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas$1;

  var assocIndexOf = _assocIndexOf;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet$1;

  var listCacheClear = _listCacheClear,
      listCacheDelete = _listCacheDelete,
      listCacheGet = _listCacheGet,
      listCacheHas = _listCacheHas,
      listCacheSet = _listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$4(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;

  var _ListCache = ListCache$4;

  var ListCache$3 = _ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear$1() {
    this.__data__ = new ListCache$3;
    this.size = 0;
  }

  var _stackClear = stackClear$1;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete$1;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet$1;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas$1;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$8;

  var root$7 = _root;

  /** Built-in value references. */
  var Symbol$5 = root$7.Symbol;

  var _Symbol = Symbol$5;

  var Symbol$4 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$e = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$e.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$e.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$b.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$d = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$d.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$3 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$4(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$4;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$5(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$5;

  var baseGetTag$3 = _baseGetTag,
      isObject$4 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$2(value) {
    if (!isObject$4(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$3(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$2;

  var root$6 = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__'];

  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource$2;

  var isFunction$1 = isFunction_1,
      isMasked = _isMasked,
      isObject$3 = isObject_1,
      toSource$1 = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$c = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$a).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$3(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$7;

  var getNative$6 = _getNative,
      root$5 = _root;

  /* Built-in method references that are verified to be native. */
  var Map$4 = getNative$6(root$5, 'Map');

  var _Map = Map$4;

  var getNative$5 = _getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate$4 = getNative$5(Object, 'create');

  var _nativeCreate = nativeCreate$4;

  var nativeCreate$3 = _nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear$1;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete$1;

  var nativeCreate$2 = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$b = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$9.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet$1;

  var nativeCreate$1 = _nativeCreate;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$8.call(data, key);
  }

  var _hashHas = hashHas$1;

  var nativeCreate = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet$1;

  var hashClear = _hashClear,
      hashDelete = _hashDelete,
      hashGet = _hashGet,
      hashHas = _hashHas,
      hashSet = _hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;

  var _Hash = Hash$1;

  var Hash = _Hash,
      ListCache$2 = _ListCache,
      Map$3 = _Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$3 || ListCache$2),
      'string': new Hash
    };
  }

  var _mapCacheClear = mapCacheClear$1;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable$1;

  var isKeyable = _isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData$4;

  var getMapData$3 = _getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete$1;

  var getMapData$2 = _getMapData;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet$1;

  var getMapData$1 = _getMapData;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas$1;

  var getMapData = _getMapData;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet$1;

  var mapCacheClear = _mapCacheClear,
      mapCacheDelete = _mapCacheDelete,
      mapCacheGet = _mapCacheGet,
      mapCacheHas = _mapCacheHas,
      mapCacheSet = _mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$2(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache$2.prototype.clear = mapCacheClear;
  MapCache$2.prototype['delete'] = mapCacheDelete;
  MapCache$2.prototype.get = mapCacheGet;
  MapCache$2.prototype.has = mapCacheHas;
  MapCache$2.prototype.set = mapCacheSet;

  var _MapCache = MapCache$2;

  var ListCache$1 = _ListCache,
      Map$2 = _Map,
      MapCache$1 = _MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet$1;

  var ListCache = _ListCache,
      stackClear = _stackClear,
      stackDelete = _stackDelete,
      stackGet = _stackGet,
      stackHas = _stackHas,
      stackSet = _stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack$3(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack$3.prototype.clear = stackClear;
  Stack$3.prototype['delete'] = stackDelete;
  Stack$3.prototype.get = stackGet;
  Stack$3.prototype.has = stackHas;
  Stack$3.prototype.set = stackSet;

  var _Stack = Stack$3;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$1(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach$1;

  var getNative$4 = _getNative;

  var defineProperty$1 = (function() {
    try {
      var func = getNative$4(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty$1;

  var defineProperty = _defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue$2;

  var baseAssignValue$1 = _baseAssignValue,
      eq$1 = eq_1;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$2(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$7.call(object, key) && eq$1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue$1(object, key, value);
    }
  }

  var _assignValue = assignValue$2;

  var assignValue$1 = _assignValue,
      baseAssignValue = _baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$4(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$1(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject$4;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$6(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$6;

  var baseGetTag$2 = _baseGetTag,
      isObjectLike$5 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$5(value) && baseGetTag$2(value) == argsTag$3;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$4 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike$4(value) && hasOwnProperty$6.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  var isArguments_1 = isArguments$1;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$5 = Array.isArray;

  var isArray_1 = isArray$5;

  var isBufferExports = {};
  var isBuffer$3 = {
    get exports(){ return isBufferExports; },
    set exports(v){ isBufferExports = v; },
  };

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  	var root = _root,
  	    stubFalse = stubFalse_1;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Built-in value references. */
  	var Buffer = moduleExports ? root.Buffer : undefined;

  	/* Built-in method references for those with the same name as other `lodash` methods. */
  	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  	/**
  	 * Checks if `value` is a buffer.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.3.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
  	 * @example
  	 *
  	 * _.isBuffer(new Buffer(2));
  	 * // => true
  	 *
  	 * _.isBuffer(new Uint8Array(2));
  	 * // => false
  	 */
  	var isBuffer = nativeIsBuffer || stubFalse;

  	module.exports = isBuffer;
  } (isBuffer$3, isBufferExports));

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$1(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex$1;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$3(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength$3;

  var baseGetTag$1 = _baseGetTag,
      isLength$2 = isLength_1,
      isObjectLike$3 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$5 = '[object Map]',
      numberTag$3 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$3 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
  typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
  typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
  typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] =
  typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
  typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] =
  typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike$3(value) &&
      isLength$2(value.length) && !!typedArrayTags[baseGetTag$1(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$3(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$3;

  var _nodeUtilExports = {};
  var _nodeUtil = {
    get exports(){ return _nodeUtilExports; },
    set exports(v){ _nodeUtilExports = v; },
  };

  (function (module, exports) {
  	var freeGlobal = _freeGlobal;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Detect free variable `process` from Node.js. */
  	var freeProcess = moduleExports && freeGlobal.process;

  	/** Used to access faster Node.js helpers. */
  	var nodeUtil = (function() {
  	  try {
  	    // Use `util.types` for Node.js 10+.
  	    var types = freeModule && freeModule.require && freeModule.require('util').types;

  	    if (types) {
  	      return types;
  	    }

  	    // Legacy `process.binding('util')` for Node.js < 10.
  	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  	  } catch (e) {}
  	}());

  	module.exports = nodeUtil;
  } (_nodeUtil, _nodeUtilExports));

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary$2 = _baseUnary,
      nodeUtil$2 = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray_1 = isTypedArray$2;

  var baseTimes = _baseTimes,
      isArguments = isArguments_1,
      isArray$4 = isArray_1,
      isBuffer$2 = isBufferExports,
      isIndex = _isIndex,
      isTypedArray$1 = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$4(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer$2(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$2;

  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$3(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

    return value === proto;
  }

  var _isPrototype = isPrototype$3;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object);

  var _nativeKeys = nativeKeys$1;

  var isPrototype$2 = _isPrototype,
      nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype$2(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys$1;

  var isFunction = isFunction_1,
      isLength$1 = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$2(value) {
    return value != null && isLength$1(value.length) && !isFunction(value);
  }

  var isArrayLike_1 = isArrayLike$2;

  var arrayLikeKeys$1 = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$1 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$3(object) {
    return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }

  var keys_1 = keys$3;

  var copyObject$3 = _copyObject,
      keys$2 = keys_1;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$2(source), object);
  }

  var _baseAssign = baseAssign$1;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn$1;

  var isObject$2 = isObject_1,
      isPrototype$1 = _isPrototype,
      nativeKeysIn = _nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject$2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeysIn = _baseKeysIn,
      isArrayLike = isArrayLike_1;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$3(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var keysIn_1 = keysIn$3;

  var copyObject$2 = _copyObject,
      keysIn$2 = keysIn_1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }

  var _baseAssignIn = baseAssignIn$1;

  var _cloneBufferExports = {};
  var _cloneBuffer = {
    get exports(){ return _cloneBufferExports; },
    set exports(v){ _cloneBufferExports = v; },
  };

  (function (module, exports) {
  	var root = _root;

  	/** Detect free variable `exports`. */
  	var freeExports = exports && !exports.nodeType && exports;

  	/** Detect free variable `module`. */
  	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  	/** Detect the popular CommonJS extension `module.exports`. */
  	var moduleExports = freeModule && freeModule.exports === freeExports;

  	/** Built-in value references. */
  	var Buffer = moduleExports ? root.Buffer : undefined,
  	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  	/**
  	 * Creates a clone of  `buffer`.
  	 *
  	 * @private
  	 * @param {Buffer} buffer The buffer to clone.
  	 * @param {boolean} [isDeep] Specify a deep clone.
  	 * @returns {Buffer} Returns the cloned buffer.
  	 */
  	function cloneBuffer(buffer, isDeep) {
  	  if (isDeep) {
  	    return buffer.slice();
  	  }
  	  var length = buffer.length,
  	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  	  buffer.copy(result);
  	  return result;
  	}

  	module.exports = cloneBuffer;
  } (_cloneBuffer, _cloneBufferExports));

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray$1;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$1(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter$1;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return [];
  }

  var stubArray_1 = stubArray$2;

  var arrayFilter = _arrayFilter,
      stubArray$1 = stubArray_1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols$3;

  var copyObject$1 = _copyObject,
      getSymbols$2 = _getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols$1(source, object) {
    return copyObject$1(source, getSymbols$2(source), object);
  }

  var _copySymbols = copySymbols$1;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$2(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush$2;

  var overArg = _overArg;

  /** Built-in value references. */
  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype$2;

  var arrayPush$1 = _arrayPush,
      getPrototype$1 = _getPrototype,
      getSymbols$1 = _getSymbols,
      stubArray = stubArray_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush$1(result, getSymbols$1(object));
      object = getPrototype$1(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn$2;

  var copyObject = _copyObject,
      getSymbolsIn$1 = _getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn$1(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }

  var _copySymbolsIn = copySymbolsIn$1;

  var arrayPush = _arrayPush,
      isArray$3 = isArray_1;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$3(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys$2;

  var baseGetAllKeys$1 = _baseGetAllKeys,
      getSymbols = _getSymbols,
      keys$1 = keys_1;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys$2(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }

  var _getAllKeys = getAllKeys$2;

  var baseGetAllKeys = _baseGetAllKeys,
      getSymbolsIn = _getSymbolsIn,
      keysIn$1 = keysIn_1;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn$1;

  var getNative$3 = _getNative,
      root$4 = _root;

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$3(root$4, 'DataView');

  var _DataView = DataView$1;

  var getNative$2 = _getNative,
      root$3 = _root;

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$2(root$3, 'Promise');

  var _Promise = Promise$2;

  var getNative$1 = _getNative,
      root$2 = _root;

  /* Built-in method references that are verified to be native. */
  var Set$2 = getNative$1(root$2, 'Set');

  var _Set = Set$2;

  var getNative = _getNative,
      root$1 = _root;

  /* Built-in method references that are verified to be native. */
  var WeakMap$2 = getNative(root$1, 'WeakMap');

  var _WeakMap = WeakMap$2;

  var DataView = _DataView,
      Map$1 = _Map,
      Promise$1 = _Promise,
      Set$1 = _Set,
      WeakMap$1 = _WeakMap,
      baseGetTag = _baseGetTag,
      toSource = _toSource;

  /** `Object#toString` result references. */
  var mapTag$4 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$4 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$3 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap$1);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag$4 = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$3) ||
      (Map$1 && getTag$4(new Map$1) != mapTag$4) ||
      (Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag) ||
      (Set$1 && getTag$4(new Set$1) != setTag$4) ||
      (WeakMap$1 && getTag$4(new WeakMap$1) != weakMapTag$1)) {
    getTag$4 = function(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$3;
          case mapCtorString: return mapTag$4;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$4;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag$4;

  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray$1(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray$1;

  var root = _root;

  /** Built-in value references. */
  var Uint8Array$3 = root.Uint8Array;

  var _Uint8Array = Uint8Array$3;

  var Uint8Array$2 = _Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer$3;

  var cloneArrayBuffer$2 = _cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView$1;

  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp$1;

  var Symbol$2 = _Symbol;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
      symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol$1(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol$1;

  var cloneArrayBuffer$1 = _cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray$1;

  var cloneArrayBuffer = _cloneArrayBuffer,
      cloneDataView = _cloneDataView,
      cloneRegExp = _cloneRegExp,
      cloneSymbol = _cloneSymbol,
      cloneTypedArray = _cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      mapTag$3 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$3 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object);

      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);

      case dataViewTag$2:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$3:
        return new Ctor;

      case numberTag$2:
      case stringTag$2:
        return new Ctor(object);

      case regexpTag$2:
        return cloneRegExp(object);

      case setTag$3:
        return new Ctor;

      case symbolTag$2:
        return cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag$1;

  var isObject$1 = isObject_1;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate$1 = (function() {
    function object() {}
    return function(proto) {
      if (!isObject$1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate$1;

  var baseCreate = _baseCreate,
      getPrototype = _getPrototype,
      isPrototype = _isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject$1(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject$1;

  var getTag$3 = _getTag,
      isObjectLike$2 = isObjectLike_1;

  /** `Object#toString` result references. */
  var mapTag$2 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap$1(value) {
    return isObjectLike$2(value) && getTag$3(value) == mapTag$2;
  }

  var _baseIsMap = baseIsMap$1;

  var baseIsMap = _baseIsMap,
      baseUnary$1 = _baseUnary,
      nodeUtil$1 = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;

  var isMap_1 = isMap$1;

  var getTag$2 = _getTag,
      isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var setTag$2 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == setTag$2;
  }

  var _baseIsSet = baseIsSet$1;

  var baseIsSet = _baseIsSet,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtilExports;

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  var isSet_1 = isSet$1;

  var Stack$2 = _Stack,
      arrayEach = _arrayEach,
      assignValue = _assignValue,
      baseAssign = _baseAssign,
      baseAssignIn = _baseAssignIn,
      cloneBuffer = _cloneBufferExports,
      copyArray = _copyArray,
      copySymbols = _copySymbols,
      copySymbolsIn = _copySymbolsIn,
      getAllKeys$1 = _getAllKeys,
      getAllKeysIn = _getAllKeysIn,
      getTag$1 = _getTag,
      initCloneArray = _initCloneArray,
      initCloneByTag = _initCloneByTag,
      initCloneObject = _initCloneObject,
      isArray$2 = isArray_1,
      isBuffer$1 = isBufferExports,
      isMap = isMap_1,
      isObject = isObject_1,
      isSet = isSet_1,
      keys = keys_1,
      keysIn = keysIn_1;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag$1 = '[object Map]',
      numberTag$1 = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag$1 = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
  cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
  cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
  cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
  cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
  cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray$2(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag$1(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer$1(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack$2);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys$1)
      : (isFlat ? keysIn : keys);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone$1;

  var baseClone = _baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.cloneWith` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @param {Function} [customizer] The function to customize cloning.
   * @returns {*} Returns the deep cloned value.
   * @see _.cloneWith
   * @example
   *
   * function customizer(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(true);
   *   }
   * }
   *
   * var el = _.cloneDeepWith(document.body, customizer);
   *
   * console.log(el === document.body);
   * // => false
   * console.log(el.nodeName);
   * // => 'BODY'
   * console.log(el.childNodes.length);
   * // => 20
   */
  function cloneDeepWith(value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
  }

  var cloneDeepWith_1 = cloneDeepWith;

  function createTimerNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class VisibilityNode
     * The print node.
     * @memberof THING.CODELESS
     * @extends THING.CODELESS.BaseNode
     */
    return class TimerNode extends BaseNode {
      static config = {
        name: 'Timer',
        data: [
          {
            name: 'interval',
            type: 'number',
            value: 3000,
          },
        ],
        outputs: [
          {
            name: 'next',
            type: 'callback',
          },
        ],
      }

      isEntrance() {
        return true
      }

      onStop() {
        if (this._timer) {
          clearInterval(this._timer);
          this._timer = null;
        }
      }

      onExecute(data, inputs, outputs) {
        const interval = data.interval;
        if (!interval) {
          return
        }
        this._timer = setInterval(() => {
          this.run('next');
        }, interval);
      }
    }
  }

  function createGetItemFromArray() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class VisibilityNode
     * The print node.
     * @memberof THING.CODELESS
     * @extends THING.CODELESS.BaseNode
     */
    return class GetItemFromArray extends BaseNode {
      static config = {
        name: 'GetItemFromArray',
        inputs: [
          {
            name: 'array',
            type: 'array',
          },
          {
            name: 'index',
            type: 'number',
          },
        ],
        outputs: [
          {
            name: 'data',
            type: 'conch',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        outputs.data = inputs.array
          ? inputs.array[parseInt(inputs.index)]
          : undefined;
      }
    }
  }

  function createForEachLoopNode() {
    const { BaseNode } = getBlueprintConfig();

    return class ForEachLoopNode extends BaseNode {
      static config = {
        name: 'ForEachLoop',
        inputs: [
          {
            name: 'exec',
            type: 'exec',
          },
          {
            name: 'array',
            type: 'array',
          },
        ],
        outputs: [
          {
            name: 'loop',
            type: 'callback',
          },
          {
            name: 'element',
            type: 'unknown',
          },
          {
            name: 'index',
            type: 'number',
          },
          {
            name: 'completed',
            type: 'callback',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        const target = inputs.array || [];
        for (let i = 0; i < target.length; i++) {
          outputs.element = target[i];
          outputs.index = i;
          this.run('loop', outputs);
        }
        this.run('callback', outputs);
      }
    }
  }

  function createVisibilityNode() {
    const { BaseNode } = getBlueprintConfig();
    return class VisibilityNode extends BaseNode {
      static config = {
        name: 'Visibility',
        inputs: [
          {
            name: 'show',
            type: 'exec',
          },
          {
            name: 'hide',
            type: 'exec',
          },
          {
            name: 'visibleToggle',
            type: 'exec',
          },
          {
            name: 'conch',
            type: ['conch', 'layer'],
          },
        ],
        outputs: [
          {
            name: 'next',
            type: 'callback',
          },
        ],
      }

      async onExecute(data, inputs, outputs) {
        const container = inputs.conch;
        if (container) {
          if (this.curExecName === 'show') {
            await container.$uiComp.show();
          } else if (this.curExecName === 'hide') {
            await container.$uiComp.hidden();
          } else if (this.curExecName === 'visibleToggle') {
            container.visible
              ? await container.$uiComp.hidden()
              : await container.$uiComp.show();
          }
        } else {
          console.warn('蓝图：动画显隐没有目标无法执行');
        }
        this.run('next');
      }
    }
  }

  const head = document.head;

  /**
   * @desc 加载字体
   * @param {String} name 字体名称
   * @param {String} file 字体文件名称
   * @returns {Promise<void>}
   */
  const loadFont = async (name, file) => {
    const fonts = Array.from(window.document.fonts.values());

    if (fonts.filter((item) => item.family === name)[0]) {
      return
    }

    const font = new window.FontFace(name, file);
    await font.load();
    window.document.fonts.add(font);
  };

  /**
   * @desc 添加js资源
   * @param {String} id 编号
   * @param {String} [url] 资源地址
   * @param {String} [content] 资源内容
   * @returns {Promise<unknown>}
   */
  const loadScript = (id, url, content) => {
    return new Promise((resolve, reject) => {
      if (!url && !content) {
        return reject(new Error('script url or content is empty'))
      }

      const _id = 'script' + id;
      let dom = head.querySelector('#' + _id);

      if (dom) {
        if (!dom.errorFlag) {
          return resolve(dom)
        }
        dom.remove();
      }

      dom = document.createElement('script');
      dom.id = _id;

      dom.onload = function (e) {
        resolve(e);
      };

      dom.onerror = function (e) {
        reject(e);
        dom.errorFlag = true;
      };

      if (url) {
        dom.src = url;
      } else {
        dom.appendChild(document.createTextNode(content));
        resolve(dom);
      }

      head.appendChild(dom);
    })
  };

  // 获取地址
  function getUrl$1(url, options = {}) {
    if (options.prefix) {
      const type = typeof options.prefix;
      if (type === 'string') {
        return options.prefix + url
      } else if (type === 'function') {
        return options.prefix(url)
      }
    }
    return url
  }

  // 加载资源
  async function loadResources(config = {}, options = {}) {
    const { component, img, fonts } = config;
    const loadList = [];
    const errorComponentList = [];
    const errorImgList = [];

    if (Array.isArray(component)) {
      for (const id of component) {
        loadList.push(
          loadScript(id, getUrl$1(`/s-static/component/${id}.js`, options)).catch(
            (e) => {
              errorComponentList.push(id);
              console.error(id + ' 组件资源加载失败', e);
            }
          )
        );
      }
    }
    if (img) {
      for (const key in img) {
        loadList.push(
          loadImg(getUrl$1(img[key], options)).catch((e) => {
            errorImgList.push(key);
            console.error(img[key] + ' 图片资源加载失败', e);
          })
        );
      }
    }

    if (fonts) {
      for (const key in fonts) {
        loadFont(
          key,
          `url(${getUrl$1('/s-static/fonts/' + fonts[key], options)})`
        ).catch((e) => {
          console.error('字体加载失败', key, e);
        });
      }
    }

    await Promise.all(loadList);

    return (
      errorComponentList.length + errorImgList.length && {
        errorComponentList,
        errorImgList,
      }
    )
  }

  /**
   * @desc 深拷贝
   * @param {*} source
   * @returns {*[]|*}
   */
  const deepClone = (source) => {
    if (!source || typeof source !== 'object') {
      return source
    }

    const target = source instanceof Array ? [] : {};

    for (const key in source) {
      target[key] = deepClone(source[key]);
    }

    return target
  };

  /**
   * @desc 判断值是否为空
   * @param value
   * @return {boolean}
   */
  const isEmpty = (value) => {
    return value === null || value === undefined
  };

  /**
   * @desc 加载图片
   * @param {String} src 图片地址
   * @returns {Promise<unknown>}
   */
  const loadImg = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = (e) => {
        resolve(e);
      };
      img.onerror = (e) => {
        reject(e);
      };
      img.src = src;
    })
  };

  /**
   * @desc 判断数据类型是否已知的数据类型，String,Array,Number,Boolean,Null,Undefined,Symbol首字母大写，HTMLDivElement等
   * @param {object} obj 被判断的数据类型
   * @param {string} type 数据类型值
   */
  const isType$2 = (obj, type) =>
    Object.prototype.toString.call(obj).includes(type);

  // 默认场景属性

  const defaultUiOptions = {
    style: {
      width: 1920,
      height: 1080,
      backgroundColor: 'rgba(40, 42, 46, 1)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '100% 100%',
    },
  };

  // 默认场景配置
  const defaultUiConfig = {
    // enableContainerPreview: true,
    notSelectLayer: true,
    theme: {
      ui: {
        background: `url(/kunpeng/static/img/canvas-bg.svg?v=1)`,
      },
      ruler: {
        color: '#121314',
        width: 21,
        lineStyle: {
          color: '#FF4D4F',
          width: 1,
        },
        tick: {
          textColor: 'rgba(255, 255, 255, 0.3)',
          lineWidth: 1,
          lineColor: 'rgba(255, 255, 255, 0.16)',
        },
        iconColor: '',
        border: 'none',
        icon: { borderColor: 'transparent' },
      },
      alignmentLines: {
        color: '#FF4D4F',
        width: 1,
        distanceStyle: {
          color: '#FF4D4F',
          width: 1,
        },
      },
    },
  };

  // 获取默认场景配置，预览模式背景透明
  function getUiConfig(b) {
    if (b) {
      defaultUiConfig.theme.ui.background = 'transparent';
    }
    return defaultUiConfig
  }

  // 截图配置
  ({
    backgroundColor: defaultUiOptions.style.backgroundColor,
  });

  // 动画速率列表
  const easingList = [
    {
      name: '匀速',
      key: 'linear',
    },
    {
      name: '慢速结束',
      key: 'easeOut',
    },
  ];

  // 动画速率名称列表
  const easingMapName = easingList.map((item) => item.name);

  function createTranslateNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class TranslateNode
     * @memberof THING.CODELESS
     * @extends BaseNode
     */
    return class TranslateNode extends BaseNode {
      static config = {
        name: 'Translate',
        inputs: [
          {
            name: 'exec',
            type: 'exec',
          },
          {
            name: 'conch',
            type: 'conch',
          },
          {
            name: 'x',
            type: 'number',
          },
          {
            name: 'y',
            type: 'number',
          },
          {
            name: 'easing',
            type: 'select',
            value: easingMapName,
          },
          {
            name: 'duration',
            type: 'number',
            value: 1000,
          },
          {
            name: 'delay',
            type: 'number',
            value: 0,
          },
        ],
        outputs: [
          {
            name: 'next',
            type: 'callback',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        const container = inputs.conch;
        const x = +inputs.x || 0;
        const y = +inputs.y || 0;
        const animation = {
          translate: [x, y],
        };

        const easing = easingList.filter((item) => item.name === inputs.easing)[0];
        easing && Object.assign(inputs, { easing: easing.key });

        if (container) {
          container.$ui.animation.run(
            {
              target: container.$uiComp,
              animation,
              ...inputs,
            },
            () => {
              this.run('next');
            }
          );
        } else {
          console.warn('蓝图：动画移动没有目标无法执行');
          this.run('next');
        }
      }
    }
  }

  function createLayersCarouselNode() {
    const { BaseNode } = getBlueprintConfig();
    return class LayersCarouselNode extends BaseNode {
      static config = {
        name: 'LayersCarousel',
        inputs: [
          {
            name: 'start',
            type: 'exec',
          },
          {
            name: 'stop',
            type: 'exec',
          },
          {
            name: 'interval',
            type: 'number',
            value: 1000,
          },
          {
            name: 'layers',
            type: 'array',
          },
        ],
        outputs: [],
      }

      onExecute(data, inputs, outputs) {
        const interval = parseInt(inputs.interval);
        const layers = inputs.layers || [];

        if (this.curExecName === 'start') {
          clearInterval(this.inervalId);
          this.inervalId = setInterval(
            () => {
              this.index = treatment.initializeIndex(this.index);
              for (let i = 0; i < layers.length; i++) {
                const visibleName = treatment.getVisibleName(i, this.index);
                layers[i][visibleName]();
              }
              this.index = treatment.getIndex(this.index, layers.length);
            },

            treatment.getInterval(interval)
          );
        } else if (this.curExecName === 'stop') {
          clearInterval(this.inervalId);
        }
      }
    }
  }

  const treatment = {
    initializeIndex(index) {
      return index ?? 0
    },

    getIndex(index, length) {
      return index >= length - 1 ? 0 : index + 1
    },
    getInterval(interval) {
      return Number.isNaN(interval) ? 1000 : interval
    },
    getVisibleName(i, index) {
      return i === index ? 'show' : 'hidden'
    },
  };

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  var _setCacheAdd = setCacheAdd$1;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */

  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas$1;

  var MapCache = _MapCache,
      setCacheAdd = _setCacheAdd,
      setCacheHas = _setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache$1(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
  SetCache$1.prototype.has = setCacheHas;

  var _SetCache = SetCache$1;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */

  function arraySome$1(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome$1;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function cacheHas$1(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas$1;

  var SetCache = _SetCache,
      arraySome = _arraySome,
      cacheHas = _cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays$2;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */

  function mapToArray$1(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray$1;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */

  function setToArray$1(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray$1;

  var Symbol$1 = _Symbol,
      Uint8Array$1 = _Uint8Array,
      eq = eq_1,
      equalArrays$1 = _equalArrays,
      mapToArray = _mapToArray,
      setToArray = _setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag$1;

  var getAllKeys = _getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects$1;

  var Stack$1 = _Stack,
      equalArrays = _equalArrays,
      equalByTag = _equalByTag,
      equalObjects = _equalObjects,
      getTag = _getTag,
      isArray$1 = isArray_1,
      isBuffer = isBufferExports,
      isTypedArray = isTypedArray_1;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$1(object),
        othIsArr = isArray$1(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack$1);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack$1);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack$1);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep$1;

  var baseIsEqualDeep = _baseIsEqualDeep,
      isObjectLike = isObjectLike_1;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual$1(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
  }

  var _baseIsEqual = baseIsEqual$1;

  var baseIsEqual = _baseIsEqual;

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  var isEqual_1 = isEqual;

  function createDeepEqualToNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class DeepEqualToNode
     * The deep equal node.
     * @memberof THING.CODELESS
     * @extends BaseNode
     */
    return class DeepEqualToNode extends BaseNode {
      static config = {
        name: 'DeepEqualTo',
        inputs: [
          {
            name: 'A',
            type: 'any',
          },
          {
            name: 'B',
            type: 'any',
          },
        ],
        outputs: [
          {
            name: 'result',
            type: 'boolean',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        if (typeof inputs.A === 'string' || typeof inputs.B === 'string') {
          outputs.result = String(inputs.A) === String(inputs.B);
        } else {
          outputs.result = isEqual_1(inputs.A, inputs.B);
        }
      }
    }
  }

  function createGreaterThanOrEqualToNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class GreaterThanOrEqualToNode
     * @memberof THING.CODELESS
     * @extends BaseNode
     */
    return class GreaterThanOrEqualToNode extends BaseNode {
      static config = {
        name: 'GreaterThanOrEqualTo',
        inputs: [
          {
            name: 'A',
            type: 'number',
            value: 0,
          },
          {
            name: 'B',
            type: 'number',
            value: 0,
          },
        ],
        outputs: [
          {
            name: 'result',
            type: 'boolean',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        outputs.result = inputs.A >= inputs.B;
      }
    }
  }

  function createLessThanOrEqualToNode() {
    const { BaseNode } = getBlueprintConfig();
    /**
     * @class LessThanOrEqualToNode
     * @memberof THING.CODELESS
     * @extends BaseNode
     */
    return class LessThanOrEqualToNode extends BaseNode {
      static config = {
        name: 'LessThanOrEqualTo',
        inputs: [
          {
            name: 'A',
            type: 'number',
            value: 0,
          },
          {
            name: 'B',
            type: 'number',
            value: 0,
          },
        ],
        outputs: [
          {
            name: 'result',
            type: 'boolean',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        outputs.result = inputs.A <= inputs.B;
      }
    }
  }

  class BlueprintNodes {
    constructor(BlueprintModules) {
      this.BlueprintModules = BlueprintModules;
      this.conchNodes = [];
      this.layerNodes = [];
      this.animationNodeList = [
        createVisibilityNode(),
        createTranslateNode(),
        createLayersCarouselNode(),
      ];
      this.folderStructure = {
        children: [
          {
            foldername: '动画',
            nodes: this.animationNodeList,
          },
          {
            foldername: '图层',
            nodes: this.layerNodes,
          },
          {
            foldername: '图表',
            nodes: this.conchNodes,
          },
          {
            foldername: '工具',
            nodes: [
              createDataProcessNode(),
              this.BlueprintModules.ArrayNode,
              this.BlueprintModules.PrintNode,
              createGetItemFromArray(),
              createForEachLoopNode(),
            ],
            children: [
              {
                foldername: '流程控制',
                nodes: [
                  this.BlueprintModules.BeginNode,
                  this.BlueprintModules.BranchNode,
                  this.BlueprintModules.SequenceNode,
                  createTimerNode(),
                ],
              },
              {
                foldername: '判断',
                nodes: [
                  createDeepEqualToNode(),
                  createGreaterThanOrEqualToNode(),
                  createLessThanOrEqualToNode(),
                  // StrictEqualToNode,
                ],
              },
            ],
          },
        ],
      };
      this.styleStructure = [
        {
          // 动画组样式
          style: {
            headerColor: 'rgba(63, 167, 88, .9)',
            bodyColor: 'rgba(41, 44, 47, 0.9)',
          },
          nodes: this._getNodesFormFolder(this.folderStructure.children[0]),
        },
        {
          // 图层组样式
          style: {
            headerColor: 'rgba(198, 140, 65, 1)',
            bodyColor: 'rgba(41, 44, 47, 0.9)',
          },
          nodes: this.layerNodes,
        },
        {
          // 图表组样式
          style: {
            headerColor: 'rgba(48, 103, 205, .9)',
            bodyColor: 'rgba(41, 44, 47, 0.9)',
          },
          nodes: this.conchNodes,
        },
        {
          // 工具组样式
          style: {
            headerColor: 'rgba(58, 165, 167, .9)',
            bodyColor: 'rgba(41, 44, 47, 0.9)',
          },
          nodes: this._getNodesFormFolder(this.folderStructure.children[3]),
        },
      ];
    }

    /**
     * 从loadFolder这个接口的入参数据中，获取蓝图节点对象
     * 以弥补当前loadFolder、registerNode和loadStyle这3个接口的繁琐调用
     * @param root  loadFolder API的入参格式数据
     *
     */
    _getNodesFormFolder(root) {
      const result = [];
      const queue = [root];
      while (queue.length) {
        const folder = queue.shift();
        if (folder.nodes) {
          result.push(...folder.nodes);
        }
        if (folder.children) {
          queue.push(...folder.children);
        }
      }
      return result
    }

    _getStyleAndFolderData() {
      const customizer = (value) => {
        if (
          typeof value === 'function' &&
          value.prototype instanceof this.BlueprintModules.BaseNode
        ) {
          return value.config.name
        }
      };

      const folder = cloneDeepWith_1(this.folderStructure, customizer);
      const style = cloneDeepWith_1(this.styleStructure, customizer);

      // 接数组件单独颜色
      const dataConchNodes = this.conchNodes
        .filter((node) => node.config.__conchData)
        .map((node) => node.config.name);

      style.push({
        style: {
          headerColor: 'rgba(108, 81, 184, .9)',
          bodyColor: 'rgba(41, 44, 47, 0.9)',
        },
        nodes: dataConchNodes,
      });

      return { folder, style }
    }

    getStyleAndFolderData() {
      return this._getStyleAndFolderData()
    }

    // 添加图层节点
    addLayerNode(node) {
      this.animationNodeList.push(node);
    }

    addConchNodes(...nodes) {
      this.conchNodes.push(...nodes);
      this.conchNodes.sort();
      return this._getStyleAndFolderData()
    }

    removeConchNode(nodeName) {
      const index = this.conchNodes.findIndex(
        (node) => node.config.name === nodeName
      );
      this.conchNodes.splice(index, 1);
      return this._getStyleAndFolderData()
    }

    addLayerNodes(...nodes) {
      this.layerNodes.push(...nodes);
      this.layerNodes.sort();

      return this._getStyleAndFolderData()
    }

    removeLayerNode(nodeName) {
      const index = this.layerNodes.findIndex(
        (node) => node.config.name === nodeName
      );
      this.layerNodes.splice(index, 1);
      return this._getStyleAndFolderData()
    }

    getAllNodes() {
      return this._getNodesFormFolder(this.folderStructure)
    }
  }

  const icon$2 =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdHJhbnNmb3JtPSJzY2FsZSguOSkiIHdpZHRoPSIxNHB4IiBoZWlnaHQ9IjE1cHgiIHZpZXdCb3g9IjAgMCAxNCAxNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8dGl0bGU+5YiH54mHPC90aXRsZT4NCiAgICA8ZyBpZD0i5pWw5o2uL+S6pOS6kumdouadv++8iDMzMC3mt7HvvIkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i6JOd5Zu+6IqC54K5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuMDAwMDAwLCAtNDQuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyLjAwMDAwMCwgMzkuNTAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS45MTc5NDcxLDEuNzUgTDEuOTE3OTQ3MSwxMC45Mzc1IEMxLjkxNzk0NzEsMTEuMzM4OTY4NiAyLjIxODM2NjY4LDExLjY3MDI3MDMgMi42MDY2NjQ3OCwxMS43MTg4NjQyIEwyLjcwNTQ0NzEsMTEuNzI1IEwxMy4xMjUsMTEuNzI1IEwxMy4xMjUsMTIuNzc1IEwyLjcwNTQ0NzEsMTIuNzc1IEMxLjczNDc0NjYyLDEyLjc3NSAwLjkzOTg0NzQ0LDEyLjAyMjMwNTIgMC44NzI1NjA3NDIsMTEuMDY4NzI2NyBMMC44Njc5NDcxMDIsMTAuOTM3NSBMMC44Njc5NDcxMDIsMS43NSBMMS45MTc5NDcxLDEuNzUgWiBNNS4xNjI1LDYuNTYyNSBMNS4xNjI1LDEwLjA2MjUgTDQuMTEyNSwxMC4wNjI1IEw0LjExMjUsNi41NjI1IEw1LjE2MjUsNi41NjI1IFogTTEyLjE2MjUsMi4xODc1IEwxMi4xNjI1LDEwLjA2MjUgTDExLjExMjUsMTAuMDYyNSBMMTEuMTEyNSwyLjE4NzUgTDEyLjE2MjUsMi4xODc1IFogTTguNjYyNSw0Ljc5NTEwMTQgTDguNjYyNSwxMC4wNjI1IEw3LjYxMjUsMTAuMDYyNSBMNy42MTI1LDQuNzk1MTAxNCBMOC42NjI1LDQuNzk1MTAxNCBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==';

  function createConchNodeFromContainer(container) {
    const local = {};

    const uniqueName = container.id;

    const version = container.adapter.version;

    const { actions = [] } = container.$uiApp._options;
    actions.forEach(({ identified, label }) => {
      // console.error(identified, label)
      local[uniqueName + '/' + identified] = label || identified;
      local[`${uniqueName}/${identified}.arg`] = `${label || identified}数据`;
    });

    const node = createConchNode(
      // container.adapter.componentInstance,
      container,
      uniqueName,
      version,
      actions
    );
    return {
      local,
      node,
    }
  }

  function createConchNode(container, name, version, actions = []) {
    const { BaseNode } = getBlueprintConfig();
    const conch = container.$uiApp;
    const hasData = !isEmpty(conch.data);
    const dataConfigNames = ['data', 'updateData'];

    const config = {
      __conchChart: true,
      icon: icon$2,
      name,
      version,
      inputs: [
        {
          name: 'updateData',
          type: 'exec',
          advanced: true,
        },
        {
          name: 'data',
          type: 'array',
          advanced: true,
        },
        {
          name: 'updateOpts',
          type: 'exec',
          advanced: true,
        },
        {
          name: 'opts',
          type: 'object',
          visible: false,
        },
      ],
      outputs: [
        {
          name: 'self',
          type: 'conch',
        },
        // {
        //   name: 'opts',
        //   type: 'object',
        //   advanced: true,
        // },
        {
          name: 'data',
          type: 'array',
          advanced: true,
        },
      ],
    };

    if (!hasData) {
      config.inputs = config.inputs.filter(
        (sub) => !dataConfigNames.includes(sub.name)
      );
      config.outputs = config.outputs.filter(
        (sub) => !dataConfigNames.includes(sub.name)
      );
    }

    actions.forEach(({ identified }) => {
      config.outputs.push({
        name: identified,
        type: 'callback',
        advanced: true,
      });

      config.outputs.push({
        name: identified + '.arg',
        type: 'unknown',
        advanced: true,
      });
    });

    return class ComplexConchNode extends BaseNode {
      static config = config

      isEntrance() {
        return true
      }

      onStop() {
        super.onStop();
        conch._clearWaitAction();
      }

      onExecute(data, inputs, outputs) {
        outputs.self = container;

        outputs.data = conch.data;
        // outputs.opts = conch.app.opts

        if (!this.curExecName) {
          actions.forEach(({ identified }) => {
            conch._waitAction(identified).done((args) => {
              outputs[identified + '.arg'] = args;
              this.run(identified, outputs);
            });
          });
        }

        if (this.curExecName === 'updateData' && inputs.data) {
          conch.setData(inputs.data);

          outputs.data = inputs.data;
        } else if (this.curExecName === 'updateOpts' && inputs.opts) {
          conch.setOption(inputs.opts);
        }
      }
    }
  }

  const icon$1 =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE0IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT7liIfniYc8L3RpdGxlPg0KICAgIDxnIGlkPSLmlbDmja4v5Lqk5LqS6Z2i5p2/77yIMzMwLea3se+8iSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLok53lm77oioLngrkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MC4wMDAwMDAsIC0xODQuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uE5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Mi4wMDAwMDAsIDE3OS41MDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl/ok53lm77ohJrmnKwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiB4PSIwLjMxNDA5NzgxOCIgeT0iMC4zMTQwOTc4MTgiIHdpZHRoPSIxMy4zNzE4MDQ0IiBoZWlnaHQ9IjEzLjM3MTgwNDQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjIwNjc1MTksOC4zNjk3ODA5NyBMMTMuMjAxMDc1NSw4LjM2ODM2NTY5IEwxMy4xODg1MDQyLDguNDMyNDI0MDQgQzEzLjExODU5ODgsOC43NTQ1OTExMSAxMi45NTczNzU4LDkuMTk3MTQxMDkgMTIuNzA0ODM1MSw5Ljc2MDA3NDA3IEwxMC45MjUwNjMzLDcuMTc1MDEyNDUgTDEyLjM3OTc2ODIsNy4yMTUwODA5OCBDMTIuNTY1MDMwOCw0LjY2ODc5OTM3IDEwLjg5OTU1NTYsMi4yODIwNjY4MSA4LjMzNzc4NzYzLDEuNjQzMzQ2MyBDNS45NTEyODQ5MywxLjA0ODMyNDM1IDMuNDkwNzQ1MDIsMi4xNTk0MzI5OSAyLjM0MjA3OTg3LDQuMjgwMTUwMDIgTDIuMjQ2ODY3OTQsNC40NjQzODIwNCBMMS4zNDcxNzQ0NCw0LjAyMTI4OTk2IEMyLjY1NzkwODEsMS4zNTk4NTk5OSA1LjY2NTMxODExLC0wLjA1NjU2MjQ3MDcgOC41ODA0MDc1NCwwLjY3MDI1MDk1NSBDMTEuOTE3MzY0NiwxLjUwMjI0NzggMTMuOTczNjQ5NSw0LjgzMTg5OTYxIDEzLjI1MzMxNTksOC4xNjk1MzMzIEwxMy4yMDY3NTE5LDguMzY5NzgwOTcgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi40NjI2NTYyLDEyLjEyODk0MzggTDEyLjQ1Njk3OTgsMTIuMTI3NTI4NSBMMTIuNDQ0NDA4NSwxMi4xOTE1ODY4IEMxMi4zNzQ1MDMxLDEyLjUxMzc1MzkgMTIuMjEzMjgwMSwxMi45NTYzMDM5IDExLjk2MDczOTQsMTMuNTE5MjM2OSBMMTAuMTgwOTY3NiwxMC45MzQxNzUyIEwxMS42MzU2NzI1LDEwLjk3NDI0MzggQzExLjgyMDkzNTEsOC40Mjc5NjIxNiAxMC4xNTU0NTk5LDYuMDQxMjI5NiA3LjU5MzY5MTk0LDUuNDAyNTA5MSBDNS4yMDcxODkyNCw0LjgwNzQ4NzE0IDIuNzQ2NjQ5MzMsNS45MTg1OTU3OCAxLjU5Nzk4NDE4LDguMDM5MzEyODIgTDEuNTAyNzcyMjUsOC4yMjM1NDQ4MyBMMC42MDMwNzg3NTEsNy43ODA0NTI3NSBDMS45MTM4MTI0MSw1LjExOTAyMjc4IDQuOTIxMjIyNDIsMy43MDI2MDAzMiA3LjgzNjMxMTg1LDQuNDI5NDEzNzUgQzExLjE3MzI2ODksNS4yNjE0MTA1OSAxMy4yMjk1NTM4LDguNTkxMDYyNDEgMTIuNTA5MjIwMiwxMS45Mjg2OTYxIEwxMi40NjI2NTYyLDEyLjEyODk0MzggWiIgaWQ9IuW9oueKtuWkh+S7vSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjYyNzk1MiwgOC44Nzk1ODEpIHNjYWxlKC0xLCAtMSkgdHJhbnNsYXRlKC02LjYyNzk1MiwgLTguODc5NTgxKSAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNjY5MDI0Myw3LjM1MDUyMzEgTDUuNjY5MDI0Myw3LjgzNDYwMjA1IEw5Ljc0ODA0MDIxLDcuODM0NjAyMDUgTDkuNzQ4MDQwMjEsOC44MzQ2MDIwNSBMNS42NjkwMjQzLDguODM0NjAyMDUgTDUuNjY5MDI0Myw5LjE3NzcyNzkzIEw0LjI1MTk1OTc5LDguMjY0MTI1NTEgTDUuNjY5MDI0Myw3LjM1MDUyMzEgWiBNOC4zMzA5NzU3LDQuODIyMjcyMDcgTDkuNzQ4MDQwMjEsNS43MzU4NzQ0OSBMOC4zMzA5NzU3LDYuNjQ5NDc2OSBMOC4zMzA5NzU3LDYuMzA2MzUxMDMgTDQuMjUxOTU5NzksNi4zMDYzNTEwMyBMNC4yNTE5NTk3OSw1LjMwNjM1MTAzIEw4LjMzMDk3NTcsNS4zMDYzNTEwMyBMOC4zMzA5NzU3LDQuODIyMjcyMDcgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+';

  function createDataReceiverNodeFromContainer(container) {
    const { BaseNode } = getBlueprintConfig();
    const name = container.id;

    class DataReceiverNode extends BaseNode {
      static config = {
        __conchData: true,
        icon: icon$1,
        name,
        inputs: [],
        outputs: [
          {
            name: 'data',
            type: 'array',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        outputs.data = container.$uiApp.data;
      }
    }

    return { node: DataReceiverNode }
  }

  function getConchNodes(containers = []) {
    const nodes = [];
    const locals = {
      dataUpdate: '数据更新',

      updateData: '更新数据',
      updateOpts: '更新配置项',
      dataChanged: '请求完成或数据变化',
      opts: '配置项',
      data: '数据',
      self: '实例',
    };

    for (const container of containers) {
      if (container.adapter) {
        // console.error('isDataComponent', isDataComponent(container))
        const { node, local } = createChartNode(container);
        nodes.push(node);
        Object.assign(locals, local);
      }
    }

    return { nodes, locals }
  }

  function createChartNode(container) {
    const baseLocal = {};

    const uniqueName = container.id;
    baseLocal[uniqueName] = container.name;

    const { node, local = {} } = isDataComponent(container)
      ? createDataReceiverNodeFromContainer(container)
      : createConchNodeFromContainer(container);
    return {
      local: { ...baseLocal, ...local },
      node,
    }
  }

  /**
   * 是否为接数组件
   * @param container
   * @returns {boolean}
   */
  function isDataComponent(container) {
    return container.adapter.$dataAdapter
  }

  function createLayersNode(layers = []) {
    const { BaseNode } = getBlueprintConfig();
    const layersMap = {};
    const layersName = [];

    layers.forEach((layer) => {
      const { name } = layer;
      layersMap[name] = layer;
      layersName.push(name);
    });

    class LayersNode extends BaseNode {
      static config = {
        name: 'Layers',
        inputs: [
          {
            name: 'switch',
            type: 'exec',
          },
          {
            name: 'layer',
            type: 'select',
            value: layersName,
          },
        ],
        outputs: [
          {
            name: 'next',
            type: 'exec',
          },
        ],
      }

      onExecute(data, inputs, outputs) {
        layersMap[inputs.layer].select();
      }
    }
    return { node: LayersNode }
  }

  const icon =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE0IDE1IiB2ZXJzaW9uPSIxLjEiIHRyYW5zZm9ybT0ic2NhbGUoLjg4KSI+DQogIDx0aXRsZT5pY29uX+WbvuWxgjwvdGl0bGU+DQogIDxnIGlkPSLmlbDmja4v5Lqk5LqS6Z2i5p2/77yIMzMwLea3se+8iSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgPGcgaWQ9IuiTneWbvuiKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyNi4wMDAwMDAsIC0xODQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgIDxnIGlkPSLnvJbnu4QtNOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE2LjAwMDAwMCwgMTc5LjUwMDAwMCkiPg0KICAgICAgICA8ZyBpZD0i57yW57uE5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAwLjAwMDAwMCkiPg0KICAgICAgICAgIDxnIGlkPSJpY29uX+WbvuWxgiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDUuMDAwMDAwKSI+DQogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiPjwvcmVjdD4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjIwMTM3NSw5LjMxNjYwOTIyIEw2LjQzMzc2NjcyLDEyLjE1NTUyMDIgQzYuNzQ1NTkyMDcsMTIuMzI0Njc3NSA3LjExNjM3OTgxLDEyLjM0NDQ2MyA3LjQ0MzU4NTc3LDEyLjIxMDgwOTUgTDcuNTU5MDEwOTUsMTIuMTU2MDY0MyBMMTIuNzUzMTI1LDkuMzE3NDg0MjIgTDEzLjI5ODI1LDEwLjMxNTg1OTIgTDguMTA4NzYxMjgsMTMuMTUyMDY1MiBDNy40Njk0MTUyNiwxMy41MDEzNjk1IDYuNzAzNzczNCwxMy41Mjk0OTcgNi4wNDE3MDc5NCwxMy4yMzAwMzU3IEw1Ljg4ODU2NTgxLDEzLjE1MzkxOTkgTDAuNjU4ODc1LDEwLjMxNjczNDIgTDEuMjAxMzc1LDkuMzE2NjA5MjIgWiBNMS4yMDEzNzUsNi41MDg3MzQyMiBMNi40MzM3NjY3Miw5LjM0ODM4Njk2IEM2Ljc0NTU5MjA3LDkuNTE3NTQ0MzMgNy4xMTYzNzk4MSw5LjUzNzMyOTgzIDcuNDQzNTg1NzcsOS40MDM2NzYzNCBMNy41NTkwMTA5NSw5LjM0ODkzMTA3IEwxMi43NTMxMjUsNi41MTA0ODQyMiBMMTMuMjk4MjUsNy41MDg4NTkyMiBMOC4xMDg3NjEyOCwxMC4zNDQ5MzIgQzcuNDY5NDE1MjYsMTAuNjk0MjM2MyA2LjcwMzc3MzQsMTAuNzIyMzYzOCA2LjA0MTcwNzk0LDEwLjQyMjkwMjUgTDUuODg4NTY1ODEsMTAuMzQ2Nzg2NyBMMC42NTgsNy41MDg4NTkyMiBMMS4yMDEzNzUsNi41MDg3MzQyMiBaIE03Ljg1NTE3MDUxLDAuNjc3NTkzNzcyIEw3Ljk4NTM0MjQzLDAuNzQ0NDQ1OTI3IEwxMi41Mzc4MjYsMy4zMDM0NzU4OCBMMTIuNjI1Nzc5NiwzLjM1OTQwNjkgQzEyLjk4OTIzMDIsMy42MTk0NzU1NyAxMy4xMjA3Nzk2LDQuMTAyMTc3NCAxMi45NDA3NDI0LDQuNTE1ODQ1MTYgTDEyLjg5MzYyOCw0LjYwOTk0ODc0IEwxMi44MjE0MjEsNC43MTkwNDc0MiBDMTIuNzY4NjE5Niw0Ljc4ODI0NTE4IDEyLjcwNjc3MzQsNC44NTAwOTEzNiAxMi42Mzc1NzU2LDQuOTAyODkyOCBMMTIuNTI4NDc2OSw0Ljk3NTA5OTc3IEw3Ljk0ODk2NzQ5LDcuNTgxOTA1MTggTDcuODE4MDUwMzYsNy42NTAxNDUwOSBDNy4yODcwNzE0NSw3LjkwMjM1NzE0IDYuNjczMDU2OTMsNy45MDU1NzU2NyA2LjE0NDgyOTQ5LDcuNjU4OTg2MjYgTDYuMDE0NjU3NTcsNy41OTIxMzQxMSBMMS40NjIxNzM5OSw1LjAzMzEwNDE2IEwxLjM3NDIyMDQ1LDQuOTc3MTczMTQgQzAuOTgyODEyMDg1LDQuNjk3MDk5MTkgMC44NjAzNTQyMTMsNC4xNTg4MjM0NiAxLjEwNjM3MjAyLDMuNzI2NjMxMyBDMS4xNzEzNzIxNSwzLjYxMjQ0MjIxIDEuMjU4NjI3NzMsMy41MTI4ODk0IDEuMzYyNDI0MzcsMy40MzM2ODcyMyBMMS40NzE1MjMwNSwzLjM2MTQ4MDI2IEw2LjA1MTAzMjUxLDAuNzU0Njc0ODUgTDYuMTgxOTQ5NjQsMC42ODY0MzQ5NDQgQzYuNzEyOTI4NTUsMC40MzQyMjI4OTQgNy4zMjY5NDMwNywwLjQzMTAwNDM2OCA3Ljg1NTE3MDUxLDAuNjc3NTkzNzcyIFogTTYuNzU4OTQyMDcsMS41ODE1ODExOCBMNi42NjcyODIzMiwxLjYxNzUzNzYxIEw2LjU3MDQ2Njk4LDEuNjY3MTkyMTYgTDIuMTIxMDg2NDQsNC4xOTg5MjU5MyBMNi41MjkxNjU3OCw2LjY3NjgzMDE3IEM2Ljc1MjU5NDQ5LDYuODAyNDIzMzIgNy4wMTk5NjE0Nyw2LjgyNTU2ODcxIDcuMjQxMDU3OTMsNi43NTQ5OTg4NSBMNy4zMzI3MTc2OCw2LjcxOTA0MjQyIEw3LjQyOTUzMzAyLDYuNjY5Mzg3ODggTDExLjg3ODg5NDksNC4xMzY0MzUzNyBMNy40NzA4MzQyMiwxLjY1OTc0OTg2IEM3LjI0NzQwNTUxLDEuNTM0MTU2NzEgNi45ODAwMzg1MywxLjUxMTAxMTMyIDYuNzU4OTQyMDcsMS41ODE1ODExOCBaIiBpZD0i5b2i54q257uT5ZCIIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==';

  function getLayerNodes(layers) {
    const nodes = [];

    const locals = {
      self: '实例',
    };
    for (const layer of layers) {
      const { node, local } = createLayerNode(layer);
      nodes.push(node);
      Object.assign(locals, local);
    }
    return { nodes, locals }
  }

  function createLayerNode(layer) {
    return {
      node: createLayerBlueprintNode(layer),
      local: {
        [layer.id]: layer.name,
      },
    }
  }

  function createLayerBlueprintNode(layer) {
    const { BaseNode } = getBlueprintConfig();
    const name = layer.id;
    const config = {
      name,
      icon,
      outputs: [
        {
          name: 'self',
          type: 'layer',
        },
      ],
    };

    return class LayerNodes extends BaseNode {
      static config = config

      // 在蓝图执行时，先调用一次，相当于开始节点
      isEntrance() {
        return true
      }

      onExecute(data, inputs, outputs) {
        outputs.self = layer;
      }
    }
  }

  const locals$1 = {
    Visibility: '显隐',
    Translate: '移动',
    Layers: '图层切换',
    Rotate: '旋转',
    GetData: '获取data',
    GetOpts: '获取配置',
    DataProcess: '数据处理',
    LayersCarousel: '图层轮播',

    conch: '目标',
    show: '显示',
    hide: '隐藏',
    toggle: '切换',
    visibleToggle: '显隐切换',
    duration: '时长',
    easing: '速率',
    delay: '延时',
    animationType: '动画类型',
    clicked: '点击',
    done: '完成',
    array: '数组',
    layers: '图层数组',
    stop: '停止',
  };

  const locals = {
    GreaterThanOrEqualTo: 'A>=B',
    LessThanOrEqualTo: 'A<=B',
    DeepEqualTo: 'A==B',

    'DeepEqualTo/result': '',
    'GreaterThanOrEqualTo/result': '',
    'LessThanOrEqualTo/result': '',
    'StrictEqualTo/result': '',
  };

  const config = {};

  // 获取蓝图配置
  function getBlueprintConfig() {
    return config
  }

  // 蓝图
  class BluePrintManager {
    constructor(ui, Blueprint, BlueprintModules) {
      this.ui = ui;
      this.Blueprint = Blueprint;
      this.BlueprintModules = BlueprintModules;
      config.Blueprint = Blueprint;
      config.BlueprintModules = BlueprintModules;
      config.BaseNode = BlueprintModules?.BaseNode;
      this.blueprint = null;
      this.editor = null;
      this.nodeCollections = null;
      this._running = Blueprint && BlueprintModules;
    }

    // 初始化
    init() {
      if (!this._running) {
        console.warn('无法初始化蓝图，需要蓝图');
        return
      }
      this.blueprint = new this.Blueprint();
      this.nodeCollections = new BlueprintNodes(this.BlueprintModules);

      // 页面切换节点
      const { node: layerNode } = createLayersNode();
      // 切换页面节点
      this.nodeCollections.addLayerNode(layerNode);

      this.blueprint.registerNode(this.nodeCollections.getAllNodes());

      if (this.ui.$options.isEdit) {
        this.editor = this.blueprint.getEditor();

        this.editor.loadLocalData({
          Print: '打印',
          String: '字符串',
          Begin: '开始',
          start: '开始',
          value: '值',
          exec: '执行',
          next: '下一步',
          result: '结果',

          Array: '数组',

          GetItemFromArray: '获取数组项',
          index: '索引',

          Sequence: '序列',
          sequenceInput: '',

          Timer: '定时器',
          interval: '每隔（毫秒）',

          Branch: '分支',
          condition: '条件',

          ForEachLoop: '迭代数组',
          element: '元素',
          loop: '迭代',
          completed: '迭代完成',
          ...locals$1,
          ...locals,
        });
      }
      this.ui.$on('mounted:Canvas', this.mountedCanvasEvent, this);
      this.ui.$on('beforeDestroy:Canvas', this.beforeDestroyCanvasEvent, this);
    }

    // 挂载画布事件
    mountedCanvasEvent(canvas) {
      this.initNodes(canvas);
      this.updateLayer();

      if (this.editor) {
        this.ui.$on('adapterCompleted', this.chartCreate, this);
        this.ui.$on('beforeDestroyAdapter', this.chartDestroy, this);
        this.ui.$on('updatedAdapter', this.chartUpgrade, this);
        this.ui.$on('mounted:Layer', this.layerCreate, this);
        this.ui.$on('beforeDestroy:Layer', this.layerDestroy, this);
        this.ui.$on('update', this.updateEvent, this);
      }
    }

    // 画布销毁前事件
    beforeDestroyCanvasEvent(canvas) {
      if (this.editor) {
        this.ui.$off('adapterCompleted', this.chartCreate, this);
        this.ui.$off('beforeDestroyAdapter', this.chartDestroy, this);
        this.ui.$off('updatedAdapter', this.chartUpgrade, this);
        this.ui.$off('mounted:Layer', this.layerCreate, this);
        this.ui.$off('beforeDestroy:Layer', this.layerDestroy, this);
        this.ui.$off('update', this.updateEvent, this);
      }
      this._destroyNodes(canvas);
    }

    // 初始化节点
    initNodes(canvas) {
      const containers = canvas.containers;
      const layers = canvas.layers;

      // 图表节点
      const { nodes: conchNodes, locals: conchLocals } = getConchNodes(containers);
      // 图层节点
      const { nodes: layerNodes, locals: layerLocals } = getLayerNodes(layers);

      // 图表节点
      const { style, folder } = this.nodeCollections.addConchNodes(...conchNodes);

      // 图层节点
      const { folder: layerNodesFolder, style: layerNodesStyle } =
        this.nodeCollections.addLayerNodes(...layerNodes);

      this.blueprint.registerNode([...conchNodes, ...layerNodes]);
      if (this.editor) {
        // 加载节点样式的配置
        this.editor.loadStyle([...style, ...layerNodesStyle]);
        // 加载右键菜单的配置
        this.editor.loadFolder({ ...folder, ...layerNodesFolder });

        this.editor.loadLocalData({ ...conchLocals, ...layerLocals });
      }
    }

    // 销毁节点
    _destroyNodes(canvas) {
      const containers = canvas.containers;
      const layers = canvas.layers;

      containers.forEach((container) => {
        this.blueprint.unregisterNode(container.id);
        this.nodeCollections.removeConchNode(container.id);
      });
      layers.forEach((layer) => {
        this.blueprint.unregisterNode(layer.id);
        this.nodeCollections.removeLayerNode(layer.id);
      });

      if (this.editor) {
        const { folder, style } = this.nodeCollections.getStyleAndFolderData();

        // 加载节点样式的配置
        this.editor.loadStyle(style);
        // 加载右键菜单的配置
        this.editor.loadFolder(folder);
      }
    }

    // 增加图表节点
    chartCreate(adapter) {
      if (adapter) {
        this.createBlueprintNode({
          comp: adapter.$parent,
          createFn: createChartNode,
          addFn: 'addConchNodes',
        });
      }
    }

    // 图表组件升级
    chartUpgrade(container) {
      const nodeInfo = createChartNode(container);
      if (nodeInfo) {
        const { node, local } = nodeInfo;
        this.blueprint.updateNode(node);
        this.editor.loadLocalData(local);
      }
    }

    // 删除图表组件
    chartDestroy(adapter) {
      this.destroyBlueprintNode({
        comp: adapter.$parent,
        fn: 'removeConchNode',
      });
    }

    // 添加到蓝图
    addToBluePrint(container) {
      this.editor.addNode(container.id);
    }

    // 添加图层到蓝图
    addLayerToBluePrint(layer) {
      this.editor.addNode(layer.id);
    }

    // 更新图层
    updateLayer() {
      const nodeInfo = createLayersNode(this.ui.$canvas.children);
      if (nodeInfo) {
        this.blueprint.updateNode(nodeInfo.node);
      }
    }

    // 新增图层
    layerCreate(layer) {
      this.createBlueprintNode({
        comp: layer,
        createFn: createLayerNode,
        addFn: 'addLayerNodes',
      });
      this.updateLayer();
    }

    // 图表重命名
    containerChangeName(container, newName) {
      this.editor.loadLocalData({
        [container.id]: newName,
      });
    }

    // 图层重命名
    layerChangeName(layer, newName) {
      this.editor.loadLocalData({
        [layer.id]: newName,
      });
      this.updateLayer();
    }

    // 更新
    updateEvent(comp, name, value) {
      if (name === 'name') {
        switch (comp.type) {
          case 'Container':
            this.containerChangeName(comp, value);
            break
          case 'Layer':
            this.layerChangeName(comp, value);
            break
        }
      }
    }

    // 图层销毁
    layerDestroy(layer) {
      this.destroyBlueprintNode({
        comp: layer,
        fn: 'removeLayerNode',
      });

      this.updateLayer();
    }

    /**
     * @desc 图表/图层新增时，蓝图编辑器变更
     */
    createBlueprintNode(payload) {
      const { createFn, addFn, comp } = payload;
      const nodeInfo = createFn(comp);
      if (nodeInfo) {
        const { node, local } = nodeInfo;
        this.blueprint.registerNode(node);
        this.editor.loadLocalData(local);

        const { folder, style } = this.nodeCollections[addFn](node);

        // 加载节点样式的配置
        this.editor.loadStyle(style);
        // 加载右键菜单的配置
        this.editor.loadFolder(folder);
      }
    }

    /**
     * @desc 图表/图层销毁时，蓝图编辑器变更
     */
    destroyBlueprintNode(payload) {
      const { fn, comp } = payload;
      this.blueprint.unregisterNode(comp.id);

      const { folder, style } = this.nodeCollections[fn](comp.id);

      // 加载节点样式的配置
      this.editor.loadStyle(style);
      // 加载右键菜单的配置
      this.editor.loadFolder(folder);
    }

    // 运行
    run(code) {
      if (this._running && code) {
        try {
          const data = JSON.parse(code);
          if (data && Object.keys(data).length) {
            this.blueprint.run(data);
          }
        } catch (e) {
          console.error('蓝图运行异常', e);
        }
      }
    }

    // 导出定义文件
    toJSON() {
      return this.editor.toJson()
    }
  }

  const baseType=Math.random().toString(36).substr(-8);let baseId=Math.round(100*Math.random());function getUID(A="ui"){A=A+"-"+(baseType+baseId);return baseId++,A}function getElement(A){return !!A&&(A instanceof HTMLElement?A:document.querySelector(A))}function createElement(A="div"){return document.createElement(A)}function createElementWithAttr(A="div",e={},t={}){var i,s,n=document.createElement(A),A=Object.keys(e),r=Object.keys(t);for(i of A)n.style[i]=e[i];for(s of r)n.dataset[s]=t[s];return n}function mount(A,e,t){var i="before"===t||"after"===t?e.el:e.contentEl;unmount(A),mountElement(A.el,i||e.el,t),A._isMounted=!0;}function mountElement(A,e,t){"before"===t?e.parentNode.insertBefore(A,e):"after"===t?(t=e.nextSibling)?mountElement(A,t,"before"):mountElement(A,e.parentNode):e.appendChild(A);}function unmount(A){A.el&&A.el.parentNode&&A.el.parentNode.removeChild(A.el),A._isMounted=!1;}function updateStyle(e){var A=e.style.getDirtyStyleList();return A.forEach(A=>{e.el.style[A.name]=A.value;}),A}const LAYOUT_MAP={UI:"UI",CANVAS:"Canvas",LAYER:"Layer",GROUP:"Group",CONTAINER:"Container",DEFAULTCONTAINER:"DefaultContainer"},defaultConfig={[LAYOUT_MAP.UI]:{type:LAYOUT_MAP.UI,theme:{ui:{background:"#fff"},mask:{background:"transparent",opacity:1,defaultContainer:{}},ruler:{border:"1px solid #000000",color:"#565656",width:21,lineStyle:{color:"#EAB2B3",activeColor:"#ED9692",width:1},tick:{textFont:"9px sans-serif",textColor:"#fff",lineWidth:1,lineColor:"#fff",lineLong:16,lineShort:4},iconColor:"#c1c1c1",icon:{color:"#c1c1c1",borderStyle:"solid",borderWidth:"0px 0px 1px 0px",borderColor:"#000000"}},alignmentLines:{color:"#ff3366",width:1,distanceStyle:{color:"#CCFF99",width:1}},bound:{rectColor:"#007AFF",rectStyle:"solid",handleColor:"#007AFF",labelColor:"#FFFFFF",labelBackground:"#007AFF",container:{},group:{},layer:{},multSelect:{}}}},[LAYOUT_MAP.CANVAS]:{type:LAYOUT_MAP.CANVAS,inStack:!0,isLock:!0},[LAYOUT_MAP.LAYER]:{type:LAYOUT_MAP.LAYER,inStack:!0,isLock:!0},[LAYOUT_MAP.GROUP]:{type:LAYOUT_MAP.GROUP,inStack:!0,isLock:!1},[LAYOUT_MAP.CONTAINER]:{type:LAYOUT_MAP.CONTAINER,inStack:!0,isLock:!1}},defaultOption={[LAYOUT_MAP.CANVAS]:{baseOption:{ignoreRendering:!1,style:{position:"relative",width:1920,height:1080,backgroundColor:"black",transformOrigin:"0 0"}}},[LAYOUT_MAP.LAYER]:{baseOption:{ignoreRendering:!1,style:{position:"absolute",top:0,left:0,width:1e3,height:1e3}}},[LAYOUT_MAP.GROUP]:{baseOption:{}},[LAYOUT_MAP.CONTAINER]:{baseOption:{ignoreRendering:!1,penetrateOnplay:!1,style:{position:"absolute",top:30,left:30,width:200,height:200}}}},COMMAND_TYPE={MOVE:"Move",STYLE:"Style",ATTRIBUTE:"Attribute",CREATEGROUP:"CreateGroup",UNGROUP:"UnGroup",UNGRAPHOBJECT:"UnGraphObject",CREATEGRAPHOBJECT:"CreateGraphObject",UNGRAPGOBJECT:"UnGraphObject",DRAG:"Drag",ALIGN:"Align",ROTATE:"Rotate"},CANVAS_SCALE_MODE={SCROLL:0,SCALEALL:1,SCALEWIDTH:2,SCALEHEIGHT:3},CANVAS_MODE={PLAY:0,EDIT:1},MASK_STYLE={position:"absolute",top:0,left:0,width:"100%",height:"100%"},CURSOR_STYLE=["ns-resize","ns-resize","ew-resize","ew-resize","nwse-resize","nesw-resize","nesw-resize","nwse-resize"],TRANSITIONTYPE={ENTER:"enter",LEAVE:"leave"},EVENT_KEY={DOWN:"down",MOVE:"move",UP:"up"},EVENT_CHECK={CANDOWN:"canDown",CANMOVE:"canMove",CANUP:"canUp",ISSTOP:"isStopPropagation",ISPREVENT:"isPreventDefault"};function confirmArr(A){return Array.isArray(A)&&0<A.length}function isType$1(A,e){return Object.prototype.toString.call(A).includes(e)}function isDef(A){return null!=A}function isUnDef(A){return null==A}function isNumber(A){return "number"==typeof A&&!isNaN(A)}function hasOwn(A,e){return Reflect.has(A,e)}function isPlainObject(A){return isType$1(A,"Object")}function merge(...A){let e=A.shift();isPlainObject(e)||(e={});for(const t of A)if(isPlainObject(t))for(const i in t)t.hasOwnProperty(i)&&(e[i]=mergeCore(e[i],clone(t[i])));return e}function mergeCore(A,e){if(!isPlainObject(A)||!isPlainObject(e))return e;for(const t in e)e.hasOwnProperty(t)&&(A[t]=mergeCore(A[t],e[t]));return A}function findIndex(A,e){return A.findIndex(A=>A.data===e)}function find(A,e){for(const t of A)if(t.source===e)return t;return null}function clone(A,e){if(!isPlainObject(A))return A;e=e||[];var t=Array.isArray(A)?[]:{},i=find(e,A);if(i)return i.target;e.push({source:A,target:t});for(const s in A)Object.prototype.hasOwnProperty.call(A,s)&&(isPlainObject(A[s])?t[s]=clone(A[s],e):t[s]=A[s]);return t}function initialCapital(A){return A.charAt(0).toUpperCase()+A.slice(1)}const isMac=-1<window.navigator.userAgent.indexOf("Mac OS X");function getSvg(A,e,t){return isDef(e)&&isDef(t)?`url(data:image/svg+xml;base64,${btoa(decodeURIComponent(encodeURIComponent(A)))}
    ) ${e} ${t},default`:`url(data:image/svg+xml;base64,${btoa(decodeURIComponent(encodeURIComponent(A)))}
    )`}function checkMouseBtnType(A,e){switch(e){case"left":return 1===A.buttons;case"right":return 2===A.buttons;case"center":return 4===A.buttons}}function getMouseBtnType(A){switch(isType$1(A,"Number")?A:A.buttons){case 1:return "left";case 2:return "right";case 4:return "center";case 0:return ""}}function checkRegExp(A,e){return !isUnDef(A)&&!isUnDef(e)&&new RegExp(A).test(e)}const dateStyle={info:"background:#606060;color:#fff;",warn:"background:#E9A400;color:#fff;",error:"background:#EC3941;color:#fff;"};function logStyle(A){return [dateStyle[A],"background:#1375B2;color:#fff;"]}function date(){var A=new Date;return A.toLocaleDateString()+" "+A.toLocaleTimeString()}class Log$1{info(...A){this._recordLog("info",...A);}warn(...A){this._recordLog("warn",...A);}error(...A){this._recordLog("error",...A);}_recordLog(A,...e){window.console[A](`%c [THING.UI ${A}] %c ${date()} `,...logStyle(A),...e);}memory(){var A,e,t,i=performance["memory"];i&&(A=A=>A/1024/1024+"M",{jsHeapSizeLimit:i,totalJSHeapSize:e,usedJSHeapSize:t}=i,console.table({max:A(i),has:A(e),used:A(t)}));}}var log=new Log$1;const _getType=A=>"ui"===(A=A.toLowerCase())?A:A+"s",displayables=new Map;class Data{constructor(){this.init(),this.nameMapping=new Map;}init(){Object.keys(LAYOUT_MAP).forEach(A=>{displayables.set(_getType(A),new Set);});}add(A){var e=_getType(A.type);displayables.get(e).add(A),this.setName(A);}remove(A){var e=_getType(A.type),e=displayables.get(e);e.size&&(e.has(A)&&e.delete(A),A.name)&&(e=this.getByName(A.name)).splice(e.indexOf(A),1);}setName(e){var A=e.name;A&&(this.nameMapping.has(A)||this.nameMapping.set(A,[]),(A=this.nameMapping.get(e.name)).find(A=>A.id===e.id)||A.push(e));}clear(){this.nameMapping.clear(),this.init();}getByName(A){return this.nameMapping.get(A)}getByType(A){return displayables.get(A)}}class Node$1{constructor(A){this.data=A,this.parent=null,this.children=[];}}const idMapping=new Map;class Tree{constructor(){return this._root=null,this.idMapping=idMapping,Tree.instance||(Tree.instance=this),Tree.instance}add(A,e){var t=new Node$1(A);idMapping.set(A.id,t),null===this._root?this._root=t:(A=this.getNodeById(e.id),(t.parent=A).children.push(t));}remove(A){var e=this.getNodeById(A.parent.id),t=findIndex(e.children,A);if(t<0)throw new Error("要删除节点不存在");return e.children.splice(t,1),idMapping.delete(A.id),!0}edit(A,e){var t=this.getNodeById(e.parent.id),i=findIndex(t.children,e);switch(A){case"prev":return i<=0?null:t.children[i-1];case"next":return i<0||t.children.length===i+1?null:t.children[i+1];default:throw new Error("此操作无效")}}move(A,e,t){var i=this.getNodeById(e.parent.id);let s=null;var n=this.getNodeById(A.parent.id),r=findIndex(n.children,A),o=this.getNodeById(A.id);switch(t){case"before":n.children.splice(r,1),o.data.parent=i.data,o.parent=i,s=findIndex(i.children,e),i.children.splice(s,0,o);break;case"after":n.children.splice(r,1),o.data.parent=i.data,o.parent=i,s=findIndex(i.children,e),i.children.splice(s+1,0,o);break;default:var a=this.getNodeById(e.id);n.children.splice(r,1),o.data.parent=a.data,(o.parent=a).children.push(o);}}clear(){this._root=null,idMapping.clear();}hasNodeById(A){return idMapping.has(A)}getNodeById(A){return idMapping.get(A)}}class DB{constructor(){this.data=new Data,this.tree=new Tree,this.selects=new Set;}}var db=new DB;const stacks=new WeakMap;class Stack{constructor(){return stacks.set(this,[]),Stack.instance||(Stack.instance=this),Stack.instance}push(A){this.get().push(A);}pop(){return this.get().pop()}shift(){this.get().shift();}peek(){var A=this.get();return A[A.length-1]}size(){return this.get().length||0}isEmpty(){return !this.size()}clear(){stacks.set(this,[]);}print(){return Array.from(this.get().values())}get(){return stacks.get(this)}set(A){stacks.set(this,A);}}const printStackLog$5=localStorage.getItem("printStackLog"),Attribute=A=>{const t=A[0];let i=A[1];return {type:"Attribute",redo(A,e){i=attr("Redo",i,t),A&&A.apply(e,[i]);},undo(A,e){i=attr("Undo",i,t),A&&A.apply(e,[i]);}}};function attr(A,e,t){return printStackLog$5&&log.info(`[${A} Attribute]: ${t.id}撤销`+("show"===e?"“隐藏”":"“显示”")),"show"===e?(t.visible=!1,t._setVisible(!1),selector.clear(),"hidden"):(t.visible=!0,t._setVisible(!0),selector.select(t),"show")}const printStackLog$4=localStorage.getItem("printStackLog"),Drag=A=>{const e=selector.getContainers(),t=selector.getSelectElements(),i=e.map(A=>A.bound.record),s=[];return {type:"Drag",redo(A){printStackLog$4&&log.info(`[Redo Drag]: ${e.map(A=>A.id)}恢复“拖拽”`),selector.select(t),e.forEach((A,e)=>{A.setBound(s[e]);}),selector.select(t),A&&A(this.type,t,e);},undo(A){printStackLog$4&&log.info(`[Undo Drag]: ${e.map(A=>A.id)}撤销“拖拽”`),selector.select(t),e.forEach((A,e)=>{s[e]=clone(A.bound),A.setBound(i[e]);}),selector.select(t),A&&A(this.type,t,e);}}},printStackLog$3=localStorage.getItem("printStackLog"),Align$1=A=>{const e=A[0].map(A=>"Group"===A.type?A.containers:A).flat(1/0),t=e.map(A=>A.bound.record),i=[];return {type:"Align",redo(A){printStackLog$3&&log.info(`[Redo Align]: ${e.map(A=>A.id)}恢复“对齐”`),e.forEach((A,e)=>{A.setBound(i[e]);}),A&&A(this.type,e);},undo(A){printStackLog$3&&log.info(`[Undo Align]: ${e.map(A=>A.id)}撤销“对齐”`),e.forEach((A,e)=>{i[e]=clone(A.bound),A.setBound(t[e]);}),A&&A(this.type,e);}}},printStackLog$2=localStorage.getItem("printStackLog"),Rotate=A=>{const e=A[0].map(A=>"Group"===A.type?A.containers:A).flat(1/0),t=e.map(A=>A.bound.record),i=[];return {type:"Rotate",redo(A){printStackLog$2&&log.info(`[Redo Rotate]: ${e.map(A=>A.id)}恢复“旋转”`),e.forEach((A,e)=>{A.setBound(i[e]);}),selector.select(e),A&&A(this.type,e);},undo(A){printStackLog$2&&log.info(`[Undo Rotate]: ${e.map(A=>A.id)}撤销“旋转”`),e.forEach((A,e)=>{i[e]=clone(A.bound),A.setBound(t[e]);}),selector.select(e),A&&A(this.type,e);}}},printStackLog$1=localStorage.getItem("printStackLog"),cache={[COMMAND_TYPE.CREATEGRAPHOBJECT]:"",[COMMAND_TYPE.UNGRAPHOBJECT]:"",[COMMAND_TYPE.MOVE]:"",[COMMAND_TYPE.STYLE]:"",[COMMAND_TYPE.ATTRIBUTE]:Attribute,[COMMAND_TYPE.CREATEGROUP]:"",[COMMAND_TYPE.UNGROUP]:"",[COMMAND_TYPE.DRAG]:Drag,[COMMAND_TYPE.ALIGN]:Align$1,[COMMAND_TYPE.ROTATE]:Rotate};class GenerateExecution{constructor(){this.commands=null,this.cache=cache,this.init();}init(){this.commands=this.initCommands();}initCommands(){const e={};return Object.values(COMMAND_TYPE).forEach(A=>{e[A]=commandFn(A);}),e}addCommandType(A){var e;return !(!A||!isType$1(A,"String")||(e=A.toUpperCase(),!isUnDef(COMMAND_TYPE[e]))||(COMMAND_TYPE[e]=A,this.cache[A]="",this.commands[A]=commandFn(A),0))}}function commandFn(n){return A=>{if(isUnDef(cache[n]))throw Error(`[Error UndoRedo]: ${n}操作类型未定义`);if(""!==cache[n])return cache[n](A);{A[0]=A[0]||{};const{undo:t,redo:i,param:s}=A[0];return {type:n,redo(A,e){printStackLog$1&&log.info(`[Redo ${n}]`),i&&i(...s),A&&A.apply(e,[n,...s]);},undo(A,e){printStackLog$1&&log.info(`[Undo ${n}]`),t&&t(...s),A&&A.apply(e,[n,...s]);},destroy(){s&&s[0]&&s[0]._destroyTruthy&&s[0]._destroyTruthy();}}}}}var generateExecution=new GenerateExecution;const printStackLog=localStorage.getItem("printStackLog");let Command$1 = class Command{constructor(){this.stack=new Stack,this.position=-1,this.maximum=100,this.commands=generateExecution.commands;}setMaximum(A){return !(!isType$1(A,"Number")||A===this.maximum||(this.maximum=A,0))}execute(A,...e){var t,i;return !!this.commands[A]&&!!(t=this.commands[A](e))&&(-1<=this.position&&this.position<this.stack.size()-1&&this._clearRedo(),this.stack.size()>=this.maximum&&("UnGraphObject"!==(i=this.stack.get()[0]).type&&"UnGroup"!==i.type||i.destroy(),this.stack.shift(),this.position--),t.store=this.store,this.stack.push(t),this.position++,printStackLog&&log.info(`[execute ${A}]`,-1<A.indexOf("Create")?e[0].id||e[0].param[0].id:e),!0)}undo(A,e){return 0<=this.position&&(this.get().undo(A,e),this.position--,!0)}redo(A,e){return this.position<this.stack.size()-1&&(this.position++,this.get().redo(A,e),!0)}canRedo(){return this.position<this.stack.size()-1}canUndo(){return 0<=this.position}clear(){this.stack.clear(),this.position=-1;}get(){return this.stack.get()[this.position]}_clearRedo(){var A=this.stack.get().slice(0,this.position+1);for(const e of this.stack.get().slice(this.position-this.stack.size()+1).reverse())"CreateGraphObject"!==e.type&&"CreateGroup"!==e.type||e.destroy();this.stack.set(A);}};var command=new Command$1;function mergeOption(A,e={},t={}){return merge({},defaultOption[A],{config:defaultConfig[A]},{baseOption:e,config:t})}function _applyMixin(e,t){t=t.prototype||t,Object.getOwnPropertyNames(t).forEach(A=>{"constructor"!==A&&(e.prototype[A]=t[A]);});}function applyMixins(e,A){Array.isArray(A)?A.forEach(A=>{_applyMixin(e,A);}):_applyMixin(e,A);}class LayoutManager{constructor(){this.layoutMap=new Map;}register(A,e){return 2!==arguments.length?console.warn("注册需要的参数不对"):this.layoutMap.has(A)?console.warn(A+" 已经存在，无法注册"):(this.layoutMap.set(A,e),!0)}mixin(t,i){this.layoutMap.forEach((A,e)=>{e.toUpperCase()===t.toUpperCase()&&applyMixins(A,i);});}createLayout(A,e,t,i={}){if(this.layoutMap.has(e))return e===LAYOUT_MAP.GROUP&&(i.isAlone=!0),this.layoutMap.get(e).factoryConfig(A,t,i);throw new Error(e+" 还未注册，需要先注册后才能使用")}parseLayout(A,e,t){const i=this.createLayout(A,e.type,e.option,t);return e.children&&e.children.forEach(A=>{this.parseLayout(i,A,{inStack:!1});}),i}checkLayoutType(e,A){return isType$1(A,"Array")?A.some(A=>{A=this.layoutMap.get(A);return !isUnDef(A)&&e instanceof A}):!isUnDef(A=this.layoutMap.get(A))&&e instanceof A}}var layoutManager=new LayoutManager;class Hook{constructor(A,e){this.instance=A,this.hooks=e;for(const t of this.hooks)this[t+"List"]=[];}tap(A,e){return !!this.getIncludes(A)&&("function"==typeof e&&(this[A+"List"]||(this[A+"List"]=[]),this[A+"List"].push(e.bind(this.instance,{instance:this.instance}))),!0)}call(e,...A){if(!this.getIncludes(e))return log.warn(e+" hook has not been registered"),!1;for(const t of this[e+"List"])try{t(...A);}catch(A){log.error(`Error in ${e} hook:`,A);}return !0}register(A,e){if("object"==typeof A&&null!==A)for(const t in A)this.register(t,A[t]);this.getIncludes(A)?log.warn(A+" hook has been registered"):this.hooks.push(A),this.tap(A,e);}unregister(A){var e=this.getIndexOf(A);if(-1===e)throw new Error("this hook has been registered");delete this[A+"List"],this.hook.splice(e,1);}destroy(){this.hooks.forEach(A=>delete this[A+"List"]),this.hooks=[];}getIncludes(A){return !!this.hooks.includes(A)}getIndexOf(A){return this.hooks.indexOf(A)}}const allowTypes=["ui","canvas","layer","group","container"];let Module$1 = class Module{constructor(A){this.instance=A,this.cache={},Object.entries(A).forEach(([i,A])=>{allowTypes.includes(i)&&(this.cache[i]||(this.cache[i]={}),Object.entries(A).forEach(([e,t])=>{if("function"==typeof t){let A=this.cache[i][e];A||(this.cache[i][e]=A=new Set),A.add(t);}}));});}inject(t,A){const i=this.cache[A.toLowerCase()];i&&Object.keys(i).forEach(e=>{i[e].forEach(A=>{t.tap(e,A);});});}};let ModuleManager$1 = class ModuleManager{constructor(){this.modules=new Map;}mixin(A){Object.entries(A).forEach(([A,e])=>{allowTypes.includes(A)&&layoutManager.mixin(A,e);});}register(e){if(!this.modules.has(e)){let A=e;"function"==typeof(A="function"==typeof e?e(UI):A).setup&&(A.setup(UI),delete A.setup),this.modules.set(e,new Module$1(A));}}remove(A){this.modules.delete(A);}inject(e,t){this.modules.forEach(A=>A.inject(e,t));}};var mm=new ModuleManager$1;const hooks=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeToJSON","beforeDestroy","destroyed","beforeParseJSON","afterParseJSON"];function createLifeCycle(A){var e=new Hook(A,hooks);return mm.inject(e,A.type||A.constructor.name),e}const commandAPI={create(A,e,t=!1){commandAPI._create(A,e),t&&store$1$1.execute(COMMAND_TYPE.CREATEGROUP,{undo:commandAPI._unCreate,redo:commandAPI._create,param:[A,e]});},destroy(A){var e=store$1$1.getAllElementsByEL(A);commandAPI._destroy(A,e),store$1$1.execute(COMMAND_TYPE.UNGROUP,{undo:commandAPI._undestroy,redo:commandAPI._destroy,param:[A,e]});},dismiss(A){var e=A.children;commandAPI._dismiss(A,e),store$1$1.execute(COMMAND_TYPE.UNGROUP,{undo:commandAPI._undismiss,redo:commandAPI._dismiss,param:[A,e]});},graph(A,e=!1){e&&store$1$1.execute(COMMAND_TYPE.CREATEGRAPHOBJECT,{undo:commandAPI._unGraph,redo:commandAPI._graph,param:[A]}),commandAPI._graph_init(A);},unGraph(A){var e=store$1$1.getAllElementsByEL(A);commandAPI._unGraph(A,e),store$1$1.execute(COMMAND_TYPE.UNGRAPHOBJECT,{undo:commandAPI._graph,redo:commandAPI._unGraph,param:[A,e]});},move(A,e,t){commandAPI._move(A,e,t),store$1$1.execute(COMMAND_TYPE.MOVE,{undo:commandAPI._moveBack,redo:commandAPI._move,param:[A,e,t]});},drag(A){store$1$1.execute(COMMAND_TYPE.DRAG,A);},align(A){store$1$1.execute(COMMAND_TYPE.ALIGN,A);},rotate(A){store$1$1.execute(COMMAND_TYPE.ROTATE,A);},attribute(A,e){store$1$1.execute(COMMAND_TYPE.ATTRIBUTE,A,e);},_create(e,A){store$1$1.init(e),store$1$1._move(e,A[0],"before"),A.forEach(A=>moveToTarget$1(A,e));},_unCreate(A,e){store$1$1._moveBack(e),store$1$1._remove(A),selector.clear();},_graph(A,e){store$1$1.init(A),e&&e.forEach(A=>store$1$1.init(A)),A.doMount();},_graph_init(A){store$1$1.init(A),A.initMount();},_unGraph(A,e){A.doUnmount(),store$1$1._remove(A),e&&store$1$1._removeData(e);},_destroy(A,e){selector.clear(),A.unmount(),store$1$1._remove(A),e&&store$1$1._removeData(e);},_undestroy(A,e){store$1$1._removeback(A),e.forEach(A=>store$1$1.init(A)),A.mount(),selector.select(A);},_dismiss(A,e){store$1$1._move(e,A,"before"),store$1$1._remove(A),e.forEach(A=>A._setVisible(A.visible)),selector.clear();},_undismiss(A,e){store$1$1._removeback(A),store$1$1._moveBack(e),selector.select(A);},_move(A,e,t){moveToTarget$1(A,e,t);},_moveBack(A){store$1$1._moveBack(A);}},{ENTER:ENTER$2,LEAVE:LEAVE$2}=TRANSITIONTYPE;class TransAnimation{constructor(){this.ui=null,this.target=null,this.type="",this.resolve=null,this.animations=new Map;}get root(){return this.ui}set root(A){this.ui||(this.ui=A);}execute(t,A,e=null){if(!this.root.isPlayMode()||!A||!A.length)return !1;let i=!1;if(A&&A.length){e&&this.root.animation._registerCallback(e,t);try{A.forEach(A=>{A.reduce((A,e)=>A.run(e,null,t),this.root.animation);}),i=!0;}catch(A){i=!1,console.error(A);}}return i}dispense(A,e,t){switch(this.target=A,this.type=e,this.resolve=t,e){case ENTER$2:this.show();break;case LEAVE$2:this.hidden();}}async show(){var{target:A,type:e,resolve:t}=this;checkLayoutType(A,LAYOUT_MAP.CONTAINER)?this.beforeExecute(A,e,t)()||(A._setVisible(!0),t(A)):(checkLayoutType(A,LAYOUT_MAP.GROUP)||checkLayoutType(A,LAYOUT_MAP.LAYER))&&(A._setVisible(!0),this.root.isPlayMode()&&await Promise.all(this.getPromiseList(A,e)),t(A));}async hidden(){var{target:A,type:e,resolve:t}=this;checkLayoutType(A,LAYOUT_MAP.CONTAINER)?this.beforeExecute(A,e,t)()||(A.visible=!1,A._setVisible(!1),t(A)):(checkLayoutType(A,LAYOUT_MAP.GROUP)||checkLayoutType(A,LAYOUT_MAP.LAYER))&&(this.root.isPlayMode()?(await Promise.all(this.getPromiseList(A,e)),A.visible=!1,A._setVisible(!1),A._showCts.forEach(A=>A.setVisible(!0))):(A.visible=!1,A._setVisible(!1)),t(A));}beforeExecute(A,e,t){if(!this.root.isPlayMode())return new Function("","return false");this.root.animation._end(A);var i=this.animations.get(A);return i?(i=i.animation[e],this.execute.bind(this,A,i,A._animationEndCb.bind(A,t))):new Function("","return false")}convert(A,e){e=e||A;if(checkLayoutType(A.parent,LAYOUT_MAP.GROUP))return this.convert(A.parent,e);if(checkLayoutType(A,LAYOUT_MAP.GROUP)){if(A.animation&&Object.keys(A.animation).length)return A.animation}else if(e.animation&&Object.keys(e.animation).length)return e.animation;return null}getPromiseList(e,t){return e.containers?e.containers.map(async A=>{if(this.getCtVisible(A))return t===LEAVE$2&&e._showCts&&e._showCts.push(A),await this.asyncExecute(A,t)}):[]}asyncExecute(e,t){return new Promise(A=>{this.beforeExecute(e,t,A)()||A(this);})}getCtVisible(A,e){e=e||A;return checkLayoutType(A.parent,LAYOUT_MAP.GROUP)?!!A.parent.visible&&this.getCtVisible(A.parent,e):e.visible}clear(){this.animations.clear();}}var transAnimation=new TransAnimation;const{ENTER:ENTER$1,LEAVE:LEAVE$1}=TRANSITIONTYPE;class Displayable{constructor(A,e){if(!A)throw new Error("parent 参数不能为空");this.type=e.config.type,this.lifeCycle=createLifeCycle(this),this.lifeCycle.call("beforeCreate"),this.parent=A,this.config=e.config,this.options=e.baseOption,this.id=null,this.root=store$1$1.getUI(),this.visible=null,this.isLock=null,this.selectLock=null,this.animation=e.baseOption.animation||null,this._name=null;}get isSelected(){return store$1$1.getSelectElements().includes(this)}get children(){return store$1$1.getChildren(this)}get lock(){return !!this.isLock}set lock(A){A!==this.isLock&&(this.isLock=A,this._changeLock());}get name(){return this._name}set name(A){this._name=""+A,store$1$1.setName(this);}init(){var A=this.options;if(A.id){if(store$1$1.getElementById(A.id))throw new Error(A.id+" 编号已经被使用");this.id=A.id;}else this.id=getId(this.type.toLowerCase()||"ui");this.name=A.name||"",this.visible=!hasOwn(A,"visible")||A.visible,this.isLock=(hasOwn(A,"isLock")?A:this.config).isLock,this.selectLock=!1,this.lifeCycle.call("created");}setAnimation(A,e){[ENTER$1,LEAVE$1].includes(A)&&(this.animation={...this.animation},this.animation[A]=e,this._updateAnimation(A));}show(){return new Promise(A=>{this.root.emit("beforeShow",this),this.visible=!0,transAnimation.dispense(this,ENTER$1,A),commandAPI.attribute(this,"show"),this.root.emit("afterShow",this);})}hidden(){return new Promise(A=>{this.root.emit("beforeHidden",this),this.unselect(),transAnimation.dispense(this,LEAVE$1,A),commandAPI.attribute(this,"hidden"),this.root.emit("afterHidden",this);})}update(){}prev(){return store$1$1.prev(this)}next(){return store$1$1.next(this)}select(){return !this.selectLock&&!this.isSelected&&this.root.selector.select(this)}unselect(){return !(this.selectLock||!this.isSelected)&&this.root.selector.unselect(this)}zIndexUp(){this.style.zIndex=1;}zIndexDown(){this.style.zIndex="";}toJSON(){var A=this.type,e={id:this.id,name:this.name,isLock:this.isLock,visible:this.visible},t=(isDef(this.penetrateOnplay)&&(e.penetrateOnplay=this.penetrateOnplay),isDef(this.ignoreRendering)&&(e.ignoreRendering=this.ignoreRendering),isDef(this.animation)&&(e.animation=this.animation),this.children.map(A=>A.toJSON())),A=(this.style&&(e.style=this.style.getValue(),delete e.style.display,delete e.style.zIndex),this.adapter&&isType$1(this.adapter.toJSON,"Function")&&(e.adapter=this.adapter.toJSON()),{type:A,option:e});return t&&(A.children=t),this.lifeCycle.call("beforeToJSON",A),A}destroy(){this.unselect();}_destroyTruthy(){this.lifeCycle.call("beforeDestroy");for(const A of this.children)A._destroyTruthy();return this.unselect(),this._destroyEvent(),store$1$1.getElementById(this.id)===this&&store$1$1._remove(this),this._clearCache(this),!0}_clearCache(A){unmount(A),A.el&&(A.el=null),A.parent=null,A.style&&A.style.destroy(),this.lifeCycle.call("destroyed"),A.lifeCycle.destroy();}_updateAnimation(A){var e=transAnimation.animations.get(this);if(e){const t=transAnimation.convert(this);e.animation=t,e.run[A]=()=>{transAnimation.execute(this,t[A]);};}}_changeLock(){this.root&&(this.isLock?this.root._setOperatHandlerDisplay({resize:!1,rotate:!1}):this.root._setOperatHandlerDisplay({resize:!0,rotate:!0}));}_initEvent(){}_destroyEvent(){}}function getId(A){var e=getUID(A);return store$1$1.getElementById(e)?getId(A):e}function checkLayoutType(A,e){return layoutManager.checkLayoutType(A,e)}function recordBound(A=[]){A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.GROUP)?recordBound(A.children):A.bound.record=A.bound.plain();});}function getParentLayer(A){return A instanceof Displayable?checkLayoutType(A,LAYOUT_MAP.LAYER)?A:getParentLayer(A.parent):null}function getElementParent(A){return checkLayoutType(A,LAYOUT_MAP.GROUP)?getElementParent(A.parent):A}function getParentGroupOptionList(A,e){let t=[];return checkLayoutType(A,LAYOUT_MAP.GROUP)&&t.push(A[e]),t=checkLayoutType(A.parent,LAYOUT_MAP.GROUP)?t.concat(getParentGroupOptionList(A.parent,e)):t}function setContainerDisplay(A){return A.visible&&getParentGroupOptionList(A.parent,"visible").every(A=>!!A)}function sortLayerChildren(A){if(A.length<2)return A;const t=getLayerFlatChildren(getParentLayer(A[0]));return A.sort((A,e)=>t.indexOf(A)-t.indexOf(e))}function getLayerFlatChildren(A){const t=[];return function e(A){A.children&&A.children.forEach(A=>{t.push(A),e(A);});}(A),t}function moveToTarget$1(A,e,t){if(t&&"before"!==t&&"after"!==t)return log.warn("type 参数异常");if(!(e instanceof Displayable))throw Error(`目标类型错误: ${e}不是一个可视化元素的实例`);let i=A,s=e,n=t;var r;checkLayoutType(e,LAYOUT_MAP.GROUP)&&(r=findInsertPosition(e,t),s=r[0],n=r[1]),i=isType$1(i=checkLayoutType(A,LAYOUT_MAP.GROUP)?"after"===n?A.containers.slice(0).reverse():A.containers:i,"Array")?i:[i],(A=isType$1(A,"Array")?A:[A]).forEach(A=>{store$1$1._move(A,e,t);}),i.forEach(A=>{A._setVisible(A.visible),A.id!==s.id&&(mount(A,{el:!n&&checkLayoutType(s,LAYOUT_MAP.LAYER)?s.contentEl:s.el},n),checkLayoutType(A,LAYOUT_MAP.CONTAINER))&&A.updateLocation();});}function checkLock(A=[]){return A.every(A=>A.isLock)}function getRootGroup(A){return checkLayoutType(A.parent,LAYOUT_MAP.GROUP)?getRootGroup(A.parent):A}function getLayerParentId(A){return checkLayoutType(A.parent,LAYOUT_MAP.LAYER)?A.parent.id:checkLayoutType(A.parent,LAYOUT_MAP.GROUP)?getLayerParentId(A.parent):A.id}function findInsertPosition(A,e){var t=A.containers,i=A.next();let s,n;if(t.length)switch(n=e){case"before":s=t.slice(0)[0];break;case"after":s=t.slice(-1)[0];break;default:s=t.slice(-1)[0],n="after";}else if(i){if(checkLayoutType(i,LAYOUT_MAP.GROUP))return findInsertPosition(i,"before");s=i,n="before";}else s=A.getParentLayer(),n="";return [s,n]}function rotateIcon(){return getSvg(`<svg width="16px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>toolbar_xz</title>
    <defs>
        <filter id="filter-1">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.043137 0 0 0 0 0.443137 0 0 0 0 0.901961 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
    </defs>
    <g id="editor" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="title-close" transform="translate(-1303.000000, -410.000000)">
            <g transform="translate(1302.998014, 409.998014)" id="toolbar_xz">
                <rect id="rect" x="0.0148202467" y="0.00198554907" width="16" height="16"></rect>
                <path d="M15.7293922,5.93143319 C16.285859,8.00819582 15.983898,10.1769077 14.9301888,12.0019855 C14.6684184,12.455385 14.363472,12.8814174 14.0201308,13.2740063 L15.7086046,12.8194026 L16.0585571,14.1254431 L12.7934557,15.0003244 C12.4688679,15.0872975 12.1361367,14.9226324 12.0023882,14.6259135 L11.9654592,14.5222804 L11.0905779,11.257179 L12.3966185,10.9072265 L12.840996,12.561793 C13.19294,12.187523 13.5012471,11.7727599 13.7592249,11.3259292 C14.6354102,9.80833161 14.8860513,8.00820448 14.4233516,6.2813857 C13.4730905,2.73496316 9.82780824,0.630358437 6.2813857,1.58061949 C2.73496316,2.53088055 0.630358435,6.17616286 1.58061949,9.7225854 C1.80974321,10.5776868 2.19919885,11.3636877 2.72612438,12.0498464 C3.25774419,12.7421177 3.9219886,13.3227173 4.67804189,13.7592248 C5.33958849,14.1411689 6.06152982,14.407079 6.81138501,14.5441342 L7.13436583,14.5949458 L6.95736646,15.9354232 C5.91550503,15.7978537 4.91108799,15.4550593 4.00198558,14.9301887 C3.09288309,14.4053182 2.29380597,13.7068647 1.65373654,12.873371 C1.01902772,12.0468578 0.549907173,11.1000769 0.274578937,10.0725379 C-0.868955554,5.80480909 1.66370439,1.41811342 5.93143319,0.274578939 C10.199162,-0.868955553 14.5858577,1.66370437 15.7293922,5.93143319 Z" id="shapes-combine" fill="#007aff" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>`)}function isMultiSelect(){var A=selector.getSelectElements();return A&&1<A.length}class Storage{init(A){db.tree.add(A,A.parent),db.data.add(A);}execute(A,...e){command.execute(A,...e);}_get(A){let e;switch(A){case"tree":e=db.tree;break;case"stack":e=command.stack.get();}return e}_removeData(A){(Array.isArray(A)?A:[A]).forEach(A=>db.data.remove(A));}_remove(A){(Array.isArray(A)?A:[A]).forEach(A=>{A.sublingNode=A.sublingNode||[],A.sublingNode.push(A.next()),db.tree.remove(A),db.data.remove(A);});}_removeback(A){db.tree.add(A,A.parent),db.data.add(A);var e=A.sublingNode&&A.sublingNode.pop();e&&db.tree.move(A,e,"before");}_move(A,e,t){(A=isType$1(A,"Array")?A:[A]).forEach(A=>{this.moveBack||(A.sublingNode=A.sublingNode||[],A.fromNode=A.fromNode||[],A.sublingNode.push(A.next()),A.fromNode.push(A.parent)),db.tree.move(A,e,t);});}_moveBack(A){(A=isType$1(A,"Array")?A:[A]).slice(0).reverse().forEach(A=>{var e=A.sublingNode.pop(),t=A.fromNode.pop();this.moveBack=!0,A.sublingNode&&e?moveToTarget$1(A,e,"before"):moveToTarget$1(A,t),this.moveBack=!1;});}prev(A){return db.tree.edit("prev",A)?db.tree.edit("prev",A).data:null}next(A){return db.tree.edit("next",A)?db.tree.edit("next",A).data:null}getUI(){return Array.from(db.data.getByType("ui"))[0]}getCanvas(){return Array.from(db.data.getByType("canvass"))}getLayers(){return Array.from(db.data.getByType("layers"))}getGroups(){return Array.from(db.data.getByType("groups"))}getContainers(){return Array.from(db.data.getByType("containers"))}getElementById(A){return this.hasElementById(A)?db.tree.getNodeById(A).data:null}hasElementById(A){return db.tree.hasNodeById(A)}getElementsByName(A){return db.data.getByName(A)}getAllElements(){return [...this.getLayers(),...this.getGroups(),...this.getContainers()]}getChildren(A){return this.hasElementById(A.id)?db.tree.getNodeById(A.id).children.map(A=>A.data):[]}deepListByType(A,e,t=[]){return A.forEach(A=>{e&&A.type!==LAYOUT_MAP[e]||t.push(A);A=this.getChildren(A);A&&A.length&&this.deepListByType(A,e,t);}),t}getContainersByEl(A){return this.deepListByType(this.getChildren(A),"CONTAINER")}getGroupsByEL(A){return this.deepListByType(this.getChildren(A),"GROUP")}getAllElementsByEL(A){return this.deepListByType(this.getChildren(A))}select(A){this.isSelect(A)||db.selects.add(A);}unSelect(A){this.isSelect(A)&&db.selects.delete(A);}getSelectElements(){return Array.from(db.selects)}getSelectCtGroups(){return Array.from(db.selects).filter(A=>checkLayoutType(A,LAYOUT_MAP.CONTAINER)||checkLayoutType(A,LAYOUT_MAP.GROUP))}isSelect(A){return db.selects.has(A)}setName(A){db.data.setName(A);}destroy(){db.tree.clear(),db.data.clear(),this.clearStack(),this.clearSelect();}clearStack(){command.stack.clear(),command.position=-1;}clearSelect(){db.selects.clear();}}const store$1=new Storage;command.store=store$1;var store$1$1=store$1;class BoundingRect{constructor(A,e,t=0,i=0,s={left:0,top:0},n=0){this.top=isNumber(e)?e:0,this.left=isNumber(A)?A:0,this.width=t,this.height=i,this.offset=s,this.angle=n,this.record=this.plain();}static create(A,e,t){return new BoundingRect(A.left,A.top,A.width,A.height,e,t)}clone(){return new BoundingRect(this.left,this.top,this.width,this.height,this.offset,this.angle)}setData(t){Object.keys(t).forEach(A=>{var e=t[A];this.hasOwnProperty(A)&&isNumber(e)&&(this[A]=Math.round(e));});}union(A,e){var t,i,s,n;A instanceof BoundingRect&&({top:t,left:i,right:s,bottom:n}=e?this.plainReal():this.plain(),e=e?A.plainReal():A.plain(),0===t&&0===i&&0===s&&0===n?this.setData(e):(this.top=Math.min(e.top,t),this.left=Math.min(e.left,i),this.width=Math.max(e.right,s)-this.left,this.height=Math.max(e.bottom,n)-this.top,this.angle=0));}setOffset(A,e){isNumber(A)||(A=0),isNumber(e)||(e=0),this.offset={left:A,top:e};}plain(){return {top:this.top,left:this.left,right:this.left+this.width,bottom:this.top+this.height,width:this.width,height:this.height,angle:this.angle}}plainReal(){var A=this["offset"],e=isNumber(A.top)?this.top+A.top:0,A=isNumber(A.left)?this.left+A.left:0;return {top:e,left:A,right:A+this.width,bottom:e+this.height,width:this.width,height:this.height,angle:this.angle}}}let Group$1 = class Group extends Displayable{static factory(A,e){return new Group(A,e)}static factoryConfig(A,e,t){return new Group(A,e,t)}constructor(t,i,s={}){if(s.isAlone){if(!t||!checkLayoutType(t,[LAYOUT_MAP.LAYER,LAYOUT_MAP.GROUP]))throw new Error("编组创建的参数必须是图层或者编组");super(t,mergeOption(LAYOUT_MAP.GROUP,i,s)),this.init(),store$1$1.init(this);}else {if(!(t=isType$1(t,"Array")?t:t?[t]:[]).length)throw new Error("编组创建的参数必须有值");let A=null,e=null;for(const n of t=Array.from(new Set(t))){if(!checkLayoutType(n,[LAYOUT_MAP.GROUP,LAYOUT_MAP.CONTAINER]))throw new Error("编组对象必须是编组或者容器");if(null===A)A=n.parent.id,e=n.id;else if(n.parent.id!==A)throw new Error(`不允许元素跨层级编组：${n.id}和${e}不在同一级`)}t=sortLayerChildren(t);super(t[0].parent,mergeOption(LAYOUT_MAP.GROUP,i,s)),this.init(),commandAPI.create(this,t,this.config.inStack);}}get bound(){var{left:A,top:e}=this.getParentLayer().bound;return unionBound(this.children,{x:A,y:e})}get groups(){return store$1$1.getGroupsByEL(this)}get containers(){return store$1$1.getContainersByEl(this)}init(){super.init(),this._showCts=[];}mount(){if(this.parent){let e=this.parent,t=null;var A;checkLayoutType(e,LAYOUT_MAP.GROUP)&&((A=this.next())?(e=A,t="before"):e=getElementParent(e)),this.lifeCycle.call("beforeMount"),this._isMounted=!0,this.groups.forEach(A=>A._isMounted=!0),this.containers.forEach(A=>{A.isMounted&&mount(A,e,t);}),this.lifeCycle.call("mounted");}}unmount(){this._isMounted=!1,this.groups.forEach(A=>A._isMounted=!1),this.containers.forEach(A=>{unmount(A);});}add(A){if(!(A=isType$1(A,"Array")?A:A?[A]:[]).length)return !1;for(const e of A=Array.from(new Set(A)))if(!checkLayoutType(e,[LAYOUT_MAP.GROUP,LAYOUT_MAP.CONTAINER])||e.parent===this||e===this)throw new Error("target 参数必须是同一个图层的其他编组或者容器，并且父节点不能是自己");return commandAPI.move(A,this),!0}moveToTarget(A,e){return e||checkLayoutType(A,[LAYOUT_MAP.LAYER,LAYOUT_MAP.GROUP])||A===this?e&&!checkLayoutType(A,[LAYOUT_MAP.CONTAINER,LAYOUT_MAP.GROUP])&&A!==this?log.warn("编组只能移动到容器或者其他编组旁边"):(commandAPI.move(this,A,e),this.root.operation.repaint(),!0):log.warn("编组只能移动到图层或者其他编组里面")}zIndexUp(){this.containers.forEach(A=>{A.style.zIndex=1;});}zIndexDown(){this.containers.forEach(A=>{A.style.zIndex="";});}show(){return this.visible?Promise.resolve(this):super.show()}hidden(){return this.visible?super.hidden():Promise.resolve(this)}move(e,t){this.containers.forEach(A=>A.move(e,t));}getParentLayer(){return getParentLayer(this.parent)}destroy(){this.lifeCycle.call("beforeDestroy"),commandAPI.destroy(this),this.lifeCycle.call("destroyed");}dismiss(){commandAPI.dismiss(this);}_setVisible(){this.containers.forEach(A=>A._setVisible());}};function unionBound(A,e){const t=new BoundingRect;return t.setOffset(e.x,e.y),A.length&&A.forEach(A=>t.union(A.bound)),t.angle=0,t}class Selector{constructor(){this.isMultSelect=!1,this.selectLayerId="";}get root(){return store$1$1.getUI()}get last(){var A=this.getSelectElements(),e=A.length;return A.length?A[e-1]:null}select(A){if(!this.root||!A)return !1;A=isType$1(A,"Array")?A:[A];let e,t,i="";A.forEach(A=>{t=A.root.config.notSelectLayer,A.type===LAYOUT_MAP.LAYER?(i=LAYOUT_MAP.LAYER,e=A.id):A.type!==LAYOUT_MAP.CONTAINER&&A.type!==LAYOUT_MAP.GROUP||(e=getParentLayer(A).id);}),this.selectLayerId&&e!==this.selectLayerId&&(s=db.tree.getNodeById(this.selectLayerId))&&(!t||i)&&s.data.zIndexDown(),this.selectLayerId=e,this.isMultSelect||this.clear();var s=A.filter(A=>{if(A.type!==LAYOUT_MAP.LAYER||!t)return store$1$1.select(A),A.zDown||A.zIndexUp(),!0;A.zDown||A.zIndexUp();});return A.length&&(this.root.emit("select",s),this.root.emit("selectElements",this.getSelectElements())),!0}unselect(A){return !!this.root&&((A=isType$1(A,"Array")?A:[A]).forEach(A=>{store$1$1.unSelect(A);}),this.zIndexDown(A),this.root.emit("unselect",A),this.root.emit("selectElements",this.getSelectElements()),!0)}zIndexDown(A){A.forEach(A=>{A.type===LAYOUT_MAP.LAYER&&this.selectLayerId===A.id||A.zIndexDown();});}clear(){var A=this.getSelectElements();A.forEach(A=>A.zIndexDown()),store$1$1.clearSelect(),this.root.emit("unselect",A);}delete(A){(A=switchElements.call(this,A))&&(A.forEach(A=>{store$1$1.unSelect(A),A.destroy();}),this.root.emit("delete"));}getSelectElements(){return store$1$1.getSelectElements()}getContainers(){return unrepeatContainers(this.getSelectElements())}getGroups(){return unrepeatGroups(this.getSelectElements())}getLayers(){return this.getSelectElements().filter(A=>checkLayoutType(A,LAYOUT_MAP.LAYER))}enableMultSelect(){this.isMultSelect=!0;}disableMultSelect(){this.isMultSelect=!1;}move(e,t){this.getContainers().forEach(A=>A.move(e,t));}createGroup(A){return (A=switchElements.call(this,A))?(A=new Group$1(A),this.clear(),store$1$1.select(A),this.root.emit("select",A),A):null}cancelGroup(A){(A=switchElements.call(this,A))&&A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.GROUP)&&(A.zIndexDown(),A.dismiss());});}}function unrepeatContainers(A=[],e=[]){return A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.CONTAINER)&&!e.includes(A)&&e.push(A),checkLayoutType(A,LAYOUT_MAP.GROUP)&&unrepeatContainers(store$1$1.getContainersByEl(A),e);}),e}function unrepeatGroups(A=[],e=[]){return A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.GROUP)&&(e.includes(A)||e.push(A),unrepeatGroups(store$1$1.getGroupsByEL(A),e));}),e}function switchElements(A){var e;return isUnDef(A)?(e=this.getSelectElements()).length?e:null:isType$1(A,"Array")?void 0:[A]}var selector=new Selector;const ALPHA=3;class TextEditor{constructor(){this.target=null,this.isInEdit=!1,this.isOutEdit=!1,this._textEditAbout=null,this._handlerState=null,this._textBUStyle=Object.create(null),this._blur=null,this._leave=null;}openTextEdit(A){A.textEditState=!0;}closeTextEdit(A){A.textEditState=!1;}readyTextEdit(A,e){A.textEditState&&!this.isInEdit&&(this.target=A,this._textEditAbout=Object.create(null),this._textEditAbout.contentValue=e);}enterTextEdit(A){var e,A=this._checkBeforeEdit(A);isUnDef(A)||(A.maskEl.style.display="none",(e=A.app.dom)&&(this.matchDom(e,A),this.isInEdit)&&(A.root.emit("inTextEdit"),A.root.closeRegionSelect(),this._handlerState=A.root.getOperatHandlerDisState(),A.root._setOperatHandlerDisplay({resize:!1,rotate:!1,sizeLabel:!1},!0)));}matchDom(A,t){Array.from(A.children).forEach(A=>{var e;this.isInEdit||(A.children&&A.children.length?this.matchDom(A,t):isDef(A.textContent)&&this._textEditAbout&&A.textContent.trim()===this._textEditAbout.contentValue.trim()&&(e=A.cloneNode(!0),A.parentElement.appendChild(e),this._blur=blur.bind(this),this._leave=leave$1.bind(this,e),t.el.addEventListener("mouseleave",this._leave),this.setTextAboutStyle(e,A,t),e.setAttribute("contenteditable",!0),this._textEditAbout.selfEl=A,((this._textEditAbout.cloneEl=e).firstChild?setRange:setEmptyRange)(e),this.isInEdit=!0));});}setTextAboutStyle(A,e,t){this._textBUStyle.textStyle={display:e.style.display||"","-webkit-line-clamp":e.style["-webkit-line-clamp"]||"","-webkit-box-orient":e.style["-webkit-box-orient"]||""},Object.assign(e.style,{display:"none"});e=A.parentElement;this._textBUStyle.parentStyle={whiteSpace:e.style.whiteSpace||"",textOverflow:e.style.textOverflow||"",overflow:e.style.overflow||"",wordBreak:e.style.wordBreak||""},Object.assign(e.style,{whiteSpace:"unset",textOverflow:"unset",overflow:"unset",wordBreak:"break-word"});let i;var e=A.style.color,{maxHeight:e,maxWidth:t}=(i=e&&"transparent"!==e&&"0"!==getRgbaNum(e,ALPHA)?"auto":"white",getMaxHW(t));Object.assign(A.style,{whiteSpace:"pre-wrap",textOverflow:"unset",overflow:"hidden",wordBreak:"break-word",outline:"none",pointerEvents:"all",cursor:"text",animation:"",caretColor:i,"-webkit-line-clamp":"",padding:"0 2px",maxHeight:e+"px",maxWidth:t+"px",minWidth:"2px"});}exitTextEdit(){var A,e,t,i=this._checkAfterEdit();isUnDef(i)?this.isOutEdit=!1:(i.root.openRegionSelect(),{resizeDis:e,rotateDis:t,sizeLabelDis:A}=this._handlerState,i.root._setOperatHandlerDisplay({resize:e,rotate:t,sizeLabel:A},!1),this.resetStyle(i),(e=this._textEditAbout.cloneEl)&&(t=getTextContent(e),e.removeEventListener("blur",this._blur),i.el.removeEventListener("mouseleave",this._leave),e.remove(),i.root.emit("afterTextEdit",t,i)),this.reset());}resetStyle(A){A.maskEl.style.display="";A=this._textEditAbout.selfEl;this._textBUStyle.textStyle&&Object.assign(A.style,this._textBUStyle.textStyle),this._textBUStyle.parentStyle&&Object.assign(A.parentElement.style,this._textBUStyle.parentStyle);}reset(){this.target=null,this.isInEdit=!1,this.isOutEdit=!1,this._textEditAbout=null,this._handlerState=null,this._blur=null,this._leave=null,this._textBUStyle=Object.create(null);}_checkBeforeEdit(A){var e=selector.getSelectElements();if(1<e.length)return null;A&&A.select();A=A||this.target||e[0];return A&&A.textEditState&&!this.isInEdit&&A.isSelected?(A.root.emit("beforeTextEdit",A),A):null}_checkAfterEdit(){if(this.isOutEdit)return null;this.isOutEdit=!0;var A=this.target;return A&&A.textEditState&&this.isInEdit?A:null}}var textEditor=new TextEditor;function getTextContent(A){let t="";var i=A.childNodes;for(let A=0,e;e=i&&i[A];A++)3===e.nodeType?t+=getTextValue(e):1===e.nodeType?t+=getDivValue(e):t+=e.innerText;return t=t.endsWith("\n")&&"\n\n"!==t.slice(-2)?t.slice(0,t.length-1):t}function getTextValue(A){var e=A.nodeValue;return e?A.nextSibling&&3!==A.nextSibling.nodeType?e+"\n":e:""}function getDivValue(A){var e=A.innerText;return e?e.endsWith("\n")&&!A.nextSibling?e.slice(0,e.length-1):e.endsWith("\n")||!A.nextSibling?e:e+"\n":""}function setEmptyRange(A){A.style.width||(A.style.minWidth="2px"),A.innerHTML="&nbsp",setRange(A),A.innerHTML="";}function setRange(A){var e=document.createRange(),A=(e.selectNodeContents(A),document.getSelection());A.removeAllRanges(),A.addRange(e);}function blur(){this.exitTextEdit();}function leave$1(A){A.addEventListener("blur",this._blur);}function getRgbaNum(A,e){return /^rgba\(/.test(A)?A.match(/(\d(\.\d+)?)+/g)[e]:null}function getMaxHW(A){var e=A.root.canvas.getZoom(),{top:t,left:i,width:s,height:n}=A.bound.plainReal(),{width:r,height:o}=A.root.bound,r=r/e,o=o/e,{top:a,left:l}=A.root.el.getBoundingClientRect(),{top:A,left:c}=A.root.canvas.el.getBoundingClientRect(),A=(A-a)/e+t,a=(c-l)/e+i;return {maxHeight:0<o-A?Math.floor(o-A):n,maxWidth:0<r-a?Math.floor(r-a):s}}class NextTick{constructor(){this.microCaches=[],this.pending=!1;}_flushMicroQueue(){for(this.pending=!1;this.microCaches.length;)this.microCaches.shift()();}call(A,e){let t;return this.microCaches.push(()=>{try{A?A.call(e):t(e);}catch(A){log.warn(A);}}),this.pending||(this.pending=!0,Promise.resolve().then(this._flushMicroQueue.bind(this))),A?t:new Promise(A=>{t=A;})}}var nextTick=new NextTick;class EventEmitter{constructor(){this.eventTypes={},this.eventFns={};}on(A,e,t=this){return this.hasType(A)||(this.eventTypes[A]=A,this.eventFns[A]=[]),this.eventFns[A].push([e,t]),this}once(e,t,i){const s=(...A)=>{this.off(e,s),t.apply(i,A);};return s.fn=t,this.on(e,s),this}off(e,t,i){if(e||t){if(this.hasType(e))if(t){var s,n,r=this.eventFns[e];let A=r.length;for(;-1<A;)r[A]?([s,n]=r[A],s!==t&&s.fn!==t||i&&n!==i||r.splice(A,1),A--):A--;}else this.eventFns[e]=[];}else this.destroyEvents();return this}emit(A,...e){if(this.hasType(A)){A=this.eventFns[A];if(A&&A.length)for(const s of [...A]){var[t,i]=s;t.apply(i,e);}}return this}destroyEvents(){this.eventTypes={},this.eventFns={};}hasType(A){return this.eventTypes[A]===A}}class ElementMove{constructor(A,e){this.instance=A,this.mouseMoveInfo=e;}elementMove(){var{left:A,top:e}=this.instance.bound.record;this.instance.setBound({left:A+this.mouseMoveInfo.x,top:e+this.mouseMoveInfo.y});}}class GraphEvent{constructor(){this.instance=null,this.target=null;}init(A){this.instance=A,this.moveModule=new ElementMove;}mouseOverEvent(A){A=getRootGroup(A);A.isSelected||this.instance.emit("graphMouseover",A.bound.plainReal(),A);}mouseMoveEvent(A,e){A.isSelected||(checkLayoutType(getRootGroup(A),LAYOUT_MAP.GROUP)&&(e.ctrlKey||e.metaKey)?A.showPreSelector():A.hiddenPreSelector());}mouseOutEvent(A){A.hiddenPreSelector(),this.instance.emit("graphMouseout");}}var graphEvent=new GraphEvent;class Sequence{constructor(){this.totalTick=[],this.totalCallbacks=[],this.callbacks=[],this.ticks=[],this._ticks=[],this._tier=0,this._callback=null,this._ranTicks=[];}addTicks(A,e,t){confirmArr(A)&&(this._ticks=A,this._tier=e,this._callback=t,this.add());}add(){this.ticks.length?this.handleRunningTicks():this.handleTotalTick();}handleRunningTicks(){var{_ticks:A,_tier:e,_callback:t}=this;1===e||this.isEveryInfinite(A)?(this.ticks.push(A),this.callbacks.push(t),this.totalTick.push([]),this.totalCallbacks.push([])):1<e&&this.handleTotalTick();}handleTotalTick(){var{_ticks:A,_tier:e,_callback:t}=this;1===e?(this.totalTick.push([A]),this.totalCallbacks.push([t])):this.totalTick.length&&(this.totalTick[this.totalTick.length-1].push(A),this.totalCallbacks[this.totalCallbacks.length-1].push(t));}isFinish(){return this.totalTick.flat().length<1&&this.ticks.flat().filter(A=>isDef(A)).length<1}getCurrentTicks(){var A=this.isEveryInfinite(),e=this.getRunEndTicks();return (!this.ticks.length||e.length||A)&&this.totalTick.length&&(this.ticks.length?e.forEach(A=>{this.totalTick[A]&&(this.ticks[A]=this.totalTick[A].shift(),this.callbacks[A]=this.totalCallbacks[A].shift());}):this.totalTick.forEach((A,e)=>{this.ticks.push(A.shift()),this.totalCallbacks[e]&&this.callbacks.push(this.totalCallbacks[e].shift());})),this.ticks}isEveryInfinite(A){A=A||this.ticks.flat().filter(A=>isDef(A));return A.length&&A.every(A=>A.infinite)}getRunEndTicks(){const t=[];return this.ticks.forEach((A,e)=>{A&&A.every(A=>isUnDef(A))&&t.push(e);}),t}endAnimation(){this.ticks.forEach(A=>{A&&A.forEach(A=>{isDef(A)&&A._after(!0);});}),this._ranTicks.forEach(A=>{A._after(!0);}),this.totalTick=[],this.ticks=[],this.totalCallbacks=[],this.callbacks=[],this._ranTicks=[],this._ticks=[],this._tier=0,this._callback=null;}_recordRanTick(A){this._ranTicks.push(A);}_endAnimation(e){this.ticks.forEach(A=>{A&&A.forEach(A=>{isDef(A)&&A.target.id===e.id&&A._after(!0);});}),this._ranTicks.forEach(A=>{A.target.id===e.id&&A._after(!0);}),this.totalTick=this.totalTick.filter(A=>A[0]&&A[0][0].target.id!==e.id),this.ticks=this.ticks.filter(A=>A&&A[0]&&A[0].target.id!==e.id),this._ranTicks=[];}}const DEFAULTLIST={fromTop:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(A.bottom-e.top)/t]}},fromLeft:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(A.right-e.left)/t,0]}},fromRight:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(-e.right+A.left)/t,0]}},fromBottom:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(-e.bottom+A.top)/t]}},toTop:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(-A.bottom+e.top)/t]}},toLeft:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(-A.right+e.left)/t,0]}},toRight:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(e.right-A.left)/t,0]}},toBottom:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(e.bottom-A.top)/t]}}},DEFAULTFLYLIST={fromFlyTop:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(A.bottom-e.top)/t]}},fromFlyLeft:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(A.right-e.left)/t,0]}},fromFlyRight:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[0]:t;return {translate:[(-e.right+A.left)/t,0]}},fromFlyBottom:({t:A,c:e,r:t})=>{t=isType$1(t,"Array")?t[1]:t;return {translate:[0,(-e.bottom+A.top)/t]}},toFlyTop:({b:A,r:e})=>(isType$1(e,"Array")&&e[1],{translate:[0,-A.height]}),toFlyLeft:({b:A,r:e})=>(isType$1(e,"Array")&&e[0],{translate:[-A.width,0]}),toFlyRight:({b:A,r:e})=>(isType$1(e,"Array")&&e[0],{translate:[A.width,0]}),toFlyBottom:({b:A,r:e})=>(isType$1(e,"Array")&&e[1],{translate:[0,A.height]})},scaleInFn=({s:A})=>({scale:A}),DEFAULTSCALELIST={fromZoomInVer:scaleInFn,fromZoomInHor:scaleInFn,fromZoomIn:scaleInFn,fromZoomOutVer:scaleInFn,fromZoomOutHor:scaleInFn,fromZoomOut:scaleInFn,toZoomInVer:({s:A})=>({scale:[A[0],1.5*A[1]]}),toZoomInHor:({s:A})=>({scale:[1.5*A[0],A[1]]}),toZoomIn:({s:A})=>({scale:[1.5*A[0],1.5*A[1]]}),toZoomOutVer:({s:A})=>({scale:[A[0],.5*A[1]]}),toZoomOutHor:({s:A})=>({scale:[.5*A[0],A[1]]}),toZoomOut:({s:A})=>({scale:[.5*A[0],.5*A[1]]})},DEFAULTFADELIST={fadeOut:A=>({opacity:0}),fadeIn:A=>({opacity:A.style.opacity||1})},ANIMATELIST={...DEFAULTLIST,...DEFAULTFLYLIST,...DEFAULTSCALELIST,...DEFAULTFADELIST};class SceneTransition{constructor(){this.param={},this.typeCache=null,this.defaultTypes=Object.keys(DEFAULTLIST).concat(Object.keys(DEFAULTFLYLIST)).concat(Object.keys(DEFAULTSCALELIST)).concat(Object.keys(DEFAULTFADELIST));}animator(A){return this._dealAnimation(A),{...A,animation:this.param,typeCache:this.typeCache}}registAnimation({name:A,animation:e}){return this._isDefaultType(A)||["fadeIn","fadeOut"].includes(A)?(log.warn(`Warn Animation: custom type '${A}' can not be one of ${this.defaultTypes},fadeIn,fadeOut`),!1):(isType$1(A,"String")&&isType$1(e,"Function")&&(ANIMATELIST[A]=e),!0)}_getTranslate(A,e){var t,i;return checkRegExp("^toFly.*$",e)?this._getFlyToExecution(A,e):checkRegExp("^(fromZoom)|(toZoom).*$",e)?this._getZoomExecution(A,e):checkRegExp("^fade.*$",e)?this._getFadeExecution(A,e):(t=A.el.getBoundingClientRect(),i=A.root.canvas.el.getBoundingClientRect(),A=A.root.canvas.getZoom(!0),ANIMATELIST[e]({t:t,c:i,r:A}))}_getFlyToExecution(A,e){var t=A.bound,A=A.root.canvas.getZoom(!0);return ANIMATELIST[e]({b:t,r:A})}_getZoomExecution(A,e){A=A.style.scale||[1,1];return ANIMATELIST[e]({s:A})}_getFadeExecution(A,e){return ANIMATELIST[e](A)}_dealAnimation(e){var{target:A,animation:t}=e;if(isType$1(t,"Array"))return t.map(A=>{this._dealAnimation({...e,animation:A});}),!0;if(isType$1(t,"Object")&&(this._isDefaultType(t.type)?this.param={...this.param,...t.animation}:this.param={...this.param,...t}),this._isDefaultType(t))return this.param={...this.param,...this._getTranslate(A,t)},this.typeCache=t,!0;if(Object.keys(ANIMATELIST).includes(t)){try{isType$1(ANIMATELIST[t](A),"Object")&&(this.param={...this.param,...ANIMATELIST[t](A)});}catch(A){log.error(A);}return !0}return isType$1(t,"String")&&!Object.keys(ANIMATELIST).includes(t)&&log.warn(`Warn Animation: '${t}' type has not been registered`),{}}_isDefaultType(A){return this.defaultTypes.includes(A)}}class Tick{constructor(A){this.typeCache=A.typeCache,this.type=A.type,this.value=A.endValue,this.target=A.target,this.callback=A.callback,this.duration=A.duration||0,this.delay=A.delay||0,this.infinite=A.infinite||!1,this.easingType=A.easing||"linear",this.animation=A.animation,this.startTime=0,this.endTime=0,this.doneTime=0,this.doingTime=0,this.startValue=null,this.currentValue=null,this.endValue=null,this.isResume=!1,this.stopped=!1,this.ended=!1,this.record={delay:this.delay},this.easing={linear:(A,e,t,i)=>t*(A/i)+e,easeOut:(A,e,t,i)=>{return -t*(Math.pow(A/i-1,4)-1)+e}},this.defaultValue={translate:[0,0],scale:[1,1],skew:[0,0],opacity:1,rotate:0,rotateX:0,rotateY:0,rotateZ:0};}init(){if(!this.stopped){this.startTime=this.startTime||this._getNow();var A=this._getNow();if(A===this.startTime&&this._before(),this._getNow()-this.startTime<this.delay)return !0;if(!((this.endTime||this.startTime+this.duration+this.delay)<A))return this._run(),!0;this.ended=!0,this._after(),this.infinite&&(this.startTime=0,this.endTime=0,this.delay=this.record.delay,this.isResume=!1),this.callback&&isType$1(this.callback,"Function")&&this.callback(this.target);}return !1}pause(){this.stopped=!0,this.doneTime=this._getNow()-this.startTime-this.delay;}resume(){return !(!this.stopped||(this.isResume=!0,this.record.delay=this.delay,this.delay=0,this.startTime=this._getNow(),this.endTime=this.duration-this.doneTime+this._getNow(),this.stopped=!1))}_before(){this.target.setVisible(!0);var A=this.typeCache;A&&(checkRegExp("^toZoom.*$",A)?this.target.style.transformOrigin="top left":checkRegExp("^(from)|(fadeIn).*$",A)&&("translate"===this.type&&(this._setFromFlyValue(),A=this._getValue(this.type),this.target.style.translate=[-this.value[0]+A[0],-this.value[1]+A[1]]),"scale"===this.type&&this._setFromZoomValue(),"opacity"===this.type)&&(this.target.style.opacity=0));}_after(A=!1){this.target.style[this.type]=this.endValue;var e=this.typeCache;e&&(checkRegExp("^fromZoom.*$",e)?this.target.style.transformOrigin="":checkRegExp("^(to)|(fadeOut).*$",e)&&(A||this.target.setVisible(!1),"translate"===this.type&&(this.target.style.translate=this.startValue),"opacity"===this.type&&(this.target.style.opacity=this.startValue),"scale"===this.type)&&(this.target.style.scale=this.startValue,this.target.style.transformOrigin=""));}_run(){if(!this.target)return !1;this.startValue=this.startValue||this._getValue(this.type),this.endValue=this.endValue||this._getEndValue(this.value);var A=this._getNow();return this.isResume?this.doingTime=A-this.startTime+this.doneTime:this.doingTime=A-this.startTime-this.delay,this.currentValue=isType$1(this.endValue,"Array")?this.endValue.map((A,e)=>this.easing[this.easingType](this.doingTime,this.startValue[e],A-this.startValue[e],this.duration)):this.easing[this.easingType](this.doingTime,this.startValue,this.endValue-this.startValue,this.duration),this.target.style[this.type]=this.currentValue,!0}_getValue(A){var e=this.target.style[this.type];return isDef(e)?e:this.defaultValue[A]}_getEndValue(A){var e={"[object Array]":A,"[object String]":[Number(A),Number(A)],"[object Number]":[A,A]};let t=A;return ["translate","scale","skew"].includes(this.type)&&(t=e[Object.prototype.toString.call(A)]),t="translate"===this.type?t.map((A,e)=>A+this.startValue[e]):t}_getNow(){return Date.now()}_setFromFlyValue(){if(checkRegExp("^fromFly.*$",this.typeCache)){var A=this.target.style.width,e=this.target.style.height;switch(this.typeCache){case"fromFlyTop":this.value=[0,e];break;case"fromFlyBottom":this.value=[0,-e];break;case"fromFlyLeft":this.value=[A,0];break;case"fromFlyRight":this.value=[-A,0];}}}_setFromZoomValue(){var e=this.typeCache;if(checkRegExp("^fromZoom.*$",e)){var t=this._getValue(this.type);let A=[];switch(e){case"fromZoomInVer":A=[1,.5];break;case"fromZoomInHor":A=[.5,1];break;case"fromZoomIn":A=[.5,.5];break;case"fromZoomOutVer":A=[1,1.5];break;case"fromZoomOutHor":A=[1.5,1];break;case"fromZoomOut":A=[1.5,1.5];}this.target.style.transformOrigin="top left",this.target.style.scale=[A[0]*t[0],A[1]*t[1]];}}}class Animator{constructor(A,e){this.opts=A,this.target=e,this.tweens=[],this.init();}init(){isType$1(this.opts,"Array")?this.opts.forEach(A=>{this._dealTarget(A);}):this._dealTarget(this.opts);}_dealTarget(e){let A=e["target"];isUnDef(A)&&(A=this.target,e[A]=this.target),confirmArr(A)?A.forEach(A=>{this._dealGroup(A,e);}):this._dealGroup(A,e);}_dealGroup(A,e){checkLayoutType(A,LAYOUT_MAP.GROUP)?A.containers.forEach(A=>{this._dealAnimation({...e,target:A});}):this._dealAnimation({...e,target:A});}_dealAnimation(A){var e=A["animation"];isType$1(e,"Object")?this._createTick(A):this._createTick((new SceneTransition).animator(A));}_createTick(t){const i=Object.keys(t.animation);i.forEach((A,e)=>{this.tweens=[...this.tweens,new Tick({...t,type:A,endValue:t.animation[A],callback:e===i.length-1?t.callback:null})];});}}class AnimatorManager{constructor(A,e){this.sequence=e||new Sequence,this._running=A||!1,this._tier=1,this._instance=null,this._callbacks=[];}run(A,e,t){return this.sequence.addTicks(new Animator(A,t).tweens,this._tier,e),this._startLoop(),this.initRunner(),this._instance}initRunner(){this._instance=new AnimatorManager(this._running,this.sequence),this._instance._tier=this._tier+1,this._instance._callbacks=this._callbacks;}end(){this._running&&(this._running=!1,this._callbacks=[],this.sequence.endAnimation());}pause(){isUnDef(this.ticks)||(this._running=!1,this.ticks.forEach(A=>A.pause()));}resume(){isUnDef(this.ticks)||(this.ticks.forEach(A=>A.resume()),this._startLoop());}getCallback(){return this.sequence.totalCallbacks}register({name:A,animation:e}){(new SceneTransition).registAnimation({name:A,animation:e});}_startLoop(){if(this._running)return !1;const e=this;return e._running=!0,window.requestAnimationFrame(function A(){e._running&&(window.requestAnimationFrame(A),e._flush());}),!0}_flush(){const s=this.sequence.callbacks;if(this.ticks=this.sequence.getCurrentTicks(),this.ticks.forEach((t,i)=>{t&&t.forEach((A,e)=>{!isDef(A)||A.init()||A.infinite||(this.sequence._recordRanTick(A),t.splice(e,1,null)),t.every(A=>isUnDef(A))&&(s[i]&&isType$1(s[i],"Function")&&s[i](),s[i]=null);});}),this.sequence.isFinish()){this._running=!1;var e=this._callbacks.length;for(let A=0;A<e;A++){var[t,,]=this._callbacks.shift();isType$1(t,"Function")&&t();}}}_registerCallback(A,e){isType$1(A,"Function")&&this._callbacks.push([A.bind(A=e||this),A]);}_destroyCallback(){this._callbacks=[];}_end(e){this._running&&(this._callbacks.length&&(this._callbacks=this._callbacks.filter(([,A])=>A&&A.id!==e.id)),this.sequence._endAnimation(e));}}var version$1="0.1.98";class Align{constructor(){}top(A){A=this._getEls(A);var e=this._getBoundaryVal("top",A);isType$1(e,"Null")||this._render("top",A,e);}bottom(A){A=this._getEls(A);var e=this._getBoundaryVal("bottom",A);isType$1(e,"Null")||this._render("bottom",A,e);}left(A){A=this._getEls(A);var e=this._getBoundaryVal("left",A);isType$1(e,"Null")||this._render("left",A,e);}right(A){A=this._getEls(A);var e=this._getBoundaryVal("right",A);isType$1(e,"Null")||this._render("right",A,e);}horizal(A){A=this._getEls(A);var e=this._getBoundaryVal("horizal",A);isType$1(e,"Null")||this._render("horizal",A,e);}vertical(A){A=this._getEls(A);var e=this._getBoundaryVal("vertical",A);isType$1(e,"Null")||this._render("vertical",A,e);}_render(i,A,s){A.forEach(A=>{var e,t=A.bound.plainReal()[i];if(!t||t-s)switch(i){case"top":A.move(0,s-t);break;case"left":A.move(s-t,0);break;case"bottom":A.move(0,s-t);break;case"right":A.move(s-t,0);break;case"vertical":checkLayoutType(A,[LAYOUT_MAP.GROUP])?(e=this._getBoundaryVal("vertical",[A]),A.move(0,s-e)):A.move(0,s-A.height/2-A.bound.plainReal().top);break;case"horizal":checkLayoutType(A,[LAYOUT_MAP.GROUP])?(e=this._getBoundaryVal("horizal",[A]),A.move(s-e,0)):A.move(s-A.width/2-A.bound.plainReal().left,0);}});}_getBoundaryVal(i,A){var e=A.reduce((A,e)=>{var t=e.bound.plainReal();switch(i){case"vertical":A[0].push(t.top),A[1].push(t.bottom);break;case"horizal":A[0].push(t.left),A[1].push(t.right);break;default:A.push(t[i]);}return A},"vertical"===i||"horizal"===i?[[],[]]:[]);if("vertical"===i||"horizal"===i){if(!e[0].length||!e[1].length)return null}else if(!e.length)return null;switch(i){case"top":case"left":return Math.min(...e);case"bottom":case"right":return Math.max(...e);case"vertical":case"horizal":return (Math.min(...e[0])+Math.max(...e[1]))/2;default:return null}}_getEls(A){return A||selector.getSelectElements()}}var align=new Align;const{DOWN,MOVE,UP}=EVENT_KEY,{CANDOWN:CANDOWN$2,CANMOVE:CANMOVE$2,CANUP:CANUP$2,ISSTOP:ISSTOP$1,ISPREVENT}=EVENT_CHECK,TYPE_CHECK={[DOWN]:CANDOWN$2,[MOVE]:CANMOVE$2,[UP]:CANUP$2};class MoveManager{constructor(){this.moveItem=null,this.mouseDownHandle=mouseDownEvent.bind(this),this.mouseMoveHandle=mouseMoveEvent.bind(this),this.mouseUpHandle=mouseUpEvent.bind(this),this.mapFns=new Map,this.mapChecks=new Map,this.buttons=0,this.initEvent();}initEvent(){document.addEventListener("mousemove",this.mouseMoveHandle),document.addEventListener("mouseup",this.mouseUpHandle);}add(A,e={},t=this){var i;A&&({down:t,move:e,up:i}=(this.had(A,"Fns")||(this.mapFns.set(A,{self:A,ctx:t,down:[],move:[],up:[]}),this.addEvent(A)),e),t&&this.mapFns.get(A).down.push(t),e&&this.mapFns.get(A).move.push(e),i)&&this.mapFns.get(A).up.push(i);}addEventChecks(A,e={}){var t;A&&!this.had(A,"Checks")&&(t={self:A,[ISSTOP$1]:null,[CANDOWN$2]:null,[CANMOVE$2]:null,[CANUP$2]:null},this.mapChecks.set(A,t),this.mapChecks.get(A)[ISSTOP$1]=e[ISSTOP$1],this.mapChecks.get(A)[CANDOWN$2]=e[CANDOWN$2],this.mapChecks.get(A)[CANMOVE$2]=e[CANMOVE$2],this.mapChecks.get(A)[CANUP$2]=e[CANUP$2]);}addEvent(A){A.addEventListener("mousedown",this.mouseDownHandle);}remove(A){A&&this.mapFns.get(A)&&(this.destroyEvent(A),this.mapFns.delete(A),this.mapChecks.delete(A));}destroyEvent(A){A&&A.removeEventListener("mousedown",this.mouseDownHandle);}destroy(){this.mapFns.forEach(A=>{this.destroyEvent(A.self);}),document.removeEventListener("mousemove",this.mouseMoveHandle),document.removeEventListener("mouseup",this.mouseUpHandle),this.mapFns.clear(),this.mapChecks.clear(),this.moveItem=null;}had(A,e){return !!this["map"+e].get(A)}getHandles(A){return Object.assign({},this.mapFns.get(A),this.mapChecks.get(A))}execute(e,A){const t=this.moveItem;if(t){var{stopProp:i,preventDeft:s}=this.getPropDeft(t,e);if(i&&e.stopPropagation(),s&&e.preventDefault(),!t[TYPE_CHECK[A]]||t[TYPE_CHECK[A]](e)){const n=getMouseBtnType(this.buttons);if(i=t[A])try{isType$1(i,"Function")?i(e):isType$1(i,"Array")?i.forEach(A=>{isType$1(A,"Function")&&A(e),isType$1(A,"Object")&&(isType$1(A[n],"Function")&&A[n].call(t.context,e),isType$1(A.default,"Function"))&&A.default.call(t.context,e);}):isType$1(i,"Object")&&(isType$1(i[n],"Function")&&i[n].call(t.context,e),isType$1(i.default,"Function"))&&i.default.call(t.context,e);}catch(A){log.error(A);}}}}getPropDeft(A,e){var t=A[ISSTOP$1];let i,s;i=isType$1(t,"Boolean")?t:!isType$1(t,"Function")||t(e);t=A[ISPREVENT];return s=isType$1(t,"Boolean")?t:!!isType$1(t,"Function")&&t(e),{stopProp:i,preventDeft:s}}}var moveManager=new MoveManager;function mouseDownEvent(A){this.moveItem=this.getHandles(A.currentTarget),this.buttons=A.buttons,this.execute(A,DOWN);}function mouseMoveEvent(A){this.execute(A,MOVE);}function mouseUpEvent(A){this.execute(A,UP),this.moveItem=null,this.buttons=0;}class ElementRotate{constructor(A,e){this.instance=A,this.mouseRoate=e;}elementRotate(){var A=this.instance.bound.record["angle"];let e=A+this.mouseRoate;180<e&&(e-=360),e<-180&&(e=360+e),this.instance.setBound({angle:e});}}const{ISSTOP,CANDOWN:CANDOWN$1,CANMOVE:CANMOVE$1,CANUP:CANUP$1}=EVENT_CHECK;class BaseGraph{constructor(){this.elements=null;}getMoveType(A){return this.elements=this._checkBeforeMove(A),isUnDef(this.elements)?"regionSelect":"move"}checkBeforeMove(){var A=selector.getLayers(),A=A.length?A:selector.getContainers();return !A.length||checkLock(A)?null:A}addEventChecks(A){moveManager.addEventChecks(A.el,this.checkBeforeDoEvent(A));}checkBeforeDoEvent(e){return {[CANDOWN$1]:A=>this.canDown(e,A),[CANMOVE$1]:A=>this.canMove(e,A),[CANUP$1]:A=>this.needUp(e),[ISSTOP]:A=>this.checkPropagation(A,e)}}reset(){this.elements=null;}remove(A){moveManager.remove(A.el);}checkPropagation(A,e){return !checkMouseBtnType(A,"right")||this.ui.rightMoveCanvasLock.defaultCtLock&&checkLayoutType(e,LAYOUT_MAP.DEFAULTCONTAINER)||e.previewModeState}canDown(A,e){return A.eventActive&&checkMouseBtnType(e,"left")&&!this.isInEditing(A)}canMove(A,e){return this.canDown(A,e)}needUp(A){return A.eventActive&&!this.isInEditing(A)}isInEditing(A){return textEditor.isInEdit&&textEditor.target&&textEditor.target.id===A.id}_checkBeforeMove(A){return !0===A.shiftKey?(selector.clear(),null):this.checkBeforeMove()}}class Rotator extends BaseGraph{constructor(){super(),this.tag=!1,this.pointA=null,this.pointB={x:0,y:0},this.pointC={x:0,y:0},this.allAngle=0;}init({ui:A}){this.ui=A,this.rotateModule=new ElementRotate;}addEventHandle(A){this.initRotateEvent(A);}initRotateEvent(e){e.el.firstElementChild&&moveManager.add(e.el.firstElementChild,{down:A=>{this.initDownRotate(A),this.handler=e,recordBound(selector.getSelectElements());},move:A=>{this.rotateEvent(A);},up:A=>{this.upEvent(A);}});}initDownRotate(A){var e=selector.getContainers(),e=(this.pointA=e.map(A=>{var{width:e,height:t,left:i,top:s}=A.bound.plainReal();return {id:A.id,x:i+e/2,y:s+t/2}}),this.ui.canvas.getZoom()),{top:t,left:i}=this.ui.canvas.el.getBoundingClientRect();this.pointB.x=(A.clientX-i)/e,this.pointB.y=(A.clientY-t)/e;}rotateEvent(A){var e,t,i,s=this.checkBeforeMove();null===s?this.reset():A&&(A.preventDefault(),A.stopPropagation(),e=this.ui.canvas.getZoom(),{top:t,left:i}=this.ui.canvas.el.getBoundingClientRect(),this.pointC.x=(A.clientX-i)/e,this.pointC.y=(A.clientY-t)/e,this.tag=!0,this.rotate(s),this.ui.emit("graphRotating"));}rotate(A){A.forEach(A=>this._rotate(A));}_rotate(e){var A,t={},i={},s=this.pointA.find(A=>A.id===e.id);s&&(t.X=this.pointB.x-s.x,t.Y=this.pointB.y-s.y,i.X=this.pointC.x-s.x,i.Y=this.pointC.y-s.y,t=t.X*i.Y-t.Y*i.X,i=Math.sqrt(Math.pow(s.x-this.pointB.x,2)+Math.pow(s.y-this.pointB.y,2)),s=Math.sqrt(Math.pow(s.x-this.pointC.x,2)+Math.pow(s.y-this.pointC.y,2)),A=Math.sqrt(Math.pow(this.pointB.x-this.pointC.x,2)+Math.pow(this.pointB.y-this.pointC.y,2)),A=(Math.pow(i,2)+Math.pow(s,2)-Math.pow(A,2))/(2*i*s),i=Math.round(180*Math.acos(A)/Math.PI),this.allAngle=t<0?-i:i,this.rotateModule.instance=e,this.rotateModule.mouseRoate=this.allAngle,this.rotateModule.elementRotate());}upEvent(){this.tag?this.ui.emit("graphRotateEnd",selector.getSelectElements()):this.reset();}reset(){this.tag=!1,this.pointA=null,this.pointB.x=0,this.pointB.y=0,this.pointC.x=0,this.pointC.y=0,this.allAngle=0;}handleRotateAxis(A){var{width:e,height:t}=A.bound,A=A.bound.record["angle"],A=this.allAngle+A;return this._handleRotateAxis([{index:7,x:e/2,y:-t/2},{index:6,x:-e/2,y:-t/2},{index:5,x:e/2,y:t/2},{index:4,x:-e/2,y:t/2},{index:3,x:e/2,y:0},{index:2,x:-e/2,y:0},{index:1,x:0,y:-t/2},{index:0,x:0,y:t/2}],A)}_handleRotateAxis(A,t){return A.map(A=>{var e={index:A.index};return e.x=A.x*Math.cos(-t*Math.PI/180)-A.y*Math.sin(-t*Math.PI/180),e.y=A.x*Math.sin(-t*Math.PI/180)+A.y*Math.cos(-t*Math.PI/180),e})}}var rotator=new Rotator;class Scale{constructor(A){this.instance=A,this.boundInfo={},this.resInfo=null;}resizeHandler(){checkLayoutType(this.instance,LAYOUT_MAP.CONTAINER)?this.doResize():checkLayoutType(this.instance,LAYOUT_MAP.LAYER)&&(this.doResize(),this.instance.getContainers().forEach(A=>{this.doResize(A);}));}doResize(A){var A=A||this.instance,{width:e,height:t}=A.bound.plainReal(),{width:e=e,height:t=t}=this.resInfo,{mathHeight:i,mathWidth:s,mathTop:n,mathLeft:r}=this.calculateSizePosition();!A.isLock&&0<e&&0<t&&A.setBound({height:i,width:s,top:n,left:r});}calculateSizePosition(){var{height:A,width:e}=this.boundInfo.rootBound,{width:t,height:i,x:s,y:n}=this.resInfo,i=i/A,A=t/e,{relativeTop:t,offsetTop:e,relativeLeft:r,offsetLeft:o}=this.boundInfo.ctBound,a=this.instance.bound.record;return {mathHeight:Math.floor(a.height*i),mathWidth:Math.floor(a.width*A),mathTop:Math.floor(t*i+n-e),mathLeft:Math.floor(r*A+s-o)}}}class Bound{constructor(){this.rootBound=null,this.ctsBound=new Map;}init(A){this.ui=A;}initBoundInfo(A){if(A){const{top:n,left:r}=this.rootBound=this.ui.getBoundRect();A.forEach(A=>{var{top:e,left:t}=A.bound.plainReal(),{top:i,left:s}=A.bound.offset;this.ctsBound.set(A.id,{relativeTop:e-n,relativeLeft:t-r,offsetTop:i,offsetLeft:s});});}}upEvent(){this.rootBound=null,this.ctsBound=new Map;}}var bound=new Bound;const INDEX={TOP:0,BOTTOM:1,LEFT:2,RIGHT:3};class Resizer extends BaseGraph{constructor(){super(),this.clickPoint=null,this.symmetricPoint=null,this.centerPosition=null,this.handler=null,this.elements=null,this.angle=0,this.mouseMoveInfo={x:0,y:0},this._mouseMoveInfo={x:0,y:0},this.x=0,this.y=0,this.offset={x:0,y:0},this.handler=null,this.sizePositionInfo=null,this.canMoveX=!0,this.canMoveY=!0;}init({ui:A}){this.ui=A,this.scaleModule=new Scale,bound.init(A);}addEventHandle(A){this.initResizeEvent(A);}initResizeEvent(e){moveManager.add(e.el,{down:A=>{this.doDown(A,e);},move:A=>{this.doMove(A);},up:A=>{this.upEvent(A);}});}doDown(A,e){A.stopPropagation(),this.x=A.clientX,this.y=A.clientY,this.handler=e,recordBound(selector.getSelectElements());var t,i,s,A=this.elements=this.checkBeforeMove();isUnDef(A)?this.reset():(bound.initBoundInfo(A),{top:e,left:A,width:t,height:i,angle:s}=bound.rootBound,this.angle=s,s=this.centerPosition={x:A+t/2,y:e+i/2},this.clickPoint=this.getClickPoint(s),this.symmetricPoint={x:s.x-(this.clickPoint.x-s.x),y:s.y-(this.clickPoint.y-s.y)});}doMove(A){var e,t=this.elements;isUnDef(t)?this.reset():(this.ui.emit("graphResizeStart",{elements:t}),A&&(A.preventDefault(),A.stopPropagation(),e=this.ui.canvas.getZoom(),this._mouseMoveInfo.y+=(A.clientY-this.y)/e,this._mouseMoveInfo.x+=(A.clientX-this.x)/e,this.canMoveX&&(this.mouseMoveInfo.x=this._mouseMoveInfo.x),this.canMoveY&&(this.mouseMoveInfo.y=this._mouseMoveInfo.y),this.x=A.clientX,this.y=A.clientY),e=this.getRelativePosition(this.x,this.y),A||(e.x+=this.offset.x,e.y+=this.offset.y),this.sizePositionInfo=this.calculateSizeAndPos(this.angle,e,{symmetricPoint:this.symmetricPoint}),this.resize(t,this.sizePositionInfo),this.ui.emit("graphResizing",{event:A,elements:t,handler:this.handler}));}resize(A,e){if(e){const t=this.handler.index;A.forEach(A=>this._scale(A,t,e));}}upEvent(){this.ui.emit("graphResizeEnd"),bound.upEvent(),this.reset();}_scale(A,e,t){this.scaleModule.instance=A,this.scaleModule.index=e,this.scaleModule.boundInfo.rootBound=bound.rootBound,this.scaleModule.boundInfo.ctBound=bound.ctsBound.get(A.id),this.scaleModule.resInfo=t,this.scaleModule.resizeHandler();}reset(){super.reset(),this.clickPoint=null,this.symmetricPoint=null,this.centerPosition=null,this.handler=null,this.elements=null,this.angle=0,this.mouseMoveInfo.x=0,this.mouseMoveInfo.y=0,this._mouseMoveInfo.x=0,this._mouseMoveInfo.y=0,this.x=0,this.y=0,this.sizePositionInfo=null;}getClickPoint(A){var{top:e,left:t,width:i,height:s,angle:n}=bound.rootBound;let r;switch(this.handler.index){case 0:r={x:t+i/2,y:e};break;case 1:r={x:t+i/2,y:e+s};break;case 2:r={x:t,y:e+s/2};break;case 3:r={x:t+i,y:e+s/2};break;case 4:r={x:t,y:e};break;case 5:r={x:t+i,y:e};break;case 6:r={x:t,y:e+s};break;case 7:r={x:t+i,y:e+s};}return r=n?this.calculateRotatedPointCoordinate(r,A,n):r}getRelativePosition(A,e){var t=this.ui.canvas.getZoom(),{top:i,left:s}=this.ui.canvas.el.getBoundingClientRect();return {x:(A-s)/t,y:(e-i)/t}}calculateAxisRotatedPoint(A,e){e=this.angleToRadian(e);return {x:A.x*Math.cos(e)-A.y*Math.sin(e),y:A.y*Math.cos(e)+A.x*Math.sin(e)}}restAxisPoint(A,e){A=this.calculateAxisRotatedPoint(A,-e);return {x:this.centerPosition.x+A.x,y:this.centerPosition.y-A.y}}calculateRotatedPointCoordinate(A,e,t){t=this.angleToRadian(t);return {x:(A.x-e.x)*Math.cos(t)-(A.y-e.y)*Math.sin(t)+e.x,y:(A.x-e.x)*Math.sin(t)+(A.y-e.y)*Math.cos(t)+e.y}}angleToRadian(A){return A*Math.PI/180}calculateSizeAndPos(A,e,t){var t=t["symmetricPoint"],i=this.getCenterPoint(e,t),s=this.calculateRotatedPointCoordinate(t,i,-A),n=this.handler.index;if(Object.values(INDEX).includes(n)){const t={curPositon:e,newSymmetricPoint:s};n=this.calculatePoint(t,A,n);if(n)return n}else {t=this.calculateRotatedPointCoordinate(e,i,-A),n=Math.abs(t.x-s.x),e=Math.abs(s.y-t.y);if(0<n&&0<e)return {width:n,height:e,x:Math.min(t.x,s.x),y:Math.min(t.y,s.y)}}return null}getCenterPoint(A,e){return {x:A.x+(e.x-A.x)/2,y:A.y+(e.y-A.y)/2}}calculatePoint(A,e,t){switch(t){case INDEX.TOP:case INDEX.BOTTOM:return this.calculateYPoint(A,e,t);case INDEX.RIGHT:case INDEX.LEFT:return this.calculateXPoint(A,e,t)}}calculateYPoint(A,e,t){var{curPositon:A,newSymmetricPoint:i}=A,{width:s,height:n}=bound.rootBound,A={x:A.x-this.centerPosition.x,y:this.centerPosition.y-A.y},A={x:0,y:this.calculateAxisRotatedPoint(A,e).y};let r,o;if(t===INDEX.TOP){if(r={x:0,y:-n/2},A.y<=r.y)return null;o=A.y+n/2;}else if(t===INDEX.BOTTOM){if(r={x:0,y:n/2},A.y>=r.y)return null;o=n/2-A.y;}var n=this.getCenterPoint(A,r),A=this.restAxisPoint(A,e),n=this.restAxisPoint(n,e),a=this.calculateRotatedPointCoordinate(A,n,-e);let l;switch(t){case INDEX.TOP:l=Math.min(a.y,i.y);break;case INDEX.BOTTOM:l=a.y-o;}return {width:s,height:o,x:a.x-s/2,y:l}}calculateXPoint(A,e,t){var{curPositon:A,newSymmetricPoint:i}=A,{width:s,height:n}=bound.rootBound,A={x:A.x-this.centerPosition.x,y:this.centerPosition.y-A.y},A={x:this.calculateAxisRotatedPoint(A,e).x,y:0};let r,o;if(t===INDEX.RIGHT){if(r={x:-s/2,y:0},A.x<=r.x)return null;o=A.x+s/2;}else if(t===INDEX.LEFT){if(r={x:s/2,y:0},A.x>=r.x)return null;o=s/2-A.x;}var s=this.getCenterPoint(A,r),A=this.restAxisPoint(A,e),s=this.restAxisPoint(s,e),a=this.calculateRotatedPointCoordinate(A,s,-e);let l;switch(t){case INDEX.RIGHT:l=a.x-o;break;case INDEX.LEFT:l=Math.min(a.x,i.x);}return {width:o,height:n,x:l,y:a.y-n/2}}}var resizer=new Resizer;class CalculateSelect{constructor(){this.context=null,this.boxHeight=0,this.boxWidth=0,this.boxLeft=0,this.boxTop=0;}setInfo(A){var{context:A,width:e,height:t,top:i,left:s}=A;this.context=A,this.boxHeight=t,this.boxWidth=e,this.boxLeft=s,this.boxTop=i;}calculateSelect(A,o,a){A.forEach(A=>{var{left:e,top:t,width:i,height:s}=A.bound.plainReal(),n=Math.max(e+i,this.boxLeft+this.boxWidth),e=Math.min(e,this.boxLeft),r=Math.max(t+s,this.boxTop+this.boxHeight),t=Math.min(t,this.boxTop);n-e<=i+this.boxWidth&&r-t<=s+this.boxHeight?isType$1(o,"Function")&&o.call(this.context||this,A):isType$1(a,"Function")&&a.call(this.context||this,A);});}reset(){this.context=null,this.boxHeight=0,this.boxWidth=0,this.boxLeft=0,this.boxTop=0;}}class RegionSelector extends BaseGraph{constructor(){super(),this.tag=!1,this.box=null,this.x=0,this.y=0,this.start_left=0,this.start_top=0,this.moveInfo={x:0,y:0},this.can=!1,this.realEls=[],this.preselectEls=[],this.after=!0,this.moveType=null;}init({ui:A,canvas:e}){this.ui=A,this.canvas=e,this.initBox(),this.cs=new CalculateSelect;}addEventHandle(A){this.initRegionSelectEvent(A);}initRegionSelectEvent(e){moveManager.add(e.el,{down:A=>{this.beforeRegionSelect(A);},move:A=>{this.moveType||(this.moveType=this.getMoveType(A)),"regionSelect"===this.moveType&&this.regionSelect(e,A);},up:A=>{this.upEvent(A);}});}checkBeforeRegionSelect(A){return !(!A||A.previewModeState||this.ui.insidePreview||this.ui.regionSelectLock||this.ui.tempRegionSelectLock)}initBox(){var A=createElement();A.dataset.id="regionSelector",A.style.display="none",A.style.zIndex=999,A.style.width="0px",A.style.height="0px",A.style.position="absolute",A.style.top=0,A.style.left=0,A.style.backgroundColor="rgb(0, 122, 255, 0.1)",this.box=A,this.canvas.el.appendChild(this.box);}getCanvasBound(){var{left:A,top:e}=this.canvas.el.getBoundingClientRect();return {left:A,top:e}}beforeRegionSelect(A){var e=this.ui,t=e.layers.find(A=>A.id===selector.selectLayerId),i=t?t.containers:null,t=t?t.groups:null,A=(this.initDownpoints(A),i||e.containers);this.can=!0,!A.length||checkLock(A)?this.can=!1:(i=t||e.groups,this.realEls=A.filter(A=>!checkLayoutType(A.parent,LAYOUT_MAP.GROUP)).concat(i.filter(A=>!checkLayoutType(A.parent,LAYOUT_MAP.GROUP))));}initDownpoints(A){var e=this.canvas.getZoom(),{left:t,top:i}=(this.x=A.clientX,this.y=A.clientY,this.getCanvasBound());this.start_top=(A.clientY-i)/e,this.start_left=(A.clientX-t)/e;}regionSelect(A,e){var t,i,s,n,r;e&&this.can&&((checkLayoutType(A,LAYOUT_MAP.LAYER)||A.isLock)&&A.unselect(),e.preventDefault(),e.stopPropagation(),this.after&&this.ui.emit("graphRegionSelectStart"),this.after=!1,this.box.style.border||(this.box.style.border="2px solid rgb(0, 122, 255)"),"block"!==this.box.style.display&&(this.box.style.display="block"),A=e.clientX,e=e.clientY,r=this.canvas.getZoom(),this.moveInfo.y+=(e-this.y)/r,this.moveInfo.x+=(A-this.x)/r,t=Math.abs(this.moveInfo.y),i=Math.abs(this.moveInfo.x),{left:s,top:n}=(this.box.style.height=t+"px",this.box.style.width=i+"px",this.getCanvasBound()),s=(A-s)/r,n=Math.min((e-n)/r,this.start_top),r=Math.min(s,this.start_left),this.box.style.top=n+"px",this.box.style.left=r+"px",this.tag=!0,this.can&&(this.cs.setInfo({context:this,width:i,height:t,top:n,left:r}),this.cs.calculateSelect(this.realEls,this.preselect,this.unpreselect)),this.x=A,this.y=e,this.ui.emit("graphRegionSelecting"));}upEvent(){this.tag&&(this.select(),this.ui.emit("graphRegionSelectEnd",selector.getSelectElements()),this.box.style.display="none",this.box.style.width="0px",this.box.style.height="0px",this.box.style.top=0,this.box.style.left=0,this.box.style.border="",selector.disableMultSelect()),this.reset();}preselect(A){selector.enableMultSelect(),A.isLock||!A.visible||A.isSelected||this._preselect(A);}unpreselect(A){this._unpreselect(A);}select(){this.preselectEls.length&&this.preselectEls.forEach(A=>{selector.select(A);});}handlePreselect(){var A=this.canvas.operation,e=A.boundRectUnion(this.preselectEls),t=A.selectType(),i=this.canvas.getZoom();A.showRect(e,i,t,!0),A.hideSubRect(),A.showResize(e,i,t,{showRotateTag:!1,showResizeTag:!0,preselectionTag:!0});}showSelectRect(){this.canvas.showSelectRect(this.preselectEls);}hiddenSelectRect(A){this.canvas.hiddenSelectRect(A);}canDown(A,e){return super.canDown(A,e)&&this.checkBeforeRegionSelect(A)}canMove(A,e){return this.canDown(A,e)}reset(){super.reset(),this.x=0,this.y=0,this.start_left=0,this.start_top=0,this.moveInfo.x=0,this.moveInfo.y=0,this.cs.reset(),this.preselectEls=[],this.realEls=[],this.after=!0,this.tag=!1,this.moveType=null;}_preselect(A){this.preselectEls.includes(A)||this.preselectEls.push(A),this.handlePreselect(),this.showSelectRect();}_unpreselect(e){var A;this.preselectEls.length?(-1!==(A=this.preselectEls.findIndex(A=>A.id===e.id))&&(this.preselectEls.splice(A,1),this.hiddenSelectRect([e])),this.handlePreselect()):this.canvas.operation.elhidden();}}var regionSelector=new RegionSelector;class ShareData{constructor(){this.x=0,this.y=0;}reset(){this.x=0,this.y=0;}}var shareData=new ShareData;const MOUSETYPE={DOWN:"mousedown",DBLCLICK:"dblclick"},DBLCLICKAREA=4;class SelectDown extends BaseGraph{constructor(){super(),this.target=null,this.timestamp=null,this.timeout=280,this.clickType=null,this.point={x:0,y:0};}init({ui:A}){this.ui=A;}addEventHandle(A){this.initSelectEvent(A);}initSelectEvent(e){moveManager.add(e.el,{down:A=>{this.mousedownEvent(A,e);},up:A=>{this.upEvent(A);}});}executeSelect(A,e){!1===A.shiftKey&&selector.isMultSelect&&selector.disableMultSelect(),this.target=e,this.beforeSelect(A);}getRealSelect(A){return (this.getCtInnerGroup(A))||(!A.isSelected&&checkLayoutType(A.parent,LAYOUT_MAP.GROUP)?this.getRealSelect(A.parent):A)}getDBSelect(A){var e=A.parent;return A.isSelected||!checkLayoutType(e,LAYOUT_MAP.GROUP)||e.isSelected?(e.isSelected&&e.unselect(),A):this.getDBSelect(e)}getPenetrateSelect(A){var e=A.parent;return A.hiddenPreSelector&&A.hiddenPreSelector(),e.isSelected&&e.unselect(),A}select(A){let e=null;(e=A.preSelected?this.getPenetrateSelect(A):this.clickType===MOUSETYPE.DBLCLICK?this.getDBSelect(A):this.getRealSelect(A)).isSelected?selector.isMultSelect&&e.unselect():e.select();}getCtInnerGroup(A){var e,t=this.ui.selector.getSelectElements()[0];return !!isInnerGroup(t,A)&&(e={curTarget:t,nextTarget:A},A.parent.id===t.parent.id||handleInclude(e,"nextParentIncludeCurTarget")?A:!!handleInclude(e,"curParentIncludeNextTarget")&&getRealInnerGroup(A,t.parent))}beforeSelect(A){this.target&&!this.checkMultiMove(A)&&this.select(this.target),shareData.x=A.clientX,shareData.y=A.clientY,recordBound(selector.getSelectElements());}mousedownEvent(A,e){var t,i=new Date;isUnDef(this.timestamp)||i.getTime()-this.timestamp>this.timeout?(this.timestamp=i.getTime(),this.clickType=MOUSETYPE.DOWN,this.executeSelect(A,e),this.setMousePoint(A)):({x:i,y:t}=this.point,Math.abs(i-A.clientX)>DBLCLICKAREA||Math.abs(t-A.clientY)>DBLCLICKAREA?(this.clickType=MOUSETYPE.DOWN,this.executeSelect(A,e)):(this.clickType=MOUSETYPE.DBLCLICK,this.dblclickEvent(A,e)),this.resetMouseDown());}resetMouseDown(){this.timestamp=null,this.point.x=0,this.point.y=0;}setMousePoint(A){this.point.x=A.clientX,this.point.y=A.clientY;}dblclickEvent(A,e){this.indblclick?this.indblclick=!1:e.isSelected&&"dblclick"===A.type?(!selector.isMultSelect&&isMultiSelect()&&(selector.clear(),this.select(e)),e.textEditState&&textEditor.enterTextEdit(e)):!e.isSelected&&checkLayoutType(e.parent,LAYOUT_MAP.GROUP)&&(this.indblclick=!0,this.select(e),this.clickType=null);}checkMultiMove(A){return checkLayoutType(this.target,LAYOUT_MAP.LAYER)?multiSelectMove.checkMove(A):checkLayoutType(this.target,LAYOUT_MAP.CONTAINER)?this.target.isLock&&multiSelectMove.checkMove(A):void 0}upEvent(){this.reset();}canMove(A,e){return this.canDown(A,e)&&this.clickType===MOUSETYPE.DOWN}reset(){shareData.x=0,shareData.y=0,this.target=null;}}var selectDown=new SelectDown;function isInnerGroup(A,e){return A&&!e.isSelected&&checkLayoutType(A.parent,LAYOUT_MAP.GROUP)&&checkLayoutType(e.parent,LAYOUT_MAP.GROUP)}function getRealInnerGroup(A,t){return function A(e){return !!checkLayoutType(e.parent,LAYOUT_MAP.GROUP)&&(e.parent.id===t.id?e:A(e.parent))}(A)}function handleInclude(A,e){var{curTarget:t,nextTarget:i}=A;let s,n;switch(e){case"curParentIncludeNextTarget":s=t,n=i;break;case"nextParentIncludeCurTarget":s=i,n=t;}return s.parent.children.find(A=>A.id===n.parent.id||includeChild(A,n.parent.id))}function includeChild(A,e){let t=!1;return t=checkLayoutType(A,LAYOUT_MAP.GROUP)?!!A.children.find(A=>A.id===e||includeChild(A,e)):t}class MultiSelectMove{constructor(){this.boundRange={},this.moving=!1;}init({canvas:A,operation:e}){this.canvas=A,this.operation=e;}setRange(){var A;this.operation&&(A=this.operation.getSelectBoundRect())&&Object.assign(this.boundRange,A);}initPoint(A){selectDown.executeSelect(A);}move(A){movement.doMove(A);}getMousePoint(A){var e=this.canvas.getZoom(),{left:t,top:i}=this.getCanvasBound(),i=(A.clientY-i)/e;return {x:(A.clientX-t)/e,y:i}}checkMove(A){var e=store$1$1.getSelectCtGroups();if(Object.keys(this.boundRange).length<=0||!e.length)this.reset();else {var{x:e,y:A}=this.getMousePoint(A),{top:t,bottom:i,left:s,right:n}=this.boundRange;if(t<=A&&A<=i&&s<=e&&e<=n)return this.moving=!0;this.moving=!1;}return !1}getCanvasBound(){var{left:A,top:e}=this.canvas.el.getBoundingClientRect();return {left:A,top:e}}reset(){this.boundRange={},this.moving=!1;}upEvent(){this.moving&&movement.upEvent();}}var multiSelectMove=new MultiSelectMove;class Movement extends BaseGraph{constructor(){super(),this.tag=!1,this.mouseMoveInfo={x:0,y:0},this._mouseMoveInfo={x:0,y:0},this.canMoveX=!0,this.canMoveY=!0,this.moveType=null;}init({ui:A}){this.ui=A,this.moveModule=new ElementMove;}addEventHandle(A){this.initMoveEvent(A);}initMoveEvent(A){moveManager.add(A.el,{move:A=>{this.moveType||(this.moveType=this.getMoveType(A)),"move"===this.moveType&&this.doMove(A);},up:A=>{this.upEvent(A);}});}move(A){A.forEach(A=>this._move(A));}moveKeyEvent(A,e,t){var i=this.elements||(this.elements=this.checkBeforeMove());null===i?this.reset():(this.ui.emit("graphMoveStart",{elements:i}),this.tag||(recordBound(selector.getSelectElements()),this.tag=!0),this.mouseMoveInfo.x+=e,this.mouseMoveInfo.y+=t,this.move(i),this.ui.emit("graphMoving",{event:A,elements:i,isKeyMove:!0}));}upEvent(){this.tag&&(multiSelectMove.reset(),this.ui.emit("graphMoveEnd",selector.getSelectElements())),this.reset();}doMove(A){var e,t=this.elements||(this.elements=this.checkBeforeMove());isUnDef(t)?this.reset():(this.ui.emit("graphMoveStart",{elements:t}),A&&(A.preventDefault(),A.stopPropagation(),e=this.ui.canvas.getZoom(),this._mouseMoveInfo.y+=(A.clientY-shareData.y)/e,this._mouseMoveInfo.x+=(A.clientX-shareData.x)/e,this.canMoveX&&(this.mouseMoveInfo.x=this._mouseMoveInfo.x),this.canMoveY&&(this.mouseMoveInfo.y=this._mouseMoveInfo.y),shareData.x=A.clientX,shareData.y=A.clientY),this.tag=!0,this.move(t),this.ui.emit("graphMoving",{event:A,elements:t}));}_move(A){this.moveModule.instance=A,this.moveModule.mouseMoveInfo=this.mouseMoveInfo,this.moveModule.elementMove();}reset(){super.reset(),this.tag=!1,this.moveType=null,this.mouseMoveInfo.x=0,this.mouseMoveInfo.y=0,this._mouseMoveInfo.x=0,this._mouseMoveInfo.y=0;}}var movement=new Movement;class HandlerManager{constructor(){this.rotator=rotator,this.regionSelector=regionSelector,this.movement=movement,this.selectDown=selectDown,this.resizer=resizer;}init(A,e){isType$1(A,"Array")?A.forEach(A=>{this[A].init(e);}):this[A].init(e);}initEvent(A,e){isType$1(A,"Array")?A.forEach(A=>{this[A].addEventChecks(e),this[A].addEventHandle(e);}):(this[A].addEventChecks(e),this[A].addEventHandle(e));}remove(A){moveManager.remove(A.el);}destroy(){moveManager.destroy();}}var handlerManager=new HandlerManager;const{CANDOWN,CANMOVE,CANUP}=EVENT_CHECK;class UIEvent{initUIEvent(){this.on("graphMoveEnd",A=>{commandAPI.drag(A),this.setBoundRange();}).on("graphResizeEnd",A=>{commandAPI.drag(A),this.setBoundRange();}).on("graphRotateEnd",A=>{commandAPI.rotate(A);}).on("select",A=>{this.setBoundRange();}).on("unselect",A=>{textEditor.exitTextEdit(A);}),this.initEventChecks(),this.initMouseEvent(),this._resizeEvent=this.innerResize.bind(this),this._contextmenuEvent=this.contextmenuEvent.bind(this),this._keydownListener=this.keydownEvent.bind(this),this._scrollEvent=this.updateSite.bind(this),window.addEventListener("resize",this._resizeEvent),window.addEventListener("scroll",this._scrollEvent),document.addEventListener("contextmenu",this._contextmenuEvent),document.addEventListener("keydown",this._keydownListener);}removeUIEvent(){window.removeEventListener("resize",this._resizeEvent),window.removeEventListener("scroll",this._scrollEvent),document.removeEventListener("contextmenu",this._contextmenuEvent),document.removeEventListener("keydown",this._keydownListener);}eventMaps(){var A=new Map;return A.set("downLeft",A=>{multiSelectMove.checkMove(A)?multiSelectMove.initPoint(A):(this.clickLeft(A),regionSelector.beforeRegionSelect(A),this.tagObj.canRegionSelect=!0);}),A.set("downRight",A=>{this.canvas.lockBrowserEvent("contextmenu");}),A.set("moveLeft",A=>{!this.tagObj.regionselect&&this.spaceDown?(this.tempRegionSelectLock=!0,this.canvasMoveBySpace=!0,this.moveCanvasBySpace(A)):multiSelectMove.moving?multiSelectMove.move(A):this.tagObj.canRegionSelect&&(this.tagObj.regionselect=!0,regionSelector.moveType="regionSelect",regionSelector.regionSelect(this,A));}),A.set("moveRight",A=>{this.canvas._beginMove(),this.tagObj.canvasMoveByRight=!0,document.body.style.cursor||(document.body.style.cursor="pointer"),this.toMoveCanvas(A);}),A.set("upLeft",A=>{this.canvasMoveBySpace?this.moveCanvasBySpaceEnd():(multiSelectMove.upEvent(),this.tagObj.regionselect&&regionSelector.upEvent()),this.tagObj.regionselect=!1,this.tagObj.canRegionSelect=!1,this.canvasMoveBySpace=!1;}),A.set("upRight",A=>{this.tagObj.canvasMoveByRight?(document.body.style.cursor="",this.emit("moveCanvasEnd",{})):(isMac&&this.canvas.emit("contextmenu"),this.canvas.unlockBrowserEvent("contextmenu")),this.tagObj.canvasMoveByRight=!1,this.canvas._endMove();}),A.set("upDefault",A=>{this.tagObj.regionselect=!1,this.tagObj.canRegionSelect=!1,this.canvasMoveBySpace=!1;}),A}checkBeforeDoEvent(){return {[CANDOWN]:A=>this.canDown(A),[CANMOVE]:A=>this.canMove(A),[CANUP]:A=>this.needUp(A)}}canDown(A){return !this.spaceDown&&!(checkMouseBtnType(A,"left")&&this.isPlayMode()||this.cannotRegionSelect())}canMove(A){return !(checkMouseBtnType(A,"rigth")&&this.spaceDown||checkMouseBtnType(A,"left")&&this.isPlayMode()&&!this.spaceDown||this.cannotRegionSelect())}needUp(A){return !(checkMouseBtnType(A,"left")&&!this.canvasMoveBySpace&&this.isPlayMode())}cannotRegionSelect(){return this.insidePreview||this.regionSelectLock||this.tempRegionSelectLock}}const SCROLL_PARAM={enable:!0,resize:!0,immediate:!0};class UI extends EventEmitter{constructor(A,e={},t={}){if(!(A=getElement(A)))throw new Error("无效dom");super(),this.type=LAYOUT_MAP.UI,this.lifeCycle=createLifeCycle(this),this.lifeCycle.call("beforeCreate"),this.id=getUID("ui"),this.rootEl=A,this.parentEl=null,this.el=null,this.options=clone(e),this.config=merge(defaultConfig[LAYOUT_MAP.UI],t),this.bound=null,this.nextTick=null,this.canvasMode=null,this.CANVASMODE=null,this.canvas=null,this.selector=null,this.animation=null,this.align=null,this.insidePreview=null,this.spaceDown=!1,this.canvasMoveBySpace=!1,this.tempRegionSelectLock=!1,this.store=store$1$1,this.regionSelectLock=!1,this.rightMoveCanvasLock={defaultCtLock:!0},this.resizeLock=!1,this.alignmentLineBase="layer",this.tagObj={},this.lifeCycle.call("created"),this.init();}get layers(){return store$1$1.getLayers()}get groups(){return store$1$1.getGroups()}get containers(){return store$1$1.getContainers()}get operation(){return this.canvas?this.canvas.operation:null}init(){this.id=getUID("ui"),this.parentEl=createElement(),this.parentEl.style.cssText="position: relative; width: 100%; height: 100%;",this.el=createElement(),this.el.dataset.id=this.id,this.el.style.cssText="position: absolute; width: 100%; height: 100%; overflow: hidden; background: "+this.config.theme.ui.background,this.lifeCycle.call("beforeMount"),this.parentEl.appendChild(this.el),this.rootEl.appendChild(this.parentEl),this.bound=this.createBound(),store$1$1.init(this),this.nextTick=nextTick.call.bind(nextTick),handlerManager.init(["selectDown","movement","resizer","rotator"],{ui:this}),graphEvent.init(this),this.canvasMode=CANVAS_MODE.EDIT,this.CANVASMODE=CANVAS_MODE,this.canvas=layoutManager.createLayout(this,LAYOUT_MAP.CANVAS,this.options),this.selector=selector,this.animation=new AnimatorManager,(transAnimation.root=this).transAnimation=transAnimation,this.fnMaps=this.eventMaps(),this.initUIEvent(),this.lifeCycle.call("mounted");}initEventChecks(){moveManager.addEventChecks(this.el,this.checkBeforeDoEvent());}initMouseEvent(){moveManager.add(this.el,{down:{left:this.fnMaps.get("downLeft"),right:this.fnMaps.get("downRight")},move:{left:this.fnMaps.get("moveLeft"),right:this.fnMaps.get("moveRight")},up:{left:this.fnMaps.get("upLeft"),right:this.fnMaps.get("upRight"),default:this.fnMaps.get("upDefault")}},this);}closeRegionSelect(){this.regionSelectLock=!0;}openRegionSelect(){this.regionSelectLock=!1;}moveCanvasBySpace(A){document.body.style.cursor||(document.body.style.cursor="pointer"),this.toMoveCanvas(A);}moveCanvasBySpaceEnd(){document.body.style.cursor&&(document.body.style.cursor=""),this.tempRegionSelectLock=!1,this.emit("moveCanvasEnd",{});}toMoveCanvas(A){A.target!==this.canvas.contentEl&&(this.canvas.move(A.movementX,A.movementY),this.nextTick(()=>{this.emit("moveCanvas",this);}));}query(A){let e=this.executeQuery(A);return e=Array.isArray(e)?e.filter(A=>!0===A._isMounted):e&&(!0===e._isMounted||"Group"===e.type&&!1!==e._isMounted)?e:null}executeQuery(e){if(!e)return store$1$1.getAllElements();if(e instanceof RegExp)return store$1$1.getAllElements().filter(A=>e.test(A.name));var A=e.substring(0,1);if("#"===A)return store$1$1.getElementById(e.substring(1));if("."!==A)return store$1$1.getElementsByName(e);switch(e.substring(1)){case LAYOUT_MAP.CANVAS:return store$1$1.getCanvas()[0];case LAYOUT_MAP.LAYER:return store$1$1.getLayers();case LAYOUT_MAP.GROUP:return store$1$1.getGroups();case LAYOUT_MAP.CONTAINER:return store$1$1.getContainers();default:return null}}toJSON(){if(!this.canvas)return "";const i={};var A=this.canvas.toJSON(),e=this.ruler?this.ruler.exportLineInfo():null,t=e?e.lines:null,e=e?e.hideAllLine:null,t=(t&&t.length&&(A.lines=t,A.hideAllLine=e),{version:1,scene:A,userData:i});return function e(A){var t=A.option.adapter;t&&(i[A.option.id]=t,A.option.adapter=t.type||"ConchAdapter"),A.children&&A.children.forEach(A=>{e(A);});}(A),JSON.stringify(t)}parseJSON(t){return new Promise((A,e)=>{this.doParse(t,A,e);})}doParse(t,A){if(this.isPlayMode())return log.warn("预览模式下，无法使用");if(!t)return log.warn("参数不能为空");if(isType$1(t,"String"))try{t=window.JSON.parse(t);}catch(A){return log.warn(t+" 数据不符合要求")}if(!isType$1(t,"Object"))return log.warn(t+" 数据不符合要求");this.lifeCycle.call("beforeParseJSON",t,A),(t=clone(t)).scene&&function e(A){A.option.adapter&&(A.option.adapter=t.userData[A.option.id]),A.children&&A.children.forEach(A=>{e(A);});}(t.scene);const i={};return this.canvas&&(this.canvas.layers.forEach(A=>A.isDefaultLayer&&(i[A.id]=A.dom)),this.canvas.destroy()),this.canvas=layoutManager.parseLayout(this,t.scene,{inStack:!1}),this.ruler&&t.scene.lines&&this.ruler.parseRulerLines(t),this.canvas.layers.forEach(A=>{var e=i[A.id];A.isDefaultLayer&&e&&(A.dom.parentNode.insertBefore(e,A.dom.parentNode.childNodes[1]),A.dom.parentNode.removeChild(A.dom),A.dom=e);}),isUnDef(t.userData)||Object.keys(t.userData).length||A(this),this.lifeCycle.call("afterParseJSON"),!0}play(A){if(!this.canvas)return log.warn("进入预览模式需要画布"),!1;if(this.isPlayMode())return log.warn("已经进入预览模式"),!0;this.canvasMode=CANVAS_MODE.PLAY,this.selector.clear();var e=this.canvas.updateMode();return isType$1(A,"Function")&&A(()=>{var A=transAnimation.animations;A&&A.size&&A.forEach(A=>{var{context:A,run:{enter:e}}=A;isType$1(e,"Function")&&e.apply(A);});}),e}edit(){return this.canvas?this.canvasMode===CANVAS_MODE.EDIT?(log.warn("已经进入编辑模式"),!0):(this.canvasMode=CANVAS_MODE.EDIT,this.canvas.updateMode()):(log.warn("进入编辑模式需要画布"),!1)}enterInsidePreview(A){return !(this.canvasMode===this.CANVASMODE.PLAY||this.insidePreview||!A||!hasOwn(A,"_enterPreview")||(A.zDown&&A.zIndexUp(),!A._enterPreview())||(this.insidePreview=A,this.emit("enterInsidePreview",this.insidePreview),0))}exitInsidePreview(A){return !(!this.insidePreview||A&&A!==this.insidePreview||!this.insidePreview._exitPreview()||(this.insidePreview=null,this.emit("exitInsidePreview"),0))}exitTextEdit(){textEditor.exitTextEdit();}enterTextEdit(A){textEditor.enterTextEdit(A);}getInsidePreview(){return this.insidePreview}getScaleMode(){return this.canvas&&this.canvas.scaleMode}setScaleMode(e){var A;return this.isPlayMode()?log.warn("预览模式下，无法设置画布缩放模式"):(this.canvas&&e!==this.canvas.scaleMode&&(A=Object.entries(CANVAS_SCALE_MODE).find(A=>A[1]===e))&&(this.canvas.scaleMode=CANVAS_SCALE_MODE[A[0]]),!0)}resize(){this.isPlayMode()?this._resizePlay():this._resizeEdit();}createBound(){return BoundingRect.create(this.el.getBoundingClientRect())}setResizeLock(A){this.resizeLock!==A&&(this.resizeLock=A);}contextmenuEvent(A){A.preventDefault();}updateSite(){var{top:A,left:e}=this.el.getBoundingClientRect(),{top:t,left:i}=this.bound;t===A&&i===e||this.bound.setData({top:A,left:e});}keydownEvent(A){"Escape"===A.code&&(this.exitInsidePreview(),this.exitTextEdit());}alignTo(A,e){if(!["top","bottom","left","right","vertical","horizal"].includes(A))return !1;recordBound(e=isType$1(e,"Array")?e:void 0);A=align[A](e);return commandAPI.align(e),A}registerCommandType(A){return generateExecution.addCommandType(A)}setOperatHandlerDisplay(A){this.canvas&&this.canvas.setOperatHandlerDisplay(A);}getOperatHandlerDisState(){if(this.canvas)return this.canvas.getOperatHandlerDisState()}resetHandlerDisplay(){this.canvas&&this.canvas.resetHandlerDisplay();}getBoundRect(){return this.canvas?this.canvas.getBoundRect():null}destroy(){this.lifeCycle.call("beforeDestroy"),moveManager.destroy(),this.removeUIEvent(),super.destroyEvents(),this.bound=null,transAnimation.clear(),this.canvas&&this.canvas.destroy(),store$1$1.destroy(),this.canvasMode=null,this.rootEl.removeChild(this.parentEl),this.parentEl=null,this.lifeCycle.call("destroyed"),this.lifeCycle.destroy();}undo(A,e){return command.undo(A,e)}canUndo(){return command.canUndo()}canRedo(){return command.canRedo()}redo(A,e){return command.redo(A,e)}commandClear(){command.clear();}isPlayMode(){return this.canvasMode===CANVAS_MODE.PLAY}clickLeft(A){this.el!==A.target||this.getInsidePreview()||this.selector.clear();}setAlignmentLineBase(A){this.alignmentLineBase=A;}setBoundRange(){multiSelectMove.setRange();}scrollToCenter({enable:A=!0,resize:e=!0,immediate:t=!0}=SCROLL_PARAM){this.canvas.scaleMode===CANVAS_SCALE_MODE.SCROLL&&A?(this.scrollFn=A=>{var e,t,i,{width:s,height:n}=this.el.getBoundingClientRect(),r=this.canvas.width,o=this.canvas.height;r<s&&o<n?(e=(n-o)/2,t=(s-r)/2,(i=this.canvas.style).position="absolute",i.top=e+"px",i.left=t+"px",i.transformOrigin="0px 0px"):this.el.scrollTo({top:(o-n)/2,left:(r-s)/2,behavior:"smooth"});},e&&window.addEventListener("resize",this.scrollFn),t&&this.scrollFn()):e&&window.removeEventListener("resize",this.scrollFn);}innerResize(){this.isPlayMode()?this._resizePlay():this.resizeLock||this._resizeEdit();}_resizePlay(){this.bound=this.createBound(),this.canvas.updateMode();}_resizeEdit(){this.bound=this.createBound(),this.canvas&&this.canvas.zoomAvailCenter();}_setOperatHandlerDisplay(A,e){this.canvas&&this.canvas._setOperatHandlerDisplay(A,e);}_downSpace(){this.spaceDown=!0;}_upSpace(){this.spaceDown=!1,this.canvasMoveBySpace&&(this.canvasMoveBySpace=!1,this.moveCanvasBySpaceEnd());}}UI.version=version$1,applyMixins(UI,[UIEvent]);let adapterCount=0;var conchLifeCycle={ui:{beforeParseJSON({instance:A},e,t){const i=Object.keys(e.userData).length;A.on("collectCompComplete",()=>{++adapterCount===i&&(A.off("collectCompComplete"),"function"==typeof t)&&t(A);});}},container:{mounted({instance:A}){(A.adapter||A._initAdapterData)&&A.root.emit("beforeComponentComplete",A);}}};class Queue{constructor(){this.taskCaches=[],this.has={},this.waiting=!1,this.flushing=!1;}_flushCaches(){var A;for(this.flushing=!0;this.taskCaches.length;)A=this.taskCaches.shift(),this.has[A.id]=void 0,A.run();this._resetState();}_resetState(){this.taskCaches.length=0,this.has={},this.waiting=this.flushing=!1;}addTask(e){var A=e.id;void 0===this.has[A]?(this.has[A]=e.instance,this.flushing||this.taskCaches.push(e),this.waiting||(this.waiting=!0,nextTick.call(this._flushCaches.bind(this)))):this.has[A]!==e.instance&&(this.has[A]=e.instance,A=this.taskCaches.findIndex(A=>A.id===e.id),this.taskCaches.splice(A,1),this.taskCaches.push(e));}destroy(){this._resetState();}}var queue=new Queue;const STYLELIST=["position","top","left","width","height","transform","transformOrigin","filter","right","bottom","outline","backgroundImage","backgroundColor","background","backgroundPosition","flex","padding","margin","display","border","opacity","zIndex","pointerEvents","cursor","flexDirection","justifyContent","alignItems","backgroundRepeat","backgroundSize","backdropFilter","boxSizing","userSelect"];function setTransform(e){return function(A){this._setTransform(e,A);}}function setDistance(e,t){return function(A){this._setDistance(e,t,A);}}const rotate3dMap={rotateX:setTransform("rotateX"),rotateY:setTransform("rotateY"),rotateZ:setTransform("rotateZ")},styleFnMap={translate:setTransform("translate"),scale:setTransform("scale"),skew:setTransform("skew"),rotate:setTransform("rotate"),matrix:setTransform("matrix"),...rotate3dMap},combineStyle=[["padding","margin"],["Top","Right","Bottom","Left"]],getPx=(combineStyle[0].forEach(t=>{combineStyle[1].forEach((A,e)=>styleFnMap[t+A]=setDistance(t,e));}),A=>/px|%/.test(A)?A:A+"px"),getDeg=A=>/deg/.test(A)?A:A+"deg",getUrl=A=>/url/.test(A)?A:`url(${A})`,isArray=A=>isType$1(A,"Array"),isNumberNaN=A=>!Number.isNaN(Number(A)),join=(A,e)=>A.join(e),replace=(A,e)=>isArray(A)?A.filter(A=>isDef(A)).map(A=>e(A)):e(A),handler={backgroundImage:A=>getUrl(A),width:A=>isNumberNaN(A)?getPx(A):A,height:A=>isNumberNaN(A)?getPx(A):A,margin:A=>isArray(A)?join(replace(A,getPx)," "):A,padding:A=>isArray(A)?join(replace(A,getPx)," "):A,top:A=>isNumber(A)?getPx(A):A,left:A=>isNumber(A)?getPx(A):A,right:A=>isNumber(A)?getPx(A):A,bottom:A=>isNumber(A)?getPx(A):A};class Style{constructor(A){return this.parent=A,this.layout=this.parent.layout,this._style={},this.dirtyMap={},new Proxy(this,{get(A,e,t){return -1!==STYLELIST.indexOf(e)||Reflect.has(styleFnMap,e)?A._style[e]:Reflect.get(A,e,t)},set(A,e,t,i){return -1!==STYLELIST.indexOf(e)?(A._setStyle(e,t),!0):styleFnMap[e]?(styleFnMap[e].call(A,t),!0):Reflect.set(A,e,t,i)}})}static factory(A){return new Style(A)}setOption(e){return !!isType$1(e,"Object")&&(Object.keys(e).forEach(A=>{this[A]=e[A];}),!0)}getValue(A){var e;return void 0===A?{...this._style}:(e=this._style[A],A in handler?handler[A](e):"transform"===A?this._getTransformStyleValue():isArray(e)?join(e," "):e)}_getTransformStyleValue(){var{translate:A,scale:e,rotate:t,rotateX:i,rotateY:s,rotateZ:n,skew:r,matrix:o}=this._style,a="";return (a+=(isArray(A)?`translate(${join(replace(A,getPx),",")}) `:"")+(isArray(e)?`scale(${join(e,",")}) `:"")+(isDef(t)?`rotate(${replace(t,getDeg)}) `:"")+(isDef(i)?`rotateX(${replace(i,getDeg)}) `:"")+(isDef(s)?`rotateY(${replace(s,getDeg)}) `:"")+(isDef(n)?`rotateZ(${replace(n,getDeg)}) `:"")+(isArray(r)?`skew(${join(replace(r,getDeg),",")}) `:"")+(isArray(o)?`matrix(${join(o,",")}) `:""))||this._style.transform}getDirtyStyleList(){var A=[];for(const t in this.dirtyMap){var e=this.getValue(t);null!=e&&this.dirtyMap[t]&&(A.push({name:t,value:e}),this.dirtyMap[t]=!1);}return A}_setStyle(A,e){isType$1(e,"Object")?this._style[e.name]=e.value:this._style[A]=e,this.dirtyMap[A]=!0,this.parent.dirty=!0,queue.addTask({id:this.parent.id,instance:this.parent,run:this.parent._updateStyle.bind(this.parent)});}_setDistance(e,t,i){if("margin"===e||"padding"===e){let A=this[e];(A=isType$1(A,"Array")?A:[0,0,0,0])[t]=i,this._setStyle(e,A);}}_setTransform(A,e){e=["translate","scale","skew"].includes(A)?this.formatValue(e):e;this._setStyle("transform",{name:A,value:e});}formatValue(A){let e="";return isType$1(A,"Number")&&(e=[A,A]),e=isType$1(A,"Array")&&isType$1(A[0],"Number")&&isType$1(A[1],"Number")?[A[0],A[1]]:e}destroy(){this._style={},this.dirtyMap={};}set dirty(A){this.parent.dirty=A;}get dirty(){return this.parent.dirty}}const eventList=["click","dblclick","wheel","mouseout","mouseup","mousedown","mousemove","contextmenu","mouseover"],blockList={};class DomEvent{initDomEvent(){this.eventBind={},this._emit=this.emit.bind(this),this.event=new EventEmitter;}on(A,e,t){return this._hasType(A)&&(this.event.on(A,e,t),this._addListener(A,t)),this}once(e,t,i){if(this._hasType(e)){const s=(...A)=>{this.off(e,s),t.apply(i,A);};this.on(e,s);}return this}off(A,e){return A||e?this._hasType(A)&&(e||this._removeListener(A),this.event.off(A,e)):this.destroyEvent(),this}emit(i,A){i.type?(A&&!1===A.preventDefault&&i.preventDefault(),A&&!1===A.stopPropagation&&i.stopPropagation(),blockList[i.type]?(Array.isArray(blockList[i.type])||(blockList[i.type]=[]),blockList[i.type].push([this,i])):this.event.emit(i.type,i)):Array.isArray(blockList[i])&&blockList[i].forEach(([A,e],t)=>{A.event.emit(i,e);});}lockBrowserEvent(A){if(!this._hasType(A))return this;blockList[A]=!0;}unlockBrowserEvent(A){if(!this._hasType(A))return this;blockList[A]=null;}destroyEvent(){for(const A in this.eventBind)this._removeListener(A);return this.event.destroyEvents(),this}_addListener(A,e){this.eventBind[A]||(this.eventBind[A]=!0,this.el.addEventListener(A,A=>this.emit.call(this,A,e)));}_removeListener(A){this.eventBind[A]&&(this.eventBind[A]=!1,this.el.removeEventListener(A,this._emit));}_hasType(A){return !!eventList.includes(A)}}var dep=new EventEmitter;class EventManager{initElementEvent(A){var e=this.getType(A.type);this[`init${e}Event`]&&this[`init${e}Event`].call(A);}removeElementEvent(A){var e=this.getType(A.type);this[`remove${e}Event`]&&this[`remove${e}Event`].call(A);}registerDep(A){var e=this.getType(A.type);this[`register${e}Dep`]&&this[`register${e}Dep`].call(A);}removeDep(A){var e=this.getType(A.type);this[`remove${e}Dep`]&&this[`remove${e}Dep`].call(A);}initCanvasEvent(){this.on("mousedown",A=>{checkMouseBtnType(A,"left")&&!multiSelectMove.checkMove(A)&&this.root.selector.clear();}),this.root.on("select",()=>{this.showSelectRect();}).on("unselect",A=>{this.hiddenSelectRect(A);});}initLayerEvent(){mutualInitEvent.call(this);}initContainerEvent(){mutualInitEvent.call(this),this.on("dblclick",this._dblclickFn,this),this.on("mouseover",showBound,this),this.on("mouseout",hideBound,this),this.on("mousemove",preSelector,this),checkLayoutType(this,LAYOUT_MAP.DEFAULTCONTAINER)&&(this.root.on("canvasMode",this._canvasModeFn,this),this.root.on("beforeCanvasMode",this._beforeCanvasModeFn,this));}registerLayerDep(){dep.on("canvasModeChange",this.changeEventByMode,this);}registerContainerDep(){dep.on("canvasModeChange",this.changeEventByMode,this);}removeCanvasEvent(){this.off("mousedown");}removeLayerEvent(){mutualRemoveEvent.call(this);}removeContainerEvent(){mutualRemoveEvent.call(this),this.off("dblclick",this._dblclickFn),this.off("mouseover",showBound,this),this.off("mouseout",hideBound,this),this.off("mousemove",preSelector,this);}removeCanvasDep(){dep.off("canvasModeChange");}removeLayerDep(){mutualRemoveDep.call(this);}removeContainerDep(){mutualRemoveDep.call(this);}getType(A){return initialCapital(A)}}function mutualInitEvent(){this.eventActive=!0,handlerManager.initEvent(["selectDown","movement","regionSelector"],this),this.on("dblclick",dblclickEvent,this);}function mutualRemoveEvent(){this.eventActive=!1,handlerManager.remove(this),this.off("dblclick",dblclickEvent,this);}function mutualRemoveDep(){dep.off("canvasModeChange",this.changeEventByMode,this);}function showBound(A){multiSelectMove.moving||(A.stopPropagation(),this.eventActive&&graphEvent.mouseOverEvent(this));}function preSelector(A){this.eventActive&&graphEvent.mouseMoveEvent(this,A);}function hideBound(A){A.stopPropagation(),this.eventActive&&graphEvent.mouseOutEvent(this);}function dblclickEvent(A){A.stopPropagation(),this.eventActive&&selectDown.dblclickEvent(A,this);}let AdapterManager$1 = class AdapterManager{constructor(){this._map=new Map;}getBaseAdapter(){return this._map.has("BaseAdapter")?this._map.get("BaseAdapter"):(log.warn("BaseAdapter还没有注册"),null)}register(A,e){if(this._map.has(A))console.warn("重复注册"+A);else {if(!e.factory)throw new Error("注册的对象缺失factory静态方法");this._map.set(A,e);}}creatComponent(e,A,t,i){if(!this._map.has(e))return console.warn(e+"尚未注册，请检查参数"),!1;try{return this._map.get(e).factory(e,A,t,i)}catch(A){throw new Error(`创建${e}出错`+A)}}};var adapterManager=new AdapterManager$1;const{ENTER,LEAVE}=TRANSITIONTYPE;class GraphObject extends Displayable{constructor(A,e){super(A,e),this.el=null,this.style=null,this.adapter=null,this.bound=null,this.isMounted=null,this.eventActive=null,this.maskStyle=null,this.maskDefaultEnable=!0,this.domFnEvents=[],this.eventManager=null,this._mountInfo=null,this._moveInfo=null,this._initAdapterData=null;}get left(){return parseInt(this.style.left)}get top(){return parseInt(this.style.top)}get height(){return parseInt(this.style.height)}get width(){return parseInt(this.style.width)}get translate(){return this.style.translate||[0,0]}get rotate(){return this.style.rotate||0}get scale(){return this.style.scale||[1,1]}set left(A){setBoundEvent.call(this,{left:A});}set top(A){setBoundEvent.call(this,{top:A});}set height(A){setBoundEvent.call(this,{height:A});}set width(A){setBoundEvent.call(this,{width:A});}get app(){return this.adapter&&this.adapter.componentInstance}get ignoreRendering(){return this._ignoreRendering}set ignoreRendering(A){A!==this._ignoreRendering&&(this._ignoreRendering=A);}init(){super.init(),this._ignoreRendering=this.options.ignoreRendering,this.el=createElement(),this.el.dataset.id=this.id,this.contentEl=createElement(),this.contentEl.style.cssText="position: relative; width: 100%; height: 100%; zIndex: 0;",this.maskStyle||(this.maskStyle=clone(MASK_STYLE)),this.maskEl=createElementWithAttr("div",this.maskStyle,{id:"mask"}),this.el.appendChild(this.contentEl),this.maskDefaultEnable&&this._initMask(),this.style=Style.factory(this),this.setStyle(),this.options.animation&&(this.animation=this.options.animation),this.isMounted=!1,this._mountInfo=null,this._moveInfo=null,this.eventActive=!0;var{left:A,top:e,width:t,height:i,rotate:s}=this.boundingRect();this.bound=new BoundingRect(A,e,t,i,{left:0,top:0},s),this._initAdapterData=this.options.adapter,checkLayoutType(this,LAYOUT_MAP.CONTAINER)&&this.initBoundOffset(),this.initDomEvent(),this.eventManager=new EventManager,this.registerDep(),this._initEvent(),commandAPI.graph(this,this.config.inStack);}initMount(){this.ignoreRendering||this.doMount();}mount(){this.ignoreRendering=!1,this.doMount();}doMount(){if(!this.isMounted){var t=this._mountInfo;let A=getElementParent(this.parent),e;t&&(A=t.target,e=t.type),this.lifeCycle.call("beforeMount"),mount(this,A,e),this._mount&&this._mount(),this.isMounted=!0,this._mountInfo=null,this.lifeCycle.call("mounted"),this.initAdapter(),this.collectAnimation();}}initAdapter(){this.root.nextTick(()=>{var A;this._initAdapterData&&(A=this._initAdapterData,this.adapter=adapterManager.creatComponent(A.type,A.name,this,A),this.adapter._initComponent(A.option)),delete this._initAdapterData;});}collectAnimation(){const A=transAnimation.convert(this);var e;isUnDef(A)||(e={},A[ENTER]&&A[ENTER].length&&(e.enter=()=>{transAnimation.execute(this,A[ENTER]);}),A[LEAVE]&&A[LEAVE].length&&(e.leave=()=>{transAnimation.execute(this,A[LEAVE]);}),transAnimation.animations.set(this,{context:this,animation:A,run:e}));}registerDep(){this.eventManager.registerDep(this);}unmount(){this.ignoreRendering=!0;var A=transAnimation.animations.get(this),A=A?A.animation[type]:null;transAnimation.execute(this,A,this._animationEndCb)||this.doUnmount();}doUnmount(){if(this.isMounted){let A=this.el.nextSibling,e="before";A||(A=this.el.parentNode,e=null),this._mountInfo={target:{el:A},type:e},unmount(this),this.isMounted=!1;}}show(){return this.visible?Promise.resolve(this):super.show()}hidden(){return this.visible?super.hidden():Promise.resolve(this)}setVisible(A){this.visible=A,this._setVisible(A);}setBound(A){var e,t,i,s,n;this.isLock||(this.bound.setData(A),{left:A,top:e,width:t,height:i}=this.bound,{width:s,height:n}=this.style.getValue(),this.style.setOption({left:A-this.translate[0],top:e-this.translate[1],width:t,height:i}),s===t&&n===i)||this._adapterResize();}move(A,e){var{left:t,top:i}=this.bound;setBoundEvent.call(this,{left:t+A,top:i+e});}boundingRect(){return {left:this.left+this.translate[0],top:this.top+this.translate[1],width:this.width*this.scale[0],height:this.height*this.scale[1],rotate:this.rotate}}setStyle(){this.options.style&&(this.style.setOption(this.options.style),this._setVisible(this.visible));}destroy(){this.lifeCycle.call("beforeDestroy"),super.destroy(),this._moveInfo=null,this.destroyDep(),commandAPI.unGraph(this),this.lifeCycle.call("destroyed");}destroyDep(){this.eventManager.removeDep(this);}_animationEndCb(){this.doUnmount();}_updateStyle(){this.el&&(this.lifeCycle.call("beforeUpdate"),updateStyle(this),this.lifeCycle.call("updated"));}_setVisible(A=!0){return this.style.display=A?"":"none",A}_adapterResize(){this.adapter&&this.root.nextTick(()=>{this.adapter.resize();});}_destroyTruthy(){this._moveInfo=null,this.off(),super._destroyTruthy();}_initEvent(){this.eventManager.initElementEvent(this);}_startEvent(){return this.eventActive=!0}_pauseEvent(){return !(this.eventActive=!1)}_initMask(){return !this.maskEl.parentNode&&(this.el.appendChild(this.maskEl),!0)}_destroyMask(){return !!this.maskEl.parentNode&&(this.el.removeChild(this.maskEl),!0)}_destroyEvent(){this.eventManager.removeElementEvent(this);}}function setBoundEvent(A){this.setBound(A),this.root.emit("graphBoundChange",this);}applyMixins(GraphObject,[DomEvent]);let Base$2 = class Base{constructor(){this.el=null,this.subEl=null,this.visible=!1,this.type=null;}init(A,e,t){this.el=createElement(),this.type=this.el.dataset.id=A,Object.assign(this.el.style,e),0===t&&this.createRotateDom(e),this.visible=!0;}createRotateDom(A){var A=parseFloat(A.width),e=createElement(),e=(e.dataset.type="rotate",this.subEl=e,{width:"16px",height:"16px",position:"absolute",cursor:"pointer",top:"-21px",left:-(8-A/2)+"px",backgroundImage:rotateIcon(),backgroundRepeat:"no-repeat",backgroundPosition:"center",pointerEvents:"all"});this.setRotateStyle(e),this.el.appendChild(this.subEl);}setStyle(A){isPlainObject(A)&&Object.assign(this.el.style,A);}setRotateStyle(A){isPlainObject(A)&&Object.assign(this.subEl.style,A);}destroy(){unmount(this),this.el=null,this.type=null,this.visible=!1,this.config=null;}isRotate(e){var A=store$1$1.getSelectElements();return !A.length||!(!e||A.find(A=>A.id===e))||!("Group"===A[0].type||1<A.length)}};class Rect extends Base$2{constructor(A,e){super(),this.config=e,this.init(A);}init(A="rect"){var{rectColor:e,rectStyle:t}=this.config.theme;super.init(A,{display:"none",top:"0px",left:"0px",width:"0px",height:"0px",zIndex:"20",border:`1px ${e} `+t,boxSizing:"border-box",position:"absolute",pointerEvents:"none"});}show(A,e,t,i){var s,{top:A,left:n,width:r,height:o,angle:a}=A;r<=0&&o<=0?this.hidden():({rectColor:t,rectStyle:s}={...this.config.theme,...this.config.theme[t]},this.setStyle({top:A+"px",left:n+"px",width:r+"px",height:o+"px",border:1/e+`px ${t} `+s,display:"block",transform:i&&a?`rotate(${a}deg)`:""}),this.visible=!0);}rectShow(A,e,t,i){var s=A["angle"],i=!(!i||!s)&&this.isRotate();this.show(A,e,t,i);}subRectShow(A,e,t,i){var s=A["angle"],s=!!s&&this.isRotate(i);this.show(A,e,t,s);}hidden(){this.visible&&this.setStyle({display:"none"}),this.visible=!1;}scale(A){this.visible&&this.setStyle({borderWidth:1/A+"px"});}}class Resize extends Base$2{constructor(A,e){super(),this.index=A,this.visible=!1,this.config=e,this.size=10,this.isShowResize=!0,this.isShowFirstResize=!0,this.isShowRotate=!0,this.important={resize:0,rotate:0},this.handleColor=e.theme.handleColor,this.init();}init(){super.init("resize"+this.index,{display:"none",top:"0px",left:"0px",width:this.size+"px",height:this.size+"px",borderRadius:this.size/2+"px",backgroundColor:this.config.theme.handleColor,position:"absolute",zIndex:"21",pointerEvents:"all",cursor:CURSOR_STYLE[this.index]},this.index),this.initDomEvent(),initEvent.call(this);}contain(A,e){var{top:t,left:i,right:s,bottom:n}=this.el.getBoundingClientRect();return i<A&&t<e&&A<s&&e<n?this:null}show(A,e,t,i,s){var i={...this.config.theme,...this.config.theme[i]}["handleColor"],{showRotateTag:s,showResizeTag:n,preselectionTag:r=!1}=s,n=(this.handleColor=i,this.important.resize?this.isShowResize:n);this.setStyle({display:n?"block":"none",top:e-this.size/2+"px",left:A-this.size/2+"px",transform:`scale(${1/t})`,backgroundColor:this.isShowFirstResize?i:"transparent",pointerEvents:this.isShowFirstResize?"all":"none"}),this.visible=!0,0<this.index||(this.important.rotate?!r&&this.isRotate()&&this.isShowRotate?this.subEl.style.display="block":this.subEl.style.display="none":s&&this.isRotate()?this.subEl.style.display="block":this.subEl.style.display="none");}setResizeDisplay(A,e){isDef(e)&&(this.important=e),0===this.index?(this.isShowFirstResize=A,this.setStyle({backgroundColor:A?this.handleColor:"transparent",pointerEvents:A?"all":"none"}),A&&this.setStyle({display:"block"})):(this.isShowResize=A,this.setStyle({display:A?"block":"none"}));}setRotateDisplay(A,e){isDef(e)&&(this.important=e),this.isShowRotate=A,this.setRotateStyle({display:A?"block":"none"});}hidden(){this.visible&&this.setStyle({top:"0px",left:"0px",display:"none"}),this.visible=!1;}scale(A){this.visible&&this.setStyle({transform:`scale(${1/A})`});}destroy(){this.off("mousedown"),handlerManager.remove(this),super.destroy();}_setResizeDisplay(A){0===this.index?(this.setStyle({backgroundColor:A?this.handleColor:"transparent",pointerEvents:A?"all":"none"}),A&&this.setStyle({display:"block"})):this.setStyle({display:A?"block":"none"});}_setRotateDisplay(A){this.setRotateStyle({display:A&&this.isRotate()?"block":"none"});}}function initEvent(){resizer.initResizeEvent(this),rotator.initRotateEvent(this);}applyMixins(Resize,[DomEvent]);class SizeLabel extends Base$2{constructor(A){super(),this.config=A,this.isShowSizeLabel=!0,this.init();}init(){var{labelColor:A,labelBackground:e}=this.config.theme;super.init("SizeLabel",{top:"0px",left:"0px",zIndex:21,padding:"0 4px",fontSize:"12px",color:A,lineHeight:"20px",userSelect:"none",borderRadius:"2px",position:"absolute",transformOrigin:"left",backgroundColor:e,display:"none"});}show(A,e,t,i=1,s){var{labelColor:s,labelBackground:n}={...this.config.theme,...this.config.theme[s]};this.setStyle({top:e-10+"px",left:A+15+"px",color:s,backgroundColor:n,display:this.isShowSizeLabel?"inline-block":"none",transform:`scale(${1/i})`,whiteSpace:"nowrap"}),this.el.innerText=t,this.visible=!0;}hidden(){this.visible&&this.setStyle({top:"0px",left:"0px",display:"none"}),this.visible=!1;}setSizeLabelDisplay(A){this.isShowSizeLabel!==A&&(this.isShowSizeLabel=A,this.setStyle({display:A?"inline-block":"none"}));}scale(A){this.visible&&this.setStyle({transform:`scale(${1/A})`});}}class SelectRect extends Base$2{constructor(A,e){super(),this.target=A,this.config=e,this.init();}init(){this.el=createElement(),this.initStyle(),this.visible=!0;}initStyle(A={}){var e,t,i,s,n,r,o;this.target&&this.config&&({rectColor:e,rectStyle:t}=this.config.theme,{top:o,left:i,width:s,height:n,angle:r}=this.target.bound.plainReal(),o={top:o+"px",left:i+"px",width:s+"px",height:n+"px",zIndex:"20",border:1/this.target.root.canvas.getZoom()+`px ${e} `+t,boxSizing:"border-box",position:"absolute",pointerEvents:"none",transform:`rotate(${r}deg)`},Object.assign(o,A),this.setStyle(o));}show(){this.initStyle({display:"block"}),this.visible=!0;}hidden(){this.visible&&(this.setStyle({display:"none"}),this.visible=!1);}scale(A){this.visible&&this.setStyle({borderWidth:1/A+"px"});}destroy(){super.destroy(),this.target=null;}}class Operation{constructor(){this.parent=null,this.el=createElement(),this.el.dataset.id="operation",this.el.style.cssText="position:absolute;top:0;left:0;width:inherit;pointer-events:none;",this.inited=!1,this.resizes=null,this.rect=null,this.subRect=null,this.sizeLabel=null,this.alignmentLineManager=null,this.preMultSelect=!1,this.important={resize:0,rotate:0},this.selectRects={},this.config=null,this._important=null;}init(A){if(!this.inited){this.parent=A;var e=this.config={theme:A.root.config.theme.bound};this.rect=new Rect("rect",e),mount(this.rect,this),this.subRect=new Rect("subRect",e),mount(this.subRect,this),this.resizes=[];for(let A=0;A<8;A++){var t=new Resize(A,e);mount(t,this.rect),this.resizes.push(t);}this.sizeLabel=new SizeLabel(e),mount(this.sizeLabel,this.rect),mount(this,{contentEl:A.el}),this.initEvent(),this.inited=!0;}}initEvent(){var A=this.parent.root;A.on("graphBoundChange",syncBound,this),A.on("select",this.repaint,this),A.on("unselect",this.repaint,this),A.on("delete",this.repaint,this),A.on("graphMoving",this.hidden,this),A.on("graphResizing",this.repaintResizing,this),A.on("graphResizeEnd",this._showSelectRect,this),A.on("graphRotating",this.repaint,this),A.on("graphMoveEnd",this.repaint,this),A.on("canvasZoom",this.scale,this),A.on("moveLayer",updateLayerOffset,this),A.on("graphMouseover",this.showSubRect,this),A.on("graphMouseout",this.hideSubRect,this);}destroyEvent(){var A=this.parent.root;A.off("graphBoundChange",syncBound,this),A.off("delete",this.repaint,this),A.off("select",this.repaint,this),A.off("unselect",this.repaint,this),A.off("graphMoving",this.hidden,this),A.off("graphResizing",this.repaintResizing,this),A.off("graphResizeEnd",this._showSelectRect,this),A.off("graphRotating",this.repaint,this),A.off("graphMoveEnd",this.repaint,this),A.off("canvasZoom",this.scale,this),A.off("moveLayer",updateLayerOffset,this),A.off("graphMouseover",this.showSubRect,this),A.off("graphMouseout",this.hideSubRect,this);}destroy(){unmount(this),this.el=null,this.destroyEvent(),this.parent=null,this.resizes.forEach(A=>A.destroy()),this.rect.destroy(),this.subRect.destroy(),this.sizeLabel.destroy(),this.rect=null,this.subRect=null,this.resizes=null,this.sizeLabel=null,this.alignmentLineManager=null,this.preMultSelect=null,this.selectRects={},this.config=null;}show(A){var e,t,i,s=this.getSelectBoundRect();s&&(e=this.parent.getZoom(),t=this.selectType(),{showResizeTag:A,showRotateTag:i}=(this.showRect(s,e,t),this.hideSubRect(),this._getShowTag(A)),this.showResize(s,e,t,{showRotateTag:i,showResizeTag:A}));}showRect(A,e,t,i){var s=!0;i&&this.preMultSelect&&(s=!1),this.rect.rectShow(A,e,t,s);}showResize(A,t,i,s){const n=store$1$1.getSelectElements().find(A=>checkLayoutType(A,LAYOUT_MAP.LAYER));var{width:A,height:e}=A;const r=[{top:0,left:A/2},{top:e,left:A/2},{top:e/2,left:0},{top:e/2,left:A},{top:0,left:0},{top:0,left:A},{top:e,left:0},{top:e,left:A}];this.resizes.forEach((A,e)=>{n?A.hidden():A.show(r[e].left,r[e].top,t,i,s);}),this.sizeLabel.show(r[3].left,r[3].top,Math.round(A)+" × "+Math.round(e),t,i);}setHandlerDisplay(A,e){const{rotate:t,resize:i,sizeLabel:s}=A;isDef(i)&&(this.important.resize=e,this.resizes.forEach(A=>A.setResizeDisplay(i,this.important))),isDef(t)&&(this.important.rotate=e,A=this.resizes[0])&&A.setRotateDisplay(t,this.important),isDef(s)&&this.sizeLabel.setSizeLabelDisplay(s);}getHandlerDisState(){let A=!0,e=!0,t=!0;return isDef(this.resizes)&&(A=this.resizes.every(A=>A.isShowResize),e=this.resizes[0].isShowRotate),isDef(this.sizeLabel)&&(t=this.sizeLabel.isShowSizeLabel),{resizeDis:A,rotateDis:e,sizeLabelDis:t}}resetHandlerDisplay(){isDef(this.resizes)&&(this.important.resize=0,this.important.rotate=0,this.resizes.forEach(A=>A.setResizeDisplay(!0,this.important)),this.resizes[0].setRotateDisplay(!0,this.important)),isDef(this.sizeLabel)&&this.sizeLabel.setSizeLabelDisplay(!0);}hidden(){this.visible&&(this.elhidden(),this.visible=!1);}elhidden(){this.rect.hidden(),this.resizes.forEach(A=>A.hidden()),this.sizeLabel.hidden(),this.hideSubRect(),this._hiddenSelectRect();}showSubRect(A,e){var t=this.parent.getZoom();this.subRect.subRectShow(A,t,this.selectType([e]),e.id);}hideSubRect(){this.subRect.hidden();}scale(e=1){this.rect.scale(e),this.subRect.scale(e),this.resizes.forEach(A=>A.scale(e)),this.sizeLabel.scale(e),this.selectRectScale(e);}setStyle(e){e.rect&&this.rect.setStyle(e.rect),e.resize&&this.resizes.forEach(A=>A.setStyle(e.resize)),e.label&&this.sizeLabel.setStyle(e.label);}contain(e,t){return this.resizes.find(A=>A.contain(e,t))||null}repaint(A){this.doRepaint(A,this._showSelectRect);}repaintResizing(A){this.doRepaint(A,this._hiddenSelectRect);}doRepaint(A,e){store$1$1.getSelectElements().length?(this.show(A),e.call(this),this.visible=!0):this.hidden();}getSelectBoundRect(){var A=store$1$1.getSelectElements();return A.length?this.boundRectUnion(A):null}boundRectUnion(A){const e=new BoundingRect;return A.forEach(A=>e.union(A.bound,!0)),e.plain()}selectType(A=store$1$1.getSelectElements()){return 1===A.length?A[0].constructor.name.toLowerCase():1<A.length?"multSelect":void 0}showSelectRect(A){A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.LAYER)||this.selectRects[A.id]||(this.selectRects[A.id]=new SelectRect(A,this.config),mount(this.selectRects[A.id],this));});}hiddenSelectRect(A){A.forEach(A=>{checkLayoutType(A,LAYOUT_MAP.LAYER)||(this.selectRects[A.id]&&this.selectRects[A.id].destroy(),delete this.selectRects[A.id]);}),this.hasMultEls()||Object.keys(this.selectRects).forEach(A=>{this.selectRects[A].destroy(),delete this.selectRects[A];});}selectRectScale(e){Object.values(this.selectRects).forEach(A=>{A.scale(e);});}hasMultEls(){var A=store$1$1.getSelectCtGroups();return A&&1<A.length}setPreMult(A){A=A||store$1$1.getSelectCtGroups();1<A.length?this.preMultSelect=!0:1===A.length?this.preMultSelect=checkLayoutType(A[0],LAYOUT_MAP.GROUP):this.preMultSelect=!1;}_showSelectRect(){this.hasMultEls()&&Object.values(this.selectRects).forEach(A=>{A.show();});}_hiddenSelectRect(){Object.values(this.selectRects).forEach(A=>{A.hidden();});}_getShowTag(A){return A?1<A.length||1<store$1$1.getSelectElements().length?{showResizeTag:!0,showRotateTag:!1}:checkLayoutType(A[0],LAYOUT_MAP.LAYER)||checkLayoutType(A[0],LAYOUT_MAP.GROUP)&&checkLock(A[0].containers)||checkLayoutType(A[0],LAYOUT_MAP.CONTAINER)&&A[0].lock?{showResizeTag:!1,showRotateTag:!1}:{showResizeTag:!0,showRotateTag:!0}:{showResizeTag:!0,showRotateTag:!0}}_setHandlerDisplay(A,e){!0===e?(this._important=this.important,this.important={resize:0,rotate:0}):!1===e&&(this._important&&(this.important=this._important),this._important=null);const{rotate:t,resize:i,sizeLabel:s}=A;isDef(i)&&0===this.important.resize&&this.resizes.forEach(A=>A._setResizeDisplay(i)),isDef(t)&&0===this.important.rotate&&(e=this.resizes[0])&&e._setRotateDisplay(t),isDef(s)&&this.sizeLabel.setSizeLabelDisplay(s);}}function syncBound(){this.visible&&this.repaint();}function updateLayerOffset({layers:A=[]}){A.forEach(e=>e.containers.forEach(A=>A.updateBoundRef(e.left,e.top)));}class ScaleManage{constructor(A){this.instance=A,this.el=this.instance.el,this.ratio=null,this.rootCenter=null,this.center=null,this.location=[],this.instance.style.transformOrigin="0 0",this.lock=!1,this._keydown=this.keydown.bind(this),this._keyup=this.keyup.bind(this),this.wheelEvent=this.wheelEvent.bind(this),this.instance.el.parentNode.addEventListener("wheel",this.wheelEvent,this),document.addEventListener("keydown",this._keydown),document.addEventListener("keyup",this._keyup),this.zoomAvailCenter();}zoomAvailCenter(){var A=this.instance,e=A.root.bound,e=[(e.width-.2*e.width)/A.width,(e.height-.2*e.height)/A.height];return this.rootCenter=[A.root.bound.width/2,A.root.bound.height/2],this.setZoom(window.Math.min(...e))}wheelEvent(A){if(A.preventDefault(),this.lock)return !1;!isMac||this.canMacOSZoomCanvas?this._doZoom(A):this._doPan(A);}_doPan(A){var e=-A.deltaY*this.ratio,A=-A.deltaX*this.ratio;this.move(A,e),this.instance.root.nextTick(()=>{this.instance.root.emit("moveCanvas");});}_doZoom(A){let e=this.getZoom();0<A.deltaY?e-=.02:e+=.02,this._setZoom(e),this.updateCenter({left:A.clientX,top:A.clientY});}keydown(A){"Control"!==A.key&&"Meta"!==A.key||(this.canMacOSZoomCanvas=!0);}keyup(){this.canMacOSZoomCanvas=!1;}setCenter(A){return A&&(this.rootCenter=A),this.updateCenter()}getCenter(){return this.rootCenter}setZoom(A){return this._setZoom(A),this.updateCenter()}_setZoom(A){A=Number(parseFloat(A).toFixed(2)),this.ratio=A=A<=.15||4<A?A<=.15?.15:4:A;}getZoom(){return this.ratio}move(A,e){this.location[0]+=A,this.location[1]+=e,this.updateStyle();}updateCenter(A){var e,t,i=this.instance,s=this.ratio;let n;return n=A?(i.root.updateSite(),e=i.root.bound,t=i.el.getBoundingClientRect(),[A.left-i.width*s*((A.left-t.left)/t.width)-e.left,A.top-i.height*s*((A.top-t.top)/t.height)-e.top]):[this.rootCenter[0]-i.width*s/2,this.rootCenter[1]-i.height*s/2],this.location=this.center=n,this.updateStyle(),this.instance.root.nextTick(()=>{this.instance&&this.instance.root&&this.instance.root.emit("canvasZoom",this.getZoom());}),!0}updateStyle(){var A=this.location.join("px, ")+"px";this.instance.style.transform=`translate(${A}) scale(${this.ratio})`;}destroy(){this.instance.el.parentNode.removeEventListener("wheel",this.wheelEvent),document.removeEventListener("keydown",this._keydown),document.removeEventListener("keyup",this._keyup),this.instance=null,this.el=null,this.ratio=null,this.center=null,this.rootCenter=null;}}let Canvas$1 = class Canvas extends GraphObject{static factory(A,e){return new Canvas(A,e)}static factoryConfig(A,e,t){return new Canvas(A,e,t)}constructor(A,e,t){if(!A||!checkLayoutType(A,LAYOUT_MAP.UI))throw new Error(`parent参数必须是${LAYOUT_MAP.UI}实例`);super(A,mergeOption(LAYOUT_MAP.CANVAS,e,t)),this.scaleMode=hasOwn(this.options,"scaleMode")?this.options.scaleMode:CANVAS_SCALE_MODE.SCALEALL,this.maskDefaultEnable=!1,this.maskStyle=merge(clone(MASK_STYLE),{zIndex:2}),this.init();}get layers(){return store$1$1.getLayers()}get groups(){return store$1$1.getGroups()}get containers(){return store$1$1.getContainers()}init(){super.init(),initOperation.call(this),handlerManager.init("regionSelector",{ui:this.root,canvas:this}),multiSelectMove.init({canvas:this,operation:this.operation}),this.canvasManage=new ScaleManage(this);}move(A,e){this.canvasManage&&this.canvasManage.move(A,e);}clear(){this.children.forEach(A=>{A.destroy();});}setCenter(A){return this.root.canvasMode===CANVAS_MODE.PLAY?log.warn("预览模式下，无法设置中间坐标值"):isType$1(A,"Array")?this.canvasManage.setCenter(A):log.warn(A+" 必须是数组类型")}getCenter(){if(this.root.canvasMode===CANVAS_MODE.PLAY)throw new Error("预览模式下，无法获取中间坐标值");return this.canvasManage.getCenter()}setZoom(A){return this.root.canvasMode===CANVAS_MODE.PLAY?log.warn("预览模式下，无法设置缩放比例"):this.canvasManage.setZoom(A)}getZoom(A){if(this.root.canvasMode!==CANVAS_MODE.PLAY)return this._getZoom();var e=this.rect;if(A&&e)switch(this.scaleMode){case CANVAS_SCALE_MODE.SCROLL:return [1,1];case CANVAS_SCALE_MODE.SCALEALL:return e;case CANVAS_SCALE_MODE.SCALEWIDTH:return [e[0],e[0]];case CANVAS_SCALE_MODE.SCALEHEIGHT:return [e[1],e[1]]}return log.warn("预览模式下，无法获取缩放比例")}zoomAvailCenter(){return this.root.canvasMode===CANVAS_MODE.PLAY?log.warn("预览模式下，缩放画布到可视区域位置"):this.canvasManage.zoomAvailCenter()}getZoomState(){return this.canvasManage.lock}setZoomState(A){A!==this.canvasManage.lock&&(this.canvasManage.lock=A);}toJSON(){var A=super.toJSON();return A.option.scaleMode=this.scaleMode,delete A.option.style.transform,A}showSelectRect(A){this.operation&&(A=A||this.root.selector.getSelectElements())&&1<A.length&&this.operation.showSelectRect(A);}hiddenSelectRect(A){this.operation&&A&&A.length&&this.operation.hiddenSelectRect(A);}updateMode(){var A=this.style,e=this.scaleMode;if(this.root.emit("beforeCanvasMode",this.root.canvasMode),this.root.canvasMode===CANVAS_MODE.PLAY)if(this.canvasManage&&(this.canvasManage.destroy(),this.canvasManage=null),dep.emit("canvasModeChange"),e===CANVAS_SCALE_MODE.SCROLL)this.root.el.style.overflow="auto",A.transform="";else {var t=this.root.el.getBoundingClientRect(),i=[t.width/this.width,t.height/this.height];switch(this.rect=i,e){case CANVAS_SCALE_MODE.SCALEALL:A.transform=`scale(${i.join(", ")})`;break;case CANVAS_SCALE_MODE.SCALEWIDTH:A.top="50%",A.left=0,A.transform=`scale(${i[0]}) translateY(-50%)`,A.transformOrigin="0px 0px";break;case CANVAS_SCALE_MODE.SCALEHEIGHT:A.top="0",A.left="50%",A.transform=`scale(${i[1]}) translateX(-50%)`,A.transformOrigin="0px 0px";}this.root.el.style.overflow="hidden";}else A.top="",A.left="",A.transform="",this.canvasManage=new ScaleManage(this),dep.emit("canvasModeChange",!0);return canvasModeEvent.call(this),this.root.nextTick(()=>{this.root.emit("canvasMode",this.root.canvasMode);}),!0}setOperatHandlerDisplay(A){this.operation&&this.operation.setHandlerDisplay(A,1);}getOperatHandlerDisState(){if(this.operation)return this.operation.getHandlerDisState()}resetHandlerDisplay(){if(this.operation)return this.operation.resetHandlerDisplay()}getBoundRect(){return this.operation?this.operation.getSelectBoundRect():null}destroy(){return queue.destroy(),destroyOperation.call(this),this.scaleMode=null,this.canvasManage&&(this.canvasManage.destroy(),this.canvasManage=null),this.destroyDep(),store$1$1.clearStack(),super._destroyTruthy(),this.root&&(this.root.canvas=null,this.root.transAnimation.clear(),this.root=null),!0}destroyDep(){this.eventManager.removeDep(this);}_getZoom(){return this.canvasManage.getZoom()}_setOperatHandlerDisplay(A,e){this.operation&&this.operation._setHandlerDisplay(A,e);}_beginMove(){this._initMask();}_endMove(){this._destroyMask();}};function initOperation(){this.operation||(this.operation=new Operation,this.operation.init(this));}function destroyOperation(){this.operation&&this.operation.destroy(),this.operation=null;}function canvasModeEvent(A){CANVAS_MODE.PLAY===A?destroyOperation.call(this):CANVAS_MODE.EDIT===A&&initOperation.call(this);}let Layer$2 = class Layer extends GraphObject{static factory(A,e){return new Layer(A,e)}static factoryConfig(A,e,t){return new Layer(A,e,t)}constructor(A,e,t){if(!A||!checkLayoutType(A,LAYOUT_MAP.CANVAS))throw new Error(`parent参数必须是${LAYOUT_MAP.CANVAS}实例`);super(A,mergeOption(LAYOUT_MAP.LAYER,e,t)),this.maskDefaultEnable=!1,this._showCts=[],this.init();}get groups(){return store$1$1.getGroupsByEL(this)}get containers(){return store$1$1.getContainersByEl(this)}changeEventByMode(A){A?(this._initEvent(),this.style.pointerEvents="all"):(this._destroyEvent(),this.style.pointerEvents="none");}moveToTarget(A,e){return e&&checkLayoutType(A,LAYOUT_MAP.LAYER)&&A!==this?(commandAPI.move(this,A,e),this.root.operation.repaint(),!0):log.warn("图层移动只能以其他图层为目标，不能移动到内部")}unmount(){super.unmount(),this.containers.forEach(A=>{A._isMounted=!1;});}setBound(A){super.setBound(A),(isNumber(A.left)||isNumber(A.right))&&this.updateOffset();}updateOffset(){this.isLock||this.root.emit("moveLayer",{layers:[this]});}_setVisible(A){super._setVisible(A),A&&this.containers.forEach(A=>A.adapterResize());}_mount(){this.containers.forEach(A=>{A._isMounted=!0;});}};let maskDom=null;const defaultDashBorder="position: absolute; top: 0; right: 0; width: 100%; height: 100%; border: 1px dashed #027AFF; box-sizing: border-box; pointer-events: none;";let Container$1 = class Container extends GraphObject{static factory(A,e){return new Container(A,e)}static factoryConfig(A,e,t){return new Container(A,e,t)}constructor(A,e,t){if(!A||!checkLayoutType(A,[LAYOUT_MAP.LAYER,LAYOUT_MAP.GROUP]))throw new Error(`parent参数必须是${LAYOUT_MAP.LAYER}或者${LAYOUT_MAP.GROUP}实例`);super(A,mergeOption(LAYOUT_MAP.CONTAINER,e,t)),this.previewModeState=null,this.previewModeLock=null,this.controlDashByApi=null,this.dashBorderDom=null,this.penetrateOnplay=this.options.penetrateOnplay,this.preSelected=!1,this.emptyStyle=!1,this.init();}init(){super.init(),this.contentEl.style.transform="translate(0)",this.previewModeState=!1,this.previewModeLock=!0;}openTextEdit(){textEditor.openTextEdit(this);}closeTextEdit(){textEditor.closeTextEdit(this);}readyTextEdit(A){textEditor.readyTextEdit(this,A);}getTextEditState(){return textEditor.isInEdit}setStyle(){var A,e;this.options.style&&(A=this.options.style,e=this.options.style.userSelect||"none",Object.assign(A,{userSelect:e}),this.style.setOption(A),this._setVisible(this.visible));}changeEventByMode(A){A?(this._initEvent(),this.contentEl.style.pointerEvents="none"):(this._destroyEvent(),this.penetrateOnplay?this.contentEl.style.pointerEvents="none":this.contentEl.style.pointerEvents="all");}createMask(){var A=this.root.config.theme["mask"];return createElementWithAttr("div",{...MASK_STYLE,background:A.background,opacity:A.opacity},{id:"previewMask"})}moveToTarget(A,e){return e&&!checkLayoutType(A,[LAYOUT_MAP.GROUP,LAYOUT_MAP.CONTAINER])&&A!==this?log.warn("容器只能移动到编组或者其他容器旁边"):e||checkLayoutType(A,[LAYOUT_MAP.LAYER,LAYOUT_MAP.GROUP])?(commandAPI.move(this,A,e),this.root.operation.repaint(),!0):log.warn("容器只能移动到图层或者编组里面")}setRotate(A){isUnDef(A)||(this.setBound({angle:A}),this.root.emit("graphBoundChange",this));}setBound(A){this.isLock||(super.setBound(A),A=A["angle"],isDef(A)&&this.style.setOption({rotate:A}));}getParentLayer(){return getParentLayer(this.parent)}initBoundOffset(){var A=this.getParentLayer();this.bound.setOffset(A.left,A.top);}updateLocation(){var A=this.getParentLayer(this);this.top=this.bound.plainReal().top-A.top,this.left=this.bound.plainReal().left-A.left,this.updateBoundRef();}updateBoundRef(A,e){var t=this.getParentLayer();isDef(A)||(A=t.left),isDef(e)||(e=t.top),this.bound.setOffset(A,e);}adapterResize(){this.app&&this._adapterResize();}loadEmptyStyle(){!this.controlDashByApi&&this.el&&(this._validEmpty()?(this.emptyStyle=!0,this._addDashBorder()):(this.emptyStyle=!1,this._removeDashBorder()));}showDash(A){this.controlDashByApi="show",this._addDashBorder(A);}hiddenDash(){this._removeDashBorder(),this.controlDashByApi="hidden";}showPreSelector(){this.preSelected=!0;var A=this.root.canvas.getZoom();this.emptyStyle?this._updateDashBorder({border:1/A+"px dashed #027AFF"}):this.showDash({border:2/A+"px dashed #027AFF"});}hiddenPreSelector(){this.emptyStyle?this._updateDashBorder():this.hiddenDash(),this.preSelected=!1;}toJSON(){var A=super.toJSON();return delete A.children,A}_animationEndCb(A){A&&A(this);}_updateStyle(){super._updateStyle(),this.loadEmptyStyle();}_setVisible(){var A=setContainerDisplay(this);return super._setVisible(A),this.adapterResize(),A}_addDashBorder(A={}){var e;return !this.dashBorderDom&&"hidden"!==this.controlDashByApi&&(e=createElement(),this.dashBorderDom=e,this._updateDashBorder(A),this.el.appendChild(e),this.root.on("canvasMode",this._showDashByCanvasMode,this),!0)}_updateDashBorder(e={}){if(!this.dashBorderDom)return !1;if(Object.keys(e).length){let A=defaultDashBorder;for(const t in e)Object.hasOwn(e,t)&&(A+=`${t}:${e[t]};`);this.dashBorderDom.style=A;}else this.dashBorderDom.style=defaultDashBorder;return !0}_removeDashBorder(){return !!this.dashBorderDom&&(this.el.removeChild(this.dashBorderDom),this.dashBorderDom=null,this.root.off("canvasMode",this._showDashByCanvasMode,this),!0)}_showDashByCanvasMode(A){this.root.CANVASMODE.PLAY===A?this.dashBorderDom.style.display="none":this.root.CANVASMODE.EDIT===A&&(this.dashBorderDom.style.display="block");}_dblclickFn(){this._canEnterPreview()&&(this.zDown&&this.zIndexUp(),this.root.enterInsidePreview(this));}_canEnterPreview(){return !this.previewModeState&&!checkLayoutType(this.parent,LAYOUT_MAP.GROUP)&&!this.textEditState}_destroyTruthy(){maskDom&&1===this.root.containers.length&&(maskDom.remove(),maskDom=null),this.adapter&&this.adapter.destroy(),super._destroyTruthy();}_validEmpty(){var{backgroundColor:A,backgroundImage:e,opacity:t}=this.el.style,i=this.root.canvasMode===CANVAS_MODE.EDIT,s=!!this._initAdapterData||!!this.adapter;return i&&!s&&(!e||"initial"===e)&&(!A||"rgba(0, 0, 0, 0)"===A||"transparent"===A||A&&"0"===t)}_enterPreview(){return !this.previewModeLock&&(maskDom=this.createMask(),log.info("进入预览模式"),this.select(),this.root.canvas.el.appendChild(maskDom),this._pauseEvent(),this.root.canvas._destroyEvent(),this.root.canvas.setZoomState(!0),this._destroyMask(),this.selectLock=!0,this.previewModeState=!0)}_exitPreview(){return log.info("退出预览模式"),this.root.canvas.el.removeChild(maskDom),this._startEvent(),this.root.canvas._initEvent(),this.root.canvas.setZoomState(!1),this._initMask(),this.selectLock=!1,this.previewModeState=!1,this.zDown&&this.zIndexDown(),!0}};class DefaultContainer extends Container$1{static factory(A,e){return new DefaultContainer(A,e)}static factoryConfig(A,e,t){return new DefaultContainer(A,e,t)}constructor(A,e,t){super(A,e,t),this.isDefaultContainer=!0,this.zDown=e.zDown,this.penetrateOnplay=!1;}init(){this.config.isLock=!1,super.init(),this.previewModeLock=!1,this.dom=this.contentEl;}changeEventByMode(A){A?this._initEvent():this._destroyEvent(),this.contentEl.style.pointerEvents="all";}createMask(){var A=this.root.config.theme["mask"];return createElementWithAttr("div",{...MASK_STYLE,background:A.defaultContainer.background||A.background,opacity:A.defaultContainer.opacity||A.opacity},{id:"previewMask"})}loadEmptyStyle(){return !1}showDash(){return !1}hiddenDash(){return !1}toJSON(){var A=super.toJSON();return A.type="DefaultContainer",A}_updateStyle(){super._updateStyle();}_destroyTruthy(){this.root.off("canvasMode",this._canvasModeFn),this.root.off("beforeCanvasMode",this._beforeCanvasModeFn),super._destroyTruthy();}_beforeCanvasModeFn(A){this.root.CANVASMODE.PLAY===A&&this.previewModeState&&this.root.exitInsidePreview();}_canvasModeFn(A){this.root.CANVASMODE.PLAY===A?this._destroyMask():this.root.CANVASMODE.EDIT===A&&this._initMask();}}class Adapter{constructor(A,e,t={}){return A instanceof Container$1?(this.adapter=adapterManager.creatComponent(e.type,e.name,A,t),this.adapter._resolve=null,this.adapter.mounted=function(){return new Promise(A=>{this._resolve?A():this._resolve=A;})},A.root.nextTick(()=>{this.adapter._initComponent(e.opts);}),A.adapter=this.adapter,this.adapter):(log.warn("请传入正确父节点"),null)}}window.THING?window.THING.UI=UI:log.warn("请引入 ThingJS 后使用"),layoutManager.register(LAYOUT_MAP.UI,UI),layoutManager.register(LAYOUT_MAP.CANVAS,Canvas$1),layoutManager.register(LAYOUT_MAP.LAYER,Layer$2),layoutManager.register(LAYOUT_MAP.GROUP,Group$1),layoutManager.register(LAYOUT_MAP.CONTAINER,Container$1),layoutManager.register(LAYOUT_MAP.DEFAULTCONTAINER,DefaultContainer),UI.Layer=function(...A){return Layer$2.factory(...A)},UI.Group=function(...A){return Group$1.factory(...A)},UI.Container=function(...A){return Container$1.factory(...A)},UI.DefaultContainer=function(...A){return DefaultContainer.factory(...A)},UI.ScaleManage=function(...A){return new ScaleManage(...A)},UI.use=mm.register.bind(mm),UI.mixin=mm.mixin.bind(mm),UI.adapterManager=adapterManager,UI.Adapter=Adapter,UI.use(conchLifeCycle),UI.STATIC={CANVAS_MODE:CANVAS_MODE,CANVAS_SCALE_MODE:CANVAS_SCALE_MODE};let BaseAdapter$2 = class BaseAdapter{static factory(A,e,t,i){}constructor(A,e,t,i={}){this.parent=t,this.name=e,this.type=A,this.componentInstance=null,this.config=i,this.dom=null,this.complete=!1,this.initDom();}beforeMount(){}mounted(){this.complete=!0;}beforeUpdate(){}updated(){}beforeDestroy(){}destroyed(){}initDom(){var A=createElement();A.style.width=this.parent.width+"px",A.style.height=this.parent.height+"px",this.dom=A;}init(A){this.beforeMount(),this._initComponent(A),this.mounted();}update(){this.beforeUpdate(),this._updateComponent(),this.updated();}setConfig(A,e){e?this.config[e]=A:this.config=A;}getConfig(A){return A?this.config[A]:this.config}getComponentInstance(){return this.componentInstance}destroy(){this.beforeDestroy(),this._destroyComponent(),this.destroyed();}resize(){var A=this.parent.width,e=this.parent.height;this.parent.contentEl.style.width=A+"px",this.parent.contentEl.style.height=e+"px",this.dom.style.width=A+"px",this.dom.style.height=e+"px",this.complete&&this.componentInstance&&this.componentInstance.resize&&this.componentInstance.resize();}toJSON(){}_initComponent(A){}_updateComponent(){}_destroyComponent(){this.parent.loadEmptyStyle&&this.parent.loadEmptyStyle();}_componentComplete(){this.parent.loadEmptyStyle&&this.parent.loadEmptyStyle(),this.parent.root.emit("componentComplete",{parent:this.parent,adapter:this}),this.parent.root.emit("collectCompComplete");}};let conch;let ConchAdapter$1 = class ConchAdapter extends BaseAdapter$2{static factory(A,e,t,i){if(conch||ConchAdapter._loadConch(),conch&&conch[e])return new ConchAdapter(A,e,t,i);throw new Error(`Conch没有加载或Conch中没有ID为${e}的组件`)}static _loadConch(){return window.conch?conch=window.conch:(log.warn("请先加载spray-conch，否则组件将无法使用"),!1)}constructor(A,e,t,i){super(A,e,t,i);}setOption(A){A&&(this.config.opts=A,this.componentInstance)&&this.componentInstance.setOption(this.config.opts);}setData(A){this.config.data=A,this.componentInstance&&this.componentInstance.setData(this.config.data);}toJSON(){this.config.type=this.type,this.config.name=this.name;var A=this.componentInstance;if(A)if(isType$1(A.toJSON,"Function")){var e=A.toJSON();for(const t in e)e[t]&&(this.config[t]=e[t]);}else this.oldtoJSON(A);return this.config}oldtoJSON(A){"echarts"===A.type&&A.config?this.config.opts=A.config:this.config.opts=A.opts;}async _initComponent(A){if(this.config.option=merge({prefix:"/s-static"},A||{}),ConchAdapter._loadConch(),!conch[this.name])throw new Error(`组件${this.name}未检测到，请先到spray-conch中下载对应的组件包`);this.parent.contentEl&&this.parent.contentEl.appendChild(this.dom);try{var e={theme:this.config.theme,padding:this.config.padding};this.parent&&!this.componentInstance&&this.dom&&(this.componentInstance=new conch[this.name](this.dom,{config:e,...this.config.option})),this.componentInstance&&(this.componentInstance.parent=this.parent),await this.componentInstance.render(),this._resolve?"function"==typeof this._resolve&&this._resolve():this._resolve=!0;}catch(A){this.error=A;}try{Reflect.has(this.config,"data")&&this.setData(this.config.data),Reflect.has(this.config,"opts")&&this.setOption(this.config.opts);}catch(A){console.error(A);}return this.complete=!0,this.parent.root.config.enableContainerPreview&&(this.parent.previewModeLock=!1),this._componentComplete(),!0}_updateComponent(){this.complete=!1,this.componentInstance&&this._initComponent(),this.complete=!0;}_destroyComponent(){this.componentInstance&&this.componentInstance.destroy(),this.config=null,this.dom&&this.parent.contentEl&&this.parent.contentEl.removeChild(this.dom),this.parent.adapter=null,this.parent.previewModeLock=!0,this.parent=null;}};class AlignmentLines{constructor(A){this.lines=A?setLines(A):null;}update(A){A&&(this.lines=setLines(A));}calcNearLine(t={}){if(!this.lines.v||!this.lines.h)return null;var A=[...this.lines.v,...this.lines.h];const i={v:[],h:[]};return A.forEach(A=>{var e;A.type.includes("v")?(e=findLine(A,t.v))&&i.v.push({val:Math.abs(Math.round(e.pos)-Math.round(A.pos)),from:A,...e}):(e=findLine(A,t.h))&&i.h.push({val:Math.abs(Math.round(e.pos)-Math.round(A.pos)),from:A,...e});}),{vLines:getShowLines(i.v)||[],hLines:getShowLines(i.h)||[],vLinesAll:i.v||[],hLinesAll:i.h||[]}}}function setLines(A){var{left:e,top:t,width:i,height:s}=A;return {v:[{type:"vl",pos:e,start:t,end:t+s,displayable:A},{type:"vm",pos:e+i/2,start:t,end:t+s,displayable:A},{type:"vr",pos:e+i,start:t,end:t+s,displayable:A}],h:[{type:"ht",pos:t,start:e,end:e+i,displayable:A},{type:"hm",pos:t+s/2,start:e,end:e+i,displayable:A},{type:"hb",pos:t+s,start:e,end:e+i,displayable:A}]}}function findLine(A={},e=[]){if(e.length<=0)return null;let t=0,i=e.length-1;for(;t<=i;){var s=Math.round(i-(i-t)/2);if(Math.round(A.pos)<Math.round(e[s].pos))i=s-1;else {if(!(Math.round(A.pos)>Math.round(e[s].pos)))return e[s];t=s+1;}}return t===i?e[t]:t>i?t>=e.length?e[i]:i<0?e[0]:Math.abs(Math.round(e[i].pos)-Math.round(A.pos))<Math.abs(Math.round(e[t].pos)-Math.round(A.pos))?e[i]:e[t]:null}function getShowLines(A=[]){return A.sort((A,e)=>A.val-e.val),A.filter((A,e)=>0===e||0===A.val)}class Line extends Base$2{constructor(A,e){super();var A=A.config["theme"]["alignmentLines"];this.index=e,this.realWidth=A.width,this.realHeight=A.width,this.color=A.color,this.visible=!1,this.isAdsorbed=!1,this.adsorbMovement=0,this.init();}init(){this.initStyle={display:"none",top:"0px",left:"0px",width:this.realWidth+"px",height:this.realHeight+"px",backgroundColor:this.color,position:"absolute",pointerEvents:"all"},super.init("alignment-line"+this.index,this.initStyle);}resetStyle(){this.setStyle(this.initStyle);}show(A={}){A.display="block",this.setStyle(A),this.visible=!0;}hidden(){this.visible&&this.setStyle({top:"0px",left:"0px",display:"none"}),this.visible=!1;}}const rulerBreakAdsorb=2,alignBreakAdsorb=0;class Adsorb{constructor(){this.adsorbDistance=4,this.adsorbed=[0,0],this.rulerAdsorbed=[0,0],this.ratio=1;}setOffset(A={}){A.top&&(setMouseMoveInfo({x:0,y:A.top}),this.rulerAdsorbed[1]=1),A.left&&(setMouseMoveInfo({x:A.left,y:0}),this.rulerAdsorbed[0]=1);}execute(){1===this.rulerAdsorbed[0]&&(movement.doMove(),movement.canMoveX=!1,this.rulerAdsorbed[0]=0),1===this.rulerAdsorbed[1]&&(movement.doMove(),movement.canMoveY=!1,this.rulerAdsorbed[1]=0),this.isBreakAdsorb(rulerBreakAdsorb);}setAlignment(e,A=[]){A.forEach(A=>{"left"===A.type&&0===this.adsorbed[0]&&(setMouseMoveInfo({x:A.offset,y:0},e),this.adsorbed[0]=1),"top"===A.type&&0===this.adsorbed[1]&&(setMouseMoveInfo({x:0,y:A.offset},e),this.adsorbed[1]=1);});}executeAlignment(A){var e=!1,t=getInstance(A);return 1===this.adsorbed[0]&&(e=!0,t.doMove(),t.canMoveX=!1,this.adsorbed[0]=0),1===this.adsorbed[1]&&(e=!0,t.doMove(),t.canMoveY=!1,this.adsorbed[1]=0),this.isBreakAdsorb(alignBreakAdsorb,A),e}isBreakAdsorb(A,e="move"){var e=getInstance(e),{mouseMoveInfo:t,_mouseMoveInfo:i}=getMouseMoveInfo(e);Math.abs(i.x-t.x)>A&&(e.canMoveX=!0),Math.abs(i.y-t.y)>A&&(e.canMoveY=!0);}destroy(){this.adsorbDistance=null;}resetAdsorbMovement(){this.adsorbed=[0,0];}resetCanmove(A){A=getInstance(A);A.canMoveX=!0,A.canMoveY=!0;}}function getMouseMoveInfo(A){return {mouseMoveInfo:{x:A.mouseMoveInfo.x,y:A.mouseMoveInfo.y},_mouseMoveInfo:{x:A._mouseMoveInfo.x,y:A._mouseMoveInfo.y}}}function setMouseMoveInfo({x:A,y:e},t="move"){switch(t){case"move":movement.mouseMoveInfo.x+=A,movement.mouseMoveInfo.y+=e;break;case"resize":resizer.offset.x=A,resizer.offset.y=e;}}function getInstance(A){switch(A){case"move":return movement;case"resize":return resizer}}const defaultStyle={position:"absolute",top:"0px",left:"0px",backgroundColor:"#CCFF99"};class DistanceLine{constructor(A,e){var{alignmentLines:t}=A.root.config["theme"];this.parent=A,this.index=e,this.el=null,this.toolTip=null,this.leftSide=null,this.rightSide=null,this.index=e,this.isShow=!1,this.realWidth=t.distanceStyle.width,this.realHeight=t.distanceStyle.width,defaultStyle.backgroundColor=t.distanceStyle.color,this.toolTipWidth=40,this.toolTipHeight=20,this.sideWidth=2,this.sideHeight=2,this.sideShowSize=8,this.init(e);}init(A){this.el=createElement(),this.toolTip=createElement(),this.leftSide=createElement(),this.rightSide=createElement(),this.el.dataset.id="distance-line"+A,this.toolTip.dataset.id="tip"+A,this.leftSide.dataset.id="left-side"+A,this.rightSide.dataset.id="right-side"+A,this.initStyle(),this.el.appendChild(this.toolTip),this.el.appendChild(this.leftSide),this.el.appendChild(this.rightSide),this.parent.el.appendChild(this.el);}initStyle(){Object.assign(this.el.style,defaultStyle,{display:"none",width:this.realWidth+"px",height:this.realHeight+"px",zIndex:20}),Object.assign(this.toolTip.style,defaultStyle,{display:"block",width:this.toolTipWidth+"px",height:this.toolTipHeight+"px",color:"#333",lineHeight:this.toolTipHeight+"px",textAlign:"center"}),Object.assign(this.leftSide.style,defaultStyle,{display:"block",width:this.sideWidth+"px",height:this.sideHeight+"px"}),Object.assign(this.rightSide.style,defaultStyle,{display:"block",width:this.sideWidth+"px",height:this.sideHeight+"px"});}resetStyle(){this.initStyle(),this.isShow=!1;}show(A,e,t=1){if(A)switch(this.isShow=!0,e){case 0:Object.assign(this.el.style,{display:"block",left:A.pos+("vl"===A.from.type?-1:0)+"px",top:A.from.start-A.distance+"px",height:A.distance+"px",transform:`scaleX(${1/t})`}),this.showTipY(A,t),this.showSideY(A);break;case 1:Object.assign(this.el.style,{display:"block",left:A.pos+("vl"===A.from.type?-1:0)+"px",top:A.from.end+"px",height:A.distance+"px",transform:`scaleX(${1/t})`}),this.showTipY(A,t),this.showSideY(A);break;case 2:Object.assign(this.el.style,{display:"block",left:A.from.start-A.distance+"px",top:A.pos+("ht"===A.from.type?-1:0)+"px",width:A.distance+"px",transform:`scaleY(${1/t})`}),this.showTipX(A,t),this.showSideX(A);break;case 3:Object.assign(this.el.style,{display:"block",left:A.from.end+"px",top:A.pos+("ht"===A.from.type?-1:0)+"px",width:A.distance+"px",transform:`scaleY(${1/t})`}),this.showTipX(A,t),this.showSideX(A);}}showTipX(A,e){this.toolTip.innerText=A.distance,Object.assign(this.toolTip.style,{left:A.distance/2-20+"px",transform:`scaleX(${1/e})`});}showTipY(A,e){this.toolTip.innerText=A.distance,Object.assign(this.toolTip.style,{top:A.distance/2-10+"px",transform:`scaleY(${1/e})`});}showSideX(A){Object.assign(this.leftSide.style,{height:this.sideShowSize+"px",transform:"translate(0, -50%)"}),Object.assign(this.rightSide.style,{height:this.sideShowSize+"'px",transform:`translate(${A.distance-this.sideWidth}px, -50%)`});}showSideY(A){Object.assign(this.leftSide.style,{width:this.sideShowSize+"px",transform:"translate(-50%, 0)"}),Object.assign(this.rightSide.style,{width:this.sideShowSize+"px",transform:`translate(-50%, ${A.distance-this.sideHeight}px)`});}}class DistanceTip{constructor(A){this.parent=A,this.left=[],this.right=[],this.top=[],this.bottom=[],this.compareLines=this._compareLines(),this.ratio=1;}show(A){this.init(),this.setLines(A),this.showLines();}init(){this.left=[],this.right=[],this.top=[],this.bottom=[];}setLines(A=[]){const t={ht:0,hm:1,hb:2},i={vl:0,vm:1,vr:2};A.forEach(A=>{var e=A.from.type;e.includes("v")?(A.start<A.from.start&&(this.top[i[e]]=this._setDistanceItem({target:this.top[i[e]],line:A,index:0})),A.end>A.from.end&&(this.bottom[i[e]]=this._setDistanceItem({target:this.bottom[i[e]],line:A,index:1}))):(A.start<A.from.start&&(this.left[t[e]]=this._setDistanceItem({target:this.left[t[e]],line:A,index:2})),A.end>A.from.end&&(this.right[t[e]]=this._setDistanceItem({target:this.right[t[e]],line:A,index:3})));});}showLines(){var A=this.parent.distanceLines;const i=[this.top,this.bottom,this.left,this.right];A.forEach((A,e)=>{A.resetStyle();var t=this._getLine(i[e],e);A.show(t,e,this.ratio);});}hideLines(){this.parent.distanceLines.forEach(A=>{A.resetStyle();});}_getLine(A,e){return A.forEach(A=>{A.distance=Math.round(Math.abs(this.compareLines.get(e)(A)));}),A.sort((A,e)=>A.distance-e.distance)[0]}_compareLines(){var A=new Map;return A.set(0,compareLinesLT),A.set(1,compareLinesRB),A.set(2,compareLinesLT),A.set(3,compareLinesRB),A}_setDistanceItem(A={}){var{target:A,index:e,line:t}=A;return A&&Math.abs(this.compareLines.get(e)(A))<=Math.abs(this.compareLines.get(e)(t))?A:t}}function compareLinesLT(A){return A.end>=A.from.start?A.from.start-A.start:A.from.start-A.end}function compareLinesRB(A){return A.start<=A.from.end?A.from.end-A.end:A.from.end-A.start}const handlerFnArr=[[0],[1],[2],[3],[0,2],[0,3],[1,2],[1,3]];class AlignmentLinesManager{constructor(){this.parent=null,this.el=createElement(),this.el.dataset.id="alignment",this.el.style.cssText="position:absolute;top:0;left:0;z-index:21;",this.lineEntities=null,this.graphLinesData={},this.graphLayerIds={},this.alignmentLines=null,this.updated=!1,this.lineSelect=null,this.adsorb=null,this.adsorbLinesInfo=null,this.distanceLines=null,this.distanceTip=null;}init(e,A){if(!this.parent){this.parent=A,this.root=e,mount(this,{contentEl:A.el}),this.lineEntities=[];for(let A=0;A<6;A++){var t=new Line(e,A);mount(t,this),this.lineEntities.push(t);}this.distanceLines=[];for(let A=0;A<4;A++)this.distanceLines.push(new DistanceLine(this,A));this.alignmentLines={v:[],h:[]},this.updated=!1,this.lineSelect=new AlignmentLines,this.adsorb=new Adsorb,this.distanceTip=new DistanceTip(this),this.initEvent(),this.resetStore();}}disable(){this.destroyEvent(),this.enable=!1,this.lineEntities&&this.lineEntities.forEach(A=>A.destroy()),unmount(this),this.lineEntities=null,this.lineSelect=null,this.adsorb=null,this.adsorbLinesInfo=null,this.parent=null,this.root=null,this.distanceLines=null,this.distanceTip=null;}destroy(){this.disable(),this.el=null,this.graphLinesData=null,this.graphLayerIds=null;}initEvent(){var A=this.root;A.on("select",this.resetStore,this),A.on("graphMoveEnd",this.hidden,this),A.on("graphResizeEnd",this.hidden,this);}destroyEvent(){var A=this.root;A&&(A.off("select",this.resetStore,this),A.off("graphMoveEnd",this.hidden,this),A.off("graphResizeEnd",this.hidden,this));}addLine(A,e,t){A&&t&&(this.updated=!1,this.graphLinesData[A]=t,this.graphLayerIds[A]=e);}removeLine(A){A&&(this.updated=!1,A in this.graphLinesData&&delete this.graphLinesData[A],A in this.graphLayerIds)&&delete this.graphLayerIds[A];}resetStore(){var e=selector.getContainers();if(!(e.length<=0)){let A;if("layer"!==this.root.alignmentLineBase||(A=getLayerId(e))){var t,i=this.root["operation"],s=(this.lineSelect.update(i.getSelectBoundRect()),getIds(e)),{graphLinesData:n,alignmentLines:r}=(this.alignmentLines={v:[],h:[]},this);for(const o in n)this.canAddLine(s,o,A)&&(t=n[o],r.v=[...r.v,...t.lines.v],r.h=[...r.h,...t.lines.h]);r.v=this.union(r.v),r.h=this.union(r.h),this.updated=!0,this.adsorb.resetAdsorbMovement();}}}union(A=[]){const i={};return A.forEach(A=>{var e,t;i[A.pos]?(e=[(t=i[A.pos]).start,t.end,A.start,A.end].sort((A,e)=>A-e),t=[...this.getBefore(t),...this.getBefore(A)],i[A.pos]={...A,start:e[0],end:e[3],isCombine:!0,before:t}):i[A.pos]=A;}),Object.values(i).sort((A,e)=>A.pos-e.pos)}getBefore(A={}){var e=A.before;return !e||e.length<1?[A]:[...e]}repaint({event:A,handler:e},t="move"){var i,s;this.updated&&!selector.getLayers().length&&(i=selector.getContainers(),this.parent?(s=this.root["operation"],(s=s.getSelectBoundRect())&&(this.lineSelect.update(s),this.updateContainerAlignmentLines(i),A)&&(s=this.showLine(t,e,A)["info"],!s.length||[37,38,39,40].includes(A.keyCode)?clearStopMove.call(this,t):executeAdsorb.call(this,s,t,e))):this.updateContainerAlignmentLines(i));}updateContainerAlignmentLines(A=[]){A.forEach(A=>{A.alignmentLines&&A.alignmentLines.update(A.bound.plainReal());});}showLine(t="move",i=null,s={}){var A=this.lineSelect.calcNearLine(this.alignmentLines);const n=this.parent.getZoom();if(!Array.isArray(A.vLines)||!Array.isArray(A.hLines))return [];const r=[...A.vLines,...A.hLines],o=[...A.vLinesAll,...A.hLinesAll],a=[],l=[],c=[37,38,39,40];return this.lineEntities.forEach((A,e)=>{e=("move"===t?r:o)[e];A.resetStyle(),!e||e.val>this.adsorb.adsorbDistance/n||"resize"===t&&e.from.type.includes("m")||c.includes(s.keyCode)&&0!==e.val?A.hidden():(A.show(getLineStyle(e,n)),a.push(e),"move"===t&&l.push(getMoveInfo(e)),"resize"===t&&l.push(getResizeInfo(e,i)));}),this.distanceTip.ratio=n,this.distanceTip.show(a),{lines:a,info:l}}hidden(){this.lineEntities&&this.lineEntities.forEach(A=>{A.resetStyle();}),this.distanceTip.hideLines(),this.adsorb.resetAdsorbMovement();}canAddLine(A,e,t){A=A.includes(e),e="canvas"===this.root.alignmentLineBase||this.graphLayerIds[e]===t;return !A&&e}}function clearStopMove(A){this.adsorb.resetCanmove(A);}function executeAdsorb(A,e,t){this.adsorb.ratio=this.parent.getZoom(),this.adsorb.setAlignment(e,A),this.adsorb.executeAlignment(e)&&this.showLine(e,t);}function getIds(A){return A.map?A.map(A=>A.id):[]}function getLineStyle(A,e){var t=[A.start,A.end,A.from.start,A.from.end].sort((A,e)=>A-e);return A.type.includes("v")?{top:t[0]+"px",left:A.pos+("vl"===A.from.type?-1:0)+"px",transform:`scaleX(${1/e})`,height:Math.abs(t[3]-t[0])+"px"}:{top:A.pos+("ht"===A.from.type?-1:0)+"px",left:t[0]+"px",transform:`scaleY(${1/e})`,width:Math.abs(t[3]-t[0])+"px"}}function getMoveInfo(A){var{pos:A,from:e,type:t}=A,A=Math.round(A)-Math.round(e.pos);return t.includes("v")?{offset:A,type:"left"}:t.includes("h")?{offset:A,type:"top"}:{}}function getResizeInfo(A,e){const t=["ht","hb","vl","vr"];var e=handlerFnArr[e.index].map(A=>t[A]),{pos:A,from:i,type:s}=A,A=Math.round(A)-Math.round(i.pos);if(i&&i.type&&!i.type.includes("m")){if(s.includes("v")&&e.includes(i.type))return {offset:A,type:"left"};if(s.includes("h")&&e.includes(i.type))return {offset:A,type:"top"}}return {}}function getLayerId(t){var i=new Set;for(let A=0,e;e=t[A];A++){if(1<i.size)return null;i.add(getLayerParentId(e));}return Array.from(i)[0]}const alignmentLinesManager=new AlignmentLinesManager,alignmentLines={setup(A){A.mixin({ui:{enableAlignment:enableAlignment,disableAlignment:disableAlignment}});},container:{beforeMount(){var A=new AlignmentLines(this.bound.plainReal());alignmentLinesManager.addLine(this.id,getLayerParentId(this),A),this.alignmentLines=A;},beforeDestroy(){alignmentLinesManager.removeLine(this.id),this.alignmentLines=null;}},ui:{beforeMount(){this.on("graphMoving",repaintMove),this.on("graphResizing",repaintResize),this.on("moveLayer",updateAfterMoveLayer),this.on("canvasMode",playDisplayAlignment,this);},beforeDestroy(){this.off("graphMoving",repaintMove),this.off("graphResizing",repaintResize),this.off("canvasMode",playDisplayAlignment,this);}},canvas:{mounted(){alignmentLinesManager.init(this.root,this);},beforeDestroy(){alignmentLinesManager.disable();}}};function enableAlignment(){alignmentLinesManager.init(this,this.canvas);}function disableAlignment(){alignmentLinesManager.disable();}function repaintMove(A){alignmentLinesManager.repaint(A,"move");}function repaintResize(A){alignmentLinesManager.repaint(A,"resize");}function updateAfterMoveLayer({layers:A}){A&&A.length&&A.forEach(A=>alignmentLinesManager.updateContainerAlignmentLines(A.containers));}function playDisplayAlignment(A){this.CANVASMODE.PLAY===A?this.disableAlignment():this.CANVASMODE.EDIT===A&&this.enableAlignment();}class CreateEl{constructor(A){var{ruler:e}=A.config["theme"];this.background=e.color,this.depth=e.width,this.lineColor=e.lineStyle.color,this.lineWidth=e.lineStyle.width,this.crossLine=e.border,this.iconBorderWidth=e.icon.borderWidth,this.iconBorderStyle=e.icon.borderStyle,this.iconBorderColor=e.icon.borderColor,this.iconColor=e.iconColor||e.icon.color,this.rulerLineWidth=5,this.svgShowLine='<svg t="1635145517567" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6078" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M512 344c-92.64 0-168 75.36-168 168s75.36 168 168 168 168-75.36 168-168-75.36-168-168-168z m0 272a104 104 0 1 1 104-104 104.11 104.11 0 0 1-104 104z m312.36-284.89c-43.68-34.92-90.48-62.9-139.1-83.16-57.67-24-116-36.23-173.26-36.23S396.39 224 338.66 248.25c-48.54 20.38-95.33 48.51-139.07 83.62-46.75 37.53-77 72.54-94.15 95.3C79.61 461.47 66.51 490 66.51 512s13.1 50.53 38.93 84.83c17.15 22.76 47.4 57.77 94.15 95.3 43.74 35.11 90.53 63.24 139.07 83.62 57.73 24.24 116 36.53 173.34 36.53s115.59-12.19 173.26-36.23c48.62-20.26 95.42-48.24 139.1-83.16C888.48 641.64 957.49 563.17 957.49 512s-69.01-129.64-133.13-180.89z m41.36 230.3c-21.37 28-51 57.48-83.39 83.14C733.39 683.29 633.2 748.28 512 748.28c-120.49 0-220.6-65-269.55-103.83-32.32-25.6-62-55.12-83.59-83.11s-27.78-45.11-28.33-49.34c0.55-4.23 6.63-21.2 28.33-49.34s51.27-57.51 83.59-83.11C291.4 340.77 391.51 275.72 512 275.72c121.2 0 221.39 65 270.33 103.73 32.41 25.66 62 55.18 83.39 83.14C887.43 491 893.13 508 893.48 512c-0.35 4-6.05 21-27.76 49.41z" fill="currentColor" p-id="6079"></path></svg>',this.svgHideLine='<svg t="1635143522523" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5772" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path d="M824.36 331.11A615.73 615.73 0 0 0 774.27 295l124.48-124.49a32 32 0 0 0-45.25-45.26l-137 137q-15.5-7.7-31.24-14.25c-57.67-24-116-36.23-173.26-36.23S396.39 224 338.66 248.25c-48.54 20.38-95.33 48.51-139.07 83.62-46.75 37.53-77 72.54-94.15 95.3C79.61 461.47 66.51 490 66.51 512s13.1 50.53 38.93 84.83c17.15 22.76 47.4 57.77 94.15 95.3a621.85 621.85 0 0 0 50.48 36.55L125.25 853.5a32 32 0 0 0 45.26 45.25L307.7 761.56q15.35 7.61 31 14.19c57.73 24.24 116 36.53 173.34 36.53s115.59-12.19 173.26-36.23c48.62-20.26 95.42-48.24 139.1-83.16C888.48 641.64 957.49 563.17 957.49 512s-69.01-129.64-133.13-180.89zM242.45 644.45c-32.32-25.6-62-55.12-83.59-83.11s-27.78-45.11-28.33-49.34c0.55-4.23 6.63-21.2 28.33-49.34s51.27-57.51 83.59-83.11C291.4 340.77 391.51 275.72 512 275.72c58 0 111.25 14.91 156.33 34.69L606 372.79A167 167 0 0 0 512 344c-92.64 0-168 75.36-168 168a167 167 0 0 0 28.79 94l-76.24 76.24a548.79 548.79 0 0 1-54.1-37.79zM616 512a104 104 0 0 1-151.34 92.59l139.93-139.93A103.42 103.42 0 0 1 616 512z m-208 0a104 104 0 0 1 151.34-92.59L419.41 559.34A103.42 103.42 0 0 1 408 512z m457.72 49.41c-21.37 28-51 57.48-83.39 83.14C733.39 683.29 633.2 748.28 512 748.28c-57.88 0-111-15-156.11-34.91l62.16-62.16A167 167 0 0 0 512 680c92.64 0 168-75.36 168-168a167 167 0 0 0-28.79-93.95l76.56-76.57a545.78 545.78 0 0 1 54.56 38c32.41 25.66 62 55.18 83.39 83.14C887.43 491 893.13 508 893.48 512c-0.35 4-6.05 21-27.76 49.41z" fill="currentColor" p-id="5773"></path></svg>',this.createRuler(A);}createDom(A){var e=A.canvas?createElement(A.canvas):createElement();return e.dataset.id=A.id,e.style.cssText=A.style,A.title&&(e.title=A.title),mount({el:e},A.parent),e}createRuler(A){this.ruler=this.createDom({id:"ruler",style:`position: absolute;
              top: 0;
              left: 0;
              width:100%;`,parent:A}),this.createRulerFill(),this.createRulerTop(),this.createRulerLeft(),this.createCount(),this.createExpectionLine();}createRulerTop(){this.rulerTop=this.createDom({id:"ruler-top",style:`position: absolute;
              top: 0;
              left: 0;
              width: 30000px;
              height: ${this.depth}px;
              margin-left: ${this.depth}px;
              background: ${this.background};
              overflow: hidden;
              z-index: 500;
              border-bottom: ${this.crossLine};
              box-sizing: border-box;`,parent:{el:this.ruler}}),this.createTopBoard(),this.createTopCanvas();}createTopBoard(){this.rulerTopBoard=this.createDom({id:"ruler-top-board",style:"position: absolute;",parent:{el:this.rulerTop}});}createTopCanvas(){this.rulerTopCanvas=this.createDom({canvas:"canvas",id:"ruler-top-canvas",style:`display: inline-block;
              vertical-align: baseline;`,parent:{el:this.rulerTopBoard}}),this.rulerTopCanvas.width=8e3,this.rulerTopCanvas.height=this.depth;}createTopLine(A=0){A=this.createDom({id:"ruler-top-line",title:"双击删除参考线",style:`width: ${this.rulerLineWidth}px;
              height: 100vh;
              background-color: transparent;
              position: absolute;
              cursor: col-resize;
              z-index: 510;
              transform: translateX(${A});
              `,parent:{el:this.ruler}});return this.createTopLineItem(A),A}createTopLineItem(A){this.createDom({id:"ruler-top-line-item",style:`border-left: ${this.lineWidth}px solid ${this.lineColor};
              height: 100%;
              margin-left: 0px`,parent:{el:A}});}createRulerLeft(){var A="rotate(90deg) translateX(0px)",e="0 100% 0";this.rulerLeft=this.createDom({id:"ruler-left",style:`position: absolute;
              top: 0;
              left: 0;
              width: 30000px;
              height: ${this.depth}px;
              background: ${this.background};
              border-top: ${this.crossLine};
              box-sizing: border-box;
              overflow: hidden;
              transform: ${A};
              transform-origin: ${e};
              -moz-transform: ${A};
              -moz-transform-origin: ${e};
              -webkit-transform: ${A};
              -webkit-transform-origin: ${e};
              z-index: 500;`,parent:{el:this.ruler}}),this.createLeftBoard(),this.createLeftCanvas();}createLeftBoard(){this.rulerLeftBoard=this.createDom({id:"ruler-left-board",style:"position: absolute;",parent:{el:this.rulerLeft}});}createLeftCanvas(){this.rulerLeftCanvas=this.createDom({canvas:"canvas",id:"ruler-left-canvas",style:`display: inline-block;
              vertical-align: baseline;`,parent:{el:this.rulerLeftBoard}}),this.rulerLeftCanvas.width=8e3,this.rulerLeftCanvas.height=this.depth;}createLeftLine(A){A=this.createDom({id:"ruler-left-line",title:"双击删除参考线",style:`width: 100%;
              height: ${this.rulerLineWidth}px;
              background-color: transparent;
              position: absolute;
              cursor: row-resize;
              z-index: 500;
              transform: translateY(${A})`,parent:{el:this.ruler}});return this.createLeftLineItem(A),A}createLeftLineItem(A){this.createDom({id:"ruler-left-line-item",style:`border-top: ${this.lineWidth}px solid ${this.lineColor};
              width: 100%;
              margin-top: 0px`,parent:{el:A}});}createCount(){this.rulerCount=this.createDom({id:"ruler-count",style:`position: absolute;
              top: ${this.depth+2}px;
              left: ${this.depth+2}px;
              z-index: 500;
              padding: 0 5px;
              min-width: 10px;
              height: 20px;
              background-color: #777;
              color: azure;
              font-size:14px;
              user-select: none;
              display: none;`,parent:{el:this.ruler}});}createExpectionLine(){this.createExpectionTopLine(),this.createExpectionLeftLine();}createExpectionTopLine(){this.expectionTopLine=this.createDom({id:"expection-top-line",style:`border-left: 1px dashed ${this.lineColor};
              height: 100vh;
              position: absolute;
              left: 0px;
              topo: 0px;
              z-index: 510;
              pointer-events: none;
              display: none;
              `,parent:{el:this.ruler}});}createExpectionLeftLine(){this.expectionLeftLine=this.createDom({id:"expection-left-line",style:`border-top: 1px dashed ${this.lineColor};
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              z-index: 510;
              pointer-events: none;
              display: none;
              `,parent:{el:this.ruler}});}createRulerFill(){var A=this.guideLine=createElement("div");A.id="ruler-fill",A.style=`
      position: absolute;
      top: 0;
      left: 0;
      width: ${this.depth}px;
      height: ${this.depth}px;
      background: ${this.background};
      z-index: 600;
      color: ${this.iconColor};
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: ${this.iconBorderColor};
      border-style: ${this.iconBorderStyle};
      border-width: ${this.iconBorderWidth};
      box-sizing: border-box;`,A.innerHTML=this.svgShowLine,this.ruler.appendChild(A);}}const rulerMap={top:(A,e,t,i)=>({line:[[A,0],[A,e]],text:[t,i,e]}),left:(A,e,t,i,s)=>({line:[[A,s-e],[A,s]],text:[t,i,s-e]})},lineStyle={top:"left",left:"top"},setLineOffset={top:A=>`translateY(${A})`,left:A=>`translateX(${A})`};class RulerCanvas{constructor(A){var A=A.config["theme"]["ruler"];this.config={rulerWidth:0,interval:10,distance:0,rulerCont:{},rulerDistance:0,defaultDial:1e3,textFont:A.tick.textFont,textColor:A.tick.textColor,lineWidth:A.tick.lineWidth,lineColor:A.tick.lineColor,lineLong:A.tick.lineLong,lineShort:A.tick.lineShort,rulerDepth:A.width,rulerLineActiveColor:A.lineStyle.activeColor,rulerLineColor:A.lineStyle.color},this.adsorb=!1,this.targetSite={},this.adsorbDistance=15,this.events={},this.bindEvents();}createDial(A,e){this._setInterval(A);var A=Number((A*this.config.interval).toFixed(2)),t=parseFloat(A),A=this.rulerCanvas,i=A.getContext("2d"),s=(this.handleFuzzy(A,i),i.clearRect(0,0,A.width,A.height),this.config.rulerWidth),n=this.config.rulerDepth,r=this.config.lineLong,o=this.config.lineShort;for(let A=0;A<s;A+=10){var a=A*t,l=A*this.config.interval-this.config.defaultDial,c=a+t/2,{line:l,text:c}=rulerMap[e](a,r,l,c,n);this.fillText(i,c,e),this.drawLine(i,l);for(let A=1;A<10;A+=1){var h=a+A*t,h=rulerMap[e](h,o,void 0,void 0,n)["line"];this.drawLine(i,h);}}}handleFuzzy(A,e){var t=this.getPixelRatio(e);A.style.width=this.config.rulerWidth+"px",A.style.height=this.config.rulerDepth+"px",A.width=this.config.rulerWidth*t,A.height=this.config.rulerDepth*t,e.scale(t,t);}getPixelRatio(A){A=A.backingStorePixelRatio||A.webkitBackingStorePixelRatio||A.mozBackingStorePixelRatio||A.msBackingStorePixelRatio||A.oBackingStorePixelRatio||A.backingStorePixelRatio||1;return (window.devicePixelRatio||1)/A}fillText(A,e,t){A.font=this.config.textFont,A.fillStyle=this.config.textColor,"left"===t?(t=A.measureText(e[0]).width,A.save(),A.translate(e[1]+t,e[2]),A.rotate(180*Math.PI/180),A.fillText(e[0],0,0),A.restore()):A.fillText(e[0],e[1],e[2]);}drawLine(A,e){A.beginPath(),A.moveTo(e[0][0],e[0][1]),A.lineTo(e[1][0],e[1][1]),A.lineWidth=this.config.lineWidth,A.strokeStyle=this.config.lineColor,A.stroke();}_setInterval(A){A=Number(A.toFixed(2));return 1.3<A?(this.config.interval=2,!0):1<A&&A<=1.3?(this.config.interval=5,!0):.5<A&&A<=1?(this.config.interval=10,!0):A<=.5&&.15<A?(this.config.interval=20,!0):A<=.15&&.2<A?(this.config.interval=50,!0):A<=.2&&(this.config.interval=100,!0)}unmount(A){unmount({el:A});}bindEvents(){["addRulerLine","showRulerCount","hideRulerCount","removeRulerLine","dragRulerLine"].forEach(A=>this.events[A]=this[A].bind(this));}startRuler(A,e){this.zoom=e||this.zoom,this.config.distance=A||this.config.distance,this.config.rulerWidth=Math.max(parseInt(this.rulerCanvas.height),parseInt(this.rulerCanvas.width))+this.config.defaultDial,this.scaleDial(this.config.distance),this.addEvent();}addEvent(){this.rulerDistance.addEventListener("click",this.events.addRulerLine),this.rulerDistance.addEventListener("mousemove",this.events.showRulerCount),this.rulerDistance.addEventListener("mouseleave",this.events.hideRulerCount);}removeEvent(){this.rulerDistance.removeEventListener("click",this.events.addRulerLine),this.rulerDistance.removeEventListener("mousemove",this.events.showRulerCount),this.rulerDistance.removeEventListener("mouseleave",this.events.hideRulerCount);}addRulerLine(A,e){A.stopPropagation();var A=lineStyle[e],t=this.config.rulerCont[A],e=this.els[`create${initialCapital(e)}Line`](t);e.dataset.cont=this.config.rulerCont.cont,e.style.transform=setLineOffset[A](t),e.style.display=this.ruler.hideAllLine?"none":"block",this.bindLineEvents(e),this.root.emit("rulerChange",this.getRulerLines());}parseRulerLine(A,e){var t=lineStyle[A],A=this.els[`create${initialCapital(A)}Line`]();A.dataset.cont=e,A.style.transform=setLineOffset[t](e),A.style.display=this.ruler.hideAllLine?"none":"block",this.bindLineEvents(A);}destroyRulerLine(A){this.rulerCountStatus(!1),this.unmount(A),this.removeLineEvents(A);}bindLineEvents(A){A.addEventListener("dblclick",this.events.removeRulerLine),A.addEventListener("mousedown",this.events.dragRulerLine),A.addEventListener("mousemove",this.events.showRulerCount),A.addEventListener("mouseleave",this.events.hideRulerCount);}removeRulerLine(A){A.stopPropagation();A=A.currentTarget;this.rulerCountStatus(!1),this.unmount(A),this.removeLineEvents(A),this.root.emit("rulerChange",this.getRulerLines());}removeLineEvents(A){A.removeEventListener("dblclick",this.events.removeRulerLine),A.removeEventListener("mousedown",this.events.dragRulerLine),A.removeEventListener("mousemove",this.events.showRulerCount),A.removeEventListener("mouseleave",this.events.hideRulerCount);}dragRulerLine(A,s="left"){var n=!1;this.rulerDistance.removeEventListener("mousemove",this.events.showRulerCount),this.rulerDistance.removeEventListener("mouseleave",this.events.hideRulerCount),A.stopPropagation();const r=A.currentTarget;r.removeEventListener("mousemove",this.events.showRulerCount),r.removeEventListener("mouseleave",this.events.hideRulerCount),document.onmousemove=A=>{A.stopPropagation(),document.body.style.cursor="col-resize";var e="left"===s?"clientX":"clientY",t=this.uiSite(),i=A[e];r[e]=i,r.style.transform=setLineOffset[s](i-t[s]+"px"),r.dataset.cont=parseInt((i-this.els.depth-this.config.distance-t[s])/this.zoom),this.showRulerCount(A,s),n=n||!0;},document.onmouseup=A=>{A.stopPropagation(),n&&this.root.emit("rulerChange",this.getRulerLines()),n=!1,document.body.style.cursor="",document.onmousemove=null,document.onmouseup=null,this.rulerDistance.addEventListener("mousemove",this.events.showRulerCount),this.rulerDistance.addEventListener("mouseleave",this.events.hideRulerCount),r.addEventListener("mousemove",this.events.showRulerCount),r.addEventListener("mouseleave",this.events.hideRulerCount);};}getDial(A,e){this.zoom=A,this.config.distance=parseInt(e);A=parseInt(this.config.defaultDial*this.zoom-this.config.distance);return this.config.rulerDistance=0-A+"px",this.config.rulerDistance}setLineDial(i,s){this.root.nextTick(()=>{this.getRulerLines(s).forEach(A=>{var e=this.config.rulerDepth,t=A.dataset.cont;A.style.transform=setLineOffset[lineStyle[s]](t*this.zoom+i+e+"px");});});}uiSite(){let A=0;return this.root.updateSite&&this.root.updateSite(),A=this.root.ruler?this.root.ruler.getBound(this.root):A}showRulerCount(A,e="left"){A.stopPropagation();var t=A.target===this.rulerCanvas,i=(this.rulerCountStatus(!0),t&&this.expectionLineStatus(!0),"left"===e?A.clientX:A.clientY),s=A.target.parentElement,A=A.toElement,n=this.uiSite();s&&s.getAttribute("data-cont")||A&&A.getAttribute("data-cont")?this.config.rulerCont.cont=s.getAttribute("data-cont")||A.getAttribute("data-cont"):this.config.rulerCont.cont=parseInt((i-this.els.depth-this.config.distance-n[e])/this.zoom),this.config.rulerCont[e]=i-n[e]+"px",this.rulerCount.innerHTML=""+this.config.rulerCont.cont,this.rulerCount.style[e]=this.config.rulerCont[e],t&&(this.expectionLine.style[e]=i-n[e]+"px");}hideRulerCount(A){A.stopPropagation(),this.rulerCountStatus(!1),this.expectionLineStatus(!1),this.rulerCount.style.left=this.els.depth+2+"px",this.rulerCount.style.top=this.els.depth+2+"px",this.expectionLine.style.top="0px",this.expectionLine.style.left="0px";}rulerCountStatus(A){this.rulerCount.style.display=A?"":"none";}expectionLineStatus(A){this.expectionLine.style.display=A?"":"none";}getRulerLines(A){var e;return A?_getRulerLines(A):(A=_getRulerLines("top"),e=_getRulerLines("left"),[...A,...e])}setRulerLineStyle(A,t,i){const s=this.adsorbDistance;A.forEach(A=>{var e=Number(A.dataset.cont);e>i-s&&e<i+s?(A.children[0].style[t]=this.config.rulerLineActiveColor,A.dataset.adsorb=!0):(A.children[0].style[t]=this.config.rulerLineColor,A.dataset.adsorb=!1);});}restoreLine(A,e){A.forEach(A=>A.children[0].style[e]=this.config.rulerLineColor);}}function _getRulerLines(A){return document.querySelectorAll(`[data-id=ruler-${A}-line]`)}class RulerTop extends RulerCanvas{constructor(A,e,t){super(A),this.root=A,this.els=e,this.rulerDistance=e.rulerTop,this.rulerCanvas=e.rulerTopCanvas,this.rulerBoard=e.rulerTopBoard,this.rulerCount=e.rulerCount,this.expectionLine=e.expectionTopLine,this.zoom=t.zoom,this.ruler=t,this.startRuler();}scaleDial(A,e){this.createDial(A,"top"),this.moveDial(A,e);}moveDial(A,e){A=this.getDial(A,e);this.rulerBoard.style.transform=`translateX(${A})`,this.setLineDial(e,"top");}startRuler(A,e){super.startRuler(A,e,"top");}addRulerLine(A){super.addRulerLine(A,"top");}doAdsorb(A){var e=this.getRulerLines("top");return this.setRulerLineStyle(e,"border-left-color",parseInt(A)),e}unAdsorb(){var A=this.getRulerLines("top");this.adsorb=!1,this.restoreLine(A,"border-left-color");}}class RulerLeft extends RulerCanvas{constructor(A,e,t){super(A),this.root=A,this.els=e,this.rulerDistance=e.rulerLeft,this.rulerCanvas=e.rulerLeftCanvas,this.rulerBoard=e.rulerLeftBoard,this.rulerCount=e.rulerCount,this.expectionLine=e.expectionLeftLine,this.zoom=t.zoom,this.ruler=t,this.startRuler();}scaleDial(A,e){this.createDial(A,"left"),this.moveDial(A,e);}moveDial(A,e){A=this.getDial(A,e);this.rulerBoard.style.transform=`translateX(${A})`,this.setLineDial(e,"left");}dragRulerLine(A){super.dragRulerLine(A,"top");}showRulerCount(A){super.showRulerCount(A,"top");}addRulerLine(A){super.addRulerLine(A,"left");}doAdsorb(A){var e=this.getRulerLines("left");return this.setRulerLineStyle(e,"border-top-color",parseInt(A)),e}unAdsorb(){var A=this.getRulerLines("left");this.adsorb=!1,this.restoreLine(A,"border-top-color");}}class Ruler{constructor(A){var{ruler:e}=A.config["theme"];return this.depth=e.width,this.parent=A,this.zoom=this.parent.canvas.getZoom(),this.hideAllLine=!1,this.render(),this.getInstance()}getInstance(){return Ruler.instance||(Ruler.instance=this),Ruler.instance}render(){this._elObject=new CreateEl(this.parent),this.rulerTop=new RulerTop(this.parent,this._elObject,this),this.rulerLeft=new RulerLeft(this.parent,this._elObject,this),this.adsorb=new Adsorb,this.bindEvent();}bindEvent(){this.parent.on("canvasZoom",this.doCanvasZoom,this),this.parent.on("graphMoving",this.doGraphMoving,this),this.parent.on("graphMoveEnd",this.doGraphMoveEnd,this),this.parent.on("moveCanvas",this.doMoveCanvas,this),this._elObject.guideLine.addEventListener("click",this.guideLine.bind(this,this._elObject));}destroyEvent(){this.parent.off("canvasZoom",this.doCanvasZoom,this),this.parent.off("graphMoving",this.doGraphMoving,this),this.parent.off("graphMoveEnd",this.doGraphMoveEnd,this),this.parent.off("moveCanvas",this.doMoveCanvas,this),this._elObject.guideLine.removeEventListener("click",this.guideLine);}guideLine(A){var e=document.querySelectorAll("div[data-id=ruler] > div[data-id^='ruler'][data-id$='-line']");this.hideAllLine?(e.forEach(A=>A.style.display="block"),this.hideAllLine=!1,A.guideLine.innerHTML=A.svgShowLine):(e.forEach(A=>A.style.display="none"),this.hideAllLine=!0,A.guideLine.innerHTML=A.svgHideLine),this.parent.emit("rulerChange",this.getAllLines());}getAllLines(){return this.rulerTop.getRulerLines()}doMoveCanvas(){var A=this.getBound(this.parent.canvas),e=this.getBound(this.parent);A&&this.setRulerMove(A.left-e.left-this.depth,A.top-e.top-this.depth,this.zoom);}resize(){this.parent.updateSite(),this.doMoveCanvas();}doCanvasZoom(A){this.zoom=A||this.zoom;var A=this.getBound(this.parent.canvas),e=this.getBound(this.parent);A&&this.setRulerScale(A.left-e.left-this.depth,A.top-e.top-this.depth,this.zoom);}doGraphMoving({event:A,elements:e=null,isKeyMove:t=!1}){A&&e&&!t&&e.forEach((A,e)=>{var{left:A,top:t,isGroup:i}=this.getBound(A);i&&0<e||(i=this.rulerTop.doAdsorb(A),e=this.rulerLeft.doAdsorb(t),this.isAdsord({left:A,top:t,topLines:i,leftLines:e}));});}doGraphMoveEnd(A){A&&A.forEach(()=>{this.rulerTop.unAdsorb(),this.rulerLeft.unAdsorb();});}getBound(A){var e,t;return "Canvas"===A.type?({left:e,top:t}=A.el.getBoundingClientRect(),{left:e,top:t}):A.parent&&"Group"===A.parent.type?({left:e,top:t}=A.parent.bound.plainReal(),{left:e,top:t,isGroup:!0}):({left:e,top:t}=A.bound.plainReal(),{left:e,top:t})}setRulerMove(A,e,t){this.rulerTop.moveDial(t,A),this.rulerLeft.moveDial(t,e);}setRulerScale(A,e,t){cancelAnimationFrame(this.__requestAnimationFrameId),this.__requestAnimationFrameId=requestAnimationFrame(()=>{this.rulerTop.scaleDial(t,A),this.rulerLeft.scaleDial(t,e);});}isAdsord({left:e,top:t,topLines:A,leftLines:i}){const s={};A.forEach(A=>{"true"===A.dataset.adsorb&&(s.left=Number(A.dataset.cont)-e);}),i.forEach(A=>{"true"===A.dataset.adsorb&&(s.top=Number(A.dataset.cont)-t);});A={left:s.left,top:s.top};this.adsorb.setOffset(A),this.adsorb.execute();}disable(){document.querySelector("[data-id=ruler]")&&(this.destroyEvent(),this.rulerTop.removeEvent(),this.rulerLeft.removeEvent(),this.parent.el.removeChild(this._elObject.ruler));}enable(){document.querySelector("[data-id=ruler]")||(this.parent.el.appendChild(this._elObject.ruler),this.rulerTop.addEvent(),this.rulerLeft.addEvent(),this.bindEvent(),this.doCanvasZoom());}destroy(){this.disable(),this.zoom=null,this.parent=null,this._elObject=null,this.rulerTop=null,this.rulerLeft=null,this.adsorb=null;}parseRulerLines(A){this.getAllLines().forEach(A=>{this["ruler"+initialCapital(A.getAttribute("data-id").split("-")[1])].destroyRulerLine(A);}),A.scene.lines.forEach(A=>{var e=A.option.type,A=A.option.cont;this["ruler"+initialCapital(e)].parseRulerLine(e,A);}),this._guideLine(A.scene.hideAllLine);}getTopAndLeftLines(){return {topLines:this.rulerTop.getRulerLines("top"),leftLines:this.rulerLeft.getRulerLines("left")}}exportLineInfo(){var{topLines:A,leftLines:e}=this.getTopAndLeftLines(),t={};const i=[];return A.length&&A.forEach(A=>{i.push({type:"RulerTopLine",option:{type:"top",cont:A.dataset.cont}});}),e.length&&e.forEach(A=>{i.push({type:"RulerLeftLine",option:{type:"left",cont:A.dataset.cont}});}),t.lines=i,t.hideAllLine=this.hideAllLine,t}_guideLine(A){this.hideAllLine!==A&&this.guideLine(this._elObject);}}const rulerModule={ui:{mounted(){this.ruler=new Ruler(this),this.on("canvasMode",playMode,this);},beforeDestroy(){this.off("canvasMode",playMode,this),this.ruler.destroy();}}};function playMode(A){this.CANVASMODE.PLAY===A?this.ruler.disable():this.CANVASMODE.EDIT===A&&this.ruler.enable();}const getBlueprintNode=i=>{if(THING&&THING.CODELESS&&THING.CODELESS.BaseNode){class A extends THING.CODELESS.BaseNode{constructor(){super();}isEntrance(){return !0}onExecute(A,e,t){i.onExecute(A,e,t,this);}onStop(){i.onStop(this);}}return A.config={name:i.name,id:i.id,group:"THING-UI",inputs:[{name:"显示",type:"exec"},{name:"隐藏",type:"exec"},{name:"数据",type:"any"}],outputs:[]},A}return log.warn("请先加载蓝图类"),null};function toBlueprintNode(){return getBlueprintNode(this)}function onExecute(A,e,t,i){i=i.curExecName;"显示"===i?this.show():"隐藏"===i&&this.hidden();}function onStop(){}const bluePrintNodeModule={setup(A){A.mixin({container:{toBlueprintNode:toBlueprintNode,onExecute:onExecute,onStop:onStop},group:{toBlueprintNode:toBlueprintNode,onExecute:onExecute,onStop:onStop},layer:{toBlueprintNode:toBlueprintNode,onExecute:onExecute,onStop:onStop}});}},defaultFilters={brightness:1,contrast:1,hueRotate:0,opacity:1,saturate:1};class Filter{constructor(A,e){this.parent=A,this.filters=null,e&&(this.filters=clone(defaultFilters),this.update(e));}update(A){if(!isType$1(A,"Object"))return !1;if(!this.filters)return log.warn("滤镜被清空了，请先重置后在设置新值"),!1;for(const e in A)A.hasOwnProperty(e)&&this._setData(e,A[e]);return this.updateStyle()}getData(){return clone(this.filters)}setData(A,e){return this.filters?(this._setData(A,e),this.updateStyle()):(log.warn("滤镜被清空了，请先重置后在设置新值"),!1)}_setData(A,e){return !(!hasOwn(this.filters,A)&&this.filters[A]===e&&!isType$1(e,"Number")||(this.filters[A]=e,0))}reset(){return this.filters=clone(defaultFilters),this.updateStyle()}toJSON(){return this.getData()}clear(){return this.filters=null,this.updateStyle()}updateStyle(){var A=this.filters;let e="";return A&&(e=`hue-rotate(${A.hueRotate}deg) contrast(${100*A.contrast}%) opacity(${100*A.opacity}%) saturate(${100*A.saturate}%) brightness(${100*A.brightness}%)`),this.parent.style.filter=e,!0}destroy(){return this.clear(),!(this.parent=null)}}const filterModule={setup(A){A.mixin({canvas:{enableFilter(){return this.filter.reset()},getFilter(){return this.filter.getData()},setFilter(A,e){return this.filter.setData(A,e)},updateFilter(A){return this.filter.update(A)},resetFilter(){return this.filter.reset()},clearFiler(){return this.filter.clear()}}});},canvas:{beforeMount(){this.filter=new Filter(this,this.options.filters);},beforeToJSON(A,e){var t=this.filter.toJSON();t&&(e.option.filters=t),delete e.option.style.filter;},beforeDestroy(){this.filter.destroy(),this.filter=null;}}};class KeyMap{constructor(A){this.parent=A,this._keyMap=new Map,this.init();}init(){document.addEventListener("keydown",this.keyDownEvent.bind(this)),document.addEventListener("keyup",this.keyDownEvent.bind(this)),document.addEventListener("click",this.keyDownEvent.bind(this)),document.addEventListener("mouseover",this.keyDownEvent.bind(this)),document.addEventListener("contextmenu",this.keyDownEvent.bind(this));}register(A){var e=A["code"];this._keyMap.set(e,A);}_reset(A){"click"!==A.type&&"contextmenu"!==A.type&&"Escape"!==A.code||!1!==A.shiftKey||(e=this._keyMap.get("Shift")&&this._keyMap.get("Shift").fn||{}).up&&e.up(A);var e=isMac?A.ctrlKey||A.metaKey:A.ctrlKey;"mouseover"===A.type&&!1===e&&(e=this._keyMap.get("Control")&&this._keyMap.get("Control").fn||{}).up&&e.up(A);}keyDownEvent(A){var e;this._reset(A),document.activeElement===document.body&&(e=this.collect(A))&&(this._keyMap.has(e)||this._isMacResult(e))&&(A.preventDefault(),this.run(A,e));}_isMacResult(A){return isMac&&"Control+contextmenu"===A}collect(A){var e=[];return "Shift"===A.key||"Control"===A.key||"Meta"===A.key||"Alt"===A.key?e.push("Meta"===A.key&&isMac?"Control":A.key):(A.metaKey&&e.push("Control"),A.ctrlKey&&e.push("Control"),A.altKey&&e.push("Alt"),A.shiftKey&&e.push("Shift"),A.code?e.push(A.code):e.push(A.type)),e.join("+")}run(A,e){this._keyMap.has(e)&&("function"==typeof(e=this._keyMap.get(e).fn)?"keyup"!==A.type&&e(A):"keydown"===A.type?e.down&&e.down(A):"keyup"===A.type&&e.up&&e.up(A));}clear(){document.removeEventListener("keydown",this.keyDownEvent.bind(this)),document.removeEventListener("keyup",this.keyDownEvent.bind(this)),document.removeEventListener("click",this.keyDownEvent.bind(this)),document.removeEventListener("contextmenu",this.keyDownEvent.bind(this)),document.removeEventListener("mouseover",this.keyDownEvent.bind(this)),this._keyMap.clear();}}let keyMap=null;const keyMove=(e,t)=>({down:A=>{movement.moveKeyEvent(A,e,t);},up:()=>{movement.upEvent();}}),KeyMapMoudle={setup(A){A.mixin({ui:{keyMap:keyMap}});},ui:{beforeMount(){this.keyMap=new KeyMap(this),this.keyMap.register({name:"编组选中对象",code:"Control+KeyG",fn:()=>{this.selector.createGroup();}}),this.keyMap.register({name:"取消编组",code:"Control+Shift+KeyG",fn:()=>{this.selector.cancelGroup();}}),this.keyMap.register({name:"删除选中对象",code:"Delete",fn:()=>{this.selector.delete();}}),this.keyMap.register({name:"重做",code:"Control+KeyY",fn:()=>{this.redo();}}),this.keyMap.register({name:"取消",code:"Control+KeyZ",fn:()=>{this.undo();}}),this.keyMap.register({name:"取消",code:"Escape",fn:()=>{this.edit(),this.exitInsidePreview();}}),this.keyMap.register({name:"向上移动1px",code:"ArrowUp",fn:keyMove(0,-1)}),this.keyMap.register({name:"向下移动1px",code:"ArrowDown",fn:keyMove(0,1)}),this.keyMap.register({name:"向左移动1px",code:"ArrowLeft",fn:keyMove(-1,0)}),this.keyMap.register({name:"向右移动1px",code:"ArrowRight",fn:keyMove(1,0)}),this.keyMap.register({name:"向上移动10px",code:"Shift+ArrowUp",fn:keyMove(0,-10)}),this.keyMap.register({name:"向下移动10px",code:"Shift+ArrowDown",fn:keyMove(0,10)}),this.keyMap.register({name:"向左移动10px",code:"Shift+ArrowLeft",fn:keyMove(-10,0)}),this.keyMap.register({name:"向右移动10px",code:"Shift+ArrowRight",fn:keyMove(10,0)}),this.keyMap.register({name:"画布移动",code:"Space",fn:{down:A=>{this._downSpace(A),this.canvas._beginMove();},up:A=>{this._upSpace(A),this.canvas._endMove();}}}),this.keyMap.register({name:"多选模式",code:"Shift",fn:{down:()=>{this.selector.enableMultSelect();},up:()=>{this.selector.disableMultSelect();}}}),this.keyMap.register({name:"编辑文本内容",code:"Enter",fn:()=>{this.enterTextEdit();}});},beforeDestroy(){this.keyMap.clear();}}},levelMap={0:["error","warn","info"],1:["error","warn"],2:["error"]};class Log{constructor(A={}){this.maxLog=A.maxLog||100,this.printDate=Boolean(A.printDate)||!0,this.printOnBrowser=Boolean(A.printOnBrowser)||!0,this.level=isNumber(A.level)||0,this._logRange={},this._logStore=[];}getLog(){return this._logStore.join("")}clearLog(){this._logStore=[];}setLevel(A){if(!Object.keys(levelMap).map(A=>Number(A)).includes(A))throw new Error("日志级别配置错误！");this.level=A;}downloadLog(){var A=this.getLog(),A=new Blob([A],{type:"data:text/plain;charset=utf-8"}),e=createElement("a");e.href=window.URL.createObjectURL(A),e.target="_blank",e.download=`THING.UI-${this.level}-log.txt`,document.body.appendChild(e),e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(e.href);}record(A,e,...t){if(!levelMap[this.level].includes(A))return !1;this._logStore.length>=this.maxLog&&this._logStore.shift(),this.printOnBrowser&&log[A](...t);var i="",i=(i+=this.printDate?`[THING.UI ${A}] ${this._date()} `:`[THING.UI ${A}] `)+t.map(A=>JSON.stringify(A)).join(" ");return this._logStore.push(i+="\n"),this._logRange[e]=new Date,!0}output(A){return new Date-this._logRange[A]}_date(){var A=new Date;return A.toLocaleDateString()+" "+A.toLocaleTimeString()}}new Log;var extendStatics=function(A,e){return (extendStatics=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(A,e){A.__proto__=e;}:function(A,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t]);}))(A,e)};function __extends(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=A;}extendStatics(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t);}var __assign=function(){return (__assign=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(A[s]=e[s]);return A}).apply(this,arguments)};function __awaiter(A,r,o,a){return new(o=o||Promise)(function(t,e){function i(A){try{n(a.next(A));}catch(A){e(A);}}function s(A){try{n(a.throw(A));}catch(A){e(A);}}function n(A){var e;A.done?t(A.value):((e=A.value)instanceof o?e:new o(function(A){A(e);})).then(i,s);}n((a=a.apply(A,r||[])).next());})}function __generator(i,s){var n,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},A={next:e(0),throw:e(1),return:e(2)};return "function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(t){return function(A){var e=[t,A];if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&e[0]?r.return:e[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,e[1])).done)return o;switch(r=0,(e=o?[2&e[0],o.value]:e)[0]){case 0:case 1:o=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,r=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(o=0<(o=a.trys).length&&o[o.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3]))a.label=e[1];else if(6===e[0]&&a.label<o[1])a.label=o[1],o=e;else {if(!(o&&a.label<o[2])){o[2]&&a.ops.pop(),a.trys.pop();continue}a.label=o[2],a.ops.push(e);}}e=s.call(i,a);}catch(A){e=[6,A],r=0;}finally{n=o=0;}if(5&e[0])throw e[1];return {value:e[0]?e[1]:void 0,done:!0}}}}function __spreadArray(A,e,t){if(t||2===arguments.length)for(var i,s=0,n=e.length;s<n;s++)!i&&s in e||((i=i||Array.prototype.slice.call(e,0,s))[s]=e[s]);return A.concat(i||e)}for(var Bounds=function(){function s(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i;}return s.prototype.add=function(A,e,t,i){return new s(this.left+A,this.top+e,this.width+t,this.height+i)},s.fromClientRect=function(A,e){return new s(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},s.fromDOMRectList=function(A,e){e=Array.from(e).find(function(A){return 0!==A.width});return e?new s(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height):s.EMPTY},s.EMPTY=new s(0,0,0,0),s}(),parseBounds=function(A,e){return Bounds.fromClientRect(A,e.getBoundingClientRect())},parseDocumentSize=function(A){var e,t=A.body,A=A.documentElement;if(t&&A)return e=Math.max(Math.max(t.scrollWidth,A.scrollWidth),Math.max(t.offsetWidth,A.offsetWidth),Math.max(t.clientWidth,A.clientWidth)),t=Math.max(Math.max(t.scrollHeight,A.scrollHeight),Math.max(t.offsetHeight,A.offsetHeight),Math.max(t.clientHeight,A.clientHeight)),new Bounds(0,0,e,t);throw new Error("Unable to get document size")},toCodePoints$1=function(A){for(var e=[],t=0,i=A.length;t<i;){var s,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<i?56320==(64512&(s=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&s)+65536):(e.push(n),t--):e.push(n);}return e},fromCodePoint$1=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return "";for(var i=[],s=-1,n="";++s<t;){var r=A[s];r<=65535?i.push(r):i.push(55296+((r-=65536)>>10),r%1024+56320),(s+1===t||16384<i.length)&&(n+=String.fromCharCode.apply(String,i),i.length=0);}return n},chars$2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup$2="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i$2=0;i$2<chars$2.length;i$2++)lookup$2[chars$2.charCodeAt(i$2)]=i$2;for(var chars$1$1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup$1$1="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i$1$1=0;i$1$1<chars$1$1.length;i$1$1++)lookup$1$1[chars$1$1.charCodeAt(i$1$1)]=i$1$1;for(var decode$1=function(A){for(var e,t,i,s,n=.75*A.length,r=A.length,o=0,n=("="===A[A.length-1]&&(n--,"="===A[A.length-2])&&n--,new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n)),a=Array.isArray(n)?n:new Uint8Array(n),l=0;l<r;l+=4)e=lookup$1$1[A.charCodeAt(l)],t=lookup$1$1[A.charCodeAt(l+1)],i=lookup$1$1[A.charCodeAt(l+2)],s=lookup$1$1[A.charCodeAt(l+3)],a[o++]=e<<2|t>>4,a[o++]=(15&t)<<4|i>>2,a[o++]=(3&i)<<6|63&s;return n},polyUint16Array$1=function(A){for(var e=A.length,t=[],i=0;i<e;i+=2)t.push(A[i+1]<<8|A[i]);return t},polyUint32Array$1=function(A){for(var e=A.length,t=[],i=0;i<e;i+=4)t.push(A[i+3]<<24|A[i+2]<<16|A[i+1]<<8|A[i]);return t},UTRIE2_SHIFT_2$1=5,UTRIE2_SHIFT_1$1=11,UTRIE2_INDEX_SHIFT$1=2,UTRIE2_SHIFT_1_2$1=UTRIE2_SHIFT_1$1-UTRIE2_SHIFT_2$1,UTRIE2_LSCP_INDEX_2_OFFSET$1=65536>>UTRIE2_SHIFT_2$1,UTRIE2_DATA_BLOCK_LENGTH$1=1<<UTRIE2_SHIFT_2$1,UTRIE2_DATA_MASK$1=UTRIE2_DATA_BLOCK_LENGTH$1-1,UTRIE2_LSCP_INDEX_2_LENGTH$1=1024>>UTRIE2_SHIFT_2$1,UTRIE2_INDEX_2_BMP_LENGTH$1=UTRIE2_LSCP_INDEX_2_OFFSET$1+UTRIE2_LSCP_INDEX_2_LENGTH$1,UTRIE2_UTF8_2B_INDEX_2_OFFSET$1=UTRIE2_INDEX_2_BMP_LENGTH$1,UTRIE2_UTF8_2B_INDEX_2_LENGTH$1=32,UTRIE2_INDEX_1_OFFSET$1=UTRIE2_UTF8_2B_INDEX_2_OFFSET$1+UTRIE2_UTF8_2B_INDEX_2_LENGTH$1,UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1=65536>>UTRIE2_SHIFT_1$1,UTRIE2_INDEX_2_BLOCK_LENGTH$1=1<<UTRIE2_SHIFT_1_2$1,UTRIE2_INDEX_2_MASK$1=UTRIE2_INDEX_2_BLOCK_LENGTH$1-1,slice16$1=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},slice32$1=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},createTrieFromBase64$1=function(A,e){var A=decode$1(A),t=Array.isArray(A)?polyUint32Array$1(A):new Uint32Array(A),A=Array.isArray(A)?polyUint16Array$1(A):new Uint16Array(A),i=slice16$1(A,12,t[4]/2),A=2===t[5]?slice16$1(A,(24+t[4])/2):slice32$1(t,Math.ceil((24+t[4])/4));return new Trie$1(t[0],t[1],t[2],t[3],i,A)},Trie$1=function(){function A(A,e,t,i,s,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=s,this.data=n;}return A.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>UTRIE2_SHIFT_2$1],this.data[e=(e<<UTRIE2_INDEX_SHIFT$1)+(A&UTRIE2_DATA_MASK$1)];if(A<=65535)return e=this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1+(A-55296>>UTRIE2_SHIFT_2$1)],this.data[e=(e<<UTRIE2_INDEX_SHIFT$1)+(A&UTRIE2_DATA_MASK$1)];if(A<this.highStart)return e=this.index[e=UTRIE2_INDEX_1_OFFSET$1-UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1+(A>>UTRIE2_SHIFT_1$1)],e=this.index[e+=A>>UTRIE2_SHIFT_2$1&UTRIE2_INDEX_2_MASK$1],this.data[e=(e<<UTRIE2_INDEX_SHIFT$1)+(A&UTRIE2_DATA_MASK$1)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),chars$3="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup$3="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i$3=0;i$3<chars$3.length;i$3++)lookup$3[chars$3.charCodeAt(i$3)]=i$3;var base64$1="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",LETTER_NUMBER_MODIFIER=50,BK=1,CR$1=2,LF$1=3,CM=4,NL=5,WJ=7,ZW=8,GL=9,SP=10,ZWJ$1=11,B2=12,BA=13,BB=14,HY=15,CB=16,CL=17,CP=18,EX=19,IN=20,NS=21,OP=22,QU=23,IS=24,NU=25,PO=26,PR=27,SY=28,AI=29,AL=30,CJ=31,EB=32,EM=33,H2=34,H3=35,HL=36,ID=37,JL=38,JV=39,JT=40,RI$1=41,SA=42,XX=43,ea_OP=[9001,65288],BREAK_MANDATORY="!",BREAK_NOT_ALLOWED$1="×",BREAK_ALLOWED$1="÷",UnicodeTrie$1=createTrieFromBase64$1(base64$1),ALPHABETICS=[AL,HL],HARD_LINE_BREAKS=[BK,CR$1,LF$1,NL],SPACE$1=[SP,ZW],PREFIX_POSTFIX=[PR,PO],LINE_BREAKS=HARD_LINE_BREAKS.concat(SPACE$1),KOREAN_SYLLABLE_BLOCK=[JL,JV,JT,H2,H3],HYPHEN=[HY,BA],codePointsToCharacterClasses=function(A,i){void 0===i&&(i="strict");var s=[],n=[],r=[];return A.forEach(function(A,e){var t=UnicodeTrie$1.get(A);if(LETTER_NUMBER_MODIFIER<t?(r.push(!0),t-=LETTER_NUMBER_MODIFIER):r.push(!1),-1!==["normal","auto","loose"].indexOf(i)&&-1!==[8208,8211,12316,12448].indexOf(A))return n.push(e),s.push(CB);if(t!==CM&&t!==ZWJ$1)return n.push(e),t===CJ?s.push("strict"===i?NS:ID):t===SA||t===AI?s.push(AL):t===XX?s.push(131072<=A&&A<=196605||196608<=A&&A<=262141?ID:AL):void s.push(t);if(0!==e&&-1===LINE_BREAKS.indexOf(A=s[e-1]))return n.push(n[e-1]),s.push(A);return n.push(e),s.push(AL)}),[n,s,r]},isAdjacentWithSpaceIgnored=function(A,e,t,i){var s=i[t];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var n=t;n<=i.length;){if((o=i[++n])===e)return !0;if(o!==SP)break}if(s===SP)for(n=t;0<n;){var r=i[--n];if(Array.isArray(A)?-1!==A.indexOf(r):A===r)for(var o,a=t;a<=i.length;){if((o=i[++a])===e)return !0;if(o!==SP)break}if(r!==SP)break}return !1},previousNonSpaceClassType=function(A,e){for(var t=A;0<=t;){var i=e[t];if(i!==SP)return i;t--;}return 0},_lineBreakAtIndex=function(A,e,t,i,s){if(0===t[i])return BREAK_NOT_ALLOWED$1;i-=1;if(Array.isArray(s)&&!0===s[i])return BREAK_NOT_ALLOWED$1;var s=i-1,n=1+i,r=e[i],o=0<=s?e[s]:0,a=e[n];if(r===CR$1&&a===LF$1)return BREAK_NOT_ALLOWED$1;if(-1!==HARD_LINE_BREAKS.indexOf(r))return BREAK_MANDATORY;if(-1!==HARD_LINE_BREAKS.indexOf(a))return BREAK_NOT_ALLOWED$1;if(-1!==SPACE$1.indexOf(a))return BREAK_NOT_ALLOWED$1;if(previousNonSpaceClassType(i,e)===ZW)return BREAK_ALLOWED$1;if(UnicodeTrie$1.get(A[i])===ZWJ$1)return BREAK_NOT_ALLOWED$1;if((r===EB||r===EM)&&UnicodeTrie$1.get(A[n])===ZWJ$1)return BREAK_NOT_ALLOWED$1;if(r===WJ||a===WJ)return BREAK_NOT_ALLOWED$1;if(r===GL)return BREAK_NOT_ALLOWED$1;if(-1===[SP,BA,HY].indexOf(r)&&a===GL)return BREAK_NOT_ALLOWED$1;if(-1!==[CL,CP,EX,IS,SY].indexOf(a))return BREAK_NOT_ALLOWED$1;if(previousNonSpaceClassType(i,e)===OP)return BREAK_NOT_ALLOWED$1;if(isAdjacentWithSpaceIgnored(QU,OP,i,e))return BREAK_NOT_ALLOWED$1;if(isAdjacentWithSpaceIgnored([CL,CP],NS,i,e))return BREAK_NOT_ALLOWED$1;if(isAdjacentWithSpaceIgnored(B2,B2,i,e))return BREAK_NOT_ALLOWED$1;if(r===SP)return BREAK_ALLOWED$1;if(r===QU||a===QU)return BREAK_NOT_ALLOWED$1;if(a===CB||r===CB)return BREAK_ALLOWED$1;if(-1!==[BA,HY,NS].indexOf(a)||r===BB)return BREAK_NOT_ALLOWED$1;if(o===HL&&-1!==HYPHEN.indexOf(r))return BREAK_NOT_ALLOWED$1;if(r===SY&&a===HL)return BREAK_NOT_ALLOWED$1;if(a===IN)return BREAK_NOT_ALLOWED$1;if(-1!==ALPHABETICS.indexOf(a)&&r===NU||-1!==ALPHABETICS.indexOf(r)&&a===NU)return BREAK_NOT_ALLOWED$1;if(r===PR&&-1!==[ID,EB,EM].indexOf(a)||-1!==[ID,EB,EM].indexOf(r)&&a===PO)return BREAK_NOT_ALLOWED$1;if(-1!==ALPHABETICS.indexOf(r)&&-1!==PREFIX_POSTFIX.indexOf(a)||-1!==PREFIX_POSTFIX.indexOf(r)&&-1!==ALPHABETICS.indexOf(a))return BREAK_NOT_ALLOWED$1;if(-1!==[PR,PO].indexOf(r)&&(a===NU||-1!==[OP,HY].indexOf(a)&&e[1+n]===NU)||-1!==[OP,HY].indexOf(r)&&a===NU||r===NU&&-1!==[NU,SY,IS].indexOf(a))return BREAK_NOT_ALLOWED$1;if(-1!==[NU,SY,IS,CL,CP].indexOf(a))for(var l=i;0<=l;){if((c=e[l])===NU)return BREAK_NOT_ALLOWED$1;if(-1===[SY,IS].indexOf(c))break;l--;}if(-1!==[PR,PO].indexOf(a))for(var c,l=-1!==[CL,CP].indexOf(r)?s:i;0<=l;){if((c=e[l])===NU)return BREAK_NOT_ALLOWED$1;if(-1===[SY,IS].indexOf(c))break;l--;}if(JL===r&&-1!==[JL,JV,H2,H3].indexOf(a)||-1!==[JV,H2].indexOf(r)&&-1!==[JV,JT].indexOf(a)||-1!==[JT,H3].indexOf(r)&&a===JT)return BREAK_NOT_ALLOWED$1;if(-1!==KOREAN_SYLLABLE_BLOCK.indexOf(r)&&-1!==[IN,PO].indexOf(a)||-1!==KOREAN_SYLLABLE_BLOCK.indexOf(a)&&r===PR)return BREAK_NOT_ALLOWED$1;if(-1!==ALPHABETICS.indexOf(r)&&-1!==ALPHABETICS.indexOf(a))return BREAK_NOT_ALLOWED$1;if(r===IS&&-1!==ALPHABETICS.indexOf(a))return BREAK_NOT_ALLOWED$1;if(-1!==ALPHABETICS.concat(NU).indexOf(r)&&a===OP&&-1===ea_OP.indexOf(A[n])||-1!==ALPHABETICS.concat(NU).indexOf(a)&&r===CP)return BREAK_NOT_ALLOWED$1;if(r===RI$1&&a===RI$1){for(var h=t[i],u=1;0<h&&e[--h]===RI$1;)u++;if(u%2!=0)return BREAK_NOT_ALLOWED$1}return r===EB&&a===EM?BREAK_NOT_ALLOWED$1:BREAK_ALLOWED$1},cssFormattedClasses=function(t,A){var e=codePointsToCharacterClasses(t,(A=A||{lineBreak:"normal",wordBreak:"normal"}).lineBreak),i=e[0],s=e[1],e=e[2],A=("break-all"!==A.wordBreak&&"break-word"!==A.wordBreak||(s=s.map(function(A){return -1!==[NU,AL,SA].indexOf(A)?ID:A})),"keep-all"===A.wordBreak?e.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0);return [i,s,A]},Break=function(){function A(A,e,t,i){this.codePoints=A,this.required=e===BREAK_MANDATORY,this.start=t,this.end=i;}return A.prototype.slice=function(){return fromCodePoint$1.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),LineBreaker=function(A,e){var t=toCodePoints$1(A),A=cssFormattedClasses(t,e),i=A[0],s=A[1],n=A[2],r=t.length,o=0,a=0;return {next:function(){if(r<=a)return {done:!0,value:null};for(var A,e=BREAK_NOT_ALLOWED$1;a<r&&(e=_lineBreakAtIndex(t,s,i,++a,n))===BREAK_NOT_ALLOWED$1;);return e!==BREAK_NOT_ALLOWED$1||a===r?(A=new Break(t,e,o,a),o=a,{value:A,done:!1}):{done:!0,value:null}}}},FLAG_UNRESTRICTED=1,FLAG_ID=2,FLAG_INTEGER=4,FLAG_NUMBER=8,LINE_FEED=10,SOLIDUS=47,REVERSE_SOLIDUS=92,CHARACTER_TABULATION=9,SPACE=32,QUOTATION_MARK=34,EQUALS_SIGN=61,NUMBER_SIGN=35,DOLLAR_SIGN=36,PERCENTAGE_SIGN=37,APOSTROPHE=39,LEFT_PARENTHESIS=40,RIGHT_PARENTHESIS=41,LOW_LINE=95,HYPHEN_MINUS=45,EXCLAMATION_MARK=33,LESS_THAN_SIGN=60,GREATER_THAN_SIGN=62,COMMERCIAL_AT=64,LEFT_SQUARE_BRACKET=91,RIGHT_SQUARE_BRACKET=93,CIRCUMFLEX_ACCENT=61,LEFT_CURLY_BRACKET=123,QUESTION_MARK=63,RIGHT_CURLY_BRACKET=125,VERTICAL_LINE=124,TILDE=126,CONTROL=128,REPLACEMENT_CHARACTER=65533,ASTERISK=42,PLUS_SIGN=43,COMMA=44,COLON=58,SEMICOLON=59,FULL_STOP=46,NULL=0,BACKSPACE=8,LINE_TABULATION=11,SHIFT_OUT=14,INFORMATION_SEPARATOR_ONE=31,DELETE=127,EOF=-1,ZERO=48,a=97,e=101,f=102,u=117,z=122,A=65,E=69,F=70,U=85,Z=90,isDigit=function(A){return ZERO<=A&&A<=57},isSurrogateCodePoint=function(A){return 55296<=A&&A<=57343},isHex=function(e){return isDigit(e)||A<=e&&e<=F||a<=e&&e<=f},isLowerCaseLetter=function(A){return a<=A&&A<=z},isUpperCaseLetter=function(e){return A<=e&&e<=Z},isLetter=function(A){return isLowerCaseLetter(A)||isUpperCaseLetter(A)},isNonASCIICodePoint=function(A){return CONTROL<=A},isWhiteSpace=function(A){return A===LINE_FEED||A===CHARACTER_TABULATION||A===SPACE},isNameStartCodePoint=function(A){return isLetter(A)||isNonASCIICodePoint(A)||A===LOW_LINE},isNameCodePoint=function(A){return isNameStartCodePoint(A)||isDigit(A)||A===HYPHEN_MINUS},isNonPrintableCodePoint=function(A){return NULL<=A&&A<=BACKSPACE||A===LINE_TABULATION||SHIFT_OUT<=A&&A<=INFORMATION_SEPARATOR_ONE||A===DELETE},isValidEscape=function(A,e){return A===REVERSE_SOLIDUS&&e!==LINE_FEED},isIdentifierStart=function(A,e,t){return A===HYPHEN_MINUS?isNameStartCodePoint(e)||isValidEscape(e,t):!!isNameStartCodePoint(A)||!(A!==REVERSE_SOLIDUS||!isValidEscape(A,e))},isNumberStart=function(A,e,t){return A===PLUS_SIGN||A===HYPHEN_MINUS?!!isDigit(e)||e===FULL_STOP&&isDigit(t):isDigit(A===FULL_STOP?e:A)},stringToNumber=function(A){for(var t=0,i=1,s=(A[t]!==PLUS_SIGN&&A[t]!==HYPHEN_MINUS||(A[t]===HYPHEN_MINUS&&(i=-1),t++),[]);isDigit(A[t]);)s.push(A[t++]);for(var n=s.length?parseInt(fromCodePoint$1.apply(void 0,s),10):0,r=(A[t]===FULL_STOP&&t++,[]);isDigit(A[t]);)r.push(A[t++]);for(var o=r.length,a=o?parseInt(fromCodePoint$1.apply(void 0,r),10):0,l=(A[t]!==E&&A[t]!==e||t++,1),c=(A[t]!==PLUS_SIGN&&A[t]!==HYPHEN_MINUS||(A[t]===HYPHEN_MINUS&&(l=-1),t++),[]);isDigit(A[t]);)c.push(A[t++]);var h=c.length?parseInt(fromCodePoint$1.apply(void 0,c),10):0;return i*(n+a*Math.pow(10,-o))*Math.pow(10,l*h)},LEFT_PARENTHESIS_TOKEN={type:2},RIGHT_PARENTHESIS_TOKEN={type:3},COMMA_TOKEN={type:4},SUFFIX_MATCH_TOKEN={type:13},PREFIX_MATCH_TOKEN={type:8},COLUMN_TOKEN={type:21},DASH_MATCH_TOKEN={type:9},INCLUDE_MATCH_TOKEN={type:10},LEFT_CURLY_BRACKET_TOKEN={type:11},RIGHT_CURLY_BRACKET_TOKEN={type:12},SUBSTRING_MATCH_TOKEN={type:14},BAD_URL_TOKEN={type:23},BAD_STRING_TOKEN={type:1},CDO_TOKEN={type:25},CDC_TOKEN={type:24},COLON_TOKEN={type:26},SEMICOLON_TOKEN={type:27},LEFT_SQUARE_BRACKET_TOKEN={type:28},RIGHT_SQUARE_BRACKET_TOKEN={type:29},WHITESPACE_TOKEN={type:31},EOF_TOKEN={type:32},Tokenizer=function(){function A(){this._value=[];}return A.prototype.write=function(A){this._value=this._value.concat(toCodePoints$1(A));},A.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==EOF_TOKEN;)A.push(e),e=this.consumeToken();return A},A.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case QUOTATION_MARK:return this.consumeStringToken(QUOTATION_MARK);case NUMBER_SIGN:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(isNameCodePoint(e)||isValidEscape(t,i))return e=isIdentifierStart(e,t,i)?FLAG_ID:FLAG_UNRESTRICTED,{type:5,value:this.consumeName(),flags:e};break;case DOLLAR_SIGN:if(this.peekCodePoint(0)===EQUALS_SIGN)return this.consumeCodePoint(),SUFFIX_MATCH_TOKEN;break;case APOSTROPHE:return this.consumeStringToken(APOSTROPHE);case LEFT_PARENTHESIS:return LEFT_PARENTHESIS_TOKEN;case RIGHT_PARENTHESIS:return RIGHT_PARENTHESIS_TOKEN;case ASTERISK:if(this.peekCodePoint(0)===EQUALS_SIGN)return this.consumeCodePoint(),SUBSTRING_MATCH_TOKEN;break;case PLUS_SIGN:if(isNumberStart(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case COMMA:return COMMA_TOKEN;case HYPHEN_MINUS:t=A,i=this.peekCodePoint(0),e=this.peekCodePoint(1);if(isNumberStart(t,i,e))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(isIdentifierStart(t,i,e))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(i===HYPHEN_MINUS&&e===GREATER_THAN_SIGN)return this.consumeCodePoint(),this.consumeCodePoint(),CDC_TOKEN;break;case FULL_STOP:if(isNumberStart(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case SOLIDUS:if(this.peekCodePoint(0)===ASTERISK)for(this.consumeCodePoint();;){var s=this.consumeCodePoint();if(s===ASTERISK&&(s=this.consumeCodePoint())===SOLIDUS)return this.consumeToken();if(s===EOF)return this.consumeToken()}break;case COLON:return COLON_TOKEN;case SEMICOLON:return SEMICOLON_TOKEN;case LESS_THAN_SIGN:if(this.peekCodePoint(0)===EXCLAMATION_MARK&&this.peekCodePoint(1)===HYPHEN_MINUS&&this.peekCodePoint(2)===HYPHEN_MINUS)return this.consumeCodePoint(),this.consumeCodePoint(),CDO_TOKEN;break;case COMMERCIAL_AT:t=this.peekCodePoint(0),i=this.peekCodePoint(1),e=this.peekCodePoint(2);if(isIdentifierStart(t,i,e))return {type:7,value:this.consumeName()};break;case LEFT_SQUARE_BRACKET:return LEFT_SQUARE_BRACKET_TOKEN;case REVERSE_SOLIDUS:if(isValidEscape(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case RIGHT_SQUARE_BRACKET:return RIGHT_SQUARE_BRACKET_TOKEN;case CIRCUMFLEX_ACCENT:if(this.peekCodePoint(0)===EQUALS_SIGN)return this.consumeCodePoint(),PREFIX_MATCH_TOKEN;break;case LEFT_CURLY_BRACKET:return LEFT_CURLY_BRACKET_TOKEN;case RIGHT_CURLY_BRACKET:return RIGHT_CURLY_BRACKET_TOKEN;case u:case U:t=this.peekCodePoint(0),i=this.peekCodePoint(1);return t!==PLUS_SIGN||!isHex(i)&&i!==QUESTION_MARK||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case VERTICAL_LINE:if(this.peekCodePoint(0)===EQUALS_SIGN)return this.consumeCodePoint(),DASH_MATCH_TOKEN;if(this.peekCodePoint(0)===VERTICAL_LINE)return this.consumeCodePoint(),COLUMN_TOKEN;break;case TILDE:if(this.peekCodePoint(0)===EQUALS_SIGN)return this.consumeCodePoint(),INCLUDE_MATCH_TOKEN;break;case EOF:return EOF_TOKEN}return isWhiteSpace(A)?(this.consumeWhiteSpace(),WHITESPACE_TOKEN):isDigit(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):isNameStartCodePoint(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:fromCodePoint$1(A)}},A.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},A.prototype.reconsumeCodePoint=function(A){this._value.unshift(A);},A.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},A.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();isHex(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===QUESTION_MARK&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t)return {type:30,start:parseInt(fromCodePoint$1.apply(void 0,A.map(function(A){return A===QUESTION_MARK?ZERO:A})),16),end:parseInt(fromCodePoint$1.apply(void 0,A.map(function(A){return A===QUESTION_MARK?F:A})),16)};var i=parseInt(fromCodePoint$1.apply(void 0,A),16);if(this.peekCodePoint(0)===HYPHEN_MINUS&&isHex(this.peekCodePoint(1))){this.consumeCodePoint();for(var e=this.consumeCodePoint(),s=[];isHex(e)&&s.length<6;)s.push(e),e=this.consumeCodePoint();return {type:30,start:i,end:parseInt(fromCodePoint$1.apply(void 0,s),16)}}return {type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return "url"===A.toLowerCase()&&this.peekCodePoint(0)===LEFT_PARENTHESIS?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===LEFT_PARENTHESIS?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},A.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===EOF)return {type:22,value:""};var e=this.peekCodePoint(0);if(e===APOSTROPHE||e===QUOTATION_MARK)return 0===(e=this.consumeStringToken(this.consumeCodePoint())).type&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===EOF||this.peekCodePoint(0)===RIGHT_PARENTHESIS)?(this.consumeCodePoint(),{type:22,value:e.value}):(this.consumeBadUrlRemnants(),BAD_URL_TOKEN);for(;;){var t=this.consumeCodePoint();if(t===EOF||t===RIGHT_PARENTHESIS)return {type:22,value:fromCodePoint$1.apply(void 0,A)};if(isWhiteSpace(t))return this.consumeWhiteSpace(),this.peekCodePoint(0)===EOF||this.peekCodePoint(0)===RIGHT_PARENTHESIS?(this.consumeCodePoint(),{type:22,value:fromCodePoint$1.apply(void 0,A)}):(this.consumeBadUrlRemnants(),BAD_URL_TOKEN);if(t===QUOTATION_MARK||t===APOSTROPHE||t===LEFT_PARENTHESIS||isNonPrintableCodePoint(t))return this.consumeBadUrlRemnants(),BAD_URL_TOKEN;if(t===REVERSE_SOLIDUS){if(!isValidEscape(t,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),BAD_URL_TOKEN;A.push(this.consumeEscapedCodePoint());}else A.push(t);}},A.prototype.consumeWhiteSpace=function(){for(;isWhiteSpace(this.peekCodePoint(0));)this.consumeCodePoint();},A.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===RIGHT_PARENTHESIS||A===EOF)return;isValidEscape(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint();}},A.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(5e4,A);e+=fromCodePoint$1.apply(void 0,this._value.splice(0,t)),A-=t;}return this._value.shift(),e},A.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var i,s=this._value[t];if(s===EOF||void 0===s||s===A)return {type:0,value:e+=this.consumeStringSlice(t)};if(s===LINE_FEED)return this._value.splice(0,t),BAD_STRING_TOKEN;s===REVERSE_SOLIDUS&&(i=this._value[t+1])!==EOF&&void 0!==i&&(i===LINE_FEED?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):isValidEscape(s,i)&&(e=(e+=this.consumeStringSlice(t))+fromCodePoint$1(this.consumeEscapedCodePoint()),t=-1)),t++;}},A.prototype.consumeNumber=function(){var A=[],t=FLAG_INTEGER;for((i=this.peekCodePoint(0))!==PLUS_SIGN&&i!==HYPHEN_MINUS||A.push(this.consumeCodePoint());isDigit(this.peekCodePoint(0));)A.push(this.consumeCodePoint());var i=this.peekCodePoint(0),s=this.peekCodePoint(1);if(i===FULL_STOP&&isDigit(s))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),t=FLAG_NUMBER;isDigit(this.peekCodePoint(0));)A.push(this.consumeCodePoint());i=this.peekCodePoint(0);var s=this.peekCodePoint(1),n=this.peekCodePoint(2);if((i===E||i===e)&&((s===PLUS_SIGN||s===HYPHEN_MINUS)&&isDigit(n)||isDigit(s)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),t=FLAG_NUMBER;isDigit(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return [stringToNumber(A),t]},A.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],A=A[1],t=this.peekCodePoint(0),i=this.peekCodePoint(1),s=this.peekCodePoint(2);return isIdentifierStart(t,i,s)?{type:15,number:e,flags:A,unit:this.consumeName()}:t===PERCENTAGE_SIGN?(this.consumeCodePoint(),{type:16,number:e,flags:A}):{type:17,number:e,flags:A}},A.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(isHex(A)){for(var e=fromCodePoint$1(A);isHex(this.peekCodePoint(0))&&e.length<6;)e+=fromCodePoint$1(this.consumeCodePoint());isWhiteSpace(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return 0===t||isSurrogateCodePoint(t)||1114111<t?REPLACEMENT_CHARACTER:t}return A===EOF?REPLACEMENT_CHARACTER:A},A.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(isNameCodePoint(e))A+=fromCodePoint$1(e);else {if(!isValidEscape(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=fromCodePoint$1(this.consumeEscapedCodePoint());}}},A}(),Parser=function(){function t(A){this._tokens=A;}return t.create=function(A){var e=new Tokenizer;return e.write(A),new t(e.read())},t.parseValue=function(A){return t.create(A).parseComponentValue()},t.parseValues=function(A){return t.create(A).parseComponentValues()},t.prototype.parseComponentValue=function(){for(var A=this.consumeToken();31===A.type;)A=this.consumeToken();if(32===A.type)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();31===(A=this.consumeToken()).type;);if(32===A.type)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},t.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(32===e.type)return A;A.push(e),A.push();}},t.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},t.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(32===t.type||isEndingTokenFor(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken();}},t.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(32===t.type||3===t.type)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue());}},t.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?EOF_TOKEN:A},t.prototype.reconsumeToken=function(A){this._tokens.unshift(A);},t}(),isDimensionToken=function(A){return 15===A.type},isNumberToken=function(A){return 17===A.type},isIdentToken=function(A){return 20===A.type},isStringToken=function(A){return 0===A.type},isIdentWithValue=function(A,e){return isIdentToken(A)&&A.value===e},nonWhiteSpace=function(A){return 31!==A.type},nonFunctionArgSeparator=function(A){return 31!==A.type&&4!==A.type},parseFunctionArgs=function(A){var e=[],t=[];return A.forEach(function(A){if(4===A.type){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];}else 31!==A.type&&t.push(A);}),t.length&&e.push(t),e},isEndingTokenFor=function(A,e){return 11===e&&12===A.type||28===e&&29===A.type||2===e&&3===A.type},isLength=function(A){return 17===A.type||15===A.type},isLengthPercentage=function(A){return 16===A.type||isLength(A)},parseLengthPercentageTuple=function(A){return 1<A.length?[A[0],A[1]]:[A[0]]},ZERO_LENGTH={type:17,number:0,flags:FLAG_INTEGER},FIFTY_PERCENT={type:16,number:50,flags:FLAG_INTEGER},HUNDRED_PERCENT={type:16,number:100,flags:FLAG_INTEGER},getAbsoluteValueForTuple=function(A,e,t){var i=A[0],A=A[1];return [getAbsoluteValue(i,e),getAbsoluteValue(void 0!==A?A:i,t)]},getAbsoluteValue=function(A,e){if(16===A.type)return A.number/100*e;if(isDimensionToken(A))switch(A.unit){case"rem":case"em":return 16*A.number;default:return A.number}return A.number},DEG="deg",GRAD="grad",RAD="rad",TURN="turn",angle={name:"angle",parse:function(A,e){if(15===e.type)switch(e.unit){case DEG:return Math.PI*e.number/180;case GRAD:return Math.PI/200*e.number;case RAD:return e.number;case TURN:return 2*Math.PI*e.number}throw new Error("Unsupported angle type")}},isAngle=function(A){return 15===A.type&&(A.unit===DEG||A.unit===GRAD||A.unit===RAD||A.unit===TURN)},parseNamedSide=function(A){switch(A.filter(isIdentToken).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return [ZERO_LENGTH,ZERO_LENGTH];case"to top":case"bottom":return deg(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return [ZERO_LENGTH,HUNDRED_PERCENT];case"to right":case"left":return deg(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return [HUNDRED_PERCENT,HUNDRED_PERCENT];case"to bottom":case"top":return deg(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return [HUNDRED_PERCENT,ZERO_LENGTH];case"to left":case"right":return deg(270)}return 0},deg=function(A){return Math.PI*A/180},color$1={name:"color",parse:function(A,e){if(18===e.type){var t=SUPPORTED_COLOR_FUNCTIONS[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(5===e.type){var i,s,n,r;if(3===e.value.length)return i=e.value.substring(0,1),s=e.value.substring(1,2),n=e.value.substring(2,3),pack(parseInt(i+i,16),parseInt(s+s,16),parseInt(n+n,16),1);if(4===e.value.length)return i=e.value.substring(0,1),s=e.value.substring(1,2),n=e.value.substring(2,3),r=e.value.substring(3,4),pack(parseInt(i+i,16),parseInt(s+s,16),parseInt(n+n,16),parseInt(r+r,16)/255);if(6===e.value.length)return i=e.value.substring(0,2),s=e.value.substring(2,4),n=e.value.substring(4,6),pack(parseInt(i,16),parseInt(s,16),parseInt(n,16),1);if(8===e.value.length)return i=e.value.substring(0,2),s=e.value.substring(2,4),n=e.value.substring(4,6),r=e.value.substring(6,8),pack(parseInt(i,16),parseInt(s,16),parseInt(n,16),parseInt(r,16)/255)}if(20===e.type){t=COLORS[e.value.toUpperCase()];if(void 0!==t)return t}return COLORS.TRANSPARENT}},isTransparent=function(A){return 0==(255&A)},asString=function(A){var e=255&A,t=255&A>>8,i=255&A>>16,A=255&A>>24;return e<255?"rgba("+A+","+i+","+t+","+e/255+")":"rgb("+A+","+i+","+t+")"},pack=function(A,e,t,i){return (A<<24|e<<16|t<<8|Math.round(255*i)<<0)>>>0},getTokenColorValue=function(A,e){var t;return 17===A.type?A.number:16===A.type?(t=3===e?1:255,3===e?A.number/100*t:Math.round(A.number/100*t)):0},rgb=function(A,e){var t,i,s,e=e.filter(nonFunctionArgSeparator);return 3===e.length?(t=(s=e.map(getTokenColorValue))[0],i=s[1],s=s[2],pack(t,i,s,1)):4===e.length?(t=(e=e.map(getTokenColorValue))[0],i=e[1],s=e[2],e=e[3],pack(t,i,s,e)):0};function hue2rgb(A,e,t){return t<0&&(t+=1),1<=t&&--t,t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}var hsl=function(A,e){var t,e=e.filter(nonFunctionArgSeparator),i=e[0],s=e[1],n=e[2],e=e[3],A=(17===i.type?deg(i.number):angle.parse(A,i))/(2*Math.PI),i=isLengthPercentage(s)?s.number/100:0,s=isLengthPercentage(n)?n.number/100:0,n=void 0!==e&&isLengthPercentage(e)?getAbsoluteValue(e,1):1;return 0==i?pack(255*s,255*s,255*s,1):(i=hue2rgb(s=2*s-(e=s<=.5?s*(1+i):s+i-s*i),e,A+1/3),t=hue2rgb(s,e,A),s=hue2rgb(s,e,A-1/3),pack(255*i,255*t,255*s,n))},SUPPORTED_COLOR_FUNCTIONS={hsl:hsl,hsla:hsl,rgb:rgb,rgba:rgb},parseColor=function(A,e){return color$1.parse(A,Parser.create(e).parseComponentValue())},COLORS={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},backgroundClip={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(isIdentToken(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},backgroundColor={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},parseColorStop=function(A,e){A=color$1.parse(A,e[0]),e=e[1];return e&&isLengthPercentage(e)?{color:A,stop:e}:{color:A,stop:null}},processColorStops=function(A,t){for(var e=A[0],i=A[A.length-1],s=(null===e.stop&&(e.stop=ZERO_LENGTH),null===i.stop&&(i.stop=HUNDRED_PERCENT),[]),n=0,r=0;r<A.length;r++){var o=A[r].stop;null!==o?(o=getAbsoluteValue(o,t),s.push(n<o?o:n),n=o):s.push(null);}for(var a=null,r=0;r<s.length;r++){var l=s[r];if(null===l)null===a&&(a=r);else if(null!==a){for(var c=r-a,h=(l-s[a-1])/(1+c),u=1;u<=c;u++)s[a+u-1]=h*u;a=null;}}return A.map(function(A,e){return {color:A.color,stop:Math.max(Math.min(1,s[e]/t),0)}})},getAngleFromCorner=function(A,e,t){var i=e/2,s=t/2,e=getAbsoluteValue(A[0],e)-i,i=s-getAbsoluteValue(A[1],t);return (Math.atan2(i,e)+2*Math.PI)%(2*Math.PI)},calculateGradientDirection=function(A,e,t){var A="number"==typeof A?A:getAngleFromCorner(A,e,t),i=Math.abs(e*Math.sin(A))+Math.abs(t*Math.cos(A)),e=e/2,t=t/2,s=i/2,n=Math.sin(A-Math.PI/2)*s,A=Math.cos(A-Math.PI/2)*s;return [i,e-A,e+A,t-n,t+n]},distance=function(A,e){return Math.sqrt(A*A+e*e)},findCorner=function(A,e,s,n,r){return [[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],i=e[1],t=distance(s-t,n-i);return (r?t<A.optimumDistance:t>A.optimumDistance)?{optimumCorner:e,optimumDistance:t}:A},{optimumDistance:r?1/0:-1/0,optimumCorner:null}).optimumCorner},calculateRadius=function(A,e,t,i,s){var n,r,o,a,l=0,c=0;switch(A.size){case 0:0===A.shape?l=c=Math.min(Math.abs(e),Math.abs(e-i),Math.abs(t),Math.abs(t-s)):1===A.shape&&(l=Math.min(Math.abs(e),Math.abs(e-i)),c=Math.min(Math.abs(t),Math.abs(t-s)));break;case 2:0===A.shape?l=c=Math.min(distance(e,t),distance(e,t-s),distance(e-i,t),distance(e-i,t-s)):1===A.shape&&(n=Math.min(Math.abs(t),Math.abs(t-s))/Math.min(Math.abs(e),Math.abs(e-i)),o=(a=findCorner(i,s,e,t,!0))[0],a=a[1],c=n*(l=distance(o-e,(a-t)/n)));break;case 1:0===A.shape?l=c=Math.max(Math.abs(e),Math.abs(e-i),Math.abs(t),Math.abs(t-s)):1===A.shape&&(l=Math.max(Math.abs(e),Math.abs(e-i)),c=Math.max(Math.abs(t),Math.abs(t-s)));break;case 3:0===A.shape?l=c=Math.max(distance(e,t),distance(e,t-s),distance(e-i,t),distance(e-i,t-s)):1===A.shape&&(n=Math.max(Math.abs(t),Math.abs(t-s))/Math.max(Math.abs(e),Math.abs(e-i)),o=(r=findCorner(i,s,e,t,!1))[0],a=r[1],c=n*(l=distance(o-e,(a-t)/n)));}return Array.isArray(A.size)&&(l=getAbsoluteValue(A.size[0],i),c=2===A.size.length?getAbsoluteValue(A.size[1],s):l),[l,c]},linearGradient=function(t,A){var i=deg(180),s=[];return parseFunctionArgs(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&"to"===e.value)return void(i=parseNamedSide(A));if(isAngle(e))return void(i=angle.parse(t,e))}e=parseColorStop(t,A);s.push(e);}),{angle:i,stops:s,type:1}},prefixLinearGradient=function(t,A){var i=deg(180),s=[];return parseFunctionArgs(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&-1!==["top","left","right","bottom"].indexOf(e.value))return void(i=parseNamedSide(A));if(isAngle(e))return void(i=(angle.parse(t,e)+deg(270))%deg(360))}e=parseColorStop(t,A);s.push(e);}),{angle:i,stops:s,type:1}},webkitGradient=function(i,A){var e=deg(180),s=[],n=1;return parseFunctionArgs(A).forEach(function(A,e){var t,A=A[0];if(0===e){if(isIdentToken(A)&&"linear"===A.value)return void(n=1);if(isIdentToken(A)&&"radial"===A.value)return void(n=2)}18===A.type&&("from"===A.name?(t=color$1.parse(i,A.values[0]),s.push({stop:ZERO_LENGTH,color:t})):"to"===A.name?(t=color$1.parse(i,A.values[0]),s.push({stop:HUNDRED_PERCENT,color:t})):"color-stop"===A.name&&2===(e=A.values.filter(nonFunctionArgSeparator)).length&&(t=color$1.parse(i,e[1]),A=e[0],isNumberToken(A))&&s.push({stop:{type:16,number:100*A.number,flags:A.flags},color:t}));}),1===n?{angle:(e+deg(180))%deg(360),stops:s,type:n}:{size:3,shape:0,stops:s,position:[],type:n}},CLOSEST_SIDE="closest-side",FARTHEST_SIDE="farthest-side",CLOSEST_CORNER="closest-corner",FARTHEST_CORNER="farthest-corner",CIRCLE="circle",ELLIPSE="ellipse",COVER="cover",CONTAIN="contain",radialGradient=function(s,A){var n=0,r=3,o=[],a=[];return parseFunctionArgs(A).forEach(function(A,e){var t,i=!0;0===e&&(t=!1,i=A.reduce(function(A,e){if(t)if(isIdentToken(e))switch(e.value){case"center":return a.push(FIFTY_PERCENT),A;case"top":case"left":return a.push(ZERO_LENGTH),A;case"right":case"bottom":return a.push(HUNDRED_PERCENT),A}else (isLengthPercentage(e)||isLength(e))&&a.push(e);else if(isIdentToken(e))switch(e.value){case CIRCLE:return n=0,!1;case ELLIPSE:return !(n=1);case"at":return !(t=!0);case CLOSEST_SIDE:return r=0,!1;case COVER:case FARTHEST_SIDE:return !(r=1);case CONTAIN:case CLOSEST_CORNER:return !(r=2);case FARTHEST_CORNER:return !(r=3)}else if(isLength(e)||isLengthPercentage(e))return (r=Array.isArray(r)?r:[]).push(e),!1;return A},i)),i&&(e=parseColorStop(s,A),o.push(e));}),{size:r,shape:n,stops:o,position:a,type:2}},prefixRadialGradient=function(i,A){var s=0,n=3,r=[],o=[];return parseFunctionArgs(A).forEach(function(A,e){var t=!0;0===e?t=A.reduce(function(A,e){if(isIdentToken(e))switch(e.value){case"center":return o.push(FIFTY_PERCENT),!1;case"top":case"left":return o.push(ZERO_LENGTH),!1;case"right":case"bottom":return o.push(HUNDRED_PERCENT),!1}else if(isLengthPercentage(e)||isLength(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(isIdentToken(e))switch(e.value){case CIRCLE:return s=0,!1;case ELLIPSE:return !(s=1);case CONTAIN:case CLOSEST_SIDE:return n=0,!1;case FARTHEST_SIDE:return !(n=1);case CLOSEST_CORNER:return !(n=2);case COVER:case FARTHEST_CORNER:return !(n=3)}else if(isLength(e)||isLengthPercentage(e))return (n=Array.isArray(n)?n:[]).push(e),!1;return A},t)),t&&(e=parseColorStop(i,A),r.push(e));}),{size:n,shape:s,stops:r,position:o,type:2}},isLinearGradient=function(A){return 1===A.type},isRadialGradient=function(A){return 2===A.type},image={name:"image",parse:function(A,e){if(22===e.type)return t={url:e.value,type:0},A.cache.addImage(e.value),t;if(18!==e.type)throw new Error("Unsupported image type "+e.type);var t=SUPPORTED_IMAGE_FUNCTIONS[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return t(A,e.values)}};function isSupportedImage(A){return !(20===A.type&&"none"===A.value||18===A.type&&!SUPPORTED_IMAGE_FUNCTIONS[A.name])}for(var SUPPORTED_IMAGE_FUNCTIONS={"linear-gradient":linearGradient,"-moz-linear-gradient":prefixLinearGradient,"-ms-linear-gradient":prefixLinearGradient,"-o-linear-gradient":prefixLinearGradient,"-webkit-linear-gradient":prefixLinearGradient,"radial-gradient":radialGradient,"-moz-radial-gradient":prefixRadialGradient,"-ms-radial-gradient":prefixRadialGradient,"-o-radial-gradient":prefixRadialGradient,"-webkit-radial-gradient":prefixRadialGradient,"-webkit-gradient":webkitGradient},backgroundImage={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(e,A){var t;return 0===A.length||20===(t=A[0]).type&&"none"===t.value?[]:A.filter(function(A){return nonFunctionArgSeparator(A)&&isSupportedImage(A)}).map(function(A){return image.parse(e,A)})}},backgroundOrigin={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(isIdentToken(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},backgroundPosition={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return parseFunctionArgs(e).map(function(A){return A.filter(isLengthPercentage)}).map(parseLengthPercentageTuple)}},backgroundRepeat={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return parseFunctionArgs(e).map(function(A){return A.filter(isIdentToken).map(function(A){return A.value}).join(" ")}).map(parseBackgroundRepeat)}},parseBackgroundRepeat=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;default:return 0}},BACKGROUND_SIZE,backgroundSize=(!function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover";}(BACKGROUND_SIZE=BACKGROUND_SIZE||{}),{name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return parseFunctionArgs(e).map(function(A){return A.filter(isBackgroundSizeInfoToken)})}}),isBackgroundSizeInfoToken=function(A){return isIdentToken(A)||isLengthPercentage(A)},borderColorForSide=function(A){return {name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},borderTopColor=borderColorForSide("top"),borderRightColor=borderColorForSide("right"),borderBottomColor=borderColorForSide("bottom"),borderLeftColor=borderColorForSide("left"),borderRadiusForSide=function(A){return {name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return parseLengthPercentageTuple(e.filter(isLengthPercentage))}}},borderTopLeftRadius=borderRadiusForSide("top-left"),borderTopRightRadius=borderRadiusForSide("top-right"),borderBottomRightRadius=borderRadiusForSide("bottom-right"),borderBottomLeftRadius=borderRadiusForSide("bottom-left"),borderStyleForSide=function(A){return {name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},borderTopStyle=borderStyleForSide("top"),borderRightStyle=borderStyleForSide("right"),borderBottomStyle=borderStyleForSide("bottom"),borderLeftStyle=borderStyleForSide("left"),borderWidthForSide=function(A){return {name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return isDimensionToken(e)?e.number:0}}},borderTopWidth=borderWidthForSide("top"),borderRightWidth=borderWidthForSide("right"),borderBottomWidth=borderWidthForSide("bottom"),borderLeftWidth=borderWidthForSide("left"),color={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},direction={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){return "rtl"!==e?0:1}},display={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(isIdentToken).reduce(function(A,e){return A|parseDisplayValue(e.value)},0)}},parseDisplayValue=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},float={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},letterSpacing={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return !(20===e.type&&"normal"===e.value||17!==e.type&&15!==e.type)?e.number:0}},LINE_BREAK,lineBreak=(!function(A){A.NORMAL="normal",A.STRICT="strict";}(LINE_BREAK=LINE_BREAK||{}),{name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){return "strict"!==e?LINE_BREAK.NORMAL:LINE_BREAK.STRICT}}),lineHeight={name:"line-height",initialValue:"normal",prefix:!1,type:4},computeLineHeight=function(A,e){return isIdentToken(A)&&"normal"===A.value?1.2*e:17===A.type?e*A.number:isLengthPercentage(A)?getAbsoluteValue(A,e):e},listStyleImage={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return 20===e.type&&"none"===e.value?null:image.parse(A,e)}},listStylePosition={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){return "inside"!==e?1:0}},listStyleType={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;default:return -1}}},marginForSide=function(A){return {name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},marginTop=marginForSide("top"),marginRight=marginForSide("right"),marginBottom=marginForSide("bottom"),marginLeft=marginForSide("left"),overflow={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(isIdentToken).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;default:return 0}})}},overflowWrap={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){return "break-word"!==e?"normal":"break-word"}},paddingForSide=function(A){return {name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},paddingTop=paddingForSide("top"),paddingRight=paddingForSide("right"),paddingBottom=paddingForSide("bottom"),paddingLeft=paddingForSide("left"),textAlign={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;default:return 0}}},position={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},textShadow={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&isIdentWithValue(A[0],"none")?[]:parseFunctionArgs(A).map(function(A){for(var e={color:COLORS.TRANSPARENT,offsetX:ZERO_LENGTH,offsetY:ZERO_LENGTH,blur:ZERO_LENGTH},t=0,i=0;i<A.length;i++){var s=A[i];isLength(s)?(0===t?e.offsetX=s:1===t?e.offsetY=s:e.blur=s,t++):e.color=color$1.parse(n,s);}return e})}},textTransform={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},transform$1={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(20===e.type&&"none"===e.value)return null;if(18!==e.type)return null;var t=SUPPORTED_TRANSFORM_FUNCTIONS[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}},matrix=function(A){A=A.filter(function(A){return 17===A.type}).map(function(A){return A.number});return 6===A.length?A:null},matrix3d=function(A){var A=A.filter(function(A){return 17===A.type}).map(function(A){return A.number}),e=A[0],t=A[1],i=(A[2],A[3],A[4]),s=A[5],n=(A[6],A[7],A[8],A[9],A[10],A[11],A[12]),r=A[13];return A[14],A[15],16===A.length?[e,t,i,s,n,r]:null},SUPPORTED_TRANSFORM_FUNCTIONS={matrix:matrix,matrix3d:matrix3d},DEFAULT_VALUE={type:16,number:50,flags:FLAG_INTEGER},DEFAULT=[DEFAULT_VALUE,DEFAULT_VALUE],transformOrigin={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){e=e.filter(isLengthPercentage);return 2!==e.length?DEFAULT:[e[0],e[1]]}},visibility={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;default:return 0}}},WORD_BREAK,wordBreak=(!function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all";}(WORD_BREAK=WORD_BREAK||{}),{name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return WORD_BREAK.BREAK_ALL;case"keep-all":return WORD_BREAK.KEEP_ALL;default:return WORD_BREAK.NORMAL}}}),zIndex={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(20===e.type)return {auto:!0,order:0};if(isNumberToken(e))return {auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},time={name:"time",parse:function(A,e){if(15===e.type)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},opacity={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return isNumberToken(e)?e.number:1}},textDecorationColor={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},textDecorationLine={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(isIdentToken).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},fontFamily={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],i=[];return e.forEach(function(A){switch(A.type){case 20:case 0:t.push(A.value);break;case 17:t.push(A.number.toString());break;case 4:i.push(t.join(" ")),t.length=0;}}),t.length&&i.push(t.join(" ")),i.map(function(A){return -1===A.indexOf(" ")?A:"'"+A+"'"})}},fontSize={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},fontWeight={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){return isNumberToken(e)?e.number:!isIdentToken(e)||"bold"!==e.value?400:700}},fontVariant={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(isIdentToken).map(function(A){return A.value})}},fontStyle={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return "oblique";case"italic":return "italic";default:return "normal"}}},contains=function(A,e){return 0!=(A&e)},content={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){var t;return 0===e.length||20===(t=e[0]).type&&"none"===t.value?[]:e}},counterIncrement={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;for(var i=[],s=e.filter(nonWhiteSpace),n=0;n<s.length;n++){var r=s[n],o=s[n+1];20===r.type&&(o=o&&isNumberToken(o)?o.number:1,i.push({counter:r.value,increment:o}));}return i}},counterReset={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return [];for(var t=[],i=e.filter(nonWhiteSpace),s=0;s<i.length;s++){var n=i[s],r=i[s+1];isIdentToken(n)&&"none"!==n.value&&(r=r&&isNumberToken(r)?r.number:0,t.push({counter:n.value,reset:r}));}return t}},duration={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(e,A){return A.filter(isDimensionToken).map(function(A){return time.parse(e,A)})}},quotes={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;var i=[],s=e.filter(isStringToken);if(s.length%2!=0)return null;for(var n=0;n<s.length;n+=2){var r=s[n].value,o=s[n+1].value;i.push({open:r,close:o});}return i}},getQuote=function(A,e,t){return A&&(e=A[Math.min(e,A.length-1)])?t?e.open:e.close:""},boxShadow={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&isIdentWithValue(A[0],"none")?[]:parseFunctionArgs(A).map(function(A){for(var e={color:255,offsetX:ZERO_LENGTH,offsetY:ZERO_LENGTH,blur:ZERO_LENGTH,spread:ZERO_LENGTH,inset:!1},t=0,i=0;i<A.length;i++){var s=A[i];isIdentWithValue(s,"inset")?e.inset=!0:isLength(s)?(0===t?e.offsetX=s:1===t?e.offsetY=s:2===t?e.blur=s:e.spread=s,t++):e.color=color$1.parse(n,s);}return e})}},paintOrder={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[];return e.filter(isIdentToken).forEach(function(A){switch(A.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);}}),[0,1,2].forEach(function(A){-1===t.indexOf(A)&&t.push(A);}),t}},webkitTextStrokeColor={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},webkitTextStrokeWidth={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return isDimensionToken(e)?e.number:0}},CSSParsedDeclaration=function(){function A(A,e){this.animationDuration=parse(A,duration,e.animationDuration),this.backgroundClip=parse(A,backgroundClip,e.backgroundClip),this.backgroundColor=parse(A,backgroundColor,e.backgroundColor),this.backgroundImage=parse(A,backgroundImage,e.backgroundImage),this.backgroundOrigin=parse(A,backgroundOrigin,e.backgroundOrigin),this.backgroundPosition=parse(A,backgroundPosition,e.backgroundPosition),this.backgroundRepeat=parse(A,backgroundRepeat,e.backgroundRepeat),this.backgroundSize=parse(A,backgroundSize,e.backgroundSize),this.borderTopColor=parse(A,borderTopColor,e.borderTopColor),this.borderRightColor=parse(A,borderRightColor,e.borderRightColor),this.borderBottomColor=parse(A,borderBottomColor,e.borderBottomColor),this.borderLeftColor=parse(A,borderLeftColor,e.borderLeftColor),this.borderTopLeftRadius=parse(A,borderTopLeftRadius,e.borderTopLeftRadius),this.borderTopRightRadius=parse(A,borderTopRightRadius,e.borderTopRightRadius),this.borderBottomRightRadius=parse(A,borderBottomRightRadius,e.borderBottomRightRadius),this.borderBottomLeftRadius=parse(A,borderBottomLeftRadius,e.borderBottomLeftRadius),this.borderTopStyle=parse(A,borderTopStyle,e.borderTopStyle),this.borderRightStyle=parse(A,borderRightStyle,e.borderRightStyle),this.borderBottomStyle=parse(A,borderBottomStyle,e.borderBottomStyle),this.borderLeftStyle=parse(A,borderLeftStyle,e.borderLeftStyle),this.borderTopWidth=parse(A,borderTopWidth,e.borderTopWidth),this.borderRightWidth=parse(A,borderRightWidth,e.borderRightWidth),this.borderBottomWidth=parse(A,borderBottomWidth,e.borderBottomWidth),this.borderLeftWidth=parse(A,borderLeftWidth,e.borderLeftWidth),this.boxShadow=parse(A,boxShadow,e.boxShadow),this.color=parse(A,color,e.color),this.direction=parse(A,direction,e.direction),this.display=parse(A,display,e.display),this.float=parse(A,float,e.cssFloat),this.fontFamily=parse(A,fontFamily,e.fontFamily),this.fontSize=parse(A,fontSize,e.fontSize),this.fontStyle=parse(A,fontStyle,e.fontStyle),this.fontVariant=parse(A,fontVariant,e.fontVariant),this.fontWeight=parse(A,fontWeight,e.fontWeight),this.letterSpacing=parse(A,letterSpacing,e.letterSpacing),this.lineBreak=parse(A,lineBreak,e.lineBreak),this.lineHeight=parse(A,lineHeight,e.lineHeight),this.listStyleImage=parse(A,listStyleImage,e.listStyleImage),this.listStylePosition=parse(A,listStylePosition,e.listStylePosition),this.listStyleType=parse(A,listStyleType,e.listStyleType),this.marginTop=parse(A,marginTop,e.marginTop),this.marginRight=parse(A,marginRight,e.marginRight),this.marginBottom=parse(A,marginBottom,e.marginBottom),this.marginLeft=parse(A,marginLeft,e.marginLeft),this.opacity=parse(A,opacity,e.opacity);var t=parse(A,overflow,e.overflow);this.overflowX=t[0],this.overflowY=t[1<t.length?1:0],this.overflowWrap=parse(A,overflowWrap,e.overflowWrap),this.paddingTop=parse(A,paddingTop,e.paddingTop),this.paddingRight=parse(A,paddingRight,e.paddingRight),this.paddingBottom=parse(A,paddingBottom,e.paddingBottom),this.paddingLeft=parse(A,paddingLeft,e.paddingLeft),this.paintOrder=parse(A,paintOrder,e.paintOrder),this.position=parse(A,position,e.position),this.textAlign=parse(A,textAlign,e.textAlign),this.textDecorationColor=parse(A,textDecorationColor,null!=(t=e.textDecorationColor)?t:e.color),this.textDecorationLine=parse(A,textDecorationLine,null!=(t=e.textDecorationLine)?t:e.textDecoration),this.textShadow=parse(A,textShadow,e.textShadow),this.textTransform=parse(A,textTransform,e.textTransform),this.transform=parse(A,transform$1,e.transform),this.transformOrigin=parse(A,transformOrigin,e.transformOrigin),this.visibility=parse(A,visibility,e.visibility),this.webkitTextStrokeColor=parse(A,webkitTextStrokeColor,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=parse(A,webkitTextStrokeWidth,e.webkitTextStrokeWidth),this.wordBreak=parse(A,wordBreak,e.wordBreak),this.zIndex=parse(A,zIndex,e.zIndex);}return A.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&0===this.visibility},A.prototype.isTransparent=function(){return isTransparent(this.backgroundColor)},A.prototype.isTransformed=function(){return null!==this.transform},A.prototype.isPositioned=function(){return 0!==this.position},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return 0!==this.float},A.prototype.isInlineLevel=function(){return contains(this.display,4)||contains(this.display,33554432)||contains(this.display,268435456)||contains(this.display,536870912)||contains(this.display,67108864)||contains(this.display,134217728)},A}(),CSSParsedPseudoDeclaration=function(A,e){this.content=parse(A,content,e.content),this.quotes=parse(A,quotes,e.quotes);},CSSParsedCounterDeclaration=function(A,e){this.counterIncrement=parse(A,counterIncrement,e.counterIncrement),this.counterReset=parse(A,counterReset,e.counterReset);},parse=function(A,e,t){var i=new Tokenizer,t=null!=t?t.toString():e.initialValue,s=(i.write(t),new Parser(i.read()));switch(e.type){case 2:var n=s.parseComponentValue();return e.parse(A,isIdentToken(n)?n.value:e.initialValue);case 0:return e.parse(A,s.parseComponentValue());case 1:return e.parse(A,s.parseComponentValues());case 4:return s.parseComponentValue();case 3:switch(e.format){case"angle":return angle.parse(A,s.parseComponentValue());case"color":return color$1.parse(A,s.parseComponentValue());case"image":return image.parse(A,s.parseComponentValue());case"length":var r=s.parseComponentValue();return isLength(r)?r:ZERO_LENGTH;case"length-percentage":r=s.parseComponentValue();return isLengthPercentage(r)?r:ZERO_LENGTH;case"time":return time.parse(A,s.parseComponentValue())}}},elementDebuggerAttribute="data-html2canvas-debug",getElementDebugType=function(A){switch(A.getAttribute(elementDebuggerAttribute)){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},isDebugging=function(A,e){A=getElementDebugType(A);return 1===A||e===A},ElementContainer=function(A,e){this.context=A,this.textNodes=[],this.elements=[],this.flags=0,isDebugging(e,3),this.styles=new CSSParsedDeclaration(A,window.getComputedStyle(e,null)),isHTMLElementNode(e)&&(this.styles.animationDuration.some(function(A){return 0<A})&&(e.style.animationDuration="0s"),null!==this.styles.transform)&&(e.style.transform="none"),this.bounds=parseBounds(this.context,e),isDebugging(e,4)&&(this.flags|=16);},base64="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",chars$1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup$1="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i$1=0;i$1<chars$1.length;i$1++)lookup$1[chars$1.charCodeAt(i$1)]=i$1;for(var decode=function(A){for(var e,t,i,s,n=.75*A.length,r=A.length,o=0,n=("="===A[A.length-1]&&(n--,"="===A[A.length-2])&&n--,new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n)),a=Array.isArray(n)?n:new Uint8Array(n),l=0;l<r;l+=4)e=lookup$1[A.charCodeAt(l)],t=lookup$1[A.charCodeAt(l+1)],i=lookup$1[A.charCodeAt(l+2)],s=lookup$1[A.charCodeAt(l+3)],a[o++]=e<<2|t>>4,a[o++]=(15&t)<<4|i>>2,a[o++]=(3&i)<<6|63&s;return n},polyUint16Array=function(A){for(var e=A.length,t=[],i=0;i<e;i+=2)t.push(A[i+1]<<8|A[i]);return t},polyUint32Array=function(A){for(var e=A.length,t=[],i=0;i<e;i+=4)t.push(A[i+3]<<24|A[i+2]<<16|A[i+1]<<8|A[i]);return t},UTRIE2_SHIFT_2=5,UTRIE2_SHIFT_1=11,UTRIE2_INDEX_SHIFT=2,UTRIE2_SHIFT_1_2=UTRIE2_SHIFT_1-UTRIE2_SHIFT_2,UTRIE2_LSCP_INDEX_2_OFFSET=65536>>UTRIE2_SHIFT_2,UTRIE2_DATA_BLOCK_LENGTH=1<<UTRIE2_SHIFT_2,UTRIE2_DATA_MASK=UTRIE2_DATA_BLOCK_LENGTH-1,UTRIE2_LSCP_INDEX_2_LENGTH=1024>>UTRIE2_SHIFT_2,UTRIE2_INDEX_2_BMP_LENGTH=UTRIE2_LSCP_INDEX_2_OFFSET+UTRIE2_LSCP_INDEX_2_LENGTH,UTRIE2_UTF8_2B_INDEX_2_OFFSET=UTRIE2_INDEX_2_BMP_LENGTH,UTRIE2_UTF8_2B_INDEX_2_LENGTH=32,UTRIE2_INDEX_1_OFFSET=UTRIE2_UTF8_2B_INDEX_2_OFFSET+UTRIE2_UTF8_2B_INDEX_2_LENGTH,UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=65536>>UTRIE2_SHIFT_1,UTRIE2_INDEX_2_BLOCK_LENGTH=1<<UTRIE2_SHIFT_1_2,UTRIE2_INDEX_2_MASK=UTRIE2_INDEX_2_BLOCK_LENGTH-1,slice16=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},slice32=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},createTrieFromBase64=function(A,e){var A=decode(A),t=Array.isArray(A)?polyUint32Array(A):new Uint32Array(A),A=Array.isArray(A)?polyUint16Array(A):new Uint16Array(A),i=slice16(A,12,t[4]/2),A=2===t[5]?slice16(A,(24+t[4])/2):slice32(t,Math.ceil((24+t[4])/4));return new Trie(t[0],t[1],t[2],t[3],i,A)},Trie=function(){function A(A,e,t,i,s,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=s,this.data=n;}return A.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>UTRIE2_SHIFT_2],this.data[e=(e<<UTRIE2_INDEX_SHIFT)+(A&UTRIE2_DATA_MASK)];if(A<=65535)return e=this.index[UTRIE2_LSCP_INDEX_2_OFFSET+(A-55296>>UTRIE2_SHIFT_2)],this.data[e=(e<<UTRIE2_INDEX_SHIFT)+(A&UTRIE2_DATA_MASK)];if(A<this.highStart)return e=this.index[e=UTRIE2_INDEX_1_OFFSET-UTRIE2_OMITTED_BMP_INDEX_1_LENGTH+(A>>UTRIE2_SHIFT_1)],e=this.index[e+=A>>UTRIE2_SHIFT_2&UTRIE2_INDEX_2_MASK],this.data[e=(e<<UTRIE2_INDEX_SHIFT)+(A&UTRIE2_DATA_MASK)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i=0;i<chars.length;i++)lookup[chars.charCodeAt(i)]=i;var Prepend=1,CR=2,LF=3,Control=4,Extend=5,SpacingMark=7,L=8,V=9,T=10,LV=11,LVT=12,ZWJ=13,Extended_Pictographic=14,RI=15,toCodePoints=function(A){for(var e=[],t=0,i=A.length;t<i;){var s,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<i?56320==(64512&(s=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&s)+65536):(e.push(n),t--):e.push(n);}return e},fromCodePoint=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return "";for(var i=[],s=-1,n="";++s<t;){var r=A[s];r<=65535?i.push(r):i.push(55296+((r-=65536)>>10),r%1024+56320),(s+1===t||16384<i.length)&&(n+=String.fromCharCode.apply(String,i),i.length=0);}return n},UnicodeTrie=createTrieFromBase64(base64),BREAK_NOT_ALLOWED="×",BREAK_ALLOWED="÷",codePointToClass=function(A){return UnicodeTrie.get(A)},_graphemeBreakAtIndex=function(A,e,t){var i=t-2,s=e[i],n=e[t-1],t=e[t];if(n===CR&&t===LF)return BREAK_NOT_ALLOWED;if(n!==CR&&n!==LF&&n!==Control&&t!==CR&&t!==LF&&t!==Control){if(n===L&&-1!==[L,V,LV,LVT].indexOf(t))return BREAK_NOT_ALLOWED;if(!(n!==LV&&n!==V||t!==V&&t!==T))return BREAK_NOT_ALLOWED;if((n===LVT||n===T)&&t===T)return BREAK_NOT_ALLOWED;if(t===ZWJ||t===Extend)return BREAK_NOT_ALLOWED;if(t===SpacingMark)return BREAK_NOT_ALLOWED;if(n===Prepend)return BREAK_NOT_ALLOWED;if(n===ZWJ&&t===Extended_Pictographic){for(;s===Extend;)s=e[--i];if(s===Extended_Pictographic)return BREAK_NOT_ALLOWED}if(n===RI&&t===RI){for(var r=0;s===RI;)r++,s=e[--i];if(r%2==0)return BREAK_NOT_ALLOWED}}return BREAK_ALLOWED},GraphemeBreaker=function(A){var t=toCodePoints(A),i=t.length,s=0,n=0,r=t.map(codePointToClass);return {next:function(){if(i<=s)return {done:!0,value:null};for(var A,e=BREAK_NOT_ALLOWED;s<i&&(e=_graphemeBreakAtIndex(t,r,++s))===BREAK_NOT_ALLOWED;);return e!==BREAK_NOT_ALLOWED||s===i?(A=fromCodePoint.apply(null,t.slice(n,s)),n=s,{value:A,done:!1}):{done:!0,value:null}}}},splitGraphemes=function(A){for(var e,t=GraphemeBreaker(A),i=[];!(e=t.next()).done;)e.value&&i.push(e.value.slice());return i},testRangeBounds=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest"),e=(t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t),e.getBoundingClientRect()),e=Math.round(e.height);if(A.body.removeChild(t),123===e)return !0}}return !1},testIOSLineBreak=function(A){var e=A.createElement("boundtest"),i=(e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e),A.createRange()),s=(e.innerHTML="function"==typeof"".repeat?"&#128104;".repeat(10):"",e.firstChild),t=toCodePoints$1(s.data).map(function(A){return fromCodePoint$1(A)}),n=0,r={},t=t.every(function(A,e){i.setStart(s,n),i.setEnd(s,n+A.length);var t=i.getBoundingClientRect(),A=(n+=A.length,t.x>r.x||t.y>r.y);return r=t,0===e||A});return A.body.removeChild(e),t},testCORS=function(){return void 0!==(new Image).crossOrigin},testResponseType=function(){return "string"==typeof(new XMLHttpRequest).responseType},testSVG=function(A){var e=new Image,A=A.createElement("canvas"),t=A.getContext("2d");if(!t)return !1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(e,0,0),A.toDataURL();}catch(A){return !1}return !0},isGreenPixel=function(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]},testForeignObject=function(t){var A=t.createElement("canvas"),i=100,s=(A.width=i,A.height=i,A.getContext("2d"));if(!s)return Promise.reject(!1);s.fillStyle="rgb(0, 255, 0)",s.fillRect(0,0,i,i);var e=new Image,n=A.toDataURL(),A=(e.src=n,createForeignObjectSVG(i,i,0,0,e));return s.fillStyle="red",s.fillRect(0,0,i,i),loadSerializedSVG$1(A).then(function(A){s.drawImage(A,0,0);var A=s.getImageData(0,0,i,i).data,e=(s.fillStyle="red",s.fillRect(0,0,i,i),t.createElement("div"));return e.style.backgroundImage="url("+n+")",e.style.height="100px",isGreenPixel(A)?loadSerializedSVG$1(createForeignObjectSVG(i,i,0,0,e)):Promise.reject(!1)}).then(function(A){return s.drawImage(A,0,0),isGreenPixel(s.getImageData(0,0,i,i).data)}).catch(function(){return !1})},createForeignObjectSVG=function(A,e,t,i,s){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg"),n=document.createElementNS(n,"foreignObject");return r.setAttributeNS(null,"width",A.toString()),r.setAttributeNS(null,"height",e.toString()),n.setAttributeNS(null,"width","100%"),n.setAttributeNS(null,"height","100%"),n.setAttributeNS(null,"x",t.toString()),n.setAttributeNS(null,"y",i.toString()),n.setAttributeNS(null,"externalResourcesRequired","true"),r.appendChild(n),n.appendChild(s),r},loadSerializedSVG$1=function(i){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(i));})},FEATURES={get SUPPORT_RANGE_BOUNDS(){var A=testRangeBounds(document);return Object.defineProperty(FEATURES,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=FEATURES.SUPPORT_RANGE_BOUNDS&&testIOSLineBreak(document);return Object.defineProperty(FEATURES,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=testSVG(document);return Object.defineProperty(FEATURES,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?testForeignObject(document):Promise.resolve(!1);return Object.defineProperty(FEATURES,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=testCORS();return Object.defineProperty(FEATURES,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=testResponseType();return Object.defineProperty(FEATURES,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(FEATURES,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!("undefined"==typeof Intl||!Intl.Segmenter);return Object.defineProperty(FEATURES,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},TextBounds=function(A,e){this.text=A,this.bounds=e;},parseTextBounds=function(s,A,n,r){var A=breakText(A,n),o=[],a=0;return A.forEach(function(A){var e,t,i;n.textDecorationLine.length||0<A.trim().length?FEATURES.SUPPORT_RANGE_BOUNDS?1<(e=createRange(r,a,A.length).getClientRects()).length?(i=segmentGraphemes(A),t=0,i.forEach(function(A){o.push(new TextBounds(A,Bounds.fromDOMRectList(s,createRange(r,t+a,A.length).getClientRects()))),t+=A.length;})):o.push(new TextBounds(A,Bounds.fromDOMRectList(s,e))):(i=r.splitText(A.length),o.push(new TextBounds(A,getWrapperBounds(s,r))),r=i):FEATURES.SUPPORT_RANGE_BOUNDS||(r=r.splitText(A.length)),a+=A.length;}),o},getWrapperBounds=function(A,e){var t=e.ownerDocument;if(t){var t=t.createElement("html2canvaswrapper"),i=(t.appendChild(e.cloneNode(!0)),e.parentNode);if(i)return i.replaceChild(t,e),e=parseBounds(A,t),t.firstChild&&i.replaceChild(t.firstChild,t),e}return Bounds.EMPTY},createRange=function(A,e,t){var i=A.ownerDocument;if(i)return (i=i.createRange()).setStart(A,e),i.setEnd(A,e+t),i;throw new Error("Node has no owner document")},segmentGraphemes=function(A){var e;return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION?(e=new Intl.Segmenter(void 0,{granularity:"grapheme"}),Array.from(e.segment(A)).map(function(A){return A.segment})):splitGraphemes(A)},segmentWords=function(A,e){var t;return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION?(t=new Intl.Segmenter(void 0,{granularity:"word"}),Array.from(t.segment(A)).map(function(A){return A.segment})):breakWords(A,e)},breakText=function(A,e){return 0!==e.letterSpacing?segmentGraphemes(A):segmentWords(A,e)},wordSeparators=[32,160,4961,65792,65793,4153,4241],breakWords=function(A,e){for(var t,i=LineBreaker(A,{lineBreak:e.lineBreak,wordBreak:"break-word"===e.overflowWrap?"break-word":e.wordBreak}),s=[];!(t=i.next()).done;)!function(){var A,e;t.value&&(A=t.value.slice(),A=toCodePoints$1(A),e="",A.forEach(function(A){-1===wordSeparators.indexOf(A)?e+=fromCodePoint$1(A):(e.length&&s.push(e),s.push(fromCodePoint$1(A)),e="");}),e.length)&&s.push(e);}();return s},TextContainer=function(A,e,t){this.text=transform(e.data,t.textTransform),this.textBounds=parseTextBounds(A,this.text,t,e);},transform=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(CAPITALIZE,capitalize);case 2:return A.toUpperCase();default:return A}},CAPITALIZE=/(^|\s|:|-|\(|\))([a-z])/g,capitalize=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},ImageElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.src=e.currentSrc||e.src,A.intrinsicWidth=e.naturalWidth,A.intrinsicHeight=e.naturalHeight,A.context.cache.addImage(A.src),A}return __extends(A,t),A}(ElementContainer),CanvasElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.canvas=e,A.intrinsicWidth=e.width,A.intrinsicHeight=e.height,A}return __extends(A,t),A}(ElementContainer),SVGElementContainer=function(s){function A(A,e){var t=s.call(this,A,e)||this,i=new XMLSerializer,A=parseBounds(A,e);return e.setAttribute("width",A.width+"px"),e.setAttribute("height",A.height+"px"),t.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(e)),t.intrinsicWidth=e.width.baseVal.value,t.intrinsicHeight=e.height.baseVal.value,t.context.cache.addImage(t.svg),t}return __extends(A,s),A}(ElementContainer),LIElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.value=e.value,A}return __extends(A,t),A}(ElementContainer),OLElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.start=e.start,A.reversed="boolean"==typeof e.reversed&&!0===e.reversed,A}return __extends(A,t),A}(ElementContainer),CHECKBOX_BORDER_RADIUS=[{type:15,flags:0,unit:"px",number:3}],RADIO_BORDER_RADIUS=[{type:16,flags:0,number:50}],reformatInputBounds=function(A){return A.width>A.height?new Bounds(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Bounds(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},getInputValue=function(A){var e=A.type===PASSWORD?new Array(A.value.length+1).join("•"):A.value;return 0===e.length?A.placeholder||"":e},CHECKBOX="checkbox",RADIO="radio",PASSWORD="password",INPUT_COLOR=707406591,InputElementContainer=function(i){function A(A,e){var t=i.call(this,A,e)||this;switch(t.type=e.type.toLowerCase(),t.checked=e.checked,t.value=getInputValue(e),t.type!==CHECKBOX&&t.type!==RADIO||(t.styles.backgroundColor=3739148031,t.styles.borderTopColor=t.styles.borderRightColor=t.styles.borderBottomColor=t.styles.borderLeftColor=2779096575,t.styles.borderTopWidth=t.styles.borderRightWidth=t.styles.borderBottomWidth=t.styles.borderLeftWidth=1,t.styles.borderTopStyle=t.styles.borderRightStyle=t.styles.borderBottomStyle=t.styles.borderLeftStyle=1,t.styles.backgroundClip=[0],t.styles.backgroundOrigin=[0],t.bounds=reformatInputBounds(t.bounds)),t.type){case CHECKBOX:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=CHECKBOX_BORDER_RADIUS;break;case RADIO:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=RADIO_BORDER_RADIUS;}return t}return __extends(A,i),A}(ElementContainer),SelectElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this,e=e.options[e.selectedIndex||0];return A.value=e&&e.text||"",A}return __extends(A,t),A}(ElementContainer),TextareaElementContainer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.value=e.value,A}return __extends(A,t),A}(ElementContainer),IFrameElementContainer=function(n){function A(A,e){var t,i,s=n.call(this,A,e)||this;s.src=e.src,s.width=parseInt(e.width,10)||0,s.height=parseInt(e.height,10)||0,s.backgroundColor=s.styles.backgroundColor;try{e.contentWindow&&e.contentWindow.document&&e.contentWindow.document.documentElement&&(s.tree=parseTree(A,e.contentWindow.document.documentElement),t=e.contentWindow.document.documentElement?parseColor(A,getComputedStyle(e.contentWindow.document.documentElement).backgroundColor):COLORS.TRANSPARENT,i=e.contentWindow.document.body?parseColor(A,getComputedStyle(e.contentWindow.document.body).backgroundColor):COLORS.TRANSPARENT,s.backgroundColor=isTransparent(t)?isTransparent(i)?s.styles.backgroundColor:i:t);}catch(A){}return s}return __extends(A,n),A}(ElementContainer),LIST_OWNERS=["OL","UL","MENU"],parseNodeTree=function(e,A,t,i){for(var s=A.firstChild;s;s=r){var n,r=s.nextSibling;isTextNode(s)&&0<s.data.trim().length?t.textNodes.push(new TextContainer(e,s,t.styles)):isElementNode(s)&&(isSlotElement(s)&&s.assignedNodes?s.assignedNodes().forEach(function(A){return parseNodeTree(e,A,t,i)}):(n=createContainer$1(e,s)).styles.isVisible()&&(createsRealStackingContext(s,n,i)?n.flags|=4:createsStackingContext(n.styles)&&(n.flags|=2),-1!==LIST_OWNERS.indexOf(s.tagName)&&(n.flags|=8),t.elements.push(n),s.slot,s.shadowRoot?parseNodeTree(e,s.shadowRoot,n,i):isTextareaElement(s)||isSVGElement(s)||isSelectElement(s)||parseNodeTree(e,s,n,i)));}},createContainer$1=function(A,e){return new(isImageElement(e)?ImageElementContainer:isCanvasElement(e)?CanvasElementContainer:isSVGElement(e)?SVGElementContainer:isLIElement(e)?LIElementContainer:isOLElement(e)?OLElementContainer:isInputElement(e)?InputElementContainer:isSelectElement(e)?SelectElementContainer:isTextareaElement(e)?TextareaElementContainer:isIFrameElement(e)?IFrameElementContainer:ElementContainer)(A,e)},parseTree=function(A,e){var t=createContainer$1(A,e);return t.flags|=4,parseNodeTree(A,e,t,t),t},createsRealStackingContext=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||isBodyElement(A)&&t.styles.isTransparent()},createsStackingContext=function(A){return A.isPositioned()||A.isFloating()},isTextNode=function(A){return A.nodeType===Node.TEXT_NODE},isElementNode=function(A){return A.nodeType===Node.ELEMENT_NODE},isHTMLElementNode=function(A){return isElementNode(A)&&void 0!==A.style&&!isSVGElementNode(A)},isSVGElementNode=function(A){return "object"==typeof A.className},isLIElement=function(A){return "LI"===A.tagName},isOLElement=function(A){return "OL"===A.tagName},isInputElement=function(A){return "INPUT"===A.tagName},isHTMLElement=function(A){return "HTML"===A.tagName},isSVGElement=function(A){return "svg"===A.tagName},isBodyElement=function(A){return "BODY"===A.tagName},isCanvasElement=function(A){return "CANVAS"===A.tagName},isVideoElement=function(A){return "VIDEO"===A.tagName},isImageElement=function(A){return "IMG"===A.tagName},isIFrameElement=function(A){return "IFRAME"===A.tagName},isStyleElement=function(A){return "STYLE"===A.tagName},isScriptElement=function(A){return "SCRIPT"===A.tagName},isTextareaElement=function(A){return "TEXTAREA"===A.tagName},isSelectElement=function(A){return "SELECT"===A.tagName},isSlotElement=function(A){return "SLOT"===A.tagName},isCustomElement=function(A){return 0<A.tagName.indexOf("-")},CounterState=function(){function A(){this.counters={};}return A.prototype.getCounterValue=function(A){A=this.counters[A];return A&&A.length?A[A.length-1]:1},A.prototype.getCounterValues=function(A){A=this.counters[A];return A||[]},A.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()});},A.prototype.parse=function(A){var t=this,e=A.counterIncrement,A=A.counterReset,i=!0,s=(null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(i=!1,e.length||e.push(1),e[Math.max(0,e.length-1)]+=A.increment);}),[]);return i&&A.forEach(function(A){var e=t.counters[A.counter];s.push(A.counter),(e=e||(t.counters[A.counter]=[])).push(A.reset);}),s},A}(),ROMAN_UPPER={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},ARMENIAN={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},HEBREW={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},GEORGIAN={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},createAdditiveCounter=function(i,A,e,s,t,n){return i<A||e<i?createCounterText(i,t,0<n.length):s.integers.reduce(function(A,e,t){for(;e<=i;)i-=e,A+=s.values[t];return A},"")+n},createCounterStyleWithSymbolResolver=function(A,e,t,i){for(var s="";t||A--,s=i(A)+s,e<=(A/=e)*e;);return s},createCounterStyleFromRange=function(A,e,t,i,s){var n=t-e+1;return (A<0?"-":"")+(createCounterStyleWithSymbolResolver(Math.abs(A),n,i,function(A){return fromCodePoint$1(Math.floor(A%n)+e)})+s)},createCounterStyleFromSymbols=function(A,e,t){void 0===t&&(t=". ");var i=e.length;return createCounterStyleWithSymbolResolver(Math.abs(A),i,!1,function(A){return e[Math.floor(A%i)]})+t},CJK_ZEROS=1,CJK_TEN_COEFFICIENTS=2,CJK_TEN_HIGH_COEFFICIENTS=4,CJK_HUNDRED_COEFFICIENTS=8,createCJKCounter=function(A,e,t,i,s,n){if(A<-9999||9999<A)return createCounterText(A,4,0<s.length);var r=Math.abs(A),o=s;if(0===r)return e[0]+o;for(var a=0;0<r&&a<=4;a++){var l=r%10;0==l&&contains(n,CJK_ZEROS)&&""!==o?o=e[l]+o:1<l||1==l&&0===a||1==l&&1===a&&contains(n,CJK_TEN_COEFFICIENTS)||1==l&&1===a&&contains(n,CJK_TEN_HIGH_COEFFICIENTS)&&100<A||1==l&&1<a&&contains(n,CJK_HUNDRED_COEFFICIENTS)?o=e[l]+(0<a?t[a-1]:"")+o:1==l&&0<a&&(o=t[a-1]+o),r=Math.floor(r/10);}return (A<0?i:"")+o},CHINESE_INFORMAL_MULTIPLIERS="十百千萬",CHINESE_FORMAL_MULTIPLIERS="拾佰仟萬",JAPANESE_NEGATIVE="マイナス",KOREAN_NEGATIVE="마이너스",createCounterText=function(A,e,t){var i=t?". ":"",s=t?"、":"",n=t?", ":"",r=t?" ":"";switch(e){case 0:return "•"+r;case 1:return "◦"+r;case 2:return "◾"+r;case 5:var o=createCounterStyleFromRange(A,48,57,!0,i);return o.length<4?"0"+o:o;case 4:return createCounterStyleFromSymbols(A,"〇一二三四五六七八九",s);case 6:return createAdditiveCounter(A,1,3999,ROMAN_UPPER,3,i).toLowerCase();case 7:return createAdditiveCounter(A,1,3999,ROMAN_UPPER,3,i);case 8:return createCounterStyleFromRange(A,945,969,!1,i);case 9:return createCounterStyleFromRange(A,97,122,!1,i);case 10:return createCounterStyleFromRange(A,65,90,!1,i);case 11:return createCounterStyleFromRange(A,1632,1641,!0,i);case 12:case 49:return createAdditiveCounter(A,1,9999,ARMENIAN,3,i);case 35:return createAdditiveCounter(A,1,9999,ARMENIAN,3,i).toLowerCase();case 13:return createCounterStyleFromRange(A,2534,2543,!0,i);case 14:case 30:return createCounterStyleFromRange(A,6112,6121,!0,i);case 15:return createCounterStyleFromSymbols(A,"子丑寅卯辰巳午未申酉戌亥",s);case 16:return createCounterStyleFromSymbols(A,"甲乙丙丁戊己庚辛壬癸",s);case 17:case 48:return createCJKCounter(A,"零一二三四五六七八九",CHINESE_INFORMAL_MULTIPLIERS,"負",s,CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS|CJK_HUNDRED_COEFFICIENTS);case 47:return createCJKCounter(A,"零壹貳參肆伍陸柒捌玖",CHINESE_FORMAL_MULTIPLIERS,"負",s,CJK_ZEROS|CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS|CJK_HUNDRED_COEFFICIENTS);case 42:return createCJKCounter(A,"零一二三四五六七八九",CHINESE_INFORMAL_MULTIPLIERS,"负",s,CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS|CJK_HUNDRED_COEFFICIENTS);case 41:return createCJKCounter(A,"零壹贰叁肆伍陆柒捌玖",CHINESE_FORMAL_MULTIPLIERS,"负",s,CJK_ZEROS|CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS|CJK_HUNDRED_COEFFICIENTS);case 26:return createCJKCounter(A,"〇一二三四五六七八九","十百千万",JAPANESE_NEGATIVE,s,0);case 25:return createCJKCounter(A,"零壱弐参四伍六七八九","拾百千万",JAPANESE_NEGATIVE,s,CJK_ZEROS|CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS);case 31:return createCJKCounter(A,"영일이삼사오육칠팔구","십백천만",KOREAN_NEGATIVE,n,CJK_ZEROS|CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS);case 33:return createCJKCounter(A,"零一二三四五六七八九","十百千萬",KOREAN_NEGATIVE,n,0);case 32:return createCJKCounter(A,"零壹貳參四五六七八九","拾百千",KOREAN_NEGATIVE,n,CJK_ZEROS|CJK_TEN_COEFFICIENTS|CJK_TEN_HIGH_COEFFICIENTS);case 18:return createCounterStyleFromRange(A,2406,2415,!0,i);case 20:return createAdditiveCounter(A,1,19999,GEORGIAN,3,i);case 21:return createCounterStyleFromRange(A,2790,2799,!0,i);case 22:return createCounterStyleFromRange(A,2662,2671,!0,i);case 22:return createAdditiveCounter(A,1,10999,HEBREW,3,i);case 23:return createCounterStyleFromSymbols(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return createCounterStyleFromSymbols(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return createCounterStyleFromRange(A,3302,3311,!0,i);case 28:return createCounterStyleFromSymbols(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",s);case 29:return createCounterStyleFromSymbols(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",s);case 34:return createCounterStyleFromRange(A,3792,3801,!0,i);case 37:return createCounterStyleFromRange(A,6160,6169,!0,i);case 38:return createCounterStyleFromRange(A,4160,4169,!0,i);case 39:return createCounterStyleFromRange(A,2918,2927,!0,i);case 40:return createCounterStyleFromRange(A,1776,1785,!0,i);case 43:return createCounterStyleFromRange(A,3046,3055,!0,i);case 44:return createCounterStyleFromRange(A,3174,3183,!0,i);case 45:return createCounterStyleFromRange(A,3664,3673,!0,i);case 46:return createCounterStyleFromRange(A,3872,3881,!0,i);default:return createCounterStyleFromRange(A,48,57,!0,i)}},IGNORE_ATTRIBUTE="data-html2canvas-ignore",DocumentCloner=function(){function A(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new CounterState,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1);}return A.prototype.toIFrame=function(A,i){var e,s,n,t,r=this,o=createIFrameContainer(A,i);return o.contentWindow?(e=A.defaultView.pageXOffset,A=A.defaultView.pageYOffset,s=o.contentWindow,n=s.document,t=iframeLoader(o).then(function(){return __awaiter(r,void 0,void 0,function(){var e,t;return __generator(this,function(A){switch(A.label){case 0:return (this.scrolledElements.forEach(restoreNodeScroll),s&&(s.scrollTo(i.left,i.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===i.top&&s.scrollX===i.left||(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(s.scrollX-i.left,s.scrollY-i.top,0,0))),e=this.options.onclone,void 0===(t=this.clonedReferenceElement))?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:n.fonts&&n.fonts.ready?[4,n.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return /(AppleWebKit)/g.test(navigator.userAgent)?[4,imagesReady(n)]:[3,4];case 3:A.sent(),A.label=4;case 4:return "function"==typeof e?[2,Promise.resolve().then(function(){return e(n,t)}).then(function(){return o})]:[2,o]}})})}),n.open(),n.write(serializeDoctype(document.doctype)+"<html></html>"),restoreOwnerScroll(this.referenceElement.ownerDocument,e,A),n.replaceChild(n.adoptNode(this.documentElement),n.documentElement),n.close(),t):Promise.reject("Unable to find iframe window")},A.prototype.createElementClone=function(A){var e;return isDebugging(A,2),isCanvasElement(A)?this.createCanvasClone(A):isVideoElement(A)?this.createVideoClone(A):isStyleElement(A)?this.createStyleClone(A):(e=A.cloneNode(!1),isImageElement(e)&&(isImageElement(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),"lazy"===e.loading)&&(e.loading="eager"),isCustomElement(e)?this.createCustomElementClone(e):e)},A.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return copyCSSStyles(A.style,e),e},A.prototype.createStyleClone=function(A){try{var e,t,i=A.sheet;if(i&&i.cssRules)return e=[].slice.call(i.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),(t=A.cloneNode(!1)).textContent=e,t}catch(A){if(this.context.logger.error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var A;if(this.options.inlineImages&&e.ownerDocument){var t=e.ownerDocument.createElement("img");try{return t.src=e.toDataURL(),t}catch(A){this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e);}}t=e.cloneNode(!1);try{t.width=e.width,t.height=e.height;var i,s,n=e.getContext("2d"),r=t.getContext("2d");r&&(!this.options.allowTaint&&n?r.putImageData(n.getImageData(0,0,e.width,e.height),0,0):((i=null!=(A=e.getContext("webgl2"))?A:e.getContext("webgl"))&&!1===(null==(s=i.getContextAttributes())?void 0:s.preserveDrawingBuffer)&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e),r.drawImage(e,0,0)));}catch(A){this.context.logger.info("Unable to clone canvas as it is tainted",e);}return t},A.prototype.createVideoClone=function(e){var A=e.ownerDocument.createElement("canvas"),t=(A.width=e.offsetWidth,A.height=e.offsetHeight,A.getContext("2d"));try{return t&&(t.drawImage(e,0,0,A.width,A.height),this.options.allowTaint||t.getImageData(0,0,A.width,A.height)),A}catch(A){this.context.logger.info("Unable to clone video as it is tainted",e);}t=e.ownerDocument.createElement("canvas");return t.width=e.offsetWidth,t.height=e.offsetHeight,t},A.prototype.appendChildNode=function(A,e,t){isElementNode(e)&&(isScriptElement(e)||e.hasAttribute(IGNORE_ATTRIBUTE)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(e))||this.options.copyStyles&&isElementNode(e)&&isStyleElement(e)||A.appendChild(this.cloneNode(e,t));},A.prototype.cloneChildNodes=function(A,e,t){for(var i,s=this,n=(A.shadowRoot||A).firstChild;n;n=n.nextSibling)isElementNode(n)&&isSlotElement(n)&&"function"==typeof n.assignedNodes?(i=n.assignedNodes()).length&&i.forEach(function(A){return s.appendChildNode(e,A,t)}):this.appendChildNode(e,n,t);},A.prototype.cloneNode=function(A,e){var t,i,s,n,r;return isTextNode(A)?document.createTextNode(A.data):A.ownerDocument&&(s=A.ownerDocument.defaultView)&&isElementNode(A)&&(isHTMLElementNode(A)||isSVGElementNode(A))?((t=this.createElementClone(A)).style.transitionProperty="none",i=s.getComputedStyle(A),r=s.getComputedStyle(A,":before"),s=s.getComputedStyle(A,":after"),this.referenceElement===A&&isHTMLElementNode(t)&&(this.clonedReferenceElement=t),isBodyElement(t)&&createPseudoHideStyles(t),n=this.counters.parse(new CSSParsedCounterDeclaration(this.context,i)),r=this.resolvePseudoContent(A,t,r,PseudoElementType.BEFORE),isCustomElement(A)&&(e=!0),isVideoElement(A)||this.cloneChildNodes(A,t,e),r&&t.insertBefore(r,t.firstChild),(r=this.resolvePseudoContent(A,t,s,PseudoElementType.AFTER))&&t.appendChild(r),this.counters.pop(n),(i&&(this.options.copyStyles||isSVGElementNode(A))&&!isIFrameElement(A)||e)&&copyCSSStyles(i,t),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([t,A.scrollLeft,A.scrollTop]),(isTextareaElement(A)||isSelectElement(A))&&(isTextareaElement(t)||isSelectElement(t))&&(t.value=A.value),t):A.cloneNode(!1)},A.prototype.resolvePseudoContent=function(r,A,e,t){var o=this;if(e){var a,l,i=e.content,c=A.ownerDocument;if(c&&i&&"none"!==i&&"-moz-alt-content"!==i&&"none"!==e.display)return this.counters.parse(new CSSParsedCounterDeclaration(this.context,e)),a=new CSSParsedPseudoDeclaration(this.context,e),l=c.createElement("html2canvaspseudoelement"),copyCSSStyles(e,l),a.content.forEach(function(A){if(0===A.type)l.appendChild(c.createTextNode(A.value));else if(22===A.type){var e=c.createElement("img");e.src=A.value,e.style.opacity="1",l.appendChild(e);}else if(18===A.type){var t,i,s,n;"attr"===A.name?(e=A.values.filter(isIdentToken)).length&&l.appendChild(c.createTextNode(r.getAttribute(e[0].value)||"")):"counter"===A.name?(s=(e=A.values.filter(nonFunctionArgSeparator))[0],n=e[1],s&&isIdentToken(s)&&(e=o.counters.getCounterValue(s.value),t=n&&isIdentToken(n)?listStyleType.parse(o.context,n.value):3,l.appendChild(c.createTextNode(createCounterText(e,t,!1))))):"counters"===A.name&&(s=(e=A.values.filter(nonFunctionArgSeparator))[0],t=e[1],n=e[2],s)&&isIdentToken(s)&&(e=o.counters.getCounterValues(s.value),i=n&&isIdentToken(n)?listStyleType.parse(o.context,n.value):3,s=t&&0===t.type?t.value:"",n=e.map(function(A){return createCounterText(A,i,!1)}).join(s),l.appendChild(c.createTextNode(n)));}else if(20===A.type)switch(A.value){case"open-quote":l.appendChild(c.createTextNode(getQuote(a.quotes,o.quoteDepth++,!0)));break;case"close-quote":l.appendChild(c.createTextNode(getQuote(a.quotes,--o.quoteDepth,!1)));break;default:l.appendChild(c.createTextNode(A.value));}}),l.className=PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+PSEUDO_HIDE_ELEMENT_CLASS_AFTER,i=t===PseudoElementType.BEFORE?" "+PSEUDO_HIDE_ELEMENT_CLASS_BEFORE:" "+PSEUDO_HIDE_ELEMENT_CLASS_AFTER,isSVGElementNode(A)?A.className.baseValue+=i:A.className+=i,l}},A.destroy=function(A){return !!A.parentNode&&(A.parentNode.removeChild(A),!0)},A}(),PseudoElementType,createIFrameContainer=(!function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER";}(PseudoElementType=PseudoElementType||{}),function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(IGNORE_ATTRIBUTE,"true"),A.body.appendChild(t),t}),imageReady=function(e){return new Promise(function(A){!e.complete&&e.src?(e.onload=A,e.onerror=A):A();})},imagesReady=function(A){return Promise.all([].slice.call(A.images,0).map(imageReady))},iframeLoader=function(s){return new Promise(function(e,A){var t=s.contentWindow;if(!t)return A("No window assigned for iframe");var i=t.document;t.onload=s.onload=function(){t.onload=s.onload=null;var A=setInterval(function(){0<i.body.childNodes.length&&"complete"===i.readyState&&(clearInterval(A),e(s));},50);};})},ignoredStyleProperties=["all","d","content"],copyCSSStyles=function(A,e){for(var t=A.length-1;0<=t;t--){var i=A.item(t);-1===ignoredStyleProperties.indexOf(i)&&e.style.setProperty(i,A.getPropertyValue(i));}return e},serializeDoctype=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},restoreOwnerScroll=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t);},restoreNodeScroll=function(A){var e=A[0],t=A[1],A=A[2];e.scrollLeft=t,e.scrollTop=A;},PSEUDO_BEFORE=":before",PSEUDO_AFTER=":after",PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",PSEUDO_HIDE_ELEMENT_STYLE='{\n    content: "" !important;\n    display: none !important;\n}',createPseudoHideStyles=function(A){createStyles(A,"."+PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+PSEUDO_BEFORE+PSEUDO_HIDE_ELEMENT_STYLE+"\n         ."+PSEUDO_HIDE_ELEMENT_CLASS_AFTER+PSEUDO_AFTER+PSEUDO_HIDE_ELEMENT_STYLE);},createStyles=function(A,e){var t=A.ownerDocument;t&&((t=t.createElement("style")).textContent=e,A.appendChild(t));},CacheStorage=function(){function t(){}return t.getOrigin=function(A){var e=t._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},t.isSameOrigin=function(A){return t.getOrigin(A)===t._origin},t.setContext=function(A){t._link=A.document.createElement("a"),t._origin=t.getOrigin(A.location.href);},t._origin="about:blank",t}(),Cache=function(){function A(A,e){this.context=A,this._options=e,this._cache={};}return A.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(isBlobImage(A)||isRenderable(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},A.prototype.match=function(A){return this._cache[A]},A.prototype.loadImage=function(r){return __awaiter(this,void 0,void 0,function(){var e,i,t,s,n=this;return __generator(this,function(A){switch(A.label){case 0:return (e=CacheStorage.isSameOrigin(r),i=!isInlineImage(r)&&!0===this._options.useCORS&&FEATURES.SUPPORT_CORS_IMAGES&&!e,t=!isInlineImage(r)&&!e&&!isBlobImage(r)&&"string"==typeof this._options.proxy&&FEATURES.SUPPORT_CORS_XHR&&!i,e||!1!==this._options.allowTaint||isInlineImage(r)||isBlobImage(r)||t||i)?(s=r,t?[4,this.proxy(s)]:[3,2]):[2];case 1:s=A.sent(),A.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(isInlineBase64Image(s)||i)&&(t.crossOrigin="anonymous"),t.src=s,!0===t.complete&&setTimeout(function(){return A(t)},500),0<n._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+n._options.imageTimeout+"ms) loading image")},n._options.imageTimeout);})];case 3:return [2,A.sent()]}})})},A.prototype.has=function(A){return void 0!==this._cache[A]},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(r){var o,a=this,l=this._options.proxy;if(l)return o=r.substring(0,256),new Promise(function(e,t){var A,i=FEATURES.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest,n=(s.onload=function(){var A;200===s.status?"text"==i?e(s.response):((A=new FileReader).addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(s.response)):t("Failed to proxy resource "+o+" with status code "+s.status);},s.onerror=t,-1<l.indexOf("?")?"&":"?");s.open("GET",l+n+"url="+encodeURIComponent(r)+"&responseType="+i),"text"!=i&&s instanceof XMLHttpRequest&&(s.responseType=i),a._options.imageTimeout&&(A=a._options.imageTimeout,s.timeout=A,s.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+o)}),s.send();});throw new Error("No proxy defined")},A}(),INLINE_SVG=/^data:image\/svg\+xml/i,INLINE_BASE64=/^data:image\/.*;base64,/i,INLINE_IMG=/^data:image\/.*/i,isRenderable=function(A){return FEATURES.SUPPORT_SVG_DRAWING||!isSVG(A)},isInlineImage=function(A){return INLINE_IMG.test(A)},isInlineBase64Image=function(A){return INLINE_BASE64.test(A)},isBlobImage=function(A){return "blob"===A.substr(0,4)},isSVG=function(A){return "svg"===A.substr(-3).toLowerCase()||INLINE_SVG.test(A)},Vector=function(){function t(A,e){this.type=0,this.x=A,this.y=e;}return t.prototype.add=function(A,e){return new t(this.x+A,this.y+e)},t}(),lerp=function(A,e,t){return new Vector(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},BezierCurve=function(){function r(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i;}return r.prototype.subdivide=function(A,e){var t=lerp(this.start,this.startControl,A),i=lerp(this.startControl,this.endControl,A),s=lerp(this.endControl,this.end,A),n=lerp(t,i,A),i=lerp(i,s,A),A=lerp(n,i,A);return e?new r(this.start,t,n,A):new r(A,i,s,this.end)},r.prototype.add=function(A,e){return new r(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},r.prototype.reverse=function(){return new r(this.end,this.endControl,this.startControl,this.start)},r}(),isBezierCurve=function(A){return 1===A.type},BoundCurves=function(A){var e=A.styles,t=A.bounds,i=(s=getAbsoluteValueForTuple(e.borderTopLeftRadius,t.width,t.height))[0],s=s[1],n=(r=getAbsoluteValueForTuple(e.borderTopRightRadius,t.width,t.height))[0],r=r[1],o=(a=getAbsoluteValueForTuple(e.borderBottomRightRadius,t.width,t.height))[0],a=a[1],l=(c=getAbsoluteValueForTuple(e.borderBottomLeftRadius,t.width,t.height))[0],c=c[1];(h=[]).push((i+n)/t.width),h.push((l+o)/t.width),h.push((s+c)/t.height),h.push((r+a)/t.height);1<(h=Math.max.apply(Math,h))&&(i/=h,s/=h,n/=h,r/=h,o/=h,a/=h,l/=h,c/=h);var h=t.width-n,u=t.height-a,B=t.width-o,d=t.height-c,g=e.borderTopWidth,p=e.borderRightWidth,C=e.borderBottomWidth,w=e.borderLeftWidth,E=getAbsoluteValue(e.paddingTop,A.bounds.width),f=getAbsoluteValue(e.paddingRight,A.bounds.width),Q=getAbsoluteValue(e.paddingBottom,A.bounds.width),e=getAbsoluteValue(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=0<i||0<s?getCurvePoints(t.left+w/3,t.top+g/3,i-w/3,s-g/3,CORNER.TOP_LEFT):new Vector(t.left+w/3,t.top+g/3),this.topRightBorderDoubleOuterBox=0<i||0<s?getCurvePoints(t.left+h,t.top+g/3,n-p/3,r-g/3,CORNER.TOP_RIGHT):new Vector(t.left+t.width-p/3,t.top+g/3),this.bottomRightBorderDoubleOuterBox=0<o||0<a?getCurvePoints(t.left+B,t.top+u,o-p/3,a-C/3,CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width-p/3,t.top+t.height-C/3),this.bottomLeftBorderDoubleOuterBox=0<l||0<c?getCurvePoints(t.left+w/3,t.top+d,l-w/3,c-C/3,CORNER.BOTTOM_LEFT):new Vector(t.left+w/3,t.top+t.height-C/3),this.topLeftBorderDoubleInnerBox=0<i||0<s?getCurvePoints(t.left+2*w/3,t.top+2*g/3,i-2*w/3,s-2*g/3,CORNER.TOP_LEFT):new Vector(t.left+2*w/3,t.top+2*g/3),this.topRightBorderDoubleInnerBox=0<i||0<s?getCurvePoints(t.left+h,t.top+2*g/3,n-2*p/3,r-2*g/3,CORNER.TOP_RIGHT):new Vector(t.left+t.width-2*p/3,t.top+2*g/3),this.bottomRightBorderDoubleInnerBox=0<o||0<a?getCurvePoints(t.left+B,t.top+u,o-2*p/3,a-2*C/3,CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width-2*p/3,t.top+t.height-2*C/3),this.bottomLeftBorderDoubleInnerBox=0<l||0<c?getCurvePoints(t.left+2*w/3,t.top+d,l-2*w/3,c-2*C/3,CORNER.BOTTOM_LEFT):new Vector(t.left+2*w/3,t.top+t.height-2*C/3),this.topLeftBorderStroke=0<i||0<s?getCurvePoints(t.left+w/2,t.top+g/2,i-w/2,s-g/2,CORNER.TOP_LEFT):new Vector(t.left+w/2,t.top+g/2),this.topRightBorderStroke=0<i||0<s?getCurvePoints(t.left+h,t.top+g/2,n-p/2,r-g/2,CORNER.TOP_RIGHT):new Vector(t.left+t.width-p/2,t.top+g/2),this.bottomRightBorderStroke=0<o||0<a?getCurvePoints(t.left+B,t.top+u,o-p/2,a-C/2,CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width-p/2,t.top+t.height-C/2),this.bottomLeftBorderStroke=0<l||0<c?getCurvePoints(t.left+w/2,t.top+d,l-w/2,c-C/2,CORNER.BOTTOM_LEFT):new Vector(t.left+w/2,t.top+t.height-C/2),this.topLeftBorderBox=0<i||0<s?getCurvePoints(t.left,t.top,i,s,CORNER.TOP_LEFT):new Vector(t.left,t.top),this.topRightBorderBox=0<n||0<r?getCurvePoints(t.left+h,t.top,n,r,CORNER.TOP_RIGHT):new Vector(t.left+t.width,t.top),this.bottomRightBorderBox=0<o||0<a?getCurvePoints(t.left+B,t.top+u,o,a,CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<l||0<c?getCurvePoints(t.left,t.top+d,l,c,CORNER.BOTTOM_LEFT):new Vector(t.left,t.top+t.height),this.topLeftPaddingBox=0<i||0<s?getCurvePoints(t.left+w,t.top+g,Math.max(0,i-w),Math.max(0,s-g),CORNER.TOP_LEFT):new Vector(t.left+w,t.top+g),this.topRightPaddingBox=0<n||0<r?getCurvePoints(t.left+Math.min(h,t.width-p),t.top+g,h>t.width+p?0:Math.max(0,n-p),Math.max(0,r-g),CORNER.TOP_RIGHT):new Vector(t.left+t.width-p,t.top+g),this.bottomRightPaddingBox=0<o||0<a?getCurvePoints(t.left+Math.min(B,t.width-w),t.top+Math.min(u,t.height-C),Math.max(0,o-p),Math.max(0,a-C),CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width-p,t.top+t.height-C),this.bottomLeftPaddingBox=0<l||0<c?getCurvePoints(t.left+w,t.top+Math.min(d,t.height-C),Math.max(0,l-w),Math.max(0,c-C),CORNER.BOTTOM_LEFT):new Vector(t.left+w,t.top+t.height-C),this.topLeftContentBox=0<i||0<s?getCurvePoints(t.left+w+e,t.top+g+E,Math.max(0,i-(w+e)),Math.max(0,s-(g+E)),CORNER.TOP_LEFT):new Vector(t.left+w+e,t.top+g+E),this.topRightContentBox=0<n||0<r?getCurvePoints(t.left+Math.min(h,t.width+w+e),t.top+g+E,h>t.width+w+e?0:n-w+e,r-(g+E),CORNER.TOP_RIGHT):new Vector(t.left+t.width-(p+f),t.top+g+E),this.bottomRightContentBox=0<o||0<a?getCurvePoints(t.left+Math.min(B,t.width-(w+e)),t.top+Math.min(u,t.height+g+E),Math.max(0,o-(p+f)),a-(C+Q),CORNER.BOTTOM_RIGHT):new Vector(t.left+t.width-(p+f),t.top+t.height-(C+Q)),this.bottomLeftContentBox=0<l||0<c?getCurvePoints(t.left+w+e,t.top+d,Math.max(0,l-(w+e)),c-(C+Q),CORNER.BOTTOM_LEFT):new Vector(t.left+w+e,t.top+t.height-(C+Q));},CORNER,getCurvePoints=(!function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT";}(CORNER=CORNER||{}),function(A,e,t,i,s){var n=(Math.sqrt(2)-1)/3*4,r=t*n,o=i*n,a=A+t,l=e+i;switch(s){case CORNER.TOP_LEFT:return new BezierCurve(new Vector(A,l),new Vector(A,l-o),new Vector(a-r,e),new Vector(a,e));case CORNER.TOP_RIGHT:return new BezierCurve(new Vector(A,e),new Vector(A+r,e),new Vector(a,l-o),new Vector(a,l));case CORNER.BOTTOM_RIGHT:return new BezierCurve(new Vector(a,e),new Vector(a,e+o),new Vector(A+r,l),new Vector(A,l));default:CORNER.BOTTOM_LEFT;return new BezierCurve(new Vector(a,l),new Vector(a-r,l),new Vector(A,e+o),new Vector(A,e))}}),calculateBorderBoxPath=function(A){return [A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},calculateContentBoxPath=function(A){return [A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},calculatePaddingBoxPath=function(A){return [A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},TransformEffect=function(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6;},ClipEffect=function(A,e){this.path=A,this.target=e,this.type=1;},OpacityEffect=function(A){this.opacity=A,this.type=2,this.target=6;},isTransformEffect=function(A){return 0===A.type},isClipEffect=function(A){return 1===A.type},isOpacityEffect=function(A){return 2===A.type},equalPath=function(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})},transformPath=function(A,t,i,s,n){return A.map(function(A,e){switch(e){case 0:return A.add(t,i);case 1:return A.add(t+s,i);case 2:return A.add(t+s,i+n);case 3:return A.add(t,i+n)}return A})},StackingContext=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[];},ElementPaint=function(){function A(A,e){var t;this.container=A,this.parent=e,this.effects=[],this.curves=new BoundCurves(this.container),this.container.styles.opacity<1&&this.effects.push(new OpacityEffect(this.container.styles.opacity)),null!==this.container.styles.transform&&(A=this.container.bounds.left+this.container.styles.transformOrigin[0].number,e=this.container.bounds.top+this.container.styles.transformOrigin[1].number,t=this.container.styles.transform,this.effects.push(new TransformEffect(A,e,t))),0!==this.container.styles.overflowX&&(A=calculateBorderBoxPath(this.curves),e=calculatePaddingBoxPath(this.curves),equalPath(A,e)?this.effects.push(new ClipEffect(A,6)):(this.effects.push(new ClipEffect(A,2)),this.effects.push(new ClipEffect(e,4))));}return A.prototype.getEffects=function(e){for(var A=-1===[2,3].indexOf(this.container.styles.position),t=this.parent,i=this.effects.slice(0);t;){var s,n,r=t.effects.filter(function(A){return !isClipEffect(A)});A||0!==t.container.styles.position||!t.parent?(i.unshift.apply(i,r),A=-1===[2,3].indexOf(t.container.styles.position),0!==t.container.styles.overflowX&&(s=calculateBorderBoxPath(t.curves),n=calculatePaddingBoxPath(t.curves),equalPath(s,n)||i.unshift(new ClipEffect(n,6)))):i.unshift.apply(i,r),t=t.parent;}return i.filter(function(A){return contains(A.target,e)})},A}(),parseStackTree=function(l,c,h,u){l.container.elements.forEach(function(A){var e,t,i,s,n=contains(A.flags,4),r=contains(A.flags,2),o=new ElementPaint(A,l),a=(contains(A.styles.display,2048)&&u.push(o),contains(A.flags,8)?[]:u);n||r?(r=n||A.styles.isPositioned()?h:c,e=new StackingContext(o),A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()?(t=A.styles.zIndex.order)<0?(i=0,r.negativeZIndex.some(function(A,e){return t>A.element.container.styles.zIndex.order?(i=e,!1):0<i}),r.negativeZIndex.splice(i,0,e)):0<t?(s=0,r.positiveZIndex.some(function(A,e){return t>=A.element.container.styles.zIndex.order?(s=e+1,!1):0<s}),r.positiveZIndex.splice(s,0,e)):r.zeroOrAutoZIndexOrTransformedOrOpacity.push(e):(A.styles.isFloating()?r.nonPositionedFloats:r.nonPositionedInlineLevel).push(e),parseStackTree(o,e,n?e:h,a)):((A.styles.isInlineLevel()?c.inlineLevel:c.nonInlineLevel).push(o),parseStackTree(o,c,h,a)),contains(A.flags,8)&&processListItems(A,a);});},processListItems=function(A,e){for(var t=A instanceof OLElementContainer?A.start:1,i=A instanceof OLElementContainer&&A.reversed,s=0;s<e.length;s++){var n=e[s];n.container instanceof LIElementContainer&&"number"==typeof n.container.value&&0!==n.container.value&&(t=n.container.value),n.listValue=createCounterText(t,n.container.styles.listStyleType,!0),t+=i?-1:1;}},parseStackingContexts=function(A){var A=new ElementPaint(A,null),e=new StackingContext(A),t=[];return parseStackTree(A,e,e,t),processListItems(A.container,t),e},parsePathForBorder=function(A,e){switch(e){case 0:return createPathFromCurves(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return createPathFromCurves(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return createPathFromCurves(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);default:return createPathFromCurves(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},parsePathForBorderDoubleOuter=function(A,e){switch(e){case 0:return createPathFromCurves(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return createPathFromCurves(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return createPathFromCurves(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);default:return createPathFromCurves(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},parsePathForBorderDoubleInner=function(A,e){switch(e){case 0:return createPathFromCurves(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return createPathFromCurves(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return createPathFromCurves(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);default:return createPathFromCurves(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},parsePathForBorderStroke=function(A,e){switch(e){case 0:return createStrokePathFromCurves(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return createStrokePathFromCurves(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return createStrokePathFromCurves(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);default:return createStrokePathFromCurves(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},createStrokePathFromCurves=function(A,e){var t=[];return isBezierCurve(A)?t.push(A.subdivide(.5,!1)):t.push(A),isBezierCurve(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},createPathFromCurves=function(A,e,t,i){var s=[];return isBezierCurve(A)?s.push(A.subdivide(.5,!1)):s.push(A),isBezierCurve(t)?s.push(t.subdivide(.5,!0)):s.push(t),isBezierCurve(i)?s.push(i.subdivide(.5,!0).reverse()):s.push(i),isBezierCurve(e)?s.push(e.subdivide(.5,!1).reverse()):s.push(e),s},paddingBox=function(A){var e=A.bounds,A=A.styles;return e.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))},contentBox=function(A){var e=A.styles,A=A.bounds,t=getAbsoluteValue(e.paddingLeft,A.width),i=getAbsoluteValue(e.paddingRight,A.width),s=getAbsoluteValue(e.paddingTop,A.width),n=getAbsoluteValue(e.paddingBottom,A.width);return A.add(t+e.borderLeftWidth,s+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+t+i),-(e.borderTopWidth+e.borderBottomWidth+s+n))},calculateBackgroundPositioningArea=function(A,e){return 0===A?e.bounds:(2===A?contentBox:paddingBox)(e)},calculateBackgroundPaintingArea=function(A,e){return 0===A?e.bounds:(2===A?contentBox:paddingBox)(e)},calculateBackgroundRendering=function(A,e,t){var i=calculateBackgroundPositioningArea(getBackgroundValueForIndex(A.styles.backgroundOrigin,e),A),s=calculateBackgroundPaintingArea(getBackgroundValueForIndex(A.styles.backgroundClip,e),A),t=calculateBackgroundSize(getBackgroundValueForIndex(A.styles.backgroundSize,e),t,i),n=t[0],r=t[1],o=getAbsoluteValueForTuple(getBackgroundValueForIndex(A.styles.backgroundPosition,e),i.width-n,i.height-r);return [calculateBackgroundRepeatPath(getBackgroundValueForIndex(A.styles.backgroundRepeat,e),o,t,i,s),Math.round(i.left+o[0]),Math.round(i.top+o[1]),n,r]},isAuto=function(A){return isIdentToken(A)&&A.value===BACKGROUND_SIZE.AUTO},hasIntrinsicValue=function(A){return "number"==typeof A},calculateBackgroundSize=function(A,e,t){var i=e[0],s=e[1],e=e[2],n=A[0],A=A[1];if(!n)return [0,0];if(isLengthPercentage(n)&&A&&isLengthPercentage(A))return [getAbsoluteValue(n,t.width),getAbsoluteValue(A,t.height)];var r=hasIntrinsicValue(e);if(isIdentToken(n)&&(n.value===BACKGROUND_SIZE.CONTAIN||n.value===BACKGROUND_SIZE.COVER))return hasIntrinsicValue(e)?t.width/t.height<e!=(n.value===BACKGROUND_SIZE.COVER)?[t.width,t.width/e]:[t.height*e,t.height]:[t.width,t.height];var o=hasIntrinsicValue(i),a=hasIntrinsicValue(s),l=o||a;if(isAuto(n)&&(!A||isAuto(A)))return o&&a?[i,s]:r||l?l&&r?[o?i:s*e,a?s:i/e]:[o?i:t.width,a?s:t.height]:[t.width,t.height];if(r)return r=l=0,isLengthPercentage(n)?l=getAbsoluteValue(n,t.width):isLengthPercentage(A)&&(r=getAbsoluteValue(A,t.height)),isAuto(n)?l=r*e:A&&!isAuto(A)||(r=l/e),[l,r];e=null,l=null;if(isLengthPercentage(n)?e=getAbsoluteValue(n,t.width):A&&isLengthPercentage(A)&&(l=getAbsoluteValue(A,t.height)),null!==(e=null!==(l=null===e||A&&!isAuto(A)?l:o&&a?e/i*s:t.height)&&isAuto(n)?o&&a?l/s*i:t.width:e)&&null!==l)return [e,l];throw new Error("Unable to calculate background-size for element")},getBackgroundValueForIndex=function(A,e){e=A[e];return void 0===e?A[0]:e},calculateBackgroundRepeatPath=function(A,e,t,i,s){var n=e[0],r=e[1],o=t[0],a=t[1];switch(A){case 2:return [new Vector(Math.round(i.left),Math.round(i.top+r)),new Vector(Math.round(i.left+i.width),Math.round(i.top+r)),new Vector(Math.round(i.left+i.width),Math.round(a+i.top+r)),new Vector(Math.round(i.left),Math.round(a+i.top+r))];case 3:return [new Vector(Math.round(i.left+n),Math.round(i.top)),new Vector(Math.round(i.left+n+o),Math.round(i.top)),new Vector(Math.round(i.left+n+o),Math.round(i.height+i.top)),new Vector(Math.round(i.left+n),Math.round(i.height+i.top))];case 1:return [new Vector(Math.round(i.left+n),Math.round(i.top+r)),new Vector(Math.round(i.left+n+o),Math.round(i.top+r)),new Vector(Math.round(i.left+n+o),Math.round(i.top+r+a)),new Vector(Math.round(i.left+n),Math.round(i.top+r+a))];default:return [new Vector(Math.round(s.left),Math.round(s.top)),new Vector(Math.round(s.left+s.width),Math.round(s.top)),new Vector(Math.round(s.left+s.width),Math.round(s.height+s.top)),new Vector(Math.round(s.left),Math.round(s.height+s.top))]}},SMALL_IMAGE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",SAMPLE_TEXT="Hidden Text",FontMetrics=function(){function A(A){this._data={},this._document=A;}return A.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),s=this._document.createElement("span"),n=this._document.body,A=(t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",n.appendChild(t),i.src=SMALL_IMAGE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",s.style.fontFamily=A,s.style.fontSize=e,s.style.margin="0",s.style.padding="0",s.appendChild(this._document.createTextNode(SAMPLE_TEXT)),t.appendChild(s),t.appendChild(i),i.offsetTop-s.offsetTop+2),e=(t.removeChild(s),t.appendChild(this._document.createTextNode(SAMPLE_TEXT)),t.style.lineHeight="normal",i.style.verticalAlign="super",i.offsetTop-t.offsetTop+2);return n.removeChild(t),{baseline:A,middle:e}},A.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},A}(),Renderer=function(A,e){this.context=A,this.options=e;},MASK_OFFSET=1e4,CanvasRenderer=function(t){function g(A,e){A=t.call(this,A,e)||this;return A._activeEffects=[],A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),e.canvas||(A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px"),A.fontMetrics=new FontMetrics(document),A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.ctx.textBaseline="bottom",A._activeEffects=[],A.context.logger.debug("Canvas renderer initialized ("+e.width+"x"+e.height+") with scale "+e.scale),A}return __extends(g,t),g.prototype.applyEffects=function(A){for(var e=this;this._activeEffects.length;)this.popEffect();A.forEach(function(A){return e.applyEffect(A)});},g.prototype.applyEffect=function(A){this.ctx.save(),isOpacityEffect(A)&&(this.ctx.globalAlpha=A.opacity),isTransformEffect(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),isClipEffect(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A);},g.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore();},g.prototype.renderStack=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(A){switch(A.label){case 0:return e.element.container.styles.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:A.sent(),A.label=2;case 2:return [2]}})})},g.prototype.renderNode=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(A){switch(A.label){case 0:return (contains(e.container.flags,16),e.container.styles.isVisible())?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return [2]}})})},g.prototype.renderTextWithLetterSpacing=function(t,A,i){var s=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i):segmentGraphemes(t.text).reduce(function(A,e){return s.ctx.fillText(e,A,t.bounds.top+i),A+s.ctx.measureText(e).width},t.bounds.left);},g.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return "normal"===A||"small-caps"===A}).join(""),t=fixIOSSystemFonts(A.fontFamily).join(", "),i=isDimensionToken(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return [[A.fontStyle,e,A.fontWeight,i,t].join(" "),t,i]},g.prototype.renderTextNode=function(a,l){return __awaiter(this,void 0,void 0,function(){var e,t,i,s,n,r,o=this;return __generator(this,function(A){return t=this.createFontStyle(l),i=t[0],e=t[1],t=t[2],this.ctx.font=i,this.ctx.direction=1===l.direction?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",i=this.fontMetrics.getMetrics(e,t),s=i.baseline,n=i.middle,r=l.paintOrder,a.textBounds.forEach(function(t){r.forEach(function(A){switch(A){case 0:o.ctx.fillStyle=asString(l.color),o.renderTextWithLetterSpacing(t,l.letterSpacing,s);var e=l.textShadow;e.length&&t.text.trim().length&&(e.slice(0).reverse().forEach(function(A){o.ctx.shadowColor=asString(A.color),o.ctx.shadowOffsetX=A.offsetX.number*o.options.scale,o.ctx.shadowOffsetY=A.offsetY.number*o.options.scale,o.ctx.shadowBlur=A.blur.number,o.renderTextWithLetterSpacing(t,l.letterSpacing,s);}),o.ctx.shadowColor="",o.ctx.shadowOffsetX=0,o.ctx.shadowOffsetY=0,o.ctx.shadowBlur=0),l.textDecorationLine.length&&(o.ctx.fillStyle=asString(l.textDecorationColor||l.color),l.textDecorationLine.forEach(function(A){switch(A){case 1:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top+s),t.bounds.width,1);break;case 2:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top),t.bounds.width,1);break;case 3:o.ctx.fillRect(t.bounds.left,Math.ceil(t.bounds.top+n),t.bounds.width,1);}}));break;case 1:l.webkitTextStrokeWidth&&t.text.trim().length&&(o.ctx.strokeStyle=asString(l.webkitTextStrokeColor),o.ctx.lineWidth=l.webkitTextStrokeWidth,o.ctx.lineJoin=window.chrome?"miter":"round",o.ctx.strokeText(t.text,t.bounds.left,t.bounds.top+s)),o.ctx.strokeStyle="",o.ctx.lineWidth=0,o.ctx.lineJoin="miter";}});}),[2]})})},g.prototype.renderReplacedElement=function(A,e,t){var i;t&&0<A.intrinsicWidth&&0<A.intrinsicHeight&&(i=contentBox(A),e=calculatePaddingBoxPath(e),this.path(e),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore());},g.prototype.renderNodeContent=function(d){return __awaiter(this,void 0,void 0,function(){var e,t,i,s,n,r,o,a,l,c,h,u,B;return __generator(this,function(A){switch(A.label){case 0:this.applyEffects(d.getEffects(4)),e=d.container,t=d.curves,i=e.styles,s=0,n=e.textNodes,A.label=1;case 1:return s<n.length?(r=n[s],[4,this.renderTextNode(r,i)]):[3,4];case 2:A.sent(),A.label=3;case 3:return s++,[3,1];case 4:if(!(e instanceof ImageElementContainer))return [3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.context.cache.match(e.src)];case 6:return c=A.sent(),this.renderReplacedElement(e,t,c),[3,8];case 7:return A.sent(),this.context.logger.error("Error loading image "+e.src),[3,8];case 8:if(e instanceof CanvasElementContainer&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof SVGElementContainer))return [3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.context.cache.match(e.svg)];case 10:return c=A.sent(),this.renderReplacedElement(e,t,c),[3,12];case 11:return A.sent(),this.context.logger.error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof IFrameElementContainer&&e.tree?[4,new g(this.context,{scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,width:e.width,height:e.height}).render(e.tree)]:[3,14];case 13:r=A.sent(),e.width&&e.height&&this.ctx.drawImage(r,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof InputElementContainer&&(o=Math.min(e.bounds.width,e.bounds.height),e.type===CHECKBOX?e.checked&&(this.ctx.save(),this.path([new Vector(e.bounds.left+.39363*o,e.bounds.top+.79*o),new Vector(e.bounds.left+.16*o,e.bounds.top+.5549*o),new Vector(e.bounds.left+.27347*o,e.bounds.top+.44071*o),new Vector(e.bounds.left+.39694*o,e.bounds.top+.5649*o),new Vector(e.bounds.left+.72983*o,e.bounds.top+.23*o),new Vector(e.bounds.left+.84*o,e.bounds.top+.34085*o),new Vector(e.bounds.left+.39363*o,e.bounds.top+.79*o)]),this.ctx.fillStyle=asString(INPUT_COLOR),this.ctx.fill(),this.ctx.restore()):e.type===RADIO&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+o/2,e.bounds.top+o/2,o/4,0,2*Math.PI,!0),this.ctx.fillStyle=asString(INPUT_COLOR),this.ctx.fill(),this.ctx.restore())),isTextInputElement(e)&&e.value.length){switch(o=this.createFontStyle(i),u=o[0],h=o[1],h=this.fontMetrics.getMetrics(u,h).baseline,this.ctx.font=u,this.ctx.fillStyle=asString(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=canvasTextAlign(e.styles.textAlign),B=contentBox(e),a=0,e.styles.textAlign){case 1:a+=B.width/2;break;case 2:a+=B.width;}l=B.add(a,0,0,-B.height/2+1),this.ctx.save(),this.path([new Vector(B.left,B.top),new Vector(B.left+B.width,B.top),new Vector(B.left+B.width,B.top+B.height),new Vector(B.left,B.top+B.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new TextBounds(e.value,l),i.letterSpacing,h),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left";}if(!contains(e.styles.display,2048))return [3,20];if(null===e.styles.listStyleImage)return [3,19];if(0!==(l=e.styles.listStyleImage).type)return [3,18];c=void 0,h=l.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.context.cache.match(h)];case 16:return c=A.sent(),this.ctx.drawImage(c,e.bounds.left-(c.width+10),e.bounds.top),[3,18];case 17:return A.sent(),this.context.logger.error("Error loading list-style-image "+h),[3,18];case 18:return [3,20];case 19:d.listValue&&-1!==e.styles.listStyleType&&(u=this.createFontStyle(i)[0],this.ctx.font=u,this.ctx.fillStyle=asString(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",B=new Bounds(e.bounds.left,e.bounds.top+getAbsoluteValue(e.styles.paddingTop,e.bounds.width),e.bounds.width,computeLineHeight(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new TextBounds(d.listValue,B),i.letterSpacing,computeLineHeight(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return [2]}})})},g.prototype.renderStackContent=function(p){return __awaiter(this,void 0,void 0,function(){var e,t,i,s,n,r,o,a,l,c,h,u,B,d,g;return __generator(this,function(A){switch(A.label){case 0:return contains(p.element.container.flags,16),[4,this.renderNodeBackgroundAndBorders(p.element)];case 1:A.sent(),e=0,t=p.negativeZIndex,A.label=2;case 2:return e<t.length?(g=t[e],[4,this.renderStack(g)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return [4,this.renderNodeContent(p.element)];case 6:A.sent(),i=0,s=p.nonInlineLevel,A.label=7;case 7:return i<s.length?(g=s[i],[4,this.renderNode(g)]):[3,10];case 8:A.sent(),A.label=9;case 9:return i++,[3,7];case 10:n=0,r=p.nonPositionedFloats,A.label=11;case 11:return n<r.length?(g=r[n],[4,this.renderStack(g)]):[3,14];case 12:A.sent(),A.label=13;case 13:return n++,[3,11];case 14:o=0,a=p.nonPositionedInlineLevel,A.label=15;case 15:return o<a.length?(g=a[o],[4,this.renderStack(g)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:l=0,c=p.inlineLevel,A.label=19;case 19:return l<c.length?(g=c[l],[4,this.renderNode(g)]):[3,22];case 20:A.sent(),A.label=21;case 21:return l++,[3,19];case 22:h=0,u=p.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return h<u.length?(g=u[h],[4,this.renderStack(g)]):[3,26];case 24:A.sent(),A.label=25;case 25:return h++,[3,23];case 26:B=0,d=p.positiveZIndex,A.label=27;case 27:return B<d.length?(g=d[B],[4,this.renderStack(g)]):[3,30];case 28:A.sent(),A.label=29;case 29:return B++,[3,27];case 30:return [2]}})})},g.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath();},g.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath();},g.prototype.formatPath=function(A){var i=this;A.forEach(function(A,e){var t=isBezierCurve(A)?A.start:A;0===e?i.ctx.moveTo(t.x,t.y):i.ctx.lineTo(t.x,t.y),isBezierCurve(A)&&i.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y);});},g.prototype.renderRepeat=function(A,e,t,i){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,i),this.ctx.fill(),this.ctx.translate(-t,-i);},g.prototype.resizeImage=function(A,e,t){var i;return A.width===e&&A.height===t?A:((i=(null!=(i=this.canvas.ownerDocument)?i:document).createElement("canvas")).width=Math.max(1,e),i.height=Math.max(1,t),i.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),i)},g.prototype.renderBackgroundImage=function(F){return __awaiter(this,void 0,void 0,function(){var U,e,y,t,i,s;return __generator(this,function(A){switch(A.label){case 0:U=F.styles.backgroundImage.length-1,e=function(e){var t,i,s,n,r,o,a,l,c,h,u,B,d,g,p,C,w,E,f,Q,m;return __generator(this,function(A){switch(A.label){case 0:if(0!==e.type)return [3,5];t=void 0,i=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,y.context.cache.match(i)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),y.context.logger.error("Error loading background-image "+i),[3,4];case 4:return t&&(h=calculateBackgroundRendering(F,U,[t.width,t.height,t.width/t.height]),o=h[0],B=h[1],d=h[2],c=h[3],h=h[4],n=y.ctx.createPattern(y.resizeImage(t,c,h),"repeat"),y.renderRepeat(o,n,B,d)),[3,6];case 5:isLinearGradient(e)?(u=calculateBackgroundRendering(F,U,[null,null,null]),o=u[0],B=u[1],d=u[2],c=u[3],h=u[4],u=calculateGradientDirection(e.angle,c,h),g=u[0],r=u[1],l=u[2],a=u[3],u=u[4],(C=document.createElement("canvas")).width=c,C.height=h,p=C.getContext("2d"),s=p.createLinearGradient(r,a,l,u),processColorStops(e.stops,g).forEach(function(A){return s.addColorStop(A.stop,asString(A.color))}),p.fillStyle=s,p.fillRect(0,0,c,h),0<c&&0<h&&(n=y.ctx.createPattern(C,"repeat"),y.renderRepeat(o,n,B,d))):isRadialGradient(e)&&(r=calculateBackgroundRendering(F,U,[null,null,null]),o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=0===e.position.length?[FIFTY_PERCENT]:e.position,B=getAbsoluteValue(u[0],c),d=getAbsoluteValue(u[u.length-1],h),g=calculateRadius(e,B,d,c,h),p=g[0],C=g[1],0<p)&&0<C&&(w=y.ctx.createRadialGradient(a+B,l+d,0,a+B,l+d,p),processColorStops(e.stops,2*p).forEach(function(A){return w.addColorStop(A.stop,asString(A.color))}),y.path(o),y.ctx.fillStyle=w,p!==C?(E=F.bounds.left+.5*F.bounds.width,f=F.bounds.top+.5*F.bounds.height,m=1/(Q=C/p),y.ctx.save(),y.ctx.translate(E,f),y.ctx.transform(1,0,0,Q,0,0),y.ctx.translate(-E,-f),y.ctx.fillRect(a,m*(l-f)+f,c,h*m),y.ctx.restore()):y.ctx.fill()),A.label=6;case 6:return U--,[2]}})},y=this,t=0,i=F.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<i.length?(s=i[t],[5,e(s)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return [2]}})})},g.prototype.renderSolidBorder=function(e,t,i){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(A){return this.path(parsePathForBorder(i,t)),this.ctx.fillStyle=asString(e),this.ctx.fill(),[2]})})},g.prototype.renderDoubleBorder=function(t,i,s,n){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(A){switch(A.label){case 0:return i<3?[4,this.renderSolidBorder(t,s,n)]:[3,2];case 1:return A.sent(),[2];case 2:return e=parsePathForBorderDoubleOuter(n,s),this.path(e),this.ctx.fillStyle=asString(t),this.ctx.fill(),e=parsePathForBorderDoubleInner(n,s),this.path(e),this.ctx.fill(),[2]}})})},g.prototype.renderNodeBackgroundAndBorders=function(c){return __awaiter(this,void 0,void 0,function(){var e,t,i,s,n,r,o,a,l=this;return __generator(this,function(A){switch(A.label){case 0:return (this.applyEffects(c.getEffects(2)),e=c.container.styles,t=!isTransparent(e.backgroundColor)||e.backgroundImage.length,i=[{style:e.borderTopStyle,color:e.borderTopColor,width:e.borderTopWidth},{style:e.borderRightStyle,color:e.borderRightColor,width:e.borderRightWidth},{style:e.borderBottomStyle,color:e.borderBottomColor,width:e.borderBottomWidth},{style:e.borderLeftStyle,color:e.borderLeftColor,width:e.borderLeftWidth}],s=calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(e.backgroundClip,0),c.curves),t||e.boxShadow.length)?(this.ctx.save(),this.path(s),this.ctx.clip(),isTransparent(e.backgroundColor)||(this.ctx.fillStyle=asString(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){l.ctx.save();var e=calculateBorderBoxPath(c.curves),t=A.inset?0:MASK_OFFSET,i=transformPath(e,-t+(A.inset?1:-1)*A.spread.number,(A.inset?1:-1)*A.spread.number,A.spread.number*(A.inset?-2:2),A.spread.number*(A.inset?-2:2));A.inset?(l.path(e),l.ctx.clip(),l.mask(i)):(l.mask(e),l.ctx.clip(),l.path(i)),l.ctx.shadowOffsetX=A.offsetX.number+t,l.ctx.shadowOffsetY=A.offsetY.number,l.ctx.shadowColor=asString(A.color),l.ctx.shadowBlur=A.blur.number,l.ctx.fillStyle=A.inset?asString(A.color):"rgba(0,0,0,1)",l.ctx.fill(),l.ctx.restore();}),A.label=2;case 2:r=n=0,o=i,A.label=3;case 3:return r<o.length?0!==(a=o[r]).style&&!isTransparent(a.color)&&0<a.width?2!==a.style?[3,5]:[4,this.renderDashedDottedBorder(a.color,a.width,n,c.curves,2)]:[3,11]:[3,13];case 4:return A.sent(),[3,11];case 5:return 3!==a.style?[3,7]:[4,this.renderDashedDottedBorder(a.color,a.width,n,c.curves,3)];case 6:return A.sent(),[3,11];case 7:return 4!==a.style?[3,9]:[4,this.renderDoubleBorder(a.color,a.width,n,c.curves)];case 8:return A.sent(),[3,11];case 9:return [4,this.renderSolidBorder(a.color,n,c.curves)];case 10:A.sent(),A.label=11;case 11:n++,A.label=12;case 12:return r++,[3,3];case 13:return [2]}})})},g.prototype.renderDashedDottedBorder=function(u,B,d,g,p){return __awaiter(this,void 0,void 0,function(){var e,t,i,s,n,r,o,a,l,c,h;return __generator(this,function(A){return this.ctx.save(),n=parsePathForBorderStroke(g,d),e=parsePathForBorder(g,d),2===p&&(this.path(e),this.ctx.clip()),l=(isBezierCurve(e[0])?(t=e[0].start.x,e[0].start):(t=e[0].x,e[0])).y,s=(isBezierCurve(e[1])?(i=e[1].end.x,e[1].end):(i=e[1].x,e[1])).y,l=0===d||2===d?Math.abs(t-i):Math.abs(l-s),this.ctx.beginPath(),3===p?this.formatPath(n):this.formatPath(e.slice(0,2)),s=B<3?3*B:2*B,n=B<3?2*B:B,3===p&&(n=s=B),r=!0,l<=2*s?r=!1:l<=2*s+n?(s*=o=l/(2*s+n),n*=o):(o=Math.floor((l+n)/(s+n)),a=(l-o*s)/(o-1),n=(l=(l-(o+1)*s)/o)<=0||Math.abs(n-a)<Math.abs(n-l)?a:l),r&&(3===p?this.ctx.setLineDash([0,s+n]):this.ctx.setLineDash([s,n])),3===p?(this.ctx.lineCap="round",this.ctx.lineWidth=B):this.ctx.lineWidth=2*B+1.1,this.ctx.strokeStyle=asString(u),this.ctx.stroke(),this.ctx.setLineDash([]),2===p&&(isBezierCurve(e[0])&&(c=e[3],h=e[0],this.ctx.beginPath(),this.formatPath([new Vector(c.end.x,c.end.y),new Vector(h.start.x,h.start.y)]),this.ctx.stroke()),isBezierCurve(e[1]))&&(c=e[1],h=e[2],this.ctx.beginPath(),this.formatPath([new Vector(c.end.x,c.end.y),new Vector(h.start.x,h.start.y)]),this.ctx.stroke()),this.ctx.restore(),[2]})})},g.prototype.render=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=asString(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),e=parseStackingContexts(t),[4,this.renderStack(e)];case 1:return A.sent(),this.applyEffects([]),[2,this.canvas]}})})},g}(Renderer),isTextInputElement=function(A){return A instanceof TextareaElementContainer||A instanceof SelectElementContainer||A instanceof InputElementContainer&&A.type!==RADIO&&A.type!==CHECKBOX},calculateBackgroundCurvedPaintingArea=function(A,e){switch(A){case 0:return calculateBorderBoxPath(e);case 2:return calculateContentBoxPath(e);default:return calculatePaddingBoxPath(e)}},canvasTextAlign=function(A){switch(A){case 1:return "center";case 2:return "right";default:return "left"}},iOSBrokenFonts=["-apple-system","system-ui"],fixIOSSystemFonts=function(A){return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(A){return -1===iOSBrokenFonts.indexOf(A)}):A},ForeignObjectRenderer=function(t){function A(A,e){A=t.call(this,A,e)||this;return A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),A.options=e,A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px",A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+e.width+"x"+e.height+" at "+e.x+","+e.y+") with scale "+e.scale),A}return __extends(A,t),A.prototype.render=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(A){switch(A.label){case 0:return e=createForeignObjectSVG(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,loadSerializedSVG(e)];case 1:return e=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=asString(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(e,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}(Renderer),loadSerializedSVG=function(i){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t);},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(i));})},Logger=function(){function A(A){var e=A.id,A=A.enabled;this.id=e,this.enabled=A,this.start=Date.now();}return A.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,__spreadArray([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A));},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,__spreadArray([this.id,this.getTime()+"ms"],A));},A.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.warn?console.warn.apply(console,__spreadArray([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A));},A.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,__spreadArray([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A));},A.instances={},A}(),Context=function(){function t(A,e){this.windowBounds=e,this.instanceName="#"+t.instanceCount++,this.logger=new Logger({id:this.instanceName,enabled:A.logging}),this.cache=null!=(e=A.cache)?e:new Cache(this,A);}return t.instanceCount=1,t}(),html2canvas=function(A,e){return renderElement(A,e=void 0===e?{}:e)},renderElement=("undefined"!=typeof window&&CacheStorage.setContext(window),function(C,w){return __awaiter(void 0,void 0,void 0,function(){var e,t,i,s,n,r,o,a,l,c,h,u,B,d,g,p;return __generator(this,function(A){switch(A.label){case 0:if(!C||"object"!=typeof C)return [2,Promise.reject("Invalid element provided as first argument")];if(!(B=C.ownerDocument))throw new Error("Element is not attached to a Document");if(e=B.defaultView)return d={allowTaint:null!=(d=w.allowTaint)&&d,imageTimeout:null!=(d=w.imageTimeout)?d:15e3,proxy:w.proxy,useCORS:null!=(d=w.useCORS)&&d},c=__assign({logging:null==(c=w.logging)||c,cache:w.cache},d),d={windowWidth:null!=(d=w.windowWidth)?d:e.innerWidth,windowHeight:null!=(d=w.windowHeight)?d:e.innerHeight,scrollX:null!=(d=w.scrollX)?d:e.pageXOffset,scrollY:null!=(d=w.scrollY)?d:e.pageYOffset},d=new Bounds(d.scrollX,d.scrollY,d.windowWidth,d.windowHeight),c=new Context(c,d),h=null!=(h=w.foreignObjectRendering)&&h,u={allowTaint:null!=(u=w.allowTaint)&&u,onclone:w.onclone,ignoreElements:w.ignoreElements,inlineImages:h,copyStyles:h},c.logger.debug("Starting document clone with size "+d.width+"x"+d.height+" scrolled to "+-d.left+","+-d.top),u=new DocumentCloner(c,C,u),(t=u.clonedReferenceElement)?[4,u.toIFrame(B,d)]:[2,Promise.reject("Unable to find element in cloned iframe")];throw new Error("Document is not attached to a Window");case 1:return (i=A.sent(),u=isBodyElement(t)||isHTMLElement(t)?parseDocumentSize(t.ownerDocument):parseBounds(c,t),s=u.width,n=u.height,r=u.left,o=u.top,a=parseBackgroundColor(c,t,w.backgroundColor),g={canvas:w.canvas,backgroundColor:a,scale:null!=(d=null!=(B=w.scale)?B:e.devicePixelRatio)?d:1,x:(null!=(g=w.x)?g:0)+r,y:(null!=(g=w.y)?g:0)+o,width:null!=(g=w.width)?g:Math.ceil(s),height:null!=(g=w.height)?g:Math.ceil(n)},h)?(c.logger.debug("Document cloned, using foreign object rendering"),[4,new ForeignObjectRenderer(c,g).render(t)]):[3,3];case 2:return l=A.sent(),[3,5];case 3:return c.logger.debug("Document cloned, element located at "+r+","+o+" with size "+s+"x"+n+" using computed rendering"),c.logger.debug("Starting DOM parsing"),p=parseTree(c,t),a===p.styles.backgroundColor&&(p.styles.backgroundColor=COLORS.TRANSPARENT),c.logger.debug("Starting renderer for element at "+g.x+","+g.y+" with size "+g.width+"x"+g.height),[4,new CanvasRenderer(c,g).render(p)];case 4:l=A.sent(),A.label=5;case 5:return null!=(p=w.removeContainer)&&!p||DocumentCloner.destroy(i)||c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"),c.logger.debug("Finished rendering"),[2,l]}})})}),parseBackgroundColor=function(A,e,t){var i=e.ownerDocument,s=i.documentElement?parseColor(A,getComputedStyle(i.documentElement).backgroundColor):COLORS.TRANSPARENT,n=i.body?parseColor(A,getComputedStyle(i.body).backgroundColor):COLORS.TRANSPARENT,A="string"==typeof t?parseColor(A,t):null===t?COLORS.TRANSPARENT:4294967295;return e===i.documentElement?isTransparent(s)?isTransparent(n)?A:n:s:A};const snapshotModule={setup(A){A.mixin({ui:{async getSnapshot(A,e){var A=A||this.canvas.el,e=e||{},t=A.getBoundingClientRect().width,i=A.getBoundingClientRect().height;return (await html2canvas(A,{width:t,height:i,allowTaint:!0,taintTest:!1,useCORS:!0,logging:!1,...e,scrollY:0,scrollX:0})).toDataURL("image/png",1)}}});}},styleArr=["width","height","backgroundColor","backgroundImage","backgroundSize","opacity"],makeMap=A=>{const e={};return A.forEach(A=>{e[A]=!0;}),e},hasStyleMap=makeMap(styleArr);class SprayToUI{constructor(){this.canvasSize={width:null,height:null},this.groupMap={},this.userData={};}transform(A){if(isType$1(A,"String"))try{A=JSON.parse(A);}catch(A){return log.warn("定义文件异常"),!1}if(!isType$1(A,"Object"))return log.warn("定义文件不符合要求"),!1;A=clone(A);var e=this.toCanvas(A),A=(this.toConch(A.conchOptions,A.dataOptions),this.userData);return this.canvasSize.width=null,this.canvasSize.height=null,this.groupMap={},{scene:e,userData:A,version:1}}toCanvas(A){var e,t={type:"Canvas"};return "Canvas"===A.type&&(e=t.option=this.toOptions(A.option),this.canvasSize.width=e.style.width,this.canvasSize.height=e.style.height,delete e.style.top,delete e.style.left,isType$1(A.children,"Array")&&(t.children=A.children.map(A=>this.toLayer(A))),this.toThingJs(t)),t}toThingJs(i){if(i.children){let t=[],A=(i.children.forEach((A,e)=>{"ThingJSAdapter"===A.option.adapter&&t.push({index:e,thingJSContainer:A,prev:getLayer(i,e,-1),next:getLayer(i,e,1)});}),t.length-1);for(;0<=A;A--){var e=t[A],s=(i.children.splice(e.index,1),merge(e.thingJSContainer,{type:"DefaultContainer",option:{adapter:null}}));e.prev?e.prev.children.push(s):e.next?e.next.children.splice(0,0,s):i.children.push({type:"Layer",option:{id:"layer-"+s.option.id,lock:!0,name:"",style:{width:0,height:0,top:0,left:0}},children:[s]});}}}toLayer(A){const e={type:"Layer"};var t,i;return "Layer"!==A.type?null:(hasOwn(i=(t=e.option=this.toOptions(A.option)).style,"backgroundColor")||hasOwn(i,"backgroundImage")||"ThingJSAdapter"===t.adapter?(hasOwn(i,"width")&&"inherit"!==i.width||(i.width=this.canvasSize.width),hasOwn(i,"height")&&"inherit"!==i.height||(i.height=this.canvasSize.height)):(i.width=0,i.height=0),hasOwn(i,"top")||(i.top=0),hasOwn(i,"left")||(i.left=0),isType$1(A.children,"Array")&&A.children.forEach(A=>{e.children=this.toFree(A);}),e)}toFree(A){let e;return e="Free"===A.type?this.toChildren(A.children):e}toChildren(A){const t=[];return isType$1(A,"Array")&&A.forEach(A=>{let e;"Group"===A.type&&(e=this.toGroup(A)),(e="FreeContainer"===A.type?this.toContainer(A):e)&&(A.option.groupId?this.groupMap[A.option.groupId].children:t).push(e);}),t}toGroup(A){var e=A.option.id,A={type:"Group",option:{id:e,name:A.option.name},children:[]};return this.groupMap[e]=A}toContainer(A){return {type:"Container",option:this.toOptions(A.option)}}toOptions(A){var e,t,i={id:A.id,name:A.name,lock:!0};return A.sceneAnimator&&(i.animation={},e=A.sceneAnimator.enter,t=A.sceneAnimator.leave,e&&(i.animation.enter=[e.name,e.duration]),t)&&(i.animation.leave=[t.name,t.duration]),A.style&&(i.style=this.toStyle(A.style),i.style.top=A.top||0,i.style.left=A.left||0),A.adapter&&A.adapter.type&&(i.adapter=this.toAdapter(A.adapter,A.id)),i}toAdapter(A,e){let t={};return "ConchAdapter"===A.type&&(t={type:"ConchAdapter",name:A.name,option:A.option}),"ThingJSAdapter"!==A.type&&(this.userData[e]=t),A.type}toStyle(A){const e={};return Object.entries(A).forEach(A=>{hasStyleMap[A[0]]&&(e[A[0]]=A[1]);}),e}toConch(A={},e={}){Object.entries(A).forEach(e=>{var A=this.userData[e[0]];if(A&&"ConchAdapter"===A.type)try{A.opts=JSON.parse(e[1]);}catch(A){log.warn(e[0]+" 的数据异常");}}),Object.entries(e).forEach(e=>{var A=this.userData[e[0]];if(A&&"ConchAdapter"===A.type)try{A.data=JSON.parse(e[1].staticData);}catch(A){log.warn(e[0]+" 的数据异常");}});}}function getLayer(i,A,s){return function A(e){var t=i.children[e];if(t)return "ThingJSAdapter"!==t.option.adapter?t:A(e+s)}(A+s)}const sprayToUI=new SprayToUI,sprayToUIModule={setup(A){A.mixin({ui:{sprayToUI(A){return sprayToUI.transform(A)}}});},ui:{beforeParseJSON(A,e){var t;e.version||(t=clone(e),t=this.sprayToUI(t),emptyObject(e),merge(e,t));}}};function emptyObject(A){if(!isType$1(A,"object"))return !1;var e;for(e of Object.keys(A))delete A[e];return !0}const defaultTagRE=/\{\{((?:.|\r?\n)+?)\}\}/g;function transformValue(value,params){if(value){let result=defaultTagRE.exec(value);for(;result;){let[data,k]=result;const val=params[k.trim()];val&&(value=value.replace(data,val)),result=defaultTagRE.exec(value);}return eval(value)}}const templateParser={setup(r){r.mixin({layer:{parserTemplate(A){if(Array.isArray(A)&&0<A.length){var{width:e,height:t}=this;const n={width:e,height:t};return A.map(A=>{var e=transformValue(A.width,n)||0,t=transformValue(A.height,n)||0,i=transformValue(A.top,n)||0,s=transformValue(A.left,n)||0;return new r.Container(this,{name:A.name||"",style:{top:i,left:s,width:e,height:t}})})}}}});}};UI.adapterManager.register("BaseAdapter",BaseAdapter$2),UI.adapterManager.register("ConchAdapter",ConchAdapter$1);

  // 命令体

  // 等待时间
  async function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(true)
      }, time);
    })
  }

  class Command {
    constructor(ui, options = {}) {
      // 属性
      this.options = options;
      // 参数
      this.params = null;
    }

    // 异步运行
    async asyncExec() {
      try {
        const { result, params } = await this.options.exec();
        this.params = params;
        return result
      } catch (e) {
        console.error('异步运行命令执行错误', e);
      }
    }

    // 运行
    exec() {
      try {
        const { result, params } = this.options.exec();
        this.params = params;
        return result
      } catch (e) {
        console.error('运行命令执行错误', e);
      }
    }

    // 撤销
    async undo(ui) {
      try {
        await this.options.undo(ui, deepClone(this.params));
      } catch (e) {
        console.error('撤销命令执行错误', e);
      }
      return this
    }

    // 重做
    async redo(ui) {
      try {
        await this.options.redo(ui, deepClone(this.params));
      } catch (e) {
        console.error('恢复命令执行错误', e);
      }
      return this
    }

    // 销毁
    destroy() {
      this.params = null;
      this.options = null;
      return this
    }
  }

  // 命令管理器
  class CommandManager {
    constructor(ui) {
      this.parent = ui;
      // 仓库
      this.state = null;
      // 索引
      this.index = null;
      // 是否可以添加
      this.isAdd = null;
      // 添加运行状态
      this._execRunning = null;
      // 撤销运行状态
      this._undoRunning = null;
      // 重做运行状态
      this._redoRunning = null;
    }

    // 初始化
    init() {
      this.state = [];
      this.index = 0;
      this.isAdd = true;
      this._execRunning = true;
      this._undoRunning = true;
      this._redoRunning = true;
      return this
    }

    // 添加队列
    _addState(command) {
      if (this.index < this.state.length) {
        this.state.splice(this.index, this.state.length - this.index);
      }
      this.state.push(command);
      this.index++;
    }

    // 异步添加，禁止设置实例
    async asyncAdd(obj) {
      const command = new Command(this.parent, obj);
      this._execRunning = false;
      this.parent.$emit('CommandBeforeExec', command);

      let result;
      if (this.isAdd && !obj.noAdd) {
        this.isAdd = false;
        this._addState(command);
        result = await command.asyncExec();
        this.parent.$emit('commandAdd', command);
        this.isAdd = true;
      } else {
        result = await command.asyncExec();
      }
      this._execRunning = true;
      this.parent.$emit('CommandExec', command);
      return result
    }

    // 添加，禁止设置实例
    add(obj) {
      const command = new Command(this.parent, obj);
      this._execRunning = false;
      this.parent.$emit('CommandBeforeExec', command);
      let result;
      if (this.isAdd && !obj.noAdd) {
        this.isAdd = false;
        this._addState(command);
        result = command.exec();
        this.parent.$emit('commandAdd', command);
        this.isAdd = true;
      } else {
        result = command.exec();
      }
      this._execRunning = true;
      this.parent.$emit('CommandExec', command);
      return result
    }

    // 撤销
    async undo() {
      if (this.canUndo()) {
        this.isAdd = false;
        this._undoRunning = false;
        this.index--;
        const command = this.state[this.index];
        this.parent.$emit('commandBeforeUndo', command);
        await command.undo(this.parent);
        this._undoRunning = true;
        this.isAdd = true;
        this.parent.$emit('commandUndo', command);
      }
      return this
    }

    // 重做
    async redo() {
      if (this.canRedo()) {
        this.isAdd = false;
        this._undoRunning = false;
        const command = this.state[this.index];
        this.parent.$emit('commandBeforeRedo', command);
        await command.redo(this.parent);
        this.index++;
        this._undoRunning = true;
        this.isAdd = true;
        this.parent.$emit('commandRedo', command);
      }
      return this
    }

    // 是否可以添加
    canAdd() {
      return this._execRunning
    }

    // 是否可以撤销
    canUndo() {
      return this._undoRunning && !!this.index && this._execRunning
    }

    // 是否可以重做
    canRedo() {
      return (
        this._redoRunning && this.index !== this.state.length && this._execRunning
      )
    }

    // 清除命令
    clearCommand() {
      const state = this.state;
      state.forEach((command) => command.destroy());
      this.state = [];
      this.index = 0;
    }

    // 导出日志
    toLog() {
      return this.state.map((command) => {
        return deepClone(command.options.args)
      })
    }

    // 导出日志序列化
    toLogStr() {
      return JSON.stringify(this.toLog(), (key, value) => {
        if (key === 'handler') {
          return value + ''
        }
        return value
      })
    }

    // 恢复日志
    async recover(list = [], time = 500) {
      const that = this;

      async function handler(index) {
        const item = list[index];
        if (item) {
          await item.handler(that.parent, item);
        }
        if (list[index + 1]) {
          await wait(time);
          await handler(index + 1);
        }
      }

      console.log('恢复开始');
      await handler(0);
      console.log('恢复完成');
    }

    // 恢复日志通过序列化
    async recoverByStr(recoverStr) {
      await this.recover(
        JSON.parse(recoverStr, (key, value) => {
          if (key === 'handler') {
            // eslint-disable-next-line no-new-func
            return new Function(`return ${value}`)()
          }
          return value
        })
      );
    }

    // 清空
    clear() {
      this.clearCommand();
      this.parent.$emit('commandClear');
      return this
    }

    // 销毁
    destroy() {
      this.clearCommand();
      this.isAdd = null;
      this.index = null;
      this.state = null;
      this.parent = null;
      return this
    }
  }

  let _id = 0;

  // 获取新编号
  function getNewId() {
    return _id++
  }

  // 布局管理器
  let Manager$1 = class Manager {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 模块
      this.module = parent.module;
      // 节点集合
      this.compMap = new Map();
      // 节点集合ui编号
      this.compUiIdMap = new Map();
      // ui节点集合
      this.uiCompMap = new Map();
    }

    // 获取实例
    getComp(id) {
      return this.compMap.get(id)
    }

    // 获取实例通过ui编号
    getCompByUiId(uid) {
      return this.compUiIdMap.get(uid)
    }

    // 添加实例
    addComp(comp) {
      this.compMap.set(comp.$options.id, comp);
      this.compUiIdMap.set(comp.$options.options.option.id, comp);
    }

    // 移除实例
    removeComp(comp) {
      this.compMap.delete(comp.$options.id);
      this.compUiIdMap.delete(comp.id);
    }

    // 获取ui实例
    getUiComp(id) {
      return this.uiCompMap.get(id)
    }

    // 添加ui实例
    addUiComp(comp, uiComp) {
      this.uiCompMap.set(comp.$options.id, uiComp);
    }

    // 移除ui实例
    removeUiComp(comp) {
      this.uiCompMap.delete(comp.$options.id);
    }

    // 创建实例
    create(type) {
      const Layout = this.module.getElement(type);

      if (Layout) {
        return new Layout()
      } else {
        console.error(type + '没有注册方法');
      }
    }

    // 获取类型
    getType(instance) {
      return this.module.getElementType(instance)
    }

    // 获取所有子节点
    getAllChildren(instance, type) {
      const result = [];

      function each(nodes = []) {
        nodes.forEach((node) => {
          each(node.children);

          if (type) {
            if (node.type === type) {
              result.push(node);
            }
          } else {
            result.push(node);
          }
        });
      }

      each(instance.children);

      return result
    }
  };

  // 获取默认值
  function getDefaultValue(comps, type) {
    const size = { top: 'height', left: 'width' };
    const { minTypeValue, maxValue, maxSizeValue, allSizeValue } = comps.reduce(
      (acc, comp) => {
        const typeValue = comp[type];
        const sizeValue = comp[size[type]];
        const allValue = typeValue + sizeValue;

        if (acc.minTypeValue === null || typeValue < acc.minTypeValue) {
          acc.minTypeValue = typeValue;
        }
        if (acc.maxValue === null || allValue > acc.maxValue) {
          acc.maxValue = allValue;
        }
        if (acc.maxSizeValue < sizeValue) {
          acc.maxSizeValue = sizeValue;
        }
        acc.allSizeValue += sizeValue;

        return acc
      },
      {
        minTypeValue: null,
        maxValue: null,
        maxSizeValue: 0,
        allSizeValue: 0,
      }
    );

    if (maxValue - minTypeValue > maxSizeValue) {
      return (maxValue - minTypeValue - allSizeValue) / (comps.length - 1)
    }
  }

  // ui
  class Ui {
    constructor() {
      this.$events = {
        elements: {},
        events: {},
      };
      this.$parent = null;
      this.$root = this;
      this.$manager = null;
      this.$adapterManager = null;
      this.$dataManager = null;
      this.$command = null;
      this.$canvas = null;
      // 选择节点
      this.$selectComponent = null;
      // 选择图层
      this.$selectLayer = null;

      this.$options = {
        // 编号
        id: getNewId(),
        // 根
        root: this,
        // dom节点
        dom: null,
        // 节点管理
        manager: null,
        // 适配器管理
        adapterManager: null,
        // 数据管理
        dataManager: null,
        // 生命状态
        status: null,
        // 选择状态
        isSelect: true,
        // 是否编辑模式
        isEdit: null,
        // 事件
        events: {
          element: {},
          events: {},
        },
        // 定义文件
        def: null,
        // 定义文件属性
        defOptions: null,
        // 属性
        options: null,
        // 配置
        config: null,
        // 全局配置
        rootConfig: null,
      };

      // 画布缩放
      this.canvasRadio = null;
      // 判断ui
      this.isUi = true;
      // 鼠标事件
      this.mouseEvent = null;
      // 交互
      this.$mutual = null;
      // 标尺状态
      this.rulerVisible = null;
      // 对齐线状态
      this.alignmentVisible = null;
      // 代码二开执行体
      this.$jsCode = null;
      // 蓝图执行体
      this.$bluePrint = null;

      this.$on('hook:selectLayer', this._updateSelectLayer, this);
    }

    // 初始化前
    _initBegin(parent, options, config, rootConfig) {
      const dataManager = new DataManager(this, rootConfig.data);

      this.$parent = parent;
      this.$manager = parent.manager;
      this.$adapterManager = parent.adapterManager;
      this.$options.rootConfig = rootConfig;
      this.$options.options = options;
      this.$options.config = config;
      this.$options.manager = parent.manager;
      this.$options.adapterManager = parent.adapterManager;
      this.$options.dataManager = dataManager;
      this.$options.isEdit = parent.isEdit;
      this.$options.status = true;
      this.$options.dom = parent.dom;
      this.$selectComponent = [];
      this.$selectLayer = null;
      this.rulerVisible = null;
      this.alignmentVisible = null;
      this.$dataManager = dataManager;
      this.$mutual = new Mutual(this);
      this.$jsCode = new JsCode(this);
      this.$command = new CommandManager(this);
      this.$bluePrint = new BluePrintManager(
        this,
        rootConfig.Blueprint,
        rootConfig.BlueprintModules
      );
      this.$options.manager.addComp(this);
      this.$command.init();
      this.$bluePrint.init();
    }

    // 创建
    _create() {
      this.$dataManager.init();
    }

    // 挂载
    async _mount() {
      const ui = new UI(
        this.$options.dom,
        this.$options.options.option,
        this.$options.config
      );
      this.$options.manager.addUiComp(this, ui);

      this.$options.events = this._initEvent();
      const options = this.$ui.canvas.toJSON();
      this.$canvas = this.$manager.create(options.type);
      await this.$canvas.init(this, options);
      this.$canvas.select();
      this.$canvas.$on('beforeDestroy', () => {
        this.$canvas = null;
      });
      this.$dataManager.start();
      this._initUiEvent();
    }

    // 初始化完成
    _initEnd() {
      if (this.$options.isEdit) {
        this._updateRulerState();
        this._updateAlignmentState();
      }
      this.$command.clear();
    }

    // 初始化
    async init(parent, options, config, rootConfig) {
      if (!parent.dom) {
        return console.error('dom 无效')
      }
      if (this.$options.status) {
        console.warn('当前状态无法初始化');
      } else {
        this._initBegin(parent, options, config, rootConfig);
        this.$emit('beforeCreate', this);
        this.$emit('beforeCreate:Ui', this);
        this._create();
        this.$emit('created', this);
        this.$emit('created:Ui', this);
        await this._mount();
        this.$emit('mounted', this);
        this.$emit('mounted:Ui', this);
        this._initEnd();
      }
      return this
    }

    // 初始化ui事件
    _initUiEvent() {
      const ui = this.$uiComp;

      if (ui.keyMap) {
        ui.keyMap.register({
          name: '编组选中对象',
          code: 'Control+KeyG',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '取消编组',
          code: 'Control+Shift+KeyG',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '重做',
          code: 'Control+KeyY',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '取消',
          code: 'Control+KeyZ',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '取消',
          code: 'Escape',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '删除选中对象',
          code: 'Delete',
          fn: () => {
            // 置空
          },
        });
        ui.keyMap.register({
          name: '编辑文本内容',
          code: 'Enter',
          fn: () => {
            // 置空
          },
        });
      }
    }

    // 更新
    _update(name, value, oldValue) {
      this.$emit('update', this, name, value, oldValue);
      return this
    }

    // 更新右击
    _updateContextmenu(comps, e) {
      this.$emit('updateContextmenu', comps, e);
    }

    // 更新选择图层
    _updateSelectLayer(layer) {
      this.$selectLayer = layer;
    }

    // 进入预览模式
    play(callback) {
      this.$ui.play(callback);
      return this
    }

    // 进入编辑模式
    edit() {
      this.$ui.edit();
      return this
    }

    // seabed定义文件转换
    sprayToUIDef(def) {
      return this.$ui.sprayToUI(def)
    }

    // 导出定义文件
    toJSON() {
      const uiJSON = JSON.parse(this.$uiComp.toJSON());
      const scene = this.$canvas.toJSON();
      const userData = {};
      const kpUserData = {};

      function each(target) {
        const { children, option, kpOption } = target;

        if (option.adapter) {
          userData[option.id] = option.adapter;
          option.adapter = option.adapter.type;
        }

        if (kpOption) {
          kpUserData[option.id] = kpOption;
          delete target.kpOption;
        }

        if (children) {
          children.forEach((child) => {
            each(child);
          });
        }
      }

      each(scene);

      if (!isEmpty$1(uiJSON.scene.hideAllLine)) {
        scene.hideAllLine = uiJSON.scene.hideAllLine;
      }

      if (!isEmpty$1(uiJSON.scene.lines)) {
        scene.lines = uiJSON.scene.lines;
      }

      return { scene, userData, kpUserData, version: 1, kpVersion: 1 }
    }

    // 导入定义文件
    async parseJSON(def, options = {}) {
      this.$emit('beforeParseJSON', this, def);
      this.$dataManager.stop();
      this.$canvas && this.$canvas.destroy();
      this.$dataManager.clear();
      this.$options.def = deepClone$1(def);
      this.$options.defOptions = deepClone$1(options);
      const _def = transformKpOptionDef(def);
      await this.$ui.parseJSON(deepClone$1(_def));
      this.$canvas = this.$manager.create(_def.scene.type);
      await this.$canvas.init(this, _def.scene);
      this.$dataManager.start();
      this._loadExtends();
      this.$emit('parseJSONed', this, _def);
      return this.$canvas
    }

    // 加载外置
    _loadExtends() {
      const defOptions = this.$options.defOptions;
      if (!this.$options.isEdit) {
        this.$bluePrint.run(defOptions.bluePrint);
        this.$jsCode.run(defOptions.jsCode);
      }
    }

    // 更新多个节点的多个属性
    updateCompsAttrs(compsAttrs = []) {
      compsAttrs.forEach((compAttr) => compAttr.comp.updateAttrs(compAttr.attrs));
    }

    // 更新适配器列表
    async updateAdapters(options = [], config = {}) {
      const emptyCompIds = [];
      const updateComps = [];

      options.forEach((option) => {
        if (option.comp.adapter) {
          updateComps.push(option);
        } else {
          emptyCompIds.push(option.comp.id);
        }
      });

      if (emptyCompIds.length) {
        console.warn('空图表无法更新适配器 ', emptyCompIds.join(','));
      }

      return Promise.all(
        updateComps.map((updateComp) => {
          return updateComp.comp.updateAdapter(updateComp.option)
        })
      )
    }

    // 解散多个编组
    dismissGroups(groups = []) {
      const comps = [];
      const realGroups = [];

      groups.forEach((group) => {
        if (group.type === 'Group') {
          realGroups.push(group);
        } else {
          comps.push(group);
        }
      });

      if (comps.length) {
        console.warn('非编组无法解散 ' + comps.join(','));
      }

      realGroups.forEach((group) => group.dismiss());
      return this
    }

    // 销毁多个节点
    destroyComps(comps = []) {
      comps.forEach((comp) => comp.destroy());
      return this
    }

    // 更新选择
    _updateSelect() {
      if (!this.$options.isSelect) {
        return
      }

      if (this.$ui.insidePreview) {
        this.$ui.exitInsidePreview();
      }

      const selectEls = this.$ui.selector.getSelectElements();

      // 没有选中直接选择画布
      if (!selectEls.length && this.$canvas) {
        selectEls.push(this.$canvas.$uiComp);
      }

      this.__updateSelect(selectEls.map((uiComp) => uiComp.__DIAGRAM__));
    }

    // 更新选择
    __updateSelect(selectComps = []) {
      // 通知取消选择的节点更新状态
      this.$selectComponent
        .filter((comp) => !selectComps.find((selectComp) => selectComp === comp))
        .forEach((comp) => {
          if (comp.$options.status) {
            comp._updateSelect(false);
          }
        });

      selectComps.forEach((item) => {
        if (!item.isSelected) {
          item._updateSelect(true);
        }
      });

      this.$selectComponent = selectComps;
      this.$emit('updateSelectComponent', selectComps);
    }

    // 选择
    select(comps) {
      if (!Array.isArray(comps)) {
        comps = [comps];
      }

      if (comps.length) {
        const canvas = comps.filter((comp) => comp.type === 'Canvas')[0];
        // 画布不可选
        if (canvas) {
          canvas.select();
        } else {
          this.$ui.selector.select(comps.map((comp) => comp.$uiComp));
        }
      } else {
        console.warn('没有需要选择的节点');
      }

      return this
    }

    // 取消选择
    unSelect(comps) {
      if (!Array.isArray(comps)) {
        comps = [comps];
      }

      this.$ui.selector.unselect(comps.map((comp) => comp.$uiComp));
    }

    // 对齐
    alignTo(type, comps) {
      this.$ui.alignTo(
        type,
        comps.map((comp) => comp.$uiComp)
      );

      comps.forEach((comp) => {
        comp.$updateAttr('top').$updateAttr('left');
      });
    }

    // 等间距 type：top或者left，value不输入自动计算
    equidistant(type, comps, value = null) {
      if (!Array.isArray(comps)) {
        return
      }

      const size = { top: 'height', left: 'width' };

      if (value === null) {
        value = getDefaultValue(comps, type);
      }

      if (value === null) {
        return
      }

      comps.sort((a, b) => {
        return a[type] - b[type]
      });
      comps.forEach((comp, index) => {
        if (index && index !== comps.length - 1) {
          const uiPrevComp = comps[index - 1];

          const v = uiPrevComp[type] + uiPrevComp[size[type]] + value;

          comp[type] = v;
        }
      });
    }

    // 更新标尺状态
    _updateRulerState() {
      try {
        this.rulerVisible = this.$ui.el.contains(this.$ui.ruler._elObject.ruler);
      } catch (e) {
        console.warn('更新标尺状态错误', e);
      }
    }

    // 启用标尺
    enableRuler() {
      try {
        this.$ui.ruler.enable();
      } catch (e) {
        console.warn('启用标尺错误', e);
      }
      this._updateRulerState();
      return this
    }

    // 禁用标尺
    disableRuler() {
      try {
        this.$ui.ruler.disable();
      } catch (e) {
        console.warn('禁用标尺错误', e);
      }
      this._updateRulerState();
      return this
    }

    // 更新对齐线状态
    _updateAlignmentState() {
      try {
        this.alignmentVisible = !!Array.from(this.$ui.canvas.el.children).find(
          (el) => el.dataset && el.dataset.id === 'alignment'
        );
      } catch (e) {
        console.warn('更新对齐线状态错误', e);
      }
    }

    // 启用对齐线
    enableAlignment() {
      try {
        this.$ui.enableAlignment();
      } catch (e) {
        console.warn('启用对齐线错误', e);
      }
      this._updateAlignmentState();
      return this
    }

    // 禁用对齐线
    disableAlignment() {
      try {
        this.$ui.disableAlignment();
      } catch (e) {
        console.warn('禁用对齐线错误', e);
      }
      this._updateAlignmentState();
      return this
    }

    // 获取编号
    getUid(type) {
      const id =
        type.toLowerCase() + '-' + window.Math.random().toString(24).slice(-10);

      if (this.$ui.query('#' + id)) {
        return this.getUid(type)
      }
      return id
    }

    // 通过id查询
    queryById(id) {
      return this.$options.manager.getCompByUiId(id)
    }

    // 通过id查询
    $queryById(id) {
      return this.queryById(id)
    }

    // 绑定dom事件
    $addEventListener(name, fn, capture, context) {
      return addEventListener(this, name, fn, capture, context)
    }

    // 解绑dom事件
    $removeEventListener(name, fn, capture, context) {
      return removeEventListener(this, name, fn, capture, context)
    }

    // 绑定事件
    $on(name, fn, context) {
      return on(this, name, fn, context)
    }

    // 绑定一次事件
    $once(name, fn, context) {
      return once(this, name, fn, context)
    }

    // 解绑事件
    $off(name, fn, context) {
      return off(this, name, fn, context)
    }

    // 触发事件
    $emit(name, ...args) {
      return emit(this, name, args)
    }

    // 异步触发事件
    async $syncEmit(name, ...args) {
      return syncEmit(this, name, args)
    }

    // 开始选择事件
    $startSelect() {
      this.$options.isSelect = true;
      return this
    }

    // 暂停选择事件
    $pauseSelect() {
      this.$options.isSelect = false;
      return this
    }

    // 进入图表预览
    enterInsidePreview(comp) {
      this.$ui.enterInsidePreview(comp.$uiComp);
    }

    // 退出图表预览
    exitInsidePreview() {
      this.$ui.exitInsidePreview();
    }

    // 初始化事件
    _initEvent() {
      const ui = this.$ui;

      // 选择
      const select = (uiComps) => {
        // 置空
      };

      // 取消选择
      const unselect = (uiComps) => {
        // 置空
      };

      // 选择节点
      const selectElements = (uiComps) => {
        this._updateSelect();
      };

      // 框选开始
      const graphRegionSelectStart = () => {
        // 置空
      };

      // 框选结束
      const graphRegionSelectEnd = () => {
        // 置空
      };

      // 双击或回车编辑文本前触发，编辑前准备工作
      const beforeTextEdit = (uiComp) => {
        const app = uiComp.app;
        let contentValue;

        if (app.tag === 'mtext') {
          contentValue = app.data || app.opts.content;
        } else if (app.tag === 'text') {
          contentValue = app.data.content;
        }

        uiComp.readyTextEdit(contentValue);
      };

      // 编辑文本中
      const inTextEdit = () => {
        this.$parent.state.textEditing = true;
        this.$parent.state.contextMenuRunning = false;
      };

      // 可编辑文本退出编辑后触发，更新文本内容
      const afterTextEdit = (value, uiComp) => {
        const app = uiComp.app;

        let data;
        if (app.tag === 'mtext') {
          data = value;
        } else if (app.tag === 'text') {
          data = { ...deepClone$1(app.data), ...{ content: value } };
        }

        uiComp.__DIAGRAM__.adapter.updateSourceData('staticData', data);

        this.$parent.state.textEditing = false;
        this.$parent.state.contextMenuRunning = true;
      };

      // 进入预览模式
      const enterInsidePreview = (uiComp) => {
        this.$emit('enterInsidePreview', uiComp.__DIAGRAM__);
      };

      // 离开预览模式
      const exitInsidePreview = () => {
        this.$emit('exitInsidePreview');
      };

      // 画布缩放
      const uiCanvasZoom = () => {
        this.$canvas &&
          this.$parent.state.enableCanvasZoom &&
          this.$emit('hook:uiCanvasZoom') &&
          this.$emit('uiCanvasZoom');
      };

      let graphMoveValues = null;

      // 节点移动开始
      const graphMoveStart = () => {
        graphMoveValues = [];
        const _exce = (item) => {
          graphMoveValues.push({
            comp: item,
            top: item.top,
            left: item.left,
          });
        };
        this.$selectComponent.forEach((comp) => {
          if (comp.type === 'Group') {
            comp.containers.forEach(_exce);
          }
          _exce(comp);
        });
      };
      // 节点update处理
      const _graphMovExce = (item) => {
        item.$updateAttr('top');
        item.$updateAttr('left');
      };
      // 节点移动中
      const graphMoving = () => {
        this.$selectComponent.forEach(_graphMovExce);
      };

      // 节点移动结束
      const graphMoveEnd = () => {
        const compsAttrs = [];

        this.$selectComponent.forEach((comp) => {
          if (comp.type === 'Group') {
            comp.groups.forEach(_graphMovExce);
            comp.containers.forEach(_graphMovExce);
          } else if (comp.$parent.type === 'Group') {
            _graphMovExce(comp.$parent);
          }
          _graphMovExce(comp);
          addCompAttrs(comp);
        });

        function addCompAttrs(comp) {
          const graphMoveValue = graphMoveValues.find(
            (item) => item.comp === comp
          );
          compsAttrs.push({
            comp,
            attrs: [
              { name: 'top', value: comp.top, oldValue: graphMoveValue.top },
              {
                name: 'left',
                value: comp.left,
                oldValue: graphMoveValue.left,
              },
            ],
          });
        }

        this.updateCompsAttrs(compsAttrs);
        // 清空数据，防止内存记录
        graphMoveValues = null;
      };

      let graphResizeValues = null;
      // 节点放缩前
      const graphResizeStart = () => {
        graphResizeValues = [];
        function _exce(item) {
          graphResizeValues.push({
            comp: item,
            width: item.width,
            height: item.height,
            left: item.left,
            top: item.top,
          });
        }

        this.$selectComponent.forEach((comp) => {
          if (comp.type === 'Group') {
            comp.containers.forEach(_exce);
          } else {
            _exce(comp);
          }
        });
      };
      // 放缩时更新属性值
      const _resizUpdateAttrExce = (item) => {
        item.$updateAttr('width');
        item.$updateAttr('height');
        item.$updateAttr('top');
        item.$updateAttr('left');
      };
      // 节点放缩中
      const graphResizing = () => {
        this.$selectComponent.forEach(_resizUpdateAttrExce);
      };

      // 节点放缩结束
      const graphResizeEnd = () => {
        const compsAttrs = [];

        this.$selectComponent.forEach((comp) => {
          if (comp.type === 'Group') {
            comp.containers.forEach((container) => {
              _resizUpdateAttrExce(container);
              addCompAttrs(container);
            });
            comp.groups.forEach(_resizUpdateAttrExce);
            _resizUpdateAttrExce(comp);
          } else {
            _resizUpdateAttrExce(comp);
            addCompAttrs(comp);
          }
        });

        function addCompAttrs(comp) {
          const graphResizeValue = graphResizeValues.find(
            (item) => item.comp === comp
          );
          compsAttrs.push({
            comp,
            attrs: [
              { name: 'top', value: comp.top, oldValue: graphResizeValue.top },
              {
                name: 'left',
                value: comp.left,
                oldValue: graphResizeValue.left,
              },
              {
                name: 'width',
                value: comp.width,
                oldValue: graphResizeValue.width,
              },
              {
                name: 'height',
                value: comp.height,
                oldValue: graphResizeValue.height,
              },
            ],
          });
        }

        graphResizeValues = null;
        this.updateCompsAttrs(compsAttrs);
      };

      // 节点旋转结束
      const graphRotateEnd = () => {
        const compsAttrs = [];
        this.$selectComponent.forEach((comp) => {
          const oldValue = comp.rotate;
          comp.$updateAttr('rotate');

          compsAttrs.push({
            comp,
            attrs: [
              {
                name: 'rotate',
                value: comp.rotate,
                oldValue,
              },
            ],
          });
        });
        this.updateCompsAttrs(compsAttrs);
      };

      // 删除
      const deleteEvent = () => {
        // 置空
      };

      // 标尺调整
      const rulerChange = () => {
        this.$emit('rulerChange');
      };

      // 节点适配器加载完成
      const componentComplete = ({ parent }) => {
        if (parent.app && ['mtext', 'text'].includes(parent.app.tag)) {
          parent.openTextEdit();
        }

        const comp = parent.__DIAGRAM__;

        if (comp) {
          this.$emit('hook:componentComplete', comp);
        }
      };

      // 显示完毕
      const afterShow = (uiComp) => {
        uiComp.__DIAGRAM__.$updateAttr('visible');
      };

      // 隐藏完毕
      const afterHidden = (uiComp) => {
        uiComp.__DIAGRAM__.$updateAttr('visible');
      };

      // 鼠标移动事件
      const uiMousemove = (e) => {
        const target = e.currentTarget;
        if (target === ui.el) {
          this.mouseEvent = e;
        } else {
          this.mouseEvent = null;
        }
      };

      // 鼠标离开事件
      const uiMouseleave = () => {
        this.mouseEvent = null;
      };

      // 页面更新事件
      const resize = () => {
        this.$emit('resize', this);
      };

      // 键盘按下事件
      const keydown = (e) => {
        // 编辑模式下和启用快捷键操作才有效
        if (
          this.$options.isEdit &&
          this.$root.$parent.canShortcutKey &&
          (document.activeElement === document.body ||
            this.$el.contains(document.activeElement))
        ) {
          if (e.key === 'Enter') {
            // 解决小键盘回车触发值修改
            e.preventDefault();
            this.$uiComp.enterTextEdit();
          } else if (e.key === 'Escape') {
            this.$uiComp.exitTextEdit();
          }
        }
      };

      ui.on('select', select);
      ui.on('unselect', unselect);
      ui.on('selectElements', selectElements);
      ui.on('graphRegionSelectStart', graphRegionSelectStart);
      ui.on('graphRegionSelectEnd', graphRegionSelectEnd);
      ui.on('beforeTextEdit', beforeTextEdit);
      ui.on('inTextEdit', inTextEdit);
      ui.on('afterTextEdit', afterTextEdit);
      ui.on('enterInsidePreview', enterInsidePreview);
      ui.on('exitInsidePreview', exitInsidePreview);
      ui.on('canvasZoom', uiCanvasZoom);
      ui.on('graphMoveStart', graphMoveStart);
      ui.on('graphMoving', graphMoving);
      ui.on('graphMoveEnd', graphMoveEnd);
      ui.on('graphResizeStart', graphResizeStart);
      ui.on('graphResizing', graphResizing);
      ui.on('graphResizeEnd', graphResizeEnd);
      ui.on('graphRotateEnd', graphRotateEnd);
      ui.on('delete', deleteEvent);
      ui.on('rulerChange', rulerChange);
      ui.on('componentComplete', componentComplete);
      ui.on('afterShow', afterShow);
      ui.on('afterHidden', afterHidden);
      ui.el.addEventListener('mousemove', uiMousemove);
      ui.el.addEventListener('mouseleave', uiMouseleave);
      window.addEventListener('resize', resize);
      window.addEventListener('keydown', keydown);

      return () => {
        ui.off('select', select);
        ui.off('unselect', unselect);
        ui.off('selectElements', selectElements);
        ui.off('graphRegionSelectStart', graphRegionSelectStart);
        ui.off('graphRegionSelectEnd', graphRegionSelectEnd);
        ui.off('beforeTextEdit', beforeTextEdit);
        ui.off('inTextEdit', inTextEdit);
        ui.off('afterTextEdit', afterTextEdit);
        ui.off('enterInsidePreview', enterInsidePreview);
        ui.off('exitInsidePreview', exitInsidePreview);
        ui.off('canvasZoom', uiCanvasZoom);
        ui.off('graphMoveStart', graphMoveStart);
        ui.off('graphMoving', graphMoving);
        ui.off('graphMoveEnd', graphMoveEnd);
        ui.off('graphResizeStart', graphResizeStart);
        ui.off('graphResizing', graphResizing);
        ui.off('graphResizeEnd', graphResizeEnd);
        ui.off('graphRotateEnd', graphRotateEnd);
        ui.off('delete', deleteEvent);
        ui.off('rulerChange', rulerChange);
        ui.off('componentComplete', componentComplete);
        ui.off('afterShow', afterShow);
        ui.off('afterHidden', afterHidden);
        ui.el.removeEventListener('mousemove', uiMousemove);
        ui.el.removeEventListener('mouseleave', uiMouseleave);
        window.removeEventListener('resize', resize);
        window.removeEventListener('keydown', keydown);
      }
    }

    // 转换定义文件
    transformDef(def) {
      return transform$2(this.$ui, def)
    }

    // 销毁开始
    _destroyBegin() {
      return this
    }

    // 销毁中
    _destroy() {
      this.$dataManager.destroy();
      this.$mutual.destroy();
      this.$jsCode.destroy();
      this.$bluePrint.destroy();
      this.$options.manager.removeComp(this);
    }

    // 销毁完成
    _destroyEnd() {
      this.$jsCode = null;
      this.$bluePrint = null;
      this.$mutual = null;
      this.$dataManager = null;
      this.alignmentVisible = null;
      this.rulerVisible = null;
      this.$selectLayer = null;
      this.$selectComponent = null;
      this.$adapterManager = null;
      this.$manager = null;
      this.$parent = null;
      this.$options.rootConfig = null;
      return this
    }

    // 销毁
    destroy() {
      this._destroyBegin();
      this._destroy();
      this._destroyEnd();
      return this
    }

    // 获取ui实例
    get $ui() {
      return this.$options.manager.getUiComp(this.$options.id)
    }

    // 获取ui实例
    get $uiComp() {
      return this.$options.manager.getUiComp(this.$options.id)
    }

    // 获取dom节点
    get $el() {
      return this.$uiComp.el
    }
  }

  // 获取者
  function getter(attr) {
    return attr.get ? attr.get() : attr.value
  }
  // 设置者
  function setter(instance, attr, v) {
    if (!attr.set) {
      return
    }

    const oldValue = instance[attr.name];
    // 值相同返回
    if (oldValue === v) {
      return
    }

    const { setBefore, setAfter } = attr.option;
    setBefore && setBefore();
    instance._updateAttr(attr, v, deepClone$1(oldValue));
    setAfter && setAfter();
  }

  // 基础类
  let Base$1 = class Base {
    constructor() {
      this.$options = {
        // 全局配置
        rootConfig: null,
        // 定义文件
        options: null,
        // 参数
        config: null,
        // 鲲鹏定义文件
        kpOption: null,
        // 子节点
        children: null,
        // 父节点
        parent: null,
        // 根节点
        root: null,
        // 节点
        elm: null,
        // 节点管理器
        manager: null,
        // 适配器管理器
        adapterManager: null,
        // 数据管理器
        dataManager: null,
        // 编号
        id: getNewId(),
        // 类型
        type: null,
        // 状态
        status: null,
        // 所有属性
        attrs: {},
        // 正在销毁
        isBeingDestroyed: null,
        // 销毁
        isDestroyed: null,
        // 是否编辑模式
        isEdit: null,
        // 事件
        events: null,
      };
      // 父节点
      this.$parent = null;
      // 根节点
      this.$root = null;
      // 画布
      this.$canvas = null;
      // 适配器
      this.adapter = null;
      // 子节点
      this.children = null;
      // 是否挂载完成
      this.$complete = null;
      // 事件
      this.$events = {
        elements: {},
        events: {},
      };

      this._beforeInit();
    }

    // 注册属性
    _registerAttr(name, value, initFn, getFn, setFn, option = {}) {
      if (this.$options.status) {
        console.warn('当前状态不允许注册属性');
      } else {
        if (this.$options.attrs[name]) {
          console.warn(`${name} 已被注册`);
        } else {
          const attr = {
            name,
            value,
            init: initFn,
            get: getFn,
            set: setFn,
            option,
          };

          this.$options.attrs[name] = attr;
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            get() {
              return getter(attr)
            },
            set(v) {
              setter(this, attr, v);
            },
          });
        }
      }
      return this
    }

    // 移除属性
    _removeAttr(name) {
      if (this.$options.status) {
        console.warn('当前状态不允许移除属性');
      } else {
        delete this.$options.attrs[name];
        delete this[name];
      }
      return this
    }

    // 初始化前缀
    _beforeInit() {
      initAttrs$1(this);
      return this
    }

    // 初始化
    async init(parent, options = {}, config = {}) {
      if (this.$options.status) {
        console.warn('节点已被初始化过');
      } else {
        this.$options.status = 'beforeCreate';
        this._initBegin(parent, options, config);
        this.$emit('beforeCreate', this);
        this.$root.$emit('beforeCreate', this);
        this.$emit('beforeCreate:' + this.$options.type, this);
        this.$root.$emit('beforeCreate:' + this.$options.type, this);
        this._create();
        this.$options.status = 'created';
        this.$emit('created', this);
        this.$root.$emit('created', this);
        this.$emit('created:' + this.$options.type, this);
        this.$root.$emit('created:' + this.$options.type, this);
        await this._mount();
        this.$options.status = 'mounted';
        this.$emit('mounted', this);
        this.$root.$emit('mounted', this);
        this.$emit('mounted:' + this.$options.type, this);
        this.$root.$emit('mounted:' + this.$options.type, this);
        this._initEnd();
      }
      return this
    }

    // 初始化开始前
    _initBegin(parent, options, config) {
      this.$options.rootConfig = parent.$options.rootConfig;
      this.$options.options = options;
      this.$options.config = config;
      this.$options.kpOption = options.kpOption || {};
      this.$options.parent = parent;
      this.$options.root = parent.$root;
      this.$options.manager = parent.$options.manager;
      this.$options.adapterManager = parent.$options.adapterManager;
      this.$options.dataManager = parent.$options.dataManager;
      this.$options.type = parent.$options.manager.getType(this);
      this.$options.isDestroyed = null;
      this.$options.isEdit = parent.$options.isEdit;
      this.$parent = parent;
      this.$root = parent.$root;
      this.$canvas = parent.$root.$canvas;
      this.$options.manager.addComp(this);
      this.children = [];
      this.$complete = false;
      return this
    }

    // 创建
    _create() {
      return this
    }

    // 更新子节点
    _updateChildren(oldChildren) {
      this.$emit('updateChildren', this);
      this.$root.$emit('updateChildren', this);
      this._update('children', this.children, oldChildren);
      return this
    }

    // 初始化事件
    _initEvent() {
      return this
    }

    // 销毁事件
    _destroyEvent() {
      return this
    }

    // 创建ui实例
    _initCompCreateUi() {
      const $options = this.$options;

      if (UI[$options.type]) {
        return new UI[$options.type](
          this.$parent.$uiComp,
          $options.options?.option
        )
      } else {
        console.warn(`ThingUi没有${$options.type}方法`);
      }
    }

    // 初始化节点
    _initComp() {
      let uiComp;
      if (this.$options.options?.option?.id) {
        uiComp = this.$ui.query('#' + this.$options.options.option.id);
      }
      if (!uiComp) {
        uiComp = this._initCompCreateUi();
      }

      if (!uiComp) {
        console.warn('没有ui实例');
      }

      this.$options.manager.addUiComp(this, uiComp);
      uiComp.__DIAGRAM__ = this;
      this.$options.elm = uiComp.el;

      this.$emit('elementMounted', this);
      this.$root.$emit('elementMounted', this);
      this.$emit('elementMounted:' + this.$options.type, this);
      this.$root.$emit('elementMounted:' + this.$options.type, this);
      return this
    }

    // 销毁ui实例
    _destroyComp() {
      delete this.$uiComp.__DIAGRAM__;
      try {
        this.$uiComp.destroy();
      } catch (e) {
        console.warn(e);
      }
      this.$options.manager.removeUiComp(this);
      return this
    }

    // 初始化子节点
    async _initChildren() {
      const children = this.$options.options.children || [];

      for (const child of children) {
        let type = child.type;

        if (type === 'Layer' && child.kpOption?._kp3DLayer) {
          type = 'ThingJSLayer';
        }

        if (type === 'DefaultContainer') {
          type = 'Container';
        }

        const comp = this.$options.manager.getCompByUiId(child.option.id);
        if (comp) {
          if (!comp.$options.status) {
            await this.$options.manager.create(type).init(this, child);
          } else {
            console.warn('节点初始化已经完成了');
          }
        } else {
          await this.$options.manager.create(type).init(this, child);
        }
      }

      return this
    }

    // 挂载
    async _mount() {
      this._initComp();
      this._initEvent();
      this.$updateAttrs();
      this._initUiEvents();

      // 先加入父级
      this._initAddParent();
      await this._initChildren();

      return this
    }

    // 初始化ui事件
    _initUiEvents() {
      this.$uiComp.on &&
        this.$uiComp.on('contextmenu', this._updateContextmenuEvent, {
          comp: this,
          preventDefault: false,
          stopPropagation: false,
        });
      return this
    }

    // 初始化添加到父级
    _initAddParent() {
      const nextComp = this.$options.config.nextComp;
      if (nextComp) {
        const start = nextComp.$ranking;
        this.$parent._spliceChildren &&
          this.$parent._spliceChildren(start, 0, this);
      } else {
        this.$parent._addChildren && this.$parent._addChildren(this);
      }

      return this
    }

    // 初始化后
    _initEnd() {
      this.$complete = true;
      return this
    }

    // 更新右击事件编组
    _updateContextMenuGroupEvent(comp, e) {
      const selectComps = comp.$root.$selectComponent;
      const rootGroup = comp.$rootGroup;
      if (rootGroup) {
        const parentSelectGroups = getParentSelectGroup(comp);

        if (parentSelectGroups) {
          parentSelectGroups.$root._updateContextmenu(selectComps, e);
        } else {
          rootGroup.select(true);
          rootGroup.$root._updateContextmenu([rootGroup], e);
        }
      } else {
        comp.select(true);
        comp.$root._updateContextmenu([comp], e);
      }
    }

    // 更新右击事件
    _updateContextmenuEvent(e) {
      const { comp } = this;
      if (comp.$options.isEdit) {
        if (comp.$root.$parent.state.contextMenuRunning) {
          const type = comp.type;
          if (type === 'Container') {
            if (comp.isSelected) {
              comp.$root._updateContextmenu(comp.$root.$selectComponent, e);
            } else {
              comp._updateContextMenuGroupEvent(comp, e);
            }
          } else if (type === 'Layer') {
            comp.$parent.select();
            comp.$root._updateContextmenu([comp.$parent], e);
          }
        }
      }
    }

    // 修改子节点
    _spliceChildren(start, deleteCount, ...items) {
      const children = [...this.children];
      let _start = start;
      if (_start >= children.length) {
        _start = children.length;
      }

      if (deleteCount) {
        this.children.splice(_start, deleteCount);
        this._updateChildren(children);
      }

      if (items.length) {
        this.children.splice(_start, 0, ...items);
        this._updateChildren(children);
      }
    }

    // 添加子节点
    _addChildren(...items) {
      const children = [...this.children];
      this.children.push(...items);
      this._updateChildren(children);
    }

    // 绑定dom事件
    $addEventListener(name, fn, capture, context) {
      addEventListener(this, name, fn, capture, context);
      return this
    }

    // 解绑dom事件
    $removeEventListener(name, fn, capture, context) {
      removeEventListener(this, name, fn, capture, context);
      return this
    }

    // 绑定事件
    $on(name, fn, context) {
      on(this, name, fn, context);
      return this
    }

    // 绑定一次事件
    $once(name, fn, context) {
      once(this, name, fn, context);
      return this
    }

    // 解绑事件
    $off(name, fn, context) {
      off(this, name, fn, context);
      return this
    }

    // 触发事件
    $emit(name, ...args) {
      emit(this, name, args);
      return this
    }

    // 更新属性
    _updateAttr(attr, value, oldValue) {
      attr.value = attr.set(value);
      this._update(attr.name, value, oldValue);
      return this
    }

    // 更新
    _update(name, value, oldValue) {
      this.$emit('update', this, name, value, oldValue);
      this.$root.$emit('update', this, name, value, oldValue);
      return this
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      attrs.forEach((attr) => {
        this[attr.name] = attr.value;
      });
      return this
    }

    // 更新多个属性
    $updateAttrs() {
      Object.keys(this.$options.attrs).forEach((attr) => {
        this.$updateAttr(attr);
      });
      return this
    }

    // 更新单个属性
    $updateAttr(name) {
      const attr = this.$options.attrs[name];
      if (attr && attr.init) {
        const oldValue = deepClone$1(attr.value);
        const value = attr.init();
        if (value !== oldValue) {
          attr.value = value;
          this._update(attr.name, value, oldValue);
        }
      }
      return this
    }

    // 更新选择
    _updateSelect(value) {
      const attr = this.$options.attrs.isSelected;
      const oldValue = attr.value;
      if (value !== oldValue) {
        attr.value = value;
        this._update(attr.name, value, oldValue);
        if (value) {
          this.$emit('select', this);
          this.$root.$emit('select', this);
        } else {
          this.$emit('unSelect', this);
          this.$root.$emit('unSelect', this);
        }
      }
      return this
    }

    // 导出定义文件
    toJSON() {
      const uiJSON = this.$uiComp.toJSON();
      const {
        name,
        id,
        type,
        isLock,
        visible,
        top,
        left,
        width,
        height,
        backgroundColor,
        backgroundImage,
      } = this;

      const style = {
        position: uiJSON.option.style.position,
        top,
        left,
        width,
        height,
        backgroundColor,
      };

      if (backgroundImage) {
        style.backgroundImage = backgroundImage;
      }

      const option = {
        id,
        name,
        isLock,
        visible,
        ignoreRendering: uiJSON.option.ignoreRendering,
        style,
      };

      return {
        option,
        kpOption: {},
        type,
        children: this.children.map((child) => child.toJSON()),
      }
    }

    // 显示悬浮盒
    showOverComp() {
      this.$ui.operation.showSubRect(this.$uiComp.bound, this.$uiComp);
      return this
    }

    // 隐藏悬浮盒
    hiddenOverComp() {
      this.$ui.operation.hideSubRect();
      return this
    }

    // 选中节点
    select(force = false) {
      if (force && this !== this.$canvas) {
        if (
          this.$root.$selectComponent.length !== 1 ||
          this.$root.$selectComponent[0] !== this.$canvas
        ) {
          this.$canvas.select();
        }
      }
      if (!this.isSelected) {
        this.isSelected = true;
      }
      return this
    }

    // 取消选中
    unSelect() {
      if (this.isSelected) {
        this.isSelected = false;
      }
      return this
    }

    // 选择所有子节点
    selectAll() {
      this.$root.select(this.children);
      return this
    }

    // 显示
    show() {
      if (!this.visible) {
        this.visible = true;
      }
      return this
    }

    // 隐藏
    hidden() {
      if (this.visible) {
        this.visible = false;
      }
      return this
    }

    // 移到目标位置
    moveToTarget(target, type) {
      this.$uiComp.moveToTarget(target.$uiComp, type);
      this._deletePaternity();

      if (type) {
        let index = target.$parent.children.findIndex((child) => child === target);
        if (type === 'after') {
          index++;
        }

        target.$parent._spliceChildren(index, 0, this);
      } else {
        target._addChildren(this);
      }

      if (type) {
        this.$parent = target.$parent;
        this.$options.parent = target.$options.parent;
      } else {
        this.$parent = target;
        this.$options.parent = target;
      }
      this.$emit('moveToTarget', this);
      this.$root.$emit('moveToTarget', this);
      return this
    }

    // 清空
    clear() {
      this.children.forEach((child) => child.destroy());
      return this
    }

    // 截图
    async _toImage(options, attrName) {
      const defaultImage =
        'data:image/jpeg;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
      // 没有尺寸返回默认图片
      if (!this.width || !this.height) {
        return defaultImage
      }

      const snapshotOptions = {
        backgroundColor: '#282A2E',
        width: this.width,
        height: this.height,
      };

      Object.assign(snapshotOptions, options, {
        onclone(clonedDoc) {
          const body = clonedDoc.body;
          const dom = clonedDoc.querySelector(`[${attrName}]`);

          if (dom) {
            dom.style.transform = '';
            const nodes = [...body.childNodes];
            nodes.forEach((child) => child.remove());
            body.appendChild(dom);
          }
        },
        // 忽略阻碍快照的资源
        ignoreElements: (element) => {
          const body = document.body;
          const rootEl = this.$root.$el;
          // body下uiDom以外的节点都忽略
          if (
            body.contains(element) &&
            !rootEl.contains(element) &&
            !element.contains(rootEl)
          ) {
            return true
          }

          if (['VIDEO', 'IMG', 'CANVAS'].includes(element.nodeName)) {
            const canvas = document.createElement('canvas');
            canvas.width = element.offsetWidth;
            canvas.height = element.offsetHeight;
            const ctx = canvas.getContext('2d');

            try {
              ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
              ctx.getImageData(0, 0, canvas.width, canvas.height);
            } catch (e) {
              return true
            }
          }
        },
      });

      let image;
      try {
        image = await this.$ui.getSnapshot(this.$el, snapshotOptions);
      } catch (e) {
        console.warn('截图失败', e);
        image = defaultImage;
      }
      return image
    }

    // 截图
    async toImage(options = {}) {
      this.$emit('beforeToImage', this);
      this.$root.$emit('beforeToImage', this);
      this.$canvas.select();
      const attrName = getNodeOnlyAttr('canvas-image-dom', true);
      this.$canvas.$el.setAttribute(attrName, '');
      await this.$ui.nextTick();
      const image = await this._toImage(options, attrName);
      this.$canvas.$el.removeAttribute(attrName);
      this.$emit('toImaged', this);
      this.$root.$emit('toImaged', this);
      return image
    }

    // 切除父子关系
    _deletePaternity() {
      if (this.$options.type === 'Canvas') {
        this.$parent.$canvas = null;
      } else {
        const index = this.$parent.children.findIndex((item) => item === this);

        if (~index) {
          this.$parent._spliceChildren(index, 1);
        }
      }
      return this
    }

    // 销毁开始
    _destroyBegin() {
      this.$complete = null;
      this.$options.isBeingDestroyed = true;
      this.$options.status = null;

      return this
    }

    // 销毁ui事件
    _destroyUiEvents() {
      this.$uiComp.off &&
        this.$uiComp.off('contextmenu', this._updateContextmenuEvent, {
          comp: this,
          preventDefault: false,
          stopPropagation: false,
        });
      return this
    }

    // 销毁结束
    _destroy() {
      this._destroyUiEvents();
      // 销毁子节点
      const children = [...this.children];
      children.forEach((child) => {
        child.destroy();
      });

      this._destroyComp();

      // 移除父节点关系
      if (this.$parent.children) {
        const index = this.$parent.children.findIndex((item) => item === this);
        if (~index) {
          this.$parent._spliceChildren(index, 1);
        } else {
          console.warn('已经从父节点销毁了');
        }
      }
      this.$options.manager.removeComp(this);

      // 父级空编组直接销毁
      if (
        this.$parent.type === 'Group' &&
        !this.$parent.children.length &&
        this.$parent.$options.status
      ) {
        this.$parent.destroy();
      }
      return this
    }

    // 销毁结束
    _destroyEnd() {
      this._destroyEvent();
      this.$options.isBeingDestroyed = null;
      this.$options.isDestroyed = true;
      this.$options.rootConfig = null;
      this.$options.options = null;
      this.$options.config = null;
      this.$options.kpOption = null;
      this.$options.children = null;
      this.$options.parent = null;
      this.$options.root = null;
      this.$options.elm = null;
      this.$options.manager = null;
      this.$options.adapterManager = null;
      this.$options.dataManager = null;
      this.$options.events = null;
      this.$parent = null;
      this.$root = null;
      this.$canvas = null;
      this.adapter = null;
      this.children = null;
      this.$events = {
        elements: {},
        events: {},
      };
      return this
    }

    // 销毁
    destroy() {
      if (this.$options.isBeingDestroyed) {
        console.warn('节点正在销毁');
      } else {
        if (this.$options.isDestroyed) {
          console.warn('节点已经销毁');
        } else {
          this._destroyBegin();
          this.$emit('beforeDestroy', this);
          this.$root.$emit('beforeDestroy', this);
          this.$emit('beforeDestroy:' + this.$options.type, this);
          this.$root.$emit('beforeDestroy:' + this.$options.type, this);
          this._destroy();
          this.$emit('destroyed', this);
          this.$root.$emit('destroyed', this);
          this.$emit('destroyed:' + this.$options.type, this);
          this.$root.$emit('destroyed:' + this.$options.type, this);
          this._destroyEnd();
        }
      }
      return this
    }

    // 下一个
    next() {
      return this.$next
    }

    // 上一个
    prev() {
      return this.$prev
    }

    // 获取dom节点
    get $el() {
      return this.$uiComp.el
    }

    // 获取ui实例
    get $uiComp() {
      return this.$options.manager.getUiComp(this.$options.id)
    }

    // 获取ui根实例
    get $ui() {
      return this.$root.$uiComp
    }

    // 下一个
    get $next() {
      let node = null;

      if (this.$parent?.children) {
        const index = this.$parent.children.findIndex((child) => child === this);
        if (~index) {
          node = this.$parent.children[index + 1];
        }
      }
      return node
    }

    // 上一个
    get $prev() {
      let node = null;

      if (this.$parent?.children) {
        const index = this.$parent.children.findIndex((child) => child === this);
        if (~index) {
          node = this.$parent.children[index - 1];
        }
      }
      return node
    }

    // 排名
    get $ranking() {
      return this.$parent?.children.findIndex((item) => item === this)
    }

    // 显示状态
    get $realVisible() {
      return getParentVisible(this)
    }

    // 接数组件显示状态
    get $dataAdapterRealVisible() {
      if (!this.adapter.$dataAdapter) return false
      return this.$options.isEdit ? this.$realVisible : this.$parent.$realVisible
    }

    // 后面的兄弟节点
    get $nextSibling() {
      return this.$parent.children.slice(
        this.$parent.children.findIndex((item) => item === this)
      )
    }

    // 前面的兄弟节点
    get $prevSibling() {
      return this.$parent.children.slice(
        0,
        this.$parent.children.findIndex((item) => item === this) - 1
      )
    }

    // 兄弟节点
    get $sibling() {
      return this.$parent.children.filter((item) => item !== this)
    }
  };

  // 获取父节点显示状态
  function getParentVisible(instance) {
    if (instance.type === 'Canvas') {
      return instance.visible
    }
    if (!instance.visible) {
      return instance.visible
    }
    return getParentVisible(instance.$parent)
  }

  // 初始化属性
  function initAttrs$1(instance) {
    instance
      ._registerAttr('id', null, function () {
        return instance.$uiComp.id
      })
      ._registerAttr(
        'name',
        null,
        function () {
          return instance.$uiComp.name
        },
        null,
        function (value) {
          instance.$uiComp.name = value;
          return value
        }
      )
      ._registerAttr('type', null, function () {
        return instance.$uiComp.type
      })
      ._registerAttr(
        'isSelected',
        null,
        function () {
          return instance.$uiComp.isSelected
        },
        null,
        function (value) {
          if (value) {
            instance.$ui.selector.select(instance.$uiComp);
            instance.$emit('select', this);
            instance.$root.$emit('select', this);
          } else {
            instance.$uiComp.unselect();
            instance.$emit('unSelect', this);
            instance.$root.$emit('unSelect', this);
          }

          return value
        },
        { noAdd: true }
      )
      ._registerAttr(
        'isLock',
        null,
        function () {
          return instance.$uiComp.lock
        },
        null,
        function (value) {
          instance.$uiComp.lock = value;
          return value
        },
        {
          setAfter: () => {
            if (instance.$parent.type === 'Group') {
              instance.$parent.$updateAttr('isLock');
            }
          },
        }
      )
      ._registerAttr(
        'visible',
        null,
        function () {
          return instance.$uiComp.visible
        },
        null,
        function (value) {
          instance.$uiComp.setVisible(!!value);
          return value
        }
      )
      ._registerAttr(
        'top',
        null,
        function () {
          return instance.$uiComp.top
        },
        null,
        function (value) {
          instance.$uiComp.top = value;
          return value
        },
        {
          setAfter: () => {
            if (instance.$parent.type === 'Group') {
              instance.$parent.$updateAttr('top');
            }
          },
        }
      )
      ._registerAttr(
        'left',
        null,
        function () {
          return instance.$uiComp.left
        },
        null,
        function (value) {
          instance.$uiComp.left = value;
          return value
        },
        {
          setAfter: () => {
            if (instance.$parent.type === 'Group') {
              instance.$parent.$updateAttr('left');
            }
          },
        }
      )
      ._registerAttr(
        'width',
        null,
        function () {
          return instance.$uiComp.width
        },
        null,
        function (value) {
          instance.$uiComp.width = value;
          return value
        },
        {
          setAfter: () => {
            if (instance.$parent.type === 'Group') {
              instance.$parent.$updateAttr('width');
            }
          },
        }
      )
      ._registerAttr(
        'height',
        null,
        function () {
          return instance.$uiComp.height
        },
        null,
        function (value) {
          instance.$uiComp.height = value;
          return value
        },
        {
          setAfter: () => {
            if (instance.$parent.type === 'Group') {
              instance.$parent.$updateAttr('height');
            }
          },
        }
      )
      ._registerAttr(
        'rotate',
        null,
        function () {
          const r = instance.$uiComp.rotate;
          return transformRotate(r)
        },
        null,
        function (value) {
          const r = transformRotate(value);
          instance.$uiComp.setRotate(r);
          return r
        }
      )
      ._registerAttr(
        'backgroundColor',
        null,
        function () {
          return instance.$uiComp.style.backgroundColor
        },
        null,
        function (value) {
          instance.$uiComp.style.backgroundColor = value;
          return value
        }
      )
      ._registerAttr(
        'backgroundImage',
        null,
        function () {
          return instance.$uiComp.style.backgroundImage || ''
        },
        null,
        function (value) {
          instance.$uiComp.style.backgroundImage = value;
          return value
        }
      )
      ._registerAttr(
        'animation',
        null,
        function () {
          return deepClone$1(instance.$uiComp.animation)
        },
        null,
        function (value) {
          const { enter, leave } = deepClone$1(value) || [];

          instance.$uiComp.setAnimation('enter', enter);
          instance.$uiComp.setAnimation('leave', leave);
          return value
        }
      );
  }

  // 移除属性
  // function removeDefineAttrs(instance) {
  //   Object.keys(instance.$options.attrs).forEach((attr) => {
  //     delete instance[attr]
  //   })
  // }

  // 获取所有上级选中编组
  function getParentSelectGroup(instance) {
    function getParentGroup(target) {
      if (target.type === 'Group') {
        if (target.isSelected) {
          return target
        }
        return getParentGroup(target.$parent)
      }
    }

    return getParentGroup(instance.$parent)
  }

  function transformRotate(rotate) {
    const r = rotate % 360;
    return r < 0 ? r + 360 : r
  }

  // udatav canvas背景修改
  function removeUdatavBackground(instance) {
    const { $uiComp } = instance;
    if ($uiComp.style.background) {
      $uiComp.el.style.background = '';
      delete $uiComp.style._style.background;
    }
  }

  // 画布
  class Canvas extends Base$1 {
    // 初始化前
    _beforeInit() {
      super._beforeInit();

      const self = this;

      // 判断画布
      this.isCanvas = true;

      self
        ._removeAttr('rotate')
        ._removeAttr('isSelected')
        ._removeAttr('top')
        ._removeAttr('left')
        ._removeAttr('backgroundColor')
        ._removeAttr('backgroundImage')
        ._removeAttr('width')
        ._removeAttr('height')
        ._registerAttr(
          'backgroundColor',
          null,
          function () {
            return self.$uiComp.style.backgroundColor
          },
          null,
          function (value) {
            removeUdatavBackground(self);
            self.$uiComp.style.backgroundColor = value;
            return value
          }
        )
        ._registerAttr(
          'backgroundImage',
          null,
          function () {
            return self.$uiComp.style.backgroundImage || ''
          },
          null,
          function (value) {
            removeUdatavBackground(self);
            self.$uiComp.style.backgroundImage = value;
            return value
          }
        )
        ._registerAttr(
          'scaleMode',
          null,
          function () {
            return self.$ui.getScaleMode()
          },
          null,
          function (value) {
            self.$ui.setScaleMode(value);
            return value
          }
        )
        ._registerAttr(
          'canvasZoom',
          null,
          function () {
            return self.$uiComp.getZoom()
          },
          null,
          function (value) {
            self.$uiComp.setZoom(value);
            return value
          }
        )
        ._registerAttr(
          'isSelected',
          null,
          null,
          null,
          function (value) {
            if (value) {
              self.$ui.selector.clear();
              self.$emit('select', self);
              self.$root.$emit('select', self);
            } else {
              self.$emit('unSelect', self);
              self.$root.$emit('unSelect', self);
            }
            self.$parent._updateSelect();

            return value
          },
          { noAdd: true }
        )
        ._registerAttr(
          'width',
          null,
          function () {
            return self.$uiComp.width
          },
          null,
          function (value) {
            self.$uiComp.width = value;
            self._initLayerSize();
            return value
          }
        )
        ._registerAttr(
          'height',
          null,
          function () {
            return self.$uiComp.height
          },
          null,
          function (value) {
            self.$uiComp.height = value;
            self._initLayerSize();
            return value
          }
        );

      self._registerAttr(
        'filters',
        null,
        function () {
          return self.$uiComp.getFilter && self.$uiComp.getFilter()
        },
        null,
        null
      );

      // 选中图层
      this.$currentLayer = null;
      this.isSelected = null;

      // 画布居中偏移
      this.boundOffset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      };

      return this
    }

    // 初始化前
    _initBegin(parent, options, config) {
      super._initBegin(parent, options, config);

      this.$root.$on('hook:uiCanvasZoom', this.updateZoom, this);
      this.$root.$on('hook:selectLayer', this._selectLayer, this);
      this.$root.$on('hook:unSelectLayer', this._unSelectLayer, this);

      return this
    }

    // 初始化画布尺寸
    _initLayerSize() {
      const { width, height } = this;
      this.layers.forEach((layer) => {
        layer.isLock = false;
        layer.width = width;
        layer.height = height;
      });
    }

    // 选择图层
    _selectLayer(layer) {
      if (this.$currentLayer !== layer) {
        this.$currentLayer = layer;
      }
    }

    // 取消选择图层
    _unSelectLayer(layer) {
      if (this.$currentLayer === layer) {
        this.$currentLayer = null;
      }
    }

    // 销毁事件
    _destroyEvent() {
      super._destroyEvent();

      if (this.$options.events) {
        this.$options.events();
        this.$options.events = null;
      }

      return this
    }

    // 销毁ui实例
    _destroyComp() {
      delete this.$uiComp.__DIAGRAM__;
      this.$options.manager.removeUiComp(this);
    }

    // 更新缩放
    updateZoom() {
      this.$updateAttr('canvasZoom');
      this.$root.$emit('updateCanvasZoom', this.canvasZoom);
      this.$emit('updateCanvasZoom', this.canvasZoom);
      return this
    }

    // 初始化
    async _mount() {
      await super._mount();
      this.$uiComp.lock = false;
      this.updateZoom();

      return this
    }

    // 初始化后
    _initEnd() {
      super._initEnd();

      this._initLayerSize();

      // 默认选择画布
      if (!this.isSelected) {
        this._updateSelect(true);
      }
      // 首次触发选择画布
      this.$parent._updateSelect();

      return this
    }

    // 更新界限
    updateBound(offset = {}) {
      const boundOffset = this.boundOffset;
      Object.assign(boundOffset, offset);
      const rect = this.$parent.$el.getBoundingClientRect();

      try {
        this.$ui.updateBound({
          height: rect.height - boundOffset.bottom,
        });
      } catch (e) {
        console.warn('更新画布居中位置失败', e);
      }
      return this
    }

    // 更新画布居中位置
    updateCanvasCenter() {
      try {
        this.$uiComp.zoomAvailCenter();
      } catch (e) {
        console.warn('更新画布居中位置失败', e);
      }
      return this
    }

    // 重置滤镜
    resetFilter() {
      this.$uiComp.resetFilter();
      this.$updateAttr('filters');
      return this
    }

    // 设置滤镜
    setFilter(key, value) {
      this.$uiComp.setFilter(key, value);
      this.$updateAttr('filters');
      return this
    }

    // 关闭滤镜
    clearFiler() {
      this.$uiComp.clearFiler();
      this.$updateAttr('filters');
      return this
    }

    // 设置尺寸
    setSize(attrs = []) {
      this.updateAttrs(attrs);

      this.updateBound();
      this.updateCanvasCenter();
      return this
    }

    // 获取孪生图层
    getThingLayer() {
      return this.children.find((layer) => layer.isThingLayer)
    }

    // 创建图层
    async createLayer(options = {}, config = {}) {
      const layer = this.$options.manager.create(options.type);
      await layer.init(this, options);

      if (config.clip) {
        layer.clip = true;
      }

      if (isNumber$1(config.beforeCompIndex)) {
        layer.moveToTarget(this.children[config.beforeCompIndex], 'before');
      }

      if (config.select) {
        layer.select();
      }

      this.$emit('createLayer', layer);
      this.$root.$emit('createLayer', layer);
      return layer
    }

    // 导出定义文件
    toJSON() {
      const uiJSON = this.$uiComp.toJSON();
      const options = super.toJSON();

      options.option.filters = deepClone$1(this.filters);
      options.option.scaleMode = this.scaleMode;
      options.option.style.backgroundPosition =
        uiJSON.option.style.backgroundPosition;
      options.option.style.backgroundRepeat = uiJSON.option.style.backgroundRepeat;
      options.option.style.backgroundSize = uiJSON.option.style.backgroundSize;
      options.option.style.transformOrigin = uiJSON.option.style.transformOrigin;
      options.kpOption.dataFilters = deepClone$1(
        this.$options.dataManager.filterManager.toJSON()
      );

      delete options.option.style.top;
      delete options.option.style.left;
      delete options.kpOption.isSelected;

      return options
    }

    // 转换位置
    transformLocation(x, y) {
      const { x: cX, y: cY } = this.$uiComp.el.getBoundingClientRect();
      const { canvasZoom } = this;
      return {
        x: (x - cX) / canvasZoom,
        y: (y - cY) / canvasZoom,
      }
    }

    // 销毁中
    _destroyEnd() {
      this.$root.$off('hook:uiCanvasZoom', this.updateZoom, this);
      this.$root.$off('hook:selectLayer', this._selectLayer, this);
      this.$root.$off('hook:unSelectLayer', this._unSelectLayer, this);
      super._destroyEnd();
      return this
    }

    // 获取内部所有图层
    get layers() {
      return this.children
    }

    // 获取内部所有编组
    get groups() {
      return this.$options.manager.getAllChildren(this, 'Group')
    }

    // 获取内部所有容器
    get containers() {
      return this.$options.manager.getAllChildren(this, 'Container')
    }

    // 获取所有孪生容器
    get $twinContainers() {
      return this.containers.filter((container) => container.adapter?.isThing)
    }
  }

  let Layer$1 = class Layer extends Base$1 {
    // 初始化前
    _beforeInit(parent, options) {
      super._beforeInit(parent, options);

      const self = this;

      // 判断图层
      this.isLayer = true;

      self
        ._removeAttr('rotate')
        ._removeAttr('isSelected')
        ._removeAttr('backgroundColor')
        ._removeAttr('backgroundImage')
        ._registerAttr(
          'isSelected',
          false,
          function () {
            return self.$options.kpOption?._kpSelected || false
          },
          null,
          function (value) {
            if (value) {
              self.show();
              self.$uiComp.select();
            } else if (!self.clip) {
              self.hidden();
            }
            return value
          },
          {
            noAdd: true,
          }
        )
        ._registerAttr(
          'clip',
          null,
          function () {
            return self.$options.kpOption?._kpClip || false
          },
          null,
          function (value) {
            if (value) {
              self.show();
            } else if (!self.isSelected) {
              self.hidden();
            }
            return value
          }
        );

      return this
    }

    // 初始化节点
    _initComp() {
      super._initComp();
      this.$uiComp.lock = false;
    }

    // 初始化挂载后
    _initEnd() {
      super._initEnd();

      if (!this.visible && this.clip) {
        this.show();
      }

      if (this.isSelected) {
        this.$sibling.forEach((layer) => {
          if (layer.isSelected) {
            layer.unSelect();
          }
        });
        if (this.$options.isEdit) {
          if (!this.visible) {
            this.show();
          }
          this.$uiComp.select();
        }
        this.$emit('hook:selectLayer', this);
        this.$root.$emit('hook:selectLayer', this);
        this.$emit('selectLayer', this);
        this.$root.$emit('selectLayer', this);
      }
    }

    // 选择
    select() {
      this.$sibling.forEach((item) => item.unSelect());
      super.select(true);
      if (this.isSelected) {
        this.$emit('hook:selectLayer', this);
        this.$root.$emit('hook:selectLayer', this);
        this.$emit('selectLayer', this);
        this.$root.$emit('selectLayer', this);
      }
      return this
    }

    // 取消选择
    unSelect() {
      super.unSelect();
      if (!this.isSelected) {
        this.$emit('hook:unSelectLayer', this);
        this.$root.$emit('hook:unSelectLayer', this);
        this.$emit('unSelectLayer', this);
        this.$root.$emit('unSelectLayer', this);
      }
      return this
    }

    // 创建容器
    async createContainer(options, config) {
      return this._createContainer(options, config)
    }

    // 创建容器
    async _createContainer(options = {}, config = {}) {
      const container = this.$options.manager.create(options.type);
      await container.init(this, options, config.container);

      if (config.lock) {
        container.isLock = true;
      }
      if (config.select) {
        container.select();
      }

      this.$emit('createContainer', container);
      this.$root.$emit('createContainer', container);

      return container
    }

    // 布局模板
    async parserTemplate(data, config = {}) {
      const comps = await Promise.all(
        this.$uiComp
          .parserTemplate(data)
          .map((item) => this._createContainer(item.toJSON()))
      );
      if (config.select) {
        this.$root.select(comps);
      }

      return comps
    }

    // 导入定义文件
    async parseJSON(defs, config = {}) {
      if (!Array.isArray(defs)) {
        defs = [defs];
      }

      defs.forEach((item) => this.$root.queryById(item.id)?.destroy());

      const comps = await Promise.all(
        defs.map((item) => this._createContainer(item))
      );
      if (config.select) {
        this.$root.select(comps);
      }

      return comps
    }

    // 导出定义文件
    toJSON() {
      const options = super.toJSON();

      options.option.visible = this.clip && this.visible;
      options.kpOption._kpClip = this.clip;
      options.kpOption._kpSelected = this.isSelected;

      delete options.option.style.backgroundColor;
      delete options.option.style.backgroundImage;

      return options
    }

    // 获取空容器通过位置
    getEmptyContainerByLocation(x, y) {
      return this.containers.filter(
        ({ visible, adapter, top, left, width, height, backgroundImage }) => {
          return (
            !adapter &&
            visible &&
            !backgroundImage &&
            top <= y &&
            top + height >= y &&
            left <= x &&
            left + width >= x
          )
        }
      )
    }

    // 销毁中
    _destroy() {
      const lastLayer = this.$next || this.$prev;
      this.unSelect();
      super._destroy();
      lastLayer && lastLayer.select && lastLayer.select();
      return this
    }

    // 获取内部所有编组
    get groups() {
      return this.$options.manager.getAllChildren(this, 'Group')
    }

    // 获取内部所有容器
    get containers() {
      return this.$options.manager.getAllChildren(this, 'Container')
    }

    // 获取所有孪生容器
    get $twinContainers() {
      return this.containers.filter((container) => container.adapter?.isThing)
    }
  };

  class ThingJSLayer extends Layer$1 {
    // 初始化前
    _beforeInit(parent, options) {
      super._beforeInit(parent, options);
      // 判断3D图层
      this.isThingLayer = true;
      return this
    }

    // 创建ui实例
    _initCompCreateUi() {
      const $options = this.$options;

      return new UI.Layer(this.$parent.$uiComp, $options.options.option)
    }

    // 布局模板
    parserTemplate() {
      return Promise.reject(new Error('无法使用布局模板，只能创建孪生图表'))
    }

    parseJSON() {
      return Promise.reject(new Error('无法导入定义文件，只能创建孪生图表'))
    }

    // 导出定义文件
    toJSON() {
      const options = super.toJSON();

      options.kpOption._kp3DLayer = true;

      return options
    }
  }

  // 获取元素最上层组或元素本身数据
  const getUpperData = (element) => {
    let q = element;
    while (q.$parent) {
      if (q.$parent.type === 'Layer') {
        return {
          $id: q.id,
          animation: q.animation,
          name: q.name,
          $comp: q,
        }
      }
      q = q.$parent;
    }
  };

  const getOpacity = (opacity) => {
    if (opacity === undefined) {
      opacity = 1;
    }
    return opacity
  };

  // 记录元素属性
  const recordAttribute = (element) => {
    const { id, width, height, top, left, isLock, visible, $uiComp } = element;

    const { translate, scale, opacity } = $uiComp.style || {};
    return {
      id,
      visible,
      basic: {
        lock: isLock,
      },
      // 锁定状态容器无法直接通过 uiComp.width 方式修改 width、height、top、left属性
      style: {
        width,
        height,
        top,
        left,
        opacity: getOpacity(opacity),
        translate: translate || [0, 0],
        scale: scale || [1, 1],
      },
    }
  };

  class Single {
    constructor(element, parent) {
      // 组件
      this.element = element;
      // { id, name, animation, $comp }
      this.parent = parent;

      // 组件已执行到第几个动画
      this.current = 0;

      // 组件所有动画个数
      this.total = null;

      // 记录组件动画开始前状态
      this.data = null;

      // 当前执行动画
      this.animation = null;
    }

    execute(animation) {
      this.record();
      this.animation = animation;
      const enter = animation?.enter || [];
      const leave = animation?.leave || [];
      this.setTotal(enter, leave);

      const key = enter.length > 0 ? 'enter' : 'leave';
      this.do(key);
    }

    /**
     * @desc 动画执行
     * @param type {String} 动画类型  1.enter:进入动画  2.leave:离开动画
     */
    do(type) {
      const data = this.animation?.[type] || [];

      data.forEach((s) => {
        const params = this.getParams(type, s[0]);

        let q = this.$ui.animation;
        q = q.run(
          [
            {
              ...params.animation,
            },
          ],
          () => {
            params.after && params.after();
          }
        );

        const after = s.slice(1);

        for (const a of after) {
          const aParams = this.getParams(type, a);
          q = q.run(
            [
              {
                ...aParams.animation,
              },
            ],
            () => {
              aParams.after && aParams.after();
            }
          );
        }
      });
    }

    getParams(execute, value) {
      const { total } = this;
      const { animation, duration } = value;

      const enter = this.animation?.enter || [];
      const leave = this.animation?.leave || [];

      const target = this.element?.$uiComp;

      let after;

      if (execute === 'enter' && leave.length > 0) {
        const enterLen = enter.flat().length;
        after = () => {
          ++this.current;
          if (enterLen >= this.current) {
            this.do('leave');
          }
        };
      } else {
        after = () => {
          ++this.current;
          if (total === this.current) {
            this.current = 0;
            setTimeout(() => {
              this.element.$emit('afterAnimation', this.element);
            });
          }
        };
      }

      return {
        animation: {
          target,
          animation,
          duration,
        },
        after,
      }
    }

    // 记录动画开始前每个元素状态
    record() {
      this.data = recordAttribute(this.element);
    }

    // 动画结束后还原元素状态
    restore() {
      const { basic, style, visible } = this.data || {};
      const uiComp = this.element?.$uiComp;
      if (uiComp) {
        uiComp.setVisible(visible);

        for (const key in basic) {
          uiComp[key] = basic[key];
        }

        for (const key in style) {
          uiComp.style[key] = style[key];
        }
      }
    }

    setTotal(enter, leave) {
      const enterLen = enter?.flat()?.length || 0;
      const leaveLen = leave?.flat()?.length || 0;
      this.total = enterLen + leaveLen;
    }

    // 结束动画
    end() {
      this.restore();

      Object.assign(this, {
        current: 0,
        total: null,
        animation: null,
      });
    }

    get $ui() {
      return this.element?.$ui
    }
  }

  class Collection {
    constructor() {
      this.map = new Map();
    }

    set(key, value) {
      this.map.set(key, value);
    }

    get(key) {
      return this.map.get(key)
    }

    has(key) {
      return this.map.has(key)
    }

    delete(key) {
      return this.map.delete(key)
    }

    clear() {
      this.map.clear();
    }

    get size() {
      return this.map.size
    }
  }

  var collection = new Collection();

  // 数据转成定义文件animation
  function transformAnimation(data) {
    const animation = {
      enter: [],
      leave: [],
    };

    let parentExecute = null;

    if (!data.length) return null

    data.forEach((item, index) => {
      const { animation: animationName, basic, duration } = item;

      const { execute } = basic;

      const single = {
        animation: animationName,
        duration,
        index,
      };

      if (execute !== 'after') {
        parentExecute = execute;
        animation[execute].push([single]);
      } else {
        const c = animation[parentExecute];
        c[c.length - 1].push(single);
      }
    });

    return animation
  }

  class Manager {
    constructor() {
      this.element = null;

      // 元素的父级（父级为layer） { id, name, animation }
      this.parent = null;

      // 容器动画执行到第几个
      this.current = 0;

      // 容器个数
      this.total = 0;
    }

    getAnimator(element) {
      this._init(element);

      return this
    }

    _init(element) {
      if (this.element?.id && this.element.id !== element.id) {
        this.end();
      }
      this.element = element;
      this.parent = getUpperData(element);
    }

    // 动画执行
    execute(animation) {
      this.element.$root.$emit('beforeAnimation', this.element);

      const { containers } = this;

      this.total = containers.length;

      this.setOperate({ resize: false, rotate: false });
      for (const c of containers) {
        const s = new Single(c, this.parent);
        collection.set(c.id, s);

        s.execute(animation);

        c.$on('afterAnimation', (e) => {
          ++this.current;
          c.$off('afterAnimation');
          if (this.total === this.current) {
            this.end();

            this.element.$root.$emit('afterAnimation', this.element);
          }
        });
      }
    }

    setOperate({ resize, rotate }) {
      const { $ui } = this;
      $ui &&
        $ui.setOperatHandlerDisplay({
          resize,
          rotate,
        });
    }

    // 动画结束
    end() {
      if (!collection.size) return
      this.$ui?.animation?.end();

      this.$ui?.setOperatHandlerDisplay({
        resize: true,
        rotate: true,
      });

      collection.map.forEach((d, i) => {
        d.end();

        collection.delete(i);
      });

      collection.clear();

      this.current = 0;
    }

    destroy() {
      this.end();

      Object.assign(this, {
        element: null,
        parent: null,
        total: null,
      });
    }

    // 大屏数据格式转成定义文件格式
    transform(data) {
      return transformAnimation(data)
    }

    // 更新动画
    update(data) {
      this.parent.$comp.animation = data;
      this.parent.animation = data;
    }

    get $ui() {
      return this.element?.$ui
    }

    get containers() {
      const { element } = this || {};
      return element.isGroup ? element.containers : [element]
    }

    get enter() {
      return this.parent?.animation?.enter || []
    }

    get leave() {
      return this.parent?.animation?.leave || []
    }
  }

  var animatorManager = new Manager();

  class Group extends Base$1 {
    // 初始化前
    _beforeInit() {
      super._beforeInit();

      const self = this;

      // 判断编组
      this.isGroup = true;

      self
        ._removeAttr('visible')
        ._removeAttr('top')
        ._removeAttr('left')
        ._removeAttr('width')
        ._removeAttr('height')
        ._removeAttr('rotate')
        ._removeAttr('isLock')
        ._removeAttr('backgroundColor')
        ._removeAttr('backgroundImage')
        ._registerAttr(
          'visible',
          null,
          function () {
            return self.$uiComp.visible
          },
          null,
          function (value) {
            self.$uiComp.visible = value;
            self.$uiComp._setVisible();
            return value
          }
        )
        ._registerAttr(
          'top',
          null,
          function () {
            return self.$uiComp.bound.top
          },
          null,
          function (value) {
            self.$uiComp.move(0, value - self.top);
            return value
          }
        )
        ._registerAttr(
          'left',
          null,
          function () {
            return self.$uiComp.bound.left
          },
          null,
          function (value) {
            self.$uiComp.move(value - self.left, 0);
            return value
          }
        )
        ._registerAttr('width', null, function () {
          return self.$uiComp.bound.width
        })
        ._registerAttr('height', null, function () {
          return self.$uiComp.bound.height
        })
        ._registerAttr(
          'isLock',
          null,
          function () {
            return !self.children.some((container) => !container.isLock)
          },
          null,
          function (value) {
            self.children.forEach((container) => (container.isLock = value));
            return value
          },
          {
            setAfter: () => {
              if (self.$parent.type === 'Group') {
                self.$parent.$updateAttr('isLock');
              }
            },
          }
        );

      return this
    }

    // 初始化编组子节点
    async _initGroupChildren() {
      const children = this.$options.options.children || [];

      for (const child of children) {
        let type = child.type;
        if (child.kpOption?.adapter?.thingType) {
          type = 'DefaultContainer';
        }
        let comp = this.$options.manager.getCompByUiId(child.option.id);
        if (comp) {
          if (!comp.$options.status) {
            await this.$options.manager
              .create(type)
              .init(this.$parentLayer, child);
          }
        } else {
          comp = await this.$options.manager
            .create(type)
            .init(this.$parentLayer, child);
        }
        comp._deletePaternity();
        comp.$parent = comp.$options.parent = this;
        this.children.push(comp);
      }
      return this
    }

    // 初始化子节点
    async _initChildren() {
      return this
    }

    // 挂载
    async _mount() {
      await this._initGroupChildren();
      await super._mount();

      return this
    }

    // 创建ui实例
    _initCompCreateUi() {
      const $options = this.$options;

      if (UI[$options.type]) {
        return new UI[$options.type](
          this.children.map((child) => child.$uiComp),
          $options.options?.option
        )
      } else {
        console.error(`ThingUi没有${$options.type}方法`);
      }
    }

    // 初始化结束
    _initEnd() {
      super._initEnd();
      // 清除组内元素动画
      this.children.forEach((comp) => {
        comp.animation = null;
      });
      return this
    }

    // 更新单个属性
    $updateAttr(name) {
      super.$updateAttr(name);
      if (
        this.$parent.type === 'Group' &&
        ['isLock', 'width', 'height', 'left', 'top'].includes(name)
      ) {
        this.$parent.$updateAttr(name);
      }
      return this
    }

    // 创建编组
    async createGroup(comps = [], option = {}, config = {}) {
      const group = this.$options.manager.create('Group');
      return groupInit(group, [this, ...comps], option, config)
    }

    // 获取截图
    async toImage(options = {}) {
      const defaultImage =
        'data:image/jpeg;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
      // 没有尺寸返回默认图片
      if (!this.width || !this.height) {
        return defaultImage
      }

      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#282A2E';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.$canvas.select();
      const attrName = getNodeOnlyAttr('canvas-image-dom', true);
      this.$canvas.$el.setAttribute(attrName, '');
      await this.$ui.nextTick();

      for (const child of this.children) {
        const image = await loadImg$1(
          await child.toImage({ backgroundColor: 'transparent' }, attrName)
        );
        try {
          ctx.drawImage(
            image.target,
            child.left - this.left,
            child.top - this.top
          );
        } catch (e) {
          console.warn('截图报错', e);
        }
      }

      this.$canvas.$el.removeAttribute(attrName);
      return canvas.toDataURL('image/jpeg', 1)
    }

    // 解散
    dismiss() {
      const ui = this.$root;
      const children = [...this.children];
      this._destroyAnimator();

      children.forEach((child) => {
        child.moveToTarget(this, 'before');
      });

      this.destroy();

      ui.select(children);

      return this
    }

    // 导出定义文件
    toJSON() {
      const uiJSON = this.$uiComp.toJSON();
      const { type } = this;
      const option = { ...uiJSON.option, animation: this.animation };
      return {
        option,
        kpOption: {},
        type,
        children: this.children.map((child) => child.toJSON()),
      }
    }

    _destroy() {
      this.unSelect();
      this._destroyAnimator();
      super._destroy();
    }

    // 销毁ui实例
    _destroyComp() {
      delete this.$uiComp.__DIAGRAM__;
      try {
        this.$uiComp?.destroy();
      } catch (e) {
        console.warn(e);
      }
      this.$options.manager.removeUiComp(this);
      return this
    }

    // 销毁动画
    _destroyAnimator() {
      if (this.animator && this.animator.destroy) {
        this.animator.destroy();
      }
    }

    // 获取内部所有编组
    get groups() {
      return this.$options.manager.getAllChildren(this, 'Group')
    }

    // 获取内部所有容器
    get containers() {
      return this.$options.manager.getAllChildren(this, 'Container')
    }

    // 所在图层
    get $parentLayer() {
      function getLayer(parent) {
        if (parent.type === 'Layer') {
          return parent
        }
        return getLayer(parent.$parent)
      }
      return getLayer(this.$parent)
    }

    // 获取所有孪生容器
    get $twinContainers() {
      return this.containers.filter((container) => container.adapter?.isThing)
    }

    get animator() {
      return animatorManager?.getAnimator(this)
    }
  }

  class Container extends Base$1 {
    // 初始化前
    _beforeInit() {
      super._beforeInit();

      const self = this;

      // 判断容器
      this.isContainer = true;

      self._registerAttr(
        'penetrateOnplay',
        null,
        function () {
          return self.$uiComp.penetrateOnplay
        },
        null,
        function (value) {
          self.$uiComp.penetrateOnplay = value;
          return value
        }
      );

      return this
    }

    // 创建ui实例
    _initCompCreateUi() {
      const options = this.$options;
      let type = options.type;

      if (options.kpOption?.adapter?.thingType) {
        type = 'DefaultContainer';
      }

      if (UI[type]) {
        return new UI[type](this.$parent.$uiComp, options.options?.option)
      } else {
        console.error(`ThingUi没有${type}方法`);
      }
    }

    // 挂载
    async _mount() {
      await super._mount();
      const option = this.$options.options.option;
      const kpOption = this.$options.kpOption;

      if (option.adapter) {
        const adapter = this.$options.adapterManager.create(
          getAdapterType(option.adapter, kpOption.adapter)
        );
        await adapter.init(
          this,
          option.adapter,
          kpOption.adapter,
          this.$options.config.adapter
        );
      }
    }

    // 销毁适配器
    _destroyAdapter() {
      if (this.adapter) {
        this.adapter.$destroy();
      }
    }

    // 创建适配器
    async createAdapter(options, kpOption, config = {}) {
      if (this.adapter) {
        console.warn('节点已包含适配器');
        return this.adapter
      } else {
        const adapter = this.$options.adapterManager.create(
          getAdapterType(options, kpOption)
        );

        await adapter.init(this, options, kpOption, config.adapter);

        if (config.select) {
          this.select(true);
        }

        return adapter
      }
    }

    // 创建编组
    async createGroup(comps = [], option = {}, config = {}) {
      const group = this.$options.manager.create('Group');
      return groupInit(group, [this, ...comps], option, config)
    }

    // 升级适配器
    async updateAdapter(options = {}, kpOption = {}, config = {}) {
      if (!this.adapter) {
        return console.error('节点没有适配器')
      } else {
        const oldJson = deepClone$1(this.adapter.toJSON());
        const oldData = {
          options: oldJson.options,
          kpOption: oldJson.kpOption,
          config: deepClone$1(this.$options.config),
        };
        this.$emit('updateAdapter', this);
        this.$root.$emit('updateAdapter', this);
        const type = this.adapter.$type;
        const json = deepClone$1(this.adapter.toJSON());
        this.adapter.$destroy();
        const adapter = this.$options.adapterManager.create(type);
        json.option.name = options.name;

        await adapter.init(this, json.option, json.kpOption, { merge: true });
        this.$emit('updatedAdapter', this);
        this.$root.$emit('updatedAdapter', this);

        this._update(
          'adapter',
          {
            options: this.$options.options,
            kpOption: this.$options.kpOption,
            config: this.$options.config,
          },
          oldData
        );
        return adapter
      }
    }

    // 进入图表预览
    enterInsidePreview() {
      this.$root.enterInsidePreview(this);
    }

    // 退出图表预览
    exitInsidePreview() {
      this.$root.exitInsidePreview();
    }

    _destroy() {
      this._destroyAnimator();
      super._destroy();
    }

    // 销毁节点
    _destroyComp() {
      this._destroyAdapter();
      super._destroyComp();
    }

    // 销毁动画
    _destroyAnimator() {
      if (this.animator && this.animator.destroy) {
        this.animator.destroy();
      }
    }

    // 导出定义文件
    toJSON() {
      const uiJSON = this.$uiComp.toJSON();
      const options = super.toJSON();

      options.option.animation = this.animation;
      options.option.penetrateOnplay = this.penetrateOnplay;
      options.option.style.rotate = this.rotate;
      options.option.style.userSelect = uiJSON.option.style.userSelect;
      delete options.children;

      if (this.adapter) {
        const adapterOptions = this.adapter.toJSON();
        options.kpOption.adapter = adapterOptions.kpOption;
        options.option.adapter = adapterOptions.option;
      }

      return options
    }

    get animator() {
      return animatorManager.getAnimator(this)
    }

    // ui适配器实例
    get $uiAdapter() {
      return this.$uiComp.adapter
    }

    // ui图表实例
    get $uiApp() {
      return this.$uiComp.app
    }

    // 最上层编组
    get $rootGroup() {
      return getParentGroups(this).shift()
    }

    // 所在图层
    get $parentLayer() {
      function getLayer(parent) {
        if (parent.type === 'Layer') {
          return parent
        }
        return getLayer(parent.$parent)
      }
      return getLayer(this.$parent)
    }
  }

  // 获取上层所有编组
  function getParentGroups(instance) {
    const result = [];

    function getParent(target) {
      if (target.type === 'Group') {
        result.push(target);
        getParent(target.$parent);
      }
    }

    getParent(instance.$parent);
    return result
  }

  // 处理数据
  function parseData(data, level) {
    let result = data;

    if (level !== '') {
      try {
        /*eslint-disable */
        const fn = new Function('return ' + level);
        result = fn()(data);
      }catch (event) {
        try {
          result = data[level];
        }catch (e) {
          result = {
            type: 'error',
            message: e
          };
        }

      }
    }
    return result
  }

  // 订阅管理
  class SubscriberWork {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 订阅列表
      this.subscriberList = null;
      // 数据
      this.data = null;
    }

    // 初始化
    init() {
      this.subscriberList = [];
      this.data = null;
      return this
    }

    /**
     * @desc 订阅
     * @param {Object} option 订阅者信息
     * @param {String} dataItem 订阅者
     */
    sub(option, dataItem) {
      this.subscriberList.push({ option, dataItem });
    }

    /**
     * 取消订阅
     * @param {*} dataItem
     */
    unsub(dataItem) {
      const index = this.subscriberList.findIndex(
        (item) => item.dataItem === dataItem
      );

      if (~index) {
        this.subscriberList.splice(index, 1);
      }
    }

    // 设置数据
    setData(data) {
      this.data = data;
      this.subscriberList.forEach((item) => {
        item.dataItem._setData(parseData(data, item.option.level));
      });
    }

    // 获取
    get() {
      return this.subscriberList.map((item) => item.option)
    }

    // 销毁
    destroy() {
      const subscriberList = this.subscriberList;
      for (const item of subscriberList) {
        item.dataItem.dataSource.setType('staticData');
        item.dataItem.refresh();
      }

      this.parent = null;
      this.subscriberList = null;
      this.data = null;
    }
  }

  // 获取当前时间

  function getDateNow() {
    return Date.now()
  }

  // 定时
  class TimerWork {
    constructor(parent, options = {}) {
      // 父
      this.parent = parent;
      // 数据管理
      this.dataManager = parent.dataManager;
      // 时间管理
      this.timerManager = parent.dataManager.timeManager;
      // 配置项
      this._options = options;
      // 默认配置项
      this.options = deepClone$1(options);
      // 是否启用
      this.close = null;
      // 时间
      this.time = null;
      // 当前时间
      this.now = null;
      // 是否运行
      this.running = null;

      this.init();
    }

    // 初始化
    init() {
      this.close = isEmpty$1(this.options.close) ? true : this.options.close;
      this.time = +this.options.time || 10;
      this.updateNow();
      this.timerManager.add(this);
      return this
    }

    // 开始
    start() {
      this.running = true;
    }

    // 停止
    stop() {
      this.running = false;
    }

    // 获取
    get() {
      return this.options
    }

    // 更新时间
    updateTime(time) {
      Object.assign(this.options, { time });
      this.init();
    }

    // 更新开关
    updateClose(close) {
      Object.assign(this.options, { close });
      this.init();
    }

    // 更新当前时间
    updateNow() {
      this.now = getDateNow();
      return this
    }

    // 运行
    run() {
      this.parent.refresh();
      return this
    }

    // 获取可刷新
    getRefreshable() {
      return (
        !this.close &&
        this.running &&
        this.parent.getRefreshable() &&
        this.now + this.time * 1000 <= getDateNow()
      )
    }

    // 获取配置信息
    toJSON() {
      return { time: this.time, close: this.close }
    }

    // 销毁
    destroy() {
      this.timerManager.remove(this);
      this.parent = null;
      this.dataManager = null;
      this.options = null;
      this.close = null;
      this.time = null;
      this.now = null;
      this.running = null;
    }
  }

  // 字段映射
  class FieldMapping {
    constructor(parent, options = {}) {
      // 父
      this.parent = parent;
      // 默认配置项
      this._options = options;
      // 配置项
      this.options = deepClone$1(options);
      // 列表
      this.fieldList = null;
      // 数据
      this.data = null;
    }

    // 初始化
    init() {
      const fields = this.options.fields || [];

      this.fieldList = fields.map(({ desc, name, value }) => {
        return {
          field: {
            desc,
            name,
            value: value || name,
          },
          status: false,
        }
      });
      return this
    }

    // 添加列表
    addFields(fields) {
      this.options.fields = fields;
      this.init();
    }

    // 更新
    update(name, value) {
      const field = this.fieldList.find((item) => item.field.name === name);

      if (field) {
        field.field.value = value === '' ? field.field.name : value;
      }
    }

    // 获取值
    get(name) {
      return this.fieldList.find((item) => item.field.name === name)
    }

    // 初始化状态
    _initFieldStatus() {
      this.fieldList.forEach((field) => {
        field.status = false;
      });
    }

    // 执行
    execute(_data) {
      const data = deepClone$1(_data);
      if (this.fieldList.length) {
        this._initFieldStatus();

        const type = _toString(data);

        switch (type) {
          case '[object Object]':
            this._execute(data);
            break
          case '[object Array]':
            data.forEach((item) => {
              this._execute(item);
            });
            break
        }
      }

      this.data = data;
      return data
    }

    // 执行
    _execute(data) {
      if (typeof data === 'object') {
        this.fieldList.forEach((field) => {
          if (Reflect.has(data, field.field.value)) {
            field.status = true;
            data[field.field.name] = data[field.field.value];
          }
        });
      }
      return data
    }

    // 获取
    toJSON() {
      return this.fieldList.map((item) => deepClone$1(item.field))
    }

    // 销毁
    destroy() {
      this.parent = null;
      this.options = null;
      this.fieldList = null;
      this.data = null;
    }
  }

  // 基础数据源
  class Base {
    constructor(parent, options) {
      // 父级
      this.parent = parent;
      // 数据管理器
      this.dataManager = parent.dataManager;
      // 类型
      this.type = null;
      // 根
      this.root = parent.root;
      // 适配器
      this.adapter = parent.adapter;
      // 默认配置
      this._options = options;
      // 配置
      this.options = deepClone$1(options);
      // 数据
      this.data = null;
      // 是否就绪
      this.isReady = null;
    }

    // 初始化
    init() {
      this.isReady = true;
      this.parent._updateReady();
    }

    // 获取返回默认值
    _getDefaultData() {
      return {
        status: 200,
        statusText: '',
        body: null,
        type: this.type,
      }
    }

    // 获取数据
    getData(cancel) {
      const data = this._getDefaultData();
      data.body = this.data;
      return data
    }

    // 设置
    set(options) {
      this.options = options;
    }

    // 获取
    get() {
      return this.options
    }

    // 销毁
    destroy() {
      this.parent = null;
      this.dataManager = null;
      this.root = null;
      this._options = null;
      this.options = null;
      this.data = null;
      this.isReady = null;
    }
  }

  // 静态数据
  class StaticData extends Base {
    constructor(parent, options) {
      super(parent, options);
      this.type = 'staticData';
    }

    // 初始化
    init() {
      this.data = this.options;
      this.isReady = true;
      this.parent._updateReady();
    }

    // 设置
    set(options) {
      super.set(options);
      this.data = options;
    }
  }

  class RestData extends Base {
    // 默认配置
    static defaultOptions = {
      url: '',
      header: null,
      level: null,
      body: null,
      method: 'POST',
      conditionType: 'condition',
      callbackArgs: [],
      code: 'return body',
    }

    constructor(parent, options) {
      super(parent, options);
      this.type = 'restData';
    }

    // 初始化
    init() {
      if (!this.options) {
        this.options = deepClone$1(RestData.defaultOptions);
      }
      this.isReady = true;
      this.parent._updateReady();
    }

    // 获取数据
    async getData(cancel) {
      const data = await this.dataManager.restDataManager.getData(
        this.parent.parent,
        { ...this.options, body: this._getBody() },
        cancel
      );
      this.data = data.data;
      const result = this._getDefaultData();
      result.status = data.status;
      result.body = this.data;
      return result
    }

    // 获取body
    _getBody() {
      const { body, code } = this.options;
      const callbackArgs = this.options.callbackArgs || [];
      const args = {};
      const filterArgs = this.dataManager.filterArgs;
      for (const arg of callbackArgs) {
        if (filterArgs[arg]) {
          args[arg] = filterArgs[arg];
        }
      }

      try {
        let result;
        if (body) {
          // eslint-disable-next-line no-new-func
          result = new Function('return ' + body)();
        }

        // eslint-disable-next-line no-new-func
        const params = new Function('body', 'callbackArgs', code)(result, args);
        return params && (Array.isArray(params) || isType$3(params, 'Object'))
          ? JSON.stringify(params)
          : params
      } catch (e) {
        console.error(e);
      }
    }
  }

  class SubscriberData extends Base {
    constructor(parent, options) {
      super(parent, options);
      // 订阅节点
      this.subscribeComp = null;
      this.type = 'subscriberData';
    }

    // 初始化
    init() {
      if (this.options) {
        const subscribeComp = this.root.$queryById(this.options.id);

        if (subscribeComp?.adapter.$complete) {
          this._sub(subscribeComp);
        } else {
          this.root.$on('adapterCompleted', this._subEvent, this);
        }
      } else {
        this.isReady = true;
        this.parent._updateReady();
      }
    }

    // 订阅事件
    _subEvent(adapter) {
      if (adapter.$parent.id === this.options.id) {
        this._sub(adapter.$parent);
      }
    }

    // 订阅
    _sub(subscribeComp) {
      this.subscribeComp = subscribeComp;
      this.subscribeComp.adapter.$data.subscriber.sub(
        this.options,
        this.parent.parent
      );
      this.isReady = true;
      this.parent._updateReady();
    }

    // 设置
    set(options = {}) {
      if (this.subscribeComp) {
        this.subscribeComp.adapter.$data.subscriber.unsub(this.parent.parent);
        this.subscribeComp = null;
        this.options = null;
      }
      super.set(options);
      this.init();
    }

    // 获取数据
    async getData(cancel) {
      const data = await this.subscribeComp.adapter.$data.getData(undefined, {
        getFn: (dataItem) => {
          cancel &&
            cancel(() => {
              dataItem.cancelFn();
            });
        },
      });

      if (data.status === 200) {
        this.data = parseData(data.body, this.options.level);
        const result = this._getDefaultData();
        result.status = 200;
        result.body = this.data;
        return result
      } else {
        return data
      }
    }

    // 销毁
    destroy() {
      this.root.$off('adapterCompleted', this._subEvent, this);
      this.subscribeComp?.adapter?.$data.subscriber?.unsub(this.parent.parent);
      this.subscribeComp = null;
      super.destroy();
    }
  }

  // 数据源管理
  class DataSource {
    constructor(parent, options = {}) {
      // 父
      this.parent = parent;
      // 根
      this.root = parent.root;
      // 数据管理
      this.dataManager = parent.dataManager;
      // 适配器
      this.adapter = parent.parent;
      // 配置项
      this.options = options;
      // 数据源类型
      this.dataType = options.dataType || 'staticData';
      // 数据源集合
      this.typeMap = {
        staticData: new StaticData(this, options.source?.staticData),
        restData: new RestData(this, options.source?.restData),
        subscribeData: new SubscriberData(this, options.subscribeData),
      };
    }

    // 初始化
    init() {
      this.typeMap.staticData.init();
      if (this.dataType !== 'staticData') {
        this.typeMap[this.dataType].init();
      }

      return this
    }

    // 获取就绪状态
    getReady() {
      const typeMap = this.typeMap;
      if (this.dataType !== 'staticData') {
        return typeMap.staticData.isReady && typeMap[this.dataType].isReady
      }
      return typeMap.staticData.isReady
    }

    // 更新就绪状态
    _updateReady() {
      if (this.getReady()) {
        this.adapter.$emit('dataSourceReady', this);
        this.root.$emit('dataSourceReady', this);
      }
    }

    // 设置类型
    setType(type) {
      this.dataType = type;
      return this
    }

    // 设置属性
    set(type, options) {
      this.setType(type);
      this.typeMap[this.dataType]?.set(options);
      this.parent.refresh();
    }

    // 获取
    get(type) {
      return this.typeMap[type]?.get()
    }

    // 获取数据
    async getData(cancel) {
      return this.typeMap[this.dataType].getData(cancel)
    }

    // 获取指定类型数据
    async getDataByType(type = this.dataType, cancel = null) {
      return this.typeMap[type].getData(cancel)
    }

    // 获取配置信息
    toJSON() {
      const typeMap = this.typeMap;
      const result = {};

      for (const key in typeMap) {
        result[key] = deepClone$1(typeMap[key].get());
      }

      return result
    }

    // 销毁集合
    _destroyMap() {
      const typeMap = this.typeMap;

      for (const key in typeMap) {
        typeMap[key].destroy();
      }
    }

    // 销毁
    destroy() {
      this._destroyMap();

      this.parent = null;
      this.root = null;
      this.dataManager = null;
      this.adapter = null;
      this.options = null;
      this.dataType = null;
      this.typeMap = null;
    }
  }

  // 过滤器
  class FilterWork {
    constructor(parent, options = {}) {
      // 父
      this.parent = parent;
      // 根
      this.root = parent.root;
      // 数据管理器
      this.dataManager = parent.dataManager;
      // 数据管理器
      this.filterManager = parent.dataManager.filterManager;
      // 配置项
      this.options = options;
      // 启用状态
      this.enabled = null;
      // 过滤器列表
      this.filterList = null;
    }

    // 初始化
    init() {
      this.enabled = !!this.options.enabled;
      const list = this.options.list || [];

      this.filterList = list.map((item) => {
        const filter = this.filterManager.getFilterByName(item.name);
        filter.addUse(this);
        return {
          enabled: item.enabled,
          filter,
        }
      });
      return this
    }

    // 添加使用记录，开始位置默认表示最后
    addUse(filter, enabled = false, startIndex = null) {
      filter.addUse(this);

      if (isNumber$1(startIndex)) {
        this.filterList.splice(startIndex, 0, {
          enabled,
          filter,
        });
      } else {
        this.filterList.push({
          enabled,
          filter,
        });
      }

      if (enabled) {
        this._updateMainEnabled(enabled);
      }

      return true
    }

    // 添加
    add(filter, enabled, startIndex) {
      if (!this.filterList.find((filterItem) => filterItem.filter === filter)) {
        this.addUse(filter, enabled, startIndex);
      }
    }

    // 获取总开关
    getMainEnabled() {
      return this.enabled
    }

    // 执行
    execute(data) {
      let _data = deepClone$1(data);

      if (this.enabled) {
        this.filterList.forEach((filterItem) => {
          if (filterItem.enabled) {
            _data = filterItem.filter.execute(_data);
          }
        });
      }

      return _data
    }

    // 获取过滤器
    getFilterItem(filter) {
      return this.filterList.find((filterItem) => filterItem.filter === filter)
    }

    // 查找过滤器索引
    getFilterItemIndex(filterItem) {
      return (
        filterItem && this.filterList.findIndex((item) => item === filterItem)
      )
    }

    // 获取过滤器
    getFilterItemByName(name) {
      return this.filterList.find((filterItem) => filterItem.filter.name === name)
    }

    // 更新总状态
    updateMainEnabled(enabled) {
      this._updateMainEnabled(enabled);
      return true
    }

    _updateMainEnabled(enabled) {
      this.enabled = enabled;
    }

    // 更新状态
    updateEnabled(filterItem, enabled) {
      filterItem.enabled = enabled;

      if (enabled) {
        this._updateMainEnabled(enabled);
      }

      return true
    }

    // 更新名称
    updateName(filter, name) {
      const filter1 = this.filterManager.getFilterByName(name);

      if (!name || filter1 || !filter) {
        return false
      }

      filter.filter.updateName(name);
      return true
    }

    // 更新内容
    updateData(filter, code, callbackArgs = []) {
      filter.filter.updateData(code, callbackArgs);
      return true
    }

    // 移动
    moveTo(filterItem, target, type) {
      if (filterItem && target && type) {
        if (type === 'before') {
          return this._moveTo(filterItem, target, 0)
        } else if (type === 'after') {
          return this._moveTo(filterItem, target, 1)
        }
      }
    }

    // 移动过滤器
    _moveTo(source, target, number) {
      const sourceIndex = this.getFilterItemIndex(source);
      const targetIndex = this.getFilterItemIndex(target);

      if (~sourceIndex && ~targetIndex) {
        const item = this.filterList.splice(sourceIndex, 1)[0];
        this.filterList.splice(targetIndex + number, 0, item);
      }
    }

    // 获取配置信息
    toJSON() {
      return {
        enabled: this.enabled,
        list: this.filterList.map((item) => ({
          enabled: item.enabled,
          name: item.filter.name,
        })),
      }
    }

    // 删除
    remove(filter) {
      const index = this.filterList.findIndex((item) => item.filter === filter);

      if (~index) {
        const delFilterItem = this.filterList.splice(index, 1)[0];
        delFilterItem.filter.removeUse(this);
        return true
      }
      return false
    }

    // 清空
    clear() {
      const filterList = this.filterList;

      filterList.forEach((filterItem) => {
        filterItem.filter.removeUse(this);
      });
      this.filterList = [];
      this.enabled && this.parent.refresh();
    }

    // 销毁
    destroy() {
      this.enabled = null;

      this.clear();

      this.filterList = null;
      this.options = null;
      this.filterManager = null;
      this.dataManager = null;
      this.root = null;
      this.parent = null;
    }
  }

  class DataItem {
    constructor() {
      // 父
      this.parent = null;
      // 根
      this.root = null;
      // 数据管理
      this.dataManager = null;
      // 配置项
      this.options = null;
      // 运行状态
      this.starting = null;
      // 首次加载
      this.firstLoad = null;
      // 加载数据方法
      this.getDataFn = null;
      // 中断方法
      this.cancelFn = null;
      // 源数据
      this.sourceData = null;
      // 过滤器前数据
      this.filterBeforeData = null;
      // 输出数据
      this.overData = null;
      // 空数据
      this.emptyData = null;
      // 状态
      this.status = null;
      // 开始销毁状态
      this.beforeDestroyStatus = null;
      // 销毁状态
      this.destroyStatus = null;
      // 字段映射
      this.fieldMapping = null;
      // 数据源
      this.dataSource = null;
      // 订阅
      this.subscriber = null;
      // 过滤器
      this.filterWork = null;
      // 定时器
      this.timerItem = null;
      // 节流模式
      this.throttlingMode = null;
    }

    // 初始化开始
    _initBegin(parent, options) {
      this.parent = parent;
      this.root = parent.$root;
      this.dataManager = parent.$dataManager;
      this.options = options;
      this.starting = false;
      this.firstLoad = false;
      this.dataManager._add(this);
      this.dataSource = new DataSource(this, this.options).init();
      this.subscriber = new SubscriberWork(this).init();
      this.fieldMapping = new FieldMapping(this, {
        fields: this.options.fieldMapping,
      }).init();
      this.timerItem = new TimerWork(this, this.options).init();
      this.filterWork = new FilterWork(this, this.options.filter).init();
    }

    // 初始化
    init(parent, options = {}) {
      if (this.status) {
        console.error('已被初始化过');
      } else {
        this.beforeDestroyStatus = null;
        this.destroyStatus = null;
        this.status = true;
        this._initBegin(parent, options);

        this.emptyData = isEmpty$1(this.dataSource.get('staticData'));

        this.throttlingMode = this.parent.$dataAdapter
          ? !!this.parent?.opts?.dataThrottling
          : true;

        if (this.dataSource.getReady()) {
          this.start();
        } else {
          // 等待数据源就绪开始数据逻辑
          this.parent.$on('dataSourceReady', this.start, this);
        }
      }
    }

    // 设置配置
    set(type, option) {
      this.dataSource.set(type, option);
    }

    // 获取配置
    get(type) {
      return this.dataSource.get(type)
    }

    _getRealVisible() {
      return this.parent.$dataAdapter
        ? this.parent.$parent.$dataAdapterRealVisible
        : this.parent.$parent.$realVisible
    }

    // 获取可刷新状态
    getRefreshable() {
      return this.starting && this.throttlingMode ? this._getRealVisible() : true
    }

    // 重新获取数据
    async refresh() {
      if (this.starting) {
        if (this.dataSource.dataType === 'subscribeData') {
          return this._setData(deepClone$1(this.sourceData))
        }

        return this.getData()
      }
    }

    // 获取数据
    async getData(type, option = {}) {
      if (this.cancelFn) {
        this.cancelFn();
        this.cancelFn = null;
      }

      // 需要等待上次请求结束
      if (this.getDataFn) {
        await this.getDataFn;
      }

      this.getDataFn = this.dataSource.getDataByType(type, (cancelHandler) => {
        this.cancelFn = cancelHandler;
      });

      option.getFn && option.getFn(this);

      const data = await this.getDataFn;
      this.cancelFn = null;

      // 销毁时无操作
      if (this.beforeDestroyStatus || this.destroyStatus) {
        return
      }

      if (data.status === 200) {
        this._setData(data.body);
        this.timerItem.updateNow();
      }
      return data
    }

    // 处理数据
    _execute(_data) {
      this.sourceData = deepClone$1(_data);
      let data = deepClone$1(_data);
      // 字段映射
      data = this.fieldMapping.execute(data);
      // 过滤器前数据
      this.filterBeforeData = deepClone$1(data);
      // 过滤器处理数据
      data = this.filterWork.execute(data);
      this.overData = data;

      return data
    }

    // 设置数据
    _setData(_data) {
      const data = this._execute(_data);
      this._setAppData(data);

      this.parent.$emit('dataChange', data);
      this.root.$emit('dataChange', this.parent.$parent, data);

      this.subscriber.setData(data);
      return data
    }

    // 设置图表数据
    _setAppData(data) {
      try {
        this.parent.$uiApp.setData(deepClone$1(data));
      } catch (e) {
        console.warn(this.parent.$parent.id + ' 这个图表设置数据失败', e);
      }
    }

    // 首次开始
    async _firstStart() {
      const dataType = this.dataSource.dataType;
      this.firstLoad = true;
      // 非静态数据类型源首次先加载静态数据
      await this.getData('staticData');
      // 刷新非订阅类型数据
      if (!['subscribeData', 'staticData'].includes(dataType)) {
        await this.getData();
      }
    }

    // 开始
    start() {
      if (
        this.dataManager.started &&
        this.parent.$complete &&
        !this.starting &&
        this.dataSource.getReady()
      ) {
        this.starting = true;

        if (!this.firstLoad) {
          this._firstStart();
        } else {
          // 刷新非订阅类型数据
          if (!['subscribeData'].includes(this.dataSource.dataType)) {
            this.refresh();
          }
        }

        this.timerItem.start();
      }
      return this
    }

    // 停止
    stop() {
      if (!this.starting) {
        console.warn('已经停止了');
      } else {
        this.starting = false;
        this.timerItem.stop();
      }
      return this
    }

    // 获取全部配置信息
    toJSON() {
      const source = this.dataSource.toJSON();
      const dataType = this.dataSource.dataType;
      const fieldMapping = this.fieldMapping.toJSON();
      const { close, time } = this.timerItem.toJSON();
      const filter = this.filterWork.toJSON();
      const subscribeData = source.subscribeData;
      delete source.subscribeData;

      return {
        close,
        time,
        dataType,
        source,
        subscribeData,
        fieldMapping,
        filter,
      }
    }

    // 销毁
    destroy() {
      this.parent.$off('dataSourceReady', this.start, this);
      this.status = false;
      this.beforeDestroyStatus = true;
      this.dataManager.remove(this);
      this.subscriber.destroy();
      this.dataSource.destroy();
      this.timerItem.destroy();
      this.fieldMapping.destroy();
      this.filterWork.destroy();

      this.beforeDestroyStatus = false;
      this.destroyStatus = true;

      this.throttlingMode = null;
      this.timerItem = null;
      this.filterWork = null;
      this.subscriber = null;
      this.dataSource = null;
      this.fieldMapping = null;
      this.emptyData = null;
      this.overData = null;
      this.filterBeforeData = null;
      this.sourceData = null;
      this.getDataFn = null;
      this.firstLoad = null;
      this.starting = null;
      this.options = null;
      this.dataManager = null;
      this.root = null;
      this.parent = null;
      return this
    }
  }

  // 获取图表实例的opts
  function getOpts(app) {
    return app.type === 'echarts' ? app.config : app.opts
  }

  // 基础适配器
  let BaseAdapter$1 = class BaseAdapter {
    constructor() {
      this.$options = {
        // 全局配置
        rootConfig: null,
        name: null,
        options: null,
        _kpOption: null,
        kpOption: null,
        config: null,
        parent: null,
        root: null,
        adapterManager: null,
        dataManager: null,
        attrs: {},
        status: null,
      };
      this.$parent = null;
      this.$root = null;
      this.$type = null;
      this.$complete = null;
      this.$dataAdapter = null;
      this.$dataManager = null;
      // 等待完成任务
      this._waitComplete = null;
      // 等待完成任务
      this._waitResolve = null;
      // 数据
      this.$data = null;
      // 判断适配器
      this.isAdapter = true;

      // 放到data前面，加入双向绑定
      this._beforeInit();
    }

    // 注册属性
    _registerAttr(
      name,
      value,
      initFn = null,
      getFn = null,
      setFn = null,
      option = {}
    ) {
      if (this.$options.attrs[name]) {
        console.warn(`${name} 已被注册`);
      } else {
        const attr = {
          name,
          value,
          init: initFn,
          get: getFn,
          set: setFn,
          option,
        };

        this.$options.attrs[name] = attr;
        Object.defineProperty(this, name, {
          enumerable: true,
          configurable: true,
          get() {
            return attr.get ? attr.get() : attr.value
          },
          set(v) {
            if (!attr.set) {
              return
            }

            const oldValue = this[name];
            // 值相同返回
            if (oldValue === v) {
              return
            }

            this._updateAttr(attr, v, deepClone$1(oldValue));
          },
        });
      }

      return this
    }

    // 移除属性
    _removeAttr(name) {
      delete this.$options.attrs[name];
      return this
    }

    // 更新属性
    _updateAttr(attr, value, oldValue) {
      attr.value = attr.set(value);
      this._update(attr.name, value, oldValue);
      return this
    }

    // 更新
    _update(name, value, oldValue) {
      this.$emit('adapterUpdate', this, name, value, oldValue);
      this.$root.$emit('adapterUpdate', this, name, value, oldValue);
      this.$emit('update', this.$parent, name, value, oldValue);
      this.$root.$emit('update', this.$parent, name, value, oldValue);
      return this
    }

    // 初始化前
    _beforeInit() {
      initAttrs(this);
      return this
    }

    // 初始化开始前
    _initBegin(parent, options, kpOption, config) {
      this.$options.rootConfig = parent.$options.rootConfig;
      this.$options.status = true;
      this.$options.name = options.name;
      this.$options.options = options;
      this.$options._kpOption = kpOption;
      this.$options.kpOption = kpOption;
      this.$options.config = config;
      this.$options.parent = parent;
      this.$options.root = parent.$root;
      this.$options.adapterManager = parent.$options.adapterManager;
      this.$options.dataManager = parent.$options.dataManager;
      this.$parent = parent;
      this.$root = parent.$root;
      this.$type = parent.$options.adapterManager.getType(this);
      this.$dataManager = parent.$options.dataManager;
      this.$data = new DataItem();
      return this
    }

    // 完成
    async _complete() {
      this.$parent.adapter = this;
      await this.$parent.$ui.nextTick();
      this._initComp();
      await this.waitComplete();
      this._completed();
      return this
    }

    // 初始化配置
    async _initConfig() {
      return this
    }

    // 初始化结束
    async _initEnd() {
      try {
        this.$uiAdapter.setOption(this.opts);
      } catch (e) {
        console.warn(this.$parent.id + ' 这个图表设置样式失败', e);
      }

      await this._initConfig();
      return this
    }

    // 初始化
    async init(parent, options = {}, kpOption = {}, config = {}) {
      if (this.$options.status) {
        console.error('已被初始化过');
      } else {
        this._initBegin(parent, options, kpOption, config);
        this.$emit('beforeCreateAdapter', this);
        this.$root.$emit('beforeCreateAdapter', this);
        this.$emit('beforeCreateAdapter:' + this.$type, this);
        this.$root.$emit('beforeCreateAdapter:' + this.$type, this);
        await this._complete();
        this.$emit('adapterCompleted', this);
        this.$root.$emit('adapterCompleted', this);
        this.$emit('adapterCompleted:' + this.$type, this);
        this.$root.$emit('adapterCompleted:' + this.$type, this);
        await this._initEnd();
      }
      return this
    }

    // 初始化节点
    _initComp() {
      if (!this.$uiAdapter) {
        return new UI.Adapter(this.$uiComp, deepClone$1(this.$options.options))
      }
      return this
    }

    // 等待完成
    async waitComplete() {
      if (this._waitComplete) {
        return this._waitComplete
      }

      if (this.$uiAdapter?.complete) {
        return Promise.resolve(this)
      }

      const _waitComplete1 = (this._waitComplete = new Promise((resolve) => {
        this._waitResolve = resolve;
        this.$root.$on('hook:componentComplete', this._componentComplete, this);
      }));

      this._waitComplete = null;
      return _waitComplete1
    }

    // 图表加载完成
    _componentComplete(comp) {
      if (comp === this.$parent) {
        const _waitResolve = this._waitResolve;
        this._waitResolve = null;
        return _waitResolve(this)
      }
    }

    // 加载完成
    _completed() {
      this.$complete = true;
      this.$updateAttrs();

      const data = this.$options.kpOption.kpData;
      const options = this.$options.options;

      if (
        data?.source &&
        !Reflect.has(data.source, 'staticData') &&
        Reflect.has(options, 'data')
      ) {
        data.source.staticData = options.data;
      }

      this.$data.init(this, data);

      return this
    }

    // 设置属性
    setOption(opts) {
      this.opts = opts;
      return this
    }

    // 更新字段映射
    updateDataField(name, value) {
      const oldValue = this.$data.fieldMapping.get(name);
      this.$data.fieldMapping.update(name, value);
      this._update('data:field', { name, value }, { name, value: oldValue });
      return this
    }

    // 更新数据定时器开关
    updateDataClose(value) {
      const oldValue = this.$data.timerItem.close;
      this.$data.timerItem.updateClose(value);
      this._update('data:timerClose', value, oldValue);
      return this
    }

    // 更新数据定时器时间
    updateDataTime(value) {
      const oldValue = this.$data.timerItem.time;
      this.$data.timerItem.updateTime(value);
      this._update('data:timerTime', value, oldValue);
      return this
    }

    // 更新源数据
    updateSourceData(type, data) {
      const oldType = this.$data.dataSource.dataType;
      const oldValue = this.$data.dataSource.get(oldType);
      this.$data.dataSource.set(type, data);
      this._update('data:source', { type, data }, { type: oldType, oldValue });
      return this
    }

    // 更新过滤器总开关
    updateFilterMainEnable(value) {
      const oldValue = this.$data.filterWork.getMainEnabled();
      this.$data.filterWork.updateMainEnabled(value);
      this.$data.refresh();
      this._update('data:filterMainEnable', value, oldValue);
      return this
    }

    // 更新过滤器状态
    updateFilterEnabled(filterItem, enabled) {
      const oldValue = filterItem.enabled;
      this.$data.filterWork.updateEnabled(filterItem, enabled);
      this.$data.refresh();
      this._update(
        'data:filterEnable',
        { filterItem, enabled },
        { filterItem, enabled: oldValue }
      );
      return this
    }

    // 更新过滤器名称
    updateFilterName(filter, name) {
      const oldValue = filter.filter.name;
      this.$data.filterWork.updateName(filter, name);
      this._update(
        'data:filterName',
        { filter, name },
        { filter, name: oldValue }
      );
      return this
    }

    // 更新过滤器数据
    updateFilterData(filter, code, callbackArgs) {
      const oldCode = filter.filter.code;
      const oldCallbackArgs = deepClone$1(filter.filter.callbackArgs);
      this.$data.filterWork.updateData(filter, code, callbackArgs);
      this.$data.refresh();
      this._update(
        'data:filterData',
        { filter, code, callbackArgs },
        { filter, code: oldCode, callbackArgs: oldCallbackArgs }
      );
      return this
    }

    // 添加过滤器
    addFilter(options) {
      const filter = this.$data.dataManager.filterManager.add(options);
      return this.$data.filterWork.add(filter)
    }

    // 删除过滤器
    removeFilter(filter) {
      this.$data.dataManager.filterManager.remove(filter);
      if (filter.enabled) {
        this.$data.refresh();
      }

      return this
    }

    // 使用过滤器
    useFilter(filter, enabled) {
      this.$data.filterWork.addUse(filter, enabled);
      this.$data.refresh();
      this._update('data:filterUse', { filter, enabled }, null);
      return this
    }

    // 移除使用过滤器
    unUseFilter(filter) {
      this.$data.filterWork.remove(filter);
      this._update('data:filterUnUse', null, { filter });
      return this
    }

    // 移动过滤器
    moveFilter(sourceFilterItem, targetFilterItem, type) {
      this.$data.filterWork.moveTo(sourceFilterItem, targetFilterItem, type);
      this.$data.refresh();
      this._update(
        'data:filterMoveTo',
        { sourceFilterItem, targetFilterItem, type },
        null
      );
      return this
    }

    // 导出定义文件
    _toJSON() {
      const { type, name, opts } = this;
      const data = deepClone$1(this.$data.dataSource.get('staticData'));
      const kpData = this.$data.toJSON();
      delete kpData.source.staticData;

      return {
        option: { type, name, opts: deepClone$1(opts), data },
        kpOption: {
          kpData,
        },
      }
    }

    // 导出定义文件
    toJSON() {
      const json = this._toJSON();
      Object.values(this.$options.attrs).forEach((attr) => {
        if (attr.option.toJSONFn) {
          attr.option.toJSONFn(json);
        }
      });
      return json
    }

    // 销毁开始
    _destroyBegin() {
      this.$options.status = false;
      return this
    }

    // 销毁
    _destroy() {
      this.$root.$off('hook:componentComplete', this._componentComplete, this);
      this.$uiAdapter?.destroy();
      this.$data.destroy();
      this.$parent.adapter = null;
      return this
    }

    // 销毁结束
    _destroyEnd() {
      this.$data = null;
      this._waitResolve = null;
      this._waitComplete = null;
      this.$dataManager = null;
      this.$dataAdapter = null;
      this.$complete = null;
      this.$type = null;
      this.$root = null;
      this.$parent = null;
      this.$options.name = null;
      this.$options.options = null;
      this.$options._kpOption = null;
      this.$options.kpOption = null;
      this.$options.config = null;
      this.$options.parent = null;
      this.$options.root = null;
      this.$options.adapterManager = null;
      this.$options.dataManager = null;

      return this
    }

    // 销毁
    $destroy() {
      this._destroyBegin();
      this.$emit('beforeDestroyAdapter', this);
      this.$root.$emit('beforeDestroyAdapter', this);
      this.$emit('beforeDestroyAdapter:' + this.$type, this);
      this.$root.$emit('beforeDestroyAdapter:' + this.$type, this);
      this._destroy();
      this.$emit('destroyedAdapter', this);
      this.$root.$emit('destroyedAdapter', this);
      this.$emit('destroyedAdapter:' + this.$type, this);
      this.$root.$emit('destroyedAdapter:' + this.$type, this);
      this._destroyEnd();
      return this
    }

    // 更新所有属性
    $updateAttrs() {
      Object.keys(this.$options.attrs).forEach((attr) => {
        this.$updateAttr(attr);
      });
      return this
    }

    // 更新单个属性
    $updateAttr(name) {
      const attr = this.$options.attrs[name];

      if (attr && attr.init) {
        attr.value = attr.init();
      }
      return this
    }

    // 绑定dom事件
    $addEventListener(name, fn, capture) {
      this.$parent.$addEventListener(name, fn, capture);
      return this
    }

    // 解绑dom事件
    $removeEventListener(name, fn, capture) {
      this.$parent.$removeEventListener(name, fn, capture);
      return this
    }

    // 绑定事件
    $on(name, fn, context) {
      this.$parent.$on(name, fn, context);
      return this
    }

    // 绑定一次事件
    $once(name, fn, context) {
      this.$parent.$once(name, fn, context);
      return this
    }

    // 解绑事件
    $off(name, fn, context) {
      this.$parent.$off(name, fn, context);
      return this
    }

    // 触发事件
    $emit(name, ...args) {
      this.$parent.$emit(name, ...args);
      return this
    }

    // 获取canvas
    get $canvas() {
      return this.$parent.$canvas
    }

    // 获取dom节点
    get $el() {
      return this.$parent.$el
    }

    // ui适配器实例
    get $uiAdapter() {
      return this.$uiComp.adapter
    }

    // ui图表实例
    get $uiApp() {
      return this.$uiAdapter.componentInstance
    }

    // ui实例
    get $uiComp() {
      return this.$parent.$uiComp
    }
  };

  // 初始化属性
  function initAttrs(instance) {
    instance
      ._registerAttr('name', null, function () {
        return instance.$options.options.name
      })
      ._registerAttr(
        'opts',
        null,
        function () {
          let opts;
          if (!isEmpty$1(instance.$options.options.opts)) {
            opts = deepClone$1(instance.$options.options.opts);
          } else {
            opts = deepClone$1(getOpts(instance.$uiApp));
          }
          return opts
        },
        null,
        function (value) {
          try {
            instance.$uiAdapter.setOption(deepClone$1(value));
          } catch (e) {
            console.warn(instance.$parent.id + ' 这个图表设置样式失败', e);
          }

          return value
        }
      )
      ._registerAttr('type', null, function () {
        return instance.$uiAdapter.type
      })
      ._registerAttr('option', null, function () {
        return instance.$options.options.option
      });
  }

  // 移除属性
  // function removeDefineAttrs(instance) {
  //   Object.keys(instance.$options.attrs).forEach((attr) => {
  //     delete instance[attr]
  //   })
  // }

  // conch适配器
  class ConchAdapter extends BaseAdapter$1 {
    // 初始化前
    _beforeInit() {
      super._beforeInit();

      // 属性面板配置项
      this.propertyPanel = null;
      // conch适配器
      this.isConch = true;

      const self = this;
      self
        ._registerAttr(
          'events',
          null,
          function () {
            return deepClone$1(self.$options.options.events || [])
          },
          null,
          function (value) {
            return value
          },
          function (json) {
            json.option.events = deepClone$1(self.events);
            return json
          }
        )
        ._registerAttr(
          'theme',
          null,
          function () {
            let theme = null;
            if (self.$options.options.theme) {
              theme = deepClone$1(self.$options.options.theme);
            } else if (self.$uiApp.theme) {
              theme = deepClone$1(self.$uiApp.theme);
            }
            return theme
          },
          null,
          function (value) {
            self.$uiApp.setTheme(deepClone$1(value));
            return value
          }
        )
        ._registerAttr(
          'padding',
          null,
          function () {
            let padding = null;
            if (self.$options.options.padding) {
              padding = deepClone$1(self.$options.options.padding);
            } else if (self.$uiApp.padding) {
              padding = deepClone$1(self.$uiApp.padding);
            }
            return padding
          },
          null,
          function (value) {
            self.$uiApp.setPadding(deepClone$1(value));
            return value
          }
        );
      return this
    }

    // 加载完成
    _completed() {
      // 在数据初始化之前
      this.$dataAdapter = this.$uiApp.tag === 'seabedData';
      this.propertyPanel = this.$uiApp._options.propertyPanel;

      const kpData = this.$options.kpOption.kpData;
      // 没有数据设置默认数据
      if (kpData) {
        // todo 需要处理其他差异
        // 合并
        if (this.$options.config.merge) {
          kpData.fieldMapping = mergeDataFields(
            kpData.fieldMapping,
            deepClone$1(this.$uiApp._options.fields)
          );
        }
      } else {
        this.$options.kpOption.kpData = {
          close: true,
          time: 10,
          dataType: 'staticData',
          source: {
            staticData: deepClone$1(this.$uiApp.data),
            restData: {
              url: '',
              header: null,
              level: null,
              body: null,
              method: 'POST',
              conditionType: 'condition',
              callbackArgs: [],
              code: 'return body',
            },
          },
          subscribeData: null,
          fieldMapping: deepClone$1(this.$uiApp._options.fields),
          filter: {
            enabled: false,
            list: [],
          },
        };
      }

      super._completed();

      return this
    }

    // 初始化结束
    async _initEnd() {
      await super._initEnd();

      if (this.theme) {
        try {
          this.$uiApp.setTheme(this.theme);
        } catch (e) {
          console.warn(this.$parent.id + ' 这个图表设置颜色方案失败', e);
        }
      }
      if (this.padding) {
        try {
          this.$uiApp.setPadding(this.padding);
        } catch (e) {
          console.warn(this.$parent.id + ' 这个图表设置边距失败', e);
        }
      }

      return this
    }

    // 初始化配置
    async _initConfig() {
      const config = this.$options.config || {};

      if (config.suCaiObj) {
        const { type, url } = config.suCaiObj;

        const app = this.$uiApp;
        switch (type) {
          case 'shape':
            await app.init({ basic: url });
            break
          case 'image':
            await app.init({ image: url });
            break
          case 'custom':
            await app.init({ shapeType: 'custom', custom: url });
            break
          case 'audio':
          case 'video':
            await app.setOption(
              Object.assign(deepClone$1(app.opts), { [type]: url })
            );
            break
        }

        // 会多触发一次设置属性操作
        this.opts = deepClone$1(app.opts);
      }
    }

    // 设置颜色方案
    setTheme(theme) {
      this.theme = theme;
    }

    // 设置边距
    setPadding(padding) {
      this.padding = padding;
    }

    // 导出定义文件
    _toJSON() {
      const json = super._toJSON();
      const result = {
        option: deepClone$1(this.option),
        theme: deepClone$1(this.theme),
        padding: deepClone$1(this.padding),
        // events: deepClone(this.events),
      };

      Object.assign(json.option, result);

      return json
    }

    // 销毁
    $destroy() {
      super.$destroy();

      this.propertyPanel = null;
    }
  }

  // Udatav适配器
  let UdatavAdapter$1 = class UdatavAdapter extends BaseAdapter$1 {
    // 导出定义文件
    _toJSON() {
      const json = super._toJSON();
      json.option.options = this.$options.options?.options;
      return json
    }
  };

  // thingJS适配器
  class ThingJSAdapter extends ConchAdapter {
    // 初始化前
    _beforeInit() {
      super._beforeInit();

      // 孪生类型
      this.thingType = null;
      // 孪生属性
      this.thingOpts = null;
      // 孪生编号
      this.thingId = null;
      // 是否孪生
      this.isThing = true;
      // 孪生加载完成
      this.$twinComplete = false;
      return this
    }

    // 初始化开始前
    _initBegin(parent, options, kpOption, config) {
      super._initBegin(parent, options, kpOption, config);

      this.thingType = kpOption.thingType;
      this.thingOpts = deepClone$1(kpOption.thingOpts);
      this.thingId = kpOption.thingId;

      return this
    }

    // 初始化结束
    async _initEnd() {
      await super._initEnd();
      this.$emit('createdTwin', this);
      this.$emit('createdTwin:' + this.$type, this);
      this.$root.$emit('createdTwin', this);
      this.$root.$emit('createdTwin:' + this.$type, this);
      this._initTwinApp();
      this.$root.$on('resize', this._initStyle, this);
      this.$root.$on('beforeToImage', this._beforeToImage, this);
      this.$root.$on('toImaged', this._toImaged, this);

      return this
    }

    async _initTwinApp() {
      if (!this.$options.rootConfig.twin.disable) {
        await this._initApp();
      } else {
        console.warn('孪生功能已禁用');
      }
    }

    // 获取孪生配置
    _getTwinConfig(options) {
      const configFormatter = this.$options.rootConfig.twin.configFormatter;

      if (configFormatter) {
        return configFormatter(options, this)
      }
      return options
    }

    // 初始化app
    async _initApp() {
      return this
    }

    // 孪生加载完成
    _twinCompleted() {
      this._initStyle();

      this.$twinComplete = true;

      this.$emit('completedTwin', this);
      this.$emit('completedTwin:' + this.$type, this);
      this.$root.$emit('completedTwin', this);
      this.$root.$emit('completedTwin:' + this.$type, this);
    }

    // 刷新孪生布局
    _initStyle() {
      if (typeof this.twinInstance?._initStyle === 'function') {
        this.twinInstance._initStyle();
      }
    }

    // 刷新
    async refresh() {
      this._destroyTwin();
      await this._initTwinApp();
    }

    // 重置
    reset() {
      return this
    }

    // 飞行
    fly(uuid, position, target) {
      const app = this.twinInstance;
      const tar = app.query('##' + uuid)[0];

      if (!tar) {
        console.error('没有找到这个目标，uuid为：' + uuid);
        return false
      }

      // 先暂停当前动画
      app.camera.stopFlying();

      app.pauseEvent(
        window.THING.EventType.EnterLevel,
        '*',
        window.THING.EventTag.LevelFly
      );

      app.one(
        window.THING.EventType.EnterLevel,
        '.' + tar.type,
        (ev) => {
          const object = ev.object;

          app.camera.flyTo({
            object: object,
            position,
            target,
            time: 1000,
            complete: function () {
              console.log('飞行结束');
            },
          });

          app.resumeEvent(
            window.THING.EventType.EnterLevel,
            '*',
            window.THING.EventTag.LevelFly
          );
        },
        'customLevelFly'
      );

      app.level.change(tar);
      return true
    }

    // 地球飞行
    earthFly(position, target) {
      const app = this.twinInstance;
      // 先暂停当前动画
      app.camera.stopFlying();

      const options = {
        position,
        target,
        time: 1000,
        complete: function () {
          console.log('飞行结束');
        },
      };

      if (app.camera.earthFlyTo) {
        app.camera.earthFlyTo(options);
      } else {
        app.camera.flyTo(options);
      }

      return true
    }

    // 截图前
    _beforeToImage() {
      this.$uiComp.maskEl.style.backgroundImage = `url(${this.$uiApp.toImage()})`;
    }

    // 截图后
    _toImaged() {
      this.$uiComp.maskEl.style.backgroundImage = '';
    }

    // 导出定义文件
    _toJSON() {
      const json = super._toJSON();
      const result = {
        thingType: this.thingType,
        thingOpts: deepClone$1(this.thingOpts),
        thingId: this.thingId,
        isThing: this.isThing,
      };

      Object.assign(json.kpOption, result);

      return json
    }

    // 销毁孪生
    _destroyTwin() {
      try {
        this.$uiApp.destroyCampus();
      } catch (e) {
        console.error('孪生销毁失败', e);
      }
    }

    // 开始销毁
    _destroyBegin() {
      super._destroyBegin();

      this.$emit('beforeDestroyTwin', this);
      this.$emit('beforeDestroyTwin:' + this.$type, this);
      this.$root.$emit('beforeDestroyTwin', this);
      this.$root.$emit('beforeDestroyTwin:' + this.$type, this);
      return this
    }

    // 销毁中
    _destroy() {
      this._destroyTwin();

      return super._destroy()
    }

    // 销毁结束
    _destroyEnd() {
      this.isThing = null;
      this.thingType = null;
      this.thingOpts = null;
      this.thingId = null;
      this.$root.$off('resize', this._initStyle, this);
      this.$root.$off('beforeToImage', this._beforeToImage, this);
      this.$root.$off('toImaged', this._toImaged, this);

      this.$emit('destroyedTwin', this);
      this.$emit('destroyedTwin:' + this.$type, this);
      this.$root.$emit('destroyedTwin', this);
      this.$root.$emit('destroyedTwin:' + this.$type, this);

      return super._destroyEnd()
    }

    // 获取孪生实例
    get twinInstance() {
      return this.$uiApp.app
    }
  }

  // 效果模板名称
  let ctrlName;
  // 效果模板控制器
  let ctrl;

  function getCtrlName() {
    return 'campus-' + new Date().getTime()
  }

  class EffectThemeControl {
    constructor() {
      this.app = null;
    }

    // 初始化效果模板控制器
    init(app) {
      if (this.hasEffectResource) {
        this.app = app;
        const control = new THING.EffectThemeControl();
        app.addControl(control, '效果模板控制器');
        ctrl = app.getControl('效果模板控制器');
      }
    }

    // 园区效果数据解密
    decrypt(t) {
      if (!window.CryptoJS) return null

      const cryptoJs = window.CryptoJS;

      if (typeof t === 'object') return t
      const e = cryptoJs.enc.Utf8.parse('CityBuilder@2019');
      const i = cryptoJs.AES.decrypt(t, e, {
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7,
      });
      return cryptoJs.enc.Utf8.stringify(i).toString()
    }

    // 更新园区效果
    update(data, prefix) {
      ctrlName = getCtrlName();

      ctrl.registerTheme(ctrlName, data, prefix);

      const campus = this.app.query('.Campus')[0];
      campus.applyTheme(ctrlName);
      ctrl.applyEffectTheme(ctrlName, campus);
      ctrl.applyThemeEnvironment(ctrlName, campus);
    }

    // 销毁园区效果
    destroy() {
      if (this.app) {
        const campus = this.app.query('.Campus')[0];
        if (THING.ThemeManager.findStyle(ctrlName)) {
          ctrl.destroyEffectTheme(ctrlName, campus);
          campus.applyTheme(null);
          THING.App.current.off(
            THING.EventType.EnterLevel,
            null,
            'ThemeEnterLevelToUpdateEnv'
          );
        }
      }
    }

    // 销毁控制器
    destroyControl() {
      this.app = null;
      ctrl = null;
      ctrlName = null;
    }

    // 场景是否含有园区效果包
    get hasEffectResource() {
      return window.THING.EffectThemeControl
    }
  }

  var effectThemeControl = new EffectThemeControl();

  // thingJS适配器
  class CampusAdapter extends ThingJSAdapter {
    // 初始化前
    _beforeInit() {
      super._beforeInit();
      const self = this;
      self._registerAttr(
        'effectTheme',
        null,
        function () {
          let effectTheme = null;
          if (self.$options.kpOption.effectTheme) {
            effectTheme = deepClone$1(self.$options.kpOption.effectTheme);
          } else if (self.$uiApp.effectTheme) {
            effectTheme = deepClone$1(self.$uiApp.effectTheme);
          }
          return effectTheme
        },
        null,
        function (value) {
          return value
        },
        {
          noAdd: true,
        }
      );
    }

    // 初始化app
    async _initApp() {
      this.$twinComplete = false;

      if (!this.thingOpts.urlV1 && this.thingOpts.url) {
        this.thingOpts.urlV1 = this.thingOpts.url.split('/builder/api-campus/')[1];
        this.thingOpts.code = this.thingId;
      }

      const e = await this._waitAppInit();

      await this._campusCompleted(e);

      return this
    }

    _waitAppInit() {
      let twinComplete = false;
      return new Promise((resolve) => {
        const rootConfig = this.$options.rootConfig;
        const config = this._getTwinConfig({
          authServerUrl: rootConfig.twin.thingJsAuthServerUrl,
          urlV1: '/builder/api-campus/' + this.thingOpts.urlV1,
          options: {
            complete(e) {
              return resolve(e)
            },
          },
        });

        const twinInstance = this.$uiApp.init(this.thingOpts, config);

        // 老图表不具备complete回调
        if (!this.$uiApp.hasCompleteFn) {
          twinInstance.one('load', (e) => {
            if (!twinComplete) {
              twinComplete = true;
              return resolve(e)
            }
          });
        }
      })
    }

    async _campusCompleted(e) {
      if (this.twinInstance) {
        this.twinInstance.level.change(e.campus);
        // 关闭，进到室内自动切换天空盒
        this.twinInstance.level.options.autoChangeBackground = false;

        // 初始化园区效果控制器
        this.effectControl.init(this.twinInstance);
        // 加载园区效果
        await this._setEffectTheme(this.effectTheme);

        this._twinCompleted(e);
      }
    }

    // 设置园区效果
    async _setEffectTheme(effect) {
      this.$uiApp.effectTheme = deepClone$1(effect);
      await this.$root.$syncEmit('campusEffectInit', this);
      return this
    }

    async setEffectTheme(effect) {
      this.clearEffectTheme();

      this.effectTheme = effect;

      await this._setEffectTheme(effect);
      return this
    }

    clearEffectTheme() {
      this.effectControl.destroy();
      this.$uiApp.effectTheme = null;
      this.effectTheme = null;
    }

    // 导出定义文件
    _toJSON() {
      const json = super._toJSON();
      Object.assign(json.kpOption, {
        effectTheme: deepClone$1(this.effectTheme),
      });
      return json
    }

    // 重置
    async reset() {
      this.clearEffectTheme();
      await this.refresh();
      return this
    }

    // 销毁中
    _destroy() {
      this.clearEffectTheme();
      this.effectControl.destroyControl();

      return super._destroy()
    }

    // 园区效果控制器
    get effectControl() {
      return effectThemeControl
    }
  }

  // thingJS适配器
  class LowCodeAdapter extends ThingJSAdapter {
    // 初始化app
    async _initApp() {
      this.$twinComplete = false;
      const rootConfig = this.$options.rootConfig;

      const config = this._getTwinConfig({
        authServerUrl: rootConfig.twin.thingJsAuthServerUrl,
        url: this.thingOpts.resourceId.substr(1),
      });

      await this.$uiApp.init(this.thingOpts, config).catch((e) => {
        console.warn('低代码图表加载失败', e);
      });

      this._waitLowCodeComplete();

      return this
    }

    // 等待低代码加载完成
    _waitLowCodeComplete() {
      setTimeout(() => {
        if (this.twinComplete) {
          if (this.twinInstance.inited) {
            if (!this.$twinComplete) {
              this._twinCompleted(this.twinInstance);
            }
          } else {
            this.twinComplete.one('complete', (e) => {
              if (!this.$twinComplete) {
                this._twinCompleted(e);
              }
            });
          }
        } else {
          console.warn('没有获取到孪生实例');
        }
      }, 500);
    }

    // 获取孪生实例
    get twinComplete() {
      return window.app
    }
  }

  // thingJS适配器
  class MapAdapter extends ThingJSAdapter {
    // 初始化app
    async _initApp() {
      this.$twinComplete = false;
      const rootConfig = this.$options.rootConfig;
      const config = this._getTwinConfig({
        id: this.thingOpts.id,
        mapJson: this.thingOpts.urlV1,
        offline: false,
        authServerUrl: rootConfig.twin.thingJsAuthServerUrl,
      });

      await this.$root.$syncEmit('TwinMapInit', this, config);

      try {
        config.mapJson &&
          this.$uiApp.init(this.thingOpts, config, () => {
            this._twinCompleted(this.$uiApp.twinInstance);
          });
      } catch (e) {
        console.error('城市资源加载失败', e);
      }
    }

    // 销毁孪生
    _destroyTwin() {
      this.$uiApp.destroyMap();
    }
  }

  // thingJS适配器
  class TopologyAdapter extends ThingJSAdapter {
    // 初始化前
    _beforeInit() {
      super._beforeInit();
      this.isTopology = true;
      return this
    }

    // 初始化app
    _initApp() {
      this.$twinComplete = false;
      const rootConfig = this.$options.rootConfig;
      const page = this.thingOpts.page ? `?page=${this.thingOpts.page}` : '';
      const config = this._getTwinConfig({
        authServerUrl: rootConfig.twin.thingJsAuthServerUrl,
        url: `/diagrams/${this.thingOpts.resourceId}${page}`,
        isOffline: false,
      });
      const twinInstance = this.$uiApp.init(this.thingOpts, config);

      twinInstance.once('load', (e) => {
        if (!this.$twinComplete) {
          this._twinCompleted(e);
        }
      });

      return this
    }

    // 解决直接修改容器宽高，拓扑自适应失败问题
    resetZoom() {
      const app = this.$uiApp.app;
      if (app) {
        app.resetZoom();
        app.resetZoom();
      }
    }
  }

  // 模块管理
  class ModuleManager {
    constructor(elementMap, adapterMap) {
      // 节点集合
      this.elementMap = elementMap;
      // 适配器集合
      this.adapterMap = adapterMap;
    }

    // 安装
    install(plugin) {
      return plugin.install(this)
    }
  }

  // 模块
  class Module {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 节点集合
      this.elementMap = null;
      // 适配器集合
      this.adapterMap = null;
      // 模块管理
      this.moduleManager = null;
      // 插件列表
      this.pluginList = null;
    }

    // 初始化
    init({ elements, adapters }) {
      this.pluginList = [];
      this.elementMap = elements;
      this.adapterMap = adapters;
      this.moduleManager = new ModuleManager(elements, adapters);
    }

    // 安装
    install(plugin) {
      const instance = this.moduleManager.install(plugin);
      this.pluginList.push({ Fn: plugin, instance });
    }

    // 获取节点
    getElement(type) {
      return this.elementMap[type]
    }

    // 获取节点类型
    getElementType(instance) {
      const elementMap = this.elementMap;
      for (const type in elementMap) {
        if (instance instanceof elementMap[type]) {
          return type
        }
      }
    }

    // 获取适配器
    getAdapter(type) {
      return this.adapterMap[type]
    }

    // 获取节点适配器类型
    getAdapterType(instance) {
      const adapterMap = this.adapterMap;
      for (const type in adapterMap) {
        if (instance instanceof adapterMap[type]) {
          return type
        }
      }
    }
  }

  // 适配器管理器
  class AdapterManager {
    constructor(parent) {
      // 父
      this.parent = parent;
      // 模块
      this.module = parent.module;
    }

    // 创建
    create(type, parent, options, kpOption) {
      const Adapter = this.module.getAdapter(type);

      if (Adapter) {
        return new Adapter(type, parent, options, kpOption)
      } else {
        console.error(type + '没有注册');
      }
    }

    // 获取类型
    getType(instance) {
      return this.module.getAdapterType(instance)
    }
  }

  const comp = {
    state: {
      compData: [],
    },
    get: {
      getById: (state, id) => {
        let _a;
        if (id && typeof id === 'string') {
          return (_a = state.compData.find((item) => item.id === id)) === null ||
            _a === void 0
            ? void 0
            : _a.data
        }
      },
      getByAlias: (state, alias) => {
        let _a;
        if (alias && typeof alias === 'string') {
          return (_a = state.compData.find((item) => item.alias === alias)) ===
            null || _a === void 0
            ? void 0
            : _a.data
        }
      },
      getcompData: (state) => state.compData,
    },
    set: {
      setUdata: (state, data) => (state.compData = data),
    },
  };
  const callbackPool = {
    state: {
      callbackPool: {},
    },
    get: {
      getcallbackPool: (state) => state.callbackPool,
    },
    set: {
      addCBToStackHostPool: (state, obj) => {
        if (Array.isArray(obj)) {
          const [hostItem, hostID] = obj;
          if (!hostItem.id || !hostItem.callback) {
            return
          }
          const cbp = state.callbackPool;
          if (!cbp[hostID]) {
            cbp[hostID] = [];
          }
          cbp[hostID].push(hostItem);
        }
      },
      clearFromStackHostPool(state, obj) {
        const cbp = state.callbackPool;
        const [id, hostID] = obj;
        // 回调池中是否存在宿主ID
        if (cbp[hostID]) {
          const cbpById = state.callbackPool[hostID];
          let len = cbpById.length;
          // 循环宿主id里面的对象
          while (len--) {
            const item = cbpById[len];
            // 判断是否全部清除宿主组件里面的对象
            if (item.id === id) {
              cbpById.splice(len, 1);
            }
          }
        }
      },
    },
  };
  class StorageManager {
    constructor(modules) {
      this.statePool = {};
      this.getPool = {};
      this.setPool = {};
      modules.forEach((module) => {
        this.register(module);
      });
    }

    register(modlue) {
      Object.assign(this.statePool, modlue.state);
      Object.assign(this.getPool, modlue.get);
      Object.assign(this.setPool, modlue.set);
    }

    get(name, param) {
      return this.getPool[name](this.statePool, param)
    }

    commit(name, param) {
      this.setPool[name](this.statePool, param);
    }
  }

  const store = new StorageManager([comp, callbackPool]);

  // 基础类型
  Math.random().toString(36).substr(-8);

  const isType = (obj, type) =>
    Object.prototype.toString.call(obj).includes(type);

  const getCSSTextFromStyleObj = (obj) => {
    if (!obj) return null
    let cssText = '';
    for (const key in obj) {
      // 正则表达式，匹配所有字符
      if (
        [
          'bgImageUrl',
          'isBgImage',
          'backgroundColorLgColor',
          'backgroundColorisUseLgColor',
          'webkitTextFillColor',
          'colorisUseLgColor',
          'colorLgColor',
        ].includes(key)
      )
        continue
      const reg = /\w/g;
      let newKey = '';
      newKey = key.replace(reg, function ($1) {
        if ($1 >= 'A' && $1 <= 'Z') {
          return '-' + $1.toLowerCase()
        } else {
          return $1
        }
      });
      cssText += `${newKey}:${obj[key]};`;
    }
    return cssText
  };

  const createDiv = (style) => {
    const div = document.createElement('div');
    div.setAttribute('style', style);
    return div
  };

  const formatData = (n, len, split) => {
    // 补零
    const value = n.padStart(len, '0');
    if (!split) return value
    if (value.length > 4) {
      return value.substring(0, len - 4) + '万' + value.substring(len - 4, len)
    }
    return value
  };

  // 内部定义一个函数：检查传入的字符串末尾是否一个分号，如果不是则返回一个;
  const checkLastChar = function (checkStr) {
    let result = '';
    if (typeof checkStr === 'string') {
      const strLen = checkStr.length;
      const lastChar = checkStr.substr(strLen - 1, 1);
      if (lastChar !== ';') {
        result = ';';
      }
    }
    return result
  };

  /**
   * 所有组件的基类
   */
  class CompBase {
    constructor(el, config) {
      // this.parent = parent
      this.config = config;
      this.el = el;
      this.uBizData = config.data;
      this.options = config.opts;
      this._options = {};
      this.cbArr = [];
      this.comTimes = null;
      // {'别名': data}接数组件集合
      this.componentAliasObj = {};
      this.initApi();
    }

    get JSCode() {
      return this.config.options.JSCode || ''
    }

    get compType() {
      return this.config.options.type
    }

    _initComponent() {
      // 初始化数据
      this.initBizData();
      // 初始化opts
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      // 初始化Dom节点
      this.initCompDom();
    }

    resize() {
      // 置空
    }

    initBizData() {
      // 置空
    }

    initOptions() {
      // 置空
    }

    initCompDom() {
      // 置空
    }

    update() {
      // 置空
    }

    getOption() {
      return this.options
    }

    setOption(opt) {
      this.options = opt;
      this.update();
    }

    getData() {
      return this.uBizData
    }

    setData(d) {
      this.uBizData = d;
      this.update();
    }

    runJSCode() {
      // 如果存在高级设置代码这个属性才执行高级设置
      if (this.JSCode) {
        // eslint-disable-next-line no-new-func
        const fn = new Function('param', `${this.JSCode}`);
        if (typeof fn === 'function') {
          try {
            fn.call(this.api);
          } catch (error) {
            console.error(`组件执行代码逻辑失败: ${error}`);
          }
        }
      }
    }

    /**
     * @description 执行定时任务
     * @param {*} callback 回调函数
     * @param {*} waitingTime 等待时间
     */
    runTimesFunction(callback, waitingTime) {
      this.comTimes = null;
      this.comTimes && window.clearTimeout(this.comTimes);
      this.comTimes = window.setTimeout(() => {
        this.runTimesFunction(callback, waitingTime);
        callback.call(this.api);
      }, parseInt(waitingTime));
    }

    getCSSTextFromStyle(opt) {
      // 给dom节点挂载样式
      let styleStr = '';
      const getStyle = (style) => {
        if (!style) return null
        // 如果style为数组
        if (isType(style, 'Array')) {
          style.forEach((styleItem) => {
            getStyle(styleItem);
          });
          return null
        }
        // 如果style是一个对象
        if (isType(style, 'Object')) {
          const styleItemValue = this.api.getStyleStringByObject(style);
          if (styleItemValue) {
            styleStr += styleItemValue;
            // 判断最后是否需要加分号
            styleStr += checkLastChar(styleStr);
          }
        }
        // 如果样式是一个字符串
        if (isType(style, 'String')) {
          styleStr += style;
          // 判断最后是否需要加分号
          styleStr += checkLastChar(styleStr);
        }
      };
      getStyle(opt);
      return styleStr
    }

    initApi() {
      const type = this.compType;
      this.api = {
        // 获取DOM节点
        getDom: () => {
          return this.el
        },
        // 获得echarts组件
        getEcharts: () => {
          return window.echarts
        },
        getJquery: () => {
          return window.$
        },
        // 通过获得组件的Options
        getOptions: () => {
          return this.options
        },
        // 设置组件的option
        setOptions: (opt) => {
          this.options = opt;
        },
        // 获取业务组件的数据
        getComponentData: () => {
          return this.uBizData
        },
      };
      // 通过组件别名获取组件数据
      this.api.getSceneDataByAlias = (alias) => {
        return store.get('getByAlias', alias) || null
      };
      // 根据组件id获取发布的数据
      this.api.getPublishDataById = (id) => {
        // 待处理：存在源数据为空，数据通过接口情况接入
        return store.get('getById', id) || null
      };
      // 根据组件别名获取发布的数据
      this.api.getPublishDataByAlias = (alias) => {
        return store.get('getByAlias', alias) || null
      };
      // 清空Dom节点
      this.api.clearDom = () => {
        const el = this.el;
        window.$(el).empty();
      };
      // 给传递进来的div应用css样式
      this.api.setStyle = (obj, style) => {
        // 进行基本的判断，obj为真，并且obj的类型是一个HTML节点，并且样式为真，并且样式的值是一个js对象
        if (
          obj &&
          obj instanceof HTMLElement &&
          style &&
          typeof style === 'object'
        ) {
          // 循环样式，因为样式是一个js对象，所以必须使用for...in进行循环
          for (const key in style) {
            // 将样式的key对应的value赋值给div的style属性中
            obj.style[key] = style[key];
          }
        }
      };
      // 给传递进来的div应用css样式数组循环设置数组中对应项的样式
      this.api.setStyleByArray = (objArr, styleArr) => {
        let _a;
        if (
          objArr instanceof Array &&
          styleArr instanceof Array &&
          objArr.length === styleArr.length
        ) {
          const len = objArr.length;
          for (let i = 0; i < len; i++) {
            const obj = objArr[i];
            const style = styleArr[i]
            ;(_a = this.api) === null || _a === void 0
              ? void 0
              : _a.setStyle(obj, style);
          }
        }
      };
      // 给对象设置文本
      this.api.setItemValue = (obj, value) => {
        if (
          obj &&
          obj instanceof HTMLElement &&
          (typeof value === 'string' || typeof value === 'number')
        ) {
          obj.innerText = value;
        }
      };
      // 将bizDom挂载到父亲上去
      this.api.mountToDom = (bizDom, parent) => {
        if (parent instanceof HTMLElement && bizDom instanceof HTMLElement) {
          parent.appendChild(bizDom);
        }
      };
      // 将html文本设置进DOM节点
      this.api.setItemHTML = (obj, html) => {
        if (obj && obj instanceof HTMLElement && typeof html === 'string') {
          obj.innerHTML = html;
        }
      };
      // 将 object 类型的样式转换成 string 类型
      this.api.getStyleStringByObject = (styleObj) => {
        let styleString = '';
        for (const key in styleObj) {
          styleString += `${key}:${styleObj[key]};`;
        }
        return styleString
      };
      this.api.createDOMByDefinition = (parent, definition, cb) => {
        // 判断父节点是否HTMLElement类型，并且定义文件为一个数组
        if (parent && definition && isType(definition, 'Array')) return false

        // 循环定义文件并创建DOM节点
        definition.forEach((subDOMObj) => {
          // 获取需要创建DOM的类型并且创建一个该类型的DOM对象，比如div
          let subDOM = null;
          const domType = subDOMObj.type;
          if (!domType) return null
          if (
            ['svg', 'defs', 'rect', 'linearGradient', 'stop'].includes(domType)
          ) {
            const ns = 'http://www.w3.org/2000/svg';
            subDOM = document.createElementNS(ns, domType);
          } else {
            subDOM = document.createElement(domType);
          }

          const style = subDOMObj.style;
          if (style) {
            // 如果style为数组
            subDOM.style.cssText = this.getCSSTextFromStyle(style);
          }
          // 如果节点有默认的文本，则给加入到innerText中
          const text = subDOMObj.text;
          if (text) {
            subDOM.innerText = text;
          }
          parent.appendChild(subDOM);
          // 检查并执行回调函数,执行回调时会带上已创建并挂载的DOM对象和创建DOM的定义文件
          cb && isType(cb, 'Function') && cb.call(this, subDOM, subDOMObj);

          // 如果存在儿子节点，则创建并挂载
          subDOMObj.children &&
            this.api.createDOMByDefinition(subDOM, subDOMObj.children, cb);
        });
      };
      // 设置组件大小
      this.api.setComponentSize = (width, height) => {
        if (width && Number.isInteger(parseInt(width))) {
          this.parent.options.style.width = `${parseInt(width)}px`;
        } else {
          console.warn(
            'Javascript脚本中调用setComponentSize函数缺少宽度参数,或者参数宽度不为数字'
          );
        }
        if (height && Number.isInteger(parseInt(height))) {
          this.parent.options.style.height = `${parseInt(height)}px`;
        } else {
          console.warn(
            'Javascript脚本中调用setComponentSize函数缺少高度参数,或者参数高度不为数字'
          );
        }
      };
      // 设置定时任务
      this.api.setTimes = (callback, waitingTime) => {
        if (!(typeof callback === 'function' && parseInt(waitingTime))) {
          console.error('setTimes传入参数错误');
          return
        }
        this.comTimes && window.clearTimeout(this.comTimes);
        this.comTimes = null;
        this.runTimesFunction(callback, waitingTime);
      };
      // 向回调函数的数组中添加回调函数
      this.api.addCallback = (cb) => {
        if (cb instanceof Function) {
          this.cbArr.push(cb);
        }
      };
      // 清空回调函数
      this.api.clearCallback = () => {
        this.cbArr = [];
      };
      /**
       * @description 将组件添加到控制组件池中
       * @param {Function} cb 回调函数
       * @param {string} hostID  宿主ID
       * example [{id:'id', callback:callback},hostID]
       */
      this.api.addCBToStackHostPool = (cb, hostID) => {
        const id = this.config.name;
        const obj = [
          {
            id: id,
            callback: cb,
            self: this,
          },
          hostID,
        ];
        return store.commit('addCBToStackHostPool', obj)
      };
      // 清除控制组件中的某个回调函数
      this.api.clearFromStackHostPool = (hostID) => {
        const id = this.config.name;
        const obj = [id, hostID];
        return store.commit('clearFromStackHostPool', obj)
      };
      // 清除定时任务
      this.api.clearTimes = () => {
        this.comTimes && window.clearTimeout(this.comTimes);
        this.comTimes = null;
      };
      // 设置组件业务数据
      this.api.setComponentData = (bizData) => {
        if (bizData) {
          if (type === 'ctextlist') {
            this.uBizData = window.$.extend(true, [], bizData);
            this.initOptions();
            this.initBizData();
            if (!this.options.isCarousel) {
              // const length = (this.uBizData as []).length
              // for (let i = 0; i < length; i++) {
              //   this.$set((this.uBizData as [])[i], 'isShow', true)
              // }
              for (const bizdata of this.uBizData) {
                bizdata.isShow = true;
              }
            }
          } else {
            this.uBizData = bizData;
          }
        } else {
          console.warn('没有获取到合法的数据');
        }
      };
      this.api.startAnimate = () => {
        // 置空
      };
      /**
       * @description 外部调用组件回调池
       * @param stackId 宿主组件id
       */
      window.callCBStack = (stackArgument) => {
        // 如果没有传参，直接return
        if (!stackArgument || typeof stackArgument !== 'string') {
          console.error(
            'call回调队列时参数字符中需要携带队列id,并且参数必须为字符串'
          );
          return
        }
        // 参数不能使用中文逗号隔开
        if (stackArgument.indexOf('，') >= 0) {
          console.error(
            'call回调队列的参数中不能含有中文逗号,如果传多参，参数之间用英文逗号隔开'
          );
          return
        }
        const args = stackArgument.split(',');
        // 从args数组中获取队列id和其他传参
        const [stackId, ...realArgs] = args;
        // 获取回调池
        const CBP = store.get('getcallbackPool');
        // 获取该组件中的队列
        const stackItem = CBP.all;
        // 判断该队列是否为数组格式
        if (stackItem && stackItem instanceof Array) {
          const len = stackItem.length;
          // 循环队列中各组件的回调函数
          for (let i = 0; i < len; i++) {
            if (stackItem[i][1] !== stackId) continue
            // 获取各队列组件
            const item = stackItem[i][0];
            item.callback.call(item.self, realArgs);
          }
        }
      };
    }

    destory() {
      this.options = undefined;
      this.uBizData = undefined;
      this.api = undefined;
      if (this.dom) {
        this.el?.removeChild(this.dom);
        this.dom = undefined;
      }
      window.$(this.el).empty();
    }
  }

  /**
   * 自定义组件的基类
   */
  class CompNew extends CompBase {}

  class Text extends CompNew {
    _initComponent() {
      // 初始化opts
      this.initOptions();
      // 初始化Dom节点
      this.initCompDom();
      // 初始化数据
      this.initBizData();
      // 运行空白组件jscode
      this.runJSCode();
    }

    initCompDom() {
      const domBox = document.createElement('div');
      domBox.setAttribute('style', 'width:100%;height:100%;overflow:hidden;');
      this.dom = document.createElement('div');
      this.dom.innerText = this.uBizData?.value || '数据不符合规范';
      domBox.appendChild(this.dom);
      if (this.options) {
        this._setOption(this.options);
      }
      this.el?.appendChild(domBox);
    }

    initOptions() {
      if (this.options) {
        const options = this.options;
        if (options?.colorLgColor && options?.colorisUseLgColor) {
          options.backgroundImage = options?.colorLgColor.replace(/_/g, ',');
          options['-webkit-background-clip'] = 'text';
          options['-webkit-text-fill-color'] = options.webkitTextFillColor;
        }
        this._setOption(options);
      }
    }

    _setOption(options) {
      if (this.dom) {
        this.compStyle = getCSSTextFromStyleObj(options);
        this.dom.setAttribute('style', this.compStyle);
      }
    }

    initBizData() {
      let d = this.uBizData;
      if (Array.isArray(d)) d = d[0];
      if (!d) d = { value: '数据为null' };
      this._setData(d);
    }

    _setData(data) {
      if (this.dom) {
        this.uBizData = data;
        this.dom.innerText = data.value || '数据不符合规范';
      }
    }

    update() {
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      this.initBizData();
    }

    destory() {
      this.uBizData = undefined;
      this.compStyle = undefined;
      super.destory();
    }
  }

  class Layer extends CompNew {
    initCompDom() {
      let _a;
      this.dom = document.createElement('div');
      this.initOptions()
      ;(_a = this.el) === null || _a === void 0
        ? void 0
        : _a.appendChild(this.dom);
    }

    initOptions() {
      if (this.dom && this.options) {
        const options = this.options;
        let style = 'height:100%;';
        if (options.backgroundColor) {
          style += `background-color:${options.backgroundColor};`;
        }
        if (options.isBgImage && options.bgImageUrl) {
          style += `background-image:${options.bgImageUrl};background-size:100%;background-position:center;background-repeat:no-repeat;`;
        }
        this.dom.setAttribute('style', style);
        if (
          (options === null || options === void 0
            ? void 0
            : options.backgroundColorisUseLgColor) &&
          options.backgroundColorLgColor
        ) {
          this.dom.style.background = options.backgroundColorLgColor.replace(
            /_/g,
            ','
          );
        }
      }
    }

    update() {
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
    }
  }

  function init(list, pageNumber) {
    list.forEach((item, index) => {
      item.style.transition = '';
      item.style.transform = '';
      if (!item._height) {
        item._height = item.style.height;
      }
      if (!item._display) {
        item._display = item.style.display;
      }
      item.ontransitionend = null;
      if (index <= pageNumber - 1) {
        item.style.display = item._display;
        item.style.opacity = '1';
      } else {
        item.style.display = 'none';
        item.style.opacity = '0';
      }
    });
  }

  function scroll(list, pageNumber, duration) {
    let index = 0;
    const len = list.length - 1;
    init(list, pageNumber);

    let flag = true;
    let timer;
    async function loop() {
      const enterEl = list[index + pageNumber];
      await leave(list[index]);
      enterEl && (await enter(enterEl));
      if (index >= len) {
        init(list, pageNumber);
        index = 0;
      } else {
        index++;
      }
      if (flag) {
        timer = setTimeout(() => {
          clearTimeout(timer);
          loop();
        }, +duration * 1000);
      }
    }

    loop();

    return () => {
      flag = false;
      timer && clearTimeout(timer);
    }
  }

  function leave(el) {
    return new Promise((resolve) => {
      el.style.display = el._display;
      setTimeout(() => {
        el.style.transition = 'transform 0.5s, opacity 0.5s, height 0.5s';
        el.style.transform = 'translateY(20px) rotateX(90deg)';
        el.style.opacity = '0';
        el.style.height = '0';
        el.ontransitionend = function () {
          el.style.transition = '';
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.height = el._height;
          el.ontransitionend = null;
          resolve();
        };
      });
    })
  }

  function enter(el) {
    return new Promise((resolve) => {
      el.style.display = el._display;
      el.style.opacity = '0';
      el.style.transform = `translateY(50px)`;
      el.style.transition = '';
      setTimeout(() => {
        el.style.transition = 'transform 0.8s, opacity 0.8s';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.ontransitionend = function () {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
          el.ontransitionend = null;
          resolve();
        };
      });
    })
  }

  class TextList extends CompNew {
    initBizData() {
      if (this.uBizData) {
        if (!this.cacheData) {
          this.cacheData = JSON.parse(JSON.stringify(this.uBizData));
        }
        this.uBizData = this.cacheData.map((item) => {
          return Object.assign(Object.assign({}, item), { cellStyle: {} })
        });
      }
    }

    initOptions() {
      const options = this.options;
      if (!options) return null
      const height =
        options.titleLineheight === 'px' ? '50px' : options.titleLineheight;
      // 标题样式
      const titleStyle = {
        color: options.titleColor,
        textAlign: options.titleTextAlign,
        fontFamily: options.titleFontFamily,
        fontSize: options.titleFongSize,
        fontWeight: options.titleFontWeight,
        lineHeight: height,
        backgroundColor: options.titleBackgroundColor,
        borderColor: options.titleBorderColor,
        borderStyle: options.titleBorderStyle,
        borderWidth: options.titleBorderWeight,
        height: height,
        background: '',
      };
      // 内容字体样式
      const bodyStyle = {
        textAlign: options.fontTextAlign,
        lineHeight: options.fontLineHeight,
      };
      // 行中字体样式
      const borderStyle = {
        borderColor: options.borderColor,
        borderStyle: options.borderStyle,
        borderWidth: options.borderWeight,
      };
      // 奇数行字体样式
      const oddStyle = {
        color: options.oddFontColor,
        fontFamily: options.oddFontFamily,
        fontSize: options.oddFontSize,
        fontWeight: options.oddFontWeight,
        height: options.fontLineHeight,
        backgroundColor: options?.oddBackgroundColor,
        background: '',
      };
      // 偶数行字体样式
      const evenStyle = {
        color: options.evenFontColor,
        fontFamily: options.evenFontFamily,
        fontSize: options.evenFontSize,
        fontWeight: options.evenFontWeight,
        height: options.fontLineHeight,
        backgroundColor: options?.evenBackgroundColor,
        background: '',
      };
      if (
        options?.titleBackgroundColorLgColor &&
        options?.titleBackgroundColorisUseLgColor
      ) {
        titleStyle.background = options?.titleBackgroundColorLgColor.replace(
          /_/g,
          ','
        );
      }
      if (
        options?.oddBackgroundColorLgColor &&
        options?.oddBackgroundColorisUseLgColor
      ) {
        oddStyle.background = options?.oddBackgroundColorLgColor.replace(
          /_/g,
          ','
        );
      }
      if (
        options?.evenBackgroundColorLgColor &&
        options?.evenBackgroundColorisUseLgColor
      ) {
        evenStyle.background = options?.evenBackgroundColorLgColor.replace(
          /_/g,
          ','
        );
      }
      this.compStyle = {
        titleStyle: getCSSTextFromStyleObj(titleStyle),
        bodyStyle: getCSSTextFromStyleObj(bodyStyle),
        borderStyle: getCSSTextFromStyleObj(borderStyle),
        oddStyle: getCSSTextFromStyleObj(oddStyle),
        evenStyle: getCSSTextFromStyleObj(evenStyle),
      };
    }

    _destoryDom() {
      if (this.textListDom) {
        window.$(this.textListDom).empty();
      }
      this.clearTimer && this.clearTimer();
    }

    // 创建图格头部
    createHead() {
      const { titleStyle } = this.compStyle;
      // 标题
      const headDom = createDiv(`display:flex;${titleStyle}`);
      this.options.title.forEach((item) => {
        const titleDom = createDiv(`width:${item.titleWidth};`);
        titleDom.innerText = item.titleName || '';
        headDom.appendChild(titleDom);
      });
      return headDom
    }

    // 创建表格内容
    createBodyDom() {
      const { bodyStyle, borderStyle, oddStyle, evenStyle } = this.compStyle;
      // 表格内容
      const bodyDom = document.createElement('div');
      if (!Array.isArray(this.uBizData)) return bodyDom
      this.uBizData.forEach((li, i) => {
        const listDom = createDiv(
          `box-sizing:border-box;width:100%;display:flex;${borderStyle};${
          (i + 1) % 2 ? oddStyle : evenStyle
        }`
        );
        this.options.title.forEach((item) => {
          if (li.cellStyle) {
            let cellStyle = '';
            if (li.cellStyle[item.compName]) {
              cellStyle =
                getCSSTextFromStyleObj(li.cellStyle[item.compName]) || '';
            }
            const liDom = createDiv(
              `${bodyStyle};width:${item.titleWidth};${cellStyle}`
            );
            liDom.innerText = li[item.compName] || '';
            listDom.appendChild(liDom);
          }
        });
        bodyDom.appendChild(listDom);
      });

      return bodyDom
    }

    initCompDom() {
      if (!this.textListDom) {
        this.textListDom = document.createElement('div');
        this.textListDom.setAttribute(
          'style',
          `width:100%;height:100%;overflow:hidden;`
        );
        this.el?.appendChild(this.textListDom);
      } else {
        this._destoryDom();
      }
      if (this.compStyle) {
        const options = this.options;
        const headDom = this.createHead();
        const bodyDom = this.createBodyDom();

        if (
          this.uBizData?.length > 0 &&
          options?.isCarousel &&
          options.animateType === 'onebyone'
        ) {
          this.clearTimer = scroll(
            Array.from(bodyDom.childNodes),
            +options.pageNumber,
            options.carouselCycle
          );
        }
        this.textListDom.appendChild(headDom);
        this.textListDom.appendChild(bodyDom);
      }
    }

    update() {
      this.initBizData();
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      this.initCompDom();
    }

    getData() {
      return this.cacheData
    }

    setData(d) {
      this.cacheData = d;
      this.update();
    }
  }

  class Iframe extends CompNew {
    initCompDom() {
      let _a;
      this.dom = document.createElement('iframe');
      this.dom.setAttribute('style', `width:100%;height:100%`);
      this.initOptions()
      ;(_a = this.el) === null || _a === void 0
        ? void 0
        : _a.appendChild(this.dom);
    }

    initOptions() {
      if (
        this.dom &&
        this.options &&
        this.options.iframeURL &&
        this.options.isOpenIframe === true
      ) {
        this.dom.src = /^(http|https):/.test(this.options.iframeURL)
          ? this.options.iframeURL
          : `http://${this.options.iframeURL}`;
      }
    }

    update() {
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
    }
  }

  class Progress extends CompNew {
    initCompDom() {
      let _a;
      const compDom = createDiv(`width:100%;height:100%;overflow:hidden;`);
      isType(this.uBizData, 'Array') &&
        this.uBizData.forEach((item) => {
          compDom.appendChild(this.createProgressDom(item, this.compStyle));
        })
      ;(_a = this.el) === null || _a === void 0 ? void 0 : _a.appendChild(compDom);
    }

    update() {
      window.$(this.el).empty();
      // 初始化数据
      this.initBizData();
      // 初始化opts
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      // 初始化Dom节点
      this.initCompDom();
    }

    getData() {
      return this.cacheData
    }

    setData(d) {
      this.cacheData = d;
      this.update();
    }

    initBizData() {
      if (!isType(this.uBizData, 'Array')) {
        console.warn('数据不符合规范，cprogress类型数据应该是一个数组');
        return
      }
      if (!this.cacheData) {
        this.cacheData = JSON.parse(JSON.stringify(this.uBizData));
      }
      this.uBizData = this.cacheData.map((item) => {
        return Object.assign(Object.assign({}, item), { cProgressColor: {} })
      });
    }

    createProgressDom(item, style) {
      let progressColor = '';
      if (item.cProgressColor) {
        progressColor = getCSSTextFromStyleObj(item.cProgressColor);
      }
      const { progress, title, unit, progressbg } = style;
      const titleDom = createDiv(`${title}`);
      const progressDom = createDiv(`${progressbg}`);
      const unitDom = createDiv(`${unit}`);
      if (item.title) {
        titleDom.innerHTML = `${item.title}`;
      } else {
        titleDom.style.display = 'none';
      }
      unitDom.innerHTML = `${item.progress * 100} %`;
      const progressChild = createDiv(
        `${progress}${progressColor}width:${
        item.progress * parseInt(this.options.progress_width)
      }px`
      );
      progressDom.appendChild(progressChild);
      const singleProgressDom = createDiv(`display:flex;`);
      singleProgressDom.appendChild(titleDom);
      singleProgressDom.appendChild(progressDom);
      singleProgressDom.appendChild(unitDom);
      return singleProgressDom
    }

    initOptions() {
      if (!this.compStyle) {
        this.compStyle = {
          progress: '',
          title: '',
          unit: '',
        };
      }
      const options = this.options;
      const style = {};
      for (const key in options) {
        const attrArr = key.split('_');
        if (!attrArr[1]) continue
        if (style[attrArr[0]]) {
          style[attrArr[0]][attrArr[1]] = options[key];
        } else {
          style[attrArr[0]] = { [attrArr[1]]: options[key] };
        }
      }
      const { title, progress, unit } = style;

      if (title?.backgroundColorLgColor && title?.backgroundColorisUseLgColor) {
        title.background = title.backgroundColorLgColor.replace(/_/g, ',');
      }
      if (
        progress?.backgroundColorLgColor &&
        progress?.backgroundColorisUseLgColor
      ) {
        progress.background = progress.backgroundColorLgColor.replace(/_/g, ',');
      }
      if (unit?.backgroundColorLgColor && unit?.backgroundColorisUseLgColor) {
        unit.background = unit.backgroundColorLgColor.replace(/_/g, ',');
      }

      const { backgroundColor, borderRadius, color, height, marginTop, width } =
        progress;
      style.progressbg = {
        backgroundColor,
        borderRadius,
        height,
        width,
        marginTop,
      };
      style.progress = { backgroundColor: color, borderRadius, height };

      for (const ite in style) {
        this.compStyle[ite] = getCSSTextFromStyleObj(style[ite]);
      }
    }
  }

  class Timecard extends CompNew {
    initOptions() {
      if (this.options) {
        const options = this.options;
        let compStyle = `color:${options.fontColor};font-family:${options.fontFamily};font-size:${options.fontSize};`;
        this.dateStyle = options.isShowDay ? '' : 'display:none;';
        this.timerStyle = options.isShowTime ? '' : 'display:none;';
        if (!options.isLineWarp) {
          compStyle += `display: flex;`;
          this.dateStyle += `margin-right:${options.spacing};`;
        }
        this.compStyle = compStyle;
        this._setOption();
      }
    }

    initCompDom() {
      let _a;
      this.dom = createDiv(this.compStyle || '');
      this.dateDom = createDiv(this.dateStyle || '');
      this.timeDom = createDiv(this.timerStyle || '');
      this.dom.appendChild(this.dateDom);
      this.dom.appendChild(this.timeDom)
      ;(_a = this.el) === null || _a === void 0
        ? void 0
        : _a.appendChild(this.dom);
      // 响应时间变化
      this.setCurrentTime();
    }

    update() {
      this.initOptions();
    }

    _setOption() {
      if (this.dateDom && this.timeDom) {
        this.dateDom.setAttribute('style', this.dateStyle || '');
        this.timeDom.setAttribute('style', this.timerStyle || '');
      }
    }

    _changeInerHTML(time) {
      this.dateDom.innerText = time[0];
      this.timeDom.innerText = time[1];
    }

    _getNowTime() {
      const myDate = new Date();
      return [
        myDate.toLocaleTimeString(),
        myDate.getFullYear(),
        myDate.getMonth() + 1,
        myDate.getDate(),
        myDate,
      ]
    }

    setCurrentTime() {
      this._timer && clearTimeout(this._timer);
      this._timer = undefined;
      const [time, year, month, day, myDate] = this._getNowTime();
      const date = {
        0: `${year}年${month}月${day}日`,
        1: `${year}-${month}-${day}`,
        2: myDate.toLocaleDateString(),
      };
      const timeFormat = this.options ? this.options.timeFormat : 0;
      this._changeInerHTML([date[timeFormat], time]);
      this._timer = setTimeout(() => {
        this.setCurrentTime();
      }, 1000);
    }

    destory() {
      this._timer && clearTimeout(this._timer);
      this._timer = undefined;
      this.dateDom = undefined;
      this.timeDom = undefined;
      this.dateStyle = undefined;
      this.timerStyle = undefined;
      this.compStyle = undefined;
      super.destory();
    }
  }

  /**
   * 图表组件的基类
   */
  class CompChart extends CompBase {
    constructor(parent, config) {
      super(parent, config);
      this.echartsInstance = undefined;
    }

    initApi() {
      super.initApi();
      if (this.api) {
        // 渲染echarts
        this.api.renderCharts = () => {
          // 轮询页面dom是否加载完毕的标志位，等待标志位为真时，对图表进行渲染
          setTimeout(() => {
            if (this.echartsInstance) {
              this.echartsInstance.clear();
            } else {
              this.echartsInstance =
                window.echarts && window.echarts.init(this.el);
            }
            // 绘制图表
            if (this.options) {
              this.echartsInstance.setOption(this.options);
            }
          });
        };
        // API：返回当前组件的echarts或者highcharts实例，该接口暴露给外部调用
        this.api.getChartsInstance = () => {
          return this.echartsInstance
        };
        this.api.getChartsData = () => {
          return this.uBizData
        };
        this.api.getChartsOptions = () => {
          return this.options
        };
      }
    }
  }

  class Echarts extends CompChart {
    constructor(el, config) {
      super(el, config);
      this.el = el;
      this.dbapitype = this.config.options.dbapitype || '1';
      this.defaultColor = [
        [
          '#2b908f',
          '#90ee7e',
          '#f45b5b',
          '#7798BF',
          '#aaeeee',
          '#ff0066',
          '#eeaaee',
          '#55BF3B',
          '#DF5353',
          '#7798BF',
          '#aaeeee',
        ],
        [
          '#C1232B',
          '#27727B',
          '#FCCE10',
          '#E87C25',
          '#B5C334',
          '#FE8463',
          '#9BCA63',
          '#FAD860',
          '#F3A43B',
          '#60C0DD',
          '#D7504B',
        ],
        [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
        ],
        [
          '#c12e34',
          '#e6b600',
          '#0098d9',
          '#2b821d',
          '#005eaa',
          '#339ca8',
          '#cda819',
          '#32a487',
          '#7798BF',
          '#aaeeee',
          '#DF5353',
        ],
        [
          '#E01F54',
          '#001852',
          '#f5e8c8',
          '#b8d2c7',
          '#c6b38e',
          '#a4d8c2',
          '#f3d999',
          '#d3758f',
          '#dcc392',
          '#2e4783',
          '#82b6e9',
        ],
      ];
    }

    resize() {
      this.echartsInstance && this.echartsInstance.resize();
    }

    _initComponent() {
      // 初始化数据
      this.initBizData();
      // 初始化opts
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      // 初始化Dom节点
      this.initCompDom();
    }

    initCompDom() {
      let _a;
      if (!this.dom) {
        this.dom = createDiv(`width:100%;height:100%;`)
        ;(_a = this.el) === null || _a === void 0
          ? void 0
          : _a.appendChild(this.dom);
        this.echartsInstance = window.echarts && window.echarts.init(this.dom);
      }
      // options待处理
      const option = this.options;
      try {
        this.echartsInstance && option && this.echartsInstance.setOption(option);
      } catch (e) {
        console.error(e);
      }
    }

    update() {
      this._initComponent();
    }

    // 处理axis
    setAxis(axis) {
      if (isType(axis, 'Array')) {
        axis.forEach((item) => {
          this.setAxis(item);
        });
      }
      if (axis?.type === 'category') {
        axis.data = this.xAxisData;
      }
    }

    // 设置series
    setSeries() {
      const dataLength = this.uBizData.length;
      const length = this.options.series.length;
      const moreSeries = [];
      for (let i = 0; i < dataLength; i++) {
        // i < length说明数据的下标没有超出series数组的下标，赋值即可
        if (i < length) {
          this.options.series[i].name = this.uBizData[i].name;
          this.options.series[i].data = this.uBizData[i].data;
        } else {
          // 如果超出series下标，并且series下标大于0（至少有一个series）
          if (length > 0) {
            // 新增的系列样式和上一个系列相同
            // let type = this.options.series[length - 1].type
            const tempObj = this.options.series[length - 1];
            tempObj.name = this.uBizData[i].name;
            tempObj.data = this.uBizData[i].data;
            moreSeries.push(tempObj);
          }
        }
      }
      // 将新生成的series和老的series合并
      if (moreSeries.length > 0) {
        this.options.series = this.options.series.concat(moreSeries);
      }
    }

    dealDbapitype1() {
      if (!isType(this.uBizData, 'Array')) return null
      // 先设置坐标轴数据
      if (this.xAxisData.length > 0) {
        this.setAxis(this.options.xAxis);
        this.setAxis(this.options.yAxis);
      }
      // 设置legend的data
      if (this.legendData.length > 0) {
        if (!this.options.legend) {
          this.options.legend = {};
        }
        this.options.legend.data = this.legendData;
      }
      // 设置series
      this.setSeries();
    }

    dealDbapitype3() {
      if (!isType(this.uBizData, 'Array')) return null
      if (!(this.options && Object.keys(this.options).length > 0)) return null
      if (this.options.series) {
        // 给series赋值
        this.options.series[0].data = this.uBizData;
      }
      // 给legend赋值
      if (this.legendData.length > 0) {
        if (!this.options.legend) {
          this.options.legend = {};
        }
        this.options.legend.data = this.legendData;
      }
    }

    initOptions() {
      const dbapitype = this.dbapitype;
      if (this.options && this.xAxisData && this.legendData) {
        // 初始化图表组件的颜色
        const color = this.options.color;
        if (!color || (isType(color, 'Array') && color.length === 0)) {
          this.options.color = this.defaultColor[0];
        }
        // 初始化图表的数据到options中,根据获取的数据类型来判断，dbapitype=1的为饼图类对象数组，dataapitype=3的为系列数组格式
        dbapitype === '1' && this.dealDbapitype1();

        dbapitype === '3' && this.dealDbapitype3();
        // 转换options中的function为函数
        this.initOptionsFunction(this.options);
      }
    }

    initOptionsFunction(opt) {
      if (!opt || !isType(opt, 'Object')) return null
      const keys = Object.keys(opt);
      for (const key of keys) {
        const obj = opt[key];
        if (isType(opt, 'Object')) {
          this.initOptionsFunction(obj);
        }
        if (isType(opt, 'Array')) {
          for (const k of obj) {
            this.initOptionsFunction(k);
          }
        }
        if (isType(opt, 'String') && obj.includes('function')) {
          // eslint-disable-next-line no-new-func
          opt[key] = new Function('return ' + obj)();
        }
      }
    }

    _dealBizData(d) {
      if (!(d && isType(d, 'Object') && d.name)) return []
      const bizData = [];
      this.legendData = [];
      this.xAxisData = [];
      for (const [key, value] of Object.entries(d)) {
        // key为name的对象上保存的x轴数据，必须为一个数组
        if (key === 'name' && isType(value, 'Array')) {
          this.xAxisData = value;
        }
        // key为非name的对象上保存的是每个系列的数据，key为系列的name
        if (key !== 'name') {
          // 向bizData中push一条数据
          isType(value, 'Array') && bizData.push({ name: key, data: value });
          // 向系列中存一条数据
          this.legendData.push(key);
        }
      }
      return bizData
    }

    initBizData() {
      let bizData = [];
      const d = this.uBizData;
      const dbapitype = this.dbapitype;
      // dbapitype 1,返回系列数组，3，返回对象
      if (dbapitype === '1') {
        bizData = this._dealBizData(d);
      }

      if (dbapitype === '3' && d && isType(d, 'Array') && d.length > 0) {
        bizData = d;
        this.legendData = [];
        this.xAxisData = [];
        // 给legend赋值,取数组中每个对象的name
        for (const item of bizData) {
          item.name && this.legendData.push(item.name);
        }
      }

      this.uBizData = bizData;
    }
  }

  class Blankcomponent extends CompNew {
    update() {
      this.runJSCode();
    }
  }

  class Countdown extends CompNew {
    constructor(el, config) {
      super(el, config);
      this.currentValue = 0;
      this.oldValue = 0;
      this.len = 0;
      this.compDom = null;
    }

    initCompDom() {
      let _a;
      let { value, maxValue } = this.uBizData;
      const { pageAlign } = this.options;
      // data只传一个值
      if (!maxValue) {
        maxValue = value;
        value = '0';
      }
      this.compDom = createDiv(
        `height:100%;width:100%;overflow:hidden;text-align: ${pageAlign};`
      );
      this.currentValue = +value;
      this.len = maxValue.split('').length;
      maxValue.split('').forEach((n, index) => {
        this.createPage(n, index);
      });
      this.options.split && this.createPage('0', 0);
      this.loadData(+value, +maxValue)
      ;(_a = this.el) === null || _a === void 0
        ? void 0
        : _a.appendChild(this.compDom);
    }

    loadData(value, maxValue) {
      this.timer && clearTimeout(this.timer);
      const rate = Math.floor((maxValue - value) / 30) || 1;
      if (maxValue - this.currentValue >= rate) {
        this.currentValue = +this.currentValue + rate;
      } else {
        this.currentValue = maxValue;
      }
      this.changeNumber();
      if (+this.currentValue >= +maxValue) return
      this.timer = setTimeout(() => {
        this.oldValue = this.currentValue;
        this.loadData(value, maxValue);
      }, 1000);
    }

    changeNumber() {
      let _a, _b, _c;
      // new Promise()
      const split = this.options.split;
      const n = (
        formatData(this.currentValue.toString(), this.len, split) +
        this.options.unit
      ).split('');
      const o = (
        formatData(this.oldValue.toString(), this.len, split) + this.options.unit
      ).split('');
      if (
        (_a = this.compDom) === null || _a === void 0 ? void 0 : _a.childNodes
      ) {
        for (
          let i = 0;
          i <
          ((_b = this.compDom) === null || _b === void 0
            ? void 0
            : _b.childNodes.length);
          i++
        ) {
          const el =
            (_c = this.compDom) === null || _c === void 0
              ? void 0
              : _c.childNodes[i];
          el.childNodes[0].setAttribute('data-before', o[i]);
          el.childNodes[1].setAttribute('data-before', n[i]);
          el.classList.remove('go');
          if (o[i] !== n[i]) {
            const timer = setTimeout(() => {
              clearTimeout(timer);
              el.classList.add('go');
            }, 600);
          }
        }
      }
      // this.compDom?.childNodes.forEach((el, index) => {})
    }

    update() {
      window.$(this.el).empty();
      this.initOptions();
      // 运行空白组件jscode
      this.runJSCode();
      this.initCompDom();
    }

    _createPage(n) {
      if (this.compStyle) {
        const { pageMargin } = this.options;
        const pageDom = document.createElement('div');
        const { font, number, page } = this.compStyle;
        const fontpage = document.createElement('div');
        const nextpage = document.createElement('div');
        fontpage.setAttribute('class', `card-font-number front`);
        nextpage.setAttribute('class', `card-font-number next`);
        pageDom.setAttribute('class', 'down');
        pageDom.appendChild(fontpage);
        pageDom.appendChild(nextpage);
        pageDom.setAttribute(
          'style',
          `${
          /^[0-9]*$/.test(n) ? page + number : font
        };position: relative;display: inline-block; margin-left: ${pageMargin}`
        );
        return pageDom
      }
    }

    createPage(n, index) {
      let _a, _b;
      if (this.compStyle) {
        const pageDom = this._createPage(n);
        pageDom &&
          ((_a = this.compDom) === null || _a === void 0
            ? void 0
            : _a.appendChild(pageDom));
        if (index === 4) {
          const d = this._createPage('0');
          d &&
            ((_b = this.compDom) === null || _b === void 0
              ? void 0
              : _b.appendChild(d));
        }
      }
    }

    initOptions() {
      const s = this.options;
      // 字体样式
      const font = {
        color: s.fontColor,
        fontFamily: s.fontFamily,
        lineHeight: s.fontLineHeight,
        fontSize: s.fontSize,
        textAlign: s.fontTextAlign,
        fontWeight: s.fontWeight,
      };
      // 数字样式
      const number = {
        color: s.numberColor,
        fontFamily: s.numberFontFamily,
        fontSize: s.numberSize,
        textAlign: s.numberTextAlign,
        fontWeight: s.numberWeight,
      };
      // 翻牌器样式
      const page = {
        borderRadius: s.pageRadius,
        width: s.pageWidth,
        height: s.pageHeight,
        lineHeight: s.pageHeight,
        textAlign: s.pageAlign,
        background: s.bottomBackgroundColor,
      };
      if (!this.compStyle) {
        this.compStyle = {
          font: 'string',
          number: 'string',
          page: 'string',
        };
      }
      const style = { font, number, page };
      for (const item in style) {
        this.compStyle[item] = getCSSTextFromStyleObj(style[item]);
      }
      this.setStyle();
    }

    // 翻页样式
    setStyle() {
      let styleElement = document.getElementById('style_card');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'style_card';
        document.head.appendChild(styleElement);
      }
      let style = `.card-font-number:before,
      .card-font-number:after {
        content:attr(data-before);
        position:absolute;
        left: 0;
        right:0;
        overflow:hidden;
        box-sizing:border-box;
      }
      .card-font-number:before{
        top:0;
        bottom:50%;
        background:${this.options.topBackgroundColor};
      }
      .card-font-number:after{
        top:50%;
        bottom:0;
        line-height: 0;
        background:${this.options.bottomBackgroundColor};
      }
      .front:before {
        z-index: 3;
      }
      .next:after {
        z-index: 2;
        transform-origin: 50% 0%;
        transform: perspective(160px) rotateX(180deg);
      }
      .front:after, .next:before {
        z-index: 1;
      }
      .go .front:after{
        animation: fade 0.6s ease-in-out both;
      }
      .go .front:before {
        opacity: 0;
      }
      .down:not(.go) .next{
        display: none;
      }
      .go .next:after {
        animation: backFlipDown 0.6s ease-in-out both;
      }
      @keyframes fade {
        100% {
          opacity: 0;
        }
      }
      @keyframes frontFlipDown {
        0% {
          transform: perspective(160px) rotateX(0deg);
        }

        100% {
          transform: perspective(160px) rotateX(-180deg);
        }
      }
      @keyframes backFlipDown {
        0% {
          transform: perspective(160px) rotateX(180deg);
        }

        100% {
          transform: perspective(160px) rotateX(0deg);
        }
      }
      `;
      style = style.replace(/[\r\n]/g, '');
      styleElement.innerText = style;
    }
  }

  class Countdownv2 extends CompNew {
    constructor(parent, config) {
      super(parent, config);
      this.currentValue = 0;
      this.len = 0;
    }

    async initCompDom() {
      let _a, _b;
      let { value, maxValue } = this.uBizData;
      // data只传一个值
      if (!maxValue) {
        maxValue = value;
        value = '0';
      }
      this.currentValue = +value;
      this.len = maxValue.split('').length;
      this.compDom = document.createElement('span')
      ;(_a = this.compDom) === null || _a === void 0
        ? void 0
        : _a.setAttribute('style', `display: block;${this.compStyle}`)
      ;(_b = this.el) === null || _b === void 0
        ? void 0
        : _b.appendChild(this.compDom);
      this.creatPromise();
      this.loadData(+value, +maxValue);
      await this.promise;
      if (this.options.setCountDown) {
        await this._loopLoadData(+value, +maxValue);
      }
    }

    async _loopLoadData(value, maxValue) {
      this.currentValue = value;
      this.creatPromise();
      this.loadData(value, maxValue);
      await this.promise;
      const timer = setTimeout(() => {
        this._loopLoadData(value, maxValue);
        clearTimeout(timer);
      }, 1000);
    }

    creatPromise() {
      if (this.promise) {
        this.promise = undefined;
        this.resolve = undefined;
      }
      this.promise = new Promise((resolve) => {
        this.resolve = resolve;
      });
    }

    loadData(value, maxValue) {
      const { separate, udurationTime, udecimal } = this.options;
      const rateType = {
        0: Math.floor((maxValue - value) / 30) || 1,
        1: +((maxValue - value) / 30).toFixed(1),
        2: +((maxValue - value) / 30).toFixed(2),
      };
      const rate = rateType[udecimal];
      if (maxValue - this.currentValue >= rate) {
        this.currentValue = +(this.currentValue + rate).toFixed(+udecimal);
      } else {
        this.currentValue = maxValue;
      }
      this.compDom.innerHTML = this.formatData(separate);
      // 停止
      if (+this.currentValue >= +maxValue) {
        this.resolve && this.resolve();
        return
      }
      // 循环调用
      const timer = setTimeout(() => {
        this.loadData(value, maxValue);
        clearTimeout(timer);
      }, parseInt(udurationTime) / 30 || 50);
    }

    formatData(separate) {
      // 补零
      const value = this.currentValue
        .toString()
        .padStart(this.len, this.options.autoNumber);
      if (!separate) return value
      // 取整加千分位
      const v = value.split('.');
      return (
        v[0].replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
          return $1 + ','
        }) + `${v[1] ? '.' + v[1] : ''}`
      )
    }

    initOptions() {
      // v2版本样式
      const {
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        fontTextAlign,
        letterSpacing,
      } = this.options;
      const styleV2 = {
        color,
        fontFamily,
        lineHeight,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign: fontTextAlign,
      };
      this.compStyle = getCSSTextFromStyleObj(styleV2);
    }
  }

  class Video extends CompNew {
    initCompDom() {
      let _a;
      this.dom = document.createElement('video');
      this.dom.setAttribute('style', `width:100%;`)
      ;(_a = this.el) === null || _a === void 0
        ? void 0
        : _a.appendChild(this.dom);
    }

    initOptions() {
      if (this.dom && this.options) {
        for (const attr in this.options) {
          if (attr === 'videoSrc') {
            this.dom.src = this.options.videoSrc;
          } else {
            this.dom.setAttribute(attr, this.options[attr] ? attr : '');
          }
        }
      }
    }

    update() {
      this.initOptions();
    }
  }

  const udataImg = `<svg width="175px" height="75px" viewBox="0 0 75 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>jieshuzujian</title>
<g id="大屏编辑器" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="大屏编辑器-接数组件" transform="translate(-72.000000, -103.000000)">
        <g id="左侧导航/二级菜单" transform="translate(44.000000, 76.000000)">
            <g id="卡片/小" transform="translate(16.000000, 16.000000)">
                <g id="图片/小96" transform="translate(0.000000, 0.000000)">
                    <g id="jieshuzujian" transform="translate(12.375000, 11.407407)">
                        <rect id="矩形" x="0" y="0" width="74.25" height="33.1851852"></rect>
                        <path d="M50.3421875,16.5061728 C50.3421875,23.8467872 44.4246511,29.7975309 37.125,29.7975309 C31.8999056,29.7975309 27.2636158,26.720868 25.1326467,22.1026495 C24.3314718,21.9765021 23.71875,21.2793428 23.71875,20.4382716 C23.71875,19.5075695 24.4690228,18.7530864 25.3945312,18.7530864 C26.3200397,18.7530864 27.0703125,19.5075695 27.0703125,20.4382716 C27.0703125,20.7627404 26.9791232,21.0657913 26.8211106,21.3229216 C28.6519328,25.2885573 32.6358305,27.9308642 37.125,27.9308642 C43.2998777,27.9308642 48.3241631,22.9769481 48.4821084,16.8057152 L48.4859375,16.5061728 L50.3421875,16.5061728 Z M34.531242,17.4449999 L34.51475,18.5608148 L41.2542362,18.5611614 L41.2542362,20.427828 L34.48775,20.4278148 L34.474347,21.359156 L32.0495318,19.5146603 L34.531242,17.4449999 Z M37.125,3.21481481 C42.3634969,3.21481481 46.9937637,6.30572435 49.118067,10.9102843 C49.9185282,11.0358436 50.53125,11.7330029 50.53125,12.5740741 C50.53125,13.5047762 49.7809772,14.2592593 48.8554688,14.2592593 C47.9299603,14.2592593 47.1796875,13.5047762 47.1796875,12.5740741 C47.1796875,12.2496053 47.2708768,11.9465544 47.4288894,11.6894241 C45.60436,7.73613076 41.6255432,5.08148148 37.125,5.08148148 C30.9501223,5.08148148 25.9258369,10.0353975 25.7678916,16.2066304 L25.7640625,16.5061728 L23.9078125,16.5061728 C23.9078125,9.1655585 29.8253489,3.21481481 37.125,3.21481481 Z M40.0950456,11.827716 L42.5767558,13.8973763 L40.1519406,15.741872 L40.13775,14.8098148 L33.0066409,14.8105441 L33.0066409,12.9438774 L40.11075,12.9438148 L40.0950456,11.827716 Z" id="形状结合" fill="#3284FF"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</g>
</svg>`;

  class Udata extends CompNew {
    initCompDom() {
      let _a, _b;
      this.dom = document.createElement('div');
      this.dom.setAttribute(
        'style',
        'display:flex;justify-content:center;align-items:center;'
      );
      const img = document.createElement('div');
      img.innerHTML = udataImg
      ;(_a = this.dom) === null || _a === void 0 ? void 0 : _a.appendChild(img)
      ;(_b = this.el) === null || _b === void 0
        ? void 0
        : _b.appendChild(this.dom);
    }
  }

  const CompMap = {
    ctext: Text,
    clayout: Layer,
    ctextlist: TextList,
    ciframe: Iframe,
    ciframedpd: Iframe,
    cprogress: Progress,
    ctimecard: Timecard,
    echarts: Echarts,
    cblankcomponent: Blankcomponent,
    ccountdown: Countdown,
    ccountdown_v2: Countdownv2,
    cvideo: Video,
    udata: Udata,
  };

  // 是否加载完成
  let isLoad = false;
  // 是否加载中
  let isLoading = false;
  // 回调集体
  let cbList = [];

  const BaseAdapter = UI.adapterManager.getBaseAdapter();
  class UdatavAdapter extends BaseAdapter {
    static factory(type, id, parent, config) {
      return new UdatavAdapter(type, id, parent, config)
    }

    async _initComponent() {
      const compType = this.config.options.type;
      const Comp = CompMap[compType];

      if (Comp) {
        if (isLoad) {
          this._render(Comp);
        } else {
          if (isLoading) {
            cbList.push(() => {
              this._render(Comp);
            });
          } else {
            isLoading = true;
            await this.loadResource();
            isLoad = true;
            this._render(Comp);

            cbList.forEach((item) => {
              item();
            });
            cbList = [];
          }
        }
      } else {
        console.warn(`${compType}：该类型暂时没有实现，请联系开发者！！！`);
        this.componentInstance = {
          setOption() {
            // 置空
          },
          setData() {
            // 置空
          },
          resize() {
            // 置空
          },
        };
        this._componentComplete();
        this.complete = true;
      }
    }

    _render(Comp) {
      this.parent.contentEl.appendChild(this.dom);
      try {
        this.componentInstance = new Comp(this.dom, this.config);
        this.componentInstance._initComponent();

        console.warn('_render', this, this.config);

        if (Reflect.has(this.config, 'data')) {
          this.componentInstance.setOption(this.config.data);
        }
        if (Reflect.has(this.config, 'opts')) {
          this.componentInstance.setOption(this.config.opts);
        }

        this._componentComplete();
        this.complete = true;
      } catch (e) {
        console.error(e);
      }
    }

    // 加载依赖资源
    async loadResource() {
      const libs = [
        'jquery.min.js',
        'echarts410.js',
        'echarts-gl110.js',
        'echarts-liquidfill4echarts4.js',
      ];
      for (const lib of libs) {
        await loadScript(lib.split('.')[0], `/s-static/lib/${lib}`);
      }
    }

    setOption(opts) {
      if (!opts) {
        return
      }
      this.config.opts = opts;
      this.componentInstance.setOption(opts);
    }

    setData(data) {
      this.config.data = data;
      this.componentInstance.setData(data);
    }

    _destroyComponent() {
      this.componentInstance && this.componentInstance.destory();
      this.config = null;
      this.dom &&
        this.parent.contentEl &&
        this.parent.contentEl.removeChild(this.dom);
      this.parent.adapter = null;

      // 恢复预览模式锁
      this.parent.previewModeLock = true;
      this.parent = null;
    }

    toJSON() {
      const json = {
        type: this.type,
        name: this.name,
      };
      const instance = this.componentInstance;
      if (instance) {
        json.data = this.componentInstance.uBizData;

        if (instance.compType === 'echarts' && instance.config) {
          json.opts = instance.config;
        } else {
          json.opts = this.componentInstance.options;
        }
      }
      this.config.option && (json.option = this.config.option);
      this.config.options && (json.options = this.config.options);

      return json
    }
  }

  // 获取真实销毁节点，编组内容器删除调整为编组自身删除
  function getRealDestroyComps(comps) {
    const parents = {};
    const result = [];
    comps.forEach((comp) => {
      const parentId = comp.$parent.id;

      if (!parents[parentId]) {
        parents[parentId] = {
          comp: comp.$parent,
          children: [],
        };
      }
      parents[parentId].children.push(comp);
    });

    Object.keys(parents).forEach((id) => {
      const parent = parents[id];
      if (
        parent.comp.type === 'Group' &&
        parent.comp.children.length === parent.children.length
      ) {
        result.push(parent.comp);
      } else {
        result.push(...parent.children.sort((a, b) => b.$ranking - a.$ranking));
      }
    });

    return result
  }

  // 更新多个节点多个属性值
  function updateCompsAttrs(ui, compsAttrs) {
    ui.updateCompsAttrs(
      compsAttrs.map((compAttrs) => {
        return {
          comp: ui.$queryById(compAttrs.compId),
          attrs: deepClone(compAttrs.attrs),
        }
      })
    );
  }

  async function updateAdaptersUndo(ui, { compAdapters }) {
    return Promise.all(
      compAdapters.map((item) => {
        const container = ui.$queryById(item.compId);
        container.adapter.$destroy();
        const type = getAdapterType(item.old.options, item.old.kpOption);
        const adapter = container.$options.adapterManager.create(type);
        return adapter.init(container, item.old.options, item.old.kpOption)
      })
    )
  }
  async function updateAdaptersRedo(ui, { compAdapters }) {
    return Promise.all(
      compAdapters.map((item) => {
        const container = ui.$queryById(item.compId);
        container.adapter.$destroy();
        const type = getAdapterType(item.new.options, item.new.kpOption);
        const adapter = container.$options.adapterManager.create(type);
        return adapter.init(container, item.new.options, item.new.kpOption)
      })
    )
  }

  async function destroyCompsUndo(ui, { compObjs }) {
    const compList = [];
    const dataSubscriberList = [];
    for (const compObj of compObjs) {
      const comp = ui.$options.manager.create(compObj.compOptions.type);
      await comp.init(ui.$queryById(compObj.parentId), compObj.compOptions);

      if (compObj.nextId) {
        comp.moveToTarget(ui.$queryById(compObj.nextId), 'before');
      }

      if (compObj.dataSubscriberList) {
        dataSubscriberList.push(compObj);
      }

      compList.push(comp);
    }

    dataSubscriberList.forEach((compObj) => {
      compObj.dataSubscriberList.forEach((item) => {
        ui.$queryById(item.sourceId).adapter.$data.dataSource.set(
          'subscribeData',
          {
            id: compObj.compId,
            level: item.level,
          }
        );
      });
    });
    ui.select(compList);
  }

  function destroyCompsRedo(ui, { compObjs }) {
    ui.destroyComps(compObjs.map((compObj) => ui.$queryById(compObj.compId)));
  }

  async function dismissGroupsUndo(ui, { groupObjs }) {
    const groupList = [];
    for (const groupObj of groupObjs) {
      const group = ui.$options.manager.create('Group');
      await groupInit(
        group,
        groupObj.childrenId.map((id) => ui.$queryById(id)),
        groupObj.option
      );
      groupList.push(group);
    }
    ui.select(groupList);
  }

  function dismissGroupsRedo(ui, { groupObjs }) {
    groupObjs.forEach((groupObj) => ui.$queryById(groupObj.groupId).dismiss());
  }

  function updateCompsAttrsUndo(ui, { oldCompsAttrs }) {
    updateCompsAttrs(ui, oldCompsAttrs);
  }
  function updateCompsAttrsRedo(ui, { newCompsAttrs }) {
    updateCompsAttrs(ui, newCompsAttrs);
  }

  function __updateSelectUndo(ui, { oldSelectCompIds, newSelectCompIds }) {
    newSelectCompIds
      .filter((compId) => !oldSelectCompIds.includes(compId))
      .forEach((compId) => ui.$queryById(compId)._updateSelect(false));
    ui.select(oldSelectCompIds.map((compId) => ui.$queryById(compId)));
  }
  function __updateSelectRedo(ui, { oldSelectCompIds, newSelectCompIds }) {
    oldSelectCompIds
      .filter((compId) => !newSelectCompIds.includes(compId))
      .forEach((compId) => ui.$queryById(compId)._updateSelect(false));
    ui.select(newSelectCompIds.map((compId) => ui.$queryById(compId)));
  }

  async function parseJSONUndo$1(ui, { oldDef, selectIds }) {
    await ui.parseJSON(oldDef);
    ui.select(selectIds.map((id) => ui.$queryById(id)));
  }

  async function parseJSONRedo$1(ui, { newDef }) {
    await ui.parseJSON(newDef);
  }

  function selectUndo$1(ui, { selectIds }) {
    ui.select(selectIds.map((id) => ui.$queryById(id)));
  }

  function selectRedo$1(ui, { compIds }) {
    ui.select(compIds.map((id) => ui.$queryById(id)));
  }

  function alignToUndo(ui, { oldCompsAttrs }) {
    updateCompsAttrs(ui, oldCompsAttrs);
  }
  function alignToRedo(ui, { newCompsAttrs }) {
    updateCompsAttrs(ui, newCompsAttrs);
  }

  function equidistantUndo(ui, { oldCompsAttrs }) {
    updateCompsAttrs(ui, oldCompsAttrs);
  }
  function equidistantRedo(ui, { newCompsAttrs }) {
    updateCompsAttrs(ui, newCompsAttrs);
  }
  class CommandUi extends Ui {
    // 更新多个节点的多个属性
    updateCompsAttrs(compsAttrs) {
      const fn = super.updateCompsAttrs.bind(this);

      return this.$root.$command.add({
        name: '更新多个节点的多个属性',
        type: 'fn',
        args: {
          value: [
            compsAttrs.map((compsAttr) => {
              return {
                compId: compsAttr.comp.id,
                attrs: deepClone(compsAttr.attrs),
              }
            }),
          ],
          handler: function (ui, { value }) {
            ui.updateCompsAttrs(
              value[0].map((compAttr) => {
                return {
                  comp: ui.$queryById(compAttr.compId),
                  attrs: compAttr.attrs,
                }
              })
            );
          },
        },
        exec() {
          const args = {
            value: [compsAttrs],
          };
          const oldCompsAttrs = [];
          const newCompsAttrs = [];
          compsAttrs.forEach((item) => {
            oldCompsAttrs.push({
              compId: item.comp.id,
              attrs: item.attrs.map((attr) => ({
                name: attr.name,
                value: deepClone(attr.oldValue),
              })),
            });
            newCompsAttrs.push({
              compId: item.comp.id,
              attrs: item.attrs.map((attr) => ({
                name: attr.name,
                value: deepClone(attr.value),
              })),
            });
          });
          const result = fn(compsAttrs);

          return {
            result,
            args,
            params: {
              oldCompsAttrs,
              newCompsAttrs,
            },
          }
        },
        undo: updateCompsAttrsUndo,
        redo: updateCompsAttrsRedo,
      })
    }

    // 更新选择
    __updateSelect(selectComps) {
      const self = this;
      const fn = super.__updateSelect.bind(this);

      return this.$root.$command.add({
        name: '更新选择',
        type: 'fn',
        args: {
          value: [selectComps.map((selectComp) => selectComp.id)],
          handler: function (ui, container, value) {
            return [value[0].map((id) => ui.$queryById(id))]
          },
        },
        exec() {
          const oldSelectCompIds = self.$selectComponent.map((comp) => comp.id);
          const result = fn(selectComps);

          return {
            result,
            params: {
              oldSelectCompIds,
              newSelectCompIds: self.$selectComponent.map((comp) => comp.id),
            },
          }
        },
        undo: __updateSelectUndo,
        redo: __updateSelectRedo,
      })
    }

    // 导入定义文件
    async parseJSON(def, options) {
      const self = this;
      const fn = super.parseJSON.bind(this);

      return this.$root.$command.asyncAdd({
        name: '导入定义文件',
        type: 'fn',
        args: {
          value: [deepClone(def), deepClone(options)],
        },
        async exec() {
          const newDef = deepClone(def);
          const newOptions = deepClone(options);
          const oldDef = self.toJSON();
          const oldOptions = self.toJSON();
          const selectIds = self.$selectComponent.map((comp) => comp.id);
          const result = await fn(def, options);

          return {
            result,
            params: {
              newDef,
              newOptions,
              oldDef,
              oldOptions,
              selectIds,
            },
          }
        },
        undo: parseJSONUndo$1,
        redo: parseJSONRedo$1,
      })
    }

    // 选择
    select(comps) {
      const self = this;
      const fn = super.select.bind(this);

      return this.$root.$command.add({
        name: '选择',
        type: 'fn',
        args: {
          value: [comps.map((comp) => comp.id)],
          handler: function (ui, container, value) {
            return [value[0].map((id) => ui.$queryById(id))]
          },
        },
        exec() {
          const selectIds = self.$selectComponent.map((comp) => comp.id);
          const result = fn(comps);

          return {
            result,
            params: {
              compIds: comps.map((comp) => comp.id),
              selectIds,
            },
          }
        },
        undo: selectUndo$1,
        redo: selectRedo$1,
      })
    }

    // 对齐
    alignTo(type, comps) {
      const fn = super.alignTo.bind(this);

      return this.$root.$command.add({
        name: '对齐',
        type: 'fn',
        args: {
          value: [type, comps.map((comp) => comp.id)],
          handler: function (ui, container, value) {
            return [value[0], value[1].map((id) => ui.$queryById(id))]
          },
        },
        exec() {
          const oldCompsAttrs = getCompAttrs(comps);
          const result = fn(type, comps);
          const newCompsAttrs = getCompAttrs(comps);

          return {
            result,
            params: {
              newCompsAttrs,
              oldCompsAttrs,
            },
          }
        },
        undo: alignToUndo,
        redo: alignToRedo,
      })
    }

    // 等间距
    equidistant(type, comps, value) {
      const fn = super.equidistant.bind(this);

      return this.$root.$command.add({
        name: '等间距',
        type: 'fn',
        args: {
          value: [type, comps.map((comp) => comp.id), value],
          handler: function (ui, container, _value) {
            const [a, b, c] = _value;
            return [a, b.map((id) => ui.$queryById(id)), c]
          },
        },
        exec() {
          const oldCompsAttrs = getCompAttrs(comps);
          const result = fn(type, comps, value);
          const newCompsAttrs = getCompAttrs(comps);

          return {
            result,
            params: {
              newCompsAttrs,
              oldCompsAttrs,
            },
          }
        },
        undo: equidistantUndo,
        redo: equidistantRedo,
      })
    }

    // 更新适配器列表
    async updateAdapters(options = [], config = {}) {
      const fn = super.updateAdapters.bind(this);

      return this.$root.$command.asyncAdd({
        name: '更新适配器列表',
        type: 'fn',
        args: {
          value: [
            options.map((option) => {
              return {
                compId: option.comp.id,
                option: option.option,
              }
            }),
            deepClone(config),
          ],
          handler: function (ui, container, value) {
            const [a] = value;

            return [
              a.map((option) => {
                return {
                  comp: ui.$queryById(option.compId),
                  option: option.option,
                }
              }),
            ]
          },
        },
        async exec() {
          const oldCompAdapters = options.map((item) => {
            const adapterOptions = deepClone(item.comp.adapter.toJSON());
            return {
              comp: item.comp,
              option: adapterOptions.option,
              kpOption: adapterOptions.kpOption,
            }
          });
          const adapters = await fn(options, config);

          const compAdapters = adapters.map((adapter) => {
            const compAdapterOptions = deepClone(adapter.toJSON());
            const oldCompAdapter = oldCompAdapters.find(
              (item) => item.comp === adapter.$parent
            );
            return {
              compId: adapter.$parent.id,
              new: {
                options: compAdapterOptions.option,
                kpOption: compAdapterOptions.kpOption,
              },
              old: {
                options: oldCompAdapter.option,
                kpOption: oldCompAdapter.kpOption,
              },
            }
          });

          return {
            result: adapters,
            params: {
              compAdapters,
            },
          }
        },
        undo: updateAdaptersUndo,
        redo: updateAdaptersRedo,
      })
    }

    // 解散多个编组
    dismissGroups(groups = []) {
      const fn = super.dismissGroups.bind(this);

      return this.$root.$command.add({
        name: '解散多个编组',
        type: 'fn',
        args: {
          value: [groups.map((group) => group.id)],
          handler: function (ui, container, value) {
            const [a] = value;
            return [a.map((id) => ui.$queryById(id))]
          },
        },
        exec() {
          const groupObjs = groups.map((group) => {
            const groupOption = deepClone(group.toJSON());

            return {
              groupId: group.id,
              option: groupOption.option,
              childrenId: group.children.map((child) => child.id),
            }
          });
          const result = fn(groups);

          return {
            result,
            params: {
              groupObjs,
            },
          }
        },
        undo: dismissGroupsUndo,
        redo: dismissGroupsRedo,
      })
    }

    // 销毁多个节点
    destroyComps(comps = []) {
      const fn = super.destroyComps.bind(this);

      return this.$root.$command.add({
        name: '销毁多个节点',
        key: 'destroyComps',
        type: 'fn',
        args: {
          value: [comps.map((comp) => comp.id)],
          handler: function (ui, container, value) {
            const [a] = value;
            return [a.map((id) => ui.$queryById(id))]
          },
        },
        exec() {
          const _comps = getRealDestroyComps(comps);
          const compObjs = _comps.map((comp) => {
            return {
              parentId: comp.$parent.id,
              nextId: comp.$next?.id,
              compId: comp.id,
              compOptions: deepClone(comp.toJSON()),
              dataSubscriberList:
                comp.adapter?.$data.subscriber.subscriberList.map((item) => {
                  return {
                    sourceId: item.dataItem.parent.$parent.id,
                    level: deepClone(item.option.level),
                  }
                }),
            }
          });
          const result = fn(_comps);

          return {
            result,
            params: {
              compObjs,
            },
          }
        },
        undo: destroyCompsUndo,
        redo: destroyCompsRedo,
      })
    }
  }

  function getCompAttrs(comps) {
    return comps.map((comp) => {
      return {
        compId: comp.id,
        attrs: [
          {
            name: 'top',
            value: comp.top,
          },
          {
            name: 'left',
            value: comp.left,
          },
        ],
      }
    })
  }

  // 更新属性
  function updateAttr$1(instance, fn, attr, value, _oldValue) {
    return instance.$root.$command.add({
      name: '更新属性',
      type: 'fn',
      noAdd: !!attr.option.noAdd,
      args: {
        selfId: instance.id,
        value: [attr.name, value, _oldValue],
        handler: function (ui, { selfId, value: _value }) {
          const [name, newValue] = _value;
          ui.$queryById(selfId)[name] = newValue;
        },
      },
      exec() {
        const result = fn(attr, value, _oldValue);

        return {
          result,
          params: {
            selfId: instance.id,
            name: attr.name,
            newValue: deepClone(value),
            oldValue: deepClone(_oldValue),
          },
        }
      },
      undo(ui, { selfId, name, oldValue }) {
        ui.$queryById(selfId)[name] = oldValue;
      },
      redo(ui, { selfId, name, newValue }) {
        ui.$queryById(selfId)[name] = newValue;
      },
    })
  }

  // 更新多个属性
  function updateAttrs(instance, fn, attrs = []) {
    return instance.$root.$command.add({
      name: '更新多个属性',
      type: 'fn',
      args: {
        selfId: instance.id,
        value: [deepClone(attrs)],
        handler: function (ui, { selfId, value }) {
          ui.$queryById(selfId).updateAttrs(...value);
        },
      },
      exec() {
        const oldAttrs = attrs.map((attr) => {
          return {
            name: attr.name,
            value: instance[attr.name],
          }
        });
        const result = fn(attrs);

        return {
          result,
          params: {
            selfId: instance.id,
            oldAttrs,
            newAttrs: attrs,
          },
        }
      },
      undo(ui, { selfId, oldAttrs }) {
        ui.$queryById(selfId).updateAttrs(oldAttrs);
      },
      redo(ui, { selfId, newAttrs }) {
        ui.$queryById(selfId).updateAttrs(newAttrs);
      },
    })
  }

  // 移到目标位置
  function moveToTarget(instance, fn, target, type) {
    return instance.$root.$command.add({
      name: '移到目标位置',
      type: 'fn',
      args: {
        value: [target.id, type],
        handler: function (ui, container, value) {
          const [a, b] = value;
          return [ui.$queryById(a), b]
        },
      },
      exec() {
        const OldParentId = instance.$parent.id;
        const OldNextId = instance.$next?.id;
        const result = fn(target, type);
        const newParentId = instance.$parent.id;
        const newNextId = instance.$next?.id;

        return {
          result,
          params: {
            type,
            selfId: instance.id,
            targetId: target.id,
            OldParentId,
            OldNextId,
            newParentId,
            newNextId,
          },
        }
      },
      undo(ui, { selfId, OldNextId, OldParentId }) {
        const self = ui.$queryById(selfId);
        if (OldNextId) {
          self.moveToTarget(ui.$queryById(OldNextId), 'before');
        } else {
          self.moveToTarget(ui.$queryById(OldParentId));
        }
        self.select();
      },
      redo(ui, { selfId, newNextId, newParentId }) {
        const self = ui.$queryById(selfId);
        if (newNextId) {
          self.moveToTarget(ui.$queryById(newNextId), 'before');
        } else {
          self.moveToTarget(ui.$queryById(newParentId));
        }
        self.select();
      },
    })
  }

  // 编组undo
  function groupUndo(ui, { groupId, compObjs }) {
    const group = ui.$queryById(groupId);
    const compList = [...group.children];
    group.dismiss();
    compObjs.forEach(({ compId, nextId, parentId }) => {
      if (nextId) {
        ui.$queryById(compId).moveToTarget(ui.$queryById(nextId), 'before');
      } else {
        ui.$queryById(compId).moveToTarget(ui.$queryById(parentId));
      }
    });
    ui.select(compList);
  }

  // 编组redo
  async function groupRedo(
    ui,
    { selfId, compObjs, oldOption, oldConfig }
  ) {
    const self = ui.$queryById(selfId);
    const group = self.$options.manager.create('Group');
    await groupInit(
      group,
      [self, ...compObjs.map((compObj) => ui.$queryById(compObj.compId))],
      oldOption,
      oldConfig
    );
  }

  // 选择
  function selectLayer(instance, fn) {
    return instance.$root.$command.add({
      name: '选择图层',
      type: 'fn',
      args: {
        value: [],
      },
      exec() {
        const oldSelectId = instance.$root.$selectLayer?.id;
        const result = fn();

        return {
          result,
          params: {
            oldSelectId,
            newSelectId: instance.id,
          },
        }
      },
      undo(ui, { oldSelectId }) {
        ui.$queryById(oldSelectId).select();
      },
      redo(ui, { newSelectId }) {
        ui.$queryById(newSelectId).select();
      },
    })
  }

  // 创建容器
  async function createContainer(instance, fn, options, config = {}) {
    return instance.$root.$command.asyncAdd({
      name: '创建容器',
      type: 'fn',
      args: {
        selfId: instance.id,
        value: [deepClone(options), deepClone(config)],
        handler: async function (ui, { selfId, value }) {
          await ui.$queryById(selfId).createContainer(...value);
        },
      },
      async exec() {
        const selectIds = instance.$root.$selectComponent.map((comp) => comp.id);
        const container = await fn(options, config);

        return {
          result: container,
          params: {
            containerId: container.id,
            newOptions: deepClone(options),
            newConfig: deepClone(config),
            selectIds,
            selfId: instance.id,
            nextId: container.$next?.id,
          },
        }
      },
      undo(ui, { containerId, selectIds }) {
        const container = ui.$queryById(containerId);
        container.destroy();
        ui.select(selectIds.map((id) => ui.$queryById(id)));
      },
      async redo(ui, { nextId, selfId, newOptions, newConfig = {} }) {
        const layer = ui.$queryById(selfId);
        const container = layer.$options.manager.create(newOptions.type);
        await container.init(layer, newOptions, newConfig.container);
        if (nextId) {
          container.moveToTarget(ui.$queryById(nextId), 'before');
        } else {
          container.moveToTarget(layer);
        }

        if (newConfig.lock) {
          container.isLock = true;
        }
        if (newConfig.select) {
          container.select();
        }
      },
    })
  }

  function setSizeUndo(ui, { selfId, oldAttrs, oldZoom }) {
    const self = ui.$queryById(selfId);
    self.updateAttrs(oldAttrs);
    self.canvasZoom = oldZoom;
  }
  function setSizeRedo(ui, { selfId, newAttrs }) {
    const self = ui.$queryById(selfId);
    self.updateAttrs(newAttrs);
    self.updateCanvasCenter();
  }
  function updateCanvasCenterUndo(ui, { selfId, oldZoom }) {
    ui.$queryById(selfId).canvasZoom = oldZoom;
  }
  function updateCanvasCenterRedo(ui, { selfId }) {
    ui.$queryById(selfId).updateCanvasCenter();
  }
  function createLayerUndo(ui, { layerId }) {
    ui.$queryById(layerId).destroy();
  }
  async function createLayerRedo(ui, { selfId, nextId, newOptions, newConfig }) {
    const canvas = ui.$queryById(selfId);
    const layer = canvas.$options.manager.create(newOptions.type);
    await layer.init(canvas, newOptions);
    if (nextId) {
      layer.moveToTarget(ui.$queryById(nextId), 'before');
    } else {
      layer.moveToTarget(canvas);
    }

    if (newConfig.select) {
      layer.select();
    }
  }
  function selectUndo(ui, { selfId, selectIds }) {
    ui.$queryById(selfId).select(selectIds.map((id) => ui.$queryById(id)));
  }
  function selectRedo(ui, { selfId }) {
    ui.$queryById(selfId).select();
  }

  function resetFilterUndo(ui, params) {
    undoExtract(ui, params);
  }
  function resetFilterRedo(ui, { selfId }) {
    ui.$queryById(selfId).resetFilter();
  }

  function setFilterUndo(ui, { selfId, oldKey, oldValue }) {
    ui.$queryById(selfId).setFilter(oldKey, oldValue);
  }
  function setFilterRedo(ui, { selfId, oldKey, newValue }) {
    ui.$queryById(selfId).setFilter(oldKey, newValue);
  }

  function clearFilerUndo(ui, params) {
    undoExtract(ui, params);
  }
  function clearFilerRedo(ui, { selfId }) {
    ui.$queryById(selfId).clearFiler();
  }

  class CommandCanvas extends Canvas {
    // 更新属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr$1(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      return updateAttrs(this, super.updateAttrs.bind(this), attrs)
    }

    // 设置画布尺寸
    setSize(attrs = []) {
      const instance = this;
      const fn = super.setSize.bind(this);

      return this.$root.$command.add({
        name: '设置画布尺寸',
        type: 'fn',
        args: {
          value: deepClone(attrs),
        },
        exec() {
          const oldAttrs = attrs.map((attr) => {
            return {
              name: attr.name,
              value: instance[attr.name],
            }
          });
          const oldZoom = deepClone(instance.canvasZoom);
          const result = fn(attrs);

          return {
            result,
            params: {
              selfId: instance.id,
              oldZoom,
              oldAttrs: oldAttrs,
              newAttrs: deepClone(attrs),
            },
          }
        },
        undo: setSizeUndo,
        redo: setSizeRedo,
      })
    }

    // 更新画布居中位置
    updateCanvasCenter() {
      const self = this;
      const fn = super.updateCanvasCenter.bind(this);

      return this.$root.$command.add({
        name: '更新画布居中位置',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          const oldZoom = deepClone(self.canvasZoom);
          const result = fn();

          return {
            result,
            params: {
              selfId: self.id,
              oldZoom,
            },
          }
        },
        undo: updateCanvasCenterUndo,
        redo: updateCanvasCenterRedo,
      })
    }

    // 创建图层
    async createLayer(options = {}, config = {}) {
      const self = this;
      const fn = super.createLayer.bind(this);

      return this.$root.$command.asyncAdd({
        name: '创建图层',
        type: 'fn',
        args: {
          value: [deepClone(options), deepClone(config)],
        },
        async exec() {
          const selectIds = self.$root.$selectComponent.map((comp) => comp.id);
          const layer = await fn(options, config);

          return {
            result: layer,
            params: {
              selfId: self.id,
              layerId: layer.id,
              selectIds,
              newOptions: deepClone(options),
              newConfig: deepClone(config),
              nextId: layer.$next?.id,
            },
          }
        },
        undo: createLayerUndo,
        redo: createLayerRedo,
      })
    }

    // 选择
    select() {
      const self = this;
      const fn = super.select.bind(this);

      return this.$root.$command.add({
        name: '画布选择',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          const selectIds = self.$root.$selectComponent.map((comp) => comp.id);
          const result = fn();

          return {
            result,
            params: {
              selectIds,
              selfId: self.id,
            },
          }
        },
        undo: selectUndo,
        redo: selectRedo,
      })
    }

    // 重置滤镜
    resetFilter() {
      const self = this;
      const fn = super.resetFilter.bind(this);

      return this.$root.$command.add({
        name: '重置滤镜',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          return execExtract$1(self, fn)
        },
        undo: resetFilterUndo,
        redo: resetFilterRedo,
      })
    }

    // 设置滤镜
    setFilter(key, value) {
      const self = this;
      const fn = super.setFilter.bind(this);

      return this.$root.$command.add({
        name: '设置滤镜',
        type: 'fn',
        args: {
          value: [key, value],
        },
        exec() {
          const args = {
            value: [key, value],
          };
          const oldValue = deepClone(self.filters[key]);
          const result = fn(key, value);

          return {
            result,
            args,
            params: {
              selfId: self.id,
              oldKey: deepClone(key),
              newValue: deepClone(value),
              oldValue,
            },
          }
        },
        undo: setFilterUndo,
        redo: setFilterRedo,
      })
    }

    // 关闭滤镜
    clearFiler() {
      const self = this;
      const fn = super.clearFiler.bind(this);

      return this.$root.$command.add({
        name: '设置滤镜',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          return execExtract$1(self, fn)
        },
        undo: clearFilerUndo,
        redo: clearFilerRedo,
      })
    }
  }

  function execExtract$1(self, fn) {
    const oldValue = deepClone(self.filters);
    const result = fn();

    return {
      result,
      params: {
        selfId: self.id,
        oldValue,
      },
    }
  }

  function undoExtract(ui, { selfId, oldValue }) {
    const comp = ui.$queryById(selfId);
    if (oldValue) {
      comp.resetFilter();
      for (const name in oldValue) {
        comp.setFilter(name, oldValue[name]);
      }
    } else {
      comp.clearFiler();
    }
  }

  async function destroyUndo$1(ui, { parentId, oldOptions, nextId }) {
    const canvas = ui.$queryById(parentId);
    const layer = canvas.$options.manager.create(oldOptions.type);
    await layer.init(canvas, oldOptions, {
      nextComp: ui.$queryById(nextId),
    });
  }

  function destroyRedo$1(ui, { selfId }) {
    ui.$queryById(selfId).destroy();
  }

  function parserTemplateUndo(ui, { compsOptions, selectIds }) {
    compsOptions.forEach(({ compId }) => ui.$queryById(compId).destroy());
    ui.select(selectIds.map((id) => ui.$queryById(id)));
  }

  async function parserTemplateRedo(ui, params) {
    await redoExtract(ui, params);
  }

  function parseJSONUndo(ui, { compsOptions, selectIds }) {
    compsOptions.forEach(({ compId }) => ui.$queryById(compId).destroy());
    ui.select(selectIds.map((id) => ui.$queryById(id)));
  }

  async function parseJSONRedo(ui, params) {
    return redoExtract(ui, params)
  }
  class CommandLayer extends Layer$1 {
    // 更新属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr$1(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      return updateAttrs(this, super.updateAttrs.bind(this), attrs)
    }

    // 移到目标位置
    moveToTarget(target, type) {
      return moveToTarget(this, super.moveToTarget.bind(this), target, type)
    }

    // 选择
    select() {
      selectLayer(this, super.select.bind(this));
    }

    // 创建容器
    createContainer(attr, value, oldValue) {
      return createContainer(
        this,
        super.createContainer.bind(this),
        attr,
        value)
    }

    // 布局模板
    async parserTemplate(options, config = {}) {
      const self = this;
      const fn = super.parserTemplate.bind(this);

      return this.$root.$command.asyncAdd({
        name: '布局模板',
        type: 'fn',
        args: {
          value: [deepClone(options), deepClone(config)],
        },
        async exec() {
          return execExtract(self, fn, options, config)
        },
        undo: parserTemplateUndo,
        redo: parserTemplateRedo,
      })
    }

    // 导入定义文件
    async parseJSON(options, config = {}) {
      const self = this;
      const fn = super.parseJSON.bind(this);

      return this.$root.$command.asyncAdd({
        name: '图层导入定义文件',
        type: 'fn',
        args: {
          value: [deepClone(options), deepClone(config)],
        },
        async exec() {
          return execExtract(self, fn, options, config)
        },
        undo: parseJSONUndo,
        redo: parseJSONRedo,
      })
    }

    // 图层销毁
    destroy() {
      const self = this;
      const fn = super.destroy.bind(this);

      return this.$root.$command.add({
        name: '图层销毁',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          const oldOptions = deepClone(self.toJSON());
          const parentId = self.$parent.id;
          const selfId = self.id;
          const nextId = self.$next?.id;
          const result = fn();

          return {
            result,
            params: {
              selfId,
              parentId,
              nextId,
              oldOptions,
            },
          }
        },
        undo: destroyUndo$1,
        redo: destroyRedo$1,
      })
    }
  }

  async function execExtract(self, fn, options, config) {
    const selectIds = self.$root.$selectComponent.map((comp) => comp.id);
    const comps = await fn(options, config);

    return {
      result: comps,
      params: {
        selfId: self.id,
        oldOptions: deepClone(options),
        compsOptions: comps.map((comp) => {
          return {
            compId: comp.id,
            def: deepClone(comp.toJSON()),
          }
        }),
        oldConfig: deepClone(config),
        selectIds,
      },
    }
  }

  async function redoExtract(ui, { compsOptions, selfId, oldConfig }) {
    const layer = ui.$queryById(selfId);

    const comps = await Promise.all(
      compsOptions.map(({ def }) => {
        return layer.$options.manager.create(def.type).init(layer, def)
      })
    );

    if (oldConfig.select) {
      ui.select(comps);
    }

    return comps
  }

  async function destroyUndo(ui, { parentId, parent, oldOptions, nextId }) {
    const canvas = ui.$queryById(parentId);
    const layer = canvas.$options.manager.create(oldOptions.type);
    await layer.init(canvas, oldOptions, {
      nextComp: ui.$queryById(nextId),
    });
  }
  function destroyRedo(ui, { selfId }) {
    ui.$queryById(selfId).destroy();
  }
  class CommandThingJSLayer extends ThingJSLayer {
    // 更新属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr$1(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      return updateAttrs(this, super.updateAttrs.bind(this), attrs)
    }

    // 移到目标位置
    moveToTarget(target, type) {
      return moveToTarget(this, super.moveToTarget.bind(this), target, type)
    }

    // 选择
    select() {
      selectLayer(this, super.select.bind(this));
    }

    // 创建容器
    createContainer(attr, value, oldValue) {
      return createContainer(
        this,
        super.createContainer.bind(this),
        attr,
        value)
    }

    // 3D图层销毁
    destroy() {
      const self = this;
      const fn = super.destroy.bind(this);

      return this.$root.$command.add({
        name: '3D图层销毁',
        type: 'fn',
        args: {
          value: [],
        },
        exec() {
          const oldOptions = deepClone(self.toJSON());
          const parentId = self.$parent.id;
          const nextId = self.$next?.id;
          const result = fn();

          return {
            result,
            params: {
              selfId: self.id,
              parentId,
              nextId,
              oldOptions,
            },
          }
        },

        undo: destroyUndo,
        redo: destroyRedo,
      })
    }
  }

  async function dismissUndo(ui, { groupId, parentId, groupOptions }) {
    const group = ui.$queryById(groupId);
    await group.init(ui.$queryById(parentId), groupOptions);
    group.select();
  }

  function dismissRedo(ui, { groupId }) {
    const group = ui.$queryById(groupId);
    const comps = [...group.children];
    group.dismiss();
    ui.select(comps);
  }

  function createGroupUndo$1(ui, options) {
    groupUndo(ui, options);
  }
  async function createGroupRedo$1(ui, options) {
    await groupRedo(ui, options);
  }
  class CommandGroup extends Group {
    // 更新属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr$1(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      return updateAttrs(this, super.updateAttrs.bind(this), attrs)
    }

    // 移到目标位置
    moveToTarget(target, type) {
      return moveToTarget(this, super.moveToTarget.bind(this), target, type)
    }

    // 创建编组
    async createGroup(comps = [], option = {}, config = {}) {
      const self = this;
      const fn = super.createGroup.bind(this);

      return this.$root.$command.asyncAdd({
        name: '编组创建编组',
        type: 'fn',
        args: {
          value: [
            comps.map((comp) => comp.id),
            deepClone(option),
            deepClone(config),
          ],
          handler: function (ui, container, value) {
            const [a, b, c] = value;
            return [a.map((id) => ui.$queryById(id)), b, c]
          },
        },
        async exec() {
          const compObjs = comps.map((comp) => {
            return {
              compId: comp.id,
              parentId: comp.$parent.id,
              nextId: comp.$next?.id,
            }
          });
          const group = await fn(comps, option, config);

          return {
            result: group,
            params: {
              selfId: self.id,
              groupId: group.id,
              compObjs,
              oldOption: deepClone(option),
              oldConfig: deepClone(config),
            },
          }
        },
        undo: createGroupUndo$1,
        redo: createGroupRedo$1,
      })
    }

    // 解散
    dismiss() {
      const self = this;
      const fn = super.dismiss.bind(this);

      return this.$root.$command.add({
        name: '解散编组',
        type: 'fn',
        args: {
          value: [],
        },
        async exec() {
          const parentId = self.$parent.id;
          const groupOptions = deepClone(self.toJSON());
          const group = await fn();

          return {
            result: group,
            params: {
              groupId: group.id,
              groupOptions,
              parentId,
            },
          }
        },
        undo: dismissUndo,
        redo: dismissRedo,
      })
    }
  }

  function createAdapterUndo(ui, { selfId, selectIds }) {
    const container = ui.$queryById(selfId);
    container.adapter.$destroy();
    ui.select(selectIds.map((id) => ui.$queryById(id)));
  }

  async function createAdapterRedo(
    ui,
    { selfId, oldOptions, oldKpOption, oldConfig = {} }
  ) {
    const container = ui.$queryById(selfId);
    const type = getAdapterType(oldOptions, oldKpOption);
    const adapter = container.$options.adapterManager.create(type);
    await adapter.init(container, oldOptions, oldKpOption, oldConfig.adapter);

    if (oldConfig.select) {
      container.select(true);
    }
  }

  async function updateAdapterUndo(ui, { selfId, oldOptions, oldKpOption }) {
    const container = ui.$queryById(selfId);
    container.adapter.$destroy();
    const type = getAdapterType(oldOptions, oldKpOption);
    const adapter = container.$options.adapterManager.create(type);
    await adapter.init(container, oldOptions, oldKpOption);
  }

  async function updateAdapterRedo(ui, { selfId, newOptions, newKpOption }) {
    const container = ui.$queryById(selfId);
    container.adapter.$destroy();
    const type = getAdapterType(newOptions, newKpOption);
    const adapter = container.$options.adapterManager.create(type);
    await adapter.init(container, newOptions, newKpOption);
  }

  function createGroupUndo(ui, options) {
    groupUndo(ui, options);
  }
  async function createGroupRedo(ui, options) {
    await groupRedo(ui, options);
  }
  class CommandContainer extends Container {
    // 更新属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr$1(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新多个属性
    updateAttrs(attrs = []) {
      return updateAttrs(this, super.updateAttrs.bind(this), attrs)
    }

    // 移到目标位置
    moveToTarget(target, type) {
      return moveToTarget(this, super.moveToTarget.bind(this), target, type)
    }

    // 创建适配器
    async createAdapter(options = {}, kpOption = {}, config = {}) {
      const self = this;
      const fn = super.createAdapter.bind(this);

      return this.$root.$command.asyncAdd({
        name: '创建适配器',
        type: 'fn',
        args: {
          value: [deepClone(options), deepClone(kpOption), deepClone(config)],
        },
        async exec() {
          const selectIds = self.$root.$selectComponent.map((comp) => comp.id);
          const adapter = await fn(options, kpOption, config);

          return {
            result: adapter,
            params: {
              selfId: self.id,
              oldOptions: deepClone(options),
              oldKpOption: deepClone(kpOption),
              oldConfig: deepClone(config),
              selectIds,
            },
          }
        },
        undo: createAdapterUndo,
        redo: createAdapterRedo,
      })
    }

    // 创建编组
    async createGroup(comps = [], option = {}, config = {}) {
      const self = this;
      const fn = super.createGroup.bind(this);

      return this.$root.$command.asyncAdd({
        name: '容器创建编组',
        type: 'fn',
        args: {
          value: [
            comps.map((comp) => comp.id),
            deepClone(option),
            deepClone(config),
          ],
          handler: function (ui, container, value) {
            const [a, b, c] = value;
            return [a.map((id) => ui.$queryById(id)), b, c]
          },
        },
        async exec() {
          const compObjs = comps.map((comp) => {
            return {
              compId: comp.id,
              parentId: comp.$parent.id,
              nextId: comp.$next?.id,
            }
          });
          const group = await fn(comps, option, config);

          return {
            result: group,
            params: {
              selfId: self.id,
              groupId: group.id,
              compObjs,
              groupOptions: group.toJSON(),
              oldOption: deepClone(option),
              oldConfig: deepClone(config),
            },
          }
        },
        undo: createGroupUndo,
        redo: createGroupRedo,
      })
    }

    // 升级适配器
    async updateAdapter(options = {}, kpOption = {}, config = {}) {
      const self = this;
      const fn = super.updateAdapter.bind(this);

      return this.$root.$command.asyncAdd({
        name: '升级适配器',
        type: 'fn',
        args: {
          value: [deepClone(options), deepClone(kpOption), deepClone(config)],
        },
        async exec() {
          const oldAdapterDef = deepClone(self.adapter.toJSON());
          const oldKpOption = oldAdapterDef.kpOption;
          const oldOptions = oldAdapterDef.option;
          const adapter = await fn(options, kpOption);
          const newAdapterJson = deepClone(adapter.toJSON());

          return {
            result: adapter,
            params: {
              selfId: self.id,
              newOptions: newAdapterJson.option,
              newKpOption: newAdapterJson.kpOption,
              newConfig: deepClone(config),
              oldOptions,
              oldKpOption,
            },
          }
        },
        undo: updateAdapterUndo,
        redo: updateAdapterRedo,
      })
    }
  }

  // 更新适配器属性
  function updateAttr(instance, fn, attr, value, _oldValue) {
    return instance.$root.$command.add({
      name: '更新适配器属性',
      type: 'fn',
      noAdd: !!attr.option.noAdd,
      args: {
        selfId: instance.$parent.id,
        value: [attr.name, value, _oldValue],
        handler: function (ui, { selfId, value: _value }) {
          const [name, newValue] = _value;
          ui.$queryById(selfId)[name] = newValue;
        },
      },
      exec() {
        const result = fn(attr, value, _oldValue);

        return {
          result,
          params: {
            selfId: instance.$parent.id,
            name: attr.name,
            newValue: deepClone(value),
            oldValue: deepClone(_oldValue),
          },
        }
      },
      undo(ui, { selfId, name, oldValue }) {
        ui.$queryById(selfId).adapter[name] = oldValue;
      },
      redo(ui, { selfId, name, newValue }) {
        ui.$queryById(selfId).adapter[name] = newValue;
      },
    })
  }

  async function setEffectThemeUndo(ui, { selfId, oldEffect }) {
    await effectExtract(ui, { selfId, effect: oldEffect });
  }
  async function setEffectThemeRedo(ui, { selfId, newEffect }) {
    await effectExtract(ui, { selfId, effect: newEffect });
  }
  async function resetUndo(ui, { selfId, oldEffect }) {
    await effectExtract(ui, { selfId, effect: oldEffect });
  }
  async function resetRedo(ui, { selfId, newEffect }) {
    await effectExtract(ui, { selfId, effect: newEffect });
  }
  class CommandCampusAdapter extends CampusAdapter {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 刷新
    async refresh() {
      const fn = super.refresh.bind(this);

      return this.$root.$command.asyncAdd({
        name: '刷新',
        type: 'fn',
        noAdd: true,
        async exec() {
          const result = await fn();

          return {
            result,
          }
        },
      })
    }

    // 设置园区效果
    async setEffectTheme(effect) {
      const self = this;
      const fn = super.setEffectTheme.bind(this);
      return this.$root.$command.asyncAdd({
        name: '更改园区效果',
        type: 'fn',
        args: {
          value: [deepClone(effect)],
        },
        async exec() {
          const oldEffect = deepClone(self.effectTheme);
          const result = await fn(effect);
          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldEffect,
              newEffect: deepClone(effect),
            },
          }
        },
        undo: setEffectThemeUndo,
        redo: setEffectThemeRedo,
      })
    }

    async reset() {
      const self = this;
      const fn = super.reset.bind(this);
      return this.$root.$command.asyncAdd({
        name: '重置园区效果',
        type: 'fn',
        async exec() {
          const selfId = self.$parent.id;
          const oldEffect = deepClone(self.effectTheme);
          const result = await fn();

          return {
            result,
            params: {
              selfId,
              oldEffect,
              newEffect: deepClone(result.effectTheme),
            },
          }
        },
        undo: resetUndo,
        redo: resetRedo,
      })
    }
  }

  async function effectExtract(ui, { selfId, effect }) {
    const comp = ui.$queryById(selfId);
    effect
      ? await comp.adapter.setEffectTheme(effect)
      : await comp.adapter.reset();
  }

  function updateDataFieldUndo(ui, { selfId, oldName, oldValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataField(oldName, oldValue);
    comp.adapter.$data.refresh();
  }

  function updateDataFieldRedo(ui, { selfId, oldName, newValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataField(oldName, newValue);
    comp.adapter.$data.refresh();
  }

  function updateDataCloseUndo(ui, { selfId, oldValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataClose(oldValue);
    comp.adapter.$data.refresh();
  }

  function updateDataCloseRedo(ui, { selfId, newValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataClose(newValue);
    comp.adapter.$data.refresh();
  }

  function updateDataTimeUndo(ui, { selfId, oldValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataTime(oldValue);
    comp.adapter.$data.refresh();
  }
  function updateDataTimeRedo(ui, { selfId, newValue }) {
    const comp = ui.$queryById(selfId);
    comp.adapter.updateDataTime(newValue);
    comp.adapter.$data.refresh();
  }

  function updateSourceDataUndo(ui, { selfId, oldType, oldData }) {
    ui.$queryById(selfId).adapter.updateSourceData(oldType, oldData);
  }
  function updateSourceDataRedo(ui, { selfId, newType, newData }) {
    ui.$queryById(selfId).adapter.updateSourceData(newType, deepClone(newData));
  }

  function updateFilterMainEnableUndo(ui, { selfId, oldValue }) {
    ui.$queryById(selfId).adapter.updateFilterMainEnable(oldValue);
  }
  function updateFilterMainEnableRedo(ui, { selfId, newValue }) {
    ui.$queryById(selfId).adapter.updateFilterMainEnable(newValue);
  }

  function updateFilterEnabledUndo(
    ui,
    { selfId, filterName, oldEnabled, oldMainEnabled }
  ) {
    const selfAdapter = ui.$queryById(selfId).adapter;
    const item = selfAdapter.$data.filterWork.getFilterItemByName(filterName);
    selfAdapter.updateFilterEnabled(item, oldEnabled);

    if (oldMainEnabled !== selfAdapter.$data.filterWork.getMainEnabled()) {
      selfAdapter.updateFilterMainEnable(oldMainEnabled);
    }
  }
  function updateFilterEnabledRedo(ui, { selfId, filterName, newEnabled }) {
    const selfAdapter = ui.$queryById(selfId).adapter;
    const item = selfAdapter.$data.filterWork.getFilterItemByName(filterName);
    selfAdapter.updateFilterEnabled(item, newEnabled);
  }
  function updateFilterNameUndo(ui, { oldName, newName }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.updateName(filterManager.getFilterByName(newName), oldName);
  }
  function updateFilterNameRedo(ui, { oldName, newName }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.updateName(filterManager.getFilterByName(oldName), newName);
  }
  function updateFilterDataUndo(ui, { name, oldValue }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.updateData(
      filterManager.getFilterByName(name),
      oldValue.code,
      oldValue.callbackArgs
    );
  }
  function updateFilterDataRedo(ui, { name, newValue }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.updateName(
      filterManager.getFilterByName(name),
      newValue.code,
      newValue.callbackArgs
    );
  }

  function addFilterUndo(ui, { oldOptions }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.remove(filterManager.getFilterByName(oldOptions.name));
  }
  function addFilterRedo(ui, { selfId, oldOptions }) {
    ui.$queryById(selfId).adapter.addFilter(deepClone(oldOptions));
  }

  function removeFilterUndo(ui, { filterOptions, index, useList }) {
    const filterManager = ui.$dataManager.filterManager;
    const newFilter = filterManager.add(deepClone(filterOptions), index);
    useList.forEach((item) => {
      ui.$queryById(item.compId).adapter.$data.filterWork.addUse(
        newFilter,
        item.enabled,
        item.index
      );
    });
  }
  function removeFilterRedo(ui, { filterOptions }) {
    const filterManager = ui.$dataManager.filterManager;
    filterManager.remove(filterManager.getFilterByName(filterOptions.name));
  }

  function useFilterUndo(ui, { selfId, name, mainEnabled }) {
    const comp = ui.$queryById(selfId);
    if (mainEnabled !== comp.adapter.$data.filterWork.getMainEnabled()) {
      comp.adapter.updateFilterMainEnable(mainEnabled);
    }

    comp.adapter.unUseFilter(ui.$dataManager.filterManager.getFilterByName(name));
  }
  function useFilterRedo(ui, params) {
    commonExtract(ui, params);
  }

  function unUseFilterUndo(ui, params) {
    commonExtract(ui, params);
  }
  function unUseFilterRedo(ui, { selfId, name }) {
    ui.$queryById(selfId).adapter.unUseFilter(
      ui.$dataManager.filterManager.getFilterByName(name)
    );
  }
  function moveFilterUndo(ui, { selfId, name, oldValue }) {
    const selfAdapter = ui.$queryById(selfId).adapter;
    const filterManager = ui.$dataManager.filterManager;
    const sourceFilter = filterManager.getFilterByName(name);
    const targetFilter = filterManager.getFilterByName(oldValue.targetName);
    selfAdapter.moveFilter(
      selfAdapter.$data.filterWork.getFilterItem(sourceFilter),
      selfAdapter.$data.filterWork.getFilterItem(targetFilter),
      oldValue.type
    );
  }
  function moveFilterRedo(ui, { selfId, name, newValue }) {
    const selfAdapter = ui.$queryById(selfId).adapter;
    const filterManager = ui.$dataManager.filterManager;
    const sourceFilter = filterManager.getFilterByName(name);
    const targetFilter = filterManager.getFilterByName(newValue.targetName);
    selfAdapter.moveFilter(
      selfAdapter.$data.filterWork.getFilterItem(sourceFilter),
      selfAdapter.$data.filterWork.getFilterItem(targetFilter),
      newValue.type
    );
  }
  class CommandConchAdapter extends ConchAdapter {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }

    // 更新字段映射
    updateDataField(name, value) {
      const self = this;
      const fn = super.updateDataField.bind(this);

      return this.$root.$command.add({
        name: '更新字段映射',
        type: 'fn',
        args: {
          value: [name, value],
        },
        exec() {
          const oldValue = deepClone(
            self.$data.fieldMapping.get(name)?.field.value
          );

          const result = fn(name, value);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldName: name,
              oldValue: oldValue,
              newValue: deepClone(value),
            },
          }
        },
        undo: updateDataFieldUndo,
        redo: updateDataFieldRedo,
      })
    }

    // 更新数据定时器开关
    updateDataClose(value) {
      const self = this;
      const fn = super.updateDataClose.bind(this);

      return this.$root.$command.add({
        name: '更新数据定时器开关',
        type: 'fn',
        args: {
          value: [value],
        },
        exec() {
          const oldValue = deepClone(self.$data.timerItem.get().close);

          const result = fn(value);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldValue: oldValue,
              newValue: deepClone(value),
            },
          }
        },
        undo: updateDataCloseUndo,
        redo: updateDataCloseRedo,
      })
    }

    // 更新数据定时器时间
    updateDataTime(value) {
      const self = this;
      const fn = super.updateDataTime.bind(this);

      return this.$root.$command.add({
        name: '更新数据定时器时间',
        type: 'fn',
        args: {
          value: [value],
        },
        exec() {
          const oldValue = deepClone(self.$data.timerItem.get().time);

          const result = fn(value);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldValue: oldValue,
              newValue: deepClone(value),
            },
          }
        },
        undo: updateDataTimeUndo,
        redo: updateDataTimeRedo,
      })
    }

    // 更新源数据
    updateSourceData(type, data) {
      const self = this;
      const fn = super.updateSourceData.bind(this);

      return this.$root.$command.add({
        name: '更新源数据',
        type: 'fn',
        args: {
          value: [type, deepClone(data)],
        },
        exec() {
          const oldType = self.$data.dataSource.dataType;
          const oldData = deepClone(self.$data.dataSource.get(oldType));

          const result = fn(type, data);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldType,
              oldData,
              newType: type,
              newData: deepClone(data),
            },
          }
        },
        undo: updateSourceDataUndo,
        redo: updateSourceDataRedo,
      })
    }

    // 更新过滤器总开关
    updateFilterMainEnable(value) {
      const self = this;
      const fn = super.updateFilterMainEnable.bind(this);

      return this.$root.$command.add({
        name: '更新过滤器总开关',
        type: 'fn',
        args: {
          value: [value],
        },
        exec() {
          const oldValue = self.$data.filterWork.getMainEnabled();

          const result = fn(value);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              oldValue,
              newValue: value,
            },
          }
        },
        undo: updateFilterMainEnableUndo,
        redo: updateFilterMainEnableRedo,
      })
    }

    // 更新过滤器状态
    updateFilterEnabled(filterItem, enabled) {
      const self = this;
      const fn = super.updateFilterEnabled.bind(this);

      return this.$root.$command.add({
        name: '更新过滤器状态',
        type: 'fn',
        args: {
          value: [filterItem.filter.name, enabled],
          handler: function (ui, container, value) {
            const [a, b] = value;
            return [container.adapter.$data.filterWork.getFilterItemByName(a), b]
          },
        },
        exec() {
          const oldEnabled = deepClone(filterItem.filter.enabled);
          const oldMainEnabled = self.$data.filterWork.getMainEnabled();

          const result = fn(filterItem, enabled);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              filterName: filterItem.filter.name,
              oldEnabled,
              oldMainEnabled,
              newEnabled: deepClone(enabled),
            },
          }
        },
        undo: updateFilterEnabledUndo,
        redo: updateFilterEnabledRedo,
      })
    }

    // 更新过滤器名称
    updateFilterName(filter, name) {
      const fn = super.updateFilterName.bind(this);

      return this.$root.$command.add({
        name: '更新过滤器名称',
        type: 'fn',
        args: {
          value: [filter.name, name],
          handler: function (ui, container, value) {
            const [a, b] = value;
            return [ui.$dataManager.filterManager.getFilterByName(a), b]
          },
        },
        exec() {
          const oldValue = filter.filter.name;

          const result = fn(filter, name);

          return {
            result,
            params: {
              oldName: oldValue,
              newName: name,
            },
          }
        },
        undo: updateFilterNameUndo,
        redo: updateFilterNameRedo,
      })
    }

    // 更新过滤器数据
    updateFilterData(filter, code, callbackArgs) {
      const fn = super.updateFilterData.bind(this);

      return this.$root.$command.add({
        name: '更新过滤器数据',
        type: 'fn',
        args: {
          value: [filter.name, code, deepClone(callbackArgs)],
          handler: function (ui, container, value) {
            const [a, b, c] = value;
            return [ui.$dataManager.filterManager.getFilterByName(a), b, c]
          },
        },
        exec() {
          const oldValue = {
            code: filter.filter.code,
            callbackArgs: deepClone(filter.filter.callbackArgs),
          };

          const result = fn(filter, code, callbackArgs);

          return {
            result,
            params: {
              name: filter.filter.name,
              oldValue,
              newValue: {
                code,
                callbackArgs: deepClone(callbackArgs),
              },
            },
          }
        },
        undo: updateFilterDataUndo,
        redo: updateFilterDataRedo,
      })
    }

    // 添加过滤器
    addFilter(options) {
      const self = this;
      const fn = super.addFilter.bind(this);

      return this.$root.$command.add({
        name: '添加过滤器',
        type: 'fn',
        args: {
          value: [deepClone(options)],
        },
        exec() {
          const filter = fn(options);

          return {
            result: filter,
            params: {
              selfId: self.$parent.id,
              oldOptions: deepClone(options),
            },
          }
        },
        undo: addFilterUndo,
        redo: addFilterRedo,
      })
    }

    // 删除过滤器
    removeFilter(filter) {
      const self = this;
      const fn = super.removeFilter.bind(this);

      return this.$root.$command.add({
        name: '删除过滤器',
        type: 'fn',
        args: {
          value: [filter.name],
          handler: function (ui, container, value) {
            const [a] = value;
            return [ui.$dataManager.filterManager.getFilterByName(a)]
          },
        },
        exec() {
          const filterOptions = {
            name: filter.name,
            code: filter.code,
            callbackArgs: deepClone(filter.callbackArgs),
          };
          const index =
            self.$data.dataManager.filterManager.getFilterIndex(filter);
          const useList = filter.list.map((filterWork) => {
            return {
              compId: filterWork.parent.parent.$parent.id,
              enabled: filterWork.enabled,
              index: filterWork.getFilterItemIndex(filter),
            }
          });
          const result = fn(filter);

          return {
            result,
            params: {
              filterOptions,
              index,
              useList,
            },
          }
        },
        undo: removeFilterUndo,
        redo: removeFilterRedo,
      })
    }

    // 使用过滤器
    useFilter(filter, enabled) {
      const self = this;
      const fn = super.useFilter.bind(this);

      return this.$root.$command.add({
        name: '使用过滤器',
        type: 'fn',
        args: {
          value: [filter.name, enabled],
          handler: function (ui, container, value) {
            const [a, b] = value;
            return [ui.$dataManager.filterManager.getFilterByName(a), b]
          },
        },
        exec() {
          const mainEnabled = self.$data.filterWork.getMainEnabled();
          const result = fn(filter, enabled);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              name: filter.name,
              mainEnabled,
              enabled,
            },
          }
        },
        undo: useFilterUndo,
        redo: useFilterRedo,
      })
    }

    // 移除使用过滤器
    unUseFilter(filter) {
      const self = this;
      const fn = super.unUseFilter.bind(this);

      return this.$root.$command.add({
        name: '移除使用过滤器',
        type: 'fn',
        args: {
          value: [filter.name],
          handler: function (ui, container, value) {
            const [a] = value;
            return [ui.$dataManager.filterManager.getFilterByName(a)]
          },
        },
        exec() {
          const enabled = self.$data.filterWork.getFilterItem(filter).enabled;
          const result = fn(filter);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              name: filter.name,
              enabled,
            },
          }
        },
        undo: unUseFilterUndo,
        redo: unUseFilterRedo,
      })
    }

    // 移动过滤器
    moveFilter(sourceFilterItem, targetFilterItem, type) {
      const self = this;
      const fn = super.moveFilter.bind(this);

      return this.$root.$command.add({
        name: '移动过滤器',
        type: 'fn',
        args: {
          value: [
            sourceFilterItem.filter.name,
            targetFilterItem.filter.name,
            type,
          ],
          handler: function (ui, container, value) {
            const [a, b, c] = value;
            const filterWork = container.adapter.$data.filterWork;
            return [
              filterWork.getFilterItemByName(a),
              filterWork.getFilterItemByName(b),
              c,
            ]
          },
        },
        exec() {
          const filterWork = self.$data.filterWork;
          const index = filterWork.getFilterItemIndex(sourceFilterItem);
          let oldType;
          let oldTarget;
          if (!index) {
            oldType = 'before';
            oldTarget = filterWork.filterList[index + 1];
          } else {
            oldType = 'after';
            oldTarget = filterWork.filterList[index - 1];
          }

          const oldValue = {
            targetName: oldTarget.filter.name,
            type: oldType,
          };
          const result = fn(sourceFilterItem, targetFilterItem, type);

          return {
            result,
            params: {
              selfId: self.$parent.id,
              name: sourceFilterItem.filter.name,
              oldValue,
              newValue: {
                targetName: targetFilterItem.filter.name,
                type,
              },
            },
          }
        },
        undo: moveFilterUndo,
        redo: moveFilterRedo,
      })
    }
  }

  function commonExtract(ui, { selfId, name, enabled }) {
    ui.$queryById(selfId).adapter.useFilter(
      ui.$dataManager.filterManager.getFilterByName(name),
      enabled
    );
  }

  class CommandLowCodeAdapter extends LowCodeAdapter {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }
  }

  class CommandMapAdapter extends MapAdapter {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }
  }

  class CommandTopologyAdapter extends TopologyAdapter {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }
  }

  class CommandUdatavAdapter extends UdatavAdapter$1 {
    // 设置图表属性
    _updateAttr(attr, value, oldValue) {
      return updateAttr(this, super._updateAttr.bind(this), attr, value, oldValue)
    }
  }

  // 获取模块
  function getModules(enableCommand = false) {
    if (enableCommand) {
      return {
        elements: {
          Ui: CommandUi,
          Canvas: CommandCanvas,
          ThingJSLayer: CommandThingJSLayer,
          // 普通图层需要放下面
          Layer: CommandLayer,
          Group: CommandGroup,
          Container: CommandContainer,
          DefaultContainer: CommandContainer,
        },
        adapters: {
          CampusAdapter: CommandCampusAdapter,
          LowCodeAdapter: CommandLowCodeAdapter,
          MapAdapter: CommandMapAdapter,
          TopologyAdapter: CommandTopologyAdapter,
          UdatavAdapter: CommandUdatavAdapter,
          // 基础类需要放下面
          ConchAdapter: CommandConchAdapter,
        },
      }
    } else {
      return {
        elements: {
          Ui,
          Canvas,
          ThingJSLayer,
          // 普通图层需要放下面
          Layer: Layer$1,
          Group,
          Container,
          DefaultContainer: Container,
        },
        adapters: {
          CampusAdapter,
          LowCodeAdapter,
          MapAdapter,
          TopologyAdapter,
          UdatavAdapter: UdatavAdapter$1,
          // 基础类需要放下面
          ConchAdapter,
        },
      }
    }
  }

  // 画布
  class Diagram {
    // 获取编号，无法保证唯一值
    static getUid(type) {
      return (
        type.toLowerCase() + '-' + window.Math.random().toString(24).slice(-10)
      )
    }

    constructor(config = {}) {
      // dom节点
      this.dom = null;
      // 配置
      this.config = config;
      // 模块
      this.module = new Module(this);
      // 节点管理器
      this.manager = new Manager$1(this);
      // 适配器管理器
      this.adapterManager = new AdapterManager(this);
      // 是否编辑模式
      this.isEdit = config.mode === 'edit';
      // 可以快捷操作
      this.canShortcutKey = true;

      this.module.init(getModules(this.isEdit));

      this.ui = this.manager.create('Ui');

      // 状态
      this.state = {
        // 初始化完成状态
        initComplete: null,
        // 完成状态
        complete: null,
        // 画布加载完成
        canvasComplete: null,
        // 离线
        offline: false,
        // 撤销
        undo: null,
        // 重做
        redo: null,
        // 选择
        select: {
          // 图层
          layer: null,
          // 是否单选
          isSingle: null,
          // 是否单选容器带适配器
          isSingleHasAdapter: null,
          // 是否单选画布
          isSingleCanvas: null,
          // 是否单选编组
          isSingleGroup: null,
          // 是否单选容器
          isSingleContainer: null,
          // 是否单选孪生
          isSingleTwin: null,
          // 是否单选拓扑
          isSingleTwinTopology: null,
          // 是否多选
          isMultiple: null,
          // 是否有孪生容器
          hasTwinContainer: null,
          // 是否有空容器
          hasEmptyContainer: null,
          // 是否有数据容器
          hasDataContainer: null,
          // 单选节点
          single: null,
          // 孪生图表
          twinContainer: null,
          // 选择节点组
          comps: [],
        },
        // 画布缩放
        canvasZoom: 1,
        // 启用画布缩放
        enableCanvasZoom: true,
        // 文本编辑中
        textEditing: false,
        // 右击菜单运行
        contextMenuRunning: true,
      };
      // 状态
      this.status = null;

      // 注册udatav适配器
      UI.adapterManager.register('UdatavAdapter', UdatavAdapter);
    }

    // 初始化
    async init(dom) {
      if (this.status) {
        console.warn('已经初始化过了');
      } else {
        this.status = true;
        this.state.canvasComplete = false;
        this.state.initComplete = false;
        this.$emit('initComplete', this);
        this.dom = dom;

        this._initEvent();
        await this.ui.init(
          this,
          {
            type: 'Ui',
            option: this.config.uiOption,
          },
          this.config.uiConfig,
          this.config
        );
        this.state.initComplete = true;
        this.state.canvasComplete = true;
        this.$emit('initCompleted', this);
      }
      return this
    }

    // 初始化事件
    _initEvent() {
      // 更新撤销重做状态
      const updateUndoRedo = () => {
        this.state.undo = this.ui.$command.canUndo();
        this.state.redo = this.ui.$command.canRedo();
      };
      // 选择图层
      const selectLayer = (layer) => {
        this.state.select.layer = layer;
      };
      // 取消选择图层
      const unSelectLayer = (layer) => {
        if (this.state.select.layer === layer) {
          this.state.select.layer = null;
        }
        this.state.select.layer = layer;
      };
      // 选择节点
      const updateSelectComponent = (comps) => {
        const isSingle = comps.length === 1;
        const single = isSingle ? comps[0] : null;

        this.state.select.isSingle = isSingle;
        this.state.select.isSingleHasAdapter = !!single?.adapter;
        this.state.select.isSingleCanvas = single && single.type === 'Canvas';
        this.state.select.isSingleGroup = single && single.type === 'Group';
        this.state.select.isSingleContainer =
          single && single.type === 'Container';
        this.state.select.isSingleTwin = !!single?.adapter?.isThing;
        this.state.select.isSingleTwinTopology = single?.adapter?.isTopology;
        this.state.select.isMultiple = !isSingle;
        this.state.select.hasTwinContainer = !!comps.find(
          (comp) => comp?.$twinContainers?.length || comp?.adapter?.isThing
        );

        this.state.select.hasEmptyContainer = !!comps.find(
          (comp) => !comp.adapter
        );
        this.state.select.hasDataContainer = !!comps.find(
          (comp) => comp.adapter?.$dataAdapter
        );
        this.state.select.single = single;
        this.state.select.comps = comps;
      };
      // 画布放缩
      const canvasZoom = (zoom) => {
        this.state.canvasZoom = zoom;
      };

      // 画布挂载
      const mountedCanvas = () => {
        this.state.canvasComplete = true;
      };

      // 画布销毁
      const beforeDestroyCanvas = () => {
        this.state.canvasComplete = false;
      };

      // 孪生创建
      const createdTwin = (adapter) => {
        if (!adapter.isTopology) {
          const id = adapter.$uiComp.id;
          const comp = this.ui.queryById(id);
          this.state.select.twinContainer = comp;
        }
      };

      // 孪生销毁
      const destroyedTwin = (adapter) => {
        if (!adapter.isTopology) {
          this.state.select.twinContainer = null;
        }
      };

      this.$on('commandAdd', updateUndoRedo);
      this.$on('commandUndo', updateUndoRedo);
      this.$on('commandRedo', updateUndoRedo);
      this.$on('commandClear', updateUndoRedo);
      this.$on('CommandBeforeExec', updateUndoRedo);
      this.$on('CommandExec', updateUndoRedo);
      this.$on('hook:selectLayer', selectLayer);
      this.$on('hook:unSelectLayer', unSelectLayer);
      this.$on('updateSelectComponent', updateSelectComponent);
      this.$on('updateCanvasZoom', canvasZoom);
      this.$on('mounted:Canvas', mountedCanvas);
      this.$on('beforeDestroy:Canvas', beforeDestroyCanvas);
      this.$on('createdTwin', createdTwin);
      this.$on('destroyedTwin', destroyedTwin);
    }

    // 开始快捷操作
    startShortcutKey() {
      this.canShortcutKey = true;
    }

    // 停止快捷操作
    stopShortcutKey() {
      this.canShortcutKey = false;
    }

    // 绑定事件
    $on(name, fn, context) {
      return this.ui.$on(name, fn, context)
    }

    // 绑定事件
    $once(name, fn, context) {
      return this.ui.$once(name, fn, context)
    }

    // 绑定事件
    $off(name, fn, context) {
      return this.ui.$off(name, fn, context)
    }

    // 绑定事件
    $emit(name, ...args) {
      return this.ui.$emit(name, ...args)
    }

    // 画布
    get canvas() {
      return this.ui?.$canvas
    }

    // 选中图层
    get currentLayer() {
      return this.canvas?.$currentLayer
    }

    // 选中节点
    get selectComponent() {
      return this.ui?.$selectComponent || []
    }
  }

  var name = "kunpeng";
  var version = "2.10.22";
  var description = "";
  var main = "index.js";
  var scripts = {
  	dev: "node build/dev.js",
  	start: "node build/dev.js",
  	"start:dev": "node build/dev.js dev",
  	"start:release": "node build/dev.js release",
  	"start:prod": "node build/dev.js prod",
  	build: "node build/build.js",
  	"build:dev": "node build/build.js dev",
  	"build:release": "node build/build.js release",
  	"build:prod": "node build/build.js prod",
  	"offline:dev": "node build/build.js dev offline",
  	"offline:release": "node build/build.js release offline",
  	"offline:prod": "node build/build.js prod offline",
  	"private:dev": "node build/build.js dev private",
  	"private:release": "node build/build.js release private",
  	"private:prod": "node build/build.js prod private",
  	"build:offline": "node build/build.js prod offline",
  	"build:show": "node build/build.js prod show",
  	release: "release-it --no-npm.publish",
  	"start:sdk": "rollup -c -w --environment NODE_ENV:development",
  	"build:sdk": "rollup -c --environment NODE_ENV:production",
  	"visualizer:sdk": "rollup -c --environment NODE_ENV:production,VISUALIZER",
  	unit: "jest --config test/unit/jest.conf.js --coverage",
  	e2e: "node test/e2e/runner.js",
  	test: "npm run unit && npm run e2e",
  	lint: "eslint --ext .js,.vue",
  	dll: "webpack --config ./build/webpack.dll.conf.js",
  	postinstall: "patch-package"
  };
  var repository = {
  	type: "git",
  	url: "git@git.uino.com:hundun/kunpeng.git"
  };
  var keywords = [
  ];
  var author = "";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.16.5",
  	"@babel/eslint-parser": "^7.16.5",
  	"@babel/preset-env": "^7.16.5",
  	"@release-it/conventional-changelog": "^3.3.0",
  	"@rollup/plugin-alias": "^4.0.3",
  	"@rollup/plugin-commonjs": "^24.0.1",
  	"@rollup/plugin-json": "^6.0.0",
  	"@rollup/plugin-node-resolve": "^15.0.1",
  	"@rollup/plugin-terser": "^0.4.0",
  	"babel-jest": "^27.4.5",
  	"babel-loader": "^8.2.3",
  	"babel-plugin-import": "^1.13.3",
  	"babel-plugin-lodash": "^3.3.4",
  	"babel-plugin-syntax-jsx": "^6.18.0",
  	"babel-plugin-transform-vue-jsx": "^3.7.0",
  	"babel-register": "^6.26.0",
  	chalk: "2.4.2",
  	"compression-webpack-plugin": "^9.2.0",
  	"copy-webpack-plugin": "^10.2.0",
  	"core-js": "^3.20.0",
  	"css-loader": "^6.5.1",
  	eslint: "^8.5.0",
  	"eslint-config-prettier": "^8.3.0",
  	"eslint-config-standard": "^16.0.3",
  	"eslint-friendly-formatter": "^4.0.1",
  	"eslint-plugin-import": "^2.25.3",
  	"eslint-plugin-node": "^11.1.0",
  	"eslint-plugin-prettier": "^4.0.0",
  	"eslint-plugin-promise": "^6.0.0",
  	"eslint-plugin-standard": "^5.0.0",
  	"eslint-plugin-vue": "^8.2.0",
  	"eslint-webpack-plugin": "^3.1.1",
  	"file-loader": "^6.2.0",
  	"friendly-errors-webpack-plugin": "^1.7.0",
  	"html-webpack-plugin": "^5.5.0",
  	jest: "^27.4.5",
  	"jest-serializer-vue": "^2.0.2",
  	less: "^4.1.3",
  	"less-loader": "^11.0.0",
  	"mini-css-extract-plugin": "^2.4.5",
  	"monaco-editor-webpack-plugin": "^4.1.2",
  	"node-notifier": "^10.0.0",
  	"optimize-css-assets-webpack-plugin": "^6.0.1",
  	ora: "3.4.0",
  	"patch-package": "^6.4.7",
  	portfinder: "^1.0.28",
  	prettier: "^2.5.1",
  	"release-it": "^14.11.8",
  	rimraf: "^3.0.2",
  	rollup: "^2.79.1",
  	"rollup-plugin-polyfill-node": "^0.12.0",
  	"rollup-plugin-visualizer": "^5.9.0",
  	semver: "^7.3.5",
  	shelljs: "^0.8.4",
  	stylus: "^0.56.0",
  	"stylus-loader": "^6.2.0",
  	"url-loader": "^4.1.1",
  	"vue-jest": "^3.0.7",
  	"vue-loader": "14",
  	"vue-style-loader": "^4.1.3",
  	"vue-template-compiler": "2.6.14",
  	webpack: "^5.65.0",
  	"webpack-bundle-analyzer": "^4.5.0",
  	"webpack-cli": "^4.9.1",
  	"webpack-dev-server": "^4.6.0",
  	"webpack-merge": "^5.8.0"
  };
  var dependencies = {
  	"@uino/thing-blueprint-editor": "^0.32.0",
  	"@uino/thing-ui-canvas": "^0.1.105",
  	"@uino/thing-ui-property-panel": "^0.4.89",
  	"@uino/thing.ui.components": "^0.1.79",
  	"alife-logger": "^1.8.30",
  	"ant-design-vue": "^1.7.8",
  	axios: "^0.24.0",
  	"crypto-js": "^4.1.1",
  	lodash: "^4.17.21",
  	"monaco-editor": "^0.27.0",
  	"opentype.js": "^1.3.4",
  	vue: "2.6.14",
  	"vue-router": "^3.5.3",
  	vuex: "^3.6.2",
  	"x-data-spreadsheet": "^1.1.9"
  };
  var engines = {
  	node: ">= 8.0.0",
  	npm: ">= 3.0.0"
  };
  var browserslist = [
  	"> 1%",
  	"last 2 versions",
  	"not ie <= 8"
  ];
  var pak = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	"private": true,
  	scripts: scripts,
  	repository: repository,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies,
  	engines: engines,
  	browserslist: browserslist
  };

  UI.use(alignmentLines);
  UI.use(rulerModule);
  UI.use(filterModule);
  UI.use(bluePrintNodeModule);
  UI.use(sprayToUIModule);
  UI.use(KeyMapMoudle);
  UI.use(templateParser);
  UI.use(snapshotModule);

  function getDiagramOptions(config = {}) {
    const ThingBlueprintEditor =
      config.ThingBlueprintEditor || window.ThingBlueprintEditor;
    const Blueprint = ThingBlueprintEditor?.default;

    let websocketUrl = 'wss://charts.thingjs.com/spray/websocket';
    const dataSource = config?.dataSource;

    return {
      uiOption: { id: Diagram.getUid('Canvas'), style: defaultUiOptions.style },
      uiConfig: getUiConfig(1),
      ThingBlueprintEditor:
        config.ThingBlueprintEditor || window.ThingBlueprintEditor,
      Blueprint,
      BlueprintModules: ThingBlueprintEditor,
      twin: {
        // 隐藏3D
        disable: config.hide3D,
        configFormatter: function (options, adapter) {
          const offline = config.offline;
          switch (adapter.$type) {
            case 'CampusAdapter':
              if (offline) {
                options.urlV1 = `/campus/${adapter.thingOpts.code}`;
              } else {
                options.urlV1 = `https://campus.thingjs.com/campus/${adapter.thingOpts.code}`;
              }
              break
            case 'LowCodeAdapter':
              if (offline) {
                options.url = `/lowCode/${adapter.thingOpts.name}.js`;
              } else {
                options.url = `https://www.thingjs.com/lowCode/${adapter.thingOpts.name}.js`;
              }
              break
            case 'MapAdapter':
              options.offline = offline;
              break
            case 'TopologyAdapter':
              if (offline) {
                options.url = `/topo/${adapter.thingOpts.resourceId}/diagram.json`;
                options.isOffline = true;
              } else {
                options.url = `https://topo.thingjs.com/topo/${adapter.thingOpts.resourceId}/diagram.json`;
              }
              break
          }
          return options
        },
        thingJsAuthServerUrl: 'http://47.94.3.222:2044/spray/processrequest1',
      },
      prefix: 'https://charts.thingjs.com',
      data: {
        disable: dataSource?.disable,
        websocketUrl: dataSource?.http?.server || websocketUrl,
        restApiTimeout: 60000,
        restApiMaxQueue: 5,
      },
    }
  }

  function isStaticPrefix(str) {
    return /^\/s-static/.test(str) || /^url\(\/s-static/.test(str)
  }

  function replacePath(content, option) {
    const { prefix, offline } = option;
    return content.replace(
      '/s-static',
      `${prefix + (offline ? '' : '/s-static')}`
    )
  }

  // 替换图片路径前缀
  function transfromImg(itemopts, options) {
    const { prefix } = options;
    Object.entries(itemopts).forEach(([k, v]) => {
      if (isType$2(v, 'String') && isStaticPrefix(v)) {
        itemopts[k] = replacePath(v, options);
      }
      if (k === 'series' && Array.isArray(v)) {
        v.forEach((vItem) => {
          vItem.symbol &&
            (vItem.symbol = vItem.symbol.replace('image://', prefix));
        });
      }
      if (isType$2(v, 'Array')) {
        v.forEach((item) => transfromImg(item, options));
      }
      if (isType$2(v, 'Object')) {
        transfromImg(v, options);
      }
    });
  }

  function eachChildren(arr, fn) {
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        fn(item);
        eachChildren(item.children, fn);
      });
    }
  }

  // 转换def，处理资源路径
  function transformDef(def, options = {}) {
    const result = deepClone(def);
    const { userData, scene } = result;
    const { prefix, offline } = options;
    Object.values(userData).forEach((item) => {
      if (item.option?.prefix) {
        item.option.prefix = offline ? `${prefix}` : prefix + '/s-static';
      }

      item.opts && transfromImg(item.opts, options);
      item.theme && transfromImg(item.theme, options);
      item.events && transfromImg(item.events, options);
    });

    eachChildren(scene.children, (item) => {
      const image = item.option?.style?.backgroundImage;
      if (isType$2(image, 'String') && isStaticPrefix(image)) {
        item.option.style.backgroundImage = replacePath(image, options);
      }
    });

    const bgImage =
      scene.option.style.backgroundImage || scene.option.style.background;
    if (bgImage) {
      scene.option.style.backgroundImage = replacePath(bgImage, options);
    }

    return result
  }

  function requestApi(url) {
    return fetch(url).then((res) => {
      if (res.status !== 200) {
        return console.warn('接口返回异常')
      }
      return res.text()
    })
  }

  const request = (url, method) => {
    return fetch(url, {
      method,
    })
      .then((res) => res.text())
      .then(JSON.parse)
  };
  class PreviewThingJSUI {
    constructor(options) {
      this.options = options;
      this.mask = null;
      this.init();
    }

    async init() {
      this.promise = new Promise((resolve) => {
        this.resolve = resolve;
      });
      const options = this.options;
      const { baseUrl, offline } = options;
      const prefix = baseUrl || 'https://charts.thingjs.com';
      let el = options.container || options.el;
      if (isType$2(el, 'String') && el.includes('#')) {
        el = document.getElementById(el.replace('#', ''));
      }
      if (!el || !(el instanceof HTMLElement)) {
        return console.warn('需要有效节点')
      }
      const config = {
        ...options,
        prefix,
        container: el,
      };
      if (window.conch) {
        window.conch.__globalVar.printLog = false;
        window.conch.errorHandler = function (app, error) {
          console.warn(`${app.parent.name}(${app.parent.id})执行错误`, error);
        };
      }
      // 线上场景
      if (!offline) {
        const data = await this._getInfoByConfig(prefix, options);
        return data && this.createInstance(data, config)
      }
      // 离线加载
      const bundle = await request(`${prefix}/bundle.json`);
      if (!bundle) return console.warn('该路径下bundle文件不存在')
      const { main, type } = bundle;
      if (type === 'chart') {
        await this.loadCompBundle(bundle, config);
      }

      if (type === 'dashboard') {
        config.prefix = `${prefix}/web`;
        const sceneInfo = await request(`${prefix}/web/scene-data/${main}`);
        await this.createInstance(sceneInfo, config);
      }
    }

    async _getInfoByConfig(prefix, options) {
      const url = `${prefix}/spray/scene/scene/config`;
      const optionObj = {
        method: 'POST',
        body: options.id,
        headers: {
          'Content-Type': 'text/plain',
        },
      };
      const dataConfig = await fetch(url, optionObj).then((res) => res.json());
      if (dataConfig?.code !== 200) {
        return console.warn('接口返回异常', dataConfig?.message)
      }
      if (!dataConfig.data) {
        return null
      }
      return {
        config: dataConfig.data,
        code: await requestApi(`${prefix}/s-static/scene/${options.id}.js`),
        def: await requestApi(`${prefix}/s-static/scene-def/${options.id}.def`),
        bluePrint:
          window.ThingBlueprintEditor &&
          (await requestApi(`${prefix}/s-static/blue-print/${options.id}.json`)),
      }
    }

    async createInstance(scene = {}, config = {}) {
      const el = config.container;
      const diagram = new Diagram(getDiagramOptions(config));
      this.mask = document.createElement('div');
      this.mask.style = `position: absolute; width: 100%; height: 100%;background: rgba(40, 42, 46, 1);z-index:999;`;
      el.appendChild(this.mask);
      await diagram.init(el);
      window.ui = diagram.ui.$ui;
      // 加载资源
      await this._loadResources(scene, config);
      let def;
      if (scene.def) {
        try {
          def = transformDef(JSON.parse(scene.def), config);
        } catch (e) {
          console.error('解析定义文件失败', e);
        }
      }
      def && (await this._parseJSON(diagram, { def, scene, config }));
    }

    async _parseJSON(diagram, { def, scene, config }) {
      // 加载并转换定义文件
      await diagram.ui.parseJSON(diagram.ui.transformDef(def), {
        jsCode: scene.jsCode,
        bluePrint: scene.bluePrint,
      });
      this.mask && this.mask.remove();
      // 隐藏画布背景
      if (config.hideCanvasBackground) {
        diagram.canvas.backgroundColor = 'transparent';
        diagram.canvas.backgroundImage = '';
      }
      // 普通图层必须显示一个，默认第一个
      const plainLayers = diagram.ui.$canvas.layers.filter(
        (layer) => !layer.isThingLayer
      );
      if (!plainLayers.some((layer) => layer.visible)) {
        plainLayers[0].show();
      }
      // 隐藏接数组件
      diagram.ui.$canvas.containers.forEach((container) => {
        if (container?.adapter?.$dataAdapter) {
          container.hidden();
        }
      });
      // 进入预览模式
      diagram.ui.$ui.play((callback) => {
        callback();
      });
      this.resolve && this.resolve(diagram.ui.$ui);
      config.complete && config.complete(diagram.ui.$ui);
    }

    async _loadResources(scene, config) {
      if (!scene.config) return false
      let sceneConfig = null;
      try {
        sceneConfig = JSON.parse(scene.config);
      } catch (e) {
        console.error('资源解析失败', e);
      }

      if (sceneConfig) {
        // 加载资源
        const { offline } = this.options;
        await loadResources(sceneConfig, {
          prefix: (url) =>
            config.prefix + (offline ? url.replace('/s-static', '') : url),
        });
      }
    }

    async loadCompBundle(bundle, config) {
      // 获取数据
      const { main, id } = bundle;
      const { prefix } = config;
      // 解析组件,1、引入base文件、组件
      await loadScript(main, `${prefix}/${main}`);

      const compInstance = new window.conch[`C${id}`](
        config.container,
        { prefix },
        window.Vue
      );
      await compInstance.render();
      this.resolve && this.resolve(compInstance);
    }

    waitForComplete() {
      return this.promise
    }
  }

  if (!window.THING) {
    window.THING = {};
  }

  if (!window.THING.CHARTS) {
    window.THING.CHARTS = PreviewThingJSUI;
    window.THING.CHARTS.version = pak.version;
  }

  if (!window.THING.CHARTS.Utils) {
    window.THING.CHARTS.Utils = {};
  }

  window.THING.CHARTS.Utils.loadBundle = function (path, options = {}) {
    return new PreviewThingJSUI({
      ...options,
      baseUrl: path,
      offline: true,
    })
  };

}));
