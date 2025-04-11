import { G as escape_html, I as attr_style, A as attr_class, B as attr, J as stringify, N as clsx } from "../../../chunks/index.js";
function _page($$payload) {
  let progressPercentage;
  let currentStep = 1;
  const totalSteps = 3;
  let formData = {
    riskTolerance: null
  };
  progressPercentage = (currentStep - 1) / totalSteps * 100;
  $$payload.out += `<div class="min-h-screen bg-slate-900 py-12"><div class="max-w-2xl mx-auto p-6 bg-slate-800 rounded-lg shadow-md"><h1 class="text-2xl font-bold text-slate-300 mb-6">Investment Risk Profile Assessment</h1> <div class="mb-8"><h4 class="sr-only">Progress</h4> <p class="text-sm font-medium text-slate-300">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `Step ${escape_html(currentStep)} of ${escape_html(totalSteps)}
					: ${escape_html("Risk Tolerance")}`;
  }
  $$payload.out += `<!--]--></p> <div class="mt-4" aria-hidden="true"><div class="overflow-hidden rounded-full bg-slate-700"><div class="h-2 rounded-full bg-blue-500"${attr_style(`width: ${stringify(progressPercentage)}%`)}></div></div> <div class="mt-4 grid grid-cols-3 text-sm font-medium text-slate-400"><div${attr_class(clsx("text-blue-400"))}>Risk Tolerance</div> <div${attr_class(`text-center ${""}`)}>Investment Horizon</div> <div${attr_class(`text-right ${""}`)}>Financial Goals</div></div></div></div> <div class="mt-8">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="space-y-6"><h2 class="text-xl font-semibold text-slate-300">What is your risk tolerance?</h2> <p class="text-slate-400">How comfortable are you with the possibility of losing money in exchange for
						potentially higher returns?</p> <div class="space-y-3"><label${attr_class(`flex items-center p-3 border rounded-lg ${stringify("border-slate-600")}`)}><input type="radio" name="riskTolerance" value="low"${attr("checked", formData.riskTolerance === "low", true)} class="h-4 w-4 text-blue-600 focus:ring-blue-500"> <span class="ml-3"><span class="block text-sm font-medium text-slate-300">Low Risk</span> <span class="block text-sm text-slate-400">I prefer stability and am uncomfortable with significant fluctuations.</span></span></label> <label${attr_class(`flex items-center p-3 border rounded-lg ${stringify("border-slate-600")}`)}><input type="radio" name="riskTolerance" value="medium"${attr("checked", formData.riskTolerance === "medium", true)} class="h-4 w-4 text-blue-600 focus:ring-blue-500"> <span class="ml-3"><span class="block text-sm font-medium text-slate-300">Medium Risk</span> <span class="block text-sm text-slate-400">I can tolerate some fluctuations for better returns.</span></span></label> <label${attr_class(`flex items-center p-3 border rounded-lg ${stringify("border-slate-600")}`)}><input type="radio" name="riskTolerance" value="high"${attr("checked", formData.riskTolerance === "high", true)} class="h-4 w-4 text-blue-600 focus:ring-blue-500"> <span class="ml-3"><span class="block text-sm font-medium text-slate-300">High Risk</span> <span class="block text-sm text-slate-400">I'm comfortable with significant fluctuations for potentially higher returns.</span></span></label></div></div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-8 flex justify-between"><button${attr_class("inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", void 0, { "opacity-50": currentStep === 1 })}${attr("disabled", currentStep === 1, true)}>Back</button> <button${attr_class("inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", void 0, {
      "opacity-50": true
    })}${attr("disabled", true, true)}>${escape_html("Next")}</button></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
}
export {
  _page as default
};
