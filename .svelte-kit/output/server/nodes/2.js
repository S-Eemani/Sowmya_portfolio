

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ce391c00.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js"];
export const stylesheets = [];
export const fonts = [];
