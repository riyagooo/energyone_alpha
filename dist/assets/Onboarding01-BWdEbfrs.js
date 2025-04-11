import{_ as F,h as _,s as D,i as T,B as L,c as N,d as S,a as d,o as j,b as q,r as J,j as G,f as U}from"./index-CrXIC_Ca.js";import{u as W,v as R,w as B,x as H}from"./mesh-BOmcAuTG.js";class p{static fromAngles([t,o,e]){t*=Math.PI/360,o*=Math.PI/360,e*=Math.PI/360;const a=Math.sin(t),s=Math.cos(t),n=Math.sin(o),i=Math.cos(o),l=Math.sin(e),r=Math.cos(e);return[s*i*r+a*n*l,a*i*r-s*n*l,s*n*r+a*i*l,s*i*l-a*n*r]}static toAngles([t,o,e,a]){return[Math.atan2(2*(t*o+e*a),1-2*(o*o+e*e))*180/Math.PI,Math.asin(Math.max(-1,Math.min(1,2*(t*e-a*o))))*180/Math.PI,Math.atan2(2*(t*a+o*e),1-2*(e*e+a*a))*180/Math.PI]}static interpolateAngles(t,o){const e=p.interpolate(p.fromAngles(t),p.fromAngles(o));return a=>p.toAngles(e(a))}static interpolateLinear([t,o,e,a],[s,n,i,l]){s-=t,n-=o,i-=e,l-=a;const r=new Array(4);return h=>{const u=Math.hypot(r[0]=t+s*h,r[1]=o+n*h,r[2]=e+i*h,r[3]=a+l*h);return r[0]/=u,r[1]/=u,r[2]/=u,r[3]/=u,r}}static interpolate([t,o,e,a],[s,n,i,l]){let r=t*s+o*n+e*i+a*l;if(r<0&&(s=-s,n=-n,i=-i,l=-l,r=-r),r>.9995)return p.interpolateLinear([t,o,e,a],[s,n,i,l]);const h=Math.acos(Math.max(-1,Math.min(1,r))),u=new Array(4),v=Math.hypot(s-=t*r,n-=o*r,i-=e*r,l-=a*r);return s/=v,n/=v,i/=v,l/=v,m=>{const b=h*m,f=Math.sin(b),c=Math.cos(b);return u[0]=t*c+s*f,u[1]=o*c+n*f,u[2]=e*c+i*f,u[3]=a*c+l*f,u}}}const K={name:"WorldTour",props:{width:{type:Number,default:320}},emits:["error"],setup(w,{emit:t}){const o=_(null);let e=null;const a=_(""),s=_(!0);let n=null,i=null,l=null,r=null,h=null;const u=()=>{{console.error("Cannot resize visualization - missing canvas, container, or world data");return}};function v(m,b){}return D(()=>w.width,()=>{u()}),T(async()=>{console.log("WorldTour component mounted. Container ref:",o.value);try{console.log("Attempting to load world data from /data/countries-110m.json");const m=await fetch("/data/countries-110m.json");if(!m.ok){console.error(`Failed to fetch world data: ${m.status} ${m.statusText}`),s.value=!1,t("error","Failed to fetch world data");return}if(n=await m.json(),!n){console.error("Failed to load world data - file was loaded but empty or invalid"),s.value=!1,t("error","Failed to process world data");return}console.log("World data loaded successfully:",Object.keys(n));try{i=W(n,n.objects.land),l=W(n,n.objects.countries).features,r=R(n,n.objects.countries,(c,M)=>c!==M),console.log(`Converted TopoJSON successfully - found ${l.length} countries`)}catch(c){console.error("Error converting TopoJSON to GeoJSON:",c),console.log("World data structure:",JSON.stringify(n).substring(0,500)+"..."),s.value=!1,t("error","Failed to convert world data");return}u();let b=0;async function f(){for(let c=0;c<l.length;c++){const M=l[c];if(!o.value)break;const A=c>0?B(l[c-1]):[0,0],y=B(M),C=c>0?[-A[0],20-A[1],0]:[0,0,0],E=[-y[0],20-y[1],0],I=H(A,y),it=p.interpolateAngles(C,E),P=1250,$=Date.now();if(await new Promise(g=>{function x(){Math.min(1,(Date.now()-$)/P)<1&&o.value?e=requestAnimationFrame(x):g()}e=requestAnimationFrame(x)}),!o.value)break;const O=750,z=Date.now();await new Promise(g=>{function x(){const k=Math.min(1,(Date.now()-z)/O);I(k),k<1&&o.value?e=requestAnimationFrame(x):g()}e=requestAnimationFrame(x)}),await new Promise(g=>setTimeout(g,500))}o.value&&f()}f(),s.value=!1}catch(m){console.error("Error in WorldTour component:",m),s.value=!1,t("error","An error occurred")}}),L(()=>{e&&cancelAnimationFrame(e)}),{container:o,currentCountryName:a,loading:s}}},Q={class:"world-tour-container",ref:"container"},V={key:0,class:"loading-indicator"};function X(w,t,o,e,a,s){return j(),N("div",Q,[e.loading?(j(),N("div",V,t[0]||(t[0]=[d("div",{class:"spinner"},null,-1),d("div",{class:"loading-text"},"Loading Earth Data...",-1)]))):S("",!0)],512)}const Y=F(K,[["render",X],["__scopeId","data-v-d5867bbf"]]),Z={name:"Onboarding01",components:{WorldTour:Y},setup(){const w=U(),t=_({width:800}),o=()=>{const s=Math.min(window.innerWidth-80,800);t.width=s};return T(()=>{o(),window.addEventListener("resize",o)}),G(()=>{window.removeEventListener("resize",o)}),{handleNext:()=>{w.push("/dashboard/onboarding/step-2")},handleBack:()=>{w.push("/")},responsive:t}}},tt={class:"py-8"},et={class:"max-w-3xl mx-auto px-4"},ot={class:"bg-white rounded-lg shadow-sm p-6 mb-8"},nt={class:"mb-6"},st={class:"mb-6"},rt={class:"flex justify-between mt-8"};function at(w,t,o,e,a,s){const n=J("WorldTour");return j(),N("div",tt,[t[4]||(t[4]=d("div",{class:"mb-8 text-center"},[d("h1",{class:"text-3xl font-bold text-slate-800 mb-4"},"Welcome to EnergyOne"),d("p",{class:"text-lg text-slate-600 max-w-xl mx-auto"},"Discover global renewable energy opportunities at your fingertips")],-1)),d("div",et,[d("div",ot,[d("div",nt,[t[2]||(t[2]=d("h2",{class:"text-xl font-semibold text-slate-800 mb-2"},"Global Energy Impact",-1)),t[3]||(t[3]=d("p",{class:"text-slate-600 mb-4"},"Explore renewable energy projects around the world and see how your investments can make a difference.",-1)),d("div",st,[q(n,{width:e.responsive.width},null,8,["width"])])]),d("div",rt,[d("button",{onClick:t[0]||(t[0]=(...i)=>e.handleBack&&e.handleBack(...i)),class:"btn-sm bg-white border-slate-200 hover:border-slate-300 text-slate-600"},"Back"),d("button",{onClick:t[1]||(t[1]=(...i)=>e.handleNext&&e.handleNext(...i)),class:"btn-sm bg-blue-500 hover:bg-blue-600 text-white"},"Continue")])])])])}const dt=F(Z,[["render",at],["__scopeId","data-v-8237675f"]]);export{dt as default};
//# sourceMappingURL=Onboarding01-BWdEbfrs.js.map
