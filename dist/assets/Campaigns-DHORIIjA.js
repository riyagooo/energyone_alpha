import{H as D,S as H}from"./Header-C8ktAicA.js";import{_ as p,c as l,a as e,o as a,F as Q,z as Y,b as m,w as f,t as A,r as d,g as b,n as M,A as N,h as E}from"./index-CrXIC_Ca.js";import{F as T}from"./DropdownFilter-t8XsSDyZ.js";import{I as k,a as j,b as S,d as C,f as y,c as g,h as u,e as v,g as w}from"./user-28-09-y9d0tdIb.js";const U={name:"SearchForm",props:{placeholder:{default:"Search…"}}},J={class:"relative"},L=["placeholder"];function V(n,t,s,i,h,x){return a(),l("form",J,[t[0]||(t[0]=e("label",{for:"action-search",class:"sr-only"},"Search",-1)),e("input",{id:"action-search",class:"form-input pl-9 bg-white dark:bg-slate-800",type:"search",placeholder:s.placeholder},null,8,L),t[1]||(t[1]=e("button",{class:"absolute inset-0 right-auto group",type:"submit","aria-label":"Search"},[e("svg",{class:"w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"}),e("path",{d:"M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"})])],-1))])}const O=p(U,[["render",V]]),P={name:"CampaignsCard",props:["item"],setup(){return{typeColor:s=>{switch(s){case"One-Time":return"bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400";case"At Risk":return"bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400";case"Off-Track":return"bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400";default:return"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}},categoryIcon:s=>{switch(s){case"1":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-500">
              <svg class="w-9 h-9 fill-current text-rose-50" viewBox="0 0 36 36">
                <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
              </svg>
            </div>`;case"2":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-500">
              <svg class="w-9 h-9 fill-current text-emerald-50" viewBox="0 0 36 36">
                <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
              </svg>
            </div>`;case"3":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-sky-500">
              <svg class="w-9 h-9 fill-current text-sky-50" viewBox="0 0 36 36">
                <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
              </svg>
            </div>`;case"4":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-500">
              <svg class="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
            </div>`;default:return"<div></div>"}}}}},_={class:"col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"},G={class:"flex flex-col h-full p-5"},z={class:"flex items-center justify-between"},K=["innerHTML"],q={class:"flex shrink-0 -space-x-3 -ml-px"},F=["src","alt"],W={class:"grow mt-2"},Z={class:"text-xl leading-snug font-semibold"},X={class:"text-sm"},$={class:"mt-5"},ee={class:"text-sm font-medium text-slate-500 mb-2"},te={class:"flex justify-between items-center"};function se(n,t,s,i,h,x){const o=d("router-link");return a(),l("div",_,[e("div",G,[e("header",null,[e("div",z,[e("div",{innerHTML:i.categoryIcon(s.item.category)},null,8,K),e("div",q,[(a(!0),l(Q,null,Y(s.item.members,r=>(a(),N(o,{key:r.name,class:"block",to:r.link},{default:f(()=>[e("img",{class:"rounded-full border-2 border-white dark:border-slate-800 box-content",src:r.image,width:"28",height:"28",alt:r.name},null,8,F)]),_:2},1032,["to"]))),128))])])]),e("div",W,[m(o,{class:"inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white mb-1",to:s.item.link},{default:f(()=>[e("h2",Z,A(s.item.title),1)]),_:1},8,["to"]),e("div",X,A(s.item.content),1)]),e("footer",$,[e("div",ee,[b(A(s.item.dates.from)+" ",1),t[0]||(t[0]=e("span",{class:"text-slate-400 dark:text-slate-600"},"->",-1)),b(" "+A(s.item.dates.to),1)]),e("div",te,[e("div",null,[e("div",{class:M(["text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1",i.typeColor(s.item.type)])},A(s.item.type),3)]),e("div",null,[m(o,{class:"text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400",to:s.item.link},{default:f(()=>t[1]||(t[1]=[b("View ->")])),_:1},8,["to"])])])])])])}const ie=p(P,[["render",se]]),ae={name:"PaginationNumeric"},ne={class:"flex justify-center"};function re(n,t,s,i,h,x){return a(),l("div",ne,t[0]||(t[0]=[e("nav",{class:"flex",role:"navigation","aria-label":"Navigation"},[e("div",{class:"mr-2"},[e("span",{class:"inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600"},[e("span",{class:"sr-only"},"Previous"),e("wbr"),e("svg",{class:"h-4 w-4 fill-current",viewBox:"0 0 16 16"},[e("path",{d:"M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z"})])])]),e("ul",{class:"inline-flex text-sm font-medium -space-x-px shadow-sm"},[e("li",null,[e("span",{class:"inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-500"},"1")]),e("li",null,[e("a",{class:"inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white dark:bg-slate-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white",href:"#0"},"2")]),e("li",null,[e("a",{class:"inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white dark:bg-slate-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white",href:"#0"},"3")]),e("li",null,[e("span",{class:"inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500"},"…")]),e("li",null,[e("a",{class:"inline-flex items-center justify-center rounded-r leading-5 px-3.5 py-2 bg-white dark:bg-slate-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white",href:"#0"},"9")])]),e("div",{class:"ml-2"},[e("a",{href:"#0",class:"inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white dark:bg-slate-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white shadow-sm"},[e("span",{class:"sr-only"},"Next"),e("wbr"),e("svg",{class:"h-4 w-4 fill-current",viewBox:"0 0 16 16"},[e("path",{d:"M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"})])])])],-1)]))}const le=p(ae,[["render",re]]),B="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADgAOAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAFBgcCAwQIAP/aAAgBAQAAAABuX+FVpTJmMn8UyZNHonqi8/dqsKoyn5meXZ4Bv8anJ6hahDCQnY6kHmmZMfOc0N32P//EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/aAAoCAhADEAAAAKokU7jEgyWwTu89TpK9yiXSSwh7v//EAC8QAAICAgIABAQDCQAAAAAAAAECAwQABQYREiFBUQcTIjEUYYEVIzIzU3GRocH/2gAIAQEAAT8AC5y5PHX1sP8AV2EIzkfxN1OjtvUrRPsLKHpxG4VEPt3knxm2RfuLVVFT2Z2OcP5TV5ZqvxMKiKxGfDPAW7KHFTPDipnxbtyU9JR+S5SRrB6YenlgwEDNFq+RBWt6iWWszL13G5RmGPteUx3UhOy2hsOekVZ3Jc5xGtua/GKib6b52w6Jc+oHoCffAufFjktDZ2YNVScTGq5M0g+wb2GUqL3JQgPh7/Ls5xfiOvm2sKWy8/X1vH9h1kupniaOKhAkSMfpZSPDH+ZHXnnD5Yxy/a1LdBY54p3NZ2TzUevWeHOYzW6vDtrNRD/iVgPgKfce5/x3kcZk9yc4rrJzA5FQFn6CyE/Yeucdih1O1R5YpTKe1CqO+098eWY0pHginl8u1jjIV/0JzjWxbabx3toUlhJWFmA8ZH2Kt16jAveV91zOhEz2rEckPgZepgHPZHQObJGFws6xCQv2xjjCDs+vQzS3LQrV4YGIVnK/3Ocfu2P2qJ7FXwN8sBGYenfWbH4iCvuHrV/rmjf5fyETNbd2ce8u2ZkWtHLKbPyD5Mjd+mcx5putDdqJRkriKaHx9SQ9nNjrxJAU6GbbiViSZ5EK9P112PbNfUuaq2YZonHREi+X8DA/9GamxHdeCMAifwI3TehytwPTR7NL0dUtaMvzCS3rk2pp2EEc9WCT6SO2QHyz4r8YngjqbiAl6cKCCRAP5XscmdTYZCR5nIqyWIJkYDtDkGio3KkQtV0aRV/dy+uVeIw0tmLMdsq3fZDLkMaRxjwj9cP3/wBZZqwXKUtWzEssEylHRvswOf/EABsRAAMBAQADAAAAAAAAAAAAAAABAhARAyEx/9oACAECAQE/AKfodsXky6LoiuPG+or6KRN8xrf/xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIRA0EQIf/aAAgBAwEBPwCVrFzlD4tDRzn0mTpOwYSsYl+DopLT0VP7/9k=",oe="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADgAOAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQMGBwEAAv/aAAgBAQAAAACf4ohevvokmWKXUG1oRM51VhmV9ga1OcwRyKzGW+WBct1Yy7Rc84BZq6Hckocn/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAAEF/9oACgICEAMQAAAA8+mtcTAJmoagU1FDYzqjUwWoxCf/xAAvEAACAgEDAgQEBQUAAAAAAAABAgMEBQAGERIhEyIxQQcjQlEUFTJhcRYzUpLB/9oACAEBAAE/ALuw8PFYQCFRydZzau3sDhzdsII1HYcdy59gNSbueBPCxlGCqB6ySed9Yj4h3KE4/MK0V2D3I8jjWFyWJ3BjI7+ObqjJ6WUjhkb7HX4WLweyjUMaFSOBq3IkthGP0nXxTzkk+er48H5FSEOF+7trbey8ruH5kVcxQ+olk7DU/wAK83FGT49fpHsX1sXI3dsbw/KrSNFWuHwmBH1ezDQvkjoBGs5lZsZC8qMRrILO1iMRg8c63dS6PiVSEsPjLPHGxTWMymMoxpBPerwuO3QXAOstmcdSro0jtI0g8ixL1s2t5Ml2ahehhsQT17KFEdf1AkaxiyPKXYlkPcEHW6KItVCntqGFHCsQNbxxH4jMUcgpMckB8ISp2IVgf+6i2v47rM00C1T5vReW7fUfXnX9PV0o15XDvFKGWUAH0J8p1k8NRxWLkaKIkcqfN+2sRfgl+RFx8vy6z1toj0uCqH31TfqhQjW5qxs4GwE/uhOV/kdxrAbhpT4YSznl1ADgD3Oluu4Ey3LEyRykiNVPBH2Ot05p79KClGhjnsTCMD3GqVo7SzKRXbDPHMf1sPfXxM3LWkwiLTlHiuwHI1ibcf4FCT31vneKY/HzVqswNx0IUL9H7nWN3BbxcMRin6lbjqDeoIOq+7I58eJpL8kYVfPXTjhjrL5i3btPZM7jpfqiIPcN9xq1lr+Umjs3bDzSBeA2r0dm4R1TAgeitq/uq5OHipF6kDewbl9P1N1B+/PuT66jj8vT/j21tXZeR3DSNqKGmIQ5QSSE8/6DW4sO2EzdjGTWUnliAJdF6R3GqzEQJ/Gie51//8QAHBEBAAMAAgMAAAAAAAAAAAAAAQACAyExEBES/9oACAECAQE/AM217eo1zmlfhgTG3MACbdQWZVW3EaJHJSVyAhUr1KVLdywD4//EAB0RAAMAAwADAQAAAAAAAAAAAAABAgMREhAhMVH/2gAIAQMBAT8ArlCm2I6OehttlfrMOKXG2XuPZGVP6VlTZWSm/Q6dfTLbhbRDbnb8f//Z",Ae="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADgAOAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAGBQQHAwL/2gAIAQEAAAAAzlJcizS83EENLY3SjwmOsLtPMuoyBTG0XPdCLHkqQRgpRdHSR+esa8fq1418n//EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/9oACgICEAMQAAAAm5Ma5aIt0a3OCtcGmcQrYf/EAC4QAAIBBAEDAwIEBwAAAAAAAAECAwAEBRESBjFBEyEiI3FCUWGSFCUyQ4Ghsf/aAAgBAQABPwDqd8mxcYtZGnEgLiNte3GmuOpy7I8F0WXv9QVk8nk7VALyKZXb+kSPSZnIbGrgoNaAVR2rH9R5OxkDyIlxH+00Mpb3DPPHDcEOd+0e9Gp79BJz9C54iJl2Yj3JFXs5iytwR5jSr/LxY8XVxOSR8QFXux12FZe/GWvnnAKxgBUVvFCMltCumMObxgGYL9zWZwowyNMqhVOg3E/Emry/0hAeso/8zc/nAn/TXU0EtzYTGNSxjZXOh40QaAcIp8VisReT3PBYeJKcw7DYI1XS+YtFVor2BYngbiXU/E11tlEOH+nMJIZGATR3U/LfmstceneRSeGgUVeXJVJSDrlHQkAcchv3p+qIIsTBZWuzKRx5kABP81YdPNdYCa0f+9Jz5qfY68hqzqWyXDWkO/SgbsD8eWquJUZToCssjSXkdugLMqNH+1qzt89rLHZ8R6uvmd9hSnlIVOtmsBYF7jlPEvot4lRuDfpyHasplrfCwra2CiA6Pxjfkse6jkjlVoyztKfxfmauozb+0sMq78nWqy/U15kLmeSEfw8cjuwCnbAMd63SsXlBZiSfJNQWkt5cejCB6h7VhLC4weOVrnKotu4+ojpV/Ot31HNMvsjuYtN2K/hq1tPSu7YODtwdioniEkSSorI6qGVhsHZq+mjiVYYQPb3J1U0DQQxeoCpcF1+1WN7LbXaXCyFHTswo37ZCeJ5GeVFG3cnZ/QCvRL5KOScfRmPDQOtMTTRBMkI+GjAWTvv/AH571fq7RIYwefJdHf3r/8QAGhEBAQEBAQEBAAAAAAAAAAAAAQARAhAhMf/aAAgBAgEBPwAbZdsubpY+vgY3TBlvmE/vn//EABwRAAICAwEBAAAAAAAAAAAAAAABAhEDECExEv/aAAgBAwEBPwDIqaIwHjS6izJ7FkEjJzT7RAk7K19Mj5r/2Q==",de={name:"Campaigns",components:{Sidebar:H,Header:D,SearchForm:O,FilterButton:T,CampaignsCard:ie,PaginationNumeric:le},setup(){const n=E(!1),t=E([{id:0,category:"1",members:[{name:"User 01",image:k,link:"#0"},{name:"User 02",image:j,link:"#0"},{name:"User 03",image:S,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"One-Time"},{id:1,category:"2",members:[{name:"User 04",image:C,link:"#0"},{name:"User 05",image:y,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"Off-Track"},{id:3,category:"3",members:[{name:"User 07",image:g,link:"#0"},{name:"User 08",image:B,link:"#0"},{name:"User 09",image:u,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"At Risk"},{id:4,category:"1",members:[{name:"User 10",image:oe,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"At Risk"},{id:5,category:"4",members:[{name:"User 11",image:v,link:"#0"},{name:"User 05",image:y,link:"#0"},{name:"User 12",image:Ae,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"One-Time"},{id:6,category:"2",members:[{name:"User 07",image:g,link:"#0"},{name:"User 04",image:C,link:"#0"},{name:"User 11",image:v,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"At Risk"},{id:7,category:"4",members:[{name:"User 01",image:k,link:"#0"},{name:"User 02",image:j,link:"#0"},{name:"User 06",image:w,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"One-Time"},{id:8,category:"1",members:[{name:"User 09",image:u,link:"#0"},{name:"User 01",image:k,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"Off-Track"},{id:9,category:"3",members:[{name:"User 07",image:g,link:"#0"},{name:"User 08",image:B,link:"#0"},{name:"User 09",image:u,link:"#0"},{name:"User 06",image:w,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"One-Time"},{id:10,category:"4",members:[{name:"User 06",image:w,link:"#0"},{name:"User 11",image:v,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"Off-Track"},{id:11,category:"2",members:[{name:"User 05",image:y,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"Off-Track"},{id:12,category:"3",members:[{name:"User 07",image:g,link:"#0"},{name:"User 08",image:B,link:"#0"},{name:"User 09",image:u,link:"#0"}],title:"Monitor progress in Real Time Value",link:"#0",content:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.",dates:{from:"Jan 20",to:"Jan 27"},type:"At Risk"}]);return{sidebarOpen:n,items:t}}},me={class:"flex h-[100dvh] overflow-hidden"},ce={class:"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"},ge={class:"grow"},ue={class:"px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"},pe={class:"grid grid-cols-12 gap-6"},he={class:"mt-8"};function xe(n,t,s,i,h,x){const o=d("Sidebar"),r=d("Header"),I=d("CampaignsCard"),R=d("PaginationNumeric");return a(),l("div",me,[m(o,{sidebarOpen:i.sidebarOpen,onCloseSidebar:t[0]||(t[0]=c=>i.sidebarOpen=!1)},null,8,["sidebarOpen"]),e("div",ce,[m(r,{sidebarOpen:i.sidebarOpen,onToggleSidebar:t[1]||(t[1]=c=>i.sidebarOpen=!i.sidebarOpen)},null,8,["sidebarOpen"]),e("main",ge,[e("div",ue,[t[2]||(t[2]=e("div",{class:"sm:flex sm:justify-between sm:items-center mb-8"},[e("div",{class:"mb-4 sm:mb-0"},[e("h1",{class:"text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"},"Campaigns ✨")])],-1)),e("div",pe,[(a(!0),l(Q,null,Y(i.items,c=>(a(),N(I,{key:c.id,item:c},null,8,["item"]))),128))]),e("div",he,[m(R)])])])])])}const ve=p(de,[["render",xe]]);export{ve as default};
//# sourceMappingURL=Campaigns-DHORIIjA.js.map
