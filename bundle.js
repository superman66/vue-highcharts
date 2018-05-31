/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(T,K){"object"===typeof module&&module.exports?module.exports=T.document?K(T):K:T.Highcharts=K(T)})("undefined"!==typeof window?window:this,function(T){var K=function(){var a="undefined"===typeof T?window:T,C=a.document,F=a.navigator&&a.navigator.userAgent||"",D=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,r=/(edge|msie|trident)/i.test(F)&&!a.opera,g=-1!==F.indexOf("Firefox"),e=-1!==F.indexOf("Chrome"),t=g&&4>parseInt(F.split("Firefox/")[1],
10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.1.0",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:t,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:r,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:g,isChrome:e,isSafari:!e&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
charts:[]}}();(function(a){a.timers=[];var C=a.charts,F=a.doc,D=a.win;a.error=function(r,g){r=a.isNumber(r)?"Highcharts error #"+r+": www.highcharts.com/errors/"+r:r;if(g)throw Error(r);D.console&&console.log(r)};a.Fx=function(a,g,e){this.options=g;this.elem=a;this.prop=e};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],e=[],t=this.now,w=a.length,l;if(1===t)e=this.toD;else if(w===g.length&&1>t)for(;w--;)l=parseFloat(a[w]),e[w]=isNaN(l)?g[w]:t*parseFloat(g[w]-l)+l;else e=g;this.elem.attr("d",
e,null,!0)},update:function(){var a=this.elem,g=this.prop,e=this.now,t=this.options.step;if(this[g+"Setter"])this[g+"Setter"]();else a.attr?a.element&&a.attr(g,e,null,!0):a.style[g]=e+this.unit;t&&t.call(a,e,this)},run:function(r,g,e){var t=this,w=t.options,l=function(a){return l.stopped?!1:t.step(a)},u=D.requestAnimationFrame||function(a){setTimeout(a,13)},c=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&u(c)};r!==g||this.elem["forceAnimate:"+
this.prop]?(this.startTime=+new Date,this.start=r,this.end=g,this.unit=e,this.now=this.start,this.pos=0,l.elem=this.elem,l.prop=this.prop,l()&&1===a.timers.push(l)&&u(c)):(delete w.curAnim[this.prop],w.complete&&0===a.keys(w.curAnim).length&&w.complete.call(this.elem))},step:function(r){var g=+new Date,e,t=this.options,w=this.elem,l=t.complete,u=t.duration,c=t.curAnim;w.attr&&!w.element?r=!1:r||g>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),e=c[this.prop]=!0,a.objectEach(c,function(a){!0!==
a&&(e=!1)}),e&&l&&l.call(w),r=!1):(this.pos=t.easing((g-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),r=!0);return r},initPath:function(r,g,e){function t(a){var f,c;for(b=a.length;b--;)f="M"===a[b]||"L"===a[b],c=/[a-zA-Z]/.test(a[b+3]),f&&c&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}function w(a,f){for(;a.length<p;){a[0]=f[p-a.length];var c=a.slice(0,x);[].splice.apply(a,[0,0].concat(c));n&&(c=a.slice(a.length-x),[].splice.apply(a,[a.length,0].concat(c)),b--)}a[0]=
"M"}function l(a,b){for(var c=(p-a.length)/x;0<c&&c--;)f=a.slice().splice(a.length/z-x,x*z),f[0]=b[p-x-c*x],k&&(f[x-6]=f[x-2],f[x-5]=f[x-1]),[].splice.apply(a,[a.length/z,0].concat(f)),n&&c--}g=g||"";var u,c=r.startX,d=r.endX,k=-1<g.indexOf("C"),x=k?7:3,p,f,b;g=g.split(" ");e=e.slice();var n=r.isArea,z=n?2:1,J;k&&(t(g),t(e));if(c&&d){for(b=0;b<c.length;b++)if(c[b]===d[0]){u=b;break}else if(c[0]===d[d.length-c.length+b]){u=b;J=!0;break}void 0===u&&(g=[])}g.length&&a.isNumber(u)&&(p=e.length+u*z*x,
J?(w(g,e),l(e,g)):(w(e,g),l(g,e)));return[g,e]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.merge=function(){var r,g=arguments,e,t={},w=function(e,u){"object"!==typeof e&&(e={});a.objectEach(u,function(c,d){!a.isObject(c,!0)||a.isClass(c)||a.isDOMElement(c)?e[d]=u[d]:e[d]=w(e[d]||{},c)});return e};!0===g[0]&&(t=g[1],g=Array.prototype.slice.call(g,2));e=g.length;for(r=0;r<e;r++)t=w(t,
g[r]);return t};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(r,g){return!!r&&"object"===typeof r&&(!g||!a.isArray(r))};a.isDOMElement=function(r){return a.isObject(r)&&"number"===typeof r.nodeType};a.isClass=function(r){var g=r&&r.constructor;return!(!a.isObject(r,!0)||a.isDOMElement(r)||!g||!g.name||"Object"===
g.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,g){for(var e=a.length;e--;)if(a[e]===g){a.splice(e,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(r,g,e){var t;a.isString(g)?a.defined(e)?r.setAttribute(g,e):r&&r.getAttribute&&((t=r.getAttribute(g))||"class"!==g||(t=r.getAttribute(g+"Name"))):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,e){r.setAttribute(e,a)});return t};a.splat=function(r){return a.isArray(r)?
r:[r]};a.syncTimeout=function(a,g,e){if(g)return setTimeout(a,g,e);a.call(0,e)};a.clearTimeout=function(r){a.defined(r)&&clearTimeout(r)};a.extend=function(a,g){var e;a||(a={});for(e in g)a[e]=g[e];return a};a.pick=function(){var a=arguments,g,e,t=a.length;for(g=0;g<t;g++)if(e=a[g],void 0!==e&&null!==e)return e};a.css=function(r,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(r.style,g)};a.createElement=function(r,g,e,t,w){r=F.createElement(r);var l=
a.css;g&&a.extend(r,g);w&&l(r,{padding:0,border:"none",margin:0});e&&l(r,e);t&&t.appendChild(r);return r};a.extendClass=function(r,g){var e=function(){};e.prototype=new r;a.extend(e.prototype,g);return e};a.pad=function(a,g,e){return Array((g||2)+1-String(a).replace("-","").length).join(e||0)+a};a.relativeLength=function(a,g,e){return/%$/.test(a)?g*parseFloat(a)/100+(e||0):parseFloat(a)};a.wrap=function(a,g,e){var t=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),l=arguments,u=this;
u.proceed=function(){t.apply(u,arguments.length?arguments:l)};a.unshift(t);a=e.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(r,g,e){var t=/\.([0-9])/,w=a.defaultOptions.lang;/f$/.test(r)?(e=(e=r.match(t))?e[1]:-1,null!==g&&(g=a.numberFormat(g,e,w.decimalPoint,-1<r.indexOf(",")?w.thousandsSep:""))):g=(e||a.time).dateFormat(r,g);return g};a.format=function(r,g,e){for(var t="{",w=!1,l,u,c,d,k=[],x;r;){t=r.indexOf(t);if(-1===t)break;l=r.slice(0,t);if(w){l=l.split(":");u=l.shift().split(".");
d=u.length;x=g;for(c=0;c<d;c++)x&&(x=x[u[c]]);l.length&&(x=a.formatSingle(l.join(":"),x,e));k.push(x)}else k.push(l);r=r.slice(t+1);t=(w=!w)?"}":"{"}k.push(r);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(r,g,e,t,w){var l,u=r;e=a.pick(e,1);l=r/e;g||(g=w?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===e?g=a.grep(g,function(a){return 0===a%1}):.1>=e&&(g=[1/e])));for(t=0;t<g.length&&!(u=g[t],w&&u*e>=r||
!w&&l<=(g[t]+(g[t+1]||g[t]))/2);t++);return u=a.correctFloat(u*e,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,g){var e=a.length,t,w;for(w=0;w<e;w++)a[w].safeI=w;a.sort(function(a,e){t=g(a,e);return 0===t?a.safeI-e.safeI:t});for(w=0;w<e;w++)delete a[w].safeI};a.arrayMin=function(a){for(var g=a.length,e=a[0];g--;)a[g]<e&&(e=a[g]);return e};a.arrayMax=function(a){for(var g=a.length,e=a[0];g--;)a[g]>e&&(e=a[g]);return e};a.destroyObjectProperties=function(r,g){a.objectEach(r,function(a,
t){a&&a!==g&&a.destroy&&a.destroy();delete r[t]})};a.discardElement=function(r){var g=a.garbageBin;g||(g=a.createElement("div"));r&&g.appendChild(r);g.innerHTML=""};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(r,g){g.renderer.globalAnimation=a.pick(r,g.options.chart.animation,!0)};a.animObject=function(r){return a.isObject(r)?a.merge(r):{duration:r?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,
year:314496E5};a.numberFormat=function(r,g,e,t){r=+r||0;g=+g;var w=a.defaultOptions.lang,l=(r.toString().split(".")[1]||"").split("e")[0].length,u,c,d=r.toString().split("e");-1===g?g=Math.min(l,20):a.isNumber(g)?g&&d[1]&&0>d[1]&&(u=g+ +d[1],0<=u?(d[0]=(+d[0]).toExponential(u).split("e")[0],g=u):(d[0]=d[0].split(".")[0]||0,r=20>g?(d[0]*Math.pow(10,d[1])).toFixed(g):0,d[1]=0)):g=2;c=(Math.abs(d[1]?d[0]:r)+Math.pow(10,-Math.max(g,l)-1)).toFixed(g);l=String(a.pInt(c));u=3<l.length?l.length%3:0;e=a.pick(e,
w.decimalPoint);t=a.pick(t,w.thousandsSep);r=(0>r?"-":"")+(u?l.substr(0,u)+t:"");r+=l.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);g&&(r+=e+c.slice(-g));d[1]&&0!==+r&&(r+="e"+d[1]);return r};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(r,g,e){if("width"===g)return Math.min(r.offsetWidth,r.scrollWidth)-a.getStyle(r,"padding-left")-a.getStyle(r,"padding-right");if("height"===g)return Math.min(r.offsetHeight,r.scrollHeight)-a.getStyle(r,"padding-top")-a.getStyle(r,
"padding-bottom");D.getComputedStyle||a.error(27,!0);if(r=D.getComputedStyle(r,void 0))r=r.getPropertyValue(g),a.pick(e,"opacity"!==g)&&(r=a.pInt(r));return r};a.inArray=function(r,g,e){return(a.indexOfPolyfill||Array.prototype.indexOf).call(g,r,e)};a.grep=function(r,g){return(a.filterPolyfill||Array.prototype.filter).call(r,g)};a.find=Array.prototype.find?function(a,g){return a.find(g)}:function(a,g){var e,t=a.length;for(e=0;e<t;e++)if(g(a[e],e))return a[e]};a.some=function(r,g,e){return(a.somePolyfill||
Array.prototype.some).call(r,g,e)};a.map=function(a,g){for(var e=[],t=0,w=a.length;t<w;t++)e[t]=g.call(a[t],a[t],t,a);return e};a.keys=function(r){return(a.keysPolyfill||Object.keys).call(void 0,r)};a.reduce=function(r,g,e){return(a.reducePolyfill||Array.prototype.reduce).call(r,g,e)};a.offset=function(a){var g=F.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(D.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(D.pageXOffset||g.scrollLeft)-(g.clientLeft||
0)}};a.stop=function(r,g){for(var e=a.timers.length;e--;)a.timers[e].elem!==r||g&&g!==a.timers[e].prop||(a.timers[e].stopped=!0)};a.each=function(r,g,e){return(a.forEachPolyfill||Array.prototype.forEach).call(r,g,e)};a.objectEach=function(a,g,e){for(var t in a)a.hasOwnProperty(t)&&g.call(e||a[t],a[t],t,a)};a.addEvent=function(r,g,e){var t,w=r.addEventListener||a.addEventListenerPolyfill;t="function"===typeof r&&r.prototype?r.prototype.protoEvents=r.prototype.protoEvents||{}:r.hcEvents=r.hcEvents||
{};w&&w.call(r,g,e,!1);t[g]||(t[g]=[]);t[g].push(e);return function(){a.removeEvent(r,g,e)}};a.removeEvent=function(r,g,e){function t(c,d){var k=r.removeEventListener||a.removeEventListenerPolyfill;k&&k.call(r,c,d,!1)}function w(c){var d,k;r.nodeName&&(g?(d={},d[g]=!0):d=c,a.objectEach(d,function(a,d){if(c[d])for(k=c[d].length;k--;)t(d,c[d][k])}))}var l,u;a.each(["protoEvents","hcEvents"],function(c){var d=r[c];d&&(g?(l=d[g]||[],e?(u=a.inArray(e,l),-1<u&&(l.splice(u,1),d[g]=l),t(g,e)):(w(d),d[g]=
[])):(w(d),r[c]={}))})};a.fireEvent=function(r,g,e,t){var w,l,u,c,d;e=e||{};F.createEvent&&(r.dispatchEvent||r.fireEvent)?(w=F.createEvent("Events"),w.initEvent(g,!0,!0),a.extend(w,e),r.dispatchEvent?r.dispatchEvent(w):r.fireEvent(g,w)):a.each(["protoEvents","hcEvents"],function(k){if(r[k])for(l=r[k][g]||[],u=l.length,e.target||a.extend(e,{preventDefault:function(){e.defaultPrevented=!0},target:r,type:g}),c=0;c<u;c++)(d=l[c])&&!1===d.call(r,e)&&e.preventDefault()});t&&!e.defaultPrevented&&t.call(r,
e)};a.animate=function(r,g,e){var t,w="",l,u,c;a.isObject(e)||(c=arguments,e={duration:c[2],easing:c[3],complete:c[4]});a.isNumber(e.duration)||(e.duration=400);e.easing="function"===typeof e.easing?e.easing:Math[e.easing]||Math.easeInOutSine;e.curAnim=a.merge(g);a.objectEach(g,function(c,k){a.stop(r,k);u=new a.Fx(r,e,k);l=null;"d"===k?(u.paths=u.initPath(r,r.d,g.d),u.toD=g.d,t=0,l=1):r.attr?t=r.attr(k):(t=parseFloat(a.getStyle(r,k))||0,"opacity"!==k&&(w="px"));l||(l=c);l&&l.match&&l.match("px")&&
(l=l.replace(/px/g,""));u.run(t,l,w)})};a.seriesType=function(r,g,e,t,w){var l=a.getOptions(),u=a.seriesTypes;l.plotOptions[r]=a.merge(l.plotOptions[g],e);u[r]=a.extendClass(u[g]||function(){},t);u[r].prototype.type=r;w&&(u[r].prototype.pointClass=a.extendClass(a.Point,w));return u[r]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return"highcharts-"+a+"-"+g++}}();D.jQuery&&(D.jQuery.fn.highcharts=function(){var r=[].slice.call(arguments);if(this[0])return r[0]?
(new (a[a.isString(r[0])?r.shift():"Chart"])(this[0],r[0],r[1]),this):C[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var C=a.each,F=a.isNumber,D=a.map,r=a.merge,g=a.pInt;a.Color=function(e){if(!(this instanceof a.Color))return new a.Color(e);this.init(e)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[g(a[1]),g(a[2]),g(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(e){var g,w,l,u;if((this.input=e=this.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=D(e.stops,function(c){return new a.Color(c[1])});else if(e&&e.charAt&&"#"===e.charAt()&&(g=e.length,e=parseInt(e.substr(1),16),7===g?w=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===g&&(w=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])),!w)for(l=this.parsers.length;l--&&
!w;)u=this.parsers[l],(g=u.regex.exec(e))&&(w=u.parse(g));this.rgba=w||[]},get:function(a){var e=this.input,g=this.rgba,l;this.stops?(l=r(e),l.stops=[].concat(l.stops),C(this.stops,function(e,c){l.stops[c]=[l.stops[c][0],e.get(a)]})):l=g&&F(g[0])?"rgb"===a||!a&&1===g[3]?"rgb("+g[0]+","+g[1]+","+g[2]+")":"a"===a?g[3]:"rgba("+g.join(",")+")":e;return l},brighten:function(a){var e,w=this.rgba;if(this.stops)C(this.stops,function(e){e.brighten(a)});else if(F(a)&&0!==a)for(e=0;3>e;e++)w[e]+=g(255*a),0>
w[e]&&(w[e]=0),255<w[e]&&(w[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,g){var e=this.rgba,l=a.rgba;l.length&&e&&e.length?(a=1!==l[3]||1!==e[3],g=(a?"rgba(":"rgb(")+Math.round(l[0]+(e[0]-l[0])*(1-g))+","+Math.round(l[1]+(e[1]-l[1])*(1-g))+","+Math.round(l[2]+(e[2]-l[2])*(1-g))+(a?","+(l[3]+(e[3]-l[3])*(1-g)):"")+")"):g=a.input||"none";return g}};a.color=function(e){return new a.Color(e)}})(K);(function(a){var C,F,D=a.addEvent,r=a.animate,g=a.attr,e=a.charts,
t=a.color,w=a.css,l=a.createElement,u=a.defined,c=a.deg2rad,d=a.destroyObjectProperties,k=a.doc,x=a.each,p=a.extend,f=a.erase,b=a.grep,n=a.hasTouch,z=a.inArray,J=a.isArray,q=a.isFirefox,L=a.isMS,B=a.isObject,H=a.isString,m=a.isWebKit,E=a.merge,A=a.noop,M=a.objectEach,G=a.pick,h=a.pInt,v=a.removeEvent,Q=a.stop,P=a.svg,I=a.SVG_NS,O=a.symbolSizes,N=a.win;C=a.SVGElement=function(){return this};p(C.prototype,{opacity:1,SVG_NS:I,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,h){this.element="span"===h?l(h):k.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(y,h,b){h=a.animObject(G(h,this.renderer.globalAnimation,!0));0!==h.duration?(b&&(h.complete=b),r(this,y,h)):(this.attr(y,null,b),h.step&&h.step.call(this));return this},complexColor:function(y,h,b){var f=this.renderer,v,c,d,m,I,p,A,n,k,R,q,z=[],P;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){y.radialGradient?c="radialGradient":y.linearGradient&&(c="linearGradient");
c&&(d=y[c],I=f.gradients,A=y.stops,R=b.radialReference,J(d)&&(y[c]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&R&&!u(d.gradientUnits)&&(m=d,d=E(d,f.getRadialAttr(R,m),{gradientUnits:"userSpaceOnUse"})),M(d,function(a,y){"id"!==y&&z.push(y,a)}),M(A,function(a){z.push(a)}),z=z.join(","),I[z]?q=I[z].attr("id"):(d.id=q=a.uniqueKey(),I[z]=p=f.createElement(c).attr(d).add(f.defs),p.radAttr=m,p.stops=[],x(A,function(y){0===y[1].indexOf("rgba")?(v=a.color(y[1]),
n=v.get("rgb"),k=v.get("a")):(n=y[1],k=1);y=f.createElement("stop").attr({offset:y[0],"stop-color":n,"stop-opacity":k}).add(p);p.stops.push(y)})),P="url("+f.url+"#"+q+")",b.setAttribute(h,P),b.gradient=z,y.toString=function(){return P})})},applyTextOutline:function(y){var h=this.element,b,v,c,d,m;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));y=y.split(" ");v=y[y.length-1];if((c=y[0])&&"none"!==c&&a.svg){this.fakeTS=!0;y=[].slice.call(h.getElementsByTagName("tspan"));
this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,h){return 2*y+h});for(m=y.length;m--;)b=y[m],"highcharts-text-outline"===b.getAttribute("class")&&f(y,h.removeChild(b));d=h.firstChild;x(y,function(a,y){0===y&&(a.setAttribute("x",h.getAttribute("x")),y=h.getAttribute("y"),a.setAttribute("y",y||0),null===y&&h.setAttribute("y",0));a=a.cloneNode(1);g(a,{"class":"highcharts-text-outline",fill:v,stroke:v,"stroke-width":c,"stroke-linejoin":"round"});h.insertBefore(a,d)})}},attr:function(a,
h,b,c){var y,f=this.element,v,d=this,m,I;"string"===typeof a&&void 0!==h&&(y=a,a={},a[y]=h);"string"===typeof a?d=(this[a+"Getter"]||this._defaultGetter).call(this,a,f):(M(a,function(y,h){m=!1;c||Q(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&(v||(this.symbolAttr(a),v=!0),m=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);m||(I=this[h+"Setter"]||this._defaultSetter,I.call(this,y,h,f),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&
this.updateShadows(h,y,I))},this),this.afterSetters());b&&b.call(this);return d},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,b){for(var y=this.shadows,c=y.length;c--;)b.call(y[c],"height"===a?Math.max(h-(y[c].cutHeight||0),0):"d"===a?this.d:h,a,y[c])},addClass:function(a,h){var y=this.attr("class")||"";-1===y.indexOf(a)&&(h||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==
z(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;x("x y r start end width height innerR anchorX anchorY".split(" "),function(h){y[h]=G(a[h],y[h])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var y;h=h||a.strokeWidth||0;y=Math.round(h)%2/2;
a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-2*y);u(a.strokeWidth)&&(a.strokeWidth=h);return a},css:function(a){var y=this.styles,b={},c=this.element,f,v="",d,m=!y,I=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&M(a,function(a,h){a!==y[h]&&(b[h]=a,m=!0)});m&&(y&&(a=p(y,b)),f=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===c.nodeName.toLowerCase()&&h(a.width),
this.styles=a,f&&!P&&this.renderer.forExport&&delete a.width,c.namespaceURI===this.SVG_NS?(d=function(a,y){return"-"+y.toLowerCase()},M(a,function(a,y){-1===z(y,I)&&(v+=y.replace(/([A-Z])/g,d)+":"+a+";")}),v&&g(c,"style",v)):w(c,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var y=this,b=y.element;n&&"click"===a?(b.ontouchstart=
function(a){y.touchEventFired=Date.now();a.preventDefault();h.call(b,a)},b.onclick=function(a){(-1===N.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&h.call(b,a)}):b["on"+a]=h;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=
a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,c=this.scaleY,v=this.inverted,f=this.rotation,d=this.matrix,m=this.element;v&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(d)&&a.push("matrix("+d.join(",")+")");v?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+G(this.rotationOriginX,m.getAttribute("x"),0)+" "+G(this.rotationOriginY,m.getAttribute("y")||0)+")");(u(b)||u(c))&&a.push("scale("+G(b,1)+
" "+G(c,1)+")");a.length&&m.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var y,c,v,d,m={};c=this.renderer;v=c.alignedObjects;var I,p;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||H(b))this.alignTo=y=b||"renderer",f(v,this),v.push(this),b=null}else a=this.alignOptions,h=this.alignByTranslate,y=this.alignTo;b=G(b,c[y],c);y=a.align;c=a.verticalAlign;v=(b.x||0)+(a.x||0);d=(b.y||0)+(a.y||0);"right"===
y?I=1:"center"===y&&(I=2);I&&(v+=(b.width-(a.width||0))/I);m[h?"translateX":"x"]=Math.round(v);"bottom"===c?p=1:"middle"===c&&(p=2);p&&(d+=(b.height-(a.height||0))/p);m[h?"translateY":"y"]=Math.round(d);this[this.placed?"animate":"attr"](m);this.placed=!0;this.alignAttr=m;return this},getBBox:function(a,h){var y,b=this.renderer,v,f=this.element,d=this.styles,m,I=this.textStr,A,n=b.cache,k=b.cacheKeys,q;h=G(h,this.rotation);v=h*c;m=d&&d.fontSize;u(I)&&(q=I.toString(),-1===q.indexOf("\x3c")&&(q=q.replace(/[0-9]/g,
"0")),q+=["",h||0,m,this.textWidth,d&&d.textOverflow].join());q&&!a&&(y=n[q]);if(!y){if(f.namespaceURI===this.SVG_NS||b.forExport){try{(A=this.fakeTS&&function(a){x(f.querySelectorAll(".highcharts-text-outline"),function(y){y.style.display=a})})&&A("none"),y=f.getBBox?p({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},A&&A("")}catch(W){}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();b.isSVG&&(a=y.width,b=y.height,d&&"11px"===d.fontSize&&17===Math.round(b)&&(y.height=b=
14),h&&(y.width=Math.abs(b*Math.sin(v))+Math.abs(a*Math.cos(v)),y.height=Math.abs(b*Math.cos(v))+Math.abs(a*Math.sin(v))));if(q&&0<y.height){for(;250<k.length;)delete n[k.shift()];n[q]||k.push(q);n[q]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var y=this;y.animate({opacity:0},{duration:a||150,complete:function(){y.attr({y:-9999})}})},add:function(a){var y=this.renderer,h=this.element,
b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&y.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:y.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var y=a.parentNode;y&&y.removeChild(a)},destroy:function(){var a=this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&a.parentGroup,c=h.ownerSVGElement,v=a.clipPath;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=
null;Q(a);v&&c&&(x(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var h=a.getAttribute("clip-path"),y=v.element.id;(-1<h.indexOf("(#"+y+")")||-1<h.indexOf('("#'+y+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=v.destroy());if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c]=a.stops[c].destroy();a.stops=null}a.safeRemoveChild(h);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&f(a.renderer.alignedObjects,
a);M(a,function(h,y){delete a[y]});return null},shadow:function(a,h,b){var y=[],c,v,f=this.element,d,m,I,p;if(!a)this.destroyShadows();else if(!this.shadows){m=G(a.width,3);I=(a.opacity||.15)/m;p=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(c=1;c<=m;c++)v=f.cloneNode(0),d=2*m+1-2*c,g(v,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":I*c,"stroke-width":d,transform:"translate"+p,fill:"none"}),b&&(g(v,"height",Math.max(g(v,"height")-d,0)),v.cutHeight=d),h?
h.element.appendChild(v):f.parentNode&&f.parentNode.insertBefore(v,f),y.push(v);this.shadows=y}return this},destroyShadows:function(){x(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,
h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var b,y=this["stroke-width"];"inherit"===y&&(y=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=h(a[b])*y;a=a.join(",").replace(/NaN/g,
"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=k.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(k.createTextNode(String(G(a),"").replace(/<[^>]*>/g,
"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.complexColor(a,h,b)},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,a);this[h]=a},zIndexSetter:function(a,b){var c=this.renderer,v=this.parentGroup,y=(v||c).element||c.box,f,d=this.element,m,I,c=y===c.box;
f=this.added;var p;u(a)&&(d.zIndex=a,a=+a,this[b]===a&&(f=!1),this[b]=a);if(f){(a=this.zIndex)&&v&&(v.handleZ=!0);b=y.childNodes;for(p=b.length-1;0<=p&&!m;p--)if(v=b[p],f=v.zIndex,I=!u(f),v!==d)if(0>a&&I&&!c&&!p)y.insertBefore(d,b[p]),m=!0;else if(h(f)<=a||I&&(!u(a)||0<=a))y.insertBefore(d,b[p+1]||null),m=!0;m||(y.insertBefore(d,b[c?3:0]||null),m=!0)}return m},_defaultSetter:function(a,h,b){b.setAttribute(h,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=
C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.rotationOriginXSetter=C.prototype.rotationOriginYSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=C.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===
h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,arguments)};p(F.prototype,{Element:C,SVG_NS:I,init:function(a,h,b,c,v,f){var y;c=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(c));y=c.element;a.appendChild(y);g(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&g(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=c;this.alignedObjects=[];this.url=(q||m)&&k.getElementsByTagName("base").length?
N.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.1.0"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=v;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,b,!1);var d;q&&a.getBoundingClientRect&&(h=function(){w(a,{left:0,top:0});d=a.getBoundingClientRect();w(a,{left:Math.ceil(d.left)-
d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},h(),this.unSubPixelFix=D(N,"resize",h))},getStyle:function(a){return this.style=p({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());
this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:A,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,h,b,c){var v=a.rotation,f=b,d,y=0,m=b.length,I=function(a){h.removeChild(h.firstChild);a&&h.appendChild(k.createTextNode(a))},p;a.rotation=0;f=this.getSpanWidth(a,h);if(p=
f>c){for(;y<=m;)d=Math.ceil((y+m)/2),f=b.substring(0,d)+"\u2026",I(f),f=this.getSpanWidth(a,h),y===m?y=m+1:f>c?m=d-1:y=d;0===m&&I("")}a.rotation=v;return p},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var c=a.element,v=this,f=v.forExport,d=G(a.textStr,"").toString(),y=-1!==d.indexOf("\x3c"),m=c.childNodes,p,A=g(c,"x"),n=a.styles,q=a.textWidth,E=n&&n.lineHeight,e=n&&n.textOutline,B=n&&"ellipsis"===n.textOverflow,Q=n&&"nowrap"===
n.whiteSpace,u=n&&n.fontSize,l,O,H=m.length,n=q&&!a.added&&this.box,J=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||v.style.fontSize||12;return E?h(E):v.fontMetrics(b,a.getAttribute("style")?a:c).h},N=function(a,h){M(v.escapes,function(b,c){h&&-1!==z(b,h)||(a=a.toString().replace(new RegExp(b,"g"),c))});return a},t=function(a,h){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(h+"\x3d");if(-1!==b&&(b=b+h.length+1,h=a.charAt(b),'"'===h||"'"===
h))return a=a.substring(b+1),a.substring(0,a.indexOf(h))};l=[d,B,Q,E,e,u,q].join();if(l!==a.textCache){for(a.textCache=l;H--;)c.removeChild(m[H]);y||e||B||q||-1!==d.indexOf(" ")?(n&&n.appendChild(c),d=y?d.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[d],d=b(d,function(a){return""!==a}),x(d,function(h,b){var d,y=0;h=h.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");d=h.split("|||");x(d,function(h){if(""!==h||1===d.length){var m={},n=k.createElementNS(v.SVG_NS,"tspan"),E,z;(E=t(h,"class"))&&g(n,"class",E);if(E=t(h,"style"))E=E.replace(/(;| |^)color([ :])/,"$1fill$2"),g(n,"style",E);(z=t(h,"href"))&&!f&&(g(n,"onclick",'location.href\x3d"'+z+'"'),g(n,"class","highcharts-anchor"),w(n,{cursor:"pointer"}));h=N(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){n.appendChild(k.createTextNode(h));
y?m.dx=0:b&&null!==A&&(m.x=A);g(n,m);c.appendChild(n);!y&&O&&(!P&&f&&w(n,{display:"block"}),g(n,"dy",J(n)));if(q){m=h.replace(/([^\^])-/g,"$1- ").split(" ");z=1<d.length||b||1<m.length&&!Q;var e=[],x,G=J(n),u=a.rotation;for(B&&(p=v.applyEllipsis(a,n,h,q));!B&&z&&(m.length||e.length);)a.rotation=0,x=v.getSpanWidth(a,n),h=x>q,void 0===p&&(p=h),h&&1!==m.length?(n.removeChild(n.firstChild),e.unshift(m.pop())):(m=e,e=[],m.length&&!Q&&(n=k.createElementNS(I,"tspan"),g(n,{dy:G,x:A}),E&&g(n,"style",E),c.appendChild(n)),
x>q&&(q=x)),m.length&&n.appendChild(k.createTextNode(m.join(" ").replace(/- /g,"-")));a.rotation=u}y++}}});O=O||c.childNodes.length}),p&&a.attr("title",N(a.textStr,["\x26lt;","\x26gt;"])),n&&n.removeChild(c),e&&a.applyTextOutline&&a.applyTextOutline(e)):c.appendChild(k.createTextNode(N(d)))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,c,v,f,d,m,I){var y=this.label(a,h,b,I,null,null,null,null,"button"),n=0;y.attr(E({padding:8,r:2},v));var A,
k,q,z;v=E({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},v);A=v.style;delete v.style;f=E(v,{fill:"#e6e6e6"},f);k=f.style;delete f.style;d=E(v,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);q=d.style;delete d.style;m=E(v,{style:{color:"#cccccc"}},m);z=m.style;delete m.style;D(y.element,L?"mouseover":"mouseenter",function(){3!==n&&y.setState(1)});D(y.element,L?"mouseout":"mouseleave",function(){3!==n&&y.setState(n)});y.setState=
function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);y.attr([v,f,d,m][a||0]).css([A,k,q,z][a||0])};y.attr(v).css(p({cursor:"default"},A));return y.on("click",function(a){3!==n&&c.call(y,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};J(a)?h.d=a:B(a)&&p(h,
a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=B(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=h.ySetter=function(a,h,b){b.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,b,c,v,f){B(a)?(c=a,h=c.y,b=c.r,a=c.x):c={innerR:c,start:v,end:f};a=this.symbol("arc",a,h,b,b,c);a.r=b;return a},rect:function(a,h,b,c,v,f){v=B(a)?a.r:v;var d=this.createElement("rect");a=B(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(c,0)};void 0!==f&&(a.strokeWidth=
f,a=d.crisp(a));a.fill="none";v&&(a.r=v);d.rSetter=function(a,h,b){g(b,{rx:a,ry:a})};return d.attr(a)},setSize:function(a,h,b){var c=this.alignedObjects,v=c.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:G(b,!0)?void 0:0});v--;)c[v].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,c,v,f){var d={preserveAspectRatio:"none"},
m,I=function(a,h){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",h):a.setAttribute("hc-svg-href",h)};1<arguments.length&&p(d,{x:h,y:b,width:c,height:v});m=this.createElement("image").attr(d);f?(I(m.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),d=new N.Image,D(d,"load",function(h){I(m.element,a);f.call(m,h)}),d.src=a):I(m.element,a);return m},symbol:function(a,h,b,c,v,f){var d=this,m,I=/^url\((.*?)\)$/,n=I.test(a),y=!n&&(this.symbols[a]?
a:"circle"),A=y&&this.symbols[y],q=u(h)&&A&&A.call(this.symbols,Math.round(h),Math.round(b),c,v,f),E,z;A?(m=this.path(q),m.attr("fill","none"),p(m,{symbolName:y,x:h,y:b,width:c,height:v}),f&&p(m,f)):n&&(E=a.match(I)[1],m=this.image(E),m.imgwidth=G(O[E]&&O[E].width,f&&f.width),m.imgheight=G(O[E]&&O[E].height,f&&f.height),z=function(){m.attr({width:m.width,height:m.height})},x(["width","height"],function(a){m[a+"Setter"]=function(a,h){var b={},c=this["img"+h],v="width"===h?"translateX":"translateY";
this[h]=a;u(c)&&(this.element&&this.element.setAttribute(h,c),this.alignByTranslate||(b[v]=((this[h]||0)-c)/2,this.attr(b)))}}),u(h)&&m.attr({x:h,y:b}),m.isImg=!0,u(m.imgwidth)&&u(m.imgheight)?z():(m.attr({width:0,height:0}),l("img",{onload:function(){var a=e[d.chartIndex];0===this.width&&(w(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));O[E]={width:this.width,height:this.height};m.imgwidth=this.width;m.imgheight=this.height;m.element&&z();this.parentNode&&this.parentNode.removeChild(this);
d.imgCount--;if(!d.imgCount&&a&&a.onload)a.onload()},src:E}),this.imgCount++));return m},symbols:{circle:function(a,h,b,c){return this.arc(a+b/2,h+c/2,b/2,c/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,b,c){return["M",a,h,"L",a+b,h,a+b,h+c,a,h+c,"Z"]},triangle:function(a,h,b,c){return["M",a+b/2,h,"L",a+b,h+c,a,h+c,"Z"]},"triangle-down":function(a,h,b,c){return["M",a,h,"L",a+b,h,a+b/2,h+c,"Z"]},diamond:function(a,h,b,c){return["M",a+b/2,h,"L",a+b,h+c/2,a+b/2,h+c,a,h+c/2,"Z"]},arc:function(a,
h,b,c,v){var f=v.start,d=v.r||b,m=v.r||c||b,I=v.end-.001;b=v.innerR;c=G(v.open,.001>Math.abs(v.end-v.start-2*Math.PI));var n=Math.cos(f),p=Math.sin(f),y=Math.cos(I),I=Math.sin(I);v=.001>v.end-f-Math.PI?0:1;d=["M",a+d*n,h+m*p,"A",d,m,0,v,1,a+d*y,h+m*I];u(b)&&d.push(c?"M":"L",a+b*y,h+b*I,"A",b,b,0,v,0,a+b*n,h+b*p);d.push(c?"":"Z");return d},callout:function(a,h,b,c,v){var f=Math.min(v&&v.r||0,b,c),d=f+6,m=v&&v.anchorX;v=v&&v.anchorY;var I;I=["M",a+f,h,"L",a+b-f,h,"C",a+b,h,a+b,h,a+b,h+f,"L",a+b,h+c-
f,"C",a+b,h+c,a+b,h+c,a+b-f,h+c,"L",a+f,h+c,"C",a,h+c,a,h+c,a,h+c-f,"L",a,h+f,"C",a,h,a,h,a+f,h];m&&m>b?v>h+d&&v<h+c-d?I.splice(13,3,"L",a+b,v-6,a+b+6,v,a+b,v+6,a+b,h+c-f):I.splice(13,3,"L",a+b,c/2,m,v,a+b,c/2,a+b,h+c-f):m&&0>m?v>h+d&&v<h+c-d?I.splice(33,3,"L",a,v+6,a-6,v,a,v-6,a,h+f):I.splice(33,3,"L",a,c/2,m,v,a,c/2,a,h+f):v&&v>c&&m>a+d&&m<a+b-d?I.splice(23,3,"L",m+6,h+c,m,h+c+6,m-6,h+c,a+f,h+c):v&&0>v&&m>a+d&&m<a+b-d&&I.splice(3,3,"L",m-6,h,m,h-6,m+6,h,b-f,h);return I}},clipRect:function(h,b,c,
v){var f=a.uniqueKey(),d=this.createElement("clipPath").attr({id:f}).add(this.defs);h=this.rect(h,b,c,v,0).add(d);h.id=f;h.clipPath=d;h.count=0;return h},text:function(a,h,b,c){var v={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,h,b);v.x=Math.round(h||0);b&&(v.y=Math.round(b));if(a||0===a)v.text=a;a=this.createElement("text").attr(v);c||(a.xSetter=function(a,h,b){var c=b.getElementsByTagName("tspan"),v,f=b.getAttribute(h),d;for(d=0;d<c.length;d++)v=c[d],v.getAttribute(h)===f&&v.setAttribute(h,
a);b.setAttribute(h,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,h,b){var v=a;h&&b&&(v=Math.max(v*Math.cos(h*c),4));return{x:-a/3*Math.sin(h*c),y:v}},label:function(h,b,c,f,d,m,I,n,A){var k=this,q=k.g("button"!==A&&"label"),z=q.text=k.text("",0,0,I).attr({zIndex:1}),
y,e,P=0,B=3,Q=0,g,G,l,O,H,J={},M,N,w=/^url\((.*?)\)$/.test(f),t=w,L,r,R,U;A&&q.addClass("highcharts-"+A);t=w;L=function(){return(M||0)%2/2};r=function(){var a=z.element.style,h={};e=(void 0===g||void 0===G||H)&&u(z.textStr)&&z.getBBox();q.width=(g||e.width||0)+2*B+Q;q.height=(G||e.height||0)+2*B;N=B+k.fontMetrics(a&&a.fontSize,z).b;t&&(y||(q.box=y=k.symbols[f]||w?k.symbol(f):k.rect(),y.addClass(("button"===A?"":"highcharts-label-box")+(A?" highcharts-"+A+"-box":"")),y.add(q),a=L(),h.x=a,h.y=(n?-N:
0)+a),h.width=Math.round(q.width),h.height=Math.round(q.height),y.attr(p(h,J)),J={})};R=function(){var a=Q+B,h;h=n?0:N;u(g)&&e&&("center"===H||"right"===H)&&(a+={center:.5,right:1}[H]*(g-e.width));if(a!==z.x||h!==z.y)z.attr("x",a),void 0!==h&&z.attr("y",h);z.x=a;z.y=h};U=function(a,h){y?y.attr(a,h):J[a]=h};q.onAdd=function(){z.add(q);q.attr({text:h||0===h?h:"",x:b,y:c});y&&u(d)&&q.attr({anchorX:d,anchorY:m})};q.widthSetter=function(h){g=a.isNumber(h)?h:null};q.heightSetter=function(a){G=a};q["text-alignSetter"]=
function(a){H=a};q.paddingSetter=function(a){u(a)&&a!==B&&(B=q.padding=a,R())};q.paddingLeftSetter=function(a){u(a)&&a!==Q&&(Q=a,R())};q.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==P&&(P=a,e&&q.attr({x:l}))};q.textSetter=function(a){void 0!==a&&z.textSetter(a);r();R()};q["stroke-widthSetter"]=function(a,h){a&&(t=!0);M=this["stroke-width"]=a;U(h,a)};q.strokeSetter=q.fillSetter=q.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(t=!0),q[h]=a);U(h,a)};q.anchorXSetter=function(a,h){d=q.anchorX=
a;U(h,Math.round(a)-L()-l)};q.anchorYSetter=function(a,h){m=q.anchorY=a;U(h,a-O)};q.xSetter=function(a){q.x=a;P&&(a-=P*((g||e.width)+2*B),q["forceAnimate:x"]=!0);l=Math.round(a);q.attr("translateX",l)};q.ySetter=function(a){O=q.y=Math.round(a);q.attr("translateY",O)};var S=q.css;return p(q,{css:function(a){if(a){var h={};a=E(a);x(q.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b])});z.css(h);"width"in h&&r()}return S.call(q,a)},getBBox:function(){return{width:e.width+2*B,height:e.height+
2*B,x:e.x-B,y:e.y-B}},shadow:function(a){a&&(r(),y&&y.shadow(a));return q},destroy:function(){v(q.element,"mouseenter");v(q.element,"mouseleave");z&&(z=z.destroy());y&&(y=y.destroy());C.prototype.destroy.call(q);q=k=r=R=U=null}})}});a.Renderer=F})(K);(function(a){var C=a.attr,F=a.createElement,D=a.css,r=a.defined,g=a.each,e=a.extend,t=a.isFirefox,w=a.isMS,l=a.isWebKit,u=a.pick,c=a.pInt,d=a.SVGRenderer,k=a.win,x=a.wrap;e(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=a&&"SPAN"===
c.tagName&&a.width)delete a.width,this.textWidth=c,this.htmlUpdateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);D(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,f=this.element,b=this.translateX||0,d=this.translateY||0,k=this.x||0,e=this.y||0,q=this.textAlign||
"left",x={left:0,center:.5,right:1}[q],B=this.styles,l=B&&B.whiteSpace;D(f,{marginLeft:b,marginTop:d});this.shadows&&g(this.shadows,function(a){D(a,{marginLeft:b+1,marginTop:d+1})});this.inverted&&g(f.childNodes,function(b){a.invertChild(b,f)});if("SPAN"===f.tagName){var B=this.rotation,m=this.textWidth&&c(this.textWidth),E=[B,q,f.innerHTML,this.textWidth,this.textAlign].join(),A;(A=m!==this.oldTextWidth)&&!(A=m>this.oldTextWidth)&&((A=this.textPxLength)||(D(f,{width:"",whiteSpace:l||"nowrap"}),A=
f.offsetWidth),A=A>m);A&&/[ \-]/.test(f.textContent||f.innerText)&&(D(f,{width:m+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=m);E!==this.cTT&&(l=a.fontMetrics(f.style.fontSize).b,r(B)&&B!==(this.oldRotation||0)&&this.setSpanRotation(B,x,l),this.getSpanCorrection(!r(B)&&this.textPxLength||f.offsetWidth,l,x,B,q));D(f,{left:k+(this.xCorr||0)+"px",top:e+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=B}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,b){var f={},d=this.renderer.getTransformKey();
f[d]=f.transform="rotate("+a+"deg)";f[d+(t?"Origin":"-origin")]=f.transformOrigin=100*c+"% "+b+"px";D(this.element,f)},getSpanCorrection:function(a,c,b){this.xCorr=-a*b;this.yCorr=-c}});e(d.prototype,{getTransformKey:function(){return w&&!/Edge/.test(k.navigator.userAgent)?"-ms-transform":l?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,c,b){var f=this.createElement("span"),d=f.element,p=f.renderer,q=p.isSVG,k=function(a,b){g(["opacity","visibility"],function(c){x(a,
c+"Setter",function(a,c,f,d){a.call(this,c,f,d);b[f]=c})});a.addedSetters=!0};f.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;this.textStr=a;d.innerHTML=u(a,"");f.doTransform=!0};q&&k(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:a,x:Math.round(c),y:Math.round(b)}).css({fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";f.css=f.htmlCss;q&&(f.add=function(a){var b,c=p.box.parentNode,q=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)q.push(a),a=a.parentGroup;g(q.reverse(),function(a){function d(h,b){a[b]=h;"translateX"===b?m.left=h+"px":m.top=h+"px";a.doTransform=!0}var m,h=C(a.element,"class");h&&(h={className:h});b=a.div=a.div||F("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
pointerEvents:a.styles&&a.styles.pointerEvents},b||c);m=b.style;e(a,{classSetter:function(a){return function(h){this.element.setAttribute("class",h);a.className=h}}(b),on:function(){q[0].div&&f.on.apply({element:q[0].div},arguments);return a},translateXSetter:d,translateYSetter:d});a.addedSetters||k(a,m)})}}else b=c;b.appendChild(d);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})})(K);(function(a){var C=a.defined,F=a.each,D=a.extend,r=a.merge,g=a.pick,e=a.timeUnits,t=a.win;
a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(e){var l=g(e&&e.useUTC,!0),u=this;this.options=e=r(!0,this.options||{},e);this.Date=e.Date||t.Date;this.timezoneOffset=(this.useUTC=l)&&e.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(l&&!e.getTimezoneOffset&&!e.timezone))||this.timezoneOffset?(this.get=function(a,d){var c=d.getTime(),e=c-u.getTimezoneOffset(d);d.setTime(e);a=d["getUTC"+a]();d.setTime(c);return a},
this.set=function(c,d,k){var e;if(-1!==a.inArray(c,["Milliseconds","Seconds","Minutes"]))d["set"+c](k);else e=u.getTimezoneOffset(d),e=d.getTime()-e,d.setTime(e),d["setUTC"+c](k),c=u.getTimezoneOffset(d),e=d.getTime()+c,d.setTime(e)}):l?(this.get=function(a,d){return d["getUTC"+a]()},this.set=function(a,d,k){return d["setUTC"+a](k)}):(this.get=function(a,d){return d["get"+a]()},this.set=function(a,d,k){return d["set"+a](k)})},makeTime:function(e,l,u,c,d,k){var x,p,f;this.useUTC?(x=this.Date.UTC.apply(0,
arguments),p=this.getTimezoneOffset(x),x+=p,f=this.getTimezoneOffset(x),p!==f?x+=f-p:p-36E5!==this.getTimezoneOffset(x-36E5)||a.isSafari||(x-=36E5)):x=(new this.Date(e,l,g(u,1),g(c,0),g(d,0),g(k,0))).getTime();return x},timezoneOffsetFunction:function(){var e=this,g=this.options,u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(g.timezone){if(u)return function(a){return 6E4*-u.tz(a,g.timezone).utcOffset()};a.error(25)}return this.useUTC&&g.getTimezoneOffset?
function(a){return 6E4*g.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,g,u){if(!a.defined(g)||isNaN(g))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");var c=this,d=new this.Date(g),k=this.get("Hours",d),x=this.get("Day",d),p=this.get("Date",d),f=this.get("Month",d),b=this.get("FullYear",d),n=a.defaultOptions.lang,z=n.weekdays,l=n.shortWeekdays,q=a.pad,d=a.extend({a:l?l[x]:z[x].substr(0,3),A:z[x],d:q(p),e:q(p,2," "),w:x,b:n.shortMonths[f],
B:n.months[f],m:q(f+1),y:b.toString().substr(2,2),Y:b,H:q(k),k:k,I:q(k%12||12),l:k%12||12,M:q(c.get("Minutes",d)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:q(d.getSeconds()),L:q(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(d,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(c,g):a)});return u?e.substr(0,1).toUpperCase()+e.substr(1):e},getTimeTicks:function(a,l,u,c){var d=this,k=[],x={},p,f=new d.Date(l),b=a.unitRange,n=a.count||1,z;if(C(l)){d.set("Milliseconds",
f,b>=e.second?0:n*Math.floor(d.get("Milliseconds",f)/n));b>=e.second&&d.set("Seconds",f,b>=e.minute?0:n*Math.floor(d.get("Seconds",f)/n));b>=e.minute&&d.set("Minutes",f,b>=e.hour?0:n*Math.floor(d.get("Minutes",f)/n));b>=e.hour&&d.set("Hours",f,b>=e.day?0:n*Math.floor(d.get("Hours",f)/n));b>=e.day&&d.set("Date",f,b>=e.month?1:n*Math.floor(d.get("Date",f)/n));b>=e.month&&(d.set("Month",f,b>=e.year?0:n*Math.floor(d.get("Month",f)/n)),p=d.get("FullYear",f));b>=e.year&&d.set("FullYear",f,p-p%n);b===e.week&&
d.set("Date",f,d.get("Date",f)-d.get("Day",f)+g(c,1));p=d.get("FullYear",f);c=d.get("Month",f);var J=d.get("Date",f),q=d.get("Hours",f);l=f.getTime();d.variableTimezone&&(z=u-l>4*e.month||d.getTimezoneOffset(l)!==d.getTimezoneOffset(u));f=f.getTime();for(l=1;f<u;)k.push(f),f=b===e.year?d.makeTime(p+l*n,0):b===e.month?d.makeTime(p,c+l*n):!z||b!==e.day&&b!==e.week?z&&b===e.hour&&1<n?d.makeTime(p,c,J,q+l*n):f+b*n:d.makeTime(p,c,J+l*n*(b===e.day?1:7)),l++;k.push(f);b<=e.hour&&1E4>k.length&&F(k,function(a){0===
a%18E5&&"000000000"===d.dateFormat("%H%M%S%L",a)&&(x[a]="day")})}k.info=D(a,{higherRanks:x,totalRange:b*n});return k}}})(K);(function(a){var C=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},
title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},
itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",
minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",
fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(C){a.defaultOptions=F(!0,a.defaultOptions,C);a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;
a.time=new a.Time(F(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(C,r,g){return a.time.dateFormat(C,r,g)}})(K);(function(a){var C=a.correctFloat,F=a.defined,D=a.destroyObjectProperties,r=a.fireEvent,g=a.isNumber,e=a.merge,t=a.pick,w=a.deg2rad;a.Tick=function(a,e,c,d){this.axis=a;this.pos=e;this.type=c||"";this.isNewLabel=this.isNew=!0;c||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,g=a.options,c=a.chart,d=a.categories,k=a.names,x=this.pos,p=g.labels,
f=a.tickPositions,b=x===f[0],n=x===f[f.length-1],k=d?t(d[x],k[x],x):x,d=this.label,f=f.info,z;a.isDatetimeAxis&&f&&(z=g.dateTimeLabelFormats[f.higherRanks[x]||f.unitName]);this.isFirst=b;this.isLast=n;g=a.labelFormatter.call({axis:a,chart:c,isFirst:b,isLast:n,dateTimeLabelFormat:z,value:a.isLog?C(a.lin2log(k)):k,pos:x});if(F(d))d&&d.attr({text:g});else{if(this.label=d=F(g)&&p.enabled?c.renderer.text(g,0,0,p.useHTML).css(e(p.style)).add(a.labelGroup):null)d.textPxLength=d.getBBox().width;this.rotation=
0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,c=e.options.labels,d=a.x,k=e.chart.chartWidth,g=e.chart.spacing,p=t(e.labelLeft,Math.min(e.pos,g[3])),g=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,k-g[1])),f=this.label,b=this.rotation,n={left:0,center:.5,right:1}[e.labelAlign||f.attr("align")],z=f.getBBox().width,l=e.getSlotWidth(),q=l,L=1,B,H={};if(b||!1===c.overflow)0>b&&d-n*z<p?B=Math.round(d/
Math.cos(b*w)-p):0<b&&d+n*z>g&&(B=Math.round((k-d)/Math.cos(b*w)));else if(k=d+(1-n)*z,d-n*z<p?q=a.x+q*(1-n)-p:k>g&&(q=g-a.x+q*n,L=-1),q=Math.min(l,q),q<l&&"center"===e.labelAlign&&(a.x+=L*(l-q-n*(l-Math.min(z,q)))),z>q||e.autoRotation&&(f.styles||{}).width)B=q;B&&(H.width=B,(c.style||{}).textOverflow||(H.textOverflow="ellipsis"),f.css(H))},getPosition:function(e,g,c,d){var k=this.axis,x=k.chart,p=d&&x.oldChartHeight||x.chartHeight;e={x:e?a.correctFloat(k.translate(g+c,null,null,d)+k.transB):k.left+
k.offset+(k.opposite?(d&&x.oldChartWidth||x.chartWidth)-k.right-k.left:0),y:e?p-k.bottom+k.offset-(k.opposite?k.height:0):a.correctFloat(p-k.translate(g+c,null,null,d)-k.transB)};r(this,"afterGetPosition",{pos:e});return e},getLabelPosition:function(a,e,c,d,k,g,p,f){var b=this.axis,n=b.transA,z=b.reversed,x=b.staggerLines,q=b.tickRotCorr||{x:0,y:0},l=k.y,B=d||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1),u={};F(l)||(l=0===b.side?c.rotation?-8:-c.getBBox().height:2===b.side?
q.y+8:Math.cos(c.rotation*w)*(q.y-c.getBBox(!1,0).height/2));a=a+k.x+B+q.x-(g&&d?g*n*(z?-1:1):0);e=e+l-(g&&!d?g*n*(z?1:-1):0);x&&(c=p/(f||1)%x,b.opposite&&(c=x-c-1),e+=b.labelOffset/x*c);u.x=a;u.y=Math.round(e);r(this,"afterGetLabelPosition",{pos:u});return u},getMarkPath:function(a,e,c,d,k,g){return g.crispLine(["M",a,e,"L",a+(k?0:-c),e+(k?c:0)],d)},renderGridLine:function(a,e,c){var d=this.axis,k=d.options,g=this.gridLine,p={},f=this.pos,b=this.type,n=d.tickmarkOffset,z=d.chart.renderer,l=b?b+"Grid":
"grid",q=k[l+"LineWidth"],u=k[l+"LineColor"],k=k[l+"LineDashStyle"];g||(p.stroke=u,p["stroke-width"]=q,k&&(p.dashstyle=k),b||(p.zIndex=1),a&&(p.opacity=0),this.gridLine=g=z.path().attr(p).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(d.gridGroup));if(!a&&g&&(a=d.getPlotLinePath(f+n,g.strokeWidth()*c,a,!0)))g[this.isNew?"attr":"animate"]({d:a,opacity:e})},renderMark:function(a,e,c){var d=this.axis,k=d.options,g=d.chart.renderer,p=this.type,f=p?p+"Tick":"tick",b=d.tickSize(f),n=this.mark,z=!n,
l=a.x;a=a.y;var q=t(k[f+"Width"],!p&&d.isXAxis?1:0),k=k[f+"Color"];b&&(d.opposite&&(b[0]=-b[0]),z&&(this.mark=n=g.path().addClass("highcharts-"+(p?p+"-":"")+"tick").add(d.axisGroup),n.attr({stroke:k,"stroke-width":q})),n[z?"attr":"animate"]({d:this.getMarkPath(l,a,b[0],n.strokeWidth()*c,d.horiz,g),opacity:e}))},renderLabel:function(a,e,c,d){var k=this.axis,x=k.horiz,p=k.options,f=this.label,b=p.labels,n=b.step,k=k.tickmarkOffset,z=!0,u=a.x;a=a.y;f&&g(u)&&(f.xy=a=this.getLabelPosition(u,a,f,x,b,k,
d,n),this.isFirst&&!this.isLast&&!t(p.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(p.showLastLabel,1)?z=!1:!x||b.step||b.rotation||e||0===c||this.handleOverflow(a),n&&d%n&&(z=!1),z&&g(a.y)?(a.opacity=c,f[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))},render:function(e,g,c){var d=this.axis,k=d.horiz,x=this.getPosition(k,this.pos,d.tickmarkOffset,g),p=x.x,f=x.y,d=k&&p===d.pos+d.len||!k&&f===d.pos?-1:1;c=t(c,1);this.isActive=!0;this.renderGridLine(g,
c,d);this.renderMark(x,c,d);this.renderLabel(x,g,c,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){D(this,this.axis)}}})(K);var V=function(a){var C=a.addEvent,F=a.animObject,D=a.arrayMax,r=a.arrayMin,g=a.color,e=a.correctFloat,t=a.defaultOptions,w=a.defined,l=a.deg2rad,u=a.destroyObjectProperties,c=a.each,d=a.extend,k=a.fireEvent,x=a.format,p=a.getMagnitude,f=a.grep,b=a.inArray,n=a.isArray,z=a.isNumber,J=a.isString,q=a.merge,L=a.normalizeTickInterval,B=a.objectEach,H=a.pick,m=
a.removeEvent,E=a.splat,A=a.syncTimeout,M=a.Tick,G=function(){this.init.apply(this,arguments)};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",
tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,
-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,c){var h=c.isX,v=this;v.chart=a;v.horiz=a.inverted&&!v.isZAxis?!h:h;v.isXAxis=h;v.coll=v.coll||
(h?"xAxis":"yAxis");k(this,"init",{userOptions:c});v.opposite=c.opposite;v.side=c.side||(v.horiz?v.opposite?0:2:v.opposite?1:3);v.setOptions(c);var f=this.options,d=f.type;v.labelFormatter=f.labels.formatter||v.defaultLabelFormatter;v.userOptions=c;v.minPixelPadding=0;v.reversed=f.reversed;v.visible=!1!==f.visible;v.zoomEnabled=!1!==f.zoomEnabled;v.hasNames="category"===d||!0===f.categories;v.categories=f.categories||v.hasNames;v.names||(v.names=[],v.names.keys={});v.plotLinesAndBandsGroups={};v.isLog=
"logarithmic"===d;v.isDatetimeAxis="datetime"===d;v.positiveValuesOnly=v.isLog&&!v.allowNegativeLog;v.isLinked=w(f.linkedTo);v.ticks={};v.labelEdge=[];v.minorTicks={};v.plotLinesAndBands=[];v.alternateBands={};v.len=0;v.minRange=v.userMinRange=f.minRange||f.maxZoom;v.range=f.range;v.offset=f.offset||0;v.stacks={};v.oldStacks={};v.stacksTouched=0;v.max=null;v.min=null;v.crosshair=H(f.crosshair,E(a.options.tooltip.crosshairs)[h?0:1],!1);c=v.options.events;-1===b(v,a.axes)&&(h?a.axes.splice(a.xAxis.length,
0,v):a.axes.push(v),a[v.coll].push(v));v.series=v.series||[];a.inverted&&!v.isZAxis&&h&&void 0===v.reversed&&(v.reversed=!0);B(c,function(a,h){C(v,h,a)});v.lin2log=f.linearToLogConverter||v.lin2log;v.isLog&&(v.val2lin=v.log2lin,v.lin2val=v.lin2log);k(this,"afterInit")},setOptions:function(a){this.options=q(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
q(t[this.coll],a));k(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var h=this.axis,b=this.value,c=h.chart.time,f=h.categories,d=this.dateTimeLabelFormat,m=t.lang,q=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,p=q&&q.length,n,e=h.options.labels.format,h=h.isLog?Math.abs(b):h.tickInterval;if(e)n=x(e,this,c);else if(f)n=b;else if(d)n=c.dateFormat(d,b);else if(p&&1E3<=h)for(;p--&&void 0===n;)c=Math.pow(m,p+1),h>=c&&0===10*b%c&&null!==q[p]&&0!==b&&(n=a.numberFormat(b/c,
-1)+q[p]);void 0===n&&(n=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return n},getSeriesExtremes:function(){var a=this,b=a.chart;k(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();c(a.series,function(h){if(h.visible||!b.options.chart.ignoreHiddenSeries){var v=h.options,c=v.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)v=h.xData,
v.length&&(h=r(v),d=D(v),z(h)||h instanceof Date||(v=f(v,z),h=r(v),d=D(v)),v.length&&(a.dataMin=Math.min(H(a.dataMin,v[0],h),h),a.dataMax=Math.max(H(a.dataMax,v[0],d),d)));else if(h.getExtremes(),d=h.dataMax,h=h.dataMin,w(h)&&w(d)&&(a.dataMin=Math.min(H(a.dataMin,h),h),a.dataMax=Math.max(H(a.dataMax,d),d)),w(c)&&(a.threshold=c),!v.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});k(this,"afterGetSeriesExtremes")},translate:function(a,b,c,f,d,m){var h=this.linkedParent||this,v=1,I=0,q=f?
h.oldTransA:h.transA;f=f?h.oldMin:h.min;var p=h.minPixelPadding;d=(h.isOrdinal||h.isBroken||h.isLog&&d)&&h.lin2val;q||(q=h.transA);c&&(v*=-1,I=h.len);h.reversed&&(v*=-1,I-=v*(h.sector||h.len));b?(a=(a*v+I-p)/q+f,d&&(a=h.lin2val(a))):(d&&(a=h.val2lin(a)),a=z(f)?v*(a-f)*q+I+v*p+(z(m)?q*m:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,
b,c,f,d){var h=this.chart,v=this.left,m=this.top,I,q,p=c&&h.oldChartHeight||h.chartHeight,n=c&&h.oldChartWidth||h.chartWidth,e;I=this.transB;var A=function(a,h,b){if(a<h||a>b)f?a=Math.min(Math.max(h,a),b):e=!0;return a};d=H(d,this.translate(a,null,null,c));d=Math.min(Math.max(-1E5,d),1E5);a=c=Math.round(d+I);I=q=Math.round(p-d-I);z(d)?this.horiz?(I=m,q=p-this.bottom,a=c=A(a,v,v+this.width)):(a=v,c=n-this.right,I=q=A(I,m,m+this.height)):(e=!0,f=!1);return e&&!f?null:h.renderer.crispLine(["M",a,I,"L",
c,q],b||1)},getLinearTickPositions:function(a,b,c){var h,v=e(Math.floor(b/a)*a);c=e(Math.ceil(c/a)*a);var f=[],d;e(v+a)===v&&(d=20);if(this.single)return[b];for(b=v;b<=c;){f.push(b);b=e(b+a,d);if(b===h)break;h=b}return f},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?H(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,f=a.tickPositions,d=a.minorTickInterval,m=[],q=a.pointRangePadding||0,p=a.min-
q,q=a.max+q,n=q-p;if(n&&n/d<a.len/3)if(a.isLog)c(this.paddedTicks,function(h,b,c){b&&m.push.apply(m,a.getLogTickPositions(d,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())m=m.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),p,q,b.startOfWeek));else for(b=p+(f[0]-p)%d;b<=q&&b!==m[0];b+=d)m.push(b);0!==m.length&&a.trimTicks(m);return m},adjustForMinRange:function(){var a=this.options,b=this.min,f=this.max,d,m,q,p,n,e,A,k;this.isXAxis&&void 0===this.minRange&&!this.isLog&&
(w(a.min)||w(a.max)?this.minRange=null:(c(this.series,function(a){e=a.xData;for(p=A=a.xIncrement?1:e.length-1;0<p;p--)if(n=e[p]-e[p-1],void 0===q||n<q)q=n}),this.minRange=Math.min(5*q,this.dataMax-this.dataMin)));f-b<this.minRange&&(m=this.dataMax-this.dataMin>=this.minRange,k=this.minRange,d=(k-f+b)/2,d=[b-d,H(a.min,b-d)],m&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=D(d),f=[b+k,H(a.max,b+k)],m&&(f[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),f=r(f),f-b<k&&(d[0]=f-k,d[1]=
H(a.min,f-k),b=D(d)));this.min=b;this.max=f},getClosest:function(){var a;this.categories?a=1:c(this.series,function(h){var b=h.closestPointRange,c=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&w(b)&&c&&(a=w(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=n(this.categories),c=h?this.categories:this.names,f=a.options.x,d;a.series.requireSorting=!1;w(f)||(f=!1===this.options.uniqueNames?a.series.autoIncrement():h?b(a.name,c):H(c.keys[a.name],-1));-1===f?h||(d=c.length):
d=f;void 0!==d&&(this.names[d]=a.name,this.names.keys[a.name]=d);return d},updateNames:function(){var h=this,b=this.names;0<b.length&&(c(a.keys(b.keys),function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,c(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();c(a.points,function(b,c){var f;b.options&&(f=h.nameToX(b),void 0!==f&&f!==b.x&&(b.x=f,a.xData[c]=f))})}))},setAxisTranslation:function(a){var h=this,b=h.max-h.min,f=
h.axisPointRange||0,d,m=0,q=0,p=h.linkedParent,n=!!h.categories,e=h.transA,A=h.isXAxis;if(A||n||f)d=h.getClosest(),p?(m=p.minPointOffset,q=p.pointRangePadding):c(h.series,function(a){var b=n?1:A?H(a.options.pointRange,d,0):h.axisPointRange||0;a=a.options.pointPlacement;f=Math.max(f,b);h.single||(m=Math.max(m,J(a)?0:b/2),q=Math.max(q,"on"===a?0:b))}),p=h.ordinalSlope&&d?h.ordinalSlope/d:1,h.minPointOffset=m*=p,h.pointRangePadding=q*=p,h.pointRange=Math.min(f,b),A&&(h.closestPointRange=d);a&&(h.oldTransA=
e);h.translationSlope=h.transA=e=h.options.staticScale||h.len/(b+q||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=e*m;k(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var b=this,f=b.chart,d=b.options,m=b.isLog,q=b.isDatetimeAxis,n=b.isXAxis,A=b.isLinked,E=d.maxPadding,g=d.minPadding,B=d.tickInterval,x=d.tickPixelInterval,G=b.categories,u=z(b.threshold)?b.threshold:null,l=b.softThreshold,t,J,M,r;q||G||A||this.getTickAmount();
M=H(b.userMin,d.min);r=H(b.userMax,d.max);A?(b.linkedParent=f[b.coll][d.linkedTo],f=b.linkedParent.getExtremes(),b.min=H(f.min,f.dataMin),b.max=H(f.max,f.dataMax),d.type!==b.linkedParent.options.type&&a.error(11,1)):(!l&&w(u)&&(b.dataMin>=u?(t=u,g=0):b.dataMax<=u&&(J=u,E=0)),b.min=H(M,t,b.dataMin),b.max=H(r,J,b.dataMax));m&&(b.positiveValuesOnly&&!h&&0>=Math.min(b.min,H(b.dataMin,b.min))&&a.error(10,1),b.min=e(b.log2lin(b.min),15),b.max=e(b.log2lin(b.max),15));b.range&&w(b.max)&&(b.userMin=b.min=
M=Math.max(b.dataMin,b.minFromRange()),b.userMax=r=b.max,b.range=null);k(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(G||b.axisPointRange||b.usePercentage||A)&&w(b.min)&&w(b.max)&&(f=b.max-b.min)&&(!w(M)&&g&&(b.min-=f*g),!w(r)&&E&&(b.max+=f*E));z(d.softMin)&&!z(b.userMin)&&(b.min=Math.min(b.min,d.softMin));z(d.softMax)&&!z(b.userMax)&&(b.max=Math.max(b.max,d.softMax));z(d.floor)&&(b.min=Math.max(b.min,d.floor));z(d.ceiling)&&(b.max=Math.min(b.max,d.ceiling));l&&w(b.dataMin)&&
(u=u||0,!w(M)&&b.min<u&&b.dataMin>=u?b.min=u:!w(r)&&b.max>u&&b.dataMax<=u&&(b.max=u));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:A&&!B&&x===b.linkedParent.options.tickPixelInterval?B=b.linkedParent.tickInterval:H(B,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,G?1:(b.max-b.min)*x/Math.max(b.len,x));n&&!h&&c(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();
b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!B&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));h=H(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!B&&b.tickInterval<h&&(b.tickInterval=h);q||m||B||(b.tickInterval=L(b.tickInterval,null,p(b.tickInterval),H(d.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=
this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var f=a.tickPositioner,d=a.startOnTick,m=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&w(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=b=f);this.paddedTicks=b.slice(0);this.trimTicks(b,d,m);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||
f||this.adjustTickAmount());k(this,"afterSetTickPositions")},trimTicks:function(a,b,c){var h=a[0],f=a[a.length-1],d=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-d>a[0];)a.shift();if(c)this.max=f;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&w(h)&&!this.options.tickPositions&&a.push((f+h)/2)}},alignToOthers:function(){var a={},b,f=this.options;!1===this.chart.options.chart.alignTicks||!1===f.alignTicks||!1===f.startOnTick||!1===f.endOnTick||
this.isLog||c(this.chart[this.coll],function(h){var c=h.options,c=[h.horiz?c.left:c.top,c.width,c.height,c.pane].join();h.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!w(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=
this.tickPositions,c=this.tickAmount,f=this.finalTickAmt,d=b&&b.length,m=H(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(d<c){for(;b.length<c;)b.length%2||this.min===m?b.push(e(b[b.length-1]+a)):b.unshift(e(b[0]-a));this.transA*=(d-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else d>c&&(this.tickInterval*=2,this.setTickPositions());if(w(f)){for(a=c=b.length;a--;)(3===f&&1===a%2||2>=f&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}}},setScale:function(){var a,b;this.oldMin=
this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=
b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();k(this,"afterSetScale")},setExtremes:function(a,b,f,m,q){var h=this,p=h.chart;f=H(f,!0);c(h.series,function(a){delete a.kdTree});q=d(q,{min:a,max:b});k(h,"setExtremes",q,function(){h.userMin=a;h.userMax=b;h.eventArgs=q;f&&p.redraw(m)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,f=this.options,d=Math.min(h,H(f.min,h)),f=Math.max(c,H(f.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(w(h)&&
(a<d&&(a=d),a>f&&(a=f)),w(c)&&(b<d&&(b=d),b>f&&(b=f))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,f=c.offsets||[0,0,0,0],d=this.horiz,m=this.width=Math.round(a.relativeLength(H(c.width,b.plotWidth-f[3]+f[1]),b.plotWidth)),q=this.height=Math.round(a.relativeLength(H(c.height,b.plotHeight-f[0]+f[2]),b.plotHeight)),p=this.top=Math.round(a.relativeLength(H(c.top,b.plotTop+f[0]),b.plotHeight,b.plotTop)),
c=this.left=Math.round(a.relativeLength(H(c.left,b.plotLeft+f[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-q-p;this.right=b.chartWidth-m-c;this.len=Math.max(d?m:q,0);this.pos=d?c:p},getExtremes:function(){var a=this.isLog;return{min:a?e(this.lin2log(this.min)):this.min,max:a?e(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=b?this.lin2log(this.min):this.min,b=b?this.lin2log(this.max):
this.max;null===a||-Infinity===a?a=h:Infinity===a?a=b:h>a?a=h:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(H(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=H(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,f=this.tickInterval,d=f,m=this.len/(((this.categories?1:0)+this.max-this.min)/f),q,p=a.rotation,n=this.labelMetrics(),A,k=Number.MAX_VALUE,E,z=function(a){a/=m||1;a=1<a?Math.ceil(a):1;return e(a*f)};b?(E=!a.staggerLines&&!a.step&&(w(p)?[p]:m<H(a.autoRotationLimit,80)&&a.autoRotation))&&c(E,function(a){var b;if(a===p||a&&-90<=a&&90>=a)A=z(Math.abs(n.h/Math.sin(l*a))),b=
A+Math.abs(a/360),b<k&&(k=b,q=a,d=A)}):a.step||(d=z(n.h));this.autoRotation=E;this.labelRotation=H(q,p);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,f=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/f||!b&&(c.style&&parseInt(c.style.width,10)||d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,f=this.tickPositions,d=this.ticks,
m=this.options.labels,q=this.horiz,p=this.getSlotWidth(),n=Math.max(1,Math.round(p-2*(m.padding||5))),e={},A=this.labelMetrics(),k=m.style&&m.style.textOverflow,E,z,g=0,B;J(m.rotation)||(e.rotation=m.rotation||0);c(f,function(a){(a=d[a])&&a.label&&a.label.textPxLength>g&&(g=a.label.textPxLength)});this.maxLabelLength=g;if(this.autoRotation)g>n&&g>A.h?e.rotation=this.labelRotation:this.labelRotation=0;else if(p&&(E=n,!k))for(z="clip",n=f.length;!q&&n--;)if(B=f[n],B=d[B].label)B.styles&&"ellipsis"===
B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>p&&B.css({width:p+"px"}),B.getBBox().height>this.len/f.length-(A.h-A.f)&&(B.specificTextOverflow="ellipsis");e.rotation&&(E=g>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,k||(z="ellipsis"));if(this.labelAlign=m.align||this.autoLabelAlign(this.labelRotation))e.align=this.labelAlign;c(f,function(a){var b=(a=d[a])&&a.label,h={};b&&(b.attr(e),!E||m.style&&m.style.width||!(E<b.textPxLength||"SPAN"===b.element.tagName)||(h.width=E,k||
(h.textOverflow=b.specificTextOverflow||z),b.css(h)),delete b.specificTextOverflow,a.rotation=e.rotation)});this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||w(this.min)&&w(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,f=this.options.title,d;this.axisTitle||((d=f.textAlign)||(d=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",
middle:"center",high:c?"left":"right"})[f.align]),this.axisTitle=b.text(f.text,0,0,f.useHTML).attr({zIndex:7,rotation:f.rotation||0,align:d}).addClass("highcharts-axis-title").css(q(f.style)).add(this.axisGroup),this.axisTitle.isNew=!0);f.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new M(this,a)},getOffset:function(){var a=this,b=a.chart,f=b.renderer,d=a.options,m=a.tickPositions,
q=a.ticks,p=a.horiz,n=a.side,e=b.inverted&&!a.isZAxis?[1,0,3,2][n]:n,A,k,E=0,z,g=0,x=d.title,G=d.labels,u=0,l=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][n],J=d.className,M=a.axisParent,r=this.tickSize("tick");A=a.hasData();a.showAxis=k=A||H(d.showEmpty,!0);a.staggerLines=a.horiz&&G.staggerLines;a.axisGroup||(a.gridGroup=f.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(J||"")).add(M),a.axisGroup=f.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+
this.coll.toLowerCase()+" "+(J||"")).add(M),a.labelGroup=f.g("axis-labels").attr({zIndex:G.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(J||"")).add(M));A||a.isLinked?(c(m,function(b,f){a.generateTick(b,f)}),a.renderUnsquish(),a.reserveSpaceDefault=0===n||2===n||{1:"left",3:"right"}[n]===a.labelAlign,H(G.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c(m,function(a){u=Math.max(q[a].getLabelSize(),u)}),a.staggerLines&&(u*=a.staggerLines),a.labelOffset=u*
(a.opposite?-1:1)):B(q,function(a,b){a.destroy();delete q[b]});x&&x.text&&!1!==x.enabled&&(a.addTitle(k),k&&!1!==x.reserveSpace&&(a.titleOffset=E=a.axisTitle.getBBox()[p?"height":"width"],z=x.offset,g=w(z)?0:H(x.margin,p?5:10)));a.renderLine();a.offset=t*H(d.offset,l[n]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};f=0===n?-a.labelMetrics().h:2===n?a.tickRotCorr.y:0;g=Math.abs(u)+g;u&&(g=g-f+t*(p?H(G.y,a.tickRotCorr.y+8*t):G.x));a.axisTitleMargin=H(z,g);l[n]=Math.max(l[n],a.axisTitleMargin+E+t*a.offset,
g,A&&m.length&&r?r[0]+t*a.offset:0);d=d.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[e]=Math.max(b[e],d)},getLinePath:function(a){var b=this.chart,f=this.opposite,c=this.offset,h=this.horiz,d=this.left+(f?this.width:0)+c,c=b.chartHeight-this.bottom-(f?this.height:0)+c;f&&(a*=-1);return b.renderer.crispLine(["M",h?this.left:d,h?c:this.top,"L",h?b.chartWidth-this.right:d,h?c:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,f=this.top,c=this.len,d=this.options.title,m=a?b:f,q=this.opposite,p=this.offset,n=d.x||0,e=d.y||0,A=this.axisTitle,k=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-k.h-1,0),c={low:m+(a?0:c),middle:m+c/2,high:m+(a?c:0)}[d.align],b=(a?f+this.height:b)+(a?1:-1)*(q?-1:1)*this.axisTitleMargin+[-A,
A,k.f,-A][this.side];return{x:a?c+n:b+(q?this.width:0)+p+n,y:a?b+e-(q?this.height:0)+p:c+e}},renderMinorTick:function(a){var b=this.chart.hasRendered&&z(this.oldMin),f=this.minorTicks;f[a]||(f[a]=new M(this,a,"minor"));b&&f[a].isNew&&f[a].render(null,!0);f[a].render(null,!1,1)},renderTick:function(a,b){var f=this.isLinked,c=this.ticks,d=this.chart.hasRendered&&z(this.oldMin);if(!f||a>=this.min&&a<=this.max)c[a]||(c[a]=new M(this,a)),d&&c[a].isNew&&c[a].render(b,!0,.1),c[a].render(b)},render:function(){var b=
this,f=b.chart,d=b.options,m=b.isLog,q=b.isLinked,p=b.tickPositions,n=b.axisTitle,e=b.ticks,E=b.minorTicks,g=b.alternateBands,x=d.stackLabels,G=d.alternateGridColor,u=b.tickmarkOffset,l=b.axisLine,H=b.showAxis,t=F(f.renderer.globalAnimation),J,r;b.labelEdge.length=0;b.overlap=!1;c([e,E,g],function(a){B(a,function(a){a.isActive=!1})});if(b.hasData()||q)b.minorTickInterval&&!b.categories&&c(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),p.length&&(c(p,function(a,f){b.renderTick(a,f)}),
u&&(0===b.min||b.single)&&(e[-1]||(e[-1]=new M(b,-1,null,!0)),e[-1].render(-1))),G&&c(p,function(c,d){r=void 0!==p[d+1]?p[d+1]+u:b.max-u;0===d%2&&c<b.max&&r<=b.max+(f.polar?-u:u)&&(g[c]||(g[c]=new a.PlotLineOrBand(b)),J=c+u,g[c].options={from:m?b.lin2log(J):J,to:m?b.lin2log(r):r,color:G},g[c].render(),g[c].isActive=!0)}),b._addedPlotLB||(c((d.plotLines||[]).concat(d.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);c([e,E,g],function(a){var b,c=[],d=t.duration;B(a,function(a,
b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});A(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==g&&f.hasRendered&&d?d:0)});l&&(l[l.isPlaced?"animate":"attr"]({d:this.getLinePath(l.strokeWidth())}),l.isPlaced=!0,l[H?"show":"hide"](!0));n&&H&&(d=b.getTitlePosition(),z(d.y)?(n[n.isNew?"attr":"animate"](d),n.isNew=!1):(n.attr("y",-9999),n.isNew=!0));x&&x.enabled&&b.renderStackTotals();b.isDirty=!1;k(this,"afterRender")},redraw:function(){this.visible&&
(this.render(),c(this.plotLinesAndBands,function(a){a.render()}));c(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var f=this,d=f.stacks,h=f.plotLinesAndBands,q;k(this,"destroy",{keepEvents:a});a||m(f);B(d,function(a,b){u(a);d[b]=null});c([f.ticks,f.minorTicks,f.alternateBands],function(a){u(a)});if(h)for(a=h.length;a--;)h[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){f[a]&&(f[a]=f[a].destroy())});for(q in f.plotLinesAndBandsGroups)f.plotLinesAndBandsGroups[q]=f.plotLinesAndBandsGroups[q].destroy();B(f,function(a,c){-1===b(c,f.keepProps)&&delete f[c]})},drawCrosshair:function(a,b){var f,c=this.crosshair,d=H(c.snap,!0),h,m=this.cross;k(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(w(b)||!d)){d?w(b)&&(h=H(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+
this.pos);w(h)&&(f=this.getPlotLinePath(b&&(this.isXAxis?b.x:H(b.stackY,b.y)),null,null,null,h)||null);if(!w(f)){this.hideCrosshair();return}d=this.categories&&!this.isRadial;m||(this.cross=m=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(d?"category ":"thin ")+c.className).attr({zIndex:H(c.zIndex,2)}).add(),m.attr({stroke:c.color||(d?g("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":H(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&m.attr({dashstyle:c.dashStyle}));
m.show().attr({d:f});d&&!c.width&&m.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();k(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=G}(K);(function(a){var C=a.Axis,F=a.getMagnitude,D=a.normalizeTickInterval,r=a.timeUnits;C.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};C.prototype.normalizeTimeTickInterval=function(a,e){var g=e||[["millisecond",[1,
2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=g[g.length-1];var w=r[e[0]],l=e[1],u;for(u=0;u<g.length&&!(e=g[u],w=r[e[0]],l=e[1],g[u+1]&&a<=(w*l[l.length-1]+r[g[u+1][0]])/2);u++);w===r.year&&a<5*w&&(l=[1,2,5]);a=D(a/w,l,"year"===e[0]?Math.max(F(a/w),1):1);return{unitRange:w,count:a,unitName:e[0]}}})(K);(function(a){var C=a.Axis,F=a.getMagnitude,D=a.map,r=a.normalizeTickInterval,
g=a.pick;C.prototype.getLogTickPositions=function(a,t,w,l){var e=this.options,c=this.len,d=[];l||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,t,w);else if(.08<=a)for(var c=Math.floor(t),k,x,p,f,b,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];c<w+1&&!b;c++)for(x=e.length,k=0;k<x&&!b;k++)p=this.log2lin(this.lin2log(c)*e[k]),p>t&&(!l||f<=w)&&void 0!==f&&d.push(f),f>w&&(b=!0),f=p;else t=this.lin2log(t),w=this.lin2log(w),a=l?this.getMinorTickInterval():
e.tickInterval,a=g("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(l?5:1)*(w-t)/((l?c/this.tickPositions.length:c)||1)),a=r(a,null,F(a)),d=D(this.getLinearTickPositions(a,t,w),this.log2lin),l||(this._minorAutoInterval=a/5);l||(this.tickInterval=a);return d};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a,C){var F=a.arrayMax,D=a.arrayMin,r=a.defined,g=a.destroyObjectProperties,e=a.each,t=a.erase,w=
a.merge,l=a.pick;a.PlotLineOrBand=function(a,c){this.axis=a;c&&(this.options=c,this.id=c.id)};a.PlotLineOrBand.prototype={render:function(){var e=this,c=e.axis,d=c.horiz,k=e.options,g=k.label,p=e.label,f=k.to,b=k.from,n=k.value,z=r(b)&&r(f),J=r(n),q=e.svgElem,t=!q,B=[],H=k.color,m=l(k.zIndex,0),E=k.events,B={"class":"highcharts-plot-"+(z?"band ":"line ")+(k.className||"")},A={},M=c.chart.renderer,G=z?"bands":"lines";c.isLog&&(b=c.log2lin(b),f=c.log2lin(f),n=c.log2lin(n));J?(B={stroke:H,"stroke-width":k.width},
k.dashStyle&&(B.dashstyle=k.dashStyle)):z&&(H&&(B.fill=H),k.borderWidth&&(B.stroke=k.borderColor,B["stroke-width"]=k.borderWidth));A.zIndex=m;G+="-"+m;(H=c.plotLinesAndBandsGroups[G])||(c.plotLinesAndBandsGroups[G]=H=M.g("plot-"+G).attr(A).add());t&&(e.svgElem=q=M.path().attr(B).add(H));if(J)B=c.getPlotLinePath(n,q.strokeWidth());else if(z)B=c.getPlotBandPath(b,f,k);else return;t&&B&&B.length?(q.attr({d:B}),E&&a.objectEach(E,function(a,b){q.on(b,function(a){E[b].apply(e,[a])})})):q&&(B?(q.show(),
q.animate({d:B})):(q.hide(),p&&(e.label=p=p.destroy())));g&&r(g.text)&&B&&B.length&&0<c.width&&0<c.height&&!B.flat?(g=w({align:d&&z&&"center",x:d?!z&&4:10,verticalAlign:!d&&z&&"middle",y:d?z?16:10:z?6:-4,rotation:d&&!z&&90},g),this.renderLabel(g,B,z,m)):p&&p.hide();return e},renderLabel:function(a,c,d,e){var k=this.label,p=this.axis.chart.renderer;k||(k={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},k.zIndex=e,this.label=k=
p.text(a.text,0,0,a.useHTML).attr(k).add(),k.css(a.style));e=c.xBounds||[c[1],c[4],d?c[6]:c[1]];c=c.yBounds||[c[2],c[5],d?c[7]:c[2]];d=D(e);p=D(c);k.align(a,!1,{x:d,y:p,width:F(e)-d,height:F(c)-p});k.show()},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;g(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,c){var d=this.getPlotLinePath(c,null,null,!0),e=this.getPlotLinePath(a,null,null,!0),g=[],p=this.horiz,f=1,b;a=a<this.min&&c<this.min||a>this.max&&c>this.max;if(e&&
d)for(a&&(b=e.toString()===d.toString(),f=0),a=0;a<e.length;a+=6)p&&d[a+1]===e[a+1]?(d[a+1]+=f,d[a+4]+=f):p||d[a+2]!==e[a+2]||(d[a+2]+=f,d[a+5]+=f),g.push("M",e[a+1],e[a+2],"L",e[a+4],e[a+5],d[a+4],d[a+5],d[a+1],d[a+2],"z"),g.flat=b;return g},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(e,c){var d=(new a.PlotLineOrBand(this,e)).render(),k=this.userOptions;d&&(c&&(k[c]=k[c]||[],
k[c].push(e)),this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var c=this.plotLinesAndBands,d=this.options,k=this.userOptions,g=c.length;g--;)c[g].id===a&&c[g].destroy();e([d.plotLines||[],k.plotLines||[],d.plotBands||[],k.plotBands||[]],function(c){for(g=c.length;g--;)c[g].id===a&&t(c,c[g])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,V);(function(a){var C=a.each,F=a.extend,D=a.format,r=a.isNumber,
g=a.map,e=a.merge,t=a.pick,w=a.splat,l=a.syncTimeout,u=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},cleanSplit:function(a){C(this.chart.series,function(c){var d=c&&c.tt;d&&(!d.isActive||a?c.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||
(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();e(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,e(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());
this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(c,d,e,g){var p=this,f=p.now,b=!1!==p.options.animation&&!p.isHidden&&(1<Math.abs(c-f.x)||1<Math.abs(d-f.y)),n=p.followPointer||1<p.len;F(f,{x:b?(2*f.x+c)/3:c,y:b?(f.y+d)/2:d,anchorX:n?void 0:b?(2*f.anchorX+e)/3:e,anchorY:n?void 0:b?(f.anchorY+g)/2:g});p.getLabel().attr(f);b&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){p&&
p.move(c,d,e,g)},32))},hide:function(c){var d=this;a.clearTimeout(this.hideTimer);c=t(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=l(function(){d.getLabel()[c?"fadeOut":"hide"]();d.isHidden=!0},c))},getAnchor:function(a,d){var c,e=this.chart,p=e.inverted,f=e.plotTop,b=e.plotLeft,n=0,z=0,l,q;a=w(a);c=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),c=[d.chartX-e.plotLeft,d.chartY-f]);c||(C(a,function(a){l=a.series.yAxis;q=a.series.xAxis;n+=a.plotX+
(!p&&q?q.left-b:0);z+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!p&&l?l.top-f:0)}),n/=a.length,z/=a.length,c=[p?e.plotWidth-z:n,this.shared&&!p&&1<a.length&&d?d.chartY-f:p?e.plotHeight-n:z]);return g(c,Math.round)},getPosition:function(a,d,e){var c=this.chart,p=this.distance,f={},b=c.inverted&&e.h||0,n,g=["y",c.chartHeight,d,e.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],k=["x",c.chartWidth,a,e.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],q=!this.followPointer&&t(e.ttBelow,!c.inverted===
!!e.negative),l=function(a,c,d,m,h,e){var n=d<m-p,A=m+p+d<c,g=m-p-d;m+=p;if(q&&A)f[a]=m;else if(!q&&n)f[a]=g;else if(n)f[a]=Math.min(e-d,0>g-b?g:g-b);else if(A)f[a]=Math.max(h,m+b+d>c?m:m+b);else return!1},B=function(a,b,c,d){var h;d<p||d>b-p?h=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return h},H=function(a){var b=g;g=k;k=b;n=a},m=function(){!1!==l.apply(0,g)?!1!==B.apply(0,k)||n||(H(!0),m()):n?f.x=f.y=0:(H(!0),m())};(c.inverted||1<this.len)&&H();m();return f},defaultFormatter:function(a){var c=this.points||
w(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(c,d){var e,g=this.options,p,f=c,b,n={},z=[];e=g.formatter||this.defaultFormatter;var n=this.shared,l;g.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=w(f)[0].series.tooltipOptions.followPointer,b=this.getAnchor(f,d),d=b[0],p=b[1],!n||f.series&&f.series.noSharedTooltip?n=f.getLabelConfig():(C(f,function(a){a.setState("hover");z.push(a.getLabelConfig())}),
n={x:f[0].category,y:f[0].y},n.points=z,f=f[0]),this.len=z.length,n=e.call(n,this),l=f.series,this.distance=t(l.tooltipOptions.distance,16),!1===n?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(n,w(c)):(g.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:n&&n.join?n.join(""):n}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(f.colorIndex,l.colorIndex)),e.attr({stroke:g.borderColor||f.color||l.color||
"#666666"}),this.updatePosition({plotX:d,plotY:p,negative:f.negative,ttBelow:f.ttBelow,h:b[2]||0})),this.isHidden=!1))},renderSplit:function(c,d){var e=this,g=[],p=this.chart,f=p.renderer,b=!0,n=this.options,z=0,l=this.getLabel();a.isString(c)&&(c=[!1,c]);C(c.slice(0,d.length+1),function(a,c){if(!1!==a){c=d[c-1]||{isHeader:!0,plotX:d[0].plotX};var q=c.series||e,k=q.tt,m=c.series||{},E="highcharts-color-"+t(c.colorIndex,m.colorIndex,"none");k||(q.tt=k=f.label(null,null,null,"callout",null,null,n.useHTML).addClass("highcharts-tooltip-box "+
E).attr({padding:n.padding,r:n.borderRadius,fill:n.backgroundColor,stroke:n.borderColor||c.color||m.color||"#333333","stroke-width":n.borderWidth}).add(l));k.isActive=!0;k.attr({text:a});k.css(n.style).shadow(n.shadow);a=k.getBBox();m=a.width+k.strokeWidth();c.isHeader?(z=a.height,m=Math.max(0,Math.min(c.plotX+p.plotLeft-m/2,p.chartWidth-m))):m=c.plotX+p.plotLeft-t(n.distance,16)-m;0>m&&(b=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=p.plotTop;g.push({target:c.isHeader?p.plotHeight+
z:a,rank:c.isHeader?1:0,size:q.tt.getBBox().height+1,point:c,x:m,tt:k})}});this.cleanSplit();a.distribute(g,p.plotHeight+z);C(g,function(a){var c=a.point,f=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:b||c.isHeader?a.x:c.plotX+p.plotLeft+t(n.distance,16),y:a.pos+p.plotTop,anchorX:c.isHeader?c.plotX+p.plotLeft:c.plotX+f.xAxis.pos,anchorY:c.isHeader?a.pos+p.plotTop-15:c.plotY+f.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),e=(this.options.positioner||
this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+c.plotLeft,a.plotY+c.plotTop)},getDateFormat:function(a,d,e,g){var c=this.chart.time,f=c.dateFormat("%m-%d %H:%M:%S.%L",d),b,n,k={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(n in u){if(a===u.week&&+c.dateFormat("%w",d)===e&&"00:00:00.000"===f.substr(6)){n="week";break}if(u[n]>a){n=l;break}if(k[n]&&f.substr(k[n])!=="01-01 00:00:00.000".substr(k[n]))break;"week"!==n&&(l=n)}n&&
(b=g[n]);return b},getXDateFormat:function(a,d,e){d=d.dateTimeLabelFormats;var c=e&&e.closestPointRange;return(c?this.getDateFormat(c,a.x,e.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var c=a.series,e=c.tooltipOptions,p=e.xDateFormat,f=c.xAxis,b=f&&"datetime"===f.options.type&&r(a.key),n=e[d+"Format"];b&&!p&&(p=this.getXDateFormat(a,e,f));b&&p&&C(a.point&&a.point.tooltipDateKeys||["key"],function(a){n=n.replace("{point."+a+"}","{point."+
a+":"+p+"}")});return D(n,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return g(a,function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(K);(function(a){var C=a.addEvent,F=a.attr,D=a.charts,r=a.color,g=a.css,e=a.defined,t=a.each,w=a.extend,l=a.find,u=a.fireEvent,c=a.isNumber,d=a.isObject,k=a.offset,x=a.pick,p=a.splat,f=a.Tooltip;a.Pointer=function(a,
c){this.init(a,c)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,c.tooltip),this.followTouchMove=x(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(f=x(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=
f&&!b||a&&b;this.hasZoom=a||f},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=k(this.chart.container));return w(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,c,f){var b;t(a,function(a){var e=
!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(f,e);if((e=d(a,!0))&&!(e=!d(b,!0)))var e=b.distX-a.distX,p=b.dist-a.dist,q=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),e=0<(0!==e&&c?e:0!==p?p:0!==q?q:b.series.index>a.series.index?-1:1);e&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=a.series,f=b.xAxis,b=b.yAxis,d=
x(a.clientX,a.plotX),e=a.shapeArgs;if(f&&b)return c?{chartX:f.len+f.pos-d,chartY:b.len+b.pos-a.plotY}:{chartX:d+f.pos,chartY:a.plotY+b.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(b,c,f,e,p,g,k){var q,m=[],n=k&&k.isBoosting;e=!(!e||!b);k=c&&!c.stickyTracking?[c]:a.grep(f,function(a){return a.visible&&!(!p&&a.directTouch)&&x(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(q=e?b:this.findNearestKDPoint(k,p,g))&&q.series;q&&(p&&!c.noSharedTooltip?(k=a.grep(f,function(a){return a.visible&&
!(!p&&a.directTouch)&&x(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(k,function(a){var b=l(a.points,function(a){return a.x===q.x&&!a.isNull});d(b)&&(n&&(b=a.getPoint(b)),m.push(b))})):m.push(q));return{hoverPoint:q,hoverSeries:c,hoverPoints:m}},runPointActions:function(b,c){var f=this.chart,d=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,e=d?d.shared:!1,p=c||f.hoverPoint,n=p&&p.series||f.hoverSeries,n=this.getHoverData(p,n,f.series,!!c||n&&n.directTouch&&this.isDirectTouch,e,
b,{isBoosting:f.isBoosting}),g,p=n.hoverPoint;g=n.hoverPoints;c=(n=n.hoverSeries)&&n.tooltipOptions.followPointer;e=e&&n&&!n.noSharedTooltip;if(p&&(p!==f.hoverPoint||d&&d.isHidden)){t(f.hoverPoints||[],function(b){-1===a.inArray(b,g)&&b.setState()});t(g||[],function(a){a.setState("hover")});if(f.hoverSeries!==n)n.onMouseOver();f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;p.firePointEvent("mouseOver");f.hoverPoints=g;f.hoverPoint=p;d&&d.refresh(e?g:p,b)}else c&&d&&!d.isHidden&&
(p=d.getAnchor([{}],b),d.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(f.container.ownerDocument,"mousemove",function(b){var c=D[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(f.axes,function(c){var f=x(c.crosshair.snap,!0),d=f?a.find(g,function(a){return a.series[c.coll]===c}):void 0;d||!f?c.drawCrosshair(b,d):c.hideCrosshair()})},reset:function(a,c){var b=this.chart,f=b.hoverSeries,d=b.hoverPoint,e=b.hoverPoints,n=b.tooltip,g=n&&n.shared?e:d;
a&&g&&t(p(g),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)n&&g&&(n.refresh(g),d&&(d.setState(d.state,!0),t(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();e&&t(e,function(a){a.setState()});if(f)f.onMouseOut();n&&n.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,f;t(b.series,function(d){f=
a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(f),d.markerGroup&&(d.markerGroup.attr(f),d.markerGroup.clip(c?b.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(f))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,f=a.chartX,d=a.chartY,e=this.zoomHor,p=this.zoomVert,g=b.plotLeft,
m=b.plotTop,k=b.plotWidth,A=b.plotHeight,l,G=this.selectionMarker,h=this.mouseDownX,v=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];G&&G.touch||(f<g?f=g:f>g+k&&(f=g+k),d<m?d=m:d>m+A&&(d=m+A),this.hasDragged=Math.sqrt(Math.pow(h-f,2)+Math.pow(v-d,2)),10<this.hasDragged&&(l=b.isInsidePlot(h-g,v-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!t&&!G&&(this.selectionMarker=G=b.renderer.rect(g,m,e?1:k,p?1:A,0).attr({fill:c.selectionMarkerFill||r("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",
zIndex:7}).add()),G&&e&&(f-=h,G.attr({width:Math.abs(f),x:(0<f?0:f)+h})),G&&p&&(f=d-v,G.attr({height:Math.abs(f),y:(0<f?0:f)+v})),l&&!G&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,f=this.chart,d=this.hasPinched;if(this.selectionMarker){var p={originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,B=k.attr?k.attr("x"):k.x,l=k.attr?k.attr("y"):k.y,m=k.attr?k.attr("width"):k.width,E=k.attr?k.attr("height"):k.height,A;if(this.hasDragged||d)t(f.axes,function(c){if(c.zoomEnabled&&e(c.min)&&
(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,g=c.toValue((f?B:l)+h),f=c.toValue((f?B+m:l+E)-h);p[c.coll].push({axis:c,min:Math.min(g,f),max:Math.max(g,f)});A=!0}}),A&&u(f,"selection",p,function(a){f.zoom(w(a,d?{animation:!1}:null))});c(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}f&&c(f.index)&&(g(f.container,{cursor:f._cursor}),f.cancelClick=10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=
!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){D[a.hoverChartIndex]&&D[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=
D[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;e(a.hoverChartIndex)&&D[a.hoverChartIndex]&&D[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=
F(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,f=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||
(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",w(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(w(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-d)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,f=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=C(c,"mouseleave",b.onContainerMouseLeave);
a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=C(f,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=C(f,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&
(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(K);(function(a){var C=a.charts,F=a.each,D=a.extend,r=a.map,g=a.noop,e=a.pick;D(a.Pointer.prototype,{pinchTranslate:function(a,e,g,r,c,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,e,g,r,c,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,e,g,r,c,d)},pinchTranslateDirection:function(a,e,g,r,c,d,k,x){var p=this.chart,f=a?"x":"y",b=a?"X":"Y",n="chart"+b,l=a?"width":
"height",t=p["plot"+(a?"Left":"Top")],q,u,B=x||1,H=p.inverted,m=p.bounds[a?"h":"v"],E=1===e.length,A=e[0][n],M=g[0][n],G=!E&&e[1][n],h=!E&&g[1][n],v;g=function(){!E&&20<Math.abs(A-G)&&(B=x||Math.abs(M-h)/Math.abs(A-G));u=(t-M)/B+A;q=p["plot"+(a?"Width":"Height")]/B};g();e=u;e<m.min?(e=m.min,v=!0):e+q>m.max&&(e=m.max-q,v=!0);v?(M-=.8*(M-k[f][0]),E||(h-=.8*(h-k[f][1])),g()):k[f]=[M,h];H||(d[f]=u-t,d[l]=q);d=H?1/B:B;c[l]=q;c[f]=e;r[H?a?"scaleY":"scaleX":"scale"+b]=B;r["translate"+b]=d*t+(M-d*A)},pinch:function(a){var t=
this,l=t.chart,u=t.pinchDown,c=a.touches,d=c.length,k=t.lastValidTouch,x=t.hasZoom,p=t.selectionMarker,f={},b=1===d&&(t.inClass(a.target,"highcharts-tracker")&&l.runTrackerClick||t.runChartClick),n={};1<d&&(t.initiated=!0);x&&t.initiated&&!b&&a.preventDefault();r(c,function(a){return t.normalize(a)});"touchstart"===a.type?(F(c,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),k.x=[u[0].chartX,u[1]&&u[1].chartX],k.y=[u[0].chartY,u[1]&&u[1].chartY],F(l.axes,function(a){if(a.zoomEnabled){var b=
l.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,f=a.toPixels(e(a.options.min,a.dataMin)),d=a.toPixels(e(a.options.max,a.dataMax)),p=Math.max(f,d);b.min=Math.min(a.pos,Math.min(f,d)-c);b.max=Math.max(a.pos+a.len,p+c)}}),t.res=!0):t.followTouchMove&&1===d?this.runPointActions(t.normalize(a)):u.length&&(p||(t.selectionMarker=p=D({destroy:g,touch:!0},l.plotBox)),t.pinchTranslate(u,c,f,p,n,k),t.hasPinched=x,t.scaleGroups(f,n),t.res&&(t.res=!1,this.reset(!1,0)))},touch:function(g,r){var l=this.chart,t,c;
if(l.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=l.index;1===g.touches.length?(g=this.normalize(g),(c=l.isInsidePlot(g.chartX-l.plotLeft,g.chartY-l.plotTop))&&!l.openMenu?(r&&this.runPointActions(g),"touchmove"===g.type&&(r=this.pinchDown,t=r[0]?4<=Math.sqrt(Math.pow(r[0].chartX-g.chartX,2)+Math.pow(r[0].chartY-g.chartY,2)):!1),e(t,!0)&&this.pinch(g)):r&&this.reset()):2===g.touches.length&&this.pinch(g)},onContainerTouchStart:function(a){this.zoomOption(a);
this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(e)}})})(K);(function(a){var C=a.addEvent,F=a.charts,D=a.css,r=a.doc,g=a.extend,e=a.noop,t=a.Pointer,w=a.removeEvent,l=a.win,u=a.wrap;if(!a.hasTouch&&(l.PointerEvent||l.MSPointerEvent)){var c={},d=!!l.PointerEvent,k=function(){var d=[];d.item=function(a){return this[a]};a.objectEach(c,function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});
return d},x=function(c,f,b,d){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(d(c),d=F[a.hoverChartIndex].pointer,d[f]({type:b,target:c.currentTarget,preventDefault:e,touches:k()}))};g(t.prototype,{onContainerPointerDown:function(a){x(a,"onContainerTouchStart","touchstart",function(a){c[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){x(a,"onContainerTouchMove","touchmove",function(a){c[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};c[a.pointerId].target||(c[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){x(a,"onDocumentTouchEnd","touchend",function(a){delete c[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(r,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,c,b){a.call(this,c,b);this.hasZoom&&
D(c.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});u(t.prototype,"destroy",function(a){this.batchMSEvents(w);a.call(this)})}})(K);(function(a){var C=a.addEvent,F=a.css,D=a.discardElement,r=a.defined,g=a.each,e=a.fireEvent,t=a.isFirefox,w=a.marginNames,l=a.merge,u=a.pick,c=a.setAnimation,d=a.stableSort,k=a.win,x=a.wrap;a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype=
{init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=u(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=l(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=u(a.symbolWidth,16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(l(!0,this.options,a));this.destroy();
b.isDirtyLegend=b.isDirtyBox=!0;u(c,!0)&&b.redraw();e(this,"afterUpdate")},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var b=this.options,f=a.legendItem,d=a.legendLine,g=a.legendSymbol,p=this.itemHiddenStyle.color,b=c?b.itemStyle.color:p,k=c?a.color||p:p,B=a.options&&a.options.marker,l={fill:k};f&&f.css({fill:b,color:b});d&&d.attr({stroke:k});g&&(B&&g.isMarker&&(l=a.pointAttribs(),c||(l.stroke=l.fill=p)),g.attr(l));e(this,"afterColorizeItem",
{item:a,visible:c})},positionItem:function(a){var c=this.options,b=c.symbolPadding,c=!c.rtl,d=a._legendItemPos,e=d[0],d=d[1],g=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*b-4,d);g&&(g.x=e,g.y=d)},destroyItem:function(a){var c=a.checkbox;g(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});c&&D(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}g(this.getAllItems(),function(c){g(["legendItem",
"legendGroup"],a,c)});g("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,c,b=this.clipHeight||this.legendHeight,d=this.titleHeight;a&&(c=a.translateY,g(this.allItems,function(f){var e=f.checkbox,g;e&&(g=c+d+e.y+(this.scrollOffset||0)+3,F(e,{left:a.translateX+f.checkboxOffset+e.x-20+"px",top:g+"px",display:g>c-6&&g<c+b-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,c=this.padding,
b=a.title,d=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(c){var d=this.options;c.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,c,this.chart.time):d.labelFormatter.call(c)})},renderItem:function(a){var c=this.chart,b=c.renderer,d=
this.options,e=this.symbolWidth,g=d.symbolPadding,q=this.itemStyle,k=this.itemHiddenStyle,p="horizontal"===d.layout?u(d.itemDistance,20):0,t=!d.rtl,m=a.legendItem,E=!a.series,A=!E&&a.series.drawLegendSymbol?a.series:a,x=A.options,x=this.createCheckboxForItem&&x&&x.showCheckbox,p=e+g+p+(x?20:0),G=d.useHTML,h=a.options.className;m||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(h?" "+h:"")+(E?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
a.legendItem=m=b.text("",t?e+g:-g,this.baseline||0,G).css(l(a.visible?q:k)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(e=q.fontSize,this.fontMetrics=b.fontMetrics(e,m),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,m.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,m,G),x&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);q.width||m.css({width:(d.itemWidth||
d.width||c.spacingBox.width)-p});this.setText(a);c=m.getBBox();a.itemWidth=a.checkboxOffset=d.itemWidth||a.legendItemWidth||c.width+p;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||c.height||this.symbolHeight)},layoutItem:function(a){var c=this.options,b=this.padding,d="horizontal"===c.layout,e=a.itemHeight,g=c.itemMarginBottom||0,q=this.itemMarginTop,k=d?u(c.itemDistance,20):0,p=c.width,l=p||this.chart.spacingBox.width-
2*b-c.x,c=c.alignColumns&&this.totalItemWidth>l?this.maxItemWidth:a.itemWidth;d&&this.itemX-b+c>l&&(this.itemX=b,this.itemY+=q+this.lastLineHeight+g,this.lastLineHeight=0);this.lastItemY=q+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];d?this.itemX+=c:(this.itemY+=q+e+g,this.lastLineHeight=e);this.offsetWidth=p||Math.max((d?this.itemX-b-(a.checkbox?0:k):c)+b,this.offsetWidth)},getAllItems:function(){var a=[];g(this.chart.series,function(c){var b=
c&&c.options;c&&u(b.showInLegend,r(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var b=this.chart,d=this.options,f=this.getAlignment();f&&g([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,g){e.test(f)&&!r(a[g])&&(b[w[g]]=Math.max(b[w[g]],
b.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+u(d.margin,12)+c[g]+(0===g&&void 0!==b.options.title.margin?b.titleOffset+b.options.title.margin:0)))})},render:function(){var a=this.chart,c=a.renderer,b=this.group,e,k,x,q,t=this.box,B=this.options,r=this.padding;this.itemX=r;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;b||(this.group=b=c.g("legend").attr({zIndex:7}).add(),this.contentGroup=c.g().attr({zIndex:1}).add(b),this.scrollGroup=c.g().add(this.contentGroup));
this.renderTitle();e=this.getAllItems();d(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});B.reversed&&e.reverse();this.allItems=e;this.display=k=!!e.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g(e,this.renderItem,this);g(e,this.layoutItem,this);x=(B.width||this.offsetWidth)+r;q=this.lastItemY+this.lastLineHeight+this.titleHeight;q=this.handleOverflow(q);q+=r;t||(this.box=t=c.rect().addClass("highcharts-legend-box").attr({r:B.borderRadius}).add(b),
t.isNew=!0);t.attr({stroke:B.borderColor,"stroke-width":B.borderWidth||0,fill:B.backgroundColor||"none"}).shadow(B.shadow);0<x&&0<q&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:x,height:q},t.strokeWidth())),t.isNew=!1);t[k?"show":"hide"]();this.legendWidth=x;this.legendHeight=q;g(e,this.positionItem,this);k&&(c=a.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(c=l(c,{y:c.y+a.titleOffset+a.options.title.margin})),b.align(l(B,{width:x,height:q}),!0,c));a.isResizing||this.positionCheckboxes()},
handleOverflow:function(a){var c=this,b=this.chart,d=b.renderer,e=this.options,k=e.y,q=this.padding,b=b.spacingBox.height+("top"===e.verticalAlign?-k:k)-q,k=e.maxHeight,p,l=this.clipRect,t=e.navigation,m=u(t.animation,!0),E=t.arrowSize||12,A=this.nav,x=this.pages,G,h=this.allItems,v=function(a){"number"===typeof a?l.attr({height:a}):l&&(c.clipRect=l.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+q+"px,9999px,"+(q+a)+"px,0)":"auto")};"horizontal"!==e.layout||
"middle"===e.verticalAlign||e.floating||(b/=2);k&&(b=Math.min(b,k));x.length=0;a>b&&!1!==t.enabled?(this.clipHeight=p=Math.max(b-20-this.titleHeight-q,0),this.currentPage=u(this.currentPage,1),this.fullHeight=a,g(h,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),f=x.length;if(!f||c-x[f-1]>p&&(G||c)!==x[f-1])x.push(G||c),f++;a.pageIx=f-1;G&&(h[b-1].pageIx=f-1);b===h.length-1&&c+d-x[f-1]>p&&(x.push(c),a.pageIx=f);c!==G&&(G=c)}),l||(l=c.clipRect=d.clipRect(0,q,9999,
0),c.contentGroup.clip(l)),v(p),A||(this.nav=A=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,E,E).on("click",function(){c.scroll(-1,m)}).add(A),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(t.style).add(A),this.down=d.symbol("triangle-down",0,0,E,E).on("click",function(){c.scroll(1,m)}).add(A)),c.scroll(0),a=b):A&&(v(),this.nav=A.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var b=this.pages,f=
b.length;a=this.currentPage+a;var e=this.clipHeight,g=this.options.navigation,k=this.pager,p=this.padding;a>f&&(a=f);0<a&&(void 0!==d&&c(d,this.chart),this.nav.attr({translateX:p,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),k.attr({text:a+"/"+f}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===f?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===
a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===f?g.inactiveColor:g.activeColor}).css({cursor:a===f?"default":"pointer"}),this.scrollOffset=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=a.symbolHeight,d=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-b)/2:0,a.baseline-b+1,d?b:a.symbolWidth,
b,u(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,b=c.marker,d=a.symbolWidth,e=a.symbolHeight,g=e/2,k=this.chart.renderer,p=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var B;B={"stroke-width":c.lineWidth||0};c.dashStyle&&(B.dashstyle=c.dashStyle);this.legendLine=k.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(B).add(p);b&&!1!==b.enabled&&(c=Math.min(u(b.radius,g),g),0===this.symbol.indexOf("url")&&
(b=l(b,{width:e,height:e}),c=0),this.legendSymbol=b=k.symbol(this.symbol,d/2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(p),b.isMarker=!0)}};(/Trident\/7\.0/.test(k.navigator.userAgent)||t)&&x(a.Legend.prototype,"positionItem",function(a,c){var b=this,d=function(){c._legendItemPos&&a.call(b,c)};d();setTimeout(d)})})(K);(function(a){var C=a.addEvent,F=a.animate,D=a.animObject,r=a.attr,g=a.doc,e=a.Axis,t=a.createElement,w=a.defaultOptions,l=a.discardElement,u=a.charts,c=a.css,d=a.defined,k=a.each,
x=a.extend,p=a.find,f=a.fireEvent,b=a.grep,n=a.isNumber,z=a.isObject,J=a.isString,q=a.Legend,L=a.marginNames,B=a.merge,H=a.objectEach,m=a.Pointer,E=a.pick,A=a.pInt,M=a.removeEvent,G=a.seriesTypes,h=a.splat,v=a.syncTimeout,Q=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};x(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(J(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,
h,m=b.series,e=b.plotOptions||{};f(this,"init",{args:arguments},function(){b.series=null;d=B(w,b);for(h in d.plotOptions)d.plotOptions[h].tooltip=e[h]&&B(e[h].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=m;this.userOptions=b;var g=d.chart,k=g.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?
new a.Time(b.time):a.time;this.hasCartesianSeries=g.showAxes;var A=this;A.index=u.length;u.push(A);a.chartCount++;k&&H(k,function(a,b){C(A,b,a)});A.xAxis=[];A.yAxis=[];A.pointCount=A.colorCounter=A.symbolCounter=0;f(A,"afterInit");A.firstRender()})},initSeries:function(b){var c=this.options.chart;(c=G[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},
isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){f(this,"beforeRedraw");var c=this.axes,d=this.series,h=this.pointer,m=this.legend,e=this.isDirtyLegend,g,A,q=this.hasCartesianSeries,p=this.isDirtyBox,E,v=this.renderer,n=v.isHidden(),l=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);n&&this.temporaryDisplay();this.layOutTitles();for(b=d.length;b--;)if(E=d[b],E.options.stacking&&(g=!0,E.isDirty)){A=!0;
break}if(A)for(b=d.length;b--;)E=d[b],E.options.stacking&&(E.isDirty=!0);k(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),e=!0);a.isDirtyData&&f(a,"updatedData")});e&&m.options.enabled&&(m.render(),this.isDirtyLegend=!1);g&&this.getStacks();q&&k(c,function(a){a.updateNames();a.setScale()});this.getMargins();q&&(k(c,function(a){a.isDirty&&(p=!0)}),k(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,l.push(function(){f(a,"afterSetExtremes",x(a.eventArgs,
a.getExtremes()));delete a.eventArgs}));(p||g)&&a.redraw()}));p&&this.drawChartBox();f(this,"predraw");k(d,function(a){(p||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);v.draw();f(this,"redraw");f(this,"render");n&&this.temporaryDisplay(!0);k(l,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,f;c=p(this.axes,b)||p(this.series,b);for(f=0;!c&&f<d.length;f++)c=p(d[f].points||[],b);return c},getAxes:function(){var a=
this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});f(this,"getAxes");k(c,function(a,b){a.index=b;a.isX=!0});k(b,function(a,b){a.index=b});c=c.concat(b);k(c,function(b){new e(a,b)});f(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];k(this.series,function(c){a=a.concat(b(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return b(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,f=d.options,h;h=f.title=B({style:{color:"#333333",
fontSize:f.isStock?"16px":"18px"}},f.title,a);f=f.subtitle=B({style:{color:"#666666"}},f.subtitle,b);k([["title",a,h],["subtitle",b,f]],function(a,b){var c=a[0],f=d[c],h=a[1];a=a[2];f&&h&&(d[c]=f=f.destroy());a&&!f&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,f=this.spacingBox;k(["title","subtitle"],
function(a){var c=this[a],h=this.options[a];a="title"===a?-3:h.verticalAlign?0:b+2;var m;c&&(m=h.style.fontSize,m=d.fontMetrics(m,c).b,c.css({width:(h.width||f.width+h.widthAdjust)+"px"}).align(x({y:a+m},h),!1,"spacingBox"),h.floating||h.verticalAlign||(b=Math.ceil(b+c.getBBox(h.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&E(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,
c=b.width,b=b.height,f=this.renderTo;d(c)||(this.containerWidth=a.getStyle(f,"width"));d(b)||(this.containerHeight=a.getStyle(f,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(g.body.removeChild(c),c.hcOrigDetached=
!1),c=c.parentNode;else for(;c&&c.style;){g.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,g.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===g.body)break}},setClassName:function(a){this.container.className="highcharts-container "+
(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,h,m;b=this.renderTo;var e=a.uniqueKey(),k;b||(this.renderTo=b=d.renderTo);J(b)&&(this.renderTo=b=g.getElementById(b));b||a.error(13,!0);h=A(r(b,"data-highcharts-chart"));n(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();r(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();h=this.chartWidth;m=this.chartHeight;k=x({position:"relative",overflow:"hidden",width:h+"px",height:m+
"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:e},k,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,m,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;f(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&
!d(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&a.getOffset()});k(L,function(f,h){d(c[h])||(a[f]+=b[h])});
a.setChartSize()},reflow:function(b){var c=this,f=c.options.chart,h=c.renderTo,m=d(f.width)&&d(f.height),e=f.width||a.getStyle(h,"width"),f=f.height||a.getStyle(h,"height"),h=b?b.target:Q;if(!m&&!c.isPrinting&&e&&f&&(h===Q||h===g)){if(e!==c.containerWidth||f!==c.containerHeight)a.clearTimeout(c.reflowTimeout),c.reflowTimeout=v(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=e;c.containerHeight=f}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&
(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=C(Q,"resize",function(a){b.reflow(a)}),C(this,"destroy",this.unbindReflow))},setSize:function(b,d,h){var m=this,e=m.renderer;m.isResizing+=1;a.setAnimation(h,m);m.oldChartHeight=m.chartHeight;m.oldChartWidth=m.chartWidth;void 0!==b&&(m.options.chart.width=b);void 0!==d&&(m.options.chart.height=d);m.getChartSize();b=e.globalAnimation;(b?F:c)(m.container,{width:m.chartWidth+"px",height:m.chartHeight+"px"},b);m.setChartSize(!0);e.setSize(m.chartWidth,
m.chartHeight,h);k(m.axes,function(a){a.isDirty=!0;a.setScale()});m.isDirtyLegend=!0;m.isDirtyBox=!0;m.layOutTitles();m.getMargins();m.redraw(h);m.oldChartHeight=null;f(m,"resize");v(function(){m&&f(m,"endResize",null,function(){--m.isResizing})},D(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,h=this.chartHeight,m=this.options.chart,e=this.spacing,g=this.clipOffset,A,q,p,E;this.plotLeft=A=Math.round(this.plotLeft);this.plotTop=q=Math.round(this.plotTop);
this.plotWidth=p=Math.max(0,Math.round(d-A-this.marginRight));this.plotHeight=E=Math.max(0,Math.round(h-q-this.marginBottom));this.plotSizeX=b?E:p;this.plotSizeY=b?p:E;this.plotBorderWidth=m.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:h-e[0]-e[2]};this.plotBox=c.plotBox={x:A,y:q,width:p,height:E};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,g[3])/2);c=Math.ceil(Math.max(d,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,
g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,g[2])/2-c))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()});f(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var d=b[c],f=z(d)?d:[d,d,d,d];k(["Top","Right","Bottom","Left"],function(d,h){a[c][h]=E(b[c+d],f[h])})});k(L,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=
this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,h=this.chartBackground,m=this.plotBackground,e=this.plotBorder,g,A=this.plotBGImage,k=a.backgroundColor,q=a.plotBackgroundColor,p=a.plotBackgroundImage,E,v=this.plotLeft,n=this.plotTop,l=this.plotWidth,G=this.plotHeight,B=this.plotBox,x=this.clipRect,t=this.clipBox,r="animate";h||(this.chartBackground=h=b.rect().addClass("highcharts-background").add(),r="attr");g=a.borderWidth||0;E=g+(a.shadow?8:0);k={fill:k||"none"};if(g||h["stroke-width"])k.stroke=
a.borderColor,k["stroke-width"]=g;h.attr(k).shadow(a.shadow);h[r]({x:E/2,y:E/2,width:c-E-g%2,height:d-E-g%2,r:a.borderRadius});r="animate";m||(r="attr",this.plotBackground=m=b.rect().addClass("highcharts-plot-background").add());m[r](B);m.attr({fill:q||"none"}).shadow(a.plotShadow);p&&(A?A.animate(B):this.plotBGImage=b.image(p,v,n,l,G).add());x?x.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);r="animate";e||(r="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());
e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[r](e.crisp({x:v,y:n,width:l,height:G},-e.strokeWidth()));this.isDirtyBox=!1;f(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,f,h;k(["inverted","angular","polar"],function(m){c=G[b.type||b.defaultSeriesType];h=b[m]||c&&c.prototype[m];for(f=d&&d.length;!h&&f--;)(c=G[d[f].type])&&c.prototype[m]&&(h=!0);a[m]=h})},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=
0});k(b,function(b){var c=b.options.linkedTo;J(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))});f(this,"afterLinkSeries")},renderSeries:function(){k(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&k(b.items,function(c){var d=x(b.style,c.style),f=A(d.left)+a.plotLeft,h=A(d.top)+a.plotTop+12;delete d.left;delete d.top;
a.renderer.text(c.html,f,h).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,f,h;this.setTitle();this.legend=new q(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);k(a,function(a){a.setScale()});this.getAxisMargins();f=1.1<c/this.plotWidth;h=1.05<d/this.plotHeight;if(f||h)k(a,function(a){(a.horiz&&f||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();
this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=B(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&
(Q.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,h=b.container,m,e=h&&h.parentNode;f(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");M(b);for(m=c.length;m--;)c[m]=c[m].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();
for(m=d.length;m--;)d[m]=d[m].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});h&&(h.innerHTML="",M(h),e&&l(h));H(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();
k(b.series||[],function(b){a.initSeries(b)});a.linkSeries();f(a,"beforeRender");m&&(a.pointer=new m(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){k([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);f(this,"load");f(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})})(K);(function(a){var C=a.addEvent,F=a.Chart,D=a.each;C(F,"afterSetChartSize",function(r){var g=
this.options.chart.scrollablePlotArea;if(g=g&&g.minWidth)if(this.scrollablePixels=g=Math.max(0,g-this.chartWidth))this.plotWidth+=g,this.clipBox.width+=g,r.skipAxes||D(this.axes,function(e){1===e.side?e.getPlotLinePath=function(){var g=this.right,r;this.right=g-e.chart.scrollablePixels;r=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=g;return r}:(e.setAxisSize(),e.setAxisTranslation())})});C(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),
this.applyFixed()):this.fixedDiv&&this.applyFixed()});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};F.prototype.applyFixed=function(){var r=this.container,g,e;this.fixedDiv||(this.fixedDiv=
a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.fixedRenderer=g=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=g.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),a.each([this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?
".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title"],function(e){a.each(r.querySelectorAll(e),function(a){g.box.appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);e=this.chartWidth+this.scrollablePixels;this.container.style.width=e+"px";this.renderer.boxWrapper.attr({width:e,height:this.chartHeight,viewBox:[0,0,e,this.chartHeight].join(" ")});
e=this.options.chart.scrollablePlotArea;e.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixels*e.scrollPositionX);var t=this.axisOffset;e=this.plotTop-t[0]-1;var t=this.plotTop+this.plotHeight+t[2],w=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,t,"L",0,t,"Z","M",w,e,"L",this.chartWidth,e,"L",this.chartWidth,t,"L",w,t,"Z"]:["M",0,0]})}})(K);(function(a){var C,F=a.each,D=
a.extend,r=a.erase,g=a.fireEvent,e=a.format,t=a.isArray,w=a.isNumber,l=a.pick,u=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,d,e){this.series=a;this.color=a.color;this.applyOptions(d,e);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=this.color||d[a.colorCounter],d=d.length,e=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):e=a.colorIndex;this.colorIndex=l(this.colorIndex,e);a.chart.pointCount++;g(this,"afterInit");return this},
applyOptions:function(a,d){var c=this.series,e=c.options.pointValKey||c.pointValKey;a=C.prototype.optionsToObject.call(this,a);D(this,a);this.options=this.options?D(this.options,a):a;a.group&&delete this.group;e&&(this.y=this[e]);this.isNull=l(this.isValid&&!this.isValid(),null===this.x||!w(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===d&&c.xAxis&&c.xAxis.hasNames&&(this.x=c.xAxis.nameToX(this));void 0===this.x&&c&&(this.x=void 0===d?c.autoIncrement(this):d);return this},
setNestedProperty:function(c,d,e){e=e.split(".");a.reduce(e,function(c,e,f,b){c[e]=b.length-1===f?d:a.isObject(c[e],!0)?c[e]:{};return c[e]},c);return c},optionsToObject:function(c){var d={},e=this.series,g=e.options.keys,p=g||e.pointArrayMap||["y"],f=p.length,b=0,n=0;if(w(c)||null===c)d[p[0]]=c;else if(t(c))for(!g&&c.length>f&&(e=typeof c[0],"string"===e?d.name=c[0]:"number"===e&&(d.x=c[0]),b++);n<f;)g&&void 0===c[b]||(0<p[n].indexOf(".")?a.Point.prototype.setNestedProperty(d,c[b],p[n]):d[p[n]]=
c[b]),b++,n++;else"object"===typeof c&&(d=c,c.dataLabels&&(e._hasPointLabels=!0),c.marker&&(e._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",
""):"")},getZone:function(){var a=this.series,d=a.zones,a=a.zoneAxis||"y",e=0,g;for(g=d[e];this[a]>=g.value;)g=d[++e];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=g&&g.color&&!this.options.color?g.color:this.nonZonedColor;return g},destroy:function(){var a=this.series.chart,d=a.hoverPoints,e;a.pointCount--;d&&(this.setState(),r(d,this),d.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&
a.legend.destroyItem(this);for(e in this)this[e]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],d,e=6;e--;)d=a[e],this[d]&&(this[d]=this[d].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var c=this.series,g=c.tooltipOptions,
t=l(g.valueDecimals,""),p=g.valuePrefix||"",f=g.valueSuffix||"";F(c.pointArrayMap||["y"],function(b){b="{point."+b;if(p||f)a=a.replace(RegExp(b+"}","g"),p+b+"}"+f);a=a.replace(RegExp(b+"}","g"),b+":,."+t+"f}")});return e(a,{point:this,series:this.series},c.chart.time)},firePointEvent:function(a,d,e){var c=this,k=this.series.options;(k.point.events[a]||c.options&&c.options.events&&c.options.events[a])&&this.importEvents();"click"===a&&k.allowPointSelect&&(e=function(a){c.select&&c.select(null,a.ctrlKey||
a.metaKey||a.shiftKey)});g(this,a,d,e)},visible:!0}})(K);(function(a){var C=a.addEvent,F=a.animObject,D=a.arrayMax,r=a.arrayMin,g=a.correctFloat,e=a.defaultOptions,t=a.defaultPlotOptions,w=a.defined,l=a.each,u=a.erase,c=a.extend,d=a.fireEvent,k=a.grep,x=a.isArray,p=a.isNumber,f=a.isString,b=a.merge,n=a.objectEach,z=a.pick,J=a.removeEvent,q=a.splat,L=a.SVGElement,B=a.syncTimeout,H=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},
marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,
softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var f=this,e,m=a.series,h;f.chart=a;f.options=b=f.setOptions(b);f.linkedSeries=[];f.bindAxes();c(f,{name:b.name,
state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;n(e,function(a,b){C(f,b,a)});if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;f.getColor();f.getSymbol();l(f.parallelArrays,function(a){f[a+"Data"]=[]});f.setData(b.data,!1);f.isCartesian&&(a.hasCartesianSeries=!0);m.length&&(h=m[m.length-1]);f._i=z(h&&h._i,-1)+1;a.orderSeries(this.insert(m));d(this,"afterInit")},insert:function(a){var b=this.options.index,c;if(p(b)){for(c=a.length;c--;)if(b>=
z(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return z(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,f;l(b.axisTypes||[],function(e){l(d[e],function(a){f=a.options;if(c[e]===f.index||void 0!==c[e]&&c[e]===f.id||void 0===c[e]&&0===f.index)b.insert(a.series),b[e]=a,a.isDirty=!0});b[e]||b.optionalAxis===e||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=p(b)?function(d){var f="y"===d&&c.toYData?
c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};l(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,f=this.chart.time,b=z(b,a.pointStart,0);this.pointInterval=c=z(this.pointInterval,a.pointInterval,1);d&&(a=new f.Date(b),"day"===d?f.set("Date",a,f.get("Date",a)+c):"month"===d?f.set("Month",a,f.get("Month",a)+c):"year"===d&&f.set("FullYear",a,f.get("FullYear",a)+c),c=a.getTime()-
b);this.xIncrement=b+c;return b},setOptions:function(a){var c=this.chart,f=c.options,m=f.plotOptions,g=(c.userOptions||{}).plotOptions||{},h=m[this.type];this.userOptions=a;c=b(h,m.series,a);this.tooltipOptions=b(e.tooltip,e.plotOptions.series&&e.plotOptions.series.tooltip,e.plotOptions[this.type].tooltip,f.tooltip.userOptions,m.series&&m.series.tooltip,m[this.type].tooltip,a.tooltip);this.stickyTracking=z(a.stickyTracking,g[this.type]&&g[this.type].stickyTracking,g.series&&g.series.stickyTracking,
this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===h.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&w(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});d(this,"afterSetOptions",{options:c});return c},getName:function(){return this.name||
"Series "+(this.index+1)},getCyclic:function(a,b,c){var d,f=this.chart,h=this.userOptions,e=a+"Index",m=a+"Counter",g=c?c.length:z(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=z(h[e],h["_"+e]),w(d)||(f.series.length||(f[m]=0),h["_"+e]=d=f[m]%g,f[m]+=1),c&&(b=c[d]));void 0!==d&&(this[e]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",
this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,f=[],e,h,m,g=this.requireSorting;l(b,function(b){var h;h=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b).x;p(h)&&(h=a.inArray(h,this.xData,m),-1===h?f.push(b):b!==c.data[h]?(d[h].update(b,!1,null,!1),d[h].touched=!0,g&&(m=h)):d[h]&&(d[h].touched=!0),e=!0)},this);if(e)for(b=d.length;b--;)h=d[b],h.touched||h.remove(!1),
h.touched=!1;else if(b.length===d.length)l(b,function(a,b){d[b].update&&a!==c.data[b]&&d[b].update(a,!1,null,!1)});else return!1;l(f,function(a){this.addPoint(a,!1)},this);return!0},setData:function(b,c,d,e){var m=this,h=m.points,g=h&&h.length||0,q,k=m.options,A=m.chart,n=null,E=m.xAxis,B=k.turboThreshold,t=this.xData,r=this.yData,u=(q=m.pointArrayMap)&&q.length,H;b=b||[];q=b.length;c=z(c,!0);!1!==e&&q&&g&&!m.cropped&&!m.hasGroupedData&&m.visible&&(H=this.updateData(b));if(!H){m.xIncrement=null;m.colorCounter=
0;l(this.parallelArrays,function(a){m[a+"Data"].length=0});if(B&&q>B){for(d=0;null===n&&d<q;)n=b[d],d++;if(p(n))for(d=0;d<q;d++)t[d]=this.autoIncrement(),r[d]=b[d];else if(x(n))if(u)for(d=0;d<q;d++)n=b[d],t[d]=n[0],r[d]=n.slice(1,u+1);else for(d=0;d<q;d++)n=b[d],t[d]=n[0],r[d]=n[1];else a.error(12)}else for(d=0;d<q;d++)void 0!==b[d]&&(n={series:m},m.pointClass.prototype.applyOptions.apply(n,[b[d]]),m.updateParallelArrays(n,d));r&&f(r[0])&&a.error(14,!0);m.data=[];m.options.data=m.userOptions.data=
b;for(d=g;d--;)h[d]&&h[d].destroy&&h[d].destroy();E&&(E.minRange=E.userMinRange);m.isDirty=A.isDirtyBox=!0;m.isDirtyData=!!h;d=!1}"point"===k.legendType&&(this.processData(),this.generatePoints());c&&A.redraw(d)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var h,m,g=this.xAxis,q,k=this.options;q=k.cropThreshold;var p=this.getExtremesFromAll||k.getExtremesFromAll,n=this.isCartesian,k=g&&g.val2lin,l=g&&g.isLog,B=this.requireSorting,t,r;if(n&&!this.isDirty&&!g.isDirty&&!this.yAxis.isDirty&&
!b)return!1;g&&(b=g.getExtremes(),t=b.min,r=b.max);if(n&&this.sorted&&!p&&(!q||f>q||this.forceCrop))if(c[f-1]<t||c[0]>r)c=[],d=[];else if(c[0]<t||c[f-1]>r)e=this.cropData(this.xData,this.yData,t,r),c=e.xData,d=e.yData,e=e.start,h=!0;for(q=c.length||1;--q;)f=l?k(c[q])-k(c[q-1]):c[q]-c[q-1],0<f&&(void 0===m||f<m)?m=f:0>f&&B&&(a.error(15),B=!1);this.cropped=h;this.cropStart=e;this.processedXData=c;this.processedYData=d;this.closestPointRange=m},cropData:function(a,b,c,d,f){var h=a.length,e=0,m=h,g;f=
z(f,this.cropShoulder,1);for(g=0;g<h;g++)if(a[g]>=c){e=Math.max(0,g-f);break}for(c=g;c<h;c++)if(a[c]>d){m=c+f;break}return{xData:a.slice(e,m),yData:b.slice(e,m),start:e,end:m}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,f=this.processedXData,h=this.processedYData,e=this.pointClass,g=f.length,k=this.cropStart||0,p,n=this.hasGroupedData,a=a.keys,l,B=[],t;c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(t=0;t<g;t++)p=k+t,n?(l=(new e).init(this,[f[t]].concat(q(h[t]))),
l.dataGroup=this.groupMap[t]):(l=c[p])||void 0===b[p]||(c[p]=l=(new e).init(this,b[p],f[t])),l&&(l.index=p,B[t]=l);this.options.keys=a;if(c&&(g!==(d=c.length)||n))for(t=0;t<d;t++)t!==k||n||(t+=g),c[t]&&(c[t].destroyElements(),c[t].plotX=void 0);this.data=c;this.points=B},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,f=[],h=0;d=this.xAxis.getExtremes();var e=d.min,m=d.max,g,q,k=this.requireSorting?1:0,n,l;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<d;l++)if(q=
c[l],n=a[l],g=(p(n,!0)||x(n))&&(!b.positiveValuesOnly||n.length||0<n),q=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+k]||q)>=e&&(c[l-k]||q)<=m,g&&q)if(g=n.length)for(;g--;)"number"===typeof n[g]&&(f[h++]=n[g]);else f[h++]=n;this.dataMin=r(f);this.dataMax=D(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,f=c.categories,e=this.yAxis,h=this.points,q=h.length,k=!!this.modifyValue,n=a.pointPlacement,
l="between"===n||p(n),t=a.threshold,B=a.startFromThreshold?t:0,r,x,u,H,J=Number.MAX_VALUE;"between"===n&&(n=.5);p(n)&&(n*=z(a.pointRange||c.pointRange));for(a=0;a<q;a++){var L=h[a],C=L.x,D=L.y;x=L.low;var F=b&&e.stacks[(this.negStacks&&D<(B?0:t)?"-":"")+this.stackKey],K;e.positiveValuesOnly&&null!==D&&0>=D&&(L.isNull=!0);L.plotX=r=g(Math.min(Math.max(-1E5,c.translate(C,0,0,0,1,n,"flags"===this.type)),1E5));b&&this.visible&&!L.isNull&&F&&F[C]&&(H=this.getStackIndicator(H,C,this.index),K=F[C],D=K.points[H.key],
x=D[0],D=D[1],x===B&&H.key===F[C].base&&(x=z(p(t)&&t,e.min)),e.positiveValuesOnly&&0>=x&&(x=null),L.total=L.stackTotal=K.total,L.percentage=K.total&&L.y/K.total*100,L.stackY=D,K.setOffset(this.pointXOffset||0,this.barW||0));L.yBottom=w(x)?Math.min(Math.max(-1E5,e.translate(x,0,1,0,1)),1E5):null;k&&(D=this.modifyValue(D,L));L.plotY=x="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,e.translate(D,0,1,0,1)),1E5):void 0;L.isInside=void 0!==x&&0<=x&&x<=e.len&&0<=r&&r<=c.len;L.clientX=l?g(c.translate(C,
0,0,0,1,n)):r;L.negative=L.y<(t||0);L.category=f&&void 0!==f[L.x]?f[L.x]:L.x;L.isNull||(void 0!==u&&(J=Math.min(J,Math.abs(r-u))),u=r);L.zone=this.zones.length&&L.getZone()}this.closestPointRangePx=J;d(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,h=this.clipBox,e=h||b.clipBox,m=this.sharedClipKey||
["_sharedClip",a&&a.duration,a&&a.easing,e.height,c.xAxis,c.yAxis].join(),g=b[m],q=b[m+"m"];g||(a&&(e.width=0,f&&(e.x=b.plotSizeX),b[m+"m"]=q=d.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[m]=g=d.clipRect(e),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&(this.group.clip(a||h?g:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=m);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),
0===g.count.length&&m&&b[m]&&(h||(b[m]=b[m].destroy()),b[m+"m"]&&(b[m+"m"]=b[m+"m"].destroy())))},animate:function(a){var b=this.chart,c=F(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();d(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,h,e=this.options.marker,
g,q,k,p=this[this.specialGroup]||this.markerGroup,n,l=z(e.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);if(!1!==e.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],h=d.graphic,g=d.marker||{},q=!!d.marker,f=l&&void 0===g.enabled||g.enabled,k=d.isInside,f&&!d.isNull?(f=z(g.symbol,this.symbol),n=this.markerAttribs(d,d.selected&&"select"),h?h[k?"show":"hide"](!0).animate(n):k&&(0<n.width||d.hasImage)&&(d.graphic=h=b.renderer.symbol(f,n.x,n.y,n.width,
n.height,q?g:e).add(p)),h&&h.attr(this.pointAttribs(d,d.selected&&"select")),h&&h.addClass(d.getClassName(),!0)):h&&(d.graphic=h.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=d.symbol||c.symbol,h=z(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],h=z(b&&b.radius,c&&c.radius,h+(c&&c.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(h=0);a={x:Math.floor(a.plotX)-h,y:a.plotY-h};h&&(a.width=a.height=2*h);return a},pointAttribs:function(a,
b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},h=this.color,e=d&&d.color,g=a&&a.color,d=z(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;h=e||a||g||h;a=f.fillColor||c.fillColor||h;h=f.lineColor||c.lineColor||h;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=z(b.lineWidth,c.lineWidth,d+z(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,h=b.lineColor||c.lineColor||h);return{stroke:h,"stroke-width":d,fill:a}},destroy:function(){var b=this,c=b.chart,f=/AppleWebKit\/533/.test(H.navigator.userAgent),
e,g,h=b.data||[],q,k;d(b,"destroy");J(b);l(b.axisTypes||[],function(a){(k=b[a])&&k.series&&(u(k.series,b),k.isDirty=k.forceRedraw=!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(g=h.length;g--;)(q=h[g])&&q.destroy&&q.destroy();b.points=null;a.clearTimeout(b.animationTimeout);n(b,function(a,b){a instanceof L&&!a.survive&&(e=f&&"group"===b?"hide":"destroy",a[e]())});c.hoverSeries===b&&(c.hoverSeries=null);u(c.series,b);c.orderSeries();n(b,function(a,c){delete b[c]})},getGraphPath:function(a,b,
c){var d=this,f=d.options,h=f.step,e,g=[],m=[],q;a=a||d.points;(e=a.reversed)&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&e&&(h=4-h);!f.connectNulls||b||c||(a=this.getValidPoints(a));l(a,function(e,k){var n=e.plotX,p=e.plotY,l=a[k-1];(e.leftCliff||l&&l.rightCliff)&&!c&&(q=!0);e.isNull&&!w(b)&&0<k?q=!f.connectNulls:e.isNull&&!b?q=!0:(0===k||q?k=["M",e.plotX,e.plotY]:d.getPointSpline?k=d.getPointSpline(a,e,k):h?(k=1===h?["L",l.plotX,p]:2===h?["L",(l.plotX+n)/2,l.plotY,"L",(l.plotX+n)/2,p]:["L",n,
l.plotY],k.push("L",n,p)):k=["L",n,p],m.push(e.x),h&&(m.push(e.x),2===h&&m.push(e.x)),g.push.apply(g,k),q=!1)});g.xMap=m;return d.graphPath=g},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]],d=a.getZonesGraphs(d);l(d,function(d,f){var e=d[0],h=a[e];h?(h.endX=a.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),
h={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?h.dashstyle=d[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>f&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},getZonesGraphs:function(a){l(this.zones,function(b,c){a.push(["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||""),b.color||this.color,b.dashStyle||this.options.dashStyle])},this);return a},applyZones:function(){var a=this,
b=this.chart,c=b.renderer,d=this.zones,f,e,g=this.clips||[],q,k=this.graph,n=this.area,p=Math.max(b.chartWidth,b.chartHeight),t=this[(this.zoneAxis||"y")+"Axis"],B,r,x=b.inverted,u,H,w,L,J=!1;d.length&&(k||n)&&t&&void 0!==t.min&&(r=t.reversed,u=t.horiz,k&&!this.showLine&&k.hide(),n&&n.hide(),B=t.getExtremes(),l(d,function(d,h){f=r?u?b.plotWidth:0:u?0:t.toPixels(B.min);f=Math.min(Math.max(z(e,f),0),p);e=Math.min(Math.max(Math.round(t.toPixels(z(d.value,B.max),!0)),0),p);J&&(f=e=t.toPixels(B.max));
H=Math.abs(f-e);w=Math.min(f,e);L=Math.max(f,e);t.isXAxis?(q={x:x?L:w,y:0,width:H,height:p},u||(q.x=b.plotHeight-q.x)):(q={x:0,y:x?L:w,width:p,height:H},u&&(q.y=b.plotWidth-q.y));x&&c.isVML&&(q=t.isXAxis?{x:0,y:r?w:L,height:q.width,width:b.chartWidth}:{x:q.y-b.plotLeft-b.spacingBox.x,y:0,width:q.height,height:b.chartHeight});g[h]?g[h].animate(q):(g[h]=c.clipRect(q),k&&a["zone-graph-"+h].clip(g[h]),n&&a["zone-area-"+h].clip(g[h]));J=d.value>B.max;a.resetZones&&0===e&&(e=void 0)}),this.clips=g)},invertGroups:function(a){function b(){l(["group",
"markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],g=!e;g&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+
this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,f=a.options,e=!!a.animate&&b.renderer.isSVG&&F(f.animation).duration,h=a.visible?"inherit":
"hidden",g=f.zIndex,q=a.hasRendered,k=b.seriesGroup,n=b.inverted;c=a.plotGroup("group","series",h,g,k);a.markerGroup=a.plotGroup("markerGroup","markers",h,g,k);e&&a.animate(!0);c.inverted=a.isCartesian?n:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(n);!1===f.clip||a.sharedClipKey||q||c.clip(b.clipRect);e&&a.animate();q||(a.animationTimeout=B(function(){a.afterAnimate()},
e));a.isDirty=!1;a.hasRendered=!0;d(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:z(d&&d.left,a.plotLeft),translateY:z(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?
c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,f){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[d%f],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),d+1,f),right:a(c.slice(h+1),d+1,f)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;B(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?
0:1)},searchKDTree:function(a,b){function c(a,b,h,m){var q=b.point,k=d.kdAxisArray[h%m],n,p,l=q;p=w(a[f])&&w(q[f])?Math.pow(a[f]-q[f],2):null;n=w(a[e])&&w(q[e])?Math.pow(a[e]-q[e],2):null;n=(p||0)+(n||0);q.dist=w(n)?Math.sqrt(n):Number.MAX_VALUE;q.distX=w(p)?Math.sqrt(p):Number.MAX_VALUE;k=a[k]-q[k];n=0>k?"left":"right";p=0>k?"right":"left";b[n]&&(n=c(a,b[n],h+1,m),l=n[g]<l[g]?n:q);b[p]&&Math.sqrt(k*k)<l[g]&&(a=c(a,b[p],h+1,m),l=a[g]<l[g]?a:l);return l}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],
g=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){var C=a.Axis,F=a.Chart,D=a.correctFloat,r=a.defined,g=a.destroyObjectProperties,e=a.each,t=a.format,w=a.objectEach,l=a.pick,u=a.Series;a.StackItem=function(a,d,e,g,p){var c=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=d;this.x=g;this.total=null;this.points={};this.stack=p;this.rightCliff=this.leftCliff=
0;this.alignOptions={align:d.align||(c?e?"left":"right":"center"),verticalAlign:d.verticalAlign||(c?"middle":e?"bottom":"top"),y:l(d.y,c?4:e?14:-6),x:l(d.x,c?e?-6:6:0)};this.textAlign=d.textAlign||(c?e?"right":"left":"center")};a.StackItem.prototype={destroy:function(){g(this,this.axis)},render:function(a){var c=this.axis.chart,e=this.options,g=e.format,g=g?t(g,this,c.time):e.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):this.label=c.renderer.text(g,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,
rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,d){var c=this.axis,e=c.chart,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),f=c.translate(0),f=Math.abs(g-f);a=e.xAxis[0].translate(this.x)+a;c=this.getStackBox(e,this,a,g,d,f,c);if(d=this.label)d.align(this.alignOptions,null,c),c=d.alignAttr,d[!1===this.options.crop||e.isInsidePlot(c.x,c.y)?"show":"hide"](!0)},getStackBox:function(a,d,e,g,p,f,b){var c=d.axis.reversed,k=a.inverted;a=b.height+b.pos-a.plotTop;d=d.isNegative&&
!c||!d.isNegative&&c;return{x:k?d?g:g-f:e,y:k?a-e-p:d?a-g-f:a-g,width:k?f:p,height:k?p:f}}};F.prototype.getStacks=function(){var a=this;e(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});e(a.series,function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||(c.stackKey=c.type+l(c.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,d=l(this.options.reversedStacks,!0),e=a.length,g;if(!this.isXAxis){this.usePercentage=!1;
for(g=e;g--;)a[d?g:e-g-1].setStackedPoints();for(g=0;g<e;g++)a[g].modifyStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,d=a.renderer,e=this.stacks,g=this.stackTotalGroup;g||(this.stackTotalGroup=g=d.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());g.translate(a.plotLeft,a.plotTop);w(e,function(a){w(a,function(a){a.render(g)})})};C.prototype.resetStacks=function(){var a=this,d=a.stacks;a.isXAxis||w(d,function(c){w(c,function(d,e){d.touched<a.stacksTouched?(d.destroy(),
delete c[e]):(d.total=null,d.cumulative=null)})})};C.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),w(a,function(a){w(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var c=this.processedXData,d=this.processedYData,e=[],g=d.length,p=this.options,f=p.threshold,b=l(p.startFromThreshold&&f,0),n=p.stack,p=p.stacking,t=this.stackKey,
u="-"+t,q=this.negStacks,w=this.yAxis,B=w.stacks,H=w.oldStacks,m,E,A,M,G,h,v;w.stacksTouched+=1;for(G=0;G<g;G++)h=c[G],v=d[G],m=this.getStackIndicator(m,h,this.index),M=m.key,A=(E=q&&v<(b?0:f))?u:t,B[A]||(B[A]={}),B[A][h]||(H[A]&&H[A][h]?(B[A][h]=H[A][h],B[A][h].total=null):B[A][h]=new a.StackItem(w,w.options.stackLabels,E,h,n)),A=B[A][h],null!==v?(A.points[M]=A.points[this.index]=[l(A.cumulative,b)],r(A.cumulative)||(A.base=M),A.touched=w.stacksTouched,0<m.index&&!1===this.singleStacks&&(A.points[M][0]=
A.points[this.index+","+h+",0"][0])):A.points[M]=A.points[this.index]=null,"percent"===p?(E=E?t:u,q&&B[E]&&B[E][h]?(E=B[E][h],A.total=E.total=Math.max(E.total,A.total)+Math.abs(v)||0):A.total=D(A.total+(Math.abs(v)||0))):A.total=D(A.total+(v||0)),A.cumulative=l(A.cumulative,b)+(v||0),null!==v&&(A.points[M].push(A.cumulative),e[G]=A.cumulative);"percent"===p&&(w.usePercentage=!0);this.stackedYData=e;w.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,d=a.stackKey,g=a.yAxis.stacks,l=a.processedXData,
p,f=a.options.stacking;a[f+"Stacker"]&&e([d,"-"+d],function(b){for(var c=l.length,d,e;c--;)if(d=l[c],p=a.getStackIndicator(p,d,a.index,b),e=(d=g[b]&&g[b][d])&&d.points[p.key])a[f+"Stacker"](e,d,c)})};u.prototype.percentStacker=function(a,d,e){d=d.total?100/d.total:0;a[0]=D(a[0]*d);a[1]=D(a[1]*d);this.stackedYData[e]=a[1]};u.prototype.getStackIndicator=function(a,d,e,g){!r(a)||a.x!==d||g&&a.key!==g?a={x:d,index:0,key:g}:a.index++;a.key=[e,d,a.index].join();return a}})(K);(function(a){var C=a.addEvent,
F=a.animate,D=a.Axis,r=a.createElement,g=a.css,e=a.defined,t=a.each,w=a.erase,l=a.extend,u=a.fireEvent,c=a.inArray,d=a.isNumber,k=a.isObject,x=a.isArray,p=a.merge,f=a.objectEach,b=a.pick,n=a.Point,z=a.Series,J=a.seriesTypes,q=a.setAnimation,L=a.splat;l(a.Chart.prototype,{addSeries:function(a,c,d){var f,e=this;a&&(c=b(c,!0),u(e,"addSeries",{options:a},function(){f=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();u(e,"afterAddSeries");c&&e.redraw(d)}));return f},addAxis:function(a,c,d,f){var e=c?"xAxis":
"yAxis",g=this.options;a=p(a,{index:this[e].length,isX:c});c=new D(this,a);g[e]=L(g[e]||{});g[e].push(a);b(d,!0)&&this.redraw(f);return c},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,f=c.loading,e=function(){d&&g(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=r("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=r("span",{className:"highcharts-loading-inner"},null,d),C(b,
"redraw",e));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;g(d,l(f.style,{zIndex:10}));g(b.loadingSpan,f.labelStyle);b.loadingShown||(g(d,{opacity:0,display:""}),F(d,{opacity:f.style.opacity||.5},{duration:f.showDuration||0}));b.loadingShown=!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){g(b,{display:"none"})}}));
this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,g,m,q){var k=this,n={credits:"addCredits",
title:"setTitle",subtitle:"setSubtitle"},l=a.chart,h,v,r=[];u(k,"update",{options:a});if(l){p(!0,k.options.chart,l);"className"in l&&k.setClassName(l.className);"reflow"in l&&k.setReflow(l.reflow);if("inverted"in l||"polar"in l)k.propFromSeries(),h=!0;"alignTicks"in l&&(h=!0);f(l,function(a,b){-1!==c("chart."+b,k.propsRequireUpdateSeries)&&(v=!0);-1!==c(b,k.propsRequireDirtyBox)&&(k.isDirtyBox=!0)});"style"in l&&k.renderer.setStyle(l.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&
p(!0,this.options.plotOptions,a.plotOptions);f(a,function(a,b){if(k[b]&&"function"===typeof k[b].update)k[b].update(a,!1);else if("function"===typeof k[n[b]])k[n[b]](a);"chart"!==b&&-1!==c(b,k.propsRequireUpdateSeries)&&(v=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(L(a[b]),function(a,c){(c=e(a.id)&&k.get(a.id)||k[b][c])&&c.coll===b&&(c.update(a,!1),m&&(c.touched=!0));if(!c&&m)if("series"===b)k.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)k.addAxis(a,
"xAxis"===b,!1).touched=!0}),m&&t(k[b],function(a){a.touched?delete a.touched:r.push(a)}))});t(r,function(a){a.remove(!1)});h&&t(k.axes,function(a){a.update({},!1)});v&&t(k.series,function(a){a.update({},!1)});a.loading&&p(!0,k.options.loading,a.loading);h=l&&l.width;l=l&&l.height;d(h)&&h!==k.chartWidth||d(l)&&l!==k.chartHeight?k.setSize(h,l,q):b(g,!0)&&k.redraw(q)},setSubtitle:function(a){this.setTitle(void 0,a)}});l(n.prototype,{update:function(a,c,d,f){function e(){g.applyOptions(a);null===g.y&&
h&&(g.graphic=h.destroy());k(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(g.graphic=h.destroy()),a&&a.dataLabels&&g.dataLabel&&(g.dataLabel=g.dataLabel.destroy()),g.connector&&(g.connector=g.connector.destroy()));m=g.index;q.updateParallelArrays(g,m);p.data[m]=k(p.data[m],!0)||k(a,!0)?g.options:b(a,p.data[m]);q.isDirty=q.isDirtyData=!0;!q.fixedBox&&q.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===p.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(d)}var g=this,q=g.series,h=g.graphic,
m,n=q.chart,p=q.options;c=b(c,!0);!1===f?e():g.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(c(this,this.series.data),a,b)}});l(z.prototype,{addPoint:function(a,c,d,f){var e=this.options,g=this.data,q=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,m=e.data,k,n,p=this.xData,l,t;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);t=k.x;l=p.length;if(this.requireSorting&&t<p[l-1])for(n=!0;l&&p[l-1]>t;)l--;this.updateParallelArrays(k,
"splice",l,0,0);this.updateParallelArrays(k,l);h&&k.name&&(h[t]=k.name);m.splice(l,0,a);n&&(this.data.splice(l,0,null),this.processData());"point"===e.legendType&&this.generatePoints();d&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),this.updateParallelArrays(k,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;c&&q.redraw(f)},removePoint:function(a,c,d){var f=this,e=f.data,g=e[a],m=f.points,h=f.chart,k=function(){m&&m.length===e.length&&m.splice(a,1);e.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(g||
{series:f},"splice",a,1);g&&g.destroy();f.isDirty=!0;f.isDirtyData=!0;c&&h.redraw()};q(d,h);c=b(c,!0);g?g.firePointEvent("remove",null,k):k()},remove:function(a,c,d){function f(){e.destroy();g.isDirtyLegend=g.isDirtyBox=!0;g.linkSeries();b(a,!0)&&g.redraw(c)}var e=this,g=e.chart;!1!==d?u(e,"remove",null,f):f()},update:function(d,f){var e=this,g=e.chart,q=e.userOptions,k=e.oldType||e.type,n=d.type||q.type||g.options.chart.type,h=J[k].prototype,r,B=["group","markerGroup","dataLabelsGroup"],x=["navigatorSeries",
"baseSeries"],z=e.finishedAnimating&&{animation:!1},w=["data","name","turboThreshold"],H=a.keys(d),y=0<H.length;t(H,function(a){-1===c(a,w)&&(y=!1)});if(y)d.data&&this.setData(d.data,!1),d.name&&this.setName(d.name,!1);else{x=B.concat(x);t(x,function(a){x[a]=e[a];delete e[a]});d=p(q,z,{index:e.index,pointStart:b(q.pointStart,e.xData[0])},{data:e.options.data},d);e.remove(!1,null,!1);for(r in h)e[r]=void 0;J[n||k]?l(e,J[n||k].prototype):a.error(17,!0);t(x,function(a){e[a]=x[a]});e.init(g,d);d.zIndex!==
q.zIndex&&t(B,function(a){e[a]&&e[a].attr({zIndex:d.zIndex})});e.oldType=k;g.linkSeries()}u(this,"afterUpdate");b(f,!0)&&g.redraw(!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});l(D.prototype,{update:function(a,c){var d=this.chart;a=p(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);this.destroy(!0);this.init(d,l(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},
remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,e=f.length;e--;)f[e]&&f[e].remove(!1);w(c.axes,this);w(c[d],this);x(c.options[d])?c.options[d].splice(this.options.index,1):delete c.options[d];t(c[d],function(a,b){a.options.index=a.userOptions.index=b});this.destroy();c.isDirtyBox=!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,F=a.each,D=a.map,r=a.pick,g=a.Series,
e=a.seriesType;e("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var g=[],l=[],t=this.xAxis,c=this.yAxis,d=c.stacks[this.stackKey],k={},x=this.index,p=c.series,f=p.length,b,n=r(c.options.reversedStacks,!0)?1:-1,z;e=e||this.points;if(this.options.stacking){for(z=0;z<e.length;z++)e[z].leftNull=e[z].rightNull=null,k[e[z].x]=e[z];a.objectEach(d,function(a,b){null!==a.total&&l.push(b)});l.sort(function(a,b){return a-b});b=D(p,function(){return this.visible});F(l,
function(a,e){var q=0,p,r;if(k[a]&&!k[a].isNull)g.push(k[a]),F([-1,1],function(c){var g=1===c?"rightNull":"leftNull",q=0,m=d[l[e+c]];if(m)for(z=x;0<=z&&z<f;)p=m.points[z],p||(z===x?k[a][g]=!0:b[z]&&(r=d[a].points[z])&&(q-=r[1]-r[0])),z+=n;k[a][1===c?"rightCliff":"leftCliff"]=q});else{for(z=x;0<=z&&z<f;){if(p=d[a].points[z]){q=p[1];break}z+=n}q=c.translate(q,0,1,0,1);g.push({isNull:!0,plotX:t.translate(a,0,0,0,1),x:a,plotY:q,yBottom:q})}})}return g},getGraphPath:function(a){var e=g.prototype.getGraphPath,
l=this.options,t=l.stacking,c=this.yAxis,d,k,x=[],p=[],f=this.index,b,n=c.stacks[this.stackKey],z=l.threshold,J=c.getThreshold(l.threshold),q,l=l.connectNulls||"percent"===t,L=function(d,e,g){var q=a[d];d=t&&n[q.x].points[f];var k=q[g+"Null"]||0;g=q[g+"Cliff"]||0;var m,l,q=!0;g||k?(m=(k?d[0]:d[1])+g,l=d[0]+g,q=!!k):!t&&a[e]&&a[e].isNull&&(m=l=z);void 0!==m&&(p.push({plotX:b,plotY:null===m?J:c.getThreshold(m),isNull:q,isCliff:!0}),x.push({plotX:b,plotY:null===l?J:c.getThreshold(l),doCurve:!1}))};a=
a||this.points;t&&(a=this.getStackPoints(a));for(d=0;d<a.length;d++)if(k=a[d].isNull,b=r(a[d].rectPlotX,a[d].plotX),q=r(a[d].yBottom,J),!k||l)l||L(d,d-1,"left"),k&&!t&&l||(p.push(a[d]),x.push({x:d,plotX:b,plotY:q})),l||L(d,d+1,"right");d=e.call(this,p,!0,!0);x.reversed=!0;k=e.call(this,x,!0,!0);k.length&&(k[0]="L");k=d.concat(k);e=e.call(this,p,!1,l);k.xMap=d.xMap;this.areaPath=k;return e},drawGraph:function(){this.areaPath=[];g.prototype.drawGraph.apply(this);var a=this,e=this.areaPath,l=this.options,
u=[["area","highcharts-area",this.color,l.fillColor]];F(this.zones,function(c,d){u.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+c.className,c.color||a.color,c.fillColor||l.fillColor])});F(u,function(c){var d=c[0],g=a[d];g?(g.endX=a.preventGraphAnimation?null:e.xMap,g.animate({d:e})):(g=a[d]=a.chart.renderer.path(e).addClass(c[1]).attr({fill:r(c[3],C(c[2]).setOpacity(r(l.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=e.xMap;g.shiftUnit=l.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);
(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,D,r){var g=D.plotX,e=D.plotY,t=a[r-1];r=a[r+1];var w,l,u,c;if(t&&!t.isNull&&!1!==t.doCurve&&!D.isCliff&&r&&!r.isNull&&!1!==r.doCurve&&!D.isCliff){a=t.plotY;u=r.plotX;r=r.plotY;var d=0;w=(1.5*g+t.plotX)/2.5;l=(1.5*e+a)/2.5;u=(1.5*g+u)/2.5;c=(1.5*e+r)/2.5;u!==w&&(d=(c-l)*(u-g)/(u-w)+e-c);l+=d;c+=d;l>a&&l>e?(l=Math.max(a,e),c=2*e-l):l<a&&l<e&&(l=Math.min(a,e),c=2*e-l);c>r&&c>e?(c=Math.max(r,e),l=2*e-c):c<r&&c<e&&
(c=Math.min(r,e),l=2*e-c);D.rightContX=u;D.rightContY=c}D=["C",C(t.rightContX,t.plotX),C(t.rightContY,t.plotY),C(w,g),C(l,e),g,e];t.rightContX=t.rightContY=null;return D}})})(K);(function(a){var C=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,getGraphPath:C.getGraphPath,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,F=a.color,D=a.each,r=a.extend,g=a.isNumber,
e=a.merge,t=a.pick,w=a.Series,l=a.seriesType,u=a.svg;l("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],
negStacks:!0,init:function(){w.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&D(d.series,function(c){c.type===a.type&&(c.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,e=a.xAxis,g=a.yAxis,p=e.reversed,f,b={},n=0;!1===d.grouping?n=1:D(a.chart.series,function(c){var d=c.options,e=c.yAxis,q;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||g.len!==e.len||g.pos!==e.pos||(d.stacking?(f=c.stackKey,void 0===b[f]&&(b[f]=n++),q=b[f]):!1!==d.grouping&&
(q=n++),c.columnIndex=q)});var l=Math.min(Math.abs(e.transA)*(e.ordinalSlope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),r=l*d.groupPadding,q=(l-2*r)/(n||1),d=Math.min(d.maxPointWidth||e.len,t(d.pointWidth,q*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(q-d)/2+(r+((a.columnIndex||0)+(p?1:0))*q-l/2)*(p?-1:1)};return a.columnMetrics},crispCol:function(a,d,e,g){var c=this.chart,f=this.borderWidth,b=-(f%2?.5:0),f=f%2?.5:1;c.inverted&&c.renderer.isVML&&(f+=1);this.options.crisp&&
(e=Math.round(a+e)+b,a=Math.round(a)+b,e-=a);g=Math.round(d+g)+f;b=.5>=Math.abs(d)&&.5<g;d=Math.round(d)+f;g-=d;b&&g&&(--d,g+=1);return{x:a,y:d,width:e,height:g}},translate:function(){var a=this,d=a.chart,e=a.options,g=a.dense=2>a.closestPointRange*a.xAxis.transA,g=a.borderWidth=t(e.borderWidth,g?0:1),p=a.yAxis,f=e.threshold,b=a.translatedThreshold=p.getThreshold(f),n=t(e.minPointLength,5),l=a.getColumnMetrics(),r=l.width,q=a.barW=Math.max(r,1+2*g),u=a.pointXOffset=l.offset;d.inverted&&(b-=.5);e.pointPadding&&
(q=Math.ceil(q));w.prototype.translate.apply(a);D(a.points,function(c){var e=t(c.yBottom,b),g=999+Math.abs(e),g=Math.min(Math.max(-g,c.plotY),p.len+g),k=c.plotX+u,l=q,x=Math.min(g,e),B,h=Math.max(g,e)-x;n&&Math.abs(h)<n&&(h=n,B=!p.reversed&&!c.negative||p.reversed&&c.negative,c.y===f&&a.dataMax<=f&&p.min<f&&(B=!B),x=Math.abs(x-b)>n?e-n:b-(B?n:0));c.barX=k;c.pointWidth=r;c.tooltipPos=d.inverted?[p.len+p.pos-d.plotLeft-g,a.xAxis.len-k-l/2,h]:[k+l/2,g+p.pos-d.plotTop,h];c.shapeType="rect";c.shapeArgs=
a.crispCol.apply(a,c.isNull?[k,b,l,0]:[k,x,l,h])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var c=this.options,g,p=this.pointAttrToOptions||{};g=p.stroke||"borderColor";var f=p["stroke-width"]||"borderWidth",b=a&&a.color||this.color,n=a&&a[g]||c[g]||this.color||b,l=a&&a[f]||c[f]||this[f]||0,p=c.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||
b&&b.color||this.color);d&&(a=e(c.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,b=a.color||void 0!==d&&F(b).brighten(a.brightness).get()||b,n=a[g]||n,l=a[f]||l,p=a.dashStyle||p);g={fill:b,stroke:n,"stroke-width":l};p&&(g.dashstyle=p);return g},drawPoints:function(){var a=this,d=this.chart,k=a.options,l=d.renderer,p=k.animationLimit||250,f;D(a.points,function(b){var c=b.graphic,t=c&&d.pointCount<p?"animate":"attr";if(g(b.plotY)&&null!==b.y){f=b.shapeArgs;if(c)c[t](e(f));else b.graphic=
c=l[b.shapeType](f).add(b.group||a.group);k.borderRadius&&c.attr({r:k.borderRadius});c[t](a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);c.addClass(b.getClassName(),!0)}else c&&(b.graphic=c.destroy())})},animate:function(a){var c=this,e=this.yAxis,g=c.options,p=this.chart.inverted,f={},b=p?"translateX":"translateY",n;u&&(a?(f.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(g.threshold))),p?f.translateX=a-e.len:f.translateY=a,c.group.attr(f)):
(n=c.group.attr(b),c.group.animate({scaleY:1},r(C(c.options.animation),{step:function(a,d){f[b]=n+d.pos*(e.pos-n);c.group.attr(f)}})),c.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&D(d.series,function(c){c.type===a.type&&(c.isDirty=!0)});w.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.deg2rad,F=a.isNumber,D=a.pick,r=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,t=2*(a.slicedOffset||0),w=e.plotWidth-2*t,
e=e.plotHeight-2*t,l=a.center,l=[D(l[0],"50%"),D(l[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(w,e),c,d;for(c=0;4>c;++c)d=l[c],a=2>c||2===c&&/%$/.test(d),l[c]=r(d,[w,e,u,l[2]][c])+(a?t:0);l[3]>l[2]&&(l[3]=l[2]);return l},getStartAndEndRadians:function(a,e){a=F(a)?a:0;e=F(e)&&e>a&&360>e-a?e:a+360;return{start:C*(a+-90),end:C*(e+-90)}}}})(K);(function(a){var C=a.addEvent,F=a.CenteredSeriesMixin,D=a.defined,r=a.each,g=a.extend,e=F.getStartAndEndRadians,t=a.inArray,w=a.noop,l=a.pick,u=a.Point,
c=a.Series,d=a.seriesType,k=a.setAnimation;d("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
"dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,d=c.points,b=c.startAngleRad;a||(r(d,function(a){var d=a.graphic,f=a.shapeArgs;d&&(d.attr({r:a.startR||c.center[3]/2,start:b,end:b}),d.animate({r:f.r,start:f.start,end:f.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,c=0,d=this.points,b=d.length,e,g=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)e=d[a],c+=g&&!e.visible?0:e.isNull?0:e.y;this.total=c;for(a=
0;a<b;a++)e=d[a],e.percentage=0<c&&(e.visible||!g)?e.y/c*100:0,e.total=c},generatePoints:function(){c.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,d=this.options,b=d.slicedOffset,g=b+(d.borderWidth||0),k,t,q,r=e(d.startAngle,d.endAngle),u=this.startAngleRad=r.start,r=(this.endAngleRad=r.end)-u,w=this.points,m,x=d.dataLabels.distance,d=d.ignoreHiddenPoint,A,C=w.length,G;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){q=Math.asin(Math.min((b-
a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(q)*(a[2]/2+d.labelDistance)};for(A=0;A<C;A++){G=w[A];G.labelDistance=l(G.options.dataLabels&&G.options.dataLabels.distance,x);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,G.labelDistance);k=u+c*r;if(!d||G.visible)c+=G.percentage/100;t=u+c*r;G.shapeType="arc";G.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*k)/1E3,end:Math.round(1E3*t)/1E3};q=(t+k)/2;q>1.5*Math.PI?q-=2*Math.PI:q<-Math.PI/2&&(q+=2*Math.PI);
G.slicedTranslation={translateX:Math.round(Math.cos(q)*b),translateY:Math.round(Math.sin(q)*b)};t=Math.cos(q)*a[2]/2;m=Math.sin(q)*a[2]/2;G.tooltipPos=[a[0]+.7*t,a[1]+.7*m];G.half=q<-Math.PI/2||q>Math.PI/2?1:0;G.angle=q;k=Math.min(g,G.labelDistance/5);G.labelPos=[a[0]+t+Math.cos(q)*G.labelDistance,a[1]+m+Math.sin(q)*G.labelDistance,a[0]+t+Math.cos(q)*k,a[1]+m+Math.sin(q)*k,a[0]+t,a[1]+m,0>G.labelDistance?"center":G.half?"right":"left",q]}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart.renderer,
d,b,e,k,l=a.options.shadow;l&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));r(a.points,function(f){b=f.graphic;if(f.isNull)b&&(f.graphic=b.destroy());else{k=f.shapeArgs;d=f.getTranslate();var q=f.shadowGroup;l&&!q&&(q=f.shadowGroup=c.g("shadow").add(a.shadowGroup));q&&q.attr(d);e=a.pointAttribs(f,f.selected&&"select");b?b.setRadialReference(a.center).attr(e).animate(g(k,d)):(f.graphic=b=c[f.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),f.visible||b.attr({visibility:"hidden"}),
b.attr(e).attr({"stroke-linejoin":"round"}).shadow(l,q));b.addClass(f.getClassName())}})},searchPoint:w,sortByAngle:function(a,c){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:w},{init:function(){u.prototype.init.apply(this,arguments);var a=this,c;a.name=l(a.name,"Slice");c=function(c){a.slice("select"===c.type)};C(a,"select",c);C(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,
!0)&&0<=this.y},setVisible:function(a,c){var d=this,b=d.series,e=b.chart,g=b.options.ignoreHiddenPoint;c=l(c,g);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,b.options.data[t(d,b.data)]=d.options,r(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&e.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),g&&(b.isDirty=!0),c&&e.redraw())},slice:function(a,c,d){var b=this.series;k(d,b.chart);l(c,!0);this.sliced=
this.options.sliced=D(a)?a:!this.sliced;b.options.data[t(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-1,start:c.start,end:c.end})}})})(K);(function(a){var C=
a.addEvent,F=a.arrayMax,D=a.defined,r=a.each,g=a.extend,e=a.format,t=a.map,w=a.merge,l=a.noop,u=a.pick,c=a.relativeLength,d=a.Series,k=a.seriesTypes,x=a.some,p=a.stableSort;a.distribute=function(c,b,d){function e(a,b){return a.target-b.target}var f,g=!0,k=c,l=[],n;n=0;var m=k.reducedLen||b;for(f=c.length;f--;)n+=c[f].size;if(n>m){p(c,function(a,b){return(b.rank||0)-(a.rank||0)});for(n=f=0;n<=m;)n+=c[f].size,f++;l=c.splice(f-1,c.length)}p(c,e);for(c=t(c,function(a){return{size:a.size,targets:[a.target],
align:u(a.align,.5)}});g;){for(f=c.length;f--;)g=c[f],n=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,n-g.size*g.align),b-g.size);f=c.length;for(g=!1;f--;)0<f&&c[f-1].pos+c[f-1].size>c[f].pos&&(c[f-1].size+=c[f].size,c[f-1].targets=c[f-1].targets.concat(c[f].targets),c[f-1].align=.5,c[f-1].pos+c[f-1].size>b&&(c[f-1].pos=b-c[f-1].size),c.splice(f,1),g=!0)}k.push.apply(k,l);f=0;x(c,function(c){var e=0;if(x(c.targets,function(){k[f].pos=c.pos+e;if(Math.abs(k[f].pos-
k[f].target)>d)return r(k.slice(0,f+1),function(a){delete a.pos}),k.reducedLen=(k.reducedLen||b)-.1*b,k.reducedLen>.1*b&&a.distribute(k,b,d),!0;e+=k[f].size;f++}))return!0});p(k,e)};d.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var b=this,d=b.chart,g=b.options,k=g.dataLabels,q=b.points,l,p,t=
b.hasRendered||0,m,x,A=u(k.defer,!!g.animation),F=d.renderer;if(k.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(k),x=b.plotGroup("dataLabelsGroup","data-labels",A&&!t?"hidden":"visible",k.zIndex||6),A&&(x.attr({opacity:+t}),t||C(b,"afterAnimate",function(){b.visible&&x.show(!0);x[g.animation?"animate":"attr"]({opacity:1},{duration:200})})),p=k,r(q,function(f){var h,q=f.dataLabel,n,t,r=f.connector,B=!q,z;l=f.dlOptions||f.options&&f.options.dataLabels;(h=u(l&&l.enabled,p.enabled)&&
!f.isNull)&&(h=!0===c(f,l||k));h&&(k=w(p,l),n=f.getLabelConfig(),z=k[f.formatPrefix+"Format"]||k.format,m=D(z)?e(z,n,d.time):(k[f.formatPrefix+"Formatter"]||k.formatter).call(n,k),z=k.style,n=k.rotation,z.color=u(k.color,z.color,b.color,"#000000"),"contrast"===z.color&&(f.contrastColor=F.getContrast(f.color||b.color),z.color=k.inside||0>u(f.labelDistance,k.distance)||g.stacking?f.contrastColor:"#000000"),g.cursor&&(z.cursor=g.cursor),t={fill:k.backgroundColor,stroke:k.borderColor,"stroke-width":k.borderWidth,
r:k.borderRadius||0,rotation:n,padding:k.padding,zIndex:1},a.objectEach(t,function(a,b){void 0===a&&delete t[b]}));!q||h&&D(m)?h&&D(m)&&(q?t.text=m:(q=f.dataLabel=n?F.text(m,0,-9999).addClass("highcharts-data-label"):F.label(m,0,-9999,k.shape,null,null,k.useHTML,null,"data-label"),q.addClass(" highcharts-data-label-color-"+f.colorIndex+" "+(k.className||"")+(k.useHTML?"highcharts-tracker":""))),q.attr(t),q.css(z).shadow(k.shadow),q.added||q.add(x),b.alignDataLabel(f,q,k,null,B)):(f.dataLabel=q=q.destroy(),
r&&(f.connector=r.destroy()))});a.fireEvent(this,"afterDrawDataLabels")};d.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,k=f.inverted,l=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),n=u(a.plotY,-9999),m=b.getBBox(),p,t=c.rotation,r=c.align,w=this.visible&&(a.series.forceDL||f.isInsidePlot(l,Math.round(n),k)||d&&f.isInsidePlot(l,k?d.x+1:d.y+d.height-1,k)),h="justify"===u(c.overflow,"justify");if(w&&(p=c.style.fontSize,p=f.renderer.fontMetrics(p,b).b,d=g({x:k?this.yAxis.len-n:l,y:Math.round(k?
this.xAxis.len-l:n),width:0,height:0},d),g(c,{width:m.width,height:m.height}),t?(h=!1,l=f.renderer.rotCorr(p,t),l={x:d.x+c.x+d.width/2+l.x,y:d.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](l).attr({align:r}),n=(t+720)%360,n=180<n&&360>n,"left"===r?l.y-=n?m.height:0:"center"===r?(l.x-=m.width/2,l.y-=m.height/2):"right"===r&&(l.x-=m.width,l.y-=n?0:m.height),b.placed=!0,b.alignAttr=l):(b.align(c,null,d),l=b.alignAttr),h?a.isLabelJustified=this.justifyDataLabel(b,c,
l,m,d,e):u(c.crop,!0)&&(w=f.isInsidePlot(l.x,l.y)&&f.isInsidePlot(l.x+m.width,l.y+m.height)),c.shape&&!t))b[e?"attr":"animate"]({anchorX:k?f.plotWidth-a.plotY:a.plotX,anchorY:k?f.plotHeight-a.plotX:a.plotY});w||(b.attr({y:-9999}),b.placed=!1)};d.prototype.justifyDataLabel=function(a,b,c,d,e,g){var f=this.chart,q=b.align,k=b.verticalAlign,m,l,n=a.box?0:a.padding||0;m=c.x+n;0>m&&("right"===q?b.align="left":b.x=-m,l=!0);m=c.x+d.width-n;m>f.plotWidth&&("left"===q?b.align="right":b.x=f.plotWidth-m,l=!0);
m=c.y+n;0>m&&("bottom"===k?b.verticalAlign="top":b.y=-m,l=!0);m=c.y+d.height-n;m>f.plotHeight&&("top"===k?b.verticalAlign="bottom":b.y=f.plotHeight-m,l=!0);l&&(a.placed=!g,a.align(b,null,e));return l};k.pie&&(k.pie.prototype.drawDataLabels=function(){var c=this,b=c.data,e,g=c.chart,k=c.options.dataLabels,q=u(k.connectorPadding,10),l=u(k.connectorWidth,1),p=g.plotWidth,t=g.plotHeight,m=Math.round(g.chartWidth/3),w,x=c.center,C=x[2]/2,G=x[1],h,v,K,P,I=[[],[]],O,N,y,R,S=[0,0,0,0];c.visible&&(k.enabled||
c._hasPointLabels)&&(r(b,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(c),r(b,function(a){a.dataLabel&&a.visible&&(I[a.half].push(a),a.dataLabel._pos=null,!D(k.style.width)&&!D(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>m&&(a.dataLabel.css({width:.7*m}),a.dataLabel.shortened=!0))}),
r(I,function(b,d){var f,m,l=b.length,n=[],w;if(l)for(c.sortByAngle(b,d-.5),0<c.maxLabelDistance&&(f=Math.max(0,G-C-c.maxLabelDistance),m=Math.min(G+C+c.maxLabelDistance,g.plotHeight),r(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,G-C-a.labelDistance),a.bottom=Math.min(G+C+a.labelDistance,g.plotHeight),w=a.dataLabel.getBBox().height||21,a.positionsIndex=n.push({target:a.labelPos[1]-a.top+w/2,size:w,rank:a.y})-1)}),f=m+w-f,a.distribute(n,f,f/5)),R=0;R<l;R++)e=b[R],m=e.positionsIndex,
K=e.labelPos,h=e.dataLabel,y=!1===e.visible?"hidden":"inherit",N=f=K[1],n&&D(n[m])&&(void 0===n[m].pos?y="hidden":(P=n[m].size,N=e.top+n[m].pos)),delete e.positionIndex,O=k.justify?x[0]+(d?-1:1)*(C+e.labelDistance):c.getX(N<e.top+2||N>e.bottom-2?f:N,d,e),h._attr={visibility:y,align:K[6]},h._pos={x:O+k.x+({left:q,right:-q}[K[6]]||0),y:N+k.y-10},K.x=O,K.y=N,u(k.crop,!0)&&(v=h.getBBox().width,f=null,O-v<q&&1===d?(f=Math.round(v-O+q),S[3]=Math.max(f,S[3])):O+v>p-q&&0===d&&(f=Math.round(O+v-p+q),S[1]=
Math.max(f,S[1])),0>N-P/2?S[0]=Math.max(Math.round(-N+P/2),S[0]):N+P/2>t&&(S[2]=Math.max(Math.round(N+P/2-t),S[2])),h.sideOverflow=f)}),0===F(S)||this.verifyDataLabelOverflow(S))&&(this.placeDataLabels(),l&&r(this.points,function(a){var b;w=a.connector;if((h=a.dataLabel)&&h._pos&&a.visible&&0<a.labelDistance){y=h._attr.visibility;if(b=!w)a.connector=w=g.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(c.dataLabelsGroup),
w.attr({"stroke-width":l,stroke:k.connectorColor||a.color||"#666666"});w[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});w.attr("visibility",y)}else w&&(a.connector=w.destroy())}))},k.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){r(this.points,function(a){var b=
a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:this.options.dataLabels.style.textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},k.pie.prototype.alignDataLabel=l,k.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,d=this.options,e=d.center,f=d.minSize||80,g,k=null!==d.size;k||(null!==e[0]?g=Math.max(b[2]-
Math.max(a[1],a[3]),f):(g=Math.max(b[2]-a[1]-a[3],f),b[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,b[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,b[2]-a[0]-a[2]),f),b[1]+=(a[0]-a[2])/2),g<b[2]?(b[2]=g,b[3]=Math.min(c(d.innerSize||0,g),g),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});k.column&&(k.column.prototype.alignDataLabel=function(a,b,c,e,g){var f=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,p=u(a.below,a.plotY>u(this.translatedThreshold,
k.yAxis.len)),m=u(c.inside,!!this.options.stacking);l&&(e=w(l),0>e.y&&(e.height+=e.y,e.y=0),l=e.y+e.height-k.yAxis.len,0<l&&(e.height-=l),f&&(e={x:k.yAxis.len-e.y-e.height,y:k.xAxis.len-e.x-e.width,width:e.height,height:e.width}),m||(f?(e.x+=p?0:e.width,e.width=0):(e.y+=p?e.height:0,e.height=0)));c.align=u(c.align,!f||m?"center":p?"right":"left");c.verticalAlign=u(c.verticalAlign,f||m?"middle":p?"top":"bottom");d.prototype.alignDataLabel.call(this,a,b,c,e,g);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);
(function(a){var C=a.Chart,F=a.each,D=a.objectEach,r=a.pick;a=a.addEvent;a(C,"render",function(){var a=[];F(this.labelCollectors||[],function(e){a=a.concat(e())});F(this.yAxis||[],function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&D(e.stacks,function(e){D(e,function(e){a.push(e.label)})})});F(this.series||[],function(e){var g=e.options.dataLabels,w=e.dataLabelCollections||["dataLabel"];(g.enabled||e._hasPointLabels)&&!g.allowOverlap&&e.visible&&F(w,function(g){F(e.points,function(e){e[g]&&
(e[g].labelrank=r(e.labelrank,e.shapeArgs&&e.shapeArgs.height),a.push(e[g]))})})});this.hideOverlappingLabels(a)});C.prototype.hideOverlappingLabels=function(a){var e=a.length,g,r,l,u,c,d,k,x,p,f=function(a,c,d,e,f,g,k,l){return!(f>a+d||f+k<a||g>c+e||g+l<c)};for(r=0;r<e;r++)if(g=a[r])g.oldOpacity=g.opacity,g.newOpacity=1,g.width||(l=g.getBBox(),g.width=l.width,g.height=l.height);a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(r=0;r<e;r++)for(l=a[r],g=r+1;g<e;++g)if(u=a[g],l&&u&&
l!==u&&l.placed&&u.placed&&0!==l.newOpacity&&0!==u.newOpacity&&(c=l.alignAttr,d=u.alignAttr,k=l.parentGroup,x=u.parentGroup,p=2*(l.box?0:l.padding||0),c=f(c.x+k.translateX,c.y+k.translateY,l.width-p,l.height-p,d.x+x.translateX,d.y+x.translateY,u.width-p,u.height-p)))(l.labelrank<u.labelrank?l:u).newOpacity=0;F(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);
(function(a){var C=a.addEvent,F=a.Chart,D=a.createElement,r=a.css,g=a.defaultOptions,e=a.defaultPlotOptions,t=a.each,w=a.extend,l=a.fireEvent,u=a.hasTouch,c=a.inArray,d=a.isObject,k=a.Legend,x=a.merge,p=a.pick,f=a.Point,b=a.Series,n=a.seriesTypes,z=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&
(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(r).css({cursor:a.options.cursor})}}),a._hasTracking=!0);l(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=
f.pointer,k=f.renderer,p=f.options.tooltip.snap,h=a.tracker,n,r=function(){if(f.hoverSeries!==a)a.onMouseOver()},w="rgba(192,192,192,"+(z?.0001:.002)+")";if(e&&!c)for(n=e+1;n--;)"M"===d[n]&&d.splice(n+1,0,d[n+1]-p,d[n+2],"L"),(n&&"M"===d[n]||n===e)&&d.splice(n,0,"L",d[n-2]+p,d[n-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*p),zIndex:2}).add(a.group),t([a.tracker,
a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",r)}));l(this,"afterDrawTracker")}};n.column&&(n.column.prototype.drawTracker=J.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=J.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=J.drawTrackerPoint);w(k.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,g="highcharts-legend-"+
(a instanceof f?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");e.addClass(g);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(x(a.visible?d.itemStyle:d.itemHiddenStyle));e.removeClass(g);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};e.removeClass(g);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):l(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=
D("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){l(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});g.legend.itemStyle.cursor="pointer";w(F.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=g.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=e.states,k="chart"===d.relativeTo?null:"plotBox";l(this,"beforeShowResetZoom",null,
function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k)})},zoomOut:function(){l(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,c=this.pointer,e=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),c.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var d=a.axis;c[d.isXAxis?"zoomX":"zoomY"]&&(b=d.zoom(a.min,a.max),d.displayBtn&&
(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&d(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(p(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),
m=b.toValue(g-f,!0)+h*k,k=b.toValue(g+b.len-f,!0)-h*k,q=k<m,g=q?k:m,m=q?m:k,k=Math.min(l.dataMin,h?l.min:b.toValue(b.toPixels(l.min)-b.minPixelPadding)),h=Math.max(l.dataMax,h?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),q=k-g;0<q&&(m+=q,g=k);q=m-h;0<q&&(m=h,g-=q);b.series.length&&g!==l.min&&m!==l.max&&(b.setExtremes(g,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);r(c.container,{cursor:"move"})}});w(f.prototype,{select:function(a,b){var d=this,e=d.series,f=e.chart;a=p(a,!d.selected);
d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[c(d,e.data)]=d.options;d.setState(a&&"select");b||t(f.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[c(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=
this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=x(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,f=this.series,g=f.options.states[a||"normal"]||{},k=e[f.type].marker&&f.options.marker,q=k&&!1===k.enabled,n=k&&k.states&&
k.states[a||"normal"]||{},h=!1===n.enabled,r=f.stateMarkerGraphic,t=this.marker||{},u=f.chart,x=f.halo,z,C=k&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(h||q&&!1===n.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){C&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),p(u.options.chart.animation,
g.animation)),z&&this.graphic.animate(z,p(u.options.chart.animation,n.animation,k.animation)),r&&r.hide();else{if(a&&n){k=t.symbol||f.symbol;r&&r.currentSymbol!==k&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:z.x,y:z.y});else k&&(f.stateMarkerGraphic=r=u.renderer.symbol(k,z.x,z.y,z.width,z.height).add(f.markerGroup),r.currentSymbol=k);r&&r.attr(f.pointAttribs(this,a))}r&&(r[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),r.element.point=this)}(c=g.halo)&&c.size?(x||(f.halo=x=u.renderer.path().add((this.graphic||
r).parentGroup)),x.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),x.attr({"class":"highcharts-halo highcharts-color-"+p(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:"")}),x.point=this,x.attr(w({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):x&&x.point&&x.point.haloPath&&x.animate({d:x.point.haloPath(0)},null,x.hide);this.state=a;l(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});w(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&l(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&l(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,p(e[a||"normal"]&&e[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},
setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,
function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();l(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);l(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})})(K);(function(a){var C=a.Chart,F=a.each,D=a.inArray,r=a.isArray,g=a.isObject,e=a.pick,t=a.splat;C.prototype.setResponsive=function(e){var g=this.options.responsive,r=[],c=this.currentResponsive;
g&&g.rules&&F(g.rules,function(c){void 0===c._id&&(c._id=a.uniqueKey());this.matchResponsiveRule(c,r,e)},this);var d=a.merge.apply(0,a.map(r,function(c){return a.find(g.rules,function(a){return a._id===c}).chartOptions})),r=r.toString()||void 0;r!==(c&&c.ruleIds)&&(c&&this.update(c.undoOptions,e),r?(this.currentResponsive={ruleIds:r,mergedOptions:d,undoOptions:this.currentOptions(d)},this.update(d,e)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,g){var l=a.condition;
(l.callback||function(){return this.chartWidth<=e(l.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=e(l.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=e(l.minWidth,0)&&this.chartHeight>=e(l.minHeight,0)}).call(this)&&g.push(a._id)};C.prototype.currentOptions=function(e){function l(c,d,e,u){var k;a.objectEach(c,function(a,b){if(!u&&-1<D(b,["series","xAxis","yAxis"]))for(a=t(a),e[b]=[],k=0;k<a.length;k++)d[b][k]&&(e[b][k]={},l(a[k],d[b][k],e[b][k],u+1));else g(a)?(e[b]=r(a)?[]:{},l(a,d[b]||{},e[b],u+1)):
e[b]=d[b]||null})}var u={};l(e,this.options,u,0);return u}})(K);return K});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return basicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return asyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AreaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PieData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrilldownData; });
var basicData = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function formatter() {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: []
};

var asyncData = {
    name: 'Tokyo',
    marker: {
        symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
        y: 26.5,
        marker: {
            symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
        }
    }, 23.3, 18.3, 13.9, 9.6]

    // area chart data
};var AreaData = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' + 'thebulletin.metapress.com</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function formatter() {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function formatter() {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605, 24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null, 5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000, 21000, 20000, 19000, 18000, 18000, 17000, 16000]
    }]

    // pie chart data
};var PieData = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Contents of Highsoft\'s weekly fruit delivery'
    },
    subtitle: {
        text: '3D donut in Highcharts'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [['Bananas', 8], ['Kiwi', 3], ['Mixed nuts', 1], ['Oranges', 6], ['Apples', 8], ['Pears', 4], ['Clementines', 4], ['Reddish (bag)', 1], ['Grapes (bunch)', 1]]
    }]
};

var DrilldownData = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Basic drilldown'
    },
    xAxis: {
        type: 'category'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Things',
        colorByPoint: true,
        data: [{
            name: 'Animals',
            y: 5,
            drilldown: 'animals'
        }, {
            name: 'Fruits',
            y: 2,
            drilldown: 'fruits'
        }, {
            name: 'Cars',
            y: 4,
            drilldown: 'cars'
        }]
    }],
    drilldown: {
        series: [{
            id: 'animals',
            data: [['Cats', 4], ['Dogs', 2], ['Cows', 1], ['Sheep', 2], ['Pigs', 1]]
        }, {
            id: 'fruits',
            data: [{
                name: 'Apples',
                y: 4
            }, {
                name: 'Oranges',
                y: 2,
                drilldown: 'third-leves'
            }]
        }, {
            id: 'cars',
            data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
        }, {
            id: 'third-leves',
            data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
        }]
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(w){"object"===typeof module&&module.exports?module.exports=w:w(Highcharts)})(function(w){(function(b){function r(b,a){this.init(b,a)}var v=b.CenteredSeriesMixin,u=b.each,n=b.extend,q=b.merge,g=b.splat;n(r.prototype,{coll:"pane",init:function(b,a){this.chart=a;this.background=[];a.pane.push(this);this.setOptions(b)},setOptions:function(b){this.options=q(this.defaultOptions,this.chart.angular?{background:{}}:void 0,b)},render:function(){var b=this.options,a=this.options.background,c=this.chart.renderer;
this.group||(this.group=c.g("pane-group").attr({zIndex:b.zIndex||0}).add());this.updateCenter();if(a)for(a=g(a),b=Math.max(a.length,this.background.length||0),c=0;c<b;c++)a[c]&&this.axis?this.renderBackground(q(this.defaultBackgroundOptions,a[c]),c):this.background[c]&&(this.background[c]=this.background[c].destroy(),this.background.splice(c,1))},renderBackground:function(b,a){var c="animate";this.background[a]||(this.background[a]=this.chart.renderer.path().add(this.group),c="attr");this.background[a][c]({d:this.axis.getPlotBandPath(b.from,
b.to,b)}).attr({fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,"class":"highcharts-pane "+(b.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(b){this.center=(b||this.axis||{}).center=
v.getCenter.call(this)},update:function(b,a){q(!0,this.options,b);this.setOptions(this.options);this.render();u(this.chart.axes,function(c){c.pane===this&&(c.pane=null,c.update({},a))},this)}});b.Pane=r})(w);(function(b){var r=b.addEvent,v=b.Axis,u=b.each,n=b.extend,q=b.map,g=b.merge,l=b.noop,a=b.pick,c=b.pInt,d=b.Tick,k=b.wrap,f=b.correctFloat,e,p,t=v.prototype,h=d.prototype;b.radialAxisExtended||(b.radialAxisExtended=!0,e={getOffset:l,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=
!1},setScale:l,setCategories:l,setTitle:l},p={defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null,style:{textOverflow:"none"}},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",
labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=g(this.defaultOptions,this.defaultRadialOptions,a);a.plotBands||(a.plotBands=[])},getOffset:function(){t.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(c,d){c=this.center;var m=this.chart,e=a(d,c[2]/2-this.offset);this.isCircular||void 0!==d?(d=this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],e,e,{start:this.startAngleRad,end:this.endAngleRad,
open:!0,innerR:0}),d.xBounds=[this.left+c[0]],d.yBounds=[this.top+c[1]-e]):(d=this.postTranslate(this.angleRad,e),d=["M",c[0]+m.plotLeft,c[1]+m.plotTop,"L",d.x,d.y]);return d},setAxisTranslation:function(){t.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=
this.isCircular&&void 0===a(this.userMax,this.options.max)&&f(this.endAngleRad-this.startAngleRad)===f(2*Math.PI))this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0},setAxisSize:function(){t.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*a(this.sector,1)/2)},getPosition:function(c,d){return this.postTranslate(this.isCircular?this.translate(c):
this.angleRad,a(this.isCircular?d:this.translate(c),this.center[2]/2)-this.offset)},postTranslate:function(a,c){var d=this.chart,e=this.center;a=this.startAngleRad+a;return{x:d.plotLeft+e[0]+Math.cos(a)*c,y:d.plotTop+e[1]+Math.sin(a)*c}},getPlotBandPath:function(d,e,b){var f=this.center,m=this.startAngleRad,k=f[2]/2,h=[a(b.outerRadius,"100%"),b.innerRadius,a(b.thickness,10)],p=Math.min(this.offset,0),x=/%$/,t,B=this.isCircular;"polygon"===this.options.gridLineInterpolation?f=this.getPlotLinePath(d).concat(this.getPlotLinePath(e,
!0)):(d=Math.max(d,this.min),e=Math.min(e,this.max),B||(h[0]=this.translate(d),h[1]=this.translate(e)),h=q(h,function(a){x.test(a)&&(a=c(a,10)*k/100);return a}),"circle"!==b.shape&&B?(d=m+this.translate(d),e=m+this.translate(e)):(d=-Math.PI/2,e=1.5*Math.PI,t=!0),h[0]-=p,h[2]-=p,f=this.chart.renderer.symbols.arc(this.left+f[0],this.top+f[1],h[0],h[0],{start:Math.min(d,e),end:Math.max(d,e),innerR:a(h[1],h[0]-h[2]),open:t}));return f},getPlotLinePath:function(a,c){var d=this,e=d.center,f=d.chart,b=d.getPosition(a),
h,m,k;d.isCircular?k=["M",e[0]+f.plotLeft,e[1]+f.plotTop,"L",b.x,b.y]:"circle"===d.options.gridLineInterpolation?(a=d.translate(a))&&(k=d.getLinePath(0,a)):(u(f.xAxis,function(a){a.pane===d.pane&&(h=a)}),k=[],a=d.translate(a),e=h.tickPositions,h.autoConnect&&(e=e.concat([e[0]])),c&&(e=[].concat(e).reverse()),u(e,function(c,d){m=h.getPosition(c,a);k.push(d?"L":"M",m.x,m.y)}));return k},getTitlePosition:function(){var a=this.center,c=this.chart,d=this.options.title;return{x:c.plotLeft+a[0]+(d.x||0),
y:c.plotTop+a[1]-{high:.5,middle:.25,low:0}[d.align]*a[2]+(d.y||0)}}},r(v,"init",function(a){var c=this.chart,d=c.angular,f=c.polar,b=this.isXAxis,h=d&&b,k,m=c.options;a=a.userOptions.pane||0;a=this.pane=c.pane&&c.pane[a];if(d){if(n(this,h?e:p),k=!b)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else f&&(n(this,p),this.defaultRadialOptions=(k=b)?this.defaultRadialXOptions:g(this.defaultYAxisOptions,this.defaultRadialYOptions));d||f?(this.isRadial=!0,c.inverted=!1,m.chart.zoomType=null):
this.isRadial=!1;a&&k&&(a.axis=this);this.isCircular=k}),r(v,"afterInit",function(){var c=this.chart,d=this.options,e=this.pane,f=e&&e.options;c.angular&&this.isXAxis||!e||!c.angular&&!c.polar||(this.angleRad=(d.angle||0)*Math.PI/180,this.startAngleRad=(f.startAngle-90)*Math.PI/180,this.endAngleRad=(a(f.endAngle,f.startAngle+360)-90)*Math.PI/180,this.offset=d.offset||0)}),k(t,"autoLabelAlign",function(a){if(!this.isRadial)return a.apply(this,[].slice.call(arguments,1))}),r(d,"afterGetPosition",function(a){this.axis.getPosition&&
n(a.pos,this.axis.getPosition(this.pos))}),r(d,"afterGetLabelPosition",function(c){var d=this.axis,e=this.label,f=d.options.labels,b=f.y,h,k=20,p=f.align,m=(d.translate(this.pos)+d.startAngleRad+Math.PI/2)/Math.PI*180%360;d.isRadial&&(h=d.getPosition(this.pos,d.center[2]/2+a(f.distance,-25)),"auto"===f.rotation?e.attr({rotation:m}):null===b&&(b=d.chart.renderer.fontMetrics(e.styles&&e.styles.fontSize).b-e.getBBox().height/2),null===p&&(d.isCircular?(this.label.getBBox().width>d.len*d.tickInterval/
(d.max-d.min)&&(k=0),p=m>k&&m<180-k?"left":m>180+k&&m<360-k?"right":"center"):p="center",e.attr({align:p})),c.pos.x=h.x+f.x,c.pos.y=h.y+b)}),k(h,"getMarkPath",function(a,c,d,e,f,b,h){var k=this.axis;k.isRadial?(a=k.getPosition(this.pos,k.center[2]/2+e),c=["M",c,d,"L",a.x,a.y]):c=a.call(this,c,d,e,f,b,h);return c}))})(w);(function(b){var r=b.each,v=b.pick,u=b.defined,n=b.seriesType,q=b.seriesTypes,g=b.Series.prototype,l=b.Point.prototype;n("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}},{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var c=this.chart,d=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=d.x-c.plotLeft;a.plotHigh=d.y-c.plotTop;a.plotLowX=a.plotX},translate:function(){var a=this,c=a.yAxis,d=!!a.modifyValue;q.area.prototype.translate.apply(a);
r(a.points,function(b){var f=b.low,e=b.high,k=b.plotY;null===e||null===f?(b.isNull=!0,b.plotY=null):(b.plotLow=k,b.plotHigh=c.translate(d?a.modifyValue(e,b):e,0,1,0,1),d&&(b.yBottom=b.plotHigh))});this.chart.polar&&r(this.points,function(c){a.highToXY(c);c.tooltipPos=[(c.plotHighX+c.plotLowX)/2,(c.plotHigh+c.plotLow)/2]})},getGraphPath:function(a){var c=[],d=[],b,f=q.area.prototype.getGraphPath,e,p,t;t=this.options;var h=this.chart.polar&&!1!==t.connectEnds,m=t.connectNulls,x=t.step;a=a||this.points;
for(b=a.length;b--;)e=a[b],e.isNull||h||m||a[b+1]&&!a[b+1].isNull||d.push({plotX:e.plotX,plotY:e.plotY,doCurve:!1}),p={polarPlotY:e.polarPlotY,rectPlotX:e.rectPlotX,yBottom:e.yBottom,plotX:v(e.plotHighX,e.plotX),plotY:e.plotHigh,isNull:e.isNull},d.push(p),c.push(p),e.isNull||h||m||a[b-1]&&!a[b-1].isNull||d.push({plotX:e.plotX,plotY:e.plotY,doCurve:!1});a=f.call(this,a);x&&(!0===x&&(x="left"),t.step={left:"right",center:"center",right:"left"}[x]);c=f.call(this,c);d=f.call(this,d);t.step=x;t=[].concat(a,
c);this.chart.polar||"M"!==d[0]||(d[0]="L");this.graphPath=t;this.areaPath=a.concat(d);t.isArea=!0;t.xMap=a.xMap;this.areaPath.xMap=a.xMap;return t},drawDataLabels:function(){var a=this.data,c=a.length,d,b=[],f=this.options.dataLabels,e=f.align,p=f.verticalAlign,t=f.inside,h,m,x=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(d=c;d--;)if(h=a[d])m=t?h.plotHigh<h.plotLow:h.plotHigh>h.plotLow,h.y=h.high,h._plotY=h.plotY,h.plotY=h.plotHigh,b[d]=h.dataLabel,h.dataLabel=h.dataLabelUpper,h.below=
m,x?e||(f.align=m?"right":"left"):p||(f.verticalAlign=m?"top":"bottom"),f.x=f.xHigh,f.y=f.yHigh;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments);for(d=c;d--;)if(h=a[d])m=t?h.plotHigh<h.plotLow:h.plotHigh>h.plotLow,h.dataLabelUpper=h.dataLabel,h.dataLabel=b[d],h.y=h.low,h.plotY=h._plotY,h.below=!m,x?e||(f.align=m?"left":"right"):p||(f.verticalAlign=m?"bottom":"top"),f.x=f.xLow,f.y=f.yLow;g.drawDataLabels&&g.drawDataLabels.apply(this,arguments)}f.align=e;f.verticalAlign=p},alignDataLabel:function(){q.column.prototype.alignDataLabel.apply(this,
arguments)},drawPoints:function(){var a=this.points.length,c,d;g.drawPoints.apply(this,arguments);for(d=0;d<a;)c=this.points[d],c.origProps={plotY:c.plotY,plotX:c.plotX,isInside:c.isInside,negative:c.negative,zone:c.zone,y:c.y},c.lowerGraphic=c.graphic,c.graphic=c.upperGraphic,c.plotY=c.plotHigh,u(c.plotHighX)&&(c.plotX=c.plotHighX),c.y=c.high,c.negative=c.high<(this.options.threshold||0),c.zone=this.zones.length&&c.getZone(),this.chart.polar||(c.isInside=c.isTopInside=void 0!==c.plotY&&0<=c.plotY&&
c.plotY<=this.yAxis.len&&0<=c.plotX&&c.plotX<=this.xAxis.len),d++;g.drawPoints.apply(this,arguments);for(d=0;d<a;)c=this.points[d],c.upperGraphic=c.graphic,c.graphic=c.lowerGraphic,b.extend(c,c.origProps),delete c.origProps,d++},setStackedPoints:b.noop},{setState:function(){var a=this.state,c=this.series,d=c.chart.polar;u(this.plotHigh)||(this.plotHigh=c.yAxis.toPixels(this.high,!0));u(this.plotLow)||(this.plotLow=this.plotY=c.yAxis.toPixels(this.low,!0));c.stateMarkerGraphic&&(c.lowerStateMarkerGraphic=
c.stateMarkerGraphic,c.stateMarkerGraphic=c.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;d&&(this.plotX=this.plotHighX);l.setState.apply(this,arguments);this.state=a;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;d&&(this.plotX=this.plotLowX);c.stateMarkerGraphic&&(c.upperStateMarkerGraphic=c.stateMarkerGraphic,c.stateMarkerGraphic=c.lowerStateMarkerGraphic,c.lowerStateMarkerGraphic=void 0);l.setState.apply(this,arguments)},haloPath:function(){var a=this.series.chart.polar,
c=[];this.plotY=this.plotLow;a&&(this.plotX=this.plotLowX);this.isInside&&(c=l.haloPath.apply(this,arguments));this.plotY=this.plotHigh;a&&(this.plotX=this.plotHighX);this.isTopInside&&(c=c.concat(l.haloPath.apply(this,arguments)));return c},destroyElements:function(){r(["lowerGraphic","upperGraphic"],function(a){this[a]&&(this[a]=this[a].destroy())},this);this.graphic=null;return l.destroyElements.apply(this,arguments)}})})(w);(function(b){var r=b.seriesType;r("areasplinerange","arearange",null,
{getPointSpline:b.seriesTypes.spline.prototype.getPointSpline})})(w);(function(b){var r=b.defaultPlotOptions,v=b.each,u=b.merge,n=b.noop,q=b.pick,g=b.seriesType,l=b.seriesTypes.column.prototype;g("columnrange","arearange",u(r.column,r.arearange,{pointRange:null,marker:null,states:{hover:{halo:!1}}}),{translate:function(){var a=this,c=a.yAxis,d=a.xAxis,b=d.startAngleRad,f,e=a.chart,p=a.xAxis.isRadial,t=Math.max(e.chartWidth,e.chartHeight)+999,h;l.translate.apply(a);v(a.points,function(k){var m=k.shapeArgs,
l=a.options.minPointLength,y,g;k.plotHigh=h=Math.min(Math.max(-t,c.translate(k.high,0,1,0,1)),t);k.plotLow=Math.min(Math.max(-t,k.plotY),t);g=h;y=q(k.rectPlotY,k.plotY)-h;Math.abs(y)<l?(l-=y,y+=l,g-=l/2):0>y&&(y*=-1,g-=y);p?(f=k.barX+b,k.shapeType="path",k.shapeArgs={d:a.polarArc(g+y,g,f,f+k.pointWidth)}):(m.height=y,m.y=g,k.tooltipPos=e.inverted?[c.len+c.pos-e.plotLeft-g-y/2,d.len+d.pos-e.plotTop-m.x-m.width/2,y]:[d.left-e.plotLeft+m.x+m.width/2,c.pos-e.plotTop+g+y/2,y])})},directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],drawGraph:n,getSymbol:n,crispCol:l.crispCol,drawPoints:l.drawPoints,drawTracker:l.drawTracker,getColumnMetrics:l.getColumnMetrics,pointAttribs:l.pointAttribs,animate:function(){return l.animate.apply(this,arguments)},polarArc:function(){return l.polarArc.apply(this,arguments)},translate3dPoints:function(){return l.translate3dPoints.apply(this,arguments)},translate3dShapes:function(){return l.translate3dShapes.apply(this,arguments)}},{setState:l.pointClass.prototype.setState})})(w);
(function(b){var r=b.each,v=b.isNumber,u=b.merge,n=b.pick,q=b.pInt,g=b.Series,l=b.seriesType,a=b.TrackerMixin;l("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:b.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,d=this.options,b=a.center;
this.generatePoints();r(this.points,function(c){var e=u(d.dial,c.dial),f=q(n(e.radius,80))*b[2]/200,k=q(n(e.baseLength,70))*f/100,h=q(n(e.rearLength,10))*f/100,m=e.baseWidth||3,x=e.topWidth||1,g=d.overshoot,l=a.startAngleRad+a.translate(c.y,null,null,null,!0);v(g)?(g=g/180*Math.PI,l=Math.max(a.startAngleRad-g,Math.min(a.endAngleRad+g,l))):!1===d.wrap&&(l=Math.max(a.startAngleRad,Math.min(a.endAngleRad,l)));l=180*l/Math.PI;c.shapeType="path";c.shapeArgs={d:e.path||["M",-h,-m/2,"L",k,-m/2,f,-x/2,f,
x/2,k,m/2,-h,m/2,"z"],translateX:b[0],translateY:b[1],rotation:l};c.plotX=b[0];c.plotY=b[1]})},drawPoints:function(){var a=this,d=a.yAxis.center,b=a.pivot,f=a.options,e=f.pivot,p=a.chart.renderer;r(a.points,function(c){var d=c.graphic,b=c.shapeArgs,e=b.d,k=u(f.dial,c.dial);d?(d.animate(b),b.d=e):(c.graphic=p[c.shapeType](b).attr({rotation:b.rotation,zIndex:1}).addClass("highcharts-dial").add(a.group),c.graphic.attr({stroke:k.borderColor||"none","stroke-width":k.borderWidth||0,fill:k.backgroundColor||
"#000000"}))});b?b.animate({translateX:d[0],translateY:d[1]}):(a.pivot=p.circle(0,0,n(e.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(d[0],d[1]).add(a.group),a.pivot.attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"#cccccc",fill:e.backgroundColor||"#000000"}))},animate:function(a){var c=this;a||(r(c.points,function(a){var d=a.graphic;d&&(d.attr({rotation:180*c.yAxis.startAngleRad/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},c.options.animation))}),c.animate=
null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);g.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,d){g.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();n(d,!0)&&this.chart.redraw()},drawTracker:a&&a.drawTrackerPoint},{setState:function(a){this.state=a}})})(w);(function(b){var r=b.each,v=b.noop,u=b.pick,n=b.seriesType,q=b.seriesTypes;n("boxplot",
"column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(b){return[b.low,b.q1,b.median,
b.q3,b.high]},pointValKey:"high",pointAttribs:function(){return{}},drawDataLabels:v,translate:function(){var b=this.yAxis,l=this.pointArrayMap;q.column.prototype.translate.apply(this);r(this.points,function(a){r(l,function(c){null!==a[c]&&(a[c+"Plot"]=b.translate(a[c],0,1,0,1))})})},drawPoints:function(){var b=this,l=b.options,a=b.chart.renderer,c,d,k,f,e,p,t=0,h,m,x,q,n=!1!==b.doQuartiles,v,A=b.options.whiskerLength;r(b.points,function(g){var r=g.graphic,y=r?"animate":"attr",B=g.shapeArgs,w={},D=
{},J={},K={},C=g.color||b.color;void 0!==g.plotY&&(h=B.width,m=Math.floor(B.x),x=m+h,q=Math.round(h/2),c=Math.floor(n?g.q1Plot:g.lowPlot),d=Math.floor(n?g.q3Plot:g.lowPlot),k=Math.floor(g.highPlot),f=Math.floor(g.lowPlot),r||(g.graphic=r=a.g("point").add(b.group),g.stem=a.path().addClass("highcharts-boxplot-stem").add(r),A&&(g.whiskers=a.path().addClass("highcharts-boxplot-whisker").add(r)),n&&(g.box=a.path(void 0).addClass("highcharts-boxplot-box").add(r)),g.medianShape=a.path(void 0).addClass("highcharts-boxplot-median").add(r)),
D.stroke=g.stemColor||l.stemColor||C,D["stroke-width"]=u(g.stemWidth,l.stemWidth,l.lineWidth),D.dashstyle=g.stemDashStyle||l.stemDashStyle,g.stem.attr(D),A&&(J.stroke=g.whiskerColor||l.whiskerColor||C,J["stroke-width"]=u(g.whiskerWidth,l.whiskerWidth,l.lineWidth),g.whiskers.attr(J)),n&&(w.fill=g.fillColor||l.fillColor||C,w.stroke=l.lineColor||C,w["stroke-width"]=l.lineWidth||0,g.box.attr(w)),K.stroke=g.medianColor||l.medianColor||C,K["stroke-width"]=u(g.medianWidth,l.medianWidth,l.lineWidth),g.medianShape.attr(K),
p=g.stem.strokeWidth()%2/2,t=m+q+p,g.stem[y]({d:["M",t,d,"L",t,k,"M",t,c,"L",t,f]}),n&&(p=g.box.strokeWidth()%2/2,c=Math.floor(c)+p,d=Math.floor(d)+p,m+=p,x+=p,g.box[y]({d:["M",m,d,"L",m,c,"L",x,c,"L",x,d,"L",m,d,"z"]})),A&&(p=g.whiskers.strokeWidth()%2/2,k+=p,f+=p,v=/%$/.test(A)?q*parseFloat(A)/100:A/2,g.whiskers[y]({d:["M",t-v,k,"L",t+v,k,"M",t-v,f,"L",t+v,f]})),e=Math.round(g.medianPlot),p=g.medianShape.strokeWidth()%2/2,e+=p,g.medianShape[y]({d:["M",m,e,"L",x,e]}))})},setStackedPoints:v})})(w);
(function(b){var r=b.each,v=b.noop,u=b.seriesType,n=b.seriesTypes;u("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(b){return[b.low,b.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:n.arearange?function(){var b=
this.pointValKey;n.arearange.prototype.drawDataLabels.call(this);r(this.data,function(g){g.y=g[b]})}:v,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||n.column.prototype.getColumnMetrics.call(this)}})})(w);(function(b){var r=b.correctFloat,v=b.isNumber,u=b.pick,n=b.Point,q=b.Series,g=b.seriesType,l=b.seriesTypes;g("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},
{pointValKey:"y",showLine:!0,translate:function(){var a=this.options,c=this.yAxis,b,k,f,e,p,t,h,m,g,n,q=u(a.minPointLength,5),v=q/2,w=a.threshold,F=a.stacking,z;l.column.prototype.translate.apply(this);m=g=w;k=this.points;b=0;for(a=k.length;b<a;b++)f=k[b],h=this.processedYData[b],e=f.shapeArgs,p=F&&c.stacks[(this.negStacks&&h<w?"-":"")+this.stackKey],z=this.getStackIndicator(z,f.x,this.index),n=u(p&&p[f.x].points[z.key],[0,h]),f.isSum?f.y=r(h):f.isIntermediateSum&&(f.y=r(h-g)),t=Math.max(m,m+f.y)+
n[0],e.y=c.translate(t,0,1,0,1),f.isSum?(e.y=c.translate(n[1],0,1,0,1),e.height=Math.min(c.translate(n[0],0,1,0,1),c.len)-e.y):f.isIntermediateSum?(e.y=c.translate(n[1],0,1,0,1),e.height=Math.min(c.translate(g,0,1,0,1),c.len)-e.y,g=n[1]):(e.height=0<h?c.translate(m,0,1,0,1)-e.y:c.translate(m,0,1,0,1)-c.translate(m-h,0,1,0,1),m+=p&&p[f.x]?p[f.x].total:h),0>e.height&&(e.y+=e.height,e.height*=-1),f.plotY=e.y=Math.round(e.y)-this.borderWidth%2/2,e.height=Math.max(Math.round(e.height),.001),f.yBottom=
e.y+e.height,e.height<=q&&!f.isNull?(e.height=q,e.y-=v,f.plotY=e.y,f.minPointLengthOffset=0>f.y?-v:v):f.minPointLengthOffset=0,e=f.plotY+(f.negative?e.height:0),this.chart.inverted?f.tooltipPos[0]=c.len-e:f.tooltipPos[1]=e},processData:function(a){var c=this.yData,b=this.options.data,k,f=c.length,e,p,t,h,m,g;p=e=t=h=this.options.threshold||0;for(g=0;g<f;g++)m=c[g],k=b&&b[g]?b[g]:{},"sum"===m||k.isSum?c[g]=r(p):"intermediateSum"===m||k.isIntermediateSum?c[g]=r(e):(p+=m,e+=m),t=Math.min(p,t),h=Math.max(p,
h);q.prototype.processData.call(this,a);this.options.stacking||(this.dataMin=t,this.dataMax=h)},toYData:function(a){return a.isSum?0===a.x?null:"sum":a.isIntermediateSum?0===a.x?null:"intermediateSum":a.y},pointAttribs:function(a,c){var b=this.options.upColor;b&&!a.options.color&&(a.color=0<a.y?b:null);a=l.column.prototype.pointAttribs.call(this,a,c);delete a.dashstyle;return a},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var a=this.data,c=a.length,b=this.graph.strokeWidth()+
this.borderWidth,b=Math.round(b)%2/2,k=this.xAxis.reversed,f=this.yAxis.reversed,e=[],p,g,h;for(h=1;h<c;h++){g=a[h].shapeArgs;p=a[h-1].shapeArgs;g=["M",p.x+(k?0:p.width),p.y+a[h-1].minPointLengthOffset+b,"L",g.x+(k?p.width:0),p.y+a[h-1].minPointLengthOffset+b];if(0>a[h-1].y&&!f||0<a[h-1].y&&f)g[2]+=p.height,g[5]+=p.height;e=e.concat(g)}return e},drawGraph:function(){q.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var a=this.options,c,b;q.prototype.setStackedPoints.apply(this,
arguments);c=this.stackedYData?this.stackedYData.length:0;for(b=1;b<c;b++)a.data[b].isSum||a.data[b].isIntermediateSum||(this.stackedYData[b]+=this.stackedYData[b-1])},getExtremes:function(){if(this.options.stacking)return q.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var a=n.prototype.getClassName.call(this);this.isSum?a+=" highcharts-sum":this.isIntermediateSum&&(a+=" highcharts-intermediate-sum");return a},isValid:function(){return v(this.y,!0)||this.isSum||this.isIntermediateSum}})})(w);
(function(b){var r=b.Series,v=b.seriesType,u=b.seriesTypes;v("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var b=r.prototype.getGraphPath.call(this),q=b.length+1;q--;)(q===b.length||"M"===b[q])&&0<q&&b.splice(q,0,"z");return this.areaPath=b},drawGraph:function(){this.options.fillColor=this.color;u.area.prototype.drawGraph.call(this)},drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,
drawTracker:r.prototype.drawTracker,setStackedPoints:b.noop})})(w);(function(b){var r=b.arrayMax,v=b.arrayMin,u=b.Axis,n=b.color,q=b.each,g=b.isNumber,l=b.noop,a=b.pick,c=b.pInt,d=b.Point,k=b.Series,f=b.seriesType,e=b.seriesTypes;f("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},animationLimit:250,marker:{lineColor:null,lineWidth:1,fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,
states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var b=this.options.marker.fillOpacity;a=k.prototype.pointAttribs.call(this,a,c);1!==b&&(a.fill=n(a.fill).setOpacity(b).get("rgba"));return a},getRadii:function(a,c,b,d){var e,
f,h,k=this.zData,g=[],p=this.options,m="width"!==p.sizeBy,t=p.zThreshold,l=c-a;f=0;for(e=k.length;f<e;f++)h=k[f],p.sizeByAbsoluteValue&&null!==h&&(h=Math.abs(h-t),c=l=Math.max(c-t,Math.abs(a-t)),a=0),null===h?h=null:h<a?h=b/2-1:(h=0<l?(h-a)/l:.5,m&&0<=h&&(h=Math.sqrt(h)),h=Math.ceil(b+h*(d-b))/2),g.push(h);this.radii=g},animate:function(a){!a&&this.points.length<this.options.animationLimit&&(q(this.points,function(a){var c=a.graphic,b;c&&c.width&&(b={x:c.x,y:c.y,width:c.width,height:c.height},c.attr({x:a.plotX,
y:a.plotY,width:1,height:1}),c.animate(b,this.options.animation))},this),this.animate=null)},translate:function(){var a,c=this.data,d,f,k=this.radii;e.scatter.prototype.translate.call(this);for(a=c.length;a--;)d=c[a],f=k?k[a]:0,g(f)&&f>=this.minPxSize/2?(d.marker=b.extend(d.marker,{radius:f,width:2*f,height:2*f}),d.dlBox={x:d.plotX-f,y:d.plotY-f,width:2*f,height:2*f}):d.shapeArgs=d.plotY=d.dlBox=void 0},alignDataLabel:e.column.prototype.alignDataLabel,buildKDTree:l,applyZones:l},{haloPath:function(a){return d.prototype.haloPath.call(this,
0===a?0:(this.marker?this.marker.radius||0:0)+a)},ttBelow:!1});u.prototype.beforePadding=function(){var b=this,d=this.len,e=this.chart,f=0,k=d,l=this.isXAxis,n=l?"xData":"yData",u=this.min,w={},F=Math.min(e.plotWidth,e.plotHeight),z=Number.MAX_VALUE,G=-Number.MAX_VALUE,H=this.max-u,E=d/H,I=[];q(this.series,function(d){var f=d.options;!d.bubblePadding||!d.visible&&e.options.chart.ignoreHiddenSeries||(b.allowZoomOutside=!0,I.push(d),l&&(q(["minSize","maxSize"],function(a){var b=f[a],d=/%$/.test(b),
b=c(b);w[a]=d?F*b/100:b}),d.minPxSize=w.minSize,d.maxPxSize=Math.max(w.maxSize,w.minSize),d=d.zData,d.length&&(z=a(f.zMin,Math.min(z,Math.max(v(d),!1===f.displayNegative?f.zThreshold:-Number.MAX_VALUE))),G=a(f.zMax,Math.max(G,r(d))))))});q(I,function(a){var c=a[n],d=c.length,e;l&&a.getRadii(z,G,a.minPxSize,a.maxPxSize);if(0<H)for(;d--;)g(c[d])&&b.dataMin<=c[d]&&c[d]<=b.dataMax&&(e=a.radii[d],f=Math.min((c[d]-u)*E-e,f),k=Math.max((c[d]-u)*E+e,k))});I.length&&0<H&&!this.isLog&&(k-=d,E*=(d+f-k)/d,q([["min",
"userMin",f],["max","userMax",k]],function(c){void 0===a(b.options[c[0]],b[c[1]])&&(b[c[0]]+=c[2]/E)}))}})(w);(function(b){var r=b.each,v=b.pick,u=b.Series,n=b.seriesTypes,q=b.wrap,g=u.prototype,l=b.Pointer.prototype;b.polarExtended||(b.polarExtended=!0,g.searchPointByAngle=function(a){var c=this.chart,b=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(a.chartX-b[0]-c.plotLeft,a.chartY-b[1]-c.plotTop)})},g.getConnectors=function(a,c,b,k){var d,e,g,l,h,m,n,q;e=k?
1:0;d=0<=c&&c<=a.length-1?c:0>c?a.length-1+c:0;c=0>d-1?a.length-(1+e):d-1;e=d+1>a.length-1?e:d+1;g=a[c];e=a[e];l=g.plotX;g=g.plotY;h=e.plotX;m=e.plotY;e=a[d].plotX;d=a[d].plotY;l=(1.5*e+l)/2.5;g=(1.5*d+g)/2.5;h=(1.5*e+h)/2.5;n=(1.5*d+m)/2.5;m=Math.sqrt(Math.pow(l-e,2)+Math.pow(g-d,2));q=Math.sqrt(Math.pow(h-e,2)+Math.pow(n-d,2));l=Math.atan2(g-d,l-e);n=Math.PI/2+(l+Math.atan2(n-d,h-e))/2;Math.abs(l-n)>Math.PI/2&&(n-=Math.PI);l=e+Math.cos(n)*m;g=d+Math.sin(n)*m;h=e+Math.cos(Math.PI+n)*q;n=d+Math.sin(Math.PI+
n)*q;e={rightContX:h,rightContY:n,leftContX:l,leftContY:g,plotX:e,plotY:d};b&&(e.prevPointCont=this.getConnectors(a,c,!1,k));return e},q(g,"buildKDTree",function(a){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");a.apply(this)}),g.toXY=function(a){var c,b=this.chart,k=a.plotX;c=a.plotY;a.rectPlotX=k;a.rectPlotY=c;c=this.xAxis.postTranslate(a.plotX,this.yAxis.len-c);a.plotX=a.polarPlotX=c.x-b.plotLeft;a.plotY=a.polarPlotY=c.y-b.plotTop;
this.kdByAngle?(b=(k/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>b&&(b+=360),a.clientX=b):a.clientX=a.plotX},n.spline&&(q(n.spline.prototype,"getPointSpline",function(a,c,b,k){this.chart.polar?k?(a=this.getConnectors(c,k,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",b.plotX,b.plotY]:a=a.call(this,c,b,k);return a}),n.areasplinerange&&(n.areasplinerange.prototype.getPointSpline=n.spline.prototype.getPointSpline)),
b.addEvent(u,"afterTranslate",function(){var a=this.chart,c,d;if(a.polar){this.kdByAngle=a.tooltip&&a.tooltip.shared;if(!this.preventPostTranslate)for(c=this.points,d=c.length;d--;)this.toXY(c[d]);this.hasClipCircleSetter||(this.hasClipCircleSetter=!!b.addEvent(this,"afterRender",function(){var c;a.polar&&(c=this.yAxis.center,this.group.clip(a.renderer.clipCircle(c[0],c[1],c[2]/2)),this.setClip=b.noop)}))}}),q(g,"getGraphPath",function(a,c){var b=this,g,f,e;if(this.chart.polar){c=c||this.points;for(g=
0;g<c.length;g++)if(!c[g].isNull){f=g;break}!1!==this.options.connectEnds&&void 0!==f&&(this.connectEnds=!0,c.splice(c.length,0,c[f]),e=!0);r(c,function(a){void 0===a.polarPlotY&&b.toXY(a)})}g=a.apply(this,[].slice.call(arguments,1));e&&c.pop();return g}),u=function(a,c){var b=this.chart,g=this.options.animation,f=this.group,e=this.markerGroup,l=this.xAxis.center,n=b.plotLeft,h=b.plotTop;b.polar?b.renderer.isSVG&&(!0===g&&(g={}),c?(a={translateX:l[0]+n,translateY:l[1]+h,scaleX:.001,scaleY:.001},f.attr(a),
e&&e.attr(a)):(a={translateX:n,translateY:h,scaleX:1,scaleY:1},f.animate(a,g),e&&e.animate(a,g),this.animate=null)):a.call(this,c)},q(g,"animate",u),n.column&&(n=n.column.prototype,n.polarArc=function(a,c,b,g){var d=this.xAxis.center,e=this.yAxis.len;return this.chart.renderer.symbols.arc(d[0],d[1],e-c,null,{start:b,end:g,innerR:e-v(a,e)})},q(n,"animate",u),q(n,"translate",function(a){var c=this.xAxis,b=c.startAngleRad,g,f,e;this.preventPostTranslate=!0;a.call(this);if(c.isRadial)for(g=this.points,
e=g.length;e--;)f=g[e],a=f.barX+b,f.shapeType="path",f.shapeArgs={d:this.polarArc(f.yBottom,f.plotY,a,a+f.pointWidth)},this.toXY(f),f.tooltipPos=[f.plotX,f.plotY],f.ttBelow=f.plotY>c.center[1]}),q(n,"alignDataLabel",function(a,b,d,k,f,e){this.chart.polar?(a=b.rectPlotX/Math.PI*180,null===k.align&&(k.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===k.verticalAlign&&(k.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),g.alignDataLabel.call(this,b,d,k,f,e)):a.call(this,b,
d,k,f,e)})),q(l,"getCoordinates",function(a,b){var c=this.chart,g={xAxis:[],yAxis:[]};c.polar?r(c.axes,function(a){var d=a.isXAxis,f=a.center,k=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;g[d?"xAxis":"yAxis"].push({axis:a,value:a.translate(d?Math.PI-Math.atan2(k,f):Math.sqrt(Math.pow(k,2)+Math.pow(f,2)),!0)})}):g=a.call(this,b);return g}),b.SVGRenderer.prototype.clipCircle=function(a,c,d){var g=b.uniqueKey(),f=this.createElement("clipPath").attr({id:g}).add(this.defs);a=this.circle(a,c,d).add(f);
a.id=g;a.clipPath=f;return a},b.addEvent(b.Chart,"getAxes",function(){this.pane||(this.pane=[]);r(b.splat(this.options.pane),function(a){new b.Pane(a,this)},this)}),b.addEvent(b.Chart,"afterDrawChartBox",function(){r(this.pane,function(a){a.render()})}),q(b.Chart.prototype,"get",function(a,c){return b.find(this.pane,function(a){return a.options.id===c})||a.call(this,c)}))})(w)});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__App_vue__);

var routes = Object.keys(__WEBPACK_IMPORTED_MODULE_0__App_vue___default.a.components).map(function (component) {
  return {
    path: '/' + component,
    component: __WEBPACK_IMPORTED_MODULE_0__App_vue___default.a.components[component],
    name: component.toLowerCase()
  };
});
console.log(routes);
routes.push({
  path: '/',
  redirect: '/LineChart'
});
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(40).setImmediate))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("2013-01-01,0,1.3\n2013-01-01,1,1.4\n2013-01-01,2,1.6\n2013-01-01,3,2.0\n2013-01-01,4,2.4\n2013-01-01,5,2.9\n2013-01-01,6,3.1\n2013-01-01,7,2.8\n2013-01-01,8,2.8\n2013-01-01,9,2.7\n2013-01-01,10,3.4\n2013-01-01,11,2.6\n2013-01-01,12,2.4\n2013-01-01,13,2.9\n2013-01-01,15,2.8\n2013-01-01,14,2.8\n2013-01-01,16,2.2\n2013-01-01,18,1.7\n2013-01-01,17,1.8\n2013-01-01,19,1.8\n2013-01-01,20,1.8\n2013-01-01,21,1.7\n2013-01-01,22,1.7\n2013-01-01,23,2.2\n2013-01-02,0,2.2\n2013-01-02,1,2.1\n2013-01-02,2,1.9\n2013-01-02,3,2.0\n2013-01-02,4,2.0\n2013-01-02,5,2.0\n2013-01-02,6,2.2\n2013-01-02,7,2.3\n2013-01-02,8,2.7\n2013-01-02,9,2.9\n2013-01-02,10,2.7\n2013-01-02,11,2.7\n2013-01-02,12,2.6\n2013-01-02,13,2.6\n2013-01-02,14,2.6\n2013-01-02,15,2.5\n2013-01-02,16,2.6\n2013-01-02,17,2.3\n2013-01-02,18,2.2\n2013-01-02,19,2.2\n2013-01-02,20,2.1\n2013-01-02,21,1.9\n2013-01-02,22,1.8\n2013-01-02,23,2.2\n2013-01-03,0,2.2\n2013-01-03,1,1.9\n2013-01-03,3,0.7\n2013-01-03,2,1.5\n2013-01-03,4,0.7\n2013-01-03,5,0.6\n2013-01-03,6,0.7\n2013-01-03,7,0.8\n2013-01-03,8,1.3\n2013-01-03,9,2.5\n2013-01-03,10,4.7\n2013-01-03,11,6.1\n2013-01-03,12,5.7\n2013-01-03,13,5.9\n2013-01-03,14,6.3\n2013-01-03,15,6.4\n2013-01-03,16,6.4\n2013-01-03,17,6.5\n2013-01-03,18,6.5\n2013-01-03,19,6.6\n2013-01-03,20,6.0\n2013-01-03,21,5.4\n2013-01-03,22,4.7\n2013-01-03,23,4.0\n2013-01-04,0,3.8\n2013-01-04,1,4.0\n2013-01-04,3,3.7\n2013-01-04,4,5.0\n2013-01-04,2,3.9\n2013-01-04,5,4.7\n2013-01-04,6,3.9\n2013-01-04,7,3.7\n2013-01-04,8,3.5\n2013-01-04,9,3.3\n2013-01-04,10,3.0\n2013-01-04,11,3.1\n2013-01-04,12,3.5\n2013-01-04,13,4.2\n2013-01-04,15,6.1\n2013-01-04,14,4.7\n2013-01-04,16,7.3\n2013-01-04,17,7.5\n2013-01-04,18,5.6\n2013-01-04,19,4.7\n2013-01-04,20,4.6\n2013-01-04,21,4.4\n2013-01-04,22,4.3\n2013-01-04,23,3.9\n2013-01-05,0,3.2\n2013-01-05,1,3.3\n2013-01-05,2,3.4\n2013-01-05,3,3.5\n2013-01-05,4,3.4\n2013-01-05,5,3.3\n2013-01-05,6,3.3\n2013-01-05,7,3.3\n2013-01-05,8,3.3\n2013-01-05,9,3.2\n2013-01-05,10,3.2\n2013-01-05,11,3.3\n2013-01-05,12,3.4\n2013-01-05,13,3.6\n2013-01-05,14,3.7\n2013-01-05,15,3.8\n2013-01-05,16,3.6\n2013-01-05,17,3.1\n2013-01-05,18,3.2\n2013-01-05,19,3.0\n2013-01-05,20,2.9\n2013-01-05,21,2.9\n2013-01-05,22,2.9\n2013-01-05,23,2.8\n2013-01-06,0,2.8\n2013-01-06,1,2.6\n2013-01-06,2,2.4\n2013-01-06,3,2.4\n2013-01-06,4,2.6\n2013-01-06,5,2.7\n2013-01-06,6,2.9\n2013-01-06,7,3.0\n2013-01-06,8,2.9\n2013-01-06,9,2.9\n2013-01-06,10,3.0\n2013-01-06,11,3.1\n2013-01-06,12,3.4\n2013-01-06,13,3.8\n2013-01-06,14,3.9\n2013-01-06,15,3.7\n2013-01-06,16,3.4\n2013-01-06,17,3.5\n2013-01-06,18,3.4\n2013-01-06,19,3.2\n2013-01-06,20,3.3\n2013-01-06,21,3.2\n2013-01-06,22,3.1\n2013-01-06,23,3.0\n2013-01-07,0,2.8\n2013-01-07,1,2.9\n2013-01-07,2,2.9\n2013-01-07,3,2.6\n2013-01-07,4,2.7\n2013-01-07,5,2.2\n2013-01-07,6,2.3\n2013-01-07,7,2.3\n2013-01-07,8,2.3\n2013-01-07,9,2.3\n2013-01-07,10,2.8\n2013-01-07,11,2.9\n2013-01-07,12,2.8\n2013-01-07,13,3.1\n2013-01-07,14,3.5\n2013-01-07,15,3.5\n2013-01-07,16,3.2\n2013-01-07,17,2.9\n2013-01-07,18,2.8\n2013-01-07,19,2.9\n2013-01-07,20,2.7\n2013-01-07,21,2.8\n2013-01-07,22,2.9\n2013-01-07,23,3.0\n2013-01-08,0,3.3\n2013-01-08,1,3.7\n2013-01-08,2,3.3\n2013-01-08,3,2.8\n2013-01-08,4,2.8\n2013-01-08,5,2.5\n2013-01-08,6,2.5\n2013-01-08,7,2.4\n2013-01-08,8,2.1\n2013-01-08,9,1.2\n2013-01-08,10,0.9\n2013-01-08,11,1.3\n2013-01-08,12,1.5\n2013-01-08,13,2.0\n2013-01-08,14,2.2\n2013-01-08,15,2.2\n2013-01-08,16,2.0\n2013-01-08,17,1.8\n2013-01-08,18,1.8\n2013-01-08,19,1.7\n2013-01-08,20,1.7\n2013-01-08,21,1.5\n2013-01-08,22,1.2\n2013-01-08,23,1.1\n2013-01-09,0,1.2\n2013-01-09,1,1.3\n2013-01-09,2,1.3\n2013-01-09,3,1.1\n2013-01-09,4,0.9\n2013-01-09,5,0.9\n2013-01-09,6,0.9\n2013-01-09,7,0.9\n2013-01-09,8,0.7\n2013-01-09,9,0.7\n2013-01-09,10,0.9\n2013-01-09,11,0.9\n2013-01-09,12,1.1\n2013-01-09,13,1.2\n2013-01-09,14,1.4\n2013-01-09,15,1.5\n2013-01-09,16,1.2\n2013-01-09,17,1.1\n2013-01-09,18,1.0\n2013-01-09,19,1.1\n2013-01-09,20,1.1\n2013-01-09,21,1.3\n2013-01-09,22,1.2\n2013-01-09,23,1.2\n2013-01-10,0,1.1\n2013-01-10,1,1.1\n2013-01-10,2,1.1\n2013-01-10,3,1.0\n2013-01-10,4,0.8\n2013-01-10,5,0.7\n2013-01-10,6,0.3\n2013-01-10,7,-0.8\n2013-01-10,8,-2.0\n2013-01-10,9,-2.5\n2013-01-10,10,-3.0\n2013-01-10,11,-3.3\n2013-01-10,12,-3.3\n2013-01-10,13,-3.3\n2013-01-10,14,-3.2\n2013-01-10,15,-3.3\n2013-01-10,16,-3.3\n2013-01-10,17,-3.9\n2013-01-10,18,-4.1\n2013-01-10,19,-4.2\n2013-01-10,20,-4.5\n2013-01-10,21,-4.7\n2013-01-10,22,-4.8\n2013-01-10,23,-5.1\n2013-01-11,0,-5.1\n2013-01-11,1,-5.1\n2013-01-11,2,-5.4\n2013-01-11,3,-5.7\n2013-01-11,4,-5.9\n2013-01-11,5,-5.9\n2013-01-11,6,-6.0\n2013-01-11,7,-6.3\n2013-01-11,8,-6.4\n2013-01-11,9,-6.1\n2013-01-11,10,-6.5\n2013-01-11,11,-6.3\n2013-01-11,12,-6.2\n2013-01-11,13,-5.8\n2013-01-11,14,-5.7\n2013-01-11,15,-5.7\n2013-01-11,16,-6.0\n2013-01-11,17,-6.4\n2013-01-11,18,-6.7\n2013-01-11,19,-7.0\n2013-01-11,20,-7.0\n2013-01-11,21,-7.1\n2013-01-11,22,-7.1\n2013-01-11,23,-7.2\n2013-01-12,0,-7.4\n2013-01-12,1,-7.9\n2013-01-12,2,-8.0\n2013-01-12,4,-8.4\n2013-01-12,5,-8.2\n2013-01-12,3,-8.3\n2013-01-12,6,-8.6\n2013-01-12,7,-8.7\n2013-01-12,8,-9.1\n2013-01-12,9,-8.5\n2013-01-12,10,-9.1\n2013-01-12,11,-9.1\n2013-01-12,12,-8.7\n2013-01-12,13,-8.3\n2013-01-12,14,-8.1\n2013-01-12,15,-8.2\n2013-01-12,16,-8.3\n2013-01-12,17,-8.6\n2013-01-12,18,-8.8\n2013-01-12,19,-8.8\n2013-01-12,20,-9.2\n2013-01-12,21,-9.2\n2013-01-12,22,-9.4\n2013-01-12,23,-9.5\n2013-01-13,0,-9.4\n2013-01-13,1,-9.4\n2013-01-13,2,-9.3\n2013-01-13,3,-9.6\n2013-01-13,4,-9.8\n2013-01-13,5,-9.9\n2013-01-13,7,-9.8\n2013-01-13,6,-10.0\n2013-01-13,8,-10.5\n2013-01-13,9,-10.3\n2013-01-13,10,-10.4\n2013-01-13,11,-10.2\n2013-01-13,12,-9.8\n2013-01-13,13,-9.4\n2013-01-13,14,-9.3\n2013-01-13,15,-9.6\n2013-01-13,16,-9.2\n2013-01-13,17,-9.5\n2013-01-13,18,-9.9\n2013-01-13,19,-9.9\n2013-01-13,20,-10.5\n2013-01-13,21,-10.7\n2013-01-13,22,-10.6\n2013-01-13,23,-10.6\n2013-01-14,0,-10.5\n2013-01-14,1,-10.4\n2013-01-14,2,-10.7\n2013-01-14,3,-10.7\n2013-01-14,4,-10.4\n2013-01-14,5,-10.1\n2013-01-14,6,-10.1\n2013-01-14,7,-9.9\n2013-01-14,8,-10.3\n2013-01-14,9,-10.7\n2013-01-14,10,-10.6\n2013-01-14,11,-10.8\n2013-01-14,12,-10.2\n2013-01-14,13,-9.9\n2013-01-14,14,-9.5\n2013-01-14,15,-9.7\n2013-01-14,16,-9.8\n2013-01-14,17,-9.8\n2013-01-14,18,-9.8\n2013-01-14,19,-10.1\n2013-01-14,20,-10.1\n2013-01-14,21,-10.4\n2013-01-14,22,-10.6\n2013-01-14,23,-10.8\n2013-01-15,0,-10.5\n2013-01-15,1,-10.9\n2013-01-15,2,-10.9\n2013-01-15,3,-11.0\n2013-01-15,4,-11.4\n2013-01-15,5,-11.8\n2013-01-15,6,-11.8\n2013-01-15,7,-12.1\n2013-01-15,8,-11.7\n2013-01-15,9,-11.3\n2013-01-15,10,-11.2\n2013-01-15,11,-11.1\n2013-01-15,12,-10.9\n2013-01-15,13,-11.0\n2013-01-15,14,-11.2\n2013-01-15,15,-11.1\n2013-01-15,16,-11.2\n2013-01-15,17,-11.7\n2013-01-15,18,-11.9\n2013-01-15,19,-12.2\n2013-01-15,20,-12.3\n2013-01-15,21,-12.2\n2013-01-15,22,-12.4\n2013-01-15,23,-12.8\n2013-01-16,0,-13.1\n2013-01-16,1,-12.9\n2013-01-16,2,-12.5\n2013-01-16,3,-12.5\n2013-01-16,4,-12.4\n2013-01-16,5,-12.3\n2013-01-16,6,-12.8\n2013-01-16,7,-12.0\n2013-01-16,8,-10.8\n2013-01-16,9,-9.8\n2013-01-16,10,-9.8\n2013-01-16,11,-10.5\n2013-01-16,12,-10.0\n2013-01-16,13,-8.2\n2013-01-16,14,-6.9\n2013-01-16,15,-6.3\n2013-01-16,16,-5.9\n2013-01-16,17,-6.2\n2013-01-16,18,-6.8\n2013-01-16,19,-7.5\n2013-01-16,20,-8.5\n2013-01-16,21,-9.8\n2013-01-16,22,-9.3\n2013-01-16,23,-8.4\n2013-01-17,0,-8.2\n2013-01-17,1,-8.9\n2013-01-17,2,-9.9\n2013-01-17,3,-10.5\n2013-01-17,4,-10.3\n2013-01-17,5,-10.6\n2013-01-17,6,-10.9\n2013-01-17,7,-10.9\n2013-01-17,8,-10.7\n2013-01-17,9,-10.8\n2013-01-17,10,-10.9\n2013-01-17,11,-10.6\n2013-01-17,12,-10.4\n2013-01-17,13,-10.2\n2013-01-17,14,-9.7\n2013-01-17,15,-9.5\n2013-01-17,16,-10.1\n2013-01-17,17,-10.4\n2013-01-17,18,-10.9\n2013-01-17,19,-11.0\n2013-01-17,20,-11.1\n2013-01-17,21,-11.5\n2013-01-17,22,-11.4\n2013-01-17,23,-11.6\n2013-01-18,0,-11.8\n2013-01-18,1,-11.9\n2013-01-18,2,-11.7\n2013-01-18,3,-12.1\n2013-01-18,4,-11.8\n2013-01-18,5,-12.3\n2013-01-18,6,-12.4\n2013-01-18,7,-12.4\n2013-01-18,8,-12.4\n2013-01-18,9,-12.2\n2013-01-18,10,-12.1\n2013-01-18,11,-11.4\n2013-01-18,12,-10.4\n2013-01-18,13,-9.3\n2013-01-18,14,-9.5\n2013-01-18,15,-9.7\n2013-01-18,16,-10.5\n2013-01-18,17,-11.7\n2013-01-18,18,-12.3\n2013-01-18,19,-12.3\n2013-01-18,20,-12.6\n2013-01-18,21,-12.0\n2013-01-18,22,-11.8\n2013-01-18,23,-12.0\n2013-01-19,0,-11.7\n2013-01-19,1,-12.0\n2013-01-19,2,-12.8\n2013-01-19,3,-12.4\n2013-01-19,4,-12.7\n2013-01-19,5,-12.3\n2013-01-19,7,-12.8\n2013-01-19,6,-12.7\n2013-01-19,8,-12.5\n2013-01-19,9,-12.0\n2013-01-19,10,-12.0\n2013-01-19,11,-11.7\n2013-01-19,12,-10.5\n2013-01-19,13,-10.4\n2013-01-19,14,-10.5\n2013-01-19,15,-10.5\n2013-01-19,16,-10.1\n2013-01-19,17,-10.5\n2013-01-19,18,-10.8\n2013-01-19,19,-11.5\n2013-01-19,20,-11.6\n2013-01-19,21,-11.3\n2013-01-19,22,-11.1\n2013-01-19,23,-10.6\n2013-01-20,0,-10.6\n2013-01-20,1,-10.6\n2013-01-20,2,-10.6\n2013-01-20,3,-10.7\n2013-01-20,5,-9.9\n2013-01-20,6,-8.7\n2013-01-20,4,-10.4\n2013-01-20,7,-8.2\n2013-01-20,8,-8.9\n2013-01-20,9,-9.6\n2013-01-20,10,-9.8\n2013-01-20,11,-9.4\n2013-01-20,12,-9.0\n2013-01-20,13,-8.8\n2013-01-20,14,-8.6\n2013-01-20,15,-8.0\n2013-01-20,16,-7.9\n2013-01-20,17,-7.9\n2013-01-20,18,-8.0\n2013-01-20,19,-8.0\n2013-01-20,20,-8.1\n2013-01-20,21,-7.9\n2013-01-20,22,-7.8\n2013-01-20,23,-7.1\n2013-01-21,0,-6.1\n2013-01-21,1,-6.1\n2013-01-21,2,-5.9\n2013-01-21,3,-6.5\n2013-01-21,4,-7.8\n2013-01-21,5,-8.3\n2013-01-21,6,-8.6\n2013-01-21,7,-8.8\n2013-01-21,8,-9.0\n2013-01-21,9,-8.9\n2013-01-21,10,-9.3\n2013-01-21,11,-8.9\n2013-01-21,12,-8.7\n2013-01-21,13,-9.3\n2013-01-21,14,-9.4\n2013-01-21,15,-9.2\n2013-01-21,16,-9.5\n2013-01-21,17,-9.8\n2013-01-21,18,-10.3\n2013-01-21,19,-10.4\n2013-01-21,20,-11.3\n2013-01-21,21,-10.9\n2013-01-21,22,-12.2\n2013-01-21,23,-12.2\n2013-01-22,0,-12.5\n2013-01-22,1,-12.4\n2013-01-22,2,-12.5\n2013-01-22,3,-12.8\n2013-01-22,4,-12.6\n2013-01-22,5,-12.4\n2013-01-22,6,-12.2\n2013-01-22,7,-12.4\n2013-01-22,8,-12.5\n2013-01-22,9,-13.0\n2013-01-22,10,-13.0\n2013-01-22,11,-12.5\n2013-01-22,12,-12.3\n2013-01-22,13,-11.6\n2013-01-22,14,-11.6\n2013-01-22,15,-11.5\n2013-01-22,16,-11.5\n2013-01-22,17,-12.1\n2013-01-22,18,-12.2\n2013-01-22,19,-12.2\n2013-01-22,20,-12.1\n2013-01-22,21,-12.2\n2013-01-22,22,-11.9\n2013-01-22,23,-12.4\n2013-01-23,0,-12.2\n2013-01-23,1,-12.5\n2013-01-23,2,-12.3\n2013-01-23,3,-12.8\n2013-01-23,4,-12.6\n2013-01-23,5,-12.8\n2013-01-23,6,-12.7\n2013-01-23,7,-13.0\n2013-01-23,8,-13.2\n2013-01-23,9,-13.0\n2013-01-23,10,-13.1\n2013-01-23,11,-12.6\n2013-01-23,12,-12.3\n2013-01-23,13,-12.0\n2013-01-23,14,-11.2\n2013-01-23,15,-10.9\n2013-01-23,16,-11.5\n2013-01-23,17,-11.8\n2013-01-23,18,-12.0\n2013-01-23,19,-12.1\n2013-01-23,20,-11.7\n2013-01-23,21,-12.4\n2013-01-23,22,-11.9\n2013-01-23,23,-12.5\n2013-01-24,0,-12.6\n2013-01-24,1,-12.8\n2013-01-24,2,-12.5\n2013-01-24,4,-12.9\n2013-01-24,5,-12.7\n2013-01-24,3,-12.1\n2013-01-24,6,-12.8\n2013-01-24,7,-12.7\n2013-01-24,8,-12.4\n2013-01-24,9,-12.5\n2013-01-24,10,-12.2\n2013-01-24,11,-12.1\n2013-01-24,12,-12.2\n2013-01-24,13,-11.7\n2013-01-24,14,-11.2\n2013-01-24,15,-10.9\n2013-01-24,16,-10.7\n2013-01-24,17,-10.4\n2013-01-24,18,-10.5\n2013-01-24,19,-9.3\n2013-01-24,20,-8.4\n2013-01-24,21,-7.6\n2013-01-24,22,-6.9\n2013-01-24,23,-6.7\n2013-01-25,0,-6.3\n2013-01-25,1,-5.9\n2013-01-25,2,-5.7\n2013-01-25,3,-5.8\n2013-01-25,4,-5.8\n2013-01-25,5,-5.7\n2013-01-25,6,-5.8\n2013-01-25,7,-5.8\n2013-01-25,8,-5.9\n2013-01-25,9,-5.8\n2013-01-25,10,-5.7\n2013-01-25,11,-5.4\n2013-01-25,12,-4.9\n2013-01-25,13,-4.3\n2013-01-25,14,-3.9\n2013-01-25,15,-3.8\n2013-01-25,16,-3.8\n2013-01-25,17,-4.2\n2013-01-25,18,-4.3\n2013-01-25,19,-4.4\n2013-01-25,20,-4.4\n2013-01-25,21,-4.3\n2013-01-25,22,-4.3\n2013-01-25,23,-4.4\n2013-01-26,0,-4.3\n2013-01-26,1,-4.1\n2013-01-26,2,-4.0\n2013-01-26,3,-3.9\n2013-01-26,4,-3.5\n2013-01-26,5,-3.4\n2013-01-26,6,-3.5\n2013-01-26,7,-3.1\n2013-01-26,8,-3.1\n2013-01-26,9,-3.2\n2013-01-26,10,-3.2\n2013-01-26,11,-3.0\n2013-01-26,12,-2.5\n2013-01-26,13,-1.9\n2013-01-26,14,-1.8\n2013-01-26,15,-2.2\n2013-01-26,16,-2.6\n2013-01-26,17,-3.1\n2013-01-26,18,-3.2\n2013-01-26,19,-3.8\n2013-01-26,20,-4.5\n2013-01-26,21,-5.6\n2013-01-26,22,-6.1\n2013-01-26,23,-6.1\n2013-01-27,0,-6.6\n2013-01-27,1,-5.8\n2013-01-27,2,-5.4\n2013-01-27,3,-4.2\n2013-01-27,4,-3.4\n2013-01-27,6,-3.3\n2013-01-27,5,-3.2\n2013-01-27,7,-3.8\n2013-01-27,8,-3.9\n2013-01-27,9,-3.5\n2013-01-27,10,-3.1\n2013-01-27,11,-2.2\n2013-01-27,12,-1.1\n2013-01-27,13,-0.1\n2013-01-27,14,-0.5\n2013-01-27,15,-0.7\n2013-01-27,16,-0.7\n2013-01-27,17,0.4\n2013-01-27,18,1.2\n2013-01-27,19,0.7\n2013-01-27,20,0.4\n2013-01-27,21,0.2\n2013-01-27,22,-0.2\n2013-01-27,23,-0.5\n2013-01-28,0,-0.5\n2013-01-28,1,-0.5\n2013-01-28,2,-0.6\n2013-01-28,3,-0.7\n2013-01-28,4,-0.8\n2013-01-28,5,-0.8\n2013-01-28,6,-0.9\n2013-01-28,7,-1.3\n2013-01-28,8,-1.3\n2013-01-28,9,-2.0\n2013-01-28,10,-3.1\n2013-01-28,11,-3.4\n2013-01-28,12,-2.5\n2013-01-28,13,-0.7\n2013-01-28,14,0.2\n2013-01-28,15,3.1\n2013-01-28,16,3.7\n2013-01-28,17,2.5\n2013-01-28,18,1.6\n2013-01-28,19,1.3\n2013-01-28,20,1.2\n2013-01-28,21,1.2\n2013-01-28,22,1.1\n2013-01-28,23,1.2\n2013-01-29,0,1.3\n2013-01-29,1,1.5\n2013-01-29,2,1.1\n2013-01-29,3,1.1\n2013-01-29,4,0.9\n2013-01-29,5,1.0\n2013-01-29,6,1.3\n2013-01-29,7,1.5\n2013-01-29,8,1.7\n2013-01-29,9,2.0\n2013-01-29,10,1.8\n2013-01-29,11,1.8\n2013-01-29,12,1.7\n2013-01-29,13,1.6\n2013-01-29,14,1.6\n2013-01-29,15,1.8\n2013-01-29,17,1.9\n2013-01-29,16,2.0\n2013-01-29,18,1.6\n2013-01-29,19,1.4\n2013-01-29,20,1.5\n2013-01-29,21,1.4\n2013-01-29,22,1.4\n2013-01-29,23,1.4\n2013-01-30,0,1.2\n2013-01-30,2,1.2\n2013-01-30,1,1.2\n2013-01-30,3,1.2\n2013-01-30,4,1.1\n2013-01-30,5,1.2\n2013-01-30,6,1.2\n2013-01-30,7,1.1\n2013-01-30,8,1.4\n2013-01-30,9,2.1\n2013-01-30,10,4.9\n2013-01-30,11,5.1\n2013-01-30,12,4.8\n2013-01-30,13,4.0\n2013-01-30,14,3.0\n2013-01-30,15,3.0\n2013-01-30,16,3.7\n2013-01-30,17,3.1\n2013-01-30,18,2.7\n2013-01-30,19,2.0\n2013-01-30,20,1.7\n2013-01-30,21,1.5\n2013-01-30,22,1.1\n2013-01-30,23,0.9\n2013-01-31,0,1.0\n2013-01-31,1,1.2\n2013-01-31,2,2.3\n2013-01-31,3,4.8\n2013-01-31,4,5.4\n2013-01-31,5,4.8\n2013-01-31,6,4.5\n2013-01-31,7,4.1\n2013-01-31,8,3.9\n2013-01-31,9,3.8\n2013-01-31,10,3.4\n2013-01-31,11,3.2\n2013-01-31,12,2.7\n2013-01-31,13,2.2\n2013-01-31,15,2.6\n2013-01-31,14,3.1\n2013-01-31,16,2.8\n2013-01-31,17,2.1\n2013-01-31,18,1.3\n2013-01-31,19,0.8\n2013-01-31,20,0.0\n2013-01-31,21,-0.9\n2013-01-31,22,-1.1\n2013-01-31,23,-1.3\n2013-02-01,0,-1.0\n2013-02-01,1,-0.3\n2013-02-01,2,-0.3\n2013-02-01,3,-0.5\n2013-02-01,4,-1.1\n2013-02-01,5,-1.3\n2013-02-01,6,-1.2\n2013-02-01,7,-1.2\n2013-02-01,8,-1.3\n2013-02-01,9,-1.7\n2013-02-01,10,-1.7\n2013-02-01,11,-1.2\n2013-02-01,12,-0.2\n2013-02-01,13,0.4\n2013-02-01,14,0.4\n2013-02-01,15,0.3\n2013-02-01,16,0.2\n2013-02-01,17,0.4\n2013-02-01,18,-1.1\n2013-02-01,19,-1.5\n2013-02-01,20,-1.3\n2013-02-01,21,-1.3\n2013-02-01,22,-1.3\n2013-02-01,23,-0.3\n2013-02-02,0,-0.2\n2013-02-02,1,-0.2\n2013-02-02,2,-0.5\n2013-02-02,4,0.9\n2013-02-02,5,0.6\n2013-02-02,3,0.3\n2013-02-02,6,0.3\n2013-02-02,7,-0.1\n2013-02-02,8,-0.2\n2013-02-02,9,0.0\n2013-02-02,10,0.7\n2013-02-02,11,1.7\n2013-02-02,12,3.6\n2013-02-02,13,3.8\n2013-02-02,14,3.7\n2013-02-02,15,3.7\n2013-02-02,16,3.7\n2013-02-02,17,3.7\n2013-02-02,18,3.6\n2013-02-02,19,3.2\n2013-02-02,20,3.0\n2013-02-02,21,2.9\n2013-02-02,22,2.7\n2013-02-02,23,2.3\n2013-02-03,0,2.0\n2013-02-03,1,1.7\n2013-02-03,2,1.2\n2013-02-03,3,0.7\n2013-02-03,4,0.4\n2013-02-03,5,0.8\n2013-02-03,6,0.6\n2013-02-03,7,0.1\n2013-02-03,8,-0.2\n2013-02-03,9,0.4\n2013-02-03,10,0.4\n2013-02-03,11,0.3\n2013-02-03,12,0.6\n2013-02-03,13,0.8\n2013-02-03,14,0.9\n2013-02-03,15,0.5\n2013-02-03,16,0.4\n2013-02-03,17,0.0\n2013-02-03,18,-0.2\n2013-02-03,19,-0.6\n2013-02-03,20,-0.9\n2013-02-03,21,-1.0\n2013-02-03,22,-1.2\n2013-02-03,23,-1.1\n2013-02-04,0,-0.9\n2013-02-04,1,-0.9\n2013-02-04,2,-0.9\n2013-02-04,3,-1.0\n2013-02-04,4,-1.1\n2013-02-04,5,-1.1\n2013-02-04,6,-0.9\n2013-02-04,7,-1.0\n2013-02-04,8,-1.0\n2013-02-04,9,-1.0\n2013-02-04,10,-0.8\n2013-02-04,11,-0.7\n2013-02-04,12,-0.5\n2013-02-04,13,-0.3\n2013-02-04,14,-0.1\n2013-02-04,15,0.0\n2013-02-04,16,-0.3\n2013-02-04,17,-0.4\n2013-02-04,18,-0.2\n2013-02-04,19,-0.2\n2013-02-04,20,-0.2\n2013-02-04,21,-0.5\n2013-02-04,22,-0.3\n2013-02-04,23,-0.5\n2013-02-05,0,0.1\n2013-02-05,1,-0.1\n2013-02-05,2,0.1\n2013-02-05,3,0.1\n2013-02-05,4,-0.1\n2013-02-05,5,-0.2\n2013-02-05,6,-0.1\n2013-02-05,7,-0.2\n2013-02-05,8,-0.5\n2013-02-05,9,-0.3\n2013-02-05,10,-0.3\n2013-02-05,11,0.0\n2013-02-05,12,0.1\n2013-02-05,13,-0.5\n2013-02-05,15,-1.9\n2013-02-05,14,-1.3\n2013-02-05,16,-2.1\n2013-02-05,17,-4.3\n2013-02-05,18,-4.9\n2013-02-05,19,-5.6\n2013-02-05,20,-6.4\n2013-02-05,21,-3.8\n2013-02-05,22,-2.9\n2013-02-05,23,-2.3\n2013-02-06,0,-2.4\n2013-02-06,1,-1.9\n2013-02-06,3,-1.2\n2013-02-06,4,-1.8\n2013-02-06,2,-1.5\n2013-02-06,5,-5.3\n2013-02-06,6,-6.3\n2013-02-06,7,-6.9\n2013-02-06,8,-6.9\n2013-02-06,9,-6.4\n2013-02-06,10,-6.3\n2013-02-06,11,-6.1\n2013-02-06,12,-5.9\n2013-02-06,13,-5.9\n2013-02-06,14,-5.9\n2013-02-06,15,-6.2\n2013-02-06,16,-6.9\n2013-02-06,17,-7.0\n2013-02-06,18,-6.9\n2013-02-06,19,-8.3\n2013-02-06,20,-8.0\n2013-02-06,21,-7.9\n2013-02-06,22,-8.9\n2013-02-06,23,-9.9\n2013-02-07,0,-9.8\n2013-02-07,1,-7.4\n2013-02-07,2,-6.3\n2013-02-07,3,-5.9\n2013-02-07,4,-6.9\n2013-02-07,5,-9.0\n2013-02-07,6,-11.2\n2013-02-07,7,-11.0\n2013-02-07,8,-11.2\n2013-02-07,9,-11.7\n2013-02-07,10,-11.0\n2013-02-07,11,-11.5\n2013-02-07,12,-11.6\n2013-02-07,13,-11.9\n2013-02-07,14,-11.2\n2013-02-07,15,-10.5\n2013-02-07,16,-9.7\n2013-02-07,17,-10.5\n2013-02-07,18,-11.0\n2013-02-07,19,-11.8\n2013-02-07,20,-11.7\n2013-02-07,21,-11.8\n2013-02-07,22,-12.4\n2013-02-07,23,-12.8\n2013-02-08,0,-12.3\n2013-02-08,1,-11.8\n2013-02-08,2,-13.0\n2013-02-08,3,-12.8\n2013-02-08,4,-13.2\n2013-02-08,5,-13.3\n2013-02-08,6,-13.2\n2013-02-08,7,-13.7\n2013-02-08,8,-13.4\n2013-02-08,9,-13.1\n2013-02-08,10,-13.8\n2013-02-08,11,-14.0\n2013-02-08,12,-13.8\n2013-02-08,13,-12.5\n2013-02-08,14,-12.4\n2013-02-08,15,-12.1\n2013-02-08,16,-12.7\n2013-02-08,17,-12.8\n2013-02-08,18,-13.1\n2013-02-08,19,-11.6\n2013-02-08,20,-8.6\n2013-02-08,21,-7.4\n2013-02-08,22,-6.7\n2013-02-08,23,-6.3\n2013-02-09,0,-6.2\n2013-02-09,1,-6.1\n2013-02-09,3,-6.1\n2013-02-09,4,-6.0\n2013-02-09,2,-6.0\n2013-02-09,5,-6.0\n2013-02-09,6,-6.4\n2013-02-09,7,-8.0\n2013-02-09,8,-10.8\n2013-02-09,9,-12.5\n2013-02-09,10,-12.3\n2013-02-09,11,-11.7\n2013-02-09,12,-12.4\n2013-02-09,13,-12.2\n2013-02-09,14,-12.2\n2013-02-09,15,-12.7\n2013-02-09,16,-12.2\n2013-02-09,17,-13.1\n2013-02-09,18,-13.5\n2013-02-09,19,-13.6\n2013-02-09,20,-14.2\n2013-02-09,21,-14.4\n2013-02-09,22,-12.8\n2013-02-09,23,-11.5\n2013-02-10,0,-12.4\n2013-02-10,1,-12.2\n2013-02-10,2,-12.4\n2013-02-10,3,-12.0\n2013-02-10,4,-11.4\n2013-02-10,5,-11.3\n2013-02-10,6,-11.3\n2013-02-10,7,-11.2\n2013-02-10,8,-10.5\n2013-02-10,9,-10.8\n2013-02-10,10,-9.8\n2013-02-10,11,-10.0\n2013-02-10,12,-9.7\n2013-02-10,13,-9.4\n2013-02-10,14,-8.6\n2013-02-10,15,-7.7\n2013-02-10,16,-7.1\n2013-02-10,17,-9.1\n2013-02-10,18,-9.8\n2013-02-10,19,-10.2\n2013-02-10,20,-10.3\n2013-02-10,21,-10.1\n2013-02-10,22,-10.1\n2013-02-10,23,-11.0\n2013-02-11,0,-11.1\n2013-02-11,1,-11.8\n2013-02-11,2,-11.5\n2013-02-11,3,-12.1\n2013-02-11,4,-12.3\n2013-02-11,5,-12.2\n2013-02-11,6,-12.6\n2013-02-11,7,-12.8\n2013-02-11,8,-12.4\n2013-02-11,9,-13.0\n2013-02-11,10,-12.5\n2013-02-11,11,-13.0\n2013-02-11,12,-12.1\n2013-02-11,13,-12.1\n2013-02-11,14,-10.9\n2013-02-11,15,-10.9\n2013-02-11,16,-10.4\n2013-02-11,17,-10.7\n2013-02-11,18,-10.7\n2013-02-11,19,-11.4\n2013-02-11,20,-11.4\n2013-02-11,21,-11.9\n2013-02-11,22,-11.3\n2013-02-11,23,-11.7\n2013-02-12,0,-11.6\n2013-02-12,1,-11.3\n2013-02-12,2,-9.3\n2013-02-12,3,-10.0\n2013-02-12,4,-10.1\n2013-02-12,5,-9.8\n2013-02-12,6,-10.8\n2013-02-12,7,-11.4\n2013-02-12,8,-11.9\n2013-02-12,9,-11.7\n2013-02-12,10,-11.5\n2013-02-12,11,-11.7\n2013-02-12,12,-10.5\n2013-02-12,13,-8.7\n2013-02-12,14,-7.0\n2013-02-12,15,-5.9\n2013-02-12,16,-5.7\n2013-02-12,17,-6.2\n2013-02-12,18,-7.0\n2013-02-12,19,-7.3\n2013-02-12,20,-7.7\n2013-02-12,21,-7.4\n2013-02-12,22,-6.6\n2013-02-12,23,-6.3\n2013-02-13,0,-6.3\n2013-02-13,1,-6.0\n2013-02-13,2,-5.6\n2013-02-13,3,-5.5\n2013-02-13,4,-5.7\n2013-02-13,5,-5.9\n2013-02-13,6,-6.2\n2013-02-13,7,-6.2\n2013-02-13,8,-6.2\n2013-02-13,9,-6.2\n2013-02-13,10,-5.9\n2013-02-13,11,-6.2\n2013-02-13,12,-7.6\n2013-02-13,13,-7.1\n2013-02-13,14,-6.3\n2013-02-13,15,-6.2\n2013-02-13,16,-7.3\n2013-02-13,17,-8.1\n2013-02-13,18,-9.5\n2013-02-13,19,-9.1\n2013-02-13,20,-9.7\n2013-02-13,21,-9.0\n2013-02-13,22,-9.2\n2013-02-13,23,-9.2\n2013-02-14,0,-8.7\n2013-02-14,1,-7.7\n2013-02-14,2,-6.7\n2013-02-14,3,-6.1\n2013-02-14,4,-5.5\n2013-02-14,5,-4.6\n2013-02-14,6,-3.9\n2013-02-14,7,-3.4\n2013-02-14,8,-3.2\n2013-02-14,9,-2.6\n2013-02-14,10,-1.0\n2013-02-14,11,0.1\n2013-02-14,12,0.5\n2013-02-14,13,0.7\n2013-02-14,14,0.8\n2013-02-14,15,0.9\n2013-02-14,16,0.7\n2013-02-14,17,0.6\n2013-02-14,18,0.7\n2013-02-14,19,-0.1\n2013-02-14,20,-0.5\n2013-02-14,21,-0.5\n2013-02-14,22,-0.1\n2013-02-14,23,-0.3\n2013-02-15,0,-0.3\n2013-02-15,1,-0.5\n2013-02-15,2,-0.8\n2013-02-15,3,-0.7\n2013-02-15,4,-1.0\n2013-02-15,5,-1.5\n2013-02-15,6,-1.8\n2013-02-15,7,-2.3\n2013-02-15,8,-2.0\n2013-02-15,9,-1.7\n2013-02-15,10,-1.4\n2013-02-15,11,-0.6\n2013-02-15,12,0.2\n2013-02-15,13,0.4\n2013-02-15,14,0.7\n2013-02-15,15,0.9\n2013-02-15,16,0.8\n2013-02-15,17,0.4\n2013-02-15,18,0.2\n2013-02-15,19,-0.4\n2013-02-15,20,-0.8\n2013-02-15,21,-0.8\n2013-02-15,22,-1.1\n2013-02-15,23,-1.1\n2013-02-16,0,-1.1\n2013-02-16,1,-1.1\n2013-02-16,2,-1.1\n2013-02-16,3,-1.1\n2013-02-16,4,-1.2\n2013-02-16,5,-1.3\n2013-02-16,6,-1.1\n2013-02-16,7,-1.1\n2013-02-16,8,-1.2\n2013-02-16,9,-1.4\n2013-02-16,10,-1.0\n2013-02-16,11,-0.6\n2013-02-16,12,-0.3\n2013-02-16,13,-0.1\n2013-02-16,14,0.2\n2013-02-16,15,0.5\n2013-02-16,16,0.7\n2013-02-16,17,0.5\n2013-02-16,18,0.1\n2013-02-16,19,-0.3\n2013-02-16,20,0.2\n2013-02-16,21,-0.2\n2013-02-16,22,-0.5\n2013-02-16,23,-0.6\n2013-02-17,0,-0.7\n2013-02-17,1,-0.8\n2013-02-17,2,-0.7\n2013-02-17,3,-0.7\n2013-02-17,4,-0.7\n2013-02-17,5,-0.6\n2013-02-17,6,-0.6\n2013-02-17,7,-0.5\n2013-02-17,8,-0.6\n2013-02-17,9,-0.4\n2013-02-17,10,-0.2\n2013-02-17,11,0.2\n2013-02-17,12,0.6\n2013-02-17,13,0.8\n2013-02-17,14,1.0\n2013-02-17,16,0.8\n2013-02-17,15,0.9\n2013-02-17,17,0.7\n2013-02-17,18,0.6\n2013-02-17,19,0.6\n2013-02-17,21,0.7\n2013-02-17,20,0.7\n2013-02-17,22,0.7\n2013-02-17,23,0.7\n2013-02-18,0,0.7\n2013-02-18,1,0.7\n2013-02-18,3,0.7\n2013-02-18,4,0.7\n2013-02-18,2,0.7\n2013-02-18,5,0.8\n2013-02-18,6,0.7\n2013-02-18,7,0.8\n2013-02-18,8,0.7\n2013-02-18,9,0.8\n2013-02-18,10,1.1\n2013-02-18,11,1.4\n2013-02-18,12,1.7\n2013-02-18,13,1.5\n2013-02-18,14,1.4\n2013-02-18,15,1.5\n2013-02-18,16,1.7\n2013-02-18,17,1.7\n2013-02-18,18,1.5\n2013-02-18,19,1.2\n2013-02-18,20,1.1\n2013-02-18,21,1.1\n2013-02-18,22,1.2\n2013-02-18,23,1.2\n2013-02-19,0,1.2\n2013-02-19,1,1.3\n2013-02-19,2,1.4\n2013-02-19,3,1.4\n2013-02-19,4,1.4\n2013-02-19,5,0.9\n2013-02-19,6,0.3\n2013-02-19,7,-0.3\n2013-02-19,8,-1.2\n2013-02-19,9,-1.8\n2013-02-19,10,-1.9\n2013-02-19,11,-2.2\n2013-02-19,12,-2.3\n2013-02-19,13,-1.3\n2013-02-19,14,-0.1\n2013-02-19,15,0.3\n2013-02-19,16,-1.0\n2013-02-19,17,-1.8\n2013-02-19,18,-3.0\n2013-02-19,19,-1.7\n2013-02-19,20,-1.4\n2013-02-19,21,-1.3\n2013-02-19,22,-1.3\n2013-02-19,23,-1.6\n2013-02-20,0,-2.4\n2013-02-20,1,-3.8\n2013-02-20,2,-3.0\n2013-02-20,3,-3.4\n2013-02-20,4,-3.1\n2013-02-20,5,-2.8\n2013-02-20,6,-2.7\n2013-02-20,7,-2.7\n2013-02-20,8,-2.7\n2013-02-20,9,-2.6\n2013-02-20,10,-1.9\n2013-02-20,11,-1.7\n2013-02-20,12,-1.4\n2013-02-20,13,-1.0\n2013-02-20,14,-1.9\n2013-02-20,15,-2.1\n2013-02-20,16,-1.6\n2013-02-20,17,-3.1\n2013-02-20,18,-5.2\n2013-02-20,19,-6.8\n2013-02-20,20,-7.3\n2013-02-20,21,-7.9\n2013-02-20,22,-8.4\n2013-02-20,23,-8.8\n2013-02-21,0,-9.1\n2013-02-21,1,-9.3\n2013-02-21,2,-8.5\n2013-02-21,3,-9.0\n2013-02-21,5,-8.4\n2013-02-21,6,-8.2\n2013-02-21,4,-9.0\n2013-02-21,7,-7.7\n2013-02-21,8,-6.6\n2013-02-21,9,-5.7\n2013-02-21,10,-4.8\n2013-02-21,11,-3.9\n2013-02-21,12,-3.4\n2013-02-21,13,-3.0\n2013-02-21,14,-2.6\n2013-02-21,15,-2.4\n2013-02-21,16,-2.3\n2013-02-21,17,-2.6\n2013-02-21,18,-3.1\n2013-02-21,19,-3.3\n2013-02-21,20,-3.5\n2013-02-21,21,-3.7\n2013-02-21,22,-4.7\n2013-02-21,23,-6.3\n2013-02-22,0,-7.5\n2013-02-22,1,-8.1\n2013-02-22,2,-8.3\n2013-02-22,3,-8.9\n2013-02-22,4,-9.3\n2013-02-22,5,-9.3\n2013-02-22,6,-9.6\n2013-02-22,7,-9.5\n2013-02-22,8,-9.3\n2013-02-22,9,-9.3\n2013-02-22,11,-7.2\n2013-02-22,10,-9.1\n2013-02-22,12,-6.6\n2013-02-22,13,-5.0\n2013-02-22,14,-3.8\n2013-02-22,15,-2.4\n2013-02-22,16,-3.1\n2013-02-22,17,-3.9\n2013-02-22,18,-4.3\n2013-02-22,19,-5.8\n2013-02-22,20,-5.9\n2013-02-22,21,-6.2\n2013-02-22,22,-5.7\n2013-02-22,23,-5.0\n2013-02-23,0,-4.8\n2013-02-23,1,-5.1\n2013-02-23,2,-5.0\n2013-02-23,3,-5.4\n2013-02-23,4,-6.0\n2013-02-23,5,-6.1\n2013-02-23,6,-6.2\n2013-02-23,7,-6.5\n2013-02-23,9,-6.1\n2013-02-23,8,-5.9\n2013-02-23,10,-5.7\n2013-02-23,11,-4.6\n2013-02-23,12,-3.8\n2013-02-23,13,-2.5\n2013-02-23,14,-1.5\n2013-02-23,15,-1.1\n2013-02-23,16,-1.6\n2013-02-23,17,-1.3\n2013-02-23,18,-1.9\n2013-02-23,19,-2.6\n2013-02-23,20,-2.7\n2013-02-23,21,-2.7\n2013-02-23,22,-3.7\n2013-02-23,23,-4.2\n2013-02-24,0,-3.4\n2013-02-24,1,-4.4\n2013-02-24,2,-5.6\n2013-02-24,3,-5.2\n2013-02-24,4,-5.6\n2013-02-24,5,-5.1\n2013-02-24,6,-5.9\n2013-02-24,7,-5.8\n2013-02-24,8,-6.0\n2013-02-24,9,-6.1\n2013-02-24,10,-4.6\n2013-02-24,11,-3.9\n2013-02-24,12,-3.5\n2013-02-24,13,-1.5\n2013-02-24,14,-1.1\n2013-02-24,15,-0.6\n2013-02-24,16,-0.9\n2013-02-24,17,-2.7\n2013-02-24,18,-4.0\n2013-02-24,19,-4.4\n2013-02-24,20,-4.0\n2013-02-24,21,-4.5\n2013-02-24,22,-4.7\n2013-02-24,23,-5.4\n2013-02-25,0,-5.1\n2013-02-25,1,-6.0\n2013-02-25,2,-5.2\n2013-02-25,3,-5.3\n2013-02-25,4,-5.3\n2013-02-25,5,-6.4\n2013-02-25,6,-6.5\n2013-02-25,7,-6.2\n2013-02-25,8,-5.9\n2013-02-25,9,-5.8\n2013-02-25,10,-5.0\n2013-02-25,11,-3.6\n2013-02-25,12,-2.1\n2013-02-25,13,-1.1\n2013-02-25,14,0.7\n2013-02-25,15,-0.3\n2013-02-25,16,-1.2\n2013-02-25,17,-2.2\n2013-02-25,18,-3.5\n2013-02-25,19,-4.2\n2013-02-25,20,-4.5\n2013-02-25,21,-4.0\n2013-02-25,22,-5.1\n2013-02-25,23,-4.6\n2013-02-26,0,-4.9\n2013-02-26,1,-5.8\n2013-02-26,3,-5.0\n2013-02-26,4,-5.4\n2013-02-26,2,-5.5\n2013-02-26,5,-5.2\n2013-02-26,6,-5.8\n2013-02-26,7,-5.0\n2013-02-26,8,-5.4\n2013-02-26,9,-5.5\n2013-02-26,10,-5.0\n2013-02-26,11,-3.5\n2013-02-26,12,-2.2\n2013-02-26,13,-1.4\n2013-02-26,14,-0.8\n2013-02-26,15,-0.4\n2013-02-26,16,-0.7\n2013-02-26,17,-1.3\n2013-02-26,18,-2.2\n2013-02-26,19,-3.6\n2013-02-26,20,-4.7\n2013-02-26,21,-4.1\n2013-02-26,22,-4.8\n2013-02-26,23,-4.7\n2013-02-27,0,-4.3\n2013-02-27,1,-5.1\n2013-02-27,3,-6.4\n2013-02-27,4,-5.9\n2013-02-27,2,-5.9\n2013-02-27,5,-5.8\n2013-02-27,6,-6.4\n2013-02-27,7,-6.6\n2013-02-27,8,-6.7\n2013-02-27,9,-5.9\n2013-02-27,10,-5.3\n2013-02-27,11,-4.0\n2013-02-27,12,-2.5\n2013-02-27,13,-1.7\n2013-02-27,14,-1.0\n2013-02-27,15,-0.4\n2013-02-27,16,-0.9\n2013-02-27,17,-1.4\n2013-02-27,18,-1.1\n2013-02-27,19,-1.2\n2013-02-27,20,-0.5\n2013-02-27,21,-0.4\n2013-02-27,22,-0.4\n2013-02-27,23,-0.5\n2013-02-28,0,-0.4\n2013-02-28,1,-0.3\n2013-02-28,2,-0.4\n2013-02-28,4,-0.2\n2013-02-28,5,0.6\n2013-02-28,3,-0.3\n2013-02-28,6,1.2\n2013-02-28,7,1.9\n2013-02-28,8,2.5\n2013-02-28,9,3.4\n2013-02-28,10,6.3\n2013-02-28,11,6.2\n2013-02-28,12,6.5\n2013-02-28,13,5.9\n2013-02-28,14,5.8\n2013-02-28,15,5.0\n2013-02-28,16,4.3\n2013-02-28,17,3.9\n2013-02-28,18,3.6\n2013-02-28,19,3.6\n2013-02-28,20,3.4\n2013-02-28,21,3.0\n2013-02-28,22,2.6\n2013-03-01,0,2.3\n2013-02-28,23,2.3\n2013-03-01,1,2.1\n2013-03-01,2,1.8\n2013-03-01,3,2.0\n2013-03-01,4,2.0\n2013-03-01,5,2.1\n2013-03-01,6,2.2\n2013-03-01,7,2.4\n2013-03-01,8,2.5\n2013-03-01,9,2.6\n2013-03-01,11,3.3\n2013-03-01,10,3.0\n2013-03-01,12,3.5\n2013-03-01,13,3.4\n2013-03-01,14,3.8\n2013-03-01,15,3.9\n2013-03-01,16,3.9\n2013-03-01,17,3.3\n2013-03-01,18,3.2\n2013-03-01,19,2.8\n2013-03-01,20,2.7\n2013-03-01,21,2.0\n2013-03-01,22,1.8\n2013-03-01,23,1.6\n2013-03-02,0,1.6\n2013-03-02,1,1.4\n2013-03-02,2,2.8\n2013-03-02,3,3.7\n2013-03-02,4,4.4\n2013-03-02,5,3.0\n2013-03-02,6,2.7\n2013-03-02,7,4.3\n2013-03-02,8,4.5\n2013-03-02,9,4.1\n2013-03-02,10,5.9\n2013-03-02,11,5.4\n2013-03-02,12,4.3\n2013-03-02,13,2.6\n2013-03-02,14,2.6\n2013-03-02,15,2.0\n2013-03-02,16,2.1\n2013-03-02,17,2.2\n2013-03-02,18,2.5\n2013-03-02,19,2.3\n2013-03-02,20,2.3\n2013-03-02,21,2.5\n2013-03-02,22,2.2\n2013-03-02,23,2.4\n2013-03-03,0,2.3\n2013-03-03,1,1.9\n2013-03-03,2,2.3\n2013-03-03,3,2.4\n2013-03-03,4,2.0\n2013-03-03,5,2.2\n2013-03-03,6,2.2\n2013-03-03,7,2.2\n2013-03-03,8,2.1\n2013-03-03,9,2.2\n2013-03-03,10,2.4\n2013-03-03,12,3.1\n2013-03-03,11,2.8\n2013-03-03,13,3.1\n2013-03-03,14,3.4\n2013-03-03,15,3.6\n2013-03-03,16,3.3\n2013-03-03,17,3.1\n2013-03-03,18,3.2\n2013-03-03,19,3.1\n2013-03-03,20,3.0\n2013-03-03,21,3.7\n2013-03-03,22,3.9\n2013-03-03,23,4.2\n2013-03-04,0,4.4\n2013-03-04,1,4.4\n2013-03-04,2,4.5\n2013-03-04,3,4.4\n2013-03-04,4,4.2\n2013-03-04,5,3.4\n2013-03-04,6,2.9\n2013-03-04,7,2.9\n2013-03-04,8,3.6\n2013-03-04,9,5.4\n2013-03-04,10,5.8\n2013-03-04,11,4.6\n2013-03-04,12,4.7\n2013-03-04,13,5.2\n2013-03-04,14,6.0\n2013-03-04,15,6.3\n2013-03-04,16,5.8\n2013-03-04,17,5.1\n2013-03-04,18,3.9\n2013-03-04,19,3.1\n2013-03-04,20,2.4\n2013-03-04,21,2.2\n2013-03-04,22,2.0\n2013-03-04,23,2.1\n2013-03-05,0,2.0\n2013-03-05,1,1.7\n2013-03-05,2,1.9\n2013-03-05,3,2.0\n2013-03-05,4,1.7\n2013-03-05,5,1.8\n2013-03-05,6,1.6\n2013-03-05,7,1.6\n2013-03-05,8,1.7\n2013-03-05,9,1.6\n2013-03-05,10,2.3\n2013-03-05,11,4.3\n2013-03-05,12,4.8\n2013-03-05,13,4.8\n2013-03-05,14,4.4\n2013-03-05,15,4.3\n2013-03-05,16,4.2\n2013-03-05,17,3.8\n2013-03-05,18,3.7\n2013-03-05,19,3.0\n2013-03-05,20,2.6\n2013-03-05,21,1.9\n2013-03-05,22,1.8\n2013-03-05,23,1.9\n2013-03-06,0,1.7\n2013-03-06,1,1.8\n2013-03-06,2,1.9\n2013-03-06,3,1.8\n2013-03-06,4,2.0\n2013-03-06,5,1.4\n2013-03-06,6,2.2\n2013-03-06,7,0.9\n2013-03-06,8,0.2\n2013-03-06,9,0.0\n2013-03-06,10,0.9\n2013-03-06,11,2.2\n2013-03-06,12,3.2\n2013-03-06,13,4.0\n2013-03-06,14,4.2\n2013-03-06,15,4.0\n2013-03-06,16,4.0\n2013-03-06,17,4.1\n2013-03-06,18,3.8\n2013-03-06,19,1.8\n2013-03-06,20,-0.2\n2013-03-06,21,-0.3\n2013-03-06,22,-0.9\n2013-03-06,23,-0.3\n2013-03-07,0,-1.1\n2013-03-07,1,-1.3\n2013-03-07,3,-2.2\n2013-03-07,4,-2.9\n2013-03-07,2,-2.0\n2013-03-07,5,-3.1\n2013-03-07,6,-2.9\n2013-03-07,7,-3.3\n2013-03-07,8,-3.4\n2013-03-07,9,-3.0\n2013-03-07,10,-1.2\n2013-03-07,11,0.9\n2013-03-07,12,1.7\n2013-03-07,13,2.8\n2013-03-07,14,3.4\n2013-03-07,15,3.6\n2013-03-07,16,3.6\n2013-03-07,17,2.9\n2013-03-07,18,1.4\n2013-03-07,19,-0.3\n2013-03-07,20,-1.7\n2013-03-07,21,-2.3\n2013-03-07,22,-2.7\n2013-03-07,23,-3.5\n2013-03-08,0,-4.2\n2013-03-08,1,-4.3\n2013-03-08,3,-4.5\n2013-03-08,4,-5.5\n2013-03-08,2,-4.6\n2013-03-08,5,-5.3\n2013-03-08,6,-5.6\n2013-03-08,7,-6.1\n2013-03-08,8,-5.8\n2013-03-08,9,-5.7\n2013-03-08,10,-3.5\n2013-03-08,11,-1.9\n2013-03-08,12,-0.2\n2013-03-08,13,1.0\n2013-03-08,14,1.9\n2013-03-08,15,2.0\n2013-03-08,16,2.1\n2013-03-08,17,0.7\n2013-03-08,18,-1.6\n2013-03-08,19,-3.1\n2013-03-08,20,-3.6\n2013-03-08,21,-4.1\n2013-03-08,22,-4.4\n2013-03-08,23,-4.7\n2013-03-09,0,-4.8\n2013-03-09,1,-5.3\n2013-03-09,2,-5.7\n2013-03-09,3,-6.0\n2013-03-09,4,-6.1\n2013-03-09,5,-5.9\n2013-03-09,6,-6.4\n2013-03-09,7,-6.7\n2013-03-09,8,-6.6\n2013-03-09,9,-6.5\n2013-03-09,10,-4.0\n2013-03-09,11,-2.4\n2013-03-09,12,-0.7\n2013-03-09,13,0.2\n2013-03-09,14,0.9\n2013-03-09,15,1.0\n2013-03-09,16,1.2\n2013-03-09,17,-0.1\n2013-03-09,18,-0.8\n2013-03-09,19,-1.3\n2013-03-09,20,-2.4\n2013-03-09,21,-2.0\n2013-03-09,22,-3.3\n2013-03-09,23,-3.0\n2013-03-10,0,-3.9\n2013-03-10,1,-4.3\n2013-03-10,2,-6.0\n2013-03-10,3,-6.7\n2013-03-10,4,-7.3\n2013-03-10,5,-8.1\n2013-03-10,6,-8.1\n2013-03-10,7,-8.5\n2013-03-10,8,-8.5\n2013-03-10,9,-8.8\n2013-03-10,10,-6.0\n2013-03-10,11,-4.4\n2013-03-10,12,-3.0\n2013-03-10,13,-2.0\n2013-03-10,14,-1.3\n2013-03-10,15,-1.6\n2013-03-10,16,-1.3\n2013-03-10,17,-1.9\n2013-03-10,18,-4.0\n2013-03-10,19,-6.5\n2013-03-10,20,-7.9\n2013-03-10,21,-8.3\n2013-03-10,22,-8.8\n2013-03-10,23,-9.4\n2013-03-11,0,-9.4\n2013-03-11,1,-9.4\n2013-03-11,3,-10.4\n2013-03-11,4,-10.4\n2013-03-11,2,-9.9\n2013-03-11,5,-10.1\n2013-03-11,6,-10.8\n2013-03-11,7,-11.0\n2013-03-11,8,-11.0\n2013-03-11,9,-10.2\n2013-03-11,10,-7.2\n2013-03-11,11,-5.3\n2013-03-11,12,-4.4\n2013-03-11,13,-3.1\n2013-03-11,14,-2.4\n2013-03-11,15,-1.9\n2013-03-11,16,-1.7\n2013-03-11,17,-2.1\n2013-03-11,18,-2.1\n2013-03-11,19,-2.7\n2013-03-11,20,-3.2\n2013-03-11,21,-3.0\n2013-03-11,22,-3.0\n2013-03-11,23,-3.2\n2013-03-12,0,-3.2\n2013-03-12,1,-3.3\n2013-03-12,2,-3.5\n2013-03-12,3,-3.9\n2013-03-12,5,-4.0\n2013-03-12,6,-4.1\n2013-03-12,4,-4.0\n2013-03-12,7,-3.9\n2013-03-12,8,-3.4\n2013-03-12,9,-3.4\n2013-03-12,10,-3.3\n2013-03-12,11,-2.3\n2013-03-12,12,-1.6\n2013-03-12,13,-0.9\n2013-03-12,14,-0.5\n2013-03-12,15,-0.2\n2013-03-12,16,0.4\n2013-03-12,17,0.6\n2013-03-12,18,-0.5\n2013-03-12,19,-2.5\n2013-03-12,20,-3.9\n2013-03-12,21,-4.6\n2013-03-12,22,-4.2\n2013-03-12,23,-5.2\n2013-03-13,0,-5.1\n2013-03-13,1,-6.9\n2013-03-13,2,-7.3\n2013-03-13,3,-6.2\n2013-03-13,4,-6.2\n2013-03-13,5,-7.9\n2013-03-13,6,-8.9\n2013-03-13,7,-9.5\n2013-03-13,8,-10.1\n2013-03-13,9,-9.8\n2013-03-13,10,-6.4\n2013-03-13,11,-4.5\n2013-03-13,12,-3.1\n2013-03-13,13,-1.4\n2013-03-13,14,-1.2\n2013-03-13,15,-0.6\n2013-03-13,16,-1.1\n2013-03-13,17,-1.2\n2013-03-13,18,-4.9\n2013-03-13,19,-6.4\n2013-03-13,20,-6.9\n2013-03-13,21,-6.9\n2013-03-13,22,-6.5\n2013-03-13,23,-6.0\n2013-03-14,0,-5.8\n2013-03-14,1,-5.3\n2013-03-14,2,-5.2\n2013-03-14,3,-4.8\n2013-03-14,4,-4.9\n2013-03-14,5,-4.9\n2013-03-14,6,-5.6\n2013-03-14,7,-5.5\n2013-03-14,8,-5.6\n2013-03-14,9,-4.2\n2013-03-14,10,-3.2\n2013-03-14,11,-2.5\n2013-03-14,12,-1.8\n2013-03-14,13,-1.3\n2013-03-14,14,-1.1\n2013-03-14,15,-0.5\n2013-03-14,16,-1.2\n2013-03-14,17,-1.2\n2013-03-14,18,-2.0\n2013-03-14,19,-2.6\n2013-03-14,20,-3.6\n2013-03-14,21,-6.4\n2013-03-14,22,-6.7\n2013-03-14,23,-6.9\n2013-03-15,0,-7.0\n2013-03-15,1,-7.3\n2013-03-15,2,-6.3\n2013-03-15,3,-6.8\n2013-03-15,4,-6.8\n2013-03-15,5,-7.9\n2013-03-15,6,-8.5\n2013-03-15,7,-7.9\n2013-03-15,8,-8.1\n2013-03-15,9,-7.5\n2013-03-15,10,-4.7\n2013-03-15,11,-2.7\n2013-03-15,12,-1.4\n2013-03-15,13,-0.1\n2013-03-15,14,1.0\n2013-03-15,15,1.5\n2013-03-15,16,1.6\n2013-03-15,17,0.7\n2013-03-15,18,0.4\n2013-03-15,19,-0.6\n2013-03-15,20,-1.2\n2013-03-15,21,-1.8\n2013-03-15,22,-2.1\n2013-03-15,23,-1.8\n2013-03-16,0,-1.7\n2013-03-16,1,-2.5\n2013-03-16,3,-3.0\n2013-03-16,4,-3.4\n2013-03-16,2,-2.9\n2013-03-16,5,-3.4\n2013-03-16,6,-3.5\n2013-03-16,7,-3.3\n2013-03-16,8,-3.7\n2013-03-16,9,-3.1\n2013-03-16,10,-2.4\n2013-03-16,11,-1.1\n2013-03-16,12,-0.4\n2013-03-16,13,1.2\n2013-03-16,14,1.6\n2013-03-16,15,1.6\n2013-03-16,16,1.5\n2013-03-16,17,1.7\n2013-03-16,18,1.1\n2013-03-16,19,0.3\n2013-03-16,20,0.0\n2013-03-16,21,0.3\n2013-03-16,22,0.3\n2013-03-17,0,1.6\n2013-03-16,23,1.0\n2013-03-17,1,1.4\n2013-03-17,2,0.8\n2013-03-17,3,0.5\n2013-03-17,4,0.1\n2013-03-17,5,-0.4\n2013-03-17,6,-0.1\n2013-03-17,7,0.0\n2013-03-17,8,0.1\n2013-03-17,9,1.1\n2013-03-17,10,1.9\n2013-03-17,11,3.6\n2013-03-17,12,4.5\n2013-03-17,13,5.3\n2013-03-17,14,5.4\n2013-03-17,15,5.7\n2013-03-17,16,5.7\n2013-03-17,17,5.2\n2013-03-17,19,4.5\n2013-03-17,18,4.5\n2013-03-17,20,3.4\n2013-03-17,21,2.4\n2013-03-17,22,1.6\n2013-03-18,0,2.1\n2013-03-17,23,1.3\n2013-03-18,1,1.1\n2013-03-18,2,2.1\n2013-03-18,3,0.8\n2013-03-18,4,0.9\n2013-03-18,5,1.4\n2013-03-18,6,0.3\n2013-03-18,7,0.6\n2013-03-18,8,1.3\n2013-03-18,9,1.3\n2013-03-18,10,1.9\n2013-03-18,11,2.6\n2013-03-18,12,2.6\n2013-03-18,13,2.6\n2013-03-18,14,2.5\n2013-03-18,15,2.2\n2013-03-18,16,2.1\n2013-03-18,17,1.6\n2013-03-18,18,0.6\n2013-03-18,19,-1.1\n2013-03-18,20,-1.9\n2013-03-18,21,-2.2\n2013-03-18,22,-2.8\n2013-03-18,23,-5.2\n2013-03-19,0,-5.4\n2013-03-19,1,-5.9\n2013-03-19,2,-5.4\n2013-03-19,3,-4.8\n2013-03-19,4,-6.6\n2013-03-19,5,-6.8\n2013-03-19,6,-6.1\n2013-03-19,7,-6.2\n2013-03-19,8,-6.3\n2013-03-19,9,-4.2\n2013-03-19,10,-2.9\n2013-03-19,11,-2.0\n2013-03-19,12,-1.4\n2013-03-19,13,-0.7\n2013-03-19,14,-0.4\n2013-03-19,15,-0.3\n2013-03-19,16,-0.9\n2013-03-19,17,-1.2\n2013-03-19,18,-2.6\n2013-03-19,19,-4.2\n2013-03-19,20,-4.4\n2013-03-19,21,-6.2\n2013-03-19,22,-7.1\n2013-03-19,23,-7.4\n2013-03-20,0,-7.5\n2013-03-20,1,-8.0\n2013-03-20,2,-8.2\n2013-03-20,3,-8.5\n2013-03-20,4,-7.9\n2013-03-20,5,-6.9\n2013-03-20,6,-6.1\n2013-03-20,7,-5.7\n2013-03-20,8,-5.3\n2013-03-20,9,-3.9\n2013-03-20,10,-2.5\n2013-03-20,11,-1.6\n2013-03-20,12,-0.9\n2013-03-20,13,-0.1\n2013-03-20,14,0.9\n2013-03-20,15,1.4\n2013-03-20,16,2.1\n2013-03-20,17,2.3\n2013-03-20,18,2.0\n2013-03-20,19,1.2\n2013-03-20,20,1.1\n2013-03-20,21,1.4\n2013-03-20,22,1.4\n2013-03-20,23,1.1\n2013-03-21,0,0.7\n2013-03-21,1,0.4\n2013-03-21,2,0.1\n2013-03-21,3,0.0\n2013-03-21,4,0.0\n2013-03-21,5,-0.6\n2013-03-21,6,-0.7\n2013-03-21,7,-1.2\n2013-03-21,8,-0.9\n2013-03-21,9,0.1\n2013-03-21,10,0.6\n2013-03-21,11,2.2\n2013-03-21,12,2.6\n2013-03-21,13,3.0\n2013-03-21,14,4.0\n2013-03-21,15,4.6\n2013-03-21,16,4.8\n2013-03-21,17,4.6\n2013-03-21,18,0.9\n2013-03-21,19,-1.7\n2013-03-21,20,-3.4\n2013-03-21,21,-4.3\n2013-03-21,22,-4.8\n2013-03-21,23,-5.6\n2013-03-22,0,-5.5\n2013-03-22,1,-6.0\n2013-03-22,2,-6.5\n2013-03-22,3,-6.8\n2013-03-22,4,-6.9\n2013-03-22,5,-7.2\n2013-03-22,6,-8.1\n2013-03-22,7,-8.1\n2013-03-22,8,-7.1\n2013-03-22,9,-6.2\n2013-03-22,10,-3.1\n2013-03-22,11,-2.0\n2013-03-22,12,-0.1\n2013-03-22,13,0.4\n2013-03-22,14,0.2\n2013-03-22,15,-0.1\n2013-03-22,16,-0.3\n2013-03-22,17,-0.5\n2013-03-22,18,-1.8\n2013-03-22,19,-3.1\n2013-03-22,20,-4.5\n2013-03-22,21,-5.8\n2013-03-22,22,-7.1\n2013-03-22,23,-8.2\n2013-03-23,0,-8.2\n2013-03-23,1,-8.3\n2013-03-23,3,-8.8\n2013-03-23,4,-9.1\n2013-03-23,2,-8.9\n2013-03-23,5,-9.3\n2013-03-23,6,-9.7\n2013-03-23,7,-9.6\n2013-03-23,8,-9.4\n2013-03-23,9,-7.9\n2013-03-23,10,-4.8\n2013-03-23,11,-2.9\n2013-03-23,12,-1.6\n2013-03-23,13,-0.1\n2013-03-23,14,-0.1\n2013-03-23,15,0.6\n2013-03-23,16,1.1\n2013-03-23,17,0.6\n2013-03-23,18,-2.0\n2013-03-23,19,-4.6\n2013-03-23,20,-5.7\n2013-03-23,21,-6.5\n2013-03-23,22,-6.5\n2013-03-23,23,-7.0\n2013-03-24,0,-7.0\n2013-03-24,1,-7.6\n2013-03-24,2,-7.6\n2013-03-24,3,-7.9\n2013-03-24,4,-8.1\n2013-03-24,5,-8.4\n2013-03-24,6,-8.7\n2013-03-24,7,-8.8\n2013-03-24,8,-8.4\n2013-03-24,9,-7.4\n2013-03-24,10,-3.0\n2013-03-24,11,-1.0\n2013-03-24,12,0.0\n2013-03-24,13,0.7\n2013-03-24,14,2.0\n2013-03-24,15,2.5\n2013-03-24,16,3.0\n2013-03-24,17,2.3\n2013-03-24,18,0.3\n2013-03-24,19,-2.6\n2013-03-24,20,-4.3\n2013-03-24,21,-4.6\n2013-03-24,22,-5.4\n2013-03-24,23,-5.9\n2013-03-25,0,-6.2\n2013-03-25,1,-6.5\n2013-03-25,2,-7.0\n2013-03-25,3,-7.1\n2013-03-25,4,-7.4\n2013-03-25,5,-7.7\n2013-03-25,6,-8.1\n2013-03-25,7,-8.3\n2013-03-25,8,-7.9\n2013-03-25,9,-6.5\n2013-03-25,10,-2.7\n2013-03-25,11,-1.0\n2013-03-25,12,0.1\n2013-03-25,13,1.5\n2013-03-25,14,2.2\n2013-03-25,15,2.9\n2013-03-25,16,2.8\n2013-03-25,17,2.8\n2013-03-25,18,1.4\n2013-03-25,19,-2.4\n2013-03-25,20,-4.1\n2013-03-25,21,-4.6\n2013-03-25,22,-4.9\n2013-03-25,23,-5.4\n2013-03-26,0,-5.9\n2013-03-26,1,-6.3\n2013-03-26,2,-6.9\n2013-03-26,3,-7.3\n2013-03-26,4,-7.4\n2013-03-26,5,-8.0\n2013-03-26,6,-8.3\n2013-03-26,7,-8.6\n2013-03-26,8,-7.8\n2013-03-26,9,-6.1\n2013-03-26,10,-2.5\n2013-03-26,11,-1.1\n2013-03-26,12,0.0\n2013-03-26,13,\n2013-03-26,14,2.1\n2013-03-26,15,2.6\n2013-03-26,16,2.8\n2013-03-26,17,2.7\n2013-03-26,18,1.3\n2013-03-26,19,-2.3\n2013-03-26,20,-3.6\n2013-03-26,21,-4.5\n2013-03-26,22,-4.9\n2013-03-26,23,-5.7\n2013-03-27,0,-5.8\n2013-03-27,1,-6.6\n2013-03-27,3,-7.3\n2013-03-27,4,-7.8\n2013-03-27,2,-6.9\n2013-03-27,5,-7.8\n2013-03-27,6,-8.3\n2013-03-27,7,-8.1\n2013-03-27,8,-7.9\n2013-03-27,9,-6.0\n2013-03-27,10,-2.3\n2013-03-27,11,-1.3\n2013-03-27,12,-0.1\n2013-03-27,13,1.3\n2013-03-27,14,2.1\n2013-03-27,15,2.2\n2013-03-27,16,2.6\n2013-03-27,17,2.9\n2013-03-27,18,1.3\n2013-03-27,19,-2.0\n2013-03-27,20,-3.4\n2013-03-27,21,-4.0\n2013-03-27,22,-4.4\n2013-03-27,23,-4.9\n2013-03-28,0,-5.7\n2013-03-28,1,-5.9\n2013-03-28,2,-5.6\n2013-03-28,3,-6.4\n2013-03-28,4,-6.7\n2013-03-28,5,-7.2\n2013-03-28,6,-7.7\n2013-03-28,7,-7.5\n2013-03-28,8,-7.0\n2013-03-28,9,-4.9\n2013-03-28,10,-1.4\n2013-03-28,11,-0.4\n2013-03-28,12,0.7\n2013-03-28,13,2.1\n2013-03-28,14,2.4\n2013-03-28,15,3.0\n2013-03-28,16,3.4\n2013-03-28,17,2.9\n2013-03-28,18,1.6\n2013-03-28,19,-1.8\n2013-03-28,20,-2.8\n2013-03-28,21,-3.3\n2013-03-28,22,-4.3\n2013-03-28,23,-4.2\n2013-03-29,0,-4.9\n2013-03-29,1,-4.9\n2013-03-29,2,-5.4\n2013-03-29,3,-6.0\n2013-03-29,4,-6.5\n2013-03-29,5,-6.7\n2013-03-29,6,-7.1\n2013-03-29,7,-7.0\n2013-03-29,8,-6.4\n2013-03-29,9,-4.7\n2013-03-29,10,-1.1\n2013-03-29,11,-0.2\n2013-03-29,12,1.6\n2013-03-29,13,2.7\n2013-03-29,14,3.0\n2013-03-29,15,3.6\n2013-03-29,16,3.3\n2013-03-29,17,3.8\n2013-03-29,18,2.2\n2013-03-29,19,-1.1\n2013-03-29,20,-2.4\n2013-03-29,21,-3.3\n2013-03-29,22,-3.9\n2013-03-29,23,-3.9\n2013-03-30,0,-4.4\n2013-03-30,1,-4.9\n2013-03-30,2,-4.9\n2013-03-30,3,-5.2\n2013-03-30,4,-5.6\n2013-03-30,5,-6.4\n2013-03-30,6,-7.1\n2013-03-30,7,-6.7\n2013-03-30,8,-6.4\n2013-03-30,9,-4.9\n2013-03-30,10,-1.2\n2013-03-30,11,0.5\n2013-03-30,12,2.1\n2013-03-30,13,2.5\n2013-03-30,14,3.8\n2013-03-30,15,4.0\n2013-03-30,16,3.9\n2013-03-30,17,3.3\n2013-03-30,18,2.6\n2013-03-30,19,-1.2\n2013-03-30,20,-2.5\n2013-03-30,21,-3.0\n2013-03-30,22,-3.6\n2013-03-30,23,-4.1\n2013-03-31,0,-4.6\n2013-03-31,1,-4.8\n2013-03-31,3,-5.5\n2013-03-31,4,-5.7\n2013-03-31,5,-5.9\n2013-03-31,6,-6.3\n2013-03-31,7,-6.4\n2013-03-31,8,-6.7\n2013-03-31,9,-6.1\n2013-03-31,10,-4.4\n2013-03-31,11,-1.2\n2013-03-31,12,0.6\n2013-03-31,13,1.6\n2013-03-31,14,1.8\n2013-03-31,15,1.5\n2013-03-31,16,1.7\n2013-03-31,17,1.8\n2013-03-31,18,1.7\n2013-03-31,19,0.6\n2013-03-31,20,-0.3\n2013-03-31,21,-0.6\n2013-03-31,22,-0.7\n2013-03-31,23,-1.0\n2013-04-01,0,-0.7\n2013-04-01,1,-0.7\n2013-04-01,2,-0.9\n2013-04-01,3,-1.4\n2013-04-01,4,-1.1\n2013-04-01,5,-1.3\n2013-04-01,6,-1.5\n2013-04-01,7,-2.3\n2013-04-01,8,-2.6\n2013-04-01,9,-2.9\n2013-04-01,10,-1.8\n2013-04-01,11,-0.3\n2013-04-01,12,1.0\n2013-04-01,13,1.8\n2013-04-01,14,3.2\n2013-04-01,15,3.5\n2013-04-01,16,3.9\n2013-04-01,17,3.8\n2013-04-01,18,4.1\n2013-04-01,19,3.2\n2013-04-01,20,0.0\n2013-04-01,21,-1.7\n2013-04-01,22,-2.5\n2013-04-01,23,-3.1\n2013-04-02,0,-3.4\n2013-04-02,1,-3.4\n2013-04-02,3,-4.0\n2013-04-02,4,-4.2\n2013-04-02,2,-3.7\n2013-04-02,5,-4.7\n2013-04-02,6,-4.1\n2013-04-02,7,-4.5\n2013-04-02,8,-4.3\n2013-04-02,9,-4.3\n2013-04-02,10,-2.3\n2013-04-02,11,0.3\n2013-04-02,12,1.7\n2013-04-02,13,3.0\n2013-04-02,14,3.4\n2013-04-02,15,4.4\n2013-04-02,16,5.3\n2013-04-02,17,5.1\n2013-04-02,18,5.7\n2013-04-02,19,4.6\n2013-04-02,20,1.4\n2013-04-02,21,0.1\n2013-04-02,22,-1.0\n2013-04-02,23,-1.0\n2013-04-03,0,-1.1\n2013-04-03,1,-1.5\n2013-04-03,2,-1.7\n2013-04-03,4,-2.8\n2013-04-03,5,-2.7\n2013-04-03,3,-2.0\n2013-04-03,6,-3.0\n2013-04-03,7,-3.8\n2013-04-03,8,-3.1\n2013-04-03,9,-3.0\n2013-04-03,10,-0.5\n2013-04-03,11,2.5\n2013-04-03,12,3.8\n2013-04-03,13,4.8\n2013-04-03,14,5.3\n2013-04-03,15,6.4\n2013-04-03,16,5.9\n2013-04-03,17,6.7\n2013-04-03,18,6.9\n2013-04-03,19,5.8\n2013-04-03,20,2.1\n2013-04-03,21,0.9\n2013-04-03,22,0.2\n2013-04-03,23,-0.4\n2013-04-04,0,-0.1\n2013-04-04,1,-0.7\n2013-04-04,2,-1.1\n2013-04-04,3,-2.2\n2013-04-04,5,-2.8\n2013-04-04,6,-2.7\n2013-04-04,4,-2.4\n2013-04-04,7,-3.4\n2013-04-04,8,-3.2\n2013-04-04,9,-2.6\n2013-04-04,10,0.1\n2013-04-04,11,2.1\n2013-04-04,12,3.4\n2013-04-04,13,4.4\n2013-04-04,14,5.0\n2013-04-04,15,5.3\n2013-04-04,16,5.8\n2013-04-04,17,7.2\n2013-04-04,18,7.2\n2013-04-04,19,6.0\n2013-04-04,20,2.4\n2013-04-04,21,-0.1\n2013-04-04,22,-1.1\n2013-04-04,23,-1.8\n2013-04-05,0,-2.0\n2013-04-05,1,-3.0\n2013-04-05,2,-3.2\n2013-04-05,3,-3.1\n2013-04-05,4,-3.3\n2013-04-05,6,-4.4\n2013-04-05,5,-3.8\n2013-04-05,7,-3.9\n2013-04-05,8,-4.1\n2013-04-05,9,-3.5\n2013-04-05,10,-0.9\n2013-04-05,11,2.0\n2013-04-05,12,\n2013-04-05,13,4.0\n2013-04-05,14,4.8\n2013-04-05,15,5.3\n2013-04-05,16,5.7\n2013-04-05,17,6.1\n2013-04-05,18,6.4\n2013-04-05,19,5.0\n2013-04-05,20,2.1\n2013-04-05,21,2.6\n2013-04-05,22,1.6\n2013-04-05,23,2.7\n2013-04-06,0,2.6\n2013-04-06,1,2.2\n2013-04-06,2,2.0\n2013-04-06,3,1.3\n2013-04-06,4,1.0\n2013-04-06,5,0.6\n2013-04-06,6,0.6\n2013-04-06,7,0.1\n2013-04-06,8,-0.5\n2013-04-06,9,0.1\n2013-04-06,10,1.2\n2013-04-06,11,1.5\n2013-04-06,12,2.5\n2013-04-06,13,2.8\n2013-04-06,14,3.9\n2013-04-06,15,3.8\n2013-04-06,16,4.3\n2013-04-06,17,4.0\n2013-04-06,18,4.2\n2013-04-06,19,3.8\n2013-04-06,20,2.8\n2013-04-06,21,2.4\n2013-04-06,22,2.3\n2013-04-06,23,2.2\n2013-04-07,0,1.9\n2013-04-07,1,0.2\n2013-04-07,2,-1.6\n2013-04-07,3,-1.2\n2013-04-07,4,-1.5\n2013-04-07,5,-1.5\n2013-04-07,6,-1.3\n2013-04-07,7,-1.4\n2013-04-07,8,-2.3\n2013-04-07,9,3.4\n2013-04-07,10,4.7\n2013-04-07,11,1.6\n2013-04-07,12,2.4\n2013-04-07,13,2.6\n2013-04-07,14,3.3\n2013-04-07,15,3.4\n2013-04-07,16,4.2\n2013-04-07,17,4.6\n2013-04-07,18,4.7\n2013-04-07,19,3.8\n2013-04-07,20,2.3\n2013-04-07,21,0.5\n2013-04-07,22,-0.3\n2013-04-07,23,-1.8\n2013-04-08,0,-2.2\n2013-04-08,1,-2.3\n2013-04-08,2,-3.1\n2013-04-08,3,-3.4\n2013-04-08,4,-3.3\n2013-04-08,5,-3.8\n2013-04-08,6,-4.3\n2013-04-08,7,-4.3\n2013-04-08,8,-4.3\n2013-04-08,9,-3.7\n2013-04-08,10,-1.4\n2013-04-08,11,0.8\n2013-04-08,12,1.8\n2013-04-08,13,3.2\n2013-04-08,14,4.1\n2013-04-08,15,4.8\n2013-04-08,16,5.3\n2013-04-08,17,5.3\n2013-04-08,18,4.9\n2013-04-08,19,4.7\n2013-04-08,20,1.3\n2013-04-08,21,-0.9\n2013-04-08,22,-2.4\n2013-04-08,23,-2.5\n2013-04-09,0,-3.2\n2013-04-09,1,-3.6\n2013-04-09,2,-3.6\n2013-04-09,4,-4.6\n2013-04-09,5,-5.0\n2013-04-09,6,-5.2\n2013-04-09,3,-4.2\n2013-04-09,7,-5.4\n2013-04-09,8,-5.2\n2013-04-09,9,-4.2\n2013-04-09,10,-1.0\n2013-04-09,11,0.8\n2013-04-09,12,1.6\n2013-04-09,13,3.5\n2013-04-09,14,3.9\n2013-04-09,15,4.3\n2013-04-09,16,4.5\n2013-04-09,17,4.8\n2013-04-09,18,5.2\n2013-04-09,19,4.4\n2013-04-09,20,0.6\n2013-04-09,21,-1.3\n2013-04-09,22,-2.6\n2013-04-09,23,-3.1\n2013-04-10,0,-3.5\n2013-04-10,1,-4.2\n2013-04-10,2,-3.9\n2013-04-10,3,-4.3\n2013-04-10,4,-4.5\n2013-04-10,5,-5.2\n2013-04-10,6,-5.7\n2013-04-10,7,-5.8\n2013-04-10,8,-4.9\n2013-04-10,9,-4.1\n2013-04-10,10,-0.9\n2013-04-10,11,1.1\n2013-04-10,12,2.5\n2013-04-10,13,3.9\n2013-04-10,14,4.2\n2013-04-10,15,4.6\n2013-04-10,16,4.4\n2013-04-10,17,5.2\n2013-04-10,18,5.3\n2013-04-10,19,4.8\n2013-04-10,20,1.9\n2013-04-10,21,-0.2\n2013-04-10,22,-1.4\n2013-04-10,23,-2.0\n2013-04-11,0,-1.8\n2013-04-11,1,-1.6\n2013-04-11,2,-2.6\n2013-04-11,3,-2.8\n2013-04-11,4,-2.9\n2013-04-11,5,-3.0\n2013-04-11,6,-3.2\n2013-04-11,7,-3.5\n2013-04-11,8,-3.1\n2013-04-11,9,-1.5\n2013-04-11,10,1.3\n2013-04-11,11,3.1\n2013-04-11,12,4.6\n2013-04-11,13,5.5\n2013-04-11,14,5.7\n2013-04-11,15,5.9\n2013-04-11,16,6.2\n2013-04-11,17,6.0\n2013-04-11,18,5.9\n2013-04-11,19,5.4\n2013-04-11,20,4.5\n2013-04-11,21,2.8\n2013-04-11,22,2.4\n2013-04-11,23,1.6\n2013-04-12,0,1.6\n2013-04-12,1,1.2\n2013-04-12,2,0.9\n2013-04-12,3,0.9\n2013-04-12,4,0.8\n2013-04-12,5,0.5\n2013-04-12,6,0.3\n2013-04-12,7,1.0\n2013-04-12,8,1.2\n2013-04-12,9,2.3\n2013-04-12,10,4.2\n2013-04-12,11,5.0\n2013-04-12,12,6.9\n2013-04-12,13,7.4\n2013-04-12,14,7.8\n2013-04-12,15,8.7\n2013-04-12,16,8.8\n2013-04-12,17,\n2013-04-12,18,7.8\n2013-04-12,19,7.9\n2013-04-12,20,7.0\n2013-04-12,21,6.0\n2013-04-12,22,3.2\n2013-04-12,23,2.3\n2013-04-13,0,1.7\n2013-04-13,1,1.9\n2013-04-13,3,0.8\n2013-04-13,4,-0.9\n2013-04-13,2,1.2\n2013-04-13,5,-1.8\n2013-04-13,6,-1.2\n2013-04-13,7,-1.5\n2013-04-13,8,0.0\n2013-04-13,9,1.5\n2013-04-13,10,3.2\n2013-04-13,11,5.5\n2013-04-13,12,6.2\n2013-04-13,13,6.9\n2013-04-13,14,9.1\n2013-04-13,15,10.0\n2013-04-13,16,9.9\n2013-04-13,17,9.9\n2013-04-13,18,9.7\n2013-04-13,19,8.9\n2013-04-13,20,7.2\n2013-04-13,21,3.6\n2013-04-13,22,1.8\n2013-04-13,23,1.7\n2013-04-14,0,1.3\n2013-04-14,1,0.1\n2013-04-14,2,-0.2\n2013-04-14,5,0.1\n2013-04-14,6,0.1\n2013-04-14,3,-0.4\n2013-04-14,4,-0.6\n2013-04-14,7,0.7\n2013-04-14,8,1.6\n2013-04-14,9,3.0\n2013-04-14,10,4.0\n2013-04-14,12,4.7\n2013-04-14,11,5.2\n2013-04-14,13,4.0\n2013-04-14,14,4.1\n2013-04-14,15,4.1\n2013-04-14,16,4.3\n2013-04-14,17,4.3\n2013-04-14,18,4.1\n2013-04-14,19,4.3\n2013-04-14,20,4.3\n2013-04-14,21,4.3\n2013-04-14,22,7.1\n2013-04-14,23,10.7\n2013-04-15,0,10.8\n2013-04-15,1,9.5\n2013-04-15,2,8.7\n2013-04-15,3,6.1\n2013-04-15,4,5.3\n2013-04-15,5,5.0\n2013-04-15,6,5.0\n2013-04-15,7,5.0\n2013-04-15,8,5.0\n2013-04-15,9,5.7\n2013-04-15,10,6.5\n2013-04-15,11,10.2\n2013-04-15,12,11.3\n2013-04-15,13,11.5\n2013-04-15,14,12.3\n2013-04-15,15,12.9\n2013-04-15,16,12.4\n2013-04-15,17,11.0\n2013-04-15,18,10.9\n2013-04-15,19,10.3\n2013-04-15,20,9.4\n2013-04-15,21,9.1\n2013-04-15,22,8.3\n2013-04-15,23,8.5\n2013-04-16,0,8.6\n2013-04-16,1,8.9\n2013-04-16,2,8.0\n2013-04-16,3,7.9\n2013-04-16,4,8.2\n2013-04-16,5,5.9\n2013-04-16,6,4.9\n2013-04-16,7,4.0\n2013-04-16,8,4.8\n2013-04-16,9,6.2\n2013-04-16,10,6.9\n2013-04-16,11,7.5\n2013-04-16,12,7.9\n2013-04-16,13,8.4\n2013-04-16,14,8.2\n2013-04-16,15,8.8\n2013-04-16,16,9.8\n2013-04-16,18,10.9\n2013-04-16,17,11.2\n2013-04-16,19,9.6\n2013-04-16,20,8.9\n2013-04-16,21,8.6\n2013-04-16,22,9.4\n2013-04-16,23,7.9\n2013-04-17,0,7.0\n2013-04-17,1,7.5\n2013-04-17,3,7.2\n2013-04-17,2,7.1\n2013-04-17,4,7.4\n2013-04-17,5,7.8\n2013-04-17,6,7.8\n2013-04-17,7,7.5\n2013-04-17,9,7.0\n2013-04-17,8,7.1\n2013-04-17,10,7.0\n2013-04-17,11,7.5\n2013-04-17,12,8.8\n2013-04-17,13,9.1\n2013-04-17,14,10.6\n2013-04-17,15,10.8\n2013-04-17,16,11.4\n2013-04-17,17,10.3\n2013-04-17,18,9.8\n2013-04-17,19,9.6\n2013-04-17,20,8.6\n2013-04-17,21,7.2\n2013-04-17,22,6.1\n2013-04-17,23,4.9\n2013-04-18,0,4.1\n2013-04-18,1,4.1\n2013-04-18,2,4.2\n2013-04-18,3,3.8\n2013-04-18,4,3.4\n2013-04-18,5,3.4\n2013-04-18,6,3.3\n2013-04-18,7,3.3\n2013-04-18,8,3.8\n2013-04-18,9,4.1\n2013-04-18,10,4.8\n2013-04-18,11,5.2\n2013-04-18,12,5.3\n2013-04-18,13,7.7\n2013-04-18,14,8.7\n2013-04-18,15,7.8\n2013-04-18,16,8.3\n2013-04-18,17,9.3\n2013-04-18,18,8.9\n2013-04-18,19,8.8\n2013-04-18,20,8.3\n2013-04-18,21,7.5\n2013-04-18,22,5.5\n2013-04-18,23,5.0\n2013-04-19,0,4.8\n2013-04-19,1,4.7\n2013-04-19,2,4.5\n2013-04-19,3,4.6\n2013-04-19,4,4.7\n2013-04-19,5,6.1\n2013-04-19,6,5.8\n2013-04-19,7,5.9\n2013-04-19,8,5.8\n2013-04-19,9,5.4\n2013-04-19,10,5.4\n2013-04-19,11,5.3\n2013-04-19,12,5.9\n2013-04-19,13,5.7\n2013-04-19,14,5.3\n2013-04-19,15,4.8\n2013-04-19,16,4.2\n2013-04-19,17,4.1\n2013-04-19,18,4.2\n2013-04-19,19,5.6\n2013-04-19,20,5.8\n2013-04-19,21,4.7\n2013-04-19,22,4.3\n2013-04-19,23,3.9\n2013-04-20,0,3.5\n2013-04-20,1,2.9\n2013-04-20,2,3.2\n2013-04-20,3,2.0\n2013-04-20,4,1.8\n2013-04-20,5,1.6\n2013-04-20,6,1.7\n2013-04-20,7,1.8\n2013-04-20,8,3.2\n2013-04-20,9,4.4\n2013-04-20,10,4.9\n2013-04-20,11,5.1\n2013-04-20,12,5.5\n2013-04-20,13,6.5\n2013-04-20,14,7.3\n2013-04-20,15,7.1\n2013-04-20,16,7.3\n2013-04-20,17,7.2\n2013-04-20,18,6.9\n2013-04-20,19,6.6\n2013-04-20,20,6.4\n2013-04-20,21,5.3\n2013-04-20,22,3.3\n2013-04-20,23,3.7\n2013-04-21,0,4.0\n2013-04-21,1,3.9\n2013-04-21,2,3.8\n2013-04-21,3,3.8\n2013-04-21,4,3.8\n2013-04-21,5,4.1\n2013-04-21,6,3.9\n2013-04-21,7,3.7\n2013-04-21,8,5.7\n2013-04-21,9,6.2\n2013-04-21,10,7.1\n2013-04-21,11,8.8\n2013-04-21,12,9.7\n2013-04-21,13,10.2\n2013-04-21,14,11.2\n2013-04-21,15,11.6\n2013-04-21,16,11.7\n2013-04-21,17,11.9\n2013-04-21,18,11.7\n2013-04-21,19,10.7\n2013-04-21,20,9.7\n2013-04-21,21,9.0\n2013-04-21,22,8.2\n2013-04-21,23,7.9\n2013-04-22,0,7.5\n2013-04-22,1,7.5\n2013-04-22,2,7.5\n2013-04-22,3,7.3\n2013-04-22,4,6.3\n2013-04-22,5,5.5\n2013-04-22,6,4.8\n2013-04-22,7,4.8\n2013-04-22,8,5.8\n2013-04-22,9,6.5\n2013-04-22,10,7.6\n2013-04-22,11,7.8\n2013-04-22,12,7.7\n2013-04-22,13,7.7\n2013-04-22,14,8.5\n2013-04-22,15,8.4\n2013-04-22,16,7.8\n2013-04-22,17,7.5\n2013-04-22,18,6.6\n2013-04-22,19,6.9\n2013-04-22,20,6.8\n2013-04-22,21,6.3\n2013-04-22,22,5.9\n2013-04-22,23,5.8\n2013-04-23,0,6.0\n2013-04-23,1,5.9\n2013-04-23,2,6.2\n2013-04-23,3,5.7\n2013-04-23,4,5.2\n2013-04-23,5,5.9\n2013-04-23,6,6.1\n2013-04-23,7,5.9\n2013-04-23,8,6.2\n2013-04-23,9,6.4\n2013-04-23,10,7.4\n2013-04-23,11,7.1\n2013-04-23,12,7.2\n2013-04-23,13,6.2\n2013-04-23,14,8.2\n2013-04-23,15,8.4\n2013-04-23,16,5.3\n2013-04-23,17,5.9\n2013-04-23,18,4.6\n2013-04-23,19,5.7\n2013-04-23,20,6.3\n2013-04-23,21,5.2\n2013-04-23,22,5.8\n2013-04-23,23,5.7\n2013-04-24,0,4.4\n2013-04-24,1,4.9\n2013-04-24,2,5.8\n2013-04-24,3,5.1\n2013-04-24,4,4.1\n2013-04-24,5,5.4\n2013-04-24,6,5.6\n2013-04-24,7,5.5\n2013-04-24,8,5.2\n2013-04-24,9,5.6\n2013-04-24,10,5.7\n2013-04-24,11,4.6\n2013-04-24,12,3.9\n2013-04-24,13,4.4\n2013-04-24,14,4.3\n2013-04-24,15,6.2\n2013-04-24,16,5.4\n2013-04-24,17,4.0\n2013-04-24,18,4.4\n2013-04-24,19,3.5\n2013-04-24,20,3.5\n2013-04-24,21,4.6\n2013-04-24,22,4.3\n2013-04-24,23,3.6\n2013-04-25,0,4.3\n2013-04-25,1,4.0\n2013-04-25,2,3.6\n2013-04-25,3,3.4\n2013-04-25,4,3.7\n2013-04-25,5,3.5\n2013-04-25,6,3.5\n2013-04-25,7,4.0\n2013-04-25,8,4.2\n2013-04-25,9,4.5\n2013-04-25,11,5.4\n2013-04-25,10,5.4\n2013-04-25,12,6.4\n2013-04-25,13,5.4\n2013-04-25,15,7.1\n2013-04-25,14,6.0\n2013-04-25,16,6.9\n2013-04-25,17,6.5\n2013-04-25,18,5.5\n2013-04-25,19,5.1\n2013-04-25,20,4.3\n2013-04-25,21,3.9\n2013-04-25,22,3.4\n2013-04-25,23,3.2\n2013-04-26,0,3.0\n2013-04-26,1,2.7\n2013-04-26,2,2.7\n2013-04-26,3,2.7\n2013-04-26,4,2.4\n2013-04-26,5,2.1\n2013-04-26,6,2.1\n2013-04-26,7,2.2\n2013-04-26,8,2.7\n2013-04-26,9,3.1\n2013-04-26,10,3.6\n2013-04-26,11,4.6\n2013-04-26,12,5.3\n2013-04-26,13,6.7\n2013-04-26,14,6.9\n2013-04-26,15,5.7\n2013-04-26,16,8.5\n2013-04-26,17,9.4\n2013-04-26,18,9.6\n2013-04-26,19,9.4\n2013-04-26,20,7.4\n2013-04-26,21,5.0\n2013-04-26,22,3.4\n2013-04-26,23,2.0\n2013-04-27,0,1.3\n2013-04-27,1,1.0\n2013-04-27,2,0.8\n2013-04-27,3,0.6\n2013-04-27,4,0.7\n2013-04-27,5,1.3\n2013-04-27,6,1.3\n2013-04-27,7,1.3\n2013-04-27,8,1.3\n2013-04-27,9,2.8\n2013-04-27,10,5.4\n2013-04-27,11,6.4\n2013-04-27,12,7.0\n2013-04-27,13,8.4\n2013-04-27,14,8.1\n2013-04-27,15,7.7\n2013-04-27,16,10.3\n2013-04-27,17,10.1\n2013-04-27,18,10.1\n2013-04-27,19,9.7\n2013-04-27,20,7.9\n2013-04-27,21,6.8\n2013-04-27,22,5.9\n2013-04-27,23,3.4\n2013-04-28,0,2.8\n2013-04-28,1,2.4\n2013-04-28,2,3.0\n2013-04-28,3,4.0\n2013-04-28,4,4.1\n2013-04-28,5,4.4\n2013-04-28,6,4.6\n2013-04-28,7,4.8\n2013-04-28,9,5.2\n2013-04-28,8,4.8\n2013-04-28,10,5.4\n2013-04-28,11,5.5\n2013-04-28,12,6.3\n2013-04-28,13,7.3\n2013-04-28,14,7.9\n2013-04-28,15,7.7\n2013-04-28,16,7.3\n2013-04-28,17,8.7\n2013-04-28,18,8.8\n2013-04-28,19,7.5\n2013-04-28,20,7.2\n2013-04-28,21,5.8\n2013-04-28,22,4.6\n2013-04-28,23,4.1\n2013-04-29,0,3.5\n2013-04-29,1,3.2\n2013-04-29,2,3.2\n2013-04-29,3,3.2\n2013-04-29,4,2.9\n2013-04-29,5,2.6\n2013-04-29,6,2.3\n2013-04-29,7,2.7\n2013-04-29,8,3.1\n2013-04-29,9,3.6\n2013-04-29,10,4.3\n2013-04-29,11,6.1\n2013-04-29,12,6.3\n2013-04-29,13,7.2\n2013-04-29,14,9.3\n2013-04-29,15,10.6\n2013-04-29,17,9.3\n2013-04-29,16,10.3\n2013-04-29,18,8.1\n2013-04-29,19,7.1\n2013-04-29,20,5.9\n2013-04-29,21,4.9\n2013-04-29,22,4.8\n2013-04-29,23,4.1\n2013-04-30,0,3.6\n2013-04-30,1,4.1\n2013-04-30,2,3.8\n2013-04-30,3,3.4\n2013-04-30,5,3.0\n2013-04-30,6,2.9\n2013-04-30,4,3.8\n2013-04-30,7,3.1\n2013-04-30,8,3.7\n2013-04-30,9,4.2\n2013-04-30,10,4.6\n2013-04-30,11,6.0\n2013-04-30,12,5.6\n2013-04-30,13,6.0\n2013-04-30,14,6.5\n2013-04-30,15,7.4\n2013-04-30,16,5.5\n2013-04-30,17,4.8\n2013-04-30,18,4.9\n2013-04-30,19,5.1\n2013-04-30,20,4.1\n2013-04-30,21,3.4\n2013-04-30,22,3.2\n2013-04-30,23,3.4\n2013-05-01,0,1.7\n2013-05-01,1,1.4\n2013-05-01,2,1.3\n2013-05-01,3,0.6\n2013-05-01,4,0.3\n2013-05-01,6,1.2\n2013-05-01,7,1.5\n2013-05-01,5,1.0\n2013-05-01,8,2.1\n2013-05-01,9,2.4\n2013-05-01,10,2.8\n2013-05-01,11,3.3\n2013-05-01,12,4.1\n2013-05-01,13,6.1\n2013-05-01,14,6.9\n2013-05-01,15,6.1\n2013-05-01,16,5.0\n2013-05-01,17,4.6\n2013-05-01,18,4.2\n2013-05-01,19,3.6\n2013-05-01,20,4.8\n2013-05-01,21,4.3\n2013-05-01,22,4.0\n2013-05-01,23,3.6\n2013-05-02,0,2.5\n2013-05-02,1,2.3\n2013-05-02,2,2.9\n2013-05-02,3,1.7\n2013-05-02,4,1.2\n2013-05-02,5,1.7\n2013-05-02,6,1.9\n2013-05-02,7,2.1\n2013-05-02,8,1.9\n2013-05-02,9,3.0\n2013-05-02,10,2.6\n2013-05-02,11,2.2\n2013-05-02,12,3.3\n2013-05-02,13,5.1\n2013-05-02,14,3.6\n2013-05-02,15,2.2\n2013-05-02,16,3.8\n2013-05-02,17,4.2\n2013-05-02,18,5.2\n2013-05-02,19,3.2\n2013-05-02,20,2.6\n2013-05-02,22,2.1\n2013-05-02,21,2.2\n2013-05-02,23,1.7\n2013-05-03,0,1.4\n2013-05-03,1,1.7\n2013-05-03,2,1.5\n2013-05-03,3,1.4\n2013-05-03,4,1.5\n2013-05-03,5,1.7\n2013-05-03,7,1.1\n2013-05-03,6,1.5\n2013-05-03,8,1.0\n2013-05-03,9,0.6\n2013-05-03,10,0.4\n2013-05-03,11,0.3\n2013-05-03,12,0.3\n2013-05-03,13,0.4\n2013-05-03,14,0.8\n2013-05-03,15,1.1\n2013-05-03,16,1.7\n2013-05-03,17,2.1\n2013-05-03,18,2.5\n2013-05-03,19,4.6\n2013-05-03,20,6.4\n2013-05-03,21,5.9\n2013-05-03,22,4.6\n2013-05-03,23,3.1\n2013-05-04,0,2.4\n2013-05-04,1,2.0\n2013-05-04,2,0.5\n2013-05-04,3,-0.6\n2013-05-04,4,-0.9\n2013-05-04,5,-0.1\n2013-05-04,6,0.7\n2013-05-04,7,1.2\n2013-05-04,8,1.7\n2013-05-04,9,1.1\n2013-05-04,10,1.0\n2013-05-04,11,1.8\n2013-05-04,12,2.9\n2013-05-04,13,4.6\n2013-05-04,14,5.4\n2013-05-04,16,6.0\n2013-05-04,15,5.9\n2013-05-04,17,5.7\n2013-05-04,18,5.5\n2013-05-04,19,5.3\n2013-05-04,20,4.7\n2013-05-04,21,4.4\n2013-05-04,22,4.5\n2013-05-04,23,4.8\n2013-05-05,0,5.9\n2013-05-05,1,4.2\n2013-05-05,2,4.2\n2013-05-05,3,4.0\n2013-05-05,5,3.4\n2013-05-05,6,3.1\n2013-05-05,7,3.1\n2013-05-05,4,3.6\n2013-05-05,8,3.6\n2013-05-05,9,4.0\n2013-05-05,10,4.8\n2013-05-05,11,5.4\n2013-05-05,12,6.4\n2013-05-05,13,7.1\n2013-05-05,14,7.6\n2013-05-05,15,8.7\n2013-05-05,16,9.1\n2013-05-05,17,9.5\n2013-05-05,18,9.2\n2013-05-05,20,10.8\n2013-05-05,19,10.9\n2013-05-05,21,9.5\n2013-05-05,22,8.7\n2013-05-05,23,7.4\n2013-05-06,0,6.6\n2013-05-06,1,6.3\n2013-05-06,2,7.8\n2013-05-06,3,9.8\n2013-05-06,4,6.4\n2013-05-06,5,6.1\n2013-05-06,6,5.9\n2013-05-06,7,5.8\n2013-05-06,8,6.3\n2013-05-06,9,0.0\n2013-05-06,10,6.7\n2013-05-06,11,7.1\n2013-05-06,12,7.6\n2013-05-06,13,8.5\n2013-05-06,14,9.4\n2013-05-06,15,9.0\n2013-05-06,16,11.0\n2013-05-06,17,14.1\n2013-05-06,18,13.2\n2013-05-06,19,10.1\n2013-05-06,20,9.3\n2013-05-06,21,11.0\n2013-05-06,22,9.8\n2013-05-06,23,9.0\n2013-05-07,0,8.3\n2013-05-07,1,9.1\n2013-05-07,2,8.5\n2013-05-07,3,7.7\n2013-05-07,4,7.4\n2013-05-07,5,7.5\n2013-05-07,6,7.7\n2013-05-07,7,7.7\n2013-05-07,8,8.0\n2013-05-07,9,8.2\n2013-05-07,10,8.1\n2013-05-07,11,7.7\n2013-05-07,12,8.1\n2013-05-07,13,7.8\n2013-05-07,14,8.3\n2013-05-07,15,9.1\n2013-05-07,16,9.7\n2013-05-07,17,9.6\n2013-05-07,18,9.8\n2013-05-07,19,9.5\n2013-05-07,20,9.2\n2013-05-07,21,8.9\n2013-05-07,22,8.4\n2013-05-07,23,7.3\n2013-05-08,0,6.5\n2013-05-08,1,5.8\n2013-05-08,2,5.8\n2013-05-08,3,4.7\n2013-05-08,4,4.1\n2013-05-08,5,3.6\n2013-05-08,6,3.5\n2013-05-08,7,3.9\n2013-05-08,8,4.8\n2013-05-08,9,8.0\n2013-05-08,10,10.1\n2013-05-08,11,11.6\n2013-05-08,12,12.9\n2013-05-08,13,13.3\n2013-05-08,14,14.2\n2013-05-08,15,15.3\n2013-05-08,16,15.8\n2013-05-08,17,15.1\n2013-05-08,18,14.3\n2013-05-08,19,11.9\n2013-05-08,20,10.8\n2013-05-08,21,10.1\n2013-05-08,22,9.7\n2013-05-08,23,9.3\n2013-05-09,0,9.1\n2013-05-09,1,9.2\n2013-05-09,2,9.0\n2013-05-09,3,8.9\n2013-05-09,4,8.7\n2013-05-09,5,8.7\n2013-05-09,7,8.1\n2013-05-09,6,8.4\n2013-05-09,8,9.4\n2013-05-09,9,10.2\n2013-05-09,10,10.3\n2013-05-09,11,10.5\n2013-05-09,12,10.5\n2013-05-09,13,12.0\n2013-05-09,14,13.6\n2013-05-09,15,13.2\n2013-05-09,16,13.6\n2013-05-09,17,14.2\n2013-05-09,18,14.1\n2013-05-09,19,12.7\n2013-05-09,20,11.9\n2013-05-09,21,11.5\n2013-05-09,22,10.4\n2013-05-09,23,9.7\n2013-05-10,0,9.3\n2013-05-10,1,9.0\n2013-05-10,2,8.5\n2013-05-10,3,8.0\n2013-05-10,4,7.8\n2013-05-10,5,7.8\n2013-05-10,6,7.6\n2013-05-10,7,7.6\n2013-05-10,8,8.5\n2013-05-10,9,9.3\n2013-05-10,10,10.9\n2013-05-10,11,11.2\n2013-05-10,12,11.5\n2013-05-10,13,12.1\n2013-05-10,14,12.6\n2013-05-10,15,12.7\n2013-05-10,16,12.6\n2013-05-10,17,12.5\n2013-05-10,18,12.5\n2013-05-10,19,11.8\n2013-05-10,20,11.5\n2013-05-10,21,11.2\n2013-05-10,22,10.0\n2013-05-10,23,8.6\n2013-05-11,0,8.1\n2013-05-11,1,7.6\n2013-05-11,2,7.3\n2013-05-11,4,6.8\n2013-05-11,5,6.5\n2013-05-11,3,7.2\n2013-05-11,6,6.3\n2013-05-11,7,6.5\n2013-05-11,8,7.1\n2013-05-11,9,7.6\n2013-05-11,10,8.1\n2013-05-11,11,7.8\n2013-05-11,12,0.0\n2013-05-11,13,8.8\n2013-05-11,14,9.4\n2013-05-11,15,10.3\n2013-05-11,16,10.0\n2013-05-11,17,9.2\n2013-05-11,18,8.1\n2013-05-11,19,7.4\n2013-05-11,20,7.6\n2013-05-11,21,7.5\n2013-05-11,22,6.4\n2013-05-11,23,5.3\n2013-05-12,0,4.8\n2013-05-12,1,4.1\n2013-05-12,2,3.1\n2013-05-12,3,2.6\n2013-05-12,4,2.6\n2013-05-12,5,2.1\n2013-05-12,6,1.9\n2013-05-12,7,2.7\n2013-05-12,8,4.7\n2013-05-12,9,6.0\n2013-05-12,10,8.1\n2013-05-12,11,8.7\n2013-05-12,12,9.7\n2013-05-12,13,9.7\n2013-05-12,14,11.6\n2013-05-12,15,13.7\n2013-05-12,16,12.9\n2013-05-12,17,12.5\n2013-05-12,18,12.0\n2013-05-12,19,11.7\n2013-05-12,20,11.5\n2013-05-12,21,10.8\n2013-05-12,22,10.1\n2013-05-12,23,9.3\n2013-05-13,0,8.0\n2013-05-13,1,7.7\n2013-05-13,2,7.4\n2013-05-13,3,7.0\n2013-05-13,4,7.0\n2013-05-13,5,6.9\n2013-05-13,6,7.1\n2013-05-13,7,7.5\n2013-05-13,8,9.4\n2013-05-13,9,10.6\n2013-05-13,10,11.2\n2013-05-13,11,11.0\n2013-05-13,12,11.2\n2013-05-13,13,11.4\n2013-05-13,14,9.2\n2013-05-13,15,9.0\n2013-05-13,16,8.1\n2013-05-13,17,8.3\n2013-05-13,18,9.9\n2013-05-13,19,6.9\n2013-05-13,20,6.7\n2013-05-13,21,6.8\n2013-05-13,22,6.2\n2013-05-13,23,6.2\n2013-05-14,0,5.6\n2013-05-14,1,4.4\n2013-05-14,2,3.6\n2013-05-14,3,3.1\n2013-05-14,4,2.6\n2013-05-14,5,2.2\n2013-05-14,6,2.1\n2013-05-14,7,3.4\n2013-05-14,8,5.4\n2013-05-14,9,6.5\n2013-05-14,10,8.4\n2013-05-14,11,10.3\n2013-05-14,12,10.1\n2013-05-14,13,10.7\n2013-05-14,14,11.1\n2013-05-14,15,12.4\n2013-05-14,16,12.1\n2013-05-14,17,12.0\n2013-05-14,18,11.5\n2013-05-14,19,11.3\n2013-05-14,20,10.6\n2013-05-14,21,9.2\n2013-05-14,22,8.3\n2013-05-14,23,7.6\n2013-05-15,0,5.9\n2013-05-15,1,4.9\n2013-05-15,2,4.4\n2013-05-15,3,4.0\n2013-05-15,5,3.7\n2013-05-15,6,3.0\n2013-05-15,4,4.4\n2013-05-15,7,4.0\n2013-05-15,8,6.1\n2013-05-15,9,7.6\n2013-05-15,10,9.2\n2013-05-15,11,10.9\n2013-05-15,12,10.9\n2013-05-15,13,10.7\n2013-05-15,14,11.0\n2013-05-15,15,8.9\n2013-05-15,16,7.8\n2013-05-15,17,7.5\n2013-05-15,18,7.5\n2013-05-15,19,7.5\n2013-05-15,20,7.5\n2013-05-15,21,7.3\n2013-05-15,22,7.1\n2013-05-15,23,7.1\n2013-05-16,0,7.2\n2013-05-16,1,7.0\n2013-05-16,2,7.0\n2013-05-16,3,7.9\n2013-05-16,4,8.9\n2013-05-16,5,8.1\n2013-05-16,6,7.2\n2013-05-16,7,7.9\n2013-05-16,8,9.3\n2013-05-16,9,10.9\n2013-05-16,10,12.0\n2013-05-16,11,12.9\n2013-05-16,12,14.7\n2013-05-16,13,15.4\n2013-05-16,14,16.1\n2013-05-16,15,15.7\n2013-05-16,16,16.2\n2013-05-16,17,15.4\n2013-05-16,18,14.7\n2013-05-16,19,14.5\n2013-05-16,20,13.9\n2013-05-16,21,12.8\n2013-05-16,22,12.3\n2013-05-16,23,12.0\n2013-05-17,0,11.0\n2013-05-17,1,10.1\n2013-05-17,2,9.4\n2013-05-17,3,9.2\n2013-05-17,4,8.8\n2013-05-17,5,8.3\n2013-05-17,6,9.0\n2013-05-17,7,10.5\n2013-05-17,8,13.0\n2013-05-17,9,16.2\n2013-05-17,10,17.7\n2013-05-17,11,17.4\n2013-05-17,12,17.9\n2013-05-17,13,18.4\n2013-05-17,14,19.0\n2013-05-17,15,19.5\n2013-05-17,16,19.5\n2013-05-17,17,18.8\n2013-05-17,18,18.5\n2013-05-17,19,18.1\n2013-05-17,20,17.3\n2013-05-17,21,16.3\n2013-05-17,22,14.5\n2013-05-17,23,13.3\n2013-05-18,0,12.6\n2013-05-18,1,12.2\n2013-05-18,2,11.9\n2013-05-18,3,11.6\n2013-05-18,4,11.2\n2013-05-18,5,11.0\n2013-05-18,6,11.0\n2013-05-18,7,11.7\n2013-05-18,8,12.7\n2013-05-18,9,13.4\n2013-05-18,10,14.0\n2013-05-18,11,15.1\n2013-05-18,12,16.9\n2013-05-18,13,18.0\n2013-05-18,14,19.3\n2013-05-18,15,21.9\n2013-05-18,16,22.1\n2013-05-18,17,22.4\n2013-05-18,18,22.2\n2013-05-18,19,21.4\n2013-05-18,20,20.8\n2013-05-18,21,17.7\n2013-05-18,22,15.6\n2013-05-18,23,14.2\n2013-05-19,0,13.2\n2013-05-19,1,12.1\n2013-05-19,2,11.7\n2013-05-19,3,11.6\n2013-05-19,4,10.9\n2013-05-19,5,10.3\n2013-05-19,6,10.3\n2013-05-19,7,10.6\n2013-05-19,8,12.3\n2013-05-19,9,14.0\n2013-05-19,10,14.8\n2013-05-19,11,17.0\n2013-05-19,12,18.5\n2013-05-19,13,19.4\n2013-05-19,14,20.8\n2013-05-19,15,23.2\n2013-05-19,16,23.1\n2013-05-19,17,24.0\n2013-05-19,18,24.0\n2013-05-19,19,23.5\n2013-05-19,20,22.5\n2013-05-19,21,18.6\n2013-05-19,22,16.1\n2013-05-19,23,14.8\n2013-05-20,0,13.2\n2013-05-20,1,12.7\n2013-05-20,2,11.7\n2013-05-20,3,11.6\n2013-05-20,4,11.1\n2013-05-20,5,9.9\n2013-05-20,6,10.3\n2013-05-20,7,10.7\n2013-05-20,8,12.1\n2013-05-20,9,14.6\n2013-05-20,10,14.4\n2013-05-20,11,16.4\n2013-05-20,12,16.7\n2013-05-20,13,16.7\n2013-05-20,14,16.9\n2013-05-20,15,17.6\n2013-05-20,16,19.2\n2013-05-20,17,18.2\n2013-05-20,18,18.4\n2013-05-20,19,18.5\n2013-05-20,20,17.6\n2013-05-20,21,17.0\n2013-05-20,22,16.3\n2013-05-20,23,14.2\n2013-05-21,0,13.5\n2013-05-21,1,13.3\n2013-05-21,2,12.6\n2013-05-21,3,12.1\n2013-05-21,4,11.6\n2013-05-21,5,11.0\n2013-05-21,6,11.3\n2013-05-21,7,11.4\n2013-05-21,8,12.3\n2013-05-21,9,13.3\n2013-05-21,10,12.6\n2013-05-21,11,13.1\n2013-05-21,12,13.2\n2013-05-21,13,12.7\n2013-05-21,14,14.2\n2013-05-21,15,14.8\n2013-05-21,16,14.3\n2013-05-21,17,13.7\n2013-05-21,18,13.5\n2013-05-21,19,12.3\n2013-05-21,20,10.5\n2013-05-21,21,9.5\n2013-05-21,22,9.0\n2013-05-21,23,8.8\n2013-05-22,0,8.7\n2013-05-22,1,8.6\n2013-05-22,2,8.4\n2013-05-22,3,8.2\n2013-05-22,4,8.0\n2013-05-22,5,8.5\n2013-05-22,6,8.3\n2013-05-22,7,8.1\n2013-05-22,8,7.9\n2013-05-22,9,7.8\n2013-05-22,10,7.9\n2013-05-22,11,8.3\n2013-05-22,12,8.9\n2013-05-22,13,9.3\n2013-05-22,14,9.4\n2013-05-22,15,9.3\n2013-05-22,16,9.6\n2013-05-22,17,9.1\n2013-05-22,18,8.2\n2013-05-22,20,7.8\n2013-05-22,21,7.4\n2013-05-22,19,7.8\n2013-05-22,22,7.1\n2013-05-22,23,6.7\n2013-05-23,0,6.3\n2013-05-23,1,6.1\n2013-05-23,2,6.0\n2013-05-23,3,5.6\n2013-05-23,4,5.7\n2013-05-23,5,5.5\n2013-05-23,6,5.4\n2013-05-23,7,5.9\n2013-05-23,8,6.7\n2013-05-23,9,8.0\n2013-05-23,10,10.4\n2013-05-23,11,11.0\n2013-05-23,12,11.8\n2013-05-23,13,13.7\n2013-05-23,14,15.3\n2013-05-23,15,15.7\n2013-05-23,16,16.3\n2013-05-23,17,16.8\n2013-05-23,18,16.6\n2013-05-23,19,15.8\n2013-05-23,20,14.5\n2013-05-23,21,13.3\n2013-05-23,22,12.3\n2013-05-23,23,12.3\n2013-05-24,0,11.9\n2013-05-24,1,9.8\n2013-05-24,2,8.6\n2013-05-24,3,8.7\n2013-05-24,4,8.7\n2013-05-24,5,9.1\n2013-05-24,6,9.3\n2013-05-24,7,9.7\n2013-05-24,8,11.0\n2013-05-24,9,11.4\n2013-05-24,10,12.0\n2013-05-24,11,12.4\n2013-05-24,12,13.2\n2013-05-24,13,14.2\n2013-05-24,14,14.8\n2013-05-24,15,15.6\n2013-05-24,16,16.1\n2013-05-24,17,15.8\n2013-05-24,18,16.6\n2013-05-24,19,16.1\n2013-05-24,20,16.1\n2013-05-24,21,13.3\n2013-05-24,22,10.9\n2013-05-24,23,8.8\n2013-05-25,0,7.6\n2013-05-25,1,5.9\n2013-05-25,2,5.6\n2013-05-25,3,5.2\n2013-05-25,4,4.2\n2013-05-25,5,4.2\n2013-05-25,6,4.4\n2013-05-25,7,5.1\n2013-05-25,8,7.7\n2013-05-25,9,9.7\n2013-05-25,10,11.2\n2013-05-25,11,12.2\n2013-05-25,12,13.2\n2013-05-25,13,14.4\n2013-05-25,14,15.3\n2013-05-25,15,15.9\n2013-05-25,16,15.8\n2013-05-25,17,16.0\n2013-05-25,18,17.9\n2013-05-25,19,17.3\n2013-05-25,20,16.2\n2013-05-25,21,13.0\n2013-05-25,22,11.9\n2013-05-25,23,10.0\n2013-05-26,0,9.0\n2013-05-26,1,8.6\n2013-05-26,2,7.3\n2013-05-26,3,6.8\n2013-05-26,4,6.2\n2013-05-26,5,6.1\n2013-05-26,6,5.9\n2013-05-26,7,6.8\n2013-05-26,8,9.2\n2013-05-26,9,10.7\n2013-05-26,10,11.2\n2013-05-26,11,12.0\n2013-05-26,12,13.5\n2013-05-26,13,14.2\n2013-05-26,14,14.7\n2013-05-26,15,15.6\n2013-05-26,16,16.1\n2013-05-26,17,17.0\n2013-05-26,18,17.1\n2013-05-26,19,16.7\n2013-05-26,20,16.1\n2013-05-26,21,13.8\n2013-05-26,22,11.7\n2013-05-26,23,10.4\n2013-05-27,0,9.8\n2013-05-27,1,10.3\n2013-05-27,2,9.7\n2013-05-27,3,8.9\n2013-05-27,4,8.2\n2013-05-27,5,8.0\n2013-05-27,6,8.0\n2013-05-27,7,8.7\n2013-05-27,8,11.0\n2013-05-27,9,12.6\n2013-05-27,10,14.3\n2013-05-27,11,17.8\n2013-05-27,12,18.8\n2013-05-27,13,18.4\n2013-05-27,14,17.4\n2013-05-27,15,16.4\n2013-05-27,16,15.8\n2013-05-27,17,16.6\n2013-05-27,18,16.2\n2013-05-27,19,14.6\n2013-05-27,20,14.2\n2013-05-27,21,12.3\n2013-05-27,22,11.3\n2013-05-27,23,10.5\n2013-05-28,0,9.4\n2013-05-28,1,8.2\n2013-05-28,2,8.6\n2013-05-28,3,7.9\n2013-05-28,4,7.0\n2013-05-28,5,6.8\n2013-05-28,6,7.1\n2013-05-28,7,7.5\n2013-05-28,8,11.5\n2013-05-28,9,13.9\n2013-05-28,10,15.4\n2013-05-28,11,16.5\n2013-05-28,12,19.5\n2013-05-28,13,18.6\n2013-05-28,14,18.3\n2013-05-28,15,17.2\n2013-05-28,16,16.3\n2013-05-28,17,14.8\n2013-05-28,18,14.6\n2013-05-28,19,14.8\n2013-05-28,20,16.0\n2013-05-28,21,14.7\n2013-05-28,22,13.3\n2013-05-28,23,11.3\n2013-05-29,0,10.3\n2013-05-29,1,9.8\n2013-05-29,2,9.6\n2013-05-29,3,9.4\n2013-05-29,4,9.8\n2013-05-29,5,10.3\n2013-05-29,6,9.8\n2013-05-29,7,9.6\n2013-05-29,8,12.9\n2013-05-29,9,15.2\n2013-05-29,10,15.8\n2013-05-29,11,16.5\n2013-05-29,12,19.7\n2013-05-29,13,21.4\n2013-05-29,14,21.8\n2013-05-29,15,22.6\n2013-05-29,16,22.3\n2013-05-29,17,23.1\n2013-05-29,18,23.0\n2013-05-29,19,22.6\n2013-05-29,20,21.3\n2013-05-29,21,20.5\n2013-05-29,22,19.0\n2013-05-29,23,17.6\n2013-05-30,0,16.7\n2013-05-30,1,15.3\n2013-05-30,2,15.4\n2013-05-30,3,15.7\n2013-05-30,4,15.7\n2013-05-30,5,14.6\n2013-05-30,6,14.3\n2013-05-30,7,14.9\n2013-05-30,8,15.8\n2013-05-30,9,16.3\n2013-05-30,10,17.4\n2013-05-30,11,17.9\n2013-05-30,12,17.7\n2013-05-30,13,17.8\n2013-05-30,14,19.0\n2013-05-30,15,19.4\n2013-05-30,16,19.2\n2013-05-30,17,21.7\n2013-05-30,18,22.0\n2013-05-30,19,21.0\n2013-05-30,20,18.9\n2013-05-30,21,17.7\n2013-05-30,22,16.8\n2013-05-30,23,14.7\n2013-05-31,0,14.2\n2013-05-31,1,14.1\n2013-05-31,2,13.9\n2013-05-31,3,14.0\n2013-05-31,4,13.4\n2013-05-31,5,13.3\n2013-05-31,6,13.3\n2013-05-31,7,13.4\n2013-05-31,8,13.5\n2013-05-31,9,14.3\n2013-05-31,10,16.0\n2013-05-31,11,17.4\n2013-05-31,12,17.9\n2013-05-31,13,19.2\n2013-05-31,14,20.9\n2013-05-31,15,21.5\n2013-05-31,16,22.2\n2013-05-31,17,19.0\n2013-05-31,18,18.0\n2013-05-31,19,18.9\n2013-05-31,20,17.8\n2013-05-31,21,16.9\n2013-05-31,22,16.1\n2013-05-31,23,14.5\n2013-06-01,0,13.7\n2013-06-01,1,13.4\n2013-06-01,2,13.5\n2013-06-01,3,13.4\n2013-06-01,4,13.4\n2013-06-01,5,13.3\n2013-06-01,6,13.0\n2013-06-01,7,12.9\n2013-06-01,8,13.0\n2013-06-01,9,12.9\n2013-06-01,10,12.6\n2013-06-01,11,12.8\n2013-06-01,12,13.6\n2013-06-01,13,14.1\n2013-06-01,14,14.5\n2013-06-01,15,14.2\n2013-06-01,16,13.5\n2013-06-01,17,13.1\n2013-06-01,18,12.8\n2013-06-01,19,12.7\n2013-06-01,20,12.3\n2013-06-01,21,12.1\n2013-06-01,22,11.9\n2013-06-01,23,11.6\n2013-06-02,0,11.2\n2013-06-02,1,10.9\n2013-06-02,2,10.7\n2013-06-02,3,10.7\n2013-06-02,4,10.5\n2013-06-02,5,10.4\n2013-06-02,6,10.3\n2013-06-02,7,10.0\n2013-06-02,8,10.3\n2013-06-02,9,10.4\n2013-06-02,10,11.1\n2013-06-02,11,10.9\n2013-06-02,12,10.7\n2013-06-02,13,11.0\n2013-06-02,14,11.0\n2013-06-02,15,10.9\n2013-06-02,16,10.4\n2013-06-02,17,10.2\n2013-06-02,18,9.8\n2013-06-02,19,9.6\n2013-06-02,20,9.8\n2013-06-02,21,9.8\n2013-06-02,22,9.8\n2013-06-02,23,9.6\n2013-06-03,0,9.4\n2013-06-03,1,9.4\n2013-06-03,2,9.2\n2013-06-03,3,9.2\n2013-06-03,4,8.9\n2013-06-03,5,8.7\n2013-06-03,6,8.6\n2013-06-03,7,8.6\n2013-06-03,8,9.5\n2013-06-03,9,10.5\n2013-06-03,10,11.6\n2013-06-03,11,13.0\n2013-06-03,12,13.9\n2013-06-03,13,14.2\n2013-06-03,14,13.9\n2013-06-03,15,14.5\n2013-06-03,16,13.9\n2013-06-03,17,15.4\n2013-06-03,18,14.9\n2013-06-03,19,14.4\n2013-06-03,20,13.2\n2013-06-03,21,12.4\n2013-06-03,22,11.6\n2013-06-03,23,8.7\n2013-06-04,0,7.6\n2013-06-04,1,5.9\n2013-06-04,2,5.7\n2013-06-04,3,4.7\n2013-06-04,4,4.2\n2013-06-04,5,3.8\n2013-06-04,6,4.5\n2013-06-04,7,5.1\n2013-06-04,8,8.8\n2013-06-04,9,10.5\n2013-06-04,10,12.1\n2013-06-04,11,12.6\n2013-06-04,12,13.8\n2013-06-04,13,14.9\n2013-06-04,14,16.4\n2013-06-04,15,17.3\n2013-06-04,16,17.7\n2013-06-04,17,18.4\n2013-06-04,18,18.5\n2013-06-04,19,18.2\n2013-06-04,20,17.5\n2013-06-04,21,14.8\n2013-06-04,22,13.0\n2013-06-04,23,10.5\n2013-06-05,0,9.7\n2013-06-05,1,7.9\n2013-06-05,2,7.0\n2013-06-05,3,6.8\n2013-06-05,4,5.8\n2013-06-05,5,6.2\n2013-06-05,6,7.8\n2013-06-05,7,9.5\n2013-06-05,8,11.2\n2013-06-05,9,12.9\n2013-06-05,10,14.3\n2013-06-05,11,14.3\n2013-06-05,12,15.1\n2013-06-05,13,16.1\n2013-06-05,14,15.9\n2013-06-05,15,15.3\n2013-06-05,16,15.0\n2013-06-05,17,16.2\n2013-06-05,18,15.0\n2013-06-05,19,14.0\n2013-06-05,20,13.3\n2013-06-05,21,12.7\n2013-06-05,22,11.3\n2013-06-05,23,10.4\n2013-06-06,0,9.6\n2013-06-06,1,10.8\n2013-06-06,2,9.6\n2013-06-06,3,8.8\n2013-06-06,4,8.7\n2013-06-06,5,8.6\n2013-06-06,6,7.8\n2013-06-06,7,8.5\n2013-06-06,8,9.3\n2013-06-06,9,10.2\n2013-06-06,10,11.5\n2013-06-06,11,11.5\n2013-06-06,12,11.7\n2013-06-06,13,11.2\n2013-06-06,14,11.2\n2013-06-06,15,10.9\n2013-06-06,16,11.1\n2013-06-06,17,11.4\n2013-06-06,18,11.7\n2013-06-06,19,12.2\n2013-06-06,20,11.9\n2013-06-06,21,11.2\n2013-06-06,22,10.3\n2013-06-06,23,9.6\n2013-06-07,0,8.8\n2013-06-07,1,8.4\n2013-06-07,2,7.0\n2013-06-07,3,6.1\n2013-06-07,4,5.8\n2013-06-07,5,6.8\n2013-06-07,6,7.9\n2013-06-07,7,8.5\n2013-06-07,8,9.7\n2013-06-07,9,10.1\n2013-06-07,10,10.7\n2013-06-07,11,11.7\n2013-06-07,12,12.0\n2013-06-07,13,12.0\n2013-06-07,14,12.7\n2013-06-07,15,13.8\n2013-06-07,16,14.1\n2013-06-07,17,14.1\n2013-06-07,18,14.4\n2013-06-07,19,14.5\n2013-06-07,20,13.5\n2013-06-07,21,12.3\n2013-06-07,22,11.7\n2013-06-07,23,10.8\n2013-06-08,0,10.1\n2013-06-08,1,9.5\n2013-06-08,2,9.4\n2013-06-08,3,9.7\n2013-06-08,4,9.3\n2013-06-08,5,9.3\n2013-06-08,6,9.3\n2013-06-08,7,9.4\n2013-06-08,8,9.4\n2013-06-08,9,9.5\n2013-06-08,10,9.5\n2013-06-08,11,9.8\n2013-06-08,12,10.5\n2013-06-08,13,10.9\n2013-06-08,14,11.4\n2013-06-08,15,12.4\n2013-06-08,16,13.1\n2013-06-08,17,12.9\n2013-06-08,18,13.3\n2013-06-08,19,12.2\n2013-06-08,20,11.2\n2013-06-08,21,11.5\n2013-06-08,22,11.1\n2013-06-08,23,10.5\n2013-06-09,0,10.1\n2013-06-09,1,9.0\n2013-06-09,2,8.1\n2013-06-09,3,7.1\n2013-06-09,4,5.9\n2013-06-09,5,5.5\n2013-06-09,6,5.3\n2013-06-09,7,6.1\n2013-06-09,8,9.1\n2013-06-09,9,11.5\n2013-06-09,10,12.1\n2013-06-09,11,12.1\n2013-06-09,12,13.2\n2013-06-09,13,14.2\n2013-06-09,14,16.0\n2013-06-09,15,16.6\n2013-06-09,16,16.6\n2013-06-09,17,16.4\n2013-06-09,18,16.9\n2013-06-09,19,16.8\n2013-06-09,20,16.5\n2013-06-09,21,13.6\n2013-06-09,22,10.8\n2013-06-09,23,8.3\n2013-06-10,0,7.5\n2013-06-10,1,6.2\n2013-06-10,2,6.6\n2013-06-10,3,5.7\n2013-06-10,4,5.3\n2013-06-10,5,5.0\n2013-06-10,6,5.4\n2013-06-10,7,6.4\n2013-06-10,8,10.1\n2013-06-10,9,11.8\n2013-06-10,10,13.3\n2013-06-10,11,14.5\n2013-06-10,12,15.7\n2013-06-10,13,17.6\n2013-06-10,14,18.8\n2013-06-10,15,19.3\n2013-06-10,16,20.5\n2013-06-10,17,20.9\n2013-06-10,18,21.0\n2013-06-10,19,21.7\n2013-06-10,20,20.1\n2013-06-10,21,16.1\n2013-06-10,22,11.8\n2013-06-10,23,9.7\n2013-06-11,0,8.3\n2013-06-11,1,7.6\n2013-06-11,2,7.0\n2013-06-11,3,6.8\n2013-06-11,4,6.4\n2013-06-11,5,6.6\n2013-06-11,6,6.6\n2013-06-11,7,7.4\n2013-06-11,8,12.0\n2013-06-11,9,13.7\n2013-06-11,10,14.9\n2013-06-11,11,16.5\n2013-06-11,12,17.7\n2013-06-11,13,19.0\n2013-06-11,14,19.9\n2013-06-11,15,20.1\n2013-06-11,16,22.2\n2013-06-11,17,23.5\n2013-06-11,18,22.2\n2013-06-11,19,20.7\n2013-06-11,20,19.6\n2013-06-11,21,18.2\n2013-06-11,22,17.5\n2013-06-11,23,15.5\n2013-06-12,0,11.4\n2013-06-12,1,10.7\n2013-06-12,2,8.3\n2013-06-12,3,8.1\n2013-06-12,4,7.5\n2013-06-12,5,7.9\n2013-06-12,6,9.8\n2013-06-12,7,11.2\n2013-06-12,8,11.9\n2013-06-12,9,13.1\n2013-06-12,10,13.8\n2013-06-12,11,15.7\n2013-06-12,12,16.5\n2013-06-12,13,17.4\n2013-06-12,14,18.0\n2013-06-12,15,18.9\n2013-06-12,16,18.3\n2013-06-12,17,17.8\n2013-06-12,18,16.9\n2013-06-12,19,16.5\n2013-06-12,20,17.2\n2013-06-12,21,15.5\n2013-06-12,22,14.3\n2013-06-12,23,13.4\n2013-06-13,0,12.8\n2013-06-13,1,12.7\n2013-06-13,2,12.5\n2013-06-13,3,12.3\n2013-06-13,4,12.3\n2013-06-13,5,12.2\n2013-06-13,6,12.3\n2013-06-13,7,13.0\n2013-06-13,8,14.6\n2013-06-13,9,15.1\n2013-06-13,10,14.8\n2013-06-13,11,14.0\n2013-06-13,12,13.8\n2013-06-13,13,15.0\n2013-06-13,14,15.7\n2013-06-13,15,15.2\n2013-06-13,16,15.3\n2013-06-13,17,15.0\n2013-06-13,18,14.3\n2013-06-13,19,14.1\n2013-06-13,20,14.0\n2013-06-13,21,13.8\n2013-06-13,22,13.3\n2013-06-13,23,12.8\n2013-06-14,0,12.2\n2013-06-14,1,12.4\n2013-06-14,2,11.9\n2013-06-14,3,11.5\n2013-06-14,4,11.0\n2013-06-14,5,10.3\n2013-06-14,6,10.3\n2013-06-14,7,10.8\n2013-06-14,8,11.9\n2013-06-14,9,12.1\n2013-06-14,10,12.9\n2013-06-14,11,13.4\n2013-06-14,12,13.9\n2013-06-14,13,14.2\n2013-06-14,14,14.4\n2013-06-14,15,15.0\n2013-06-14,16,14.0\n2013-06-14,17,15.0\n2013-06-14,18,13.9\n2013-06-14,19,12.7\n2013-06-14,20,12.8\n2013-06-14,21,12.7\n2013-06-14,22,12.0\n2013-06-14,23,10.9\n2013-06-15,0,10.5\n2013-06-15,1,10.1\n2013-06-15,2,9.6\n2013-06-15,3,9.6\n2013-06-15,4,9.7\n2013-06-15,5,9.4\n2013-06-15,6,9.0\n2013-06-15,7,9.3\n2013-06-15,8,9.9\n2013-06-15,9,12.0\n2013-06-15,10,12.6\n2013-06-15,11,14.0\n2013-06-15,12,15.2\n2013-06-15,13,16.0\n2013-06-15,14,16.5\n2013-06-15,15,17.4\n2013-06-15,16,17.5\n2013-06-15,17,17.8\n2013-06-15,18,17.6\n2013-06-15,19,16.8\n2013-06-15,20,17.3\n2013-06-15,21,15.1\n2013-06-15,22,13.9\n2013-06-15,23,10.8\n2013-06-16,0,10.9\n2013-06-16,1,10.7\n2013-06-16,2,10.4\n2013-06-16,3,9.6\n2013-06-16,4,9.2\n2013-06-16,5,9.9\n2013-06-16,6,10.3\n2013-06-16,7,11.2\n2013-06-16,8,12.8\n2013-06-16,9,14.2\n2013-06-16,10,14.1\n2013-06-16,11,15.6\n2013-06-16,12,17.2\n2013-06-16,13,17.6\n2013-06-16,14,17.8\n2013-06-16,15,17.5\n2013-06-16,16,18.4\n2013-06-16,17,19.6\n2013-06-16,18,16.9\n2013-06-16,19,15.6\n2013-06-16,20,16.2\n2013-06-16,21,13.5\n2013-06-16,22,14.6\n2013-06-16,23,13.6\n2013-06-17,0,12.2\n2013-06-17,1,12.1\n2013-06-17,2,12.0\n2013-06-17,3,11.8\n2013-06-17,4,11.6\n2013-06-17,5,11.1\n2013-06-17,6,11.3\n2013-06-17,7,11.8\n2013-06-17,8,12.2\n2013-06-17,9,12.3\n2013-06-17,10,12.6\n2013-06-17,11,13.0\n2013-06-17,12,13.7\n2013-06-17,13,14.4\n2013-06-17,14,14.9\n2013-06-17,15,16.4\n2013-06-17,16,15.4\n2013-06-17,17,15.0\n2013-06-17,18,14.8\n2013-06-17,19,14.1\n2013-06-17,20,13.1\n2013-06-17,21,12.1\n2013-06-17,22,11.7\n2013-06-17,23,10.0\n2013-06-18,0,9.8\n2013-06-18,1,9.7\n2013-06-18,2,9.6\n2013-06-18,3,9.2\n2013-06-18,4,8.9\n2013-06-18,5,7.8\n2013-06-18,6,8.6\n2013-06-18,7,9.1\n2013-06-18,8,11.2\n2013-06-18,9,12.6\n2013-06-18,10,14.1\n2013-06-18,11,14.7\n2013-06-18,12,15.4\n2013-06-18,13,16.2\n2013-06-18,14,17.2\n2013-06-18,15,17.4\n2013-06-18,16,17.8\n2013-06-18,17,17.9\n2013-06-18,18,18.0\n2013-06-18,19,17.7\n2013-06-18,20,17.2\n2013-06-18,21,15.7\n2013-06-18,22,14.2\n2013-06-18,23,14.0\n2013-06-19,0,12.5\n2013-06-19,1,12.3\n2013-06-19,2,11.8\n2013-06-19,3,11.6\n2013-06-19,4,11.6\n2013-06-19,5,11.4\n2013-06-19,6,11.6\n2013-06-19,7,12.8\n2013-06-19,8,13.8\n2013-06-19,9,14.5\n2013-06-19,10,16.2\n2013-06-19,11,16.0\n2013-06-19,12,17.2\n2013-06-19,13,17.0\n2013-06-19,14,18.3\n2013-06-19,15,18.0\n2013-06-19,16,18.1\n2013-06-19,17,18.5\n2013-06-19,18,19.0\n2013-06-19,19,17.3\n2013-06-19,20,16.1\n2013-06-19,21,15.3\n2013-06-19,22,14.1\n2013-06-19,23,12.9\n2013-06-20,0,12.4\n2013-06-20,1,12.4\n2013-06-20,2,12.2\n2013-06-20,3,12.1\n2013-06-20,4,11.9\n2013-06-20,5,12.1\n2013-06-20,6,12.2\n2013-06-20,7,12.4\n2013-06-20,8,12.6\n2013-06-20,9,13.1\n2013-06-20,10,14.6\n2013-06-20,11,14.3\n2013-06-20,12,15.4\n2013-06-20,13,16.3\n2013-06-20,14,16.4\n2013-06-20,15,17.6\n2013-06-20,16,18.8\n2013-06-20,17,19.0\n2013-06-20,18,19.3\n2013-06-20,19,18.7\n2013-06-20,20,18.6\n2013-06-20,21,15.3\n2013-06-20,22,12.6\n2013-06-20,23,10.8\n2013-06-21,0,9.5\n2013-06-21,1,8.0\n2013-06-21,2,7.6\n2013-06-21,3,7.9\n2013-06-21,4,7.6\n2013-06-21,5,8.0\n2013-06-21,6,8.4\n2013-06-21,7,10.6\n2013-06-21,8,12.4\n2013-06-21,9,13.6\n2013-06-21,10,14.2\n2013-06-21,11,14.2\n2013-06-21,12,13.6\n2013-06-21,13,13.5\n2013-06-21,14,13.5\n2013-06-21,15,13.6\n2013-06-21,16,13.3\n2013-06-21,17,13.4\n2013-06-21,18,13.6\n2013-06-21,19,13.8\n2013-06-21,20,13.6\n2013-06-21,21,13.5\n2013-06-21,22,13.4\n2013-06-21,23,13.2\n2013-06-22,0,13.2\n2013-06-22,1,13.0\n2013-06-22,2,12.9\n2013-06-22,3,12.6\n2013-06-22,4,12.5\n2013-06-22,5,12.3\n2013-06-22,6,12.5\n2013-06-22,7,12.7\n2013-06-22,8,13.0\n2013-06-22,9,13.3\n2013-06-22,10,13.4\n2013-06-22,11,13.7\n2013-06-22,12,14.4\n2013-06-22,13,15.5\n2013-06-22,14,15.5\n2013-06-22,15,15.8\n2013-06-22,16,16.1\n2013-06-22,17,17.1\n2013-06-22,18,15.7\n2013-06-22,19,15.3\n2013-06-22,20,15.1\n2013-06-22,21,14.5\n2013-06-22,22,14.3\n2013-06-22,23,13.6\n2013-06-23,0,13.3\n2013-06-23,1,13.2\n2013-06-23,2,13.0\n2013-06-23,3,12.9\n2013-06-23,4,12.8\n2013-06-23,5,12.6\n2013-06-23,6,12.5\n2013-06-23,7,12.7\n2013-06-23,8,13.4\n2013-06-23,9,14.5\n2013-06-23,10,15.2\n2013-06-23,11,15.7\n2013-06-23,12,15.7\n2013-06-23,13,16.1\n2013-06-23,14,17.4\n2013-06-23,15,17.4\n2013-06-23,16,17.7\n2013-06-23,17,17.5\n2013-06-23,18,17.3\n2013-06-23,19,17.8\n2013-06-23,20,16.8\n2013-06-23,21,15.6\n2013-06-23,22,13.7\n2013-06-23,23,13.0\n2013-06-24,0,13.0\n2013-06-24,1,12.8\n2013-06-24,2,12.5\n2013-06-24,3,12.2\n2013-06-24,4,12.1\n2013-06-24,5,11.8\n2013-06-24,6,11.7\n2013-06-24,7,12.1\n2013-06-24,8,12.9\n2013-06-24,9,13.4\n2013-06-24,10,14.6\n2013-06-24,11,15.0\n2013-06-24,12,15.7\n2013-06-24,13,17.6\n2013-06-24,14,17.0\n2013-06-24,15,17.2\n2013-06-24,16,16.6\n2013-06-24,17,14.3\n2013-06-24,18,13.1\n2013-06-24,19,13.0\n2013-06-24,20,12.8\n2013-06-24,21,12.8\n2013-06-24,22,12.2\n2013-06-24,23,11.7\n2013-06-25,0,11.3\n2013-06-25,1,11.0\n2013-06-25,2,10.9\n2013-06-25,3,10.8\n2013-06-25,4,10.9\n2013-06-25,5,10.8\n2013-06-25,6,11.1\n2013-06-25,7,11.3\n2013-06-25,8,12.1\n2013-06-25,9,12.8\n2013-06-25,10,13.5\n2013-06-25,11,14.0\n2013-06-25,12,14.1\n2013-06-25,13,14.8\n2013-06-25,14,14.2\n2013-06-25,15,14.7\n2013-06-25,16,14.4\n2013-06-25,17,14.2\n2013-06-25,18,13.8\n2013-06-25,19,13.5\n2013-06-25,20,13.2\n2013-06-25,21,13.0\n2013-06-25,22,12.8\n2013-06-25,23,12.7\n2013-06-26,0,12.3\n2013-06-26,1,12.2\n2013-06-26,2,12.4\n2013-06-26,3,11.8\n2013-06-26,4,11.8\n2013-06-26,5,11.5\n2013-06-26,6,11.4\n2013-06-26,7,11.8\n2013-06-26,8,12.3\n2013-06-26,9,12.7\n2013-06-26,10,12.9\n2013-06-26,11,13.2\n2013-06-26,12,13.8\n2013-06-26,13,14.6\n2013-06-26,14,15.1\n2013-06-26,15,15.2\n2013-06-26,16,15.6\n2013-06-26,17,16.7\n2013-06-26,18,17.2\n2013-06-26,19,15.8\n2013-06-26,20,15.8\n2013-06-26,21,15.5\n2013-06-26,22,14.3\n2013-06-26,23,13.8\n2013-06-27,0,13.1\n2013-06-27,1,12.7\n2013-06-27,2,12.6\n2013-06-27,3,12.4\n2013-06-27,4,12.3\n2013-06-27,5,12.3\n2013-06-27,6,12.5\n2013-06-27,7,13.2\n2013-06-27,8,13.8\n2013-06-27,9,16.3\n2013-06-27,10,15.9\n2013-06-27,11,16.1\n2013-06-27,12,16.8\n2013-06-27,13,19.5\n2013-06-27,14,20.9\n2013-06-27,15,23.7\n2013-06-27,16,23.2\n2013-06-27,17,23.9\n2013-06-27,18,24.4\n2013-06-27,19,24.2\n2013-06-27,20,22.9\n2013-06-27,21,21.0\n2013-06-27,22,19.8\n2013-06-27,23,18.3\n2013-06-28,0,17.7\n2013-06-28,1,16.1\n2013-06-28,2,15.6\n2013-06-28,3,15.4\n2013-06-28,4,15.4\n2013-06-28,5,15.4\n2013-06-28,6,15.2\n2013-06-28,7,15.5\n2013-06-28,8,15.8\n2013-06-28,9,15.5\n2013-06-28,10,16.5\n2013-06-28,11,17.2\n2013-06-28,12,17.0\n2013-06-28,13,17.3\n2013-06-28,14,16.7\n2013-06-28,15,16.9\n2013-06-28,16,18.1\n2013-06-28,17,18.8\n2013-06-28,18,17.5\n2013-06-28,19,15.0\n2013-06-28,20,14.2\n2013-06-28,21,13.9\n2013-06-28,22,13.5\n2013-06-28,23,12.0\n2013-06-29,0,11.4\n2013-06-29,1,11.2\n2013-06-29,2,11.7\n2013-06-29,3,12.3\n2013-06-29,4,11.1\n2013-06-29,5,11.0\n2013-06-29,6,11.2\n2013-06-29,7,9.5\n2013-06-29,8,8.5\n2013-06-29,9,8.7\n2013-06-29,10,9.3\n2013-06-29,11,9.5\n2013-06-29,12,10.1\n2013-06-29,13,10.6\n2013-06-29,14,11.5\n2013-06-29,15,11.5\n2013-06-29,16,11.9\n2013-06-29,17,11.8\n2013-06-29,18,11.7\n2013-06-29,19,12.2\n2013-06-29,20,12.8\n2013-06-29,21,12.5\n2013-06-29,22,12.3\n2013-06-29,23,12.1\n2013-06-30,0,11.4\n2013-06-30,1,10.0\n2013-06-30,2,10.2\n2013-06-30,3,10.3\n2013-06-30,4,10.2\n2013-06-30,5,9.8\n2013-06-30,6,9.9\n2013-06-30,7,9.8\n2013-06-30,8,11.3\n2013-06-30,9,12.2\n2013-06-30,10,13.6\n2013-06-30,11,13.7\n2013-06-30,12,14.4\n2013-06-30,13,15.3\n2013-06-30,14,15.9\n2013-06-30,15,17.4\n2013-06-30,16,18.0\n2013-06-30,17,17.5\n2013-06-30,18,17.4\n2013-06-30,19,17.5\n2013-06-30,20,17.2\n2013-06-30,21,15.2\n2013-06-30,22,13.8\n2013-06-30,23,12.4\n2013-07-01,0,10.1\n2013-07-01,1,9.5\n2013-07-01,2,9.0\n2013-07-01,3,9.0\n2013-07-01,4,9.4\n2013-07-01,5,9.9\n2013-07-01,6,10.6\n2013-07-01,7,11.1\n2013-07-01,8,11.9\n2013-07-01,9,12.0\n2013-07-01,10,12.8\n2013-07-01,11,14.0\n2013-07-01,12,14.7\n2013-07-01,13,16.1\n2013-07-01,14,16.4\n2013-07-01,15,15.3\n2013-07-01,16,14.0\n2013-07-01,17,12.3\n2013-07-01,18,11.2\n2013-07-01,19,11.2\n2013-07-01,20,11.2\n2013-07-01,21,11.4\n2013-07-01,22,11.5\n2013-07-01,23,11.0\n2013-07-02,0,10.8\n2013-07-02,1,10.7\n2013-07-02,2,10.7\n2013-07-02,3,10.9\n2013-07-02,4,10.3\n2013-07-02,5,10.0\n2013-07-02,6,10.1\n2013-07-02,7,10.5\n2013-07-02,8,11.6\n2013-07-02,9,11.7\n2013-07-02,10,13.6\n2013-07-02,11,13.3\n2013-07-02,12,13.9\n2013-07-02,13,15.0\n2013-07-02,14,15.0\n2013-07-02,15,15.2\n2013-07-02,16,15.8\n2013-07-02,17,14.6\n2013-07-02,18,14.1\n2013-07-02,19,14.4\n2013-07-02,20,14.7\n2013-07-02,21,13.8\n2013-07-02,22,13.5\n2013-07-02,23,12.6\n2013-07-03,0,11.6\n2013-07-03,1,11.3\n2013-07-03,2,9.3\n2013-07-03,3,8.4\n2013-07-03,4,7.1\n2013-07-03,5,6.1\n2013-07-03,6,6.6\n2013-07-03,7,8.1\n2013-07-03,8,10.1\n2013-07-03,9,11.7\n2013-07-03,10,12.2\n2013-07-03,11,12.6\n2013-07-03,12,12.9\n2013-07-03,13,13.1\n2013-07-03,14,13.6\n2013-07-03,15,13.5\n2013-07-03,16,13.5\n2013-07-03,17,12.9\n2013-07-03,18,12.5\n2013-07-03,19,12.6\n2013-07-03,20,12.4\n2013-07-03,21,12.4\n2013-07-03,22,12.1\n2013-07-03,23,12.0\n2013-07-04,0,11.8\n2013-07-04,1,11.8\n2013-07-04,2,11.9\n2013-07-04,3,11.8\n2013-07-04,4,11.8\n2013-07-04,5,12.0\n2013-07-04,6,12.5\n2013-07-04,7,13.0\n2013-07-04,8,13.2\n2013-07-04,9,13.6\n2013-07-04,10,14.3\n2013-07-04,11,14.5\n2013-07-04,12,15.1\n2013-07-04,13,15.7\n2013-07-04,14,15.9\n2013-07-04,15,16.0\n2013-07-04,16,16.2\n2013-07-04,17,15.6\n2013-07-04,18,15.1\n2013-07-04,19,14.6\n2013-07-04,20,14.5\n2013-07-04,21,13.7\n2013-07-04,22,13.1\n2013-07-04,23,12.8\n2013-07-05,0,12.9\n2013-07-05,1,12.8\n2013-07-05,2,12.1\n2013-07-05,3,12.1\n2013-07-05,4,11.8\n2013-07-05,5,12.1\n2013-07-05,6,12.0\n2013-07-05,7,12.1\n2013-07-05,8,12.3\n2013-07-05,9,12.8\n2013-07-05,10,13.0\n2013-07-05,11,13.1\n2013-07-05,12,13.4\n2013-07-05,13,14.6\n2013-07-05,14,15.2\n2013-07-05,15,15.8\n2013-07-05,16,16.1\n2013-07-05,17,15.6\n2013-07-05,18,14.9\n2013-07-05,19,14.3\n2013-07-05,20,14.2\n2013-07-05,21,13.5\n2013-07-05,22,12.9\n2013-07-05,23,12.2\n2013-07-06,0,11.7\n2013-07-06,1,11.7\n2013-07-06,2,11.6\n2013-07-06,3,11.5\n2013-07-06,4,11.1\n2013-07-06,5,9.6\n2013-07-06,6,9.4\n2013-07-06,7,10.0\n2013-07-06,8,11.7\n2013-07-06,9,13.4\n2013-07-06,10,14.6\n2013-07-06,11,15.3\n2013-07-06,12,16.1\n2013-07-06,13,17.4\n2013-07-06,14,18.4\n2013-07-06,15,19.5\n2013-07-06,16,20.2\n2013-07-06,17,20.9\n2013-07-06,18,21.3\n2013-07-06,19,20.7\n2013-07-06,20,20.4\n2013-07-06,21,21.4\n2013-07-06,22,19.8\n2013-07-06,23,18.1\n2013-07-07,0,17.4\n2013-07-07,1,18.7\n2013-07-07,2,18.7\n2013-07-07,3,18.6\n2013-07-07,4,18.4\n2013-07-07,5,17.2\n2013-07-07,6,17.0\n2013-07-07,7,16.6\n2013-07-07,8,15.8\n2013-07-07,9,15.5\n2013-07-07,10,14.8\n2013-07-07,11,15.5\n2013-07-07,12,16.3\n2013-07-07,13,18.0\n2013-07-07,14,17.6\n2013-07-07,15,17.8\n2013-07-07,16,17.8\n2013-07-07,17,17.9\n2013-07-07,18,17.6\n2013-07-07,19,17.0\n2013-07-07,20,16.2\n2013-07-07,21,14.5\n2013-07-07,22,13.6\n2013-07-07,23,13.3\n2013-07-08,0,12.2\n2013-07-08,1,9.8\n2013-07-08,2,8.6\n2013-07-08,3,8.3\n2013-07-08,4,9.4\n2013-07-08,5,9.8\n2013-07-08,6,8.7\n2013-07-08,7,9.5\n2013-07-08,8,11.2\n2013-07-08,9,12.9\n2013-07-08,10,14.3\n2013-07-08,11,15.3\n2013-07-08,12,15.9\n2013-07-08,13,16.9\n2013-07-08,14,17.3\n2013-07-08,15,18.2\n2013-07-08,16,19.1\n2013-07-08,17,19.8\n2013-07-08,18,19.1\n2013-07-08,19,17.9\n2013-07-08,20,16.6\n2013-07-08,21,16.2\n2013-07-08,22,15.4\n2013-07-08,23,14.8\n2013-07-09,0,14.1\n2013-07-09,1,13.9\n2013-07-09,2,13.6\n2013-07-09,3,13.4\n2013-07-09,4,13.2\n2013-07-09,5,13.2\n2013-07-09,6,13.5\n2013-07-09,7,13.7\n2013-07-09,8,14.2\n2013-07-09,9,14.6\n2013-07-09,10,14.3\n2013-07-09,11,15.1\n2013-07-09,12,17.0\n2013-07-09,13,14.7\n2013-07-09,14,14.1\n2013-07-09,15,13.6\n2013-07-09,16,14.2\n2013-07-09,17,12.9\n2013-07-09,18,13.1\n2013-07-09,19,12.6\n2013-07-09,20,12.6\n2013-07-09,21,12.7\n2013-07-09,22,12.5\n2013-07-09,23,12.6\n2013-07-10,0,12.2\n2013-07-10,1,11.9\n2013-07-10,2,11.7\n2013-07-10,3,11.9\n2013-07-10,4,12.2\n2013-07-10,5,12.1\n2013-07-10,6,12.0\n2013-07-10,7,12.3\n2013-07-10,8,12.4\n2013-07-10,9,13.9\n2013-07-10,10,15.4\n2013-07-10,11,16.0\n2013-07-10,12,16.5\n2013-07-10,13,17.5\n2013-07-10,14,18.3\n2013-07-10,15,19.0\n2013-07-10,16,19.7\n2013-07-10,17,20.5\n2013-07-10,18,20.6\n2013-07-10,19,19.8\n2013-07-10,20,18.9\n2013-07-10,21,17.3\n2013-07-10,22,15.3\n2013-07-10,23,12.0\n2013-07-11,0,10.6\n2013-07-11,1,9.7\n2013-07-11,2,8.5\n2013-07-11,3,7.9\n2013-07-11,4,7.7\n2013-07-11,5,7.2\n2013-07-11,6,7.4\n2013-07-11,7,9.6\n2013-07-11,8,11.3\n2013-07-11,9,12.3\n2013-07-11,10,13.1\n2013-07-11,11,14.2\n2013-07-11,12,14.7\n2013-07-11,13,15.4\n2013-07-11,14,16.2\n2013-07-11,15,16.7\n2013-07-11,16,17.1\n2013-07-11,17,18.0\n2013-07-11,18,18.1\n2013-07-11,19,18.5\n2013-07-11,20,18.6\n2013-07-11,21,16.3\n2013-07-11,22,15.4\n2013-07-11,23,13.9\n2013-07-12,0,12.7\n2013-07-12,1,11.5\n2013-07-12,2,10.4\n2013-07-12,3,9.6\n2013-07-12,4,9.6\n2013-07-12,5,10.7\n2013-07-12,6,11.9\n2013-07-12,7,12.6\n2013-07-12,8,13.3\n2013-07-12,9,14.1\n2013-07-12,10,14.7\n2013-07-12,11,15.8\n2013-07-12,12,16.8\n2013-07-12,13,17.3\n2013-07-12,14,18.1\n2013-07-12,15,18.7\n2013-07-12,16,19.3\n2013-07-12,17,19.3\n2013-07-12,18,20.3\n2013-07-12,19,21.5\n2013-07-12,20,21.1\n2013-07-12,21,19.7\n2013-07-12,22,19.1\n2013-07-12,23,17.2\n2013-07-13,0,16.1\n2013-07-13,1,15.1\n2013-07-13,2,14.6\n2013-07-13,3,14.8\n2013-07-13,4,14.9\n2013-07-13,5,15.0\n2013-07-13,6,15.0\n2013-07-13,7,15.2\n2013-07-13,8,15.3\n2013-07-13,9,15.8\n2013-07-13,10,16.3\n2013-07-13,11,15.8\n2013-07-13,12,16.0\n2013-07-13,13,15.5\n2013-07-13,14,14.6\n2013-07-13,15,14.3\n2013-07-13,16,15.0\n2013-07-13,17,15.2\n2013-07-13,18,14.9\n2013-07-13,19,13.8\n2013-07-13,20,12.7\n2013-07-13,21,12.2\n2013-07-13,22,12.0\n2013-07-13,23,11.7\n2013-07-14,0,10.7\n2013-07-14,1,9.5\n2013-07-14,2,9.3\n2013-07-14,3,9.2\n2013-07-14,4,9.4\n2013-07-14,5,9.4\n2013-07-14,6,9.5\n2013-07-14,7,10.0\n2013-07-14,8,10.8\n2013-07-14,9,11.7\n2013-07-14,10,11.7\n2013-07-14,11,11.8\n2013-07-14,12,12.0\n2013-07-14,13,12.1\n2013-07-14,14,11.9\n2013-07-14,15,12.2\n2013-07-14,16,12.7\n2013-07-14,17,12.7\n2013-07-14,18,12.7\n2013-07-14,19,12.8\n2013-07-14,20,12.4\n2013-07-14,21,12.3\n2013-07-14,22,12.1\n2013-07-14,23,12.0\n2013-07-15,0,12.0\n2013-07-15,1,12.4\n2013-07-15,2,11.8\n2013-07-15,3,13.1\n2013-07-15,4,13.3\n2013-07-15,5,13.2\n2013-07-15,6,13.0\n2013-07-15,7,13.4\n2013-07-15,8,12.6\n2013-07-15,9,12.4\n2013-07-15,10,13.0\n2013-07-15,11,13.8\n2013-07-15,12,13.9\n2013-07-15,13,14.5\n2013-07-15,14,16.0\n2013-07-15,15,13.0\n2013-07-15,16,14.5\n2013-07-15,17,14.6\n2013-07-15,18,13.3\n2013-07-15,19,13.0\n2013-07-15,20,12.8\n2013-07-15,21,12.4\n2013-07-15,22,11.6\n2013-07-15,23,11.0\n2013-07-16,0,10.6\n2013-07-16,1,10.4\n2013-07-16,2,10.4\n2013-07-16,3,10.4\n2013-07-16,4,10.5\n2013-07-16,5,10.6\n2013-07-16,6,10.7\n2013-07-16,7,10.8\n2013-07-16,8,10.9\n2013-07-16,9,11.0\n2013-07-16,10,11.3\n2013-07-16,11,11.9\n2013-07-16,12,11.8\n2013-07-16,13,12.5\n2013-07-16,14,13.1\n2013-07-16,15,13.2\n2013-07-16,16,13.7\n2013-07-16,17,13.4\n2013-07-16,18,13.6\n2013-07-16,19,13.8\n2013-07-16,20,13.8\n2013-07-16,21,13.8\n2013-07-16,22,13.8\n2013-07-16,23,13.6\n2013-07-17,0,13.5\n2013-07-17,1,13.5\n2013-07-17,2,13.4\n2013-07-17,3,13.3\n2013-07-17,4,13.3\n2013-07-17,5,13.3\n2013-07-17,6,13.3\n2013-07-17,7,13.3\n2013-07-17,8,13.5\n2013-07-17,9,13.8\n2013-07-17,10,14.5\n2013-07-17,11,14.9\n2013-07-17,12,14.6\n2013-07-17,13,14.7\n2013-07-17,14,15.1\n2013-07-17,15,15.3\n2013-07-17,16,15.3\n2013-07-17,17,15.6\n2013-07-17,18,17.1\n2013-07-17,19,17.9\n2013-07-17,20,17.1\n2013-07-17,21,16.4\n2013-07-17,22,15.7\n2013-07-17,23,15.4\n2013-07-18,0,15.0\n2013-07-18,1,14.3\n2013-07-18,2,14.1\n2013-07-18,3,13.9\n2013-07-18,4,13.4\n2013-07-18,5,13.7\n2013-07-18,6,14.2\n2013-07-18,7,13.8\n2013-07-18,8,12.8\n2013-07-18,9,12.8\n2013-07-18,10,12.6\n2013-07-18,11,12.7\n2013-07-18,12,13.2\n2013-07-18,13,13.7\n2013-07-18,14,14.4\n2013-07-18,15,15.1\n2013-07-18,16,15.4\n2013-07-18,17,15.0\n2013-07-18,18,14.4\n2013-07-18,19,14.0\n2013-07-18,20,14.1\n2013-07-18,21,13.7\n2013-07-18,22,13.4\n2013-07-18,23,13.2\n2013-07-19,0,13.0\n2013-07-19,1,13.1\n2013-07-19,2,13.2\n2013-07-19,3,13.3\n2013-07-19,4,13.4\n2013-07-19,5,13.5\n2013-07-19,6,13.3\n2013-07-19,7,13.4\n2013-07-19,8,13.6\n2013-07-19,9,13.4\n2013-07-19,10,13.8\n2013-07-19,11,15.8\n2013-07-19,12,16.1\n2013-07-19,13,17.2\n2013-07-19,14,18.3\n2013-07-19,15,18.7\n2013-07-19,16,20.2\n2013-07-19,17,20.5\n2013-07-19,18,19.6\n2013-07-19,19,19.0\n2013-07-19,20,18.1\n2013-07-19,21,17.1\n2013-07-19,22,16.4\n2013-07-19,23,14.9\n2013-07-20,0,\n2013-07-20,1,\n2013-07-20,2,\n2013-07-20,3,\n2013-07-20,4,\n2013-07-20,5,17.5\n2013-07-20,6,18.0\n2013-07-20,7,18.7\n2013-07-20,8,19.7\n2013-07-20,9,20.6\n2013-07-20,10,21.3\n2013-07-20,11,17.5\n2013-07-20,12,18.0\n2013-07-20,13,18.7\n2013-07-20,14,19.7\n2013-07-20,15,20.6\n2013-07-20,16,21.3\n2013-07-20,17,22.6\n2013-07-20,18,23.3\n2013-07-20,19,22.5\n2013-07-20,20,20.5\n2013-07-20,21,19.2\n2013-07-20,22,16.6\n2013-07-20,23,14.5\n2013-07-21,0,13.4\n2013-07-21,1,11.6\n2013-07-21,2,10.9\n2013-07-21,3,10.1\n2013-07-21,4,10.6\n2013-07-21,5,12.2\n2013-07-21,6,13.1\n2013-07-21,7,13.5\n2013-07-21,8,14.5\n2013-07-21,9,15.9\n2013-07-21,10,16.8\n2013-07-21,11,16.7\n2013-07-21,12,17.5\n2013-07-21,13,19.6\n2013-07-21,14,20.8\n2013-07-21,15,21.7\n2013-07-21,16,22.2\n2013-07-21,17,22.7\n2013-07-21,18,23.2\n2013-07-21,19,23.3\n2013-07-21,20,23.1\n2013-07-21,21,17.6\n2013-07-21,22,15.2\n2013-07-21,23,13.1\n2013-07-22,0,11.7\n2013-07-22,1,11.1\n2013-07-22,2,10.6\n2013-07-22,3,10.6\n2013-07-22,4,9.9\n2013-07-22,5,9.2\n2013-07-22,6,10.0\n2013-07-22,7,10.1\n2013-07-22,8,12.8\n2013-07-22,9,15.7\n2013-07-22,10,17.3\n2013-07-22,11,18.3\n2013-07-22,12,20.3\n2013-07-22,13,21.4\n2013-07-22,14,22.8\n2013-07-22,15,24.1\n2013-07-22,16,25.6\n2013-07-22,17,26.3\n2013-07-22,18,25.5\n2013-07-22,19,23.9\n2013-07-22,20,23.4\n2013-07-22,21,18.5\n2013-07-22,22,17.7\n2013-07-22,23,17.1\n2013-07-23,0,14.7\n2013-07-23,1,14.3\n2013-07-23,2,13.2\n2013-07-23,3,12.3\n2013-07-23,4,12.0\n2013-07-23,5,11.9\n2013-07-23,6,12.1\n2013-07-23,7,12.6\n2013-07-23,8,14.9\n2013-07-23,9,17.2\n2013-07-23,10,18.1\n2013-07-23,11,18.6\n2013-07-23,12,20.0\n2013-07-23,13,20.6\n2013-07-23,14,22.2\n2013-07-23,15,23.0\n2013-07-23,16,25.3\n2013-07-23,17,25.8\n2013-07-23,18,25.8\n2013-07-23,19,24.8\n2013-07-23,20,24.8\n2013-07-23,21,20.4\n2013-07-23,22,16.6\n2013-07-23,23,16.3\n2013-07-24,0,13.9\n2013-07-24,1,14.0\n2013-07-24,2,13.4\n2013-07-24,3,13.8\n2013-07-24,4,13.0\n2013-07-24,5,13.2\n2013-07-24,6,12.8\n2013-07-24,7,13.6\n2013-07-24,8,14.8\n2013-07-24,9,17.6\n2013-07-24,10,18.6\n2013-07-24,11,19.4\n2013-07-24,12,21.4\n2013-07-24,13,22.7\n2013-07-24,14,23.7\n2013-07-24,15,24.9\n2013-07-24,16,24.3\n2013-07-24,17,24.9\n2013-07-24,18,24.2\n2013-07-24,19,25.0\n2013-07-24,20,24.5\n2013-07-24,21,22.6\n2013-07-24,22,20.2\n2013-07-24,23,16.9\n2013-07-25,0,14.9\n2013-07-25,1,14.2\n2013-07-25,2,13.6\n2013-07-25,3,13.4\n2013-07-25,4,13.5\n2013-07-25,5,13.3\n2013-07-25,6,12.8\n2013-07-25,7,13.5\n2013-07-25,8,14.9\n2013-07-25,9,18.0\n2013-07-25,10,19.1\n2013-07-25,11,20.3\n2013-07-25,12,21.5\n2013-07-25,13,23.6\n2013-07-25,14,24.3\n2013-07-25,15,24.8\n2013-07-25,16,22.6\n2013-07-25,17,23.7\n2013-07-25,18,24.8\n2013-07-25,19,23.5\n2013-07-25,20,21.3\n2013-07-25,21,19.7\n2013-07-25,22,17.9\n2013-07-25,23,17.5\n2013-07-26,0,16.4\n2013-07-26,1,14.9\n2013-07-26,2,13.8\n2013-07-26,3,13.4\n2013-07-26,4,13.1\n2013-07-26,5,12.6\n2013-07-26,6,12.7\n2013-07-26,7,13.2\n2013-07-26,8,14.5\n2013-07-26,9,17.5\n2013-07-26,10,18.8\n2013-07-26,11,19.9\n2013-07-26,12,21.1\n2013-07-26,13,22.5\n2013-07-26,14,23.4\n2013-07-26,15,20.8\n2013-07-26,16,23.3\n2013-07-26,17,23.8\n2013-07-26,18,22.3\n2013-07-26,19,21.1\n2013-07-26,20,20.5\n2013-07-26,21,19.2\n2013-07-26,22,17.8\n2013-07-26,23,17.1\n2013-07-27,0,16.8\n2013-07-27,1,16.7\n2013-07-27,2,16.6\n2013-07-27,3,16.5\n2013-07-27,4,16.3\n2013-07-27,5,16.0\n2013-07-27,6,15.9\n2013-07-27,7,16.2\n2013-07-27,8,16.7\n2013-07-27,9,17.4\n2013-07-27,10,18.7\n2013-07-27,11,18.5\n2013-07-27,12,17.8\n2013-07-27,13,17.9\n2013-07-27,14,18.7\n2013-07-27,15,21.5\n2013-07-27,16,20.8\n2013-07-27,17,20.9\n2013-07-27,18,19.8\n2013-07-27,19,19.9\n2013-07-27,20,20.0\n2013-07-27,21,16.9\n2013-07-27,22,16.3\n2013-07-27,23,14.4\n2013-07-28,0,14.2\n2013-07-28,1,13.1\n2013-07-28,2,12.4\n2013-07-28,3,12.5\n2013-07-28,4,11.7\n2013-07-28,5,11.8\n2013-07-28,6,13.1\n2013-07-28,7,13.6\n2013-07-28,8,14.2\n2013-07-28,9,16.5\n2013-07-28,10,17.6\n2013-07-28,11,18.4\n2013-07-28,12,20.6\n2013-07-28,13,21.7\n2013-07-28,14,22.4\n2013-07-28,15,23.5\n2013-07-28,16,22.4\n2013-07-28,17,21.4\n2013-07-28,18,20.1\n2013-07-28,19,18.9\n2013-07-28,20,18.9\n2013-07-28,21,18.9\n2013-07-28,22,17.7\n2013-07-28,23,16.6\n2013-07-29,0,16.4\n2013-07-29,1,18.5\n2013-07-29,2,19.7\n2013-07-29,3,19.1\n2013-07-29,4,18.6\n2013-07-29,5,18.8\n2013-07-29,6,17.8\n2013-07-29,7,18.0\n2013-07-29,8,17.9\n2013-07-29,9,17.3\n2013-07-29,10,16.1\n2013-07-29,11,16.7\n2013-07-29,12,17.5\n2013-07-29,13,17.4\n2013-07-29,14,18.5\n2013-07-29,15,17.5\n2013-07-29,16,18.9\n2013-07-29,17,18.0\n2013-07-29,18,17.7\n2013-07-29,19,18.0\n2013-07-29,20,17.9\n2013-07-29,21,16.7\n2013-07-29,22,15.9\n2013-07-29,23,15.1\n2013-07-30,0,14.9\n2013-07-30,1,15.0\n2013-07-30,2,14.6\n2013-07-30,3,14.3\n2013-07-30,4,13.2\n2013-07-30,5,13.3\n2013-07-30,6,13.0\n2013-07-30,7,13.2\n2013-07-30,8,14.1\n2013-07-30,9,15.5\n2013-07-30,10,16.2\n2013-07-30,11,16.9\n2013-07-30,12,17.0\n2013-07-30,13,18.1\n2013-07-30,14,18.7\n2013-07-30,15,18.9\n2013-07-30,16,18.4\n2013-07-30,17,19.1\n2013-07-30,18,18.1\n2013-07-30,19,18.1\n2013-07-30,20,16.9\n2013-07-30,21,16.7\n2013-07-30,22,15.5\n2013-07-30,23,14.8\n2013-07-31,0,14.4\n2013-07-31,1,14.2\n2013-07-31,2,14.0\n2013-07-31,3,14.1\n2013-07-31,4,13.9\n2013-07-31,5,13.2\n2013-07-31,6,13.2\n2013-07-31,7,13.4\n2013-07-31,8,13.2\n2013-07-31,9,13.5\n2013-07-31,10,14.1\n2013-07-31,11,14.9\n2013-07-31,12,15.7\n2013-07-31,13,16.1\n2013-07-31,14,15.9\n2013-07-31,15,15.3\n2013-07-31,16,15.9\n2013-07-31,17,16.1\n2013-07-31,18,14.5\n2013-07-31,19,14.1\n2013-07-31,20,14.1\n2013-07-31,21,14.5\n2013-07-31,22,13.9\n2013-07-31,23,12.7\n2013-08-01,0,11.6\n2013-08-01,1,10.6\n2013-08-01,2,9.7\n2013-08-01,3,10.2\n2013-08-01,4,11.0\n2013-08-01,5,11.6\n2013-08-01,6,12.0\n2013-08-01,7,12.2\n2013-08-01,8,12.8\n2013-08-01,9,13.5\n2013-08-01,10,14.3\n2013-08-01,11,14.3\n2013-08-01,12,14.8\n2013-08-01,13,16.2\n2013-08-01,14,16.1\n2013-08-01,15,16.6\n2013-08-01,16,17.4\n2013-08-01,17,17.6\n2013-08-01,18,17.1\n2013-08-01,19,16.3\n2013-08-01,20,16.4\n2013-08-01,21,15.9\n2013-08-01,22,15.0\n2013-08-01,23,14.2\n2013-08-02,0,14.0\n2013-08-02,1,13.9\n2013-08-02,2,13.8\n2013-08-02,3,13.9\n2013-08-02,4,13.9\n2013-08-02,5,\n2013-08-02,6,14.0\n2013-08-02,7,14.1\n2013-08-02,8,14.3\n2013-08-02,9,14.9\n2013-08-02,10,15.5\n2013-08-02,11,15.4\n2013-08-02,12,15.1\n2013-08-02,13,14.9\n2013-08-02,14,15.4\n2013-08-02,15,17.3\n2013-08-02,16,16.8\n2013-08-02,17,17.9\n2013-08-02,18,17.9\n2013-08-02,19,19.1\n2013-08-02,20,17.7\n2013-08-02,21,17.2\n2013-08-02,22,16.8\n2013-08-02,23,16.8\n2013-08-03,0,16.2\n2013-08-03,1,16.1\n2013-08-03,2,16.1\n2013-08-03,3,16.2\n2013-08-03,4,16.0\n2013-08-03,5,16.2\n2013-08-03,6,16.1\n2013-08-03,7,16.4\n2013-08-03,8,16.5\n2013-08-03,9,18.4\n2013-08-03,10,19.6\n2013-08-03,11,19.5\n2013-08-03,12,20.5\n2013-08-03,13,22.1\n2013-08-03,14,18.5\n2013-08-03,15,17.0\n2013-08-03,16,19.7\n2013-08-03,17,19.6\n2013-08-03,18,21.2\n2013-08-03,19,20.6\n2013-08-03,20,17.9\n2013-08-03,21,16.1\n2013-08-03,22,15.9\n2013-08-03,23,15.0\n2013-08-04,0,16.4\n2013-08-04,1,16.8\n2013-08-04,2,15.8\n2013-08-04,3,15.1\n2013-08-04,4,13.4\n2013-08-04,5,13.6\n2013-08-04,6,13.7\n2013-08-04,7,12.8\n2013-08-04,8,13.7\n2013-08-04,9,15.7\n2013-08-04,10,17.1\n2013-08-04,11,17.6\n2013-08-04,12,18.7\n2013-08-04,13,19.0\n2013-08-04,14,18.4\n2013-08-04,15,18.6\n2013-08-04,16,17.5\n2013-08-04,17,17.2\n2013-08-04,18,16.3\n2013-08-04,19,17.3\n2013-08-04,20,16.0\n2013-08-04,21,14.6\n2013-08-04,22,13.8\n2013-08-04,23,13.2\n2013-08-05,0,12.7\n2013-08-05,1,12.5\n2013-08-05,2,12.6\n2013-08-05,3,12.7\n2013-08-05,4,12.7\n2013-08-05,5,12.5\n2013-08-05,6,12.2\n2013-08-05,7,12.7\n2013-08-05,8,13.4\n2013-08-05,9,13.8\n2013-08-05,10,14.5\n2013-08-05,11,15.7\n2013-08-05,12,15.9\n2013-08-05,13,15.8\n2013-08-05,14,15.6\n2013-08-05,15,15.0\n2013-08-05,16,15.4\n2013-08-05,17,15.4\n2013-08-05,18,15.4\n2013-08-05,19,15.3\n2013-08-05,20,15.2\n2013-08-05,21,14.7\n2013-08-05,22,14.5\n2013-08-05,23,14.3\n2013-08-06,0,14.0\n2013-08-06,1,14.0\n2013-08-06,2,14.1\n2013-08-06,3,14.3\n2013-08-06,4,14.4\n2013-08-06,5,14.5\n2013-08-06,6,14.3\n2013-08-06,7,14.2\n2013-08-06,8,14.6\n2013-08-06,9,14.8\n2013-08-06,10,14.8\n2013-08-06,11,15.0\n2013-08-06,12,15.3\n2013-08-06,13,15.4\n2013-08-06,14,16.0\n2013-08-06,15,16.3\n2013-08-06,16,16.1\n2013-08-06,17,15.9\n2013-08-06,18,15.7\n2013-08-06,19,15.8\n2013-08-06,20,15.1\n2013-08-06,21,14.5\n2013-08-06,22,13.8\n2013-08-06,23,13.7\n2013-08-07,0,13.7\n2013-08-07,1,13.3\n2013-08-07,2,12.8\n2013-08-07,3,13.0\n2013-08-07,4,12.5\n2013-08-07,5,10.2\n2013-08-07,6,8.5\n2013-08-07,7,7.9\n2013-08-07,8,8.4\n2013-08-07,9,11.2\n2013-08-07,10,13.6\n2013-08-07,11,14.8\n2013-08-07,12,16.2\n2013-08-07,13,17.7\n2013-08-07,14,18.4\n2013-08-07,15,18.3\n2013-08-07,16,19.4\n2013-08-07,17,19.8\n2013-08-07,18,19.7\n2013-08-07,19,20.1\n2013-08-07,20,18.2\n2013-08-07,21,13.8\n2013-08-07,22,13.3\n2013-08-07,23,12.0\n2013-08-08,0,11.2\n2013-08-08,1,10.8\n2013-08-08,2,8.8\n2013-08-08,3,8.7\n2013-08-08,4,9.0\n2013-08-08,5,9.5\n2013-08-08,6,9.0\n2013-08-08,7,9.3\n2013-08-08,8,11.2\n2013-08-08,9,12.2\n2013-08-08,10,12.5\n2013-08-08,11,14.1\n2013-08-08,12,14.7\n2013-08-08,13,15.6\n2013-08-08,14,17.2\n2013-08-08,15,16.6\n2013-08-08,16,16.5\n2013-08-08,17,15.7\n2013-08-08,18,15.0\n2013-08-08,19,14.8\n2013-08-08,20,14.8\n2013-08-08,21,13.9\n2013-08-08,22,13.3\n2013-08-08,23,13.0\n2013-08-09,0,12.6\n2013-08-09,1,11.8\n2013-08-09,2,10.8\n2013-08-09,3,10.8\n2013-08-09,4,11.7\n2013-08-09,5,12.0\n2013-08-09,6,11.6\n2013-08-09,7,11.4\n2013-08-09,8,12.5\n2013-08-09,9,13.5\n2013-08-09,10,15.1\n2013-08-09,11,15.5\n2013-08-09,12,16.5\n2013-08-09,13,16.7\n2013-08-09,14,16.6\n2013-08-09,15,17.1\n2013-08-09,16,16.7\n2013-08-09,17,16.5\n2013-08-09,18,16.3\n2013-08-09,19,16.3\n2013-08-09,20,16.0\n2013-08-09,21,15.2\n2013-08-09,22,13.7\n2013-08-09,23,12.5\n2013-08-10,0,12.1\n2013-08-10,1,11.6\n2013-08-10,2,11.6\n2013-08-10,3,11.4\n2013-08-10,4,11.7\n2013-08-10,5,11.6\n2013-08-10,6,11.7\n2013-08-10,7,11.9\n2013-08-10,8,12.6\n2013-08-10,9,13.4\n2013-08-10,10,14.5\n2013-08-10,11,15.2\n2013-08-10,12,16.2\n2013-08-10,13,17.1\n2013-08-10,14,17.9\n2013-08-10,15,18.6\n2013-08-10,16,19.7\n2013-08-10,17,19.7\n2013-08-10,18,19.9\n2013-08-10,19,18.1\n2013-08-10,20,17.4\n2013-08-10,21,16.3\n2013-08-10,22,15.1\n2013-08-10,23,14.6\n2013-08-11,0,14.6\n2013-08-11,1,13.0\n2013-08-11,2,12.5\n2013-08-11,3,12.5\n2013-08-11,4,12.4\n2013-08-11,5,12.1\n2013-08-11,6,12.1\n2013-08-11,7,12.2\n2013-08-11,8,12.7\n2013-08-11,9,13.3\n2013-08-11,10,13.8\n2013-08-11,11,14.8\n2013-08-11,12,14.9\n2013-08-11,13,14.6\n2013-08-11,14,15.7\n2013-08-11,15,16.2\n2013-08-11,16,16.2\n2013-08-11,17,15.3\n2013-08-11,18,14.8\n2013-08-11,19,14.7\n2013-08-11,20,14.4\n2013-08-11,21,13.8\n2013-08-11,22,12.8\n2013-08-11,23,12.1\n2013-08-12,0,12.0\n2013-08-12,1,12.1\n2013-08-12,2,11.8\n2013-08-12,3,11.8\n2013-08-12,4,11.7\n2013-08-12,5,11.5\n2013-08-12,6,11.4\n2013-08-12,7,11.5\n2013-08-12,8,11.8\n2013-08-12,9,12.0\n2013-08-12,10,12.2\n2013-08-12,11,12.8\n2013-08-12,12,13.3\n2013-08-12,13,13.0\n2013-08-12,14,13.4\n2013-08-12,15,13.6\n2013-08-12,16,13.6\n2013-08-12,17,14.2\n2013-08-12,18,13.8\n2013-08-12,19,13.0\n2013-08-12,20,12.1\n2013-08-12,21,11.8\n2013-08-12,22,11.8\n2013-08-12,23,11.7\n2013-08-13,0,11.6\n2013-08-13,1,11.7\n2013-08-13,2,11.9\n2013-08-13,3,12.6\n2013-08-13,4,12.8\n2013-08-13,5,12.8\n2013-08-13,6,12.2\n2013-08-13,7,12.3\n2013-08-13,8,12.4\n2013-08-13,9,11.9\n2013-08-13,10,11.8\n2013-08-13,11,11.9\n2013-08-13,12,12.2\n2013-08-13,13,13.0\n2013-08-13,14,13.8\n2013-08-13,15,14.5\n2013-08-13,16,15.0\n2013-08-13,17,15.7\n2013-08-13,18,15.0\n2013-08-13,19,14.7\n2013-08-13,20,14.2\n2013-08-13,21,13.7\n2013-08-13,22,13.0\n2013-08-13,23,10.6\n2013-08-14,0,10.0\n2013-08-14,1,9.9\n2013-08-14,2,9.6\n2013-08-14,3,9.5\n2013-08-14,4,9.5\n2013-08-14,5,9.4\n2013-08-14,6,8.9\n2013-08-14,7,8.1\n2013-08-14,8,7.8\n2013-08-14,9,10.1\n2013-08-14,10,12.7\n2013-08-14,11,13.4\n2013-08-14,12,14.9\n2013-08-14,13,16.7\n2013-08-14,14,17.0\n2013-08-14,15,17.1\n2013-08-14,16,16.5\n2013-08-14,17,17.8\n2013-08-14,18,17.8\n2013-08-14,19,17.1\n2013-08-14,20,14.7\n2013-08-14,21,13.4\n2013-08-14,22,12.0\n2013-08-14,23,11.1\n2013-08-15,0,8.6\n2013-08-15,1,7.1\n2013-08-15,2,6.1\n2013-08-15,3,7.3\n2013-08-15,4,7.7\n2013-08-15,5,6.7\n2013-08-15,6,5.3\n2013-08-15,7,5.6\n2013-08-15,8,5.8\n2013-08-15,9,8.5\n2013-08-15,10,11.8\n2013-08-15,11,12.4\n2013-08-15,12,14.1\n2013-08-15,13,15.4\n2013-08-15,14,16.5\n2013-08-15,15,17.3\n2013-08-15,16,18.4\n2013-08-15,17,19.2\n2013-08-15,18,18.3\n2013-08-15,19,16.4\n2013-08-15,20,15.5\n2013-08-15,21,14.1\n2013-08-15,22,12.0\n2013-08-15,23,12.6\n2013-08-16,0,12.1\n2013-08-16,1,12.3\n2013-08-16,2,12.3\n2013-08-16,3,12.3\n2013-08-16,4,12.3\n2013-08-16,5,12.3\n2013-08-16,6,12.3\n2013-08-16,7,12.5\n2013-08-16,8,12.8\n2013-08-16,9,13.2\n2013-08-16,10,13.4\n2013-08-16,11,13.6\n2013-08-16,12,13.7\n2013-08-16,13,14.0\n2013-08-16,14,14.0\n2013-08-16,15,14.4\n2013-08-16,16,14.3\n2013-08-16,17,14.3\n2013-08-16,18,14.5\n2013-08-16,19,14.6\n2013-08-16,20,14.4\n2013-08-16,21,14.2\n2013-08-16,22,13.9\n2013-08-16,23,13.2\n2013-08-17,0,13.0\n2013-08-17,1,12.7\n2013-08-17,2,12.4\n2013-08-17,3,11.6\n2013-08-17,4,10.7\n2013-08-17,5,11.1\n2013-08-17,6,11.2\n2013-08-17,7,11.3\n2013-08-17,8,11.9\n2013-08-17,9,12.7\n2013-08-17,10,13.8\n2013-08-17,11,14.2\n2013-08-17,12,15.2\n2013-08-17,13,15.3\n2013-08-17,14,15.3\n2013-08-17,15,15.2\n2013-08-17,16,15.0\n2013-08-17,17,15.0\n2013-08-17,18,15.0\n2013-08-17,19,14.8\n2013-08-17,20,14.4\n2013-08-17,21,13.6\n2013-08-17,22,12.4\n2013-08-17,23,12.1\n2013-08-18,0,12.4\n2013-08-18,1,12.5\n2013-08-18,2,12.5\n2013-08-18,3,12.4\n2013-08-18,4,12.4\n2013-08-18,5,12.3\n2013-08-18,6,12.4\n2013-08-18,7,12.4\n2013-08-18,8,12.8\n2013-08-18,9,13.0\n2013-08-18,10,13.4\n2013-08-18,11,13.4\n2013-08-18,12,13.5\n2013-08-18,13,14.5\n2013-08-18,14,14.4\n2013-08-18,15,16.6\n2013-08-18,16,17.8\n2013-08-18,17,18.4\n2013-08-18,18,17.0\n2013-08-18,19,17.0\n2013-08-18,20,15.5\n2013-08-18,21,14.4\n2013-08-18,22,14.6\n2013-08-18,23,13.4\n2013-08-19,0,14.2\n2013-08-19,1,14.3\n2013-08-19,2,14.6\n2013-08-19,3,13.9\n2013-08-19,4,13.4\n2013-08-19,5,13.5\n2013-08-19,6,14.2\n2013-08-19,7,13.0\n2013-08-19,8,13.0\n2013-08-19,9,13.3\n2013-08-19,10,14.1\n2013-08-19,11,14.6\n2013-08-19,12,13.7\n2013-08-19,13,14.4\n2013-08-19,14,14.7\n2013-08-19,15,15.5\n2013-08-19,16,15.1\n2013-08-19,17,14.4\n2013-08-19,18,15.0\n2013-08-19,19,16.0\n2013-08-19,20,15.3\n2013-08-19,21,14.4\n2013-08-19,22,13.9\n2013-08-19,23,13.7\n2013-08-20,0,13.2\n2013-08-20,1,13.4\n2013-08-20,2,13.6\n2013-08-20,3,12.1\n2013-08-20,4,11.8\n2013-08-20,5,12.9\n2013-08-20,6,11.5\n2013-08-20,7,11.4\n2013-08-20,8,12.9\n2013-08-20,9,13.4\n2013-08-20,10,14.2\n2013-08-20,11,14.8\n2013-08-20,12,14.3\n2013-08-20,13,13.9\n2013-08-20,14,15.5\n2013-08-20,15,17.0\n2013-08-20,16,16.6\n2013-08-20,17,17.3\n2013-08-20,18,15.7\n2013-08-20,19,15.5\n2013-08-20,20,14.7\n2013-08-20,21,14.2\n2013-08-20,22,12.8\n2013-08-20,23,12.9\n2013-08-21,0,13.5\n2013-08-21,1,13.9\n2013-08-21,2,12.7\n2013-08-21,3,12.5\n2013-08-21,4,12.0\n2013-08-21,5,12.9\n2013-08-21,6,12.8\n2013-08-21,7,11.7\n2013-08-21,8,11.9\n2013-08-21,9,12.4\n2013-08-21,10,13.2\n2013-08-21,11,13.5\n2013-08-21,12,14.0\n2013-08-21,13,14.3\n2013-08-21,14,14.2\n2013-08-21,15,14.0\n2013-08-21,16,14.6\n2013-08-21,17,14.5\n2013-08-21,18,15.7\n2013-08-21,19,14.7\n2013-08-21,20,14.0\n2013-08-21,21,13.5\n2013-08-21,22,13.2\n2013-08-21,23,12.9\n2013-08-22,0,12.8\n2013-08-22,1,11.9\n2013-08-22,2,11.2\n2013-08-22,3,11.1\n2013-08-22,4,11.6\n2013-08-22,5,11.7\n2013-08-22,6,11.6\n2013-08-22,7,11.3\n2013-08-22,8,11.2\n2013-08-22,9,12.1\n2013-08-22,10,13.3\n2013-08-22,11,14.2\n2013-08-22,12,15.6\n2013-08-22,13,16.5\n2013-08-22,14,\n2013-08-22,15,18.3\n2013-08-22,16,19.4\n2013-08-22,17,20.1\n2013-08-22,18,19.2\n2013-08-22,19,18.7\n2013-08-22,20,15.8\n2013-08-22,21,12.8\n2013-08-22,22,11.3\n2013-08-22,23,10.8\n2013-08-23,0,9.8\n2013-08-23,1,8.8\n2013-08-23,2,9.4\n2013-08-23,3,8.5\n2013-08-23,4,8.8\n2013-08-23,5,8.2\n2013-08-23,6,7.3\n2013-08-23,7,7.4\n2013-08-23,8,8.5\n2013-08-23,9,10.6\n2013-08-23,10,13.6\n2013-08-23,11,14.7\n2013-08-23,12,16.1\n2013-08-23,13,17.2\n2013-08-23,14,18.9\n2013-08-23,15,18.5\n2013-08-23,16,20.0\n2013-08-23,17,20.4\n2013-08-23,18,21.3\n2013-08-23,19,17.3\n2013-08-23,20,16.2\n2013-08-23,21,15.4\n2013-08-23,22,14.0\n2013-08-23,23,14.3\n2013-08-24,0,14.1\n2013-08-24,1,13.8\n2013-08-24,2,13.9\n2013-08-24,3,13.7\n2013-08-24,4,13.4\n2013-08-24,5,13.3\n2013-08-24,6,13.2\n2013-08-24,7,12.8\n2013-08-24,8,13.1\n2013-08-24,9,14.8\n2013-08-24,10,16.2\n2013-08-24,11,17.6\n2013-08-24,12,18.6\n2013-08-24,13,20.0\n2013-08-24,14,20.5\n2013-08-24,15,19.7\n2013-08-24,16,21.4\n2013-08-24,17,20.7\n2013-08-24,18,20.7\n2013-08-24,19,20.5\n2013-08-24,20,18.6\n2013-08-24,21,16.2\n2013-08-24,22,14.3\n2013-08-24,23,14.7\n2013-08-25,0,14.1\n2013-08-25,1,13.0\n2013-08-25,2,11.3\n2013-08-25,3,10.7\n2013-08-25,4,10.1\n2013-08-25,5,9.9\n2013-08-25,6,9.7\n2013-08-25,7,9.1\n2013-08-25,8,9.5\n2013-08-25,9,12.0\n2013-08-25,10,15.4\n2013-08-25,11,16.9\n2013-08-25,12,17.7\n2013-08-25,13,18.9\n2013-08-25,14,19.7\n2013-08-25,15,20.4\n2013-08-25,16,20.8\n2013-08-25,17,21.6\n2013-08-25,18,21.2\n2013-08-25,19,20.2\n2013-08-25,20,18.3\n2013-08-25,21,17.5\n2013-08-25,22,16.5\n2013-08-25,23,14.4\n2013-08-26,0,11.3\n2013-08-26,1,10.0\n2013-08-26,2,9.7\n2013-08-26,3,9.5\n2013-08-26,4,9.1\n2013-08-26,5,8.4\n2013-08-26,6,8.4\n2013-08-26,7,8.7\n2013-08-26,8,9.3\n2013-08-26,9,12.1\n2013-08-26,10,13.7\n2013-08-26,11,15.0\n2013-08-26,12,16.4\n2013-08-26,13,17.7\n2013-08-26,14,18.5\n2013-08-26,15,19.2\n2013-08-26,16,19.6\n2013-08-26,17,19.2\n2013-08-26,18,19.0\n2013-08-26,19,19.8\n2013-08-26,20,15.5\n2013-08-26,21,14.1\n2013-08-26,22,15.8\n2013-08-26,23,13.1\n2013-08-27,0,12.3\n2013-08-27,1,12.6\n2013-08-27,2,15.0\n2013-08-27,3,15.1\n2013-08-27,4,12.9\n2013-08-27,5,12.7\n2013-08-27,6,13.0\n2013-08-27,7,11.9\n2013-08-27,8,12.6\n2013-08-27,9,13.4\n2013-08-27,10,14.5\n2013-08-27,11,15.1\n2013-08-27,12,15.6\n2013-08-27,13,16.3\n2013-08-27,14,16.7\n2013-08-27,15,17.3\n2013-08-27,16,17.6\n2013-08-27,17,19.0\n2013-08-27,18,20.8\n2013-08-27,19,18.8\n2013-08-27,20,18.0\n2013-08-27,21,15.9\n2013-08-27,22,16.4\n2013-08-27,23,17.0\n2013-08-28,0,16.6\n2013-08-28,1,15.7\n2013-08-28,2,13.0\n2013-08-28,3,11.9\n2013-08-28,4,11.8\n2013-08-28,5,12.2\n2013-08-28,6,11.2\n2013-08-28,7,10.9\n2013-08-28,8,11.3\n2013-08-28,9,11.6\n2013-08-28,10,12.7\n2013-08-28,11,13.2\n2013-08-28,12,15.2\n2013-08-28,13,15.2\n2013-08-28,14,16.4\n2013-08-28,15,17.0\n2013-08-28,16,16.4\n2013-08-28,17,15.9\n2013-08-28,18,14.7\n2013-08-28,19,15.0\n2013-08-28,20,13.5\n2013-08-28,21,12.7\n2013-08-28,22,10.8\n2013-08-28,23,8.5\n2013-08-29,0,8.5\n2013-08-29,1,8.8\n2013-08-29,2,9.0\n2013-08-29,3,9.1\n2013-08-29,4,8.7\n2013-08-29,5,9.1\n2013-08-29,6,9.3\n2013-08-29,7,9.5\n2013-08-29,8,10.0\n2013-08-29,9,10.6\n2013-08-29,10,11.5\n2013-08-29,11,12.7\n2013-08-29,12,13.7\n2013-08-29,13,14.3\n2013-08-29,14,14.7\n2013-08-29,15,14.7\n2013-08-29,16,14.7\n2013-08-29,17,14.3\n2013-08-29,18,14.6\n2013-08-29,19,14.3\n2013-08-29,20,13.5\n2013-08-29,21,11.6\n2013-08-29,22,8.8\n2013-08-29,23,7.8\n2013-08-30,0,7.2\n2013-08-30,1,7.5\n2013-08-30,2,7.5\n2013-08-30,3,7.9\n2013-08-30,4,9.0\n2013-08-30,5,9.6\n2013-08-30,6,9.7\n2013-08-30,7,9.8\n2013-08-30,8,10.3\n2013-08-30,9,11.4\n2013-08-30,10,12.5\n2013-08-30,11,13.4\n2013-08-30,12,13.1\n2013-08-30,13,14.3\n2013-08-30,14,14.9\n2013-08-30,15,15.0\n2013-08-30,16,15.4\n2013-08-30,17,16.1\n2013-08-30,18,15.4\n2013-08-30,19,15.4\n2013-08-30,20,14.1\n2013-08-30,21,12.5\n2013-08-30,22,12.0\n2013-08-30,23,11.9\n2013-08-31,0,12.4\n2013-08-31,1,12.5\n2013-08-31,2,12.4\n2013-08-31,3,12.3\n2013-08-31,4,12.3\n2013-08-31,5,12.3\n2013-08-31,6,11.7\n2013-08-31,7,11.1\n2013-08-31,8,10.9\n2013-08-31,9,10.9\n2013-08-31,10,11.4\n2013-08-31,11,11.8\n2013-08-31,12,13.1\n2013-08-31,13,13.2\n2013-08-31,14,13.2\n2013-08-31,15,12.4\n2013-08-31,16,12.4\n2013-08-31,17,10.9\n2013-08-31,18,10.9\n2013-08-31,19,10.5\n2013-08-31,20,9.4\n2013-08-31,21,8.1\n2013-08-31,22,6.8\n2013-08-31,23,6.9\n2013-09-01,0,6.7\n2013-09-01,1,7.0\n2013-09-01,2,7.2\n2013-09-01,3,7.0\n2013-09-01,4,6.9\n2013-09-01,5,7.2\n2013-09-01,6,7.4\n2013-09-01,7,7.7\n2013-09-01,8,8.0\n2013-09-01,9,8.3\n2013-09-01,10,8.6\n2013-09-01,11,8.7\n2013-09-01,12,8.7\n2013-09-01,13,8.9\n2013-09-01,14,9.1\n2013-09-01,15,8.9\n2013-09-01,16,9.0\n2013-09-01,17,9.1\n2013-09-01,18,8.9\n2013-09-01,19,8.9\n2013-09-01,20,8.9\n2013-09-01,21,8.8\n2013-09-01,22,8.7\n2013-09-01,23,8.7\n2013-09-02,0,8.7\n2013-09-02,1,8.7\n2013-09-02,2,8.7\n2013-09-02,3,8.8\n2013-09-02,4,8.8\n2013-09-02,5,8.9\n2013-09-02,6,9.1\n2013-09-02,7,9.2\n2013-09-02,8,9.5\n2013-09-02,9,10.1\n2013-09-02,10,11.3\n2013-09-02,11,11.4\n2013-09-02,12,11.9\n2013-09-02,13,13.2\n2013-09-02,14,13.3\n2013-09-02,15,14.0\n2013-09-02,16,14.1\n2013-09-02,17,14.0\n2013-09-02,18,13.3\n2013-09-02,19,13.2\n2013-09-02,20,12.9\n2013-09-02,21,12.6\n2013-09-02,22,12.5\n2013-09-02,23,12.4\n2013-09-03,0,12.3\n2013-09-03,1,12.2\n2013-09-03,2,12.1\n2013-09-03,3,11.8\n2013-09-03,4,11.9\n2013-09-03,5,11.7\n2013-09-03,6,11.8\n2013-09-03,7,11.3\n2013-09-03,8,11.3\n2013-09-03,9,12.3\n2013-09-03,10,13.2\n2013-09-03,11,14.0\n2013-09-03,12,14.6\n2013-09-03,13,15.5\n2013-09-03,14,16.2\n2013-09-03,15,15.7\n2013-09-03,16,16.7\n2013-09-03,17,18.2\n2013-09-03,18,16.1\n2013-09-03,19,15.2\n2013-09-03,20,14.7\n2013-09-03,21,13.6\n2013-09-03,22,13.0\n2013-09-03,23,12.8\n2013-09-04,0,12.8\n2013-09-04,1,12.5\n2013-09-04,2,12.5\n2013-09-04,3,12.4\n2013-09-04,4,12.3\n2013-09-04,5,12.1\n2013-09-04,6,12.2\n2013-09-04,7,12.0\n2013-09-04,8,11.0\n2013-09-04,9,10.4\n2013-09-04,10,13.4\n2013-09-04,11,15.1\n2013-09-04,12,15.8\n2013-09-04,13,17.0\n2013-09-04,14,18.4\n2013-09-04,15,18.1\n2013-09-04,16,18.6\n2013-09-04,17,18.5\n2013-09-04,18,18.5\n2013-09-04,19,20.2\n2013-09-04,20,17.1\n2013-09-04,21,14.9\n2013-09-04,22,14.2\n2013-09-04,23,12.5\n2013-09-05,0,10.7\n2013-09-05,1,10.8\n2013-09-05,2,10.3\n2013-09-05,3,10.6\n2013-09-05,4,10.7\n2013-09-05,5,10.5\n2013-09-05,6,10.5\n2013-09-05,7,10.8\n2013-09-05,8,10.2\n2013-09-05,9,11.7\n2013-09-05,10,12.9\n2013-09-05,11,14.1\n2013-09-05,12,14.5\n2013-09-05,13,14.6\n2013-09-05,14,15.6\n2013-09-05,15,16.7\n2013-09-05,16,17.4\n2013-09-05,17,16.8\n2013-09-05,18,17.5\n2013-09-05,19,17.6\n2013-09-05,20,15.5\n2013-09-05,21,13.1\n2013-09-05,22,12.8\n2013-09-05,23,12.8\n2013-09-06,0,12.0\n2013-09-06,1,12.2\n2013-09-06,2,12.3\n2013-09-06,3,12.3\n2013-09-06,4,12.9\n2013-09-06,5,13.2\n2013-09-06,6,13.2\n2013-09-06,7,12.7\n2013-09-06,8,13.0\n2013-09-06,9,13.4\n2013-09-06,10,13.7\n2013-09-06,11,13.7\n2013-09-06,12,14.5\n2013-09-06,13,14.6\n2013-09-06,14,15.5\n2013-09-06,15,15.7\n2013-09-06,16,15.5\n2013-09-06,17,15.5\n2013-09-06,18,14.7\n2013-09-06,19,14.7\n2013-09-06,20,14.4\n2013-09-06,21,14.3\n2013-09-06,22,14.1\n2013-09-06,23,14.2\n2013-09-07,0,14.0\n2013-09-07,1,13.8\n2013-09-07,2,14.0\n2013-09-07,3,14.1\n2013-09-07,4,14.1\n2013-09-07,5,14.1\n2013-09-07,6,14.2\n2013-09-07,7,14.2\n2013-09-07,8,14.2\n2013-09-07,9,14.3\n2013-09-07,10,14.6\n2013-09-07,11,14.9\n2013-09-07,12,15.8\n2013-09-07,13,15.8\n2013-09-07,14,16.1\n2013-09-07,15,16.0\n2013-09-07,16,16.8\n2013-09-07,17,17.0\n2013-09-07,18,16.7\n2013-09-07,19,16.4\n2013-09-07,20,15.9\n2013-09-07,21,15.1\n2013-09-07,22,14.9\n2013-09-07,23,14.8\n2013-09-08,0,14.8\n2013-09-08,1,14.9\n2013-09-08,2,14.8\n2013-09-08,3,14.7\n2013-09-08,4,14.7\n2013-09-08,5,14.7\n2013-09-08,6,14.5\n2013-09-08,7,14.5\n2013-09-08,8,14.5\n2013-09-08,9,14.9\n2013-09-08,10,16.0\n2013-09-08,11,16.8\n2013-09-08,12,17.0\n2013-09-08,13,17.5\n2013-09-08,14,18.2\n2013-09-08,15,19.9\n2013-09-08,16,19.8\n2013-09-08,17,18.8\n2013-09-08,18,17.5\n2013-09-08,19,16.6\n2013-09-08,20,14.7\n2013-09-08,21,13.1\n2013-09-08,22,11.5\n2013-09-08,23,11.2\n2013-09-09,0,11.6\n2013-09-09,1,11.3\n2013-09-09,2,11.8\n2013-09-09,3,12.2\n2013-09-09,4,13.9\n2013-09-09,5,13.0\n2013-09-09,6,12.4\n2013-09-09,7,12.6\n2013-09-09,8,13.0\n2013-09-09,9,13.6\n2013-09-09,10,14.9\n2013-09-09,11,15.1\n2013-09-09,12,14.4\n2013-09-09,13,14.5\n2013-09-09,14,16.0\n2013-09-09,15,17.7\n2013-09-09,16,16.8\n2013-09-09,17,16.5\n2013-09-09,18,15.9\n2013-09-09,19,15.1\n2013-09-09,20,12.6\n2013-09-09,21,10.7\n2013-09-09,22,10.5\n2013-09-09,23,10.0\n2013-09-10,0,9.9\n2013-09-10,1,10.2\n2013-09-10,2,10.4\n2013-09-10,3,10.2\n2013-09-10,4,10.1\n2013-09-10,5,9.8\n2013-09-10,6,10.1\n2013-09-10,7,10.3\n2013-09-10,8,10.6\n2013-09-10,9,11.6\n2013-09-10,10,12.3\n2013-09-10,11,13.4\n2013-09-10,12,14.8\n2013-09-10,13,16.6\n2013-09-10,14,18.4\n2013-09-10,15,18.6\n2013-09-10,16,17.3\n2013-09-10,17,17.3\n2013-09-10,18,17.2\n2013-09-10,19,15.1\n2013-09-10,20,14.0\n2013-09-10,21,13.4\n2013-09-10,22,12.9\n2013-09-10,23,12.8\n2013-09-11,0,12.2\n2013-09-11,1,11.1\n2013-09-11,2,10.8\n2013-09-11,3,10.1\n2013-09-11,4,10.9\n2013-09-11,5,11.6\n2013-09-11,6,11.5\n2013-09-11,7,11.4\n2013-09-11,8,11.7\n2013-09-11,9,12.2\n2013-09-11,10,13.7\n2013-09-11,11,14.3\n2013-09-11,12,15.5\n2013-09-11,13,15.0\n2013-09-11,14,16.0\n2013-09-11,15,17.0\n2013-09-11,16,17.0\n2013-09-11,17,16.2\n2013-09-11,18,15.7\n2013-09-11,19,15.5\n2013-09-11,20,14.8\n2013-09-11,21,12.7\n2013-09-11,22,11.3\n2013-09-11,23,9.8\n2013-09-12,0,10.0\n2013-09-12,1,9.7\n2013-09-12,2,9.4\n2013-09-12,3,9.2\n2013-09-12,4,9.6\n2013-09-12,5,10.8\n2013-09-12,6,11.6\n2013-09-12,7,12.0\n2013-09-12,8,12.3\n2013-09-12,9,12.3\n2013-09-12,10,13.2\n2013-09-12,11,14.8\n2013-09-12,12,15.8\n2013-09-12,13,16.5\n2013-09-12,14,16.7\n2013-09-12,15,16.6\n2013-09-12,16,17.5\n2013-09-12,17,16.3\n2013-09-12,18,16.8\n2013-09-12,19,16.7\n2013-09-12,20,14.6\n2013-09-12,21,13.1\n2013-09-12,22,12.1\n2013-09-12,23,11.9\n2013-09-13,0,12.3\n2013-09-13,1,15.7\n2013-09-13,2,16.4\n2013-09-13,3,15.7\n2013-09-13,4,14.9\n2013-09-13,5,14.9\n2013-09-13,6,14.6\n2013-09-13,7,14.6\n2013-09-13,8,14.5\n2013-09-13,9,14.2\n2013-09-13,10,13.7\n2013-09-13,11,14.1\n2013-09-13,12,14.3\n2013-09-13,13,14.5\n2013-09-13,14,14.7\n2013-09-13,15,14.2\n2013-09-13,16,14.3\n2013-09-13,17,14.3\n2013-09-13,18,13.8\n2013-09-13,19,13.8\n2013-09-13,20,13.4\n2013-09-13,21,12.5\n2013-09-13,22,12.5\n2013-09-13,23,12.4\n2013-09-14,0,12.1\n2013-09-14,1,11.7\n2013-09-14,2,11.8\n2013-09-14,3,11.8\n2013-09-14,4,11.8\n2013-09-14,5,11.8\n2013-09-14,6,12.1\n2013-09-14,7,11.4\n2013-09-14,8,11.7\n2013-09-14,9,12.1\n2013-09-14,10,12.5\n2013-09-14,11,12.8\n2013-09-14,12,13.1\n2013-09-14,13,13.1\n2013-09-14,14,13.1\n2013-09-14,15,13.2\n2013-09-14,16,13.2\n2013-09-14,17,13.2\n2013-09-14,18,13.1\n2013-09-14,19,12.9\n2013-09-14,20,12.8\n2013-09-14,21,12.4\n2013-09-14,22,12.2\n2013-09-14,23,12.1\n2013-09-15,0,12.2\n2013-09-15,1,12.3\n2013-09-15,2,12.4\n2013-09-15,3,12.4\n2013-09-15,4,12.4\n2013-09-15,5,12.3\n2013-09-15,6,12.3\n2013-09-15,7,12.2\n2013-09-15,8,12.2\n2013-09-15,9,12.3\n2013-09-15,10,12.3\n2013-09-15,11,12.9\n2013-09-15,12,13.0\n2013-09-15,13,13.6\n2013-09-15,14,13.6\n2013-09-15,15,14.1\n2013-09-15,16,15.3\n2013-09-15,17,14.9\n2013-09-15,18,14.6\n2013-09-15,19,13.8\n2013-09-15,20,10.9\n2013-09-15,21,10.1\n2013-09-15,22,9.9\n2013-09-15,23,10.0\n2013-09-16,0,10.0\n2013-09-16,1,10.2\n2013-09-16,2,10.3\n2013-09-16,3,10.4\n2013-09-16,4,10.2\n2013-09-16,5,10.7\n2013-09-16,6,10.1\n2013-09-16,7,9.0\n2013-09-16,8,8.9\n2013-09-16,9,8.9\n2013-09-16,10,8.6\n2013-09-16,11,8.2\n2013-09-16,12,7.6\n2013-09-16,13,7.6\n2013-09-16,14,7.5\n2013-09-16,15,7.9\n2013-09-16,16,9.0\n2013-09-16,17,9.2\n2013-09-16,18,9.1\n2013-09-16,19,8.2\n2013-09-16,20,7.2\n2013-09-16,21,5.3\n2013-09-16,22,4.4\n2013-09-16,23,5.1\n2013-09-17,0,4.9\n2013-09-17,1,3.9\n2013-09-17,2,3.2\n2013-09-17,3,3.2\n2013-09-17,4,3.1\n2013-09-17,5,4.1\n2013-09-17,6,5.0\n2013-09-17,7,5.3\n2013-09-17,8,5.1\n2013-09-17,9,5.9\n2013-09-17,10,8.2\n2013-09-17,11,11.8\n2013-09-17,12,12.2\n2013-09-17,13,11.8\n2013-09-17,14,12.8\n2013-09-17,15,12.6\n2013-09-17,16,14.3\n2013-09-17,17,14.1\n2013-09-17,18,13.2\n2013-09-17,19,11.9\n2013-09-17,20,10.8\n2013-09-17,21,9.1\n2013-09-17,22,8.5\n2013-09-17,23,7.8\n2013-09-18,0,7.7\n2013-09-18,1,7.7\n2013-09-18,2,8.0\n2013-09-18,3,5.9\n2013-09-18,4,7.2\n2013-09-18,5,6.9\n2013-09-18,6,5.7\n2013-09-18,7,5.8\n2013-09-18,8,7.0\n2013-09-18,9,7.4\n2013-09-18,10,9.2\n2013-09-18,11,12.1\n2013-09-18,12,13.1\n2013-09-18,13,13.9\n2013-09-18,14,13.6\n2013-09-18,15,13.5\n2013-09-18,16,13.0\n2013-09-18,17,12.7\n2013-09-18,18,12.5\n2013-09-18,19,11.9\n2013-09-18,20,10.8\n2013-09-18,21,9.9\n2013-09-18,22,8.4\n2013-09-18,23,8.0\n2013-09-19,0,7.8\n2013-09-19,1,7.5\n2013-09-19,2,6.8\n2013-09-19,3,6.9\n2013-09-19,4,6.5\n2013-09-19,5,4.7\n2013-09-19,6,4.5\n2013-09-19,7,5.7\n2013-09-19,8,6.4\n2013-09-19,9,6.5\n2013-09-19,10,7.1\n2013-09-19,11,10.2\n2013-09-19,12,11.7\n2013-09-19,13,12.4\n2013-09-19,14,12.4\n2013-09-19,15,12.4\n2013-09-19,16,14.7\n2013-09-19,17,15.2\n2013-09-19,18,12.8\n2013-09-19,19,12.5\n2013-09-19,20,11.5\n2013-09-19,21,9.7\n2013-09-19,22,9.0\n2013-09-19,23,8.9\n2013-09-20,0,8.6\n2013-09-20,1,8.4\n2013-09-20,2,8.1\n2013-09-20,3,8.2\n2013-09-20,4,8.3\n2013-09-20,5,8.2\n2013-09-20,6,7.8\n2013-09-20,7,7.8\n2013-09-20,8,7.3\n2013-09-20,9,6.9\n2013-09-20,10,8.3\n2013-09-20,11,9.5\n2013-09-20,12,10.8\n2013-09-20,13,11.9\n2013-09-20,14,12.2\n2013-09-20,15,12.1\n2013-09-20,16,12.0\n2013-09-20,17,13.5\n2013-09-20,18,12.2\n2013-09-20,19,10.8\n2013-09-20,20,8.9\n2013-09-20,21,8.7\n2013-09-20,22,8.7\n2013-09-20,23,8.6\n2013-09-21,0,8.1\n2013-09-21,1,8.4\n2013-09-21,2,8.8\n2013-09-21,3,8.9\n2013-09-21,4,8.9\n2013-09-21,5,9.1\n2013-09-21,6,10.7\n2013-09-21,7,10.0\n2013-09-21,8,9.4\n2013-09-21,9,9.8\n2013-09-21,10,10.0\n2013-09-21,11,10.6\n2013-09-21,12,10.5\n2013-09-21,13,10.1\n2013-09-21,14,10.7\n2013-09-21,15,11.4\n2013-09-21,16,11.2\n2013-09-21,17,12.1\n2013-09-21,18,11.6\n2013-09-21,19,10.6\n2013-09-21,20,9.3\n2013-09-21,21,9.4\n2013-09-21,22,10.4\n2013-09-21,23,9.3\n2013-09-22,0,10.0\n2013-09-22,1,9.6\n2013-09-22,2,8.8\n2013-09-22,3,8.6\n2013-09-22,4,8.4\n2013-09-22,5,8.3\n2013-09-22,6,8.2\n2013-09-22,7,8.5\n2013-09-22,8,8.6\n2013-09-22,9,8.8\n2013-09-22,10,9.0\n2013-09-22,11,9.3\n2013-09-22,12,9.9\n2013-09-22,13,10.7\n2013-09-22,14,11.6\n2013-09-22,15,12.4\n2013-09-22,16,12.6\n2013-09-22,17,12.9\n2013-09-22,18,13.2\n2013-09-22,19,12.9\n2013-09-22,20,12.6\n2013-09-22,21,12.1\n2013-09-22,22,11.2\n2013-09-22,23,10.4\n2013-09-23,0,9.6\n2013-09-23,1,9.3\n2013-09-23,2,8.3\n2013-09-23,3,8.2\n2013-09-23,4,8.4\n2013-09-23,5,8.5\n2013-09-23,6,9.0\n2013-09-23,7,9.1\n2013-09-23,8,8.5\n2013-09-23,9,8.3\n2013-09-23,10,10.3\n2013-09-23,11,10.9\n2013-09-23,12,11.9\n2013-09-23,13,12.3\n2013-09-23,14,12.8\n2013-09-23,15,13.2\n2013-09-23,16,13.6\n2013-09-23,17,13.8\n2013-09-23,18,12.3\n2013-09-23,19,11.9\n2013-09-23,20,10.3\n2013-09-23,21,8.5\n2013-09-23,22,7.8\n2013-09-23,23,7.7\n2013-09-24,0,6.7\n2013-09-24,1,5.5\n2013-09-24,2,5.2\n2013-09-24,3,3.8\n2013-09-24,4,3.4\n2013-09-24,5,3.4\n2013-09-24,6,2.6\n2013-09-24,7,2.7\n2013-09-24,8,2.9\n2013-09-24,9,3.2\n2013-09-24,10,4.6\n2013-09-24,11,8.5\n2013-09-24,12,9.7\n2013-09-24,13,11.2\n2013-09-24,14,11.4\n2013-09-24,15,12.0\n2013-09-24,16,12.7\n2013-09-24,17,12.5\n2013-09-24,18,10.5\n2013-09-24,19,6.7\n2013-09-24,20,3.9\n2013-09-24,21,3.3\n2013-09-24,22,4.0\n2013-09-24,23,3.5\n2013-09-25,0,3.9\n2013-09-25,1,3.6\n2013-09-25,2,3.6\n2013-09-25,3,3.8\n2013-09-25,4,3.0\n2013-09-25,5,2.7\n2013-09-25,6,4.0\n2013-09-25,7,3.8\n2013-09-25,8,1.8\n2013-09-25,9,1.8\n2013-09-25,10,3.2\n2013-09-25,11,6.9\n2013-09-25,12,8.7\n2013-09-25,13,10.1\n2013-09-25,14,11.2\n2013-09-25,15,11.6\n2013-09-25,16,12.1\n2013-09-25,17,12.1\n2013-09-25,18,11.3\n2013-09-25,19,6.6\n2013-09-25,20,5.4\n2013-09-25,21,6.8\n2013-09-25,22,4.5\n2013-09-25,23,4.2\n2013-09-26,0,3.0\n2013-09-26,1,2.2\n2013-09-26,2,2.7\n2013-09-26,3,2.1\n2013-09-26,4,2.1\n2013-09-26,5,3.0\n2013-09-26,6,3.5\n2013-09-26,7,4.1\n2013-09-26,8,4.8\n2013-09-26,9,4.8\n2013-09-26,10,4.8\n2013-09-26,11,7.1\n2013-09-26,12,8.3\n2013-09-26,13,9.0\n2013-09-26,14,8.9\n2013-09-26,15,10.5\n2013-09-26,16,10.7\n2013-09-26,17,9.7\n2013-09-26,18,8.7\n2013-09-26,19,6.2\n2013-09-26,20,3.9\n2013-09-26,21,2.0\n2013-09-26,22,2.4\n2013-09-26,23,2.4\n2013-09-27,0,2.0\n2013-09-27,1,1.6\n2013-09-27,2,0.8\n2013-09-27,3,0.9\n2013-09-27,4,0.5\n2013-09-27,5,0.6\n2013-09-27,6,0.7\n2013-09-27,7,0.1\n2013-09-27,8,-0.1\n2013-09-27,9,0.1\n2013-09-27,10,0.9\n2013-09-27,11,5.2\n2013-09-27,12,6.3\n2013-09-27,13,7.9\n2013-09-27,14,8.6\n2013-09-27,15,9.5\n2013-09-27,16,10.2\n2013-09-27,17,9.7\n2013-09-27,18,8.7\n2013-09-27,19,3.2\n2013-09-27,20,2.0\n2013-09-27,21,0.9\n2013-09-27,22,0.9\n2013-09-27,23,0.9\n2013-09-28,0,-0.3\n2013-09-28,1,-0.5\n2013-09-28,2,0.4\n2013-09-28,3,-0.3\n2013-09-28,4,-0.7\n2013-09-28,5,-0.3\n2013-09-28,6,-0.7\n2013-09-28,7,-0.3\n2013-09-28,8,-0.1\n2013-09-28,9,1.3\n2013-09-28,10,3.0\n2013-09-28,11,5.0\n2013-09-28,12,7.0\n2013-09-28,13,8.0\n2013-09-28,14,9.2\n2013-09-28,15,10.0\n2013-09-28,16,10.2\n2013-09-28,17,9.2\n2013-09-28,18,8.9\n2013-09-28,19,7.4\n2013-09-28,20,5.9\n2013-09-28,21,6.4\n2013-09-28,22,5.7\n2013-09-28,23,6.0\n2013-09-29,0,5.1\n2013-09-29,1,4.7\n2013-09-29,2,5.1\n2013-09-29,3,5.2\n2013-09-29,4,5.7\n2013-09-29,5,5.3\n2013-09-29,6,5.7\n2013-09-29,7,5.4\n2013-09-29,8,5.2\n2013-09-29,9,6.6\n2013-09-29,10,8.2\n2013-09-29,11,9.3\n2013-09-29,12,9.7\n2013-09-29,13,10.2\n2013-09-29,14,10.9\n2013-09-29,15,10.8\n2013-09-29,16,10.4\n2013-09-29,17,10.7\n2013-09-29,18,10.6\n2013-09-29,19,9.2\n2013-09-29,20,8.2\n2013-09-29,21,8.1\n2013-09-29,22,7.4\n2013-09-29,23,7.4\n2013-09-30,0,6.9\n2013-09-30,1,6.9\n2013-09-30,2,6.7\n2013-09-30,3,6.4\n2013-09-30,4,6.8\n2013-09-30,5,7.1\n2013-09-30,6,6.9\n2013-09-30,7,6.2\n2013-09-30,8,4.7\n2013-09-30,9,4.0\n2013-09-30,10,6.2\n2013-09-30,11,7.2\n2013-09-30,12,9.6\n2013-09-30,13,11.1\n2013-09-30,14,11.8\n2013-09-30,15,12.6\n2013-09-30,16,13.4\n2013-09-30,17,12.2\n2013-09-30,18,9.8\n2013-09-30,19,6.3\n2013-09-30,20,4.4\n2013-09-30,21,3.3\n2013-09-30,22,3.1\n2013-09-30,23,3.1\n2013-10-01,0,2.3\n2013-10-01,1,2.8\n2013-10-01,2,2.4\n2013-10-01,3,1.9\n2013-10-01,4,1.3\n2013-10-01,5,1.2\n2013-10-01,6,0.5\n2013-10-01,7,1.4\n2013-10-01,8,1.2\n2013-10-01,9,1.0\n2013-10-01,10,2.8\n2013-10-01,11,6.4\n2013-10-01,12,8.0\n2013-10-01,13,9.4\n2013-10-01,14,10.8\n2013-10-01,15,11.1\n2013-10-01,16,11.3\n2013-10-01,17,10.5\n2013-10-01,18,8.2\n2013-10-01,19,4.1\n2013-10-01,20,3.5\n2013-10-01,21,3.1\n2013-10-01,22,2.1\n2013-10-01,23,1.3\n2013-10-02,0,1.0\n2013-10-02,1,1.2\n2013-10-02,2,1.3\n2013-10-02,3,1.6\n2013-10-02,4,1.2\n2013-10-02,5,0.7\n2013-10-02,6,0.8\n2013-10-02,7,0.3\n2013-10-02,8,0.1\n2013-10-02,9,0.8\n2013-10-02,10,2.3\n2013-10-02,11,6.2\n2013-10-02,12,8.2\n2013-10-02,13,9.5\n2013-10-02,14,10.9\n2013-10-02,15,11.1\n2013-10-02,16,11.3\n2013-10-02,17,11.2\n2013-10-02,18,8.6\n2013-10-02,19,5.5\n2013-10-02,20,3.7\n2013-10-02,21,2.9\n2013-10-02,22,3.0\n2013-10-02,23,1.7\n2013-10-03,0,\n2013-10-03,1,\n2013-10-03,2,\n2013-10-03,3,\n2013-10-03,4,\n2013-10-03,5,\n2013-10-03,6,\n2013-10-03,7,\n2013-10-03,8,\n2013-10-03,9,\n2013-10-03,10,\n2013-10-03,11,\n2013-10-03,12,\n2013-10-03,13,\n2013-10-03,14,\n2013-10-03,15,\n2013-10-03,16,\n2013-10-03,17,\n2013-10-03,18,7.2\n2013-10-03,19,7.0\n2013-10-03,20,6.3\n2013-10-03,21,4.8\n2013-10-03,22,4.6\n2013-10-03,23,3.7\n2013-10-04,0,2.8\n2013-10-04,1,3.2\n2013-10-04,2,3.9\n2013-10-04,3,4.4\n2013-10-04,4,4.1\n2013-10-04,5,4.7\n2013-10-04,6,4.4\n2013-10-04,7,6.2\n2013-10-04,8,6.8\n2013-10-04,9,7.3\n2013-10-04,10,8.0\n2013-10-04,11,8.6\n2013-10-04,12,8.9\n2013-10-04,13,9.5\n2013-10-04,14,9.4\n2013-10-04,15,9.5\n2013-10-04,16,9.3\n2013-10-04,17,9.2\n2013-10-04,18,9.3\n2013-10-04,19,9.2\n2013-10-04,20,8.9\n2013-10-04,21,8.9\n2013-10-04,22,8.7\n2013-10-04,23,8.8\n2013-10-05,0,8.7\n2013-10-05,1,8.8\n2013-10-05,2,8.8\n2013-10-05,3,8.8\n2013-10-05,4,8.8\n2013-10-05,5,8.8\n2013-10-05,6,8.8\n2013-10-05,7,8.7\n2013-10-05,8,8.9\n2013-10-05,9,9.1\n2013-10-05,10,9.4\n2013-10-05,11,10.2\n2013-10-05,12,11.0\n2013-10-05,13,11.4\n2013-10-05,14,11.2\n2013-10-05,15,11.7\n2013-10-05,16,11.7\n2013-10-05,17,11.3\n2013-10-05,18,10.9\n2013-10-05,19,9.9\n2013-10-05,20,8.9\n2013-10-05,21,8.6\n2013-10-05,22,8.6\n2013-10-05,23,8.2\n2013-10-06,0,8.9\n2013-10-06,1,10.0\n2013-10-06,2,7.6\n2013-10-06,3,10.4\n2013-10-06,4,11.9\n2013-10-06,5,11.6\n2013-10-06,6,11.2\n2013-10-06,7,11.9\n2013-10-06,8,11.1\n2013-10-06,9,9.7\n2013-10-06,10,9.7\n2013-10-06,11,10.0\n2013-10-06,12,10.3\n2013-10-06,13,10.5\n2013-10-06,14,10.9\n2013-10-06,15,11.2\n2013-10-06,16,11.5\n2013-10-06,17,11.0\n2013-10-06,18,12.4\n2013-10-06,19,13.4\n2013-10-06,20,14.3\n2013-10-06,21,13.3\n2013-10-06,22,13.3\n2013-10-06,23,13.6\n2013-10-07,0,13.8\n2013-10-07,1,13.3\n2013-10-07,2,12.4\n2013-10-07,3,11.7\n2013-10-07,4,11.7\n2013-10-07,5,12.6\n2013-10-07,7,14.1\n2013-10-07,6,14.3\n2013-10-07,8,13.3\n2013-10-07,9,12.9\n2013-10-07,10,13.6\n2013-10-07,11,13.2\n2013-10-07,12,12.9\n2013-10-07,13,12.9\n2013-10-07,14,13.1\n2013-10-07,15,13.2\n2013-10-07,16,13.2\n2013-10-07,17,13.0\n2013-10-07,18,12.8\n2013-10-07,19,12.3\n2013-10-07,20,12.2\n2013-10-07,21,12.1\n2013-10-07,22,12.2\n2013-10-07,23,12.1\n2013-10-08,0,12.1\n2013-10-08,1,11.9\n2013-10-08,3,11.9\n2013-10-08,4,11.9\n2013-10-08,2,11.9\n2013-10-08,5,11.9\n2013-10-08,6,12.0\n2013-10-08,7,12.1\n2013-10-08,8,12.2\n2013-10-08,9,12.4\n2013-10-08,10,12.5\n2013-10-08,11,12.7\n2013-10-08,12,12.7\n2013-10-08,13,12.7\n2013-10-08,14,12.8\n2013-10-08,15,12.9\n2013-10-08,16,12.7\n2013-10-08,17,13.0\n2013-10-08,18,12.9\n2013-10-08,19,12.7\n2013-10-08,20,12.4\n2013-10-08,21,12.0\n2013-10-08,22,11.7\n2013-10-08,23,11.9\n2013-10-09,0,12.3\n2013-10-09,1,11.6\n2013-10-09,3,10.6\n2013-10-09,4,10.2\n2013-10-09,2,11.1\n2013-10-09,5,9.6\n2013-10-09,6,9.6\n2013-10-09,7,9.5\n2013-10-09,8,9.1\n2013-10-09,9,8.8\n2013-10-09,10,9.2\n2013-10-09,11,9.3\n2013-10-09,12,9.6\n2013-10-09,13,9.5\n2013-10-09,14,8.7\n2013-10-09,15,8.8\n2013-10-09,16,9.6\n2013-10-09,17,9.3\n2013-10-09,18,8.9\n2013-10-09,19,7.9\n2013-10-09,20,7.2\n2013-10-09,21,7.0\n2013-10-09,22,7.5\n2013-10-09,23,7.0\n2013-10-10,0,6.8\n2013-10-10,1,5.3\n2013-10-10,2,4.6\n2013-10-10,3,4.1\n2013-10-10,4,2.9\n2013-10-10,6,2.9\n2013-10-10,5,2.9\n2013-10-10,7,2.4\n2013-10-10,8,2.8\n2013-10-10,9,3.1\n2013-10-10,10,3.8\n2013-10-10,11,6.7\n2013-10-10,12,8.6\n2013-10-10,13,9.8\n2013-10-10,14,11.0\n2013-10-10,15,11.7\n2013-10-10,16,12.3\n2013-10-10,17,11.4\n2013-10-10,18,7.3\n2013-10-10,19,5.0\n2013-10-10,20,3.5\n2013-10-10,21,2.5\n2013-10-10,22,1.3\n2013-10-10,23,1.5\n2013-10-11,0,1.9\n2013-10-11,1,0.9\n2013-10-11,2,1.0\n2013-10-11,3,0.7\n2013-10-11,4,0.8\n2013-10-11,5,-0.2\n2013-10-11,6,0.2\n2013-10-11,7,-0.1\n2013-10-11,8,0.5\n2013-10-11,9,1.4\n2013-10-11,10,2.2\n2013-10-11,11,4.7\n2013-10-11,12,6.5\n2013-10-11,13,7.8\n2013-10-11,14,9.0\n2013-10-11,15,10.0\n2013-10-11,16,9.9\n2013-10-11,17,8.7\n2013-10-11,18,6.0\n2013-10-11,19,3.8\n2013-10-11,20,2.9\n2013-10-11,21,2.3\n2013-10-11,22,1.8\n2013-10-11,23,1.5\n2013-10-12,0,1.7\n2013-10-12,1,2.1\n2013-10-12,2,1.6\n2013-10-12,3,1.7\n2013-10-12,4,2.1\n2013-10-12,6,1.6\n2013-10-12,7,0.4\n2013-10-12,5,2.2\n2013-10-12,8,0.7\n2013-10-12,9,1.3\n2013-10-12,10,2.1\n2013-10-12,11,5.2\n2013-10-12,12,7.0\n2013-10-12,13,8.4\n2013-10-12,14,10.2\n2013-10-12,15,10.9\n2013-10-12,16,11.0\n2013-10-12,17,10.0\n2013-10-12,18,6.0\n2013-10-12,19,4.4\n2013-10-12,20,4.2\n2013-10-12,21,3.5\n2013-10-12,22,3.5\n2013-10-12,23,3.2\n2013-10-13,0,3.2\n2013-10-13,1,3.6\n2013-10-13,2,1.7\n2013-10-13,3,2.4\n2013-10-13,4,3.3\n2013-10-13,5,2.5\n2013-10-13,7,3.0\n2013-10-13,8,2.5\n2013-10-13,6,3.0\n2013-10-13,9,2.4\n2013-10-13,10,3.1\n2013-10-13,11,6.5\n2013-10-13,12,8.2\n2013-10-13,13,9.8\n2013-10-13,14,11.2\n2013-10-13,15,12.3\n2013-10-13,16,12.4\n2013-10-13,17,10.9\n2013-10-13,18,7.0\n2013-10-13,19,5.4\n2013-10-13,20,5.0\n2013-10-13,21,5.2\n2013-10-13,22,5.6\n2013-10-13,23,5.4\n2013-10-14,0,4.4\n2013-10-14,1,3.7\n2013-10-14,2,4.1\n2013-10-14,3,2.7\n2013-10-14,4,3.5\n2013-10-14,5,2.9\n2013-10-14,6,2.9\n2013-10-14,7,2.7\n2013-10-14,8,3.0\n2013-10-14,9,2.4\n2013-10-14,10,3.2\n2013-10-14,11,7.2\n2013-10-14,12,8.3\n2013-10-14,13,9.6\n2013-10-14,14,11.0\n2013-10-14,15,12.2\n2013-10-14,16,11.5\n2013-10-14,17,10.2\n2013-10-14,18,6.3\n2013-10-14,19,5.2\n2013-10-14,20,3.8\n2013-10-14,21,2.8\n2013-10-14,22,2.9\n2013-10-14,23,3.3\n2013-10-15,0,2.8\n2013-10-15,1,2.2\n2013-10-15,2,2.2\n2013-10-15,3,2.4\n2013-10-15,4,1.9\n2013-10-15,5,5.3\n2013-10-15,7,7.4\n2013-10-15,6,6.8\n2013-10-15,8,7.6\n2013-10-15,9,7.6\n2013-10-15,10,7.7\n2013-10-15,11,7.9\n2013-10-15,12,8.0\n2013-10-15,13,8.3\n2013-10-15,14,8.3\n2013-10-15,15,8.5\n2013-10-15,16,8.5\n2013-10-15,17,8.3\n2013-10-15,18,8.0\n2013-10-15,19,7.5\n2013-10-15,20,7.4\n2013-10-15,21,7.2\n2013-10-15,22,7.6\n2013-10-15,23,7.1\n2013-10-16,0,7.0\n2013-10-16,1,6.8\n2013-10-16,2,6.9\n2013-10-16,3,6.5\n2013-10-16,4,6.3\n2013-10-16,5,6.5\n2013-10-16,6,6.4\n2013-10-16,7,6.5\n2013-10-16,8,6.2\n2013-10-16,9,6.0\n2013-10-16,10,6.6\n2013-10-16,11,7.6\n2013-10-16,12,8.5\n2013-10-16,13,8.9\n2013-10-16,14,9.0\n2013-10-16,15,9.2\n2013-10-16,16,9.5\n2013-10-16,17,9.1\n2013-10-16,18,8.0\n2013-10-16,19,7.8\n2013-10-16,20,7.7\n2013-10-16,21,7.1\n2013-10-16,22,6.8\n2013-10-16,23,6.6\n2013-10-17,0,6.2\n2013-10-17,1,6.2\n2013-10-17,2,6.3\n2013-10-17,3,6.3\n2013-10-17,4,6.5\n2013-10-17,5,6.7\n2013-10-17,6,6.3\n2013-10-17,7,6.2\n2013-10-17,8,6.1\n2013-10-17,9,5.8\n2013-10-17,10,6.0\n2013-10-17,11,6.6\n2013-10-17,12,6.5\n2013-10-17,13,7.0\n2013-10-17,14,7.6\n2013-10-17,15,7.6\n2013-10-17,16,6.8\n2013-10-17,17,6.6\n2013-10-17,18,5.9\n2013-10-17,19,5.3\n2013-10-17,20,6.2\n2013-10-17,21,6.3\n2013-10-17,22,6.0\n2013-10-17,23,5.7\n2013-10-18,0,5.6\n2013-10-18,1,5.4\n2013-10-18,2,5.1\n2013-10-18,3,4.4\n2013-10-18,4,4.3\n2013-10-18,5,3.8\n2013-10-18,6,2.4\n2013-10-18,7,2.0\n2013-10-18,8,0.9\n2013-10-18,9,0.2\n2013-10-18,10,-0.2\n2013-10-18,11,1.8\n2013-10-18,12,2.0\n2013-10-18,13,5.2\n2013-10-18,14,6.5\n2013-10-18,15,7.6\n2013-10-18,16,8.0\n2013-10-18,17,6.8\n2013-10-18,18,6.6\n2013-10-18,19,5.3\n2013-10-18,20,4.9\n2013-10-18,21,4.6\n2013-10-18,22,6.3\n2013-10-18,23,4.5\n2013-10-19,0,5.9\n2013-10-19,1,4.5\n2013-10-19,3,3.2\n2013-10-19,4,3.3\n2013-10-19,2,3.5\n2013-10-19,5,3.3\n2013-10-19,6,3.5\n2013-10-19,7,3.4\n2013-10-19,8,2.7\n2013-10-19,9,1.0\n2013-10-19,10,1.2\n2013-10-19,11,2.3\n2013-10-19,12,3.3\n2013-10-19,13,5.6\n2013-10-19,14,6.0\n2013-10-19,15,6.2\n2013-10-19,16,6.0\n2013-10-19,17,5.6\n2013-10-19,18,4.0\n2013-10-19,19,1.1\n2013-10-19,20,0.5\n2013-10-19,21,-1.0\n2013-10-19,22,-1.6\n2013-10-19,23,-1.6\n2013-10-20,0,-1.9\n2013-10-20,1,-1.9\n2013-10-20,2,-2.5\n2013-10-20,4,-2.7\n2013-10-20,5,-2.6\n2013-10-20,3,-2.3\n2013-10-20,6,-2.6\n2013-10-20,7,-2.1\n2013-10-20,8,-1.8\n2013-10-20,9,-2.2\n2013-10-20,10,-1.9\n2013-10-20,11,0.4\n2013-10-20,12,1.4\n2013-10-20,13,2.8\n2013-10-20,14,4.7\n2013-10-20,15,6.5\n2013-10-20,16,6.4\n2013-10-20,17,4.8\n2013-10-20,18,1.8\n2013-10-20,19,0.7\n2013-10-20,20,\n2013-10-20,21,\n2013-10-20,22,-1.4\n2013-10-20,23,-1.0\n2013-10-21,0,-0.8\n2013-10-21,1,-0.9\n2013-10-21,2,-1.3\n2013-10-21,3,-1.1\n2013-10-21,4,-1.9\n2013-10-21,5,-2.0\n2013-10-21,6,-1.4\n2013-10-21,7,-1.1\n2013-10-21,8,-0.2\n2013-10-21,9,0.5\n2013-10-21,10,1.9\n2013-10-21,11,3.6\n2013-10-21,12,5.8\n2013-10-21,13,7.0\n2013-10-21,14,8.3\n2013-10-21,15,8.7\n2013-10-21,16,8.5\n2013-10-21,17,7.0\n2013-10-21,18,6.3\n2013-10-21,19,5.3\n2013-10-21,20,5.2\n2013-10-21,21,4.7\n2013-10-21,22,3.1\n2013-10-21,23,2.4\n2013-10-22,0,2.2\n2013-10-22,1,1.9\n2013-10-22,2,2.6\n2013-10-22,3,3.5\n2013-10-22,5,4.2\n2013-10-22,6,4.5\n2013-10-22,4,3.6\n2013-10-22,7,5.5\n2013-10-22,8,4.5\n2013-10-22,9,4.1\n2013-10-22,10,3.8\n2013-10-22,11,3.9\n2013-10-22,12,4.1\n2013-10-22,13,4.5\n2013-10-22,14,4.8\n2013-10-22,15,5.2\n2013-10-22,16,5.3\n2013-10-22,17,5.3\n2013-10-22,18,5.2\n2013-10-22,19,5.2\n2013-10-22,20,5.2\n2013-10-22,21,5.2\n2013-10-22,22,5.3\n2013-10-22,23,5.6\n2013-10-23,0,5.7\n2013-10-23,1,5.9\n2013-10-23,2,6.1\n2013-10-23,3,6.2\n2013-10-23,4,6.4\n2013-10-23,5,6.5\n2013-10-23,6,6.6\n2013-10-23,7,6.7\n2013-10-23,8,6.8\n2013-10-23,9,6.9\n2013-10-23,10,7.2\n2013-10-23,11,7.9\n2013-10-23,12,8.6\n2013-10-23,13,9.3\n2013-10-23,14,9.6\n2013-10-23,15,9.3\n2013-10-23,16,9.4\n2013-10-23,17,9.4\n2013-10-23,18,9.2\n2013-10-23,19,8.7\n2013-10-23,20,8.6\n2013-10-23,21,8.6\n2013-10-23,22,8.6\n2013-10-23,23,9.0\n2013-10-24,0,8.8\n2013-10-24,1,9.1\n2013-10-24,2,9.0\n2013-10-24,3,9.9\n2013-10-24,4,10.7\n2013-10-24,5,9.6\n2013-10-24,6,9.0\n2013-10-24,7,8.7\n2013-10-24,8,8.3\n2013-10-24,9,7.5\n2013-10-24,10,7.4\n2013-10-24,11,8.3\n2013-10-24,12,9.1\n2013-10-24,13,9.8\n2013-10-24,14,9.9\n2013-10-24,15,9.9\n2013-10-24,16,\n2013-10-24,17,\n2013-10-24,18,8.2\n2013-10-24,19,8.9\n2013-10-24,20,8.0\n2013-10-24,21,7.5\n2013-10-24,22,8.0\n2013-10-24,23,8.0\n2013-10-25,0,6.7\n2013-10-25,1,6.1\n2013-10-25,3,5.5\n2013-10-25,4,6.1\n2013-10-25,2,5.6\n2013-10-25,5,5.9\n2013-10-25,6,5.7\n2013-10-25,7,5.5\n2013-10-25,8,5.3\n2013-10-25,9,5.1\n2013-10-25,10,4.7\n2013-10-25,11,4.7\n2013-10-25,12,5.5\n2013-10-25,13,6.3\n2013-10-25,14,7.5\n2013-10-25,15,8.6\n2013-10-25,16,8.1\n2013-10-25,17,6.6\n2013-10-25,18,5.1\n2013-10-25,19,4.6\n2013-10-25,20,4.6\n2013-10-25,21,4.8\n2013-10-25,22,5.1\n2013-10-25,23,5.5\n2013-10-26,0,5.1\n2013-10-26,1,5.2\n2013-10-26,2,5.3\n2013-10-26,3,5.3\n2013-10-26,5,5.7\n2013-10-26,6,5.7\n2013-10-26,4,5.6\n2013-10-26,7,5.7\n2013-10-26,8,5.8\n2013-10-26,9,5.8\n2013-10-26,10,6.1\n2013-10-26,11,6.4\n2013-10-26,12,6.8\n2013-10-26,13,7.5\n2013-10-26,14,8.3\n2013-10-26,15,10.3\n2013-10-26,16,10.8\n2013-10-26,17,10.1\n2013-10-26,18,9.0\n2013-10-26,19,8.3\n2013-10-26,20,8.2\n2013-10-26,21,7.4\n2013-10-26,22,7.3\n2013-10-26,23,7.8\n2013-10-27,0,7.6\n2013-10-27,1,7.6\n2013-10-27,2,7.5\n2013-10-27,3,7.5\n2013-10-27,4,7.3\n2013-10-27,5,7.4\n2013-10-27,6,7.3\n2013-10-27,7,7.3\n2013-10-27,8,7.4\n2013-10-27,9,7.4\n2013-10-27,10,7.4\n2013-10-27,11,7.9\n2013-10-27,12,7.5\n2013-10-27,13,7.9\n2013-10-27,14,8.6\n2013-10-27,15,8.6\n2013-10-27,16,7.6\n2013-10-27,17,6.6\n2013-10-27,18,6.0\n2013-10-27,19,5.5\n2013-10-27,20,5.9\n2013-10-27,21,6.1\n2013-10-27,22,6.4\n2013-10-27,23,5.8\n2013-10-28,0,5.7\n2013-10-28,1,6.0\n2013-10-28,2,6.2\n2013-10-28,3,6.2\n2013-10-28,4,6.0\n2013-10-28,5,5.9\n2013-10-28,6,6.2\n2013-10-28,7,6.3\n2013-10-28,8,6.2\n2013-10-28,9,6.2\n2013-10-28,10,6.7\n2013-10-28,11,7.0\n2013-10-28,12,7.5\n2013-10-28,13,7.6\n2013-10-28,14,7.7\n2013-10-28,15,7.8\n2013-10-28,16,7.5\n2013-10-28,17,7.4\n2013-10-28,18,7.2\n2013-10-28,19,7.1\n2013-10-28,20,6.9\n2013-10-28,21,6.6\n2013-10-28,22,6.6\n2013-10-28,23,6.6\n2013-10-29,0,6.6\n2013-10-29,1,6.5\n2013-10-29,2,6.3\n2013-10-29,3,6.4\n2013-10-29,4,6.3\n2013-10-29,5,6.4\n2013-10-29,6,6.2\n2013-10-29,7,6.3\n2013-10-29,8,6.4\n2013-10-29,9,6.3\n2013-10-29,10,6.3\n2013-10-29,11,6.8\n2013-10-29,12,7.6\n2013-10-29,13,8.0\n2013-10-29,14,7.9\n2013-10-29,15,8.0\n2013-10-29,16,7.9\n2013-10-29,17,7.5\n2013-10-29,18,7.3\n2013-10-29,19,7.2\n2013-10-29,20,7.1\n2013-10-29,21,6.8\n2013-10-29,22,6.6\n2013-10-29,23,6.5\n2013-10-30,0,6.4\n2013-10-30,1,5.8\n2013-10-30,2,5.9\n2013-10-30,3,6.1\n2013-10-30,4,5.7\n2013-10-30,5,5.5\n2013-10-30,6,5.5\n2013-10-30,7,5.1\n2013-10-30,8,4.9\n2013-10-30,9,4.6\n2013-10-30,10,4.7\n2013-10-30,11,5.5\n2013-10-30,12,6.2\n2013-10-30,13,4.3\n2013-10-30,14,6.2\n2013-10-30,15,6.1\n2013-10-30,16,5.6\n2013-10-30,17,5.5\n2013-10-30,18,4.3\n2013-10-30,19,3.3\n2013-10-30,20,3.4\n2013-10-30,21,3.0\n2013-10-30,22,3.2\n2013-10-30,23,3.1\n2013-10-31,0,3.5\n2013-10-31,1,3.6\n2013-10-31,2,3.8\n2013-10-31,3,4.1\n2013-10-31,4,4.1\n2013-10-31,5,4.3\n2013-10-31,7,4.7\n2013-10-31,6,4.6\n2013-10-31,8,4.4\n2013-10-31,9,3.8\n2013-10-31,10,3.6\n2013-10-31,11,5.1\n2013-10-31,12,5.3\n2013-10-31,13,5.5\n2013-10-31,14,6.2\n2013-10-31,15,7.0\n2013-10-31,16,6.1\n2013-10-31,17,5.6\n2013-10-31,18,4.8\n2013-10-31,19,4.8\n2013-10-31,20,4.6\n2013-10-31,21,4.9\n2013-10-31,22,5.2\n2013-10-31,23,5.0\n2013-11-01,0,5.1\n2013-11-01,1,5.5\n2013-11-01,2,5.6\n2013-11-01,3,5.1\n2013-11-01,4,4.8\n2013-11-01,5,4.6\n2013-11-01,6,4.2\n2013-11-01,7,4.2\n2013-11-01,8,3.8\n2013-11-01,9,3.5\n2013-11-01,10,3.5\n2013-11-01,11,4.6\n2013-11-01,12,4.7\n2013-11-01,13,5.6\n2013-11-01,14,6.9\n2013-11-01,15,7.1\n2013-11-01,16,7.1\n2013-11-01,17,6.7\n2013-11-01,18,6.0\n2013-11-01,19,5.9\n2013-11-01,20,5.8\n2013-11-01,21,5.4\n2013-11-01,22,5.2\n2013-11-01,23,5.1\n2013-11-02,0,5.3\n2013-11-02,1,4.6\n2013-11-02,2,4.1\n2013-11-02,3,3.8\n2013-11-02,4,3.8\n2013-11-02,5,3.6\n2013-11-02,6,3.4\n2013-11-02,8,3.2\n2013-11-02,7,3.2\n2013-11-02,9,3.4\n2013-11-02,10,3.7\n2013-11-02,12,4.8\n2013-11-02,11,4.2\n2013-11-02,13,5.4\n2013-11-02,14,5.4\n2013-11-02,15,5.5\n2013-11-02,16,5.4\n2013-11-02,17,5.0\n2013-11-02,18,4.1\n2013-11-02,19,3.4\n2013-11-02,20,3.9\n2013-11-02,21,4.1\n2013-11-02,22,3.9\n2013-11-02,23,3.8\n2013-11-03,0,3.1\n2013-11-03,1,2.5\n2013-11-03,3,3.4\n2013-11-03,4,3.7\n2013-11-03,2,3.0\n2013-11-03,5,4.3\n2013-11-03,6,6.8\n2013-11-03,7,8.1\n2013-11-03,8,8.3\n2013-11-03,9,7.5\n2013-11-03,10,6.7\n2013-11-03,11,6.5\n2013-11-03,12,6.8\n2013-11-03,13,7.7\n2013-11-03,14,9.3\n2013-11-03,15,9.2\n2013-11-03,16,8.3\n2013-11-03,17,7.1\n2013-11-03,18,6.2\n2013-11-03,19,5.1\n2013-11-03,20,5.3\n2013-11-03,21,5.2\n2013-11-03,22,4.2\n2013-11-03,23,4.6\n2013-11-04,0,5.1\n2013-11-04,1,5.1\n2013-11-04,2,4.6\n2013-11-04,3,4.3\n2013-11-04,4,4.2\n2013-11-04,5,4.2\n2013-11-04,6,3.9\n2013-11-04,7,3.8\n2013-11-04,8,3.8\n2013-11-04,9,3.9\n2013-11-04,10,4.3\n2013-11-04,11,5.3\n2013-11-04,12,6.8\n2013-11-04,13,6.9\n2013-11-04,14,6.7\n2013-11-04,15,7.0\n2013-11-04,16,7.0\n2013-11-04,17,6.4\n2013-11-04,18,5.7\n2013-11-04,19,5.3\n2013-11-04,20,5.2\n2013-11-04,21,5.0\n2013-11-04,22,4.6\n2013-11-04,23,4.3\n2013-11-05,0,4.3\n2013-11-05,1,4.4\n2013-11-05,2,4.3\n2013-11-05,3,4.2\n2013-11-05,4,4.1\n2013-11-05,5,4.2\n2013-11-05,6,4.4\n2013-11-05,7,4.4\n2013-11-05,8,4.2\n2013-11-05,9,4.3\n2013-11-05,10,4.6\n2013-11-05,11,5.2\n2013-11-05,12,6.5\n2013-11-05,13,6.6\n2013-11-05,14,7.3\n2013-11-05,15,6.8\n2013-11-05,16,6.5\n2013-11-05,17,5.2\n2013-11-05,18,4.1\n2013-11-05,19,3.6\n2013-11-05,20,2.7\n2013-11-05,21,1.2\n2013-11-05,22,0.6\n2013-11-05,23,0.1\n2013-11-06,0,0.2\n2013-11-06,1,-0.1\n2013-11-06,2,-0.5\n2013-11-06,3,-0.3\n2013-11-06,4,0.3\n2013-11-06,5,1.1\n2013-11-06,6,1.5\n2013-11-06,7,2.0\n2013-11-06,8,2.2\n2013-11-06,9,2.3\n2013-11-06,10,2.6\n2013-11-06,11,3.2\n2013-11-06,12,4.5\n2013-11-06,13,5.3\n2013-11-06,14,5.5\n2013-11-06,15,5.2\n2013-11-06,16,5.1\n2013-11-06,17,4.6\n2013-11-06,18,3.5\n2013-11-06,19,2.1\n2013-11-06,20,1.1\n2013-11-06,21,0.6\n2013-11-06,22,0.9\n2013-11-06,23,1.5\n2013-11-07,0,1.8\n2013-11-07,1,2.1\n2013-11-07,2,2.2\n2013-11-07,3,2.4\n2013-11-07,4,2.2\n2013-11-07,5,2.4\n2013-11-07,6,2.4\n2013-11-07,7,2.2\n2013-11-07,8,2.2\n2013-11-07,9,2.1\n2013-11-07,10,2.1\n2013-11-07,11,2.7\n2013-11-07,12,3.2\n2013-11-07,13,3.7\n2013-11-07,14,4.2\n2013-11-07,15,4.2\n2013-11-07,16,4.0\n2013-11-07,17,3.7\n2013-11-07,18,3.3\n2013-11-07,19,3.4\n2013-11-07,20,4.7\n2013-11-07,21,5.0\n2013-11-07,22,4.2\n2013-11-07,23,3.3\n2013-11-08,0,3.3\n2013-11-08,1,3.2\n2013-11-08,2,3.1\n2013-11-08,3,2.9\n2013-11-08,4,2.2\n2013-11-08,5,2.3\n2013-11-08,6,2.7\n2013-11-08,7,3.0\n2013-11-08,8,3.1\n2013-11-08,9,2.8\n2013-11-08,10,2.9\n2013-11-08,11,3.5\n2013-11-08,12,4.0\n2013-11-08,13,4.6\n2013-11-08,14,4.8\n2013-11-08,15,4.7\n2013-11-08,16,4.5\n2013-11-08,17,4.1\n2013-11-08,18,3.8\n2013-11-08,19,3.9\n2013-11-08,20,4.4\n2013-11-08,21,5.0\n2013-11-08,22,4.4\n2013-11-08,23,3.9\n2013-11-09,0,4.6\n2013-11-09,1,6.4\n2013-11-09,3,4.7\n2013-11-09,4,4.3\n2013-11-09,2,6.3\n2013-11-09,5,4.4\n2013-11-09,6,4.3\n2013-11-09,7,4.2\n2013-11-09,8,4.2\n2013-11-09,9,4.3\n2013-11-09,10,4.4\n2013-11-09,11,4.7\n2013-11-09,12,5.2\n2013-11-09,13,5.3\n2013-11-09,14,5.6\n2013-11-09,15,5.9\n2013-11-09,16,5.4\n2013-11-09,17,5.0\n2013-11-09,18,3.9\n2013-11-09,19,2.7\n2013-11-09,20,2.4\n2013-11-09,21,2.3\n2013-11-09,22,2.3\n2013-11-09,23,1.7\n2013-11-10,0,1.8\n2013-11-10,1,1.3\n2013-11-10,2,1.1\n2013-11-10,4,2.6\n2013-11-10,5,2.3\n2013-11-10,3,2.0\n2013-11-10,6,1.4\n2013-11-10,7,0.6\n2013-11-10,8,0.8\n2013-11-10,9,0.8\n2013-11-10,10,1.6\n2013-11-10,11,2.0\n2013-11-10,12,2.2\n2013-11-10,13,2.1\n2013-11-10,14,3.9\n2013-11-10,15,5.2\n2013-11-10,16,5.2\n2013-11-10,17,5.2\n2013-11-10,18,5.0\n2013-11-10,19,3.5\n2013-11-10,20,2.7\n2013-11-10,21,1.1\n2013-11-10,22,-0.3\n2013-11-10,23,-0.9\n2013-11-11,0,-1.1\n2013-11-11,1,-1.3\n2013-11-11,2,-1.8\n2013-11-11,3,-2.2\n2013-11-11,4,-2.3\n2013-11-11,5,-2.4\n2013-11-11,6,-2.1\n2013-11-11,7,-1.6\n2013-11-11,8,-0.9\n2013-11-11,9,-0.5\n2013-11-11,10,0.0\n2013-11-11,11,0.6\n2013-11-11,12,1.4\n2013-11-11,13,2.0\n2013-11-11,14,2.3\n2013-11-11,15,2.0\n2013-11-11,16,1.9\n2013-11-11,17,2.1\n2013-11-11,18,2.1\n2013-11-11,19,2.3\n2013-11-11,20,2.3\n2013-11-11,21,2.7\n2013-11-11,22,2.7\n2013-11-11,23,2.4\n2013-11-12,0,2.6\n2013-11-12,1,2.8\n2013-11-12,2,5.4\n2013-11-12,3,5.5\n2013-11-12,4,7.3\n2013-11-12,5,6.7\n2013-11-12,6,6.5\n2013-11-12,7,6.7\n2013-11-12,8,6.4\n2013-11-12,9,6.6\n2013-11-12,10,5.8\n2013-11-12,11,5.8\n2013-11-12,12,6.4\n2013-11-12,13,7.2\n2013-11-12,14,7.0\n2013-11-12,15,6.9\n2013-11-12,16,5.8\n2013-11-12,17,5.2\n2013-11-12,18,4.2\n2013-11-12,19,4.3\n2013-11-12,20,4.9\n2013-11-12,21,4.8\n2013-11-12,22,4.6\n2013-11-12,23,4.0\n2013-11-13,0,4.7\n2013-11-13,1,4.8\n2013-11-13,2,5.1\n2013-11-13,3,4.8\n2013-11-13,4,4.4\n2013-11-13,5,3.6\n2013-11-13,6,3.9\n2013-11-13,7,3.7\n2013-11-13,8,3.9\n2013-11-13,9,3.8\n2013-11-13,10,4.2\n2013-11-13,11,4.5\n2013-11-13,12,5.3\n2013-11-13,13,5.5\n2013-11-13,14,5.1\n2013-11-13,15,5.2\n2013-11-13,16,4.7\n2013-11-13,17,4.2\n2013-11-13,18,3.9\n2013-11-13,19,4.6\n2013-11-13,20,4.1\n2013-11-13,21,3.1\n2013-11-13,22,3.7\n2013-11-13,23,3.7\n2013-11-14,0,3.6\n2013-11-14,1,3.3\n2013-11-14,2,3.3\n2013-11-14,3,3.5\n2013-11-14,4,3.6\n2013-11-14,5,3.4\n2013-11-14,6,3.7\n2013-11-14,7,4.1\n2013-11-14,8,3.9\n2013-11-14,9,3.7\n2013-11-14,10,3.8\n2013-11-14,11,4.9\n2013-11-14,12,5.3\n2013-11-14,13,5.5\n2013-11-14,14,5.6\n2013-11-14,15,5.6\n2013-11-14,16,5.1\n2013-11-14,17,4.8\n2013-11-14,18,4.7\n2013-11-14,19,4.7\n2013-11-14,20,4.7\n2013-11-14,21,4.6\n2013-11-14,22,4.7\n2013-11-14,23,4.7\n2013-11-15,0,4.9\n2013-11-15,1,5.3\n2013-11-15,2,6.3\n2013-11-15,3,6.4\n2013-11-15,4,6.0\n2013-11-15,5,5.7\n2013-11-15,6,5.5\n2013-11-15,7,4.8\n2013-11-15,8,5.0\n2013-11-15,9,5.1\n2013-11-15,10,4.3\n2013-11-15,11,5.1\n2013-11-15,12,5.6\n2013-11-15,13,5.3\n2013-11-15,14,5.6\n2013-11-15,15,6.6\n2013-11-15,16,7.2\n2013-11-15,17,8.0\n2013-11-15,18,9.3\n2013-11-15,19,10.5\n2013-11-15,20,10.7\n2013-11-15,21,10.6\n2013-11-15,22,10.2\n2013-11-15,23,9.7\n2013-11-16,0,10.1\n2013-11-16,1,9.7\n2013-11-16,2,9.4\n2013-11-16,4,9.2\n2013-11-16,5,11.1\n2013-11-16,3,9.4\n2013-11-16,6,10.6\n2013-11-16,7,11.0\n2013-11-16,8,11.5\n2013-11-16,9,11.8\n2013-11-16,10,11.9\n2013-11-16,11,11.8\n2013-11-16,12,11.7\n2013-11-16,13,11.0\n2013-11-16,14,10.9\n2013-11-16,15,11.2\n2013-11-16,16,11.4\n2013-11-16,17,11.5\n2013-11-16,18,11.1\n2013-11-16,19,11.4\n2013-11-16,20,10.2\n2013-11-16,21,9.3\n2013-11-16,22,8.3\n2013-11-16,23,8.3\n2013-11-17,0,7.1\n2013-11-17,1,5.6\n2013-11-17,2,5.8\n2013-11-17,4,6.0\n2013-11-17,5,5.1\n2013-11-17,3,5.9\n2013-11-17,6,5.4\n2013-11-17,7,5.8\n2013-11-17,8,5.8\n2013-11-17,9,5.1\n2013-11-17,11,5.2\n2013-11-17,10,5.0\n2013-11-17,12,5.0\n2013-11-17,13,5.1\n2013-11-17,14,5.8\n2013-11-17,15,6.0\n2013-11-17,16,5.9\n2013-11-17,17,5.7\n2013-11-17,18,6.1\n2013-11-17,19,6.1\n2013-11-17,20,6.1\n2013-11-17,21,6.2\n2013-11-17,22,5.9\n2013-11-17,23,5.9\n2013-11-18,0,6.6\n2013-11-18,1,6.2\n2013-11-18,3,6.2\n2013-11-18,4,6.8\n2013-11-18,2,6.5\n2013-11-18,5,7.4\n2013-11-18,6,6.2\n2013-11-18,7,6.3\n2013-11-18,8,6.5\n2013-11-18,9,6.3\n2013-11-18,10,6.4\n2013-11-18,11,7.3\n2013-11-18,12,7.5\n2013-11-18,13,7.7\n2013-11-18,14,7.0\n2013-11-18,15,5.7\n2013-11-18,16,4.9\n2013-11-18,17,4.2\n2013-11-18,18,3.7\n2013-11-18,19,3.4\n2013-11-18,20,3.6\n2013-11-18,21,3.7\n2013-11-18,22,3.5\n2013-11-18,23,3.5\n2013-11-19,0,3.5\n2013-11-19,1,3.2\n2013-11-19,2,2.3\n2013-11-19,3,2.3\n2013-11-19,4,1.9\n2013-11-19,5,1.1\n2013-11-19,6,0.7\n2013-11-19,7,0.7\n2013-11-19,8,1.1\n2013-11-19,9,0.9\n2013-11-19,10,0.7\n2013-11-19,11,0.8\n2013-11-19,12,0.8\n2013-11-19,13,0.9\n2013-11-19,14,1.5\n2013-11-19,15,1.3\n2013-11-19,16,1.5\n2013-11-19,17,1.5\n2013-11-19,18,1.2\n2013-11-19,19,0.1\n2013-11-19,20,-0.2\n2013-11-19,21,-1.1\n2013-11-19,22,-2.0\n2013-11-19,23,-2.2\n2013-11-20,0,-2.6\n2013-11-20,1,-2.3\n2013-11-20,2,-2.6\n2013-11-20,3,-1.9\n2013-11-20,4,-1.7\n2013-11-20,5,-1.5\n2013-11-20,6,-1.4\n2013-11-20,7,-1.8\n2013-11-20,8,-2.4\n2013-11-20,9,-2.7\n2013-11-20,10,-3.1\n2013-11-20,11,-2.8\n2013-11-20,12,-1.8\n2013-11-20,13,-1.0\n2013-11-20,14,-1.4\n2013-11-20,15,-1.8\n2013-11-20,16,-2.0\n2013-11-20,17,-2.5\n2013-11-20,18,-2.5\n2013-11-20,19,-2.8\n2013-11-20,20,-3.5\n2013-11-20,21,-3.7\n2013-11-20,22,-3.5\n2013-11-20,23,-3.7\n2013-11-21,0,-3.3\n2013-11-21,1,-2.4\n2013-11-21,2,-1.8\n2013-11-21,3,-1.2\n2013-11-21,4,-1.0\n2013-11-21,5,-1.2\n2013-11-21,6,-1.2\n2013-11-21,7,-1.1\n2013-11-21,8,-0.9\n2013-11-21,9,-0.9\n2013-11-21,10,-0.5\n2013-11-21,11,-0.1\n2013-11-21,12,0.2\n2013-11-21,13,0.5\n2013-11-21,14,0.8\n2013-11-21,15,0.9\n2013-11-21,16,0.7\n2013-11-21,17,0.7\n2013-11-21,18,0.3\n2013-11-21,19,-0.2\n2013-11-21,20,0.1\n2013-11-21,21,0.2\n2013-11-21,22,0.2\n2013-11-21,23,0.1\n2013-11-22,0,-0.3\n2013-11-22,1,-0.3\n2013-11-22,2,-0.3\n2013-11-22,3,-0.2\n2013-11-22,4,-0.1\n2013-11-22,5,-0.2\n2013-11-22,6,-0.3\n2013-11-22,7,-1.3\n2013-11-22,8,-2.4\n2013-11-22,9,-2.3\n2013-11-22,10,-1.1\n2013-11-22,11,0.0\n2013-11-22,12,0.8\n2013-11-22,13,1.0\n2013-11-22,14,1.1\n2013-11-22,15,1.3\n2013-11-22,16,1.3\n2013-11-22,17,0.9\n2013-11-22,18,0.8\n2013-11-22,19,0.8\n2013-11-22,20,0.7\n2013-11-22,21,0.8\n2013-11-22,22,0.8\n2013-11-22,23,0.7\n2013-11-23,0,0.6\n2013-11-23,1,0.6\n2013-11-23,2,0.7\n2013-11-23,3,0.9\n2013-11-23,4,0.8\n2013-11-23,6,0.9\n2013-11-23,5,0.9\n2013-11-23,7,0.8\n2013-11-23,8,0.8\n2013-11-23,9,0.8\n2013-11-23,10,0.8\n2013-11-23,11,1.1\n2013-11-23,12,1.7\n2013-11-23,13,2.2\n2013-11-23,14,2.7\n2013-11-23,15,2.7\n2013-11-23,16,3.1\n2013-11-23,17,4.3\n2013-11-23,18,5.3\n2013-11-23,19,4.9\n2013-11-23,20,4.2\n2013-11-23,21,3.7\n2013-11-23,22,2.6\n2013-11-23,23,2.0\n2013-11-24,0,1.7\n2013-11-24,1,1.7\n2013-11-24,3,1.4\n2013-11-24,4,1.2\n2013-11-24,5,1.1\n2013-11-24,2,1.5\n2013-11-24,6,1.3\n2013-11-24,7,1.3\n2013-11-24,8,1.3\n2013-11-24,9,1.4\n2013-11-24,10,1.8\n2013-11-24,11,2.0\n2013-11-24,12,2.3\n2013-11-24,13,2.5\n2013-11-24,14,2.5\n2013-11-24,15,2.5\n2013-11-24,16,2.4\n2013-11-24,17,2.4\n2013-11-24,18,2.7\n2013-11-24,19,2.7\n2013-11-24,20,2.6\n2013-11-24,21,2.6\n2013-11-24,22,2.7\n2013-11-24,23,2.7\n2013-11-25,0,2.8\n2013-11-25,1,2.8\n2013-11-25,2,3.0\n2013-11-25,4,3.2\n2013-11-25,5,3.4\n2013-11-25,3,3.1\n2013-11-25,6,3.6\n2013-11-25,7,3.6\n2013-11-25,8,3.6\n2013-11-25,9,3.7\n2013-11-25,10,3.6\n2013-11-25,11,4.2\n2013-11-25,12,4.4\n2013-11-25,13,4.5\n2013-11-25,14,4.5\n2013-11-25,15,4.3\n2013-11-25,16,4.3\n2013-11-25,17,4.3\n2013-11-25,18,3.6\n2013-11-25,19,1.5\n2013-11-25,20,0.7\n2013-11-25,21,1.4\n2013-11-25,22,1.5\n2013-11-25,23,1.5\n2013-11-26,0,2.1\n2013-11-26,1,2.4\n2013-11-26,2,2.1\n2013-11-26,3,2.1\n2013-11-26,4,1.9\n2013-11-26,5,1.9\n2013-11-26,6,1.7\n2013-11-26,7,1.7\n2013-11-26,8,1.7\n2013-11-26,9,1.6\n2013-11-26,10,1.6\n2013-11-26,11,1.6\n2013-11-26,12,1.9\n2013-11-26,13,1.9\n2013-11-26,14,2.1\n2013-11-26,15,2.2\n2013-11-26,16,2.2\n2013-11-26,17,2.2\n2013-11-26,18,2.3\n2013-11-26,19,2.5\n2013-11-26,20,2.8\n2013-11-26,21,3.1\n2013-11-26,22,3.1\n2013-11-26,23,3.2\n2013-11-27,0,3.5\n2013-11-27,1,3.7\n2013-11-27,3,4.9\n2013-11-27,4,5.7\n2013-11-27,2,4.2\n2013-11-27,5,6.3\n2013-11-27,6,6.7\n2013-11-27,7,7.9\n2013-11-27,8,7.4\n2013-11-27,9,7.3\n2013-11-27,10,8.9\n2013-11-27,11,10.2\n2013-11-27,12,10.3\n2013-11-27,13,9.1\n2013-11-27,14,8.8\n2013-11-27,15,9.7\n2013-11-27,16,9.9\n2013-11-27,17,8.3\n2013-11-27,18,8.0\n2013-11-27,19,7.5\n2013-11-27,20,7.7\n2013-11-27,21,8.1\n2013-11-27,22,7.2\n2013-11-27,23,7.7\n2013-11-28,0,6.9\n2013-11-28,1,6.6\n2013-11-28,2,6.6\n2013-11-28,3,6.1\n2013-11-28,4,5.9\n2013-11-28,5,5.5\n2013-11-28,6,5.4\n2013-11-28,7,4.5\n2013-11-28,8,4.8\n2013-11-28,9,4.1\n2013-11-28,10,4.7\n2013-11-28,11,5.0\n2013-11-28,12,3.7\n2013-11-28,13,3.7\n2013-11-28,14,4.0\n2013-11-28,15,4.2\n2013-11-28,16,4.6\n2013-11-28,17,4.8\n2013-11-28,18,4.8\n2013-11-28,19,4.9\n2013-11-28,20,4.8\n2013-11-28,21,4.6\n2013-11-28,22,4.7\n2013-11-28,23,4.6\n2013-11-29,0,3.6\n2013-11-29,1,2.9\n2013-11-29,2,2.5\n2013-11-29,3,2.3\n2013-11-29,4,3.8\n2013-11-29,5,4.5\n2013-11-29,6,4.6\n2013-11-29,7,4.2\n2013-11-29,8,4.0\n2013-11-29,9,3.1\n2013-11-29,10,2.6\n2013-11-29,11,2.5\n2013-11-29,12,2.4\n2013-11-29,13,2.3\n2013-11-29,14,2.2\n2013-11-29,15,1.9\n2013-11-29,16,1.9\n2013-11-29,17,1.8\n2013-11-29,18,1.9\n2013-11-29,19,1.6\n2013-11-29,20,1.2\n2013-11-29,21,1.1\n2013-11-29,22,0.4\n2013-11-29,23,-0.2\n2013-11-30,0,0.0\n2013-11-30,1,0.5\n2013-11-30,2,0.9\n2013-11-30,3,1.3\n2013-11-30,4,1.6\n2013-11-30,5,1.8\n2013-11-30,6,2.2\n2013-11-30,7,2.8\n2013-11-30,8,4.3\n2013-11-30,9,5.2\n2013-11-30,10,4.5\n2013-11-30,11,4.5\n2013-11-30,12,5.3\n2013-11-30,13,4.9\n2013-11-30,14,4.8\n2013-11-30,15,4.2\n2013-11-30,16,4.4\n2013-11-30,17,5.1\n2013-11-30,18,5.7\n2013-11-30,19,5.9\n2013-11-30,20,6.6\n2013-11-30,21,7.6\n2013-11-30,22,9.3\n2013-11-30,23,7.8\n2013-12-01,0,8.2\n2013-12-01,1,7.7\n2013-12-01,2,7.6\n2013-12-01,3,7.3\n2013-12-01,4,7.0\n2013-12-01,5,6.5\n2013-12-01,6,6.2\n2013-12-01,7,5.7\n2013-12-01,8,6.0\n2013-12-01,9,5.2\n2013-12-01,10,4.8\n2013-12-01,11,4.7\n2013-12-01,12,4.6\n2013-12-01,13,4.9\n2013-12-01,14,5.1\n2013-12-01,15,5.0\n2013-12-01,17,4.9\n2013-12-01,16,5.1\n2013-12-01,18,5.0\n2013-12-01,19,4.7\n2013-12-01,20,4.3\n2013-12-01,21,3.9\n2013-12-01,22,3.5\n2013-12-01,23,2.9\n2013-12-02,0,2.4\n2013-12-02,1,2.2\n2013-12-02,2,2.0\n2013-12-02,3,2.0\n2013-12-02,4,2.1\n2013-12-02,5,2.4\n2013-12-02,6,2.7\n2013-12-02,7,3.0\n2013-12-02,8,3.4\n2013-12-02,9,3.3\n2013-12-02,10,3.0\n2013-12-02,11,2.9\n2013-12-02,12,2.9\n2013-12-02,13,3.1\n2013-12-02,14,3.5\n2013-12-02,15,3.6\n2013-12-02,16,3.4\n2013-12-02,17,5.4\n2013-12-02,18,5.6\n2013-12-02,19,7.9\n2013-12-02,20,8.3\n2013-12-02,21,8.3\n2013-12-02,22,8.4\n2013-12-02,23,8.5\n2013-12-03,0,8.6\n2013-12-03,1,8.0\n2013-12-03,3,8.3\n2013-12-03,4,7.9\n2013-12-03,2,8.2\n2013-12-03,5,7.2\n2013-12-03,6,6.8\n2013-12-03,7,8.0\n2013-12-03,8,8.9\n2013-12-03,9,9.2\n2013-12-03,10,8.2\n2013-12-03,11,7.2\n2013-12-03,12,6.5\n2013-12-03,13,6.3\n2013-12-03,14,5.9\n2013-12-03,15,5.5\n2013-12-03,16,5.1\n2013-12-03,17,4.8\n2013-12-03,18,4.6\n2013-12-03,19,4.3\n2013-12-03,20,3.9\n2013-12-03,21,4.0\n2013-12-03,22,2.8\n2013-12-03,23,1.6\n2013-12-04,0,1.0\n2013-12-04,1,1.2\n2013-12-04,3,3.2\n2013-12-04,4,2.9\n2013-12-04,2,1.9\n2013-12-04,5,2.6\n2013-12-04,6,2.6\n2013-12-04,7,2.9\n2013-12-04,8,3.1\n2013-12-04,9,3.4\n2013-12-04,10,2.6\n2013-12-04,11,4.6\n2013-12-04,12,4.2\n2013-12-04,13,4.2\n2013-12-04,14,4.0\n2013-12-04,15,2.2\n2013-12-04,16,1.5\n2013-12-04,17,3.7\n2013-12-04,18,2.2\n2013-12-04,19,2.3\n2013-12-04,20,3.0\n2013-12-04,21,3.5\n2013-12-04,22,3.4\n2013-12-04,23,1.7\n2013-12-05,0,1.6\n2013-12-05,1,1.8\n2013-12-05,2,1.9\n2013-12-05,3,1.1\n2013-12-05,4,0.9\n2013-12-05,5,1.0\n2013-12-05,6,0.8\n2013-12-05,7,0.2\n2013-12-05,8,-0.1\n2013-12-05,9,-0.1\n2013-12-05,10,-0.1\n2013-12-05,11,-0.2\n2013-12-05,12,-0.2\n2013-12-05,13,-0.1\n2013-12-05,14,0.2\n2013-12-05,15,0.3\n2013-12-05,16,0.2\n2013-12-05,17,-0.4\n2013-12-05,18,-1.5\n2013-12-05,19,-1.4\n2013-12-05,20,-1.7\n2013-12-05,21,-2.6\n2013-12-05,22,-3.3\n2013-12-05,23,-5.3\n2013-12-06,0,-6.9\n2013-12-06,1,-4.5\n2013-12-06,2,-1.8\n2013-12-06,3,-2.2\n2013-12-06,4,-2.1\n2013-12-06,5,-2.0\n2013-12-06,6,-3.3\n2013-12-06,7,-1.2\n2013-12-06,8,-1.1\n2013-12-06,9,-1.5\n2013-12-06,10,-0.4\n2013-12-06,11,-0.2\n2013-12-06,12,-0.6\n2013-12-06,13,-0.9\n2013-12-06,14,-0.7\n2013-12-06,15,-1.1\n2013-12-06,16,-1.2\n2013-12-06,17,-1.2\n2013-12-06,18,-1.4\n2013-12-06,19,-1.5\n2013-12-06,20,-1.3\n2013-12-06,21,-1.3\n2013-12-06,22,-1.6\n2013-12-06,23,-1.8\n2013-12-07,0,-1.8\n2013-12-07,1,-1.9\n2013-12-07,2,-2.3\n2013-12-07,3,-2.6\n2013-12-07,4,-2.5\n2013-12-07,5,-2.3\n2013-12-07,6,-2.7\n2013-12-07,7,-4.6\n2013-12-07,8,-6.0\n2013-12-07,9,-6.3\n2013-12-07,10,-7.1\n2013-12-07,11,-8.1\n2013-12-07,12,-7.9\n2013-12-07,13,-7.8\n2013-12-07,14,-8.0\n2013-12-07,15,-7.4\n2013-12-07,16,-7.0\n2013-12-07,17,-6.4\n2013-12-07,18,-5.9\n2013-12-07,19,-5.6\n2013-12-07,20,-6.3\n2013-12-07,21,-5.8\n2013-12-07,22,-5.5\n2013-12-07,23,-5.9\n2013-12-08,0,-6.0\n2013-12-08,1,-5.5\n2013-12-08,2,-5.1\n2013-12-08,3,-5.1\n2013-12-08,4,-5.2\n2013-12-08,5,-5.0\n2013-12-08,6,-5.1\n2013-12-08,7,-5.1\n2013-12-08,8,-5.0\n2013-12-08,9,-4.8\n2013-12-08,10,-4.7\n2013-12-08,11,-4.3\n2013-12-08,12,-3.7\n2013-12-08,13,-3.2\n2013-12-08,14,-2.9\n2013-12-08,15,-2.7\n2013-12-08,16,-2.7\n2013-12-08,17,-2.6\n2013-12-08,18,-2.6\n2013-12-08,19,-2.4\n2013-12-08,20,-2.3\n2013-12-08,21,-2.2\n2013-12-08,22,-2.2\n2013-12-08,23,-1.9\n2013-12-09,0,-1.8\n2013-12-09,1,-2.2\n2013-12-09,2,-2.2\n2013-12-09,3,-1.7\n2013-12-09,4,-1.4\n2013-12-09,5,-1.3\n2013-12-09,6,-1.2\n2013-12-09,7,-0.9\n2013-12-09,8,-0.7\n2013-12-09,9,-0.4\n2013-12-09,10,\n2013-12-09,11,\n2013-12-09,12,\n2013-12-09,13,0.8\n2013-12-09,14,1.0\n2013-12-09,15,1.1\n2013-12-09,16,\n2013-12-09,17,\n2013-12-09,18,\n2013-12-09,19,0.8\n2013-12-09,20,1.0\n2013-12-09,21,1.1\n2013-12-09,22,1.2\n2013-12-09,23,1.2\n2013-12-10,0,1.2\n2013-12-10,1,1.3\n2013-12-10,2,1.4\n2013-12-10,3,1.3\n2013-12-10,4,1.4\n2013-12-10,5,1.7\n2013-12-10,6,1.6\n2013-12-10,8,2.0\n2013-12-10,7,1.8\n2013-12-10,9,2.4\n2013-12-10,10,2.2\n2013-12-10,11,2.4\n2013-12-10,12,2.7\n2013-12-10,13,3.7\n2013-12-10,14,3.3\n2013-12-10,15,4.5\n2013-12-10,16,3.1\n2013-12-10,17,3.4\n2013-12-10,18,6.3\n2013-12-10,19,6.3\n2013-12-10,20,4.5\n2013-12-10,21,3.3\n2013-12-10,22,2.9\n2013-12-10,23,2.8\n2013-12-11,0,2.8\n2013-12-11,1,2.8\n2013-12-11,2,2.9\n2013-12-11,3,2.8\n2013-12-11,4,2.8\n2013-12-11,5,2.9\n2013-12-11,6,2.9\n2013-12-11,7,2.9\n2013-12-11,8,2.8\n2013-12-11,9,2.8\n2013-12-11,10,2.9\n2013-12-11,11,3.0\n2013-12-11,12,2.9\n2013-12-11,13,2.8\n2013-12-11,15,3.1\n2013-12-11,14,2.9\n2013-12-11,16,2.9\n2013-12-11,17,2.9\n2013-12-11,18,3.0\n2013-12-11,19,3.1\n2013-12-11,20,3.0\n2013-12-11,21,3.2\n2013-12-11,22,3.0\n2013-12-11,23,3.1\n2013-12-12,0,3.5\n2013-12-12,1,3.4\n2013-12-12,2,3.5\n2013-12-12,3,3.8\n2013-12-12,4,3.9\n2013-12-12,5,5.8\n2013-12-12,6,9.1\n2013-12-12,7,9.3\n2013-12-12,8,9.4\n2013-12-12,9,9.2\n2013-12-12,10,9.2\n2013-12-12,11,7.8\n2013-12-12,12,7.4\n2013-12-12,13,8.3\n2013-12-12,14,8.7\n2013-12-12,15,8.8\n2013-12-12,17,7.7\n2013-12-12,16,9.6\n2013-12-12,19,6.4\n2013-12-12,18,7.1\n2013-12-12,20,5.8\n2013-12-12,21,6.1\n2013-12-12,22,5.3\n2013-12-12,23,5.5\n2013-12-13,0,\n2013-12-13,1,\n2013-12-13,2,\n2013-12-13,3,\n2013-12-13,4,\n2013-12-13,5,\n2013-12-13,6,\n2013-12-13,7,\n2013-12-13,8,\n2013-12-13,9,\n2013-12-13,10,\n2013-12-13,11,\n2013-12-13,12,\n2013-12-13,13,\n2013-12-13,14,\n2013-12-13,15,\n2013-12-13,16,\n2013-12-13,17,\n2013-12-13,18,\n2013-12-13,19,\n2013-12-13,20,\n2013-12-13,21,\n2013-12-13,22,\n2013-12-13,23,\n2013-12-14,0,\n2013-12-14,1,\n2013-12-14,2,\n2013-12-14,3,\n2013-12-14,4,\n2013-12-14,5,\n2013-12-14,6,\n2013-12-14,7,\n2013-12-14,8,\n2013-12-14,9,\n2013-12-14,10,\n2013-12-14,11,\n2013-12-14,12,\n2013-12-14,13,\n2013-12-14,14,\n2013-12-14,15,\n2013-12-14,16,\n2013-12-14,17,\n2013-12-14,18,\n2013-12-14,19,\n2013-12-14,20,\n2013-12-14,21,\n2013-12-14,22,\n2013-12-14,23,\n2013-12-15,0,\n2013-12-15,1,\n2013-12-15,2,\n2013-12-15,3,\n2013-12-15,4,\n2013-12-15,5,\n2013-12-15,6,\n2013-12-15,7,\n2013-12-15,8,\n2013-12-15,9,\n2013-12-15,10,\n2013-12-15,11,\n2013-12-15,12,\n2013-12-15,13,\n2013-12-15,14,\n2013-12-15,15,\n2013-12-15,16,\n2013-12-15,17,\n2013-12-15,18,\n2013-12-15,19,\n2013-12-15,20,\n2013-12-15,21,\n2013-12-15,22,\n2013-12-15,23,\n2013-12-16,0,\n2013-12-16,1,\n2013-12-16,2,\n2013-12-16,3,\n2013-12-16,4,\n2013-12-16,5,\n2013-12-16,6,8.1\n2013-12-16,7,7.7\n2013-12-16,8,7.5\n2013-12-16,9,5.5\n2013-12-16,10,5.9\n2013-12-16,11,5.5\n2013-12-16,12,8.1\n2013-12-16,13,7.7\n2013-12-16,14,7.5\n2013-12-16,15,5.5\n2013-12-16,16,5.9\n2013-12-16,17,5.5\n2013-12-16,18,4.8\n2013-12-16,19,4.2\n2013-12-16,20,5.5\n2013-12-16,21,4.4\n2013-12-16,22,4.2\n2013-12-16,23,4.3\n2013-12-17,0,5.0\n2013-12-17,1,5.2\n2013-12-17,2,5.1\n2013-12-17,3,4.8\n2013-12-17,4,4.9\n2013-12-17,5,4.6\n2013-12-17,6,5.7\n2013-12-17,7,5.1\n2013-12-17,8,4.4\n2013-12-17,9,4.1\n2013-12-17,10,4.6\n2013-12-17,11,5.4\n2013-12-17,12,5.6\n2013-12-17,13,5.7\n2013-12-17,14,5.5\n2013-12-17,15,4.8\n2013-12-17,16,4.2\n2013-12-17,17,5.1\n2013-12-17,18,5.8\n2013-12-17,19,5.7\n2013-12-17,20,5.9\n2013-12-17,21,6.1\n2013-12-17,22,6.1\n2013-12-17,23,5.6\n2013-12-18,0,5.4\n2013-12-18,1,5.3\n2013-12-18,2,5.3\n2013-12-18,3,5.0\n2013-12-18,4,5.3\n2013-12-18,5,5.3\n2013-12-18,6,5.5\n2013-12-18,7,5.8\n2013-12-18,8,6.2\n2013-12-18,10,5.8\n2013-12-18,9,5.8\n2013-12-18,11,6.0\n2013-12-18,12,5.6\n2013-12-18,13,5.5\n2013-12-18,15,4.5\n2013-12-18,14,4.9\n2013-12-18,16,4.1\n2013-12-18,17,3.9\n2013-12-18,18,4.0\n2013-12-18,19,4.2\n2013-12-18,20,4.1\n2013-12-18,21,4.0\n2013-12-18,22,3.4\n2013-12-18,23,3.3\n2013-12-19,0,3.6\n2013-12-19,1,4.0\n2013-12-19,2,3.7\n2013-12-19,3,4.1\n2013-12-19,4,5.7\n2013-12-19,5,8.1\n2013-12-19,6,8.7\n2013-12-19,7,7.8\n2013-12-19,8,8.4\n2013-12-19,9,8.2\n2013-12-19,10,8.3\n2013-12-19,11,8.3\n2013-12-19,12,5.8\n2013-12-19,13,5.2\n2013-12-19,14,4.9\n2013-12-19,15,4.7\n2013-12-19,16,4.4\n2013-12-19,17,4.2\n2013-12-19,18,3.5\n2013-12-19,19,3.9\n2013-12-19,20,4.2\n2013-12-19,21,4.6\n2013-12-19,22,4.9\n2013-12-19,23,4.3\n2013-12-20,0,3.0\n2013-12-20,1,2.6\n2013-12-20,2,2.3\n2013-12-20,3,1.6\n2013-12-20,4,1.4\n2013-12-20,5,1.7\n2013-12-20,6,1.7\n2013-12-20,7,1.5\n2013-12-20,8,1.5\n2013-12-20,9,1.8\n2013-12-20,10,1.7\n2013-12-20,11,1.8\n2013-12-20,12,2.2\n2013-12-20,13,2.2\n2013-12-20,14,2.5\n2013-12-20,15,2.5\n2013-12-20,16,2.1\n2013-12-20,17,1.8\n2013-12-20,18,1.7\n2013-12-20,19,1.6\n2013-12-20,20,1.6\n2013-12-20,21,1.5\n2013-12-20,22,1.3\n2013-12-20,23,1.2\n2013-12-21,0,1.3\n2013-12-21,1,1.4\n2013-12-21,2,1.7\n2013-12-21,3,1.8\n2013-12-21,4,1.8\n2013-12-21,5,1.9\n2013-12-21,6,2.1\n2013-12-21,7,2.4\n2013-12-21,8,2.4\n2013-12-21,9,2.3\n2013-12-21,10,2.4\n2013-12-21,11,5.3\n2013-12-21,12,6.9\n2013-12-21,13,7.1\n2013-12-21,14,7.5\n2013-12-21,15,7.4\n2013-12-21,16,6.9\n2013-12-21,17,7.3\n2013-12-21,18,6.7\n2013-12-21,19,6.5\n2013-12-21,20,5.5\n2013-12-21,21,4.5\n2013-12-21,22,4.3\n2013-12-21,23,3.4\n2013-12-22,0,4.6\n2013-12-22,1,4.4\n2013-12-22,2,3.4\n2013-12-22,3,3.1\n2013-12-22,4,3.1\n2013-12-22,5,2.9\n2013-12-22,6,2.9\n2013-12-22,7,3.0\n2013-12-22,8,2.8\n2013-12-22,9,2.5\n2013-12-22,10,3.0\n2013-12-22,11,2.9\n2013-12-22,12,4.2\n2013-12-22,13,4.4\n2013-12-22,14,5.3\n2013-12-22,15,4.7\n2013-12-22,16,3.9\n2013-12-22,17,3.1\n2013-12-22,18,2.8\n2013-12-22,19,2.6\n2013-12-22,20,2.5\n2013-12-22,22,2.1\n2013-12-22,21,2.4\n2013-12-22,23,1.7\n2013-12-23,0,1.7\n2013-12-23,1,1.8\n2013-12-23,2,1.5\n2013-12-23,3,1.4\n2013-12-23,4,1.4\n2013-12-23,5,1.1\n2013-12-23,6,1.2\n2013-12-23,7,1.3\n2013-12-23,8,1.6\n2013-12-23,9,2.6\n2013-12-23,10,3.5\n2013-12-23,11,3.0\n2013-12-23,12,3.0\n2013-12-23,13,2.5\n2013-12-23,14,3.2\n2013-12-23,15,2.1\n2013-12-23,16,1.2\n2013-12-23,17,1.1\n2013-12-23,18,1.1\n2013-12-23,19,1.0\n2013-12-23,20,0.7\n2013-12-23,21,0.6\n2013-12-23,22,0.9\n2013-12-23,23,1.8\n2013-12-24,0,3.1\n2013-12-24,1,3.5\n2013-12-24,2,3.3\n2013-12-24,3,3.7\n2013-12-24,4,4.0\n2013-12-24,5,3.8\n2013-12-24,6,3.3\n2013-12-24,7,3.1\n2013-12-24,8,3.1\n2013-12-24,9,3.8\n2013-12-24,10,4.5\n2013-12-24,11,5.0\n2013-12-24,12,7.3\n2013-12-24,13,8.2\n2013-12-24,14,7.0\n2013-12-24,15,5.8\n2013-12-24,16,6.9\n2013-12-24,17,6.8\n2013-12-24,18,6.9\n2013-12-24,19,6.9\n2013-12-24,20,6.5\n2013-12-24,21,4.9\n2013-12-24,22,4.7\n2013-12-24,23,4.8\n2013-12-25,0,4.1\n2013-12-25,1,5.1\n2013-12-25,2,3.9\n2013-12-25,3,4.5\n2013-12-25,4,6.3\n2013-12-25,5,5.6\n2013-12-25,6,6.2\n2013-12-25,7,6.9\n2013-12-25,8,7.4\n2013-12-25,9,8.1\n2013-12-25,10,8.2\n2013-12-25,11,8.2\n2013-12-25,12,8.2\n2013-12-25,13,8.1\n2013-12-25,14,8.2\n2013-12-25,15,7.8\n2013-12-25,16,6.7\n2013-12-25,17,5.8\n2013-12-25,18,5.7\n2013-12-25,19,6.0\n2013-12-25,20,5.5\n2013-12-25,21,5.3\n2013-12-25,22,5.1\n2013-12-25,23,5.8\n2013-12-26,0,5.8\n2013-12-26,1,6.2\n2013-12-26,2,6.9\n2013-12-26,3,6.8\n2013-12-26,4,7.2\n2013-12-26,5,6.8\n2013-12-26,6,5.5\n2013-12-26,7,5.3\n2013-12-26,8,7.0\n2013-12-26,9,6.9\n2013-12-26,10,6.8\n2013-12-26,11,7.0\n2013-12-26,12,6.9\n2013-12-26,13,6.6\n2013-12-26,14,6.8\n2013-12-26,15,6.6\n2013-12-26,16,6.8\n2013-12-26,17,6.9\n2013-12-26,18,6.8\n2013-12-26,19,6.8\n2013-12-26,20,6.4\n2013-12-26,21,5.5\n2013-12-26,22,4.0\n2013-12-26,23,2.6\n2013-12-27,0,1.9\n2013-12-27,1,1.2\n2013-12-27,2,0.7\n2013-12-27,3,0.7\n2013-12-27,4,1.2\n2013-12-27,5,1.6\n2013-12-27,6,1.8\n2013-12-27,7,2.3\n2013-12-27,8,4.1\n2013-12-27,9,5.6\n2013-12-27,10,6.8\n2013-12-27,11,5.9\n2013-12-27,12,7.1\n2013-12-27,13,7.4\n2013-12-27,14,7.4\n2013-12-27,15,7.0\n2013-12-27,16,6.4\n2013-12-27,17,5.8\n2013-12-27,18,6.0\n2013-12-27,19,5.8\n2013-12-27,20,5.0\n2013-12-27,21,4.9\n2013-12-27,22,4.7\n2013-12-27,23,4.9\n2013-12-28,0,5.8\n2013-12-28,1,7.0\n2013-12-28,2,6.8\n2013-12-28,3,8.0\n2013-12-28,4,8.1\n2013-12-28,5,7.5\n2013-12-28,6,6.8\n2013-12-28,7,5.9\n2013-12-28,8,4.9\n2013-12-28,9,5.0\n2013-12-28,10,5.2\n2013-12-28,11,6.0\n2013-12-28,12,6.7\n2013-12-28,13,6.8\n2013-12-28,14,6.0\n2013-12-28,15,5.8\n2013-12-28,16,5.7\n2013-12-28,17,5.6\n2013-12-28,18,5.7\n2013-12-28,19,5.7\n2013-12-28,20,5.9\n2013-12-28,21,6.2\n2013-12-28,22,6.1\n2013-12-28,23,6.2\n2013-12-29,0,6.8\n2013-12-29,1,6.4\n2013-12-29,2,5.7\n2013-12-29,3,5.4\n2013-12-29,4,4.5\n2013-12-29,5,4.0\n2013-12-29,6,4.1\n2013-12-29,7,4.3\n2013-12-29,8,4.1\n2013-12-29,9,4.5\n2013-12-29,10,4.1\n2013-12-29,11,3.9\n2013-12-29,12,3.8\n2013-12-29,13,3.8\n2013-12-29,14,3.5\n2013-12-29,15,3.4\n2013-12-29,16,3.3\n2013-12-29,17,2.8\n2013-12-29,18,2.6\n2013-12-29,19,2.7\n2013-12-29,20,1.8\n2013-12-29,21,1.6\n2013-12-29,22,1.6\n2013-12-29,23,1.9\n2013-12-30,0,2.3\n2013-12-30,1,1.9\n2013-12-30,2,1.3\n2013-12-30,3,1.7\n2013-12-30,4,1.2\n2013-12-30,5,1.1\n2013-12-30,6,0.8\n2013-12-30,7,1.4\n2013-12-30,8,1.8\n2013-12-30,9,2.0\n2013-12-30,10,1.7\n2013-12-30,11,1.7\n2013-12-30,12,1.7\n2013-12-30,13,2.0\n2013-12-30,14,2.1\n2013-12-30,15,1.9\n2013-12-30,16,1.5\n2013-12-30,17,1.3\n2013-12-30,18,1.3\n2013-12-30,19,1.4\n2013-12-30,20,1.6\n2013-12-30,21,1.7\n2013-12-30,22,1.8\n2013-12-30,23,1.8\n2013-12-31,0,2.0\n2013-12-31,1,2.2\n2013-12-31,2,2.4\n2013-12-31,3,2.8\n2013-12-31,4,3.4\n2013-12-31,5,5.7\n2013-12-31,6,6.4\n2013-12-31,7,6.0\n2013-12-31,8,5.3\n2013-12-31,9,5.0\n2013-12-31,10,4.6\n2013-12-31,11,4.2\n2013-12-31,12,4.3\n2013-12-31,13,6.0\n2013-12-31,15,7.1\n2013-12-31,14,6.8\n2013-12-31,16,6.8\n2013-12-31,17,6.4\n2013-12-31,18,6.0\n2013-12-31,19,4.5\n2013-12-31,20,3.3\n2013-12-31,21,2.2\n2013-12-31,22,1.8\n2013-12-31,23,1.6");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LineChart_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LineChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LineChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return __WEBPACK_IMPORTED_MODULE_0__LineChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AreaChart_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AreaChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AreaChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "AreaChart", function() { return __WEBPACK_IMPORTED_MODULE_1__AreaChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarChart_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__BarChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return __WEBPACK_IMPORTED_MODULE_2__BarChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponsiveChart_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponsiveChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ResponsiveChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ResponsiveChart", function() { return __WEBPACK_IMPORTED_MODULE_3__ResponsiveChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PieChart_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PieChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PieChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return __WEBPACK_IMPORTED_MODULE_4__PieChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ScatterPlotChart_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ScatterPlotChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ScatterPlotChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ScallterPlotChart", function() { return __WEBPACK_IMPORTED_MODULE_5__ScatterPlotChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BubbleChart_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__BubbleChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__BubbleChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "BubbleChart", function() { return __WEBPACK_IMPORTED_MODULE_6__BubbleChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Combinations_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Combinations_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Combinations_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Combinations", function() { return __WEBPACK_IMPORTED_MODULE_7__Combinations_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DynamicChart_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DynamicChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DynamicChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "DynamicChart", function() { return __WEBPACK_IMPORTED_MODULE_8__DynamicChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__3DChart_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__3DChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__3DChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ThreeDChart", function() { return __WEBPACK_IMPORTED_MODULE_9__3DChart_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Gauges_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Gauges_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Gauges_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "GaugesChart", function() { return __WEBPACK_IMPORTED_MODULE_10__Gauges_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__HeatTreeMaps_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__HeatTreeMaps_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__HeatTreeMaps_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "LargeHeatMap", function() { return __WEBPACK_IMPORTED_MODULE_11__HeatTreeMaps_vue___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__LoadModuleChart_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__LoadModuleChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__LoadModuleChart_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "LoadModuleChart", function() { return __WEBPACK_IMPORTED_MODULE_12__LoadModuleChart_vue___default.a; });



























/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(8);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
});
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//



var list = Object.keys(__WEBPACK_IMPORTED_MODULE_0__components__).filter(function (c) {
  return __WEBPACK_IMPORTED_MODULE_0__components__["hasOwnProperty"](c);
}).map(function (c) {
  return {
    to: '/' + c,
    name: c
  };
});

/* harmony default export */ __webpack_exports__["default"] = ({
  components: _extends({}, __WEBPACK_IMPORTED_MODULE_0__components__),
  data: function data() {
    return {
      list: list
    };
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_3d__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_3d___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a);

var _data = {
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Chart rotation demo'
    },
    subtitle: {
        text: 'Test options by dragging the sliders below'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data__ = __webpack_require__(3);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      areaOptions: __WEBPACK_IMPORTED_MODULE_1__data_data__["c" /* AreaData */]
    };
  },
  mounted: function mounted() {},

  methods: {}
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
//
//
//
//
//
//





var _data = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Historic World Population by Region'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme.legendBackgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1800',
    data: [107, 31, 635, 203, 2]
  }, {
    name: 'Year 1900',
    data: [133, 156, 947, 408, 6]
  }, {
    name: 'Year 2012',
    data: [1052, 954, 4250, 740, 38]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      options: _data
    };
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a);

var _data = {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Sugar and fat intake per country'
    },

    subtitle: {
        text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Daily fat intake'
        },
        labels: {
            format: '{value} gr'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 65,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
                text: 'Safe fat intake 65g/day'
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Daily sugar intake'
        },
        labels: {
            format: '{value} gr'
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'Safe sugar intake 50g/day',
                x: -10
            },
            zIndex: 3
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' + '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' + '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' + '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [{ x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' }, { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' }, { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' }, { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' }, { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' }, { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' }, { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' }, { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' }, { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' }, { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' }, { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' }, { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' }, { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' }, { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' }, { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }]
    }]

};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_modules_series_label__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_modules_series_label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_modules_series_label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1_highcharts_modules_series_label___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a);

var _data = {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.theme.textColor || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Jane',
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 'John',
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 'Joe',
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.getOptions().colors[0] // Jane's color
        }, {
            name: 'John',
            y: 23,
            color: __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.getOptions().colors[1] // John's color
        }, {
            name: 'Joe',
            y: 19,
            color: __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
//
//
//
//
//
//





var _data = {
    chart: {
        type: 'spline',
        animation: __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function load() {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = new Date().getTime(),
                        // current time
                    y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'Live random data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function formatter() {
            return '<b>' + this.series.name + '</b><br/>' + __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' + __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: function () {
            // generate an array of random data
            var data = [],
                time = new Date().getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }()
    }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a);
var timer = null;
var _data = {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'Speedometer'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [[0, '#FFF'], [1, '#333']]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [[0, '#333'], [1, '#FFF']]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 200,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: 'km/h'
    },
    plotBands: [{
      from: 0,
      to: 120,
      color: '#55BF3B' // green
    }, {
      from: 120,
      to: 160,
      color: '#DDDF0D' // yellow
    }, {
      from: 160,
      to: 200,
      color: '#DF5353' // red
    }]
  },

  series: [{
    name: 'Speed',
    data: [80],
    tooltip: {
      valueSuffix: ' km/h'
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      options: _data
    };
  },
  mounted: function mounted() {
    var chart = this.$refs.chart.getChart();
    if (!chart.renderer.forExport) {
      timer = setInterval(function () {
        var point = chart.series[0].points[0],
            newVal = void 0,
            inc = Math.round((Math.random() - 0.5) * 20);

        newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }, 3000);
    }
  },
  destroyed: function destroyed() {
    if (timer) {
      clearInterval(timer);
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_HeatTreeMap__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_heatmap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_heatmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_heatmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_modules_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_boost_canvas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_boost_canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_boost_canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_boost__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts__);
//
//
//
//
//
//
//










__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_heatmap___default()(__WEBPACK_IMPORTED_MODULE_6_highcharts___default.a);
__WEBPACK_IMPORTED_MODULE_3_highcharts_modules_data___default()(__WEBPACK_IMPORTED_MODULE_6_highcharts___default.a);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_boost_canvas___default()(__WEBPACK_IMPORTED_MODULE_6_highcharts___default.a);
__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_boost___default()(__WEBPACK_IMPORTED_MODULE_6_highcharts___default.a);

var _data = {

    data: {
        csv: __WEBPACK_IMPORTED_MODULE_1__data_HeatTreeMap__["a" /* default */]
    },

    chart: {
        type: 'heatmap',
        margin: [60, 10, 80, 50]
    },

    boost: {
        useGPUTranslations: true
    },

    title: {
        text: 'Highcharts heat map',
        align: 'left',
        x: 40
    },

    subtitle: {
        text: 'Temperature variation by day and hour through 2013',
        align: 'left',
        x: 40
    },

    xAxis: {
        type: 'datetime',
        min: Date.UTC(2013, 0, 1),
        max: Date.UTC(2014, 0, 1),
        labels: {
            align: 'left',
            x: 5,
            y: 14,
            format: '{value:%B}' // long month
        },
        showLastLabel: false,
        tickLength: 16
    },

    yAxis: {
        title: {
            text: null
        },
        labels: {
            format: '{value}:00'
        },
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickPositions: [0, 6, 12, 18, 24],
        tickWidth: 1,
        min: 0,
        max: 23,
        reversed: true
    },

    colorAxis: {
        stops: [[0, '#3060cf'], [0.5, '#fffbbc'], [0.9, '#c4463a'], [1, '#c4463a']],
        min: -15,
        max: 25,
        startOnTick: false,
        endOnTick: false,
        labels: {
            format: '{value}℃'
        }
    },

    series: [{
        boostThreshold: 100,
        borderWidth: 0,
        nullColor: '#EFEFEF',
        colsize: 24 * 36e5, // one day
        tooltip: {
            headerFormat: 'Temperature<br/>',
            pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
        },
        turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
    }]

};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      options: __WEBPACK_IMPORTED_MODULE_1__data_data__["d" /* basicData */]
    };
  },
  mounted: function mounted() {},

  methods: {
    load: function load() {
      var lineCharts = this.$refs.lineCharts;
      //charts.showLoading('loading');

      // you also can use the delegateMethod()
      lineCharts.delegateMethod('showLoading', 'Loading...');
      setTimeout(function () {
        lineCharts.addSeries(__WEBPACK_IMPORTED_MODULE_1__data_data__["e" /* asyncData */]);
        lineCharts.hideLoading();
      }, 2000);
    },
    update: function update() {
      var lineCharts = this.$refs.lineCharts;
      lineCharts.getChart().xAxis[0].setCategories(['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']);
    },
    remove: function remove() {
      this.$refs.lineCharts.removeSeries();
    },
    add: function add() {
      this.$refs.lineCharts.addSeries({
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
          y: 26.5,
          marker: {
            symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
          }
        }, 23.3, 18.3, 13.9, 9.6]
      });
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_highcharts_modules_drilldown_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_highcharts_modules_drilldown_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_highcharts_modules_drilldown_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1__node_modules_highcharts_modules_drilldown_js___default()(__WEBPACK_IMPORTED_MODULE_3_highcharts___default.a);
__WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.setOptions({
  lang: {
    drillUpText: 'back'
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      Highcharts: __WEBPACK_IMPORTED_MODULE_3_highcharts___default.a,
      drilldownOptions: __WEBPACK_IMPORTED_MODULE_2__data_data__["a" /* DrilldownData */]
    };
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data__ = __webpack_require__(3);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      pieOptions: __WEBPACK_IMPORTED_MODULE_1__data_data__["b" /* PieData */]
    };
  },
  mounted: function mounted() {},

  methods: {}
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
//
//
//
//
//
//





var _data = {
  chart: {
    type: 'bar',
    height: 9 / 16 * 100 + '%' // 16:9 ratio
  },
  title: {
    text: 'Historic World Population by Region'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme.legendBackgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1800',
    data: [107, 31, 635, 203, 2]
  }, {
    name: 'Year 1900',
    data: [133, 156, 947, 408, 6]
  }, {
    name: 'Year 2012',
    data: [1052, 954, 4250, 740, 38]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
  },
  data: function data() {
    return {
      options: _data
    };
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
//
//
//
//
//
//





var _data = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Height Versus Weight of 507 Individuals by Gender'
    },
    subtitle: {
        text: 'Source: Heinz  2003'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Height (cm)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Weight (kg)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_1_highcharts___default.a.theme.legendBackgroundColor || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        }
    },
    series: [{
        name: 'Female',
        color: 'rgba(223, 83, 83, .5)',
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0], [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8], [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8], [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3], [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0], [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7], [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5], [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2], [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8], [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9], [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2], [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4], [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4], [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2], [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0], [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0], [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4], [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4], [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5], [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5], [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2], [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3], [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5], [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4], [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6], [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8], [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1], [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5], [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2], [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6], [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0], [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0], [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9], [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1], [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4], [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7], [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5], [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8], [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0], [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

    }, {
        name: 'Male',
        color: 'rgba(119, 152, 191, .5)',
        data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9], [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9], [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1], [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1], [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2], [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2], [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0], [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2], [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2], [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9], [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9], [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0], [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3], [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7], [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5], [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3], [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1], [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0], [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2], [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1], [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6], [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1], [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5], [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1], [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5], [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5], [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9], [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5], [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4], [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5], [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6], [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7], [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5], [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6], [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7], [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0], [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3], [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3], [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9], [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1], [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1], [180.3, 83.2], [180.3, 83.2]]
    }]
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0__src_VueHighcharts_vue___default.a
    },
    data: function data() {
        return {
            options: _data
        };
    }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(29);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    classname: {
      type: String,
      default: 'vue-highcharts'
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    options: Object,
    highcharts: Object
  },
  name: 'VueHighcharts',
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    if (!this.getChart() && this.options) {
      this.init();
    }
  },


  methods: {
    getChart: function getChart() {
      return this.chart;
    },
    addSeries: function addSeries(options) {
      this.delegateMethod('addSeries', options);
    },
    removeSeries: function removeSeries() {
      while (this.getChart().series.length !== 0) {
        this.getChart().series[0].remove();
      }
    },
    mergeOption: function mergeOption(options) {
      this.delegateMethod('update', options);
    },
    showLoading: function showLoading(txt) {
      this.getChart().showLoading(txt);
    },
    hideLoading: function hideLoading() {
      this.getChart().hideLoading();
    },
    delegateMethod: function delegateMethod(name) {
      var _getChart;

      if (!this.getChart()) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* warn */])('Cannot call [$name] before the chart is initialized. Set prop [options] first.', this);
        return;
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_getChart = this.getChart())[name].apply(_getChart, args);
    },
    init: function init() {
      if (!this.getChart() && this.options) {
        var _Highcharts = this.highcharts || __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a;
        if (_Highcharts.product == 'Highstock') {
          this.chart = new _Highcharts.stockChart(this.$el, this.options);
        } else {
          this.chart = new _Highcharts.Chart(this.$el, this.options);
        }
      }
    }
  },

  watch: {
    options: function options(_options) {
      if (!this.getChart() && _options) {
        this.init();
      } else {
        this.getChart().update(this.options);
      }
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this.getChart()) {
      this.getChart().destroy();
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warn; });
/**
 * Created by superman on 17/2/15.
 */

// copy from vue/src/core/util/debug.js
//https://github.com/vuejs/vue/blob/dev/src/core/util/debug.js

var warn = function warn() {};

if (process.env.NODE_ENV !== 'production') {
    var hasConsole = typeof console !== 'undefined';

    warn = function warn(msg, vm) {
        if (hasConsole) {
            console.error('[Vue warn]: ' + msg + (vm ? formatLocation(formatComponentName(vm)) : ''));
        }
    };

    var formatComponentName = function formatComponentName(vm) {
        if (vm.$root === vm) {
            return 'root instance';
        }
        var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
        return name ? 'component <' + name + '>' : 'anonymous component';
    };

    var formatLocation = function formatLocation(str) {
        if (str === 'anonymous component') {
            str += '-use the "name" option for better debugging messages.';
        }
        return str;
    };
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background: rgba(37, 37, 37, 0.84);\n}\nh1 {\n  font-family: Dosis, 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n  padding: 2em 0 1em;\n  text-align: center;\n}\nh1 a {\n    text-decoration: none;\n    color: #ccc;\n}\nh1,\nh3 {\n  color: #ccc;\n  font-weight: 300;\n}\nh1 p,\n  h3 p {\n    font-size: 14px;\n    margin: 5px;\n}\n.charts {\n  width: 600px;\n  margin: 0 auto;\n  padding: 2em 0;\n  text-align: center;\n}\n.charts h3 {\n    text-align: center;\n    margin: 0;\n}\n.charts button {\n    padding: 5px 20px;\n    background: #fff;\n    -webkit-appearance: none;\n    border: 1px solid #c5c5c5;\n    border-radius: 5px;\n    outline: none;\n}\n.charts button:hover {\n      background: lightgray;\n      color: #333;\n}\n.highcharts {\n  display: inline-block;\n  margin: 2em auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);\n  padding: 1.5em 0em;\n  background: #fff;\n}\n.nav {\n  padding: 15px 0 0;\n  margin: 0 auto;\n  text-align: center;\n  max-width: 600px;\n}\n.nav a {\n    color: #adaba5;\n    margin-right: 10px;\n}\n.nav a.active, .nav a:hover {\n      color: chocolate;\n}\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)

 3D features for Highcharts JS

 @license: www.highcharts.com/license
*/
(function(B){"object"===typeof module&&module.exports?module.exports=B:B(Highcharts)})(function(B){(function(b){var p=b.deg2rad,y=b.pick;b.perspective=function(t,g,A){var z=g.options.chart.options3d,n=A?g.inverted:!1,r=g.plotWidth/2,x=g.plotHeight/2,q=z.depth/2,f=y(z.depth,1)*y(z.viewDistance,0),a=g.scale3d||1,d=p*z.beta*(n?-1:1),z=p*z.alpha*(n?-1:1),h=Math.cos(z),k=Math.cos(-d),e=Math.sin(z),c=Math.sin(-d);A||(r+=g.plotLeft,x+=g.plotTop);return b.map(t,function(b){var d,l;l=(n?b.y:b.x)-r;var v=(n?
b.x:b.y)-x,G=(b.z||0)-q;d=k*l-c*G;b=-e*c*l+h*v-k*e*G;l=h*c*l+e*v+h*k*G;v=0<f&&f<Number.POSITIVE_INFINITY?f/(l+q+f):1;d=d*v*a+r;b=b*v*a+x;return{x:n?b:d,y:n?d:b,z:l*a+q}})};b.pointCameraDistance=function(b,g){var t=g.options.chart.options3d,z=g.plotWidth/2;g=g.plotHeight/2;t=y(t.depth,1)*y(t.viewDistance,0)+t.depth;return Math.sqrt(Math.pow(z-b.plotX,2)+Math.pow(g-b.plotY,2)+Math.pow(t-b.plotZ,2))};b.shapeArea=function(b){var g=0,t,z;for(t=0;t<b.length;t++)z=(t+1)%b.length,g+=b[t].x*b[z].y-b[z].x*
b[t].y;return g/2};b.shapeArea3d=function(t,g,p){return b.shapeArea(b.perspective(t,g,p))}})(B);(function(b){function p(a,e,c,b,d,f,k,l){var m=[],C=f-d;return f>d&&f-d>Math.PI/2+.0001?(m=m.concat(p(a,e,c,b,d,d+Math.PI/2,k,l)),m=m.concat(p(a,e,c,b,d+Math.PI/2,f,k,l))):f<d&&d-f>Math.PI/2+.0001?(m=m.concat(p(a,e,c,b,d,d-Math.PI/2,k,l)),m=m.concat(p(a,e,c,b,d-Math.PI/2,f,k,l))):["C",a+c*Math.cos(d)-c*w*C*Math.sin(d)+k,e+b*Math.sin(d)+b*w*C*Math.cos(d)+l,a+c*Math.cos(f)+c*w*C*Math.sin(f)+k,e+b*Math.sin(f)-
b*w*C*Math.cos(f)+l,a+c*Math.cos(f)+k,e+b*Math.sin(f)+l]}var y=Math.cos,t=Math.PI,g=Math.sin,A=b.animObject,z=b.charts,n=b.color,r=b.defined,x=b.deg2rad,q=b.each,f=b.extend,a=b.inArray,d=b.map,h=b.merge,k=b.perspective,e=b.pick,c=b.SVGElement,l=b.SVGRenderer,u=b.wrap,w=4*(Math.sqrt(2)-1)/3/(t/2);l.prototype.toLinePath=function(a,e){var c=[];q(a,function(a){c.push("L",a.x,a.y)});a.length&&(c[0]="M",e&&c.push("Z"));return c};l.prototype.toLineSegments=function(a){var e=[],c=!0;q(a,function(a){e.push(c?
"M":"L",a.x,a.y);c=!c});return e};l.prototype.face3d=function(a){var c=this,m=this.createElement("path");m.vertexes=[];m.insidePlotArea=!1;m.enabled=!0;u(m,"attr",function(a,m){if("object"===typeof m&&(r(m.enabled)||r(m.vertexes)||r(m.insidePlotArea))){this.enabled=e(m.enabled,this.enabled);this.vertexes=e(m.vertexes,this.vertexes);this.insidePlotArea=e(m.insidePlotArea,this.insidePlotArea);delete m.enabled;delete m.vertexes;delete m.insidePlotArea;var d=k(this.vertexes,z[c.chartIndex],this.insidePlotArea),
C=c.toLinePath(d,!0),d=b.shapeArea(d),d=this.enabled&&0<d?"visible":"hidden";m.d=C;m.visibility=d}return a.apply(this,[].slice.call(arguments,1))});u(m,"animate",function(a,m){if("object"===typeof m&&(r(m.enabled)||r(m.vertexes)||r(m.insidePlotArea))){this.enabled=e(m.enabled,this.enabled);this.vertexes=e(m.vertexes,this.vertexes);this.insidePlotArea=e(m.insidePlotArea,this.insidePlotArea);delete m.enabled;delete m.vertexes;delete m.insidePlotArea;var d=k(this.vertexes,z[c.chartIndex],this.insidePlotArea),
C=c.toLinePath(d,!0),d=b.shapeArea(d),d=this.enabled&&0<d?"visible":"hidden";m.d=C;this.attr("visibility",d)}return a.apply(this,[].slice.call(arguments,1))});return m.attr(a)};l.prototype.polyhedron=function(a){var e=this,c=this.g(),b=c.destroy;c.attr({"stroke-linejoin":"round"});c.faces=[];c.destroy=function(){for(var a=0;a<c.faces.length;a++)c.faces[a].destroy();return b.call(this)};u(c,"attr",function(a,b,m,d,C){if("object"===typeof b&&r(b.faces)){for(;c.faces.length>b.faces.length;)c.faces.pop().destroy();
for(;c.faces.length<b.faces.length;)c.faces.push(e.face3d().add(c));for(var f=0;f<b.faces.length;f++)c.faces[f].attr(b.faces[f],null,d,C);delete b.faces}return a.apply(this,[].slice.call(arguments,1))});u(c,"animate",function(a,b,m,d){if(b&&b.faces){for(;c.faces.length>b.faces.length;)c.faces.pop().destroy();for(;c.faces.length<b.faces.length;)c.faces.push(e.face3d().add(c));for(var C=0;C<b.faces.length;C++)c.faces[C].animate(b.faces[C],m,d);delete b.faces}return a.apply(this,[].slice.call(arguments,
1))});return c.attr(a)};l.prototype.cuboid=function(a){var e=this.g(),b=e.destroy;a=this.cuboidPath(a);e.attr({"stroke-linejoin":"round"});e.front=this.path(a[0]).attr({"class":"highcharts-3d-front"}).add(e);e.top=this.path(a[1]).attr({"class":"highcharts-3d-top"}).add(e);e.side=this.path(a[2]).attr({"class":"highcharts-3d-side"}).add(e);e.fillSetter=function(a){this.front.attr({fill:a});this.top.attr({fill:n(a).brighten(.1).get()});this.side.attr({fill:n(a).brighten(-.1).get()});this.color=a;e.fill=
a;return this};e.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};e.attr=function(a,e,b,m){if("string"===typeof a&&"undefined"!==typeof e){var d=a;a={};a[d]=e}if(a.shapeArgs||r(a.x))a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0]}),this.top.attr({d:a[1]}),this.side.attr({d:a[2]});else return c.prototype.attr.call(this,a,void 0,b,m);return this};e.animate=function(a,e,b){r(a.x)&&r(a.y)?(a=this.renderer.cuboidPath(a),
this.front.animate({d:a[0]},e,b),this.top.animate({d:a[1]},e,b),this.side.animate({d:a[2]},e,b),this.attr({zIndex:-a[3]})):a.opacity?(this.front.animate(a,e,b),this.top.animate(a,e,b),this.side.animate(a,e,b)):c.prototype.animate.call(this,a,e,b);return this};e.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return b.call(this)};e.attr({zIndex:-a[3]});return e};b.SVGRenderer.prototype.cuboidPath=function(a){function e(a){return t[a]}var c=a.x,f=a.y,l=a.z,v=a.height,
u=a.width,h=a.depth,q=z[this.chartIndex],D,w,n=q.options.chart.options3d.alpha,g=0,t=[{x:c,y:f,z:l},{x:c+u,y:f,z:l},{x:c+u,y:f+v,z:l},{x:c,y:f+v,z:l},{x:c,y:f+v,z:l+h},{x:c+u,y:f+v,z:l+h},{x:c+u,y:f,z:l+h},{x:c,y:f,z:l+h}],t=k(t,q,a.insidePlotArea);w=function(a,c){var m=[[],-1];a=d(a,e);c=d(c,e);0>b.shapeArea(a)?m=[a,0]:0>b.shapeArea(c)&&(m=[c,1]);return m};D=w([3,2,1,0],[7,6,5,4]);a=D[0];u=D[1];D=w([1,6,7,0],[4,5,2,3]);v=D[0];h=D[1];D=w([1,2,5,6],[0,7,4,3]);w=D[0];D=D[1];1===D?g+=1E4*(1E3-c):D||
(g+=1E4*c);g+=10*(!h||0<=n&&180>=n||360>n&&357.5<n?q.plotHeight-f:10+f);1===u?g+=100*l:u||(g+=100*(1E3-l));g=-Math.round(g);return[this.toLinePath(a,!0),this.toLinePath(v,!0),this.toLinePath(w,!0),g]};b.SVGRenderer.prototype.arc3d=function(b){function d(c){var e=!1,b={};c=h(c);for(var d in c)-1!==a(d,k)&&(b[d]=c[d],delete c[d],e=!0);return e?b:!1}var m=this.g(),l=m.renderer,k="x y r innerR start end".split(" ");b=h(b);b.alpha*=x;b.beta*=x;m.top=l.path();m.side1=l.path();m.side2=l.path();m.inn=l.path();
m.out=l.path();m.onAdd=function(){var a=m.parentGroup,c=m.attr("class");m.top.add(m);q(["out","inn","side1","side2"],function(e){m[e].attr({"class":c+" highcharts-3d-side"}).add(a)})};q(["addClass","removeClass"],function(a){m[a]=function(){var c=arguments;q(["top","out","inn","side1","side2"],function(e){m[e][a].apply(m[e],c)})}});m.setPaths=function(a){var c=m.renderer.arc3dPath(a),e=100*c.zTop;m.attribs=a;m.top.attr({d:c.top,zIndex:c.zTop});m.inn.attr({d:c.inn,zIndex:c.zInn});m.out.attr({d:c.out,
zIndex:c.zOut});m.side1.attr({d:c.side1,zIndex:c.zSide1});m.side2.attr({d:c.side2,zIndex:c.zSide2});m.zIndex=e;m.attr({zIndex:e});a.center&&(m.top.setRadialReference(a.center),delete a.center)};m.setPaths(b);m.fillSetter=function(a){var c=n(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:c});this.side2.attr({fill:c});this.inn.attr({fill:c});this.out.attr({fill:c});this.top.attr({fill:a});return this};q(["opacity","translateX","translateY","visibility"],function(a){m[a+"Setter"]=function(a,
c){m[c]=a;q(["out","inn","side1","side2","top"],function(e){m[e].attr(c,a)})}});u(m,"attr",function(a,c){var e;"object"===typeof c&&(e=d(c))&&(f(m.attribs,e),m.setPaths(m.attribs));return a.apply(this,[].slice.call(arguments,1))});u(m,"animate",function(a,c,b,f){var l,k=this.attribs,u;delete c.center;delete c.z;delete c.depth;delete c.alpha;delete c.beta;u=A(e(b,this.renderer.globalAnimation));u.duration&&(l=d(c),c.dummy=m.dummy++,l&&(u.step=function(a,c){function b(a){return k[a]+(e(l[a],k[a])-k[a])*
c.pos}"dummy"===c.prop&&c.elem.setPaths(h(k,{x:b("x"),y:b("y"),r:b("r"),innerR:b("innerR"),start:b("start"),end:b("end")}))}),b=u);return a.call(this,c,b,f)});m.dummy=0;m.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();c.prototype.destroy.call(this)};m.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};m.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();
this.side2.show()};return m};l.prototype.arc3dPath=function(a){function c(a){a%=2*Math.PI;a>Math.PI&&(a=2*Math.PI-a);return a}var e=a.x,b=a.y,d=a.start,f=a.end-.00001,l=a.r,k=a.innerR,u=a.depth,h=a.alpha,q=a.beta,v=Math.cos(d),w=Math.sin(d);a=Math.cos(f);var n=Math.sin(f),r=l*Math.cos(q),l=l*Math.cos(h),z=k*Math.cos(q),x=k*Math.cos(h),k=u*Math.sin(q),A=u*Math.sin(h),u=["M",e+r*v,b+l*w],u=u.concat(p(e,b,r,l,d,f,0,0)),u=u.concat(["L",e+z*a,b+x*n]),u=u.concat(p(e,b,z,x,f,d,0,0)),u=u.concat(["Z"]),B=
0<q?Math.PI/2:0,q=0<h?0:Math.PI/2,B=d>-B?d:f>-B?-B:d,E=f<t-q?f:d<t-q?t-q:f,F=2*t-q,h=["M",e+r*y(B),b+l*g(B)],h=h.concat(p(e,b,r,l,B,E,0,0));f>F&&d<F?(h=h.concat(["L",e+r*y(E)+k,b+l*g(E)+A]),h=h.concat(p(e,b,r,l,E,F,k,A)),h=h.concat(["L",e+r*y(F),b+l*g(F)]),h=h.concat(p(e,b,r,l,F,f,0,0)),h=h.concat(["L",e+r*y(f)+k,b+l*g(f)+A]),h=h.concat(p(e,b,r,l,f,F,k,A)),h=h.concat(["L",e+r*y(F),b+l*g(F)]),h=h.concat(p(e,b,r,l,F,E,0,0))):f>t-q&&d<t-q&&(h=h.concat(["L",e+r*Math.cos(E)+k,b+l*Math.sin(E)+A]),h=h.concat(p(e,
b,r,l,E,f,k,A)),h=h.concat(["L",e+r*Math.cos(f),b+l*Math.sin(f)]),h=h.concat(p(e,b,r,l,f,E,0,0)));h=h.concat(["L",e+r*Math.cos(E)+k,b+l*Math.sin(E)+A]);h=h.concat(p(e,b,r,l,E,B,k,A));h=h.concat(["Z"]);q=["M",e+z*v,b+x*w];q=q.concat(p(e,b,z,x,d,f,0,0));q=q.concat(["L",e+z*Math.cos(f)+k,b+x*Math.sin(f)+A]);q=q.concat(p(e,b,z,x,f,d,k,A));q=q.concat(["Z"]);v=["M",e+r*v,b+l*w,"L",e+r*v+k,b+l*w+A,"L",e+z*v+k,b+x*w+A,"L",e+z*v,b+x*w,"Z"];e=["M",e+r*a,b+l*n,"L",e+r*a+k,b+l*n+A,"L",e+z*a+k,b+x*n+A,"L",e+z*
a,b+x*n,"Z"];n=Math.atan2(A,-k);b=Math.abs(f+n);a=Math.abs(d+n);d=Math.abs((d+f)/2+n);b=c(b);a=c(a);d=c(d);d*=1E5;f=1E5*a;b*=1E5;return{top:u,zTop:1E5*Math.PI+1,out:h,zOut:Math.max(d,f,b),inn:q,zInn:Math.max(d,f,b),side1:v,zSide1:.99*b,side2:e,zSide2:.99*f}}})(B);(function(b){function p(b,f){var a=b.plotLeft,d=b.plotWidth+a,h=b.plotTop,k=b.plotHeight+h,e=a+b.plotWidth/2,c=h+b.plotHeight/2,l=Number.MAX_VALUE,u=-Number.MAX_VALUE,q=Number.MAX_VALUE,v=-Number.MAX_VALUE,n,m=1;n=[{x:a,y:h,z:0},{x:a,y:h,
z:f}];g([0,1],function(a){n.push({x:d,y:n[a].y,z:n[a].z})});g([0,1,2,3],function(a){n.push({x:n[a].x,y:k,z:n[a].z})});n=z(n,b,!1);g(n,function(a){l=Math.min(l,a.x);u=Math.max(u,a.x);q=Math.min(q,a.y);v=Math.max(v,a.y)});a>l&&(m=Math.min(m,1-Math.abs((a+e)/(l+e))%1));d<u&&(m=Math.min(m,(d-e)/(u-e)));h>q&&(m=0>q?Math.min(m,(h+c)/(-q+h+c)):Math.min(m,1-(h+c)/(q+c)%1));k<v&&(m=Math.min(m,Math.abs((k-c)/(v-c))));return m}var y=b.addEvent,t=b.Chart,g=b.each,A=b.merge,z=b.perspective,n=b.pick,r=b.wrap;t.prototype.is3d=
function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};t.prototype.propsRequireDirtyBox.push("chart.options3d");t.prototype.propsRequireUpdateSeries.push("chart.options3d");y(t,"afterInit",function(){var b=this.options;this.is3d()&&g(b.series,function(f){"scatter"===(f.type||b.chart.type||b.chart.defaultSeriesType)&&(f.type="scatter3d")})});b.wrap(b.Chart.prototype,"isInsidePlot",function(b){return this.is3d()||b.apply(this,[].slice.call(arguments,1))});var x=b.getOptions();
A(!0,x,{chart:{options3d:{enabled:!1,alpha:0,beta:0,depth:100,fitToPlot:!0,viewDistance:25,axisLabelPosition:"default",frame:{visible:"default",size:1,bottom:{},top:{},left:{},right:{},back:{},front:{}}}}});r(t.prototype,"setClassName",function(b){b.apply(this,[].slice.call(arguments,1));this.is3d()&&(this.container.className+=" highcharts-3d-chart")});y(b.Chart,"afterSetChartSize",function(){var b=this.options.chart.options3d;if(this.is3d()){var f=this.inverted,a=this.clipBox,d=this.margin;a[f?"y":
"x"]=-(d[3]||0);a[f?"x":"y"]=-(d[0]||0);a[f?"height":"width"]=this.chartWidth+(d[3]||0)+(d[1]||0);a[f?"width":"height"]=this.chartHeight+(d[0]||0)+(d[2]||0);this.scale3d=1;!0===b.fitToPlot&&(this.scale3d=p(this,b.depth));this.frame3d=this.get3dFrame()}});y(t,"beforeRedraw",function(){this.is3d()&&(this.isDirtyBox=!0)});y(t,"beforeRender",function(){this.is3d()&&(this.frame3d=this.get3dFrame())});r(t.prototype,"renderSeries",function(b){var f=this.series.length;if(this.is3d())for(;f--;)b=this.series[f],
b.translate(),b.render();else b.call(this)});y(t,"afterDrawChartBox",function(){if(this.is3d()){var n=this.renderer,f=this.options.chart.options3d,a=this.get3dFrame(),d=this.plotLeft,h=this.plotLeft+this.plotWidth,k=this.plotTop,e=this.plotTop+this.plotHeight,f=f.depth,c=d-(a.left.visible?a.left.size:0),l=h+(a.right.visible?a.right.size:0),u=k-(a.top.visible?a.top.size:0),w=e+(a.bottom.visible?a.bottom.size:0),v=0-(a.front.visible?a.front.size:0),g=f+(a.back.visible?a.back.size:0),m=this.hasRendered?
"animate":"attr";this.frame3d=a;this.frameShapes||(this.frameShapes={bottom:n.polyhedron().add(),top:n.polyhedron().add(),left:n.polyhedron().add(),right:n.polyhedron().add(),back:n.polyhedron().add(),front:n.polyhedron().add()});this.frameShapes.bottom[m]({"class":"highcharts-3d-frame highcharts-3d-frame-bottom",zIndex:a.bottom.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.bottom.color).brighten(.1).get(),vertexes:[{x:c,y:w,z:v},{x:l,y:w,z:v},{x:l,y:w,z:g},{x:c,y:w,z:g}],enabled:a.bottom.visible},
{fill:b.color(a.bottom.color).brighten(.1).get(),vertexes:[{x:d,y:e,z:f},{x:h,y:e,z:f},{x:h,y:e,z:0},{x:d,y:e,z:0}],enabled:a.bottom.visible},{fill:b.color(a.bottom.color).brighten(-.1).get(),vertexes:[{x:c,y:w,z:v},{x:c,y:w,z:g},{x:d,y:e,z:f},{x:d,y:e,z:0}],enabled:a.bottom.visible&&!a.left.visible},{fill:b.color(a.bottom.color).brighten(-.1).get(),vertexes:[{x:l,y:w,z:g},{x:l,y:w,z:v},{x:h,y:e,z:0},{x:h,y:e,z:f}],enabled:a.bottom.visible&&!a.right.visible},{fill:b.color(a.bottom.color).get(),vertexes:[{x:l,
y:w,z:v},{x:c,y:w,z:v},{x:d,y:e,z:0},{x:h,y:e,z:0}],enabled:a.bottom.visible&&!a.front.visible},{fill:b.color(a.bottom.color).get(),vertexes:[{x:c,y:w,z:g},{x:l,y:w,z:g},{x:h,y:e,z:f},{x:d,y:e,z:f}],enabled:a.bottom.visible&&!a.back.visible}]});this.frameShapes.top[m]({"class":"highcharts-3d-frame highcharts-3d-frame-top",zIndex:a.top.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.top.color).brighten(.1).get(),vertexes:[{x:c,y:u,z:g},{x:l,y:u,z:g},{x:l,y:u,z:v},{x:c,y:u,z:v}],enabled:a.top.visible},
{fill:b.color(a.top.color).brighten(.1).get(),vertexes:[{x:d,y:k,z:0},{x:h,y:k,z:0},{x:h,y:k,z:f},{x:d,y:k,z:f}],enabled:a.top.visible},{fill:b.color(a.top.color).brighten(-.1).get(),vertexes:[{x:c,y:u,z:g},{x:c,y:u,z:v},{x:d,y:k,z:0},{x:d,y:k,z:f}],enabled:a.top.visible&&!a.left.visible},{fill:b.color(a.top.color).brighten(-.1).get(),vertexes:[{x:l,y:u,z:v},{x:l,y:u,z:g},{x:h,y:k,z:f},{x:h,y:k,z:0}],enabled:a.top.visible&&!a.right.visible},{fill:b.color(a.top.color).get(),vertexes:[{x:c,y:u,z:v},
{x:l,y:u,z:v},{x:h,y:k,z:0},{x:d,y:k,z:0}],enabled:a.top.visible&&!a.front.visible},{fill:b.color(a.top.color).get(),vertexes:[{x:l,y:u,z:g},{x:c,y:u,z:g},{x:d,y:k,z:f},{x:h,y:k,z:f}],enabled:a.top.visible&&!a.back.visible}]});this.frameShapes.left[m]({"class":"highcharts-3d-frame highcharts-3d-frame-left",zIndex:a.left.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.left.color).brighten(.1).get(),vertexes:[{x:c,y:w,z:v},{x:d,y:e,z:0},{x:d,y:e,z:f},{x:c,y:w,z:g}],enabled:a.left.visible&&!a.bottom.visible},
{fill:b.color(a.left.color).brighten(.1).get(),vertexes:[{x:c,y:u,z:g},{x:d,y:k,z:f},{x:d,y:k,z:0},{x:c,y:u,z:v}],enabled:a.left.visible&&!a.top.visible},{fill:b.color(a.left.color).brighten(-.1).get(),vertexes:[{x:c,y:w,z:g},{x:c,y:u,z:g},{x:c,y:u,z:v},{x:c,y:w,z:v}],enabled:a.left.visible},{fill:b.color(a.left.color).brighten(-.1).get(),vertexes:[{x:d,y:k,z:f},{x:d,y:e,z:f},{x:d,y:e,z:0},{x:d,y:k,z:0}],enabled:a.left.visible},{fill:b.color(a.left.color).get(),vertexes:[{x:c,y:w,z:v},{x:c,y:u,z:v},
{x:d,y:k,z:0},{x:d,y:e,z:0}],enabled:a.left.visible&&!a.front.visible},{fill:b.color(a.left.color).get(),vertexes:[{x:c,y:u,z:g},{x:c,y:w,z:g},{x:d,y:e,z:f},{x:d,y:k,z:f}],enabled:a.left.visible&&!a.back.visible}]});this.frameShapes.right[m]({"class":"highcharts-3d-frame highcharts-3d-frame-right",zIndex:a.right.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.right.color).brighten(.1).get(),vertexes:[{x:l,y:w,z:g},{x:h,y:e,z:f},{x:h,y:e,z:0},{x:l,y:w,z:v}],enabled:a.right.visible&&!a.bottom.visible},
{fill:b.color(a.right.color).brighten(.1).get(),vertexes:[{x:l,y:u,z:v},{x:h,y:k,z:0},{x:h,y:k,z:f},{x:l,y:u,z:g}],enabled:a.right.visible&&!a.top.visible},{fill:b.color(a.right.color).brighten(-.1).get(),vertexes:[{x:h,y:k,z:0},{x:h,y:e,z:0},{x:h,y:e,z:f},{x:h,y:k,z:f}],enabled:a.right.visible},{fill:b.color(a.right.color).brighten(-.1).get(),vertexes:[{x:l,y:w,z:v},{x:l,y:u,z:v},{x:l,y:u,z:g},{x:l,y:w,z:g}],enabled:a.right.visible},{fill:b.color(a.right.color).get(),vertexes:[{x:l,y:u,z:v},{x:l,
y:w,z:v},{x:h,y:e,z:0},{x:h,y:k,z:0}],enabled:a.right.visible&&!a.front.visible},{fill:b.color(a.right.color).get(),vertexes:[{x:l,y:w,z:g},{x:l,y:u,z:g},{x:h,y:k,z:f},{x:h,y:e,z:f}],enabled:a.right.visible&&!a.back.visible}]});this.frameShapes.back[m]({"class":"highcharts-3d-frame highcharts-3d-frame-back",zIndex:a.back.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.back.color).brighten(.1).get(),vertexes:[{x:l,y:w,z:g},{x:c,y:w,z:g},{x:d,y:e,z:f},{x:h,y:e,z:f}],enabled:a.back.visible&&!a.bottom.visible},
{fill:b.color(a.back.color).brighten(.1).get(),vertexes:[{x:c,y:u,z:g},{x:l,y:u,z:g},{x:h,y:k,z:f},{x:d,y:k,z:f}],enabled:a.back.visible&&!a.top.visible},{fill:b.color(a.back.color).brighten(-.1).get(),vertexes:[{x:c,y:w,z:g},{x:c,y:u,z:g},{x:d,y:k,z:f},{x:d,y:e,z:f}],enabled:a.back.visible&&!a.left.visible},{fill:b.color(a.back.color).brighten(-.1).get(),vertexes:[{x:l,y:u,z:g},{x:l,y:w,z:g},{x:h,y:e,z:f},{x:h,y:k,z:f}],enabled:a.back.visible&&!a.right.visible},{fill:b.color(a.back.color).get(),
vertexes:[{x:d,y:k,z:f},{x:h,y:k,z:f},{x:h,y:e,z:f},{x:d,y:e,z:f}],enabled:a.back.visible},{fill:b.color(a.back.color).get(),vertexes:[{x:c,y:w,z:g},{x:l,y:w,z:g},{x:l,y:u,z:g},{x:c,y:u,z:g}],enabled:a.back.visible}]});this.frameShapes.front[m]({"class":"highcharts-3d-frame highcharts-3d-frame-front",zIndex:a.front.frontFacing?-1E3:1E3,faces:[{fill:b.color(a.front.color).brighten(.1).get(),vertexes:[{x:c,y:w,z:v},{x:l,y:w,z:v},{x:h,y:e,z:0},{x:d,y:e,z:0}],enabled:a.front.visible&&!a.bottom.visible},
{fill:b.color(a.front.color).brighten(.1).get(),vertexes:[{x:l,y:u,z:v},{x:c,y:u,z:v},{x:d,y:k,z:0},{x:h,y:k,z:0}],enabled:a.front.visible&&!a.top.visible},{fill:b.color(a.front.color).brighten(-.1).get(),vertexes:[{x:c,y:u,z:v},{x:c,y:w,z:v},{x:d,y:e,z:0},{x:d,y:k,z:0}],enabled:a.front.visible&&!a.left.visible},{fill:b.color(a.front.color).brighten(-.1).get(),vertexes:[{x:l,y:w,z:v},{x:l,y:u,z:v},{x:h,y:k,z:0},{x:h,y:e,z:0}],enabled:a.front.visible&&!a.right.visible},{fill:b.color(a.front.color).get(),
vertexes:[{x:h,y:k,z:0},{x:d,y:k,z:0},{x:d,y:e,z:0},{x:h,y:e,z:0}],enabled:a.front.visible},{fill:b.color(a.front.color).get(),vertexes:[{x:l,y:w,z:v},{x:c,y:w,z:v},{x:c,y:u,z:v},{x:l,y:u,z:v}],enabled:a.front.visible}]})}});t.prototype.retrieveStacks=function(b){var f=this.series,a={},d,h=1;g(this.series,function(k){d=n(k.options.stack,b?0:f.length-1-k.index);a[d]?a[d].series.push(k):(a[d]={series:[k],position:h},h++)});a.totalStacks=h+1;return a};t.prototype.get3dFrame=function(){var q=this,f=q.options.chart.options3d,
a=f.frame,d=q.plotLeft,h=q.plotLeft+q.plotWidth,k=q.plotTop,e=q.plotTop+q.plotHeight,c=f.depth,l=function(a){a=b.shapeArea3d(a,q);return.5<a?1:-.5>a?-1:0},u=l([{x:d,y:e,z:c},{x:h,y:e,z:c},{x:h,y:e,z:0},{x:d,y:e,z:0}]),w=l([{x:d,y:k,z:0},{x:h,y:k,z:0},{x:h,y:k,z:c},{x:d,y:k,z:c}]),v=l([{x:d,y:k,z:0},{x:d,y:k,z:c},{x:d,y:e,z:c},{x:d,y:e,z:0}]),r=l([{x:h,y:k,z:c},{x:h,y:k,z:0},{x:h,y:e,z:0},{x:h,y:e,z:c}]),m=l([{x:d,y:e,z:0},{x:h,y:e,z:0},{x:h,y:k,z:0},{x:d,y:k,z:0}]),l=l([{x:d,y:k,z:c},{x:h,y:k,z:c},
{x:h,y:e,z:c},{x:d,y:e,z:c}]),t=!1,A=!1,x=!1,p=!1;g([].concat(q.xAxis,q.yAxis,q.zAxis),function(a){a&&(a.horiz?a.opposite?A=!0:t=!0:a.opposite?p=!0:x=!0)});var y=function(a,c,e){for(var b=["size","color","visible"],d={},f=0;f<b.length;f++)for(var l=b[f],h=0;h<a.length;h++)if("object"===typeof a[h]){var k=a[h][l];if(void 0!==k&&null!==k){d[l]=k;break}}a=e;!0===d.visible||!1===d.visible?a=d.visible:"auto"===d.visible&&(a=0<c);return{size:n(d.size,1),color:n(d.color,"none"),frontFacing:0<c,visible:a}},
a={bottom:y([a.bottom,a.top,a],u,t),top:y([a.top,a.bottom,a],w,A),left:y([a.left,a.right,a.side,a],v,x),right:y([a.right,a.left,a.side,a],r,p),back:y([a.back,a.front,a],l,!0),front:y([a.front,a.back,a],m,!1)};"auto"===f.axisLabelPosition?(r=function(a,c){return a.visible!==c.visible||a.visible&&c.visible&&a.frontFacing!==c.frontFacing},f=[],r(a.left,a.front)&&f.push({y:(k+e)/2,x:d,z:0,xDir:{x:1,y:0,z:0}}),r(a.left,a.back)&&f.push({y:(k+e)/2,x:d,z:c,xDir:{x:0,y:0,z:-1}}),r(a.right,a.front)&&f.push({y:(k+
e)/2,x:h,z:0,xDir:{x:0,y:0,z:1}}),r(a.right,a.back)&&f.push({y:(k+e)/2,x:h,z:c,xDir:{x:-1,y:0,z:0}}),u=[],r(a.bottom,a.front)&&u.push({x:(d+h)/2,y:e,z:0,xDir:{x:1,y:0,z:0}}),r(a.bottom,a.back)&&u.push({x:(d+h)/2,y:e,z:c,xDir:{x:-1,y:0,z:0}}),w=[],r(a.top,a.front)&&w.push({x:(d+h)/2,y:k,z:0,xDir:{x:1,y:0,z:0}}),r(a.top,a.back)&&w.push({x:(d+h)/2,y:k,z:c,xDir:{x:-1,y:0,z:0}}),v=[],r(a.bottom,a.left)&&v.push({z:(0+c)/2,y:e,x:d,xDir:{x:0,y:0,z:-1}}),r(a.bottom,a.right)&&v.push({z:(0+c)/2,y:e,x:h,xDir:{x:0,
y:0,z:1}}),e=[],r(a.top,a.left)&&e.push({z:(0+c)/2,y:k,x:d,xDir:{x:0,y:0,z:-1}}),r(a.top,a.right)&&e.push({z:(0+c)/2,y:k,x:h,xDir:{x:0,y:0,z:1}}),d=function(a,c,e){if(0===a.length)return null;if(1===a.length)return a[0];for(var b=0,d=z(a,q,!1),f=1;f<d.length;f++)e*d[f][c]>e*d[b][c]?b=f:e*d[f][c]===e*d[b][c]&&d[f].z<d[b].z&&(b=f);return a[b]},a.axes={y:{left:d(f,"x",-1),right:d(f,"x",1)},x:{top:d(w,"y",-1),bottom:d(u,"y",1)},z:{top:d(e,"y",-1),bottom:d(v,"y",1)}}):a.axes={y:{left:{x:d,z:0,xDir:{x:1,
y:0,z:0}},right:{x:h,z:0,xDir:{x:0,y:0,z:1}}},x:{top:{y:k,z:0,xDir:{x:1,y:0,z:0}},bottom:{y:e,z:0,xDir:{x:1,y:0,z:0}}},z:{top:{x:x?h:d,y:k,xDir:x?{x:0,y:0,z:1}:{x:0,y:0,z:-1}},bottom:{x:x?h:d,y:e,xDir:x?{x:0,y:0,z:1}:{x:0,y:0,z:-1}}}};return a};b.Fx.prototype.matrixSetter=function(){var g;if(1>this.pos&&(b.isArray(this.start)||b.isArray(this.end))){var f=this.start||[1,0,0,1,0,0],a=this.end||[1,0,0,1,0,0];g=[];for(var d=0;6>d;d++)g.push(this.pos*a[d]+(1-this.pos)*f[d])}else g=this.end;this.elem.attr(this.prop,
g,null,!0)}})(B);(function(b){function p(e,c,b){if(!e.chart.is3d()||"colorAxis"===e.coll)return c;var d=e.chart,l=z*d.options.chart.options3d.alpha,h=z*d.options.chart.options3d.beta,k=f(b&&e.options.title.position3d,e.options.labels.position3d);b=f(b&&e.options.title.skew3d,e.options.labels.skew3d);var m=d.frame3d,g=d.plotLeft,n=d.plotWidth+g,r=d.plotTop,t=d.plotHeight+r,d=!1,x=0,A=0,p={x:0,y:1,z:0};c=e.swapZ({x:c.x,y:c.y,z:0});if(e.isZAxis)if(e.opposite){if(null===m.axes.z.top)return{};A=c.y-r;
c.x=m.axes.z.top.x;c.y=m.axes.z.top.y;g=m.axes.z.top.xDir;d=!m.top.frontFacing}else{if(null===m.axes.z.bottom)return{};A=c.y-t;c.x=m.axes.z.bottom.x;c.y=m.axes.z.bottom.y;g=m.axes.z.bottom.xDir;d=!m.bottom.frontFacing}else if(e.horiz)if(e.opposite){if(null===m.axes.x.top)return{};A=c.y-r;c.y=m.axes.x.top.y;c.z=m.axes.x.top.z;g=m.axes.x.top.xDir;d=!m.top.frontFacing}else{if(null===m.axes.x.bottom)return{};A=c.y-t;c.y=m.axes.x.bottom.y;c.z=m.axes.x.bottom.z;g=m.axes.x.bottom.xDir;d=!m.bottom.frontFacing}else if(e.opposite){if(null===
m.axes.y.right)return{};x=c.x-n;c.x=m.axes.y.right.x;c.z=m.axes.y.right.z;g=m.axes.y.right.xDir;g={x:g.z,y:g.y,z:-g.x}}else{if(null===m.axes.y.left)return{};x=c.x-g;c.x=m.axes.y.left.x;c.z=m.axes.y.left.z;g=m.axes.y.left.xDir}"chart"!==k&&("flap"===k?e.horiz?(h=Math.sin(l),l=Math.cos(l),e.opposite&&(h=-h),d&&(h=-h),p={x:g.z*h,y:l,z:-g.x*h}):g={x:Math.cos(h),y:0,z:Math.sin(h)}:"ortho"===k?e.horiz?(p=Math.cos(l),k=Math.sin(h)*p,l=-Math.sin(l),h=-p*Math.cos(h),p={x:g.y*h-g.z*l,y:g.z*k-g.x*h,z:g.x*l-
g.y*k},l=1/Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z),d&&(l=-l),p={x:l*p.x,y:l*p.y,z:l*p.z}):g={x:Math.cos(h),y:0,z:Math.sin(h)}:e.horiz?p={x:Math.sin(h)*Math.sin(l),y:Math.cos(l),z:-Math.cos(h)*Math.sin(l)}:g={x:Math.cos(h),y:0,z:Math.sin(h)});c.x+=x*g.x+A*p.x;c.y+=x*g.y+A*p.y;c.z+=x*g.z+A*p.z;d=q([c],e.chart)[0];b?(0>a(q([c,{x:c.x+g.x,y:c.y+g.y,z:c.z+g.z},{x:c.x+p.x,y:c.y+p.y,z:c.z+p.z}],e.chart))&&(g={x:-g.x,y:-g.y,z:-g.z}),e=q([{x:c.x,y:c.y,z:c.z},{x:c.x+g.x,y:c.y+g.y,z:c.z+g.z},{x:c.x+p.x,y:c.y+p.y,
z:c.z+p.z}],e.chart),d.matrix=[e[1].x-e[0].x,e[1].y-e[0].y,e[2].x-e[0].x,e[2].y-e[0].y,d.x,d.y],d.matrix[4]-=d.x*d.matrix[0]+d.y*d.matrix[2],d.matrix[5]-=d.x*d.matrix[1]+d.y*d.matrix[3]):d.matrix=null;return d}var y,t=b.addEvent,g=b.Axis,A=b.Chart,z=b.deg2rad,n=b.each,r=b.extend,x=b.merge,q=b.perspective,f=b.pick,a=b.shapeArea,d=b.splat,h=b.Tick,k=b.wrap;x(!0,g.prototype.defaultOptions,{labels:{position3d:"offset",skew3d:!1},title:{position3d:null,skew3d:null}});t(g,"afterSetOptions",function(){var a;
this.chart.is3d&&this.chart.is3d()&&"colorAxis"!==this.coll&&(a=this.options,a.tickWidth=f(a.tickWidth,0),a.gridLineWidth=f(a.gridLineWidth,1))});k(g.prototype,"getPlotLinePath",function(a){var c=a.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d()||"colorAxis"===this.coll||null===c)return c;var b=this.chart,e=b.options.chart.options3d,e=this.isZAxis?b.plotWidth:e.depth,b=b.frame3d,c=[this.swapZ({x:c[1],y:c[2],z:0}),this.swapZ({x:c[1],y:c[2],z:e}),this.swapZ({x:c[4],y:c[5],z:0}),this.swapZ({x:c[4],
y:c[5],z:e})],e=[];this.horiz?(this.isZAxis?(b.left.visible&&e.push(c[0],c[2]),b.right.visible&&e.push(c[1],c[3])):(b.front.visible&&e.push(c[0],c[2]),b.back.visible&&e.push(c[1],c[3])),b.top.visible&&e.push(c[0],c[1]),b.bottom.visible&&e.push(c[2],c[3])):(b.front.visible&&e.push(c[0],c[2]),b.back.visible&&e.push(c[1],c[3]),b.left.visible&&e.push(c[0],c[1]),b.right.visible&&e.push(c[2],c[3]));e=q(e,this.chart,!1);return this.chart.renderer.toLineSegments(e)});k(g.prototype,"getLinePath",function(a){return this.chart.is3d()&&
"colorAxis"!==this.coll?[]:a.apply(this,[].slice.call(arguments,1))});k(g.prototype,"getPlotBandPath",function(a){if(!this.chart.is3d()||"colorAxis"===this.coll)return a.apply(this,[].slice.call(arguments,1));var b=arguments,e=b[2],d=[],b=this.getPlotLinePath(b[1]),e=this.getPlotLinePath(e);if(b&&e)for(var f=0;f<b.length;f+=6)d.push("M",b[f+1],b[f+2],"L",b[f+4],b[f+5],"L",e[f+4],e[f+5],"L",e[f+1],e[f+2],"Z");return d});k(h.prototype,"getMarkPath",function(a){var b=a.apply(this,[].slice.call(arguments,
1)),b=[p(this.axis,{x:b[1],y:b[2],z:0}),p(this.axis,{x:b[4],y:b[5],z:0})];return this.axis.chart.renderer.toLineSegments(b)});t(h,"afterGetLabelPosition",function(a){r(a.pos,p(this.axis,a.pos))});k(g.prototype,"getTitlePosition",function(a){var b=a.apply(this,[].slice.call(arguments,1));return p(this,b,!0)});t(g,"drawCrosshair",function(a){this.chart.is3d()&&"colorAxis"!==this.coll&&a.point&&(a.point.crosshairPos=this.isXAxis?a.point.plotXold||a.point.plotX:this.len-(a.point.plotYold||a.point.plotY))});
t(g,"destroy",function(){n(["backFrame","bottomFrame","sideFrame"],function(a){this[a]&&(this[a]=this[a].destroy())},this)});g.prototype.swapZ=function(a,b){return this.isZAxis?(b=b?0:this.chart.plotLeft,{x:b+a.z,y:a.y,z:a.x-b}):a};y=b.ZAxis=function(){this.init.apply(this,arguments)};r(y.prototype,g.prototype);r(y.prototype,{isZAxis:!0,setOptions:function(a){a=x({offset:0,lineWidth:0},a);g.prototype.setOptions.call(this,a);this.coll="zAxis"},setAxisSize:function(){g.prototype.setAxisSize.call(this);
this.width=this.len=this.chart.options.chart.options3d.depth;this.right=this.chart.chartWidth-this.width-this.left},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();n(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries)a.hasVisibleSeries=!0,c=c.zData,c.length&&(a.dataMin=Math.min(f(a.dataMin,c[0]),Math.min.apply(null,c)),a.dataMax=Math.max(f(a.dataMax,c[0]),Math.max.apply(null,
c)))})}});t(A,"afterGetAxes",function(){var a=this,b=this.options,b=b.zAxis=d(b.zAxis||{});a.is3d()&&(this.zAxis=[],n(b,function(b,c){b.index=c;b.isX=!0;(new y(a,b)).setScale()}))})})(B);(function(b){var p=b.addEvent,y=b.perspective,t=b.pick;p(b.Series,"afterTranslate",function(){this.chart.is3d()&&this.translate3dPoints()});b.Series.prototype.translate3dPoints=function(){var b=this.chart,p=t(this.zAxis,b.options.zAxis[0]),z=[],n,r,x;for(x=0;x<this.data.length;x++)n=this.data[x],p&&p.translate?(r=
p.isLog&&p.val2lin?p.val2lin(n.z):n.z,n.plotZ=p.translate(r),n.isInside=n.isInside?r>=p.min&&r<=p.max:!1):n.plotZ=0,z.push({x:t(n.plotXold,n.plotX),y:t(n.plotYold,n.plotY),z:t(n.plotZold,n.plotZ)});b=y(z,b,!0);for(x=0;x<this.data.length;x++)n=this.data[x],p=b[x],n.plotXold=n.plotX,n.plotYold=n.plotY,n.plotZold=n.plotZ,n.plotX=p.x,n.plotY=p.y,n.plotZ=p.z}})(B);(function(b){function p(b){var a=b.apply(this,[].slice.call(arguments,1));this.chart.is3d&&this.chart.is3d()&&(a.stroke=this.options.edgeColor||
a.fill,a["stroke-width"]=A(this.options.edgeWidth,1));return a}var y=b.addEvent,t=b.each,g=b.perspective,A=b.pick,z=b.Series,n=b.seriesTypes,r=b.inArray,x=b.svg,q=b.wrap;q(n.column.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.translate3dShapes()});q(b.Series.prototype,"alignDataLabel",function(b){arguments[3].outside3dPlot=arguments[1].outside3dPlot;b.apply(this,[].slice.call(arguments,1))});q(b.Series.prototype,"justifyDataLabel",function(b){return arguments[2].outside3dPlot?
!1:b.apply(this,[].slice.call(arguments,1))});n.column.prototype.translate3dPoints=function(){};n.column.prototype.translate3dShapes=function(){var b=this,a=b.chart,d=b.options,h=d.depth||25,k=(d.stacking?d.stack||0:b.index)*(h+(d.groupZPadding||1)),e=b.borderWidth%2?.5:0;a.inverted&&!b.yAxis.reversed&&(e*=-1);!1!==d.grouping&&(k=0);k+=d.groupZPadding||1;t(b.data,function(c){c.outside3dPlot=null;if(null!==c.y){var d=c.shapeArgs,f=c.tooltipPos,n;t([["x","width"],["y","height"]],function(a){n=d[a[0]]-
e;0>n&&(d[a[1]]+=d[a[0]]+e,d[a[0]]=-e,n=0);n+d[a[1]]>b[a[0]+"Axis"].len&&0!==d[a[1]]&&(d[a[1]]=b[a[0]+"Axis"].len-d[a[0]]);if(0!==d[a[1]]&&(d[a[0]]>=b[a[0]+"Axis"].len||d[a[0]]+d[a[1]]<=e)){for(var f in d)d[f]=0;c.outside3dPlot=!0}});c.shapeType="cuboid";d.z=k;d.depth=h;d.insidePlotArea=!0;f=g([{x:f[0],y:f[1],z:k}],a,!0)[0];c.tooltipPos=[f.x,f.y]}});b.z=k};q(n.column.prototype,"animate",function(b){if(this.chart.is3d()){var a=arguments[1],d=this.yAxis,f=this,k=this.yAxis.reversed;x&&(a?t(f.data,function(a){null!==
a.y&&(a.height=a.shapeArgs.height,a.shapey=a.shapeArgs.y,a.shapeArgs.height=1,k||(a.shapeArgs.y=a.stackY?a.plotY+d.translate(a.stackY):a.plotY+(a.negative?-a.height:a.height)))}):(t(f.data,function(a){null!==a.y&&(a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,f.options.animation))}),this.drawDataLabels(),f.animate=null))}else b.apply(this,[].slice.call(arguments,1))});q(n.column.prototype,"plotGroup",function(b,a,d,h,k,e){this.chart.is3d()&&e&&!this[a]&&
(this.chart.columnGroup||(this.chart.columnGroup=this.chart.renderer.g("columnGroup").add(e)),this[a]=this.chart.columnGroup,this.chart.columnGroup.attr(this.getPlotBox()),this[a].survive=!0);return b.apply(this,Array.prototype.slice.call(arguments,1))});q(n.column.prototype,"setVisible",function(b,a){var d=this,f;d.chart.is3d()&&t(d.data,function(b){f=(b.visible=b.options.visible=a=void 0===a?!b.visible:a)?"visible":"hidden";d.options.data[r(b,d.data)]=b.options;b.graphic&&b.graphic.attr({visibility:f})});
b.apply(this,Array.prototype.slice.call(arguments,1))});n.column.prototype.handle3dGrouping=!0;y(z,"afterInit",function(){if(this.chart.is3d()&&this.handle3dGrouping){var b=this.options,a=b.grouping,d=b.stacking,h=A(this.yAxis.options.reversedStacks,!0),k=0;if(void 0===a||a){a=this.chart.retrieveStacks(d);k=b.stack||0;for(d=0;d<a[k].series.length&&a[k].series[d]!==this;d++);k=10*(a.totalStacks-a[k].position)+(h?d:-d);this.xAxis.reversed||(k=10*a.totalStacks-k)}b.zIndex=k}});q(n.column.prototype,"pointAttribs",
p);n.columnrange&&(q(n.columnrange.prototype,"pointAttribs",p),n.columnrange.prototype.plotGroup=n.column.prototype.plotGroup,n.columnrange.prototype.setVisible=n.column.prototype.setVisible);q(z.prototype,"alignDataLabel",function(b){if(this.chart.is3d()&&("column"===this.type||"columnrange"===this.type)){var a=arguments,d=a[4],a=a[1],f={x:d.x,y:d.y,z:this.z},f=g([f],this.chart,!0)[0];d.x=f.x;d.y=a.outside3dPlot?-9E9:f.y}b.apply(this,[].slice.call(arguments,1))});q(b.StackItem.prototype,"getStackBox",
function(f,a){var d=f.apply(this,[].slice.call(arguments,1));if(a.is3d()){var h={x:d.x,y:d.y,z:0},h=b.perspective([h],a,!0)[0];d.x=h.x;d.y=h.y}return d})})(B);(function(b){var p=b.deg2rad,y=b.each,t=b.pick,g=b.seriesTypes,A=b.svg;b=b.wrap;b(g.pie.prototype,"translate",function(b){b.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var g=this,r=g.options,t=r.depth||0,q=g.chart.options.chart.options3d,f=q.alpha,a=q.beta,d=r.stacking?(r.stack||0)*t:g._i*t,d=d+t/2;!1!==r.grouping&&(d=0);y(g.data,
function(b){var h=b.shapeArgs;b.shapeType="arc3d";h.z=d;h.depth=.75*t;h.alpha=f;h.beta=a;h.center=g.center;h=(h.end+h.start)/2;b.slicedTranslation={translateX:Math.round(Math.cos(h)*r.slicedOffset*Math.cos(f*p)),translateY:Math.round(Math.sin(h)*r.slicedOffset*Math.cos(f*p))}})}});b(g.pie.prototype.pointClass.prototype,"haloPath",function(b){var g=arguments;return this.series.chart.is3d()?[]:b.call(this,g[1])});b(g.pie.prototype,"pointAttribs",function(b,g,r){b=b.call(this,g,r);r=this.options;this.chart.is3d()&&
(b.stroke=r.edgeColor||g.color||this.color,b["stroke-width"]=t(r.edgeWidth,1));return b});b(g.pie.prototype,"drawPoints",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&y(this.points,function(b){var g=b.graphic;if(g)g[b.y&&b.visible?"show":"hide"]()})});b(g.pie.prototype,"drawDataLabels",function(b){if(this.chart.is3d()){var g=this.chart.options.chart.options3d;y(this.data,function(b){var n=b.shapeArgs,q=n.r,f=(n.start+n.end)/2,a=b.labelPos,d=-q*(1-Math.cos((n.alpha||g.alpha)*
p))*Math.sin(f),h=q*(Math.cos((n.beta||g.beta)*p)-1)*Math.cos(f);y([0,2,4],function(b){a[b]+=h;a[b+1]+=d})})}b.apply(this,[].slice.call(arguments,1))});b(g.pie.prototype,"addPoint",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update(this.userOptions,!0)});b(g.pie.prototype,"animate",function(b){if(this.chart.is3d()){var g=arguments[1],r=this.options.animation,p=this.center,q=this.group,f=this.markerGroup;A&&(!0===r&&(r={}),g?(q.oldtranslateX=q.translateX,q.oldtranslateY=
q.translateY,g={translateX:p[0],translateY:p[1],scaleX:.001,scaleY:.001},q.attr(g),f&&(f.attrSetters=q.attrSetters,f.attr(g))):(g={translateX:q.oldtranslateX,translateY:q.oldtranslateY,scaleX:1,scaleY:1},q.animate(g,r),f&&f.animate(g,r),this.animate=null))}else b.apply(this,[].slice.call(arguments,1))})})(B);(function(b){var p=b.Point,y=b.seriesType,t=b.seriesTypes;y("scatter3d","scatter",{tooltip:{pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e"}},
{pointAttribs:function(g){var p=t.scatter.prototype.pointAttribs.apply(this,arguments);this.chart.is3d()&&g&&(p.zIndex=b.pointCameraDistance(g,this.chart));return p},axisTypes:["xAxis","yAxis","zAxis"],pointArrayMap:["x","y","z"],parallelArrays:["x","y","z"],directTouch:!0},{applyOptions:function(){p.prototype.applyOptions.apply(this,arguments);void 0===this.z&&(this.z=0);return this}})})(B);(function(b){var p=b.addEvent,y=b.Axis,t=b.SVGRenderer,g=b.VMLRenderer;g&&(b.setOptions({animate:!1}),g.prototype.face3d=
t.prototype.face3d,g.prototype.polyhedron=t.prototype.polyhedron,g.prototype.cuboid=t.prototype.cuboid,g.prototype.cuboidPath=t.prototype.cuboidPath,g.prototype.toLinePath=t.prototype.toLinePath,g.prototype.toLineSegments=t.prototype.toLineSegments,g.prototype.createElement3D=t.prototype.createElement3D,g.prototype.arc3d=function(b){b=t.prototype.arc3d.call(this,b);b.css({zIndex:b.zIndex});return b},b.VMLRenderer.prototype.arc3dPath=b.SVGRenderer.prototype.arc3dPath,p(y,"render",function(){this.sideFrame&&
(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))}))})(B)});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)
 Boost module

 (c) 2010-2017 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(c){var k=c.win.document,Y=function(){},Z=c.Color,w=c.Series,e=c.seriesTypes,m=c.each,q=c.extend,x=c.addEvent,aa=c.fireEvent,ba=c.isNumber,ca=c.merge,da=c.pick,y=c.wrap,I;c.initCanvasBoost=function(){c.seriesTypes.heatmap&&c.wrap(c.seriesTypes.heatmap.prototype,"drawPoints",function(){var a=this.getContext();a?(m(this.points,function(b){var f=b.plotY;void 0===f||isNaN(f)||null===b.y||(f=b.shapeArgs,
b=b.series.pointAttribs(b),a.fillStyle=b.fill,a.fillRect(f.x,f.y,f.width,f.height))}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, \x3cbr\x3eplease use a modern browser")});c.extend(w.prototype,{getContext:function(){var a=this.chart,b=a.chartWidth,f=a.chartHeight,c=a.seriesGroup||this.group,d=this,e,h=function(a,f,d,b,c,t,e){a.call(this,d,f,b,c,t,e)};a.isChartSeriesBoosting()&&(d=a,c=a.seriesGroup);e=d.ctx;d.canvas||(d.canvas=k.createElement("canvas"),d.renderTarget=
a.renderer.image("",0,0,b,f).addClass("highcharts-boost-canvas").add(c),d.ctx=e=d.canvas.getContext("2d"),a.inverted&&m(["moveTo","lineTo","rect","arc"],function(a){y(e,a,h)}),d.boostCopy=function(){d.renderTarget.attr({href:d.canvas.toDataURL("image/png")})},d.boostClear=function(){e.clearRect(0,0,d.canvas.width,d.canvas.height);d===this&&d.renderTarget.attr({href:""})},d.boostClipRect=a.renderer.clipRect(),d.renderTarget.clip(d.boostClipRect));d.canvas.width!==b&&(d.canvas.width=b);d.canvas.height!==
f&&(d.canvas.height=f);d.renderTarget.attr({x:0,y:0,width:b,height:f,style:"pointer-events: none",href:""});d.boostClipRect.attr(a.getBoostClipRect(d));return e},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,b,f){a.lineTo(b,f)},renderCanvas:function(){var a=this,b=a.options,f=a.chart,t=this.xAxis,d=this.yAxis,e=(f.options.boost||{}).timeRendering||!1,
h,k=0,m=a.processedXData,w=a.processedYData,J=b.data,l=t.getExtremes(),z=l.min,A=l.max,l=d.getExtremes(),y=l.min,ea=l.max,K={},B,fa=!!a.sampling,L,C=b.marker&&b.marker.radius,M=this.cvsDrawPoint,D=b.lineWidth?this.cvsLineTo:!1,N=C&&1>=C?this.cvsMarkerSquare:this.cvsMarkerCircle,ga=this.cvsStrokeBatch||1E3,ha=!1!==b.enableMouseTracking,O,l=b.threshold,p=d.getThreshold(l),P=ba(l),Q=p,ia=this.fill,R=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),S=!!b.stacking,ja=a.cropStart||0,l=f.options.loading,
ka=a.requireSorting,T,la=b.connectNulls,U=!m,E,F,r,v,G,n=S?a.data:m||J,ma=a.fillOpacity?(new Z(a.color)).setOpacity(da(b.fillOpacity,.75)).get():a.color,V=function(){ia?(h.fillStyle=ma,h.fill()):(h.strokeStyle=a.color,h.lineWidth=b.lineWidth,h.stroke())},X=function(d,b,c,g){0===k&&(h.beginPath(),D&&(h.lineJoin="round"));f.scroller&&"highcharts-navigator-series"===a.options.className?(b+=f.scroller.top,c&&(c+=f.scroller.top)):b+=f.plotTop;d+=f.plotLeft;T?h.moveTo(d,b):M?M(h,d,b,c,O):D?D(h,d,b):N&&
N.call(a,h,d,b,C,g);k+=1;k===ga&&(V(),k=0);O={clientX:d,plotY:b,yBottom:c}},H=function(a,b,c){G=a+","+b;ha&&!K[G]&&(K[G]=!0,f.inverted&&(a=t.len-a,b=d.len-b),L.push({clientX:a,plotX:a,plotY:b,i:ja+c}))};this.renderTarget&&this.renderTarget.attr({href:""});(this.points||this.graph)&&this.destroyGraphics();a.plotGroup("group","series",a.visible?"visible":"hidden",b.zIndex,f.seriesGroup);a.markerGroup=a.group;x(a,"destroy",function(){a.markerGroup=null});L=this.points=[];h=this.getContext();a.buildKDTree=
Y;this.boostClear&&this.boostClear();this.visible&&(99999<J.length&&(f.options.loading=ca(l,{labelStyle:{backgroundColor:c.color("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),c.clearTimeout(I),f.showLoading("Drawing..."),f.options.loading=l),e&&console.time("canvas rendering"),c.eachAsync(n,function(b,c){var e,g,h,k=!1,l=!1,m=!1,u=!1,W="undefined"===typeof f.index,q=!0;if(!W){U?(e=b[0],g=b[1],n[c+1]&&(m=n[c+1][0]),n[c-1]&&(u=n[c-1][0])):
(e=b,g=w[c],n[c+1]&&(m=n[c+1]),n[c-1]&&(u=n[c-1]));m&&m>=z&&m<=A&&(k=!0);u&&u>=z&&u<=A&&(l=!0);R?(U&&(g=b.slice(1,3)),h=g[0],g=g[1]):S&&(e=b.x,g=b.stackY,h=g-b.y);b=null===g;ka||(q=g>=y&&g<=ea);if(!b&&(e>=z&&e<=A&&q||k||l))if(e=Math.round(t.toPixels(e,!0)),fa){if(void 0===r||e===B){R||(h=g);if(void 0===v||g>F)F=g,v=c;if(void 0===r||h<E)E=h,r=c}e!==B&&(void 0!==r&&(g=d.toPixels(F,!0),p=d.toPixels(E,!0),X(e,P?Math.min(g,Q):g,P?Math.max(p,Q):p,c),H(e,g,v),p!==g&&H(e,p,r)),r=v=void 0,B=e)}else g=Math.round(d.toPixels(g,
!0)),X(e,g,p,c),H(e,g,c);T=b&&!la;0===c%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!W},function(){var b=f.loadingDiv,d=f.loadingShown;V();a.canvasToSVG();e&&console.timeEnd("canvas rendering");aa(a,"renderedCanvas");d&&(q(b.style,{transition:"opacity 250ms",opacity:0}),f.loadingShown=!1,I=setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b);f.loadingDiv=f.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},f.renderer.forExport?Number.MAX_VALUE:
void 0))}});e.scatter.prototype.cvsMarkerCircle=function(a,b,c,e){a.moveTo(b,c);a.arc(b,c,e,0,2*Math.PI,!1)};e.scatter.prototype.cvsMarkerSquare=function(a,b,c,e){a.rect(b-e,c-e,2*e,2*e)};e.scatter.prototype.fill=!0;e.bubble&&(e.bubble.prototype.cvsMarkerCircle=function(a,b,c,e,d){a.moveTo(b,c);a.arc(b,c,this.radii&&this.radii[d],0,2*Math.PI,!1)},e.bubble.prototype.cvsStrokeBatch=1);q(e.area.prototype,{cvsDrawPoint:function(a,b,c,e,d){d&&b!==d.clientX&&(a.moveTo(d.clientX,d.yBottom),a.lineTo(d.clientX,
d.plotY),a.lineTo(b,c),a.lineTo(b,e))},fill:!0,fillOpacity:!0,sampling:!0});q(e.column.prototype,{cvsDrawPoint:function(a,b,c,e){a.rect(b-1,c,1,e-c)},fill:!0,sampling:!0});c.Chart.prototype.callbacks.push(function(a){x(a,"predraw",function(){a.renderTarget&&a.renderTarget.attr({href:""});a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});x(a,"render",function(){a.boostCopy&&a.boostCopy()})})}})(k)});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)
 Boost module

 (c) 2010-2017 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(t){"object"===typeof module&&module.exports?module.exports=t:t(Highcharts)})(function(t){(function(h){function t(){var a=Array.prototype.slice.call(arguments),c=-Number.MAX_VALUE;n(a,function(a){if("undefined"!==typeof a&&null!==a&&"undefined"!==typeof a.length&&0<a.length)return c=a.length,!0});return c}function ba(a){var c=0,e=0,f=I(a.options.boost&&a.options.boost.allowForce,!0),b;if("undefined"!==typeof a.boostForceChartBoost)return a.boostForceChartBoost;if(1<a.series.length)for(var k=
0;k<a.series.length;k++)b=a.series[k],K[b.type]&&++e,t(b.processedXData,b.options.data,b.points)>=(b.options.boostThreshold||Number.MAX_VALUE)&&++c;a.boostForceChartBoost=f&&e===a.series.length&&0<c||5<c;return a.boostForceChartBoost}function ja(a){function c(b,d){d=a.createShader("vertex"===d?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(d,b);a.compileShader(d);return a.getShaderParameter(d,a.COMPILE_STATUS)?d:!1}function e(){function b(b){return a.getUniformLocation(k,b)}var e=c("#version 100\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float plotHeight;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value \x3d aVertexPosition.w;\nfloat zMax \x3d bubbleZMax;\nfloat zMin \x3d bubbleZMin;\nfloat radius \x3d 0.0;\nfloat pos \x3d 0.0;\nfloat zRange \x3d zMax - zMin;\nif (bubbleSizeAbs){\nvalue \x3d value - bubbleZThreshold;\nzMax \x3d max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin \x3d 0.0;\n}\nif (value \x3c zMin){\nradius \x3d bubbleZMin / 2.0 - 1.0;\n} else {\npos \x3d zRange \x3e 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea \x26\x26 pos \x3e 0.0){\npos \x3d sqrt(pos);\n}\nradius \x3d ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord\n){\nfloat sign \x3d 1.0;\nfloat cvsOffset \x3d 0.0;\nif (cvsCoord) {\nsign *\x3d -1.0;\ncvsOffset \x3d len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value){\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold){\nfloat v;\nif (skipTranslation){\nv \x3d value;// + yAxisPos;\n} else {\nv \x3d translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord);// + yAxisPos;\nif (v \x3e plotHeight) {\nv \x3d plotHeight;\n}\n}\nif (checkTreshold \x3e 0.0 \x26\x26 hasThreshold) {\nv \x3d min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize \x3d bubbleRadius();\n} else {\ngl_PointSize \x3d pSize;\n}\nvColor \x3d aColor;\nif (isInverted) {\ngl_Position \x3d uPMatrix * vec4(xToPixels(aVertexPosition.y) + yAxisPos, yToPixels(aVertexPosition.x, aVertexPosition.z) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position \x3d uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}",
"vertex"),f=c("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col \x3d fillColor;\nvec4 tcol;\nif (hasColor) {\ncol \x3d vColor;\n}\nif (isCircle) {\ntcol \x3d texture2D(uSampler, gl_PointCoord.st);\ncol *\x3d tcol;\nif (tcol.r \x3c 0.0) {\ndiscard;\n} else {\ngl_FragColor \x3d col;\n}\n} else {\ngl_FragColor \x3d col;\n}\n}","fragment");
if(!e||!f)return k=!1;k=a.createProgram();a.attachShader(k,e);a.attachShader(k,f);a.linkProgram(k);a.useProgram(k);a.bindAttribLocation(k,0,"aVertexPosition");h=b("uPMatrix");l=b("pSize");N=b("fillColor");p=b("isBubble");g=b("bubbleSizeAbs");B=b("bubbleSizeByArea");v=b("uSampler");d=b("skipTranslation");m=b("isCircle");n=b("isInverted");E=b("plotHeight");return!0}function f(d,c){d=b[d]=b[d]||a.getUniformLocation(k,d);a.uniform1f(d,c)}var b={},k,h,l,N,p,g,B,d,m,n,E,v;a&&e();return{psUniform:function(){return l},
pUniform:function(){return h},fillColorUniform:function(){return N},setPlotHeight:function(b){a.uniform1f(E,b)},setBubbleUniforms:function(b,d,c){var e=b.options,k=Number.MAX_VALUE,h=-Number.MAX_VALUE;"bubble"===b.type&&(k=I(e.zMin,Math.min(k,Math.max(d,!1===e.displayNegative?e.zThreshold:-Number.MAX_VALUE))),h=I(e.zMax,Math.max(h,c)),a.uniform1i(p,1),a.uniform1i(m,1),a.uniform1i(B,"width"!==b.options.sizeBy),a.uniform1i(g,b.options.sizeByAbsoluteValue),f("bubbleZMin",k),f("bubbleZMax",h),f("bubbleZThreshold",
b.options.zThreshold),f("bubbleMinSize",b.minPxSize),f("bubbleMaxSize",b.maxPxSize))},bind:function(){a.useProgram(k)},program:function(){return k},create:e,setUniform:f,setPMatrix:function(b){a.uniformMatrix4fv(h,!1,b)},setColor:function(b){a.uniform4f(N,b[0]/255,b[1]/255,b[2]/255,b[3])},setPointSize:function(b){a.uniform1f(l,b)},setSkipTranslation:function(b){a.uniform1i(d,!0===b?1:0)},setTexture:function(){a.uniform1i(v,0)},setDrawAsCircle:function(b){a.uniform1i(m,b?1:0)},reset:function(){a.uniform1i(p,
0);a.uniform1i(m,0)},setInverted:function(b){a.uniform1i(n,b)},destroy:function(){a&&k&&(a.deleteProgram(k),k=!1)}}}function T(a,c,e){function f(){b&&(a.deleteBuffer(b),k=b=!1);n=0;h=e||2;p=[]}var b=!1,k=!1,h=e||2,l=!1,n=0,p;return{destroy:f,bind:function(){if(!b)return!1;a.vertexAttribPointer(k,h,a.FLOAT,!1,0,0)},data:p,build:function(e,B,d){var g;p=e||[];if(!(p&&0!==p.length||l))return f(),!1;h=d||h;b&&a.deleteBuffer(b);l||(g=new Float32Array(p));b=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,b);
a.bufferData(a.ARRAY_BUFFER,l||g,a.STATIC_DRAW);k=a.getAttribLocation(c.program(),B);a.enableVertexAttribArray(k);return!0},render:function(c,e,d){var f=l?l.length:p.length;if(!b||!f)return!1;if(!c||c>f||0>c)c=0;if(!e||e>f)e=f;a.drawArrays(a[(d||"points").toUpperCase()],c/h,(e-c)/h);return!0},allocate:function(a){n=-1;l=new Float32Array(4*a)},push:function(a,b,d,c){l&&(l[++n]=a,l[++n]=b,l[++n]=d,l[++n]=c)}}}function la(a){function c(a){var b,d;return a.isSeriesBoosting?(b=!!a.options.stacking,d=a.xData||
a.options.xData||a.processedXData,b=(b?a.data:d||a.options.data).length,"treemap"===a.type?b*=12:"heatmap"===a.type?b*=6:K[a.type]&&(b*=2),b):0}function e(){d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT)}function f(a,b){function d(a){a&&(b.colorData.push(a[0]),b.colorData.push(a[1]),b.colorData.push(a[2]),b.colorData.push(a[3]))}function c(a,b,c,e,f){d(f);q.usePreallocated?B.push(a,b,c?1:0,e||1):(E.push(a),E.push(b),E.push(c?1:0),E.push(e||1))}function e(){b.segments.length&&(b.segments[b.segments.length-
1].to=E.length)}function f(){b.segments.length&&b.segments[b.segments.length-1].from===E.length||(e(),b.segments.push({from:E.length}))}function F(a,b,e,f,F){d(F);c(a+e,b);d(F);c(a,b);d(F);c(a,b+f);d(F);c(a,b+f);d(F);c(a+e,b+f);d(F);c(a+e,b)}function Q(a){q.useGPUTranslations||(b.skipTranslation=!0,a.x=ca.toPixels(a.x,!0),a.y=G.toPixels(a.y,!0));c(a.x,a.y,0,2)}var g=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),k=a.chart,l=a.options,v=!!l.stacking,p=l.data,m=a.xAxis.getExtremes(),x=m.min,
m=m.max,w=a.yAxis.getExtremes(),z=w.min,w=w.max,t=a.xData||l.xData||a.processedXData,A=a.yData||l.yData||a.processedYData,D=a.zData||l.zData||a.processedZData,G=a.yAxis,ca=a.xAxis,I=a.chart.plotHeight,L=a.chart.plotWidth,W=!t||0===t.length,S=l.connectNulls,r=a.points||!1,N=!1,J=!1,y,U,V,p=v?a.data:t||p,t={x:-Number.MAX_VALUE,y:0},H={x:Number.MIN_VALUE,y:0},O=0,u,M,C=-1,Y=!1,Z=!1,aa,ka="undefined"===typeof k.index,P=!1,X=!1,ba=K[a.type],T=!1,R=!0;if(!(l.boostData&&0<l.boostData.length)){k.inverted&&
(I=a.chart.plotWidth,L=a.chart.plotHeight);a.closestPointRangePx=Number.MAX_VALUE;f();if(r&&0<r.length)b.skipTranslation=!0,b.drawMode="triangles",r[0].node&&r[0].node.levelDynamic&&r.sort(function(a,b){if(a.node){if(a.node.levelDynamic>b.node.levelDynamic)return 1;if(a.node.levelDynamic<b.node.levelDynamic)return-1}return 0}),n(r,function(b){var d=b.plotY,c;"undefined"===typeof d||isNaN(d)||null===b.y||(d=b.shapeArgs,c=b.series.pointAttribs(b),b=c["stroke-width"]||0,U=h.color(c.fill).rgba,U[0]/=
255,U[1]/=255,U[2]/=255,"treemap"===a.type&&(b=b||1,V=h.color(c.stroke).rgba,V[0]/=255,V[1]/=255,V[2]/=255,F(d.x,d.y,d.width,d.height,V),b/=2),"heatmap"===a.type&&k.inverted&&(d.x=ca.len-d.x,d.y=G.len-d.y,d.width=-d.width,d.height=-d.height),F(d.x+b,d.y+b,d.width-2*b,d.height-2*b,U))});else{for(;C<p.length-1;){y=p[++C];if(ka)break;W?(r=y[0],u=y[1],p[C+1]&&(Z=p[C+1][0]),p[C-1]&&(Y=p[C-1][0]),3<=y.length&&(M=y[2],y[2]>b.zMax&&(b.zMax=y[2]),y[2]<b.zMin&&(b.zMin=y[2]))):(r=y,u=A[C],p[C+1]&&(Z=p[C+1]),
p[C-1]&&(Y=p[C-1]),D&&D.length&&(M=D[C],D[C]>b.zMax&&(b.zMax=D[C]),D[C]<b.zMin&&(b.zMin=D[C])));if(S||null!==r&&null!==u){if(Z&&Z>=x&&Z<=m&&(P=!0),Y&&Y>=x&&Y<=m&&(X=!0),g?(W&&(u=y.slice(1,3)),aa=u[0],u=u[1]):v&&(r=y.x,u=y.stackY,aa=u-y.y),null!==z&&"undefined"!==typeof z&&null!==w&&"undefined"!==typeof w&&(R=u>=z&&u<=w),r>m&&H.x<m&&(H.x=r,H.y=u),r<x&&t.x<x&&(t.x=r,t.y=u),null!==u||!S)if(null!==u&&R){if(r>=x&&r<=m&&(T=!0),T||P||X){q.useGPUTranslations||(b.skipTranslation=!0,r=ca.toPixels(r,!0),u=G.toPixels(u,
!0),u>I&&(u=I),r>L&&(r=L));if(ba){y=aa;if(!1===aa||"undefined"===typeof aa)y=0>u?u:0;q.useGPUTranslations||(y=G.toPixels(y,!0));c(r,y,0,0,!1)}b.hasMarkers&&!1!==N&&(a.closestPointRangePx=Math.min(a.closestPointRangePx,Math.abs(r-N)));!q.useGPUTranslations&&!q.usePreallocated&&N&&1>r-N&&J&&1>Math.abs(u-J)?q.debug.showSkipSummary&&++O:(l.step&&c(r,J,0,2,!1),c(r,u,0,"bubble"===a.type?M||1:2,!1),N=r,J=u)}}else f()}else f()}q.debug.showSkipSummary&&console.log("skipped points:",O);!N&&!1!==S&&t>-Number.MAX_VALUE&&
H<Number.MAX_VALUE&&(Q(t),Q(H))}e()}}function b(){x=[];W.data=E=[];A=[];B&&B.destroy()}function k(a){g&&(g.setUniform("xAxisTrans",a.transA),g.setUniform("xAxisMin",a.min),g.setUniform("xAxisMinPad",a.minPixelPadding),g.setUniform("xAxisPointRange",a.pointRange),g.setUniform("xAxisLen",a.len),g.setUniform("xAxisPos",a.pos),g.setUniform("xAxisCVSCoord",!a.horiz))}function v(a){g&&(g.setUniform("yAxisTrans",a.transA),g.setUniform("yAxisMin",a.min),g.setUniform("yAxisMinPad",a.minPixelPadding),g.setUniform("yAxisPointRange",
a.pointRange),g.setUniform("yAxisLen",a.len),g.setUniform("yAxisPos",a.pos),g.setUniform("yAxisCVSCoord",!a.horiz))}function l(a,b){g.setUniform("hasThreshold",a);g.setUniform("translatedThreshold",b)}function w(c){if(c)m=c.chartWidth||800,D=c.chartHeight||400;else return!1;if(!d||!m||!D)return!1;q.debug.timeRendering&&console.time("gl rendering");d.canvas.width=m;d.canvas.height=D;g.bind();d.viewport(0,0,m,D);g.setPMatrix([2/m,0,0,0,0,-(2/D),0,0,0,0,-2,0,-1,1,-1,1]);g.setPlotHeight(c.plotHeight);
1<q.lineWidth&&!h.isMS&&d.lineWidth(q.lineWidth);B.build(W.data,"aVertexPosition",4);B.bind();t&&(d.bindTexture(d.TEXTURE_2D,G),g.setTexture(G));g.setInverted(c.inverted);n(x,function(a,b){var c=a.series.options,e;e="undefined"!==typeof c.lineWidth?c.lineWidth:1;var f=c.threshold,F=H(f),p=a.series.yAxis.getThreshold(f),f=I(c.marker?c.marker.enabled:null,a.series.xAxis.isRadial?!0:null,a.series.closestPointRangePx>2*((c.marker?c.marker.radius:10)||10)),m;m=a.series.pointAttribs&&a.series.pointAttribs().fill||
a.series.color;c.colorByPoint&&(m=a.series.chart.options.colors[b]);a.series.fillOpacity&&c.fillOpacity&&(m=(new R(m)).setOpacity(I(c.fillOpacity,1)).get());m=h.color(m).rgba;q.useAlpha||(m[3]=1);"lines"===a.drawMode&&q.useAlpha&&1>m[3]&&(m[3]/=10);"add"===c.boostBlending?(d.blendFunc(d.SRC_ALPHA,d.ONE),d.blendEquation(d.FUNC_ADD)):"mult"===c.boostBlending?d.blendFunc(d.DST_COLOR,d.ZERO):"darken"===c.boostBlending?(d.blendFunc(d.ONE,d.ONE),d.blendEquation(d.FUNC_MIN)):d.blendFuncSeparate(d.SRC_ALPHA,
d.ONE_MINUS_SRC_ALPHA,d.ONE,d.ONE_MINUS_SRC_ALPHA);g.reset();0<a.colorData.length&&(g.setUniform("hasColor",1),b=T(d,g),b.build(a.colorData,"aColor",4),b.bind());g.setColor(m);k(a.series.xAxis);v(a.series.yAxis);l(F,p);"points"===a.drawMode&&(c.marker&&c.marker.radius?g.setPointSize(2*c.marker.radius):g.setPointSize(1));g.setSkipTranslation(a.skipTranslation);"bubble"===a.series.type&&g.setBubbleUniforms(a.series,a.zMin,a.zMax);g.setDrawAsCircle(J[a.series.type]&&t||!1);if(0<e||"line_strip"!==a.drawMode)for(e=
0;e<a.segments.length;e++)B.render(a.segments[e].from,a.segments[e].to,a.drawMode);if(a.hasMarkers&&f)for(c.marker&&c.marker.radius?g.setPointSize(2*c.marker.radius):g.setPointSize(10),g.setDrawAsCircle(!0),e=0;e<a.segments.length;e++)B.render(a.segments[e].from,a.segments[e].to,"POINTS")});q.debug.timeRendering&&console.timeEnd("gl rendering");a&&a();b()}function p(a){e();if(a.renderer.forExport)return w(a);S?w(a):setTimeout(function(){p(a)},1)}var g=!1,B=!1,d=!1,m=0,D=0,E=!1,A=!1,t=!1,W={},S=!1,
x=[],L=O.createElement("canvas"),z=L.getContext("2d"),G,K={column:!0,columnrange:!0,bar:!0,area:!0,arearange:!0},J={scatter:!0,bubble:!0},q={pointSize:1,lineWidth:1,fillColor:"#AA00AA",useAlpha:!0,usePreallocated:!1,useGPUTranslations:!1,debug:{timeRendering:!1,timeSeriesProcessing:!1,timeSetup:!1,timeBufferCopy:!1,timeKDTree:!1,showSkipSummary:!1}};return W={allocateBufferForSingleSeries:function(a){var b=0;q.usePreallocated&&(a.isSeriesBoosting&&(b=c(a)),B.allocate(b))},pushSeries:function(a){0<
x.length&&x[x.length-1].hasMarkers&&(x[x.length-1].markerTo=A.length);q.debug.timeSeriesProcessing&&console.time("building "+a.type+" series");x.push({segments:[],markerFrom:A.length,colorData:[],series:a,zMin:Number.MAX_VALUE,zMax:-Number.MAX_VALUE,hasMarkers:a.options.marker?!1!==a.options.marker.enabled:!1,showMarksers:!0,drawMode:{area:"lines",arearange:"lines",areaspline:"line_strip",column:"lines",columnrange:"lines",bar:"lines",line:"line_strip",scatter:"points",heatmap:"triangles",treemap:"triangles",
bubble:"points"}[a.type]||"line_strip"});f(a,x[x.length-1]);q.debug.timeSeriesProcessing&&console.timeEnd("building "+a.type+" series")},setSize:function(a,b){if(m!==a||b!==b)m=a,D=b,g.bind(),g.setPMatrix([2/m,0,0,0,0,-(2/D),0,0,0,0,-2,0,-1,1,-1,1])},inited:function(){return S},setThreshold:l,init:function(a,c){var e=0,f=["webgl","experimental-webgl","moz-webgl","webkit-3d"];S=!1;if(!a)return!1;for(q.debug.timeSetup&&console.time("gl setup");e<f.length&&!(d=a.getContext(f[e],{}));e++);if(d)c||b();
else return!1;d.enable(d.BLEND);d.blendFunc(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA);d.disable(d.DEPTH_TEST);d.depthFunc(d.LESS);g=ja(d);B=T(d,g);t=!1;G=d.createTexture();L.width=512;L.height=512;z.mozImageSmoothingEnabled=!1;z.webkitImageSmoothingEnabled=!1;z.msImageSmoothingEnabled=!1;z.imageSmoothingEnabled=!1;z.strokeStyle="rgba(255, 255, 255, 0)";z.fillStyle="#FFF";z.beginPath();z.arc(256,256,256,0,2*Math.PI);z.stroke();z.fill();try{d.bindTexture(d.TEXTURE_2D,G),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,
d.RGBA,d.UNSIGNED_BYTE,L),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.LINEAR),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),d.bindTexture(d.TEXTURE_2D,null),t=!0}catch(sa){}S=!0;q.debug.timeSetup&&console.timeEnd("gl setup");return!0},render:p,settings:q,valid:function(){return!1!==d},clear:e,flush:b,setXAxis:k,setYAxis:v,data:E,gl:function(){return d},
allocateBuffer:function(a){var b=0;q.usePreallocated&&(n(a.series,function(a){a.isSeriesBoosting&&(b+=c(a))}),B.allocate(b))},destroy:function(){b();B.destroy();g.destroy();d&&(G&&d.deleteTexture(G),d.canvas.width=1,d.canvas.height=1)},setOptions:function(a){ma(!0,q,a)}}}function da(a,c){var e=a.chartWidth,f=a.chartHeight,b=a,k=a.seriesGroup||c.group,n=O.implementation.hasFeature("www.http://w3.org/TR/SVG11/feature#Extensibility","1.1"),b=a.isChartSeriesBoosting()?a:c,n=!1;b.renderTarget||(b.canvas=
na,a.renderer.forExport||!n?(b.renderTarget=a.renderer.image("",0,0,e,f).addClass("highcharts-boost-canvas").add(k),b.boostClear=function(){b.renderTarget.attr({href:""})},b.boostCopy=function(){b.boostResizeTarget();b.renderTarget.attr({href:b.canvas.toDataURL("image/png")})}):(b.renderTargetFo=a.renderer.createElement("foreignObject").add(k),b.renderTarget=O.createElement("canvas"),b.renderTargetCtx=b.renderTarget.getContext("2d"),b.renderTargetFo.element.appendChild(b.renderTarget),b.boostClear=
function(){b.renderTarget.width=b.canvas.width;b.renderTarget.height=b.canvas.height},b.boostCopy=function(){b.renderTarget.width=b.canvas.width;b.renderTarget.height=b.canvas.height;b.renderTargetCtx.drawImage(b.canvas,0,0)}),b.boostResizeTarget=function(){e=a.chartWidth;f=a.chartHeight;(b.renderTargetFo||b.renderTarget).attr({x:0,y:0,width:e,height:f}).css({pointerEvents:"none",mixedBlendMode:"normal",opacity:1});b instanceof h.Chart&&b.markerGroup.translate(a.plotLeft,a.plotTop)},b.boostClipRect=
a.renderer.clipRect(),(b.renderTargetFo||b.renderTarget).clip(b.boostClipRect),b instanceof h.Chart&&(b.markerGroup=b.renderer.g().add(k),b.markerGroup.translate(c.xAxis.pos,c.yAxis.pos)));b.canvas.width=e;b.canvas.height=f;b.boostClipRect.attr(a.getBoostClipRect(b));b.boostResizeTarget();b.boostClear();b.ogl||(b.ogl=la(function(){b.ogl.settings.debug.timeBufferCopy&&console.time("buffer copy");b.boostCopy();b.ogl.settings.debug.timeBufferCopy&&console.timeEnd("buffer copy")}),b.ogl.init(b.canvas),
b.ogl.setOptions(a.options.boost||{}),b instanceof h.Chart&&b.ogl.allocateBuffer(a));b.ogl.setSize(e,f);return b.ogl}function ea(a,c,e){a&&c.renderTarget&&c.canvas&&!(e||c.chart).isChartSeriesBoosting()&&a.render(e||c.chart)}function fa(a,c){a&&c.renderTarget&&c.canvas&&!c.chart.isChartSeriesBoosting()&&a.allocateBufferForSingleSeries(c)}function oa(a){var c=!0;this.chart.options&&this.chart.options.boost&&(c="undefined"===typeof this.chart.options.boost.enabled?!0:this.chart.options.boost.enabled);
if(!c||!this.isSeriesBoosting)return a.call(this);this.chart.isBoosting=!0;if(a=da(this.chart,this))fa(a,this),a.pushSeries(this);ea(a,this)}var J=h.win,O=J.document,pa=function(){},ga=h.Chart,R=h.Color,v=h.Series,w=h.seriesTypes,n=h.each,ha=h.extend,M=h.addEvent,qa=h.fireEvent,ra=h.grep,H=h.isNumber,ma=h.merge,I=h.pick,A=h.wrap,P=h.getOptions().plotOptions,na=O.createElement("canvas"),X,ia="area arearange column columnrange bar line scatter heatmap bubble treemap".split(" "),K={};n(ia,function(a){K[a]=
1});R.prototype.names={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",
lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",
oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",
skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};ga.prototype.isChartSeriesBoosting=function(){return I(this.options.boost&&this.options.boost.seriesThreshold,50)<=this.series.length||ba(this)};ga.prototype.getBoostClipRect=
function(a){var c={x:this.plotLeft,y:this.plotTop,width:this.plotWidth,height:this.plotHeight};a===this&&n(this.yAxis,function(a){c.y=Math.min(a.pos,c.y);c.height=Math.max(a.pos-this.plotTop+a.len,c.height)},this);return c};h.eachAsync=function(a,c,e,f,b,k){b=b||0;f=f||3E4;for(var n=b+f,l=!0;l&&b<n&&b<a.length;)l=c(a[b],b),++b;l&&(b<a.length?k?h.eachAsync(a,c,e,f,b,k):J.requestAnimationFrame?J.requestAnimationFrame(function(){h.eachAsync(a,c,e,f,b)}):setTimeout(function(){h.eachAsync(a,c,e,f,b)}):
e&&e())};v.prototype.getPoint=function(a){var c=a,e=this.xData||this.options.xData||this.processedXData||!1;!a||a instanceof this.pointClass||(c=(new this.pointClass).init(this,this.options.data[a.i],e?e[a.i]:void 0),c.category=c.x,c.dist=a.dist,c.distX=a.distX,c.plotX=a.plotX,c.plotY=a.plotY,c.index=a.i);return c};A(v.prototype,"searchPoint",function(a){return this.getPoint(a.apply(this,[].slice.call(arguments,1)))});M(v,"destroy",function(){var a=this,c=a.chart;c.markerGroup===a.markerGroup&&(a.markerGroup=
null);c.hoverPoints&&(c.hoverPoints=ra(c.hoverPoints,function(c){return c.series===a}));c.hoverPoint&&c.hoverPoint.series===a&&(c.hoverPoint=null)});A(v.prototype,"getExtremes",function(a){if(!this.isSeriesBoosting||!this.hasExtremes||!this.hasExtremes())return a.apply(this,Array.prototype.slice.call(arguments,1))});n(ia,function(a){P[a]&&(P[a].boostThreshold=5E3,P[a].boostData=[],w[a].prototype.fillOpacity=!0)});n(["translate","generatePoints","drawTracker","drawPoints","render"],function(a){function c(c){var e=
this.options.stacking&&("translate"===a||"generatePoints"===a),b=I(this.chart&&this.chart.options&&this.chart.options.boost&&this.chart.options.boost.enabled,!0);if(!this.isSeriesBoosting||e||!b||"heatmap"===this.type||"treemap"===this.type||!K[this.type])c.call(this);else if(this[a+"Canvas"])this[a+"Canvas"]()}A(v.prototype,a,c);"translate"===a&&n("column bar arearange columnrange heatmap treemap".split(" "),function(e){w[e]&&A(w[e].prototype,a,c)})});A(v.prototype,"processData",function(a){function c(a){return e.chart.isChartSeriesBoosting()||
(a?a.length:0)>=(e.options.boostThreshold||Number.MAX_VALUE)}var e=this,f=this.options.data;K[this.type]?(c(f)&&"heatmap"!==this.type&&"treemap"!==this.type&&!this.options.stacking&&this.hasExtremes&&this.hasExtremes(!0)||(a.apply(this,Array.prototype.slice.call(arguments,1)),f=this.processedXData),(this.isSeriesBoosting=c(f))?this.enterBoost():this.exitBoost&&this.exitBoost()):a.apply(this,Array.prototype.slice.call(arguments,1))});M(v,"hide",function(){this.canvas&&this.renderTarget&&(this.ogl&&
this.ogl.clear(),this.boostClear())});v.prototype.enterBoost=function(){this.alteredByBoost=[];n(["allowDG","directTouch","stickyTracking"],function(a){this.alteredByBoost.push({prop:a,val:this[a],own:this.hasOwnProperty(a)})},this);this.directTouch=this.allowDG=!1;this.stickyTracking=!0;this.animate=null;this.labelBySeries&&(this.labelBySeries=this.labelBySeries.destroy())};v.prototype.exitBoost=function(){n(this.alteredByBoost||[],function(a){a.own?this[a.prop]=a.val:delete this[a.prop]},this);
this.boostClear&&this.boostClear()};v.prototype.hasExtremes=function(a){var c=this.options,e=this.xAxis&&this.xAxis.options,f=this.yAxis&&this.yAxis.options;return c.data.length>(c.boostThreshold||Number.MAX_VALUE)&&H(f.min)&&H(f.max)&&(!a||H(e.min)&&H(e.max))};v.prototype.destroyGraphics=function(){var a=this,c=this.points,e,f;if(c)for(f=0;f<c.length;f+=1)(e=c[f])&&e.destroyElements&&e.destroyElements();n(["graph","area","tracker"],function(b){a[b]&&(a[b]=a[b].destroy())})};h.hasWebGLSupport=function(){var a=
0,c,e=["webgl","experimental-webgl","moz-webgl","webkit-3d"],f=!1;if("undefined"!==typeof J.WebGLRenderingContext)for(c=O.createElement("canvas");a<e.length;a++)try{if(f=c.getContext(e[a]),"undefined"!==typeof f&&null!==f)return!0}catch(b){}return!1};h.hasWebGLSupport()?(h.extend(v.prototype,{renderCanvas:function(){function a(a,b){var c,e,f=!1,g="undefined"===typeof k.index,h=!0;if(!g&&(M?(c=a[0],e=a[1]):(c=a,e=p[b]),L?(M&&(e=a.slice(1,3)),f=e[0],e=e[1]):z&&(c=a.x,e=a.stackY,f=e-a.y),O||(h=e>=m&&
e<=w),null!==e&&c>=v&&c<=d&&h))if(a=Math.ceil(n.toPixels(c,!0)),I){if(void 0===Q||a===A){L||(f=e);if(void 0===K||e>F)F=e,K=b;if(void 0===Q||f<q)q=f,Q=b}a!==A&&(void 0!==Q&&(e=l.toPixels(F,!0),x=l.toPixels(q,!0),R(a,e,K),x!==e&&R(a,x,Q)),Q=K=void 0,A=a)}else e=Math.ceil(l.toPixels(e,!0)),R(a,e,b);return!g}function c(){qa(e,"renderedCanvas");delete e.buildKDTree;e.buildKDTree();P.debug.timeKDTree&&console.timeEnd("kd tree building")}var e=this,f=e.options||{},b=!1,k=e.chart,n=this.xAxis,l=this.yAxis,
t=f.xData||e.processedXData,p=f.yData||e.processedYData,g=f.data,b=n.getExtremes(),v=b.min,d=b.max,b=l.getExtremes(),m=b.min,w=b.max,E={},A,I=!!e.sampling,H,J=!1!==f.enableMouseTracking,x=l.getThreshold(f.threshold),L=e.pointArrayMap&&"low,high"===e.pointArrayMap.join(","),z=!!f.stacking,G=e.cropStart||0,O=e.requireSorting,M=!t,q,F,Q,K,P,T=this.xData||this.options.xData||this.processedXData||!1,R=function(a,b,c){X=a+","+b;J&&!E[X]&&(E[X]=!0,k.inverted&&(a=n.len-a,b=l.len-b),H.push({x:T?T[G+c]:!1,
clientX:a,plotX:a,plotY:b,i:G+c}))},b=da(k,e);k.isBoosting=!0;P=b.settings;if(this.visible){if(this.points||this.graph)this.animate=null,this.destroyGraphics();k.isChartSeriesBoosting()?(this.markerGroup=k.markerGroup,this.renderTarget&&(this.renderTarget=this.renderTarget.destroy())):this.markerGroup=e.plotGroup("markerGroup","markers",!0,1,k.seriesGroup);H=this.points=[];e.buildKDTree=pa;b&&(fa(b,this),b.pushSeries(e),ea(b,this,k));k.renderer.forExport||(P.debug.timeKDTree&&console.time("kd tree building"),
h.eachAsync(z?e.data:t||g,a,c))}}}),n(["heatmap","treemap"],function(a){w[a]&&A(w[a].prototype,"drawPoints",oa)}),w.bubble&&(delete w.bubble.prototype.buildKDTree,A(w.bubble.prototype,"markerAttribs",function(a){return this.isSeriesBoosting?!1:a.apply(this,[].slice.call(arguments,1))})),w.scatter.prototype.fill=!0,ha(w.area.prototype,{fill:!0,fillOpacity:!0,sampling:!0}),ha(w.column.prototype,{fill:!0,sampling:!0}),h.Chart.prototype.callbacks.push(function(a){M(a,"predraw",function(){a.boostForceChartBoost=
void 0;a.boostForceChartBoost=ba(a);a.isBoosting=!1;!a.isChartSeriesBoosting()&&a.didBoost&&(a.didBoost=!1);a.boostClear&&a.boostClear();a.canvas&&a.ogl&&a.isChartSeriesBoosting()&&(a.didBoost=!0,a.ogl.allocateBuffer(a));a.markerGroup&&a.xAxis&&0<a.xAxis.length&&a.yAxis&&0<a.yAxis.length&&a.markerGroup.translate(a.xAxis[0].pos,a.yAxis[0].pos)});M(a,"render",function(){a.ogl&&a.isChartSeriesBoosting()&&a.ogl.render(a)})})):"undefined"!==typeof h.initCanvasBoost?h.initCanvasBoost():h.error(26)})(t)});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)
 Data module

 (c) 2012-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(y){"object"===typeof module&&module.exports?module.exports=y:y(Highcharts)})(function(y){(function(h){h.ajax=function(A){var m=h.merge(!0,{url:!1,type:"GET",dataType:"json",success:!1,error:!1,data:!1,headers:{}},A);A={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var r=new XMLHttpRequest;if(!m.url)return!1;r.open(m.type.toUpperCase(),m.url,!0);r.setRequestHeader("Content-Type",A[m.dataType]||A.text);h.objectEach(m.headers,function(h,m){r.setRequestHeader(m,
h)});r.onreadystatechange=function(){var h;if(4===r.readyState){if(200===r.status){h=r.responseText;if("json"===m.dataType)try{h=JSON.parse(h)}catch(F){m.error&&m.error(r,F);return}return m.success&&m.success(h)}m.error&&m.error(r,r.responseText)}};try{m.data=JSON.stringify(m.data)}catch(v){}r.send(m.data||!0)}})(y);(function(h){var A=h.addEvent,m=h.Chart,r=h.win.document,v=h.each,y=h.objectEach,G=h.pick,D=h.inArray,E=h.isNumber,B=h.merge,H=h.splat,I=h.fireEvent,J=h.some,x,C=function(a,b,c){this.init(a,
b,c)};h.extend(C.prototype,{init:function(a,b,c){var f=a.decimalPoint,e;b&&(this.chartOptions=b);c&&(this.chart=c);"."!==f&&","!==f&&(f=void 0);this.options=a;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=G(a.firstRowAsNames,this.firstRowAsNames,!0);this.decimalRegex=f&&new RegExp("^(-?[0-9]+)"+f+"([0-9]+)$");this.rawColumns=[];this.columns.length&&(this.dataFound(),e=!0);e||(e=this.fetchLiveData());e||(e=!!this.parseCSV().length);e||(e=!!this.parseTable().length);e||
(e=this.parseGoogleSpreadsheet());!e&&a.afterComplete&&a.afterComplete()},getColumnDistribution:function(){var a=this.chartOptions,b=this.options,c=[],f=function(a){return(h.seriesTypes[a||"line"].prototype.pointArrayMap||[0]).length},e=a&&a.chart&&a.chart.type,d=[],k=[],p=0,g;v(a&&a.series||[],function(a){d.push(f(a.type||e))});v(b&&b.seriesMapping||[],function(a){c.push(a.x||0)});0===c.length&&c.push(0);v(b&&b.seriesMapping||[],function(b){var c=new x,n=d[p]||f(e),t=h.seriesTypes[((a&&a.series||
[])[p]||{}).type||e||"line"].prototype.pointArrayMap||["y"];c.addColumnReader(b.x,"x");y(b,function(a,b){"x"!==b&&c.addColumnReader(a,b)});for(g=0;g<n;g++)c.hasReader(t[g])||c.addColumnReader(void 0,t[g]);k.push(c);p++});b=h.seriesTypes[e||"line"].prototype.pointArrayMap;void 0===b&&(b=["y"]);this.valueCount={global:f(e),xColumns:c,individual:d,seriesBuilders:k,globalPointArrayMap:b}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();
this.parseTypes();!1!==this.parsed()&&this.complete()},parseCSV:function(a){function b(a,b,c,d){function e(b){l=a[b];t=a[b-1];q=a[b+1]}function f(a){w.length<z+1&&w.push([a]);w[z][w[z].length-1]!==a&&w[z].push(a)}function g(){h>u||u>K?(++u,n=""):(!isNaN(parseFloat(n))&&isFinite(n)?(n=parseFloat(n),f("number")):isNaN(Date.parse(n))?f("string"):(n=n.replace(/\//g,"-"),f("date")),p.length<z+1&&p.push([]),c||(p[z][b]=n),n="",++z,++u)}var k=0,l="",t="",q="",n="",u=0,z=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;k<
a.length;k++){e(k);if("#"===l){g();return}if('"'===l)for(e(++k);k<a.length&&('"'!==l||'"'===t||'"'===q);){if('"'!==l||'"'===l&&'"'!==t)n+=l;e(++k)}else d&&d[l]?d[l](l,n)&&g():l===m?g():n+=l}g()}}function c(a){var b=0,c=0,f=!1;J(a,function(a,d){var e=!1,f,l,g="";if(13<d)return!0;for(var k=0;k<a.length;k++){d=a[k];f=a[k+1];l=a[k-1];if("#"===d)break;else if('"'===d)if(e){if('"'!==l&&'"'!==f){for(;" "===f&&k<a.length;)f=a[++k];"undefined"!==typeof u[f]&&u[f]++;e=!1}}else e=!0;else"undefined"!==typeof u[d]?
(g=g.trim(),isNaN(Date.parse(g))?!isNaN(g)&&isFinite(g)||u[d]++:u[d]++,g=""):g+=d;","===d&&c++;"."===d&&b++}});f=u[";"]>u[","]?";":",";d.decimalPoint||(d.decimalPoint=b>c?".":",",e.decimalRegex=new RegExp("^(-?[0-9]+)"+d.decimalPoint+"([0-9]+)$"));return f}function f(a,b){var c,f,g=0,k=!1,n=[],p=[],l;if(!b||b>a.length)b=a.length;for(;g<b;g++)if("undefined"!==typeof a[g]&&a[g]&&a[g].length)for(c=a[g].trim().replace(/\//g," ").replace(/\-/g," ").split(" "),f=["","",""],l=0;l<c.length;l++)l<f.length&&
(c[l]=parseInt(c[l],10),c[l]&&(p[l]=!p[l]||p[l]<c[l]?c[l]:p[l],"undefined"!==typeof n[l]?n[l]!==c[l]&&(n[l]=!1):n[l]=c[l],31<c[l]?f[l]=100>c[l]?"YY":"YYYY":12<c[l]&&31>=c[l]?(f[l]="dd",k=!0):f[l].length||(f[l]="mm")));if(k){for(l=0;l<n.length;l++)!1!==n[l]?12<p[l]&&"YY"!==f[l]&&"YYYY"!==f[l]&&(f[l]="YY"):12<p[l]&&"mm"===f[l]&&(f[l]="dd");3===f.length&&"dd"===f[1]&&"dd"===f[2]&&(f[2]="YY");a=f.join("/");return(d.dateFormats||e.dateFormats)[a]?a:(I("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}
var e=this,d=a||this.options,k=d.csv,p;a="undefined"!==typeof d.startRow&&d.startRow?d.startRow:0;var g=d.endRow||Number.MAX_VALUE,h="undefined"!==typeof d.startColumn&&d.startColumn?d.startColumn:0,K=d.endColumn||Number.MAX_VALUE,m,t=0,w=[],u={",":0,";":0,"\t":0};p=this.columns=[];k&&d.beforeParse&&(k=d.beforeParse.call(this,k));if(k){k=k.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(d.lineDelimiter||"\n");if(!a||0>a)a=0;if(!g||g>=k.length)g=k.length-1;d.itemDelimiter?m=d.itemDelimiter:(m=null,
m=c(k));for(var r=0,t=a;t<=g;t++)"#"===k[t][0]?r++:b(k[t],t-a-r);d.columnTypes&&0!==d.columnTypes.length||!w.length||!w[0].length||"date"!==w[0][1]||d.dateFormat||(d.dateFormat=f(p[0]));this.dataFound()}return p},parseTable:function(){var a=this.options,b=a.table,c=this.columns,f=a.startRow||0,e=a.endRow||Number.MAX_VALUE,d=a.startColumn||0,k=a.endColumn||Number.MAX_VALUE;b&&("string"===typeof b&&(b=r.getElementById(b)),v(b.getElementsByTagName("tr"),function(a,b){b>=f&&b<=e&&v(a.children,function(a,
e){("TD"===a.tagName||"TH"===a.tagName)&&e>=d&&e<=k&&(c[e-d]||(c[e-d]=[]),c[e-d][b-f]=a.innerHTML)})}),this.dataFound());return c},fetchLiveData:function(){function a(p){function g(g,k,m){function t(){e&&b.liveDataURL===g&&(b.liveDataTimeout=setTimeout(a,d))}if(!g||0!==g.indexOf("http"))return g&&c.error&&c.error("Invalid URL"),!1;p&&(clearTimeout(b.liveDataTimeout),b.liveDataURL=g);h.ajax({url:g,dataType:m||"json",success:function(a){b&&b.series&&k(a);t()},error:function(a,b){3>++f&&t();return c.error&&
c.error(b,a)}});return!0}g(k.csvURL,function(a){b.update({data:{csv:a}})},"text")||g(k.rowsURL,function(a){b.update({data:{rows:a}})})||g(k.columnsURL,function(a){b.update({data:{columns:a}})})}var b=this.chart,c=this.options,f=0,e=c.enablePolling,d=1E3*(c.dataRefreshRate||2),k=B(c);if(!c||!c.csvURL&&!c.rowsURL&&!c.columnsURL)return!1;1E3>d&&(d=1E3);delete c.csvURL;delete c.rowsURL;delete c.columnsURL;a(!0);return c&&(c.csvURL||c.rowsURL||c.columnsURL)},parseGoogleSpreadsheet:function(){function a(d){var f=
["https://spreadsheets.google.com/feeds/cells",c,e,"public/values?alt\x3djson"].join("/");h.ajax({url:f,dataType:"json",success:function(c){d(c);b.enablePolling&&setTimeout(function(){a(d)},b.dataRefreshRate)},error:function(a,c){return b.error&&b.error(c,a)}})}var b=this.options,c=b.googleSpreadsheetKey,f=this.chart,e=b.googleSpreadsheetWorksheet||1,d=b.startRow||0,k=b.endRow||Number.MAX_VALUE,p=b.startColumn||0,g=b.endColumn||Number.MAX_VALUE,n=1E3*(b.dataRefreshRate||2);4E3>n&&(n=4E3);c&&(delete b.googleSpreadsheetKey,
a(function(a){var b=[];a=a.feed.entry;var c,e=(a||[]).length,h=0,n,m,q;if(!a||0===a.length)return!1;for(q=0;q<e;q++)c=a[q],h=Math.max(h,c.gs$cell.col);for(q=0;q<h;q++)q>=p&&q<=g&&(b[q-p]=[]);for(q=0;q<e;q++)c=a[q],h=c.gs$cell.row-1,n=c.gs$cell.col-1,n>=p&&n<=g&&h>=d&&h<=k&&(m=c.gs$cell||c.content,c=null,m.numericValue?c=0<=m.$t.indexOf("/")||0<=m.$t.indexOf("-")?m.$t:0<m.$t.indexOf("%")?100*parseFloat(m.numericValue):parseFloat(m.numericValue):m.$t&&m.$t.length&&(c=m.$t),b[n-p][h-d]=c);v(b,function(a){for(q=
0;q<a.length;q++)void 0===a[q]&&(a[q]=null)});f&&f.series&&f.update({data:{columns:b}})}));return!1},trim:function(a,b){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),b&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a},parseTypes:function(){for(var a=this.columns,b=a.length;b--;)this.parseColumn(a[b],b)},parseColumn:function(a,b){var c=this.rawColumns,f=this.columns,e=a.length,d,k,h,g,m=this.firstRowAsNames,r=-1!==D(b,this.valueCount.xColumns),
v,t=[],w=this.chartOptions,u,x=(this.options.columnTypes||[])[b],w=r&&(w&&w.xAxis&&"category"===H(w.xAxis)[0].type||"string"===x);for(c[b]||(c[b]=[]);e--;)d=t[e]||a[e],h=this.trim(d),g=this.trim(d,!0),k=parseFloat(g),void 0===c[b][e]&&(c[b][e]=h),w||0===e&&m?a[e]=""+h:+g===k?(a[e]=k,31536E6<k&&"float"!==x?a.isDatetime=!0:a.isNumeric=!0,void 0!==a[e+1]&&(u=k>a[e+1])):(h&&h.length&&(v=this.parseDate(d)),r&&E(v)&&"float"!==x?(t[e]=d,a[e]=v,a.isDatetime=!0,void 0!==a[e+1]&&(d=v>a[e+1],d!==u&&void 0!==
u&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,e=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),u=d)):(a[e]=""===h?null:h,0!==e&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)));r&&a.mixed&&(f[b]=c[b]);if(r&&u&&this.options.sort)for(b=0;b<f.length;b++)f[b].reverse(),m&&f[b].unshift(f[b].pop())},dateFormats:{"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(a){return Date.UTC(+a[1],a[2]-1,+a[3])}},
"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[2]-1,+a[1])},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[1]-1,+a[2])}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){var b=+a[3],b=b>(new Date).getFullYear()-2E3?b+1900:b+2E3;return Date.UTC(b,a[2]-1,+a[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
parser:function(a){return Date.UTC(+a[3]+2E3,a[1]-1,+a[2])}}},parseDate:function(a){var b=this.options.parseDate,c,f,e=this.options.dateFormat||this.dateFormat,d;if(b)c=b(a);else if("string"===typeof a){if(e)(b=this.dateFormats[e])||(b=this.dateFormats["YYYY/mm/dd"]),(d=a.match(b.regex))&&(c=b.parser(d));else for(f in this.dateFormats)if(b=this.dateFormats[f],d=a.match(b.regex)){this.dateFormat=f;this.alternativeFormat=b.alternative;c=b.parser(d);break}d||(d=Date.parse(a),"object"===typeof d&&null!==
d&&d.getTime?c=d.getTime()-6E4*d.getTimezoneOffset():E(d)&&(c=d-6E4*(new Date(d)).getTimezoneOffset()))}return c},rowsToColumns:function(a){var b,c,f,e,d;if(a)for(d=[],c=a.length,b=0;b<c;b++)for(e=a[b].length,f=0;f<e;f++)d[f]||(d[f]=[]),d[f][b]=a[b][f];return d},parsed:function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},getFreeIndexes:function(a,b){var c,f=[],e=[],d;for(c=0;c<a;c+=1)f.push(!0);for(a=0;a<b.length;a+=1)for(d=b[a].getReferencedColumnIndexes(),c=0;c<
d.length;c+=1)f[d[c]]=!1;for(c=0;c<f.length;c+=1)f[c]&&e.push(c);return e},complete:function(){var a=this.columns,b,c=this.options,f,e,d,k,h=[],g;if(c.complete||c.afterComplete){if(this.firstRowAsNames)for(d=0;d<a.length;d++)a[d].name=a[d].shift();f=[];e=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(d=0;d<this.valueCount.seriesBuilders.length;d++)g=this.valueCount.seriesBuilders[d],g.populateColumns(e)&&h.push(g);for(;0<e.length;){g=new x;g.addColumnReader(0,"x");d=D(0,e);-1!==
d&&e.splice(d,1);for(d=0;d<this.valueCount.global;d++)g.addColumnReader(void 0,this.valueCount.globalPointArrayMap[d]);g.populateColumns(e)&&h.push(g)}0<h.length&&0<h[0].readers.length&&(g=a[h[0].readers[0].columnIndex],void 0!==g&&(g.isDatetime?b="datetime":g.isNumeric||(b="category")));if("category"===b)for(d=0;d<h.length;d++)for(g=h[d],e=0;e<g.readers.length;e++)"x"===g.readers[e].configName&&(g.readers[e].configName="name");for(d=0;d<h.length;d++){g=h[d];e=[];for(k=0;k<a[0].length;k++)e[k]=g.read(a,
k);f[d]={data:e};g.name&&(f[d].name=g.name);"category"===b&&(f[d].turboThreshold=0)}a={series:f};b&&(a.xAxis={type:b},"category"===b&&(a.xAxis.uniqueNames=!1));c.complete&&c.complete(a);c.afterComplete&&c.afterComplete(a)}},update:function(a,b){var c=this.chart;a&&(a.afterComplete=function(a){a.xAxis&&c.xAxis[0]&&a.xAxis.type===c.xAxis[0].options.type&&delete a.xAxis;c.update(a,b,!0)},B(!0,this.options,a),this.init(this.options))}});h.Data=C;h.data=function(a,b){return new C(a,b)};A(m,"init",function(a){var b=
this,c=a.args[0],f=a.args[1];c&&c.data&&!b.hasDataDef&&(b.hasDataDef=!0,b.data=new C(h.extend(c.data,{afterComplete:function(a){var d,e;if(c.hasOwnProperty("series"))if("object"===typeof c.series)for(d=Math.max(c.series.length,a&&a.series?a.series.length:0);d--;)e=c.series[d]||{},c.series[d]=B(e,a&&a.series?a.series[d]:{});else delete c.series;c=B(a,c);b.init(c,f)}}),c,b),a.preventDefault())});x=function(){this.readers=[];this.pointIsArray=!0};x.prototype.populateColumns=function(a){var b=!0;v(this.readers,
function(b){void 0===b.columnIndex&&(b.columnIndex=a.shift())});v(this.readers,function(a){void 0===a.columnIndex&&(b=!1)});return b};x.prototype.read=function(a,b){var c=this.pointIsArray,f=c?[]:{},e;v(this.readers,function(d){var e=a[d.columnIndex][b];c?f.push(e):0<d.configName.indexOf(".")?h.Point.prototype.setNestedProperty(f,e,d.configName):f[d.configName]=e});void 0===this.name&&2<=this.readers.length&&(e=this.getReferencedColumnIndexes(),2<=e.length&&(e.shift(),e.sort(),this.name=a[e.shift()].name));
return f};x.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&void 0!==b&&(this.pointIsArray=!1)};x.prototype.getReferencedColumnIndexes=function(){var a,b=[],c;for(a=0;a<this.readers.length;a+=1)c=this.readers[a],void 0!==c.columnIndex&&b.push(c.columnIndex);return b};x.prototype.hasReader=function(a){var b,c;for(b=0;b<this.readers.length;b+=1)if(c=this.readers[b],c.configName===a)return!0}})(y)});


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)
 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function(p){"object"===typeof module&&module.exports?module.exports=p:p(Highcharts)})(function(p){(function(d){var p=d.animObject,x=d.noop,y=d.color,z=d.defaultOptions,k=d.each,q=d.extend,F=d.format,A=d.objectEach,t=d.pick,m=d.Chart,n=d.seriesTypes,B=n.pie,n=n.column,C=d.Tick,u=d.fireEvent,D=d.inArray,E=1;q(z.lang,{drillUpText:"\u25c1 Back to {series.name}"});z.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",
color:"#003399",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};d.SVGRenderer.prototype.Element.prototype.fadeIn=function(a){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:t(this.newOpacity,1)},a||{duration:250})};m.prototype.addSeriesAsDrilldown=function(a,b){this.addSingleSeriesAsDrilldown(a,b);this.applyDrilldown()};m.prototype.addSingleSeriesAsDrilldown=function(a,b){var c=a.series,e=c.xAxis,f=c.yAxis,g,
h=[],v=[],l,r,m;m={color:a.color||c.color};this.drilldownLevels||(this.drilldownLevels=[]);l=c.options._levelNumber||0;(r=this.drilldownLevels[this.drilldownLevels.length-1])&&r.levelNumber!==l&&(r=void 0);b=q(q({_ddSeriesId:E++},m),b);g=D(a,c.points);k(c.chart.series,function(a){a.xAxis!==e||a.isDrilling||(a.options._ddSeriesId=a.options._ddSeriesId||E++,a.options._colorIndex=a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||l,r?(h=r.levelSeries,v=r.levelSeriesOptions):(h.push(a),
v.push(a.options)))});a=q({levelNumber:l,seriesOptions:c.options,levelSeriesOptions:v,levelSeries:h,shapeArgs:a.shapeArgs,bBox:a.graphic?a.graphic.getBBox():{},color:a.isNull?(new d.Color(y)).setOpacity(0).get():y,lowerSeriesOptions:b,pointOptions:c.options.data[g],pointIndex:g,oldExtremes:{xMin:e&&e.userMin,xMax:e&&e.userMax,yMin:f&&f.userMin,yMax:f&&f.userMax},resetZoomButton:this.resetZoomButton},m);this.drilldownLevels.push(a);e&&e.names&&(e.names.length=0);b=a.lowerSeries=this.addSeries(b,!1);
b.options._levelNumber=l+1;e&&(e.oldPos=e.pos,e.userMin=e.userMax=null,f.userMin=f.userMax=null);c.type===b.type&&(b.animate=b.animateDrilldown||x,b.options.animation=!0)};m.prototype.applyDrilldown=function(){var a=this.drilldownLevels,b;a&&0<a.length&&(b=a[a.length-1].levelNumber,k(this.drilldownLevels,function(a){a.levelNumber===b&&k(a.levelSeries,function(a){a.options&&a.options._levelNumber===b&&a.remove(!1)})}));this.resetZoomButton&&(this.resetZoomButton.hide(),delete this.resetZoomButton);
this.pointer.reset();this.redraw();this.showDrillUpButton()};m.prototype.getDrilldownBackText=function(){var a=this.drilldownLevels;if(a&&0<a.length)return a=a[a.length-1],a.series=a.seriesOptions,F(this.options.lang.drillUpText,a)};m.prototype.showDrillUpButton=function(){var a=this,b=this.getDrilldownBackText(),c=a.options.drilldown.drillUpButton,e,f;this.drillUpButton?this.drillUpButton.attr({text:b}).align():(f=(e=c.theme)&&e.states,this.drillUpButton=this.renderer.button(b,null,null,function(){a.drillUp()},
e,f&&f.hover,f&&f.select).addClass("highcharts-drillup-button").attr({align:c.position.align,zIndex:7}).add().align(c.position,!1,c.relativeTo||"plotBox"))};m.prototype.drillUp=function(){if(this.drilldownLevels&&0!==this.drilldownLevels.length){for(var a=this,b=a.drilldownLevels,c=b[b.length-1].levelNumber,e=b.length,f=a.series,g,h,d,l,m=function(b){var c;k(f,function(a){a.options._ddSeriesId===b._ddSeriesId&&(c=a)});c=c||a.addSeries(b,!1);c.type===d.type&&c.animateDrillupTo&&(c.animate=c.animateDrillupTo);
b===h.seriesOptions&&(l=c)};e--;)if(h=b[e],h.levelNumber===c){b.pop();d=h.lowerSeries;if(!d.chart)for(g=f.length;g--;)if(f[g].options.id===h.lowerSeriesOptions.id&&f[g].options._levelNumber===c+1){d=f[g];break}d.xData=[];k(h.levelSeriesOptions,m);u(a,"drillup",{seriesOptions:h.seriesOptions});l.type===d.type&&(l.drilldownLevel=h,l.options.animation=a.options.drilldown.animation,d.animateDrillupFrom&&d.chart&&d.animateDrillupFrom(h));l.options._levelNumber=c;d.remove(!1);l.xAxis&&(g=h.oldExtremes,
l.xAxis.setExtremes(g.xMin,g.xMax,!1),l.yAxis.setExtremes(g.yMin,g.yMax,!1));h.resetZoomButton&&(a.resetZoomButton=h.resetZoomButton,a.resetZoomButton.show())}u(a,"drillupall");this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align();this.ddDupes.length=[]}};m.prototype.callbacks.push(function(){var a=this;a.drilldown={update:function(b,c){d.merge(!0,a.options.drilldown,b);t(c,!0)&&a.redraw()}}});
d.addEvent(m,"beforeShowResetZoom",function(){if(this.drillUpButton)return!1});d.addEvent(m,"render",function(){k(this.xAxis||[],function(a){a.ddPoints={};k(a.series,function(b){var c,e=b.xData||[],f=b.points,d;for(c=0;c<e.length;c++)d=b.options.data[c],"number"!==typeof d&&(d=b.pointClass.prototype.optionsToObject.call({series:b},d),d.drilldown&&(a.ddPoints[e[c]]||(a.ddPoints[e[c]]=[]),a.ddPoints[e[c]].push(f?f[c]:!0)))});A(a.ticks,C.prototype.drillable)})});n.prototype.animateDrillupTo=function(a){if(!a){var b=
this,c=b.drilldownLevel;k(this.points,function(a){var b=a.dataLabel;a.graphic&&a.graphic.hide();b&&(b.hidden="hidden"===b.attr("visibility"),b.hidden||(b.hide(),a.connector&&a.connector.hide()))});d.syncTimeout(function(){b.points&&k(b.points,function(a,b){b=b===(c&&c.pointIndex)?"show":"fadeIn";var e="show"===b?!0:void 0,d=a.dataLabel;if(a.graphic)a.graphic[b](e);d&&!d.hidden&&(d.fadeIn(),a.connector&&a.connector.fadeIn())})},Math.max(this.chart.options.drilldown.animation.duration-50,0));this.animate=
x}};n.prototype.animateDrilldown=function(a){var b=this,c=this.chart.drilldownLevels,e,d=p(this.chart.options.drilldown.animation),g=this.xAxis;a||(k(c,function(a){b.options._ddSeriesId===a.lowerSeriesOptions._ddSeriesId&&(e=a.shapeArgs,e.fill=a.color)}),e.x+=t(g.oldPos,g.pos)-g.pos,k(this.points,function(a){a.shapeArgs.fill=a.color;a.graphic&&a.graphic.attr(e).animate(q(a.shapeArgs,{fill:a.color||b.color}),d);a.dataLabel&&a.dataLabel.fadeIn(d)}),this.animate=null)};n.prototype.animateDrillupFrom=
function(a){var b=p(this.chart.options.drilldown.animation),c=this.group,e=c!==this.chart.columnGroup,f=this;k(f.trackerGroups,function(a){if(f[a])f[a].on("mouseover")});e&&delete this.group;k(this.points,function(f){var h=f.graphic,g=a.shapeArgs,l=function(){h.destroy();c&&e&&(c=c.destroy())};h&&(delete f.graphic,g.fill=a.color,b.duration?h.animate(g,d.merge(b,{complete:l})):(h.attr(g),l()))})};B&&q(B.prototype,{animateDrillupTo:n.prototype.animateDrillupTo,animateDrillupFrom:n.prototype.animateDrillupFrom,
animateDrilldown:function(a){var b=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],c=this.chart.options.drilldown.animation,e=b.shapeArgs,f=e.start,g=(e.end-f)/this.points.length;a||(k(this.points,function(a,k){var h=a.shapeArgs;e.fill=b.color;h.fill=a.color;if(a.graphic)a.graphic.attr(d.merge(e,{start:f+k*g,end:f+(k+1)*g}))[c?"animate":"attr"](h,c)}),this.animate=null)}});d.Point.prototype.doDrilldown=function(a,b,c){var d=this.series.chart,f=d.options.drilldown,g=(f.series||[]).length,
h;d.ddDupes||(d.ddDupes=[]);for(;g--&&!h;)f.series[g].id===this.drilldown&&-1===D(this.drilldown,d.ddDupes)&&(h=f.series[g],d.ddDupes.push(this.drilldown));u(d,"drilldown",{point:this,seriesOptions:h,category:b,originalEvent:c,points:void 0!==b&&this.series.xAxis.getDDPoints(b).slice(0)},function(b){var c=b.point.series&&b.point.series.chart,d=b.seriesOptions;c&&d&&(a?c.addSingleSeriesAsDrilldown(b.point,d):c.addSeriesAsDrilldown(b.point,d))})};d.Axis.prototype.drilldownCategory=function(a,b){A(this.getDDPoints(a),
function(c){c&&c.series&&c.series.visible&&c.doDrilldown&&c.doDrilldown(!0,a,b)});this.chart.applyDrilldown()};d.Axis.prototype.getDDPoints=function(a){return this.ddPoints&&this.ddPoints[a]};C.prototype.drillable=function(){var a=this.pos,b=this.label,c=this.axis,e="xAxis"===c.coll&&c.getDDPoints,f=e&&c.getDDPoints(a);e&&(b&&f&&f.length?(b.drillable=!0,b.basicStyles||(b.basicStyles=d.merge(b.styles)),b.addClass("highcharts-drilldown-axis-label").css(c.chart.options.drilldown.activeAxisLabelStyle).on("click",
function(b){c.drilldownCategory(a,b)})):b&&b.drillable&&(b.styles={},b.css(b.basicStyles),b.on("click",null),b.removeClass("highcharts-drilldown-axis-label")))};d.addEvent(d.Point,"afterInit",function(){var a=this,b=a.series;a.drilldown&&d.addEvent(a,"click",function(c){b.xAxis&&!1===b.chart.options.drilldown.allowPointDrilldown?b.xAxis.drilldownCategory(a.x,c):a.doDrilldown(void 0,void 0,c)});return a});d.addEvent(d.Series,"afterDrawDataLabels",function(){var a=this.chart.options.drilldown.activeDataLabelStyle,
b=this.chart.renderer;k(this.points,function(c){var d=c.options.dataLabels,f=t(c.dlOptions,d&&d.style,{});c.drilldown&&c.dataLabel&&("contrast"===a.color&&(f.color=b.getContrast(c.color||this.color)),d&&d.color&&(f.color=d.color),c.dataLabel.addClass("highcharts-drilldown-data-label"),c.dataLabel.css(a).css(f))},this)});var w=function(a,b,c){a[c?"addClass":"removeClass"]("highcharts-drilldown-point");a.css({cursor:b})};d.addEvent(d.Series,"afterDrawTracker",function(){k(this.points,function(a){a.drilldown&&
a.graphic&&w(a.graphic,"pointer",!0)})});d.addEvent(d.Point,"afterSetState",function(){this.drilldown&&this.series.halo&&"hover"===this.state?w(this.series.halo,"pointer",!0):this.series.halo&&w(this.series.halo,"auto",!1)})})(p)});


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(b){var u=b.addEvent,g=b.Axis,n=b.Chart,m=b.color,q,h=b.each,t=b.extend,r=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,p=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},t(q.prototype,g.prototype),t(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(g.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,l;this.coll="colorAxis";l=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});
g.prototype.init.call(this,a,l);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,l=0,k=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];h(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,k=c.length,a.color=c[l],a.colorIndex=l,l++,l===k&&(l=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),
2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return g.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];h(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){g.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},l,k;a?(this.left=f=a.attr("x"),this.top=l=a.attr("y"),
this.width=k=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-k,this.bottom=d.chartHeight-l-a,this.len=this.horiz?k:a,this.pos=this.horiz?f:l):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,l,k,b=this.dataClasses,e,c;if(b)for(c=b.length;c--;){if(e=b[c],l=e.from,f=e.to,(void 0===l||a>=l)&&(void 0===f||
a<=f)){k=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););l=f[c]||f[c+1];f=f[c+1]||l;a=1-(f[0]-a)/(f[0]-l[0]||1);k=l.color.tweenTo(f.color,a)}return k},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,g.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,
d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,k=this.horiz,c=p(b.symbolWidth,k?this.defaultLegendLength:12),e=p(b.symbolHeight,k?12:this.defaultLegendLength),h=p(b.labelPadding,k?16:30),b=p(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=
c+f+(k?b:h);this.legendItemHeight=e+f+(k?h:0)},setState:function(a){h(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,b=d&&d.plotY,c,e=this.pos,h=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<e?
c=e-2:c>e+h&&(c=e+h+2),d.plotX=c,d.plotY=this.len-c,g.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return r(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:g.prototype.getPlotLinePath.call(this,
a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;h(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(h(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);g.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);g.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=
this,d=this.chart,f=this.legendItems,e=d.options.legend,k=e.valueDecimals,q=e.valueSuffix||"",g;f.length||h(this.dataClasses,function(e,l){var m=!0,r=e.from,p=e.to;g="";void 0===r?g="\x3c ":void 0===p&&(g="\x3e ");void 0!==r&&(g+=b.numberFormat(r,k)+q);void 0!==r&&void 0!==p&&(g+=" - ");void 0!==p&&(g+=b.numberFormat(p,k)+q);f.push(t({chart:d,name:g,options:{},drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=!m;h(a.series,function(a){h(a.points,
function(a){a.dataClass===l&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),h(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),u(n,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),u(e,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&(c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():
d.push(c)),h(c.series,function(c){b.erase(a.allItems,c)}));for(;d.length;)a.allItems.unshift(d.pop())}),u(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),u(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(n);(function(b){var n=b.defined,g=b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},
setVisible:function(b){var h=this,q=b?"show":"hide";g(["graphic","dataLabel"],function(b){if(h[b])h[b][q]()})},setState:function(g){b.Point.prototype.setState.call(this,g);this.graphic&&this.graphic.attr({zIndex:"hover"===g?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,
translateColors:function(){var b=this,h=this.options.nullColor,m=this.colorAxis,r=this.colorKey;g(this.data,function(e){var c=e[r];if(c=e.options.color||(e.isNull?h:m&&void 0!==c?m.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};n(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(n);(function(b){var n=b.colorPointMixin,g=b.each,v=b.merge,m=b.noop,q=b.pick,h=b.Series,t=b.seriesType,r=b.seriesTypes;t("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",
dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;r.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);
this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,h=this.yAxis,m=b.pointPadding||0,p=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();g(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,g=p(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=p(Math.round(c.len-c.translate(a.x+d,0,1,0,1)),-c.len,2*c.len),k=p(Math.round(h.translate(a.y-e,0,1,0,1)),-h.len,2*h.len),e=p(Math.round(h.translate(a.y+e,0,1,0,1)),-h.len,
2*h.len),n=q(a.pointPadding,m);a.plotX=a.clientX=(g+d)/2;a.plotY=(k+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(g,d)+n,y:Math.min(k,e)+n,width:Math.abs(d-g)-2*n,height:Math.abs(e-k)-2*n}});this.translateColors()},drawPoints:function(){r.column.prototype.drawPoints.call(this);g(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:r.column.prototype.alignDataLabel,getExtremes:function(){h.prototype.getExtremes.call(this,
this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;h.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},n))})(n)});


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.1.0 (2018-04-13)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(r){"object"===typeof module&&module.exports?module.exports=r:r(Highcharts)})(function(r){(function(n){function r(c,b,a,k,d,e){c=(e-b)*(a-c)-(k-b)*(d-c);return 0<c?!0:0>c?!1:!0}function w(c,b,a,k,d,e,f,m){return r(c,b,d,e,f,m)!==r(a,k,d,e,f,m)&&r(c,b,a,k,d,e)!==r(c,b,a,k,f,m)}function A(c,b,a,k,d,e,f,m){return w(c,b,c+a,b,d,e,f,m)||w(c+a,b,c+a,b+k,d,e,f,m)||w(c,b+k,c+a,b+k,d,e,f,m)||w(c,b,c,b+k,d,e,f,m)}var D=n.addEvent,u=n.each,B=n.extend,y=n.isNumber,x=n.pick,z=n.Series,E=n.SVGRenderer,
C=n.Chart;n.setOptions({plotOptions:{series:{label:{enabled:!0,connectorAllowed:!1,connectorNeighbourDistance:24,minFontSize:null,maxFontSize:null,onArea:null,style:{fontWeight:"bold"},boxesToAvoid:[]}}}});E.prototype.symbols.connector=function(c,b,a,k,d){var e=d&&d.anchorX;d=d&&d.anchorY;var f,m,h=a/2;y(e)&&y(d)&&(f=["M",e,d],m=b-d,0>m&&(m=-k-m),m<a&&(h=e<c+a/2?m:a-m),d>b+k?f.push("L",c+h,b+k):d<b?f.push("L",c+h,b):e<c?f.push("L",c,b+k/2):e>c+a&&f.push("L",c+a,b+k/2));return f||[]};z.prototype.getPointsOnGraph=
function(){if(this.xAxis||this.yAxis){var c=this.points,b,a,k=[],d,e,f,m;e=this.graph||this.area;f=e.element;var h=this.chart.inverted,q=this.xAxis;b=this.yAxis;var v=h?b.pos:q.pos,h=h?q.pos:b.pos,q=x(this.options.label.onArea,!!this.area),p=b.getThreshold(this.options.threshold);if(this.getPointSpline&&f.getPointAtLength&&!q){e.toD&&(a=e.attr("d"),e.attr({d:e.toD}));m=f.getTotalLength();for(d=0;d<m;d+=16)b=f.getPointAtLength(d),k.push({chartX:v+b.x,chartY:h+b.y,plotX:b.x,plotY:b.y});a&&e.attr({d:a});
b=c[c.length-1];b.chartX=v+b.plotX;b.chartY=h+b.plotY;k.push(b)}else for(m=c.length,d=0;d<m;d+=1){b=c[d];a=c[d-1];b.chartX=v+b.plotX;b.chartY=h+b.plotY;q&&(b.chartCenterY=h+(b.plotY+x(b.yBottom,p))/2);if(0<d&&(e=Math.abs(b.chartX-a.chartX),f=Math.abs(b.chartY-a.chartY),e=Math.max(e,f),16<e))for(e=Math.ceil(e/16),f=1;f<e;f+=1)k.push({chartX:a.chartX+f/e*(b.chartX-a.chartX),chartY:a.chartY+f/e*(b.chartY-a.chartY),chartCenterY:a.chartCenterY+f/e*(b.chartCenterY-a.chartCenterY),plotX:a.plotX+f/e*(b.plotX-
a.plotX),plotY:a.plotY+f/e*(b.plotY-a.plotY)});y(b.plotY)&&k.push(b)}return k}};z.prototype.labelFontSize=function(c,b){return c+this.sum/this.chart.labelSeriesMaxSum*(b-c)+"px"};z.prototype.checkClearPoint=function(c,b,a,k){var d=Number.MAX_VALUE,e=Number.MAX_VALUE,f,m,h=this.options.label.connectorAllowed,q=x(this.options.label.onArea,!!this.area),v=this.chart,p,l,n,r,t,g;for(t=0;t<v.boxesToAvoid.length;t+=1)if(l=v.boxesToAvoid[t],g=c+a.width,p=b,n=b+a.height,!(c>l.right||g<l.left||p>l.bottom||
n<l.top))return!1;for(t=0;t<v.series.length;t+=1)if(p=v.series[t],l=p.interpolatedPoints,p.visible&&l){for(g=1;g<l.length;g+=1){if(l[g].chartX>=c-16&&l[g-1].chartX<=c+a.width+16){if(A(c,b,a.width,a.height,l[g-1].chartX,l[g-1].chartY,l[g].chartX,l[g].chartY))return!1;this===p&&!f&&k&&(f=A(c-16,b-16,a.width+32,a.height+32,l[g-1].chartX,l[g-1].chartY,l[g].chartX,l[g].chartY))}!h&&!f||this===p&&!q||(n=c+a.width/2-l[g].chartX,r=b+a.height/2-l[g].chartY,d=Math.min(d,n*n+r*r))}if(!q&&h&&this===p&&(k&&!f||
d<Math.pow(this.options.label.connectorNeighbourDistance,2))){for(g=1;g<l.length;g+=1)f=Math.min(Math.pow(c+a.width/2-l[g].chartX,2)+Math.pow(b+a.height/2-l[g].chartY,2),Math.pow(c-l[g].chartX,2)+Math.pow(b-l[g].chartY,2),Math.pow(c+a.width-l[g].chartX,2)+Math.pow(b-l[g].chartY,2),Math.pow(c+a.width-l[g].chartX,2)+Math.pow(b+a.height-l[g].chartY,2),Math.pow(c-l[g].chartX,2)+Math.pow(b+a.height-l[g].chartY,2)),f<e&&(e=f,m=l[g]);f=!0}}return!k||f?{x:c,y:b,weight:d-(m?e:0),connectorPoint:m}:!1};C.prototype.drawSeriesLabels=
function(){var c=this,b=this.labelSeries;c.boxesToAvoid=[];u(b,function(a){a.interpolatedPoints=a.getPointsOnGraph();u(a.options.label.boxesToAvoid||[],function(a){c.boxesToAvoid.push(a)})});u(c.series,function(a){function b(a,b,c){return a>l&&a<=l+w-c.width&&b>=r&&b<=r+t-c.height}if(a.xAxis||a.yAxis){var d,e,f,m=[],h,q,n=a.options.label,p=c.inverted,l=p?a.yAxis.pos:a.xAxis.pos,r=p?a.xAxis.pos:a.yAxis.pos,w=c.inverted?a.yAxis.len:a.xAxis.len,t=c.inverted?a.xAxis.len:a.yAxis.len,g=a.interpolatedPoints,
u=x(n.onArea,!!a.area),p=a.labelBySeries;d=n.minFontSize;e=n.maxFontSize;if(a.visible&&!a.isSeriesBoosting&&g){p||(a.labelBySeries=p=c.renderer.label(a.name,0,-9999,"connector").css(B({color:u?c.renderer.getContrast(a.color):a.color},a.options.label.style)),d&&e&&p.css({fontSize:a.labelFontSize(d,e)}),p.attr({padding:0,opacity:c.renderer.forExport?1:0,stroke:a.color,"stroke-width":1,zIndex:3}).add().animate({opacity:1},{duration:200}));d=p.getBBox();d.width=Math.round(d.width);for(q=g.length-1;0<
q;--q)u?(e=g[q].chartX-d.width/2,f=g[q].chartCenterY-d.height/2):(e=g[q].chartX+3,f=g[q].chartY-d.height-3,b(e,f,d)&&(h=a.checkClearPoint(e,f,d)),h&&m.push(h),e=g[q].chartX+3,f=g[q].chartY+3,b(e,f,d)&&(h=a.checkClearPoint(e,f,d)),h&&m.push(h),e=g[q].chartX-d.width-3,f=g[q].chartY+3,b(e,f,d)&&(h=a.checkClearPoint(e,f,d)),h&&m.push(h),e=g[q].chartX-d.width-3,f=g[q].chartY-d.height-3),b(e,f,d)&&(h=a.checkClearPoint(e,f,d)),h&&m.push(h);if(n.connectorAllowed&&!m.length&&!u)for(e=l+w-d.width;e>=l;e-=16)for(f=
r;f<r+t-d.height;f+=16)(h=a.checkClearPoint(e,f,d,!0))&&m.push(h);if(m.length){if(m.sort(function(a,b){return b.weight-a.weight}),h=m[0],c.boxesToAvoid.push({left:h.x,right:h.x+d.width,top:h.y,bottom:h.y+d.height}),m=Math.sqrt(Math.pow(Math.abs(h.x-p.x),2),Math.pow(Math.abs(h.y-p.y),2)))n={opacity:c.renderer.forExport?1:0,x:h.x,y:h.y},g={opacity:1},10>=m&&(g={x:n.x,y:n.y},n={}),a.labelBySeries.attr(B(n,{anchorX:h.connectorPoint&&h.connectorPoint.plotX+l,anchorY:h.connectorPoint&&h.connectorPoint.plotY+
r})).animate(g),a.options.kdNow=!0,a.buildKDTree(),a=a.searchPoint({chartX:h.x,chartY:h.y},!0),p.closest=[a,h.x-a.plotX,h.y-a.plotY]}else p&&(a.labelBySeries=p.destroy())}}})};D(C,"render",function(){var c=this,b=Math.max(n.animObject(c.renderer.globalAnimation).duration,250),a=!c.hasRendered;c.labelSeries=[];c.labelSeriesMaxSum=0;n.clearTimeout(c.seriesLabelTimer);u(c.series,function(k){var d=k.options.label,e=k.labelBySeries,f=e&&e.closest;d.enabled&&k.visible&&(k.graph||k.area)&&!k.isSeriesBoosting&&
(c.labelSeries.push(k),d.minFontSize&&d.maxFontSize&&(k.sum=n.reduce(k.yData,function(a,b){return(a||0)+(b||0)},0),c.labelSeriesMaxSum=Math.max(c.labelSeriesMaxSum,k.sum)),a&&(b=Math.max(b,n.animObject(k.options.animation).duration)),f&&(void 0!==f[0].plotX?e.animate({x:f[0].plotX+f[1],y:f[0].plotY+f[2]}):e.attr({opacity:0})))});c.seriesLabelTimer=n.syncTimeout(function(){c.series&&c.labelSeries&&c.drawSeriesLabels()},c.renderer.forExport?0:b)})})(r)});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(4)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(39);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Dynamic Chart")]), _vm._v(" "), _c('vue-highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "nav"
  }, _vm._l((_vm.list), function(component) {
    return _c('router-link', {
      key: component.name,
      attrs: {
        "active-class": "active",
        "to": component.to
      }
    }, [_vm._v("\n        " + _vm._s(component.name) + "\n      ")])
  })), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("pie-basic")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "pieChart",
    attrs: {
      "options": _vm.pieOptions
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("3D Column Chart")]), _vm._v(" "), _c('vue-highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Combinations Chart")]), _vm._v(" "), _c('vue-highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("ScatterPlot Chart")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "chart",
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_vm._m(0), _vm._v(" "), _c('vue-highcharts', {
    ref: "lineCharts",
    attrs: {
      "options": _vm.options
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.load
    }
  }, [_vm._v("load")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.update
    }
  }, [_vm._v("update xAxis Categories")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.remove
    }
  }, [_vm._v("remove Series")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.add
    }
  }, [_vm._v("add Series")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_vm._v("Line Basic\n        "), _c('p', [_vm._v("Load data with async")])])
}]}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("3D Column Chart")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "chart",
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Area Basic")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "areaCharts",
    attrs: {
      "options": _vm.areaOptions
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Large Heat Map")]), _vm._v(" "), _c('vue-highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Bar Chart")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "barChart",
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classname,
    style: (_vm.styles)
  })
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Load Modules(Drilldown)")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "drilldownChart",
    attrs: {
      "highcharts": _vm.Highcharts,
      "options": _vm.drilldownOptions
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "charts"
  }, [_c('h3', [_vm._v("Bubble Chart")]), _vm._v(" "), _c('vue-highcharts', {
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h3', [_vm._v("Responsive Chart")]), _vm._v(" "), _c('vue-highcharts', {
    ref: "barChart",
    attrs: {
      "options": _vm.options
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(70)("3205c31e", content, true);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(71)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);