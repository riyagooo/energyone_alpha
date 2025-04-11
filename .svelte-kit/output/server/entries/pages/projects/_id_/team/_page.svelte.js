import { M as ensure_array_like, G as escape_html, B as attr, J as stringify, z as store_get, A as attr_class, E as unsubscribe_stores, K as bind_props, y as pop, w as push } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  const expertiseColors = {
    "Solar": "bg-amber-500",
    "Wind": "bg-blue-500",
    "Hydro": "bg-cyan-500",
    "Geothermal": "bg-red-500",
    "Storage": "bg-purple-500",
    "Hydrogen": "bg-sky-500",
    "Finance": "bg-emerald-500",
    "Technical": "bg-indigo-500",
    "EPC": "bg-orange-500",
    "O&M": "bg-lime-500",
    "Environment": "bg-teal-500",
    "Policy": "bg-violet-500"
  };
  data.team ? [
    {
      id: 1,
      name: data.team.lead.name,
      role: data.team.lead.role,
      company: data.team.lead.company,
      experience: data.team.lead.experience,
      specialty: data.team.lead.specialty,
      image: data.team.lead.image,
      location: "🇺🇸",
      expertise: "Solar"
    },
    ...data.team.members
  ] : [];
  const each_array = ensure_array_like(data.team?.members || []);
  $$payload.out += `<div class="flex flex-col min-h-screen bg-slate-900 text-white"><main class="flex-grow"><div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto"><div class="sm:flex sm:justify-between sm:items-center mb-8"><div class="mb-4 sm:mb-0"><h1 class="text-2xl md:text-3xl text-white font-bold">${escape_html(data.project?.name || "Project")} Team ✨</h1> <p class="text-slate-400 mt-1">Connect with the experts behind this renewable energy project</p></div> <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"><form class="relative"><label for="team-search" class="sr-only">Search</label> <input id="team-search" class="form-input w-full pl-9 bg-slate-800 border-slate-700 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-md" type="search" placeholder="Search team members..."> <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search"><svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-300 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path><path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path></svg></button></form> <a${attr("href", `/projects/${stringify(store_get($$store_subs ??= {}, "$page", page).params.id)}`)} class="btn bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white px-3 py-2 rounded-md flex items-center"><svg class="w-4 h-4 fill-current opacity-50 shrink-0 rotate-180 mr-1" viewBox="0 0 16 16"><path d="M9.3 1.3L4.6 6H15c.6 0 1 .4 1 1s-.4 1-1 1H4.6l4.7 4.7c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.3z"></path></svg> <span class="hidden xs:block ml-1">Back to Project</span></a></div></div> `;
  if (data.team?.lead) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="bg-slate-800 rounded-lg p-6 mb-6"><h2 class="text-xl font-semibold text-slate-300 mb-6">Project Lead</h2> <div class="flex flex-col sm:flex-row items-center sm:items-start mb-6"><div class="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"><img${attr("src", data.team.lead.image)}${attr("alt", data.team.lead.name)} class="w-full h-full object-cover"></div> <div><h3 class="text-lg font-semibold text-slate-300">${escape_html(data.team.lead.name)}</h3> <p class="text-blue-400 font-medium">${escape_html(data.team.lead.role)}</p> <p class="text-slate-400 text-sm">${escape_html(data.team.lead.company)}</p> <p class="text-slate-400 mt-2">${escape_html(data.team.lead.experience)}</p> <p class="text-slate-400">Specializes in ${escape_html(data.team.lead.specialty)}</p> <p class="mt-3 text-slate-400">Leading the ${escape_html(data.project.name)} development from initial concept through operation,
                coordinating with all stakeholders to ensure project success.</p> <div class="mt-4 flex space-x-3"><a href="/messages" class="btn bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 text-white px-3 py-2 rounded-md text-sm inline-flex items-center"><svg class="w-4 h-4 fill-current mr-2" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg> Message</a> <a href="/contact" class="btn bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm inline-flex items-center">Schedule Call</a></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h2 class="text-xl font-semibold text-slate-300 mb-4">Core Project Team</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$payload.out += `<div class="bg-slate-800 shadow-lg rounded-md border border-slate-700 h-full"><div class="flex flex-col h-full"><div class="grow p-5"><div class="flex justify-between items-start"><header><div class="flex mb-2"><div class="relative inline-flex items-start mr-5"><div class="absolute top-0 right-0 -mr-2 bg-slate-700 rounded-full shadow"><div${attr_class(`w-8 h-8 flex items-center justify-center ${stringify(expertiseColors[member.expertise] || "bg-blue-500")} rounded-full`)}><span class="text-xs font-semibold text-white">${escape_html(member.expertise.slice(0, 2))}</span></div></div> <img class="rounded-full"${attr("src", member.image)} width="64" height="64"${attr("alt", member.name)}></div> <div class="mt-1 pr-1"><div class="inline-flex text-white"><h2 class="text-xl leading-snug justify-center font-semibold">${escape_html(member.name)}</h2></div> <div class="flex flex-col"><span class="text-blue-400 text-sm">${escape_html(member.role)}</span> <span class="text-slate-400 text-xs">${escape_html(member.company)}</span> <span class="text-slate-500 text-xs mt-1">${escape_html(member.location)}</span></div></div></div></header></div> <div class="mt-2"><div class="text-sm text-slate-300">${escape_html(member.experience)}</div> <div class="text-sm text-slate-400 mt-1">Specializes in ${escape_html(member.specialty)}</div></div></div> <div class="border-t border-slate-700"><div class="flex divide-x divide-slate-700"><a class="block flex-1 text-center text-sm text-blue-400 hover:text-blue-300 font-medium px-3 py-4" href="/messages"><div class="flex items-center justify-center"><svg class="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16"><path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg> <span>Message</span></div></a> <a class="block flex-1 text-center text-sm text-slate-400 hover:text-white font-medium px-3 py-4 group" href="/contact"><div class="flex items-center justify-center"><svg class="w-4 h-4 fill-current text-slate-500 group-hover:text-slate-300 shrink-0 mr-2" viewBox="0 0 16 16"><path d="M11 0c2.8 0 5 2.2 5 5 0 2.2-1.5 4.1-3.5 4.7.1.2.3.5.4.8.1.4.2 1 .1 1.5-.1 1-.5 1.9-1.3 2.7-1.9 1.9-4.6 2.3-6.9 1.1l3.9-3.9c2.5-2.6 2.5-6.5 0-9C7.2 1.4 5.2.5 3.3.9L7.2 4c.2.1.4.3.5.5L11 0zM5.5 11.5c-.5.5-1.4.5-1.9 0s-.5-1.4 0-1.9l4.7-4.7c.5-.5 1.4-.5 1.9 0s.5 1.4 0 1.9l-4.7 4.7z"></path></svg> <span>Schedule Call</span></div></a></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="mt-8 bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Project Organizations</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><div><p class="text-sm text-slate-400">Developer</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.developer || "N/A")}</p></div> <div><p class="text-sm text-slate-400">EPC Contractor</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.epc || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Equipment Supplier</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.oem || "N/A")}</p></div> <div><p class="text-sm text-slate-400">O&amp;M Provider</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.om || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Legal Advisor</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.legal || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Technical Advisor</p> <p class="text-base font-medium text-slate-300">${escape_html(data.project?.team?.technical || "N/A")}</p></div></div></div></div></main></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
