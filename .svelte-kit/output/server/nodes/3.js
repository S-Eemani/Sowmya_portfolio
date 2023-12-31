

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Future/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d499b126.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.e9696afe.css"];
export const fonts = [];
