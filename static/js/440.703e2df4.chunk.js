"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[440],{440:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,u,o,i,s=e(439),p=e(791),f=e(689),l=e(454),h=e(168),v=e(934),m=v.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  list-style: none;\n"]))),g=v.Z.li(a||(a=(0,h.Z)(["\n  width: 300px;\n\n  text-align: center;\n"]))),d=v.Z.p(c||(c=(0,h.Z)(["\n  font-weight: 500;\n"]))),x=v.Z.img(u||(u=(0,h.Z)(["\n  width: 80px;\n  height: 120px;\n"]))),w=(v.Z.img(o||(o=(0,h.Z)(["\n  font-weight: 500;\n"]))),v.Z.span(i||(i=(0,h.Z)(["\n  display: block;\n  margin-top: 3px;\n"])))),Z=e(184),y=function(n){var t=n.name,e=n.popularity,r=n.character,a=n.image;return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(d,{children:t}),(0,Z.jsx)(x,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-article.png",alt:t}),(0,Z.jsxs)("p",{children:["Character: ",(0,Z.jsx)(w,{children:r})," "]}),(0,Z.jsxs)("p",{children:["Rating ",Math.round(e)]})]})},k=function(n){var t=n.actorsArr;return(0,Z.jsx)(m,{children:t.map((function(n){var t=n.id,e=n.name,r=n.popularity,a=n.character,c=n.profile_path;return(0,Z.jsx)(y,{name:e,popularity:r,character:a,image:c},t)}))})},b=function(){var n=(0,f.UO)().moviesID,t=(0,p.useState)(null),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,p.useEffect)((function(){(0,l.J2)(n).then((function(n){return a(n.data.cast)}))}),[n]),r&&(0,Z.jsx)(k,{actorsArr:r})}},454:function(n,t,e){e.d(t,{Av:function(){return p},J2:function(){return l},LZ:function(){return h},VG:function(){return f},Y8:function(){return s}});var r=e(861),a=e(687),c=e.n(a),u=e(243),o="https://api.themoviedb.org",i="f496025f6cb0adfa3f9f05b6edf25d52",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/search/movie?api_key=").concat(i,"&language=en-US&page=1&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=440.703e2df4.chunk.js.map