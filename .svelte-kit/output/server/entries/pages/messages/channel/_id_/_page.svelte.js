import { z as store_get, E as unsubscribe_stores, y as pop, w as push } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import { M as MessagesSidebar, a as MessagesHeader, b as MessagesBody, c as MessagesFooter } from "../../../../../chunks/MessagesFooter.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let msgSidebarOpen = true;
  store_get($$store_subs ??= {}, "$page", page).params.id;
  $$payload.out += `<div class="relative flex h-full">`;
  MessagesSidebar($$payload, { msgSidebarOpen });
  $$payload.out += `<!----> <div class="grow flex flex-col transition-transform duration-300 ease-in-out">`;
  MessagesHeader($$payload, { msgSidebarOpen });
  $$payload.out += `<!----> `;
  MessagesBody($$payload);
  $$payload.out += `<!----> `;
  MessagesFooter($$payload);
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
