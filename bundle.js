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
 Highcharts JS v6.0.6 (2018-02-05)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,L){"object"===typeof module&&module.exports?module.exports=S.document?L(S):L:S.Highcharts=L(S)})("undefined"!==typeof window?window:this,function(S){var L=function(){var a="undefined"===typeof S?window:S,B=a.document,H=a.navigator&&a.navigator.userAgent||"",G=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,n=/(edge|msie|trident)/i.test(H)&&!a.opera,l=-1!==H.indexOf("Firefox"),f=-1!==H.indexOf("Chrome"),t=l&&4>parseInt(H.split("Firefox/")[1],
10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.0.6",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:t,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:n,isWebKit:-1!==H.indexOf("AppleWebKit"),isFirefox:l,isChrome:f,isSafari:!f&&-1!==H.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(H),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
charts:[]}}();(function(a){a.timers=[];var B=a.charts,H=a.doc,G=a.win;a.error=function(n,l){n=a.isNumber(n)?"Highcharts error #"+n+": www.highcharts.com/errors/"+n:n;if(l)throw Error(n);G.console&&console.log(n)};a.Fx=function(a,l,f){this.options=l;this.elem=a;this.prop=f};a.Fx.prototype={dSetter:function(){var a=this.paths[0],l=this.paths[1],f=[],t=this.now,q=a.length,v;if(1===t)f=this.toD;else if(q===l.length&&1>t)for(;q--;)v=parseFloat(a[q]),f[q]=isNaN(v)?l[q]:t*parseFloat(l[q]-v)+v;else f=l;this.elem.attr("d",
f,null,!0)},update:function(){var a=this.elem,l=this.prop,f=this.now,t=this.options.step;if(this[l+"Setter"])this[l+"Setter"]();else a.attr?a.element&&a.attr(l,f,null,!0):a.style[l]=f+this.unit;t&&t.call(a,f,this)},run:function(n,l,f){var t=this,q=t.options,v=function(a){return v.stopped?!1:t.step(a)},u=G.requestAnimationFrame||function(a){setTimeout(a,13)},b=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&u(b)};n===l?(delete q.curAnim[this.prop],
q.complete&&0===a.keys(q.curAnim).length&&q.complete.call(this.elem)):(this.startTime=+new Date,this.start=n,this.end=l,this.unit=f,this.now=this.start,this.pos=0,v.elem=this.elem,v.prop=this.prop,v()&&1===a.timers.push(v)&&u(b))},step:function(n){var l=+new Date,f,t=this.options,q=this.elem,v=t.complete,u=t.duration,b=t.curAnim;q.attr&&!q.element?n=!1:n||l>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),f=b[this.prop]=!0,a.objectEach(b,function(a){!0!==a&&(f=!1)}),f&&v&&v.call(q),n=
!1):(this.pos=t.easing((l-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,l,f){function t(a){var b,c;for(g=a.length;g--;)b="M"===a[g]||"L"===a[g],c=/[a-zA-Z]/.test(a[g+3]),b&&c&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])}function q(a,b){for(;a.length<c;){a[0]=b[c-a.length];var d=a.slice(0,e);[].splice.apply(a,[0,0].concat(d));r&&(d=a.slice(a.length-e),[].splice.apply(a,[a.length,0].concat(d)),g--)}a[0]="M"}function v(a,b){for(var g=
(c-a.length)/e;0<g&&g--;)m=a.slice().splice(a.length/z-e,e*z),m[0]=b[c-e-g*e],k&&(m[e-6]=m[e-2],m[e-5]=m[e-1]),[].splice.apply(a,[a.length/z,0].concat(m)),r&&g--}l=l||"";var u,b=n.startX,d=n.endX,k=-1<l.indexOf("C"),e=k?7:3,c,m,g;l=l.split(" ");f=f.slice();var r=n.isArea,z=r?2:1,K;k&&(t(l),t(f));if(b&&d){for(g=0;g<b.length;g++)if(b[g]===d[0]){u=g;break}else if(b[0]===d[d.length-b.length+g]){u=g;K=!0;break}void 0===u&&(l=[])}l.length&&a.isNumber(u)&&(c=f.length+u*z*e,K?(q(l,f),v(f,l)):(q(f,l),v(l,
f)));return[l,f]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.merge=function(){var n,l=arguments,f,t={},q=function(f,n){"object"!==typeof f&&(f={});a.objectEach(n,function(b,d){!a.isObject(b,!0)||a.isClass(b)||a.isDOMElement(b)?f[d]=n[d]:f[d]=q(f[d]||{},b)});return f};!0===l[0]&&(t=l[1],l=Array.prototype.slice.call(l,2));f=l.length;for(n=0;n<f;n++)t=q(t,l[n]);return t};a.pInt=function(a,
l){return parseInt(a,l||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,l){return!!n&&"object"===typeof n&&(!l||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var l=n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!l||!l.name||"Object"===l.name)};a.isNumber=function(a){return"number"===
typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,l){for(var f=a.length;f--;)if(a[f]===l){a.splice(f,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,l,f){var t;a.isString(l)?a.defined(f)?n.setAttribute(l,f):n&&n.getAttribute&&(t=n.getAttribute(l)):a.defined(l)&&a.isObject(l)&&a.objectEach(l,function(a,f){n.setAttribute(f,a)});return t};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,l,f){if(l)return setTimeout(a,l,f);a.call(0,
f)};a.extend=function(a,l){var f;a||(a={});for(f in l)a[f]=l[f];return a};a.pick=function(){var a=arguments,l,f,t=a.length;for(l=0;l<t;l++)if(f=a[l],void 0!==f&&null!==f)return f};a.css=function(n,l){a.isMS&&!a.svg&&l&&void 0!==l.opacity&&(l.filter="alpha(opacity\x3d"+100*l.opacity+")");a.extend(n.style,l)};a.createElement=function(n,l,f,t,q){n=H.createElement(n);var v=a.css;l&&a.extend(n,l);q&&v(n,{padding:0,border:"none",margin:0});f&&v(n,f);t&&t.appendChild(n);return n};a.extendClass=function(n,
l){var f=function(){};f.prototype=new n;a.extend(f.prototype,l);return f};a.pad=function(a,l,f){return Array((l||2)+1-String(a).length).join(f||0)+a};a.relativeLength=function(a,l,f){return/%$/.test(a)?l*parseFloat(a)/100+(f||0):parseFloat(a)};a.wrap=function(a,l,f){var t=a[l];a[l]=function(){var a=Array.prototype.slice.call(arguments),v=arguments,u=this;u.proceed=function(){t.apply(u,arguments.length?arguments:v)};a.unshift(t);a=f.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(n,
l,f){var t=/\.([0-9])/,q=a.defaultOptions.lang;/f$/.test(n)?(f=(f=n.match(t))?f[1]:-1,null!==l&&(l=a.numberFormat(l,f,q.decimalPoint,-1<n.indexOf(",")?q.thousandsSep:""))):l=(f||a.time).dateFormat(n,l);return l};a.format=function(n,l,f){for(var t="{",q=!1,v,u,b,d,k=[],e;n;){t=n.indexOf(t);if(-1===t)break;v=n.slice(0,t);if(q){v=v.split(":");u=v.shift().split(".");d=u.length;e=l;for(b=0;b<d;b++)e&&(e=e[u[b]]);v.length&&(e=a.formatSingle(v.join(":"),e,f));k.push(e)}else k.push(v);n=n.slice(t+1);t=(q=
!q)?"}":"{"}k.push(n);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,l,f,t,q){var v,u=n;f=a.pick(f,1);v=n/f;l||(l=q?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===f?l=a.grep(l,function(a){return 0===a%1}):.1>=f&&(l=[1/f])));for(t=0;t<l.length&&!(u=l[t],q&&u*f>=n||!q&&v<=(l[t]+(l[t+1]||l[t]))/2);t++);return u=a.correctFloat(u*f,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,l){var f=
a.length,t,q;for(q=0;q<f;q++)a[q].safeI=q;a.sort(function(a,f){t=l(a,f);return 0===t?a.safeI-f.safeI:t});for(q=0;q<f;q++)delete a[q].safeI};a.arrayMin=function(a){for(var l=a.length,f=a[0];l--;)a[l]<f&&(f=a[l]);return f};a.arrayMax=function(a){for(var l=a.length,f=a[0];l--;)a[l]>f&&(f=a[l]);return f};a.destroyObjectProperties=function(n,l){a.objectEach(n,function(a,t){a&&a!==l&&a.destroy&&a.destroy();delete n[t]})};a.discardElement=function(n){var l=a.garbageBin;l||(l=a.createElement("div"));n&&l.appendChild(n);
l.innerHTML=""};a.correctFloat=function(a,l){return parseFloat(a.toPrecision(l||14))};a.setAnimation=function(n,l){l.renderer.globalAnimation=a.pick(n,l.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,l,f,t){n=+n||0;l=+l;var q=a.defaultOptions.lang,v=(n.toString().split(".")[1]||"").split("e")[0].length,u,
b,d=n.toString().split("e");-1===l?l=Math.min(v,20):a.isNumber(l)?l&&d[1]&&0>d[1]&&(u=l+ +d[1],0<=u?(d[0]=(+d[0]).toExponential(u).split("e")[0],l=u):(d[0]=d[0].split(".")[0]||0,n=20>l?(d[0]*Math.pow(10,d[1])).toFixed(l):0,d[1]=0)):l=2;b=(Math.abs(d[1]?d[0]:n)+Math.pow(10,-Math.max(l,v)-1)).toFixed(l);v=String(a.pInt(b));u=3<v.length?v.length%3:0;f=a.pick(f,q.decimalPoint);t=a.pick(t,q.thousandsSep);n=(0>n?"-":"")+(u?v.substr(0,u)+t:"");n+=v.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);l&&(n+=f+b.slice(-l));
d[1]&&0!==+n&&(n+="e"+d[1]);return n};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,l,f){if("width"===l)return Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-a.getStyle(n,"padding-right");if("height"===l)return Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom");G.getComputedStyle||a.error(27,!0);if(n=G.getComputedStyle(n,void 0))n=n.getPropertyValue(l),a.pick(f,"opacity"!==l)&&(n=a.pInt(n));
return n};a.inArray=function(n,l){return(a.indexOfPolyfill||Array.prototype.indexOf).call(l,n)};a.grep=function(n,l){return(a.filterPolyfill||Array.prototype.filter).call(n,l)};a.find=Array.prototype.find?function(a,l){return a.find(l)}:function(a,l){var f,t=a.length;for(f=0;f<t;f++)if(l(a[f],f))return a[f]};a.map=function(a,l){for(var f=[],t=0,q=a.length;t<q;t++)f[t]=l.call(a[t],a[t],t,a);return f};a.keys=function(n){return(a.keysPolyfill||Object.keys).call(void 0,n)};a.reduce=function(n,l,f){return(a.reducePolyfill||
Array.prototype.reduce).call(n,l,f)};a.offset=function(a){var l=H.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||l.scrollTop)-(l.clientTop||0),left:a.left+(G.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}};a.stop=function(n,l){for(var f=a.timers.length;f--;)a.timers[f].elem!==n||l&&l!==a.timers[f].prop||(a.timers[f].stopped=!0)};a.each=function(n,l,f){return(a.forEachPolyfill||Array.prototype.forEach).call(n,l,f)};a.objectEach=function(a,
l,f){for(var t in a)a.hasOwnProperty(t)&&l.call(f,a[t],t,a)};a.addEvent=function(n,l,f){var t,q,v=n.addEventListener||a.addEventListenerPolyfill;n.hcEvents&&!Object.prototype.hasOwnProperty.call(n,"hcEvents")&&(q={},a.objectEach(n.hcEvents,function(a,b){q[b]=a.slice(0)}),n.hcEvents=q);t=n.hcEvents=n.hcEvents||{};v&&v.call(n,l,f,!1);t[l]||(t[l]=[]);t[l].push(f);return function(){a.removeEvent(n,l,f)}};a.removeEvent=function(n,l,f){function t(b,k){var e=n.removeEventListener||a.removeEventListenerPolyfill;
e&&e.call(n,b,k,!1)}function q(){var b,k;n.nodeName&&(l?(b={},b[l]=!0):b=u,a.objectEach(b,function(a,b){if(u[b])for(k=u[b].length;k--;)t(b,u[b][k])}))}var v,u=n.hcEvents,b;u&&(l?(v=u[l]||[],f?(b=a.inArray(f,v),-1<b&&(v.splice(b,1),u[l]=v),t(l,f)):(q(),u[l]=[])):(q(),n.hcEvents={}))};a.fireEvent=function(n,l,f,t){var q;q=n.hcEvents;var v,u;f=f||{};if(H.createEvent&&(n.dispatchEvent||n.fireEvent))q=H.createEvent("Events"),q.initEvent(l,!0,!0),a.extend(q,f),n.dispatchEvent?n.dispatchEvent(q):n.fireEvent(l,
q);else if(q)for(q=q[l]||[],v=q.length,f.target||a.extend(f,{preventDefault:function(){f.defaultPrevented=!0},target:n,type:l}),l=0;l<v;l++)(u=q[l])&&!1===u.call(n,f)&&f.preventDefault();t&&!f.defaultPrevented&&t(f)};a.animate=function(n,l,f){var t,q="",v,u,b;a.isObject(f)||(b=arguments,f={duration:b[2],easing:b[3],complete:b[4]});a.isNumber(f.duration)||(f.duration=400);f.easing="function"===typeof f.easing?f.easing:Math[f.easing]||Math.easeInOutSine;f.curAnim=a.merge(l);a.objectEach(l,function(b,
k){a.stop(n,k);u=new a.Fx(n,f,k);v=null;"d"===k?(u.paths=u.initPath(n,n.d,l.d),u.toD=l.d,t=0,v=1):n.attr?t=n.attr(k):(t=parseFloat(a.getStyle(n,k))||0,"opacity"!==k&&(q="px"));v||(v=b);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));u.run(t,v,q)})};a.seriesType=function(n,l,f,t,q){var v=a.getOptions(),u=a.seriesTypes;v.plotOptions[n]=a.merge(v.plotOptions[l],f);u[n]=a.extendClass(u[l]||function(){},t);u[n].prototype.type=n;q&&(u[n].prototype.pointClass=a.extendClass(a.Point,q));return u[n]};a.uniqueKey=
function(){var a=Math.random().toString(36).substring(2,9),l=0;return function(){return"highcharts-"+a+"-"+l++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):B[a.attr(this[0],"data-highcharts-chart")]})})(L);(function(a){var B=a.each,H=a.isNumber,G=a.map,n=a.merge,l=a.pInt;a.Color=function(f){if(!(this instanceof a.Color))return new a.Color(f);this.init(f)};a.Color.prototype=
{parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[l(a[1]),l(a[2]),l(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[l(a[1]),l(a[2]),l(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(f){var l,q,v,u;if((this.input=f=this.names[f&&f.toLowerCase?f.toLowerCase():""]||f)&&f.stops)this.stops=G(f.stops,
function(b){return new a.Color(b[1])});else if(f&&f.charAt&&"#"===f.charAt()&&(l=f.length,f=parseInt(f.substr(1),16),7===l?q=[(f&16711680)>>16,(f&65280)>>8,f&255,1]:4===l&&(q=[(f&3840)>>4|(f&3840)>>8,(f&240)>>4|f&240,(f&15)<<4|f&15,1])),!q)for(v=this.parsers.length;v--&&!q;)u=this.parsers[v],(l=u.regex.exec(f))&&(q=u.parse(l));this.rgba=q||[]},get:function(a){var f=this.input,q=this.rgba,l;this.stops?(l=n(f),l.stops=[].concat(l.stops),B(this.stops,function(q,b){l.stops[b]=[l.stops[b][0],q.get(a)]})):
l=q&&H(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?q[3]:"rgba("+q.join(",")+")":f;return l},brighten:function(a){var f,q=this.rgba;if(this.stops)B(this.stops,function(q){q.brighten(a)});else if(H(a)&&0!==a)for(f=0;3>f;f++)q[f]+=l(255*a),0>q[f]&&(q[f]=0),255<q[f]&&(q[f]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,l){var q=this.rgba,f=a.rgba;f.length&&q&&q.length?(a=1!==f[3]||1!==q[3],l=(a?"rgba(":"rgb(")+Math.round(f[0]+(q[0]-
f[0])*(1-l))+","+Math.round(f[1]+(q[1]-f[1])*(1-l))+","+Math.round(f[2]+(q[2]-f[2])*(1-l))+(a?","+(f[3]+(q[3]-f[3])*(1-l)):"")+")"):l=a.input||"none";return l}};a.color=function(f){return new a.Color(f)}})(L);(function(a){var B,H,G=a.addEvent,n=a.animate,l=a.attr,f=a.charts,t=a.color,q=a.css,v=a.createElement,u=a.defined,b=a.deg2rad,d=a.destroyObjectProperties,k=a.doc,e=a.each,c=a.extend,m=a.erase,g=a.grep,r=a.hasTouch,z=a.inArray,K=a.isArray,y=a.isFirefox,I=a.isMS,A=a.isObject,D=a.isString,x=a.isWebKit,
E=a.merge,C=a.noop,J=a.objectEach,F=a.pick,h=a.pInt,p=a.removeEvent,M=a.stop,O=a.svg,N=a.SVG_NS,P=a.symbolSizes,Q=a.win;B=a.SVGElement=function(){return this};c(B.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,h){this.element="span"===h?v(h):k.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(w,h,b){h=a.animObject(F(h,this.renderer.globalAnimation,
!0));0!==h.duration?(b&&(h.complete=b),n(this,w,h)):(this.attr(w,null,b),h.step&&h.step.call(this));return this},colorGradient:function(w,h,b){var p=this.renderer,c,g,m,d,r,N,R,x,k,C,z=[],O;w.radialGradient?g="radialGradient":w.linearGradient&&(g="linearGradient");g&&(m=w[g],r=p.gradients,R=w.stops,C=b.radialReference,K(m)&&(w[g]=m={x1:m[0],y1:m[1],x2:m[2],y2:m[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===g&&C&&!u(m.gradientUnits)&&(d=m,m=E(m,p.getRadialAttr(C,d),{gradientUnits:"userSpaceOnUse"})),
J(m,function(a,w){"id"!==w&&z.push(w,a)}),J(R,function(a){z.push(a)}),z=z.join(","),r[z]?C=r[z].attr("id"):(m.id=C=a.uniqueKey(),r[z]=N=p.createElement(g).attr(m).add(p.defs),N.radAttr=d,N.stops=[],e(R,function(w){0===w[1].indexOf("rgba")?(c=a.color(w[1]),x=c.get("rgb"),k=c.get("a")):(x=w[1],k=1);w=p.createElement("stop").attr({offset:w[0],"stop-color":x,"stop-opacity":k}).add(N);N.stops.push(w)})),O="url("+p.url+"#"+C+")",b.setAttribute(h,O),b.gradient=z,w.toString=function(){return O})},applyTextOutline:function(w){var h=
this.element,b,p,c,g,d;-1!==w.indexOf("contrast")&&(w=w.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));w=w.split(" ");p=w[w.length-1];if((c=w[0])&&"none"!==c&&a.svg){this.fakeTS=!0;w=[].slice.call(h.getElementsByTagName("tspan"));this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,w,h){return 2*w+h});for(d=w.length;d--;)b=w[d],"highcharts-text-outline"===b.getAttribute("class")&&m(w,h.removeChild(b));g=h.firstChild;e(w,function(a,w){0===w&&(a.setAttribute("x",h.getAttribute("x")),
w=h.getAttribute("y"),a.setAttribute("y",w||0),null===w&&h.setAttribute("y",0));a=a.cloneNode(1);l(a,{"class":"highcharts-text-outline",fill:p,stroke:p,"stroke-width":c,"stroke-linejoin":"round"});h.insertBefore(a,g)})}},attr:function(a,h,b,p){var w,c=this.element,e,g=this,m,d;"string"===typeof a&&void 0!==h&&(w=a,a={},a[w]=h);"string"===typeof a?g=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(J(a,function(w,h){m=!1;p||M(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&
(e||(this.symbolAttr(a),e=!0),m=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);m||(d=this[h+"Setter"]||this._defaultSetter,d.call(this,w,h,c),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&this.updateShadows(h,w,d))},this),this.afterSetters());b&&b.call(this);return g},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,b){for(var w=this.shadows,p=w.length;p--;)b.call(w[p],"height"===a?Math.max(h-
(w[p].cutHeight||0),0):"d"===a?this.d:h,a,w[p])},addClass:function(a,h){var w=this.attr("class")||"";-1===w.indexOf(a)&&(h||(a=(w+(w?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==z(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var w=this;e("x y r start end width height innerR anchorX anchorY".split(" "),function(h){w[h]=F(a[h],w[h])});w.attr({d:w.renderer.symbols[w.symbolName](w.x,
w.y,w.width,w.height,w)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var w;h=h||a.strokeWidth||0;w=Math.round(h)%2/2;a.x=Math.floor(a.x||this.x||0)+w;a.y=Math.floor(a.y||this.y||0)+w;a.width=Math.floor((a.width||this.width||0)-2*w);a.height=Math.floor((a.height||this.height||0)-2*w);u(a.strokeWidth)&&(a.strokeWidth=h);return a},css:function(a){var w=this.styles,b={},p=this.element,e,g="",m,d=!w,r=["textOutline","textOverflow",
"width"];a&&a.color&&(a.fill=a.color);w&&J(a,function(a,h){a!==w[h]&&(b[h]=a,d=!0)});d&&(w&&(a=c(w,b)),e=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===p.nodeName.toLowerCase()&&h(a.width),this.styles=a,e&&!O&&this.renderer.forExport&&delete a.width,p.namespaceURI===this.SVG_NS?(m=function(a,w){return"-"+w.toLowerCase()},J(a,function(a,w){-1===z(w,r)&&(g+=w.replace(/([A-Z])/g,m)+":"+a+";")}),g&&l(p,"style",g)):q(p,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),
a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var w=this,b=w.element;r&&"click"===a?(b.ontouchstart=function(a){w.touchEventFired=Date.now();a.preventDefault();h.call(b,a)},b.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(w.touchEventFired||0))&&h.call(b,a)}):b["on"+a]=h;return this},setRadialReference:function(a){var w=this.renderer.gradients[this.element.gradient];
this.element.radialReference=a;w&&w.radAttr&&w.animate(this.renderer.getRadialAttr(a,w.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,p=this.scaleY,c=this.inverted,e=this.rotation,g=this.matrix,m=this.element;c&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(g)&&a.push("matrix("+g.join(",")+
")");c?a.push("rotate(90) scale(-1,1)"):e&&a.push("rotate("+e+" "+F(this.rotationOriginX,m.getAttribute("x"),0)+" "+F(this.rotationOriginY,m.getAttribute("y")||0)+")");(u(b)||u(p))&&a.push("scale("+F(b,1)+" "+F(p,1)+")");a.length&&m.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var w,p,c,e,g={};p=this.renderer;c=p.alignedObjects;var d,r;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||D(b))this.alignTo=
w=b||"renderer",m(c,this),c.push(this),b=null}else a=this.alignOptions,h=this.alignByTranslate,w=this.alignTo;b=F(b,p[w],p);w=a.align;p=a.verticalAlign;c=(b.x||0)+(a.x||0);e=(b.y||0)+(a.y||0);"right"===w?d=1:"center"===w&&(d=2);d&&(c+=(b.width-(a.width||0))/d);g[h?"translateX":"x"]=Math.round(c);"bottom"===p?r=1:"middle"===p&&(r=2);r&&(e+=(b.height-(a.height||0))/r);g[h?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](g);this.placed=!0;this.alignAttr=g;return this},getBBox:function(a,
h){var w,p=this.renderer,g,m=this.element,d=this.styles,r,N=this.textStr,x,k=p.cache,C=p.cacheKeys,E;h=F(h,this.rotation);g=h*b;r=d&&d.fontSize;u(N)&&(E=N.toString(),-1===E.indexOf("\x3c")&&(E=E.replace(/[0-9]/g,"0")),E+=["",h||0,r,d&&d.width,d&&d.textOverflow].join());E&&!a&&(w=k[E]);if(!w){if(m.namespaceURI===this.SVG_NS||p.forExport){try{(x=this.fakeTS&&function(a){e(m.querySelectorAll(".highcharts-text-outline"),function(w){w.style.display=a})})&&x("none"),w=m.getBBox?c({},m.getBBox()):{width:m.offsetWidth,
height:m.offsetHeight},x&&x("")}catch(W){}if(!w||0>w.width)w={width:0,height:0}}else w=this.htmlGetBBox();p.isSVG&&(a=w.width,p=w.height,d&&"11px"===d.fontSize&&17===Math.round(p)&&(w.height=p=14),h&&(w.width=Math.abs(p*Math.sin(g))+Math.abs(a*Math.cos(g)),w.height=Math.abs(p*Math.cos(g))+Math.abs(a*Math.sin(g))));if(E&&0<w.height){for(;250<C.length;)delete k[C.shift()];k[E]||C.push(E);k[E]=w}}return w},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},
fadeOut:function(a){var w=this;w.animate({opacity:0},{duration:a||150,complete:function(){w.attr({y:-9999})}})},add:function(a){var w=this.renderer,h=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&w.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:w.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var w=a.parentNode;w&&w.removeChild(a)},destroy:function(){var a=
this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&a.parentGroup,p=h.ownerSVGElement,c=a.clipPath;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=null;M(a);c&&p&&(e(p.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var h=a.getAttribute("clip-path"),w=c.element.id;(-1<h.indexOf("(#"+w+")")||-1<h.indexOf('("#'+w+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=c.destroy());if(a.stops){for(p=0;p<a.stops.length;p++)a.stops[p]=a.stops[p].destroy();a.stops=null}a.safeRemoveChild(h);
for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&m(a.renderer.alignedObjects,a);J(a,function(h,w){delete a[w]});return null},shadow:function(a,h,b){var w=[],p,c,g=this.element,e,m,d,r;if(!a)this.destroyShadows();else if(!this.shadows){m=F(a.width,3);d=(a.opacity||.15)/m;r=this.parentInverted?"(-1,-1)":"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(p=1;p<=m;p++)c=g.cloneNode(0),e=2*m+1-2*p,l(c,{isShadow:"true",stroke:a.color||
"#000000","stroke-opacity":d*p,"stroke-width":e,transform:"translate"+r,fill:"none"}),b&&(l(c,"height",Math.max(l(c,"height")-e,0)),c.cutHeight=e),h?h.element.appendChild(c):g.parentNode&&g.parentNode.insertBefore(c,g),w.push(c);this.shadows=w}return this},destroyShadows:function(){e(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=
F(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var w,b=this["stroke-width"];"inherit"===b&&(b=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(w=a.length;w--;)a[w]=h(a[w])*b;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=k.createElementNS(this.SVG_NS,
"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(k.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.colorGradient(a,h,b)},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,
a);this[h]=a},zIndexSetter:function(a,b){var p=this.renderer,w=this.parentGroup,c=(w||p).element||p.box,g,e=this.element,m,d,p=c===p.box;g=this.added;var r;u(a)&&(e.zIndex=a,a=+a,this[b]===a&&(g=!1),this[b]=a);if(g){(a=this.zIndex)&&w&&(w.handleZ=!0);b=c.childNodes;for(r=b.length-1;0<=r&&!m;r--)if(w=b[r],g=w.zIndex,d=!u(g),w!==e)if(0>a&&d&&!p&&!r)c.insertBefore(e,b[r]),m=!0;else if(h(g)<=a||d&&(!u(a)||0<=a))c.insertBefore(e,b[r+1]||null),m=!0;m||(c.insertBefore(e,b[p?3:0]||null),m=!0)}return m},_defaultSetter:function(a,
h,b){b.setAttribute(h,a)}});B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.rotationOriginXSetter=B.prototype.rotationOriginYSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=B.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,
this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};H=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(H.prototype,{Element:B,SVG_NS:N,init:function(a,h,b,p,c,g){var w;p=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(p));w=p.element;a.appendChild(w);l(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&l(w,"xmlns",
this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=p;this.alignedObjects=[];this.url=(y||x)&&k.getElementsByTagName("base").length?Q.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.0.6"));this.defs=this.createElement("defs").add();this.allowHTML=g;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,
b,!1);var e;y&&a.getBoundingClientRect&&(h=function(){q(a,{left:0,top:0});e=a.getBoundingClientRect();q(a,{left:Math.ceil(e.left)-e.left+"px",top:Math.ceil(e.top)-e.top+"px"})},h(),this.unSubPixelFix=G(Q,"resize",h))},getStyle:function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:C,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,h,b,p){var c=a.rotation,w=b,g,e=0,m=
b.length,d=function(a){h.removeChild(h.firstChild);a&&h.appendChild(k.createTextNode(a))},r;a.rotation=0;w=this.getSpanWidth(a,h);if(r=w>p){for(;e<=m;)g=Math.ceil((e+m)/2),w=b.substring(0,g)+"\u2026",d(w),w=this.getSpanWidth(a,h),e===m?e=m+1:w>p?m=g-1:e=g;0===m&&d("")}a.rotation=c;return r},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var b=a.element,p=this,c=p.forExport,w=F(a.textStr,"").toString(),m=-1!==w.indexOf("\x3c"),d=b.childNodes,
r,x,C,E,y=l(b,"x"),M=a.styles,f=a.textWidth,P=M&&M.lineHeight,A=M&&M.textOutline,u=M&&"ellipsis"===M.textOverflow,D=M&&"nowrap"===M.whiteSpace,v=M&&M.fontSize,I,t,K=d.length,M=f&&!a.added&&this.box,Q=function(a){var c;c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:v||p.style.fontSize||12;return P?h(P):p.fontMetrics(c,a.getAttribute("style")?a:b).h},n=function(a,h){J(p.escapes,function(b,p){h&&-1!==z(b,h)||(a=a.toString().replace(new RegExp(b,"g"),p))});return a};I=[w,u,D,P,A,v,f].join();
if(I!==a.textCache){for(a.textCache=I;K--;)b.removeChild(d[K]);m||A||u||f||-1!==w.indexOf(" ")?(r=/<.*class="([^"]+)".*>/,x=/<.*style="([^"]+)".*>/,C=/<.*href="([^"]+)".*>/,M&&M.appendChild(b),w=m?w.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[w],w=g(w,function(a){return""!==a}),e(w,function(h,w){var g,m=0;h=h.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");g=h.split("|||");e(g,function(h){if(""!==h||1===g.length){var e={},d=k.createElementNS(p.SVG_NS,"tspan"),z,M;r.test(h)&&(z=h.match(r)[1],l(d,"class",z));x.test(h)&&(M=h.match(x)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),l(d,"style",M));C.test(h)&&!c&&(l(d,"onclick",'location.href\x3d"'+h.match(C)[1]+'"'),l(d,"class","highcharts-anchor"),q(d,{cursor:"pointer"}));h=n(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){d.appendChild(k.createTextNode(h));
m?e.dx=0:w&&null!==y&&(e.x=y);l(d,e);b.appendChild(d);!m&&t&&(!O&&c&&q(d,{display:"block"}),l(d,"dy",Q(d)));if(f){e=h.replace(/([^\^])-/g,"$1- ").split(" ");z=1<g.length||w||1<e.length&&!D;var P=[],A,J=Q(d),F=a.rotation;for(u&&(E=p.applyEllipsis(a,d,h,f));!u&&z&&(e.length||P.length);)a.rotation=0,A=p.getSpanWidth(a,d),h=A>f,void 0===E&&(E=h),h&&1!==e.length?(d.removeChild(d.firstChild),P.unshift(e.pop())):(e=P,P=[],e.length&&!D&&(d=k.createElementNS(N,"tspan"),l(d,{dy:J,x:y}),M&&l(d,"style",M),b.appendChild(d)),
A>f&&(f=A)),e.length&&d.appendChild(k.createTextNode(e.join(" ").replace(/- /g,"-")));a.rotation=F}m++}}});t=t||b.childNodes.length}),E&&a.attr("title",n(a.textStr,["\x26lt;","\x26gt;"])),M&&M.removeChild(b),A&&a.applyTextOutline&&a.applyTextOutline(A)):b.appendChild(k.createTextNode(n(w)))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,p,e,g,d,m,r){var w=this.label(a,h,b,r,null,null,null,null,"button"),x=0;w.attr(E({padding:8,r:2},e));var N,
k,C,z;e=E({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},e);N=e.style;delete e.style;g=E(e,{fill:"#e6e6e6"},g);k=g.style;delete g.style;d=E(e,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);C=d.style;delete d.style;m=E(e,{style:{color:"#cccccc"}},m);z=m.style;delete m.style;G(w.element,I?"mouseover":"mouseenter",function(){3!==x&&w.setState(1)});G(w.element,I?"mouseout":"mouseleave",function(){3!==x&&w.setState(x)});w.setState=
function(a){1!==a&&(w.state=x=a);w.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);w.attr([e,g,d,m][a||0]).css([N,k,C,z][a||0])};w.attr(e).css(c({cursor:"default"},N));return w.on("click",function(a){3!==x&&p.call(w,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};K(a)?h.d=a:A(a)&&c(h,
a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=A(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=h.ySetter=function(a,h,b){b.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,b,p,c,e){A(a)?(p=a,h=p.y,b=p.r,a=p.x):p={innerR:p,start:c,end:e};a=this.symbol("arc",a,h,b,b,p);a.r=b;return a},rect:function(a,h,b,p,c,e){c=A(a)?a.r:c;var g=this.createElement("rect");a=A(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(p,0)};void 0!==e&&(a.strokeWidth=
e,a=g.crisp(a));a.fill="none";c&&(a.r=c);g.rSetter=function(a,h,b){l(b,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,h,b){var p=this.alignedObjects,c=p.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?void 0:0});c--;)p[c].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,p,e){var g={preserveAspectRatio:"none"};
1<arguments.length&&c(g,{x:h,y:b,width:p,height:e});g=this.createElement("image").attr(g);g.element.setAttributeNS?g.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):g.element.setAttribute("hc-svg-href",a);return g},symbol:function(a,h,b,p,g,d){var m=this,w,r=/^url\((.*?)\)$/,x=r.test(a),N=!x&&(this.symbols[a]?a:"circle"),C=N&&this.symbols[N],E=u(h)&&C&&C.call(this.symbols,Math.round(h),Math.round(b),p,g,d),z,O;C?(w=this.path(E),w.attr("fill","none"),c(w,{symbolName:N,x:h,y:b,width:p,
height:g}),d&&c(w,d)):x&&(z=a.match(r)[1],w=this.image(z),w.imgwidth=F(P[z]&&P[z].width,d&&d.width),w.imgheight=F(P[z]&&P[z].height,d&&d.height),O=function(){w.attr({width:w.width,height:w.height})},e(["width","height"],function(a){w[a+"Setter"]=function(a,h){var b={},p=this["img"+h],c="width"===h?"translateX":"translateY";this[h]=a;u(p)&&(this.element&&this.element.setAttribute(h,p),this.alignByTranslate||(b[c]=((this[h]||0)-p)/2,this.attr(b)))}}),u(h)&&w.attr({x:h,y:b}),w.isImg=!0,u(w.imgwidth)&&
u(w.imgheight)?O():(w.attr({width:0,height:0}),v("img",{onload:function(){var a=f[m.chartIndex];0===this.width&&(q(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));P[z]={width:this.width,height:this.height};w.imgwidth=this.width;w.imgheight=this.height;w.element&&O();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&a&&a.onload)a.onload()},src:z}),this.imgCount++));return w},symbols:{circle:function(a,h,b,p){return this.arc(a+b/2,h+p/2,b/2,p/2,{start:0,
end:2*Math.PI,open:!1})},square:function(a,h,b,p){return["M",a,h,"L",a+b,h,a+b,h+p,a,h+p,"Z"]},triangle:function(a,h,b,p){return["M",a+b/2,h,"L",a+b,h+p,a,h+p,"Z"]},"triangle-down":function(a,h,b,p){return["M",a,h,"L",a+b,h,a+b/2,h+p,"Z"]},diamond:function(a,h,b,p){return["M",a+b/2,h,"L",a+b,h+p/2,a+b/2,h+p,a,h+p/2,"Z"]},arc:function(a,h,b,p,c){var e=c.start,g=c.r||b,d=c.r||p||b,m=c.end-.001;b=c.innerR;p=F(c.open,.001>Math.abs(c.end-c.start-2*Math.PI));var r=Math.cos(e),w=Math.sin(e),x=Math.cos(m),
m=Math.sin(m);c=.001>c.end-e-Math.PI?0:1;g=["M",a+g*r,h+d*w,"A",g,d,0,c,1,a+g*x,h+d*m];u(b)&&g.push(p?"M":"L",a+b*x,h+b*m,"A",b,b,0,c,0,a+b*r,h+b*w);g.push(p?"":"Z");return g},callout:function(a,h,b,p,c){var e=Math.min(c&&c.r||0,b,p),g=e+6,d=c&&c.anchorX;c=c&&c.anchorY;var m;m=["M",a+e,h,"L",a+b-e,h,"C",a+b,h,a+b,h,a+b,h+e,"L",a+b,h+p-e,"C",a+b,h+p,a+b,h+p,a+b-e,h+p,"L",a+e,h+p,"C",a,h+p,a,h+p,a,h+p-e,"L",a,h+e,"C",a,h,a,h,a+e,h];d&&d>b?c>h+g&&c<h+p-g?m.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,
h+p-e):m.splice(13,3,"L",a+b,p/2,d,c,a+b,p/2,a+b,h+p-e):d&&0>d?c>h+g&&c<h+p-g?m.splice(33,3,"L",a,c+6,a-6,c,a,c-6,a,h+e):m.splice(33,3,"L",a,p/2,d,c,a,p/2,a,h+e):c&&c>p&&d>a+g&&d<a+b-g?m.splice(23,3,"L",d+6,h+p,d,h+p+6,d-6,h+p,a+e,h+p):c&&0>c&&d>a+g&&d<a+b-g&&m.splice(3,3,"L",d-6,h,d,h-6,d+6,h,b-e,h);return m}},clipRect:function(h,b,p,c){var e=a.uniqueKey(),g=this.createElement("clipPath").attr({id:e}).add(this.defs);h=this.rect(h,b,p,c,0).add(g);h.id=e;h.clipPath=g;h.count=0;return h},text:function(a,
h,b,p){var c={};if(p&&(this.allowHTML||!this.forExport))return this.html(a,h,b);c.x=Math.round(h||0);b&&(c.y=Math.round(b));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);p||(a.xSetter=function(a,h,b){var p=b.getElementsByTagName("tspan"),c,e=b.getAttribute(h),g;for(g=0;g<p.length;g++)c=p[g],c.getAttribute(h)===e&&c.setAttribute(h,a);b.setAttribute(h,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?
parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,h,p){var c=a;h&&p&&(c=Math.max(c*Math.cos(h*b),4));return{x:-a/3*Math.sin(h*b),y:c}},label:function(h,b,g,d,m,r,x,N,C){var w=this,k=w.g("button"!==C&&"label"),z=k.text=w.text("",0,0,x).attr({zIndex:1}),O,M,y=0,f=3,q=0,P,A,l,J,F,D={},v,I,t=/^url\((.*?)\)$/.test(d),K=t,Q,n,R,T;C&&k.addClass("highcharts-"+C);K=t;Q=function(){return(v||0)%2/2};n=function(){var a=
z.element.style,h={};M=(void 0===P||void 0===A||F)&&u(z.textStr)&&z.getBBox();k.width=(P||M.width||0)+2*f+q;k.height=(A||M.height||0)+2*f;I=f+w.fontMetrics(a&&a.fontSize,z).b;K&&(O||(k.box=O=w.symbols[d]||t?w.symbol(d):w.rect(),O.addClass(("button"===C?"":"highcharts-label-box")+(C?" highcharts-"+C+"-box":"")),O.add(k),a=Q(),h.x=a,h.y=(N?-I:0)+a),h.width=Math.round(k.width),h.height=Math.round(k.height),O.attr(c(h,D)),D={})};R=function(){var a=q+f,h;h=N?0:I;u(P)&&M&&("center"===F||"right"===F)&&(a+=
{center:.5,right:1}[F]*(P-M.width));if(a!==z.x||h!==z.y)z.attr("x",a),void 0!==h&&z.attr("y",h);z.x=a;z.y=h};T=function(a,h){O?O.attr(a,h):D[a]=h};k.onAdd=function(){z.add(k);k.attr({text:h||0===h?h:"",x:b,y:g});O&&u(m)&&k.attr({anchorX:m,anchorY:r})};k.widthSetter=function(h){P=a.isNumber(h)?h:null};k.heightSetter=function(a){A=a};k["text-alignSetter"]=function(a){F=a};k.paddingSetter=function(a){u(a)&&a!==f&&(f=k.padding=a,R())};k.paddingLeftSetter=function(a){u(a)&&a!==q&&(q=a,R())};k.alignSetter=
function(a){a={left:0,center:.5,right:1}[a];a!==y&&(y=a,M&&k.attr({x:l}))};k.textSetter=function(a){void 0!==a&&z.textSetter(a);n();R()};k["stroke-widthSetter"]=function(a,h){a&&(K=!0);v=this["stroke-width"]=a;T(h,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(K=!0),k[h]=a);T(h,a)};k.anchorXSetter=function(a,h){m=k.anchorX=a;T(h,Math.round(a)-Q()-l)};k.anchorYSetter=function(a,h){r=k.anchorY=a;T(h,a-J)};k.xSetter=function(a){k.x=a;y&&(a-=y*((P||M.width)+2*f));l=
Math.round(a);k.attr("translateX",l)};k.ySetter=function(a){J=k.y=Math.round(a);k.attr("translateY",J)};var U=k.css;return c(k,{css:function(a){if(a){var h={};a=E(a);e(k.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b])});z.css(h)}return U.call(k,a)},getBBox:function(){return{width:M.width+2*f,height:M.height+2*f,x:M.x-f,y:M.y-f}},shadow:function(a){a&&(n(),O&&O.shadow(a));return k},destroy:function(){p(k.element,"mouseenter");p(k.element,"mouseleave");z&&(z=z.destroy());O&&(O=O.destroy());
B.prototype.destroy.call(k);k=w=n=R=T=null}})}});a.Renderer=H})(L);(function(a){var B=a.attr,H=a.createElement,G=a.css,n=a.defined,l=a.each,f=a.extend,t=a.isFirefox,q=a.isMS,v=a.isWebKit,u=a.pick,b=a.pInt,d=a.SVGRenderer,k=a.win,e=a.wrap;f(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=f(this.styles,a);G(this.element,
a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,e=this.element,g=this.translateX||0,d=this.translateY||0,k=this.x||0,f=this.y||0,y=this.textAlign||"left",q={left:0,center:.5,right:1}[y],A=this.styles,D=A&&A.whiteSpace;G(e,{marginLeft:g,marginTop:d});this.shadows&&l(this.shadows,function(a){G(a,{marginLeft:g+1,marginTop:d+1})});this.inverted&&l(e.childNodes,
function(b){a.invertChild(b,e)});if("SPAN"===e.tagName){var A=this.rotation,x=this.textWidth&&b(this.textWidth),E=[A,y,e.innerHTML,this.textAlign].join(),C;(C=x!==this.oldTextWidth)&&!(C=x>this.oldTextWidth)&&((C=this.textPxLength)||(G(e,{width:"",whiteSpace:D||"nowrap"}),C=e.offsetWidth),C=C>x);C&&/[ \-]/.test(e.textContent||e.innerText)&&(G(e,{width:x+"px",display:"block",whiteSpace:D||"normal"}),this.oldTextWidth=x);E!==this.cTT&&(D=a.fontMetrics(e.style.fontSize).b,n(A)&&A!==(this.oldRotation||
0)&&this.setSpanRotation(A,q,D),this.getSpanCorrection(this.textPxLength||e.offsetWidth,D,q,A,y));G(e,{left:k+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=A}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,e){var c={},g=this.renderer.getTransformKey();c[g]=c.transform="rotate("+a+"deg)";c[g+(t?"Origin":"-origin")]=c.transformOrigin=100*b+"% "+e+"px";G(this.element,c)},getSpanCorrection:function(a,b,e){this.xCorr=-a*e;this.yCorr=-b}});f(d.prototype,{getTransformKey:function(){return q&&
!/Edge/.test(k.navigator.userAgent)?"-ms-transform":v?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,b,g){var c=this.createElement("span"),d=c.element,m=c.renderer,k=m.isSVG,q=function(a,b){l(["opacity","visibility"],function(c){e(a,c+"Setter",function(a,c,e,g){a.call(this,c,e,g);b[e]=c})})};c.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;this.textStr=a;d.innerHTML=u(a,"");c.doTransform=!0};k&&q(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=
function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.doTransform=!0};c.attr({text:a,x:Math.round(b),y:Math.round(g)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";c.css=c.htmlCss;c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};k&&(c.add=function(a){var b,e=m.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;l(g.reverse(),function(a){function d(h,
b){a[b]=h;"translateX"===b?m.left=h+"px":m.top=h+"px";a.doTransform=!0}var m,h=B(a.element,"class");h&&(h={className:h});b=a.div=a.div||H("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||e);m=b.style;f(a,{classSetter:function(a){return function(h){this.element.setAttribute("class",h);a.className=h}}(b),on:function(){g[0].div&&c.on.apply({element:g[0].div},arguments);return a},
translateXSetter:d,translateYSetter:d});q(a,m)})}}else b=e;b.appendChild(d);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(L);(function(a){var B=a.defined,H=a.each,G=a.extend,n=a.merge,l=a.pick,f=a.timeUnits,t=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(f){var q=l(f&&f.useUTC,!0),u=this;this.options=f=n(!0,this.options||{},f);this.Date=f.Date||t.Date;this.timezoneOffset=(this.useUTC=q)&&f.timezoneOffset;this.getTimezoneOffset=
this.timezoneOffsetFunction();(this.variableTimezone=!(q&&!f.getTimezoneOffset&&!f.timezone))||this.timezoneOffset?(this.get=function(a,d){var b=d.getTime(),e=b-u.getTimezoneOffset(d);d.setTime(e);a=d["getUTC"+a]();d.setTime(b);return a},this.set=function(b,d,k){var e;if(-1!==a.inArray(b,["Milliseconds","Seconds","Minutes"]))d["set"+b](k);else e=u.getTimezoneOffset(d),e=d.getTime()-e,d.setTime(e),d["setUTC"+b](k),b=u.getTimezoneOffset(d),e=d.getTime()+b,d.setTime(e)}):q?(this.get=function(a,d){return d["getUTC"+
a]()},this.set=function(a,d,k){return d["setUTC"+a](k)}):(this.get=function(a,d){return d["get"+a]()},this.set=function(a,d,k){return d["set"+a](k)})},makeTime:function(f,v,u,b,d,k){var e,c,m;this.useUTC?(e=this.Date.UTC.apply(0,arguments),c=this.getTimezoneOffset(e),e+=c,m=this.getTimezoneOffset(e),c!==m?e+=m-c:c-36E5!==this.getTimezoneOffset(e-36E5)||a.isSafari||(e-=36E5)):e=(new this.Date(f,v,l(u,1),l(b,0),l(d,0),l(k,0))).getTime();return e},timezoneOffsetFunction:function(){var f=this,l=this.options,
u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(l.timezone){if(u)return function(a){return 6E4*-u.tz(a,l.timezone).utcOffset()};a.error(25)}return this.useUTC&&l.getTimezoneOffset?function(a){return 6E4*l.getTimezoneOffset(a)}:function(){return 6E4*(f.timezoneOffset||0)}},dateFormat:function(f,l,u){if(!a.defined(l)||isNaN(l))return a.defaultOptions.lang.invalidDate||"";f=a.pick(f,"%Y-%m-%d %H:%M:%S");var b=this,d=new this.Date(l),k=this.get("Hours",d),
e=this.get("Day",d),c=this.get("Date",d),m=this.get("Month",d),g=this.get("FullYear",d),r=a.defaultOptions.lang,z=r.weekdays,q=r.shortWeekdays,y=a.pad,d=a.extend({a:q?q[e]:z[e].substr(0,3),A:z[e],d:y(c),e:y(c,2," "),w:e,b:r.shortMonths[m],B:r.months[m],m:y(m+1),y:g.toString().substr(2,2),Y:g,H:y(k),k:k,I:y(k%12||12),l:k%12||12,M:y(b.get("Minutes",d)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:y(d.getSeconds()),L:y(Math.round(l%1E3),3)},a.dateFormats);a.objectEach(d,function(a,c){for(;-1!==f.indexOf("%"+
c);)f=f.replace("%"+c,"function"===typeof a?a.call(b,l):a)});return u?f.substr(0,1).toUpperCase()+f.substr(1):f},getTimeTicks:function(a,v,u,b){var d=this,k=[],e={},c,m=new d.Date(v),g=a.unitRange,r=a.count||1,z;if(B(v)){d.set("Milliseconds",m,g>=f.second?0:r*Math.floor(d.get("Milliseconds",m)/r));g>=f.second&&d.set("Seconds",m,g>=f.minute?0:r*Math.floor(d.get("Seconds",m)/r));g>=f.minute&&d.set("Minutes",m,g>=f.hour?0:r*Math.floor(d.get("Minutes",m)/r));g>=f.hour&&d.set("Hours",m,g>=f.day?0:r*Math.floor(d.get("Hours",
m)/r));g>=f.day&&d.set("Date",m,g>=f.month?1:r*Math.floor(d.get("Date",m)/r));g>=f.month&&(d.set("Month",m,g>=f.year?0:r*Math.floor(d.get("Month",m)/r)),c=d.get("FullYear",m));g>=f.year&&d.set("FullYear",m,c-c%r);g===f.week&&d.set("Date",m,d.get("Date",m)-d.get("Day",m)+l(b,1));c=d.get("FullYear",m);b=d.get("Month",m);var q=d.get("Date",m),y=d.get("Hours",m);v=m.getTime();d.variableTimezone&&(z=u-v>4*f.month||d.getTimezoneOffset(v)!==d.getTimezoneOffset(u));m=m.getTime();for(v=1;m<u;)k.push(m),m=
g===f.year?d.makeTime(c+v*r,0):g===f.month?d.makeTime(c,b+v*r):!z||g!==f.day&&g!==f.week?z&&g===f.hour&&1<r?d.makeTime(c,b,q,y+v*r):m+g*r:d.makeTime(c,b,q+v*r*(g===f.day?1:7)),v++;k.push(m);g<=f.hour&&1E4>k.length&&H(k,function(a){0===a%18E5&&"000000000"===d.dateFormat("%H%M%S%L",a)&&(e[a]="day")})}k.info=G(a,{higherRanks:e,totalRange:g*r});return k}}})(L);(function(a){var B=a.color,H=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:B("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=H(!0,a.defaultOptions,B);a.time.update(H(a.defaultOptions.global,
a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(H(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(B,n,l){return a.time.dateFormat(B,n,l)}})(L);(function(a){var B=a.correctFloat,H=a.defined,G=a.destroyObjectProperties,n=a.isNumber,l=a.merge,f=a.pick,t=a.deg2rad;a.Tick=function(a,f,l,b){this.axis=a;this.pos=f;this.type=l||"";this.isNewLabel=this.isNew=!0;l||
b||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,v=a.options,u=a.chart,b=a.categories,d=a.names,k=this.pos,e=v.labels,c=a.tickPositions,m=k===c[0],g=k===c[c.length-1],d=b?f(b[k],d[k],k):k,b=this.label,c=c.info,r;a.isDatetimeAxis&&c&&(r=v.dateTimeLabelFormats[c.higherRanks[k]||c.unitName]);this.isFirst=m;this.isLast=g;v=a.labelFormatter.call({axis:a,chart:u,isFirst:m,isLast:g,dateTimeLabelFormat:r,value:a.isLog?B(a.lin2log(d)):d,pos:k});if(H(b))b&&b.attr({text:v});else{if(this.label=
b=H(v)&&e.enabled?u.renderer.text(v,0,0,e.useHTML).css(l(e.style)).add(a.labelGroup):null)b.textPxLength=b.getBBox().width;this.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var l=this.axis,q=l.options.labels,b=a.x,d=l.chart.chartWidth,k=l.chart.spacing,e=f(l.labelLeft,Math.min(l.pos,k[3])),k=f(l.labelRight,Math.max(l.isRadial?0:l.pos+l.len,d-k[1])),c=this.label,m=this.rotation,g={left:0,center:.5,right:1}[l.labelAlign||
c.attr("align")],r=c.getBBox().width,z=l.getSlotWidth(),K=z,y=1,I,A={};if(m||!1===q.overflow)0>m&&b-g*r<e?I=Math.round(b/Math.cos(m*t)-e):0<m&&b+g*r>k&&(I=Math.round((d-b)/Math.cos(m*t)));else if(d=b+(1-g)*r,b-g*r<e?K=a.x+K*(1-g)-e:d>k&&(K=k-a.x+K*g,y=-1),K=Math.min(z,K),K<z&&"center"===l.labelAlign&&(a.x+=y*(z-K-g*(z-Math.min(r,K)))),r>K||l.autoRotation&&(c.styles||{}).width)I=K;I&&(A.width=I,(q.style||{}).textOverflow||(A.textOverflow="ellipsis"),c.css(A))},getPosition:function(a,f,l,b){var d=this.axis,
k=d.chart,e=b&&k.oldChartHeight||k.chartHeight;return{x:a?d.translate(f+l,null,null,b)+d.transB:d.left+d.offset+(d.opposite?(b&&k.oldChartWidth||k.chartWidth)-d.right-d.left:0),y:a?e-d.bottom+d.offset-(d.opposite?d.height:0):e-d.translate(f+l,null,null,b)-d.transB}},getLabelPosition:function(a,f,l,b,d,k,e,c){var m=this.axis,g=m.transA,r=m.reversed,z=m.staggerLines,q=m.tickRotCorr||{x:0,y:0},y=d.y,u=b||m.reserveSpaceDefault?0:-m.labelOffset*("center"===m.labelAlign?.5:1);H(y)||(y=0===m.side?l.rotation?
-8:-l.getBBox().height:2===m.side?q.y+8:Math.cos(l.rotation*t)*(q.y-l.getBBox(!1,0).height/2));a=a+d.x+u+q.x-(k&&b?k*g*(r?-1:1):0);f=f+y-(k&&!b?k*g*(r?1:-1):0);z&&(l=e/(c||1)%z,m.opposite&&(l=z-l-1),f+=m.labelOffset/z*l);return{x:a,y:Math.round(f)}},getMarkPath:function(a,f,l,b,d,k){return k.crispLine(["M",a,f,"L",a+(d?0:-l),f+(d?l:0)],b)},renderGridLine:function(a,f,l){var b=this.axis,d=b.options,k=this.gridLine,e={},c=this.pos,m=this.type,g=b.tickmarkOffset,r=b.chart.renderer,z=m?m+"Grid":"grid",
q=d[z+"LineWidth"],y=d[z+"LineColor"],d=d[z+"LineDashStyle"];k||(e.stroke=y,e["stroke-width"]=q,d&&(e.dashstyle=d),m||(e.zIndex=1),a&&(e.opacity=0),this.gridLine=k=r.path().attr(e).addClass("highcharts-"+(m?m+"-":"")+"grid-line").add(b.gridGroup));if(!a&&k&&(a=b.getPlotLinePath(c+g,k.strokeWidth()*l,a,!0)))k[this.isNew?"attr":"animate"]({d:a,opacity:f})},renderMark:function(a,l,u){var b=this.axis,d=b.options,k=b.chart.renderer,e=this.type,c=e?e+"Tick":"tick",m=b.tickSize(c),g=this.mark,r=!g,z=a.x;
a=a.y;var q=f(d[c+"Width"],!e&&b.isXAxis?1:0),d=d[c+"Color"];m&&(b.opposite&&(m[0]=-m[0]),r&&(this.mark=g=k.path().addClass("highcharts-"+(e?e+"-":"")+"tick").add(b.axisGroup),g.attr({stroke:d,"stroke-width":q})),g[r?"attr":"animate"]({d:this.getMarkPath(z,a,m[0],g.strokeWidth()*u,b.horiz,k),opacity:l}))},renderLabel:function(a,l,u,b){var d=this.axis,k=d.horiz,e=d.options,c=this.label,m=e.labels,g=m.step,d=d.tickmarkOffset,r=!0,z=a.x;a=a.y;c&&n(z)&&(c.xy=a=this.getLabelPosition(z,a,c,k,m,d,b,g),this.isFirst&&
!this.isLast&&!f(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!f(e.showLastLabel,1)?r=!1:!k||m.step||m.rotation||l||0===u||this.handleOverflow(a),g&&b%g&&(r=!1),r&&n(a.y)?(a.opacity=u,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0))},render:function(a,l,u){var b=this.axis,d=b.horiz,k=this.getPosition(d,this.pos,b.tickmarkOffset,l),e=k.x,c=k.y,b=d&&e===b.pos+b.len||!d&&c===b.pos?-1:1;u=f(u,1);this.isActive=!0;this.renderGridLine(l,u,b);this.renderMark(k,
u,b);this.renderLabel(k,l,u,a);this.isNew=!1},destroy:function(){G(this,this.axis)}}})(L);var V=function(a){var B=a.addEvent,H=a.animObject,G=a.arrayMax,n=a.arrayMin,l=a.color,f=a.correctFloat,t=a.defaultOptions,q=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,b=a.each,d=a.extend,k=a.fireEvent,e=a.format,c=a.getMagnitude,m=a.grep,g=a.inArray,r=a.isArray,z=a.isNumber,K=a.isString,y=a.merge,I=a.normalizeTickInterval,A=a.objectEach,D=a.pick,x=a.removeEvent,E=a.splat,C=a.syncTimeout,J=a.Tick,F=function(){this.init.apply(this,
arguments)};a.extend(F.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",
textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var h=b.isX,p=this;p.chart=a;p.horiz=a.inverted&&!p.isZAxis?!h:h;p.isXAxis=h;p.coll=p.coll||(h?"xAxis":"yAxis");p.opposite=b.opposite;p.side=b.side||(p.horiz?
p.opposite?0:2:p.opposite?1:3);p.setOptions(b);var c=this.options,e=c.type;p.labelFormatter=c.labels.formatter||p.defaultLabelFormatter;p.userOptions=b;p.minPixelPadding=0;p.reversed=c.reversed;p.visible=!1!==c.visible;p.zoomEnabled=!1!==c.zoomEnabled;p.hasNames="category"===e||!0===c.categories;p.categories=c.categories||p.hasNames;p.names=p.names||[];p.plotLinesAndBandsGroups={};p.isLog="logarithmic"===e;p.isDatetimeAxis="datetime"===e;p.positiveValuesOnly=p.isLog&&!p.allowNegativeLog;p.isLinked=
q(c.linkedTo);p.ticks={};p.labelEdge=[];p.minorTicks={};p.plotLinesAndBands=[];p.alternateBands={};p.len=0;p.minRange=p.userMinRange=c.minRange||c.maxZoom;p.range=c.range;p.offset=c.offset||0;p.stacks={};p.oldStacks={};p.stacksTouched=0;p.max=null;p.min=null;p.crosshair=D(c.crosshair,E(a.options.tooltip.crosshairs)[h?0:1],!1);b=p.options.events;-1===g(p,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,p):a.axes.push(p),a[p.coll].push(p));p.series=p.series||[];a.inverted&&!p.isZAxis&&h&&void 0===p.reversed&&
(p.reversed=!0);A(b,function(a,h){B(p,h,a)});p.lin2log=c.linearToLogConverter||p.lin2log;p.isLog&&(p.val2lin=p.log2lin,p.lin2val=p.lin2log)},setOptions:function(a){this.options=y(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],y(t[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,b=this.value,c=h.chart.time,g=h.categories,d=this.dateTimeLabelFormat,
m=t.lang,r=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,x=r&&r.length,k,f=h.options.labels.format,h=h.isLog?Math.abs(b):h.tickInterval;if(f)k=e(f,this,c);else if(g)k=b;else if(d)k=c.dateFormat(d,b);else if(x&&1E3<=h)for(;x--&&void 0===k;)c=Math.pow(m,x+1),h>=c&&0===10*b%c&&null!==r[x]&&0!==b&&(k=a.numberFormat(b/c,-1)+r[x]);void 0===k&&(k=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return k},getSeriesExtremes:function(){var a=this,p=a.chart;a.hasVisibleSeries=!1;a.dataMin=
a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();b(a.series,function(h){if(h.visible||!p.options.chart.ignoreHiddenSeries){var b=h.options,c=b.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)b=h.xData,b.length&&(h=n(b),e=G(b),z(h)||h instanceof Date||(b=m(b,z),h=n(b),e=G(b)),b.length&&(a.dataMin=Math.min(D(a.dataMin,b[0],h),h),a.dataMax=Math.max(D(a.dataMax,b[0],e),e)));else if(h.getExtremes(),e=h.dataMax,h=h.dataMin,q(h)&&q(e)&&
(a.dataMin=Math.min(D(a.dataMin,h),h),a.dataMax=Math.max(D(a.dataMax,e),e)),q(c)&&(a.threshold=c),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,e,g,d){var h=this.linkedParent||this,p=1,m=0,r=e?h.oldTransA:h.transA;e=e?h.oldMin:h.min;var x=h.minPixelPadding;g=(h.isOrdinal||h.isBroken||h.isLog&&g)&&h.lin2val;r||(r=h.transA);c&&(p*=-1,m=h.len);h.reversed&&(p*=-1,m-=p*(h.sector||h.len));b?(a=(a*p+m-x)/r+e,g&&(a=h.lin2val(a))):(g&&(a=h.val2lin(a)),a=z(e)?p*(a-e)*
r+m+p*x+(z(d)?r*d:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,g){var h=this.chart,p=this.left,d=this.top,m,r,x=c&&h.oldChartHeight||h.chartHeight,k=c&&h.oldChartWidth||h.chartWidth,N;m=this.transB;var f=function(a,h,b){if(a<h||a>b)e?a=Math.min(Math.max(h,a),b):N=!0;return a};g=D(g,this.translate(a,null,null,c));g=Math.min(Math.max(-1E5,
g),1E5);a=c=Math.round(g+m);m=r=Math.round(x-g-m);z(g)?this.horiz?(m=d,r=x-this.bottom,a=c=f(a,p,p+this.width)):(a=p,c=k-this.right,m=r=f(m,d,d+this.height)):(N=!0,e=!1);return N&&!e?null:h.renderer.crispLine(["M",a,m,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var h,p=f(Math.floor(b/a)*a);c=f(Math.ceil(c/a)*a);var e=[],g;f(p+a)===p&&(g=20);if(this.single)return[b];for(b=p;b<=c;){e.push(b);b=f(b+a,g);if(b===h)break;h=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===
a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,p=a.options,c=a.tickPositions,e=a.minorTickInterval,g=[],d=a.pointRangePadding||0,m=a.min-d,d=a.max+d,r=d-m;if(r&&r/e<a.len/3)if(a.isLog)b(this.paddedTicks,function(h,b,p){b&&g.push.apply(g,a.getLogTickPositions(e,p[b-1],p[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())g=g.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),m,d,p.startOfWeek));
else for(p=m+(c[0]-m)%e;p<=d&&p!==g[0];p+=e)g.push(p);0!==g.length&&a.trimTicks(g);return g},adjustForMinRange:function(){var a=this.options,p=this.min,c=this.max,e,g,d,m,r,x,k,f;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(b(this.series,function(a){x=a.xData;for(m=k=a.xIncrement?1:x.length-1;0<m;m--)if(r=x[m]-x[m-1],void 0===d||r<d)d=r}),this.minRange=Math.min(5*d,this.dataMax-this.dataMin)));c-p<this.minRange&&(g=this.dataMax-this.dataMin>=this.minRange,
f=this.minRange,e=(f-c+p)/2,e=[p-e,D(a.min,p-e)],g&&(e[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),p=G(e),c=[p+f,D(a.max,p+f)],g&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=n(c),c-p<f&&(e[0]=c-f,e[1]=D(a.min,c-f),p=G(e)));this.min=p;this.max=c},getClosest:function(){var a;this.categories?a=1:b(this.series,function(h){var b=h.closestPointRange,p=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&q(b)&&p&&(a=q(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=
r(this.categories),b=h?this.categories:this.names,c=a.options.x,e;a.series.requireSorting=!1;q(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():h?g(a.name,b):D(b["s"+a.name],-1));-1===c?h||(e=b.length):e=c;void 0!==e&&(this.names[e]=a.name,this.names["s"+a.name]=e);return e},updateNames:function(){var a=this,p=this.names,c=p.length;if(0<c){for(;c--;)delete p["s"+p[c]];p.length=0;this.minRange=this.userMinRange;b(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),
h.generatePoints();b(h.points,function(b,p){var c;b.options&&(c=a.nameToX(b),void 0!==c&&c!==b.x&&(b.x=c,h.xData[p]=c))})})}},setAxisTranslation:function(a){var h=this,c=h.max-h.min,e=h.axisPointRange||0,g,d=0,m=0,r=h.linkedParent,x=!!h.categories,k=h.transA,f=h.isXAxis;if(f||x||e)g=h.getClosest(),r?(d=r.minPointOffset,m=r.pointRangePadding):b(h.series,function(a){var b=x?1:f?D(a.options.pointRange,g,0):h.axisPointRange||0;a=a.options.pointPlacement;e=Math.max(e,b);h.single||(d=Math.max(d,K(a)?0:
b/2),m=Math.max(m,"on"===a?0:b))}),r=h.ordinalSlope&&g?h.ordinalSlope/g:1,h.minPointOffset=d*=r,h.pointRangePadding=m*=r,h.pointRange=Math.min(e,c),f&&(h.closestPointRange=g);a&&(h.oldTransA=k);h.translationSlope=h.transA=k=h.options.staticScale||h.len/(c+m||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=k*d},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var p=this,e=p.chart,g=p.options,d=p.isLog,m=p.log2lin,r=p.isDatetimeAxis,x=p.isXAxis,C=p.isLinked,E=g.maxPadding,
l=g.minPadding,y=g.tickInterval,A=g.tickPixelInterval,J=p.categories,F=p.threshold,u=p.softThreshold,t,v,n,K;r||J||C||this.getTickAmount();n=D(p.userMin,g.min);K=D(p.userMax,g.max);C?(p.linkedParent=e[p.coll][g.linkedTo],e=p.linkedParent.getExtremes(),p.min=D(e.min,e.dataMin),p.max=D(e.max,e.dataMax),g.type!==p.linkedParent.options.type&&a.error(11,1)):(!u&&q(F)&&(p.dataMin>=F?(t=F,l=0):p.dataMax<=F&&(v=F,E=0)),p.min=D(n,t,p.dataMin),p.max=D(K,v,p.dataMax));d&&(p.positiveValuesOnly&&!h&&0>=Math.min(p.min,
D(p.dataMin,p.min))&&a.error(10,1),p.min=f(m(p.min),15),p.max=f(m(p.max),15));p.range&&q(p.max)&&(p.userMin=p.min=n=Math.max(p.dataMin,p.minFromRange()),p.userMax=K=p.max,p.range=null);k(p,"foundExtremes");p.beforePadding&&p.beforePadding();p.adjustForMinRange();!(J||p.axisPointRange||p.usePercentage||C)&&q(p.min)&&q(p.max)&&(m=p.max-p.min)&&(!q(n)&&l&&(p.min-=m*l),!q(K)&&E&&(p.max+=m*E));z(g.softMin)&&!z(p.userMin)&&(p.min=Math.min(p.min,g.softMin));z(g.softMax)&&!z(p.userMax)&&(p.max=Math.max(p.max,
g.softMax));z(g.floor)&&(p.min=Math.max(p.min,g.floor));z(g.ceiling)&&(p.max=Math.min(p.max,g.ceiling));u&&q(p.dataMin)&&(F=F||0,!q(n)&&p.min<F&&p.dataMin>=F?p.min=F:!q(K)&&p.max>F&&p.dataMax<=F&&(p.max=F));p.tickInterval=p.min===p.max||void 0===p.min||void 0===p.max?1:C&&!y&&A===p.linkedParent.options.tickPixelInterval?y=p.linkedParent.tickInterval:D(y,this.tickAmount?(p.max-p.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(p.max-p.min)*A/Math.max(p.len,A));x&&!h&&b(p.series,function(a){a.processData(p.min!==
p.oldMin||p.max!==p.oldMax)});p.setAxisTranslation(!0);p.beforeSetTickPositions&&p.beforeSetTickPositions();p.postProcessTickInterval&&(p.tickInterval=p.postProcessTickInterval(p.tickInterval));p.pointRange&&!y&&(p.tickInterval=Math.max(p.pointRange,p.tickInterval));h=D(g.minTickInterval,p.isDatetimeAxis&&p.closestPointRange);!y&&p.tickInterval<h&&(p.tickInterval=h);r||d||y||(p.tickInterval=I(p.tickInterval,null,c(p.tickInterval),D(g.allowDecimals,!(.5<p.tickInterval&&5>p.tickInterval&&1E3<p.max&&
9999>p.max)),!!this.tickAmount));this.tickAmount||(p.tickInterval=p.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var e=a.tickPositioner,g=a.startOnTick,d=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&(parseInt(this.min,
10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,e&&(e=e.apply(this,[this.min,
this.max])))&&(this.tickPositions=b=e);this.paddedTicks=b.slice(0);this.trimTicks(b,g,d);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||e||this.adjustTickAmount())},trimTicks:function(a,b,c){var h=a[0],e=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-p>a[0];)a.shift();if(c)this.max=e;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&q(h)&&!this.options.tickPositions&&a.push((e+h)/2)}},alignToOthers:function(){var a=
{},c,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||this.isLog||b(this.chart[this.coll],function(h){var b=h.options,b=[h.horiz?b.left:b.top,b.width,b.height,b.pane].join();h.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=
b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,g=b&&b.length,d=D(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(g<c){for(;b.length<c;)b.length%2||this.min===d?b.push(f(b[b.length-1]+a)):b.unshift(f(b[0]-a));this.transA*=(g-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else g>c&&(this.tickInterval*=2,this.setTickPositions());if(q(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,
1);this.finalTickAmt=void 0}}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;b(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=
this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,e,g,m){var h=this,p=h.chart;e=D(e,!0);b(h.series,function(a){delete a.kdTree});m=d(m,{min:a,max:c});k(h,"setExtremes",m,function(){h.userMin=a;h.userMax=c;h.eventArgs=m;e&&p.redraw(g)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,e=this.options,g=Math.min(h,D(e.min,h)),e=Math.max(c,D(e.max,c));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(q(h)&&(a<g&&(a=g),a>e&&(a=e)),q(c)&&(b<g&&(b=g),b>e&&(b=e))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,e=c.offsets||[0,0,0,0],g=this.horiz,d=this.width=Math.round(a.relativeLength(D(c.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),m=this.height=Math.round(a.relativeLength(D(c.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),r=this.top=Math.round(a.relativeLength(D(c.top,
b.plotTop+e[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(D(c.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-m-r;this.right=b.chartWidth-d-c;this.len=Math.max(g?d:m,0);this.pos=g?c:r},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?f(b(this.min)):this.min,max:a?f(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=this.lin2log,c=b?
h(this.min):this.min,b=b?h(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,e=this.tickInterval,g=e,d=this.len/(((this.categories?1:0)+this.max-this.min)/e),m,r=a.rotation,x=this.labelMetrics(),k,f=Number.MAX_VALUE,C,E=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return a*e};c?(C=!a.staggerLines&&!a.step&&(q(r)?[r]:d<D(a.autoRotationLimit,80)&&a.autoRotation))&&b(C,function(a){var b;if(a===r||a&&-90<=a&&90>=a)k=E(Math.abs(x.h/Math.sin(v*a))),b=k+
Math.abs(a/360),b<f&&(f=b,m=a,g=k)}):a.step||(g=E(x.h));this.autoRotation=C;this.labelRotation=D(m,r);return g},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),g=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/e||!b&&(c.style&&parseInt(c.style.width,10)||g&&g-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,e=this.tickPositions,g=this.ticks,
d=this.options.labels,m=this.horiz,r=this.getSlotWidth(),x=Math.max(1,Math.round(r-2*(d.padding||5))),k={},f=this.labelMetrics(),C=d.style&&d.style.textOverflow,E,z,l=0,y;K(d.rotation)||(k.rotation=d.rotation||0);b(e,function(a){(a=g[a])&&a.label&&a.label.textPxLength>l&&(l=a.label.textPxLength)});this.maxLabelLength=l;if(this.autoRotation)l>x&&l>f.h?k.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(E=x,!C))for(z="clip",x=e.length;!m&&x--;)if(y=e[x],y=g[y].label)y.styles&&"ellipsis"===
y.styles.textOverflow?y.css({textOverflow:"clip"}):y.textPxLength>r&&y.css({width:r+"px"}),y.getBBox().height>this.len/e.length-(f.h-f.f)&&(y.specificTextOverflow="ellipsis");k.rotation&&(E=l>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,C||(z="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))k.align=this.labelAlign;b(e,function(a){var b=(a=g[a])&&a.label;b&&(b.attr(k),!E||d.style&&d.style.width||!(E<b.textPxLength||"SPAN"===b.element.tagName)||b.css({width:E,textOverflow:b.specificTextOverflow||
z}),delete b.specificTextOverflow,a.rotation=k.rotation)});this.tickRotCorr=c.rotCorr(f.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,e=this.options.title,g;this.axisTitle||((g=e.textAlign)||(g=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[e.align]),
this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:g}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),this.axisTitle.isNew=!0);e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new J(this,a)},getOffset:function(){var a=this,c=a.chart,e=c.renderer,g=a.options,d=a.tickPositions,m=a.ticks,r=a.horiz,x=a.side,k=c.inverted&&!a.isZAxis?
[1,0,3,2][x]:x,f,E,C=0,z,l=0,y=g.title,F=g.labels,J=0,u=c.axisOffset,c=c.clipOffset,t=[-1,1,1,-1][x],I=g.className,n=a.axisParent,v=this.tickSize("tick");f=a.hasData();a.showAxis=E=f||D(g.showEmpty,!0);a.staggerLines=a.horiz&&F.staggerLines;a.axisGroup||(a.gridGroup=e.g("grid").attr({zIndex:g.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(I||"")).add(n),a.axisGroup=e.g("axis").attr({zIndex:g.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(I||"")).add(n),a.labelGroup=
e.g("axis-labels").attr({zIndex:F.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(I||"")).add(n));f||a.isLinked?(b(d,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===x||2===x||{1:"left",3:"right"}[x]===a.labelAlign,D(F.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&b(d,function(a){J=Math.max(m[a].getLabelSize(),J)}),a.staggerLines&&(J*=a.staggerLines),a.labelOffset=J*(a.opposite?-1:1)):A(m,function(a,b){a.destroy();delete m[b]});
y&&y.text&&!1!==y.enabled&&(a.addTitle(E),E&&!1!==y.reserveSpace&&(a.titleOffset=C=a.axisTitle.getBBox()[r?"height":"width"],z=y.offset,l=q(z)?0:D(y.margin,r?5:10)));a.renderLine();a.offset=t*D(g.offset,u[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};e=0===x?-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;l=Math.abs(J)+l;J&&(l=l-e+t*(r?D(F.y,a.tickRotCorr.y+8*t):F.x));a.axisTitleMargin=D(z,l);u[x]=Math.max(u[x],a.axisTitleMargin+C+t*a.offset,l,f&&d.length&&v?v[0]+t*a.offset:0);g=g.offset?0:2*Math.floor(a.axisLine.strokeWidth()/
2);c[k]=Math.max(c[k],g)},getLinePath:function(a){var b=this.chart,c=this.opposite,h=this.offset,e=this.horiz,g=this.left+(c?this.width:0)+h,h=b.chartHeight-this.bottom-(c?this.height:0)+h;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:g,e?h:this.top,"L",e?b.chartWidth-this.right:g,e?h:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,
"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,e=this.len,g=this.options.title,d=a?b:c,m=this.opposite,r=this.offset,x=g.x||0,k=g.y||0,f=this.axisTitle,E=this.chart.renderer.fontMetrics(g.style&&g.style.fontSize,f),f=Math.max(f.getBBox(null,0).height-E.h-1,0),e={low:d+(a?0:e),middle:d+e/2,high:d+(a?e:0)}[g.align],b=(a?c+this.height:b)+(a?1:-1)*(m?-1:1)*this.axisTitleMargin+[-f,f,E.f,-f][this.side];return{x:a?e+x:b+(m?this.width:
0)+r+x,y:a?b+k-(m?this.height:0)+r:e+k}},renderMinorTick:function(a){var b=this.chart.hasRendered&&z(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new J(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,e=this.ticks,h=this.chart.hasRendered&&z(this.oldMin);if(!c||a>=this.min&&a<=this.max)e[a]||(e[a]=new J(this,a)),h&&e[a].isNew&&e[a].render(b,!0,.1),e[a].render(b)},render:function(){var c=this,e=c.chart,g=c.options,d=c.isLog,m=c.lin2log,
r=c.isLinked,x=c.tickPositions,k=c.axisTitle,f=c.ticks,E=c.minorTicks,l=c.alternateBands,y=g.stackLabels,F=g.alternateGridColor,q=c.tickmarkOffset,D=c.axisLine,u=c.showAxis,t=H(e.renderer.globalAnimation),I,n;c.labelEdge.length=0;c.overlap=!1;b([f,E,l],function(a){A(a,function(a){a.isActive=!1})});if(c.hasData()||r)c.minorTickInterval&&!c.categories&&b(c.getMinorTickPositions(),function(a){c.renderMinorTick(a)}),x.length&&(b(x,function(a,b){c.renderTick(a,b)}),q&&(0===c.min||c.single)&&(f[-1]||(f[-1]=
new J(c,-1,null,!0)),f[-1].render(-1))),F&&b(x,function(b,h){n=void 0!==x[h+1]?x[h+1]+q:c.max-q;0===h%2&&b<c.max&&n<=c.max+(e.polar?-q:q)&&(l[b]||(l[b]=new a.PlotLineOrBand(c)),I=b+q,l[b].options={from:d?m(I):I,to:d?m(n):n,color:F},l[b].render(),l[b].isActive=!0)}),c._addedPlotLB||(b((g.plotLines||[]).concat(g.plotBands||[]),function(a){c.addPlotBandOrLine(a)}),c._addedPlotLB=!0);b([f,E,l],function(a){var b,c=[],h=t.duration;A(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});
C(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==l&&e.hasRendered&&h?h:0)});D&&(D[D.isPlaced?"animate":"attr"]({d:this.getLinePath(D.strokeWidth())}),D.isPlaced=!0,D[u?"show":"hide"](!0));k&&u&&(g=c.getTitlePosition(),z(g.y)?(k[k.isNew?"attr":"animate"](g),k.isNew=!1):(k.attr("y",-9999),k.isNew=!0));y&&y.enabled&&c.renderStackTotals();c.isDirty=!1},redraw:function(){this.visible&&(this.render(),b(this.plotLinesAndBands,function(a){a.render()}));
b(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,e=c.stacks,h=c.plotLinesAndBands,d;a||x(c);A(e,function(a,b){u(a);e[b]=null});b([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(h)for(a=h.length;a--;)h[a].destroy();b("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});for(d in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[d]=
c.plotLinesAndBandsGroups[d].destroy();A(c,function(a,b){-1===g(b,c.keepProps)&&delete c[b]})},drawCrosshair:function(a,b){var c,e=this.crosshair,g=D(e.snap,!0),h,d=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!g)?(g?q(b)&&(h=this.isXAxis?b.plotX:this.len-b.plotY):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(h)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,h)||null),q(c)?(b=this.categories&&!this.isRadial,d||(this.cross=
d=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:D(e.zIndex,2)}).add(),d.attr({stroke:e.color||(b?l("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})),d.show().attr({d:c}),b&&!e.width&&d.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&
this.cross.hide()}});return a.Axis=F}(L);(function(a){var B=a.Axis,H=a.getMagnitude,G=a.normalizeTickInterval,n=a.timeUnits;B.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};B.prototype.normalizeTimeTickInterval=function(a,f){var l=f||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];f=l[l.length-
1];var q=n[f[0]],v=f[1],u;for(u=0;u<l.length&&!(f=l[u],q=n[f[0]],v=f[1],l[u+1]&&a<=(q*v[v.length-1]+n[l[u+1][0]])/2);u++);q===n.year&&a<5*q&&(v=[1,2,5]);a=G(a/q,v,"year"===f[0]?Math.max(H(a/q),1):1);return{unitRange:q,count:a,unitName:f[0]}}})(L);(function(a){var B=a.Axis,H=a.getMagnitude,G=a.map,n=a.normalizeTickInterval,l=a.pick;B.prototype.getLogTickPositions=function(a,t,q,v){var f=this.options,b=this.len,d=this.lin2log,k=this.log2lin,e=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),
e=this.getLinearTickPositions(a,t,q);else if(.08<=a)for(var b=Math.floor(t),c,m,g,r,z,f=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];b<q+1&&!z;b++)for(m=f.length,c=0;c<m&&!z;c++)g=k(d(b)*f[c]),g>t&&(!v||r<=q)&&void 0!==r&&e.push(r),r>q&&(z=!0),r=g;else t=d(t),q=d(q),a=v?this.getMinorTickInterval():f.tickInterval,a=l("auto"===a?null:a,this._minorAutoInterval,f.tickPixelInterval/(v?5:1)*(q-t)/((v?b/this.tickPositions.length:b)||1)),a=n(a,null,H(a)),e=G(this.getLinearTickPositions(a,t,q),k),v||
(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return e};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(L);(function(a,B){var H=a.arrayMax,G=a.arrayMin,n=a.defined,l=a.destroyObjectProperties,f=a.each,t=a.erase,q=a.merge,v=a.pick;a.PlotLineOrBand=function(a,b){this.axis=a;b&&(this.options=b,this.id=b.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,b=f.axis,d=b.horiz,k=f.options,e=k.label,c=f.label,m=k.to,
g=k.from,r=k.value,l=n(g)&&n(m),t=n(r),y=f.svgElem,I=!y,A=[],D=k.color,x=v(k.zIndex,0),E=k.events,A={"class":"highcharts-plot-"+(l?"band ":"line ")+(k.className||"")},C={},J=b.chart.renderer,F=l?"bands":"lines",h=b.log2lin;b.isLog&&(g=h(g),m=h(m),r=h(r));t?(A={stroke:D,"stroke-width":k.width},k.dashStyle&&(A.dashstyle=k.dashStyle)):l&&(D&&(A.fill=D),k.borderWidth&&(A.stroke=k.borderColor,A["stroke-width"]=k.borderWidth));C.zIndex=x;F+="-"+x;(D=b.plotLinesAndBandsGroups[F])||(b.plotLinesAndBandsGroups[F]=
D=J.g("plot-"+F).attr(C).add());I&&(f.svgElem=y=J.path().attr(A).add(D));if(t)A=b.getPlotLinePath(r,y.strokeWidth());else if(l)A=b.getPlotBandPath(g,m,k);else return;I&&A&&A.length?(y.attr({d:A}),E&&a.objectEach(E,function(a,b){y.on(b,function(a){E[b].apply(f,[a])})})):y&&(A?(y.show(),y.animate({d:A})):(y.hide(),c&&(f.label=c=c.destroy())));e&&n(e.text)&&A&&A.length&&0<b.width&&0<b.height&&!A.flat?(e=q({align:d&&l&&"center",x:d?!l&&4:10,verticalAlign:!d&&l&&"middle",y:d?l?16:10:l?6:-4,rotation:d&&
!l&&90},e),this.renderLabel(e,A,l,x)):c&&c.hide();return f},renderLabel:function(a,b,d,k){var e=this.label,c=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},e.zIndex=k,this.label=e=c.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));k=b.xBounds||[b[1],b[4],d?b[6]:b[1]];b=b.yBounds||[b[2],b[5],d?b[7]:b[2]];d=G(k);c=G(b);e.align(a,!1,{x:d,y:c,width:H(k)-d,height:H(b)-c});e.show()},destroy:function(){t(this.axis.plotLinesAndBands,
this);delete this.axis;l(this)}};a.extend(B.prototype,{getPlotBandPath:function(a,b){var d=this.getPlotLinePath(b,null,null,!0),k=this.getPlotLinePath(a,null,null,!0),e=[],c=this.horiz,m=1,g;a=a<this.min&&b<this.min||a>this.max&&b>this.max;if(k&&d)for(a&&(g=k.toString()===d.toString(),m=0),a=0;a<k.length;a+=6)c&&d[a+1]===k[a+1]?(d[a+1]+=m,d[a+4]+=m):c||d[a+2]!==k[a+2]||(d[a+2]+=m,d[a+5]+=m),e.push("M",k[a+1],k[a+2],"L",k[a+4],k[a+5],d[a+4],d[a+5],d[a+1],d[a+2],"z"),e.flat=g;return e},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,b){var d=(new a.PlotLineOrBand(this,f)).render(),k=this.userOptions;d&&(b&&(k[b]=k[b]||[],k[b].push(f)),this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,d=this.options,k=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();f([d.plotLines||[],k.plotLines||[],d.plotBands||[],k.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===
a&&t(b,b[e])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(L,V);(function(a){var B=a.each,H=a.extend,G=a.format,n=a.isNumber,l=a.map,f=a.merge,t=a.pick,q=a.splat,v=a.syncTimeout,u=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},
cleanSplit:function(a){B(this.chart.series,function(b){var d=b&&b.tt;d&&(!d.isActive||a?b.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},
update:function(a){this.destroy();f(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,f(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,d,k,e){var b=this,m=b.now,g=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-m.x)||1<Math.abs(d-m.y)),r=b.followPointer||1<b.len;H(m,{x:g?(2*m.x+a)/
3:a,y:g?(m.y+d)/2:d,anchorX:r?void 0:g?(2*m.anchorX+k)/3:k,anchorY:r?void 0:g?(m.anchorY+e)/2:e});b.getLabel().attr(m);g&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,d,k,e)},32))},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=v(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,d){var b,e=this.chart,c=e.inverted,m=e.plotTop,g=e.plotLeft,r=0,f=
0,t,y;a=q(a);b=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),b=[d.chartX-e.plotLeft,d.chartY-m]);b||(B(a,function(a){t=a.series.yAxis;y=a.series.xAxis;r+=a.plotX+(!c&&y?y.left-g:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!c&&t?t.top-m:0)}),r/=a.length,f/=a.length,b=[c?e.plotWidth-f:r,this.shared&&!c&&1<a.length&&d?d.chartY-m:c?e.plotHeight-r:f]);return l(b,Math.round)},getPosition:function(a,d,k){var b=this.chart,c=this.distance,m={},g=b.inverted&&
k.h||0,r,f=["y",b.chartHeight,d,k.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],l=["x",b.chartWidth,a,k.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],y=!this.followPointer&&t(k.ttBelow,!b.inverted===!!k.negative),q=function(a,b,e,d,h,p){var r=e<d-c,x=d+c+e<b,k=d-c-e;d+=c;if(y&&x)m[a]=d;else if(!y&&r)m[a]=k;else if(r)m[a]=Math.min(p-e,0>k-g?k:k-g);else if(x)m[a]=Math.max(h,d+g+e>b?d:d+g);else return!1},A=function(a,b,e,g){var h;g<c||g>b-c?h=!1:m[a]=g<e/2?1:g>b-e/2?b-e-2:g-e/2;return h},D=
function(a){var b=f;f=l;l=b;r=a},x=function(){!1!==q.apply(0,f)?!1!==A.apply(0,l)||r||(D(!0),x()):r?m.x=m.y=0:(D(!0),x())};(b.inverted||1<this.len)&&D();x();return m},defaultFormatter:function(a){var b=this.points||q(this),k;k=[a.tooltipFooterHeaderFormatter(b[0])];k=k.concat(a.bodyFormatter(b));k.push(a.tooltipFooterHeaderFormatter(b[0],!0));return k},refresh:function(a,d){var b,e=this.options,c,m=a,g,r={},f=[];b=e.formatter||this.defaultFormatter;var r=this.shared,l;e.enabled&&(clearTimeout(this.hideTimer),
this.followPointer=q(m)[0].series.tooltipOptions.followPointer,g=this.getAnchor(m,d),d=g[0],c=g[1],!r||m.series&&m.series.noSharedTooltip?r=m.getLabelConfig():(B(m,function(a){a.setState("hover");f.push(a.getLabelConfig())}),r={x:m[0].category,y:m[0].y},r.points=f,m=m[0]),this.len=f.length,r=b.call(r,this),l=m.series,this.distance=t(l.tooltipOptions.distance,16),!1===r?this.hide():(b=this.getLabel(),this.isHidden&&b.attr({opacity:1}).show(),this.split?this.renderSplit(r,q(a)):(e.style.width||b.css({width:this.chart.spacingBox.width}),
b.attr({text:r&&r.join?r.join(""):r}),b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(m.colorIndex,l.colorIndex)),b.attr({stroke:e.borderColor||m.color||l.color||"#666666"}),this.updatePosition({plotX:d,plotY:c,negative:m.negative,ttBelow:m.ttBelow,h:g[2]||0})),this.isHidden=!1))},renderSplit:function(b,d){var k=this,e=[],c=this.chart,m=c.renderer,g=!0,r=this.options,f=0,l=this.getLabel();a.isString(b)&&(b=[!1,b]);B(b.slice(0,d.length+1),function(a,b){if(!1!==a){b=d[b-1]||
{isHeader:!0,plotX:d[0].plotX};var z=b.series||k,y=z.tt,x=b.series||{},E="highcharts-color-"+t(b.colorIndex,x.colorIndex,"none");y||(z.tt=y=m.label(null,null,null,"callout",null,null,r.useHTML).addClass("highcharts-tooltip-box "+E).attr({padding:r.padding,r:r.borderRadius,fill:r.backgroundColor,stroke:r.borderColor||b.color||x.color||"#333333","stroke-width":r.borderWidth}).add(l));y.isActive=!0;y.attr({text:a});y.css(r.style).shadow(r.shadow);a=y.getBBox();x=a.width+y.strokeWidth();b.isHeader?(f=
a.height,x=Math.max(0,Math.min(b.plotX+c.plotLeft-x/2,c.chartWidth-x))):x=b.plotX+c.plotLeft-t(r.distance,16)-x;0>x&&(g=!1);a=(b.series&&b.series.yAxis&&b.series.yAxis.pos)+(b.plotY||0);a-=c.plotTop;e.push({target:b.isHeader?c.plotHeight+f:a,rank:b.isHeader?1:0,size:z.tt.getBBox().height+1,point:b,x:x,tt:y})}});this.cleanSplit();a.distribute(e,c.plotHeight+f);B(e,function(a){var b=a.point,e=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:g||b.isHeader?a.x:b.plotX+c.plotLeft+t(r.distance,
16),y:a.pos+c.plotTop,anchorX:b.isHeader?b.plotX+c.plotLeft:b.plotX+e.xAxis.pos,anchorY:b.isHeader?a.pos+c.plotTop-15:b.plotY+e.yAxis.pos})})},updatePosition:function(a){var b=this.chart,k=this.getLabel(),k=(this.options.positioner||this.getPosition).call(this,k.width,k.height,a);this.move(Math.round(k.x),Math.round(k.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getDateFormat:function(a,d,k,e){var b=this.chart.time,m=b.dateFormat("%m-%d %H:%M:%S.%L",d),g,r,f={millisecond:15,second:12,minute:9,hour:6,
day:3},l="millisecond";for(r in u){if(a===u.week&&+b.dateFormat("%w",d)===k&&"00:00:00.000"===m.substr(6)){r="week";break}if(u[r]>a){r=l;break}if(f[r]&&m.substr(f[r])!=="01-01 00:00:00.000".substr(f[r]))break;"week"!==r&&(l=r)}r&&(g=e[r]);return g},getXDateFormat:function(a,d,k){d=d.dateTimeLabelFormats;var b=k&&k.closestPointRange;return(b?this.getDateFormat(b,a.x,k.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var b=a.series,e=b.tooltipOptions,
c=e.xDateFormat,m=b.xAxis,g=m&&"datetime"===m.options.type&&n(a.key),r=e[d+"Format"];g&&!c&&(c=this.getXDateFormat(a,e,m));g&&c&&B(a.point&&a.point.tooltipDateKeys||["key"],function(a){r=r.replace("{point."+a+"}","{point."+a+":"+c+"}")});return G(r,{point:a,series:b},this.chart.time)},bodyFormatter:function(a){return l(a,function(a){var b=a.series.tooltipOptions;return(b[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,b[(a.point.formatPrefix||"point")+"Format"])})}}})(L);
(function(a){var B=a.addEvent,H=a.attr,G=a.charts,n=a.color,l=a.css,f=a.defined,t=a.each,q=a.extend,v=a.find,u=a.fireEvent,b=a.isNumber,d=a.isObject,k=a.offset,e=a.pick,c=a.splat,m=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};m&&(a.tooltip=new m(a,b.tooltip),this.followTouchMove=e(b.tooltip.followTouchMove,!0));this.setDOMEvents()},
zoomOption:function(a){var b=this.chart,c=b.options.chart,g=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(g=e(c.pinchType,g));this.zoomX=a=/x/.test(g);this.zoomY=g=/y/.test(g);this.zoomHor=a&&!b||g&&b;this.zoomVert=g&&!b||a&&b;this.hasZoom=a||g},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=k(this.chart.container));return q(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b=
{xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,c){var e;t(a,function(a){var g=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(c,g);if((g=d(a,!0))&&!(g=!d(e,!0)))var g=e.distX-a.distX,m=e.dist-a.dist,r=(a.series.group&&a.series.group.zIndex)-(e.series.group&&e.series.group.zIndex),g=0<(0!==g&&b?g:0!==m?m:0!==r?r:e.series.index>
a.series.index?-1:1);g&&(e=a)});return e},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,g=c.xAxis,c=c.yAxis,d=e(a.clientX,a.plotX);if(g&&c)return b?{chartX:g.len+g.pos-d,chartY:c.len+c.pos-a.plotY}:{chartX:d+g.pos,chartY:a.plotY+c.pos}},getHoverData:function(b,c,m,k,f,l,A){var g,x=[],r=A&&A.isBoosting;k=!(!k||!b);A=c&&!c.stickyTracking?[c]:a.grep(m,function(a){return a.visible&&!(!f&&a.directTouch)&&
e(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(g=k?b:this.findNearestKDPoint(A,f,l))&&g.series;g&&(f&&!c.noSharedTooltip?(A=a.grep(m,function(a){return a.visible&&!(!f&&a.directTouch)&&e(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(A,function(a){var b=v(a.points,function(a){return a.x===g.x&&!a.isNull});d(b)&&(r&&(b=a.getPoint(b)),x.push(b))})):x.push(g));return{hoverPoint:g,hoverSeries:c,hoverPoints:x}},runPointActions:function(b,c){var g=this.chart,d=g.tooltip&&g.tooltip.options.enabled?
g.tooltip:void 0,m=d?d.shared:!1,r=c||g.hoverPoint,k=r&&r.series||g.hoverSeries,k=this.getHoverData(r,k,g.series,!!c||k&&k.directTouch&&this.isDirectTouch,m,b,{isBoosting:g.isBoosting}),f,r=k.hoverPoint;f=k.hoverPoints;c=(k=k.hoverSeries)&&k.tooltipOptions.followPointer;m=m&&k&&!k.noSharedTooltip;if(r&&(r!==g.hoverPoint||d&&d.isHidden)){t(g.hoverPoints||[],function(b){-1===a.inArray(b,f)&&b.setState()});t(f||[],function(a){a.setState("hover")});if(g.hoverSeries!==k)k.onMouseOver();g.hoverPoint&&g.hoverPoint.firePointEvent("mouseOut");
if(!r.series)return;r.firePointEvent("mouseOver");g.hoverPoints=f;g.hoverPoint=r;d&&d.refresh(m?f:r,b)}else c&&d&&!d.isHidden&&(r=d.getAnchor([{}],b),d.updatePosition({plotX:r[0],plotY:r[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(g.container.ownerDocument,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(g.axes,function(c){var g=e(c.crosshair.snap,!0),d=g?a.find(f,function(a){return a.series[c.coll]===c}):void 0;d||!g?c.drawCrosshair(b,d):c.hideCrosshair()})},
reset:function(a,b){var e=this.chart,g=e.hoverSeries,d=e.hoverPoint,m=e.hoverPoints,k=e.tooltip,r=k&&k.shared?m:d;a&&r&&t(c(r),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)k&&r&&(k.refresh(r),d&&(d.setState(d.state,!0),t(e.axes,function(a){a.crosshair&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();m&&t(m,function(a){a.setState()});if(g)g.onMouseOut();k&&k.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(e.axes,function(a){a.hideCrosshair()});this.hoverX=
e.hoverPoints=e.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,e;t(c.series,function(g){e=a||g.getPlotBox();g.xAxis&&g.xAxis.zoomEnabled&&g.group&&(g.group.attr(e),g.markerGroup&&(g.markerGroup.attr(e),g.markerGroup.clip(b?c.clipRect:null)),g.dataLabelsGroup&&g.dataLabelsGroup.attr(e))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,e=a.chartX,g=a.chartY,d=this.zoomHor,m=this.zoomVert,k=b.plotLeft,x=b.plotTop,f=b.plotWidth,l=b.plotHeight,q,F=this.selectionMarker,h=this.mouseDownX,p=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];F&&F.touch||(e<k?e=k:e>k+f&&(e=k+f),g<x?g=x:g>x+l&&(g=x+l),this.hasDragged=Math.sqrt(Math.pow(h-e,2)+Math.pow(p-g,2)),10<this.hasDragged&&(q=b.isInsidePlot(h-k,p-x),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&q&&!t&&!F&&(this.selectionMarker=F=b.renderer.rect(k,x,d?1:f,
m?1:l,0).attr({fill:c.selectionMarkerFill||n("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),F&&d&&(e-=h,F.attr({width:Math.abs(e),x:(0<e?0:e)+h})),F&&m&&(e=g-p,F.attr({height:Math.abs(e),y:(0<e?0:e)+p})),q&&!F&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var c=this,e=this.chart,g=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},m=this.selectionMarker,k=m.attr?m.attr("x"):m.x,D=m.attr?m.attr("y"):m.y,x=m.attr?m.attr("width"):
m.width,E=m.attr?m.attr("height"):m.height,C;if(this.hasDragged||g)t(e.axes,function(b){if(b.zoomEnabled&&f(b.min)&&(g||c[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var e=b.horiz,h="touchend"===a.type?b.minPixelPadding:0,m=b.toValue((e?k:D)+h),e=b.toValue((e?k+x:D+E)-h);d[b.coll].push({axis:b,min:Math.min(m,e),max:Math.max(m,e)});C=!0}}),C&&u(e,"selection",d,function(a){e.zoom(q(a,g?{animation:!1}:null))});b(e.index)&&(this.selectionMarker=this.selectionMarker.destroy());g&&this.scaleGroups()}e&&b(e.index)&&
(l(e.container,{cursor:e._cursor}),e.cancelClick=10<this.hasDragged,e.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){2!==a.button&&(a=this.normalize(a),this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;f(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-
c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=H(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,e=b.plotLeft,g=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",q(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(q(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-g)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,e=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};
c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=B(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=B(e,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=B(e,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(L);(function(a){var B=a.charts,H=a.each,G=a.extend,n=a.map,l=a.noop,f=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,f,l,n,b,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,l,n,b,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,f,l,n,
b,d)},pinchTranslateDirection:function(a,f,l,n,b,d,k,e){var c=this.chart,m=a?"x":"y",g=a?"X":"Y",r="chart"+g,q=a?"width":"height",t=c["plot"+(a?"Left":"Top")],y,v,A=e||1,D=c.inverted,x=c.bounds[a?"h":"v"],E=1===f.length,C=f[0][r],J=l[0][r],F=!E&&f[1][r],h=!E&&l[1][r],p;l=function(){!E&&20<Math.abs(C-F)&&(A=e||Math.abs(J-h)/Math.abs(C-F));v=(t-J)/A+C;y=c["plot"+(a?"Width":"Height")]/A};l();f=v;f<x.min?(f=x.min,p=!0):f+y>x.max&&(f=x.max-y,p=!0);p?(J-=.8*(J-k[m][0]),E||(h-=.8*(h-k[m][1])),l()):k[m]=
[J,h];D||(d[m]=v-t,d[q]=y);d=D?1/A:A;b[q]=y;b[m]=f;n[D?a?"scaleY":"scaleX":"scale"+g]=A;n["translate"+g]=d*t+(J-d*C)},pinch:function(a){var q=this,t=q.chart,u=q.pinchDown,b=a.touches,d=b.length,k=q.lastValidTouch,e=q.hasZoom,c=q.selectionMarker,m={},g=1===d&&(q.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||q.runChartClick),r={};1<d&&(q.initiated=!0);e&&q.initiated&&!g&&a.preventDefault();n(b,function(a){return q.normalize(a)});"touchstart"===a.type?(H(b,function(a,b){u[b]={chartX:a.chartX,
chartY:a.chartY}}),k.x=[u[0].chartX,u[1]&&u[1].chartX],k.y=[u[0].chartY,u[1]&&u[1].chartY],H(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(f(a.options.min,a.dataMin)),d=a.toPixels(f(a.options.max,a.dataMax)),g=Math.max(e,d);b.min=Math.min(a.pos,Math.min(e,d)-c);b.max=Math.max(a.pos+a.len,g+c)}}),q.res=!0):q.followTouchMove&&1===d?this.runPointActions(q.normalize(a)):u.length&&(c||(q.selectionMarker=c=G({destroy:l,touch:!0},t.plotBox)),q.pinchTranslate(u,
b,m,c,r,k),q.hasPinched=e,q.scaleGroups(m,r),q.res&&(q.res=!1,this.reset(!1,0)))},touch:function(l,q){var n=this.chart,t,b;if(n.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=n.index;1===l.touches.length?(l=this.normalize(l),(b=n.isInsidePlot(l.chartX-n.plotLeft,l.chartY-n.plotTop))&&!n.openMenu?(q&&this.runPointActions(l),"touchmove"===l.type&&(q=this.pinchDown,t=q[0]?4<=Math.sqrt(Math.pow(q[0].chartX-l.chartX,2)+Math.pow(q[0].chartY-l.chartY,2)):!1),f(t,
!0)&&this.pinch(l)):q&&this.reset()):2===l.touches.length&&this.pinch(l)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(f)}})})(L);(function(a){var B=a.addEvent,H=a.charts,G=a.css,n=a.doc,l=a.extend,f=a.noop,t=a.Pointer,q=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var b={},d=!!v.PointerEvent,k=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(b,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},e=function(b,e,d,l){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!H[a.hoverChartIndex]||(l(b),l=H[a.hoverChartIndex].pointer,l[e]({type:d,target:b.currentTarget,preventDefault:f,touches:k()}))};l(t.prototype,{onContainerPointerDown:function(a){e(a,"onContainerTouchStart","touchstart",function(a){b[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){e(a,"onContainerTouchMove","touchmove",function(a){b[a.pointerId]={pageX:a.pageX,pageY:a.pageY};b[a.pointerId].target||(b[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){e(a,"onDocumentTouchEnd","touchend",function(a){delete b[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(n,d?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,b,e){a.call(this,b,e);this.hasZoom&&G(b.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});u(t.prototype,"destroy",function(a){this.batchMSEvents(q);a.call(this)})}})(L);(function(a){var B=a.addEvent,H=a.css,G=a.discardElement,n=a.defined,l=a.each,f=a.isFirefox,t=a.marginNames,q=a.merge,
v=a.pick,u=a.setAnimation,b=a.stableSort,d=a.win,k=a.wrap;a.Legend=function(a,b){this.init(a,b)};a.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),B(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.itemHeight=
this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=[]},update:function(a,b){var c=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;v(b,!0)&&c.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var c=this.options,e=a.legendItem,d=a.legendLine,k=a.legendSymbol,f=this.itemHiddenStyle.color,c=b?c.itemStyle.color:f,l=b?a.color||f:f,q=a.options&&a.options.marker,A={fill:l};e&&e.css({fill:c,
color:c});d&&d.attr({stroke:l});k&&(q&&k.isMarker&&(A=a.pointAttribs(),b||(A.stroke=A.fill=f)),k.attr(A))},positionItem:function(a){var b=this.options,e=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,k=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?k:this.legendWidth-k-2*e-4,d);f&&(f.x=k,f.y=d)},destroyItem:function(a){var b=a.checkbox;l(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}l(this.getAllItems(),function(b){l(["legendItem","legendGroup"],a,b)});l("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b,d=this.clipHeight||this.legendHeight,g=this.titleHeight;a&&(b=a.translateY,l(this.allItems,function(c){var e=c.checkbox,m;e&&(m=b+g+e.y+(this.scrollOffset||0)+3,H(e,{left:a.translateX+c.checkboxOffset+e.x-20+"px",top:m+"px",display:m>b-6&&m<b+d-6?
"":"none"}))},this))},renderTitle:function(){var a=this.options,b=this.padding,d=a.title,g=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),g=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:g}));this.titleHeight=g},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b,this.chart.time):c.labelFormatter.call(b)})},
renderItem:function(a){var b=this.chart,e=b.renderer,d=this.options,k="horizontal"===d.layout,f=this.symbolWidth,l=d.symbolPadding,y=this.itemStyle,n=this.itemHiddenStyle,A=this.padding,D=k?v(d.itemDistance,20):0,x=!d.rtl,E=d.width,C=d.itemMarginBottom||0,J=this.itemMarginTop,F=a.legendItem,h=!a.series,p=!h&&a.series.drawLegendSymbol?a.series:a,t=p.options,u=this.createCheckboxForItem&&t&&t.showCheckbox,t=f+l+D+(u?20:0),N=d.useHTML,P=a.options.className;F||(a.legendGroup=e.g("legend-item").addClass("highcharts-"+
p.type+"-series highcharts-color-"+a.colorIndex+(P?" "+P:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=F=e.text("",x?f+l:-l,this.baseline||0,N).css(q(a.visible?y:n)).attr({align:x?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(f=y.fontSize,this.fontMetrics=e.fontMetrics(f,F),this.baseline=this.fontMetrics.f+3+J,F.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,p.drawLegendSymbol(this,a),this.setItemEvents&&
this.setItemEvents(a,F,N),u&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);y.width||F.css({width:(d.itemWidth||d.width||b.spacingBox.width)-t});this.setText(a);e=F.getBBox();y=a.checkboxOffset=d.itemWidth||a.legendItemWidth||e.width+t;this.itemHeight=e=Math.round(a.legendItemHeight||e.height||this.symbolHeight);k&&this.itemX-A+y>(E||b.spacingBox.width-2*A-d.x)&&(this.itemX=A,this.itemY+=J+this.lastLineHeight+C,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,y);
this.lastItemY=J+this.itemY+C;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];k?this.itemX+=y:(this.itemY+=J+e+C,this.lastLineHeight=e);this.offsetWidth=E||Math.max((k?this.itemX-A-(a.checkbox?0:D):y)+A,this.offsetWidth)},getAllItems:function(){var a=[];l(this.chart.series,function(b){var c=b&&b.options;b&&v(c.showInLegend,n(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});return a},getAlignment:function(){var a=
this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=this.chart,e=this.options,d=this.getAlignment();d&&l([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,m){g.test(d)&&!n(a[m])&&(c[t[m]]=Math.max(c[t[m]],c.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*e[m%2?"x":"y"]+v(e.margin,12)+b[m]+(0===m?c.titleOffset+c.options.title.margin:0)))})},render:function(){var a=this,c=a.chart,d=c.renderer,
g=a.group,k,f,n,y,t=a.box,A=a.options,D=a.padding;a.itemX=D;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;g||(a.group=g=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(g),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();k=a.getAllItems();b(k,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});A.reversed&&k.reverse();a.allItems=k;a.display=f=!!k.length;a.lastLineHeight=0;l(k,function(b){a.renderItem(b)});n=
(A.width||a.offsetWidth)+D;y=a.lastItemY+a.lastLineHeight+a.titleHeight;y=a.handleOverflow(y);y+=D;t||(a.box=t=d.rect().addClass("highcharts-legend-box").attr({r:A.borderRadius}).add(g),t.isNew=!0);t.attr({stroke:A.borderColor,"stroke-width":A.borderWidth||0,fill:A.backgroundColor||"none"}).shadow(A.shadow);0<n&&0<y&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:n,height:y},t.strokeWidth())),t.isNew=!1);t[f?"show":"hide"]();a.legendWidth=n;a.legendHeight=y;l(k,function(b){a.positionItem(b)});
f&&(d=c.spacingBox,/(lth|ct|rth)/.test(a.getAlignment())&&(d=q(d,{y:d.y+c.titleOffset+c.options.title.margin})),g.align(q(A,{width:n,height:y}),!0,d));c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,e=this.chart,d=e.renderer,k=this.options,f=k.y,q=this.padding,e=e.spacingBox.height+("top"===k.verticalAlign?-f:f)-q,f=k.maxHeight,y,n=this.clipRect,A=k.navigation,t=v(A.animation,!0),x=A.arrowSize||12,E=this.nav,C=this.pages,J,F=this.allItems,h=function(a){"number"===typeof a?
n.attr({height:a}):n&&(b.clipRect=n.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+q+"px,9999px,"+(q+a)+"px,0)":"auto")};"horizontal"!==k.layout||"middle"===k.verticalAlign||k.floating||(e/=2);f&&(e=Math.min(e,f));C.length=0;a>e&&!1!==A.enabled?(this.clipHeight=y=Math.max(e-20-this.titleHeight-q,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,l(F,function(a,b){var c=a._legendItemPos[1],e=Math.round(a.legendItem.getBBox().height),d=C.length;
if(!d||c-C[d-1]>y&&(J||c)!==C[d-1])C.push(J||c),d++;a.pageIx=d-1;J&&(F[b-1].pageIx=d-1);b===F.length-1&&c+e-C[d-1]>y&&(C.push(c),a.pageIx=d);c!==J&&(J=c)}),n||(n=b.clipRect=d.clipRect(0,q,9999,0),b.contentGroup.clip(n)),h(y),E||(this.nav=E=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,x,x).on("click",function(){b.scroll(-1,t)}).add(E),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(A.style).add(E),this.down=d.symbol("triangle-down",0,0,x,x).on("click",
function(){b.scroll(1,t)}).add(E)),b.scroll(0),a=e):E&&(h(),this.nav=E.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,d=c.length;a=this.currentPage+a;var e=this.clipHeight,k=this.options.navigation,f=this.pager,l=this.padding;a>d&&(a=d);0<a&&(void 0!==b&&u(b,this.chart),this.nav.attr({translateX:l,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
f.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?k.inactiveColor:k.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?k.inactiveColor:k.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-c[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin=
{drawRectangle:function(a,b){var c=a.symbolHeight,d=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-c)/2:0,a.baseline-c+1,d?c:a.symbolWidth,c,v(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,e=a.symbolWidth,k=a.symbolHeight,f=k/2,l=this.chart.renderer,y=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n;n={"stroke-width":b.lineWidth||0};b.dashStyle&&
(n.dashstyle=b.dashStyle);this.legendLine=l.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(n).add(y);d&&!1!==d.enabled&&(b=Math.min(v(d.radius,f),f),0===this.symbol.indexOf("url")&&(d=q(d,{width:k,height:k}),b=0),this.legendSymbol=d=l.symbol(this.symbol,e/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(y),d.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator.userAgent)||f)&&k(a.Legend.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)})})(L);
(function(a){var B=a.addEvent,H=a.animate,G=a.animObject,n=a.attr,l=a.doc,f=a.Axis,t=a.createElement,q=a.defaultOptions,v=a.discardElement,u=a.charts,b=a.css,d=a.defined,k=a.each,e=a.extend,c=a.find,m=a.fireEvent,g=a.grep,r=a.isNumber,z=a.isObject,K=a.isString,y=a.Legend,I=a.marginNames,A=a.merge,D=a.objectEach,x=a.Pointer,E=a.pick,C=a.pInt,J=a.removeEvent,F=a.seriesTypes,h=a.splat,p=a.syncTimeout,M=a.win,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new O(a,
b,c)};e(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(K(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,e,h=b.series,g=b.plotOptions||{};b.series=null;d=A(q,b);for(e in d.plotOptions)d.plotOptions[e].tooltip=g[e]&&A(g[e].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=h;this.userOptions=b;e=d.chart;h=e.events;this.margin=[];this.spacing=[];this.bounds=
{h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=e.showAxes;var k=this;k.index=u.length;u.push(k);a.chartCount++;h&&D(h,function(a,b){B(k,b,a)});k.xAxis=[];k.yAxis=[];k.pointCount=k.colorCounter=k.symbolCounter=0;k.firstRender()},initSeries:function(b){var c=this.options.chart;(c=F[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,
b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,d=this.series,h=this.pointer,g=this.legend,f=this.isDirtyLegend,p,x,l=this.hasCartesianSeries,E=this.isDirtyBox,r,C=this.renderer,q=C.isHidden(),y=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);q&&this.temporaryDisplay();
this.layOutTitles();for(b=d.length;b--;)if(r=d[b],r.options.stacking&&(p=!0,r.isDirty)){x=!0;break}if(x)for(b=d.length;b--;)r=d[b],r.options.stacking&&(r.isDirty=!0);k(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&m(a,"updatedData")});f&&g.options.enabled&&(g.render(),this.isDirtyLegend=!1);p&&this.getStacks();l&&k(c,function(a){a.updateNames();a.setScale()});this.getMargins();l&&(k(c,function(a){a.isDirty&&(E=!0)}),k(c,function(a){var b=
a.min+","+a.max;a.extKey!==b&&(a.extKey=b,y.push(function(){m(a,"afterSetExtremes",e(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(E||p)&&a.redraw()}));E&&this.drawChartBox();m(this,"predraw");k(d,function(a){(E||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);C.draw();m(this,"redraw");m(this,"render");q&&this.temporaryDisplay(!0);k(y,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d,e=this.series,h;d=c(this.axes,b)||
c(this.series,b);for(h=0;!d&&h<e.length;h++)d=c(e[h].points||[],b);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});k(c,function(a,b){a.index=b;a.isX=!0});k(b,function(a,b){a.index=b});c=c.concat(b);k(c,function(b){new f(a,b)})},getSelectedPoints:function(){var a=[];k(this.series,function(b){a=a.concat(g(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return g(this.series,function(a){return a.selected})},
setTitle:function(a,b,c){var d=this,e=d.options,h;h=e.title=A({style:{color:"#333333",fontSize:e.isStock?"16px":"18px"}},e.title,a);e=e.subtitle=A({style:{color:"#666666"}},e.subtitle,b);k([["title",a,h],["subtitle",b,e]],function(a,b){var c=a[0],e=d[c],h=a[1];a=a[2];e&&h&&(d[c]=e=e.destroy());a&&!e&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},
layOutTitles:function(a){var b=0,c,d=this.renderer,h=this.spacingBox;k(["title","subtitle"],function(a){var c=this[a],g=this.options[a];a="title"===a?-3:g.verticalAlign?0:b+2;var k;c&&(k=g.style.fontSize,k=d.fontMetrics(k,c).b,c.css({width:(g.width||h.width+g.widthAdjust)+"px"}).align(e({y:a+k},g),!1,"spacingBox"),g.floating||g.verticalAlign||(b=Math.ceil(b+c.getBBox(g.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&E(a,
!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,e=this.renderTo;d(c)||(this.containerWidth=a.getStyle(e,"width"));d(b)||(this.containerHeight=a.getStyle(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),
delete c.hcOrigStyle),c.hcOrigDetached&&(l.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){l.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,l.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;
if(c===l.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,h,g;b=this.renderTo;var k=a.uniqueKey(),m;b||(this.renderTo=b=d.renderTo);K(b)&&(this.renderTo=b=l.getElementById(b));b||a.error(13,!0);h=C(n(b,"data-highcharts-chart"));r(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();n(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();
h=this.chartWidth;g=this.chartHeight;m=e({position:"relative",overflow:"hidden",width:h+"px",height:g+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:k},m,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,g,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=
this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e&&!d(c[0])&&(this.plotTop=Math.max(this.plotTop,e+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&
a.getOffset()});k(I,function(e,h){d(c[h])||(a[e]+=b[h])});a.setChartSize()},reflow:function(b){var c=this,e=c.options.chart,h=c.renderTo,g=d(e.width)&&d(e.height),k=e.width||a.getStyle(h,"width"),e=e.height||a.getStyle(h,"height"),h=b?b.target:M;if(!g&&!c.isPrinting&&k&&e&&(h===M||h===l)){if(k!==c.containerWidth||e!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=p(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=k;c.containerHeight=e}},initReflow:function(){var a=
this,b;b=B(M,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(c,d,e){var h=this,g=h.renderer;h.isResizing+=1;a.setAnimation(e,h);h.oldChartHeight=h.chartHeight;h.oldChartWidth=h.chartWidth;void 0!==c&&(h.options.chart.width=c);void 0!==d&&(h.options.chart.height=d);h.getChartSize();c=g.globalAnimation;(c?H:b)(h.container,{width:h.chartWidth+"px",height:h.chartHeight+"px"},c);h.setChartSize(!0);g.setSize(h.chartWidth,h.chartHeight,e);k(h.axes,function(a){a.isDirty=!0;a.setScale()});
h.isDirtyLegend=!0;h.isDirtyBox=!0;h.layOutTitles();h.getMargins();h.redraw(e);h.oldChartHeight=null;m(h,"resize");p(function(){h&&m(h,"endResize",null,function(){--h.isResizing})},G(c).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,h=this.chartHeight,e=this.options.chart,g=this.spacing,m=this.clipOffset,p,f,x,l;this.plotLeft=p=Math.round(this.plotLeft);this.plotTop=f=Math.round(this.plotTop);this.plotWidth=x=Math.max(0,Math.round(d-p-this.marginRight));
this.plotHeight=l=Math.max(0,Math.round(h-f-this.marginBottom));this.plotSizeX=b?l:x;this.plotSizeY=b?x:l;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:h-g[0]-g[2]};this.plotBox=c.plotBox={x:p,y:f,width:x,height:l};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,m[3])/2);c=Math.ceil(Math.max(d,m[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,m[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(d,m[2])/2-c))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var d=b[c],h=z(d)?d:[d,d,d,d];k(["Top","Right","Bottom","Left"],function(d,e){a[c][e]=E(b[c+d],h[e])})});k(I,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,h=this.chartBackground,
e=this.plotBackground,g=this.plotBorder,k,m=this.plotBGImage,p=a.backgroundColor,f=a.plotBackgroundColor,x=a.plotBackgroundImage,l,E=this.plotLeft,r=this.plotTop,C=this.plotWidth,q=this.plotHeight,y=this.plotBox,F=this.clipRect,A=this.clipBox,n="animate";h||(this.chartBackground=h=b.rect().addClass("highcharts-background").add(),n="attr");k=a.borderWidth||0;l=k+(a.shadow?8:0);p={fill:p||"none"};if(k||h["stroke-width"])p.stroke=a.borderColor,p["stroke-width"]=k;h.attr(p).shadow(a.shadow);h[n]({x:l/
2,y:l/2,width:c-l-k%2,height:d-l-k%2,r:a.borderRadius});n="animate";e||(n="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[n](y);e.attr({fill:f||"none"}).shadow(a.plotShadow);x&&(m?m.animate(y):this.plotBGImage=b.image(x,E,r,C,q).add());F?F.animate({width:A.width,height:A.height}):this.clipRect=b.clipRect(A);n="animate";g||(n="attr",this.plotBorder=g=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());g.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});g[n](g.crisp({x:E,y:r,width:C,height:q},-g.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,h,e;k(["inverted","angular","polar"],function(g){c=F[b.type||b.defaultSeriesType];e=b[g]||c&&c.prototype[g];for(h=d&&d.length;!e&&h--;)(c=F[d[h].type])&&c.prototype[g]&&(e=!0);a[g]=e})},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=0});k(b,function(b){var c=b.options.linkedTo;K(c)&&(c=":previous"===
c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){k(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&k(b.items,function(c){var d=e(b.style,c.style),h=C(d.left)+a.plotLeft,g=C(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,h,g).attr({zIndex:2}).css(d).add()})},render:function(){var a=
this.axes,b=this.renderer,c=this.options,d,h,e;this.setTitle();this.legend=new y(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);k(a,function(a){a.setScale()});this.getAxisMargins();h=1.1<c/this.plotWidth;e=1.05<d/this.plotHeight;if(h||e)k(a,function(a){(a.horiz&&h||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&
a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=A(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,h=b.container,e,g=h&&h.parentNode;m(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");J(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});h&&(h.innerHTML="",J(h),g&&v(h));D(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();m(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();k(b.series||[],function(b){a.initSeries(b)});a.linkSeries();m(a,"beforeRender");x&&(a.pointer=new x(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){k([this.callback].concat(this.callbacks),
function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);m(this,"load");m(this,"render");d(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(L);(function(a){var B,H=a.each,G=a.extend,n=a.erase,l=a.fireEvent,f=a.format,t=a.isArray,q=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=B=function(){};a.Point.prototype={init:function(a,d,k){this.series=a;this.color=a.color;this.applyOptions(d,k);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=
this.color||d[a.colorCounter],d=d.length,k=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):k=a.colorIndex;this.colorIndex=v(this.colorIndex,k);a.chart.pointCount++;return this},applyOptions:function(a,d){var b=this.series,e=b.options.pointValKey||b.pointValKey;a=B.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;e&&(this.y=this[e]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!q(this.y,!0));
this.selected&&(this.state="select");"name"in this&&void 0===d&&b.xAxis&&b.xAxis.hasNames&&(this.x=b.xAxis.nameToX(this));void 0===this.x&&b&&(this.x=void 0===d?b.autoIncrement(this):d);return this},optionsToObject:function(a){var b={},k=this.series,e=k.options.keys,c=e||k.pointArrayMap||["y"],m=c.length,g=0,f=0;if(q(a)||null===a)b[c[0]]=a;else if(t(a))for(!e&&a.length>m&&(k=typeof a[0],"string"===k?b.name=a[0]:"number"===k&&(b.x=a[0]),g++);f<m;)e&&void 0===a[g]||(b[c[f]]=a[g]),g++,f++;else"object"===
typeof a&&(b=a,a.dataLabels&&(k._hasPointLabels=!0),a.marker&&(k._hasPointMarkers=!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=
this.series,d=a.zones,a=a.zoneAxis||"y",k=0,e;for(e=d[k];this[a]>=e.value;)e=d[++k];e&&e.color&&!this.options.color&&(this.color=e.color);return e},destroy:function(){var a=this.series.chart,d=a.hoverPoints,k;a.pointCount--;d&&(this.setState(),n(d,this),d.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(k in this)this[k]=null},destroyElements:function(){for(var a=["graphic",
"dataLabel","dataLabelUpper","connector","shadowGroup"],d,k=6;k--;)d=a[k],this[d]&&(this[d]=this[d].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,k=b.tooltipOptions,e=v(k.valueDecimals,""),c=k.valuePrefix||"",m=k.valueSuffix||"";H(b.pointArrayMap||["y"],function(b){b=
"{point."+b;if(c||m)a=a.replace(b+"}",c+b+"}"+m);a=a.replace(b+"}",b+":,."+e+"f}")});return f(a,{point:this,series:this.series},b.chart.time)},firePointEvent:function(a,d,k){var b=this,c=this.series.options;(c.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(k=function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});l(this,a,d,k)},visible:!0}})(L);(function(a){var B=a.addEvent,H=a.animObject,G=a.arrayMax,n=a.arrayMin,
l=a.correctFloat,f=a.defaultOptions,t=a.defaultPlotOptions,q=a.defined,v=a.each,u=a.erase,b=a.extend,d=a.fireEvent,k=a.grep,e=a.isArray,c=a.isNumber,m=a.isString,g=a.merge,r=a.objectEach,z=a.pick,K=a.removeEvent,y=a.splat,I=a.SVGElement,A=a.syncTimeout,D=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},
enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},
select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,c){var d=this,e,g=a.series,h;d.chart=a;d.options=c=d.setOptions(c);d.linkedSeries=[];d.bindAxes();b(d,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});e=c.events;r(e,function(a,b){B(d,b,a)});if(e&&e.click||c.point&&c.point.events&&
c.point.events.click||c.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();v(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(c.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(h=g[g.length-1]);d._i=z(h&&h._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,d;if(c(b)){for(d=a.length;d--;)if(b>=z(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return z(d,a.length-1)},bindAxes:function(){var b=
this,c=b.options,d=b.chart,e;v(b.axisTypes||[],function(g){v(d[g],function(a){e=a.options;if(c[g]===e.index||void 0!==c[g]&&c[g]===e.id||void 0===c[g]&&0===e.index)b.insert(a.series),b[g]=a,a.isDirty=!0});b[g]||b.optionalAxis===g||a.error(18,!0)})},updateParallelArrays:function(a,b){var d=a.series,e=arguments,g=c(b)?function(c){var e="y"===c&&d.toYData?d.toYData(a):a[c];d[c+"Data"][b]=e}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(e,2))};v(d.parallelArrays,g)},autoIncrement:function(){var a=
this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=z(b,a.pointStart,0);this.pointInterval=c=z(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,e=(b.userOptions||{}).plotOptions||{},h=d[this.type];this.userOptions=
a;b=g(h,d.series,a);this.tooltipOptions=g(f.tooltip,f.plotOptions.series&&f.plotOptions.series.tooltip,f.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=z(a.stickyTracking,e[this.type]&&e[this.type].stickyTracking,e.series&&e.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===h.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&
!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&q(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getName:function(){return this.name||"Series "+(this.index+1)},getCyclic:function(a,b,c){var d,e=this.chart,h=this.userOptions,g=a+"Index",k=a+"Counter",m=c?c.length:z(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=z(h[g],h["_"+g]),
q(d)||(e.series.length||(e[k]=0),h["_"+g]=d=e[k]%m,e[k]+=1),c&&(b=c[d]));void 0!==d&&(this[g]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(b,d,g,k){var f=this,h=f.points,p=h&&h.length||0,l,x=f.options,r=
f.chart,E=null,q=f.xAxis,y=x.turboThreshold,C=this.xData,n=this.yData,A=(l=f.pointArrayMap)&&l.length;b=b||[];l=b.length;d=z(d,!0);if(!1!==k&&l&&p===l&&!f.cropped&&!f.hasGroupedData&&f.visible)v(b,function(a,b){h[b].update&&a!==x.data[b]&&h[b].update(a,!1,null,!1)});else{f.xIncrement=null;f.colorCounter=0;v(this.parallelArrays,function(a){f[a+"Data"].length=0});if(y&&l>y){for(g=0;null===E&&g<l;)E=b[g],g++;if(c(E))for(g=0;g<l;g++)C[g]=this.autoIncrement(),n[g]=b[g];else if(e(E))if(A)for(g=0;g<l;g++)E=
b[g],C[g]=E[0],n[g]=E.slice(1,A+1);else for(g=0;g<l;g++)E=b[g],C[g]=E[0],n[g]=E[1];else a.error(12)}else for(g=0;g<l;g++)void 0!==b[g]&&(E={series:f},f.pointClass.prototype.applyOptions.apply(E,[b[g]]),f.updateParallelArrays(E,g));n&&m(n[0])&&a.error(14,!0);f.data=[];f.options.data=f.userOptions.data=b;for(g=p;g--;)h[g]&&h[g].destroy&&h[g].destroy();q&&(q.minRange=q.userMinRange);f.isDirty=r.isDirtyBox=!0;f.isDirtyData=!!h;g=!1}"point"===x.legendType&&(this.processData(),this.generatePoints());d&&
r.redraw(g)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,g;g=0;var h,k,f=this.xAxis,m,l=this.options;m=l.cropThreshold;var x=this.getExtremesFromAll||l.getExtremesFromAll,r=this.isCartesian,l=f&&f.val2lin,q=f&&f.isLog,y=this.requireSorting,n,A;if(r&&!this.isDirty&&!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),n=b.min,A=b.max);if(r&&this.sorted&&!x&&(!m||e>m||this.forceCrop))if(c[e-1]<n||c[0]>A)c=[],d=[];else if(c[0]<n||c[e-1]>A)g=this.cropData(this.xData,
this.yData,n,A),c=g.xData,d=g.yData,g=g.start,h=!0;for(m=c.length||1;--m;)e=q?l(c[m])-l(c[m-1]):c[m]-c[m-1],0<e&&(void 0===k||e<k)?k=e:0>e&&y&&(a.error(15),y=!1);this.cropped=h;this.cropStart=g;this.processedXData=c;this.processedYData=d;this.closestPointRange=k},cropData:function(a,b,c,d){var e=a.length,h=0,g=e,k=z(this.cropShoulder,1),f;for(f=0;f<e;f++)if(a[f]>=c){h=Math.max(0,f-k);break}for(c=f;c<e;c++)if(a[c]>d){g=c+k;break}return{xData:a.slice(h,g),yData:b.slice(h,g),start:h,end:g}},generatePoints:function(){var a=
this.options,b=a.data,c=this.data,d,e=this.processedXData,h=this.processedYData,g=this.pointClass,k=e.length,f=this.cropStart||0,m,l=this.hasGroupedData,a=a.keys,r,q=[],n;c||l||(c=[],c.length=b.length,c=this.data=c);a&&l&&(this.options.keys=!1);for(n=0;n<k;n++)m=f+n,l?(r=(new g).init(this,[e[n]].concat(y(h[n]))),r.dataGroup=this.groupMap[n]):(r=c[m])||void 0===b[m]||(c[m]=r=(new g).init(this,b[m],e[n])),r&&(r.index=m,q[n]=r);this.options.keys=a;if(c&&(k!==(d=c.length)||l))for(n=0;n<d;n++)n!==f||l||
(n+=k),c[n]&&(c[n].destroyElements(),c[n].plotX=void 0);this.data=c;this.points=q},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,g,k=[],h=0;g=this.xAxis.getExtremes();var f=g.min,m=g.max,l,x,r,q;a=a||this.stackedYData||this.processedYData||[];g=a.length;for(q=0;q<g;q++)if(x=d[q],r=a[q],l=(c(r,!0)||e(r))&&(!b.positiveValuesOnly||r.length||0<r),x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[q+1]||x)>=f&&(d[q-1]||x)<=m,l&&x)if(l=r.length)for(;l--;)"number"===
typeof r[l]&&(k[h++]=r[l]);else k[h++]=r;this.dataMin=n(k);this.dataMax=G(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,e=d.categories,g=this.yAxis,h=this.points,k=h.length,f=!!this.modifyValue,m=a.pointPlacement,r="between"===m||c(m),n=a.threshold,y=a.startFromThreshold?n:0,A,t,D,v,u=Number.MAX_VALUE;"between"===m&&(m=.5);c(m)&&(m*=z(a.pointRange||d.pointRange));for(a=0;a<k;a++){var I=h[a],K=I.x,B=I.y;t=I.low;var G=
b&&g.stacks[(this.negStacks&&B<(y?0:n)?"-":"")+this.stackKey],H;g.positiveValuesOnly&&null!==B&&0>=B&&(I.isNull=!0);I.plotX=A=l(Math.min(Math.max(-1E5,d.translate(K,0,0,0,1,m,"flags"===this.type)),1E5));b&&this.visible&&!I.isNull&&G&&G[K]&&(v=this.getStackIndicator(v,K,this.index),H=G[K],B=H.points[v.key],t=B[0],B=B[1],t===y&&v.key===G[K].base&&(t=z(n,g.min)),g.positiveValuesOnly&&0>=t&&(t=null),I.total=I.stackTotal=H.total,I.percentage=H.total&&I.y/H.total*100,I.stackY=B,H.setOffset(this.pointXOffset||
0,this.barW||0));I.yBottom=q(t)?Math.min(Math.max(-1E5,g.translate(t,0,1,0,1)),1E5):null;f&&(B=this.modifyValue(B,I));I.plotY=t="number"===typeof B&&Infinity!==B?Math.min(Math.max(-1E5,g.translate(B,0,1,0,1)),1E5):void 0;I.isInside=void 0!==t&&0<=t&&t<=g.len&&0<=A&&A<=d.len;I.clientX=r?l(d.translate(K,0,0,0,1,m)):A;I.negative=I.y<(n||0);I.category=e&&void 0!==e[I.x]?e[I.x]:I.x;I.isNull||(void 0!==D&&(u=Math.min(u,Math.abs(A-D))),D=A);I.zone=this.zones.length&&I.getZone()}this.closestPointRangePx=
u},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,h=this.clipBox,g=h||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(),m=b[k],f=b[k+"m"];m||(a&&(g.width=0,e&&(g.x=b.plotSizeX),b[k+"m"]=f=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:
b.chartHeight)),b[k]=m=d.clipRect(g),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==c.clip&&(this.group.clip(a||h?m:b.clipRect),this.markerGroup.clip(f),this.sharedClipKey=k);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&k&&b[k]&&(h||(b[k]=b[k].destroy()),b[k+"m"]&&(b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,c=H(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&
a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();d(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,e,h,g=this.options.marker,k,m,f,l=this[this.specialGroup]||this.markerGroup,r,q=z(g.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=g.enabledThreshold*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=
a[c],h=d.graphic,k=d.marker||{},m=!!d.marker,e=q&&void 0===k.enabled||k.enabled,f=d.isInside,e&&!d.isNull?(e=z(k.symbol,this.symbol),r=this.markerAttribs(d,d.selected&&"select"),h?h[f?"show":"hide"](!0).animate(r):f&&(0<r.width||d.hasImage)&&(d.graphic=h=b.renderer.symbol(e,r.x,r.y,r.width,r.height,m?k:g).add(l)),h&&h.attr(this.pointAttribs(d,d.selected&&"select")),h&&h.addClass(d.getClassName(),!0)):h&&(d.graphic=h.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},
e=d.symbol||c.symbol,h=z(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],h=z(b&&b.radius,c&&c.radius,h+(c&&c.radiusPlus||0)));a.hasImage=e&&0===e.indexOf("url");a.hasImage&&(h=0);a={x:Math.floor(a.plotX)-h,y:a.plotY-h};h&&(a.width=a.height=2*h);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},h=this.color,g=d&&d.color,k=a&&a.color,d=z(e.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;h=g||a||k||h;a=e.fillColor||c.fillColor||h;h=e.lineColor||
c.lineColor||h;b&&(c=c.states[b],b=e.states&&e.states[b]||{},d=z(b.lineWidth,c.lineWidth,d+z(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,h=b.lineColor||c.lineColor||h);return{stroke:h,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(D.navigator.userAgent),e,g,h=a.data||[],k,m;d(a,"destroy");K(a);v(a.axisTypes||[],function(b){(m=a[b])&&m.series&&(u(m.series,a),m.isDirty=m.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);
for(g=h.length;g--;)(k=h[g])&&k.destroy&&k.destroy();a.points=null;clearTimeout(a.animationTimeout);r(a,function(a,b){a instanceof I&&!a.survive&&(e=c&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=null);u(b.series,a);b.orderSeries();r(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,e=d.options,h=e.step,g,k=[],m=[],f;a=a||d.points;(g=a.reversed)&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&g&&(h=4-h);!e.connectNulls||b||c||(a=this.getValidPoints(a));
v(a,function(g,l){var p=g.plotX,r=g.plotY,x=a[l-1];(g.leftCliff||x&&x.rightCliff)&&!c&&(f=!0);g.isNull&&!q(b)&&0<l?f=!e.connectNulls:g.isNull&&!b?f=!0:(0===l||f?l=["M",g.plotX,g.plotY]:d.getPointSpline?l=d.getPointSpline(a,g,l):h?(l=1===h?["L",x.plotX,r]:2===h?["L",(x.plotX+p)/2,x.plotY,"L",(x.plotX+p)/2,r]:["L",p,x.plotY],l.push("L",p,r)):l=["L",p,r],m.push(g.x),h&&m.push(g.x),k.push.apply(k,l),f=!1)});k.xMap=m;return d.graphPath=k},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||
this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];v(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});v(d,function(d,e){var h=d[0],g=a[h];g?(g.endX=a.preventGraphAnimation?null:c.xMap,g.animate({d:c})):c.length&&(a[h]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),g={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
a.color||"none"},d[3]?g.dashstyle=d[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[h].attr(g).shadow(2>e&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,h,g=this.clips||[],k,m=this.graph,f=this.area,l=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],q,n,y=b.inverted,A,t,D,u,I=!1;d.length&&(m||f)&&r&&void 0!==r.min&&(n=r.reversed,A=r.horiz,m&&m.hide(),f&&f.hide(),
q=r.getExtremes(),v(d,function(d,p){e=n?A?b.plotWidth:0:A?0:r.toPixels(q.min);e=Math.min(Math.max(z(h,e),0),l);h=Math.min(Math.max(Math.round(r.toPixels(z(d.value,q.max),!0)),0),l);I&&(e=h=r.toPixels(q.max));t=Math.abs(e-h);D=Math.min(e,h);u=Math.max(e,h);r.isXAxis?(k={x:y?u:D,y:0,width:t,height:l},A||(k.x=b.plotHeight-k.x)):(k={x:0,y:y?u:D,width:l,height:t},A&&(k.y=b.plotWidth-k.y));y&&c.isVML&&(k=r.isXAxis?{x:0,y:n?D:u,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,
height:b.chartHeight});g[p]?g[p].animate(k):(g[p]=c.clipRect(k),m&&a["zone-graph-"+p].clip(g[p]),f&&a["zone-area-"+p].clip(g[p]));I=d.value>q.max}),this.clips=g)},invertGroups:function(a){function b(){v(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=B(d,"resize",b),B(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,e){var g=
this[a],k=!g;k&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(q(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&H(d.animation).duration,g=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,f=b.seriesGroup,l=b.inverted;c=a.plotGroup("group","series",g,k,f);a.markerGroup=a.plotGroup("markerGroup","markers",g,k,f);e&&a.animate(!0);c.inverted=a.isCartesian?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);e&&a.animate();m||(a.animationTimeout=A(function(){a.afterAnimate()},e));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:z(d&&d.left,a.plotLeft),translateY:z(e&&e.top,
a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,e){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[d%e],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),d+1,e),right:a(c.slice(h+
1),d+1,e)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;A(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,h,m){var f=b.point,l=d.kdAxisArray[h%m],p,r,n=f;r=q(a[e])&&q(f[e])?Math.pow(a[e]-f[e],2):null;p=q(a[g])&&q(f[g])?Math.pow(a[g]-f[g],2):null;p=(r||0)+(p||0);f.dist=q(p)?Math.sqrt(p):Number.MAX_VALUE;f.distX=q(r)?Math.sqrt(r):Number.MAX_VALUE;
l=a[l]-f[l];p=0>l?"left":"right";r=0>l?"right":"left";b[p]&&(p=c(a,b[p],h+1,m),n=p[k]<n[k]?p:f);b[r]&&Math.sqrt(l*l)<n[k]&&(a=c(a,b[r],h+1,m),n=a[k]<n[k]?a:n);return n}var d=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],k=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(L);(function(a){var B=a.Axis,H=a.Chart,G=a.correctFloat,n=a.defined,l=a.destroyObjectProperties,f=a.each,t=
a.format,q=a.objectEach,v=a.pick,u=a.Series;a.StackItem=function(a,d,k,e,c){var b=a.chart.inverted;this.axis=a;this.isNegative=k;this.options=d;this.x=e;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:d.align||(b?k?"left":"right":"center"),verticalAlign:d.verticalAlign||(b?"middle":k?"bottom":"top"),y:v(d.y,b?4:k?14:-6),x:v(d.x,b?k?-6:6:0)};this.textAlign=d.textAlign||(b?k?"right":"left":"center")};a.StackItem.prototype={destroy:function(){l(this,
this.axis)},render:function(a){var b=this.axis.chart,k=this.options,e=k.format,e=e?t(e,this,b.time):k.formatter.call(this);this.label?this.label.attr({text:e,visibility:"hidden"}):this.label=b.renderer.text(e,null,null,k.useHTML).css(k.style).attr({align:this.textAlign,rotation:k.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,d){var b=this.axis,e=b.chart,c=b.translate(b.usePercentage?100:this.total,0,0,0,1),b=b.translate(0),b=Math.abs(c-b);a=e.xAxis[0].translate(this.x)+a;c=this.getStackBox(e,
this,a,c,d,b);if(d=this.label)d.align(this.alignOptions,null,c),c=d.alignAttr,d[!1===this.options.crop||e.isInsidePlot(c.x,c.y)?"show":"hide"](!0)},getStackBox:function(a,d,k,e,c,m){var b=d.axis.reversed,f=a.inverted;a=a.plotHeight;d=d.isNegative&&!b||!d.isNegative&&b;return{x:f?d?e:e-m:k,y:f?a-k-c:d?a-e-m:a-e,width:f?m:c,height:f?c:m}}};H.prototype.getStacks=function(){var a=this;f(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});f(a.series,function(b){!b.options.stacking||
!0!==b.visible&&!1!==a.options.chart.ignoreHiddenSeries||(b.stackKey=b.type+v(b.options.stack,""))})};B.prototype.buildStacks=function(){var a=this.series,d=v(this.options.reversedStacks,!0),k=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=k;e--;)a[d?e:k-e-1].setStackedPoints();for(e=0;e<k;e++)a[e].modifyStacks()}};B.prototype.renderStackTotals=function(){var a=this.chart,d=a.renderer,k=this.stacks,e=this.stackTotalGroup;e||(this.stackTotalGroup=e=d.g("stack-labels").attr({visibility:"visible",
zIndex:6}).add());e.translate(a.plotLeft,a.plotTop);q(k,function(a){q(a,function(a){a.render(e)})})};B.prototype.resetStacks=function(){var a=this,d=a.stacks;a.isXAxis||q(d,function(b){q(b,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete b[c]):(d.total=null,d.cumulative=null)})})};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),q(a,function(a){q(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&
(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var b=this.processedXData,d=this.processedYData,k=[],e=d.length,c=this.options,f=c.threshold,g=v(c.startFromThreshold&&f,0),l=c.stack,c=c.stacking,q=this.stackKey,t="-"+q,y=this.negStacks,u=this.yAxis,A=u.stacks,D=u.oldStacks,x,E,C,J,F,h,p;u.stacksTouched+=1;for(F=0;F<e;F++)h=b[F],p=d[F],x=this.getStackIndicator(x,h,this.index),J=x.key,C=(E=y&&p<(g?0:f))?t:q,A[C]||(A[C]={}),A[C][h]||(D[C]&&D[C][h]?(A[C][h]=D[C][h],A[C][h].total=
null):A[C][h]=new a.StackItem(u,u.options.stackLabels,E,h,l)),C=A[C][h],null!==p?(C.points[J]=C.points[this.index]=[v(C.cumulative,g)],n(C.cumulative)||(C.base=J),C.touched=u.stacksTouched,0<x.index&&!1===this.singleStacks&&(C.points[J][0]=C.points[this.index+","+h+",0"][0])):C.points[J]=C.points[this.index]=null,"percent"===c?(E=E?q:t,y&&A[E]&&A[E][h]?(E=A[E][h],C.total=E.total=Math.max(E.total,C.total)+Math.abs(p)||0):C.total=G(C.total+(Math.abs(p)||0))):C.total=G(C.total+(p||0)),C.cumulative=v(C.cumulative,
g)+(p||0),null!==p&&(C.points[J].push(C.cumulative),k[F]=C.cumulative);"percent"===c&&(u.usePercentage=!0);this.stackedYData=k;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,d=a.stackKey,k=a.yAxis.stacks,e=a.processedXData,c,m=a.options.stacking;a[m+"Stacker"]&&f([d,"-"+d],function(b){for(var d=e.length,g,f;d--;)if(g=e[d],c=a.getStackIndicator(c,g,a.index,b),f=(g=k[b]&&k[b][g])&&g.points[c.key])a[m+"Stacker"](f,g,d)})};u.prototype.percentStacker=function(a,d,k){d=d.total?100/d.total:
0;a[0]=G(a[0]*d);a[1]=G(a[1]*d);this.stackedYData[k]=a[1]};u.prototype.getStackIndicator=function(a,d,k,e){!n(a)||a.x!==d||e&&a.key!==e?a={x:d,index:0,key:e}:a.index++;a.key=[k,d,a.index].join();return a}})(L);(function(a){var B=a.addEvent,H=a.animate,G=a.Axis,n=a.createElement,l=a.css,f=a.defined,t=a.each,q=a.erase,v=a.extend,u=a.fireEvent,b=a.inArray,d=a.isNumber,k=a.isObject,e=a.isArray,c=a.merge,m=a.objectEach,g=a.pick,r=a.Point,z=a.Series,K=a.seriesTypes,y=a.setAnimation,I=a.splat;v(a.Chart.prototype,
{addSeries:function(a,b,c){var d,e=this;a&&(b=g(b,!0),u(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,d,e){var k=b?"xAxis":"yAxis",f=this.options;a=c(a,{index:this[k].length,isX:b});b=new G(this,a);f[k]=I(f[k]||{});f[k].push(a);g(d,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,g=function(){d&&l(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+
"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=n("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=n("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",g));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;l(d,v(e.style,{zIndex:10}));l(b.loadingSpan,e.labelStyle);b.loadingShown||(l(d,{opacity:0,display:""}),H(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;g()},hideLoading:function(){var a=
this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",H(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){l(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,e,k){var l=this,r={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},q=a.chart,n,h,p=[];if(q){c(!0,l.options.chart,q);"className"in q&&l.setClassName(q.className);if("inverted"in q||"polar"in q)l.propFromSeries(),n=!0;"alignTicks"in q&&(n=!0);m(q,function(a,c){-1!==b("chart."+c,l.propsRequireUpdateSeries)&&(h=!0);-1!==b(c,l.propsRequireDirtyBox)&&
(l.isDirtyBox=!0)});"style"in q&&l.renderer.setStyle(q.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,a.plotOptions);m(a,function(a,c){if(l[c]&&"function"===typeof l[c].update)l[c].update(a,!1);else if("function"===typeof l[r[c]])l[r[c]](a);"chart"!==c&&-1!==b(c,l.propsRequireUpdateSeries)&&(h=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(I(a[b]),function(a,c){(c=f(a.id)&&l.get(a.id)||l[b][c])&&c.coll===b&&(c.update(a,
!1),k&&(c.touched=!0));if(!c&&k)if("series"===b)l.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)l.addAxis(a,"xAxis"===b,!1).touched=!0}),k&&t(l[b],function(a){a.touched?delete a.touched:p.push(a)}))});t(p,function(a){a.remove(!1)});n&&t(l.axes,function(a){a.update({},!1)});h&&t(l.series,function(a){a.update({},!1)});a.loading&&c(!0,l.options.loading,a.loading);n=q&&q.width;q=q&&q.height;d(n)&&n!==l.chartWidth||d(q)&&q!==l.chartHeight?l.setSize(n,q):g(e,!0)&&l.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});v(r.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);null===f.y&&h&&(f.graphic=h.destroy());k(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=h.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()),f.connector&&(f.connector=f.connector.destroy()));l=f.index;m.updateParallelArrays(f,l);q.data[l]=k(q.data[l],!0)||k(a,!0)?f.options:a;m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(r.isDirtyBox=!0);"point"===q.legendType&&
(r.isDirtyLegend=!0);b&&r.redraw(c)}var f=this,m=f.series,h=f.graphic,l,r=m.chart,q=m.options;b=g(b,!0);!1===d?e():f.firePointEvent("update",{options:a},e)},remove:function(a,c){this.series.removePoint(b(this,this.series.data),a,c)}});v(z.prototype,{addPoint:function(a,b,c,d){var e=this.options,k=this.data,f=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,m=e.data,l,r,q=this.xData,n,y;b=g(b,!0);l={series:this};this.pointClass.prototype.applyOptions.apply(l,[a]);y=l.x;n=q.length;if(this.requireSorting&&
y<q[n-1])for(r=!0;n&&q[n-1]>y;)n--;this.updateParallelArrays(l,"splice",n,0,0);this.updateParallelArrays(l,n);h&&l.name&&(h[y]=l.name);m.splice(n,0,a);r&&(this.data.splice(n,0,null),this.processData());"point"===e.legendType&&this.generatePoints();c&&(k[0]&&k[0].remove?k[0].remove(!1):(k.shift(),this.updateParallelArrays(l,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&f.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,k=e[a],f=d.points,h=d.chart,m=function(){f&&f.length===e.length&&
f.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(k||{series:d},"splice",a,1);k&&k.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};y(c,h);b=g(b,!0);k?k.firePointEvent("remove",null,m):m()},remove:function(a,b,c){function d(){e.destroy();k.isDirtyLegend=k.isDirtyBox=!0;k.linkSeries();g(a,!0)&&k.redraw(b)}var e=this,k=e.chart;!1!==c?u(e,"remove",null,d):d()},update:function(a,b){var d=this,e=d.chart,k=d.userOptions,f=d.oldType||d.type,m=a.type||k.type||e.options.chart.type,
h=K[f].prototype,l,r=["group","markerGroup","dataLabelsGroup"],q=["navigatorSeries","baseSeries"],n=d.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);q=r.concat(q);t(q,function(a){q[a]=d[a];delete d[a]});a=c(k,n,{index:d.index,pointStart:d.xData[0]},{data:d.options.data},a);d.remove(!1,null,!1);for(l in h)d[l]=void 0;v(d,K[m||f].prototype);t(q,function(a){d[a]=q[a]});d.init(e,a);a.zIndex!==k.zIndex&&t(r,function(b){d[b]&&d[b].attr({zIndex:a.zIndex})});
d.oldType=f;e.linkSeries();g(b,!0)&&e.redraw(!1)}});v(G.prototype,{update:function(a,b){var d=this.chart;a=d.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(d,v(a,{events:void 0}));d.isDirtyBox=!0;g(b,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,k=d.length;k--;)d[k]&&d[k].remove(!1);q(b.axes,this);q(b[c],this);e(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];t(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;g(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(L);(function(a){var B=a.color,H=a.each,G=a.map,n=a.pick,l=a.Series,f=a.seriesType;f("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var l=[],t=[],u=this.xAxis,b=this.yAxis,d=b.stacks[this.stackKey],k={},e=this.index,c=b.series,m=c.length,g,r=n(b.options.reversedStacks,!0)?1:-1,z;f=f||this.points;
if(this.options.stacking){for(z=0;z<f.length;z++)f[z].leftNull=f[z].rightNull=null,k[f[z].x]=f[z];a.objectEach(d,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});g=G(c,function(){return this.visible});H(t,function(a,c){var f=0,q,n;if(k[a]&&!k[a].isNull)l.push(k[a]),H([-1,1],function(b){var f=1===b?"rightNull":"leftNull",l=0,y=d[t[c+b]];if(y)for(z=e;0<=z&&z<m;)q=y.points[z],q||(z===e?k[a][f]=!0:g[z]&&(n=d[a].points[z])&&(l-=n[1]-n[0])),z+=r;k[a][1===b?"rightCliff":"leftCliff"]=
l});else{for(z=e;0<=z&&z<m;){if(q=d[a].points[z]){f=q[1];break}z+=r}f=b.translate(f,0,1,0,1);l.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:f,yBottom:f})}})}return l},getGraphPath:function(a){var f=l.prototype.getGraphPath,t=this.options,u=t.stacking,b=this.yAxis,d,k,e=[],c=[],m=this.index,g,r=b.stacks[this.stackKey],z=t.threshold,B=b.getThreshold(t.threshold),y,t=t.connectNulls||"percent"===u,I=function(d,f,k){var l=a[d];d=u&&r[l.x].points[m];var q=l[k+"Null"]||0;k=l[k+"Cliff"]||0;var n,
y,l=!0;k||q?(n=(q?d[0]:d[1])+k,y=d[0]+k,l=!!q):!u&&a[f]&&a[f].isNull&&(n=y=z);void 0!==n&&(c.push({plotX:g,plotY:null===n?B:b.getThreshold(n),isNull:l,isCliff:!0}),e.push({plotX:g,plotY:null===y?B:b.getThreshold(y),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(d=0;d<a.length;d++)if(k=a[d].isNull,g=n(a[d].rectPlotX,a[d].plotX),y=n(a[d].yBottom,B),!k||t)t||I(d,d-1,"left"),k&&!u&&t||(c.push(a[d]),e.push({x:d,plotX:g,plotY:y})),t||I(d,d+1,"right");d=f.call(this,c,!0,!0);e.reversed=
!0;k=f.call(this,e,!0,!0);k.length&&(k[0]="L");k=d.concat(k);f=f.call(this,c,!1,t);k.xMap=d.xMap;this.areaPath=k;return f},drawGraph:function(){this.areaPath=[];l.prototype.drawGraph.apply(this);var a=this,f=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];H(this.zones,function(b,d){u.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+b.className,b.color||a.color,b.fillColor||v.fillColor])});H(u,function(b){var d=b[0],k=a[d];k?(k.endX=a.preventGraphAnimation?
null:f.xMap,k.animate({d:f})):(k=a[d]=a.chart.renderer.path(f).addClass(b[1]).attr({fill:n(b[3],B(b[2]).setOpacity(n(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=f.xMap;k.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,n){var l=G.plotX,f=G.plotY,t=a[n-1];n=a[n+1];var q,v,u,b;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&n&&!n.isNull&&!1!==n.doCurve&&
!G.isCliff){a=t.plotY;u=n.plotX;n=n.plotY;var d=0;q=(1.5*l+t.plotX)/2.5;v=(1.5*f+a)/2.5;u=(1.5*l+u)/2.5;b=(1.5*f+n)/2.5;u!==q&&(d=(b-v)*(u-l)/(u-q)+f-b);v+=d;b+=d;v>a&&v>f?(v=Math.max(a,f),b=2*f-v):v<a&&v<f&&(v=Math.min(a,f),b=2*f-v);b>n&&b>f?(b=Math.max(n,f),v=2*f-b):b<n&&b<f&&(b=Math.min(n,f),v=2*f-b);G.rightContX=u;G.rightContY=b}G=["C",B(t.rightContX,t.plotX),B(t.rightContY,t.plotY),B(q,l),B(v,f),l,f];t.rightContX=t.rightContY=null;return G}})})(L);(function(a){var B=a.seriesTypes.area.prototype,
H=a.seriesType;H("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var B=a.animObject,H=a.color,G=a.each,n=a.extend,l=a.isNumber,f=a.merge,t=a.pick,q=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){q.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&G(d.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,f=a.xAxis,
e=a.yAxis,c=f.reversed,m,g={},l=0;!1===d.grouping?l=1:G(a.chart.series,function(b){var c=b.options,d=b.yAxis,f;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||e.len!==d.len||e.pos!==d.pos||(c.stacking?(m=b.stackKey,void 0===g[m]&&(g[m]=l++),f=g[m]):!1!==c.grouping&&(f=l++),b.columnIndex=f)});var q=Math.min(Math.abs(f.transA)*(f.ordinalSlope||d.pointRange||f.closestPointRange||f.tickInterval||1),f.len),n=q*d.groupPadding,y=(q-2*n)/(l||1),d=Math.min(d.maxPointWidth||f.len,t(d.pointWidth,
y*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(y-d)/2+(n+((a.columnIndex||0)+(c?1:0))*y-q/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,d,f,e){var b=this.chart,k=this.borderWidth,g=-(k%2?.5:0),k=k%2?.5:1;b.inverted&&b.renderer.isVML&&(k+=1);this.options.crisp&&(f=Math.round(a+f)+g,a=Math.round(a)+g,f-=a);e=Math.round(d+e)+k;g=.5>=Math.abs(d)&&.5<e;d=Math.round(d)+k;e-=d;g&&e&&(--d,e+=1);return{x:a,y:d,width:f,height:e}},translate:function(){var a=this,d=a.chart,f=a.options,e=
a.dense=2>a.closestPointRange*a.xAxis.transA,e=a.borderWidth=t(f.borderWidth,e?0:1),c=a.yAxis,l=f.threshold,g=a.translatedThreshold=c.getThreshold(l),r=t(f.minPointLength,5),n=a.getColumnMetrics(),u=n.width,y=a.barW=Math.max(u,1+2*e),v=a.pointXOffset=n.offset;d.inverted&&(g-=.5);f.pointPadding&&(y=Math.ceil(y));q.prototype.translate.apply(a);G(a.points,function(b){var e=t(b.yBottom,g),f=999+Math.abs(e),f=Math.min(Math.max(-f,b.plotY),c.len+f),k=b.plotX+v,m=y,q=Math.min(f,e),n,h=Math.max(f,e)-q;r&&
Math.abs(h)<r&&(h=r,n=!c.reversed&&!b.negative||c.reversed&&b.negative,b.y===l&&a.dataMax<=l&&c.min<l&&(n=!n),q=Math.abs(q-g)>r?e-r:g-(n?r:0));b.barX=k;b.pointWidth=u;b.tooltipPos=d.inverted?[c.len+c.pos-d.plotLeft-f,a.xAxis.len-k-m/2,h]:[k+m/2,f+c.pos-d.plotTop,h];b.shapeType="rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?[k,g,m,0]:[k,q,m,h])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},
pointAttribs:function(a,d){var b=this.options,e,c=this.pointAttrToOptions||{};e=c.stroke||"borderColor";var l=c["stroke-width"]||"borderWidth",g=a&&a.color||this.color,r=a&&a[e]||b[e]||this.color||g,q=a&&a[l]||b[l]||this[l]||0,c=b.dashStyle;a&&this.zones.length&&(g=a.getZone(),g=a.options.color||g&&g.color||this.color);d&&(a=f(b.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,g=a.color||void 0!==d&&H(g).brighten(a.brightness).get()||g,r=a[e]||r,q=a[l]||q,c=a.dashStyle||c);e={fill:g,
stroke:r,"stroke-width":q};c&&(e.dashstyle=c);return e},drawPoints:function(){var a=this,d=this.chart,k=a.options,e=d.renderer,c=k.animationLimit||250,m;G(a.points,function(b){var g=b.graphic;if(l(b.plotY)&&null!==b.y){m=b.shapeArgs;if(g)g[d.pointCount<c?"animate":"attr"](f(m));else b.graphic=g=e[b.shapeType](m).add(b.group||a.group);k.borderRadius&&g.attr({r:k.borderRadius});g.attr(a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);g.addClass(b.getClassName(),
!0)}else g&&(b.graphic=g.destroy())})},animate:function(a){var b=this,f=this.yAxis,e=b.options,c=this.chart.inverted,l={},g=c?"translateX":"translateY",r;u&&(a?(l.scaleY=.001,a=Math.min(f.pos+f.len,Math.max(f.pos,f.toPixels(e.threshold))),c?l.translateX=a-f.len:l.translateY=a,b.group.attr(l)):(r=b.group.attr(g),b.group.animate({scaleY:1},n(B(b.options.animation),{step:function(a,c){l[g]=r+c.pos*(f.pos-r);b.group.attr(l)}})),b.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&G(d.series,
function(b){b.type===a.type&&(b.isDirty=!0)});q.prototype.remove.apply(a,arguments)}})})(L);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(L);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(L);(function(a){var B=a.deg2rad,H=a.isNumber,G=a.pick,n=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,f=this.chart,t=2*(a.slicedOffset||0),q=f.plotWidth-2*t,f=f.plotHeight-2*t,v=a.center,v=[G(v[0],"50%"),G(v[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(q,
f),b,d;for(b=0;4>b;++b)d=v[b],a=2>b||2===b&&/%$/.test(d),v[b]=n(d,[q,f,u,v[2]][b])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,f){a=H(a)?a:0;f=H(f)&&f>a&&360>f-a?f:a+360;return{start:B*(a+-90),end:B*(f+-90)}}}})(L);(function(a){var B=a.addEvent,H=a.CenteredSeriesMixin,G=a.defined,n=a.each,l=a.extend,f=H.getStartAndEndRadians,t=a.inArray,q=a.noop,v=a.pick,u=a.Point,b=a.Series,d=a.seriesType,k=a.setAnimation;d("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,
enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,
d=b.points,e=b.startAngleRad;a||(n(d,function(a){var c=a.graphic,d=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:e,end:e}),c.animate({r:d.r,start:d.start,end:d.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,b=0,d=this.points,g=d.length,f,k=this.options.ignoreHiddenPoint;for(a=0;a<g;a++)f=d[a],b+=k&&!f.visible?0:f.isNull?0:f.y;this.total=b;for(a=0;a<g;a++)f=d[a],f.percentage=0<b&&(f.visible||!k)?f.y/b*100:0,f.total=b},generatePoints:function(){b.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var b=0,d=this.options,e=d.slicedOffset,k=e+(d.borderWidth||0),l,q,n,t=f(d.startAngle,d.endAngle),u=this.startAngleRad=t.start,t=(this.endAngleRad=t.end)-u,D=this.points,x,E=d.dataLabels.distance,d=d.ignoreHiddenPoint,C,B=D.length,F;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){n=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(n)*(a[2]/2+d.labelDistance)};for(C=0;C<B;C++){F=D[C];
F.labelDistance=v(F.options.dataLabels&&F.options.dataLabels.distance,E);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,F.labelDistance);l=u+b*t;if(!d||F.visible)b+=F.percentage/100;q=u+b*t;F.shapeType="arc";F.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*l)/1E3,end:Math.round(1E3*q)/1E3};n=(q+l)/2;n>1.5*Math.PI?n-=2*Math.PI:n<-Math.PI/2&&(n+=2*Math.PI);F.slicedTranslation={translateX:Math.round(Math.cos(n)*e),translateY:Math.round(Math.sin(n)*e)};q=Math.cos(n)*a[2]/
2;x=Math.sin(n)*a[2]/2;F.tooltipPos=[a[0]+.7*q,a[1]+.7*x];F.half=n<-Math.PI/2||n>Math.PI/2?1:0;F.angle=n;l=Math.min(k,F.labelDistance/5);F.labelPos=[a[0]+q+Math.cos(n)*F.labelDistance,a[1]+x+Math.sin(n)*F.labelDistance,a[0]+q+Math.cos(n)*l,a[1]+x+Math.sin(n)*l,a[0]+q,a[1]+x,0>F.labelDistance?"center":F.half?"right":"left",n]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,d,g,f,k,q=a.options.shadow;q&&!a.shadowGroup&&(a.shadowGroup=b.g("shadow").add(a.group));n(a.points,function(c){g=
c.graphic;if(c.isNull)g&&(c.graphic=g.destroy());else{k=c.shapeArgs;d=c.getTranslate();var e=c.shadowGroup;q&&!e&&(e=c.shadowGroup=b.g("shadow").add(a.shadowGroup));e&&e.attr(d);f=a.pointAttribs(c,c.selected&&"select");g?g.setRadialReference(a.center).attr(f).animate(l(k,d)):(c.graphic=g=b[c.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),c.visible||g.attr({visibility:"hidden"}),g.attr(f).attr({"stroke-linejoin":"round"}).shadow(q,e));g.addClass(c.getClassName())}})},searchPoint:q,
sortByAngle:function(a,b){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*b})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:H.getCenter,getSymbol:q},{init:function(){u.prototype.init.apply(this,arguments);var a=this,b;a.name=v(a.name,"Slice");b=function(b){a.slice("select"===b.type)};B(a,"select",b);B(a,"unselect",b);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint;
b=v(b,f);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,d.options.data[t(c,d.data)]=c.options,n(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&e.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),f&&(d.isDirty=!0),b&&e.redraw())},slice:function(a,b,d){var c=this.series;k(d,c.chart);v(b,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;c.options.data[t(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r-1,start:b.start,end:b.end})}})})(L);(function(a){var B=a.addEvent,H=a.arrayMax,G=a.defined,n=a.each,l=a.extend,f=a.format,t=a.map,q=a.merge,v=a.noop,u=a.pick,b=a.relativeLength,d=
a.Series,k=a.seriesTypes,e=a.stableSort;a.distribute=function(a,b){function c(a,b){return a.target-b.target}var d,f=!0,k=a,l=[],m;m=0;for(d=a.length;d--;)m+=a[d].size;if(m>b){e(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=d=0;m<=b;)m+=a[d].size,d++;l=a.splice(d-1,a.length)}e(a,c);for(a=t(a,function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});f;){for(d=a.length;d--;)f=a[d],m=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,m-f.size*
f.align),b-f.size);d=a.length;for(f=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].align=.5,a[d-1].pos+a[d-1].size>b&&(a[d-1].pos=b-a[d-1].size),a.splice(d,1),f=!0)}d=0;n(a,function(a){var b=0;n(a.targets,function(){k[d].pos=a.pos+b;b+=k[d].size;d++})});k.push.apply(k,l);e(k,c)};d.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===
b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var d=this,e=d.chart,k=d.options,l=k.dataLabels,t=d.points,y,v,A=d.hasRendered||0,D,x,E=u(l.defer,!!k.animation),C=e.renderer;if(l.enabled||d._hasPointLabels)d.dlProcessOptions&&d.dlProcessOptions(l),x=d.plotGroup("dataLabelsGroup","data-labels",E&&!A?"hidden":"visible",l.zIndex||6),E&&(x.attr({opacity:+A}),A||B(d,"afterAnimate",function(){d.visible&&x.show(!0);x[k.animation?"animate":"attr"]({opacity:1},
{duration:200})})),v=l,n(t,function(c){var g,h=c.dataLabel,m,n,r=c.connector,t=!h,A;y=c.dlOptions||c.options&&c.options.dataLabels;(g=u(y&&y.enabled,v.enabled)&&!c.isNull)&&(g=!0===b(c,y||l));g&&(l=q(v,y),m=c.getLabelConfig(),A=l[c.formatPrefix+"Format"]||l.format,D=G(A)?f(A,m,e.time):(l[c.formatPrefix+"Formatter"]||l.formatter).call(m,l),A=l.style,m=l.rotation,A.color=u(l.color,A.color,d.color,"#000000"),"contrast"===A.color&&(c.contrastColor=C.getContrast(c.color||d.color),A.color=l.inside||0>u(c.labelDistance,
l.distance)||k.stacking?c.contrastColor:"#000000"),k.cursor&&(A.cursor=k.cursor),n={fill:l.backgroundColor,stroke:l.borderColor,"stroke-width":l.borderWidth,r:l.borderRadius||0,rotation:m,padding:l.padding,zIndex:1},a.objectEach(n,function(a,b){void 0===a&&delete n[b]}));!h||g&&G(D)?g&&G(D)&&(h?n.text=D:(h=c.dataLabel=m?C.text(D,0,-9999).addClass("highcharts-data-label"):C.label(D,0,-9999,l.shape,null,null,l.useHTML,null,"data-label"),h.addClass(" highcharts-data-label-color-"+c.colorIndex+" "+(l.className||
"")+(l.useHTML?"highcharts-tracker":""))),h.attr(n),h.css(A).shadow(l.shadow),h.added||h.add(x),d.alignDataLabel(c,h,l,null,t)):(c.dataLabel=h=h.destroy(),r&&(c.connector=r.destroy()))})};d.prototype.alignDataLabel=function(a,b,d,e,f){var c=this.chart,g=c.inverted,k=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=u(a.plotY,-9999),n=b.getBBox(),q,r=d.rotation,t=d.align,v=this.visible&&(a.series.forceDL||c.isInsidePlot(k,Math.round(m),g)||e&&c.isInsidePlot(k,g?e.x+1:e.y+e.height-1,g)),z="justify"===u(d.overflow,
"justify");if(v&&(q=d.style.fontSize,q=c.renderer.fontMetrics(q,b).b,e=l({x:g?this.yAxis.len-m:k,y:Math.round(g?this.xAxis.len-k:m),width:0,height:0},e),l(d,{width:n.width,height:n.height}),r?(z=!1,k=c.renderer.rotCorr(q,r),k={x:e.x+d.x+e.width/2+k.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},b[f?"attr":"animate"](k).attr({align:t}),m=(r+720)%360,m=180<m&&360>m,"left"===t?k.y-=m?n.height:0:"center"===t?(k.x-=n.width/2,k.y-=n.height/2):"right"===t&&(k.x-=n.width,k.y-=m?0:n.height)):
(b.align(d,null,e),k=b.alignAttr),z?a.isLabelJustified=this.justifyDataLabel(b,d,k,n,e,f):u(d.crop,!0)&&(v=c.isInsidePlot(k.x,k.y)&&c.isInsidePlot(k.x+n.width,k.y+n.height)),d.shape&&!r))b[f?"attr":"animate"]({anchorX:g?c.plotWidth-a.plotY:a.plotX,anchorY:g?c.plotHeight-a.plotX:a.plotY});v||(b.attr({y:-9999}),b.placed=!1)};d.prototype.justifyDataLabel=function(a,b,d,e,f,k){var c=this.chart,g=b.align,l=b.verticalAlign,m,n,q=a.box?0:a.padding||0;m=d.x+q;0>m&&("right"===g?b.align="left":b.x=-m,n=!0);
m=d.x+e.width-q;m>c.plotWidth&&("left"===g?b.align="right":b.x=c.plotWidth-m,n=!0);m=d.y+q;0>m&&("bottom"===l?b.verticalAlign="top":b.y=-m,n=!0);m=d.y+e.height-q;m>c.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=c.plotHeight-m,n=!0);n&&(a.placed=!k,a.align(b,null,f));return n};k.pie&&(k.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,g,f=b.chart,k=b.options.dataLabels,l=u(k.connectorPadding,10),q=u(k.connectorWidth,1),t=f.plotWidth,v=f.plotHeight,D,x=b.center,E=x[2]/2,C=x[1],B,F,
h,p,M=[[],[]],O,N,P,L,w=[0,0,0,0];b.visible&&(k.enabled||b._hasPointLabels)&&(n(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(b),n(e,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),n(M,function(c,d){var e,m,q=c.length,r=[],y;if(q)for(b.sortByAngle(c,d-.5),0<b.maxLabelDistance&&(e=Math.max(0,C-E-b.maxLabelDistance),m=Math.min(C+
E+b.maxLabelDistance,f.plotHeight),n(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,C-E-a.labelDistance),a.bottom=Math.min(C+E+a.labelDistance,f.plotHeight),y=a.dataLabel.getBBox().height||21,a.positionsIndex=r.push({target:a.labelPos[1]-a.top+y/2,size:y,rank:a.y})-1)}),a.distribute(r,m+y-e)),L=0;L<q;L++)g=c[L],m=g.positionsIndex,h=g.labelPos,B=g.dataLabel,P=!1===g.visible?"hidden":"inherit",N=e=h[1],r&&G(r[m])&&(void 0===r[m].pos?P="hidden":(p=r[m].size,N=g.top+r[m].pos)),delete g.positionIndex,
O=k.justify?x[0]+(d?-1:1)*(E+g.labelDistance):b.getX(N<g.top+2||N>g.bottom-2?e:N,d,g),B._attr={visibility:P,align:h[6]},B._pos={x:O+k.x+({left:l,right:-l}[h[6]]||0),y:N+k.y-10},h.x=O,h.y=N,u(k.crop,!0)&&(F=B.getBBox().width,e=null,O-F<l?(e=Math.round(F-O+l),w[3]=Math.max(e,w[3])):O+F>t-l&&(e=Math.round(O+F-t+l),w[1]=Math.max(e,w[1])),0>N-p/2?w[0]=Math.max(Math.round(-N+p/2),w[0]):N+p/2>v&&(w[2]=Math.max(Math.round(N+p/2-v),w[2])),B.sideOverflow=e)}),0===H(w)||this.verifyDataLabelOverflow(w))&&(this.placeDataLabels(),
q&&n(this.points,function(a){var c;D=a.connector;if((B=a.dataLabel)&&B._pos&&a.visible&&0<a.labelDistance){P=B._attr.visibility;if(c=!D)a.connector=D=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),D.attr({"stroke-width":q,stroke:k.connectorColor||a.color||"#666666"});D[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});D.attr("visibility",P)}else D&&(a.connector=D.destroy())}))},k.pie.prototype.connectorPath=function(a){var b=
a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){n(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),
b.moved=!0):b&&b.attr({y:-9999}))},this)},k.pie.prototype.alignDataLabel=v,k.pie.prototype.verifyDataLabelOverflow=function(a){var c=this.center,d=this.options,e=d.center,f=d.minSize||80,k,l=null!==d.size;l||(null!==e[0]?k=Math.max(c[2]-Math.max(a[1],a[3]),f):(k=Math.max(c[2]-a[1]-a[3],f),c[0]+=(a[3]-a[1])/2),null!==e[1]?k=Math.max(Math.min(k,c[2]-Math.max(a[0],a[2])),f):(k=Math.max(Math.min(k,c[2]-a[0]-a[2]),f),c[1]+=(a[0]-a[2])/2),k<c[2]?(c[2]=k,c[3]=Math.min(b(d.innerSize||0,k),k),this.translate(c),
this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});k.column&&(k.column.prototype.alignDataLabel=function(a,b,e,f,k){var c=this.chart.inverted,g=a.series,l=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,g.yAxis.len)),n=u(e.inside,!!this.options.stacking);l&&(f=q(l),0>f.y&&(f.height+=f.y,f.y=0),l=f.y+f.height-g.yAxis.len,0<l&&(f.height-=l),c&&(f={x:g.yAxis.len-f.y-f.height,y:g.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(c?(f.x+=m?0:f.width,f.width=0):(f.y+=
m?f.height:0,f.height=0)));e.align=u(e.align,!c||n?"center":m?"right":"left");e.verticalAlign=u(e.verticalAlign,c||n?"middle":m?"top":"bottom");d.prototype.alignDataLabel.call(this,a,b,e,f,k);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(L);(function(a){var B=a.Chart,H=a.each,G=a.objectEach,n=a.pick;a=a.addEvent;a(B.prototype,"render",function(){var a=[];H(this.labelCollectors||[],function(f){a=a.concat(f())});H(this.yAxis||[],function(f){f.options.stackLabels&&
!f.options.stackLabels.allowOverlap&&G(f.stacks,function(f){G(f,function(f){a.push(f.label)})})});H(this.series||[],function(f){var l=f.options.dataLabels,q=f.dataLabelCollections||["dataLabel"];(l.enabled||f._hasPointLabels)&&!l.allowOverlap&&f.visible&&H(q,function(l){H(f.points,function(f){f[l]&&(f[l].labelrank=n(f.labelrank,f.shapeArgs&&f.shapeArgs.height),a.push(f[l]))})})});this.hideOverlappingLabels(a)});B.prototype.hideOverlappingLabels=function(a){var f=a.length,l,n,v,u,b,d,k,e,c,m=function(a,
b,c,d,e,f,k,l){return!(e>a+c||e+k<a||f>b+d||f+l<b)};for(n=0;n<f;n++)if(l=a[n])l.oldOpacity=l.opacity,l.newOpacity=1,l.width||(v=l.getBBox(),l.width=v.width,l.height=v.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(n=0;n<f;n++)for(v=a[n],l=n+1;l<f;++l)if(u=a[l],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(b=v.alignAttr,d=u.alignAttr,k=v.parentGroup,e=u.parentGroup,c=2*(v.box?0:v.padding||0),b=m(b.x+k.translateX,b.y+k.translateY,v.width-c,v.height-
c,d.x+e.translateX,d.y+e.translateY,u.width-c,u.height-c)))(v.labelrank<u.labelrank?v:u).newOpacity=0;H(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(L);(function(a){var B=a.addEvent,H=a.Chart,G=a.createElement,n=a.css,l=a.defaultOptions,f=a.defaultPlotOptions,t=a.each,q=a.extend,v=a.fireEvent,u=a.hasTouch,b=a.inArray,d=a.isObject,k=a.Legend,e=a.merge,
c=a.pick,m=a.Point,g=a.Series,r=a.seriesTypes,z=a.svg,K;K=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});
if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(n).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,k=f.renderer,l=f.options.tooltip.snap,h=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(z?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,
0,"L",d[m-2]+l,d[m-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",n)}))}};r.column&&(r.column.prototype.drawTracker=K.drawTrackerPoint);
r.pie&&(r.pie.prototype.drawTracker=K.drawTrackerPoint);r.scatter&&(r.scatter.prototype.drawTracker=K.drawTrackerPoint);q(k.prototype,{setItemEvents:function(a,b,c){var d=this,f=d.chart.renderer.boxWrapper,g="highcharts-legend-"+(a instanceof m?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(e(a.visible?d.itemStyle:d.itemHiddenStyle));f.removeClass(g);a.setState()}).on("click",
function(b){var c=function(){a.setVisible&&a.setVisible()};f.removeClass(g);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});l.legend.itemStyle.cursor=
"pointer";q(H.prototype,{showResetZoom:function(){var a=this,b=l.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,f)},zoomOut:function(){var a=this;v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,e=this.pointer,
f=!1,g;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),e.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;e[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(f=!0))});g=this.resetZoomButton;f&&!g?this.showResetZoom():!f&&d(g)&&(this.resetZoomButton=g.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=
c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,m=b.toValue(g+b.len-f,!0)-h,n=m<l,g=n?m:l,l=n?l:m,m=Math.min(k.dataMin,h?k.min:b.toValue(b.toPixels(k.min)-b.minPixelPadding)),h=Math.max(k.dataMax,h?k.max:b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n=m-g;0<n&&(l+=n,g=m);n=l-h;0<n&&(l=h,g-=n);b.series.length&&g!==k.min&&l!==k.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=
f});e&&c.redraw(!1);n(c.container,{cursor:"move"})}});q(m.prototype,{select:function(a,d){var e=this,f=e.series,g=f.chart;a=c(a,!e.selected);e.firePointEvent(a?"select":"unselect",{accumulate:d},function(){e.selected=e.options.selected=a;f.options.data[b(e,f.data)]=e.options;e.setState(a&&"select");d||t(g.getSelectedPoints(),function(a){a.selected&&a!==e&&(a.selected=a.options.selected=!1,f.options.data[b(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=
this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=e(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){B(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var d=Math.floor(this.plotX),
e=this.plotY,g=this.series,k=g.options.states[a||"normal"]||{},l=f[g.type].marker&&g.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a||"normal"]||{},h=!1===n.enabled,p=g.stateMarkerGraphic,r=this.marker||{},t=g.chart,u=g.halo,v,y=l&&g.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===k.enabled||a&&(h||m&&!1===n.enabled)||a&&r.states&&r.states[a]&&!1===r.states[a].enabled)){y&&(v=g.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(g.pointAttribs(this,a),c(t.options.chart.animation,k.animation)),v&&this.graphic.animate(v,c(t.options.chart.animation,n.animation,l.animation)),p&&p.hide();else{if(a&&n){l=r.symbol||g.symbol;p&&p.currentSymbol!==l&&(p=p.destroy());if(p)p[b?"animate":"attr"]({x:v.x,y:v.y});else l&&(g.stateMarkerGraphic=p=t.renderer.symbol(l,v.x,v.y,v.width,v.height).add(g.markerGroup),p.currentSymbol=l);p&&p.attr(g.pointAttribs(this,
a))}p&&(p[a&&t.isInsidePlot(d,e,t.inverted)?"show":"hide"](),p.element.point=this)}(d=k.halo)&&d.size?(u||(g.halo=u=t.renderer.path().add((this.graphic||p).parentGroup)),u.show()[b?"animate":"attr"]({d:this.haloPath(d.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,g.colorIndex)}),u.point=this,u.attr(q({fill:this.color||g.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):u&&u.point&&u.point.haloPath&&u.animate({d:u.point.haloPath(0)},null,u.hide);this.state=a}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});q(g.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||
c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,d=b.options,e=b.graph,f=d.states,g=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(g={"stroke-width":g},e.animate(g,c(f[a||"normal"]&&f[a||"normal"].animation,
b.chart.options.chart.animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(g),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:K.drawTrackerGraph})})(L);(function(a){var B=a.Chart,H=a.each,G=a.inArray,n=a.isArray,l=a.isObject,f=a.pick,t=a.splat;
B.prototype.setResponsive=function(f){var l=this.options.responsive,n=[],b=this.currentResponsive;l&&l.rules&&H(l.rules,function(b){void 0===b._id&&(b._id=a.uniqueKey());this.matchResponsiveRule(b,n,f)},this);var d=a.merge.apply(0,a.map(n,function(b){return a.find(l.rules,function(a){return a._id===b}).chartOptions})),n=n.toString()||void 0;n!==(b&&b.ruleIds)&&(b&&this.update(b.undoOptions,f),n?(this.currentResponsive={ruleIds:n,mergedOptions:d,undoOptions:this.currentOptions(d)},this.update(d,f)):
this.currentResponsive=void 0)};B.prototype.matchResponsiveRule=function(a,l){var n=a.condition;(n.callback||function(){return this.chartWidth<=f(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=f(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=f(n.minWidth,0)&&this.chartHeight>=f(n.minHeight,0)}).call(this)&&l.push(a._id)};B.prototype.currentOptions=function(f){function q(b,d,f,e){var c;a.objectEach(b,function(a,b){if(!e&&-1<G(b,["series","xAxis","yAxis"]))for(a=t(a),f[b]=[],c=0;c<a.length;c++)d[b][c]&&
(f[b][c]={},q(a[c],d[b][c],f[b][c],e+1));else l(a)?(f[b]=n(a)?[]:{},q(a,d[b]||{},f[b],e+1)):f[b]=d[b]||null})}var u={};q(f,this.options,u,0);return u}})(L);return L});


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
 Highcharts JS v6.0.6 (2018-02-05)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){(function(a){var r=a.deg2rad,u=a.isNumber,w=a.pick,p=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,f=this.chart,h=2*(a.slicedOffset||0),c=f.plotWidth-2*h,f=f.plotHeight-2*h,b=a.center,b=[w(b[0],"50%"),w(b[1],"50%"),a.size||"100%",a.innerSize||0],l=Math.min(c,f),g,d;for(g=0;4>g;++g)d=b[g],a=2>g||2===g&&/%$/.test(d),b[g]=p(d,[c,f,l,b[2]][g])+(a?h:0);b[3]>b[2]&&(b[3]=b[2]);
return b},getStartAndEndRadians:function(a,f){a=u(a)?a:0;f=u(f)&&f>a&&360>f-a?f:a+360;return{start:r*(a+-90),end:r*(f+-90)}}}})(x);(function(a){function r(a,c){this.init(a,c)}var u=a.CenteredSeriesMixin,w=a.each,p=a.extend,m=a.merge,f=a.splat;p(r.prototype,{coll:"pane",init:function(a,c){this.chart=c;this.background=[];c.pane.push(this);this.setOptions(a)},setOptions:function(a){this.options=m(this.defaultOptions,this.chart.angular?{background:{}}:void 0,a)},render:function(){var a=this.options,c=
this.options.background,b=this.chart.renderer;this.group||(this.group=b.g("pane-group").attr({zIndex:a.zIndex||0}).add());this.updateCenter();if(c)for(c=f(c),a=Math.max(c.length,this.background.length||0),b=0;b<a;b++)c[b]&&this.axis?this.renderBackground(m(this.defaultBackgroundOptions,c[b]),b):this.background[b]&&(this.background[b]=this.background[b].destroy(),this.background.splice(b,1))},renderBackground:function(a,c){var b="animate";this.background[c]||(this.background[c]=this.chart.renderer.path().add(this.group),
b="attr");this.background[c][b]({d:this.axis.getPlotBandPath(a.from,a.to,a)}).attr({fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth,"class":"highcharts-pane "+(a.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},
updateCenter:function(a){this.center=(a||this.axis||{}).center=u.getCenter.call(this)},update:function(a,c){m(!0,this.options,a);this.setOptions(this.options);this.render();w(this.chart.axes,function(b){b.pane===this&&(b.pane=null,b.update({},c))},this)}});a.Pane=r})(x);(function(a){var r=a.each,u=a.extend,w=a.map,p=a.merge,m=a.noop,f=a.pick,h=a.pInt,c=a.wrap,b,l,g=a.Axis.prototype;a=a.Tick.prototype;b={getOffset:m,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:m,setCategories:m,
setTitle:m};l={defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null,style:{textOverflow:"none"}},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",
x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(b){b=this.options=p(this.defaultOptions,this.defaultRadialOptions,b);b.plotBands||(b.plotBands=[])},getOffset:function(){g.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(b,c){b=this.center;var d=this.chart,e=f(c,b[2]/2-this.offset);this.isCircular||void 0!==c?(c=this.chart.renderer.symbols.arc(this.left+b[0],this.top+b[1],e,e,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}),
c.xBounds=[this.left+b[0]],c.yBounds=[this.top+b[1]-e]):(c=this.postTranslate(this.angleRad,e),c=["M",b[0]+d.plotLeft,b[1]+d.plotTop,"L",c.x,c.y]);return c},setAxisTranslation:function(){g.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&
void 0===f(this.userMax,this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0},setAxisSize:function(){g.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*f(this.sector,1)/2)},getPosition:function(b,c){return this.postTranslate(this.isCircular?this.translate(b):this.angleRad,f(this.isCircular?
c:this.translate(b),this.center[2]/2)-this.offset)},postTranslate:function(b,c){var d=this.chart,e=this.center;b=this.startAngleRad+b;return{x:d.plotLeft+e[0]+Math.cos(b)*c,y:d.plotTop+e[1]+Math.sin(b)*c}},getPlotBandPath:function(b,c,a){var d=this.center,e=this.startAngleRad,l=d[2]/2,k=[f(a.outerRadius,"100%"),a.innerRadius,f(a.thickness,10)],g=Math.min(this.offset,0),t=/%$/,m,p=this.isCircular;"polygon"===this.options.gridLineInterpolation?d=this.getPlotLinePath(b).concat(this.getPlotLinePath(c,
!0)):(b=Math.max(b,this.min),c=Math.min(c,this.max),p||(k[0]=this.translate(b),k[1]=this.translate(c)),k=w(k,function(b){t.test(b)&&(b=h(b,10)*l/100);return b}),"circle"!==a.shape&&p?(b=e+this.translate(b),c=e+this.translate(c)):(b=-Math.PI/2,c=1.5*Math.PI,m=!0),k[0]-=g,k[2]-=g,d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],k[0],k[0],{start:Math.min(b,c),end:Math.max(b,c),innerR:f(k[1],k[0]-k[2]),open:m}));return d},getPlotLinePath:function(b,c){var d=this,e=d.center,a=d.chart,l=d.getPosition(b),
g,f,t;d.isCircular?t=["M",e[0]+a.plotLeft,e[1]+a.plotTop,"L",l.x,l.y]:"circle"===d.options.gridLineInterpolation?(b=d.translate(b))&&(t=d.getLinePath(0,b)):(r(a.xAxis,function(b){b.pane===d.pane&&(g=b)}),t=[],b=d.translate(b),e=g.tickPositions,g.autoConnect&&(e=e.concat([e[0]])),c&&(e=[].concat(e).reverse()),r(e,function(c,d){f=g.getPosition(c,b);t.push(d?"L":"M",f.x,f.y)}));return t},getTitlePosition:function(){var b=this.center,c=this.chart,a=this.options.title;return{x:c.plotLeft+b[0]+(a.x||0),
y:c.plotTop+b[1]-{high:.5,middle:.25,low:0}[a.align]*b[2]+(a.y||0)}}};c(g,"init",function(c,e,a){var d=e.angular,k=e.polar,g=a.isX,y=d&&g,m,t=e.options,h=a.pane||0,r=this.pane=e.pane&&e.pane[h],h=r&&r.options;if(d){if(u(this,y?b:l),m=!g)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else k&&(u(this,l),this.defaultRadialOptions=(m=g)?this.defaultRadialXOptions:p(this.defaultYAxisOptions,this.defaultRadialYOptions));d||k?(this.isRadial=!0,e.inverted=!1,t.chart.zoomType=null):this.isRadial=
!1;r&&m&&(r.axis=this);c.call(this,e,a);!y&&r&&(d||k)&&(c=this.options,this.angleRad=(c.angle||0)*Math.PI/180,this.startAngleRad=(h.startAngle-90)*Math.PI/180,this.endAngleRad=(f(h.endAngle,h.startAngle+360)-90)*Math.PI/180,this.offset=c.offset||0,this.isCircular=m)});c(g,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});c(a,"getPosition",function(b,c,a,l,g){var d=this.axis;return d.getPosition?d.getPosition(a):b.call(this,c,a,l,g)});c(a,"getLabelPosition",
function(b,c,a,l,g,q,y,m,t){var d=this.axis,e=q.y,k=20,n=q.align,v=(d.translate(this.pos)+d.startAngleRad+Math.PI/2)/Math.PI*180%360;d.isRadial?(b=d.getPosition(this.pos,d.center[2]/2+f(q.distance,-25)),"auto"===q.rotation?l.attr({rotation:v}):null===e&&(e=d.chart.renderer.fontMetrics(l.styles.fontSize).b-l.getBBox().height/2),null===n&&(d.isCircular?(this.label.getBBox().width>d.len*d.tickInterval/(d.max-d.min)&&(k=0),n=v>k&&v<180-k?"left":v>180+k&&v<360-k?"right":"center"):n="center",l.attr({align:n})),
b.x+=q.x,b.y+=e):b=b.call(this,c,a,l,g,q,y,m,t);return b});c(a,"getMarkPath",function(b,c,a,l,g,q,y){var d=this.axis;d.isRadial?(b=d.getPosition(this.pos,d.center[2]/2+l),c=["M",c,a,"L",b.x,b.y]):c=b.call(this,c,a,l,g,q,y);return c})})(x);(function(a){var r=a.each,u=a.pick,w=a.defined,p=a.seriesType,m=a.seriesTypes,f=a.Series.prototype,h=a.Point.prototype;p("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}},{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(c){return[c.low,c.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(c){var b=this.chart,a=this.xAxis.postTranslate(c.rectPlotX,this.yAxis.len-c.plotHigh);c.plotHighX=a.x-b.plotLeft;c.plotHigh=a.y-b.plotTop;c.plotLowX=c.plotX},translate:function(){var c=this,b=c.yAxis,a=!!c.modifyValue;m.area.prototype.translate.apply(c);
r(c.points,function(l){var d=l.low,e=l.high,k=l.plotY;null===e||null===d?(l.isNull=!0,l.plotY=null):(l.plotLow=k,l.plotHigh=b.translate(a?c.modifyValue(e,l):e,0,1,0,1),a&&(l.yBottom=l.plotHigh))});this.chart.polar&&r(this.points,function(b){c.highToXY(b);b.tooltipPos=[(b.plotHighX+b.plotLowX)/2,(b.plotHigh+b.plotLow)/2]})},getGraphPath:function(c){var b=[],a=[],g,d=m.area.prototype.getGraphPath,e,k,v;v=this.options;var n=this.chart.polar&&!1!==v.connectEnds,q=v.connectNulls,y=v.step;c=c||this.points;
for(g=c.length;g--;)e=c[g],e.isNull||n||q||c[g+1]&&!c[g+1].isNull||a.push({plotX:e.plotX,plotY:e.plotY,doCurve:!1}),k={polarPlotY:e.polarPlotY,rectPlotX:e.rectPlotX,yBottom:e.yBottom,plotX:u(e.plotHighX,e.plotX),plotY:e.plotHigh,isNull:e.isNull},a.push(k),b.push(k),e.isNull||n||q||c[g-1]&&!c[g-1].isNull||a.push({plotX:e.plotX,plotY:e.plotY,doCurve:!1});c=d.call(this,c);y&&(!0===y&&(y="left"),v.step={left:"right",center:"center",right:"left"}[y]);b=d.call(this,b);a=d.call(this,a);v.step=y;v=[].concat(c,
b);this.chart.polar||"M"!==a[0]||(a[0]="L");this.graphPath=v;this.areaPath=c.concat(a);v.isArea=!0;v.xMap=c.xMap;this.areaPath.xMap=c.xMap;return v},drawDataLabels:function(){var c=this.data,b=c.length,a,g=[],d=this.options.dataLabels,e=d.align,k=d.verticalAlign,v=d.inside,n,q,y=this.chart.inverted;if(d.enabled||this._hasPointLabels){for(a=b;a--;)if(n=c[a])q=v?n.plotHigh<n.plotLow:n.plotHigh>n.plotLow,n.y=n.high,n._plotY=n.plotY,n.plotY=n.plotHigh,g[a]=n.dataLabel,n.dataLabel=n.dataLabelUpper,n.below=
q,y?e||(d.align=q?"right":"left"):k||(d.verticalAlign=q?"top":"bottom"),d.x=d.xHigh,d.y=d.yHigh;f.drawDataLabels&&f.drawDataLabels.apply(this,arguments);for(a=b;a--;)if(n=c[a])q=v?n.plotHigh<n.plotLow:n.plotHigh>n.plotLow,n.dataLabelUpper=n.dataLabel,n.dataLabel=g[a],n.y=n.low,n.plotY=n._plotY,n.below=!q,y?e||(d.align=q?"left":"right"):k||(d.verticalAlign=q?"bottom":"top"),d.x=d.xLow,d.y=d.yLow;f.drawDataLabels&&f.drawDataLabels.apply(this,arguments)}d.align=e;d.verticalAlign=k},alignDataLabel:function(){m.column.prototype.alignDataLabel.apply(this,
arguments)},drawPoints:function(){var c=this.points.length,b,a;f.drawPoints.apply(this,arguments);for(a=0;a<c;)b=this.points[a],b.lowerGraphic=b.graphic,b.graphic=b.upperGraphic,b._plotY=b.plotY,b._plotX=b.plotX,b.plotY=b.plotHigh,w(b.plotHighX)&&(b.plotX=b.plotHighX),b._isInside=b.isInside,this.chart.polar||(b.isInside=b.isTopInside=void 0!==b.plotY&&0<=b.plotY&&b.plotY<=this.yAxis.len&&0<=b.plotX&&b.plotX<=this.xAxis.len),a++;f.drawPoints.apply(this,arguments);for(a=0;a<c;)b=this.points[a],b.upperGraphic=
b.graphic,b.graphic=b.lowerGraphic,b.isInside=b._isInside,b.plotY=b._plotY,b.plotX=b._plotX,a++},setStackedPoints:a.noop},{setState:function(){var c=this.state,b=this.series,a=b.chart.polar;w(this.plotHigh)||(this.plotHigh=b.yAxis.toPixels(this.high,!0));w(this.plotLow)||(this.plotLow=this.plotY=b.yAxis.toPixels(this.low,!0));b.stateMarkerGraphic&&(b.lowerStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;
a&&(this.plotX=this.plotHighX);h.setState.apply(this,arguments);this.state=c;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;a&&(this.plotX=this.plotLowX);b.stateMarkerGraphic&&(b.upperStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.lowerStateMarkerGraphic,b.lowerStateMarkerGraphic=void 0);h.setState.apply(this,arguments)},haloPath:function(){var c=this.series.chart.polar,b=[];this.plotY=this.plotLow;c&&(this.plotX=this.plotLowX);this.isInside&&(b=h.haloPath.apply(this,arguments));
this.plotY=this.plotHigh;c&&(this.plotX=this.plotHighX);this.isTopInside&&(b=b.concat(h.haloPath.apply(this,arguments)));return b},destroyElements:function(){r(["lowerGraphic","upperGraphic"],function(c){this[c]&&(this[c]=this[c].destroy())},this);this.graphic=null;return h.destroyElements.apply(this,arguments)}})})(x);(function(a){var r=a.seriesType;r("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(x);(function(a){var r=a.defaultPlotOptions,u=
a.each,w=a.merge,p=a.noop,m=a.pick,f=a.seriesType,h=a.seriesTypes.column.prototype;f("columnrange","arearange",w(r.column,r.arearange,{pointRange:null,marker:null,states:{hover:{halo:!1}}}),{translate:function(){var c=this,b=c.yAxis,a=c.xAxis,g=a.startAngleRad,d,e=c.chart,k=c.xAxis.isRadial,v=Math.max(e.chartWidth,e.chartHeight)+999,n;h.translate.apply(c);u(c.points,function(l){var q=l.shapeArgs,f=c.options.minPointLength,t,h;l.plotHigh=n=Math.min(Math.max(-v,b.translate(l.high,0,1,0,1)),v);l.plotLow=
Math.min(Math.max(-v,l.plotY),v);h=n;t=m(l.rectPlotY,l.plotY)-n;Math.abs(t)<f?(f-=t,t+=f,h-=f/2):0>t&&(t*=-1,h-=t);k?(d=l.barX+g,l.shapeType="path",l.shapeArgs={d:c.polarArc(h+t,h,d,d+l.pointWidth)}):(q.height=t,q.y=h,l.tooltipPos=e.inverted?[b.len+b.pos-e.plotLeft-h-t/2,a.len+a.pos-e.plotTop-q.x-q.width/2,t]:[a.left-e.plotLeft+q.x+q.width/2,b.pos-e.plotTop+h+t/2,t])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:p,getSymbol:p,crispCol:h.crispCol,drawPoints:h.drawPoints,drawTracker:h.drawTracker,
getColumnMetrics:h.getColumnMetrics,pointAttribs:h.pointAttribs,animate:function(){return h.animate.apply(this,arguments)},polarArc:function(){return h.polarArc.apply(this,arguments)},translate3dPoints:function(){return h.translate3dPoints.apply(this,arguments)},translate3dShapes:function(){return h.translate3dShapes.apply(this,arguments)}},{setState:h.pointClass.prototype.setState})})(x);(function(a){var r=a.each,u=a.isNumber,w=a.merge,p=a.pick,m=a.pInt,f=a.Series,h=a.seriesType,c=a.TrackerMixin;
h("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,c=this.options,a=b.center;this.generatePoints();r(this.points,function(d){var e=w(c.dial,d.dial),l=m(p(e.radius,80))*a[2]/200,g=m(p(e.baseLength,
70))*l/100,n=m(p(e.rearLength,10))*l/100,q=e.baseWidth||3,f=e.topWidth||1,h=c.overshoot,t=b.startAngleRad+b.translate(d.y,null,null,null,!0);u(h)?(h=h/180*Math.PI,t=Math.max(b.startAngleRad-h,Math.min(b.endAngleRad+h,t))):!1===c.wrap&&(t=Math.max(b.startAngleRad,Math.min(b.endAngleRad,t)));t=180*t/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-n,-q/2,"L",g,-q/2,l,-f/2,l,f/2,g,q/2,-n,q/2,"z"],translateX:a[0],translateY:a[1],rotation:t};d.plotX=a[0];d.plotY=a[1]})},drawPoints:function(){var b=
this,c=b.yAxis.center,a=b.pivot,d=b.options,e=d.pivot,k=b.chart.renderer;r(b.points,function(c){var a=c.graphic,e=c.shapeArgs,l=e.d,g=w(d.dial,c.dial);a?(a.animate(e),e.d=l):(c.graphic=k[c.shapeType](e).attr({rotation:e.rotation,zIndex:1}).addClass("highcharts-dial").add(b.group),c.graphic.attr({stroke:g.borderColor||"none","stroke-width":g.borderWidth||0,fill:g.backgroundColor||"#000000"}))});a?a.animate({translateX:c[0],translateY:c[1]}):(b.pivot=k.circle(0,0,p(e.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(c[0],
c[1]).add(b.group),b.pivot.attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"#cccccc",fill:e.backgroundColor||"#000000"}))},animate:function(b){var c=this;b||(r(c.points,function(b){var a=b.graphic;a&&(a.attr({rotation:180*c.yAxis.startAngleRad/Math.PI}),a.animate({rotation:b.shapeArgs.rotation},c.options.animation))}),c.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);f.prototype.render.call(this);
this.group.clip(this.chart.clipRect)},setData:function(b,c){f.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();p(c,!0)&&this.chart.redraw()},drawTracker:c&&c.drawTrackerPoint},{setState:function(b){this.state=b}})})(x);(function(a){var r=a.each,u=a.noop,w=a.pick,p=a.seriesType,m=a.seriesTypes;p("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},
whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(){return{}},drawDataLabels:u,translate:function(){var a=this.yAxis,h=this.pointArrayMap;m.column.prototype.translate.apply(this);r(this.points,function(c){r(h,function(b){null!==c[b]&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=this,h=a.options,
c=a.chart.renderer,b,l,g,d,e,k,v=0,n,q,m,p,t=!1!==a.doQuartiles,u,A=a.options.whiskerLength;r(a.points,function(f){var y=f.graphic,r=y?"animate":"attr",K=f.shapeArgs,x={},C={},I={},J={},B=f.color||a.color;void 0!==f.plotY&&(n=K.width,q=Math.floor(K.x),m=q+n,p=Math.round(n/2),b=Math.floor(t?f.q1Plot:f.lowPlot),l=Math.floor(t?f.q3Plot:f.lowPlot),g=Math.floor(f.highPlot),d=Math.floor(f.lowPlot),y||(f.graphic=y=c.g("point").add(a.group),f.stem=c.path().addClass("highcharts-boxplot-stem").add(y),A&&(f.whiskers=
c.path().addClass("highcharts-boxplot-whisker").add(y)),t&&(f.box=c.path(void 0).addClass("highcharts-boxplot-box").add(y)),f.medianShape=c.path(void 0).addClass("highcharts-boxplot-median").add(y)),C.stroke=f.stemColor||h.stemColor||B,C["stroke-width"]=w(f.stemWidth,h.stemWidth,h.lineWidth),C.dashstyle=f.stemDashStyle||h.stemDashStyle,f.stem.attr(C),A&&(I.stroke=f.whiskerColor||h.whiskerColor||B,I["stroke-width"]=w(f.whiskerWidth,h.whiskerWidth,h.lineWidth),f.whiskers.attr(I)),t&&(x.fill=f.fillColor||
h.fillColor||B,x.stroke=h.lineColor||B,x["stroke-width"]=h.lineWidth||0,f.box.attr(x)),J.stroke=f.medianColor||h.medianColor||B,J["stroke-width"]=w(f.medianWidth,h.medianWidth,h.lineWidth),f.medianShape.attr(J),k=f.stem.strokeWidth()%2/2,v=q+p+k,f.stem[r]({d:["M",v,l,"L",v,g,"M",v,b,"L",v,d]}),t&&(k=f.box.strokeWidth()%2/2,b=Math.floor(b)+k,l=Math.floor(l)+k,q+=k,m+=k,f.box[r]({d:["M",q,l,"L",q,b,"L",m,b,"L",m,l,"L",q,l,"z"]})),A&&(k=f.whiskers.strokeWidth()%2/2,g+=k,d+=k,u=/%$/.test(A)?p*parseFloat(A)/
100:A/2,f.whiskers[r]({d:["M",v-u,g,"L",v+u,g,"M",v-u,d,"L",v+u,d]})),e=Math.round(f.medianPlot),k=f.medianShape.strokeWidth()%2/2,e+=k,f.medianShape[r]({d:["M",q,e,"L",m,e]}))})},setStackedPoints:u})})(x);(function(a){var r=a.each,u=a.noop,w=a.seriesType,p=a.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:p.arearange?function(){var a=this.pointValKey;p.arearange.prototype.drawDataLabels.call(this);r(this.data,function(f){f.y=f[a]})}:u,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||p.column.prototype.getColumnMetrics.call(this)}})})(x);(function(a){var r=a.correctFloat,u=a.isNumber,w=a.pick,p=a.Point,m=a.Series,
f=a.seriesType,h=a.seriesTypes;f("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var c=this.options,b=this.yAxis,a,g,d,e,k,f,n,q,m,p,t=w(c.minPointLength,5),u=t/2,x=c.threshold,E=c.stacking,z;h.column.prototype.translate.apply(this);q=m=x;g=this.points;a=0;for(c=g.length;a<c;a++)d=g[a],n=this.processedYData[a],e=d.shapeArgs,k=E&&b.stacks[(this.negStacks&&n<x?"-":
"")+this.stackKey],z=this.getStackIndicator(z,d.x,this.index),p=w(k&&k[d.x].points[z.key],[0,n]),d.isSum?d.y=r(n):d.isIntermediateSum&&(d.y=r(n-m)),f=Math.max(q,q+d.y)+p[0],e.y=b.translate(f,0,1,0,1),d.isSum?(e.y=b.translate(p[1],0,1,0,1),e.height=Math.min(b.translate(p[0],0,1,0,1),b.len)-e.y):d.isIntermediateSum?(e.y=b.translate(p[1],0,1,0,1),e.height=Math.min(b.translate(m,0,1,0,1),b.len)-e.y,m=p[1]):(e.height=0<n?b.translate(q,0,1,0,1)-e.y:b.translate(q,0,1,0,1)-b.translate(q-n,0,1,0,1),q+=k&&
k[d.x]?k[d.x].total:n),0>e.height&&(e.y+=e.height,e.height*=-1),d.plotY=e.y=Math.round(e.y)-this.borderWidth%2/2,e.height=Math.max(Math.round(e.height),.001),d.yBottom=e.y+e.height,e.height<=t&&!d.isNull?(e.height=t,e.y-=u,d.plotY=e.y,d.minPointLengthOffset=0>d.y?-u:u):d.minPointLengthOffset=0,e=d.plotY+(d.negative?e.height:0),this.chart.inverted?d.tooltipPos[0]=b.len-e:d.tooltipPos[1]=e},processData:function(c){var b=this.yData,a=this.options.data,g,d=b.length,e,k,f,n,q,h;k=e=f=n=this.options.threshold||
0;for(h=0;h<d;h++)q=b[h],g=a&&a[h]?a[h]:{},"sum"===q||g.isSum?b[h]=r(k):"intermediateSum"===q||g.isIntermediateSum?b[h]=r(e):(k+=q,e+=q),f=Math.min(k,f),n=Math.max(k,n);m.prototype.processData.call(this,c);this.options.stacking||(this.dataMin=f,this.dataMax=n)},toYData:function(c){return c.isSum?0===c.x?null:"sum":c.isIntermediateSum?0===c.x?null:"intermediateSum":c.y},pointAttribs:function(c,b){var a=this.options.upColor;a&&!c.options.color&&(c.color=0<c.y?a:null);c=h.column.prototype.pointAttribs.call(this,
c,b);delete c.dashstyle;return c},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var c=this.data,b=c.length,a=this.graph.strokeWidth()+this.borderWidth,a=Math.round(a)%2/2,g=this.xAxis.reversed,d=this.yAxis.reversed,e=[],k,f,n;for(n=1;n<b;n++){f=c[n].shapeArgs;k=c[n-1].shapeArgs;f=["M",k.x+(g?0:k.width),k.y+c[n-1].minPointLengthOffset+a,"L",f.x+(g?k.width:0),k.y+c[n-1].minPointLengthOffset+a];if(0>c[n-1].y&&!d||0<c[n-1].y&&d)f[2]+=k.height,f[5]+=k.height;e=e.concat(f)}return e},
drawGraph:function(){m.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){var c=this.options,b,a;m.prototype.setStackedPoints.apply(this,arguments);b=this.stackedYData?this.stackedYData.length:0;for(a=1;a<b;a++)c.data[a].isSum||c.data[a].isIntermediateSum||(this.stackedYData[a]+=this.stackedYData[a-1])},getExtremes:function(){if(this.options.stacking)return m.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var c=p.prototype.getClassName.call(this);
this.isSum?c+=" highcharts-sum":this.isIntermediateSum&&(c+=" highcharts-intermediate-sum");return c},isValid:function(){return u(this.y,!0)||this.isSum||this.isIntermediateSum}})})(x);(function(a){var r=a.Series,u=a.seriesType,w=a.seriesTypes;u("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=r.prototype.getGraphPath.call(this),m=a.length+1;m--;)(m===a.length||
"M"===a[m])&&0<m&&a.splice(m,0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=this.color;w.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:r.prototype.drawTracker,setStackedPoints:a.noop})})(x);(function(a){var r=a.arrayMax,u=a.arrayMin,w=a.Axis,p=a.color,m=a.each,f=a.isNumber,h=a.noop,c=a.pick,b=a.pInt,l=a.Point,g=a.Series,d=a.seriesType,e=a.seriesTypes;d("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},
inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1,fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(b,
c){var a=this.options.marker.fillOpacity;b=g.prototype.pointAttribs.call(this,b,c);1!==a&&(b.fill=p(b.fill).setOpacity(a).get("rgba"));return b},getRadii:function(b,c,a,d){var e,f,k,g=this.zData,n=[],l=this.options,q="width"!==l.sizeBy,h=l.zThreshold,m=c-b;f=0;for(e=g.length;f<e;f++)k=g[f],l.sizeByAbsoluteValue&&null!==k&&(k=Math.abs(k-h),c=Math.max(c-h,Math.abs(b-h)),b=0),null===k?k=null:k<b?k=a/2-1:(k=0<m?(k-b)/m:.5,q&&0<=k&&(k=Math.sqrt(k)),k=Math.ceil(a+k*(d-a))/2),n.push(k);this.radii=n},animate:function(b){var c=
this.options.animation;b||(m(this.points,function(b){var a=b.graphic,d;a&&a.width&&(d={x:a.x,y:a.y,width:a.width,height:a.height},a.attr({x:b.plotX,y:b.plotY,width:1,height:1}),a.animate(d,c))}),this.animate=null)},translate:function(){var b,c=this.data,d,g,l=this.radii;e.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],g=l?l[b]:0,f(g)&&g>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:g,width:2*g,height:2*g}),d.dlBox={x:d.plotX-g,y:d.plotY-g,width:2*g,height:2*g}):d.shapeArgs=
d.plotY=d.dlBox=void 0},alignDataLabel:e.column.prototype.alignDataLabel,buildKDTree:h,applyZones:h},{haloPath:function(b){return l.prototype.haloPath.call(this,0===b?0:(this.marker?this.marker.radius||0:0)+b)},ttBelow:!1});w.prototype.beforePadding=function(){var a=this,d=this.len,e=this.chart,g=0,l=d,h=this.isXAxis,p=h?"xData":"yData",w=this.min,x={},E=Math.min(e.plotWidth,e.plotHeight),z=Number.MAX_VALUE,F=-Number.MAX_VALUE,G=this.max-w,D=d/G,H=[];m(this.series,function(d){var g=d.options;!d.bubblePadding||
!d.visible&&e.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,H.push(d),h&&(m(["minSize","maxSize"],function(a){var c=g[a],d=/%$/.test(c),c=b(c);x[a]=d?E*c/100:c}),d.minPxSize=x.minSize,d.maxPxSize=Math.max(x.maxSize,x.minSize),d=d.zData,d.length&&(z=c(g.zMin,Math.min(z,Math.max(u(d),!1===g.displayNegative?g.zThreshold:-Number.MAX_VALUE))),F=c(g.zMax,Math.max(F,r(d))))))});m(H,function(b){var c=b[p],d=c.length,e;h&&b.getRadii(z,F,b.minPxSize,b.maxPxSize);if(0<G)for(;d--;)f(c[d])&&a.dataMin<=
c[d]&&c[d]<=a.dataMax&&(e=b.radii[d],g=Math.min((c[d]-w)*D-e,g),l=Math.max((c[d]-w)*D+e,l))});H.length&&0<G&&!this.isLog&&(l-=d,D*=(d+g-l)/d,m([["min","userMin",g],["max","userMax",l]],function(b){void 0===c(a.options[b[0]],a[b[1]])&&(a[b[0]]+=b[2]/D)}))}})(x);(function(a){function r(c,b){var a=this.chart,g=this.options.animation,d=this.group,e=this.markerGroup,f=this.xAxis.center,h=a.plotLeft,n=a.plotTop;a.polar?a.renderer.isSVG&&(!0===g&&(g={}),b?(c={translateX:f[0]+h,translateY:f[1]+n,scaleX:.001,
scaleY:.001},d.attr(c),e&&e.attr(c)):(c={translateX:h,translateY:n,scaleX:1,scaleY:1},d.animate(c,g),e&&e.animate(c,g),this.animate=null)):c.call(this,b)}var u=a.each,w=a.pick,p=a.seriesTypes,m=a.wrap,f=a.Series.prototype,h=a.Pointer.prototype;f.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)})};f.getConnectors=function(a,b,f,g){var c,e,k,l,h,m,p,r;e=g?1:0;c=0<=
b&&b<=a.length-1?b:0>b?a.length-1+b:0;b=0>c-1?a.length-(1+e):c-1;e=c+1>a.length-1?e:c+1;k=a[b];e=a[e];l=k.plotX;k=k.plotY;h=e.plotX;m=e.plotY;e=a[c].plotX;c=a[c].plotY;l=(1.5*e+l)/2.5;k=(1.5*c+k)/2.5;h=(1.5*e+h)/2.5;p=(1.5*c+m)/2.5;m=Math.sqrt(Math.pow(l-e,2)+Math.pow(k-c,2));r=Math.sqrt(Math.pow(h-e,2)+Math.pow(p-c,2));l=Math.atan2(k-c,l-e);p=Math.PI/2+(l+Math.atan2(p-c,h-e))/2;Math.abs(l-p)>Math.PI/2&&(p-=Math.PI);l=e+Math.cos(p)*m;k=c+Math.sin(p)*m;h=e+Math.cos(Math.PI+p)*r;p=c+Math.sin(Math.PI+
p)*r;e={rightContX:h,rightContY:p,leftContX:l,leftContY:k,plotX:e,plotY:c};f&&(e.prevPointCont=this.getConnectors(a,b,!1,g));return e};m(f,"buildKDTree",function(a){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");a.apply(this)});f.toXY=function(a){var b,c=this.chart,g=a.plotX;b=a.plotY;a.rectPlotX=g;a.rectPlotY=b;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop;
this.kdByAngle?(c=(g/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>c&&(c+=360),a.clientX=c):a.clientX=a.plotX};p.spline&&(m(p.spline.prototype,"getPointSpline",function(a,b,f,g){this.chart.polar?g?(a=this.getConnectors(b,g,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",f.plotX,f.plotY]:a=a.call(this,b,f,g);return a}),p.areasplinerange&&(p.areasplinerange.prototype.getPointSpline=p.spline.prototype.getPointSpline));
m(f,"translate",function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate))for(a=this.points,b=a.length;b--;)this.toXY(a[b])});m(f,"getGraphPath",function(a,b){var c=this,g,d,e;if(this.chart.polar){b=b||this.points;for(g=0;g<b.length;g++)if(!b[g].isNull){d=g;break}!1!==this.options.connectEnds&&void 0!==d&&(this.connectEnds=!0,b.splice(b.length,0,b[d]),e=!0);u(b,function(a){void 0===a.polarPlotY&&c.toXY(a)})}g=a.apply(this,[].slice.call(arguments,
1));e&&b.pop();return g});m(f,"animate",r);p.column&&(p=p.column.prototype,p.polarArc=function(a,b,f,g){var c=this.xAxis.center,e=this.yAxis.len;return this.chart.renderer.symbols.arc(c[0],c[1],e-b,null,{start:f,end:g,innerR:e-w(a,e)})},m(p,"animate",r),m(p,"translate",function(a){var b=this.xAxis,c=b.startAngleRad,g,d,e;this.preventPostTranslate=!0;a.call(this);if(b.isRadial)for(g=this.points,e=g.length;e--;)d=g[e],a=d.barX+c,d.shapeType="path",d.shapeArgs={d:this.polarArc(d.yBottom,d.plotY,a,a+
d.pointWidth)},this.toXY(d),d.tooltipPos=[d.plotX,d.plotY],d.ttBelow=d.plotY>b.center[1]}),m(p,"alignDataLabel",function(a,b,h,g,d,e){this.chart.polar?(a=b.rectPlotX/Math.PI*180,null===g.align&&(g.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===g.verticalAlign&&(g.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),f.alignDataLabel.call(this,b,h,g,d,e)):a.call(this,b,h,g,d,e)}));m(h,"getCoordinates",function(a,b){var c=this.chart,g={xAxis:[],yAxis:[]};c.polar?u(c.axes,function(a){var d=
a.isXAxis,f=a.center,h=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;g[d?"xAxis":"yAxis"].push({axis:a,value:a.translate(d?Math.PI-Math.atan2(h,f):Math.sqrt(Math.pow(h,2)+Math.pow(f,2)),!0)})}):g=a.call(this,b);return g});m(a.Chart.prototype,"getAxes",function(c){this.pane||(this.pane=[]);u(a.splat(this.options.pane),function(b){new a.Pane(b,this)},this);c.call(this)});m(a.Chart.prototype,"drawChartBox",function(a){a.call(this);u(this.pane,function(a){a.render()})});m(a.Chart.prototype,"get",
function(c,b){return a.find(this.pane,function(a){return a.options.id===b})||c.call(this,b)})})(x)});


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
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
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
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

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
});

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
    if (!inBrowser && typeof global !== 'undefined') {
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
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
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
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
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
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
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
    defineReactive(obj, keys[i], obj[keys[i]]);
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
    observerState.shouldConvert &&
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
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
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

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
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

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
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

// Determine MicroTask defer implementation.
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
 * the changes are queued using a Task instead of a MicroTask.
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
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

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
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
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
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
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

var uid$2 = 0;

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
  this.id = ++uid$2; // uid for batching
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
  observerState.shouldConvert = isRoot;
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
  observerState.shouldConvert = true;
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
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
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
  keyOrFn,
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
  return vm.$watch(keyOrFn, handler, options)
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
    observerState.shouldConvert = false;
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
    observerState.shouldConvert = true;
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
        if (source._provided && provideKey in source._provided) {
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

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
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
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
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
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

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
      if (vnode) {
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
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
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

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
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

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

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

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
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
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
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
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
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

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

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

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

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

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

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

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
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
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

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

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

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

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
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
	setAttribute: setAttribute
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
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

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
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
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
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
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
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
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
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
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
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
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
};

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
];

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
  if (isBooleanAttr(key)) {
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
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

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
};

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
    return ("_f(\"" + name + "\")(" + exp + "," + args)
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

  var newHandler = { value: value };
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
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
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
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
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
};

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
};

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
};

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
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
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
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
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
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

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
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
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
    if (value === oldValue) { return }
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
};

var platformDirectives = {
  model: directive,
  show: show
};

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
};

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
      true // removeOnly (!important avoids unnecessary moves)
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
};

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
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

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
};

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
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

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
var comment = /^<!--/;
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
            .replace(/<!--([\s\S]*?)-->/g, '$1')
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
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
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
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
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
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

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
};

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

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
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
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
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
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
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
};

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

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
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

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

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
 Highcharts JS v6.0.6 (2018-02-05)

 3D features for Highcharts JS

 @license: www.highcharts.com/license
*/
(function(C){"object"===typeof module&&module.exports?module.exports=C:C(Highcharts)})(function(C){(function(c){var q=c.deg2rad,u=c.pick;c.perspective=function(p,y,B){var v=y.options.chart.options3d,h=B?y.inverted:!1,z=y.plotWidth/2,t=y.plotHeight/2,A=v.depth/2,e=u(v.depth,1)*u(v.viewDistance,0),b=y.scale3d||1,f=q*v.beta*(h?-1:1),v=q*v.alpha*(h?-1:1),k=Math.cos(v),d=Math.cos(-f),a=Math.sin(v),m=Math.sin(-f);B||(z+=y.plotLeft,t+=y.plotTop);return c.map(p,function(c){var f,l;l=(h?c.y:c.x)-z;var r=(h?
c.x:c.y)-t,x=(c.z||0)-A;f=d*l-m*x;c=-a*m*l+k*r-d*a*x;l=k*m*l+a*r+k*d*x;r=0<e&&e<Number.POSITIVE_INFINITY?e/(l+A+e):1;f=f*r*b+z;c=c*r*b+t;return{x:h?c:f,y:h?f:c,z:l*b+A}})};c.pointCameraDistance=function(c,y){var p=y.options.chart.options3d,v=y.plotWidth/2;y=y.plotHeight/2;p=u(p.depth,1)*u(p.viewDistance,0)+p.depth;return Math.sqrt(Math.pow(v-c.plotX,2)+Math.pow(y-c.plotY,2)+Math.pow(p-c.plotZ,2))};c.shapeArea=function(c){var y=0,p,v;for(p=0;p<c.length;p++)v=(p+1)%c.length,y+=c[p].x*c[v].y-c[v].x*
c[p].y;return y/2};c.shapeArea3d=function(p,y,u){return c.shapeArea(c.perspective(p,y,u))}})(C);(function(c){function q(b,d,a,c,e,f,l,m){var g=[],r=f-e;return f>e&&f-e>Math.PI/2+.0001?(g=g.concat(q(b,d,a,c,e,e+Math.PI/2,l,m)),g=g.concat(q(b,d,a,c,e+Math.PI/2,f,l,m))):f<e&&e-f>Math.PI/2+.0001?(g=g.concat(q(b,d,a,c,e,e-Math.PI/2,l,m)),g=g.concat(q(b,d,a,c,e-Math.PI/2,f,l,m))):["C",b+a*Math.cos(e)-a*w*r*Math.sin(e)+l,d+c*Math.sin(e)+c*w*r*Math.cos(e)+m,b+a*Math.cos(f)+a*w*r*Math.sin(f)+l,d+c*Math.sin(f)-
c*w*r*Math.cos(f)+m,b+a*Math.cos(f)+l,d+c*Math.sin(f)+m]}var u=Math.cos,p=Math.PI,y=Math.sin,B=c.animObject,v=c.charts,h=c.color,z=c.defined,t=c.deg2rad,A=c.each,e=c.extend,b=c.inArray,f=c.map,k=c.merge,d=c.perspective,a=c.pick,m=c.SVGElement,l=c.SVGRenderer,n=c.wrap,w=4*(Math.sqrt(2)-1)/3/(p/2);l.prototype.toLinePath=function(b,d){var a=[];A(b,function(b){a.push("L",b.x,b.y)});b.length&&(a[0]="M",d&&a.push("Z"));return a};l.prototype.toLineSegments=function(b){var d=[],a=!0;A(b,function(b){d.push(a?
"M":"L",b.x,b.y);a=!a});return d};l.prototype.face3d=function(b){var e=this,g=this.createElement("path");g.vertexes=[];g.insidePlotArea=!1;g.enabled=!0;n(g,"attr",function(b,g){if("object"===typeof g&&(z(g.enabled)||z(g.vertexes)||z(g.insidePlotArea))){this.enabled=a(g.enabled,this.enabled);this.vertexes=a(g.vertexes,this.vertexes);this.insidePlotArea=a(g.insidePlotArea,this.insidePlotArea);delete g.enabled;delete g.vertexes;delete g.insidePlotArea;var f=d(this.vertexes,v[e.chartIndex],this.insidePlotArea),
l=e.toLinePath(f,!0),f=c.shapeArea(f),f=this.enabled&&0<f?"visible":"hidden";g.d=l;g.visibility=f}return b.apply(this,[].slice.call(arguments,1))});n(g,"animate",function(b,g){if("object"===typeof g&&(z(g.enabled)||z(g.vertexes)||z(g.insidePlotArea))){this.enabled=a(g.enabled,this.enabled);this.vertexes=a(g.vertexes,this.vertexes);this.insidePlotArea=a(g.insidePlotArea,this.insidePlotArea);delete g.enabled;delete g.vertexes;delete g.insidePlotArea;var f=d(this.vertexes,v[e.chartIndex],this.insidePlotArea),
l=e.toLinePath(f,!0),f=c.shapeArea(f),f=this.enabled&&0<f?"visible":"hidden";g.d=l;this.attr("visibility",f)}return b.apply(this,[].slice.call(arguments,1))});return g.attr(b)};l.prototype.polyhedron=function(b){var d=this,a=this.g(),e=a.destroy;a.attr({"stroke-linejoin":"round"});a.faces=[];a.destroy=function(){for(var b=0;b<a.faces.length;b++)a.faces[b].destroy();return e.call(this)};n(a,"attr",function(b,g,e,c,f){if("object"===typeof g&&z(g.faces)){for(;a.faces.length>g.faces.length;)a.faces.pop().destroy();
for(;a.faces.length<g.faces.length;)a.faces.push(d.face3d().add(a));for(var l=0;l<g.faces.length;l++)a.faces[l].attr(g.faces[l],null,c,f);delete g.faces}return b.apply(this,[].slice.call(arguments,1))});n(a,"animate",function(b,g,e,c){if(g&&g.faces){for(;a.faces.length>g.faces.length;)a.faces.pop().destroy();for(;a.faces.length<g.faces.length;)a.faces.push(d.face3d().add(a));for(var f=0;f<g.faces.length;f++)a.faces[f].animate(g.faces[f],e,c);delete g.faces}return b.apply(this,[].slice.call(arguments,
1))});return a.attr(b)};l.prototype.cuboid=function(b){var a=this.g(),d=a.destroy;b=this.cuboidPath(b);a.attr({"stroke-linejoin":"round"});a.front=this.path(b[0]).attr({"class":"highcharts-3d-front"}).add(a);a.top=this.path(b[1]).attr({"class":"highcharts-3d-top"}).add(a);a.side=this.path(b[2]).attr({"class":"highcharts-3d-side"}).add(a);a.fillSetter=function(b){this.front.attr({fill:b});this.top.attr({fill:h(b).brighten(.1).get()});this.side.attr({fill:h(b).brighten(-.1).get()});this.color=b;a.fill=
b;return this};a.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};a.attr=function(a,b,d,g){if("string"===typeof a&&"undefined"!==typeof b){var e=a;a={};a[e]=b}if(a.shapeArgs||z(a.x))a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0]}),this.top.attr({d:a[1]}),this.side.attr({d:a[2]});else return m.prototype.attr.call(this,a,void 0,d,g);return this};a.animate=function(a,b,d){z(a.x)&&z(a.y)?(a=this.renderer.cuboidPath(a),
this.front.animate({d:a[0]},b,d),this.top.animate({d:a[1]},b,d),this.side.animate({d:a[2]},b,d),this.attr({zIndex:-a[3]})):a.opacity?(this.front.animate(a,b,d),this.top.animate(a,b,d),this.side.animate(a,b,d)):m.prototype.animate.call(this,a,b,d);return this};a.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return d.call(this)};a.attr({zIndex:-b[3]});return a};c.SVGRenderer.prototype.cuboidPath=function(a){function b(a){return p[a]}var g=a.x,e=a.y,l=a.z,m=a.height,
k=a.width,r=a.depth,A=v[this.chartIndex],n,t,w=A.options.chart.options3d.alpha,h=0,p=[{x:g,y:e,z:l},{x:g+k,y:e,z:l},{x:g+k,y:e+m,z:l},{x:g,y:e+m,z:l},{x:g,y:e+m,z:l+r},{x:g+k,y:e+m,z:l+r},{x:g+k,y:e,z:l+r},{x:g,y:e,z:l+r}],p=d(p,A,a.insidePlotArea);t=function(a,d){var g=[[],-1];a=f(a,b);d=f(d,b);0>c.shapeArea(a)?g=[a,0]:0>c.shapeArea(d)&&(g=[d,1]);return g};n=t([3,2,1,0],[7,6,5,4]);a=n[0];k=n[1];n=t([1,6,7,0],[4,5,2,3]);m=n[0];r=n[1];n=t([1,2,5,6],[0,7,4,3]);t=n[0];n=n[1];1===n?h+=1E4*(1E3-g):n||
(h+=1E4*g);h+=10*(!r||0<=w&&180>=w||360>w&&357.5<w?A.plotHeight-e:10+e);1===k?h+=100*l:k||(h+=100*(1E3-l));h=-Math.round(h);return[this.toLinePath(a,!0),this.toLinePath(m,!0),this.toLinePath(t,!0),h]};c.SVGRenderer.prototype.arc3d=function(d){function c(a){var d=!1,g={};a=k(a);for(var e in a)-1!==b(e,l)&&(g[e]=a[e],delete a[e],d=!0);return d?g:!1}var g=this.g(),f=g.renderer,l="x y r innerR start end".split(" ");d=k(d);d.alpha*=t;d.beta*=t;g.top=f.path();g.side1=f.path();g.side2=f.path();g.inn=f.path();
g.out=f.path();g.onAdd=function(){var a=g.parentGroup,b=g.attr("class");g.top.add(g);A(["out","inn","side1","side2"],function(d){g[d].attr({"class":b+" highcharts-3d-side"}).add(a)})};A(["addClass","removeClass"],function(a){g[a]=function(){var b=arguments;A(["top","out","inn","side1","side2"],function(d){g[d][a].apply(g[d],b)})}});g.setPaths=function(a){var b=g.renderer.arc3dPath(a),d=100*b.zTop;g.attribs=a;g.top.attr({d:b.top,zIndex:b.zTop});g.inn.attr({d:b.inn,zIndex:b.zInn});g.out.attr({d:b.out,
zIndex:b.zOut});g.side1.attr({d:b.side1,zIndex:b.zSide1});g.side2.attr({d:b.side2,zIndex:b.zSide2});g.zIndex=d;g.attr({zIndex:d});a.center&&(g.top.setRadialReference(a.center),delete a.center)};g.setPaths(d);g.fillSetter=function(a){var b=h(a).brighten(-.1).get();this.fill=a;this.side1.attr({fill:b});this.side2.attr({fill:b});this.inn.attr({fill:b});this.out.attr({fill:b});this.top.attr({fill:a});return this};A(["opacity","translateX","translateY","visibility"],function(a){g[a+"Setter"]=function(a,
b){g[b]=a;A(["out","inn","side1","side2","top"],function(d){g[d].attr(b,a)})}});n(g,"attr",function(a,b){var d;"object"===typeof b&&(d=c(b))&&(e(g.attribs,d),g.setPaths(g.attribs));return a.apply(this,[].slice.call(arguments,1))});n(g,"animate",function(b,d,e,f){var l,m=this.attribs,r;delete d.center;delete d.z;delete d.depth;delete d.alpha;delete d.beta;r=B(a(e,this.renderer.globalAnimation));r.duration&&(l=c(d),d.dummy=g.dummy++,l&&(r.step=function(b,d){function g(b){return m[b]+(a(l[b],m[b])-m[b])*
d.pos}"dummy"===d.prop&&d.elem.setPaths(k(m,{x:g("x"),y:g("y"),r:g("r"),innerR:g("innerR"),start:g("start"),end:g("end")}))}),e=r);return b.call(this,d,e,f)});g.dummy=0;g.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();m.prototype.destroy.call(this)};g.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};g.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();
this.side2.show()};return g};l.prototype.arc3dPath=function(a){function b(a){a%=2*Math.PI;a>Math.PI&&(a=2*Math.PI-a);return a}var d=a.x,e=a.y,c=a.start,f=a.end-.00001,l=a.r,m=a.innerR,k=a.depth,n=a.alpha,t=a.beta,A=Math.cos(c),w=Math.sin(c);a=Math.cos(f);var r=Math.sin(f),h=l*Math.cos(t),l=l*Math.cos(n),v=m*Math.cos(t),z=m*Math.cos(n),m=k*Math.sin(t),B=k*Math.sin(n),k=["M",d+h*A,e+l*w],k=k.concat(q(d,e,h,l,c,f,0,0)),k=k.concat(["L",d+v*a,e+z*r]),k=k.concat(q(d,e,v,z,f,c,0,0)),k=k.concat(["Z"]),C=
0<t?Math.PI/2:0,t=0<n?0:Math.PI/2,C=c>-C?c:f>-C?-C:c,D=f<p-t?f:c<p-t?p-t:f,E=2*p-t,n=["M",d+h*u(C),e+l*y(C)],n=n.concat(q(d,e,h,l,C,D,0,0));f>E&&c<E?(n=n.concat(["L",d+h*u(D)+m,e+l*y(D)+B]),n=n.concat(q(d,e,h,l,D,E,m,B)),n=n.concat(["L",d+h*u(E),e+l*y(E)]),n=n.concat(q(d,e,h,l,E,f,0,0)),n=n.concat(["L",d+h*u(f)+m,e+l*y(f)+B]),n=n.concat(q(d,e,h,l,f,E,m,B)),n=n.concat(["L",d+h*u(E),e+l*y(E)]),n=n.concat(q(d,e,h,l,E,D,0,0))):f>p-t&&c<p-t&&(n=n.concat(["L",d+h*Math.cos(D)+m,e+l*Math.sin(D)+B]),n=n.concat(q(d,
e,h,l,D,f,m,B)),n=n.concat(["L",d+h*Math.cos(f),e+l*Math.sin(f)]),n=n.concat(q(d,e,h,l,f,D,0,0)));n=n.concat(["L",d+h*Math.cos(D)+m,e+l*Math.sin(D)+B]);n=n.concat(q(d,e,h,l,D,C,m,B));n=n.concat(["Z"]);t=["M",d+v*A,e+z*w];t=t.concat(q(d,e,v,z,c,f,0,0));t=t.concat(["L",d+v*Math.cos(f)+m,e+z*Math.sin(f)+B]);t=t.concat(q(d,e,v,z,f,c,m,B));t=t.concat(["Z"]);A=["M",d+h*A,e+l*w,"L",d+h*A+m,e+l*w+B,"L",d+v*A+m,e+z*w+B,"L",d+v*A,e+z*w,"Z"];d=["M",d+h*a,e+l*r,"L",d+h*a+m,e+l*r+B,"L",d+v*a+m,e+z*r+B,"L",d+v*
a,e+z*r,"Z"];r=Math.atan2(B,-m);e=Math.abs(f+r);a=Math.abs(c+r);c=Math.abs((c+f)/2+r);e=b(e);a=b(a);c=b(c);c*=1E5;f=1E5*a;e*=1E5;return{top:k,zTop:1E5*Math.PI+1,out:n,zOut:Math.max(c,f,e),inn:t,zInn:Math.max(c,f,e),side1:A,zSide1:.99*e,side2:d,zSide2:.99*f}}})(C);(function(c){function q(c,A){var e=c.plotLeft,b=c.plotWidth+e,f=c.plotTop,k=c.plotHeight+f,d=e+c.plotWidth/2,a=f+c.plotHeight/2,m=Number.MAX_VALUE,l=-Number.MAX_VALUE,n=Number.MAX_VALUE,t=-Number.MAX_VALUE,h,x=1;h=[{x:e,y:f,z:0},{x:e,y:f,
z:A}];p([0,1],function(a){h.push({x:b,y:h[a].y,z:h[a].z})});p([0,1,2,3],function(a){h.push({x:h[a].x,y:k,z:h[a].z})});h=B(h,c,!1);p(h,function(a){m=Math.min(m,a.x);l=Math.max(l,a.x);n=Math.min(n,a.y);t=Math.max(t,a.y)});e>m&&(x=Math.min(x,1-Math.abs((e+d)/(m+d))%1));b<l&&(x=Math.min(x,(b-d)/(l-d)));f>n&&(x=0>n?Math.min(x,(f+a)/(-n+f+a)):Math.min(x,1-(f+a)/(n+a)%1));k<t&&(x=Math.min(x,Math.abs((k-a)/(t-a))));return x}var u=c.Chart,p=c.each,y=c.merge,B=c.perspective,v=c.pick,h=c.wrap;u.prototype.is3d=
function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};u.prototype.propsRequireDirtyBox.push("chart.options3d");u.prototype.propsRequireUpdateSeries.push("chart.options3d");h(u.prototype,"initSeries",function(c,h){var e=h.type||this.options.chart.type||this.options.chart.defaultSeriesType;this.is3d()&&"scatter"===e&&(h.type="scatter3d");return c.call(this,h)});c.wrap(c.Chart.prototype,"isInsidePlot",function(c){return this.is3d()||c.apply(this,[].slice.call(arguments,
1))});var z=c.getOptions();y(!0,z,{chart:{options3d:{enabled:!1,alpha:0,beta:0,depth:100,fitToPlot:!0,viewDistance:25,axisLabelPosition:"default",frame:{visible:"default",size:1,bottom:{},top:{},left:{},right:{},back:{},front:{}}}}});h(u.prototype,"setClassName",function(c){c.apply(this,[].slice.call(arguments,1));this.is3d()&&(this.container.className+=" highcharts-3d-chart")});c.wrap(c.Chart.prototype,"setChartSize",function(c){var h=this.options.chart.options3d;c.apply(this,[].slice.call(arguments,
1));if(this.is3d()){var e=this.inverted,b=this.clipBox,f=this.margin;b[e?"y":"x"]=-(f[3]||0);b[e?"x":"y"]=-(f[0]||0);b[e?"height":"width"]=this.chartWidth+(f[3]||0)+(f[1]||0);b[e?"width":"height"]=this.chartHeight+(f[0]||0)+(f[2]||0);this.scale3d=1;!0===h.fitToPlot&&(this.scale3d=q(this,h.depth))}});h(u.prototype,"redraw",function(c){this.is3d()&&(this.isDirtyBox=!0,this.frame3d=this.get3dFrame());c.apply(this,[].slice.call(arguments,1))});h(u.prototype,"render",function(c){this.is3d()&&(this.frame3d=
this.get3dFrame());c.apply(this,[].slice.call(arguments,1))});h(u.prototype,"renderSeries",function(c){var h=this.series.length;if(this.is3d())for(;h--;)c=this.series[h],c.translate(),c.render();else c.call(this)});h(u.prototype,"drawChartBox",function(h){if(this.is3d()){var t=this.renderer,e=this.options.chart.options3d,b=this.get3dFrame(),f=this.plotLeft,k=this.plotLeft+this.plotWidth,d=this.plotTop,a=this.plotTop+this.plotHeight,e=e.depth,m=f-(b.left.visible?b.left.size:0),l=k+(b.right.visible?
b.right.size:0),n=d-(b.top.visible?b.top.size:0),w=a+(b.bottom.visible?b.bottom.size:0),r=0-(b.front.visible?b.front.size:0),x=e+(b.back.visible?b.back.size:0),g=this.hasRendered?"animate":"attr";this.frame3d=b;this.frameShapes||(this.frameShapes={bottom:t.polyhedron().add(),top:t.polyhedron().add(),left:t.polyhedron().add(),right:t.polyhedron().add(),back:t.polyhedron().add(),front:t.polyhedron().add()});this.frameShapes.bottom[g]({"class":"highcharts-3d-frame highcharts-3d-frame-bottom",zIndex:b.bottom.frontFacing?
-1E3:1E3,faces:[{fill:c.color(b.bottom.color).brighten(.1).get(),vertexes:[{x:m,y:w,z:r},{x:l,y:w,z:r},{x:l,y:w,z:x},{x:m,y:w,z:x}],enabled:b.bottom.visible},{fill:c.color(b.bottom.color).brighten(.1).get(),vertexes:[{x:f,y:a,z:e},{x:k,y:a,z:e},{x:k,y:a,z:0},{x:f,y:a,z:0}],enabled:b.bottom.visible},{fill:c.color(b.bottom.color).brighten(-.1).get(),vertexes:[{x:m,y:w,z:r},{x:m,y:w,z:x},{x:f,y:a,z:e},{x:f,y:a,z:0}],enabled:b.bottom.visible&&!b.left.visible},{fill:c.color(b.bottom.color).brighten(-.1).get(),
vertexes:[{x:l,y:w,z:x},{x:l,y:w,z:r},{x:k,y:a,z:0},{x:k,y:a,z:e}],enabled:b.bottom.visible&&!b.right.visible},{fill:c.color(b.bottom.color).get(),vertexes:[{x:l,y:w,z:r},{x:m,y:w,z:r},{x:f,y:a,z:0},{x:k,y:a,z:0}],enabled:b.bottom.visible&&!b.front.visible},{fill:c.color(b.bottom.color).get(),vertexes:[{x:m,y:w,z:x},{x:l,y:w,z:x},{x:k,y:a,z:e},{x:f,y:a,z:e}],enabled:b.bottom.visible&&!b.back.visible}]});this.frameShapes.top[g]({"class":"highcharts-3d-frame highcharts-3d-frame-top",zIndex:b.top.frontFacing?
-1E3:1E3,faces:[{fill:c.color(b.top.color).brighten(.1).get(),vertexes:[{x:m,y:n,z:x},{x:l,y:n,z:x},{x:l,y:n,z:r},{x:m,y:n,z:r}],enabled:b.top.visible},{fill:c.color(b.top.color).brighten(.1).get(),vertexes:[{x:f,y:d,z:0},{x:k,y:d,z:0},{x:k,y:d,z:e},{x:f,y:d,z:e}],enabled:b.top.visible},{fill:c.color(b.top.color).brighten(-.1).get(),vertexes:[{x:m,y:n,z:x},{x:m,y:n,z:r},{x:f,y:d,z:0},{x:f,y:d,z:e}],enabled:b.top.visible&&!b.left.visible},{fill:c.color(b.top.color).brighten(-.1).get(),vertexes:[{x:l,
y:n,z:r},{x:l,y:n,z:x},{x:k,y:d,z:e},{x:k,y:d,z:0}],enabled:b.top.visible&&!b.right.visible},{fill:c.color(b.top.color).get(),vertexes:[{x:m,y:n,z:r},{x:l,y:n,z:r},{x:k,y:d,z:0},{x:f,y:d,z:0}],enabled:b.top.visible&&!b.front.visible},{fill:c.color(b.top.color).get(),vertexes:[{x:l,y:n,z:x},{x:m,y:n,z:x},{x:f,y:d,z:e},{x:k,y:d,z:e}],enabled:b.top.visible&&!b.back.visible}]});this.frameShapes.left[g]({"class":"highcharts-3d-frame highcharts-3d-frame-left",zIndex:b.left.frontFacing?-1E3:1E3,faces:[{fill:c.color(b.left.color).brighten(.1).get(),
vertexes:[{x:m,y:w,z:r},{x:f,y:a,z:0},{x:f,y:a,z:e},{x:m,y:w,z:x}],enabled:b.left.visible&&!b.bottom.visible},{fill:c.color(b.left.color).brighten(.1).get(),vertexes:[{x:m,y:n,z:x},{x:f,y:d,z:e},{x:f,y:d,z:0},{x:m,y:n,z:r}],enabled:b.left.visible&&!b.top.visible},{fill:c.color(b.left.color).brighten(-.1).get(),vertexes:[{x:m,y:w,z:x},{x:m,y:n,z:x},{x:m,y:n,z:r},{x:m,y:w,z:r}],enabled:b.left.visible},{fill:c.color(b.left.color).brighten(-.1).get(),vertexes:[{x:f,y:d,z:e},{x:f,y:a,z:e},{x:f,y:a,z:0},
{x:f,y:d,z:0}],enabled:b.left.visible},{fill:c.color(b.left.color).get(),vertexes:[{x:m,y:w,z:r},{x:m,y:n,z:r},{x:f,y:d,z:0},{x:f,y:a,z:0}],enabled:b.left.visible&&!b.front.visible},{fill:c.color(b.left.color).get(),vertexes:[{x:m,y:n,z:x},{x:m,y:w,z:x},{x:f,y:a,z:e},{x:f,y:d,z:e}],enabled:b.left.visible&&!b.back.visible}]});this.frameShapes.right[g]({"class":"highcharts-3d-frame highcharts-3d-frame-right",zIndex:b.right.frontFacing?-1E3:1E3,faces:[{fill:c.color(b.right.color).brighten(.1).get(),
vertexes:[{x:l,y:w,z:x},{x:k,y:a,z:e},{x:k,y:a,z:0},{x:l,y:w,z:r}],enabled:b.right.visible&&!b.bottom.visible},{fill:c.color(b.right.color).brighten(.1).get(),vertexes:[{x:l,y:n,z:r},{x:k,y:d,z:0},{x:k,y:d,z:e},{x:l,y:n,z:x}],enabled:b.right.visible&&!b.top.visible},{fill:c.color(b.right.color).brighten(-.1).get(),vertexes:[{x:k,y:d,z:0},{x:k,y:a,z:0},{x:k,y:a,z:e},{x:k,y:d,z:e}],enabled:b.right.visible},{fill:c.color(b.right.color).brighten(-.1).get(),vertexes:[{x:l,y:w,z:r},{x:l,y:n,z:r},{x:l,y:n,
z:x},{x:l,y:w,z:x}],enabled:b.right.visible},{fill:c.color(b.right.color).get(),vertexes:[{x:l,y:n,z:r},{x:l,y:w,z:r},{x:k,y:a,z:0},{x:k,y:d,z:0}],enabled:b.right.visible&&!b.front.visible},{fill:c.color(b.right.color).get(),vertexes:[{x:l,y:w,z:x},{x:l,y:n,z:x},{x:k,y:d,z:e},{x:k,y:a,z:e}],enabled:b.right.visible&&!b.back.visible}]});this.frameShapes.back[g]({"class":"highcharts-3d-frame highcharts-3d-frame-back",zIndex:b.back.frontFacing?-1E3:1E3,faces:[{fill:c.color(b.back.color).brighten(.1).get(),
vertexes:[{x:l,y:w,z:x},{x:m,y:w,z:x},{x:f,y:a,z:e},{x:k,y:a,z:e}],enabled:b.back.visible&&!b.bottom.visible},{fill:c.color(b.back.color).brighten(.1).get(),vertexes:[{x:m,y:n,z:x},{x:l,y:n,z:x},{x:k,y:d,z:e},{x:f,y:d,z:e}],enabled:b.back.visible&&!b.top.visible},{fill:c.color(b.back.color).brighten(-.1).get(),vertexes:[{x:m,y:w,z:x},{x:m,y:n,z:x},{x:f,y:d,z:e},{x:f,y:a,z:e}],enabled:b.back.visible&&!b.left.visible},{fill:c.color(b.back.color).brighten(-.1).get(),vertexes:[{x:l,y:n,z:x},{x:l,y:w,
z:x},{x:k,y:a,z:e},{x:k,y:d,z:e}],enabled:b.back.visible&&!b.right.visible},{fill:c.color(b.back.color).get(),vertexes:[{x:f,y:d,z:e},{x:k,y:d,z:e},{x:k,y:a,z:e},{x:f,y:a,z:e}],enabled:b.back.visible},{fill:c.color(b.back.color).get(),vertexes:[{x:m,y:w,z:x},{x:l,y:w,z:x},{x:l,y:n,z:x},{x:m,y:n,z:x}],enabled:b.back.visible}]});this.frameShapes.front[g]({"class":"highcharts-3d-frame highcharts-3d-frame-front",zIndex:b.front.frontFacing?-1E3:1E3,faces:[{fill:c.color(b.front.color).brighten(.1).get(),
vertexes:[{x:m,y:w,z:r},{x:l,y:w,z:r},{x:k,y:a,z:0},{x:f,y:a,z:0}],enabled:b.front.visible&&!b.bottom.visible},{fill:c.color(b.front.color).brighten(.1).get(),vertexes:[{x:l,y:n,z:r},{x:m,y:n,z:r},{x:f,y:d,z:0},{x:k,y:d,z:0}],enabled:b.front.visible&&!b.top.visible},{fill:c.color(b.front.color).brighten(-.1).get(),vertexes:[{x:m,y:n,z:r},{x:m,y:w,z:r},{x:f,y:a,z:0},{x:f,y:d,z:0}],enabled:b.front.visible&&!b.left.visible},{fill:c.color(b.front.color).brighten(-.1).get(),vertexes:[{x:l,y:w,z:r},{x:l,
y:n,z:r},{x:k,y:d,z:0},{x:k,y:a,z:0}],enabled:b.front.visible&&!b.right.visible},{fill:c.color(b.front.color).get(),vertexes:[{x:k,y:d,z:0},{x:f,y:d,z:0},{x:f,y:a,z:0},{x:k,y:a,z:0}],enabled:b.front.visible},{fill:c.color(b.front.color).get(),vertexes:[{x:l,y:w,z:r},{x:m,y:w,z:r},{x:m,y:n,z:r},{x:l,y:n,z:r}],enabled:b.front.visible}]})}return h.apply(this,[].slice.call(arguments,1))});u.prototype.retrieveStacks=function(c){var h=this.series,e={},b,f=1;p(this.series,function(k){b=v(k.options.stack,
c?0:h.length-1-k.index);e[b]?e[b].series.push(k):(e[b]={series:[k],position:f},f++)});e.totalStacks=f+1;return e};u.prototype.get3dFrame=function(){var h=this,A=h.options.chart.options3d,e=A.frame,b=h.plotLeft,f=h.plotLeft+h.plotWidth,k=h.plotTop,d=h.plotTop+h.plotHeight,a=A.depth,m=function(a){a=c.shapeArea3d(a,h);return.5<a?1:-.5>a?-1:0},l=m([{x:b,y:d,z:a},{x:f,y:d,z:a},{x:f,y:d,z:0},{x:b,y:d,z:0}]),n=m([{x:b,y:k,z:0},{x:f,y:k,z:0},{x:f,y:k,z:a},{x:b,y:k,z:a}]),w=m([{x:b,y:k,z:0},{x:b,y:k,z:a},
{x:b,y:d,z:a},{x:b,y:d,z:0}]),r=m([{x:f,y:k,z:a},{x:f,y:k,z:0},{x:f,y:d,z:0},{x:f,y:d,z:a}]),x=m([{x:b,y:d,z:0},{x:f,y:d,z:0},{x:f,y:k,z:0},{x:b,y:k,z:0}]),m=m([{x:b,y:k,z:a},{x:f,y:k,z:a},{x:f,y:d,z:a},{x:b,y:d,z:a}]),g=!1,z=!1,y=!1,u=!1;p([].concat(h.xAxis,h.yAxis,h.zAxis),function(a){a&&(a.horiz?a.opposite?z=!0:g=!0:a.opposite?u=!0:y=!0)});var q=function(a,d,b){for(var e=["size","color","visible"],c={},f=0;f<e.length;f++)for(var l=e[f],g=0;g<a.length;g++)if("object"===typeof a[g]){var m=a[g][l];
if(void 0!==m&&null!==m){c[l]=m;break}}a=b;!0===c.visible||!1===c.visible?a=c.visible:"auto"===c.visible&&(a=0<d);return{size:v(c.size,1),color:v(c.color,"none"),frontFacing:0<d,visible:a}},e={bottom:q([e.bottom,e.top,e],l,g),top:q([e.top,e.bottom,e],n,z),left:q([e.left,e.right,e.side,e],w,y),right:q([e.right,e.left,e.side,e],r,u),back:q([e.back,e.front,e],m,!0),front:q([e.front,e.back,e],x,!1)};"auto"===A.axisLabelPosition?(r=function(a,d){return a.visible!==d.visible||a.visible&&d.visible&&a.frontFacing!==
d.frontFacing},A=[],r(e.left,e.front)&&A.push({y:(k+d)/2,x:b,z:0,xDir:{x:1,y:0,z:0}}),r(e.left,e.back)&&A.push({y:(k+d)/2,x:b,z:a,xDir:{x:0,y:0,z:-1}}),r(e.right,e.front)&&A.push({y:(k+d)/2,x:f,z:0,xDir:{x:0,y:0,z:1}}),r(e.right,e.back)&&A.push({y:(k+d)/2,x:f,z:a,xDir:{x:-1,y:0,z:0}}),l=[],r(e.bottom,e.front)&&l.push({x:(b+f)/2,y:d,z:0,xDir:{x:1,y:0,z:0}}),r(e.bottom,e.back)&&l.push({x:(b+f)/2,y:d,z:a,xDir:{x:-1,y:0,z:0}}),n=[],r(e.top,e.front)&&n.push({x:(b+f)/2,y:k,z:0,xDir:{x:1,y:0,z:0}}),r(e.top,
e.back)&&n.push({x:(b+f)/2,y:k,z:a,xDir:{x:-1,y:0,z:0}}),w=[],r(e.bottom,e.left)&&w.push({z:(0+a)/2,y:d,x:b,xDir:{x:0,y:0,z:-1}}),r(e.bottom,e.right)&&w.push({z:(0+a)/2,y:d,x:f,xDir:{x:0,y:0,z:1}}),d=[],r(e.top,e.left)&&d.push({z:(0+a)/2,y:k,x:b,xDir:{x:0,y:0,z:-1}}),r(e.top,e.right)&&d.push({z:(0+a)/2,y:k,x:f,xDir:{x:0,y:0,z:1}}),b=function(a,d,b){if(0===a.length)return null;if(1===a.length)return a[0];for(var e=0,c=B(a,h,!1),f=1;f<c.length;f++)b*c[f][d]>b*c[e][d]?e=f:b*c[f][d]===b*c[e][d]&&c[f].z<
c[e].z&&(e=f);return a[e]},e.axes={y:{left:b(A,"x",-1),right:b(A,"x",1)},x:{top:b(n,"y",-1),bottom:b(l,"y",1)},z:{top:b(d,"y",-1),bottom:b(w,"y",1)}}):e.axes={y:{left:{x:b,z:0,xDir:{x:1,y:0,z:0}},right:{x:f,z:0,xDir:{x:0,y:0,z:1}}},x:{top:{y:k,z:0,xDir:{x:1,y:0,z:0}},bottom:{y:d,z:0,xDir:{x:1,y:0,z:0}}},z:{top:{x:y?f:b,y:k,xDir:y?{x:0,y:0,z:1}:{x:0,y:0,z:-1}},bottom:{x:y?f:b,y:d,xDir:y?{x:0,y:0,z:1}:{x:0,y:0,z:-1}}}};return e};c.Fx.prototype.matrixSetter=function(){var h;if(1>this.pos&&(c.isArray(this.start)||
c.isArray(this.end))){var A=this.start||[1,0,0,1,0,0],e=this.end||[1,0,0,1,0,0];h=[];for(var b=0;6>b;b++)h.push(this.pos*e[b]+(1-this.pos)*A[b])}else h=this.end;this.elem.attr(this.prop,h,null,!0)}})(C);(function(c){function q(d,a,b){if(!d.chart.is3d()||"colorAxis"===d.coll)return a;var c=d.chart,f=B*c.options.chart.options3d.alpha,m=B*c.options.chart.options3d.beta,h=A(b&&d.options.title.position3d,d.options.labels.position3d);b=A(b&&d.options.title.skew3d,d.options.labels.skew3d);var k=c.frame3d,
g=c.plotLeft,v=c.plotWidth+g,p=c.plotTop,y=c.plotHeight+p,c=!1,z=0,u=0,q={x:0,y:1,z:0};a=d.swapZ({x:a.x,y:a.y,z:0});if(d.isZAxis)if(d.opposite){if(null===k.axes.z.top)return{};u=a.y-p;a.x=k.axes.z.top.x;a.y=k.axes.z.top.y;g=k.axes.z.top.xDir;c=!k.top.frontFacing}else{if(null===k.axes.z.bottom)return{};u=a.y-y;a.x=k.axes.z.bottom.x;a.y=k.axes.z.bottom.y;g=k.axes.z.bottom.xDir;c=!k.bottom.frontFacing}else if(d.horiz)if(d.opposite){if(null===k.axes.x.top)return{};u=a.y-p;a.y=k.axes.x.top.y;a.z=k.axes.x.top.z;
g=k.axes.x.top.xDir;c=!k.top.frontFacing}else{if(null===k.axes.x.bottom)return{};u=a.y-y;a.y=k.axes.x.bottom.y;a.z=k.axes.x.bottom.z;g=k.axes.x.bottom.xDir;c=!k.bottom.frontFacing}else if(d.opposite){if(null===k.axes.y.right)return{};z=a.x-v;a.x=k.axes.y.right.x;a.z=k.axes.y.right.z;g=k.axes.y.right.xDir;g={x:g.z,y:g.y,z:-g.x}}else{if(null===k.axes.y.left)return{};z=a.x-g;a.x=k.axes.y.left.x;a.z=k.axes.y.left.z;g=k.axes.y.left.xDir}"chart"!==h&&("flap"===h?d.horiz?(m=Math.sin(f),f=Math.cos(f),d.opposite&&
(m=-m),c&&(m=-m),q={x:g.z*m,y:f,z:-g.x*m}):g={x:Math.cos(m),y:0,z:Math.sin(m)}:"ortho"===h?d.horiz?(q=Math.cos(f),h=Math.sin(m)*q,f=-Math.sin(f),m=-q*Math.cos(m),q={x:g.y*m-g.z*f,y:g.z*h-g.x*m,z:g.x*f-g.y*h},f=1/Math.sqrt(q.x*q.x+q.y*q.y+q.z*q.z),c&&(f=-f),q={x:f*q.x,y:f*q.y,z:f*q.z}):g={x:Math.cos(m),y:0,z:Math.sin(m)}:d.horiz?q={x:Math.sin(m)*Math.sin(f),y:Math.cos(f),z:-Math.cos(m)*Math.sin(f)}:g={x:Math.cos(m),y:0,z:Math.sin(m)});a.x+=z*g.x+u*q.x;a.y+=z*g.y+u*q.y;a.z+=z*g.z+u*q.z;c=t([a],d.chart)[0];
b?(0>e(t([a,{x:a.x+g.x,y:a.y+g.y,z:a.z+g.z},{x:a.x+q.x,y:a.y+q.y,z:a.z+q.z}],d.chart))&&(g={x:-g.x,y:-g.y,z:-g.z}),d=t([{x:a.x,y:a.y,z:a.z},{x:a.x+g.x,y:a.y+g.y,z:a.z+g.z},{x:a.x+q.x,y:a.y+q.y,z:a.z+q.z}],d.chart),c.matrix=[d[1].x-d[0].x,d[1].y-d[0].y,d[2].x-d[0].x,d[2].y-d[0].y,c.x,c.y],c.matrix[4]-=c.x*c.matrix[0]+c.y*c.matrix[2],c.matrix[5]-=c.x*c.matrix[1]+c.y*c.matrix[3]):c.matrix=null;return c}var u,p=c.Axis,y=c.Chart,B=c.deg2rad,v=c.each,h=c.extend,z=c.merge,t=c.perspective,A=c.pick,e=c.shapeArea,
b=c.splat,f=c.Tick,k=c.wrap;z(!0,p.prototype.defaultOptions,{labels:{position3d:"offset",skew3d:!1},title:{position3d:null,skew3d:null}});k(p.prototype,"setOptions",function(d,a){d.call(this,a);this.chart.is3d&&this.chart.is3d()&&"colorAxis"!==this.coll&&(d=this.options,d.tickWidth=A(d.tickWidth,0),d.gridLineWidth=A(d.gridLineWidth,1))});k(p.prototype,"getPlotLinePath",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d()||"colorAxis"===this.coll||null===a)return a;var b=
this.chart,c=b.options.chart.options3d,c=this.isZAxis?b.plotWidth:c.depth,b=b.frame3d,a=[this.swapZ({x:a[1],y:a[2],z:0}),this.swapZ({x:a[1],y:a[2],z:c}),this.swapZ({x:a[4],y:a[5],z:0}),this.swapZ({x:a[4],y:a[5],z:c})],c=[];this.horiz?(this.isZAxis?(b.left.visible&&c.push(a[0],a[2]),b.right.visible&&c.push(a[1],a[3])):(b.front.visible&&c.push(a[0],a[2]),b.back.visible&&c.push(a[1],a[3])),b.top.visible&&c.push(a[0],a[1]),b.bottom.visible&&c.push(a[2],a[3])):(b.front.visible&&c.push(a[0],a[2]),b.back.visible&&
c.push(a[1],a[3]),b.left.visible&&c.push(a[0],a[1]),b.right.visible&&c.push(a[2],a[3]));c=t(c,this.chart,!1);return this.chart.renderer.toLineSegments(c)});k(p.prototype,"getLinePath",function(b){return this.chart.is3d()&&"colorAxis"!==this.coll?[]:b.apply(this,[].slice.call(arguments,1))});k(p.prototype,"getPlotBandPath",function(b){if(!this.chart.is3d()||"colorAxis"===this.coll)return b.apply(this,[].slice.call(arguments,1));var a=arguments,d=a[2],c=[],a=this.getPlotLinePath(a[1]),d=this.getPlotLinePath(d);
if(a&&d)for(var e=0;e<a.length;e+=6)c.push("M",a[e+1],a[e+2],"L",a[e+4],a[e+5],"L",d[e+4],d[e+5],"L",d[e+1],d[e+2],"Z");return c});k(f.prototype,"getMarkPath",function(b){var a=b.apply(this,[].slice.call(arguments,1)),a=[q(this.axis,{x:a[1],y:a[2],z:0}),q(this.axis,{x:a[4],y:a[5],z:0})];return this.axis.chart.renderer.toLineSegments(a)});k(f.prototype,"getLabelPosition",function(b){var a=b.apply(this,[].slice.call(arguments,1));return q(this.axis,a)});k(p.prototype,"getTitlePosition",function(b){var a=
b.apply(this,[].slice.call(arguments,1));return q(this,a,!0)});k(p.prototype,"drawCrosshair",function(b){var a=arguments;this.chart.is3d()&&"colorAxis"!==this.coll&&a[2]&&(a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY});b.apply(this,[].slice.call(a,1))});k(p.prototype,"destroy",function(b){v(["backFrame","bottomFrame","sideFrame"],function(a){this[a]&&(this[a]=this[a].destroy())},this);b.apply(this,[].slice.call(arguments,1))});p.prototype.swapZ=function(b,a){return this.isZAxis?
(a=a?0:this.chart.plotLeft,{x:a+b.z,y:b.y,z:b.x-a}):b};u=c.ZAxis=function(){this.init.apply(this,arguments)};h(u.prototype,p.prototype);h(u.prototype,{isZAxis:!0,setOptions:function(b){b=z({offset:0,lineWidth:0},b);p.prototype.setOptions.call(this,b);this.coll="zAxis"},setAxisSize:function(){p.prototype.setAxisSize.call(this);this.width=this.len=this.chart.options.chart.options3d.depth;this.right=this.chart.chartWidth-this.width-this.left},getSeriesExtremes:function(){var b=this,a=b.chart;b.hasVisibleSeries=
!1;b.dataMin=b.dataMax=b.ignoreMinPadding=b.ignoreMaxPadding=null;b.buildStacks&&b.buildStacks();v(b.series,function(d){if(d.visible||!a.options.chart.ignoreHiddenSeries)b.hasVisibleSeries=!0,d=d.zData,d.length&&(b.dataMin=Math.min(A(b.dataMin,d[0]),Math.min.apply(null,d)),b.dataMax=Math.max(A(b.dataMax,d[0]),Math.max.apply(null,d)))})}});k(y.prototype,"getAxes",function(d){var a=this,c=this.options,c=c.zAxis=b(c.zAxis||{});d.call(this);a.is3d()&&(this.zAxis=[],v(c,function(b,d){b.index=d;b.isX=!0;
(new u(a,b)).setScale()}))})})(C);(function(c){var q=c.perspective,u=c.pick,p=c.wrap;p(c.Series.prototype,"translate",function(c){c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.translate3dPoints()});c.Series.prototype.translate3dPoints=function(){var c=this.chart,p=u(this.zAxis,c.options.zAxis[0]),v=[],h,z,t;for(t=0;t<this.data.length;t++)h=this.data[t],p&&p.translate?(z=p.isLog&&p.val2lin?p.val2lin(h.z):h.z,h.plotZ=p.translate(z),h.isInside=h.isInside?z>=p.min&&z<=p.max:!1):h.plotZ=
0,v.push({x:u(h.plotXold,h.plotX),y:u(h.plotYold,h.plotY),z:u(h.plotZold,h.plotZ)});c=q(v,c,!0);for(t=0;t<this.data.length;t++)h=this.data[t],p=c[t],h.plotXold=h.plotX,h.plotYold=h.plotY,h.plotZold=h.plotZ,h.plotX=p.x,h.plotY=p.y,h.plotZ=p.z}})(C);(function(c){function q(c){var e=c.apply(this,[].slice.call(arguments,1));this.chart.is3d&&this.chart.is3d()&&(e.stroke=this.options.edgeColor||e.fill,e["stroke-width"]=y(this.options.edgeWidth,1));return e}var u=c.each,p=c.perspective,y=c.pick,B=c.Series,
v=c.seriesTypes,h=c.inArray,z=c.svg,t=c.wrap;t(v.column.prototype,"translate",function(c){c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.translate3dShapes()});v.column.prototype.translate3dPoints=function(){};v.column.prototype.translate3dShapes=function(){var c=this,e=c.chart,b=c.options,f=b.depth||25,k=(b.stacking?b.stack||0:c.index)*(f+(b.groupZPadding||1)),d=c.borderWidth%2?.5:0;e.inverted&&!c.yAxis.reversed&&(d*=-1);!1!==b.grouping&&(k=0);k+=b.groupZPadding||1;u(c.data,function(a){if(null!==
a.y){var b=a.shapeArgs,h=a.tooltipPos,n;u([["x","width"],["y","height"]],function(a){n=b[a[0]]-d;0>n&&(b[a[1]]+=b[a[0]]+d,b[a[0]]=-d,n=0);n+b[a[1]]>c[a[0]+"Axis"].len&&0!==b[a[1]]&&(b[a[1]]=c[a[0]+"Axis"].len-b[a[0]]);if(0!==b[a[1]]&&(b[a[0]]>=c[a[0]+"Axis"].len||b[a[0]]+b[a[1]]<=d))for(var e in b)b[e]=0});a.shapeType="cuboid";b.z=k;b.depth=f;b.insidePlotArea=!0;h=p([{x:h[0],y:h[1],z:k}],e,!0)[0];a.tooltipPos=[h.x,h.y]}});c.z=k};t(v.column.prototype,"animate",function(c){if(this.chart.is3d()){var e=
arguments[1],b=this.yAxis,f=this,k=this.yAxis.reversed;z&&(e?u(f.data,function(c){null!==c.y&&(c.height=c.shapeArgs.height,c.shapey=c.shapeArgs.y,c.shapeArgs.height=1,k||(c.shapeArgs.y=c.stackY?c.plotY+b.translate(c.stackY):c.plotY+(c.negative?-c.height:c.height)))}):(u(f.data,function(b){null!==b.y&&(b.shapeArgs.height=b.height,b.shapeArgs.y=b.shapey,b.graphic&&b.graphic.animate(b.shapeArgs,f.options.animation))}),this.drawDataLabels(),f.animate=null))}else c.apply(this,[].slice.call(arguments,1))});
t(v.column.prototype,"plotGroup",function(c,e,b,f,k,d){this.chart.is3d()&&d&&!this[e]&&(this.chart.columnGroup||(this.chart.columnGroup=this.chart.renderer.g("columnGroup").add(d)),this[e]=this.chart.columnGroup,this.chart.columnGroup.attr(this.getPlotBox()),this[e].survive=!0);return c.apply(this,Array.prototype.slice.call(arguments,1))});t(v.column.prototype,"setVisible",function(c,e){var b=this,f;b.chart.is3d()&&u(b.data,function(c){f=(c.visible=c.options.visible=e=void 0===e?!c.visible:e)?"visible":
"hidden";b.options.data[h(c,b.data)]=c.options;c.graphic&&c.graphic.attr({visibility:f})});c.apply(this,Array.prototype.slice.call(arguments,1))});t(v.column.prototype,"init",function(c){c.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var e=this.options,b=e.grouping,f=e.stacking,h=y(this.yAxis.options.reversedStacks,!0),d=0;if(void 0===b||b){b=this.chart.retrieveStacks(f);d=e.stack||0;for(f=0;f<b[d].series.length&&b[d].series[f]!==this;f++);d=10*(b.totalStacks-b[d].position)+(h?f:-f);
this.xAxis.reversed||(d=10*b.totalStacks-d)}e.zIndex=d}});t(v.column.prototype,"pointAttribs",q);v.columnrange&&(t(v.columnrange.prototype,"pointAttribs",q),v.columnrange.prototype.plotGroup=v.column.prototype.plotGroup,v.columnrange.prototype.setVisible=v.column.prototype.setVisible);t(B.prototype,"alignDataLabel",function(c){if(this.chart.is3d()&&("column"===this.type||"columnrange"===this.type)){var e=arguments[4],b={x:e.x,y:e.y,z:this.z},b=p([b],this.chart,!0)[0];e.x=b.x;e.y=b.y}c.apply(this,
[].slice.call(arguments,1))});t(c.StackItem.prototype,"getStackBox",function(h,e){var b=h.apply(this,[].slice.call(arguments,1));if(e.is3d()){var f={x:b.x,y:b.y,z:0},f=c.perspective([f],e,!0)[0];b.x=f.x;b.y=f.y}return b})})(C);(function(c){var q=c.deg2rad,u=c.each,p=c.pick,y=c.seriesTypes,B=c.svg;c=c.wrap;c(y.pie.prototype,"translate",function(c){c.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var h=this,p=h.options,t=p.depth||0,v=h.chart.options.chart.options3d,e=v.alpha,b=v.beta,
f=p.stacking?(p.stack||0)*t:h._i*t,f=f+t/2;!1!==p.grouping&&(f=0);u(h.data,function(c){var d=c.shapeArgs;c.shapeType="arc3d";d.z=f;d.depth=.75*t;d.alpha=e;d.beta=b;d.center=h.center;d=(d.end+d.start)/2;c.slicedTranslation={translateX:Math.round(Math.cos(d)*p.slicedOffset*Math.cos(e*q)),translateY:Math.round(Math.sin(d)*p.slicedOffset*Math.cos(e*q))}})}});c(y.pie.prototype.pointClass.prototype,"haloPath",function(c){var h=arguments;return this.series.chart.is3d()?[]:c.call(this,h[1])});c(y.pie.prototype,
"pointAttribs",function(c,h,q){c=c.call(this,h,q);q=this.options;this.chart.is3d()&&(c.stroke=q.edgeColor||h.color||this.color,c["stroke-width"]=p(q.edgeWidth,1));return c});c(y.pie.prototype,"drawPoints",function(c){c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&u(this.points,function(c){var h=c.graphic;if(h)h[c.y&&c.visible?"show":"hide"]()})});c(y.pie.prototype,"drawDataLabels",function(c){if(this.chart.is3d()){var h=this.chart.options.chart.options3d;u(this.data,function(c){var p=
c.shapeArgs,v=p.r,e=(p.start+p.end)/2,b=c.labelPos,f=-v*(1-Math.cos((p.alpha||h.alpha)*q))*Math.sin(e),k=v*(Math.cos((p.beta||h.beta)*q)-1)*Math.cos(e);u([0,2,4],function(c){b[c]+=k;b[c+1]+=f})})}c.apply(this,[].slice.call(arguments,1))});c(y.pie.prototype,"addPoint",function(c){c.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update(this.userOptions,!0)});c(y.pie.prototype,"animate",function(c){if(this.chart.is3d()){var h=arguments[1],p=this.options.animation,t=this.center,q=this.group,
e=this.markerGroup;B&&(!0===p&&(p={}),h?(q.oldtranslateX=q.translateX,q.oldtranslateY=q.translateY,h={translateX:t[0],translateY:t[1],scaleX:.001,scaleY:.001},q.attr(h),e&&(e.attrSetters=q.attrSetters,e.attr(h))):(h={translateX:q.oldtranslateX,translateY:q.oldtranslateY,scaleX:1,scaleY:1},q.animate(h,p),e&&e.animate(h,p),this.animate=null))}else c.apply(this,[].slice.call(arguments,1))})})(C);(function(c){var q=c.Point,u=c.seriesType,p=c.seriesTypes;u("scatter3d","scatter",{tooltip:{pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e"}},
{pointAttribs:function(q){var u=p.scatter.prototype.pointAttribs.apply(this,arguments);this.chart.is3d()&&q&&(u.zIndex=c.pointCameraDistance(q,this.chart));return u},axisTypes:["xAxis","yAxis","zAxis"],pointArrayMap:["x","y","z"],parallelArrays:["x","y","z"],directTouch:!0},{applyOptions:function(){q.prototype.applyOptions.apply(this,arguments);void 0===this.z&&(this.z=0);return this}})})(C);(function(c){var q=c.Axis,u=c.SVGRenderer,p=c.VMLRenderer;p&&(c.setOptions({animate:!1}),p.prototype.face3d=
u.prototype.face3d,p.prototype.polyhedron=u.prototype.polyhedron,p.prototype.cuboid=u.prototype.cuboid,p.prototype.cuboidPath=u.prototype.cuboidPath,p.prototype.toLinePath=u.prototype.toLinePath,p.prototype.toLineSegments=u.prototype.toLineSegments,p.prototype.createElement3D=u.prototype.createElement3D,p.prototype.arc3d=function(c){c=u.prototype.arc3d.call(this,c);c.css({zIndex:c.zIndex});return c},c.VMLRenderer.prototype.arc3dPath=c.SVGRenderer.prototype.arc3dPath,c.wrap(q.prototype,"render",function(c){c.apply(this,
[].slice.call(arguments,1));this.sideFrame&&(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))}))})(C)});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)
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
Y;this.boostClear&&this.boostClear();this.visible&&(99999<J.length&&(f.options.loading=ca(l,{labelStyle:{backgroundColor:c.color("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),clearTimeout(I),f.showLoading("Drawing..."),f.options.loading=l),e&&console.time("canvas rendering"),c.eachAsync(n,function(b,c){var e,g,h,k=!1,l=!1,m=!1,u=!1,W="undefined"===typeof f.index,q=!0;if(!W){U?(e=b[0],g=b[1],n[c+1]&&(m=n[c+1][0]),n[c-1]&&(u=n[c-1][0])):
(e=b,g=w[c],n[c+1]&&(m=n[c+1]),n[c-1]&&(u=n[c-1]));m&&m>=z&&m<=A&&(k=!0);u&&u>=z&&u<=A&&(l=!0);R?(U&&(g=b.slice(1,3)),h=g[0],g=g[1]):S&&(e=b.x,g=b.stackY,h=g-b.y);b=null===g;ka||(q=g>=y&&g<=ea);if(!b&&(e>=z&&e<=A&&q||k||l))if(e=Math.round(t.toPixels(e,!0)),fa){if(void 0===r||e===B){R||(h=g);if(void 0===v||g>F)F=g,v=c;if(void 0===r||h<E)E=h,r=c}e!==B&&(void 0!==r&&(g=d.toPixels(F,!0),p=d.toPixels(E,!0),X(e,P?Math.min(g,Q):g,P?Math.max(p,Q):p,c),H(e,g,v),p!==g&&H(e,p,r)),r=v=void 0,B=e)}else g=Math.round(d.toPixels(g,
!0)),X(e,g,p,c),H(e,g,c);T=b&&!la;0===c%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!W},function(){var b=f.loadingDiv,d=f.loadingShown;V();a.canvasToSVG();e&&console.timeEnd("canvas rendering");aa(a,"renderedCanvas");d&&(q(b.style,{transition:"opacity 250ms",opacity:0}),f.loadingShown=!1,I=setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b);f.loadingDiv=f.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},f.renderer.forExport?Number.MAX_VALUE:
void 0))}});e.scatter.prototype.cvsMarkerCircle=function(a,b,f,c){a.moveTo(b,f);a.arc(b,f,c,0,2*Math.PI,!1)};e.scatter.prototype.cvsMarkerSquare=function(a,b,c,e){a.rect(b-e,c-e,2*e,2*e)};e.scatter.prototype.fill=!0;e.bubble&&(e.bubble.prototype.cvsMarkerCircle=function(a,b,c,e,d){a.moveTo(b,c);a.arc(b,c,this.radii&&this.radii[d],0,2*Math.PI,!1)},e.bubble.prototype.cvsStrokeBatch=1);q(e.area.prototype,{cvsDrawPoint:function(a,b,c,e,d){d&&b!==d.clientX&&(a.moveTo(d.clientX,d.yBottom),a.lineTo(d.clientX,
d.plotY),a.lineTo(b,c),a.lineTo(b,e))},fill:!0,fillOpacity:!0,sampling:!0});q(e.column.prototype,{cvsDrawPoint:function(a,b,c,e){a.rect(b-1,c,1,e-c)},fill:!0,sampling:!0});c.Chart.prototype.callbacks.push(function(a){x(a,"predraw",function(){a.renderTarget&&a.renderTarget.attr({href:""});a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});x(a,"render",function(){a.boostCopy&&a.boostCopy()})})}})(k)});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)
 Boost module

 (c) 2010-2017 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(A){"object"===typeof module&&module.exports?module.exports=A:A(Highcharts)})(function(A){(function(h){function A(){var a=Array.prototype.slice.call(arguments),d=-Number.MAX_VALUE;p(a,function(a){if("undefined"!==typeof a&&null!==a&&"undefined"!==typeof a.length&&0<a.length)return d=a.length,!0});return d}function N(a){var d=0,c=0,f=H(a.options.boost&&a.options.boost.allowForce,!0),b;if("undefined"!==typeof a.boostForceChartBoost)return a.boostForceChartBoost;if(1<a.series.length)for(var k=
0;k<a.series.length;k++)b=a.series[k],J[b.type]&&++c,A(b.processedXData,b.options.data,b.points)>=(b.options.boostThreshold||Number.MAX_VALUE)&&++d;a.boostForceChartBoost=f&&c===a.series.length&&0<d||5<d;return a.boostForceChartBoost}function ka(a){function d(b,e){e=a.createShader("vertex"===e?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(e,b);a.compileShader(e);return a.getShaderParameter(e,a.COMPILE_STATUS)?e:!1}function c(){function b(b){return a.getUniformLocation(k,b)}var c=d("#version 100\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float plotHeight;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value \x3d aVertexPosition.w;\nfloat zMax \x3d bubbleZMax;\nfloat zMin \x3d bubbleZMin;\nfloat radius \x3d 0.0;\nfloat pos \x3d 0.0;\nfloat zRange \x3d zMax - zMin;\nif (bubbleSizeAbs){\nvalue \x3d value - bubbleZThreshold;\nzMax \x3d max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin \x3d 0.0;\n}\nif (value \x3c zMin){\nradius \x3d bubbleZMin / 2.0 - 1.0;\n} else {\npos \x3d zRange \x3e 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea \x26\x26 pos \x3e 0.0){\npos \x3d sqrt(pos);\n}\nradius \x3d ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord\n){\nfloat sign \x3d 1.0;\nfloat cvsOffset \x3d 0.0;\nif (cvsCoord) {\nsign *\x3d -1.0;\ncvsOffset \x3d len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value){\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold){\nfloat v;\nif (skipTranslation){\nv \x3d value;// + yAxisPos;\n} else {\nv \x3d translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord);// + yAxisPos;\nif (v \x3e plotHeight) {\nv \x3d plotHeight;\n}\n}\nif (checkTreshold \x3e 0.0 \x26\x26 hasThreshold) {\nv \x3d min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize \x3d bubbleRadius();\n} else {\ngl_PointSize \x3d pSize;\n}\nvColor \x3d aColor;\nif (isInverted) {\ngl_Position \x3d uPMatrix * vec4(xToPixels(aVertexPosition.y) + yAxisPos, yToPixels(aVertexPosition.x, aVertexPosition.z) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position \x3d uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}",
"vertex"),f=d("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col \x3d fillColor;\nvec4 tcol;\nif (hasColor) {\ncol \x3d vColor;\n}\nif (isCircle) {\ntcol \x3d texture2D(uSampler, gl_PointCoord.st);\ncol *\x3d tcol;\nif (tcol.r \x3c 0.0) {\ndiscard;\n} else {\ngl_FragColor \x3d col;\n}\n} else {\ngl_FragColor \x3d col;\n}\n}","fragment");
if(!c||!f)return k=!1;k=a.createProgram();a.attachShader(k,c);a.attachShader(k,f);a.linkProgram(k);a.useProgram(k);a.bindAttribLocation(k,0,"aVertexPosition");h=b("uPMatrix");m=b("pSize");Q=b("fillColor");q=b("isBubble");g=b("bubbleSizeAbs");C=b("bubbleSizeByArea");v=b("uSampler");e=b("skipTranslation");x=b("isCircle");p=b("isInverted");E=b("plotHeight");return!0}function f(e,c){e=b[e]=b[e]||a.getUniformLocation(k,e);a.uniform1f(e,c)}var b={},k,h,m,Q,q,g,C,e,x,p,E,v;a&&c();return{psUniform:function(){return m},
pUniform:function(){return h},fillColorUniform:function(){return Q},setPlotHeight:function(b){a.uniform1f(E,b)},setBubbleUniforms:function(b,e,c){var d=b.options,k=Number.MAX_VALUE,h=-Number.MAX_VALUE;"bubble"===b.type&&(k=H(d.zMin,Math.min(k,Math.max(e,!1===d.displayNegative?d.zThreshold:-Number.MAX_VALUE))),h=H(d.zMax,Math.max(h,c)),a.uniform1i(q,1),a.uniform1i(x,1),a.uniform1i(C,"width"!==b.options.sizeBy),a.uniform1i(g,b.options.sizeByAbsoluteValue),f("bubbleZMin",k),f("bubbleZMax",h),f("bubbleZThreshold",
b.options.zThreshold),f("bubbleMinSize",b.minPxSize),f("bubbleMaxSize",b.maxPxSize))},bind:function(){a.useProgram(k)},program:function(){return k},create:c,setUniform:f,setPMatrix:function(b){a.uniformMatrix4fv(h,!1,b)},setColor:function(b){a.uniform4f(Q,b[0]/255,b[1]/255,b[2]/255,b[3])},setPointSize:function(b){a.uniform1f(m,b)},setSkipTranslation:function(b){a.uniform1i(e,!0===b?1:0)},setTexture:function(){a.uniform1i(v,0)},setDrawAsCircle:function(b){a.uniform1i(x,b?1:0)},reset:function(){a.uniform1i(q,
0);a.uniform1i(x,0)},setInverted:function(b){a.uniform1i(p,b)},destroy:function(){a&&k&&(a.deleteProgram(k),k=!1)}}}function ba(a,d,c){function f(){b&&(a.deleteBuffer(b),k=b=!1);p=0;h=c||2;q=[]}var b=!1,k=!1,h=c||2,m=!1,p=0,q;return{destroy:f,bind:function(){if(!b)return!1;a.vertexAttribPointer(k,h,a.FLOAT,!1,0,0)},data:q,build:function(c,C,e){var g;q=c||[];if(!(q&&0!==q.length||m))return f(),!1;h=e||h;b&&a.deleteBuffer(b);m||(g=new Float32Array(q));b=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,
b);a.bufferData(a.ARRAY_BUFFER,m||g,a.STATIC_DRAW);k=a.getAttribLocation(d.program(),C);a.enableVertexAttribArray(k);return!0},render:function(c,d,e){var f=m?m.length:q.length;if(!b||!f)return!1;if(!c||c>f||0>c)c=0;if(!d||d>f)d=f;a.drawArrays(a[(e||"points").toUpperCase()],c/h,(d-c)/h);return!0},allocate:function(a){p=-1;m=new Float32Array(4*a)},push:function(a,b,e,c){m&&(m[++p]=a,m[++p]=b,m[++p]=e,m[++p]=c)}}}function la(a){function d(a){var b,e;return a.isSeriesBoosting?(b=!!a.options.stacking,
e=a.xData||a.options.xData||a.processedXData,b=(b?a.data:e||a.options.data).length,"treemap"===a.type?b*=12:"heatmap"===a.type?b*=6:J[a.type]&&(b*=2),b):0}function c(){e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}function f(a,b){function e(a){a&&(b.colorData.push(a[0]),b.colorData.push(a[1]),b.colorData.push(a[2]),b.colorData.push(a[3]))}function c(a,b,c,d,f){e(f);n.usePreallocated?C.push(a,b,c?1:0,d||1):(E.push(a),E.push(b),E.push(c?1:0),E.push(d||1))}function d(){b.segments.length&&(b.segments[b.segments.length-
1].to=E.length)}function f(){b.segments.length&&b.segments[b.segments.length-1].from===E.length||(d(),b.segments.push({from:E.length}))}function F(a,b,d,f,F){e(F);c(a+d,b);e(F);c(a,b);e(F);c(a,b+f);e(F);c(a,b+f);e(F);c(a+d,b+f);e(F);c(a+d,b)}function O(a){n.useGPUTranslations||(b.skipTranslation=!0,a.x=H.toPixels(a.x,!0),a.y=aa.toPixels(a.y,!0));c(a.x,a.y,0,2)}var g=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),k=a.chart,m=a.options,v=!!m.stacking,l=m.data,q=a.xAxis.getExtremes(),x=q.min,
q=q.max,w=a.yAxis.getExtremes(),z=w.min,w=w.max,u=a.xData||m.xData||a.processedXData,A=a.yData||m.yData||a.processedYData,B=a.zData||m.zData||a.processedZData,aa=a.yAxis,H=a.xAxis,V=a.chart.plotHeight,M=!u||0===u.length,U=m.connectNulls,r=a.points||!1,I=!1,Q=!1,y,R,S,l=v?a.data:u||l,u={x:-Number.MAX_VALUE,y:0},G={x:Number.MIN_VALUE,y:0},K=0,t,L,D=-1,X=!1,Y=!1,Z,P="undefined"===typeof k.index,W=!1,N=!1,ba=J[a.type],T=!1,ca=!0;if(!(m.boostData&&0<m.boostData.length)){a.closestPointRangePx=Number.MAX_VALUE;
f();if(r&&0<r.length)b.skipTranslation=!0,b.drawMode="triangles",r[0].node&&r[0].node.levelDynamic&&r.sort(function(a,b){if(a.node){if(a.node.levelDynamic>b.node.levelDynamic)return 1;if(a.node.levelDynamic<b.node.levelDynamic)return-1}return 0}),p(r,function(b){var c=b.plotY,e;"undefined"===typeof c||isNaN(c)||null===b.y||(c=b.shapeArgs,e=b.series.pointAttribs(b),b=e["stroke-width"]||0,R=h.color(e.fill).rgba,R[0]/=255,R[1]/=255,R[2]/=255,"treemap"===a.type&&(b=b||1,S=h.color(e.stroke).rgba,S[0]/=
255,S[1]/=255,S[2]/=255,F(c.x,c.y,c.width,c.height,S),b/=2),"heatmap"===a.type&&k.inverted&&(c.x=H.len-c.x,c.y=aa.len-c.y,c.width=-c.width,c.height=-c.height),F(c.x+b,c.y+b,c.width-2*b,c.height-2*b,R))});else{for(;D<l.length-1;){y=l[++D];if(P)break;M?(r=y[0],t=y[1],l[D+1]&&(Y=l[D+1][0]),l[D-1]&&(X=l[D-1][0]),3<=y.length&&(L=y[2],y[2]>b.zMax&&(b.zMax=y[2]),y[2]<b.zMin&&(b.zMin=y[2]))):(r=y,t=A[D],l[D+1]&&(Y=l[D+1]),l[D-1]&&(X=l[D-1]),B&&B.length&&(L=B[D],B[D]>b.zMax&&(b.zMax=B[D]),B[D]<b.zMin&&(b.zMin=
B[D])));if(U||null!==r&&null!==t){if(Y&&Y>=x&&Y<=q&&(W=!0),X&&X>=x&&X<=q&&(N=!0),g?(M&&(t=y.slice(1,3)),Z=t[0],t=t[1]):v&&(r=y.x,t=y.stackY,Z=t-y.y),null!==z&&"undefined"!==typeof z&&null!==w&&"undefined"!==typeof w&&(ca=t>=z&&t<=w),r>q&&G.x<q&&(G.x=r,G.y=t),r<x&&u.x<x&&(u.x=r,u.y=t),null!==t||!U)if(null!==t&&ca){if(r>=x&&r<=q&&(T=!0),T||W||N){n.useGPUTranslations||(b.skipTranslation=!0,r=H.toPixels(r,!0),t=aa.toPixels(t,!0),t>V&&(t=V));if(ba){y=Z;if(!1===Z||"undefined"===typeof Z)y=0>t?t:0;n.useGPUTranslations||
(y=aa.toPixels(y,!0));c(r,y,0,0,!1)}b.hasMarkers&&(y=n.useGPUTranslations?H.toPixels(r,!0):r,!1!==I&&(a.closestPointRangePx=Math.min(a.closestPointRangePx,Math.abs(y-I))));!n.useGPUTranslations&&!n.usePreallocated&&I&&1>r-I&&Q&&1>Math.abs(t-Q)?n.debug.showSkipSummary&&++K:(m.step&&c(r,Q,0,2,!1),c(r,t,0,"bubble"===a.type?L||1:2,!1),I=r,Q=t)}}else f()}else f()}n.debug.showSkipSummary&&console.log("skipped points:",K);!I&&!1!==U&&u>-Number.MAX_VALUE&&G<Number.MAX_VALUE&&(O(u),O(G))}d()}}function b(){w=
[];U.data=E=[];V=[];C&&C.destroy()}function k(a){g&&(g.setUniform("xAxisTrans",a.transA),g.setUniform("xAxisMin",a.min),g.setUniform("xAxisMinPad",a.minPixelPadding),g.setUniform("xAxisPointRange",a.pointRange),g.setUniform("xAxisLen",a.len),g.setUniform("xAxisPos",a.pos),g.setUniform("xAxisCVSCoord",!a.horiz))}function v(a){g&&(g.setUniform("yAxisTrans",a.transA),g.setUniform("yAxisMin",a.min),g.setUniform("yAxisMinPad",a.minPixelPadding),g.setUniform("yAxisPointRange",a.pointRange),g.setUniform("yAxisLen",
a.len),g.setUniform("yAxisPos",a.pos),g.setUniform("yAxisCVSCoord",!a.horiz))}function m(a,b){g.setUniform("hasThreshold",a);g.setUniform("translatedThreshold",b)}function z(c){if(c)x=c.chartWidth||800,l=c.chartHeight||400;else return!1;if(!e||!x||!l)return!1;n.debug.timeRendering&&console.time("gl rendering");e.canvas.width=x;e.canvas.height=l;g.bind();e.viewport(0,0,x,l);g.setPMatrix([2/x,0,0,0,0,-(2/l),0,0,0,0,-2,0,-1,1,-1,1]);g.setPlotHeight(c.plotHeight);1<n.lineWidth&&!h.isMS&&e.lineWidth(n.lineWidth);
C.build(U.data,"aVertexPosition",4);C.bind();A&&(e.bindTexture(e.TEXTURE_2D,B),g.setTexture(B));g.setInverted(c.inverted);p(w,function(a,b){var c=a.series.options,d,f=c.threshold;d=K(f);var F=a.series.yAxis.getThreshold(f),f=H(c.marker?c.marker.enabled:null,a.series.xAxis.isRadial?!0:null,a.series.closestPointRangePx>2*((c.marker?c.marker.radius:10)||10)),l=a.series.pointAttribs&&a.series.pointAttribs().fill||a.series.color;a.series.fillOpacity&&c.fillOpacity&&(l=(new T(l)).setOpacity(H(c.fillOpacity,
1)).get());c.colorByPoint&&(l=a.series.chart.options.colors[b]);l=h.color(l).rgba;n.useAlpha||(l[3]=1);"lines"===a.drawMode&&n.useAlpha&&1>l[3]&&(l[3]/=10);"add"===c.boostBlending?(e.blendFunc(e.SRC_ALPHA,e.ONE),e.blendEquation(e.FUNC_ADD)):"mult"===c.boostBlending?e.blendFunc(e.DST_COLOR,e.ZERO):"darken"===c.boostBlending?(e.blendFunc(e.ONE,e.ONE),e.blendEquation(e.FUNC_MIN)):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);g.reset();0<a.colorData.length&&(g.setUniform("hasColor",
1),b=ba(e,g),b.build(a.colorData,"aColor",4),b.bind());g.setColor(l);k(a.series.xAxis);v(a.series.yAxis);m(d,F);"points"===a.drawMode&&(c.marker&&c.marker.radius?g.setPointSize(2*c.marker.radius):g.setPointSize(1));g.setSkipTranslation(a.skipTranslation);"bubble"===a.series.type&&g.setBubbleUniforms(a.series,a.zMin,a.zMax);g.setDrawAsCircle(G[a.series.type]&&A||!1);for(d=0;d<a.segments.length;d++)C.render(a.segments[d].from,a.segments[d].to,a.drawMode);if(a.hasMarkers&&f)for(c.marker&&c.marker.radius?
g.setPointSize(2*c.marker.radius):g.setPointSize(10),g.setDrawAsCircle(!0),d=0;d<a.segments.length;d++)C.render(a.segments[d].from,a.segments[d].to,"POINTS")});n.debug.timeRendering&&console.timeEnd("gl rendering");a&&a();b()}function q(a){c();if(a.renderer.forExport)return z(a);I?z(a):setTimeout(function(){q(a)},1)}var g=!1,C=!1,e=!1,x=0,l=0,E=!1,V=!1,A=!1,U={},I=!1,w=[],M=L.createElement("canvas"),u=M.getContext("2d"),B,J={column:!0,columnrange:!0,bar:!0,area:!0,arearange:!0},G={scatter:!0,bubble:!0},
n={pointSize:1,lineWidth:1,fillColor:"#AA00AA",useAlpha:!0,usePreallocated:!1,useGPUTranslations:!1,debug:{timeRendering:!1,timeSeriesProcessing:!1,timeSetup:!1,timeBufferCopy:!1,timeKDTree:!1,showSkipSummary:!1}};return U={allocateBufferForSingleSeries:function(a){var b=0;n.usePreallocated&&(a.isSeriesBoosting&&(b=d(a)),C.allocate(b))},pushSeries:function(a){0<w.length&&w[w.length-1].hasMarkers&&(w[w.length-1].markerTo=V.length);n.debug.timeSeriesProcessing&&console.time("building "+a.type+" series");
w.push({segments:[],markerFrom:V.length,colorData:[],series:a,zMin:Number.MAX_VALUE,zMax:-Number.MAX_VALUE,hasMarkers:a.options.marker?!1!==a.options.marker.enabled:!1,showMarksers:!0,drawMode:{area:"lines",arearange:"lines",areaspline:"line_strip",column:"lines",columnrange:"lines",bar:"lines",line:"line_strip",scatter:"points",heatmap:"triangles",treemap:"triangles",bubble:"points"}[a.type]||"line_strip"});f(a,w[w.length-1]);n.debug.timeSeriesProcessing&&console.timeEnd("building "+a.type+" series")},
setSize:function(a,b){if(x!==a||b!==b)x=a,l=b,g.bind(),g.setPMatrix([2/x,0,0,0,0,-(2/l),0,0,0,0,-2,0,-1,1,-1,1])},inited:function(){return I},setThreshold:m,init:function(a,c){var d=0,f=["webgl","experimental-webgl","moz-webgl","webkit-3d"];I=!1;if(!a)return!1;for(n.debug.timeSetup&&console.time("gl setup");d<f.length&&!(e=a.getContext(f[d],{}));d++);if(e)c||b();else return!1;e.enable(e.BLEND);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);e.disable(e.DEPTH_TEST);e.depthFunc(e.LESS);g=ka(e);C=ba(e,
g);A=!1;B=e.createTexture();M.width=512;M.height=512;u.mozImageSmoothingEnabled=!1;u.webkitImageSmoothingEnabled=!1;u.msImageSmoothingEnabled=!1;u.imageSmoothingEnabled=!1;u.strokeStyle="rgba(255, 255, 255, 0)";u.fillStyle="#FFF";u.beginPath();u.arc(256,256,256,0,2*Math.PI);u.stroke();u.fill();try{e.bindTexture(e.TEXTURE_2D,B),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,M),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),
e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),A=!0}catch(sa){}I=!0;n.debug.timeSetup&&console.timeEnd("gl setup");return!0},render:q,settings:n,valid:function(){return!1!==e},clear:c,flush:b,setXAxis:k,setYAxis:v,data:E,gl:function(){return e},allocateBuffer:function(a){var b=0;n.usePreallocated&&(p(a.series,function(a){a.isSeriesBoosting&&(b+=d(a))}),C.allocate(b))},destroy:function(){b();C.destroy();
g.destroy();e&&(B&&e.deleteTexture(B),e.canvas.width=1,e.canvas.height=1)},setOptions:function(a){ma(!0,n,a)}}}function da(a,d){var c=a.chartWidth,f=a.chartHeight,b=a,k=a.seriesGroup||d.group,l=L.implementation.hasFeature("www.http://w3.org/TR/SVG11/feature#Extensibility","1.1"),b=a.isChartSeriesBoosting()?a:d,l=!1;b.renderTarget||(b.canvas=na,a.renderer.forExport||!l?(b.renderTarget=a.renderer.image("",0,0,c,f).addClass("highcharts-boost-canvas").add(k),b.boostClear=function(){b.renderTarget.attr({href:""})},
b.boostCopy=function(){b.boostResizeTarget();b.renderTarget.attr({href:b.canvas.toDataURL("image/png")})}):(b.renderTargetFo=a.renderer.createElement("foreignObject").add(k),b.renderTarget=L.createElement("canvas"),b.renderTargetCtx=b.renderTarget.getContext("2d"),b.renderTargetFo.element.appendChild(b.renderTarget),b.boostClear=function(){b.renderTarget.width=b.canvas.width;b.renderTarget.height=b.canvas.height},b.boostCopy=function(){b.renderTarget.width=b.canvas.width;b.renderTarget.height=b.canvas.height;
b.renderTargetCtx.drawImage(b.canvas,0,0)}),b.boostResizeTarget=function(){c=a.chartWidth;f=a.chartHeight;(b.renderTargetFo||b.renderTarget).attr({x:0,y:0,width:c,height:f}).css({pointerEvents:"none",mixedBlendMode:"normal",opacity:1});b instanceof h.Chart&&b.markerGroup.translate(a.plotLeft,a.plotTop)},b.boostClipRect=a.renderer.clipRect(),(b.renderTargetFo||b.renderTarget).clip(b.boostClipRect),b instanceof h.Chart&&(b.markerGroup=b.renderer.g().add(k),b.markerGroup.translate(d.xAxis.pos,d.yAxis.pos)));
b.canvas.width=c;b.canvas.height=f;b.boostClipRect.attr(a.getBoostClipRect(b));b.boostResizeTarget();b.boostClear();b.ogl||(b.ogl=la(function(){b.ogl.settings.debug.timeBufferCopy&&console.time("buffer copy");b.boostCopy();b.ogl.settings.debug.timeBufferCopy&&console.timeEnd("buffer copy")}),b.ogl.init(b.canvas),b.ogl.setOptions(a.options.boost||{}),b instanceof h.Chart&&b.ogl.allocateBuffer(a));b.ogl.setSize(c,f);return b.ogl}function ea(a,d,c){a&&d.renderTarget&&d.canvas&&!(c||d.chart).isChartSeriesBoosting()&&
a.render(c||d.chart)}function fa(a,d){a&&d.renderTarget&&d.canvas&&!d.chart.isChartSeriesBoosting()&&a.allocateBufferForSingleSeries(d)}function oa(a){var d=!0;this.chart.options&&this.chart.options.boost&&(d="undefined"===typeof this.chart.options.boost.enabled?!0:this.chart.options.boost.enabled);if(!d||!this.isSeriesBoosting)return a.call(this);this.chart.isBoosting=!0;if(a=da(this.chart,this))fa(a,this),a.pushSeries(this);ea(a,this)}var G=h.win,L=G.document,pa=function(){},ga=h.Chart,T=h.Color,
v=h.Series,z=h.seriesTypes,p=h.each,ha=h.extend,ia=h.addEvent,qa=h.fireEvent,ra=h.grep,K=h.isNumber,ma=h.merge,H=h.pick,l=h.wrap,P=h.getOptions().plotOptions,na=L.createElement("canvas"),W,ja="area arearange column columnrange bar line scatter heatmap bubble treemap".split(" "),J={};p(ja,function(a){J[a]=1});T.prototype.names={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",
blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",
darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",
lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",
mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",
peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",
violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};ga.prototype.isChartSeriesBoosting=function(){return H(this.options.boost&&this.options.boost.seriesThreshold,50)<=this.series.length||N(this)};ga.prototype.getBoostClipRect=function(a){var d={x:this.plotLeft,y:this.plotTop,width:this.plotWidth,height:this.plotHeight};a===this&&p(this.yAxis,function(a){d.y=Math.min(a.pos,d.y);d.height=Math.max(a.pos-this.plotTop+a.len,d.height)},this);
return d};h.eachAsync=function(a,d,c,f,b,k){b=b||0;f=f||3E4;for(var l=b+f,m=!0;m&&b<l&&b<a.length;)m=d(a[b],b),++b;m&&(b<a.length?k?h.eachAsync(a,d,c,f,b,k):G.requestAnimationFrame?G.requestAnimationFrame(function(){h.eachAsync(a,d,c,f,b)}):setTimeout(function(){h.eachAsync(a,d,c,f,b)}):c&&c())};v.prototype.getPoint=function(a){var d=a,c=this.xData||this.options.xData||this.processedXData||!1;!a||a instanceof this.pointClass||(d=(new this.pointClass).init(this,this.options.data[a.i],c?c[a.i]:void 0),
d.category=d.x,d.dist=a.dist,d.distX=a.distX,d.plotX=a.plotX,d.plotY=a.plotY,d.index=a.i);return d};l(v.prototype,"searchPoint",function(a){return this.getPoint(a.apply(this,[].slice.call(arguments,1)))});l(v.prototype,"destroy",function(a){var d=this,c=d.chart;c.markerGroup===d.markerGroup&&(d.markerGroup=null);c.hoverPoints&&(c.hoverPoints=ra(c.hoverPoints,function(a){return a.series===d}));c.hoverPoint&&c.hoverPoint.series===d&&(c.hoverPoint=null);a.call(this)});l(v.prototype,"getExtremes",function(a){if(!this.isSeriesBoosting||
!this.hasExtremes||!this.hasExtremes())return a.apply(this,Array.prototype.slice.call(arguments,1))});p(ja,function(a){P[a]&&(P[a].boostThreshold=5E3,P[a].boostData=[],z[a].prototype.fillOpacity=!0)});p(["translate","generatePoints","drawTracker","drawPoints","render"],function(a){function d(c){var d=this.options.stacking&&("translate"===a||"generatePoints"===a),b=H(this.chart&&this.chart.options&&this.chart.options.boost&&this.chart.options.boost.enabled,!0);if(!this.isSeriesBoosting||d||!b||"heatmap"===
this.type||"treemap"===this.type||!J[this.type])c.call(this);else if(this[a+"Canvas"])this[a+"Canvas"]()}l(v.prototype,a,d);"translate"===a&&p("column bar arearange columnrange heatmap treemap".split(" "),function(c){z[c]&&l(z[c].prototype,a,d)})});l(v.prototype,"processData",function(a){function d(a){return c.chart.isChartSeriesBoosting()||(a?a.length:0)>=(c.options.boostThreshold||Number.MAX_VALUE)}var c=this,f=this.options.data;J[this.type]?(d(f)&&"heatmap"!==this.type&&"treemap"!==this.type&&
!this.options.stacking&&this.hasExtremes&&this.hasExtremes(!0)||(a.apply(this,Array.prototype.slice.call(arguments,1)),f=this.processedXData),(this.isSeriesBoosting=d(f))?this.enterBoost():this.exitBoost&&this.exitBoost()):a.apply(this,Array.prototype.slice.call(arguments,1))});l(v.prototype,"setVisible",function(a,d,c){a.call(this,d,c);!1===this.visible&&this.canvas&&this.renderTarget&&(this.ogl&&this.ogl.clear(),this.boostClear())});v.prototype.enterBoost=function(){this.alteredByBoost=[];p(["allowDG",
"directTouch","stickyTracking"],function(a){this.alteredByBoost.push({prop:a,val:this[a],own:this.hasOwnProperty(a)})},this);this.directTouch=this.allowDG=!1;this.stickyTracking=!0;this.animate=null;this.labelBySeries&&(this.labelBySeries=this.labelBySeries.destroy())};v.prototype.exitBoost=function(){p(this.alteredByBoost||[],function(a){a.own?this[a.prop]=a.val:delete this[a.prop]},this);this.boostClear&&this.boostClear()};v.prototype.hasExtremes=function(a){var d=this.options,c=this.xAxis&&this.xAxis.options,
f=this.yAxis&&this.yAxis.options;return d.data.length>(d.boostThreshold||Number.MAX_VALUE)&&K(f.min)&&K(f.max)&&(!a||K(c.min)&&K(c.max))};v.prototype.destroyGraphics=function(){var a=this,d=this.points,c,f;if(d)for(f=0;f<d.length;f+=1)(c=d[f])&&c.destroyElements&&c.destroyElements();p(["graph","area","tracker"],function(b){a[b]&&(a[b]=a[b].destroy())})};h.hasWebGLSupport=function(){var a=0,d,c=["webgl","experimental-webgl","moz-webgl","webkit-3d"],f=!1;if("undefined"!==typeof G.WebGLRenderingContext)for(d=
L.createElement("canvas");a<c.length;a++)try{if(f=d.getContext(c[a]),"undefined"!==typeof f&&null!==f)return!0}catch(b){}return!1};h.hasWebGLSupport()?(h.extend(v.prototype,{renderCanvas:function(){function a(a,b){var c,d,f=!1,g="undefined"===typeof k.index,h=!0;if(!g&&(K?(c=a[0],d=a[1]):(c=a,d=q[b]),M?(K&&(d=a.slice(1,3)),f=d[0],d=d[1]):u&&(c=a.x,d=a.stackY,f=d-a.y),L||(h=d>=x&&d<=z),null!==d&&c>=v&&c<=e&&h))if(a=Math.ceil(l.toPixels(c,!0)),H){if(void 0===O||a===A){M||(f=d);if(void 0===J||d>F)F=
d,J=b;if(void 0===O||f<n)n=f,O=b}a!==A&&(void 0!==O&&(d=m.toPixels(F,!0),w=m.toPixels(n,!0),P(a,d,J),w!==d&&P(a,w,O)),O=J=void 0,A=a)}else d=Math.ceil(m.toPixels(d,!0)),P(a,d,b);return!g}function d(){qa(c,"renderedCanvas");delete c.buildKDTree;c.buildKDTree();N.debug.timeKDTree&&console.timeEnd("kd tree building")}var c=this,f=c.options||{},b=!1,k=c.chart,l=this.xAxis,m=this.yAxis,p=f.xData||c.processedXData,q=f.yData||c.processedYData,g=f.data,b=l.getExtremes(),v=b.min,e=b.max,b=m.getExtremes(),
x=b.min,z=b.max,E={},A,H=!!c.sampling,G,I=!1!==f.enableMouseTracking,w=m.getThreshold(f.threshold),M=c.pointArrayMap&&"low,high"===c.pointArrayMap.join(","),u=!!f.stacking,B=c.cropStart||0,L=c.requireSorting,K=!p,n,F,O,J,N,T=this.xData||this.options.xData||this.processedXData||!1,P=function(a,b,c){W=a+","+b;I&&!E[W]&&(E[W]=!0,k.inverted&&(a=l.len-a,b=m.len-b),G.push({x:T?T[B+c]:!1,clientX:a,plotX:a,plotY:b,i:B+c}))},b=da(k,c);k.isBoosting=!0;N=b.settings;if(this.visible){if(this.points||this.graph)this.animate=
null,this.destroyGraphics();k.isChartSeriesBoosting()?(this.markerGroup=k.markerGroup,this.renderTarget&&(this.renderTarget=this.renderTarget.destroy())):this.markerGroup=c.plotGroup("markerGroup","markers",!0,1,k.seriesGroup);G=this.points=[];c.buildKDTree=pa;b&&(fa(b,this),b.pushSeries(c),ea(b,this,k));k.renderer.forExport||(N.debug.timeKDTree&&console.time("kd tree building"),h.eachAsync(u?c.data:p||g,a,d))}}}),p(["heatmap","treemap"],function(a){z[a]&&l(z[a].prototype,"drawPoints",oa)}),z.bubble&&
(delete z.bubble.prototype.buildKDTree,l(z.bubble.prototype,"markerAttribs",function(a){return this.isSeriesBoosting?!1:a.apply(this,[].slice.call(arguments,1))})),z.scatter.prototype.fill=!0,ha(z.area.prototype,{fill:!0,fillOpacity:!0,sampling:!0}),ha(z.column.prototype,{fill:!0,sampling:!0}),h.Chart.prototype.callbacks.push(function(a){ia(a,"predraw",function(){a.boostForceChartBoost=void 0;a.boostForceChartBoost=N(a);a.isBoosting=!1;!a.isChartSeriesBoosting()&&a.didBoost&&(a.didBoost=!1);a.boostClear&&
a.boostClear();a.canvas&&a.ogl&&a.isChartSeriesBoosting()&&(a.didBoost=!0,a.ogl.allocateBuffer(a));a.markerGroup&&a.xAxis&&0<a.xAxis.length&&a.yAxis&&0<a.yAxis.length&&a.markerGroup.translate(a.xAxis[0].pos,a.yAxis[0].pos)});ia(a,"render",function(){a.ogl&&a.isChartSeriesBoosting()&&a.ogl.render(a)})})):"undefined"!==typeof h.initCanvasBoost?h.initCanvasBoost():h.error(26)})(A)});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)
 Data module

 (c) 2012-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(y){"object"===typeof module&&module.exports?module.exports=y:y(Highcharts)})(function(y){(function(m){var y=m.win.document,w=m.each,E=m.objectEach,F=m.pick,B=m.inArray,C=m.isNumber,G=m.splat,H=m.fireEvent,D,r;D=Array.prototype.some?function(a,b,c){Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var f=0,e=a.length;f<e&&!0!==b.call(c,a[f],f,a);f++);};m.ajax=function(a){var b=m.merge(!0,{url:!1,type:"GET",dataType:"json",success:!1,error:!1,data:!1,headers:{}},a);a={json:"application/json",
xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var c=new XMLHttpRequest;if(!b.url)return!1;c.open(b.type.toUpperCase(),b.url,!0);c.setRequestHeader("Content-Type",a[b.dataType]||a.text);m.objectEach(b.headers,function(a,b){c.setRequestHeader(b,a)});c.onreadystatechange=function(){var a;if(4===c.readyState){if(200===c.status){a=c.responseText;if("json"===b.dataType)try{a=JSON.parse(a)}catch(e){b.error&&b.error(c,e);return}return b.success&&b.success(a)}b.error&&b.error(c,
c.responseText)}};try{b.data=JSON.stringify(b.data)}catch(f){}c.send(b.data||!0)};var A=function(a,b){this.init(a,b)};m.extend(A.prototype,{init:function(a,b){var c=a.decimalPoint;"."!==c&&","!==c&&(c=void 0);this.options=a;this.chartOptions=b;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=F(a.firstRowAsNames,!0);this.decimalRegex=c&&new RegExp("^(-?[0-9]+)"+c+"([0-9]+)$");this.rawColumns=[];this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},
getColumnDistribution:function(){var a=this.chartOptions,b=this.options,c=[],f=function(a){return(m.seriesTypes[a||"line"].prototype.pointArrayMap||[0]).length},e=a&&a.chart&&a.chart.type,d=[],k=[],l=0,g;w(a&&a.series||[],function(a){d.push(f(a.type||e))});w(b&&b.seriesMapping||[],function(a){c.push(a.x||0)});0===c.length&&c.push(0);w(b&&b.seriesMapping||[],function(b){var c=new r,t=d[l]||f(e),q=m.seriesTypes[((a&&a.series||[])[l]||{}).type||e||"line"].prototype.pointArrayMap||["y"];c.addColumnReader(b.x,
"x");E(b,function(a,b){"x"!==b&&c.addColumnReader(a,b)});for(g=0;g<t;g++)c.hasReader(q[g])||c.addColumnReader(void 0,q[g]);k.push(c);l++});b=m.seriesTypes[e||"line"].prototype.pointArrayMap;void 0===b&&(b=["y"]);this.valueCount={global:f(e),xColumns:c,individual:d,seriesBuilders:k,globalPointArrayMap:b}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()},parseCSV:function(a){function b(a,
b,d,c){function e(b){h=a[b];p=a[b-1];m=a[b+1]}function f(a){u.length<x+1&&u.push([a]);u[x][u[x].length-1]!==a&&u[x].push(a)}function g(){I>q||q>z?(++q,n=""):(!isNaN(parseFloat(n))&&isFinite(n)?(n=parseFloat(n),f("number")):isNaN(Date.parse(n))?f("string"):(n=n.replace(/\//g,"-"),f("date")),l.length<x+1&&l.push([]),d||(l[x][b]=n),n="",++x,++q)}var k=0,h="",p="",m="",n="",q=0,x=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;k<a.length;k++){e(k);if("#"===h){g();return}if('"'===h)for(e(++k);k<a.length&&
('"'!==h||'"'===p||'"'===m);){if('"'!==h||'"'===h&&'"'!==p)n+=h;e(++k)}else c&&c[h]?c[h](h,n)&&g():h===t?g():n+=h}g()}}function c(a){var b=0,c=0,f=!1;D(a,function(a,d){var e=!1,f,h,g="";if(13<d)return!0;for(var k=0;k<a.length;k++){d=a[k];f=a[k+1];h=a[k-1];if("#"===d)break;else if('"'===d)if(e){if('"'!==h&&'"'!==f){for(;" "===f&&k<a.length;)f=a[++k];"undefined"!==typeof v[f]&&v[f]++;e=!1}}else e=!0;else"undefined"!==typeof v[d]?(g=g.trim(),isNaN(Date.parse(g))?!isNaN(g)&&isFinite(g)||v[d]++:v[d]++,
g=""):g+=d;","===d&&c++;"."===d&&b++}});f=v[";"]>v[","]?";":",";d.decimalPoint||(d.decimalPoint=b>c?".":",",e.decimalRegex=new RegExp("^(-?[0-9]+)"+d.decimalPoint+"([0-9]+)$"));return f}function f(a,b){var c,f,g=0,k=!1,n=[],l=[],h;if(!b||b>a.length)b=a.length;for(;g<b;g++)if("undefined"!==typeof a[g]&&a[g]&&a[g].length)for(c=a[g].trim().replace(/\//g," ").replace(/\-/g," ").split(" "),f=["","",""],h=0;h<c.length;h++)h<f.length&&(c[h]=parseInt(c[h],10),c[h]&&(l[h]=!l[h]||l[h]<c[h]?c[h]:l[h],"undefined"!==
typeof n[h]?n[h]!==c[h]&&(n[h]=!1):n[h]=c[h],31<c[h]?f[h]=100>c[h]?"YY":"YYYY":12<c[h]&&31>=c[h]?(f[h]="dd",k=!0):f[h].length||(f[h]="mm")));if(k){for(h=0;h<n.length;h++)!1!==n[h]?12<l[h]&&"YY"!==f[h]&&"YYYY"!==f[h]&&(f[h]="YY"):12<l[h]&&"mm"===f[h]&&(f[h]="dd");3===f.length&&"dd"===f[1]&&"dd"===f[2]&&(f[2]="YY");a=f.join("/");return(d.dateFormats||e.dateFormats)[a]?a:(H("invalidDateFormat"),m.error("Could not deduce date format"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var e=this,d=a||this.options,k=d.csv,
l;a="undefined"!==typeof d.startRow&&d.startRow?d.startRow:0;var g=d.endRow||Number.MAX_VALUE,I="undefined"!==typeof d.startColumn&&d.startColumn?d.startColumn:0,z=d.endColumn||Number.MAX_VALUE,t,q=0,u=[],v={",":0,";":0,"\t":0};l=this.columns=[];if(k){k=k.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(d.lineDelimiter||"\n");if(!a||0>a)a=0;if(!g||g>=k.length)g=k.length-1;d.itemDelimiter?t=d.itemDelimiter:(t=null,t=c(k));for(var n=0,q=a;q<=g;q++)"#"===k[q][0]?n++:b(k[q],q-a-n);d.columnTypes&&0!==d.columnTypes.length||
!u.length||!u[0].length||"date"!==u[0][1]||d.dateFormat||(d.dateFormat=f(l[0]));this.dataFound()}return l},parseTable:function(){var a=this.options,b=a.table,c=this.columns,f=a.startRow||0,e=a.endRow||Number.MAX_VALUE,d=a.startColumn||0,k=a.endColumn||Number.MAX_VALUE;b&&("string"===typeof b&&(b=y.getElementById(b)),w(b.getElementsByTagName("tr"),function(a,b){b>=f&&b<=e&&w(a.children,function(a,e){("TD"===a.tagName||"TH"===a.tagName)&&e>=d&&e<=k&&(c[e-d]||(c[e-d]=[]),c[e-d][b-f]=a.innerHTML)})}),
this.dataFound())},parseGoogleSpreadsheet:function(){function a(a){var b=["https://spreadsheets.google.com/feeds/cells",f,e,"public/values?alt\x3djson"].join("/");m.ajax({url:b,dataType:"json",success:a,error:function(a,b){return c.error&&c.error(b,a)}})}var b=this,c=this.options,f=c.googleSpreadsheetKey,e=c.googleSpreadsheetWorksheet||1,d=this.columns,k=c.startRow||0,l=c.endRow||Number.MAX_VALUE,g=c.startColumn||0,r=c.endColumn||Number.MAX_VALUE,z,t;f&&a(function(a){a=a.feed.entry;var c,f=a.length,
e=0,m=0,p;for(p=0;p<f;p++)c=a[p],e=Math.max(e,c.gs$cell.col),m=Math.max(m,c.gs$cell.row);for(p=0;p<e;p++)p>=g&&p<=r&&(d[p-g]=[],d[p-g].length=Math.min(m,l-k));for(p=0;p<f;p++)c=a[p],z=c.gs$cell.row-1,t=c.gs$cell.col-1,t>=g&&t<=r&&z>=k&&z<=l&&(e=c.gs$cell||c.content,c=null,e.numericValue?c=0<=e.$t.indexOf("/")||0<=e.$t.indexOf("-")?e.$t:0<e.$t.indexOf("%")?100*parseFloat(e.numericValue):parseFloat(e.numericValue):e.$t&&e.$t.length&&(c=e.$t),d[t-g][z-k]=c);w(d,function(a){for(p=0;p<a.length;p++)void 0===
a[p]&&(a[p]=null)});b.dataFound()})},trim:function(a,b){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),b&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a},parseTypes:function(){for(var a=this.columns,b=a.length;b--;)this.parseColumn(a[b],b)},parseColumn:function(a,b){var c=this.rawColumns,f=this.columns,e=a.length,d,k,l,g,m=this.firstRowAsNames,r=-1!==B(b,this.valueCount.xColumns),t,q=[],u=this.chartOptions,v,n=(this.options.columnTypes||
[])[b],u=r&&(u&&u.xAxis&&"category"===G(u.xAxis)[0].type||"string"===n);for(c[b]||(c[b]=[]);e--;)d=q[e]||a[e],l=this.trim(d),g=this.trim(d,!0),k=parseFloat(g),void 0===c[b][e]&&(c[b][e]=l),u||0===e&&m?a[e]=""+l:+g===k?(a[e]=k,31536E6<k&&"float"!==n?a.isDatetime=!0:a.isNumeric=!0,void 0!==a[e+1]&&(v=k>a[e+1])):(l&&l.length&&(t=this.parseDate(d)),r&&C(t)&&"float"!==n?(q[e]=d,a[e]=t,a.isDatetime=!0,void 0!==a[e+1]&&(d=t>a[e+1],d!==v&&void 0!==v&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,
e=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),v=d)):(a[e]=""===l?null:l,0!==e&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)));r&&a.mixed&&(f[b]=c[b]);if(r&&v&&this.options.sort)for(b=0;b<f.length;b++)f[b].reverse(),m&&f[b].unshift(f[b].pop())},dateFormats:{"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(a){return Date.UTC(+a[1],a[2]-1,+a[3])}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
parser:function(a){return Date.UTC(+a[3],a[2]-1,+a[1])},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[1]-1,+a[2])}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){var b=+a[3],b=b>(new Date).getFullYear()-2E3?b+1900:b+2E3;return Date.UTC(b,a[2]-1,+a[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){return Date.UTC(+a[3]+
2E3,a[1]-1,+a[2])}}},parseDate:function(a){var b=this.options.parseDate,c,f,e=this.options.dateFormat||this.dateFormat,d;if(b)c=b(a);else if("string"===typeof a){if(e)(b=this.dateFormats[e])||(b=this.dateFormats["YYYY/mm/dd"]),(d=a.match(b.regex))&&(c=b.parser(d));else for(f in this.dateFormats)if(b=this.dateFormats[f],d=a.match(b.regex)){this.dateFormat=f;this.alternativeFormat=b.alternative;c=b.parser(d);break}d||(d=Date.parse(a),"object"===typeof d&&null!==d&&d.getTime?c=d.getTime()-6E4*d.getTimezoneOffset():
C(d)&&(c=d-6E4*(new Date(d)).getTimezoneOffset()))}return c},rowsToColumns:function(a){var b,c,f,e,d;if(a)for(d=[],c=a.length,b=0;b<c;b++)for(e=a[b].length,f=0;f<e;f++)d[f]||(d[f]=[]),d[f][b]=a[b][f];return d},parsed:function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},getFreeIndexes:function(a,b){var c,f=[],e=[],d;for(c=0;c<a;c+=1)f.push(!0);for(a=0;a<b.length;a+=1)for(d=b[a].getReferencedColumnIndexes(),c=0;c<d.length;c+=1)f[d[c]]=!1;for(c=0;c<f.length;c+=1)f[c]&&
e.push(c);return e},complete:function(){var a=this.columns,b,c=this.options,f,e,d,k,l=[],g;if(c.complete||c.afterComplete){for(d=0;d<a.length;d++)this.firstRowAsNames&&(a[d].name=a[d].shift());f=[];e=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(d=0;d<this.valueCount.seriesBuilders.length;d++)g=this.valueCount.seriesBuilders[d],g.populateColumns(e)&&l.push(g);for(;0<e.length;){g=new r;g.addColumnReader(0,"x");d=B(0,e);-1!==d&&e.splice(d,1);for(d=0;d<this.valueCount.global;d++)g.addColumnReader(void 0,
this.valueCount.globalPointArrayMap[d]);g.populateColumns(e)&&l.push(g)}0<l.length&&0<l[0].readers.length&&(g=a[l[0].readers[0].columnIndex],void 0!==g&&(g.isDatetime?b="datetime":g.isNumeric||(b="category")));if("category"===b)for(d=0;d<l.length;d++)for(g=l[d],e=0;e<g.readers.length;e++)"x"===g.readers[e].configName&&(g.readers[e].configName="name");for(d=0;d<l.length;d++){g=l[d];e=[];for(k=0;k<a[0].length;k++)e[k]=g.read(a,k);f[d]={data:e};g.name&&(f[d].name=g.name);"category"===b&&(f[d].turboThreshold=
0)}a={series:f};b&&(a.xAxis={type:b},"category"===b&&(a.xAxis.uniqueNames=!1));c.complete&&c.complete(a);c.afterComplete&&c.afterComplete(a)}},update:function(a,b){var c=this.chart;a&&(a.afterComplete=function(a){c.update(a,b)},m.data(a))}});m.Data=A;m.data=function(a,b){return new A(a,b)};m.wrap(m.Chart.prototype,"init",function(a,b,c){var f=this;b&&b.data?(f.data=new A(m.extend(b.data,{afterComplete:function(e){var d,k;if(b.hasOwnProperty("series"))if("object"===typeof b.series)for(d=Math.max(b.series.length,
e.series.length);d--;)k=b.series[d]||{},b.series[d]=m.merge(k,e.series[d]);else delete b.series;b=m.merge(e,b);a.call(f,b,c)}}),b),f.data.chart=f):a.call(f,b,c)});r=function(){this.readers=[];this.pointIsArray=!0};r.prototype.populateColumns=function(a){var b=!0;w(this.readers,function(b){void 0===b.columnIndex&&(b.columnIndex=a.shift())});w(this.readers,function(a){void 0===a.columnIndex&&(b=!1)});return b};r.prototype.read=function(a,b){var c=this.pointIsArray,f=c?[]:{},e;w(this.readers,function(d){var e=
a[d.columnIndex][b];c?f.push(e):f[d.configName]=e});void 0===this.name&&2<=this.readers.length&&(e=this.getReferencedColumnIndexes(),2<=e.length&&(e.shift(),e.sort(),this.name=a[e.shift()].name));return f};r.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&void 0!==b&&(this.pointIsArray=!1)};r.prototype.getReferencedColumnIndexes=function(){var a,b=[],c;for(a=0;a<this.readers.length;a+=1)c=this.readers[a],void 0!==c.columnIndex&&b.push(c.columnIndex);
return b};r.prototype.hasReader=function(a){var b,c;for(b=0;b<this.readers.length;b+=1)if(c=this.readers[b],c.configName===a)return!0}})(y)});


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)
 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function(p){"object"===typeof module&&module.exports?module.exports=p:p(Highcharts)})(function(p){(function(f){var p=f.animObject,z=f.noop,A=f.color,B=f.defaultOptions,l=f.each,q=f.extend,H=f.format,C=f.objectEach,v=f.pick,r=f.wrap,m=f.Chart,w=f.seriesTypes,D=w.pie,u=w.column,E=f.Tick,x=f.fireEvent,F=f.inArray,G=1;q(B.lang,{drillUpText:"\u25c1 Back to {series.name}"});B.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",
color:"#003399",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};f.SVGRenderer.prototype.Element.prototype.fadeIn=function(a){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:v(this.newOpacity,1)},a||{duration:250})};m.prototype.addSeriesAsDrilldown=function(a,b){this.addSingleSeriesAsDrilldown(a,b);this.applyDrilldown()};m.prototype.addSingleSeriesAsDrilldown=function(a,b){var d=a.series,c=d.xAxis,e=d.yAxis,g,
k=[],n=[],h,t,m;m={color:a.color||d.color};this.drilldownLevels||(this.drilldownLevels=[]);h=d.options._levelNumber||0;(t=this.drilldownLevels[this.drilldownLevels.length-1])&&t.levelNumber!==h&&(t=void 0);b=q(q({_ddSeriesId:G++},m),b);g=F(a,d.points);l(d.chart.series,function(a){a.xAxis!==c||a.isDrilling||(a.options._ddSeriesId=a.options._ddSeriesId||G++,a.options._colorIndex=a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||h,t?(k=t.levelSeries,n=t.levelSeriesOptions):(k.push(a),
n.push(a.options)))});a=q({levelNumber:h,seriesOptions:d.options,levelSeriesOptions:n,levelSeries:k,shapeArgs:a.shapeArgs,bBox:a.graphic?a.graphic.getBBox():{},color:a.isNull?(new f.Color(A)).setOpacity(0).get():A,lowerSeriesOptions:b,pointOptions:d.options.data[g],pointIndex:g,oldExtremes:{xMin:c&&c.userMin,xMax:c&&c.userMax,yMin:e&&e.userMin,yMax:e&&e.userMax},resetZoomButton:this.resetZoomButton},m);this.drilldownLevels.push(a);c&&c.names&&(c.names.length=0);b=a.lowerSeries=this.addSeries(b,!1);
b.options._levelNumber=h+1;c&&(c.oldPos=c.pos,c.userMin=c.userMax=null,e.userMin=e.userMax=null);d.type===b.type&&(b.animate=b.animateDrilldown||z,b.options.animation=!0)};m.prototype.applyDrilldown=function(){var a=this.drilldownLevels,b;a&&0<a.length&&(b=a[a.length-1].levelNumber,l(this.drilldownLevels,function(a){a.levelNumber===b&&l(a.levelSeries,function(a){a.options&&a.options._levelNumber===b&&a.remove(!1)})}));this.resetZoomButton&&(this.resetZoomButton.hide(),delete this.resetZoomButton);
this.pointer.reset();this.redraw();this.showDrillUpButton()};m.prototype.getDrilldownBackText=function(){var a=this.drilldownLevels;if(a&&0<a.length)return a=a[a.length-1],a.series=a.seriesOptions,H(this.options.lang.drillUpText,a)};m.prototype.showDrillUpButton=function(){var a=this,b=this.getDrilldownBackText(),d=a.options.drilldown.drillUpButton,c,e;this.drillUpButton?this.drillUpButton.attr({text:b}).align():(e=(c=d.theme)&&c.states,this.drillUpButton=this.renderer.button(b,null,null,function(){a.drillUp()},
c,e&&e.hover,e&&e.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))};m.prototype.drillUp=function(){if(this.drilldownLevels&&0!==this.drilldownLevels.length){for(var a=this,b=a.drilldownLevels,d=b[b.length-1].levelNumber,c=b.length,e=a.series,g,k,f,h,m=function(b){var c;l(e,function(a){a.options._ddSeriesId===b._ddSeriesId&&(c=a)});c=c||a.addSeries(b,!1);c.type===f.type&&c.animateDrillupTo&&(c.animate=c.animateDrillupTo);
b===k.seriesOptions&&(h=c)};c--;)if(k=b[c],k.levelNumber===d){b.pop();f=k.lowerSeries;if(!f.chart)for(g=e.length;g--;)if(e[g].options.id===k.lowerSeriesOptions.id&&e[g].options._levelNumber===d+1){f=e[g];break}f.xData=[];l(k.levelSeriesOptions,m);x(a,"drillup",{seriesOptions:k.seriesOptions});h.type===f.type&&(h.drilldownLevel=k,h.options.animation=a.options.drilldown.animation,f.animateDrillupFrom&&f.chart&&f.animateDrillupFrom(k));h.options._levelNumber=d;f.remove(!1);h.xAxis&&(g=k.oldExtremes,
h.xAxis.setExtremes(g.xMin,g.xMax,!1),h.yAxis.setExtremes(g.yMin,g.yMax,!1));k.resetZoomButton&&(a.resetZoomButton=k.resetZoomButton,a.resetZoomButton.show())}x(a,"drillupall");this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align();this.ddDupes.length=[]}};m.prototype.callbacks.push(function(){var a=this;a.drilldown={update:function(b,d){f.merge(!0,a.options.drilldown,b);v(d,!0)&&a.redraw()}}});
r(m.prototype,"showResetZoom",function(a){this.drillUpButton||a.apply(this,Array.prototype.slice.call(arguments,1))});u.prototype.animateDrillupTo=function(a){if(!a){var b=this,d=b.drilldownLevel;l(this.points,function(a){var b=a.dataLabel;a.graphic&&a.graphic.hide();b&&(b.hidden="hidden"===b.attr("visibility"),b.hidden||(b.hide(),a.connector&&a.connector.hide()))});f.syncTimeout(function(){b.points&&l(b.points,function(a,b){b=b===(d&&d.pointIndex)?"show":"fadeIn";var c="show"===b?!0:void 0,e=a.dataLabel;
if(a.graphic)a.graphic[b](c);e&&!e.hidden&&(e.fadeIn(),a.connector&&a.connector.fadeIn())})},Math.max(this.chart.options.drilldown.animation.duration-50,0));this.animate=z}};u.prototype.animateDrilldown=function(a){var b=this,d=this.chart.drilldownLevels,c,e=p(this.chart.options.drilldown.animation),g=this.xAxis;a||(l(d,function(a){b.options._ddSeriesId===a.lowerSeriesOptions._ddSeriesId&&(c=a.shapeArgs,c.fill=a.color)}),c.x+=v(g.oldPos,g.pos)-g.pos,l(this.points,function(a){a.shapeArgs.fill=a.color;
a.graphic&&a.graphic.attr(c).animate(q(a.shapeArgs,{fill:a.color||b.color}),e);a.dataLabel&&a.dataLabel.fadeIn(e)}),this.animate=null)};u.prototype.animateDrillupFrom=function(a){var b=p(this.chart.options.drilldown.animation),d=this.group,c=d!==this.chart.columnGroup,e=this;l(e.trackerGroups,function(a){if(e[a])e[a].on("mouseover")});c&&delete this.group;l(this.points,function(e){var g=e.graphic,n=a.shapeArgs,h=function(){g.destroy();d&&c&&(d=d.destroy())};g&&(delete e.graphic,n.fill=a.color,b.duration?
g.animate(n,f.merge(b,{complete:h})):(g.attr(n),h()))})};D&&q(D.prototype,{animateDrillupTo:u.prototype.animateDrillupTo,animateDrillupFrom:u.prototype.animateDrillupFrom,animateDrilldown:function(a){var b=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],d=this.chart.options.drilldown.animation,c=b.shapeArgs,e=c.start,g=(c.end-e)/this.points.length;a||(l(this.points,function(a,n){var h=a.shapeArgs;c.fill=b.color;h.fill=a.color;if(a.graphic)a.graphic.attr(f.merge(c,{start:e+n*g,end:e+
(n+1)*g}))[d?"animate":"attr"](h,d)}),this.animate=null)}});f.Point.prototype.doDrilldown=function(a,b,d){var c=this.series.chart,e=c.options.drilldown,g=(e.series||[]).length,f;c.ddDupes||(c.ddDupes=[]);for(;g--&&!f;)e.series[g].id===this.drilldown&&-1===F(this.drilldown,c.ddDupes)&&(f=e.series[g],c.ddDupes.push(this.drilldown));x(c,"drilldown",{point:this,seriesOptions:f,category:b,originalEvent:d,points:void 0!==b&&this.series.xAxis.getDDPoints(b).slice(0)},function(b){var c=b.point.series&&b.point.series.chart,
d=b.seriesOptions;c&&d&&(a?c.addSingleSeriesAsDrilldown(b.point,d):c.addSeriesAsDrilldown(b.point,d))})};f.Axis.prototype.drilldownCategory=function(a,b){C(this.getDDPoints(a),function(d){d&&d.series&&d.series.visible&&d.doDrilldown&&d.doDrilldown(!0,a,b)});this.chart.applyDrilldown()};f.Axis.prototype.getDDPoints=function(a){var b=[];l(this.series,function(d){var c,e=d.xData,f=d.points;for(c=0;c<e.length;c++)if(e[c]===a&&d.options.data[c]&&d.options.data[c].drilldown){b.push(f?f[c]:!0);break}});
return b};E.prototype.drillable=function(){var a=this.pos,b=this.label,d=this.axis,c="xAxis"===d.coll&&d.getDDPoints,e=c&&d.getDDPoints(a);c&&(b&&e.length?(b.drillable=!0,b.basicStyles||(b.basicStyles=f.merge(b.styles)),b.addClass("highcharts-drilldown-axis-label").css(d.chart.options.drilldown.activeAxisLabelStyle).on("click",function(b){d.drilldownCategory(a,b)})):b&&b.drillable&&(b.styles={},b.css(b.basicStyles),b.on("click",null),b.removeClass("highcharts-drilldown-axis-label")))};r(E.prototype,
"addLabel",function(a){a.call(this);this.drillable()});r(f.Point.prototype,"init",function(a,b,d,c){var e=a.call(this,b,d,c);c=(a=b.xAxis)&&a.ticks[c];e.drilldown&&f.addEvent(e,"click",function(a){b.xAxis&&!1===b.chart.options.drilldown.allowPointDrilldown?b.xAxis.drilldownCategory(e.x,a):e.doDrilldown(void 0,void 0,a)});c&&c.drillable();return e});r(f.Series.prototype,"drawDataLabels",function(a){var b=this.chart.options.drilldown.activeDataLabelStyle,d=this.chart.renderer;a.call(this);l(this.points,
function(a){var c=a.options.dataLabels,f=v(a.dlOptions,c&&c.style,{});a.drilldown&&a.dataLabel&&("contrast"===b.color&&(f.color=d.getContrast(a.color||this.color)),c&&c.color&&(f.color=c.color),a.dataLabel.addClass("highcharts-drilldown-data-label"),a.dataLabel.css(b).css(f))},this)});var y=function(a,b,d){a[d?"addClass":"removeClass"]("highcharts-drilldown-point");a.css({cursor:b})},I=function(a){a.call(this);l(this.points,function(a){a.drilldown&&a.graphic&&y(a.graphic,"pointer",!0)})},J=function(a,
b){var d=a.apply(this,Array.prototype.slice.call(arguments,1));this.drilldown&&this.series.halo&&"hover"===b?y(this.series.halo,"pointer",!0):this.series.halo&&y(this.series.halo,"auto",!1);return d};C(w,function(a){r(a.prototype,"drawTracker",I);r(a.prototype.pointClass.prototype,"setState",J)})})(p)});


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:g(Highcharts)})(function(g){(function(a){var f=a.Axis,w=a.Chart,n=a.color,m,k=a.each,t=a.extend,v=a.isNumber,p=a.Legend,h=a.LegendSymbolMixin,d=a.noop,r=a.merge,g=a.pick,u=a.wrap;a.ColorAxis||(m=a.ColorAxis=function(){this.init.apply(this,arguments)},t(m.prototype,f.prototype),t(m.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(f.prototype.keepProps),init:function(b,c){var e="vertical"!==b.options.legend.layout,l;this.coll="colorAxis";l=r(this.defaultColorAxisOptions,{side:e?2:1,reversed:!e},c,{opposite:!e,showEmpty:!1,title:null,visible:b.options.legend.enabled});
f.prototype.init.call(this,b,l);c.dataClasses&&this.initDataClasses(c);this.initStops();this.horiz=e;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(b){var c=this.chart,e,l=0,q=c.options.chart.colorCount,a=this.options,h=b.dataClasses.length;this.dataClasses=e=[];this.legendItems=[];k(b.dataClasses,function(b,d){b=r(b);e.push(b);b.color||("category"===a.dataClassColor?(d=c.options.colors,q=d.length,b.color=d[l],b.colorIndex=l,l++,l===q&&(l=0)):b.color=n(a.minColor).tweenTo(n(a.maxColor),
2>h?.5:d/(h-1)))})},setTickPositions:function(){if(!this.dataClasses)return f.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];k(this.stops,function(b){b.color=n(b[1])})},setOptions:function(b){f.prototype.setOptions.call(this,b);this.options.crosshair=this.options.marker},setAxisSize:function(){var b=this.legendSymbol,c=this.chart,e=c.options.legend||{},l,q;b?(this.left=e=b.attr("x"),this.top=l=b.attr("y"),
this.width=q=b.attr("width"),this.height=b=b.attr("height"),this.right=c.chartWidth-e-q,this.bottom=c.chartHeight-l-b,this.len=this.horiz?q:b,this.pos=this.horiz?e:l):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||this.defaultLegendLength},normalizedValue:function(b){this.isLog&&(b=this.val2lin(b));return 1-(this.max-b)/(this.max-this.min||1)},toColor:function(b,c){var e=this.stops,l,q,a=this.dataClasses,h,d;if(a)for(d=a.length;d--;){if(h=a[d],l=h.from,e=h.to,(void 0===l||b>=l)&&(void 0===e||
b<=e)){q=h.color;c&&(c.dataClass=d,c.colorIndex=h.colorIndex);break}}else{b=this.normalizedValue(b);for(d=e.length;d--&&!(b>e[d][0]););l=e[d]||e[d+1];e=e[d+1]||l;b=1-(e[0]-b)/(e[0]-l[0]||1);q=l.color.tweenTo(e.color,b)}return q},getOffset:function(){var b=this.legendGroup,c=this.chart.axisOffset[this.side];b&&(this.axisParent=b,f.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=c)},setLegendColor:function(){var b,
c=this.reversed;b=c?1:0;c=c?0:1;b=this.horiz?[b,0,c,0]:[0,c,0,b];this.legendColor={linearGradient:{x1:b[0],y1:b[1],x2:b[2],y2:b[3]},stops:this.stops}},drawLegendSymbol:function(b,c){var e=b.padding,a=b.options,d=this.horiz,h=g(a.symbolWidth,d?this.defaultLegendLength:12),k=g(a.symbolHeight,d?12:this.defaultLegendLength),f=g(a.labelPadding,d?16:30),a=g(a.itemDistance,10);this.setLegendColor();c.legendSymbol=this.chart.renderer.rect(0,b.baseline-11,h,k).attr({zIndex:1}).add(c.legendGroup);this.legendItemWidth=
h+e+(d?a:f);this.legendItemHeight=k+e+(d?f:0)},setState:function(b){k(this.series,function(c){c.setState(b)})},visible:!0,setVisible:d,getSeriesExtremes:function(){var b=this.series,c=b.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;c--;)void 0!==b[c].valueMin&&(this.dataMin=Math.min(this.dataMin,b[c].valueMin),this.dataMax=Math.max(this.dataMax,b[c].valueMax))},drawCrosshair:function(b,c){var e=c&&c.plotX,a=c&&c.plotY,d,h=this.pos,k=this.len;c&&(d=this.toPixels(c[c.series.colorKey]),d<h?
d=h-2:d>h+k&&(d=h+k+2),c.plotX=d,c.plotY=this.len-d,f.prototype.drawCrosshair.call(this,b,c),c.plotX=e,c.plotY=a,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(b,c,e,d,a){return v(a)?this.horiz?["M",a-4,this.top-6,"L",a+4,this.top-6,a,this.top,"Z"]:["M",this.left,a,"L",this.left-6,a+6,this.left-6,a-6,"Z"]:f.prototype.getPlotLinePath.call(this,
b,c,e,d)},update:function(b,c){var a=this.chart,d=a.legend;k(this.series,function(b){b.isDirtyData=!0});b.dataClasses&&d.allItems&&(k(d.allItems,function(b){b.isDataClass&&b.legendGroup&&b.legendGroup.destroy()}),a.isDirtyLegend=!0);a.options[this.coll]=r(this.userOptions,b);f.prototype.update.call(this,b,c);this.legendItem&&(this.setLegendColor(),d.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);f.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var b=
this,c=this.chart,e=this.legendItems,l=c.options.legend,f=l.valueDecimals,p=l.valueSuffix||"",g;e.length||k(this.dataClasses,function(l,q){var r=!0,n=l.from,m=l.to;g="";void 0===n?g="\x3c ":void 0===m&&(g="\x3e ");void 0!==n&&(g+=a.numberFormat(n,f)+p);void 0!==n&&void 0!==m&&(g+=" - ");void 0!==m&&(g+=a.numberFormat(m,f)+p);e.push(t({chart:c,name:g,options:{},drawLegendSymbol:h.drawRectangle,visible:!0,setState:d,isDataClass:!0,setVisible:function(){r=this.visible=!r;k(b.series,function(b){k(b.points,
function(b){b.dataClass===q&&b.setVisible(r)})});c.legend.colorizeItem(this,r)}},l))});return e},name:""}),k(["fill","stroke"],function(b){a.Fx.prototype[b+"Setter"]=function(){this.elem.attr(b,n(this.start).tweenTo(n(this.end),this.pos),null,!0)}}),u(w.prototype,"getAxes",function(b){var c=this.options.colorAxis;b.call(this);this.colorAxis=[];c&&new m(this,c)}),u(p.prototype,"getAllItems",function(b){var c=[],a=this.chart.colorAxis[0];a&&a.options&&(a.options.showInLegend&&(a.options.dataClasses?
c=c.concat(a.getDataClassLegendSymbols()):c.push(a)),k(a.series,function(b){b.options.showInLegend=!1}));return c.concat(b.call(this))}),u(p.prototype,"colorizeItem",function(b,c,a){b.call(this,c,a);a&&c.legendColor&&c.legendSymbol.attr({fill:c.legendColor})}),u(p.prototype,"update",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},arguments[2])}))})(g);(function(a){var f=a.defined,g=a.each,n=a.noop,m=a.seriesTypes;a.colorPointMixin={isValid:function(){return null!==
this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(a){var k=this,f=a?"show":"hide";g(["graphic","dataLabel"],function(a){if(k[a])k[a][f]()})},setState:function(k){a.Point.prototype.setState.call(this,k);this.graphic&&this.graphic.attr({zIndex:"hover"===k?1:0})}};a.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:n,parallelArrays:["x","y","value"],
colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,translateColors:function(){var a=this,f=this.options.nullColor,n=this.colorAxis,m=this.colorKey;g(this.data,function(h){var d=h[m];if(d=h.options.color||(h.isNull?f:n&&void 0!==d?n.toColor(d,h):h.color||a.color))h.color=d})},colorAttribs:function(a){var k={};f(a.color)&&(k[this.colorProp||"fill"]=a.color);return k}}})(g);(function(a){var f=a.colorPointMixin,g=a.each,n=a.merge,m=a.noop,k=a.pick,t=a.Series,v=a.seriesType,p=a.seriesTypes;
v("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},n(a.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var a;p.scatter.prototype.init.apply(this,
arguments);a=this.options;a.pointRange=k(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1},translate:function(){var a=this.options,d=this.xAxis,f=this.yAxis,n=a.pointPadding||0,m=function(b,a,d){return Math.min(Math.max(a,b),d)};this.generatePoints();g(this.points,function(b){var c=(a.colsize||1)/2,e=(a.rowsize||1)/2,h=m(Math.round(d.len-d.translate(b.x-c,0,1,0,1)),-d.len,2*d.len),c=m(Math.round(d.len-d.translate(b.x+c,0,1,0,1)),-d.len,2*d.len),g=m(Math.round(f.translate(b.y-e,0,
1,0,1)),-f.len,2*f.len),e=m(Math.round(f.translate(b.y+e,0,1,0,1)),-f.len,2*f.len),p=k(b.pointPadding,n);b.plotX=b.clientX=(h+c)/2;b.plotY=(g+e)/2;b.shapeType="rect";b.shapeArgs={x:Math.min(h,c)+p,y:Math.min(g,e)+p,width:Math.abs(c-h)-2*p,height:Math.abs(e-g)-2*p}});this.translateColors()},drawPoints:function(){p.column.prototype.drawPoints.call(this);g(this.points,function(a){a.graphic.attr(this.colorAttribs(a))},this)},animate:m,getBox:m,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,
getExtremes:function(){t.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;t.prototype.getExtremes.call(this)}}),a.extend({haloPath:function(a){if(!a)return[];var d=this.shapeArgs;return["M",d.x-a,d.y-a,"L",d.x-a,d.y+d.height+a,d.x+d.width+a,d.y+d.height+a,d.x+d.width+a,d.y-a,"Z"]}},f))})(g)});


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(t){"object"===typeof module&&module.exports?module.exports=t:t(Highcharts)})(function(t){(function(n){function t(d,b,a,m,c,e){d=(e-b)*(a-d)-(m-b)*(c-d);return 0<d?!0:0>d?!1:!0}function v(d,b,a,m,c,e,f,h){return t(d,b,c,e,f,h)!==t(a,m,c,e,f,h)&&t(d,b,a,m,c,e)!==t(d,b,a,m,f,h)}function B(d,b,a,m,c,e,f,h){return v(d,b,d+a,b,c,e,f,h)||v(d+a,b,d+a,b+m,c,e,f,h)||v(d,b+m,d+a,b+m,c,e,f,h)||v(d,b,d,b+m,c,e,f,h)}function C(d){var b=this,a=Math.max(n.animObject(b.renderer.globalAnimation).duration,
250),m=!b.hasRendered;d.apply(b,[].slice.call(arguments,1));b.labelSeries=[];b.labelSeriesMaxSum=0;clearTimeout(b.seriesLabelTimer);w(b.series,function(c){var e=c.options.label,d=c.labelBySeries,h=d&&d.closest;e.enabled&&c.visible&&(c.graph||c.area)&&!c.isSeriesBoosting&&(b.labelSeries.push(c),e.minFontSize&&e.maxFontSize&&(c.sum=n.reduce(c.yData,function(a,b){return(a||0)+(b||0)},0),b.labelSeriesMaxSum=Math.max(b.labelSeriesMaxSum,c.sum)),m&&(a=Math.max(a,n.animObject(c.options.animation).duration)),
h&&(void 0!==h[0].plotX?d.animate({x:h[0].plotX+h[1],y:h[0].plotY+h[2]}):d.attr({opacity:0})))});b.seriesLabelTimer=n.syncTimeout(function(){b.drawSeriesLabels()},b.renderer.forExport?0:a)}var D=n.wrap,w=n.each,E=n.extend,y=n.isNumber,x=n.pick,z=n.Series,F=n.SVGRenderer,A=n.Chart;n.setOptions({plotOptions:{series:{label:{enabled:!0,connectorAllowed:!0,connectorNeighbourDistance:24,minFontSize:null,maxFontSize:null,onArea:null,style:{fontWeight:"bold"},boxesToAvoid:[]}}}});F.prototype.symbols.connector=
function(d,b,a,m,c){var e=c&&c.anchorX;c=c&&c.anchorY;var f,h,g=a/2;y(e)&&y(c)&&(f=["M",e,c],h=b-c,0>h&&(h=-m-h),h<a&&(g=e<d+a/2?h:a-h),c>b+m?f.push("L",d+g,b+m):c<b?f.push("L",d+g,b):e<d?f.push("L",d,b+m/2):e>d+a&&f.push("L",d+a,b+m/2));return f||[]};z.prototype.getPointsOnGraph=function(){if(this.xAxis||this.yAxis){var d=this.points,b,a,m=[],c,e,f,h;e=this.graph||this.area;f=e.element;var g=this.chart.inverted,q=this.xAxis;b=this.yAxis;var r=g?b.pos:q.pos,g=g?q.pos:b.pos,q=x(this.options.label.onArea,
!!this.area),u=b.getThreshold(this.options.threshold);if(this.getPointSpline&&f.getPointAtLength&&!q){e.toD&&(a=e.attr("d"),e.attr({d:e.toD}));h=f.getTotalLength();for(c=0;c<h;c+=16)b=f.getPointAtLength(c),m.push({chartX:r+b.x,chartY:g+b.y,plotX:b.x,plotY:b.y});a&&e.attr({d:a});b=d[d.length-1];b.chartX=r+b.plotX;b.chartY=g+b.plotY;m.push(b)}else for(h=d.length,c=0;c<h;c+=1){b=d[c];a=d[c-1];b.chartX=r+b.plotX;b.chartY=g+b.plotY;q&&(b.chartCenterY=g+(b.plotY+x(b.yBottom,u))/2);if(0<c&&(e=Math.abs(b.chartX-
a.chartX),f=Math.abs(b.chartY-a.chartY),e=Math.max(e,f),16<e))for(e=Math.ceil(e/16),f=1;f<e;f+=1)m.push({chartX:a.chartX+f/e*(b.chartX-a.chartX),chartY:a.chartY+f/e*(b.chartY-a.chartY),chartCenterY:a.chartCenterY+f/e*(b.chartCenterY-a.chartCenterY),plotX:a.plotX+f/e*(b.plotX-a.plotX),plotY:a.plotY+f/e*(b.plotY-a.plotY)});y(b.plotY)&&m.push(b)}return m}};z.prototype.labelFontSize=function(d,b){return d+this.sum/this.chart.labelSeriesMaxSum*(b-d)+"px"};z.prototype.checkClearPoint=function(d,b,a,m){var c=
Number.MAX_VALUE,e=Number.MAX_VALUE,f,h,g=this.options.label.connectorAllowed,q=x(this.options.label.onArea,!!this.area),r=this.chart,u,k,n,t,p,l;for(p=0;p<r.boxesToAvoid.length;p+=1)if(k=r.boxesToAvoid[p],l=d+a.width,u=b,n=b+a.height,!(d>k.right||l<k.left||u>k.bottom||n<k.top))return!1;for(p=0;p<r.series.length;p+=1)if(u=r.series[p],k=u.interpolatedPoints,u.visible&&k){for(l=1;l<k.length;l+=1){if(k[l].chartX>=d-16&&k[l-1].chartX<=d+a.width+16){if(B(d,b,a.width,a.height,k[l-1].chartX,k[l-1].chartY,
k[l].chartX,k[l].chartY))return!1;this===u&&!f&&m&&(f=B(d-16,b-16,a.width+32,a.height+32,k[l-1].chartX,k[l-1].chartY,k[l].chartX,k[l].chartY))}!g&&!f||this===u&&!q||(n=d+a.width/2-k[l].chartX,t=b+a.height/2-k[l].chartY,c=Math.min(c,n*n+t*t))}if(!q&&g&&this===u&&(m&&!f||c<Math.pow(this.options.label.connectorNeighbourDistance,2))){for(l=1;l<k.length;l+=1)f=Math.min(Math.pow(d+a.width/2-k[l].chartX,2)+Math.pow(b+a.height/2-k[l].chartY,2),Math.pow(d-k[l].chartX,2)+Math.pow(b-k[l].chartY,2),Math.pow(d+
a.width-k[l].chartX,2)+Math.pow(b-k[l].chartY,2),Math.pow(d+a.width-k[l].chartX,2)+Math.pow(b+a.height-k[l].chartY,2),Math.pow(d-k[l].chartX,2)+Math.pow(b+a.height-k[l].chartY,2)),f<e&&(e=f,h=k[l]);f=!0}}return!m||f?{x:d,y:b,weight:c-(h?e:0),connectorPoint:h}:!1};A.prototype.drawSeriesLabels=function(){var d=this,b=this.labelSeries;d.boxesToAvoid=[];w(b,function(a){a.interpolatedPoints=a.getPointsOnGraph();w(a.options.label.boxesToAvoid||[],function(a){d.boxesToAvoid.push(a)})});w(d.series,function(a){function b(a,
b,c){return a>n&&a<=n+t-c.width&&b>=k&&b<=k+v-c.height}if(a.xAxis||a.yAxis){var c,e,f,h=[],g,q;c=a.options.label;var r=d.inverted,n=r?a.yAxis.pos:a.xAxis.pos,k=r?a.xAxis.pos:a.yAxis.pos,t=d.inverted?a.yAxis.len:a.xAxis.len,v=d.inverted?a.xAxis.len:a.yAxis.len,p=a.interpolatedPoints,l=x(c.onArea,!!a.area),r=a.labelBySeries;e=c.minFontSize;c=c.maxFontSize;if(a.visible&&!a.isSeriesBoosting&&p){r||(a.labelBySeries=r=d.renderer.label(a.name,0,-9999,"connector").css(E({color:l?d.renderer.getContrast(a.color):
a.color},a.options.label.style)),e&&c&&r.css({fontSize:a.labelFontSize(e,c)}),r.attr({padding:0,opacity:d.renderer.forExport?1:0,stroke:a.color,"stroke-width":1,zIndex:3}).add(a.group).animate({opacity:1},{duration:200}));c=r.getBBox();c.width=Math.round(c.width);for(q=p.length-1;0<q;--q)l?(e=p[q].chartX-c.width/2,f=p[q].chartCenterY-c.height/2):(e=p[q].chartX+3,f=p[q].chartY-c.height-3,b(e,f,c)&&(g=a.checkClearPoint(e,f,c)),g&&h.push(g),e=p[q].chartX+3,f=p[q].chartY+3,b(e,f,c)&&(g=a.checkClearPoint(e,
f,c)),g&&h.push(g),e=p[q].chartX-c.width-3,f=p[q].chartY+3,b(e,f,c)&&(g=a.checkClearPoint(e,f,c)),g&&h.push(g),e=p[q].chartX-c.width-3,f=p[q].chartY-c.height-3),b(e,f,c)&&(g=a.checkClearPoint(e,f,c)),g&&h.push(g);if(!h.length&&!l)for(e=n+t-c.width;e>=n;e-=16)for(f=k;f<k+v-c.height;f+=16)(g=a.checkClearPoint(e,f,c,!0))&&h.push(g);if(h.length){if(h.sort(function(a,b){return b.weight-a.weight}),g=h[0],d.boxesToAvoid.push({left:g.x,right:g.x+c.width,top:g.y,bottom:g.y+c.height}),h=Math.sqrt(Math.pow(Math.abs(g.x-
r.x),2),Math.pow(Math.abs(g.y-r.y),2)))p={opacity:d.renderer.forExport?1:0,x:g.x-n,y:g.y-k},l={opacity:1},10>=h&&(l={x:p.x,y:p.y},p={}),a.labelBySeries.attr(E(p,{anchorX:g.connectorPoint&&g.connectorPoint.plotX,anchorY:g.connectorPoint&&g.connectorPoint.plotY})).animate(l),a.options.kdNow=!0,a.buildKDTree(),a=a.searchPoint({chartX:g.x,chartY:g.y},!0),r.closest=[a,g.x-n-a.plotX,g.y-k-a.plotY]}else r&&(a.labelBySeries=r.destroy())}}})};D(A.prototype,"render",C);D(A.prototype,"redraw",C)})(t)});


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

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
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
  this._clearFn.call(window, this._id);
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
// On some exotic environments, it's not clear which object `setimmeidate` was
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