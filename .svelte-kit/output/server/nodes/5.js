

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Past/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.d51b9086.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.a370a49a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/5.dbfe671d.css"];
export const fonts = [];
