import{S as e,i as t,s as n,e as a,f as i,h as r,j as s,k as l,g as o,A as c,l as d,F as u,n as m,o as h,u as p,M as g,c as f,y as b,m as y,O as $,a as v,d as w,N as x,t as k,p as S}from"./vendor.8ac32013.js";function z(e,t,n){const a=e.slice();return a[2]=t[n],a}function C(e,t,n){const a=e.slice();return a[5]=t[n][0],a[6]=t[n][1],a}function P(e){let t,n,r,u,m,h,p=e[5]+"",g=e[6]+"";return{c(){t=a("div"),n=a("b"),r=o(p),u=o(":"),m=i(),h=o(g)},m(e,a){s(e,t,a),l(t,n),l(n,r),l(n,u),l(t,m),l(t,h)},p(e,t){1&t&&p!==(p=e[5]+"")&&c(r,p),1&t&&g!==(g=e[6]+"")&&c(h,g)},d(e){e&&d(t)}}}function L(e){let t,n,o,c=Object.entries(e[2]).slice(0,3),m=[];for(let a=0;a<c.length;a+=1)m[a]=P(C(e,c,a));return{c(){t=a("a");for(let e=0;e<m.length;e+=1)m[e].c();n=i(),r(t,"href",o=e[1]("../:id",{id:e[2].id})),r(t,"class","item svelte-1jf2kco")},m(e,a){s(e,t,a);for(let n=0;n<m.length;n+=1)m[n].m(t,null);l(t,n)},p(e,a){if(1&a){let i;for(c=Object.entries(e[2]).slice(0,3),i=0;i<c.length;i+=1){const r=C(e,c,i);m[i]?m[i].p(r,a):(m[i]=P(r),m[i].c(),m[i].m(t,n))}for(;i<m.length;i+=1)m[i].d(1);m.length=c.length}3&a&&o!==(o=e[1]("../:id",{id:e[2].id}))&&r(t,"href",o)},d(e){e&&d(t),u(m,e)}}}function j(e){let t,n=e[0],i=[];for(let a=0;a<n.length;a+=1)i[a]=L(z(e,n,a));return{c(){t=a("div");for(let e=0;e<i.length;e+=1)i[e].c();r(t,"class","items")},m(e,n){s(e,t,n);for(let a=0;a<i.length;a+=1)i[a].m(t,null)},p(e,[a]){if(3&a){let r;for(n=e[0],r=0;r<n.length;r+=1){const s=z(e,n,r);i[r]?i[r].p(s,a):(i[r]=L(s),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},i:m,o:m,d(e){e&&d(t),u(i,e)}}}function M(e,t,n){let a;h(e,p,(e=>n(1,a=e)));let{data:i}=t;return e.$$set=e=>{"data"in e&&n(0,i=e.data)},[i,a]}class R extends e{constructor(e){super(),t(this,e,M,j,n,{data:0})}}function D(e,t,n){const a=e.slice();return a[4]=t[n][0],a[5]=t[n][1],a}function A(e){let t,n,u,m,h,p,g,f,b=e[4]+"";return{c(){t=a("div"),n=a("b"),u=o(b),m=o(":"),h=i(),p=a("input"),f=i(),r(p,"type","text"),p.value=g=e[5]},m(e,a){s(e,t,a),l(t,n),l(n,u),l(n,m),l(t,h),l(t,p),l(t,f)},p(e,t){2&t&&b!==(b=e[4]+"")&&c(u,b),2&t&&g!==(g=e[5])&&p.value!==g&&(p.value=g)},d(e){e&&d(t)}}}function K(e){let t,n,c,h,p,g,f,b,y=Object.entries(e[1]),$=[];for(let a=0;a<y.length;a+=1)$[a]=A(D(e,y,a));return{c(){t=a("div"),n=a("div");for(let e=0;e<$.length;e+=1)$[e].c();c=i(),h=a("br"),p=i(),g=a("a"),f=o("Back"),r(g,"href",b=e[2]("../:id",{id:e[0]}))},m(e,a){s(e,t,a),l(t,n);for(let t=0;t<$.length;t+=1)$[t].m(n,null);l(t,c),l(t,h),l(t,p),l(t,g),l(g,f)},p(e,[t]){if(2&t){let a;for(y=Object.entries(e[1]),a=0;a<y.length;a+=1){const i=D(e,y,a);$[a]?$[a].p(i,t):($[a]=A(i),$[a].c(),$[a].m(n,null))}for(;a<$.length;a+=1)$[a].d(1);$.length=y.length}5&t&&b!==(b=e[2]("../:id",{id:e[0]}))&&r(g,"href",b)},i:m,o:m,d(e){e&&d(t),u($,e)}}}function O(e,t,n){let a,i;h(e,p,(e=>n(2,i=e)));let{data:r,id:s}=t;return e.$$set=e=>{"data"in e&&n(3,r=e.data),"id"in e&&n(0,s=e.id)},e.$$.update=()=>{9&e.$$.dirty&&n(1,a=r.filter((e=>e.id==s))[0])},[s,a,i,r]}class B extends e{constructor(e){super(),t(this,e,O,K,n,{data:3,id:0})}}function H(e,t,n){const a=e.slice();return a[4]=t[n][0],a[5]=t[n][1],a}function N(e){let t,n,c,m,h,p,g,f,b,y,$,v,w=Object.entries(e[1]),x=[];for(let a=0;a<w.length;a+=1)x[a]=_(H(e,w,a));return{c(){t=a("div"),n=a("div");for(let e=0;e<x.length;e+=1)x[e].c();c=i(),m=a("br"),h=i(),p=a("a"),g=o("[Back]"),b=i(),y=a("a"),$=o("[Update]"),r(p,"href",f=e[2]("../",{id:e[0]})),r(y,"href",v=e[2]("../:id/update",{id:e[0]}))},m(e,a){s(e,t,a),l(t,n);for(let t=0;t<x.length;t+=1)x[t].m(n,null);l(t,c),l(t,m),l(t,h),l(t,p),l(p,g),l(t,b),l(t,y),l(y,$)},p(e,t){if(2&t){let a;for(w=Object.entries(e[1]),a=0;a<w.length;a+=1){const i=H(e,w,a);x[a]?x[a].p(i,t):(x[a]=_(i),x[a].c(),x[a].m(n,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=w.length}5&t&&f!==(f=e[2]("../",{id:e[0]}))&&r(p,"href",f),5&t&&v!==(v=e[2]("../:id/update",{id:e[0]}))&&r(y,"href",v)},d(e){e&&d(t),u(x,e)}}}function _(e){let t,n,r,u,m,h,p,g=e[4]+"",f=e[5]+"";return{c(){t=a("div"),n=a("b"),r=o(g),u=o(":"),m=i(),h=o(f),p=i()},m(e,a){s(e,t,a),l(t,n),l(n,r),l(n,u),l(t,m),l(t,h),l(t,p)},p(e,t){2&t&&g!==(g=e[4]+"")&&c(r,g),2&t&&f!==(f=e[5]+"")&&c(h,f)},d(e){e&&d(t)}}}function E(e){let t,n=e[1]&&N(e);return{c(){n&&n.c(),t=g()},m(e,a){n&&n.m(e,a),s(e,t,a)},p(e,[a]){e[1]?n?n.p(e,a):(n=N(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:m,o:m,d(e){n&&n.d(e),e&&d(t)}}}function G(e,t,n){let a,i;h(e,p,(e=>n(2,i=e)));let{data:r=[],id:s}=t;return e.$$set=e=>{"data"in e&&n(3,r=e.data),"id"in e&&n(0,s=e.id)},e.$$.update=()=>{9&e.$$.dirty&&n(1,a=r.filter((e=>e.id==s))[0])},[s,a,i,r]}class T extends e{constructor(e){super(),t(this,e,G,E,n,{data:3,id:0})}}function U(e){let t,n,o,c,u,m;var h=e[2];function p(e){return{props:{data:e[0],id:e[1]}}}return h&&(u=new h(p(e))),{c(){t=a("div"),n=a("div"),o=a("h1"),o.textContent="CrudWidget",c=i(),u&&f(u.$$.fragment),b(o,"text-align","center"),b(o,"margin-top","-8px"),b(n,"width","512px"),b(n,"margin","auto"),r(n,"class","card shadow")},m(e,a){s(e,t,a),l(t,n),l(n,o),l(n,c),u&&y(u,n,null),m=!0},p(e,[t]){const a={};if(1&t&&(a.data=e[0]),2&t&&(a.id=e[1]),h!==(h=e[2])){if(u){$();const e=u;v(e.$$.fragment,1,0,(()=>{w(e,1)})),x()}h?(u=new h(p(e)),f(u.$$.fragment),k(u.$$.fragment,1),y(u,n,null)):u=null}else h&&u.$set(a)},i(e){m||(u&&k(u.$$.fragment,e),m=!0)},o(e){u&&v(u.$$.fragment,e),m=!1},d(e){e&&d(t),u&&w(u)}}}function W(e,t,n){let a,i,r,s;h(e,S,(e=>n(4,s=e)));let{data:l}=t;const o={list:R,update:B,view:T};return e.$$set=e=>{"data"in e&&n(0,l=e.data)},e.$$.update=()=>{16&e.$$.dirty&&n(1,[a,i="view"]=s.split("/"),a,(n(3,i),n(4,s))),10&e.$$.dirty&&n(2,r=a&&o[i]||R)},[l,a,r,i,s]}class J extends e{constructor(e){super(),t(this,e,W,U,n,{data:0})}}const F=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];function V(e){let t,n,r,l;return r=new J({props:{data:F}}),{c(){t=a("div"),t.innerHTML="<p>By using a _fallback.svelte in example/widget, we can grab the leftover URL\n    and pass it to an embedded widget.</p> \n\n  <p>Alternatively, the widget can grab the leftover URL itself.</p> \n  <p>This allows for reusable navigable components.</p>",n=i(),f(r.$$.fragment),b(t,"text-align","center")},m(e,a){s(e,t,a),s(e,n,a),y(r,e,a),l=!0},p:m,i(e){l||(k(r.$$.fragment,e),l=!0)},o(e){v(r.$$.fragment,e),l=!1},d(e){e&&d(t),e&&d(n),w(r,e)}}}class q extends e{constructor(e){super(),t(this,e,null,V,n,{})}}export{q as default};
