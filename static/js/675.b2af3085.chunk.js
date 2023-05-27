"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{675:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,i,c,s,o,u=r(861),p=r(439),l=r(757),d=r.n(l),f=r(791),h=r(689),x=r(972),v=r(168),m=r(444),g=r(87),w=(0,m.ZP)(g.rU)(t||(t=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),Z=r(184),j=function(n){var e=n.to,r=n.children;return(0,Z.jsx)(w,{to:e,children:r})},b=m.ZP.img(a||(a=(0,v.Z)(["\n  display: block;\n  width: 200px;\n  height: 300px;\n"]))),k=m.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),y=m.ZP.div(c||(c=(0,v.Z)(["\n  margin: 0 12px;\n  /* display: flex;\n  flex-wrap: wrap;\n  gap: 8px; */\n"]))),_=m.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),P=(0,m.ZP)(g.OL)(o||(o=(0,v.Z)(["\n  padding: 8px 8px;\n  display: inline-block;\n  /* margin-bottom: 16px; */\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  width: auto;\n  &.active {\n    color: white;\n    background-color: #910a6d;\n  }\n"]))),S=function(){var n,e,r=(0,f.useState)({}),t=(0,p.Z)(r,2),a=t[0],i=t[1],c=(0,f.useState)(null),s=(0,p.Z)(c,2),o=s[0],l=s[1],v=(0,h.UO)().movieId,m=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,f.useEffect)((function(){if(v){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.d0)(v);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l(n.t0.message);case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,7,10,12]])})));return function(){return n.apply(this,arguments)}}();n()}}),[v]);var g=a.title,w=a.original_title,S=a.poster_path,U=a.overview,C=a.genres,L=a.vote_average,O=a.release_date,E=[];C&&C.forEach((function(n){return E.push(n.name)}));var G=S?"https://image.tmdb.org/t/p/w500/".concat(S):"https://via.placeholder.com/200x300";return(0,Z.jsxs)(Z.Fragment,{children:[o&&(0,Z.jsxs)("p",{children:["Sorry ",o]}),(0,Z.jsxs)(k,{children:[(0,Z.jsxs)(_,{children:[(0,Z.jsx)(j,{to:m,children:"Go back"}),(0,Z.jsx)(b,{src:G,alt:g})]}),(0,Z.jsxs)(y,{children:[{title:g}&&(0,Z.jsxs)("h2",{children:[null!==g&&void 0!==g?g:w,O&&"(".concat(O.slice(0,4),")")]}),(0,Z.jsxs)("p",{children:["User Score ",Math.round(10*L),"%"]}),(0,Z.jsx)("h3",{children:" Overview"}),(0,Z.jsx)("p",{children:U}),(0,Z.jsx)("h4",{children:"Genres"}),0!==E.length?(0,Z.jsx)("p",{children:E.join(" / ")}):(0,Z.jsx)("p",{children:"undefine"})]})]}),(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(P,{to:"cast",state:{from:m},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(P,{to:"reviews",state:{from:m},children:"Reviews"})})]}),(0,Z.jsx)(f.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading subpage..."}),children:(0,Z.jsx)(h.j3,{})})]})}},972:function(n,e,r){r.d(e,{M1:function(){return p},NV:function(){return o},Sk:function(){return s},d0:function(){return u},tx:function(){return l}});var t=r(861),a=r(757),i=r.n(a),c=r(924);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"2005be877b41dd3a0b1c9df70b469ec4"};var s=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=675.b2af3085.chunk.js.map