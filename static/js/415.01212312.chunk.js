"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{454:function(n,r,e){e.d(r,{Av:function(){return p},J2:function(){return l},LZ:function(){return v},VG:function(){return f},Y8:function(){return s}});var t=e(861),c=e(687),a=e.n(c),o=e(243),u="https://api.themoviedb.org",i="f496025f6cb0adfa3f9f05b6edf25d52",s=function(){var n=(0,t.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/3/trending/movie/day?api_key=").concat(i));case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/3/search/movie?api_key=").concat(i,"&language=en-US&page=1&query=").concat(r));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/3/movie/").concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/3/movie/").concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(a().mark((function n(r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/3/movie/").concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()},748:function(n,r,e){e.d(r,{Z:function(){return d}});var t,c,a,o=e(168),u=e(934),i=(0,u.Z)("ul")(t||(t=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n"]))),s=e(87),p=(0,u.Z)(s.OL)(c||(c=(0,o.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  \n  &:hover{\n      color: white;\n    background-color: orangered;\n  }\n"]))),f=u.Z.li(a||(a=(0,o.Z)(["\n    margin-bottom: 20px;\n"]))),l=e(184),v=function(n){var r=n.renderList,e=n.location;return r.map((function(n){var r=n.id,t=n.title,c=n.name;return(0,l.jsx)(f,{children:(0,l.jsx)(p,{to:"/movies/".concat(r),state:{from:e},children:t||c})},r)}))},d=function(n){var r=n.renderList,e=n.location;return(0,l.jsx)(i,{children:(0,l.jsx)(v,{renderList:r,location:e})})}},415:function(n,r,e){e.r(r);var t=e(439),c=e(791),a=e(689),o=e(454),u=e(748),i=e(184);r.default=function(){var n=(0,c.useState)([]),r=(0,t.Z)(n,2),e=r[0],s=r[1];(0,c.useEffect)((function(){(0,o.Y8)().then((function(n){return s(n.data.results)}))}),[]);var p=(0,a.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{renderList:e,location:p})})}}}]);
//# sourceMappingURL=415.01212312.chunk.js.map