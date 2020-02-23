"use strict";function c(a){return q(a)||d(a)||n()}function d(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return q(a)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function q(a){if(Array.isArray(a))return a}function r(a){"@babel/helpers - typeof";return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r(a)}var s=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,r=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,r))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==r[A]&&o(c,A,n[A],r[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===r(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),t=s.h,h=s.app,u=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===r(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return t(a,{},b);return t(a,b,d)}},v=u("a"),a=u("b"),b=u("button"),w=u("circle"),x=u("code"),y=u("div"),z=u("figcaption"),A=u("figure"),B=u("footer"),C=u("g"),g=u("h1"),D=u("h2"),E=u("h3"),F=u("h4"),G=u("h5"),H=u("header"),I=u("i"),i=u("img"),J=u("input"),K=u("label"),L=u("li"),M=u("link"),N=u("main"),O=u("meta"),P=u("nav"),Q=u("p"),p=u("path"),R=u("pre"),S=u("script"),T=u("span"),U=u("svg"),V=u("title"),W=u("ul"),X=u("view"),Y={branding:["explain.","web","boot"],description:"solving the tofu problem, one boot at a time.",float:{float:{}},footer:{one:{before:["trust on every step.","created by the @webboot dao."],menu:[{text:"privacy notice",to:"https://webboot.org/privacy/"},{text:"warrant canary",to:"https://webboot.org/canary/"}],title:"@webboot"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/webboot"},{text:"twitter",to:"https://twitter.com/webbootorg"},{text:"keybase",to:"https://keybase.io/webboot"},{text:"github",to:"https://github.com/webboot"},{text:"gitlab",to:"https://gitlab.com/webboot"}],title:"social links"},two:{menu:[{text:"webboot",to:"https://webboot.org"},{text:"webboot docs",to:"https://docs.webboots.org"},{text:"magic",to:"https://magic.github.io"},{text:"grundstein",to:"https://grundstein.github.io"}],title:"projects"}},gdpr:{allowed:[],show:!1},menu:[{text:"Introduction",to:"/#introduction"},{items:[{text:"Tofu",title:"Trust on first use",to:"-tofu"},{text:"Tosu",title:"Trust on subsequent use",to:"-tosu"},{text:"Threat Vectors",to:"-threats"}],text:"Problems",to:"/#problems"},{text:"Status Quo",to:"/#status-quo"},{text:"Solutions",to:"/#solutions"},{text:"Audience",to:"/#audience"},{text:"User Rights",to:"/#privacy"},{text:"Conclusion",to:"/#conclusion"}],pageClass:{},root:"/",theme:"dark",title:"@webboot explainer",url:"/"},Z={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},$=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[E(b?ha({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return _(k({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},_=function(a){return y([F([a.day,"-",a.month,"-",a.year," - ",ha({to:a.name},a.title)]),Q(a.description)])},aa=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),y([D(c?ha({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return $(k({},a,{month:e,days:f,link:b}))})])},ba=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return y({class:"Burger",onclick:a.onclick},[T(),T(),T()])},ca=function(a){var b=a.footer,c=b.one,d=b.two,e=b.three;return B({class:"Footer"},[y({class:"Container"},[y({class:"Menus"},[c&&y({class:"Child Info"},[c.title&&D(c.title),c.before&&c.before.map(function(b){return Q(b)}),c.menu&&W([c.menu.map(function(a){return L(ha(a))})]),c.after&&c.after.map(function(b){return Q(b)})]),d&&y({class:"Child"},[d.title&&D(d.title),d.before&&d.before.map(function(b){return Q(b)}),d.menu&&W([d.menu.map(function(a){return L(ha(a))})]),d.after&&d.after.map(function(b){return Q(b)})]),e&&y({class:"Child"},[e.title&&D(e.title),e.before&&e.before.map(function(b){return Q(b)}),e.menu&&W([e.menu.map(function(a){return L(ha(a))})]),e.after&&e.after.map(function(b){return Q(b)})])]),y({class:"Credits"},["made with a few bits of ",ha({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},da=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,u=void 0===t?"None":t;if(!f)return y({class:"Gdpr"},U({class:"ShowHide",onclick:[pa.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[C([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),w({cx:"192",cy:"128",r:"32"}),w({cx:"128",cy:"256",r:"32"}),w({cx:"288",cy:"384",r:"32"}),w({cx:"272",cy:"272",r:"16"}),w({cx:"400",cy:"336",r:"16"}),w({cx:"176",cy:"368",r:"16"})])]));var v=!!e.length;return y({class:"Gdpr"},[y({class:"Container"},[h&&E(h),j&&Q(j),v&&[W(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return L({class:"Cookie"},[J({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[pa.gdpr.toggleAllow,{name:b}]}),(d||e)&&K({for:b},[d&&F(d),e&&Q(e)])])}))],v?[G(n),J({class:"allow all",onclick:pa.gdpr.allow,type:"button",value:q}),J({class:"allow",onclick:pa.gdpr.close,type:"button",value:s}),J({class:"allow none",onclick:pa.gdpr.deny,type:"button",value:u})]:J({onclick:pa.gdpr.close,value:l,type:"button"})])])},ea=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,f=a.menu,g=a.title,h=a.root,i=e(a,["logo","menu","title","root"]);if(d||f||logotext){var j=i.branding;Array.isArray(j)||(j=[j]);var k=j,l=c(k),m=l[0],n=l[1],o=l.slice(2);return H({class:"Header"},[y({class:"BrandContainer"},[y([ia({root:h}),j&&ha({to:h,class:"branding"},[m,T(n),o])])]),y({class:"Toc"},[ba(),E({title:"Table of Contents"},ha({to:"/"},"ToC")),ja({state:i,items:f,collapse:!1})])])}},fa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),i(a)},ga=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return b({class:"LightSwitch",onclick:pa.changeTheme},U({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ha=function(a,b){var c=a.to,d=a.action,f=void 0===d?pa.go:d,g=e(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=e(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,oa.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),v(l,[i,b])},ia=function(a){return ha({to:a.root,class:"Logo"},[U({viewBox:"0 0 640 500"},[p({class:"upper",d:"\nM 6 415\nc 213 -43 414 78 627 21 7 -136 -21 -129 -64 -129 -103 7 -167 9 -207 -64 -78 19 -77 21 -85 7 -11 -19 -9 -13 78 -35\nl -7 -29\nc -85 27 -90 23 -92 14 -8 -18 -5 -19 85 -42\nl -7 -29\nc -96 24 -87 25 -92 14 -4 -23 4 -23 89 -43\nl -4 -29\nc -85 21 -92 28 -92 14 0 -21 0 -21 92 -42 0 -43 9 -43 -27 -43\nC 200 7 63 1 35 30 63 151 -8 265 6 415\nz\n".trim(),fill:"#ea4444"}),p({class:"sole",d:"\nM 5 429\nc -5 36 -5 42 -1 71\nh 206\nc -57 -93 79 0 250 0 164 0 180 -14 180 -50 -220 64 -415 -64 -635 -21\nz\n".trim(),fill:"#5a5a5a"})])])},ja=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),P({className:c},W(e.map(function(a){return ka(k({},a,{url:g,root:i,collapse:void 0===d||d}))})))},ka=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=e(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to,o=l.to[0],p="/"===o||"-"===o||"#"===o;i&&p&&("-"===o||"#"===o)&&(n=i+n);var q=n.startsWith(g);g&&p&&!q&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var r=[],s=f.startsWith(l.to)||!j;return s&&d.length&&(r=W(d.map(function(a){return ka(k({parentTo:l.to,url:f,root:g,collapse:j},a))}))),L(m,[l.to?la(l,b):T(l,b),r])},la=function(a,b){return ha(a,b)},ma=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return N(e,y({class:{Wrapper:!0}},[na({state:d,page:c}),b]))},na=function(a){var b=a.page,c=a.state;return[ea(c),y({class:"Page",id:"page"},b),ca(c)]},oa={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=oa.db.init(),g=oa.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=oa.db.init(),f=void 0;return d&&e[d]&&(f=oa.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=oa.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(c){if("string"!=typeof c)return c;var e=c.split(/\b/);return c=e.map(function(c,f){if(""!==c){var g="";return"state"===c?g="state":"actions"===c?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(c)?g="keyword":b.includes(c)?g="builtin":d.includes(c)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(c=T({class:g},c)),c}}),c},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return ha({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){if(!a.includes("://"))return l(a);var b=a.split("://"),c=m(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?a:ha({to:a},a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var b=a.replace(/"/g,"'"),d=b.split("'"),f=c(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),T({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),T({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},n=function(a){return x({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(n)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},pa={changeTheme:function changeTheme(a){return k({},a,{pageClass:k({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},float:{toggle:function toggle(a,b){return k({},a,{float:k({},a.float,l({},b,!a.float[b]))})}},gdpr:{allow:function allow(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[pa.gdpr.show,{show:!1}]}]]},close:function close(a){return[k({},a,{gdpr:k({},a.gdpr,{show:!1})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[pa.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[k({},a,{gdpr:k({},a.gdpr,{allowed:[]})}),[oa.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[pa.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?k({},a,{gdpr:k({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),k({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return window.location.hash=h,a;var i=window,j=i.scrollY,l=a.titles[f];if(l&&(document.title=a.title=l),window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=m(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return k({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),k({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},qa={"/":function _(){return[y({id:"front"},[g("@webboot - a layer of trust for the web"),D("Abstract:"),F("Integrity guarantees"),Q(["webboot provides a solution to provably verify the integrity"," of any piece of addressible content,"," increasing security guarantees for developers and end-users."]),F("Social trust"),Q(["webboot allows social trust chains for public data."," Any entity publishing a piece of publicly addressible data can proof their authorship."]),F("User benefits"),Q(["webboot connects browsers with smart contract enabled distributed hash tables"," to provide version management, caching, and subresource integrity guarantees."]),F("Byzantine betrayal resistance"),Q([T({title:"NOT Craig Wright."},"Satoshi Nakamoto's")," solution to the ",ha({to:"https://en.wikipedia.org/wiki/Byzantine_fault"},"byzantine fault")," problem enabled trustless transactions of digital currencies,"," and this spawned a decentralized ecosystem that is just getting started."]),Q(["We are bringing \"byzantine betrayal resistance\" to addressible content,"," enabling both the old and the new web to reach previously impossible levels of integrity."])]),y({id:"introduction"},[D("Introduction"),E("webboot is:"),Q(["A verifiable source of integrity protocol for the web,"," utilizing a distributed network of validator nodes"," to provide both developers and users with a toolset that verifies the integrity"," of any piece of publicly addressable content."]),E("webboot provides solutions for:"),F("Tofu - Trust on first use"),Q(["By making it possible to verify any published data,"," webboot solves the technological half of the tofu problem."]),F("Tosu - Trust on subsequent use"),Q("Webboot adds functionality to control version updates for both developers and end-users."),F("Phishing"),Q(["By knowing which homepages you frequent,"," webboot will be able to warn you if you visit a url"," that has similarities to one you visited the past."]),Q("All of that without any information about the content or dns of that url!")]),y({id:"problems"},[D("Problems"),Q(["Homepages, webapps, and dapps"," are used to administrate a lot of our public and private lives,"," yet most users, and many developers,"," do not realize how broken and dangerous the delivery method of those applications is."]),F("There are some open, unanswered questions to solve:"),Q("How can we trust a homepage before we even load it?"),Q(["How can we trust a homepage not to send us malicious code,"," intentionally or unintentionally?"]),Q(["How can we verify if that public key somebody sent us is the correct key?"," This is crucial nowadays,"," where a lot of money is exchanged using decentralized public/private key"," cryptography without transaction reversability."])]),y({id:"problems-tofu"},[D("The Tofu Problem"),F("Trust on first use"),Q("How can we trust data someone sends us did not get changed on the way?"),Q(["By adding @webboot as an intermediary to any data exchange workflow,"," there suddenly is a third party in the mix,"," verifying the integrity of the exchanged data on both ends."]),Q(["Since there is publicly attestable proof of those transactions too,"," future attestation of past proofs is possible,"," this allows adding an additional layer","to (de)centralized ",ha({to:"https://en.wikipedia.org/wiki/Provenance"},"proof of provenance")," applications."])]),y({id:"problems-tosu"},[D("The Tosu Problem"),F("Trust on subsequent use"),Q("TOSU. we made that up."),Q("Being written somewhere on the internet makes it a thing now, though."),Q(["Lets assume we solved the TOFU problem;"," we loaded the first version of a homepage in a trustable way,"," and we have the working application running on our device. w00t!"]),Q(["But what happens when, on second load,"," we discover that a piece of data we have loaded has changed?"," At the least, we again have to verify the data"," and its origin just as we did on the first load."]),Q(["Simply said:"," We ",ha({to:"https://tools.ietf.org/html/rfc2119#section-2"},"MUST NOT")," trust the server to send us valid code,"," on the contrary, we ",ha({to:"https://tools.ietf.org/html/rfc2119#section-3"},"SHOULD")," assume to receive malicious payloads on every load."]),Q("TODO: add paragraph explaining user updating")]),y({id:"problems-threats"},[D("Threat Vectors"),E("2.3.a Hackers"),Q(["Maybe someone hacked the homepage servers between our first use of the app and now,"," established a Man in the Middle (MITM) attack between the server and us,"," or the country/company/coffeshop network we just connected to"," contains malware or spyware."]),E("2.3.b Broken code"),Q(["The developers of an app might have shipped a version of the code that does not work."," If only the client could go back to the version of 5 minutes ago..."," This problem could be solved by making updates"," of homepages apps / dapps controllable by us, the users,"," and by providing multiple sources of \"integrity proofs\"."]),E("2.3.c Malicious developer"),Q(["The only developer of Acme Corp. has been fired,"," finding a replacement will take a week or longer."]),Q("Before they left, they decided to hide a mining software on the company page."),E("2.3.d Phishing"),Q("Somebody just sent you a link to [mircosoft.com](https://mircosoft.com)."),Q("Did you spot the typo?"),Q("Will you spot it if it is [mi\u0441rosoft.com](https://mi\u0441rosoft.com)?"),Q("The good news: webboot will warn you if you visited microsoft.com in the past.")]),y({id:"status-quo"},[D("Status Quo"),Q("What is currently being done to solve trust issues involving software integrity?"),Q("This section describes the current Status Quo of data integrity guarantees we can make."),E("Auditing"),Q(["Human auditing on for every piece of content is not a viable solution,"," due to the time it would take."]),E("Formal verification"),Q(["Theoretically, every script could be analyzed and proven to do what it should do in every situation.","But testing software is hard."]),Q(["This would represent millions of man hours of work"," - which noone is willing (or able) to pay for."]),E("Package managers"),Q(["Some package managers are called app stores."," Most use hash integrity checks as part of the install."," Some also use public/private key cryptography for author verification."]),E("Version control"),Q("(git, svn, mercurial)"),Q(["most versioning tools use hashes internally,"," some use cryptographic signatures for patches and releases."]),E("Subresource integrity hashes"),Q("Browsers implemented an integriy system for assets."),Q([ha({text:"SRI hashes",to:"https://en.wikipedia.org/wiki/Subresource_Integrity"})," prove that a piece of payload matches the expected hash."," A compromised server can just send compromised scripts and hashes,"," breaking the security model."]),E("Browser extensions"),Q("The noscript browser extension uses sri hashes to block javascript.")]),y({id:"solutions"},[D("Solutions"),E("Trust on First Use"),Q(["Combining subresource integrity hashes with the @webboot database"," makes it possible to provide independent integrity verification."]),Q(["By adding @webboot as the confirming third party,"," SRI hashes can suddenly be something we trust."]),E("Trust on Subsequent Use"),F("service worker caching"),Q("service workers allow us to cache the contents of a homepage for later use and make the homepage available offline."),Q(["using that caching mechanism in a smart way,"," an upgrade and deprecation mechanism can be implemented,"," prompting the user to update the homepage scripts to the new version when needed."]),Q(["this solves parts of the tosu problem,"," giving control of homepage versioning to users,"," where it should always have been."]),E("Developer tools"),Q(["Developers need a way to authorize and verify new hashes"," of addressable content they control, using either a ",ha({to:"https://keybase.io"},"domain.com/keybase.txt")," identity or a domain.com/keys.txt file."]),Q(["Using those keys, hashes can be cryptographically verified and checked,"," making it possible to create chains of trust that end"," with the actual developers of the properties."]),Q(["Additionally, others can audit those changes and add their verification,"," making the chain links even stronger."]),E("Phishing attacks"),Q(["all addressible data of loaded homepages is cached locally in the user's browser plug in."," this allows us to calculate the difference between known urls and the one being loaded,"," which, in return, allows us to warn the user about a possible phishing attack"])]),y({id:"audience"},[D("Audience"),Q("Who does webboot seek to solve problems for?"),E("B2B"),F("developers/hosters of versioned JavaScript/CSS/HTML artifacts"),Q("(Microsoft(github)/Amazon/Cloudflare/Google)"),F("cryptocurrency exchanges, custodial wallet services, DeFI"),Q("(Coinbase, JaXX, MyCryptoWallet, WalletConnect)"),F("dapp developers"),Q("ethereum, aeternity, ..."),E("B2C"),Q("Customers of the following services can greatly benefit from @webboot"),Q("online banking"),Q("e-commerce"),Q("cryptocurrency exchange"),Q("cryptocurrency wallet"),Q("governance platforms for DAO users"),Q("non-secure messaging platforms")]),y({id:"privacy"},[D("Privacy Features"),Q("The data @webboot collects NEVER includes ip addresses, or other identifying data."),E("No user accounts"),Q("No login to @webboot servers is possible or necessary."),E("Public data"),Q(["We only collect what we need,"," which means that all data @webboot saves is also public by default."]),E("Debug logs"),Q("Debugging data is logged for a maximum of 7 days."),E("Data haven"),Q(["@webboot does not,"," under any circumstances,"," share information about it's users with ",a(I("any"))," third parties."]),Q(["For further information, please visit our ",ha({to:"https://webboot.org/privacy"},"privacy policy"),"."])]),y({id:"conclusion"},[D("Conclusion"),Q(["By adding an independent source of truth for addressible data,"," @webboot can be used in almost any kind of trust based data exchange."]),Q(["This allows a lot of existing technology to easily be adapted to implement it,"," often without changing the application itself."]),Q(["@webboot is the backbone for the creation of a suite of unique applications,"," allowing the secure exchange of data between individuals,"," based on public-private key cryptography best practices."])])]},"/404/":function _(){return y("404 - not found")}};h({init:[k({},Y,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[oa.db.get,{key:"magic-gdpr",action:pa.gdpr.show}]]],subscriptions:function subscriptions(){return[[Z.listenPopState,pa.pop]]},view:function(a){var b=qa[a.url]?a.url:"/404/",c=qa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={},ma({page:c,state:a},[ga(a),da(a)])},node:document.getElementById("Magic")});