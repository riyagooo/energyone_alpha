import { P as copy_payload, Q as assign_payload, y as pop, w as push, G as escape_html } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { C as Cart } from "../../../chunks/Cart.js";
function _page($$payload, $$props) {
  push();
  let cart = [];
  let isCartOpen = false;
  function getUserProfileSummary() {
    let summary = "";
    summary += "investments";
    return summary;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="min-h-screen bg-slate-900"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-8"><h1 class="text-3xl font-bold text-slate-300">Your AI-Recommended Portfolio</h1> <p class="mt-2 text-slate-400">Based on your profile, we've selected these projects for you</p></div> <div class="mb-8 bg-slate-800 p-6 rounded-lg"><h2 class="text-xl font-semibold text-white mb-3">Your Investment Profile</h2> <div class="flex flex-wrap gap-4"><div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300"><span class="font-medium">Risk Tolerance:</span> ${escape_html("Not specified")}</div> <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300"><span class="font-medium">Time Horizon:</span> ${escape_html("Not specified")}</div> <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300"><span class="font-medium">Goal:</span> ${escape_html("Not specified")}</div> <div class="px-4 py-2 bg-slate-700 rounded-full text-slate-300"><span class="font-medium">Preference:</span> ${escape_html("Not specified")}</div></div> <p class="mt-4 text-slate-400">Our AI has selected projects suitable for ${escape_html(getUserProfileSummary())}</p></div> `;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex justify-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>`;
    }
    $$payload2.out += `<!--]--></div> `;
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
