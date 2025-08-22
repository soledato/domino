import { d as decodeKey } from './chunks/astro/server_DPCTEHY0.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_SVAZwt6y.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/","cacheDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/node_modules/.astro/","outDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/dist/","srcDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/src/","publicDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/public/","buildClientDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/dist/client/","buildServerDir":"file:///Users/insolita/Desktop/Copia%20de%20Landing-domino-argentina/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.11.0_@types+node@22.15.21_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AdvantagesCarrousel.DHBATib1.css"},{"type":"external","src":"/_astro/index.C4KsuW7W.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.11.0_@types+node@22.15.21_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/insolita/Desktop/Copia de Landing-domino-argentina/node_modules/.pnpm/astro@5.11.0_@types+node@22.15.21_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_jikFeD_N.mjs","\u0000@astrojs-manifest":"manifest_DzxxztZx.mjs","/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/AdvantagesCarrousel.astro?astro&type=script&index=0&lang.ts":"_astro/AdvantagesCarrousel.astro_astro_type_script_index_0_lang.CFlaRcbA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/icon-arrow.gsK-1E-8.svg","/_astro/logo-blanco.BfwWtV_A.avif","/_astro/icon-x.C4teWdY4.svg","/_astro/Video-traslado-Domino.Bzsoxjzx.webm","/_astro/index.C4KsuW7W.css","/Video-traslado-Domino.webm","/favicon.svg","/isotipo-domino.png","/logo-blanco.png","/manifest.json","/_astro/AdvantagesCarrousel.DHBATib1.css","/_astro/AdvantagesCarrousel.astro_astro_type_script_index_0_lang.CFlaRcbA.js","/iconos/icons8-whatsapp-100.svg","/iconos/icons8-whatsapp-48 2.svg","/iconos/icons8-whatsapp-48.svg","/iconos/wapp.png","/iconos/whatsapp.png","/iconos/whatsapp2.png","/espacios/Tafi-01.avif","/espacios/Tafi-02.avif","/espacios/render1.JPG","/espacios/render2.JPG","/espacios/render3.JPG","/espacios/render4.png","/espacios/render5.JPG","/espacios/render6.JPG","/content-images/90-dias.avif","/content-images/90-dias.jpg","/content-images/domi-tafi.avif","/content-images/estructura-taller.avif","/content-images/estructura-taller.png","/content-images/firma-sacriste.png","/content-images/logo-01.svg","/content-images/logo-02.svg","/content-images/logo-03.svg","/content-images/logo-04.svg","/content-images/logo-05.svg","/content-images/logo-06.svg","/content-images/logo-07.svg","/content-images/logo-08.svg","/content-images/logo-09.svg","/content-images/logo-10.svg","/content-images/paisaje2.avif","/content-images/render1.svg","/ventajas/diseno.avif","/ventajas/eficiencia-energetica.avif","/ventajas/escalabilidad.avif","/ventajas/financiacion.avif","/ventajas/flexibilidad.avif","/ventajas/flexibilidad.jpeg","/ventajas/inversion-previsible.avif","/ventajas/inversion-previsible.jpg","/ventajas/practicidad.avif","/socios/af.avif","/socios/jpv.avif","/socios/nv.avif","/socios/rb.avif","/_astro/fonts/0a1bb45e509378a9.woff2","/_astro/fonts/19093316cd71053e.woff2","/_astro/fonts/c047c43892eadf45.woff2","/_astro/fonts/cf5d389bfe95f8ba.woff2","/_astro/fonts/d22ec7a146790276.woff2","/_astro/fonts/f840ea9939617dac.woff2","/espacios/renders/render1.JPG","/espacios/renders/render1a-vm.avif","/espacios/renders/render1b-vm.JPG","/espacios/renders/render1b-vm.avif","/espacios/renders/render1c-vm.avif","/espacios/renders/render1d-vm.avif","/espacios/renders/render1e-vm.avif","/espacios/renders/render1f-vm.avif","/espacios/renders/render1g-vm.avif","/espacios/renders/render1h-vm.avif","/espacios/renders/render22a.avif","/espacios/renders/render22b.avif","/espacios/renders/render23a.avif","/espacios/renders/render23b.avif","/espacios/renders/render23c.avif","/espacios/renders/render24.avif","/espacios/renders/render26.avif","/espacios/renders/render27.avif","/espacios/renders/render29.avif","/espacios/renders/render2a-ofi.avif","/espacios/renders/render2b-ofi.avif","/espacios/renders/render2c-ofi.avif","/espacios/renders/render2d-ofi.avif","/espacios/renders/render2e-ofi.avif","/espacios/renders/render2f-ofi.avif","/espacios/renders/render2g-ofi.avif","/espacios/renders/render30.avif","/espacios/renders/render31.avif","/espacios/renders/render32.avif","/espacios/renders/render34.avif","/espacios/renders/render35.avif","/espacios/renders/render37.avif","/espacios/renders/render39.avif","/espacios/renders/render3a.avif","/espacios/renders/render3b.avif","/espacios/renders/render3c.avif","/espacios/renders/render3e.avif","/espacios/renders/render3f.avif","/espacios/renders/render6a.avif","/espacios/renders/render6b.avif","/espacios/renders/render6c.avif","/espacios/renders/render7a.avif","/espacios/renders/render7b.avif","/espacios/renders/render7c.avif","/espacios/renders/render7d.avif","/espacios/renders/render7e.avif","/espacios/renders/render8a-estudio-gimnasio.avif","/espacios/renders/render8b-estudio-gimnasio.avif","/espacios/renders/render9.avif","/espacios/renders/render9b.avif","/content-images/soluciones/Rapidez.png","/content-images/soluciones/Rapidez.svg","/content-images/soluciones/accesible-ok.png","/content-images/soluciones/accesibles.avif","/content-images/soluciones/eficiente-ok.png","/content-images/soluciones/eficientes.avif","/content-images/soluciones/estetica-ok.png","/content-images/soluciones/esteticas.avif","/content-images/soluciones/rapida-ok.png","/content-images/soluciones/rapida.png","/content-images/soluciones/rapidas-ok.png","/content-images/soluciones/rapidas.avif","/content-images/soluciones/rapidasok.png","/content-images/soluciones/segura-ok.png","/content-images/soluciones/seguras.avif","/content-images/soluciones/sostenible-ok.png","/content-images/soluciones/sostenibles.avif"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vEiIZloxm0qMjum3XchQcaH+YfEyTYT9nnSinqmT+TE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
