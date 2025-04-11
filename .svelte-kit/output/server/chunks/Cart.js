import { w as push, G as escape_html, A as attr_class, M as ensure_array_like, B as attr, K as bind_props, y as pop } from "./index.js";
import { f as fallback } from "./equality.js";
function formatCurrency(amount) {
  if (amount >= 1e9) {
    return `$${(amount / 1e9).toFixed(1)}B`;
  } else if (amount >= 1e6) {
    return `$${(amount / 1e6).toFixed(1)}M`;
  } else if (amount >= 1e3) {
    return `$${(amount / 1e3).toFixed(1)}K`;
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}
function Cart($$payload, $$props) {
  push();
  let cart = fallback($$props["cart"], () => [], true);
  let isOpen = fallback($$props["isOpen"], false);
  const subtotal = cart.reduce((sum, item) => sum + item.investment * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  $$payload.out += `<button class="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-t from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Open cart"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> `;
  if (cart.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${escape_html(cart.length)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button" class="fixed inset-0 bg-black/20 z-40" aria-label="Close cart"></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class(`fixed top-0 right-0 z-50 w-full max-w-md h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`)} aria-label="Shopping cart"><div class="flex flex-col h-full"><div class="flex items-center justify-between p-4 border-b border-slate-200"><h2 class="text-lg font-semibold text-slate-900">Investment Cart</h2> <button class="p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100" aria-label="Close cart"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-y-auto p-4">`;
  if (cart.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="text-center py-8"><svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <h3 class="mt-2 text-sm font-medium text-slate-900">Your cart is empty</h3> <p class="mt-1 text-sm text-slate-500">Start adding projects to your investment portfolio</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(cart);
    $$payload.out += `<div class="space-y-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out += `<div class="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg"><div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-slate-900">${escape_html(item.name)}</h3> <p class="text-sm text-slate-500">${escape_html(item.type)} Project</p> <div class="mt-2 flex items-center space-x-4"><div class="flex items-center space-x-2"><button class="p-1 text-slate-400 hover:text-slate-500" aria-label="Decrease quantity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button> <span class="text-sm text-slate-900">${escape_html(item.quantity)}</span> <button class="p-1 text-slate-400 hover:text-slate-500" aria-label="Increase quantity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg></button></div> <span class="text-sm font-medium text-slate-900">${escape_html(formatCurrency(item.investment * item.quantity))}</span></div></div> <button class="p-2 text-slate-400 hover:text-slate-500 rounded-lg hover:bg-slate-100" aria-label="Remove item"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="p-4 border-t border-slate-200"><div class="space-y-2"><div class="flex justify-between text-sm text-slate-600"><span>Subtotal</span> <span>${escape_html(formatCurrency(subtotal))}</span></div> <div class="flex justify-between text-sm text-slate-600"><span>Tax (10%)</span> <span>${escape_html(formatCurrency(tax))}</span></div> <div class="flex justify-between text-base font-medium text-slate-900"><span>Total</span> <span>${escape_html(formatCurrency(total))}</span></div></div> <button class="mt-4 w-full py-2 px-4 bg-gradient-to-t from-blue-600 to-blue-400 text-white rounded-lg hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"${attr("disabled", cart.length === 0, true)}>Proceed to Checkout</button></div></div></div>`;
  bind_props($$props, { cart, isOpen });
  pop();
}
export {
  Cart as C,
  formatCurrency as f
};
