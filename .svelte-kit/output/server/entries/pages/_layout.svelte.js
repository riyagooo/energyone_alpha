import { z as store_get, A as attr_class, B as attr, C as slot, E as unsubscribe_stores, y as pop, w as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let pathname;
  let mobileMenuOpen = false;
  pathname = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<header class="bg-slate-800 shadow-lg"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex-shrink-0 flex items-center"><a href="/" class="text-xl font-bold text-white">EnergyOne</a></div> <nav class="hidden md:ml-6 md:flex md:space-x-8"><a href="/"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/" ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Home</a> <a href="/shop"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/shop" || pathname.startsWith("/shop/") ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Projects</a> <a href="/portfolio-dashboard"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/portfolio-dashboard" ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Portfolio</a> <a href="/communities"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/communities" || pathname.startsWith("/communities/") ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Communities</a> <a href="/messages"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/messages" || pathname.startsWith("/messages/") ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Messages</a> <a href="/contact"${attr_class(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === "/contact" ? "border-blue-500 text-white" : "border-transparent text-slate-300 hover:border-slate-300 hover:text-white"}`)}>Contact</a></nav></div> <div class="flex items-center md:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu"${attr("aria-expanded", mobileMenuOpen)}><span class="sr-only">Open main menu</span> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
  }
  $$payload.out += `<!--]--></button></div> <div class="hidden md:flex md:items-center"><a href="/login" class="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700">Log in</a> <a href="/signup" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500">Sign up</a></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></header> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="bg-slate-800 mt-auto"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="text-center text-slate-400 text-sm">© 2025 EnergyOne. All rights reserved.</div></div></footer>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
