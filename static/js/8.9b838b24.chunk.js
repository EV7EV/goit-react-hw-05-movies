"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{368:function(t,n,e){e.d(n,{O:function(){return u}});var r=e(87),a=e(689),c=e(184),u=function(t){var n=t.movies,e=(0,a.TH)();return(0,c.jsx)("ul",{children:n.length>0&&n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsxs)(r.rU,{state:{from:e},to:"/movies/".concat(t.id),children:[" ",(0,c.jsx)("p",{children:t.title?t.title:t.name})]})},t.id)}))})}},8:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(87),s=e(184),f=function(t){var n=t.handleSubmit,e=(0,i.useState)(""),r=(0,a.Z)(e,2),c=r[0],u=r[1];return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(c),u("")},children:[(0,s.jsx)("input",{onChange:function(t){u(t.target.value)},value:c,type:"text"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},p=e(52),l=e(368),d=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],d=(0,o.lr)(),v=(0,a.Z)(d,2),h=v[0],m=v[1];(0,i.useEffect)((function(){var t=h.get("query");if(t){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.qF)(t);case 3:e=n.sent,c(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{handleSubmit:function(t){m({query:t})}}),(0,s.jsx)(l.O,{movies:e})]})}},52:function(t,n,e){e.d(n,{M4:function(){return f},MQ:function(){return p},Ny:function(){return o},qF:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="cca79e12b25cdd9f67fc795a1689f5d9",o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/3/trending/all/day?api_key=",t.next=3,u.Z.get("".concat("/3/trending/all/day?api_key=").concat(i));case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/3/search/movie?include_adult=false&api_key=",t.next=3,u.Z.get("".concat("/3/search/movie?include_adult=false&api_key=").concat(i,"&query=").concat(n));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/3/movie/".concat(n,"?api_key="),t.next=3,u.Z.get("".concat(e).concat(i));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/3/movie/".concat(n,"/").concat(e,"?api_key="),t.next=3,u.Z.get("".concat(r).concat(i));case 3:return a=t.sent,o=a.data,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=8.9b838b24.chunk.js.map