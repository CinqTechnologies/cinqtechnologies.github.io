import{_ as F}from"./BusK5OyF.js";import{l as W,m as T,q as D,s as R,v as E,x as H,y as U,z as x,A as V,r as $,u as Y,B as j,C as J,_ as N,D as Q,o as S,c as k,a as w,b as c,w as m,d as p,i as X,n as G,f as K,t as Z,g as ee,E as te}from"./qZGJv2XU.js";async function ie(e,t){return await ae(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ae(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,a)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>a(o),i.src=e})}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function oe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const a of e.split(" ")){const i=Number.parseInt(a.replace("x",""));i&&t.add(i)}return Array.from(t)}function se(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function re(e){const t={};if(typeof e=="string")for(const a of e.split(/[\s,]+/).filter(i=>i)){const i=a.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ne(e){const t={options:e},a=(o,r={})=>B(t,o,r),i=(o,r={},s={})=>a(o,{...s,modifiers:E(r,s.modifiers||{})}).url;for(const o in e.presets)i[o]=(r,s,d)=>i(r,s,{...e.presets[o],...d});return i.options=e,i.getImage=a,i.getMeta=(o,r)=>de(t,o,r),i.getSizes=(o,r)=>ue(t,o,r),t.$img=i,i}async function de(e,t,a){const i=B(e,t,{...a});return typeof i.getMeta=="function"?await i.getMeta():await ie(e,i.url)}function B(e,t,a){var u,v;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=le(e,a.provider||e.options.provider),r=ce(e,a.preset);if(t=W(t)?t:T(t),!i.supportsAlias)for(const _ in e.options.alias)t.startsWith(_)&&(t=D(e.options.alias[_],t.substr(_.length)));if(i.validateDomains&&W(t)){const _=R(t).host;if(!e.options.domains.find(z=>z===_))return{url:t}}const s=E(a,r,o);s.modifiers={...s.modifiers};const d=s.modifiers.format;(u=s.modifiers)!=null&&u.width&&(s.modifiers.width=g(s.modifiers.width)),(v=s.modifiers)!=null&&v.height&&(s.modifiers.height=g(s.modifiers.height));const l=i.getImage(t,s,e);return l.format=l.format||d||"",l}function le(e,t){const a=e.options.providers[t];if(!a)throw new Error("Unknown provider: "+t);return a}function ce(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ue(e,t,a){var h,I,C,M,A;const i=g((h=a.modifiers)==null?void 0:h.width),o=g((I=a.modifiers)==null?void 0:I.height),r=re(a.sizes),s=(C=a.densities)!=null&&C.trim()?oe(a.densities.trim()):e.options.densities;se(s);const d=i&&o?o/i:0,l=[],u=[];if(Object.keys(r).length>=1){for(const f in r){const y=L(f,String(r[f]),o,d,e);if(y!==void 0){l.push({size:y.size,screenMaxWidth:y.screenMaxWidth,media:`(max-width: ${y.screenMaxWidth}px)`});for(const b of s)u.push({width:y._cWidth*b,src:q(e,t,a,y,b)})}}fe(l)}else for(const f of s){const y=Object.keys(r)[0];let b=L(y,String(r[y]),o,d,e);b===void 0&&(b={size:"",screenMaxWidth:0,_cWidth:(M=a.modifiers)==null?void 0:M.width,_cHeight:(A=a.modifiers)==null?void 0:A.height}),u.push({width:f,src:q(e,t,a,b,f)})}he(u);const v=u[u.length-1],_=l.length?l.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,z=_?"w":"x",n=u.map(f=>`${f.src} ${f.width}${z}`).join(", ");return{sizes:_,srcset:n,src:v==null?void 0:v.src}}function L(e,t,a,i,o){const r=o.options.screens&&o.options.screens[e]||Number.parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!r||!d)return;s&&(d=Math.round(d/100*r));const l=i?Math.round(d*i):a;return{size:t,screenMaxWidth:r,_cWidth:d,_cHeight:l}}function q(e,t,a,i,o){return e.$img(t,{...a.modifiers,width:i._cWidth?i._cWidth*o:void 0,height:i._cHeight?i._cHeight*o:void 0},a)}function fe(e){var a;e.sort((i,o)=>i.screenMaxWidth-o.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.media===t&&e.splice(i,1),t=o.media}for(let i=0;i<e.length;i++)e[i].media=((a=e[i+1])==null?void 0:a.media)||""}function he(e){e.sort((a,i)=>a.width-i.width);let t=null;for(let a=e.length-1;a>=0;a--){const i=e[a];i.width===t&&e.splice(a,1),t=i.width}}const O={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"static",domains:[],alias:{},densities:[1,2],format:["webp"]};O.providers={};const P=()=>{const e=H(),t=U();return t.$img||t._img||(t._img=ne({...O,nuxt:{baseURL:e.app.baseURL}}))};function me(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ge={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ve=e=>{const t=x(()=>({provider:e.provider,preset:e.preset})),a=x(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=P(),o=x(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:a,modifiers:o}},_e={...ge,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},ye=V({name:"NuxtImg",props:_e,emits:["load","error"],setup:(e,t)=>{const a=P(),i=ve(e),o=$(!1),r=$(),s=x(()=>a.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),d=x(()=>{const n={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||o.value)&&(n.sizes=s.value.sizes,n.srcset=s.value.srcset),n}),l=x(()=>{let n=e.placeholder;if(n===""&&(n=!0),!n||o.value)return!1;if(typeof n=="string")return n;const h=Array.isArray(n)?n:typeof n=="number"?[n,n]:[10,10];return a(e.src,{...i.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},i.options.value)}),u=x(()=>e.sizes?s.value.src:a(e.src,i.modifiers.value,i.options.value)),v=x(()=>l.value?l.value:u.value);if(e.preload){const n=Object.values(s.value).every(h=>h);Y({link:[{rel:"preload",as:"image",nonce:e.nonce,...n?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:v.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const z=U().isHydrating;return j(()=>{if(l.value){const n=new Image;n.src=u.value,e.sizes&&(n.sizes=s.value.sizes||"",n.srcset=s.value.srcset),n.onload=h=>{o.value=!0,t.emit("load",h)},me("nuxt-image");return}r.value&&(r.value.complete&&z&&(r.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),r.value.onload=n=>{t.emit("load",n)},r.value.onerror=n=>{t.emit("error",n)})}),()=>J("img",{ref:r,...d.value,...t.attrs,class:e.placeholder&&!o.value?[e.placeholderClass]:void 0,src:v.value})}}),pe={class:"container mx-auto flex justify-between items-center px-4"},we={key:0,"data-aos":"fade-down"},xe={key:1,"data-aos":"fade-right"},be={class:"hidden md:flex space-x-8"},Se={key:0,class:"absolute w-full bg-white flex flex-col items-center md:hidden shadow-md mt-2 rounded-lg"},ke={__name:"Navbar",setup(e){const t=$(!1),a=$(!1),i=()=>{a.value=!a.value},o=()=>{t.value=window.scrollY>20};return j(()=>{window.addEventListener("scroll",o)}),Q(()=>{window.removeEventListener("scroll",o)}),(r,s)=>{const d=F,l=ye;return S(),k("nav",{class:G([{"shadow-lg":t.value},"border-none bg-white text-black py-4 fixed top-0 left-0 right-0 z-50"])},[w("div",pe,[t.value?(S(),k("div",xe,[c(d,{to:"/#home"},{default:m(()=>[c(l,{src:"/company_logo.png",alt:"Cinq Logo",class:"w-10 h-10"})]),_:1})])):(S(),k("div",we,[c(d,{class:"text-4xl font-bold hover:text-gray-400 transition-colors",to:"/"},{default:m(()=>[p("Cinq")]),_:1})])),w("ul",be,[w("li",null,[c(d,{href:"/#about",class:"py-2 text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("About")]),_:1})]),w("li",null,[c(d,{href:"/#services",class:"text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Services")]),_:1})]),w("li",null,[c(d,{href:"/#team",class:"text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Our Team")]),_:1})]),w("li",null,[c(d,{href:"/#contact",class:"text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Contact Us")]),_:1})])]),w("button",{onClick:i,class:"md:hidden"},[c(l,{src:"/menu.png",alt:"Menu",class:"w-8 h-8"})])]),a.value?(S(),k("div",Se,[c(d,{href:"/#services",class:"py-2 text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Services")]),_:1}),c(d,{href:"/#about",class:"py-2 text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("About")]),_:1}),c(d,{href:"/#team",class:"py-2 text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Our Team")]),_:1}),c(d,{href:"/#contact",class:"py-2 text-lg hover:text-gray-400 transition-colors"},{default:m(()=>[p("Contact Us")]),_:1})])):X("",!0)],2)}}},ze=N(ke,[["__scopeId","data-v-b3043c0b"]]),$e=K("/footer_company_logo.png"),Ne={},Ie={class:"footer mt-20 mx-12"},Ce=ee('<div class="footer-container" data-v-23123a73><div class="footer-about" data-v-23123a73><div class="footer-logo" data-v-23123a73><img src="'+$e+'" alt="Company Logo" class="company-logo" data-v-23123a73></div><h2 data-v-23123a73>About Our Company</h2><p data-v-23123a73>Delivering innovative tech solutions for the digital age.</p></div><div class="footer-nav" data-v-23123a73><h2 data-v-23123a73>Quick Links</h2><ul data-v-23123a73><li data-v-23123a73><a href="#about" data-v-23123a73>About</a></li><li data-v-23123a73><a href="#services" data-v-23123a73>Services</a></li><li data-v-23123a73><a href="#team" data-v-23123a73>Team</a></li><li data-v-23123a73><a href="#contact" data-v-23123a73>Contact</a></li></ul></div><div class="footer-social" data-v-23123a73><h2 data-v-23123a73>Follow Us</h2><ul data-v-23123a73><li data-v-23123a73><a href="https://twitter.com/CinqTechX" data-v-23123a73>Twitter</a></li><li data-v-23123a73><a href="https://www.linkedin.com/company/cinq-world/" data-v-23123a73>LinkedIn</a></li><li data-v-23123a73><a href="https://www.facebook.com/CinqTechFB/" data-v-23123a73>Facebook</a></li></ul></div></div>',1),Me={class:"footer-bottom"};function Ae(e,t){return S(),k("footer",Ie,[Ce,w("div",Me,[w("p",null,"© "+Z(new Date().getFullYear())+" Cinq. All rights reserved.",1)])])}const We=N(Ne,[["render",Ae],["__scopeId","data-v-23123a73"]]),Le={};function qe(e,t){const a=ze,i=te,o=We;return S(),k("div",null,[c(a),c(i),c(o)])}const je=N(Le,[["render",qe]]);export{je as default};
