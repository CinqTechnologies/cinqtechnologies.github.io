import{f as b,_ as g,o as a,c as o,g as v,a as t,p as y,e as k,d as w,r as S,h as C,w as j,n as f,t as r,i as x,j as T,F as d,k as m,b as p}from"./o0Zwi7Rj.js";const q=b("/hero_image.png"),D={},I={id:"home",class:"bg-white flex items-center justify-center p-12 mt-12"},M=v('<div class="container mx-auto flex flex-wrap items-center" data-v-123d020f><div class="w-full md:w-1/2 text-left px-6 py-12 fade-in text-animate" data-v-123d020f><h1 class="text-5xl leading-tight mb-6 md:text-7xl md:leading-tight md:mb-10 font-bold text-gray-800" data-v-123d020f> Elevate Your<br data-v-123d020f>Digital<br data-v-123d020f>Ecosystem<br data-v-123d020f></h1><span class="gradient-text text-3xl md:text-4xl font-bold" data-v-123d020f>Crafted Software Solutions for Growth</span><div class="max-w-lg mt-6" data-v-123d020f><a href="#services" data-v-123d020f><button class="mt-8 px-6 py-3 global-button rounded-full shadow-2xl transition duration-300 buttonFadeIn button-animate" data-v-123d020f> Learn About Our Services </button></a></div></div><div class="w-full md:w-1/2 px-6 py-12 fade-in image-animate" data-v-123d020f><img src="'+q+'" alt="Cinq Tech Solutions" data-v-123d020f></div></div>',1),z=[M];function W(s,i){return a(),o("div",I,z)}const A=g(D,[["render",W],["__scopeId","data-v-123d020f"]]),$=s=>(y("data-v-7d26a3df"),s=s(),k(),s),B={id:"about","data-aos":"fade-up",class:"story-section py-20 lg:py-28 bg-gradient-to-r from-gray-50 via-gray-100 to-white"},O=$(()=>t("h2",{class:"text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-10"},[w(" From "),t("span",{class:"pixelated-text"},"Pixels"),w(" to Products: The Cinq Story ")],-1)),L=$(()=>t("p",{class:"text-center text-base lg:text-lg text-gray-500 mx-auto max-w-prose"}," Dive into the story of Cinq, a company born from late-night gaming sessions and a shared passion for creating something incredible. ",-1)),E=`It all began in the digital battlegrounds. We were a squad of software engineers, bonded by our love for gaming and the thrill of competition. Countless late nights were spent strategizing, conquering challenges, and forging friendships over crackling headsets on Discord. One night, amidst the pixelated chaos, a spark ignited.<br><br>We dreamt of taking our skills beyond the game and building something real, something that could make a difference.
Fueled by caffeine and a shared vision, Cinq was born. What started as late-night brainstorming sessions evolved into a company driven by innovation and a relentless pursuit of excellence. We carried the same teamwork and dedication that fueled our virtual victories into the real world.
<br><br>This is the Cinq story. A testament to the power of collaboration, a dash of friendly competition, and the audacity to dream big. We're a company built on the foundation of gaming, and we're using our combined expertise to create software solutions that push boundaries.
Join us on our journey as we take the lessons learned from the virtual world and turn them into reality.`,F={__name:"Story",setup(s){return(i,u)=>(a(),o("section",B,[t("div",{class:"container mx-auto px-8 lg:px-16"},[O,L,t("div",{class:"flex flex-col lg:flex-row justify-between items-center"},[t("div",{class:"text-content w-full","data-aos":"fade-up"},[t("p",{innerHTML:E,class:"text-xl p-10 md:p-20 leading-relaxed text-gray-700 italic"})])])])]))}},H=g(F,[["__scopeId","data-v-7d26a3df"]]),R={key:0},V=["src","alt"],N={key:1,class:"gradient-text text-3xl font-bold self-center text-center w-full"},U={__name:"TechCard",props:{tech:{type:Object,required:!0}},setup(s){const i=S(!1);return(u,l)=>(a(),C(T(s.tech.url?"a":"div"),{href:s.tech.url||"#",target:"_blank",class:f(["flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-md transition-colors duration-300",{"cursor-pointer":s.tech.url,"cursor-default":!s.tech.url,"bg-black":i.value,"bg-white":!i.value}]),onMouseover:l[0]||(l[0]=h=>i.value=!0),onMouseleave:l[1]||(l[1]=h=>i.value=!1)},{default:j(()=>[s.tech.logo?(a(),o("div",R,[t("img",{src:i.value&&s.tech.logoDark?s.tech.logoDark:s.tech.logo,alt:`${s.tech.title} logo`,class:f(["w-20 h-20 transition duration-300",{"filter invert":i.value}])},null,10,V)])):s.tech.specialText?(a(),o("div",N,r(s.tech.specialText),1)):x("",!0),t("h3",{class:f(["mt-4 text-lg font-semibold w-full text-center",{"text-white":i.value,"text-gray-800":!i.value}])},r(s.tech.title),3)]),_:1},40,["href","class"]))}},P=g(U,[["__scopeId","data-v-439daec6"]]),G=b("/services_image.svg"),J={id:"services",class:"bg-zinc-50 p-12 max-w-7xl mx-auto my-10 rounded-3xl shadow-2xl","data-aos":"fade-up"},Y=v('<div class="flex flex-wrap items-center justify-center md:justify-between"><div class="w-full md:w-1/2 flex justify-center"><img src="'+G+'" alt="Our Work" class="w-3/4 h-auto md:w-full lg:w-5/6"></div><div class="w-full md:w-1/2 p-4 text-left"><h2 class="text-4xl font-bold text-gray-800">Our Services</h2><p class="mt-4 text-gray-600 text-xl"> We build amazing software that grows your business. Mobile apps, websites, you name it – we do it all. We use the latest tech to create powerful, easy-to-use solutions that fit you perfectly. Let&#39;s chat about your idea and bring it to life! </p></div></div>',1),K={class:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5"},Q={__name:"Services",setup(s){const i=[{id:1,logo:"/tech_stack/web-app.png",logoDark:"/tech_stack/web-app-dark.png",title:"Web App Development"},{id:2,logo:"/tech_stack/mobile-app.png",logoDark:"/tech_stack/mobile-app-dark.png",title:"Mobile App Development"},{id:3,logo:"/tech_stack/project-management.png",logoDark:"/tech_stack/project-management-dark.png",title:"Conversion Rate Optimization (CRO)"},{id:4,logo:"/tech_stack/cloud-service.png",logoDark:"/tech_stack/cloud-service-dark.png",title:"Cloud Managed Service"},{id:5,logo:"/tech_stack/blockchain.png",logoDark:"/tech_stack/blockchain-dark.png",title:"Blockchain"},{id:6,title:"AI Services",specialText:"Cinq AI",url:"https://cinqai.github.io/"}];return(u,l)=>{const h=P;return a(),o("div",J,[Y,t("div",K,[(a(),o(d,null,m(i,_=>p(h,{key:_.id,tech:_},null,8,["tech"])),64))])])}}},n=s=>(y("data-v-9172bd71"),s=s(),k(),s),X={id:"team","data-aos":"fade-up"},Z={class:"bg-gray-100 p-20 rounded-3xl shadow-2xl max-w-7xl mx-auto my-10 flex flex-col space-y-8"},tt=n(()=>t("h1",{class:"text-4xl font-bold text-gray-800"},"Board Members",-1)),et=n(()=>t("br",null,null,-1)),st=n(()=>t("br",null,null,-1)),at={class:"board-members-grid"},ot=["href"],nt={class:"board-member"},it={class:"text-2xl font-semibold text-gray-800"},lt={class:"text-xl text-gray-500"},rt=n(()=>t("br",null,null,-1)),ct=n(()=>t("br",null,null,-1)),dt=n(()=>t("h1",{class:"text-4xl font-bold text-gray-800"},"Meet Our Visionaries",-1)),ut=n(()=>t("br",null,null,-1)),ht=n(()=>t("br",null,null,-1)),mt=["src","alt"],pt={class:"text-2xl font-semibold text-gray-800"},gt={class:"role-container"},_t={class:"text-xl text-gray-500"},ft=n(()=>t("br",null,null,-1)),xt=["innerHTML"],bt=n(()=>t("br",null,null,-1)),vt={key:0,class:"logos-container"},wt=["href"],yt=["src","alt"],kt=n(()=>t("br",null,null,-1)),$t=n(()=>t("br",null,null,-1)),St=n(()=>t("h1",{class:"text-4xl font-bold text-gray-800"},"Engineering Core",-1)),Ct=n(()=>t("br",null,null,-1)),jt=n(()=>t("br",null,null,-1)),Tt=["src","alt"],qt={class:"text-2xl font-semibold text-gray-800"},Dt=n(()=>t("br",null,null,-1)),It={class:"text-lg text-gray-600 italic"},Mt=n(()=>t("br",null,null,-1)),zt={key:0,class:"logos-container"},Wt=["href"],At=["src","alt"],Bt={__name:"Team",setup(s){const i=[{id:1,name:"Mushfiqur Rahman",photo:"/team/mushfiq.jpg",logos:[{src:"/team/institution/everforth.png",url:"https://everforth.co.jp/"},{src:"/team/institution/samsung.png",url:"https://research.samsung.com/srbd"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Driving innovation with visionary leadership.",role:"CEO"},{id:2,name:"Sayem",photo:"/team/sayem.jpg",logos:[{src:"/team/institution/brainstation.png",url:"https://brainstation-23.com/"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Architecting scalable solutions with precision.",role:"CTO"}],u=[{id:4,name:"Shadman Shadab",photo:"/team/shadab.jpg",logos:[{src:"/team/institution/optimizely.png",url:"https://www.optimizely.com/"},{src:"/team/institution/newscred.png",url:"https://www.optimizely.com/"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Tech Lead"},{id:5,name:"Shakhawat Hossain Shourav",photo:"/team/shourav.jpg",logos:[{src:"/team/institution/everforth.png",url:"https://everforth.co.jp/"},{src:"/team/institution/samsung.png",url:"https://research.samsung.com/srbd"},{src:"/team/institution/du.png",url:"https://www.du.ac.bd/"}],description:"Full Stack Engineer"},{id:6,name:"Tanvir Rahman",photo:"/team/tanvir.jpg",logos:[{src:"/team/institution/kronologic.png",url:"https://www.kronologic.com/"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Backend Engineer"},{id:7,name:"Imtiaze",photo:"/team/maruf.jpg",logos:[{src:"/team/institution/samsung.png",url:"https://research.samsung.com/srbd"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Mobile Application Developer"},{id:8,name:"Faysal Abid",photo:"/team/abid.jpg",logos:[{src:"/team/institution/sender_net.png",url:"https://www.sender.net/"},{src:"/team/institution/uiu.png",url:"https://www.uiu.ac.bd/"}],description:"Frontend Engineer"}],l=[{id:1,name:"Tashin Ahmed",role:"Board Chair",link:"https://www.linkedin.com/in/tashinahmed/"},{id:2,name:"Mushfiqur Rahman",role:"Board Member",link:"https://www.linkedin.com/in/mrahman084/"},{id:3,name:"Sayem Pasha",role:"Board Member",link:"https://www.linkedin.com/in/sayem-pasha-449b81125/"}];return(h,_)=>(a(),o("div",X,[t("div",Z,[tt,et,st,t("div",at,[(a(),o(d,null,m(l,e=>t("a",{key:e.id,href:e.link,target:"_blank",rel:"noopener noreferrer",class:"board-member-link"},[t("div",nt,[t("h3",it,r(e.name),1),t("span",lt,r(e.role),1)])],8,ot)),64))]),rt,ct,dt,ut,ht,(a(),o(d,null,m(i,e=>t("div",{class:"flex items-center space-x-8",key:e.id},[t("img",{src:e.photo,alt:e.name,lazy:"",class:"w-48 h-48 square-photo shadow-lg rounded-2xl"},null,8,mt),t("div",null,[t("h3",pt,r(e.name),1),t("div",gt,[t("span",_t,r(e.role),1)]),ft,t("p",{class:"text-lg text-gray-600 italic",innerHTML:e.description},null,8,xt),bt,e.logos&&e.logos.length?(a(),o("div",vt,[(a(!0),o(d,null,m(e.logos,c=>(a(),o("a",{key:c.src,href:c.url,target:"_blank"},[t("img",{src:c.src,alt:e.name+" logo",class:"logo-image"},null,8,yt)],8,wt))),128))])):x("",!0)])])),64)),kt,$t,St,Ct,jt,(a(),o(d,null,m(u,e=>t("div",{class:"flex items-center space-x-8",key:e.id},[t("img",{src:e.photo,alt:e.name,lazy:"",class:"w-48 h-48 square-photo shadow-lg rounded-2xl"},null,8,Tt),t("div",null,[t("h3",qt,r(e.name),1),Dt,t("p",It,r(e.description),1),Mt,e.logos&&e.logos.length?(a(),o("div",zt,[(a(!0),o(d,null,m(e.logos,c=>(a(),o("a",{key:c.src,href:c.url,target:"_blank"},[t("img",{src:c.src,alt:e.name+" logo",class:"logo-image"},null,8,At)],8,Wt))),128))])):x("",!0)])])),64))])]))}},Ot=g(Bt,[["__scopeId","data-v-9172bd71"]]),Lt=b("/contact_us.png"),Et={},Ft={id:"contact",class:"bg-zinc-50 p-20 rounded-3xl shadow-2xl max-w-7xl mx-auto my-10 flex flex-col space-y-8 md:flex-row md:space-y-0 items-center","data-aos":"fade-up"},Ht=v('<div class="w-full md:w-1/2 flex flex-col space-y-4 text-left" data-v-8ee6e13f><h2 class="text-4xl font-bold text-gray-800" data-v-8ee6e13f>Get in Touch with Us!</h2><p class="text-lg text-gray-600" data-v-8ee6e13f> We are a team of passionate software architects and engineers, dedicated to translating your vision into reality. We&#39;re passionate about turning your vision into reality. Whether you need a stunning mobile app, a robust web platform, or a secure back-end system, our team of experts is here to guide you every step of the way. <br data-v-8ee6e13f><br data-v-8ee6e13f>Let&#39;s chat about your project and unlock its potential together! <br data-v-8ee6e13f>Contact us today at <a href="https://www.linkedin.com/company/cinq-world/" class="email-link" target="_blank" rel="noopener noreferrer" data-v-8ee6e13f>cinq-tech</a> and get a free consultation. </p></div><div class="w-full md:w-1/2 flex justify-center" data-v-8ee6e13f><img src="'+Lt+'" alt="Contact Us" class="max-w-xs md:max-w-full" data-v-8ee6e13f></div>',2),Rt=[Ht];function Vt(s,i){return a(),o("div",Ft,Rt)}const Nt=g(Et,[["render",Vt],["__scopeId","data-v-8ee6e13f"]]),Ut={};function Pt(s,i){const u=A,l=H,h=Q,_=Ot,e=Nt;return a(),o(d,null,[p(u),p(l),p(h),p(_),p(e)],64)}const Jt=g(Ut,[["render",Pt]]);export{Jt as default};
