import{S as L,i as N,s as O,e as m,t as G,a as D,c as b,b as x,d as J,f,g as I,h as u,j as y,k as p,n as S,l as V,m as q,o as $}from"./chunks/index.2e3547bb.js";function M(h,e,l){const n=h.slice();return n[4]=e[l],n}function j(h,e,l){const n=h.slice();return n[7]=e[l],n}function P(h){let e,l=h[7]+"",n,a,r,g,d;function v(){return h[3](h[7])}return{c(){e=m("div"),n=G(l),a=D(),this.h()},l(c){e=b(c,"DIV",{class:!0});var o=x(e);n=J(o,l),a=I(o),o.forEach(f),this.h()},h(){u(e,"class",r=`cursor-pointer pb-2 sm:pl-4 hover:scale-105 hover:text-light-blue-100 hover:border-r-4 hover:border-light-blue-100 hover:bg-dark-blue-300 pr-3 ${h[0]==h[7]?"text-light-blue-100 border-r-4 border-light-blue-100 bg-dark-blue-300 scale-105":""}`)},m(c,o){y(c,e,o),p(e,n),p(e,a),g||(d=q(e,"mousedown",v),g=!0)},p(c,o){h=c,o&1&&r!==(r=`cursor-pointer pb-2 sm:pl-4 hover:scale-105 hover:text-light-blue-100 hover:border-r-4 hover:border-light-blue-100 hover:bg-dark-blue-300 pr-3 ${h[0]==h[7]?"text-light-blue-100 border-r-4 border-light-blue-100 bg-dark-blue-300 scale-105":""}`)&&u(e,"class",r)},d(c){c&&f(e),g=!1,d()}}}function B(h){let e,l,n;return{c(){e=m("div"),l=m("img"),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=x(e);l=b(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(f),this.h()},h(){$(l.src,n="/best.svg")||u(l,"src",n),u(l,"alt",""),u(l,"class","sm:w-[30px] sm:h-[30px]"),u(e,"class","absolute bottom-0 right-0")},m(a,r){y(a,e,r),p(e,l)},d(a){a&&f(e)}}}function C(h){let e,l,n;return{c(){e=m("div"),l=m("img"),this.h()},l(a){e=b(a,"DIV",{class:!0});var r=x(e);l=b(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(f),this.h()},h(){$(l.src,n="/loved.svg")||u(l,"src",n),u(l,"alt",""),u(l,"class","sm:w-[30px] sm:h-[30px]"),u(e,"class","absolute bottom-0 right-0")},m(a,r){y(a,e,r),p(e,l)},d(a){a&&f(e)}}}function F(h){let e,l,n,a,r,g,d;function v(i,t){if(i[4].tag==="loved")return C;if(i[4].tag==="best")return B}let c=v(h),o=c&&c(h);return{c(){e=m("div"),l=m("img"),g=D(),o&&o.c(),d=D(),this.h()},l(i){e=b(i,"DIV",{class:!0});var t=x(e);l=b(t,"IMG",{src:!0,alt:!0,class:!0}),g=I(t),o&&o.l(t),d=I(t),t.forEach(f),this.h()},h(){$(l.src,n=`/${h[4].tech}.svg`)||u(l,"src",n),u(l,"alt",a=h[4].tech),u(l,"class",r=`${h[4].tag?"relative":""} sm:w-[80px] sm:h-[80px]`),u(e,"class","relative lg:px-8 px-2")},m(i,t){y(i,e,t),p(e,l),p(e,g),o&&o.m(e,null),p(e,d)},p(i,t){t&1&&!$(l.src,n=`/${i[4].tech}.svg`)&&u(l,"src",n),t&1&&a!==(a=i[4].tech)&&u(l,"alt",a),t&1&&r!==(r=`${i[4].tag?"relative":""} sm:w-[80px] sm:h-[80px]`)&&u(l,"class",r),c!==(c=v(i))&&(o&&o.d(1),o=c&&c(i),o&&(o.c(),o.m(e,d)))},d(i){i&&f(e),o&&o.d()}}}function R(h){let e,l,n,a,r,g,d,v=Object.keys(h[1]),c=[];for(let t=0;t<v.length;t+=1)c[t]=P(j(h,v,t));let o=h[1][h[0]],i=[];for(let t=0;t<o.length;t+=1)i[t]=F(M(h,o,t));return{c(){e=m("span"),l=G("<MyStack/>"),n=D(),a=m("div"),r=m("div");for(let t=0;t<c.length;t+=1)c[t].c();g=D(),d=m("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=b(t,"SPAN",{class:!0});var _=x(e);l=J(_,"<MyStack/>"),_.forEach(f),n=I(t),a=b(t,"DIV",{class:!0});var s=x(a);r=b(s,"DIV",{id:!0,class:!0});var k=x(r);for(let w=0;w<c.length;w+=1)c[w].l(k);k.forEach(f),g=I(s),d=b(s,"DIV",{id:!0,class:!0});var E=x(d);for(let w=0;w<i.length;w+=1)i[w].l(E);E.forEach(f),s.forEach(f),this.h()},h(){u(e,"class","text-light-blue-100 relative font-goldman font-bold text-left text-2xl pt-12"),u(r,"id","types"),u(r,"class","flex flex-col text-right sm:mt-5 font-gruppo text-lg font-bold border-r-2 border-white w-36"),u(d,"id","icons"),u(d,"class","max-w-2/3 sm:pl-12 pl-4 flex flex-row flex-wrap justify-around sm:h-[80px] my-auto"),u(a,"class","flex flex-row mt-8")},m(t,_){y(t,e,_),p(e,l),y(t,n,_),y(t,a,_),p(a,r);for(let s=0;s<c.length;s+=1)c[s].m(r,null);p(a,g),p(a,d);for(let s=0;s<i.length;s+=1)i[s].m(d,null)},p(t,[_]){if(_&7){v=Object.keys(t[1]);let s;for(s=0;s<v.length;s+=1){const k=j(t,v,s);c[s]?c[s].p(k,_):(c[s]=P(k),c[s].c(),c[s].m(r,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=v.length}if(_&3){o=t[1][t[0]];let s;for(s=0;s<o.length;s+=1){const k=M(t,o,s);i[s]?i[s].p(k,_):(i[s]=F(k),i[s].c(),i[s].m(d,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}},i:S,o:S,d(t){t&&f(e),t&&f(n),t&&f(a),V(c,t),V(i,t)}}}function A(h,e,l){let n="Frontend";const a={Frontend:[{tech:"NextJS",tag:""},{tech:"React",tag:"best"},{tech:"Svelte",tag:"loved"},{tech:"Vuejs",tag:""}],Backend:[{tech:"Express",tag:"loved"},{tech:"Node",tag:""},{tech:"Flask",tag:"best"},{tech:"Django",tag:""},{tech:"Laravel",tag:""}],Languages:[{tech:"Javascript",tag:""},{tech:"Typescript",tag:""},{tech:"Python",tag:"best"},{tech:"Java",tag:""},{tech:"Rust",tag:"loved"},{tech:"PHP",tag:""}],Databases:[{tech:"MySQL",tag:"best"},{tech:"Postgres",tag:"loved"},{tech:"MongoDB",tag:""}],Others:[{tech:"git",tag:""},{tech:"docker",tag:""},{tech:"linux",tag:""},{tech:"figma",tag:""},{tech:"tailwind",tag:"loved"}]};function r(d){l(0,n=d)}return[n,a,r,d=>r(d)]}class Q extends L{constructor(e){super(),N(this,e,A,R,O,{})}}export{Q as default};
