import * as server from '../entries/pages/projects/_id_/_layout.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_id_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[id]/+layout.server.js";
export const imports = ["_app/immutable/nodes/4.DPTTuL8N.js","_app/immutable/chunks/CYEPvI1U.js","_app/immutable/chunks/xC3-kGY6.js","_app/immutable/chunks/DAxizKm6.js","_app/immutable/chunks/iIn7HZDS.js","_app/immutable/chunks/CLAFF9o8.js","_app/immutable/chunks/CJyuKVfR.js","_app/immutable/chunks/BIo2maw4.js"];
export const stylesheets = ["_app/immutable/assets/4.6ObOsaD0.css"];
export const fonts = [];
