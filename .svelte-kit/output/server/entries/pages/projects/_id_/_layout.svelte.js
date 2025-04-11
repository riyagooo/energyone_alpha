import { C as slot } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="flex flex-col min-h-screen bg-slate-900"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
