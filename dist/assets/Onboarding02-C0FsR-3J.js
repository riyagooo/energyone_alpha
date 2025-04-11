import{_ as x,c as g,a as t,b as n,w as i,r as v,g as r,m as c,l as d,C as a,D as w,h as u,f as k,o as h}from"./index-CrXIC_Ca.js";import{_ as S,a as y}from"./auth-decoration-C2yjzE3q.js";const z={name:"Onboarding02",setup(){const m=k(),e=w(),f=u("Pre-seed / Seed"),o=u("10-15%"),p=u("Medium term (3-7 years)"),b=u("Moderate");return{stage:f,targetReturn:o,horizon:p,riskTolerance:b,prevStep:()=>{m.push("/dashboard/onboarding/step-1")},nextStep:()=>{e.setInvestmentStage(f.value),e.setTargetReturn(o.value),e.setInvestmentHorizon(p.value),e.setRiskTolerance(b.value),m.push("/dashboard/onboarding/step-3")}}}},B={class:"bg-white dark:bg-slate-900"},M={class:"relative flex"},j={class:"w-full md:w-1/2"},C={class:"min-h-[100dvh] h-full flex flex-col after:flex-1"},A={class:"flex-1"},R={class:"flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"},T={class:"text-sm"},V={class:"px-4 pt-12 pb-8"},F={class:"max-w-md mx-auto w-full"},I={class:"relative"},O={class:"relative flex justify-between w-full"},_={class:"px-4 py-8"},D={class:"max-w-md mx-auto"},N={class:"space-y-6"},U={class:"mt-8 pt-4 border-t border-slate-200 dark:border-slate-700"},G={class:"flex justify-between"};function H(m,e,f,o,p,b){const l=v("router-link");return h(),g("main",B,[t("div",M,[t("div",j,[t("div",C,[t("div",A,[t("div",R,[n(l,{class:"block",to:"/"},{default:i(()=>e[6]||(e[6]=[t("svg",{width:"32",height:"32",viewBox:"0 0 32 32"},[t("defs",null,[t("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a"},[t("stop",{"stop-color":"#A5B4FC","stop-opacity":"0",offset:"0%"}),t("stop",{"stop-color":"#A5B4FC",offset:"100%"})]),t("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b"},[t("stop",{"stop-color":"#38BDF8","stop-opacity":"0",offset:"0%"}),t("stop",{"stop-color":"#38BDF8",offset:"100%"})])]),t("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),t("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),t("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),t("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})],-1)])),_:1}),t("div",T,[e[8]||(e[8]=r(" Have an account? ")),n(l,{class:"font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400",to:"/signin"},{default:i(()=>e[7]||(e[7]=[r("Sign In")])),_:1})])]),t("div",V,[t("div",F,[t("div",I,[e[13]||(e[13]=t("div",{class:"absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700","aria-hidden":"true"},null,-1)),t("ul",O,[t("li",null,[n(l,{class:"flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white",to:"/dashboard/onboarding/step-1"},{default:i(()=>e[9]||(e[9]=[r("1")])),_:1})]),t("li",null,[n(l,{class:"flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white",to:"/dashboard/onboarding/step-2"},{default:i(()=>e[10]||(e[10]=[r("2")])),_:1})]),t("li",null,[n(l,{class:"flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400",to:"/dashboard/onboarding/step-3"},{default:i(()=>e[11]||(e[11]=[r("3")])),_:1})]),t("li",null,[n(l,{class:"flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400",to:"/dashboard/onboarding/step-4"},{default:i(()=>e[12]||(e[12]=[r("4")])),_:1})])])])])])]),t("div",_,[t("div",D,[e[23]||(e[23]=t("h1",{class:"text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6"},"Investment Preferences",-1)),t("form",{onSubmit:e[5]||(e[5]=c((...s)=>o.nextStep&&o.nextStep(...s),["prevent"]))},[t("div",N,[t("div",null,[e[15]||(e[15]=t("label",{class:"block text-sm font-medium mb-1",for:"investment-stage"},"Investment Stage",-1)),d(t("select",{id:"investment-stage",class:"form-select w-full","onUpdate:modelValue":e[0]||(e[0]=s=>o.stage=s)},e[14]||(e[14]=[t("option",null,"Pre-seed / Seed",-1),t("option",null,"Series A",-1),t("option",null,"Series B",-1),t("option",null,"Growth Stage",-1),t("option",null,"Mature / Operational",-1)]),512),[[a,o.stage]])]),t("div",null,[e[17]||(e[17]=t("label",{class:"block text-sm font-medium mb-1",for:"target-return"},"Target Annual Return",-1)),d(t("select",{id:"target-return",class:"form-select w-full","onUpdate:modelValue":e[1]||(e[1]=s=>o.targetReturn=s)},e[16]||(e[16]=[t("option",null,"5-10%",-1),t("option",null,"10-15%",-1),t("option",null,"15-20%",-1),t("option",null,"20%+",-1)]),512),[[a,o.targetReturn]])]),t("div",null,[e[19]||(e[19]=t("label",{class:"block text-sm font-medium mb-1",for:"investment-horizon"},"Investment Horizon",-1)),d(t("select",{id:"investment-horizon",class:"form-select w-full","onUpdate:modelValue":e[2]||(e[2]=s=>o.horizon=s)},e[18]||(e[18]=[t("option",null,"Short term (1-3 years)",-1),t("option",null,"Medium term (3-7 years)",-1),t("option",null,"Long term (7+ years)",-1)]),512),[[a,o.horizon]])]),t("div",null,[e[21]||(e[21]=t("label",{class:"block text-sm font-medium mb-1",for:"risk-tolerance"},"Risk Tolerance",-1)),d(t("select",{id:"risk-tolerance",class:"form-select w-full","onUpdate:modelValue":e[3]||(e[3]=s=>o.riskTolerance=s)},e[20]||(e[20]=[t("option",null,"Conservative",-1),t("option",null,"Moderate",-1),t("option",null,"Aggressive",-1)]),512),[[a,o.riskTolerance]])])]),t("div",U,[t("div",G,[t("button",{type:"button",onClick:e[4]||(e[4]=(...s)=>o.prevStep&&o.prevStep(...s)),class:"text-sm underline hover:no-underline"},"<- Back"),e[22]||(e[22]=t("button",{type:"submit",class:"btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"},"Next Step ->",-1))])])],32)])])])]),e[24]||(e[24]=t("div",{class:"hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2","aria-hidden":"true"},[t("img",{class:"object-cover object-center w-full h-full",src:S,width:"760",height:"1024",alt:"Onboarding"}),t("img",{class:"absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block",src:y,width:"218",height:"224",alt:"Authentication decoration"})],-1))])])}const E=x(z,[["render",H]]);export{E as default};
//# sourceMappingURL=Onboarding02-C0FsR-3J.js.map
