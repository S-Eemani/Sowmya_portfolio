

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a154d215.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js","_app/immutable/chunks/singletons.7955f56c.js"];
export const stylesheets = [];
export const fonts = [];
