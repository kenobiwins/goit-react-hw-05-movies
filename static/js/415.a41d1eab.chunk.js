"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{356:function(n,t,r){r.d(t,{x:function(){return i}});var e=r(6444),a=r(407),i=(0,e.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.Cg,a.AF,a.eC)},8643:function(n,t,r){r.d(t,{a:function(){return s}});var e,a=r(7689),i=r(168),c=r(1087),o=(0,r(6444).ZP)(c.rU)(e||(e=(0,i.Z)(["\n  text-decoration: none;\n  color: ",";\n  padding: ","px;\n  font-size: ",";\n\n  :hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.secondary})),u=r(184),s=function(n){var t=n.movies,r=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:t.map((function(n){var t=n.id,e=n.title;return(0,u.jsx)("li",{children:(0,u.jsx)(o,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))})}},5415:function(n,t,r){r.r(t),r.d(t,{Home:function(){return s}});var e=r(9439),a=r(8643),i=r(2791),c=r(4635),o=r(356),u=r(184),s=function(){var n=(0,i.useState)([]),t=(0,e.Z)(n,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){(0,c.XT)().then((function(n){var t=n.results;s(t)}))}),[]),(0,u.jsx)("main",{children:(0,u.jsxs)(o.x,{as:"section",children:[(0,u.jsx)("h2",{children:"Trending today"}),(0,u.jsx)(o.x,{as:"ul",display:"grid",gridGap:"6px",mt:"6px",children:r&&(0,u.jsx)(a.a,{movies:r})})]})})}},4635:function(n,t,r){r.d(t,{PV:function(){return d},UN:function(){return f},XT:function(){return s}});var e=r(8683),a=r(5861),i=r(7757),c=r.n(i),o=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),u="f516fdc3d4918369a6ad5ae834597c19",s=function(){var n=(0,a.Z)(c().mark((function n(){var t,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},n.next=3,o.get("trending/movie/day",{params:(0,e.Z)({api_key:u},t)});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(c().mark((function n(){var t,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},n.next=3,o.get("search/movie",{params:(0,e.Z)({api_key:u},t)});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(t){var r,a,i,s,f=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=f.length>1&&void 0!==f[1]?f[1]:"",a=f.length>2&&void 0!==f[2]?f[2]:{},n.next=4,o.get("movie/".concat(t).concat(r),{params:(0,e.Z)({api_key:u},a)});case 4:return i=n.sent,s=i.data,n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.a41d1eab.chunk.js.map