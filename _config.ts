import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import favicon from "lume/plugins/favicon.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import transform_images from "lume/plugins/transform_images.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
import svgo from "lume/plugins/svgo.ts";
import postcss from "lume/plugins/postcss.ts";

import config from './tailwind.config.js';

const site = lume({
    src: "./src",
});

site.use(base_path());
site.use(esbuild());
site.use(favicon({
    input: "/favicon.png",
}));
site.use(jsx_preact());
site.use(metas());
// site.use(minify_html());
// site.use(multilanguage({
//     languages: ["uk"], // Available languages
//     defaultLanguage: "uk", // The default language
// }));
// site.use(nav());
site.use(sitemap());
site.use(picture());
site.use(transform_images({
    cache: false, // Disable cache
}));
site.use(tailwindcss(config));
site.use(relative_urls());
site.use(resolve_urls());
// site.use(source_maps());
site.use(svgo());
site.use(postcss());



const githubRepo = 'olena195/novel-dottore';
let cache: string|null = null
async function resolveLatestRelease(): Promise<string> {
    if (cache) {
        return cache;
    }

    const response = await fetch(`https://api.github.com/repos/${githubRepo}/releases/latest`)
    if (!response.ok) {
        throw new Error(`Can't load information about the latest release from ${githubRepo} repository`, {cause: response.clone()})
    }

    const release: { assets: { browser_download_url: string, name: string }[] } = await response.json()
    const asset = release.assets.find(a => a.name.endsWith('pc.zip'))
    if (!asset) {
        throw new Error(`*pc.zip asset wasn't found in the latest release in ${githubRepo} repository`)
    }
    cache = asset.browser_download_url;
    return cache;
}
site.data('latestRelease', await resolveLatestRelease())

export default site;
