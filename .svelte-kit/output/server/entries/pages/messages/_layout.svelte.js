import { C as slot } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen w-full bg-slate-900 flex flex-col"><div class="flex h-[calc(100dvh-64px)] mt-16 overflow-hidden"><div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"><main class="grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main></div></div></div>`;
}
export {
  _layout as default
};
