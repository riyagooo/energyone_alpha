import{u as _,C as y,c as v,t as i,k as w,A as E,T as D,p as B}from"./chartjs-adapter-moment.esm-CoNQ49Hy.js";import{_ as T,h as f,i as R,j,s as A,c as L,a as g,o as M}from"./index-CrXIC_Ca.js";y.register(w,E,D,B);const N={name:"DoughnutChart",props:["data","width","height"],setup(b){const m=f(null),l=f(null);let t=null;const o=_(),{tooltipTitleColor:n,tooltipBodyColor:r,tooltipBgColor:d,tooltipBorderColor:p}=v;return R(()=>{const k=m.value;t=new y(k,{type:"doughnut",data:b.data,options:{cutout:"80%",layout:{padding:24},plugins:{legend:{display:!1},tooltip:{titleColor:o.value?n.dark:n.light,bodyColor:o.value?r.dark:r.light,backgroundColor:o.value?d.dark:d.light,borderColor:o.value?p.dark:p.light}},interaction:{intersect:!1,mode:"nearest"},animation:{duration:500},maintainAspectRatio:!1,resizeDelay:200},plugins:[{id:"htmlLegend",afterUpdate(c,$,q){const u=l.value;if(!u)return;for(;u.firstChild;)u.firstChild.remove();c.options.plugins.legend.labels.generateLabels(c).forEach(s=>{const C=document.createElement("li");C.style.margin=i().theme.margin[1];const a=document.createElement("button");a.classList.add("btn-xs","bg-white","dark:bg-slate-800","text-slate-500","dark:text-slate-400","border","border-slate-200","dark:border-slate-700","shadow-md"),a.style.opacity=s.hidden?".3":"",a.onclick=()=>{c.toggleDataVisibility(s.index,!s.index),c.update()};const e=document.createElement("span");e.style.display="block",e.style.width=i().theme.width[2],e.style.height=i().theme.height[2],e.style.backgroundColor=s.fillStyle,e.style.borderRadius=i().theme.borderRadius.sm,e.style.marginRight=i().theme.margin[1],e.style.pointerEvents="none";const h=document.createElement("span");h.style.display="flex",h.style.alignItems="center";const x=document.createTextNode(s.text);h.appendChild(x),C.appendChild(a),a.appendChild(e),a.appendChild(h),u.appendChild(C)})}}]})}),j(()=>t.destroy()),A(()=>o.value,()=>{o.value?(t.options.plugins.tooltip.titleColor=n.dark,t.options.plugins.tooltip.bodyColor=r.dark,t.options.plugins.tooltip.backgroundColor=d.dark,t.options.plugins.tooltip.borderColor=p.dark):(t.options.plugins.tooltip.titleColor=n.light,t.options.plugins.tooltip.bodyColor=r.light,t.options.plugins.tooltip.backgroundColor=d.light,t.options.plugins.tooltip.borderColor=p.light),t.update("none")}),{canvas:m,legend:l}}},S={class:"grow flex flex-col justify-center"},U=["data","width","height"],V={class:"px-5 pt-2 pb-6"},z={ref:"legend",class:"flex flex-wrap justify-center -m-1"};function I(b,m,l,t,o,n){return M(),L("div",S,[g("div",null,[g("canvas",{ref:"canvas",data:l.data,width:l.width,height:l.height},null,8,U)]),g("div",V,[g("ul",z,null,512)])])}const J=T(N,[["render",I]]);export{J as D};
//# sourceMappingURL=DoughnutChart-D8OpMQkS.js.map
