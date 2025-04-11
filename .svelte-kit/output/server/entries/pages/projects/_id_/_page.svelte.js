import { w as push, A as attr_class, G as escape_html, I as attr_style, K as bind_props, y as pop, J as stringify, M as ensure_array_like, B as attr, P as copy_payload, Q as assign_payload, z as store_get, E as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { C as Cart } from "../../../../chunks/Cart.js";
function RiskAnalysis($$payload, $$props) {
  push();
  let project = $$props["project"];
  function getRiskLevelText(score) {
    if (score < 2.5) return "Low";
    if (score < 3.5) return "Medium";
    return "High";
  }
  function getRiskColor(score) {
    if (score < 2.5) return "text-green-400";
    if (score < 3.5) return "text-yellow-400";
    return "text-red-400";
  }
  function getProgressBarColor(score) {
    if (score < 2.5) return "bg-green-500";
    if (score < 3.5) return "bg-yellow-500";
    return "bg-red-500";
  }
  function getRiskBadgeColor(score) {
    if (score < 2.5) return "bg-green-900 text-green-100";
    if (score < 3.5) return "bg-yellow-900 text-yellow-100";
    return "bg-red-900 text-red-100";
  }
  const riskScores = {
    overall: project.riskScore || 3.2,
    technical: {
      overall: 3.5,
      technology: 3.2,
      performance: 3.8,
      maintenance: 3.5
    },
    financial: {
      overall: 3.2,
      revenue: 3,
      costOverrun: 3.4,
      currency: 3.2
    },
    regulatory: {
      overall: 2.8,
      permitting: 2.5,
      policy: 3,
      compliance: 3
    },
    environmental: {
      overall: 3,
      climate: 3.2,
      resource: 2.8,
      impact: 3
    },
    political: {
      overall: 3.5,
      stability: 3.5,
      sovereign: 3.5,
      community: 3.5
    }
  };
  $$payload.out += `<div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-6">Risk Analysis</h2> <div class="mb-8"><h3 class="text-lg font-semibold text-slate-300 mb-2">Overall Risk Score</h3> <div class="flex items-center mb-2"><div${attr_class(`text-3xl font-bold ${stringify(getRiskColor(riskScores.overall))}`)}>${escape_html(riskScores.overall.toFixed(1))}</div> <div class="text-slate-400 ml-2">/5</div> <div${attr_class(`ml-4 px-3 py-1 rounded-md text-sm font-medium ${stringify(getRiskBadgeColor(riskScores.overall))}`)}>${escape_html(getRiskLevelText(riskScores.overall))} Risk</div></div> <div class="h-2 bg-slate-700 rounded-full overflow-hidden mb-3"><div${attr_class(`${stringify(getProgressBarColor(riskScores.overall))} h-full`)}${attr_style(`width: ${stringify(riskScores.overall / 5 * 100)}%`)}></div></div> <p class="text-sm text-slate-400">This score represents the overall risk assessment of the project, taking into account technical, financial, regulatory, environmental, and political factors.</p></div> <div class="border-t border-slate-700 pt-6 mb-6"><div class="flex justify-between items-center mb-3"><h3 class="text-lg font-semibold text-slate-300">Technical Risk</h3> <div class="flex items-center"><div${attr_class(`font-bold ${stringify(getRiskColor(riskScores.technical.overall))}`)}>${escape_html(riskScores.technical.overall.toFixed(1))}/5</div> <div${attr_class(`ml-2 px-2 py-0.5 rounded text-xs font-medium ${stringify(getRiskBadgeColor(riskScores.technical.overall))}`)}>${escape_html(getRiskLevelText(riskScores.technical.overall))}</div></div></div> <div class="space-y-3"><div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Technology Maturity</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.technical.technology))}`)}>${escape_html(riskScores.technical.technology.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.technical.technology))} h-full`)}${attr_style(`width: ${stringify(riskScores.technical.technology / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Assessment of technology readiness and reliability</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Performance Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.technical.performance))}`)}>${escape_html(riskScores.technical.performance.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.technical.performance))} h-full`)}${attr_style(`width: ${stringify(riskScores.technical.performance / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Potential performance deviations from expected output</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Maintenance Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.technical.maintenance))}`)}>${escape_html(riskScores.technical.maintenance.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.technical.maintenance))} h-full`)}${attr_style(`width: ${stringify(riskScores.technical.maintenance / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk associated with equipment maintenance and reliability</p></div></div></div> <div class="border-t border-slate-700 pt-6 mb-6"><div class="flex justify-between items-center mb-3"><h3 class="text-lg font-semibold text-slate-300">Financial Risk</h3> <div class="flex items-center"><div${attr_class(`font-bold ${stringify(getRiskColor(riskScores.financial.overall))}`)}>${escape_html(riskScores.financial.overall.toFixed(1))}/5</div> <div${attr_class(`ml-2 px-2 py-0.5 rounded text-xs font-medium ${stringify(getRiskBadgeColor(riskScores.financial.overall))}`)}>${escape_html(getRiskLevelText(riskScores.financial.overall))}</div></div></div> <div class="space-y-3"><div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Revenue Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.financial.revenue))}`)}>${escape_html(riskScores.financial.revenue.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.financial.revenue))} h-full`)}${attr_style(`width: ${stringify(riskScores.financial.revenue / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of revenue shortfall due to market conditions</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Cost Overrun</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.financial.costOverrun))}`)}>${escape_html(riskScores.financial.costOverrun.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.financial.costOverrun))} h-full`)}${attr_style(`width: ${stringify(riskScores.financial.costOverrun / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of construction and operational cost overruns</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Currency Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.financial.currency))}`)}>${escape_html(riskScores.financial.currency.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.financial.currency))} h-full`)}${attr_style(`width: ${stringify(riskScores.financial.currency / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk associated with currency fluctuations</p></div></div></div> <div class="border-t border-slate-700 pt-6 mb-6"><div class="flex justify-between items-center mb-3"><h3 class="text-lg font-semibold text-slate-300">Regulatory Risk</h3> <div class="flex items-center"><div${attr_class(`font-bold ${stringify(getRiskColor(riskScores.regulatory.overall))}`)}>${escape_html(riskScores.regulatory.overall.toFixed(1))}/5</div> <div${attr_class(`ml-2 px-2 py-0.5 rounded text-xs font-medium ${stringify(getRiskBadgeColor(riskScores.regulatory.overall))}`)}>${escape_html(getRiskLevelText(riskScores.regulatory.overall))}</div></div></div> <div class="space-y-3"><div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Permitting Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.regulatory.permitting))}`)}>${escape_html(riskScores.regulatory.permitting.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.regulatory.permitting))} h-full`)}${attr_style(`width: ${stringify(riskScores.regulatory.permitting / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of delays in obtaining necessary permits</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Policy Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.regulatory.policy))}`)}>${escape_html(riskScores.regulatory.policy.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.regulatory.policy))} h-full`)}${attr_style(`width: ${stringify(riskScores.regulatory.policy / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of changes in government policies</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Compliance Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.regulatory.compliance))}`)}>${escape_html(riskScores.regulatory.compliance.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.regulatory.compliance))} h-full`)}${attr_style(`width: ${stringify(riskScores.regulatory.compliance / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of non-compliance with regulations</p></div></div></div> <div class="border-t border-slate-700 pt-6 mb-6"><div class="flex justify-between items-center mb-3"><h3 class="text-lg font-semibold text-slate-300">Environmental Risk</h3> <div class="flex items-center"><div${attr_class(`font-bold ${stringify(getRiskColor(riskScores.environmental.overall))}`)}>${escape_html(riskScores.environmental.overall.toFixed(1))}/5</div> <div${attr_class(`ml-2 px-2 py-0.5 rounded text-xs font-medium ${stringify(getRiskBadgeColor(riskScores.environmental.overall))}`)}>${escape_html(getRiskLevelText(riskScores.environmental.overall))}</div></div></div> <div class="space-y-3"><div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Climate Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.environmental.climate))}`)}>${escape_html(riskScores.environmental.climate.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.environmental.climate))} h-full`)}${attr_style(`width: ${stringify(riskScores.environmental.climate / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk from climate change impacts</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Resource Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.environmental.resource))}`)}>${escape_html(riskScores.environmental.resource.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.environmental.resource))} h-full`)}${attr_style(`width: ${stringify(riskScores.environmental.resource / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of resource availability</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Impact Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.environmental.impact))}`)}>${escape_html(riskScores.environmental.impact.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.environmental.impact))} h-full`)}${attr_style(`width: ${stringify(riskScores.environmental.impact / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk of environmental impact</p></div></div></div> <div class="border-t border-slate-700 pt-6"><div class="flex justify-between items-center mb-3"><h3 class="text-lg font-semibold text-slate-300">Political Risk</h3> <div class="flex items-center"><div${attr_class(`font-bold ${stringify(getRiskColor(riskScores.political.overall))}`)}>${escape_html(riskScores.political.overall.toFixed(1))}/5</div> <div${attr_class(`ml-2 px-2 py-0.5 rounded text-xs font-medium ${stringify(getRiskBadgeColor(riskScores.political.overall))}`)}>${escape_html(getRiskLevelText(riskScores.political.overall))}</div></div></div> <div class="space-y-3"><div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Stability Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.political.stability))}`)}>${escape_html(riskScores.political.stability.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.political.stability))} h-full`)}${attr_style(`width: ${stringify(riskScores.political.stability / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk from political instability</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Sovereign Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.political.sovereign))}`)}>${escape_html(riskScores.political.sovereign.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.political.sovereign))} h-full`)}${attr_style(`width: ${stringify(riskScores.political.sovereign / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk from government actions</p></div> <div><div class="flex justify-between mb-1"><span class="text-sm text-slate-400">Community Risk</span> <span${attr_class(`text-sm font-medium ${stringify(getRiskColor(riskScores.political.community))}`)}>${escape_html(riskScores.political.community.toFixed(1))}/5</span></div> <div class="h-1.5 bg-slate-700 rounded-full overflow-hidden"><div${attr_class(`${stringify(getProgressBarColor(riskScores.political.community))} h-full`)}${attr_style(`width: ${stringify(riskScores.political.community / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Risk from community relations</p></div></div></div></div>`;
  bind_props($$props, { project });
  pop();
}
function FinancialMetrics($$payload, $$props) {
  push();
  let project = $$props["project"];
  function formatPercentRange(value) {
    if (!value) return "N/A";
    const lowerBound = Math.max(0, value - 1.5);
    const upperBound = value + 1.5;
    return `${lowerBound.toFixed(1)}% - ${upperBound.toFixed(1)}%`;
  }
  function formatCurrencyRange(value) {
    if (!value) return "N/A";
    const lowerBound = Math.floor(value * 0.9 / 1e7) * 1e7;
    const upperBound = Math.ceil(value * 1.1 / 1e7) * 1e7;
    return `$${(lowerBound / 1e6).toFixed(0)}M - $${(upperBound / 1e6).toFixed(0)}M`;
  }
  function formatYearsRange(value) {
    if (!value) return "N/A";
    const lowerBound = Math.max(1, Math.floor(value - 1));
    const upperBound = Math.ceil(value + 1);
    return `${lowerBound} - ${upperBound} years`;
  }
  const targetIRR = project.financials?.leveredIrr || project.irr || 0;
  const irrRangeText = formatPercentRange(targetIRR);
  $$payload.out += `<div class="bg-slate-800 rounded-lg p-4 sm:p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Financial Metrics</h2> <div class="space-y-6"><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"><div><p class="text-sm text-slate-400">Target IRR</p> <p class="text-lg font-medium text-blue-400">${escape_html(irrRangeText)}</p></div> <div><p class="text-sm text-slate-400">Investment Range</p> <p class="text-lg font-medium text-slate-300">${escape_html(formatCurrencyRange(project.financials?.totalInvestment || project.investment))}</p></div> <div><p class="text-sm text-slate-400">Est. Payback Period</p> <p class="text-lg font-medium text-slate-300">${escape_html(formatYearsRange(project.financials?.paybackPeriod))}</p></div> <div><p class="text-sm text-slate-400">Minimum Investment</p> <p class="text-lg font-medium text-slate-300"><span class="cursor-pointer hover:underline" title="Please contact the project team for minimum investment details">Contact for details</span></p></div></div> <div class="border-t border-slate-700 pt-4 sm:pt-6"><div class="bg-slate-700 p-3 sm:p-4 rounded-md"><h3 class="text-lg font-medium text-slate-300 mb-2">Detailed Financial Information</h3> <p class="text-slate-400 mb-3">Additional financial details including debt structure, NPV, DSCR, and detailed cash flow projections are available to qualified investors after signing an NDA.</p> <div class="flex flex-col sm:flex-row gap-3"><a href="/contact" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500">Request Financial Package</a> <a href="/contact" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-400 bg-slate-900 hover:bg-slate-800">Schedule Financial Briefing</a></div></div></div> <div class="border-t border-slate-700 pt-4 sm:pt-6"><div class="flex justify-between items-center mb-2"><span class="text-sm text-slate-400">Expected Return (Target IRR)</span> <span class="text-lg font-bold text-blue-400">${escape_html(irrRangeText)}</span></div> <div class="h-3 bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500"${attr_style(`width: ${stringify(Math.min(targetIRR / 20 * 100, 100))}%`)}></div></div> <p class="mt-1 text-xs text-slate-400 text-right">Compared to industry average of 8.5%</p> <p class="mt-3 text-xs text-slate-500">Note: Actual returns may vary based on multiple factors. Historical performance is not indicative of future results. Please review the full financial disclosure available upon request.</p></div> <div class="border-t border-slate-700 pt-6 sm:pt-8"><h3 class="text-xl font-semibold text-slate-300 mb-4">Understanding Project Finance Metrics</h3> <p class="text-slate-400 mb-6 sm:mb-8">Sophisticated analysis tools are used to evaluate project performance and manage risk across renewable energy investments.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"><div class="bg-slate-700/50 p-4 sm:p-6 rounded-xl border border-slate-600/50"><div class="flex flex-col sm:flex-row sm:items-start mb-4"><div class="bg-blue-900/30 p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 flex justify-center"><svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div> <div><h3 class="text-lg font-bold text-white mb-2">P50/P90/P99 Production Cases</h3> <p class="text-slate-400">Statistical confidence levels for energy production forecasts that drive investment decisions:</p></div></div> <ul class="space-y-3 mb-4 sm:mb-6"><li class="flex items-start"><svg class="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">P50:</span> <span class="text-slate-400">50% probability production estimate – base case for financial models</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">P90:</span> <span class="text-slate-400">90% probability production floor – lenders evaluate debt sizing</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">P99:</span> <span class="text-slate-400">99% probability production floor – worst-case scenario stress testing</span></div></li></ul></div> <div class="bg-slate-700/50 p-4 sm:p-6 rounded-xl border border-slate-600/50"><div class="flex flex-col sm:flex-row sm:items-start mb-4"><div class="bg-amber-900/30 p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 flex justify-center"><svg class="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><h3 class="text-lg font-bold text-white mb-2">Financial Sensitivity Analysis</h3> <p class="text-slate-400">Rigorous testing of financial models against key variable fluctuations:</p></div></div> <ul class="space-y-3 mb-4 sm:mb-6"><li class="flex items-start"><svg class="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">DSCR Testing:</span> <span class="text-slate-400">Debt Service Coverage Ratio analysis under multiple scenarios</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">LCOE Analysis:</span> <span class="text-slate-400">Levelized Cost of Energy compared to local market prices</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Monte Carlo Simulation:</span> <span class="text-slate-400">Probability assessment across thousands of scenarios</span></div></li></ul></div> <div class="bg-slate-700/50 p-4 sm:p-6 rounded-xl border border-slate-600/50"><div class="flex flex-col sm:flex-row sm:items-start mb-4"><div class="bg-green-900/30 p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 flex justify-center"><svg class="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <div><h3 class="text-lg font-bold text-white mb-2">Risk Mitigation Structures</h3> <p class="text-slate-400">Comprehensive contractual and insurance frameworks to safeguard investments:</p></div></div> <ul class="space-y-3 mb-4 sm:mb-6"><li class="flex items-start"><svg class="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">PPA Structure:</span> <span class="text-slate-400">Power Purchase Agreements with creditworthy offtakers</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Insurance Coverage:</span> <span class="text-slate-400">Comprehensive policies for weather, business interruption, and equipment</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Warranties:</span> <span class="text-slate-400">Equipment performance guarantees and O&amp;M contracts</span></div></li></ul></div> <div class="bg-slate-700/50 p-4 sm:p-6 rounded-xl border border-slate-600/50"><div class="flex flex-col sm:flex-row sm:items-start mb-4"><div class="bg-indigo-900/30 p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 flex justify-center"><svg class="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg></div> <div><h3 class="text-lg font-bold text-white mb-2">Technical Due Diligence</h3> <p class="text-slate-400">Comprehensive assessment of project technical fundamentals:</p></div></div> <ul class="space-y-3 mb-4 sm:mb-6"><li class="flex items-start"><svg class="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Resource Assessment:</span> <span class="text-slate-400">Independent verification of solar/wind/hydro resources</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Technology Review:</span> <span class="text-slate-400">Equipment quality, track record and performance analysis</span></div></li> <li class="flex items-start"><svg class="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <div><span class="text-slate-300 font-medium">Operational Assessment:</span> <span class="text-slate-400">O&amp;M strategy evaluation and performance optimization</span></div></li></ul></div></div> <div class="bg-slate-700/50 p-4 sm:p-6 rounded-xl border border-slate-600/50 flex flex-col md:flex-row items-center"><div class="mb-4 md:mb-0 md:mr-8 flex-shrink-0 flex justify-center"><div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 flex items-center justify-center"><svg class="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div> <div class="flex-1 text-center md:text-left"><h3 class="text-lg sm:text-xl font-bold text-white mb-2">Run Your Own Financial Scenarios</h3> <p class="text-slate-400 mb-4">Request access to our proprietary financial modeling toolkit for this project.</p> <div><button class="inline-flex items-center rounded-lg border border-transparent font-semibold px-4 py-2 text-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 shadow-sm transition duration-150 ease-in-out">Request Financial Model Access <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button></div></div></div></div></div></div>`;
  bind_props($$props, { project });
  pop();
}
function EnergyMetrics($$payload, $$props) {
  push();
  let project = $$props["project"];
  function formatNumber(value) {
    if (!value) return "N/A";
    const rounded = Math.round(value / 1e3) * 1e3;
    return rounded.toLocaleString();
  }
  function formatPercent(value) {
    if (!value) return "N/A";
    return `${Math.round(value * 100)}%`;
  }
  function formatTechRatio(value) {
    if (!value) return "N/A";
    return `~${Math.round(value * 100)}%`;
  }
  $$payload.out += `<div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-6">Energy Production Metrics</h2> <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6"><div><p class="text-sm text-slate-400">Installed Capacity</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.capacity)}</p></div> <div><p class="text-sm text-slate-400">Est. Annual Generation</p> <p class="text-lg font-medium text-blue-400">${escape_html(formatNumber(project.energyMetrics?.annualGeneration))} MWh</p></div> <div><p class="text-sm text-slate-400">Capacity Factor</p> <p class="text-lg font-medium text-slate-300">${escape_html(formatPercent(project.energyMetrics?.capacityFactor))}</p></div> <div><p class="text-sm text-slate-400">PPA Duration</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.ppaTerm ? `${project.ppaTerm} years` : "N/A")}</p></div></div> <div class="border-t border-slate-700 pt-6"><h3 class="text-lg font-semibold text-slate-300 mb-4">Performance Metrics</h3> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><p class="text-sm text-slate-400">Availability <span class="text-xs">(Target)</span></p> <p class="text-base font-medium text-slate-300">${escape_html(formatPercent(project.energyMetrics?.availability))}</p> <p class="text-xs text-slate-500">System uptime</p></div> <div><p class="text-sm text-slate-400">Performance Ratio <span class="text-xs">(Est.)</span></p> <p class="text-base font-medium text-slate-300">${escape_html(formatTechRatio(project.energyMetrics?.performanceRatio))}</p> <p class="text-xs text-slate-500">Efficiency indicator</p></div> <div><div class="flex items-center"><p class="text-sm text-slate-400">Additional Technical Data</p> <span class="ml-1 px-1.5 py-0.5 text-xs bg-slate-700 text-slate-300 rounded">NDA Required</span></div> <p class="text-base font-medium text-slate-300"><a href="/contact" class="text-blue-400 hover:underline">Request Access</a></p> <p class="text-xs text-slate-500">Detailed performance specifications</p></div></div> <div class="mt-6 pt-6 border-t border-slate-700"><div class="flex justify-between items-center mb-2"><p class="text-sm text-slate-400">Expected vs. Projected Output</p> <p class="text-base font-medium text-blue-400">On Target</p></div> <div class="h-2 bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500" style="width: 90%"></div></div> <p class="mt-1 text-xs text-slate-500">Production forecasts based on resource assessment studies and equipment specifications</p> <p class="mt-3 text-xs text-slate-500">Note: Actual generation may vary due to resource availability, grid constraints, and maintenance schedules. Detailed production data available to qualified investors.</p></div></div></div>`;
  bind_props($$props, { project });
  pop();
}
function EnvironmentalImpact($$payload, $$props) {
  push();
  let project = $$props["project"];
  function formatNumber(value) {
    if (!value) return "N/A";
    if (value > 1e5) {
      const rounded = Math.round(value / 1e4) * 1e4;
      return rounded.toLocaleString();
    } else {
      const rounded = Math.round(value / 100) * 100;
      return rounded.toLocaleString();
    }
  }
  $$payload.out += `<div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Environmental Impact</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"><div><p class="text-sm text-slate-400">Est. Carbon Offset</p> <p class="text-lg font-medium text-green-400">~${escape_html(formatNumber(project.carbonOffset))} tonnes CO₂/year</p></div> <div><p class="text-sm text-slate-400">Project Footprint</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.environmental?.landUse ? `${project.environmental.landUse} hectares` : "Not available")}</p></div> <div><p class="text-sm text-slate-400">Water Usage</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.environmental?.waterUsage !== void 0 ? `${project.environmental.waterUsage.toLocaleString()} m³/year` : "Minimal")}</p></div> <div><p class="text-sm text-slate-400">Biodiversity Impact</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.environmental?.biodiversityImpact || "Assessment in progress")}</p></div></div> <div class="border-t border-slate-700 pt-6 space-y-6"><div><div class="flex justify-between items-center mb-2"><p class="text-sm text-slate-400">Carbon Reduction Impact</p> <p class="text-base font-medium text-green-400">Significant</p></div> <div class="h-2 bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-green-500" style="width: 75%"></div></div> <p class="mt-1 text-xs text-slate-500">Equivalent to removing approximately ${escape_html(formatNumber(Math.round((project.carbonOffset || 0) / 4.6)))} cars from the road</p></div> <div><div class="flex justify-between items-center mb-2"><p class="text-sm text-slate-400">Estimated Homes Powered</p> <p class="text-base font-medium text-slate-300">~${escape_html(formatNumber(Math.round((project.energyMetrics?.annualGeneration || 0) / 10.5)))} households</p></div> <div class="h-2 bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500" style="width: 85%"></div></div> <p class="mt-1 text-xs text-slate-500">Based on average household consumption of 10.5 MWh per year</p></div> <div><div class="flex justify-between items-center mb-2"><p class="text-sm text-slate-400">Community Impact</p> <p class="text-base font-medium text-slate-300">${escape_html(project.environmental?.socialImpact || "Positive")}</p></div> <p class="mt-1 text-xs text-slate-500">Includes local job creation, community development initiatives, and regional economic benefits</p></div> <div><div class="flex justify-between items-center mb-2"><p class="text-sm text-slate-400">Energy Security Contribution</p> <p class="text-base font-medium text-slate-300">${escape_html(project.energySecurity ? `${project.energySecurity}/5` : "Moderate to High")}</p></div> <div class="h-2 bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500"${attr_style(`width: ${stringify((project.energySecurity || 3.5) / 5 * 100)}%`)}></div></div> <p class="mt-1 text-xs text-slate-500">Contribution to regional energy independence and grid resilience</p></div></div> <div class="mt-6 pt-6 border-t border-slate-700"><h3 class="text-lg font-semibold text-slate-300 mb-3">Environmental Compliance</h3> <div class="space-y-2"><div class="flex items-center"><div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <p class="text-sm text-slate-300">Environmental Impact Assessment Completed</p></div> <div class="flex items-center"><div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <p class="text-sm text-slate-300">All Environmental Permits Secured</p></div> <div class="flex items-center"><div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div> <p class="text-sm text-slate-300">Ongoing Environmental Monitoring Program</p></div></div> <p class="mt-4 text-xs text-slate-500">Detailed environmental compliance documentation and monitoring reports available to qualified investors upon request.</p></div></div>`;
  bind_props($$props, { project });
  pop();
}
function ProjectTeam($$payload, $$props) {
  push();
  let project = $$props["project"];
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Project Director",
      company: project.team?.developer || "Solaris Energy",
      experience: "15+ years in renewable energy development",
      specialty: "Solar PV and hybrid systems",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Miguel Rodriguez",
      role: "Technical Lead",
      company: project.team?.technical || "Renewable Engineering Group",
      experience: "12 years designing utility-scale solar projects",
      specialty: "System optimization and grid integration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Elena Petrov",
      role: "Finance Director",
      company: project.team?.developer || "Solaris Energy",
      experience: "18 years in renewable energy finance",
      specialty: "Project finance structuring and risk management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "James Wilson",
      role: "EPC Manager",
      company: project.team?.epc || "Renewable Construction Co",
      experience: "10 years managing large-scale construction projects",
      specialty: "Project scheduling and logistics optimization",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Aisha Mahmoud",
      role: "Environmental Specialist",
      company: project.team?.developer || "Solaris Energy",
      experience: "8 years in environmental impact assessment",
      specialty: "Biodiversity conservation and sustainability planning",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Carlos Mendez",
      role: "O&M Manager",
      company: project.team?.om || "Green Operations Ltd",
      experience: "14 years in solar plant operations",
      specialty: "Performance optimization and predictive maintenance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];
  const milestones = [
    {
      date: project.timeline?.development || "2020-01",
      event: "Development Start",
      status: "Completed",
      description: "Initial site assessment and feasibility studies"
    },
    {
      date: project.timeline?.construction || "2021-03",
      event: "Construction Start",
      status: "Completed",
      description: "Groundbreaking and initial infrastructure development"
    },
    {
      date: project.timeline?.commissioning || "2022-06",
      event: "Commissioning",
      status: "Completed",
      description: "System testing and grid connection"
    },
    {
      date: project.timeline?.operation || "2022-09",
      event: "Commercial Operation",
      status: "Current",
      description: "Beginning of power generation and revenue"
    }
  ];
  function formatDate(dateString) {
    if (!dateString) return "N/A";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }
  const each_array = ensure_array_like(teamMembers.slice(1));
  const each_array_1 = ensure_array_like(milestones);
  $$payload.out += `<div class="bg-slate-800 rounded-lg p-6 mb-6"><h2 class="text-xl font-semibold text-slate-300 mb-6">Project Team</h2> <div class="mb-8"><div class="flex flex-col sm:flex-row items-center sm:items-start mb-6"><div class="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"><img${attr("src", teamMembers[0].image)}${attr("alt", teamMembers[0].name)} class="w-full h-full object-cover"></div> <div><h3 class="text-lg font-semibold text-slate-300">${escape_html(teamMembers[0].name)}</h3> <p class="text-blue-400 font-medium">${escape_html(teamMembers[0].role)}</p> <p class="text-slate-400 text-sm">${escape_html(teamMembers[0].company)}</p> <p class="text-slate-400 mt-2">${escape_html(teamMembers[0].experience)}</p> <p class="text-slate-400">Specializes in ${escape_html(teamMembers[0].specialty)}</p> <p class="mt-3 text-slate-400">Leading the ${escape_html(project.name)} development from initial concept through operation,
          coordinating with all stakeholders to ensure project success.</p></div></div></div> <div class="mb-8"><h3 class="text-lg font-semibold text-slate-300 mb-4">Core Project Team</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let member = each_array[$$index];
    $$payload.out += `<div class="flex items-center"><div class="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0"><img${attr("src", member.image)}${attr("alt", member.name)} class="w-full h-full object-cover"></div> <div><h4 class="text-base font-medium text-slate-300">${escape_html(member.name)}</h4> <p class="text-blue-400 text-sm">${escape_html(member.role)}</p> <p class="text-slate-400 text-sm">${escape_html(member.company)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="mb-8"><h3 class="text-lg font-semibold text-slate-300 mb-4">Project Organizations</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><p class="text-sm text-slate-400">Developer</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.developer || "N/A")}</p></div> <div><p class="text-sm text-slate-400">EPC Contractor</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.epc || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Equipment Supplier</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.oem || "N/A")}</p></div> <div><p class="text-sm text-slate-400">O&amp;M Provider</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.om || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Legal Advisor</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.legal || "N/A")}</p></div> <div><p class="text-sm text-slate-400">Technical Advisor</p> <p class="text-base font-medium text-slate-300">${escape_html(project.team?.technical || "N/A")}</p></div></div></div> <div><h3 class="text-lg font-semibold text-slate-300 mb-4">Key Project Milestones</h3> <div class="relative"><div class="absolute left-4 sm:left-6 h-full w-0.5 bg-slate-700"></div> <div class="space-y-8 relative"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let milestone = each_array_1[$$index_1];
    $$payload.out += `<div class="flex"><div class="absolute left-4 sm:left-6 w-2.5 h-2.5 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5"></div> <div class="ml-10 sm:ml-14"><div class="flex flex-col sm:flex-row sm:items-center"><p class="text-sm font-medium text-blue-400">${escape_html(formatDate(milestone.date))}</p> <p class="sm:ml-4 text-xs text-slate-500">${escape_html(milestone.status === "Current" ? "Current Phase" : milestone.status === "Completed" ? "Completed" : "Upcoming")}</p></div> <h4 class="text-base font-medium text-slate-300 mt-1">${escape_html(milestone.event)}</h4> <p class="text-sm text-slate-400 mt-1">${escape_html(milestone.description)}</p></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="flex"><div class="absolute left-4 sm:left-6 w-2.5 h-2.5 bg-slate-600 rounded-full transform -translate-x-1/2 mt-1.5"></div> <div class="ml-10 sm:ml-14"><div class="flex flex-col sm:flex-row sm:items-center"><p class="text-sm font-medium text-slate-400">${escape_html(formatDate(project.timeline?.ppaEnd || "2037-09"))}</p> <p class="sm:ml-4 text-xs text-slate-500">Projected</p></div> <h4 class="text-base font-medium text-slate-300 mt-1">PPA End Date</h4> <p class="text-sm text-slate-400 mt-1">End of initial power purchase agreement term</p></div></div></div></div></div></div>`;
  bind_props($$props, { project });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  const project = data.project || {
    id: "",
    name: "Project",
    location: "",
    type: "",
    capacity: "",
    investment: 0,
    image: "",
    riskScore: 0,
    irr: 0,
    riskLevel: "",
    energySecurity: 0,
    status: "",
    developer: "",
    ppaTerm: 0,
    carbonOffset: 0,
    description: "",
    investmentType: "equity",
    minimumInvestment: 0,
    financials: {},
    timeline: {},
    energyMetrics: {},
    environmental: {},
    team: {}
  };
  let cart = [];
  let isCartOpen = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="min-h-screen bg-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-8"><h1 class="text-3xl font-bold text-slate-300">${escape_html(project.name)}</h1> <p class="mt-2 text-slate-400">${escape_html(project.location)}</p></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 space-y-8"><div class="rounded-lg overflow-hidden"><img${attr("src", project.image)}${attr("alt", project.name)} class="w-full h-64 object-cover"></div> <div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Project Details</h2> <div class="space-y-4"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><p class="text-sm text-slate-400">Project Type</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.type)}</p></div> <div><p class="text-sm text-slate-400">Capacity</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.capacity)}</p></div> <div><p class="text-sm text-slate-400">Developer</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.developer)}</p></div> <div><p class="text-sm text-slate-400">PPA Term</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.ppaTerm ? `${project.ppaTerm} years` : "Not applicable")}</p></div></div> <div><p class="text-sm text-slate-400">Description</p> <p class="mt-1 text-slate-300">${escape_html(project.description)}</p></div></div></div> `;
    RiskAnalysis($$payload2, { project });
    $$payload2.out += `<!----> `;
    EnvironmentalImpact($$payload2, { project });
    $$payload2.out += `<!----> `;
    EnergyMetrics($$payload2, { project });
    $$payload2.out += `<!----> `;
    FinancialMetrics($$payload2, { project });
    $$payload2.out += `<!----> `;
    ProjectTeam($$payload2, { project });
    $$payload2.out += `<!----></div> <div class="space-y-8"><div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Investment Summary</h2> <div class="space-y-4"><div><p class="text-sm text-slate-400">Minimum Investment</p> <p class="text-lg font-medium text-slate-300">$${escape_html(project.investment.toLocaleString())}</p></div> <div><p class="text-sm text-slate-400">Project Type</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.type)}</p></div> <div><p class="text-sm text-slate-400">Status</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.status)}</p></div> <div><p class="text-sm text-slate-400">Risk Level</p> <p class="text-lg font-medium text-slate-300">${escape_html(project.riskLevel)}</p></div> <button class="w-full mt-6 flex items-center justify-center px-4 py-3 rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> Add to Investment Cart</button></div></div> <div class="bg-slate-800 rounded-lg p-6"><h2 class="text-xl font-semibold text-slate-300 mb-4">Interested in Learning More?</h2> <p class="text-slate-400 mb-4">Connect with this project team to discuss investment opportunities and technical details.</p> <div class="mb-6"><h3 class="text-lg font-medium text-slate-300 mb-3">Key Contacts</h3> <div class="space-y-4"><div class="flex items-center"><div class="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80" alt="Sarah Chen" class="w-full h-full object-cover"></div> <div><h4 class="text-base font-medium text-slate-300">Sarah Chen</h4> <p class="text-blue-400 text-sm">Project Director</p> <p class="text-slate-400 text-xs">15+ years in renewable energy development</p></div></div> <div class="flex items-center"><div class="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80" alt="Elena Petrov" class="w-full h-full object-cover"></div> <div><h4 class="text-base font-medium text-slate-300">Elena Petrov</h4> <p class="text-blue-400 text-sm">Finance Director</p> <p class="text-slate-400 text-xs">18 years in renewable energy finance</p></div></div></div></div> <div class="space-y-3"><a${attr("href", `/projects/${stringify(store_get($$store_subs ??= {}, "$page", page).params.id)}/team`)} class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500">Contact Project Team</a> <a href="/contact" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-400 bg-slate-900 hover:bg-slate-700">Contact EnergyOne Team</a></div></div></div></div></div> `;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
