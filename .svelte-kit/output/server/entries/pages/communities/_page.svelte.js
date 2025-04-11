import { B as attr, A as attr_class, G as escape_html, J as stringify, K as bind_props, y as pop, w as push, M as ensure_array_like } from "../../../chunks/index.js";
import { f as fallback } from "../../../chunks/equality.js";
function SearchForm($$payload) {
  let searchQuery = "";
  $$payload.out += `<form class="relative"><label for="community-search" class="sr-only">Search</label> <input id="community-search" class="form-input w-full pl-9 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-md" type="search" placeholder="Search community members..."${attr("value", searchQuery)}> <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search"><svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-300 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path><path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path></svg></button></form>`;
}
function CommunityMemberCard($$payload, $$props) {
  push();
  let badgeColor;
  let member = $$props["member"];
  const expertiseColors = {
    "Solar": "bg-amber-500",
    "Wind": "bg-blue-500",
    "Hydro": "bg-cyan-500",
    "Geothermal": "bg-red-500",
    "Storage": "bg-purple-500",
    "Hydrogen": "bg-sky-500",
    "ESG": "bg-green-500",
    "Finance": "bg-emerald-500",
    "Policy": "bg-indigo-500",
    "Microgrids": "bg-orange-500",
    "Community": "bg-lime-500",
    "Agriculture": "bg-teal-500"
  };
  badgeColor = expertiseColors[member.expertise] || "bg-blue-500";
  $$payload.out += `<div class="bg-slate-800 shadow-lg rounded-md border border-slate-700 h-full"><div class="flex flex-col h-full"><div class="grow p-5"><div class="flex justify-between items-start"><header><div class="flex mb-2"><a class="relative inline-flex items-start mr-5"${attr("href", member.link)}><div class="absolute top-0 right-0 -mr-2 bg-slate-700 rounded-full shadow"><div${attr_class(`w-8 h-8 flex items-center justify-center ${stringify(badgeColor)} rounded-full`)}><span class="text-xs font-semibold text-white">${escape_html(member.expertise.slice(0, 2))}</span></div></div> <img class="rounded-full"${attr("src", member.image)} width="64" height="64"${attr("alt", member.name)}></a> <div class="mt-1 pr-1"><a class="inline-flex text-white hover:text-blue-400"${attr("href", member.link)}><h2 class="text-xl leading-snug justify-center font-semibold">${escape_html(member.name)}</h2></a> <div class="flex items-center"><span class="text-sm font-medium text-slate-400 -mt-0.5 mr-1">-></span> <span>${escape_html(member.location)}</span></div></div></div></header> <div class="relative inline-flex shrink-0"><button class="text-slate-400 hover:text-white"><svg class="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M8 9c.8 0 1.5-.7 1.5-1.5S8.8 6 8 6s-1.5.7-1.5 1.5S7.2 9 8 9zm0 4c.8 0 1.5-.7 1.5-1.5S8.8 10 8 10s-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm0-8c.8 0 1.5-.7 1.5-1.5S8.8 3 8 3 6.5 3.7 6.5 4.5 7.2 5 8 5z"></path></svg></button></div></div> <div class="mt-2"><div class="text-sm text-slate-300">${escape_html(member.content)}</div></div></div> <div class="border-t border-slate-700"><div class="flex divide-x divide-slate-700"><a class="block flex-1 text-center text-sm text-blue-400 hover:text-blue-300 font-medium px-3 py-4" href="/messages"><div class="flex items-center justify-center"><svg class="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg> <span>Message</span></div></a> <a class="block flex-1 text-center text-sm text-slate-400 hover:text-white font-medium px-3 py-4 group"${attr("href", `/communities/profile/${stringify(member.id)}`)}><div class="flex items-center justify-center"><svg class="w-4 h-4 fill-current text-slate-500 group-hover:text-slate-300 shrink-0 mr-2" viewBox="0 0 16 16"><path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6z"></path></svg> <span>View Profile</span></div></a></div></div></div></div>`;
  bind_props($$props, { member });
  pop();
}
function PaginationNumeric($$payload, $$props) {
  let currentPage = fallback($$props["currentPage"], 1);
  let totalPages = fallback($$props["totalPages"], 5);
  const each_array = ensure_array_like(Array(totalPages));
  $$payload.out += `<div class="flex justify-center"><nav class="flex" role="navigation" aria-label="Pagination Navigation"><div class="mr-2">`;
  if (currentPage > 1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `?page=${stringify(currentPage - 1)}`)} class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-slate-800 border border-slate-700 text-slate-300 hover:bg-blue-500 hover:text-white"><span class="sr-only">Previous</span> <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16"><path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z"></path></svg></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-slate-800 border border-slate-700 text-slate-600 cursor-not-allowed"><span class="sr-only">Previous</span> <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16"><path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z"></path></svg></span>`;
  }
  $$payload.out += `<!--]--></div> <ul class="inline-flex text-sm font-medium -space-x-px shadow-sm"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<li>`;
    if (i + 1 === currentPage) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-blue-600 border border-blue-700 text-white">${escape_html(i + 1)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<a${attr("href", `?page=${stringify(i + 1)}`)} class="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-slate-800 hover:bg-blue-500 border border-slate-700 text-slate-300 hover:text-white"${attr("aria-current", i + 1 === currentPage ? "page" : void 0)}>${escape_html(i + 1)}</a>`;
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="ml-2">`;
  if (currentPage < totalPages) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `?page=${stringify(currentPage + 1)}`)} class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-slate-800 border border-slate-700 text-slate-300 hover:bg-blue-500 hover:text-white"><span class="sr-only">Next</span> <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16"><path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path></svg></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-slate-800 border border-slate-700 text-slate-600 cursor-not-allowed"><span class="sr-only">Next</span> <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16"><path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path></svg></span>`;
  }
  $$payload.out += `<!--]--></div></nav></div>`;
  bind_props($$props, { currentPage, totalPages });
}
function _page($$payload) {
  let members = [
    {
      id: 1,
      name: "Sophia Reynolds",
      image: "https://ui-avatars.com/api/?name=Sophia+Reynolds&background=1e293b&color=94a3b8",
      link: "/communities/profile/1",
      location: "🇺🇸",
      content: "Solar Investment Specialist | 10+ years experience in PV project financing | Clean energy advocate",
      expertise: "Solar"
    },
    {
      id: 2,
      name: "Marcus Chen",
      image: "https://ui-avatars.com/api/?name=Marcus+Chen&background=1e293b&color=94a3b8",
      link: "/communities/profile/2",
      location: "🇨🇦",
      content: "Wind Energy Developer | LEED Certified | Specializing in offshore wind projects across North America",
      expertise: "Wind"
    },
    {
      id: 3,
      name: "Aisha Patel",
      image: "https://ui-avatars.com/api/?name=Aisha+Patel&background=1e293b&color=94a3b8",
      link: "/communities/profile/3",
      location: "🇮🇳",
      content: "ESG Investment Analyst | Renewable energy market specialist | Focusing on emerging markets",
      expertise: "ESG"
    },
    {
      id: 4,
      name: "Miguel Rodriguez",
      image: "https://ui-avatars.com/api/?name=Miguel+Rodriguez&background=1e293b&color=94a3b8",
      link: "/communities/profile/4",
      location: "🇪🇸",
      content: "Energy Storage Expert | Battery technology consultant | Grid-scale solutions architect",
      expertise: "Storage"
    },
    {
      id: 5,
      name: "Emma Thompson",
      image: "https://ui-avatars.com/api/?name=Emma+Thompson&background=1e293b&color=94a3b8",
      link: "/communities/profile/5",
      location: "🇬🇧",
      content: "Community Solar Developer | Focus on shared renewable programs | Local energy independence advocate",
      expertise: "Community"
    },
    {
      id: 6,
      name: "Jamal Williams",
      image: "https://ui-avatars.com/api/?name=Jamal+Williams&background=1e293b&color=94a3b8",
      link: "/communities/profile/6",
      location: "🇺🇸",
      content: "Green Finance Specialist | Climate-focused investment strategies | Carbon credit markets expert",
      expertise: "Finance"
    },
    {
      id: 7,
      name: "Lena Schmidt",
      image: "https://ui-avatars.com/api/?name=Lena+Schmidt&background=1e293b&color=94a3b8",
      link: "/communities/profile/7",
      location: "🇩🇪",
      content: "Renewable Energy Policy Advisor | Former regulatory commissioner | Grid integration specialist",
      expertise: "Policy"
    },
    {
      id: 8,
      name: "Takashi Yamamoto",
      image: "https://ui-avatars.com/api/?name=Takashi+Yamamoto&background=1e293b&color=94a3b8",
      link: "/communities/profile/8",
      location: "🇯🇵",
      content: "Hydrogen & Fuel Cell Engineer | Clean transportation solutions | Advanced energy systems architect",
      expertise: "Hydrogen"
    },
    {
      id: 9,
      name: "Sarah Johnson",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=1e293b&color=94a3b8",
      link: "/communities/profile/9",
      location: "🇦🇺",
      content: "Sustainable Agriculture Investor | Agrivoltaics specialist | Land use optimization expert",
      expertise: "Agriculture"
    },
    {
      id: 10,
      name: "Daniel Okafor",
      image: "https://ui-avatars.com/api/?name=Daniel+Okafor&background=1e293b&color=94a3b8",
      link: "/communities/profile/10",
      location: "🇳🇬",
      content: "Microgrid Developer | Rural electrification expert | Focused on emerging market energy access",
      expertise: "Microgrids"
    },
    {
      id: 11,
      name: "Elena Petrov",
      image: "https://ui-avatars.com/api/?name=Elena+Petrov&background=1e293b&color=94a3b8",
      link: "/communities/profile/11",
      location: "🇷🇺",
      content: "Geothermal Energy Specialist | Thermal system design | Deep earth resource development",
      expertise: "Geothermal"
    },
    {
      id: 12,
      name: "Carlos Mendoza",
      image: "https://ui-avatars.com/api/?name=Carlos+Mendoza&background=1e293b&color=94a3b8",
      link: "/communities/profile/12",
      location: "🇲🇽",
      content: "Hydroelectric Project Manager | Water resource management | Environmental impact assessment",
      expertise: "Hydro"
    }
  ];
  const each_array = ensure_array_like(members);
  $$payload.out += `<div class="bg-slate-900 text-white"><main class="grow"><div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto"><div class="sm:flex sm:justify-between sm:items-center mb-8"><div class="mb-4 sm:mb-0"><h1 class="text-2xl md:text-3xl text-white font-bold">Renewable Energy Community ✨</h1> <p class="text-slate-400 mt-1">Connect with experts and investors in the clean energy ecosystem</p></div> <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">`;
  SearchForm($$payload);
  $$payload.out += `<!----> <button class="btn bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white px-3 py-2 rounded-md"><svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16"><path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path></svg> <span class="hidden xs:block ml-2">Add Member</span></button></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    CommunityMemberCard($$payload, { member });
  }
  $$payload.out += `<!--]--></div> <div class="mt-8">`;
  PaginationNumeric($$payload, {});
  $$payload.out += `<!----></div></div></main></div>`;
}
export {
  _page as default
};
