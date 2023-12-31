

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Present/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.f8fe6aa1.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/8.b1430ed8.css"];
export const fonts = [];
