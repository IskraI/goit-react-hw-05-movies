"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,r,t){t.r(r);var n=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(689),p=t(972),f=t(639),h=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],u=r[1],d=(0,o.UO)().movieId,l=(0,i.useState)(null),v=(0,c.Z)(l,2),m=v[0],x=v[1],w=(0,i.useState)(!1),Z=(0,c.Z)(w,2),b=Z[0],g=Z[1];return(0,i.useEffect)((function(){if(d){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.M1)(d);case 3:r=e.sent,u((0,n.Z)(r.cast)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0.message);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsxs)("p",{children:["Sorry. There are ",m," \ud83d\ude2d"]}),b?(0,h.jsx)(f.Z,{}):(0,h.jsxs)("div",{children:[t&&(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):"https://via.placeholder.com/100x150",alt:e.name,width:"100",height:"150"}),(0,h.jsx)("h4",{children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}),0===(null===t||void 0===t?void 0:t.length)&&(0,h.jsx)("p",{children:"Don't have information about the cast of this movie."})]})]})}},639:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(243),a="Loader_loader__+lRPl",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.p2,{height:"80",width:"80",color:"#910a6d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},972:function(e,r,t){t.d(r,{M1:function(){return p},NV:function(){return i},Sk:function(){return s},d0:function(){return o},tx:function(){return f}});var n=t(861),a=t(757),c=t.n(a),u=t(924);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"2005be877b41dd3a0b1c9df70b469ec4"};var s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?query=".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.0dcade95.chunk.js.map