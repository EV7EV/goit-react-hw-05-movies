"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{368:function(n,t,e){e.d(t,{O:function(){return u}});var r=e(87),a=e(689),c=e(184),u=function(n){var t=n.movies,e=(0,a.TH)();return(0,c.jsx)("ul",{children:t.length>0&&t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsxs)(r.rU,{state:{from:e},to:"/movies/".concat(n.id),children:[" ",(0,c.jsx)("p",{children:n.title?n.title:n.name})]})},n.id)}))})}},983:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(52),s=e(368),f=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Ny)().then((function(n){return c(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Tranding today"}),(0,f.jsx)(s.O,{movies:e})]})}},52:function(n,t,e){e.d(t,{M4:function(){return f},MQ:function(){return p},Ny:function(){return o},qF:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="cca79e12b25cdd9f67fc795a1689f5d9",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/3/trending/all/day?api_key=",n.next=3,u.Z.get("".concat("/3/trending/all/day?api_key=").concat(i));case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/3/search/movie?include_adult=false&api_key=",n.next=3,u.Z.get("".concat("/3/search/movie?include_adult=false&api_key=").concat(i,"&query=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/3/movie/".concat(t,"?api_key="),n.next=3,u.Z.get("".concat(e).concat(i));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/3/movie/".concat(t,"/").concat(e,"?api_key="),n.next=3,u.Z.get("".concat(r).concat(i));case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.a61e19fe.chunk.js.map