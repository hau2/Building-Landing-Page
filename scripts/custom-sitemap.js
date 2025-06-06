/* eslint-disable @typescript-eslint/no-require-imports */
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const links = [
  { url: '/vi', changefreq: 'monthly', priority: 1.0 },
  { url: '/vi/about' },
  { url: '/vi/about/foreword' },
  { url: '/vi/about/core-vision' },
  { url: '/vi/about/staff' },
  { url: '/vi/about/award' },
  { url: '/vi/about/customer' },
  { url: '/vi/du-an' },
  { url: '/vi/construction-capacity/our-business-lines' },
  { url: '/vi/construction-capacity/steel-production' },
  { url: '/vi/construction-capacity/construction-gallery' },
  { url: '/vi/tuyen-dung' },
  { url: '/vi/lien-he' },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://binhdoanhcons.vn' });
  const writeStream = createWriteStream(resolve(__dirname, '../public/sitemap.xml'));

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Custom sitemap generated!');
}

generateSitemap().catch(console.error);
