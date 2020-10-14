"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../chunks/index-1b2c217d.js");const e={code:"article.svelte-k6yna4.svelte-k6yna4{position:relative;padding:0 0 0 4em;margin:0 0 1.5em 0}h2.svelte-k6yna4.svelte-k6yna4{font-size:1em;font-weight:500;margin:0 0 0.5em 0;color:var(--fg)}h2.svelte-k6yna4 a.svelte-k6yna4{text-decoration:none}p.svelte-k6yna4.svelte-k6yna4{font-size:0.8em;color:var(--fg-light);margin:0;font-weight:300}small.svelte-k6yna4.svelte-k6yna4{color:var(--fg-light);font-weight:300}.index.svelte-k6yna4.svelte-k6yna4{position:absolute;font-size:1.6em;font-weight:200;color:var(--fg-light);left:0.2em;top:0;text-align:right;width:0.75em;line-height:1}",map:'{"version":3,"file":"_ItemSummary.svelte","sources":["_ItemSummary.svelte"],"sourcesContent":["<script>\\n\\texport let item;\\n\\texport let index;\\n<\/script>\\n\\n<style>\\n\\tarticle {\\n\\t\\tposition: relative;\\n\\t\\tpadding: 0 0 0 4em;\\n\\t\\tmargin: 0 0 1.5em 0;\\n\\t}\\n\\n\\th2 {\\n\\t\\tfont-size: 1em;\\n\\t\\tfont-weight: 500;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t\\tcolor: var(--fg);\\n\\t}\\n\\n\\th2 a {\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-size: 0.8em;\\n\\t\\tcolor: var(--fg-light);\\n\\t\\tmargin: 0;\\n\\t\\tfont-weight: 300;\\n\\t}\\n\\n\\tsmall {\\n\\t\\tcolor: var(--fg-light);\\n\\t\\tfont-weight: 300;\\n\\t}\\n\\n\\t.index {\\n\\t\\tposition: absolute;\\n\\t\\tfont-size: 1.6em;\\n\\t\\tfont-weight: 200;\\n\\t\\tcolor: var(--fg-light);\\n\\t\\tleft: 0.2em;\\n\\t\\ttop: 0;\\n\\t\\ttext-align: right;\\n\\t\\twidth: 0.75em;\\n\\t\\tline-height: 1;\\n\\t}\\n</style>\\n\\n<article>\\n\\t<h2>\\n\\t\\t<a href={item.domain ? item.url : `/item/${item.id}`}>{item.title} {#if item.domain}<small>({item.domain})</small>{/if}</a>\\n\\t</h2>\\n\\n\\t{#if item.type === \'job\'}\\n\\t\\t<p>{item.time_ago}</p>\\n\\t{:else}\\n\\t\\t<p>\\n\\t\\t\\t{item.points} points by\\n\\t\\t\\t<a rel=\\"prefetch\\" href=\\"/user/{item.user}\\">{item.user}</a> {item.time_ago}\\n\\t\\t\\t | <a rel=\\"prefetch\\" href=\\"/item/{item.id}\\">{item.comments_count} {item.comments_count === 1 ? \'comment\' : \'comments\'}</a>\\n\\t\\t</p>\\n\\t{/if}\\n\\n\\t<span class=\\"index\\">{index}</span>\\n</article>"],"names":[],"mappings":"AAMC,OAAO,4BAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAClB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,EAAE,4BAAC,CAAC,AACH,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACnB,KAAK,CAAE,IAAI,IAAI,CAAC,AACjB,CAAC,AAED,gBAAE,CAAC,CAAC,cAAC,CAAC,AACL,eAAe,CAAE,IAAI,AACtB,CAAC,AAED,CAAC,4BAAC,CAAC,AACF,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,KAAK,4BAAC,CAAC,AACN,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,MAAM,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,IAAI,CAAE,KAAK,CACX,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,MAAM,CACb,WAAW,CAAE,CAAC,AACf,CAAC"}'},A=t.create_ssr_component(((A,n,i,C)=>{let{item:s}=n,{index:a}=n;return void 0===n.item&&i.item&&void 0!==s&&i.item(s),void 0===n.index&&i.index&&void 0!==a&&i.index(a),A.css.add(e),`<article class="svelte-k6yna4"><h2 class="svelte-k6yna4"><a${t.add_attribute("href",s.domain?s.url:"/item/"+s.id,0)} class="svelte-k6yna4">${t.escape(s.title)} ${s.domain?`<small class="svelte-k6yna4">(${t.escape(s.domain)})</small>`:""}</a></h2>\n\n\t${"job"===s.type?`<p class="svelte-k6yna4">${t.escape(s.time_ago)}</p>`:`<p class="svelte-k6yna4">${t.escape(s.points)} points by\n\t\t\t<a rel="prefetch" href="${"/user/"+t.escape(s.user)}">${t.escape(s.user)}</a> ${t.escape(s.time_ago)}\n\t\t\t | <a rel="prefetch" href="${"/item/"+t.escape(s.id)}">${t.escape(s.comments_count)} ${t.escape(1===s.comments_count?"comment":"comments")}</a></p>`}\n\n\t<span class="index svelte-k6yna4">${t.escape(a)}</span></article>`})),n=new Set(["news","newest","show","ask","jobs"]);const i=t.create_ssr_component(((e,n,i,C)=>{let s,a,{page:o}=n,{list:l}=n,{items:r}=n;return void 0===n.page&&i.page&&void 0!==o&&i.page(o),void 0===n.list&&i.list&&void 0!==l&&i.list(l),void 0===n.items&&i.items&&void 0!==r&&i.items(r),s=1+30*(o-1),a=`/${l}/${+o+1}`,`${e.head+=`${e.title="<title>Svelte Hacker News</title>",""}<meta name="description" content="${"Latest Hacker News stories in the "+t.escape(l)+" category"}" data-svelte="svelte-1gjtxnr">`,""}\n\n${t.each(r,((n,i)=>""+(n?"\n\t\t"+t.validate_component(A,"ItemSummary").$$render(e,{item:n,index:s+i},{},{}):"")))}\n\n${a?`<a class="more"${t.add_attribute("href",a,0)}>More...</a>`:""}`}));exports.default=i,exports.preload=async function({params:t}){const e="top"===t.list?"news":"new"===t.list?"newest":t.list;if(!n.has(e))return console.log("invalid"),void this.error(404,"Not found");const A=+t.page,i=await this.fetch(`https://api.hnpwa.com/v0/${e}/${A}.json`);return{page:A,list:e,items:await i.json()}};
//# sourceMappingURL=$list$93_$91page.js.map