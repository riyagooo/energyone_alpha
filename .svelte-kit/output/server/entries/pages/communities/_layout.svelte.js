import { C as slot } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen w-full bg-slate-900 flex flex-col"><div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
}
export {
  _layout as default
};
