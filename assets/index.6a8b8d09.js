import{S as e,i as s,s as t,e as n,g as o,f as l,h as a,j as r,k as c,D as d,E as h,l as i,y as f,n as u,F as p,o as g,u as m}from"./vendor.8ac32013.js";function w(e,s,t){const n=e.slice();return n[4]=s[t][0],n[5]=s[t][1],n}function v(e){let s,t,f,u,p,g,m,w,v=e[5]+"";return{c(){s=n("h3"),t=n("a"),f=o(v),g=l(),a(t,"href",u=e[0]("./:showId",{showId:e[4]}))},m(n,o){r(n,s,o),c(s,t),c(t,f),c(s,g),m||(w=d(p=h.call(null,t,e[1])),m=!0)},p(e,s){1&s&&u!==(u=e[0]("./:showId",{showId:e[4]}))&&a(t,"href",u)},d(e){e&&i(s),m=!1,w()}}}function I(e){let s,t=e[2],o=[];for(let n=0;n<t.length;n+=1)o[n]=v(w(e,t,n));return{c(){s=n("div");for(let e=0;e<o.length;e+=1)o[e].c();f(s,"text-align","center")},m(e,t){r(e,s,t);for(let n=0;n<o.length;n+=1)o[n].m(s,null)},p(e,[n]){if(7&n){let l;for(t=e[2],l=0;l<t.length;l+=1){const a=w(e,t,l);o[l]?o[l].p(a,n):(o[l]=v(a),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=t.length}},i:u,o:u,d(e){e&&i(s),p(o,e)}}}function x(e,s,t){let n;g(e,m,(e=>t(0,n=e)));let{scoped:o}=s;const{movies:l}=o;return e.$$set=e=>{"scoped"in e&&t(3,o=e.scoped)},[n,{validFor:2678400,writeHeaders:!0},l,o]}class j extends e{constructor(e){super(),s(this,e,x,I,t,{scoped:3})}}export{j as default};
