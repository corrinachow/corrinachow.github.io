webpackJsonp([0xc23565d713b7],{87:function(e,t){"use strict";e.exports={pathPrefix:"/",siteTitle:"Corrina Chow | Web Developer and Designer",siteTitleAlt:"Corrina Chow - Web Developer and Designer",siteUrl:"https://corrinachow.com"}},50:function(e,t,n){function r(e){return null===e||void 0===e}function a(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function o(e,t,n){var o,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=l.call(e),t=l.call(t),s(e,t,n));if(a(e)){if(!a(t))return!1;if(e.length!==t.length)return!1;for(o=0;o<e.length;o++)if(e[o]!==t[o])return!1;return!0}try{var f=i(e),d=i(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),o=f.length-1;o>=0;o--)if(f[o]!=d[o])return!1;for(o=f.length-1;o>=0;o--)if(c=f[o],!s(e[c],t[c],n))return!1;return typeof e==typeof t}var l=Array.prototype.slice,i=n(52),u=n(51),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:o(e,t,n))}},51:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var a="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=a?n:r,t.supported=n,t.unsupported=r},52:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},53:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},320:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){return"undefined"==typeof g&&"undefined"!=typeof window&&window.IntersectionObserver&&(g=new window.IntersectionObserver(function(e){e.forEach(function(e){v.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),g}t.__esModule=!0;var o=n(43),l=r(o),i=n(67),u=r(i),s=n(66),c=r(s),f=n(138),d=r(f),p=n(137),m=r(p),E=n(2),T=r(E),h=n(16),y=r(h),b=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},A={},S=function(e){var t=b(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!A[n]||(A[n]=!0,!1)},g=void 0,v=[],_=function(e,t){a().observe(e),v.push([e,t])},w=null,O=function(){if(null!==w)return w;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return w=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",s=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+i+t+n+o+a+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+s+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,n=e.onLoad,r=(0,d.default)(e,["style","onLoad"]);return T.default.createElement("img",(0,m.default)({},r,{onLoad:n,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:y.default.object,onLoad:y.default.func};var P=function(e){function t(n){(0,l.default)(this,t);var r=(0,u.default)(this,e.call(this,n)),a=!0,o=!0,i=!1,s=S(n);return!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,o=!1,i=!0),"undefined"==typeof window&&(a=!1,o=!1),r.state={isVisible:a,imgLoaded:o,IOSupported:i},r.handleRef=r.handleRef.bind(r),r}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),n=t.title,r=t.alt,a=t.className,o=t.outerWrapperClassName,l=t.style,i=void 0===l?{}:l,u=t.imgStyle,s=void 0===u?{}:u,c=t.placeholderStyle,f=void 0===c?{}:c,d=t.sizes,p=t.resolutions,E=t.backgroundColor,h=t.Tag,y=void 0;y="boolean"==typeof E?"lightgray":E;var A=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},s,f),S=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},s);if(d){var g=d;return g.srcWebp&&g.srcSetWebp&&O()&&(g.src=g.srcWebp,g.srcSet=g.srcSetWebp),T.default.createElement(h,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},T.default.createElement(h,{className:(a?a:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef},T.default.createElement(h,{style:{width:"100%",paddingBottom:100/g.aspectRatio+"%"}}),g.base64&&T.default.createElement(M,{alt:r,title:n,src:g.base64,style:A}),g.tracedSVG&&T.default.createElement(M,{alt:r,title:n,src:g.tracedSVG,style:A}),y&&T.default.createElement(h,{title:n,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&T.default.createElement(M,{alt:r,title:n,srcSet:g.srcSet,src:g.src,sizes:g.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),T.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,m.default)({alt:r,title:n},g))}})))}if(p){var v=p,_=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:v.width,height:v.height},i);return"inherit"===i.display&&delete _.display,v.srcWebp&&v.srcSetWebp&&O()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),T.default.createElement(h,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},T.default.createElement(h,{className:(a?a:"")+" gatsby-image-wrapper",style:_,ref:this.handleRef},v.base64&&T.default.createElement(M,{alt:r,title:n,src:v.base64,style:A}),v.tracedSVG&&T.default.createElement(M,{alt:r,title:n,src:v.tracedSVG,style:A}),y&&T.default.createElement(h,{title:n,style:{backgroundColor:y,width:v.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:v.height}}),this.state.isVisible&&T.default.createElement(M,{alt:r,title:n,width:v.width,height:v.height,srcSet:v.srcSet,src:v.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),T.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,m.default)({alt:r,title:n,width:v.width,height:v.height},v))}})))}return null},t}(T.default.Component);P.defaultProps={fadeIn:!0,alt:"",Tag:"div"},P.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,placeholderStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=P},169:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(c){var d=s(t);d&&d!==c&&n(e,d,f)}var p=l(t);i&&(p=p.concat(i(t)));for(var m=0;m<p.length;++m){var E=p[m];if(!(r[E]||a[E]||f&&f[E])){var T=u(t,E);try{o(e,E,T)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=n},59:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),d=n(16),p=r(d),m=n(61),E=r(m),T=n(50),h=r(T),y=n(60),b=n(21),A=function(e){var t,n;return n=t=function(t){function n(){return o(this,n),l(this,t.apply(this,arguments))}return i(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},a,this.mapNestedChildrenToProps(n,o))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return u({},a,(t={},t[r.type]=l,t.titleAttributes=u({},o),t));case b.TAG_NAMES.BODY:return u({},a,{bodyAttributes:u({},o)});case b.TAG_NAMES.HTML:return u({},a,{htmlAttributes:u({},o)})}return u({},a,(n={},n[r.type]=u({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,l=o.children,i=a(o,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,l),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:l})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=a(t,["children"]),o=u({},r);return n&&(o=this.mapChildrenToProps(n,o)),f.default.createElement(e,o)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},g=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(S),v=A(g);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},21:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},60:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),i=r(l),u=n(5),s=r(u),c=n(21),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a],l=o.toLowerCase();if(e.indexOf(l)!==-1&&n[l])return t.concat(n)}return t},[])},T=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),l=0;l<o.length;l++){var i=o[l],u=i.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(i)===-1||i!==c.TAG_PROPERTIES.INNER_HTML&&i!==c.TAG_PROPERTIES.CSS_TEXT&&i!==c.TAG_PROPERTIES.ITEM_PROP||(n=i)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),l=0;l<o.length;l++){var i=o[l],u=(0,s.default)({},r[i],a[i]);r[i]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:m(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(c.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),A=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,w=function(e){_&&g(_),e.defer?_=S(function(){O(e,function(){_=null})}):(O(e),_=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),M(d,p);var m={baseTag:N(c.TAG_NAMES.BASE,n),linkTags:N(c.TAG_NAMES.LINK,o),metaTags:N(c.TAG_NAMES.META,l),noscriptTags:N(c.TAG_NAMES.NOSCRIPT,i),scriptTags:N(c.TAG_NAMES.SCRIPT,s),styleTags:N(c.TAG_NAMES.STYLE,f)},E={},T={};Object.keys(m).forEach(function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(T[e]=m[e].oldTags)}),t&&t(),u(e,E,T)},R=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),l=Object.keys(t),i=0;i<l.length;i++){var u=l[i],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),a.indexOf(u)===-1&&a.push(u);var f=o.indexOf(u);f!==-1&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==l.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,l.join(","))}},N=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],l=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some(function(e,t){return l=t,n.isEqualNode(e)})?a.splice(l,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var a=C(n),o=R(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+f(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(o,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var a="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",l=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(l?"/>":">"+o+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,a=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),o=j(n,a);return[i.default.createElement(c.TAG_NAMES.TITLE,o,t)]},H=function(e,t){return t.map(function(t,n){var r,a=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),i.default.createElement(e,a)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,l=e.metaTags,i=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,a,r),link:x(c.TAG_NAMES.LINK,o,r),meta:x(c.TAG_NAMES.META,l,r),noscript:x(c.TAG_NAMES.NOSCRIPT,i,r),script:x(c.TAG_NAMES.SCRIPT,u,r),style:x(c.TAG_NAMES.STYLE,s,r),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=w,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},61:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(2),u=r(i),s=n(53),c=r(s),f=n(63),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function f(){m=e(p.map(function(e){return e.props})),E.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,E=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(s,this.props)},t}(i.Component);return E.displayName="SideEffect("+r(s)+")",E.canUseDOM=c.default.canUseDOM,E}}},63:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!i(s))return!1;var c=e[s],f=t[s];if(a=n?n.call(r,c,f,s):void 0,a===!1||void 0===a&&c!==f)return!1}return!0}},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=n(36),i=(r(l),["JavaScript","HTML5 & CSS3","Ruby","R"]),u=["Node.JS","React.JS","jQuery","SASS/SCSS","Bootstrap 4","Mocha & Chai","Ruby on Rails","RSpec"],s=["Git","SQL","MongoDB","PostgreSQL"],c=["Photoshop","Illustrator","InDesign","Sketch"],f=function(e){return e.map(function(e){return o.default.createElement("li",null,e)})},d=f(i),p=f(u),m=f(s),E=f(c),T=function(){return o.default.createElement("section",{id:"about"},o.default.createElement("div",{className:"subheader",style:{gridArea:"aboutTitle"}},o.default.createElement("h2",null,"About me")),o.default.createElement("ul",{id:"skill-1"},o.default.createElement("li",null,o.default.createElement("span",null,"Languages:")),d),o.default.createElement("ul",{id:"skill-2"},o.default.createElement("li",null,o.default.createElement("span",null,"Libraries & Frameworks:")),p),o.default.createElement("ul",{id:"skill-3"},o.default.createElement("li",null,o.default.createElement("span",null,"Systems & Databases:")),m),o.default.createElement("ul",{id:"skill-4",style:{gridArea:"colfour"}},o.default.createElement("li",null,o.default.createElement("span",null,"Prototyping & Design:")),E),o.default.createElement("div",{className:"about-description",style:{gridArea:"desc",color:"#333"}},o.default.createElement("p",null,"Hi, I'm a full stack developer & designer based in Montreal. I'm currently available for small freelance projects!"),o.default.createElement("p",{id:"about-contact"},o.default.createElement("a",{href:"#contact"},"Contact me"))))};t.default=T,e.exports=t.default},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(){return o.default.createElement("section",{id:"contact"},o.default.createElement("div",{className:"subheader"},o.default.createElement("h2",null,"Contact me")),o.default.createElement("div",{className:"contact-text"},o.default.createElement("p",null,"Have a project you'd like to discuss? If you're an artist and would like to collaborate, feel free to send me a message as well.")),o.default.createElement("form",{className:"row",method:"POST",action:"https://formspree.io/hello@corrinachow.com"},o.default.createElement("div",{className:"col-12 name-form"},o.default.createElement("label",{for:"name"},"First & Last Name*"),o.default.createElement("input",{type:"text",id:"name",name:"name",required:!0})),o.default.createElement("div",{className:"col-6 email-form"},o.default.createElement("label",{for:"email"},"Email Address*"),o.default.createElement("input",{type:"text",id:"email",name:"email",required:!0})),o.default.createElement("div",{className:"col-6 timeline-form"},o.default.createElement("label",{for:"timeline"},"Timeline"),o.default.createElement("select",{id:"timeline",name:"timeline",optional:!0},o.default.createElement("option",{value:""},"---"),o.default.createElement("label",{for:"days",className:"sr-only"},"Days"),o.default.createElement("option",{value:"days"},"Days"),o.default.createElement("label",{for:"Weeks",className:"sr-only"},"Weeks"),o.default.createElement("option",{value:"weeks"},"Weeks"),o.default.createElement("label",{for:"Months",className:"sr-only"},"Months"),o.default.createElement("option",{value:"months"},"Months"))),o.default.createElement("div",{className:"col-12 message-form"},o.default.createElement("label",{for:"message"},"Message"),o.default.createElement("textarea",{id:"message",name:"message",required:!0})),o.default.createElement("div",{className:"col-3"},o.default.createElement("input",{type:"submit",value:"Send"}))))};t.default=l,e.exports=t.default},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(){return o.default.createElement("footer",{className:"row"},o.default.createElement("div",{className:"col-12"},o.default.createElement("div",{className:"col-6"},o.default.createElement("h2",null,"Find me online"),o.default.createElement("a",{href:"mailto:hello@corrinachow.com"},o.default.createElement("span",null,"hello@corrinachow.com")),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("a",{"aria-label":"github",href:"https://github.com/corrinachow/"},o.default.createElement("i",{title:"Github","aria-hidden":!0,className:"fab fa-github fa-2x"}))),o.default.createElement("div",{className:"master-social-links col-6"})))};t.default=l,e.exports=t.default},216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=r(i),s=n(36),c=(r(s),n(320)),f=r(c),d=n(217),p=(r(d),function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.getList=function(){console.log(this.props.projectEdges);var e=[];return this.props.projectEdges.forEach(function(t){e.push({path:t.node.fields.slug,title:t.node.frontmatter.title,cover:t.node.frontmatter.cover.childImageSharp.sizes,repo:t.node.frontmatter.repo,live:t.node.frontmatter.live,service:t.node.frontmatter.service,snippet:t.node.frontmatter.snippet,tech:t.node.frontmatter.tech})}),e},t.prototype.render=function(){var e=this.getList(),t={height:"100%",left:"0",position:"absolute",top:"0",width:"100%"};return u.default.createElement("section",{id:"portfolio"},u.default.createElement("div",{className:"subheader"},u.default.createElement("h2",null,"Featured projects")),u.default.createElement("div",{className:"row portfolio-subsection gallery"},e.map(function(e){return u.default.createElement("div",{key:e.path,className:"col-4"},u.default.createElement("a",{href:e.repo},u.default.createElement("div",{className:"img-wrap portfolio-entry-4 small-project"},u.default.createElement(f.default,{sizes:e.cover,style:t}),u.default.createElement("span",{
className:"img-description"},"See GitHub repo"))),u.default.createElement("div",{className:"small-project-desc"},u.default.createElement("span",null,e.title),u.default.createElement("p",null,e.snippet," Made using ",u.default.createElement("span",{className:"project-subheader"},e.tech),e.live&&u.default.createElement("p",null,u.default.createElement("br",null),u.default.createElement("a",{href:e.live},"See ",e.title," live"))),u.default.createElement("a",{href:e.repo,className:"lg-hide"},"See ",e.title,"'s Github Repo")))})))},t}(u.default.Component));t.default=p,e.exports=t.default},217:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=n(36),i=(r(l),function(){return o.default.createElement("div",{className:"col-4"},o.default.createElement("a",{href:"https://github.com/corrinachow/wiki-maps"},o.default.createElement("div",{className:"img-wrap portfolio-entry-4 small-project"},o.default.createElement("img",{src:"assets/img/wiki-maps.png",alt:"wiki-maps"}),o.default.createElement("span",{className:"img-description"},"See GitHub repo"))),o.default.createElement("div",{className:"small-project-desc"},o.default.createElement("span",null,"Wiki-Maps"),o.default.createElement("p",null,"Full-stack web app that allows users to create themed maps made using the"," ",o.default.createElement("span",{className:"project-subheader"},"Google Maps API, Google Geocode API, PostgreSQL, Knex, Node.JS, Express, jQuery, & Bootstrap 4"),"."),o.default.createElement("a",{href:"https://github.com/corrinachow/wiki-maps",className:"lg-hide"},"See Wiki-Map's Github Repo")))});t.default=i,e.exports=t.default},221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=n(2),o=r(a),l=n(36),i=(r(l),n(59)),u=r(i),s=n(212),c=r(s),f=n(216),d=r(f),p=n(213),m=r(p),E=n(214),T=r(E),h=n(87),y=r(h),b=function(e){console.log(e);var t=e.data.allMarkdownRemark.edges;return o.default.createElement("div",null,o.default.createElement(u.default,null,o.default.createElement("title",null,y.default.siteTitle)),o.default.createElement("header",null,o.default.createElement("div",{className:"title-text"},o.default.createElement("h1",null,o.default.createElement("span",null,"Corrina Chow")),o.default.createElement("h2",null,o.default.createElement("span",null,"Web Developer & Designer"),o.default.createElement("p",null,o.default.createElement("a",{href:"https://github.com/corrinachow/"},o.default.createElement("i",{title:"github","aria-hidden":!0,className:"fab fa-github"}))))),o.default.createElement("div",{className:"description-text"},o.default.createElement("h2",null,o.default.createElement("div",{id:"social-links"})))),o.default.createElement("div",{className:"container"},o.default.createElement(c.default,null),o.default.createElement(d.default,{projectEdges:t})),o.default.createElement(m.default,null),o.default.createElement(T.default,null))};t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-8e527d6e2a9fb070af5f.js.map