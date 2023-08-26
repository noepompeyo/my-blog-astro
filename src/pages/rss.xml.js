import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Mi blog javascript',
    description: 'Compartir mis aprendizahes sobre programacion',
    site: 'https://my-blog-js-tips.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}