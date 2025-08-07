const spriteModules = import.meta.glob('./assets/logos/*.{png,jpg,jpeg,svg}', {
  eager: true, // load immediately (no async)
  import: 'default' // only get the default export (the image URL)
});

export const sprites: Record<string, string> = {};

for (const path in spriteModules) {
  const name = path.split('/').pop()?.split('.')[0] || '';
  console.log(name);
  sprites[name] = spriteModules[path] as string;
}

console.log(sprites);