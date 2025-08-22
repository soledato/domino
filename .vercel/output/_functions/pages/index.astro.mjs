import { j as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, k as createAstro, m as maybeRenderHead, q as renderComponent, n as addAttribute, v as renderHead, w as renderSlot, x as renderScript } from '../chunks/astro/server_DPCTEHY0.mjs';
/* empty css                                 */
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Font, c as $$Image } from '../chunks/_astro_assets_B_P1juac.mjs';
export { renderers } from '../renderers.mjs';

const bg_video = "/_astro/Video-traslado-Domino.Bzsoxjzx.webm";

const title = "Dominó. Espacios sin límites.";
const description = "Fabricamos espacios que se pueden trasladar desde Tucumán a todo el país.";
const base_url = "";
const demo = {"title":"Contacto","content":"<strong>Si estás interesado en DOMINÓ</strong> hacé clic abajo y llená el formulario así nos ponemos en contacto con vos.","cta":"Escribinos"};
const theme_color = "#18181b";
const nav = [{"order":"1","title":"Productos","link":"/#productos"},{"order":"2","title":"Ventajas","link":"/#ventajas"},{"order":"3","title":"Espacios","link":"/#espacios"},{"order":"4","title":"Experiencias","link":"/#experiencias"},{"order":"5","title":"Preguntas frecuentes","link":"/#preguntas-frecuentes"},{"order":"6","title":"Sobre nosotros","link":"/#nosotros"}];
const social_links = [{"title":"Instagram","link":"https://www.instagram.com/domino_argentina/"}];
const global_settings = {
  title,
  description,
  base_url,
  demo,
  theme_color,
  nav,
  social_links,
};

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const X = createSvgComponent({"meta":{"src":"/_astro/icon-x.C4teWdY4.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\n  <path fill=\"currentColor\" d=\"m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z\" />\n"});

const $$Astro$d = createAstro();
const $$DialogModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$DialogModal;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog id="demo" closedby="any" class="fixed inset-0 bg-bs-surface-0 m-auto z-50 p-6 md:p-12 rounded-xl w-full max-w-[95%] md:max-w-lg" data-astro-cid-qaiqjvyv> <!-- Form --> <form method="dialog" class="flex gap-6 flex-col" data-astro-cid-qaiqjvyv> <!-- Header --> <h2 class="text-2xl flex justify-between items-center gap-4" data-astro-cid-qaiqjvyv> <span data-astro-cid-qaiqjvyv>${content.title}</span> <button onclick="this.closest('dialog').close('close')" aria-label="Close" class="bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10" data-astro-cid-qaiqjvyv> ${renderComponent($$result, "X", X, { "class": "scale-75 opacity-75", "width": "32", "height": "32", "data-astro-cid-qaiqjvyv": true })} </button> </h2> <!-- Content --> <div class="flex flex-col gap-4" data-astro-cid-qaiqjvyv> <!-- Intro --> <div class="bs-body-text mb-3" data-astro-cid-qaiqjvyv>${unescapeHTML(content.content)}</div> <!-- Submit --> <a href="https://docs.google.com/forms/d/14v6t88B0UH6zW-zUXcEDiwpCvLPEee9ieEgappAHshI/" target="_blank" data-astro-cid-qaiqjvyv> <div class="flex justify-center bg-amber-400/80 rounded-lg p-4 hover:bg-white/50 transition-colors duration-300 ease-in-out bs-btn " data-astro-cid-qaiqjvyv> <h1 data-astro-cid-qaiqjvyv>ESCRIBINOS</h1> </div> </a> </div> </form> </dialog> `;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/DialogModal.astro", void 0);

const $$Astro$c = createAstro();
const $$FooterMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FooterMain;
  const { settings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="@container bs-container my-24 font-semibold text-bs-foreground-dark [&_a]:hover:text-bs-foreground-light [&_a]:transition-color [&_a]:duration-150" id="contact"> <!-- Wrapper --> <div class="bg-bs-surface-2 p-6 md:p-16 rounded-xl grid md:grid-cols-2 gap-8"> <!-- Left col --> <div class="relative flex flex-col gap-8 md:gap-0 justify-between text-bs-foreground-light"> <!-- Logo --> <a class="flex group" href="#top" aria-label="Back to top"> <img src="/src/assets/theme-images/logo-blanco.avif" class="group-hover:-rotate-360 group-hover:scale-80 transition-transform ease-bs-spring duration-1000" height="20%" width="20%"> </a> <!-- CTA Button --> <div> <button type="button" class="min-w-32 bs-btn block bg-bs-surface-3" onclick="demo.showModal()"> <a href="#form">
Contacto
</a> </button> </div> <!--           
          { settings.demo.cta } --> </div> <!-- Right col --> <div class="flex gap-10 md:gap-2 lg:gap-20 md:justify-end [&_a]:block md:[&_a]:px-5 [&_a]:py-2"> <!-- Nav --> <nav class="flex flex-col"> ${settings.nav.sort((a, b) => a.order.localeCompare(b.order)).map(
    (item) => renderTemplate`<a${addAttribute(item.link, "href")}> ${item.title} </a>`
  )} </nav> </div> </div> <!-- Colophon --> <aside class="bs-container"> <nav class="flex gap-4 justify-center pt-16 md:pt-24 text-xs"> <!-- Copyright/Date --> <a href="">by Domino Argentina® </a> </nav> </aside> </footer>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/FooterMain.astro", void 0);

const $$Astro$b = createAstro();
const $$HeaderMain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HeaderMain;
  const { settings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="wrapper bg-loop font-semibold flex items-center text-white top-0 0 w-full justify-between" id="landing-header" id="landing-header"> <!-- Wrapper --> <div class="bs-container py-6 flex px-6 md:justify-between justify-center items-center"> <!-- Logo --> <a class="md:flex xl:min-w-32 group " href="/"${addAttribute(settings.title + " - Home", "aria-label")}> <img class="hidden md:w-20 h-auto w-12 " src="/isotipo-domino.png" height="48" width="70" alt=""> </a> <!-- Nav --> <nav class="hidden col-span-6 md:flex mx-auto self-stretch lg:gap-2"> ${settings.nav.sort((a, b) => a.order.localeCompare(b.order)).map(
    (item) => renderTemplate`<a class="bs-btn !bg-transparent before:translate-y-full hover:before:translate-y-0 hover:bg-amber-400"${addAttribute(item.link, "href")}> ${item.title} </a>`
  )} </nav> <!-- Instagram --> <a href="https://www.instagram.com/domino_argentina/" target="_blank" rel="noopener noreferrer"> <button type="button" data-twe-ripple-init data-twe-ripple-color="light" class=" rounded ml-4 mr-4  bg-[#f4b431]/80 px-6 py-2.5 text-xs font-medium uppercase leading-normal  text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg md:mr-4 bs-btn"> <span class="md:[&>svg]:h-6 md:[&>svg]:w-6  [&>svg]:h-4 [&>svg]:w-4 flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path> </svg> </span> </button> </a> <!-- CTA --> <button type="button" class="min-w-32 bs-btn h-12 md:h-14 justify-center" onclick="demo.showModal()"> ${settings.demo.title} </button> </div> </header>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/HeaderMain.astro", void 0);

const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="floating-icon" data-astro-cid-w7tvgi5a> <a href="https://api.whatsapp.com/send?phone=5493814181049" target="_blank" data-astro-cid-w7tvgi5a> <img src="../../iconos/whatsapp2.png" class="md:m-8 m-2 md:w-14 xl:w-16 w-12 hover:scale-[1.2] transition-all " alt="whatsapp-icon" data-astro-cid-w7tvgi5a> </a> <!-- </div> --> </div>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/Whatsapp.astro", void 0);

const $$Astro$a = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><!-- <meta name="viewport" content="width=device-width" /> --><meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0,"><title>${title ?? global_settings.title}</title><link rel="icon" type="image" href="/isotipo-domino.png
    "><link rel="manifest" href="/manifest.json"><meta name="description"${addAttribute(description ?? global_settings.description, "content")}><meta name="theme-color"${addAttribute(global_settings.theme_color, "content")}><meta property="og:title"${addAttribute(title ?? global_settings.title, "content")}><meta property="og:description"${addAttribute(description ?? global_settings.description, "content")}>${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter", "preload": true })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter-display", "preload": true })}${renderHead()}</head> <body id="top"> <!-- Skip link --> <a class="fixed -top-20 focus-visible:top-0 p-3 bg-black/90 transition-all duration-300" href="#main">Skip to content</a> <!-- bg image --> <video${addAttribute(bg_video, "src")} autoplay muted loop${addAttribute(1080, "height")}${addAttribute(1920, "width")} class="absolute min-h-svh object-cover inset-0 bottom-auto -z-1 w-full h-auto opacity-50 mask-b-from-90%"></video> <!-- Header --> ${renderComponent($$result, "HeaderMain", $$HeaderMain, { "settings": global_settings })} ${renderComponent($$result, "Whatsapp", $$Whatsapp, {})} <!-- Main slot --> <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> ${renderComponent($$result, "FooterMain", $$FooterMain, { "settings": global_settings })} <!-- Demo dialog modal --> ${renderComponent($$result, "DialogModal", $$DialogModal, { "id": "demo", "content": global_settings.demo })}</body></html>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$CardProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CardProduct;
  const { product } = Astro2.props;
  return renderTemplate`<!-- Wrapper -->${maybeRenderHead()}<div class="group @container"> <!-- Case study --> <article${addAttribute(["relative isolate flex h-full w-full gap-6 overflow-hidden rounded-xl pt-[20rem] @md:pt-[28rem] @xl:justify-end @4xl:pt-0", product.bg], "class:list")}> <img${addAttribute(product.image, "src")}${addAttribute(product.image_alt, "alt")} class="drop-shadow-[0_100px_100px_rgba(0,0,0,0.5)] absolute top-[4cqb] left-8 mx-auto w-[90cqi] rounded-xl  @4xl:w-[60cqi] group-hover:scale-105 transition-transform duration-3000 ease-bs-spring transform-gpu translate-y-6" loading="lazy" height="1024" width="768"> <!-- Content --> <div class="z-10 flex h-full w-full flex-col gap-6 bg-bs-surface-0/50 backdrop-blur-3xl p-6 @4xl:w-1/2 @4xl:p-20"> <!-- Header --> <header class="flex flex-col gap-3"> <!-- Title --> <div${addAttribute(["text-xs uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r", product.bg], "class:list")}>${unescapeHTML(product.sector)}</div> <!-- Tag --> <h2 class="bs-h2">${unescapeHTML(product.title)}</h2> </header> <!-- Intro --> <div class="bs-body-text flex-grow text-balance">${unescapeHTML(product.content)}</div> </div> </article> </div>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/CardProduct.astro", void 0);

const $$Astro$8 = createAstro();
const $$ProductSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProductSection;
  const { title, product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bs-container bs-mt-lg" id="productos"> <!-- Header --> ${title && renderTemplate`<h2 class="bs-h2 text-center md:text-left">${title}</h2>`} <!-- Case Study 1 --> <div class="bs-mt-md"> ${renderComponent($$result, "CardProduct", $$CardProduct, { "product": product[0] })} </div> <!-- Case studies --> <div class="mt-8 grid lg:grid-cols-2 gap-8"> ${renderComponent($$result, "CardProduct", $$CardProduct, { "product": product[1] })} ${renderComponent($$result, "CardProduct", $$CardProduct, { "product": product[2] })} </div> </section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/ProductSection.astro", void 0);

const Arrow = createSvgComponent({"meta":{"src":"/_astro/icon-arrow.gsK-1E-8.svg","width":16,"height":25,"format":"svg"},"attributes":{"width":"16","height":"25","viewBox":"0 0 16 25","fill":"none"},"children":"<path d=\"M14.4483 0.871166C14.6476 1.07002 14.8057 1.30621 14.9135 1.56624C15.0214 1.82626 15.0769 2.105 15.0769 2.38651C15.0769 2.66802 15.0214 2.94676 14.9135 3.20678C14.8057 3.4668 14.6476 3.703 14.4483 3.90185L6.10855 12.2416L14.4483 20.5814C14.6473 20.7804 14.8052 21.0166 14.9129 21.2766C15.0206 21.5366 15.076 21.8153 15.076 22.0967C15.076 22.3782 15.0206 22.6568 14.9129 22.9168C14.8052 23.1768 14.6473 23.4131 14.4483 23.6121C14.2493 23.8111 14.0131 23.9689 13.7531 24.0766C13.4931 24.1843 13.2144 24.2397 12.933 24.2397C12.6515 24.2397 12.3729 24.1843 12.1129 24.0766C11.8529 23.9689 11.6166 23.8111 11.4176 23.6121L1.55177 13.7462C1.35251 13.5474 1.19443 13.3112 1.08657 13.0511C0.978706 12.7911 0.923186 12.5124 0.923186 12.2309C0.923186 11.9494 0.978706 11.6706 1.08657 11.4106C1.19443 11.1506 1.35251 10.9144 1.55177 10.7155L11.4176 0.849671C12.2344 0.03289 13.61 0.0328905 14.4483 0.871166Z\" fill=\"currentColor\"></path> "});

const $$Astro$7 = createAstro();
const $$DetailsAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$DetailsAccordion;
  const { question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details name="faq" class="group bg-bs-surface-2 hover:bg-bs-surface-3 open:bg-bs-surface-3 transition-colors w-full shadow-md rounded-lg bs-h3" data-astro-cid-iavv5xcf> <!-- Summary --> <summary class="flex gap-3 justify-between items-center p-6 py-5" data-astro-cid-iavv5xcf> <!-- Title --> <span class="select-none" data-astro-cid-iavv5xcf>${unescapeHTML(question)}</span> <!-- Icon --> <span data-astro-cid-iavv5xcf> ${renderComponent($$result, "Arrow", Arrow, { "class": "opacity-60 h-4 w-4 transition -rotate-90 group-open:rotate-90 ease-bs-bounce duration-1000", "height": "16", "width": "25", "data-astro-cid-iavv5xcf": true })} </span> </summary> <!-- Content --> <div class="anim-wrapper max-w-none" data-astro-cid-iavv5xcf> <div class="p-6 font-normal md:font-medium text-2x1 md:text-xl " data-astro-cid-iavv5xcf>${unescapeHTML(answer)}</div> </div> </details> `;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/DetailsAccordion.astro", void 0);

const $$Astro$6 = createAstro();
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const { title, faq } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bs-container bs-mt-lg grid" id="preguntas-frecuentes"> <!-- Title --> ${title && renderTemplate`<h2 class="bs-h2 text-center md:text-left">${unescapeHTML(title)}</h2>`} <!-- FAQ --> <div class="grid gap-2 bs-mt-sm"> <!-- Item --> ${faq.map(
    (item) => renderTemplate`${renderComponent($$result, "DetailsAccordion", $$DetailsAccordion, { "question": item.question, "answer": item.answer })}`
  )} </div> </section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/FaqSection.astro", void 0);

const $$Astro$5 = createAstro();
const $$AdvantagesCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AdvantagesCarrousel;
  const { title, advantages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="ventajas" data-astro-cid-brtxpz42> <!-- Header --> <header class="bs-container flex items-center justify-between mt-20 " data-astro-cid-brtxpz42> ${title && renderTemplate`<h2 class="bs-h2 text-center md:text-left" data-astro-cid-brtxpz42>${title}</h2>`} <!-- Buttons --> <nav class="bs-st-button-wrapper flex justify-center gap-4" data-astro-cid-brtxpz42> <!-- Prev --> <button aria-label="Previous slide" class="js-fc-btn-prev group bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12" data-astro-cid-brtxpz42> ${renderComponent($$result, "Arrow", Arrow, { "class": "opacity-60 h-4 w-4 -translate-x-[2px] group-active:translate-y-[1px]", "height": "16", "width": "25", "data-astro-cid-brtxpz42": true })} </button> <!-- Next --> <button aria-label="Next slide" class="js-fc-btn-next group bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 -scale-x-100" data-astro-cid-brtxpz42> ${renderComponent($$result, "Arrow", Arrow, { "class": "opacity-60 h-4 w-4 -translate-x-[2px] group-active:translate-y-[1px]", "height": "16", "width": "25", "data-astro-cid-brtxpz42": true })} </button> </nav> </header> <!-- Slides --> <div class="js-fc-swiper swiper select-none bs-mt-md overflow-x-hidden" data-astro-cid-brtxpz42> <div class="swiper-wrapper" data-astro-cid-brtxpz42> ${advantages.map(
    (item) => (
      // Slides
      renderTemplate`<div class="swiper-slide bg-bs-surface-0 border border-bs-surface-3 rounded-xl overflow-hidden !h-auto" data-astro-cid-brtxpz42> <figure class="flex flex-col gap-6 isolate min-h-[50svh] md:min-h-[40rem] h-full w-auto" data-astro-cid-brtxpz42>  <img${addAttribute(item.image, "src")}${addAttribute(item.image_alt, "alt")} loading="lazy" class=" opacity-20 md:opacity-80 rounded-xl  overflow-hidden w-full h-full object-cover object-left absolute inset-0" data-astro-cid-brtxpz42>  <div class="hidden md:block absolute rounded-xl overflow-hidden w-full h-full object-cover object-left inset-0 bg-gradient-to-r from-bs-surface-0/90 via-bs-surface-0/60" data-astro-cid-brtxpz42></div>  <figcaption class="z-10 p-6 sm:p-10 md:p-20 max-w-xl flex flex-col gap-6 h-full" data-astro-cid-brtxpz42>  <h2 class="bs-h2" data-astro-cid-brtxpz42>${unescapeHTML(item.title)}</h2>  <div class="bs-body-text text-pretty flex-1" data-astro-cid-brtxpz42>${unescapeHTML(item.content)}</div> </figcaption> </figure> </div>`
    )
  )} </div> </div> </section> ${renderScript($$result, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/AdvantagesCarrousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/AdvantagesCarrousel.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo-blanco.BfwWtV_A.avif","width":1590,"height":379,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/assets/theme-images/logo-blanco.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { settings, title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bs-container py-8 mb-10 flex flex-col items-center mx-auto text-center"> <!-- Content --> <div class="flex flex-col lg:max-w-lg w-full py-8 mb-60"> <!-- Title --> <h1 class="bs-h1">${unescapeHTML(title)}</h1> <h6>${unescapeHTML(content)}</h6> <!-- Content
    <div class="bs-body-text xl:text-xl flex flex-col gap-4 [&_p]:last:text-bs-foreground-dark place-content-center" set:html={ content } /> --> <!-- Image --> <div class="flex place-content-center mt-10 lg:mt-2 mb-40 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "format": "png", "quality": "high", "alt": "Cami\xF3n que traslada un m\xF3dulo Domin\xF3 por un camino de monta\xF1a", "loading": "eager" })} <div></div> </div> </div></section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/HeroSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$QuoteSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$QuoteSection;
  const { content, image, cite, role } = Astro2.props;
  return renderTemplate`<!-- Quote -->${maybeRenderHead()}<blockquote class="bs-container bs-mt-lg font-display text-3xl md:text-5xl lg:text-6xl flex flex-col gap-6" id="quote"> <!-- Text --> <div class="text-bs-foreground-dark bs-st-quote [&_strong]:font-normal font-display gap-8">${unescapeHTML(content)}</div> <!-- Cite --> <cite class="not-italic flex gap-4 align-bottom items-left flex-col pt-6"> <img${addAttribute(image, "src")} class="h-20 w-44" alt="" width="128" height="128" loading="lazy"> <div class="text-bs-foreground-light bs-h3"> ${cite} <span class="text-bs-foreground-dark">${role}</span> </div> </cite> </blockquote> `;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/QuoteSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const { title, subtitle, testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bs-container bs-mt-lg" id="experiencias"> <!-- Title --> ${title && renderTemplate`<h2 class="bs-h2 text-center md:text-left">${title}</h2>`} ${subtitle && renderTemplate`<h3 class="bs-h3 text-center md:text-left  text-[#f4b431]">${subtitle}</h3>`} <!-- Testimonials --> <div class="group bs-mt-md grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 place-content-center gap-4"> <!-- Quote --> ${testimonials.map(
    (item) => renderTemplate`<blockquote${addAttribute(["group-hover:opacity-75 hover:opacity-100 duration-300 p-3 md:p-5 flex flex-col gap-3 justify-between border rounded-md bg-bs-surface-2 border-bs-surface-3 transition-all grid-flow-dense ", item.quote.length > 100 ? "lg:col-span-2" : ""], "class:list")}> <!-- Text --> <p${addAttribute(["text-sm lg:text-lg", item.quote.length > 100 ? "line-clamp-4 lg:line-clamp-none" : ""], "class:list")}>${unescapeHTML(item.quote)}</p> <!-- Cite --> <a${addAttribute(item.link, "href")} target="_blank"> <cite class="not-italic text-bs-foreground-dark text-sm font-semibold">@${item.handle}</cite> </a> </blockquote>`
  )} </div> </section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/TestimonialsSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$Espacios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Espacios;
  const { title, espacios } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section title="espacios" class="second-section text-center relative " data-header-color="red" id="espacios"> <header class="bs-container bs-mt-lg"> ${title && renderTemplate`<h2 class="bs-h2 text-center md:text-left">${title}</h2>`} <main class="relative z-10 flex flex-1 flex-col"> <div class="relative overflow-hidden gap-6"> <div class="grid-container pt-10 pb-28 overflow-hidden"> <section> <div class=" gap-6 md:gap-10 grid md:grid-cols-2 lg:grid-cols-2 mt-6"> ${espacios.map(
    (item) => renderTemplate`<article class=" panel relative flex rounded-2xl min-w-0 flex-col text-astro-gray-200 transition-transform duration-300 ease-out hover:scale-[1.03]"> <img id="image"${addAttribute(item.link, "src")} alt="" loading="lazy" class="aspect-video w-full object-cover rounded-2xl relative"> <p class="bg-black/10 lg:opacity-0 lg:hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-baseline-last lg:text-lg font-extralight p-2 text-white hover:bg-black/20 lg:font-semibold"> ${item.content} </p> </article>`
  )} </div> </section> </div> </div> </main> </header></section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/Espacios.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { title, content, clients, about } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" class="anim-wrapper bs-container bs-mt-lg grid"> <!-- Title --> ${title && renderTemplate`<h2 class="bs-h2 text-left">${unescapeHTML(title)}</h2>`} ${content && renderTemplate`<p class="pt-6 bs-text text-left text-sm lg:text-lg line-clamp-4 lg:line-clamp-none">${unescapeHTML(content)}</p>`} <!-- Logos --> <div class="bs-mt-md grid grid-cols-1 md:grid-cols-4 gap-4 "> <!-- Logo link --> ${about.map(
    (item) => renderTemplate`<div class="p-4 bg-bs-surface-2/70 hover:translate-y-7 hover:translate-x-7 gap-4 align-bottom items-left flex-col md:hover:scale-[1.3] ease-bs-bounce transition-all duration-1000 group md:hover:bg-black/70"> <div class="flex flex-col items-left justify-center gap-2 "> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="h-30 w-30 rounded-full mx-auto items-start flex flex-col " width="128" height="128" loading="lazy"> <h1 class="text-[#f4b431] font-semibold text-xl justify-center - align-items-center flex place-content-center group-hover:scale-[1.3] group-hover:-translate-y-1 group-hover:opacity-100  ease-bs-bounce transition-all duration-1000"> ${item.title} </h1> </div> <p class="text-sm text-center p-4"> ${item.description} </p> </div>`
  )} </div> </section>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/About.astro", void 0);

const $$Catalogue = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="anim-wrapper bs-container bs-mt-md grid"> <a href="https://drive.google.com/file/d/1tDvg7gG8iu69jthA3r3l1ZToKTnS1n_e/view?usp=drivesdk" target="_blank"> <h3 class="rounded bs-h3 p-3 text-center  bg-bs-surface-2 hover:bg-bs-surface-3 text-[#f4b431]">DESCARGÁ AQUÍ NUESTRO CATÁLOGO</h3> </a> </div>`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/components/Catalogue.astro", void 0);

const espacios = [
	{
		link: "/espacios/Tafi-02.avif",
		content: "Cocina-comedor con mesa rebatible en el refugio DOMINÓ de Tafí del Valle"
	},
	{
		link: "/espacios/Tafi-01.avif",
		content: "Estar con camas rebatibles en el refugio DOMINÓ en Tafí del Valle"
	},
	{
		link: "/espacios/renders/render7b.avif",
		content: "Módulo DOMINÓ de 3x10 con cubierta verde"
	},
	{
		link: "/espacios/renders/render7c.avif",
		content: "Vista trasera del módulo DOMINÓ de 3x10"
	},
	{
		link: "/espacios/renders/render3a.avif",
		content: "Vista del dormitorio. Módulo DOMINÓ de 3x10"
	},
	{
		link: "/espacios/renders/render3b.avif",
		content: "Living-comedor con sofá en el módulo DOMINÓ de 3x10"
	},
	{
		link: "/espacios/renders/render3c.avif",
		content: "Vista de living con sofá. Módulo DOMINÓ de 3x10"
	},
	{
		link: "/espacios/renders/render3f.avif",
		content: "Cocina y sector de lavado. Módulo DOMINÓ de 3x10"
	},
	{
		link: "/espacios/renders/render2e-ofi.avif",
		content: "Proyecto para un predio industrial. Vista exterior"
	},
	{
		link: "/espacios/renders/render2d-ofi.avif",
		content: "Proyecto para un predio industrial. Otra vista"
	},
	{
		link: "/espacios/renders/render2a-ofi.avif",
		content: "Sala de reuniones y oficina privada. Proyecto para un predio industrial"
	},
	{
		link: "/espacios/renders/render2g-ofi.avif",
		content: "Espacio de coworking. Proyecto para un predio industrial"
	},
	{
		link: "/espacios/renders/render1a-vm.avif",
		content: "Proyecto de complejo de viviendas."
	},
	{
		link: "/espacios/renders/render1c-vm.avif",
		content: "Vista del baño de las viviendas del complejo"
	},
	{
		link: "/espacios/renders/render1g-vm.avif",
		content: "Interior de las viviendas. Sector living"
	},
	{
		link: "/espacios/renders/render1h-vm.avif",
		content: "Interior de las viviendas. Sector de cocina-comedor"
	},
	{
		link: "/espacios/renders/render8a-estudio-gimnasio.avif",
		content: "Proyecto de estudio-gimnasio para anexar a una vivienda"
	},
	{
		link: "/espacios/renders/render8b-estudio-gimnasio.avif",
		content: "Vista interior del estudio-gimnasio"
	},
	{
		link: "/espacios/renders/render6a.avif",
		content: "Proyecto de baños públicos en San Miguel de Tucumán. Vista exterior"
	},
	{
		link: "/espacios/renders/render6c.avif",
		content: "Proyecto de baños públicos en San Miguel de Tucumán. Vista interior"
	},
	{
		link: "/espacios/renders/render9.avif",
		content: "Proyecto de vivienda realizado con la combinación de 3 módulos DOMINÓ"
	},
	{
		link: "/espacios/renders/render9b.avif",
		content: "Vivienda realizada con la combinación de 3 módulos DOMINÓ. Otra vista"
	},
	{
		link: "/espacios/renders/render22b.avif",
		content: "Módulo DOMINÓ de 3x10 con revestimiento alternativo"
	},
	{
		link: "/espacios/renders/render22a.avif",
		content: "Módulo DOMINÓ de 3x10 con revestimiento alternativo. Otra vista"
	},
	{
		link: "/espacios/renders/render31.avif",
		content: "Módulo DOMINÓ de 3x10 con revestimiento alternativo y cubierta verde"
	},
	{
		link: "/espacios/renders/render27.avif",
		content: "Módulo DOMINÓ de 3x10 con revestimiento alternativo y cubierta verde. Vista trasera"
	}
];

const product = [
	{
		title: "Hay un DOMINÓ para necesidad y para cada sueño.",
		sector: "¿Por qué elegirnos?",
		content: "<strong>DOMINÓ es tan ilimitado</strong> que sirve del mismo modo al usuario final como al inversor <br><br>Nos adaptamos a todos los presupuestos: nuestros módulos son una opción tanto para quien puede pagar sólo la estructura y equiparlo en el tiempo, como para quien quiere mudarse y empezar a disfrutarlo inmediatamente.",
		image: "/content-images/paisaje2.avif",
		image_alt: "Módulo Dominó en Tafí del Valle",
		bg: "bg-gradient-to-r from-[#a9abae] to-[#a9abae]"
	},
	{
		title: "ARQUITECTURA MODULAR",
		sector: "Bienes",
		content: " Construimos en 90 días espacios versátiles con fines múltiples: viviendas, oficinas, locales comerciales, depósitos, instalaciones turísticas, y todo lo que te imagines, desde un barrio hasta un centro de compras.",
		image: "/content-images/domi-tafi.avif",
		image_alt: "primer plano de un módulo Dominó ya instalado",
		bg: "bg-gradient-to-r from-[#a9abae] to-[#a9abae]"
	},
	{
		title: "SOLUCIONES A MEDIDA",
		sector: "Servicios",
		content: "Diseñamos, trasladamos e instalamos nuestros DOMINÓ® en función de los requerimientos específicos de cada proyecto. Ofrecemos un servicio integral y creativo para que realmente haya espacios sin límites.",
		image: "/content-images/estructura-taller.avif",
		image_alt: "estructura metálica de un módulo Dominó en construcción",
		bg: "bg-gradient-to-r from-[#a9abae] to-[#a9abae]"
	}
];

const faq = [
	{
		question: "¿Por qué DOMINÓ es una solución inmobiliaria innovadora?",
		answer: "La innovación tiene que ver con el cambio de paradigma: la construcción tradicional es lenta, logísticamente compleja y financieramente incierta. Desde el punto de vista de la inversión, implica hundir en un terreno un monto considerable que ya no podrá separarse de aquel: el inmueble y la construcción pasan a ser la misma cosa, y un cambio de destino conlleva la destrucción de lo edificado. Un DOMINÓ se fabrica, traslada e instala en no más de 100 días. Y nosotros nos encargamos de todas esas etapas, incluidas las obras en el lugar de destino. En ese lapso breve, el cliente establece un espacio confortable para múltiples fines totalmente equipado y, con el tiempo, puede trasladar su DOMINÓ a donde desee con las mismas ventajas de movilidad e instalación iniciales. Esta es la base de la innovación. Descargá nuestro catálogo para conocer más."
	},
	{
		question: "¿Por qué DOMINÓ conviene desde el punto de vista económico?",
		answer: "Porque es un producto con el precio fijo más bajo del mercado para su altísima calidad. El plazo breve de fabricación hace que las condiciones de contratación estén protegidas de los saltos cambiarios e inflacionarios típicos de la Argentina. Sabés lo que DOMINÓ va a costar, sin margen de error. Pagás el anticipo estipulado, y el saldo contra entrega o financiado, evitando así las desagradables sorpresas de la construcción tradicional. Descargá nuestro catálogo para conocer más.",
		link: ""
	},
	{
		question: "¿Se puede pagar DOMINÓ con un crédito bancario?",
		answer: "Sí. DOMINÓ es financiable con préstamos personales. Existen líneas específicas muy ventajosas. Para informarte sobre estas alternativas financieras, escribinos a nuestro WhatsApp."
	},
	{
		question: "¿DOMINÓ admite ensamblajes que amplíen sus dimensiones?",
		answer: "Absolutamente. DOMINÓ está preparado de fábrica para crecer con aberturas que admiten conexiones con otros bloques. Esto permite, por ejemplo, acompañar la evolución de una familia mientras se agranda y se achica, o de un emprendimiento en función de las necesidades de espacio que requiere su crecimiento."
	},
	{
		question: "¿Qué servicios ofrece la empresa DOMINÓ?",
		answer: "La compañía se encarga del proceso completo desde el diseño a medida hasta la instalación en el destino. Además, dispone de una oferta amplia de complementos y accesorios que pueden incrementar las prestaciones del producto, como la incorporación de una cubierta verde; la domotización completa de los artefactos interiores y la producción de mueblería rebatible. Descargá nuestro catálogo para conocer más."
	},
	{
		question: "¿Por qué DOMINÓ abre la puerta a espacios sin límites?",
		answer: "La arquitectura modular permite adaptarse a diferentes necesidades espaciales y de uso. Los módulos pueden combinarse de diversas maneras para crear espacios que se ajusten a las preferencias del cliente, ya sea para vivienda permanente, vacacional o espacio de trabajo. Una experiencia de un año en Tafí del Valle (Tucumán) prueba que este tipo de soluciones son ideales para proyectos de inversión turística. Escuelas, hospitales, comisarías, bases para la operación minera, estaciones de servicio móviles, barrios enteros… todo es compatible con DOMINÓ. ¿Tenés una idea? Escribinos a nuestro WhatsApp. "
	},
	{
		question: "¿DOMINÓ es apto para la circulación por las rutas argentinas?",
		answer: "Sí. El producto fue diseñado para poder moverse por el país con un equipo de acarreo simple, que disminuye sensiblemente los costos. Más allá del transporte, DOMINÓ presenta condiciones estructurales para adaptarse a las diferentes condiciones climáticas de la Argentina desde La Quiaca hasta Tierra del Fuego. Ello hace a su durabilidad, calidad, sustentabilidad y, también, posibilidades de reventa."
	},
	{
		question: "¿DOMINÓ viene con manual de uso y garantía?",
		answer: "Sí. La característica industrial de DOMINÓ posibilita la estandarización y el control de los procesos. Esta información queda plasmada en un manual que los adquirentes reciben junto a su unidad. De igual modo, DOMINÓ tiene una garantía de fábrica de dos años de duración desde el momento de la instalación. Descargá nuestro catálogo para conocer más."
	},
	{
		question: "¿Se puede visitar un DOMINÓ instalado y listo para usar?",
		answer: "Sí. Hay dos espacios disponibles: uno en Bariloche (Río Negro) y otro en Tafí del Valle (Tucumán). Ambas unidades también pueden ser alquiladas en el supuesto de estadías más largas. Para coordinar una visita, escribinos a nuestro WhatsApp."
	}
];

const advantages = [
	{
		title: "Inversión previsible",
		content: "En Dominó tenemos la mejor relación calidad-precio del mercado. El costo es preciso y llave en mano, sin sorpresas.",
		image: "/ventajas/inversion-previsible.avif",
		alt: "Módulo DOMINÓ en Tafí del Valle, Tucumán"
	},
	{
		title: "Flexibilidad",
		content: "Hay un Dominó para cada función y necesidad. Desde un módulo autónomo (casa, tienda, glamping, oficina, etcétera) hasta un complejo de departamentos en Vaca Muerta fabricado mediante el ensamblaje de varias unidades.",
		image: "/ventajas/flexibilidad.avif",
		alt: "Proyecto de un complejo de viviendas hecho con módulos DOMINÓ"
	},
	{
		title: "Practicidad",
		content: "Resolvemos integralmente el diseño, la construcción, el transporte y la instalación en función de las necesidades.",
		image: "/ventajas/practicidad.avif",
		alt: "Módulo DOMINÓ cargado en un camión durante su traslado"
	},
	{
		title: "Escalabilidad",
		content: "Dominó es un producto 100% escalable; con mantenimiento bajo y que presenta aptitudes inmejorables para proyectos de hotelería y alquileres temporarios.",
		image: "ventajas/escalabilidad.avif",
		alt: "Módulo DOMINÓ sobre un montacargas durante su instalación"
	},
	{
		title: "Financiación",
		content: "Nuestro producto admite diferentes <br>formas de pago y es apto para la <br>financiación bancaria, algo totalmente <br>novedoso en el sector.",
		image: "/ventajas/financiacion.avif",
		alt: "Placa de DOMINÓ con el anuncio de financiación por 72 meses con crédito exclusivo para viviendas industrializadas"
	},
	{
		title: "Diseño",
		content: "Priorizamos la funcionalidad, el confort y la experiencia de uso. Por ejemplo, tenemos la cocina más amplia y completa del mercado. Para ello utilizamos materiales de alta calidad y tecnología de vanguardia. La búsqueda de excelencia estética inspira el diseño interior y exterior de nuestros módulos.",
		image: "/ventajas/diseno.avif",
		alt: "Vista interior del módulo DOMINÓ instalado en Tafí del Valle, Tucumán"
	},
	{
		title: "Eficiencia energética",
		content: "Dominó es reciclable, reutilizable y permite cambios de uso inimaginables. Su revestimientoo externo provee alta eficiencia energética, además de una adecuada insonorización. La instalación elevada sobre el terreno elimina los inconvenientes causados por la humedad. La opción de agregar una cubierta verde y paneles solares mejora aún más estas prestaciones.",
		image: "/ventajas/eficiencia-energetica.avif",
		alt: "Vista de un proyecto de módulo DOMINÓ con cubierta verde"
	}
];

const hero_title = "Fabricamos espacios que se pueden trasladar";
const hero_content = "<p><strong> desde Tucumán a todo el país.</strong></p>";
const advantages_title = "VENTAJAS";
const espacios_title = "ESPACIOS";
const testimonials_title = "EXPERIENCIAS";
const testimonials_subtitle = "Qué dicen de nosotros quienes vivieron la #experienciaDominó en Tafí del Valle ♥";
const product_title = "PRODUCTOS";
const quote_content = "Buscar <strong>la simplicidad</strong> es la eliminación de todo <strong>lo superfluo</strong>, es <strong>tratar de conseguir la síntesis</strong> y justamente lo que caracteriza a la <strong>obra de arte</strong> es su carácter sintético. <strong>Simplificar es integrar energías</strong>.";
const quote_cite = "Arq. Eduardo Sacriste";
const quote_image = "/content-images/firma-sacriste.png";
const faq_title = "PREGUNTAS FRECUENTES";
const about_title = "SOBRE NOSOTROS";
const about_content = "DOMINÓ nace por la iniciativa de cuatro amigos de ofrecer en la región una alternativa de vivienda que se está desarrollando con mucha velocidad en todo el mundo. Es el concepto de 'tiny house' -o casa pequeña-, muy vinculado a un estilo de vida sustentable y en contacto con la naturaleza. Los escasos metros se compensan con prestaciones premium y un alto nivel de equipamiento.";
const home = {
  hero_title,
  hero_content,
  advantages_title,
  espacios_title,
  testimonials_title,
  testimonials_subtitle,
  product_title,
  quote_content,
  quote_cite,
  quote_image,
  faq_title,
  about_title,
  about_content,
};

const testimonials = [
	{
		quote: "Hermosa experiencia, un pequeño espacio con todo lo necesario para disfrutar! Hermoso paisaje por donde se vea.",
		handle: "Ariel Orce",
		link: "https://maps.app.goo.gl/c9PriQkKMYA6HiJ29"
	},
	{
		quote: "Pasamos hermosos días. El Domi conecta tanto  en su interior como en el exterior con la naturaleza y el paisaje de Tafí: Amplias aberturas hacia la visual, la luz natural y el aire puro desde el interior. Sumado a eso, en un espacio reducido está súper bien equipado; no hemos tenido ni un inconveniente con el funcionamiento de los servicios.",
		handle: "Ale Campos Bermudez",
		link: "https://share.google/yjbcyuUooL7QfiCsD"
	},
	{
		quote: "Menos es más es un principio que sugiere que la simplicidad y la reducción pueden llevar a un mayor impacto, eficacia o belleza. Originado en la arquitectura y el diseño, este concepto se ha extendido a diversas áreas como el arte, la filosofía y la vida cotidiana. Implica eliminar elementos innecesarios para enfocarse en lo esencial, buscando la claridad y la funcionalidad. Este concepto aplica a la perfección en DOMINÓ.",
		handle: "Mauro Puigdellivol",
		link: "https://maps.app.goo.gl/s9UTswEu3oW3s3TJA"
	},
	{
		quote: "Pasamos dos noches increíbles en este hospedaje en Tafí del Valle, y la experiencia fue inmejorable. Desde el primer momento nos sentimos muy cómodos, ya que el lugar es súper completo y cuenta con instalaciones de lujo. La limpieza, el confort y la atención fueron excelentes.",
		handle: "Juan Pablo Barilari",
		link: "https://share.google/O6ILBFTDCKb1vtHFt"
	},
	{
		quote: "Excelente lugar ! Muy cómodo y cuenta con todo lo necesario para vivir unos días ahí . Tenes todo! No le falta nada . Hasta podes lavar la ropa . La vista a Tafi del valle es espectacular! Lo mejor es que aceptaron nuestra mascota ! Volvería!",
		handle: "Diego Álvarez",
		link: "https://share.google/2NHhCyVxgS1AyQ5YF"
	},
	{
		quote: "Hermosa experiencia en el Domi. Espacio y comodidad resueltos de manera notable y con detalles espectaculares. Equipado con todo para disfrutar plenamente. A destacar la excelente atención del anfitrión!",
		handle: "Mauro Grezzana",
		link: "https://maps.app.goo.gl/z38H3tM8K7dK3XW58"
	},
	{
		quote: "Excelente servicio, un viaje al futuro en cuanto a tecnologia, confort y versatilidad.",
		handle: "Héctor Gustavo Gallac",
		link: "https://share.google/rwTcSXOX1d59ZdCbZ"
	},
	{
		quote: "Moderno, sustentable y 100% confortable, cada m2 está tan bien aprovechado y con tecnología",
		handle: "Patricia Ribone",
		link: "https://maps.app.goo.gl/pfA6ZmVY4VfkQks89"
	},
	{
		quote: "Es un lugar muy versátil, que combina muy bien su espacio reducido y su tecnología, sin perder la comodidad.",
		handle: "Víctor Montero",
		link: "https://share.google/nVSdhrCIntCpTsdf7"
	}
];

const about = [
	{
		title: "Ricardo Benito",
		image: "/socios/rb.avif",
		description: "Es contador, y tiene a su cargo la gestión comercial y financiera de la empresa. También participa de la búsqueda de nuevos negocios y oportunidades."
	},
	{
		title: "Andrés Fernández",
		image: "/socios/af.avif",
		description: "Es el arquitecto del equipo. Se encarga del diseño de los módulos DOMINÓ de acuerdo a cada proyecto."
	},
	{
		title: "Juan Pablo Vitriú",
		image: "/socios/jpv.avif",
		description: "Es quien está al frente del taller. Supervisa la producción y logística de instalación de los módulos."
	},
	{
		title: "Nicolás Vitriú",
		image: "/socios/nv.avif",
		description: "Está encargado del aprovisionamiento de materiales y el diseño de soluciones constructivas para cada proyecto."
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": global_settings.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "content": home.hero_content, "settings": global_settings, "title": home.hero_title })} ${renderComponent($$result2, "ProductSection", $$ProductSection, { "product": product, "title": home.product_title })} ${renderComponent($$result2, "AdvantagesCarrousel", $$AdvantagesCarrousel, { "advantages": advantages, "title": home.advantages_title })} ${renderComponent($$result2, "QuoteSection", $$QuoteSection, { "cite": home.quote_cite, "content": home.quote_content, "image": home.quote_image })} ${renderComponent($$result2, "Espacios", $$Espacios, { "espacios": espacios, "title": home.espacios_title })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "testimonials": testimonials, "title": home.testimonials_title, "subtitle": home.testimonials_subtitle })} ${renderComponent($$result2, "FaqSection", $$FaqSection, { "faq": faq, "title": home.faq_title })} ${renderComponent($$result2, "Catalogue", $$Catalogue, {})} ${renderComponent($$result2, "About", $$About, { "about": about, "title": home.about_title, "content": home.about_content })} ` })}`;
}, "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/pages/index.astro", void 0);

const $$file = "/Users/insolita/Desktop/Copia de Landing-domino-argentina/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
