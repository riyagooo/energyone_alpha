import * as server from '../entries/pages/shop/_page.server.js';

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/shop/+page.server.js";
export const imports = ["_app/immutable/nodes/23.Cw1CqkiS.js","_app/immutable/chunks/CYEPvI1U.js","_app/immutable/chunks/xC3-kGY6.js","_app/immutable/chunks/DAxizKm6.js","_app/immutable/chunks/yShZL8Qo.js","_app/immutable/chunks/CZDIIiPP.js","_app/immutable/chunks/UHNRwfYL.js","_app/immutable/chunks/B5hnyKR-.js","_app/immutable/chunks/COsgKQ3U.js","_app/immutable/chunks/Q_GEmBfN.js","_app/immutable/chunks/X5Sv9yWS.js","_app/immutable/chunks/DE2GX4WX.js","_app/immutable/chunks/f5GP5Cyk.js","_app/immutable/chunks/CVGB81JY.js","_app/immutable/chunks/BIo2maw4.js","_app/immutable/chunks/CJyuKVfR.js","_app/immutable/chunks/CLAFF9o8.js","_app/immutable/chunks/DpH6AVGs.js","_app/immutable/chunks/BX5u_xLT.js","_app/immutable/chunks/BHWSD7aj.js","_app/immutable/chunks/Bmdqo8de.js"];
export const stylesheets = [];
export const fonts = [];
