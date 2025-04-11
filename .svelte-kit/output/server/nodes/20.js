import * as server from '../entries/pages/projects/_id_/_page.server.js';

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/20.VzR14oFb.js","_app/immutable/chunks/CYEPvI1U.js","_app/immutable/chunks/xC3-kGY6.js","_app/immutable/chunks/DAxizKm6.js","_app/immutable/chunks/yShZL8Qo.js","_app/immutable/chunks/CZDIIiPP.js","_app/immutable/chunks/COsgKQ3U.js","_app/immutable/chunks/DE2GX4WX.js","_app/immutable/chunks/f5GP5Cyk.js","_app/immutable/chunks/CVGB81JY.js","_app/immutable/chunks/BIo2maw4.js","_app/immutable/chunks/Bt9BmsB7.js","_app/immutable/chunks/CLAFF9o8.js","_app/immutable/chunks/CJyuKVfR.js","_app/immutable/chunks/Q_GEmBfN.js","_app/immutable/chunks/X5Sv9yWS.js","_app/immutable/chunks/CRagYxyR.js","_app/immutable/chunks/B5hnyKR-.js","_app/immutable/chunks/BX5u_xLT.js","_app/immutable/chunks/UHNRwfYL.js","_app/immutable/chunks/BHWSD7aj.js"];
export const stylesheets = [];
export const fonts = [];
