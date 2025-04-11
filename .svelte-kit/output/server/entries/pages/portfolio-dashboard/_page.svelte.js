import { P as copy_payload, Q as assign_payload, y as pop, w as push, M as ensure_array_like, G as escape_html, A as attr_class, I as attr_style, J as stringify } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { C as Cart } from "../../../chunks/Cart.js";
function _page($$payload, $$props) {
  push();
  let portfolioSummary = {
    totalInvested: 25e4,
    currentValue: 287500,
    absoluteReturn: 37500,
    percentageReturn: 15,
    projectedAnnualYield: 8.2,
    weightedRiskScore: 2.3,
    portfolioAge: "1 year, 3 months"
  };
  let portfolioDistribution = {
    byType: [
      { type: "Solar", percentage: 45, value: 129375 },
      { type: "Wind", percentage: 35, value: 100625 },
      { type: "Hydro", percentage: 15, value: 43125 },
      { type: "Storage", percentage: 5, value: 14375 }
    ],
    byRiskLevel: [
      { level: "Low", percentage: 60, value: 172500 },
      {
        level: "Medium",
        percentage: 30,
        value: 86250
      },
      { level: "High", percentage: 10, value: 28750 }
    ],
    byRegion: [
      {
        region: "North America",
        percentage: 50,
        value: 143750
      },
      {
        region: "Europe",
        percentage: 30,
        value: 86250
      },
      { region: "Asia", percentage: 15, value: 43125 },
      {
        region: "South America",
        percentage: 5,
        value: 14375
      }
    ]
  };
  let performanceHistory = [
    { month: "Jan", value: 25e4 },
    { month: "Feb", value: 252500 },
    { month: "Mar", value: 255e3 },
    { month: "Apr", value: 257500 },
    { month: "May", value: 262500 },
    { month: "Jun", value: 267500 },
    { month: "Jul", value: 27e4 },
    { month: "Aug", value: 275e3 },
    { month: "Sep", value: 277500 },
    { month: "Oct", value: 28e4 },
    { month: "Nov", value: 285e3 },
    { month: "Dec", value: 287500 }
  ];
  let benchmarkComparison = [
    { name: "Your Portfolio", value: 15 },
    { name: "S&P 500", value: 10.5 },
    { name: "Renewable Energy Index", value: 12.8 },
    { name: "Bond Market", value: 2.3 }
  ];
  let riskAnalysis = {
    categories: [
      {
        category: "Market Risk",
        score: 2.1,
        analysis: "Low exposure to market volatility due to long-term PPAs"
      },
      {
        category: "Regulatory Risk",
        score: 3.4,
        analysis: "Moderate exposure to policy changes in renewable energy incentives"
      },
      {
        category: "Technical Risk",
        score: 1.9,
        analysis: "Low risk with established technologies and strong maintenance contracts"
      },
      {
        category: "Environmental Risk",
        score: 1.5,
        analysis: "Very low environmental risk factors across the portfolio"
      },
      {
        category: "Financial Risk",
        score: 2.8,
        analysis: "Moderate financial risk due to capital-intensive projects"
      }
    ],
    totalScore: 2.3,
    riskRating: "Low-Medium"
  };
  let portfolioProjects = [
    {
      id: "solar-farm-alpha",
      name: "Solar Farm Alpha",
      type: "Solar",
      location: "Arizona, USA",
      investmentAmount: 75e3,
      currentValue: 86250,
      return: 15,
      riskLevel: "Low",
      riskScore: 1.8,
      irr: 7.2,
      status: "Operational",
      lastUpdate: "2023-12-15",
      performance: "On target"
    },
    {
      id: "coastal-wind",
      name: "Coastal Wind Project",
      type: "Wind",
      location: "North Carolina, USA",
      investmentAmount: 1e5,
      currentValue: 118e3,
      return: 18,
      riskLevel: "Medium",
      riskScore: 3.1,
      irr: 9.4,
      status: "Operational",
      lastUpdate: "2023-12-10",
      performance: "Above target"
    },
    {
      id: "hydro-station",
      name: "Hydroelectric Station",
      type: "Hydro",
      location: "Washington, USA",
      investmentAmount: 5e4,
      currentValue: 54500,
      return: 9,
      riskLevel: "Low",
      riskScore: 2,
      irr: 6.8,
      status: "Operational",
      lastUpdate: "2023-12-18",
      performance: "Slightly below target"
    },
    {
      id: "storage-facility",
      name: "Grid Storage Facility",
      type: "Storage",
      location: "California, USA",
      investmentAmount: 25e3,
      currentValue: 28750,
      return: 15,
      riskLevel: "High",
      riskScore: 3.8,
      irr: 11.2,
      status: "Under Construction",
      lastUpdate: "2023-12-05",
      performance: "On target"
    }
  ];
  let upcomingPayouts = [
    {
      project: "Solar Farm Alpha",
      amount: 1350,
      date: "2024-01-15",
      type: "Quarterly Dividend"
    },
    {
      project: "Coastal Wind Project",
      amount: 2350,
      date: "2024-01-22",
      type: "Quarterly Dividend"
    },
    {
      project: "Hydroelectric Station",
      amount: 850,
      date: "2024-02-05",
      type: "Quarterly Dividend"
    }
  ];
  let alerts = [
    {
      type: "positive",
      message: "Coastal Wind Project exceeding generation targets by 12%",
      date: "2023-12-17"
    },
    {
      type: "neutral",
      message: "Regulatory review announced for renewable energy incentives in Washington state",
      date: "2023-12-14"
    },
    {
      type: "negative",
      message: "Hydroelectric Station experiencing lower output due to reduced water levels",
      date: "2023-12-10"
    }
  ];
  let environmentalImpact = {
    totalCarbonOffset: 3250,
    treesEquivalent: 54165,
    homesPowered: 1250,
    waterSaved: 225e5
  };
  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
  function formatPercentage(value) {
    return `${value.toFixed(1)}%`;
  }
  function getRiskColor(score) {
    if (score <= 2) return "text-green-500";
    if (score <= 3) return "text-yellow-500";
    return "text-red-500";
  }
  function getPerformanceColor(performance) {
    if (performance.includes("Above")) return "text-green-500";
    if (performance.includes("On target")) return "text-blue-500";
    return "text-yellow-500";
  }
  function getAlertColor(type) {
    if (type === "positive") return "bg-green-100 text-green-800";
    if (type === "neutral") return "bg-blue-100 text-blue-800";
    return "bg-yellow-100 text-yellow-800";
  }
  let cart = [];
  let isCartOpen = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(performanceHistory);
    const each_array_1 = ensure_array_like(portfolioDistribution.byType);
    const each_array_2 = ensure_array_like(portfolioDistribution.byRiskLevel);
    const each_array_3 = ensure_array_like(portfolioDistribution.byRegion);
    const each_array_4 = ensure_array_like(portfolioProjects);
    const each_array_5 = ensure_array_like(benchmarkComparison);
    const each_array_6 = ensure_array_like(riskAnalysis.categories);
    const each_array_7 = ensure_array_like(upcomingPayouts);
    const each_array_8 = ensure_array_like(alerts);
    $$payload2.out += `<div class="min-h-screen bg-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-8"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><div><h1 class="text-3xl font-bold text-slate-300">Investment Portfolio</h1> <p class="mt-2 text-slate-400">Track your renewable energy investments and performance</p></div> <div class="flex space-x-2 self-end sm:self-auto"><button class="px-4 py-2 text-sm font-medium rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700">Export Data</button> <button class="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-t from-blue-600 to-blue-400 text-white hover:to-blue-500">Find New Projects</button></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"><div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><h3 class="text-sm font-medium text-slate-400 mb-1">Total Investment</h3> <div class="flex items-baseline"><p class="text-2xl font-semibold text-slate-300">${escape_html(formatCurrency(portfolioSummary.totalInvested))}</p> <span class="ml-2 text-sm font-medium text-slate-400">USD</span></div> <div class="mt-1"><p class="text-sm text-slate-400">${escape_html(portfolioSummary.portfolioAge)} old</p></div></div> <div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><h3 class="text-sm font-medium text-slate-400 mb-1">Current Value</h3> <div class="flex items-baseline"><p class="text-2xl font-semibold text-slate-300">${escape_html(formatCurrency(portfolioSummary.currentValue))}</p> <span class="ml-2 text-sm font-medium text-green-400">+${escape_html(formatPercentage(portfolioSummary.percentageReturn))}</span></div> <div class="mt-1"><p class="text-sm text-slate-400">+${escape_html(formatCurrency(portfolioSummary.absoluteReturn))} overall</p></div></div> <div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><h3 class="text-sm font-medium text-slate-400 mb-1">Projected Annual Yield</h3> <div class="flex items-baseline"><p class="text-2xl font-semibold text-slate-300">${escape_html(formatPercentage(portfolioSummary.projectedAnnualYield))}</p></div> <div class="mt-1"><p class="text-sm text-slate-400">Based on current performance</p></div></div> <div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><h3 class="text-sm font-medium text-slate-400 mb-1">Portfolio Risk Score</h3> <div class="flex items-baseline"><p${attr_class(`text-2xl font-semibold ${stringify(getRiskColor(portfolioSummary.weightedRiskScore))}`)}>${escape_html(portfolioSummary.weightedRiskScore.toFixed(1))}</p> <span class="ml-2 text-sm font-medium text-slate-400">/ 5.0</span></div> <div class="mt-1"><p class="text-sm text-slate-400">Low-Medium Risk Profile</p></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"><div class="lg:col-span-2 space-y-6 md:space-y-8"><div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3"><h2 class="text-lg font-semibold text-slate-300">Portfolio Performance</h2> <div class="flex flex-wrap gap-2"><button${attr_class(`px-3 py-1 text-xs font-medium rounded-md ${"bg-slate-700 text-slate-300 hover:bg-slate-600"}`)}>1M</button> <button${attr_class(`px-3 py-1 text-xs font-medium rounded-md ${"bg-slate-700 text-slate-300 hover:bg-slate-600"}`)}>3M</button> <button${attr_class(`px-3 py-1 text-xs font-medium rounded-md ${"bg-slate-700 text-slate-300 hover:bg-slate-600"}`)}>6M</button> <button${attr_class(`px-3 py-1 text-xs font-medium rounded-md ${"bg-blue-600 text-white"}`)}>1Y</button> <button${attr_class(`px-3 py-1 text-xs font-medium rounded-md ${"bg-slate-700 text-slate-300 hover:bg-slate-600"}`)}>All</button></div></div> <div class="h-48 sm:h-64 relative"><div class="absolute inset-0 flex items-center justify-center"><div class="w-full h-40 rounded bg-slate-700 relative overflow-hidden"><div class="absolute inset-0 flex items-end px-4"><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$payload2.out += `<div class="flex-1 flex flex-col items-center"><div class="w-full h-32 flex items-end"><div class="w-4/5 mx-auto bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"${attr_style(`height: ${stringify((item.value - 25e4) / 750)}px`)}></div></div> <span class="text-xs text-slate-400 mt-1">${escape_html(item.month)}</span></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div></div> <div class="flex justify-between items-center mt-4"><div><span class="text-sm font-medium text-slate-300">Starting: ${escape_html(formatCurrency(performanceHistory[0].value))}</span></div> <div><span class="text-sm font-medium text-slate-300">Current: ${escape_html(formatCurrency(performanceHistory[performanceHistory.length - 1].value))}</span></div></div></div> <div class="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Portfolio Distribution</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"><div><h3 class="text-sm font-medium text-slate-400 mb-3">By Project Type</h3> <div class="space-y-2"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$payload2.out += `<div><div class="flex justify-between mb-1"><span class="text-sm text-slate-300">${escape_html(item.type)}</span> <span class="text-sm text-slate-400">${escape_html(item.percentage)}%</span></div> <div class="w-full bg-slate-700 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full"${attr_style(`width: ${stringify(item.percentage)}%`)}></div></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div><h3 class="text-sm font-medium text-slate-400 mb-3">By Risk Level</h3> <div class="space-y-2"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_2[$$index_2];
      $$payload2.out += `<div><div class="flex justify-between mb-1"><span class="text-sm text-slate-300">${escape_html(item.level)}</span> <span class="text-sm text-slate-400">${escape_html(item.percentage)}%</span></div> <div class="w-full bg-slate-700 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full"${attr_style(`width: ${stringify(item.percentage)}%`)}></div></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div><h3 class="text-sm font-medium text-slate-400 mb-3">By Region</h3> <div class="space-y-2"><!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      $$payload2.out += `<div><div class="flex justify-between mb-1"><span class="text-sm text-slate-300">${escape_html(item.region)}</span> <span class="text-sm text-slate-400">${escape_html(item.percentage)}%</span></div> <div class="w-full bg-slate-700 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full"${attr_style(`width: ${stringify(item.percentage)}%`)}></div></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div></div> <div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Your Projects</h2> <div class="overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-slate-700"><th class="py-3 text-left text-sm font-medium text-slate-400">Project</th><th class="py-3 text-left text-sm font-medium text-slate-400">Type</th><th class="py-3 text-right text-sm font-medium text-slate-400">Investment</th><th class="py-3 text-right text-sm font-medium text-slate-400">Current Value</th><th class="py-3 text-right text-sm font-medium text-slate-400">Return</th><th class="py-3 text-right text-sm font-medium text-slate-400">Risk Score</th><th class="py-3 text-right text-sm font-medium text-slate-400">Performance</th></tr></thead><tbody><!--[-->`;
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let project = each_array_4[$$index_4];
      $$payload2.out += `<tr class="border-b border-slate-700 hover:bg-slate-700/30 cursor-pointer"><td class="py-4"><div><div class="text-sm font-medium text-slate-300">${escape_html(project.name)}</div> <div class="text-xs text-slate-400">${escape_html(project.location)}</div></div></td><td class="py-4"><span class="text-sm text-slate-300">${escape_html(project.type)}</span></td><td class="py-4 text-right"><span class="text-sm text-slate-300">${escape_html(formatCurrency(project.investmentAmount))}</span></td><td class="py-4 text-right"><span class="text-sm text-slate-300">${escape_html(formatCurrency(project.currentValue))}</span></td><td class="py-4 text-right"><span class="text-sm text-green-400">+${escape_html(formatPercentage(project.return))}</span></td><td class="py-4 text-right"><span${attr_class(`text-sm ${stringify(getRiskColor(project.riskScore))}`)}>${escape_html(project.riskScore.toFixed(1))}</span></td><td class="py-4 text-right"><span${attr_class(`text-sm ${stringify(getPerformanceColor(project.performance))}`)}>${escape_html(project.performance)}</span></td></tr>`;
    }
    $$payload2.out += `<!--]--></tbody></table></div></div> <div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Performance Comparison</h2> <div class="h-64 relative"><div class="absolute inset-0"><div class="w-full h-40 mt-10 flex items-end space-x-12 px-6"><!--[-->`;
    for (let i = 0, $$length = each_array_5.length; i < $$length; i++) {
      let item = each_array_5[i];
      $$payload2.out += `<div class="flex-1 flex flex-col items-center"><div class="w-full h-40 flex items-end"><div class="w-16 mx-auto bg-blue-500 rounded-t"${attr_style(`height: ${stringify(item.value * 10)}px; ${stringify(i === 0 ? "background: linear-gradient(to top, #2563eb, #60a5fa);" : "")}`)}></div></div> <span class="text-sm text-slate-300 mt-2">${escape_html(item.name)}</span> <span class="text-xs text-slate-400 mt-1">${escape_html(formatPercentage(item.value))}</span></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div></div></div> <div class="space-y-8"><div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Risk Analysis</h2> <div class="flex items-center justify-between mb-6"><div class="flex items-center"><div class="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center"><span${attr_class(`text-lg font-bold ${stringify(getRiskColor(riskAnalysis.totalScore))}`)}>${escape_html(riskAnalysis.totalScore.toFixed(1))}</span></div> <div class="ml-4"><p class="text-sm font-medium text-slate-300">Overall Risk Score</p> <p class="text-xs text-slate-400">${escape_html(riskAnalysis.riskRating)} Risk</p></div></div></div> <div class="space-y-4"><!--[-->`;
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let category = each_array_6[$$index_6];
      $$payload2.out += `<div><div class="flex justify-between mb-1"><span class="text-sm text-slate-300">${escape_html(category.category)}</span> <span${attr_class(`text-sm ${stringify(getRiskColor(category.score))}`)}>${escape_html(category.score.toFixed(1))}</span></div> <div class="w-full bg-slate-700 rounded-full h-2"><div${attr_class(`${stringify(category.score <= 2 ? "bg-green-500" : category.score <= 3 ? "bg-yellow-500" : "bg-red-500")} h-2 rounded-full`)}${attr_style(`width: ${stringify(category.score / 5 * 100)}%`)}></div></div> <p class="text-xs text-slate-400 mt-1">${escape_html(category.analysis)}</p></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Upcoming Payouts</h2> <div class="space-y-4"><!--[-->`;
    for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
      let payout = each_array_7[$$index_7];
      $$payload2.out += `<div class="flex justify-between items-center py-3 border-b border-slate-700"><div><p class="text-sm font-medium text-slate-300">${escape_html(payout.project)}</p> <p class="text-xs text-slate-400">${escape_html(payout.type)}</p></div> <div class="text-right"><p class="text-sm font-medium text-green-400">${escape_html(formatCurrency(payout.amount))}</p> <p class="text-xs text-slate-400">${escape_html(payout.date)}</p></div></div>`;
    }
    $$payload2.out += `<!--]--></div></div> <div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Environmental Impact</h2> <div class="grid grid-cols-2 gap-4"><div class="bg-slate-700 rounded-lg p-4"><p class="text-xs text-slate-400 mb-1">Carbon Offset</p> <p class="text-xl font-semibold text-slate-300">${escape_html(environmentalImpact.totalCarbonOffset.toLocaleString())} <span class="text-sm text-slate-400">tons</span></p></div> <div class="bg-slate-700 rounded-lg p-4"><p class="text-xs text-slate-400 mb-1">Trees Equivalent</p> <p class="text-xl font-semibold text-slate-300">${escape_html(environmentalImpact.treesEquivalent.toLocaleString())}</p></div> <div class="bg-slate-700 rounded-lg p-4"><p class="text-xs text-slate-400 mb-1">Homes Powered</p> <p class="text-xl font-semibold text-slate-300">${escape_html(environmentalImpact.homesPowered.toLocaleString())}</p></div> <div class="bg-slate-700 rounded-lg p-4"><p class="text-xs text-slate-400 mb-1">Water Saved</p> <p class="text-xl font-semibold text-slate-300">${escape_html((environmentalImpact.waterSaved / 1e6).toFixed(1))}M <span class="text-sm text-slate-400">gal</span></p></div></div></div> <div class="bg-slate-800 rounded-lg p-6 shadow-lg"><h2 class="text-lg font-semibold text-slate-300 mb-4">Recent Alerts</h2> <div class="space-y-3"><!--[-->`;
    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
      let alert = each_array_8[$$index_8];
      $$payload2.out += `<div${attr_class(`p-3 rounded-lg ${getAlertColor(alert.type)}`)}><p class="text-sm font-medium">${escape_html(alert.message)}</p> <p class="text-xs mt-1 opacity-75">${escape_html(alert.date)}</p></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div></div></div> `;
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
  pop();
}
export {
  _page as default
};
