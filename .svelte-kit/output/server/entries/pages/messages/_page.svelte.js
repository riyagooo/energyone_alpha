import "clsx";
import { M as MessagesSidebar, a as MessagesHeader, b as MessagesBody, c as MessagesFooter } from "../../../chunks/MessagesFooter.js";
function _page($$payload) {
  let msgSidebarOpen = true;
  $$payload.out += `<div class="flex h-full pt-16">`;
  MessagesSidebar($$payload, { msgSidebarOpen });
  $$payload.out += `<!----> <div class="grow flex flex-col transition-transform duration-300 ease-in-out">`;
  MessagesHeader($$payload, { msgSidebarOpen });
  $$payload.out += `<!----> `;
  MessagesBody($$payload);
  $$payload.out += `<!----> `;
  MessagesFooter($$payload);
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
