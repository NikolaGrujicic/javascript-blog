(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7/dd":function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return f}));var r=n("k0FJ"),c=n("mXGw"),o=n.n(c),a=n("fGC6"),i=n("We4V"),l=n("u0/e"),s=n("og7e"),u=n("wEEh"),b=n("ycXb"),d=n("x5bA"),p=n("aD51"),O=function(t){var e=t.data,n=e.posts,c=e.collectionInfo;return Object(p.c)(o.a.Fragment,null,Object(p.c)(b.a,{title:c.name}),Object(p.c)(u.a,null),Object(p.c)(a.d,{effectProps:{effect:"fadeInDown"}},Object(p.c)(i.a,{header:"Published by Author",totalCount:n.totalCount})),Object(p.c)(u.a,null),Object(p.c)(a.d,null,Object(p.c)(a.b,null,Object(p.c)(d.a,{author:c}),Object(p.c)(u.a,null),n.nodes&&Object(p.c)(s.a,{nodes:n.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3]}))),Object(p.c)(u.a,null),Object(p.c)(a.c,null,Object(p.c)(l.a,Object(r.a)({},n.pageInfo,c))))},f=(e.default=O,"204709299")},FbdX:function(t,e,n){},IO5D:function(t,e,n){},We4V:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("mXGw");var r=n("1Gva"),c=n("aD51"),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},a=function(t){var e=t.header,n=t.subheader,a=t.running,i=t.totalCount;return Object(c.c)("div",null,Object(c.c)(r.h,{variant:"h1"},e," ",i&&Object(c.c)(r.a,{variant:"tag-white",sx:o.count}," ",i)),n&&Object(c.c)(r.p,{variant:"h3",sx:o.subheader},n),a&&Object(c.c)(r.p,{variant:"h4",sx:o.runninghead},a))}},og7e:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("k0FJ"),c=n("oedh"),o=n("mXGw"),a=n.n(o),i=n("1Gva"),l=n("GZVQ"),s=n("lAxG"),u=n("HGLW"),b=n("Cini"),d=n("y6Mt"),p=n("A4YR"),O=(n("IO5D"),n("FbdX"),{slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{display:["none","block"],textAlign:"center",width:"auto",top:5,left:4,p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}}),f=n("q/Up"),j=n("aD51");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=Object(f.a)((function(){return n.e(19).then(n.t.bind(null,"2UUl",7))})),h=a.a.forwardRef((function(t,e){var n=t.columns,c=t.slidesToScroll,o=t.smoothAutoScroll,a=t.autoPlay,l=t.autoplaySpeed,s=t.fade,u=t.dots,f=t.arrows,g=t.centerMode,h=t.centerPadding,x=t.controlPosition,k=t.beforeChange,w=t.children,y=Object(b.e)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},S={centerMode:!s,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!s)},D=y.theme.breakpoints.map((function(t,e){var r=n[e>=n.length?n.length-1:e],o=c[e>=c.length?c.length-1:e];return{breakpoint:parseInt(t),settings:v({slidesToShow:r,slidesToScroll:o},0===e?S:{})}})),A={ref:e,beforeChange:k,slidesToShow:n[n.length-1],slidesToScroll:c[c.length-1],speed:800,dots:u,arrows:f,centerMode:g,centerPadding:h,infinite:!0,cssEase:s?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:s,responsive:D,css:Object(d.a)(v(v(v(v({},s?O.fade:O.slide),"bottom"===x&&O.controlBottom),"center"===x&&O.controlCenter),"over"===x&&O.controlOver)),prevArrow:Object(j.c)(i.i,{sx:O.arrowPrev},Object(j.c)(p.b,null)),nextArrow:Object(j.c)(i.i,{sx:O.arrowNext},Object(j.c)(p.c,null))};o&&(A=v(v(v({},A),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&a&&(A=v(v(v({},A),P),{},{speed:300,autoplaySpeed:l}));var G=w.slice(0,n[n.length-1]);return Object(j.c)(m,Object(r.a)({},A,{fallback:G}),w)})),x=h;h.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var k=n("hpqI"),w=a.a.forwardRef((function(t,e){var n=t.nodes,o=t.variant,a=t.title,u=t.withTitleLink,b=t.limit,d=t.skip,p=t.distinct,O=t.slider,f=t.aside,g=t.asNavFor,v=t.loading,m=Object(c.a)(t,["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"]),h=Object(l.g)(n,{distinct:p,limit:b,skip:d});if(!h||!h.length)return null;var w=u?h[0].category&&h[0].category.slug:"",y=a&&""+Object(l.e)(h.map((function(t){return t.id})).join()),P=Object(l.a)(O?"lists.cards.slider":"lists.cards.fixed",o),S=function(t){g&&g.current&&(g.current.slickPause(),g.current.slickGoTo(t))},D=h.map((function(e,n){return Object(j.c)(k.a,Object(r.a)({key:e.id,variant:o,onMouseOver:function(){return S(n)},onFocus:function(){return S(n)},loading:t.fade?0===n?v:void 0:v},e,m))})),A=function(){return Object(j.c)(i.b,{sx:{variant:P}},O?Object(j.c)(x,Object(r.a)({ref:e},m),D):D)};return a?Object(j.c)(s.a,{title:a,titleLink:w,key:y,aside:f},Object(j.c)(A,null)):Object(j.c)(A,null)})),y=w;w.defaultProps={variant:"vertical",columns:[1],aside:!1}},"u0/e":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("HGLW"),c=(n("mXGw"),n("Wbzz")),o=n("1Gva"),a=n("A4YR"),i=function(t){return t.replace(/\/*$/,"/")},l=n("aD51");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},d=function(t){var e=t.currentPage,n=t.pageCount,r=t.hasPreviousPage,s=t.hasNextPage,d=t.basePath,p=void 0===d?"":d,O=t.slug;if(!s&&!r)return"";var f=i(p+(void 0===O?"":O)),j=i(f+"page"),g=e>=3?""+j+(e-1):f,v=""+j+(e+1);return Object(l.c)(o.g,{sx:b.wrapper},Object(l.c)(o.b,{sx:b.item},r&&Object(l.c)(o.c,{variant:"mute",as:c.Link,to:g,sx:b.button},Object(l.c)(a.b,null),"Previous")),Object(l.c)(o.b,{sx:u(u({},b.item),b.number)},"Page ",Object(l.c)("strong",null,e)," of ",Object(l.c)("strong",null,n)),Object(l.c)(o.b,{sx:b.item},s&&Object(l.c)(o.c,{variant:"dark",as:c.Link,to:v,sx:b.button},"Next",Object(l.c)(a.c,null))))}},x5bA:function(t,e,n){"use strict";n("mXGw");var r=n("Wbzz"),c=n("1Gva"),o=n("3IhM"),a=n("1L5Y"),i=n("Tn8W"),l=n("WwoH"),s=n("aD51"),u={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, transparent 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, transparent 100%)"}]}},b=function(t){var e=t.children;return Object(s.c)(c.h,{variant:"h4",sx:u.subheader},e)},d=function(t){var e=t.name,n=t.thumbnail,o=t.slug;return n?Object(s.c)(c.b,null,Object(s.c)(c.l,{as:r.Link,to:o,"aria-label":e},Object(s.c)(a.a,{avatar:n}))):null},p=function(t){var e=t.name,n=t.slug;return Object(s.c)(c.b,{sx:u.name},Object(s.c)(c.h,{variant:"h3"},Object(s.c)(c.l,{as:r.Link,to:n},e)))},O=function(t){var e=t.title,n=t.description;return Object(s.c)(c.b,{sx:u.bio},Object(s.c)(b,null,e),Object(s.c)(c.p,null,n))},f=function(t){var e=t.skills;return e?Object(s.c)(c.b,{sx:u.innerBox},Object(s.c)(b,null,"Expertise"),e.map((function(t){return Object(s.c)(c.p,{key:"skill-"+t},t)}))):null},j=function(t){var e=t.social;return e?Object(s.c)(c.b,{sx:u.innerBox},Object(s.c)(b,null,"Social Media"),Object(s.c)(i.a,{variant:"vertical",items:Object(l.a)(e),wrapperStyle:u.socialList})):null};e.a=function(t){var e=t.author,n=t.withLink;if(!e)return null;var a=e.skills,i=e.social;return Object(s.c)(c.d,{variant:"paper",sx:u.card},Object(s.c)(c.g,{sx:u.wrapper},Object(s.c)(c.b,{sx:u.avatarColumn},Object(s.c)(d,e)),Object(s.c)(c.b,{sx:u.infoColumn},Object(s.c)(p,e),Object(s.c)(c.g,{sx:u.wrapper},Object(s.c)(c.b,{sx:u.innerBox},Object(s.c)(O,e)),(i||a)&&Object(s.c)(c.b,{sx:u.innerBox},Object(s.c)(c.g,null,Object(s.c)(f,e),Object(s.c)(j,e)))))),n&&Object(s.c)(c.a,{variant:"tag",as:r.Link,to:e.slug,sx:u.link},"View Posts"),Object(s.c)(c.b,{sx:u.gradient}),Object(s.c)(o.a,{sx:u.pattern}))}}}]);
//# sourceMappingURL=component---packages-blog-core-src-templates-collection-author-js-cc9975dd03f2bb77451d.js.map