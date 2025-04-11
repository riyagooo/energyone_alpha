import{t as G,a as J}from"../chunks/CYEPvI1U.js";import"../chunks/DAxizKm6.js";import{p as K,c as t,t as N,g as l,d as O,s as i,e as r,m as P,n,r as s}from"../chunks/xC3-kGY6.js";import{e as E}from"../chunks/CZDIIiPP.js";import{r as d}from"../chunks/COsgKQ3U.js";import{s as u}from"../chunks/Q_GEmBfN.js";import{b as m}from"../chunks/DpH6AVGs.js";import{i as R}from"../chunks/DE2GX4WX.js";import{g as F}from"../chunks/CLAFF9o8.js";var T=G(`<div class="min-h-screen bg-slate-900 flex flex-col"><div class="flex-grow flex items-center justify-center"><div class="max-w-2xl w-full mx-4 bg-slate-800 shadow-lg rounded-lg p-8"><div class="mb-8"><div class="flex justify-between items-center"><p class="text-sm font-medium text-slate-300">Question 4 of 5</p> <p class="text-sm font-medium text-slate-400">80% Complete</p></div> <div class="mt-2 w-full bg-slate-700 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div></div></div> <div class="mb-8"><h1 class="text-2xl font-bold text-white mb-2">How much capital are you willing to invest?</h1> <p class="text-slate-400">Select the amount range you're considering for renewable energy investments.</p></div> <div class="space-y-4 mb-8"><label><div class="flex items-start"><input type="radio" name="investmentAmount" class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"> <div class="ml-3"><span class="block text-white font-medium">$1,000 - $10,000</span> <span class="block text-slate-400 text-sm">Entry-level investment with select opportunities</span></div></div></label> <label><div class="flex items-start"><input type="radio" name="investmentAmount" class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"> <div class="ml-3"><span class="block text-white font-medium">$10,000 - $100,000</span> <span class="block text-slate-400 text-sm">Smaller investment with expanded options</span></div></div></label> <label><div class="flex items-start"><input type="radio" name="investmentAmount" class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"> <div class="ml-3"><span class="block text-white font-medium">$100,000 - $500,000</span> <span class="block text-slate-400 text-sm">Mid-size investments with extensive options</span></div></div></label> <label><div class="flex items-start"><input type="radio" name="investmentAmount" class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"> <div class="ml-3"><span class="block text-white font-medium">$500,000 - $5 million</span> <span class="block text-slate-400 text-sm">Larger investments with premium opportunities</span></div></div></label> <label><div class="flex items-start"><input type="radio" name="investmentAmount" class="mt-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500"> <div class="ml-3"><span class="block text-white font-medium">Flexible - depends on the opportunity</span> <span class="block text-slate-400 text-sm">I'm open to various investment sizes based on specific projects</span></div></div></label></div> <div class="flex justify-between"><button class="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-700 font-medium rounded-md">Back</button> <button class="px-6 py-3 bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white font-medium rounded-md shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">Continue</button></div></div></div></div>`);function le(H,L){K(L,!1);const o=[];let e=P(null);function M(){l(e)&&(localStorage.setItem("investmentAmount",l(e)),F("/investor-profile/question5"))}function D(){F("/investor-profile/question3")}R();var w=T(),$=t(w),A=t($),k=i(t(A),4),b=t(k),j=t(b),v=t(j);d(v),v.value=(v.__value="small")==null?"":"small",n(2),s(j),s(b);var c=i(b,2),Q=t(c),p=t(Q);d(p),p.value=(p.__value="medium")==null?"":"medium",n(2),s(Q),s(c);var f=i(c,2),S=t(f),x=t(S);d(x),x.value=(x.__value="large")==null?"":"large",n(2),s(S),s(f);var g=i(f,2),q=t(g),h=t(q);d(h),h.value=(h.__value="institutional")==null?"":"institutional",n(2),s(q),s(g);var y=i(g,2),z=t(y),_=t(z);d(_),_.value=(_.__value="flexible")==null?"":"flexible",n(2),s(z),s(y),s(k);var C=i(k,2),I=t(C),B=i(I,2);s(C),s(A),s($),s(w),N(()=>{u(b,1,`block p-4 bg-slate-700 rounded-lg border-2 ${(l(e)==="small"?"border-blue-500":"border-slate-700")??""} cursor-pointer hover:bg-slate-600 transition-colors`),u(c,1,`block p-4 bg-slate-700 rounded-lg border-2 ${(l(e)==="medium"?"border-blue-500":"border-slate-700")??""} cursor-pointer hover:bg-slate-600 transition-colors`),u(f,1,`block p-4 bg-slate-700 rounded-lg border-2 ${(l(e)==="large"?"border-blue-500":"border-slate-700")??""} cursor-pointer hover:bg-slate-600 transition-colors`),u(g,1,`block p-4 bg-slate-700 rounded-lg border-2 ${(l(e)==="institutional"?"border-blue-500":"border-slate-700")??""} cursor-pointer hover:bg-slate-600 transition-colors`),u(y,1,`block p-4 bg-slate-700 rounded-lg border-2 ${(l(e)==="flexible"?"border-blue-500":"border-slate-700")??""} cursor-pointer hover:bg-slate-600 transition-colors`),B.disabled=!l(e)}),m(o,[],v,()=>l(e),a=>r(e,a)),m(o,[],p,()=>l(e),a=>r(e,a)),m(o,[],x,()=>l(e),a=>r(e,a)),m(o,[],h,()=>l(e),a=>r(e,a)),m(o,[],_,()=>l(e),a=>r(e,a)),E("click",I,D),E("click",B,M),J(H,w),O()}export{le as component};
