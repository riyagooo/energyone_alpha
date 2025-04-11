import { w as push, M as ensure_array_like, B as attr, A as attr_class, G as escape_html, K as bind_props, y as pop, J as stringify, P as copy_payload, Q as assign_payload } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { f as formatCurrency, C as Cart } from "../../../chunks/Cart.js";
import { f as fallback } from "../../../chunks/equality.js";
function Pagination($$payload, $$props) {
  push();
  let currentPage = fallback($$props["currentPage"], 1);
  let totalPages = fallback($$props["totalPages"], 1);
  let onPageChange = $$props["onPageChange"];
  const each_array = ensure_array_like(Array(totalPages));
  $$payload.out += `<div class="flex items-center justify-center space-x-2 mt-8"><button class="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50"${attr("disabled", currentPage === 1, true)}>Previous</button> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<button${attr_class(`px-3 py-1 rounded-md border ${stringify(currentPage === i + 1 ? "border-indigo-500 bg-indigo-500 text-white" : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400")}`)}>${escape_html(i + 1)}</button>`;
  }
  $$payload.out += `<!--]--> <button class="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50"${attr("disabled", currentPage === totalPages, true)}>Next</button></div>`;
  bind_props($$props, { currentPage, totalPages, onPageChange });
  pop();
}
function ShopSidebar($$payload, $$props) {
  push();
  let filters = $$props["filters"];
  const projectTypes = [
    "Solar",
    "Wind",
    "Hydro",
    "Geothermal",
    "Biomass",
    "Tidal",
    "Wave",
    "Storage",
    "Hydrogen"
  ];
  const regions = [
    "North America",
    "Europe",
    "Asia",
    "Africa",
    "South America"
  ];
  const riskLevels = ["Low", "Medium", "High"];
  const statuses = [
    "Operational",
    "Under Construction",
    "Development"
  ];
  const investmentTypes = [
    "Equity",
    "Debt",
    "Tax Equity",
    "Passive Investment",
    "Mixed"
  ];
  const maxInvestmentAmount = 3e9;
  const maxMinimumInvestment = 2e7;
  if (!filters.investmentTypes) {
    filters.investmentTypes = [];
  }
  if (!filters.minimumInvestmentRange) {
    filters.minimumInvestmentRange = {
      min: 0,
      max: 5e6
      // Default to $5M max minimum investment
    };
  }
  const each_array = ensure_array_like(projectTypes);
  const each_array_1 = ensure_array_like(investmentTypes);
  const each_array_2 = ensure_array_like(regions);
  const each_array_3 = ensure_array_like(riskLevels);
  const each_array_4 = ensure_array_like(statuses);
  $$payload.out += `<button class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg shadow-sm" aria-label="Toggle filters menu"><svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <aside${attr_class(`bg-slate-800 rounded-lg shadow-sm p-6 ${"relative w-full"}`)} aria-label="Project filters"><div class="flex items-center justify-between mb-6"><h2 class="text-lg font-semibold text-slate-300">Filters</h2> <button type="button" class="lg:hidden p-2 text-slate-400 hover:text-slate-300 rounded-lg hover:bg-slate-700" aria-label="Close sidebar"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-4"><div><label for="priceRange" class="block text-sm font-medium text-slate-300">Project Size</label> <div class="mt-1"><input type="range" id="priceRange"${attr("value", filters.priceRange.max)} min="1000000"${attr("max", maxInvestmentAmount)} step="10000000" class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"> <div class="flex justify-between text-sm text-slate-400"><span>${escape_html(formatCurrency(1e6))}</span> <span>${escape_html(formatCurrency(filters.priceRange.max))}</span></div></div></div> <div><label for="minimumInvestmentRange" class="block text-sm font-medium text-slate-300">Minimum Investment</label> <div class="mt-1"><input type="range" id="minimumInvestmentRange"${attr("value", filters.minimumInvestmentRange.max)} min="1000"${attr("max", maxMinimumInvestment)} step="500000" class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"> <div class="flex justify-between text-sm text-slate-400"><span>${escape_html(formatCurrency(1e3))}</span> <span>${escape_html(formatCurrency(filters.minimumInvestmentRange.max))}</span></div></div></div> <div><label class="block text-sm font-medium text-slate-300">Project Types</label> <div class="mt-2 space-y-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let type = each_array[$$index];
    $$payload.out += `<label class="flex items-center"><input type="checkbox"${attr("checked", filters.projectTypes.includes(type), true)}${attr("value", type)} class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"> <span class="ml-2 text-sm text-slate-400">${escape_html(type)}</span></label>`;
  }
  $$payload.out += `<!--]--></div></div> <div><label class="block text-sm font-medium text-slate-300">Investment Types</label> <div class="mt-2 space-y-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let type = each_array_1[$$index_1];
    $$payload.out += `<label class="flex items-center"><input type="checkbox"${attr("checked", filters.investmentTypes.includes(type), true)}${attr("value", type)} class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"> <span class="ml-2 text-sm text-slate-400">${escape_html(type)}</span></label>`;
  }
  $$payload.out += `<!--]--></div></div> <div><label class="block text-sm font-medium text-slate-300">Regions</label> <div class="mt-2 space-y-2"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let region = each_array_2[$$index_2];
    $$payload.out += `<label class="flex items-center"><input type="checkbox"${attr("checked", filters.regions.includes(region), true)}${attr("value", region)} class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"> <span class="ml-2 text-sm text-slate-400">${escape_html(region)}</span></label>`;
  }
  $$payload.out += `<!--]--></div></div> <div><label class="block text-sm font-medium text-slate-300">Risk Levels</label> <div class="mt-2 space-y-2"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let level = each_array_3[$$index_3];
    $$payload.out += `<label class="flex items-center"><input type="checkbox"${attr("checked", filters.riskLevels.includes(level), true)}${attr("value", level)} class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"> <span class="ml-2 text-sm text-slate-400">${escape_html(level)}</span></label>`;
  }
  $$payload.out += `<!--]--></div></div> <div><label class="block text-sm font-medium text-slate-300">Status</label> <div class="mt-2 space-y-2"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let status = each_array_4[$$index_4];
    $$payload.out += `<label class="flex items-center"><input type="checkbox"${attr("checked", filters.statuses.includes(status), true)}${attr("value", status)} class="h-4 w-4 text-blue-400 focus:ring-blue-500 border-slate-700 rounded"> <span class="ml-2 text-sm text-slate-400">${escape_html(status)}</span></label>`;
  }
  $$payload.out += `<!--]--></div></div></div> <button type="button" class="w-full py-2 px-4 text-white rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Apply Filters</button></aside>`;
  bind_props($$props, { filters });
  pop();
}
function _page($$payload, $$props) {
  push();
  let filteredProjects, totalPages, paginatedProjects;
  let data = $$props["data"];
  let currentPage = 1;
  const itemsPerPage = 6;
  let filters = {
    priceRange: { min: 1e6, max: 3e9 },
    minimumInvestmentRange: { min: 1e3, max: 5e6 },
    projectTypes: [],
    regions: [],
    riskLevels: [],
    statuses: [],
    investmentTypes: []
  };
  let cart = [];
  let isCartOpen = false;
  function handlePageChange(page) {
    currentPage = page;
  }
  filteredProjects = data.projects.filter((project) => {
    const matchesPrice = project.investment >= filters.priceRange.min && project.investment <= filters.priceRange.max;
    const matchesMinimumInvestment = project.minimumInvestment >= filters.minimumInvestmentRange.min && project.minimumInvestment <= filters.minimumInvestmentRange.max;
    const matchesType = filters.projectTypes.length === 0 || filters.projectTypes.includes(project.type);
    const matchesRegion = filters.regions.length === 0;
    const matchesRisk = filters.riskLevels.length === 0 || filters.riskLevels.includes(project.riskLevel);
    const matchesStatus = filters.statuses.length === 0 || filters.statuses.includes(project.status);
    const matchesInvestmentType = !filters.investmentTypes?.length || filters.investmentTypes.includes(project.investmentType);
    return matchesPrice && matchesMinimumInvestment && matchesType && matchesRegion && matchesRisk && matchesStatus && matchesInvestmentType;
  });
  totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="min-h-screen bg-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-8"><h1 class="text-3xl font-bold text-slate-300">Available Projects</h1> <p class="mt-2 text-slate-400">Browse and filter renewable energy projects</p></div> <div class="flex flex-col md:flex-row gap-8"><div class="w-full md:w-64">`;
    ShopSidebar($$payload2, {
      get filters() {
        return filters;
      },
      set filters($$value) {
        filters = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="flex-1"><div class="mb-6 flex flex-wrap items-center gap-4 bg-slate-800 p-4 rounded-lg"><div class="flex-1"><div class="relative"><input type="text" placeholder="Search projects..." class="w-full pl-10 pr-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> <svg class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div> <div class="flex items-center gap-4"><select class="px-4 py-2 border border-slate-700 rounded-lg bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><option>Sort by: Newest</option><option>Sort by: Highest IRR</option><option>Sort by: Lowest Risk</option></select></div></div> <div class="mb-8">`;
    if (filteredProjects.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(paginatedProjects);
      $$payload2.out += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let project = each_array[$$index];
        $$payload2.out += `<div class="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"><div class="relative h-48"><img${attr("src", project.image)}${attr("alt", project.name)} class="w-full h-full object-cover"> <div class="absolute top-2 right-2"><span${attr_class(`px-2 py-1 rounded-full text-xs font-semibold ${project.status === "Operational" ? "bg-green-900 text-green-100" : project.status === "Under Construction" ? "bg-blue-900 text-blue-100" : "bg-yellow-900 text-yellow-100"}`)}>${escape_html(project.status)}</span></div></div> <div class="p-4"><h3 class="text-lg font-semibold text-slate-300 mb-1">${escape_html(project.name)}</h3> <p class="text-sm text-slate-400 mb-2">${escape_html(project.location)}</p> <div class="flex items-center justify-between mb-3"><span class="text-sm font-medium text-slate-300">${escape_html(project.type)}</span> <span class="text-sm font-medium text-slate-300">${escape_html(project.capacity)}</span></div> <div class="mb-3"><div class="flex items-center justify-between mb-1"><span class="text-sm text-slate-400">Risk Score</span> <div class="group relative"><span${attr_class(`px-3 py-1 rounded-full text-sm font-semibold ${project.riskScore && project.riskScore <= 2.5 ? "bg-green-900 text-green-100" : project.riskScore && project.riskScore <= 3.5 ? "bg-yellow-900 text-yellow-100" : "bg-red-900 text-red-100"} cursor-help`)}>${escape_html(project.riskScore?.toFixed(1) ?? "N/A")}</span></div></div> <div class="flex items-center justify-between"><span class="text-sm text-slate-400">IRR</span> <span class="text-sm font-medium text-green-400">${escape_html(project.irr ?? "N/A")}%</span></div></div> <div class="space-y-3"><div class="flex items-center justify-between"><span class="text-sm text-slate-400">Project Size</span> <span class="text-sm font-medium text-slate-300">`;
        if (project.investment >= 1e9) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `$${escape_html((project.investment / 1e9).toFixed(1))}B`;
        } else if (project.investment >= 1e6) {
          $$payload2.out += "<!--[1-->";
          $$payload2.out += `$${escape_html((project.investment / 1e6).toFixed(1))}M`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `$${escape_html((project.investment / 1e3).toFixed(1))}K`;
        }
        $$payload2.out += `<!--]--></span></div> <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Min. Investment</span> <span class="text-sm font-medium text-slate-300">`;
        if (project.minimumInvestment >= 1e6) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `$${escape_html((project.minimumInvestment / 1e6).toFixed(1))}M`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `$${escape_html((project.minimumInvestment / 1e3).toFixed(1))}K`;
        }
        $$payload2.out += `<!--]--></span></div> <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Investment Type</span> <span class="text-sm font-medium text-slate-300">${escape_html(project.investmentType.charAt(0).toUpperCase() + project.investmentType.slice(1))}</span></div></div> <div class="mt-4 flex items-center justify-end"><a${attr("href", `/projects/${stringify(project.id)}`)} class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">View Details</a></div></div></div>`;
      }
      $$payload2.out += `<!--]--></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="text-center py-8"><p class="text-slate-400">No projects match your current filters. Please adjust your criteria.</p></div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="flex justify-center">`;
    Pagination($$payload2, {
      currentPage,
      totalPages,
      onPageChange: handlePageChange
    });
    $$payload2.out += `<!----></div> <div class="mt-8 p-4 bg-slate-800 rounded-lg text-slate-400 text-sm"><p>Showing ${escape_html(paginatedProjects.length)} of ${escape_html(filteredProjects.length)} projects (Page ${escape_html(currentPage)} of ${escape_html(totalPages || 1)})</p></div></div></div></div> `;
    Cart($$payload2, {
      get cart() {
        return cart;
      },
      set cart($$value) {
        cart = $$value;
        $$settled = false;
      },
      get isOpen() {
        return isCartOpen;
      },
      set isOpen($$value) {
        isCartOpen = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
