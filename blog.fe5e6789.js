!function a(r,i,o){function l(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return l(r[t][1][e]||e)},n,n.exports,a,r,i,o)}return i[t].exports}for(var d="function"==typeof require&&require,e=0;e<o.length;e++)l(o[e]);return l}({1:[function(e,t,n){"use strict";var a,o=(a=e("../legal-modal"))&&a.__esModule?a:{default:a};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;function l(){var e=null===(e=document)||void 0===e?void 0:e.querySelector(".kv-check-scroll");return e&&null!=e&&e.querySelector(".kv-ee-navigation")?e:null}function d(e,t,n){var a,r,i=document.createElement("div");return i.classList.add("kv-ee-banner-content"),i.append((a=e,(r=document.createElement("p")).innerHTML=a.bannerText,r)),i.append(function(e,t,n){var a=document.createElement("div");a.classList.add("kv-ee-banner-buttons");var r=document.createElement("span");r.classList.add("kv-ee-banner-button"),r.innerHTML=n.localize("designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label"),r.addEventListener("click",function(){(0,o.default)(t)});n=document.createElement("span");return n.classList.add("kv-ee-banner-button"),n.innerHTML=e.agreeButtonText,n.addEventListener("click",function(){var e,t=null===(e=document.body)||void 0===e?void 0:e.querySelector(".kv-ee-gdpr-banner");t&&(t.classList.remove("kv-ee-show"),(e=l())&&(e.style.top="0"),setTimeout(function(){document.body.removeChild(t),window.localStorage.setItem("cookieDisclaimer",!0)},e?200:0))}),a.append(r),a.append(n),a}(e,t,n)),i}function r(e,t,n){var a=document.createElement("div");a.classList.add("kv-ee-gdpr-banner"),a.classList.add("kv-ee-".concat(e.bannerPosition)),a.classList.add("kv-ee-show");var r,i="top"===e.bannerPosition;(r=l())&&i&&(r.style.top="74px",r.style.transition="top 200ms ease-in-out",a.classList.add("kv-ee-header-fixed")),a.append((r=e,e=t,t=n,(n=document.createElement("div")).classList.add("kv-ee-banner-container"),n.append(d(r,e,t)),n)),i?document.body.prepend(a):document.body.append(a)}n.default=r},{"../legal-modal":4}],2:[function(e,t,n){"use strict";var a,r=(a=e("./gdpr-banner"))&&a.__esModule?a:{default:a};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r=r.default;n.default=r},{"./gdpr-banner":1}],3:[function(e,t,n){"use strict";var a=i(e("./legal-modal")),r=i(e("./gdpr-banner"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var d,u,s,e=(d=v,(u=[{key:"getNiceName",value:function(e){return"termsofservice"===e?this.builderApi.localize("designer.siteSettings.legal.fields.termsOfService.termsOfServiceText.label"):"privacypolicy"===e?this.builderApi.localize("designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label"):""}},{key:"getLegalText",value:function(e,t){return"termsofservice"===t?e.termsOfServiceText:"privacypolicy"===t?e.privacyPolicyText:""}},{key:"buildLegalElement",value:function(e,t,n){var a=document.createElement("a");return a.id=e,a.key=t,a.href="#".concat(e),a.classList.add(e),a.innerHTML=n,a.style.marginRight="8px",a.style.cursor="pointer",a}},{key:"doEUCitizenCall",value:function(){var e=window._site&&window._site.environment||"",t=window._site&&window._site.partnerId||0,n=window._site&&window._site.useHostingApi||!1,a="";return(100<=t||n)&&e&&(a="dev"===e?"https://hostingapi.latest.mywebsitebuilder.com":"prod"===e?"https://hostingapi.mywebsitebuilder.com":"https://hostingapi.".concat(e,".mywebsitebuilder.com")),this.fetch(a+"/v1.0/policy/info").then(function(e){return e.json()})}},{key:"registerGdprBanner",value:function(e,t,n){this.isRuntimeSite&&this.isPrivacyPolicy(e)&&t.showCookieBanner&&this.testLocalStorage()&&!window.localStorage.getItem("cookieDisclaimer")&&(0,r.default)(t,n,this.builderApi)}},{key:"isPrivacyPolicy",value:function(e){return"privacypolicy"===e}},{key:"testLocalStorage",value:function(){try{return window.localStorage.setItem("testLS",!0),window.localStorage.removeItem("testLS"),!0}catch(e){return!1}}},{key:"handleLegalModal",value:function(e,t){window.location.hash==="#".concat(e)&&(0,a.default)(t)}},{key:"afterRender",value:function(e,t,n){var d=this;setTimeout(function(){var e=n.global.legal,o=n.global.companyName,l=null==t?void 0:t.querySelector(".kv-ee-legal-placeholder");Object.entries(e).map(function(e,t){var n,a=c(e,2),r=a[0],e=a[1],i=r.toLowerCase();null!=l&&l.querySelector(".".concat(i))||(a=d.getNiceName(i),r=d.getLegalText(e,i),t=d.buildLegalElement(i,t,a),0<r.length&&(l.append(t),n={data:r,displayName:a,companyName:o,id:i},d.registerGdprBanner(i,e,n),window.addEventListener("hashchange",function(){d.handleLegalModal(i,n)}),d.isRuntimeSite&&d.handleLegalModal(i,n)))}),l&&(l.dataset.type="legal")},1)}}])&&l(d.prototype,u),s&&l(d,s),v);function v(e,t){var n=this;(function(e){if(!(e instanceof v))throw new TypeError("Cannot call a class as a function")})(this),this.builderApi=e,this.isRuntimeSite=t.isRuntimeSite,this.fetch=e.fetch,e.editor&&setTimeout(function(){e.editor.refreshFeatures&&e.editor.refreshFeatures(),e.editor.getAllControlsForFeature(n).forEach(function(e){e.render()})},1)}window.__features=window.__features||{},window.__features.legal=e},{"./gdpr-banner":2,"./legal-modal":4}],4:[function(e,t,n){"use strict";var a,r=(a=e("./legal-modal"))&&a.__esModule?a:{default:a};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r=r.default;n.default=r},{"./legal-modal":5}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;function i(){var e,t=null===(e=document.body)||void 0===e?void 0:e.querySelector(".kv-ee-legal-modal");t&&(t.classList.add("kv-ee-animate-out"),setTimeout(function(){document.body.removeChild(t),document.body.style.overflow="",window.history.replaceState({},document.title,window.location.href.split("#")[0])},250))}function o(e,t,n){var a=document.createElement("div");return a.classList.add("kv-ee-modal-content"),a.append(function(e){var t=document.createElement("div");t.classList.add("kv-ee-modal-header");var n=document.createElement("h2");n.innerHTML=e;e=document.createElement("span");return e.classList.add("kv-ee-close"),e.innerHTML="&times;",e.addEventListener("click",i),t.append(n),t.append(e),t}(t)),a.append(function(e){var t=document.createElement("div");t.classList.add("kv-ee-modal-body");var n=e.includes("<p>")?document.createElement("div"):document.createElement("p");return n.innerText=e,t.append(n),t}(e)),a.append(function(e){var t=document.createElement("div");t.classList.add("kv-ee-modal-footer");var n=(new Date).getFullYear(),a=document.createElement("span");return a.innerHTML=e?"&copy; ".concat(n," ").concat(e):"Copyright ".concat(n),t.append(a),t}(n)),a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation()}),a}function a(e){var t=e.data,n=e.displayName,a=e.companyName,r=e.id;(e=document.createElement("div")).classList.add("kv-ee-legal-modal"),e.id=r,e.append(o(t,n,a)),e.classList.add("kv-ee-animate-in"),e.addEventListener("click",i),window.addEventListener("keydown",l),document.body.append(e),document.body.style.overflow="hidden"}var l=function(e){27===e.keyCode&&(window.removeEventListener("keydown",l),i())};n.default=a},{}]},{},[3]);;!function n(o,r,a){function s(t,e){if(!r[t]){if(!o[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(l)return l(t,!0);throw(i=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",i}i=r[t]={exports:{}},o[t][0].call(i.exports,function(e){return s(o[t][1][e]||e)},i,i.exports,n,o,r,a)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,i){"use strict";function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){for(var i,n=0;n<t.length;n++)(i=t[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s,l,u,d=(s=c,(l=[{key:"registerWindowEvent",value:function(){}},{key:"unregisterWindowEvent",value:function(){var e;"undefined"==typeof window||!window._zoomUpdateEvents||0<=(e=window._zoomUpdateEvents.indexOf(this.triggerWindowEvent))&&window._zoomUpdateEvents.splice(e,1)}},{key:"dispose",value:function(){this.recheckMode=null,this.unregisterWindowEvent()}},{key:"afterRender",value:function(e,t){var i,n,o=this;!t.parentElement||((n=(i=t.parentElement.parentElement).querySelectorAll("li"))||n.length)&&(this.builderApi.isInOnboarding()?i.classList.add("kv-ee-no-animation"):i.classList.remove("kv-ee-no-animation"),this.settings.isCarouselSection?setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300):!this.builderApi.isInOnboarding()||t.offsetHeight?(this.checkMobileMode(i),this.setHeaderHeight(e,t),window.addEventListener("resize",function(){o.__resizeTimeout&&window.clearTimeout(o.__resizeTimeout),o.__resizeTimeout=window.setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},o.resizeWaitTimeout)}),this.recheckMode=this.builderApi.debounce(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300)):setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},2e3))}},{key:"setSectionPadding",value:function(e,t){e.nextElementSibling.querySelector(".kv-background").style.top=-t+"px"}},{key:"setHeaderHeightInternal",value:function(e,t){var i="navigation"===this.builderApi.controller.parentController.model.category&&this.isRuntimeSite;if(0<e.offsetHeight||i){i=this.builderApi.controller.parentController.model.layout.section.id;if("dubemo66"===i)return n=e.querySelector("header"),void(t.style.height=n.offsetHeight+"px");var n=(n=e.querySelector(".kv-ee-navigation")||e.querySelector("header")).offsetHeight,e=this.isPreviewOrPublishedWebsite&&"navigation-1"===i&&!this.settings.model._toggle["global.logo"]?Math.ceil(n+e.offsetHeight):Math.max(n,e.offsetHeight);t.style.height=e+"px",document.documentElement.style.setProperty("--navigation-height",e+"px")}}},{key:"setHeaderHeight",value:function(e,r){var a=this,e=e.model.isFloatingSection||!1===e.model.cover&&!0===e.model.fixedNavigation;r.parentElement&&e&&!this.settings.isCarouselSection&&function(){for(var e=r.parentElement.parentElement,t=r.querySelectorAll("img"),i=0;i<t.length;i++){var n=t[i].src,o=new window.Image;o.onload=function(){setTimeout(function(){a.setHeaderHeightInternal(r,e)})},o.src=n}a.setHeaderHeightInternal(r,e),setTimeout(function(){r.classList.contains("kv-scrolled")||a.setHeaderHeightInternal(r,e)},1e3)}()}},{key:"getNavigationWidth",value:function(e){var t=0;return e.forEach(function(e){t+=e.offsetWidth}),t+40}},{key:"determineContainerWidth",value:function(e,t){var i=e.querySelector("nav")||e,n=e.querySelector('[data-dynamic-navigation-element="logo"]'),o=e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),o=o?o.offsetWidth:0,n=n?n.offsetWidth:0,i=i.offsetWidth-o;return{containerSize:i,logoWidth:n,ctaWidth:o,headerWith:e.offsetWidth,navigationToWide:t+n+o>=e.offsetWidth-20,headerToWide:i+n>=e.offsetWidth}}},{key:"shouldMinimizeMenu",value:function(e){if(((null==e?void 0:e.clientWidth)||window.innerWidth)<this.mobileBreakpoint)return!0;var t=e.querySelectorAll(".kv-ee-menu-item-wrapper > li");this.currentElementWidth=this.getNavigationWidth(t);var i=this.determineContainerWidth(e,this.currentElementWidth),t=i.containerSize,e=i.headerToWide,i=i.navigationToWide;return t<100&&!this.builderApi.controller.getSiteController().hasSectionBasedNavigation()||e||i}},{key:"checkMobileMode",value:function(e){var t=(t=e.querySelector(".kv-ee-check-mobile"))||e;window.innerWidth<this.mobileBreakpoint?t.classList.contains("kv-ee-mobile")||t.classList.add("kv-ee-mobile"):(t.classList.remove("kv-ee-mobile"),e=this.shouldMinimizeMenu(e),t=t.classList,e&&t.add("kv-ee-mobile"),e||t.remove("kv-ee-mobile"))}},{key:"updateProperty",value:function(e,t,i){var n;"layout.section.id"!==t||(t=o((n=document.querySelector(".kv-page-content")).classList).find(function(e){return e.includes("with-navigation")}))&&(n.classList.remove(t),n.classList.add("kv-ee-with-"+i))}}])&&r(s.prototype,l),u&&r(s,u),c);function c(e,t){var i=this;(function(e){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")})(this),a(this,"getRenderModel",function(){return{}}),a(this,"triggerWindowEvent",function(){i.recheckMode&&i.recheckMode()}),this.isRuntimeSite=t.isRuntimeSite,this.builderApi=e,this.currentElementWidth=0,this.checkTimeout=0,this.settings=t;e=!this.editor&&window.self!==window.top;this.isPreviewOrPublishedWebsite=t.isRuntimeSite,this.mobileBreakpoint=991,this.resizeWaitTimeout=e?0:300,"undefined"!=typeof window&&(window._zoomUpdateEvents=window._zoomUpdateEvents||[],window._zoomUpdateEvents.push(this.triggerWindowEvent))}window.__features=window.__features||{},window.__features.navigation=d},{}]},{},[1]);;!function n(o,i,a){function s(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,i,a)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,r){"use strict";function o(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r,n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,u,c,d="AM_BLOG",p=(l=f,(u=[{key:"createEditButtons",value:function(e){var n=this,t=e.querySelector(".kv-ee-blog-post-first"),e=Array.from(e.querySelectorAll(".kv-ee-blog-post")),e=[t].concat(i(e)).filter(function(e){return e});0<e.length&&(this.blogpostElements=e).forEach(function(e){var t=e.querySelector(".kv-ee-action-buttons");t&&e.removeChild(t);var r=document.createElement("div");r.classList.add("kv-ee-action-buttons");t=document.createElement("button");t.style.borderRadius="4px",t.style.boxShadow="none",t.innerHTML='<i class="material-icons">edit</i>',t.addEventListener("click",n.onEditPost),r.appendChild(t),e.appendChild(r)})}},{key:"createAddPostButton",value:function(e,t){var r,n=e.querySelector(".kv-ee-blog--add-post--button");n&&((r=n.querySelector(".add-post-button-container"))&&n.removeChild(r),e=document.createElement("div"),r=document.createElement("button"),e.classList.add("kv-ee-add-post-button-container"),r.classList.add("kv-ee-add-post-button"),r.classList.add("kv-add-item-btn"),r.classList.add("kv-editor-button"),r.classList.add("kv-ee-large"),t||r.classList.add("kv-ee-blog-no-posts"),r.innerHTML="<span>".concat(this.builderApi.localize("editorTemplates.features.blog.addPost"),"</span>"),r.addEventListener("click",this.onAddPost),e.appendChild(r),n.appendChild(e),this.addPostButtonContainer=e)}},{key:"removeEditButtons",value:function(){var r=this;this.blogpostElements&&this.blogpostElements.forEach(function(e){var t=e.querySelector(".kv-ee-action-buttons");e.querySelector("button").removeEventListener("click",r.onEditPost),t.parentElement.removeChild(t)})}},{key:"removeAddPostButton",value:function(){this.addPostButtonContainer&&(this.addPostButtonContainer.querySelector(".kv-ee-add-post-button").removeEventListener("click",this.onAddPost),this.addPostButtonContainer.parentElement.removeChild(this.addPostButtonContainer),this.addPostButtonContainer=null)}},{key:"requestAppmarketApp",value:function(){var n=this;return new Promise(function(t,r){var e;n.app?t(n.app):(e=n.builderApi.resolveAppmarketApp(d),n.blogInitializingPromise=e.then(function(e){e?(n.instanceJwt=e&&e.instance_jwt,n.instanceId=e&&e.instance_id,e.base_url=e.url.split("?")[0],n.app=e,t(e)):r(new Error("Could not resolve a valid app."))}))})}},{key:"openDashboard",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.builderApi.editor.showDashboard(d,{onClose:e.onClose,fullscreen:!0,showHeader:!1})}},{key:"diffFetchedWithCachedPosts",value:function(e){return e}},{key:"proxyImages",value:function(e,t,r){var n=this,o=document.createElement("div");return o.innerHTML=e,Array.from(o.querySelectorAll("img")).forEach(function(e){e.src=e.src?n.isPreviewMode()?e.src:n.proxyImage(e.src,t,r):null}),o.innerHTML}},{key:"proxyImage",value:function(e,t,r){t=new this.builderApi.ImageProxyHelper(this.builderApi.ImageProxyHelper.stripProxyUrl(e),t);return t.resizeToWidth(r.size),t.result()}},{key:"sanitizePost",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var r=function(t){for(var r,e=1;e<arguments.length;e++)r=null==arguments[e]?{}:arguments[e],e%2?o(Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))});return t}({},e);r.leader=this.sanitizeString(e.leader,!0),r.title=this.sanitizeString(e.title,!0);var n=!this.config.isRuntimeSite||this.isHostedBrand()||document.location.host.includes("app-gateway")?"cloudflare":"cloudflareHosted";return r.leader_image=r.leader_image?this.isPreviewMode()?r.leader_image:this.proxyImage(r.leader_image,n,t):null,e.content&&(r.content=e.content.replace(/<br\/>/gim,"<br>").replace(/&lt;br\/&gt;/gim,"<br>").replace(/<hr\/>/gim,"<hr>").replace(/&lt;hr\/&gt;/gim,"<hr>").replace(/<p> <\/p>/gim,"<br>").replace(/<p><\/p>/gim,"<br>").replace(/&#x29;/gim,"(").replace(/&#x30;/gim,")"),r.content=this.proxyImages(this.sanitizeString(r.content),n,t),(t=document.createElement("textarea")).innerHTML=r.content,r.content=t.value),r}},{key:"sanitizeString",value:function(e,t){return t?this.xssHelper.htmlEncode(e):this.xssHelper.sanitizeStyleAttribute(this.xssHelper.sanitizeAllButStyling(e))}},{key:"isHostedBrand",value:function(){var e=window._site&&window._site.partnerId||0,t=window._site&&window._site.useHostingApi||!1;return 100<=e||t}},{key:"isPreviewMode",value:function(){try{return window.self!==window.top}catch(e){return!1}}}])&&a(l.prototype,u),c&&a(l,c),f);function f(e,t){var r=this;(function(e){if(!(e instanceof f))throw new TypeError("Cannot call a class as a function")})(this),s(this,"onEditPost",function(e){e=(e.target.closest(".kv-ee-blog-post")||e.target.closest(".kv-ee-blog-post-first")||e.target.closest(".kv-ee-post")||e.target.closest(".kv-ee-post-first")).dataset.id||-1;-1!==e&&r.builderApi.editor.showDashboard(d,{route:"blog/manage/create/".concat(e),fullscreen:!0,showHeader:!1})}),s(this,"onAddPost",function(){r.builderApi.editor.showDashboard(d,{route:"create",fullscreen:!0,showHeader:!1})}),this.builderApi=e,this.config=t,this.blogpostElements=null,this.addPostButtonContainer=null,this.xssHelper=e.xssHelper}window.__features=window.__features||{},window.__features["blog-core"]=p},{}]},{},[1]);;!function r(i,o,a){function s(t,e){if(!o[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=o[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,r,i,o,a)}return o[t].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,n){"use strict";function r(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var i,o,a,s=(i=d,(o=[{key:"bindEvents",value:function(){this.toggleDropdown=this.toggleDropdown.bind(this),this.handleItemClick=this.handleItemClick.bind(this)}},{key:"afterRender",value:function(e,t,i){var o=this;this.dropdownElements=Array.from(t.querySelectorAll(".kv-ee-fe-dropdown-container")),this.setInitialStates(this.dropdownElements),this.dropdownElements.forEach(function(e){var t=e.getAttribute("data-id"),n=e.querySelector(".kv-ee-fe-dropdown-current-value"),r=e.querySelector(".kv-ee-fe-dropdown");o.states.hasOwnProperty(t)&&(e=-1===o.states[t]?0:o.states[t],o.setCurrentValue(t,i,e,n)),n.addEventListener("click",o.toggleDropdown),Array.from(r.querySelectorAll(".kv-ee-fe-dropdown-item")).forEach(function(e){e.addEventListener("click",function(e){return o.handleItemClick(e,n,i)})})})}},{key:"toggleDropdown",value:function(e){e=e.target.closest(".kv-ee-fe-dropdown-container");e.classList.contains("kv-ee-fe-dropdown-active")?e.classList.remove("kv-ee-fe-dropdown-active"):e.classList.add("kv-ee-fe-dropdown-active")}},{key:"handleItemClick",value:function(e,t,n){var r=e.target.closest(".kv-ee-fe-dropdown-container"),i=r.getAttribute("data-id"),e=+e.target.getAttribute("data-id");this.builderApi.events.emit("change",i,n[i][e],e),this.setCurrentValue(i,n,e,t),r.classList.remove("kv-ee-fe-dropdown-active")}},{key:"setInitialStates",value:function(e){var t=this;e.forEach(function(e){e=e.getAttribute("data-id");t.states.hasOwnProperty(e)||(t.states[e]=-1)})}},{key:"setCurrentValue",value:function(e,t,n,r){this.states.hasOwnProperty(e)&&(this.states[e]=n),t.hasOwnProperty(e)&&(n=t[e][n].label,r.innerHTML=n)}},{key:"on",value:function(e,t){this.builderApi.events.on(e,t)}}])&&r(i.prototype,o),a&&r(i,a),d);function d(e,t,n){(function(e){if(!(e instanceof d))throw new TypeError("Cannot call a class as a function")})(this),this.builderApi=e,this.config=t,this.dependencies=n,this.states={},this.bindEvents()}window.__features=window.__features||{},window.__features.dropdown=s},{}]},{},[1]);;!function n(o,a,s){function r(e,t){if(!a[e]){if(!o[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(c)return c(e,!0);throw(i=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",i}i=a[e]={exports:{}},o[e][0].call(i.exports,function(t){return r(o[e][1][t]||t)},i,i.exports,n,o,a,s)}return a[e].exports}for(var c="function"==typeof require&&require,t=0;t<s.length;t++)r(s[t]);return r}({1:[function(t,e,i){"use strict";function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(i="Object"===i&&t.constructor?t.constructor.name:i)||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function a(e,t){var i,n=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)),n}function s(e){for(var i,t=1;t<arguments.length;t++)i=null==arguments[t]?{}:arguments[t],t%2?a(Object(i),!0).forEach(function(t){c(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))});return e}function r(t,e){for(var i,n=0;n<e.length;n++)(i=e[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u,g,h,l=(u=d,h=[{key:"getSiteMapUrl",value:function(t,e){var i=t.url.split("?")[0],e=e("blog-detail/blog-detail");return{sitemap:"".concat(i,"/v1.0/").concat(t.instance_id,"/sitemap?urlplaceholder=http://adiuvat.com.co").concat(window.encodeURIComponent("/".concat(e))),modified:"".concat(i,"/v1.0/").concat(t.instance_id,"/sitemap/last-modified"),exclude_pages_in_sitemap:[e]}}}],(g=[{key:"initialize",value:function(){var e,t,i=this;this.config.isThumbnail||this.config.isOnboarding?(this.hasLoadedItems=!0,this.hasItems=!1,this.rerender()):(this.hasLoadedItems=!1,this.doneLoadingCategories=!1,this.hasItems=!1,this.hasCategories=!1,this.usePagination?(e=this).blogCore.requestAppmarketApp().then(function(t){e.getPostsWithPagination(t)}):("undefined"==typeof Storage||(t=window.localStorage.getItem(this.builderApi.getSiteId()+"/blog-overview"))&&(this.posts=JSON.parse(t),this.hasLoadedItems=!0,this.hasItems=!0,this.usedLocalStorage=!0,this.rerender()),this.blogCore.requestAppmarketApp().then(function(t){i.getPosts(t)})))}},{key:"getPublishedPostCount",value:function(t){var e=this,t=this.getUrl(t,"count");window.fetch(t).then(function(t){return t.json()}).then(function(t){e.count=t.count||9}).catch(function(t){throw new Error(t)})}},{key:"getPostsWithPagination",value:function(t){var e=this;this.hasLoadedItems=!1,this.hasItems=!1,this.isFetchingPosts||(this.isFetchingPosts=!0,t=this.getUrl(t,"posts?status=published"),this.pagination=new this.builderApi.Pagination({url:t,extraQueryParams:null===this.selectedCategory?"":"&category=".concat(this.selectedCategory),offsetKey:"offset",amountKey:"size",totalKey:"total",itemsPerPage:3,itemsPerFetch:9,sortBy:"published_on",cache:!0,callback:this.onPostsReceived}),this.pagination.render(),window.nextBlogFeaturedPage=function(){return e.pagination.next()},window.previousBlogFeaturedPage=function(){return e.pagination.previous()})}},{key:"getAppmarketApp",value:function(){var i=this;return new Promise(function(e,t){i.app&&e(i.app),i.blogCore.requestAppmarketApp().then(function(t){i.app=t,e(t)}).catch(t)})}},{key:"rerender",value:function(){this.view.requestRender()}},{key:"getRenderModel",value:function(){var e=this,t={items:this.posts.map(function(t){return e.blogCore.sanitizePost(t,{size:640})}),error:this.error,first:this.blogCore.sanitizePost(this.posts.slice(0,1)[0],{size:640}),rest:this.posts.slice(1,this.posts.length).map(function(t){return e.blogCore.sanitizePost(t,{size:640})})};if(this.config.isThumbnail)return s(s({},this.data),{},{error:this.error,isThumbnail:this.config.isThumbnail,hasLoadedItems:this.hasLoadedItems,hasItems:this.hasItems,count:this.posts.length,dynamic:this.useDynamicLayout});t.hasLoadedItems=this.hasLoadedItems,t.hasItems=this.hasItems,t.hasLoadedCategories=this.doneLoadingCategories,t.hasCategories=this.hasCategories,t.categories=this.categories.map(function(t){return s(s({},t),{},{label:t.name})}),t.hasSelectedCategory=!!this.selectedCategory;var i=this.getCategoryById(this.selectedCategory);return i&&(t.selectedCategory=i.name),t.usePagination=this.usePagination,this.usePagination&&(t.paginationData={pages:this.pagination?Math.ceil(this.pagination.total/3):0,nextAvailable:!!this.pagination&&this.pagination.currentIndex<this.pagination.maxIndex-1,previousAvailable:!!this.pagination&&0<this.pagination.currentIndex,activeIndex:this.pagination&&this.pagination.currentIndex,showPages:!0}),t}},{key:"getCategoryById",value:function(e){return this.categories.find(function(t){return t.id===e})}},{key:"afterRender",value:function(t,e){var i=this;this.usePagination&&(this.paginationButtons=Array.from(e.querySelectorAll("[data-pagination-id]")),this.paginationButtons.forEach(function(t){t.addEventListener("click",i.onGotoPaginationPage)}),this.paginationPrevious=e.querySelector("[data-pagination-previous]"),this.paginationNext=e.querySelector("[data-pagination-next]"),this.paginationPrevious&&this.paginationPrevious.addEventListener("click",this.onPaginationPrevious),this.paginationNext&&this.paginationNext.addEventListener("click",this.onPaginationNext)),this.config.isRuntimeSite||(this.blogCore.createAddPostButton(e,0<this.posts.length),0<this.posts.length&&this.blogCore.createEditButtons(e)),this.categoryElements=Array.from(e.querySelectorAll(".kv-ee-category-item")),this.categoryElements.forEach(function(t){t.addEventListener("click",function(t){return i.onCategorySelect(t)})})}},{key:"dispose",value:function(){var e=this;this.blogCore.removeEditButtons(),this.blogCore.removeAddPostButton(),this.categoryElements&&this.categoryElements.forEach(function(t){t.removeEventListener("click",function(t){return e.onCategorySelect(t)})}),this.paginationButtons.forEach(function(t){t.removeEventListener("click",e.onGotoPaginationPage)}),this.paginationPrevious&&(this.paginationPrevious.removeEventListener("click",this.onPaginationPrevious),this.paginationNext.removeEventListener("click",this.onPaginationNext))}},{key:"getPosts",value:function(t){var o=this;this.config.isThumbnail||this.usedLocalStorage||(this.hasLoadedItems=!1,this.rerender()),this.isFetchingPosts||(t="".concat(t.base_url,"/v1.0/").concat(t.instance_id,"/blog/posts?status=published"),null!==this.selectedCategory&&(t+="&category=".concat(this.selectedCategory)),this.isFetchingPosts=!0,this.builderApi.fetch(t).then(function(t){return t.json()}).then(function(t){if(o.isFetchingPosts=!1,"Array"!==t.constructor.name)throw o.config.isThumbnail||(o.usedLocalStorage||(o.hasLoadedItems=!0),o.hasItems=!1),new Error("Could not fetch posts.");var e=t.map(function(t){var e=t.featured,i=t.published_on,n=t.created_on,n=e?i:n;return s(s({},t),{},{formattedDate:o.formatDate(n),href:"/"+o.builderApi.getPageUri("blog-detail/blog-detail")+"/"+t.id+"/"+t.slug})});o.error=null;t=o.blogCore.diffFetchedWithCachedPosts(e,o.posts,"modified_on");o.posts=e,0<t.length&&"undefined"!=typeof Storage&&window.localStorage.setItem(o.builderApi.getSiteId()+"/blog-overview",JSON.stringify(o.posts)),o.config.isThumbnail||(o.usedLocalStorage||(o.hasLoadedItems=!0),o.hasItems=0<o.posts.length),o.rerender()}).catch(function(t){o.isFetchingPosts=!1,t&&(o.config.isThumbnail||(o.usedLocalStorage||(o.hasLoadedItems=!0),o.hasItems=!1),o.error=o.builderApi.localize("editorTemplates.features.blogFeatured.couldNotLoadPosts"),o.posts=[],o.rerender())}))}},{key:"onOpenPageType",value:function(){var e=this;this.config.isThumbnail||this.getAppmarketApp().then(function(t){e.usePagination?e.getPostsWithPagination(e.app):e.getPosts(t),e.getCategories(t)})}},{key:"afterCloseDashboard",value:function(){var e=this;this.config.isThumbnail||this.getAppmarketApp().then(function(t){e.usePagination?e.getPostsWithPagination(e.app):e.getPosts(t),e.getCategories(t)})}},{key:"formatDate",value:function(t){t=new Date(t.replace(/ /g,"T"));return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()).toLocaleDateString(window.navigator.language,{year:"numeric",month:"long",day:"numeric"})}}])&&r(u.prototype,g),h&&r(u,h),d);function d(t,e,i){var o=this;(function(t){if(!(t instanceof d))throw new TypeError("Cannot call a class as a function")})(this),c(this,"getUrl",function(t,e){return"".concat(t.base_url,"/v1.0/").concat(t.instance_id,"/blog/").concat(e)}),c(this,"formatPost",function(t){var e=t.featured,i=t.published_on,n=t.created_on,n=e?i:n;return s(s({},t),{},{formattedDate:o.formatDate(n),href:"/"+o.builderApi.getPageUri("blog-detail/blog-detail")+"/"+t.id+"/"+t.slug})}),c(this,"onPostsReceived",function(t){o.isFetchingPosts=!1,o.hasItems=0<t.length,o.hasLoadedItems=!0,o.posts=t.map(o.formatPost),o.pagination.updateCache(o.builderApi.getSiteId()+"/blog-overview-paginated"),o.rerender()}),c(this,"onCategorySelect",function(t,e){o.usePagination&&window.localStorage.setItem(o.builderApi.getSiteId()+"/blog-overview-paginated",JSON.stringify([]));var i=e||+t.target.getAttribute("data-id");-1===i&&null===o.selectedCategory||i===o.selectedCategory||(o.getCategoryById(i).active&&-1!==i?(o.categories=o.categories.map(function(t){return delete t.active,t}),o.selectedCategory=null):(o.selectedCategory=-1===i?null:i,o.categories=o.categories.map(function(t){return t.id===i?s(s({},t),{},{active:!0}):(delete t.active,t)})),o.usePagination?o.getPostsWithPagination(o.app):o.getPosts(o.app))}),c(this,"getCategories",function(t){o.isGettingCategories||(o.isGettingCategories=!0,t="".concat(t.base_url,"/v1.0/").concat(t.instance_id,"/categories"),o.builderApi.fetch(t).then(function(t){return t.json()}).then(function(t){o.doneLoadingCategories=!0,o.hasCategories=0<t.length,o.categories=[{id:-1,name:o.builderApi.localize("editorTemplates.features.blogOverview.all"),active:!0}].concat(n(t)),o.rerender(),o.isGettingCategories=!1}).catch(function(){o.doneLoadingCategories=!0,o.categories=[],o.rerender(),o.isGettingCategories=!1}))}),c(this,"onGotoPaginationPage",function(e){var t=e.target.parentElement;Array.from(t.querySelectorAll("[data-pagination-id]")).forEach(function(t){t===e.target?t.classList.add("kv-ee-pagination-active"):t.classList.remove("kv-ee-pagination-active")}),o.pagination.goto(+e.target.getAttribute("data-pagination-id"))}),c(this,"onPaginationNext",function(){o.pagination.next()}),c(this,"onPaginationPrevious",function(){o.pagination.previous()}),c(this,"openManageBlog",function(){o.blogCore.openDashboard()}),this.blogCore=i["blog-core"],this.builderApi=t,this.config=e,this.urlHelper=t.urlHelper,this.dropdownFeature=i.dropdown,this.dropdownFeature.on("change",function(t,e){o.onCategorySelect(null,e.id)}),this.isFetchingCategories=!1,this.isFetchingPosts=!1,this.view=e.view,this.posts=[],this.categories=[],this.error=null,this.usedLocalStorage=!1,this.selectedCategory=null,this.pagination=null,this.usePagination=!0,this.paginationButtons=[],this.initialize(this.app)}window.__features=window.__features||{},window.__features["blog-overview"]=l},{}]},{},[1]);; window._featureSettings={"legal":{"settings":{}},"translations":{"designer.siteSettings.legal.fields.termsOfService.termsOfServiceText.label":"Terms of Service","designer.siteSettings.legal.fields.privacyPolicy.privacyPolicyText.label":"Privacy Policy","editorTemplates.features.legal.sitemap":"Sitemap","editorTemplates.features.blog.blogManagement":"Blog management","editorTemplates.features.blogOverview.featured":"Featured","editorTemplates.features.blogOverview.readMore":"Read more","editorTemplates.features.blogOverview.postTitle":"Demo blog post","editorTemplates.features.blogOverview.postLeader":"This is a short demo introduction.","editorTemplates.features.blogOverview.postDate":"1 Jan 2019","editorTemplates.features.blogOverview.couldNotLoadPosts":"Could not load blog posts.","editorTemplates.features.blogOverview.all":"All"},"navigation":{"settings":{}},"blog-core":{"settings":{}},"dropdown":{"settings":{"dependingGlobalFeatures":[]}},"blog-overview":{"settings":{"dependingGlobalFeatures":["blog-core","dropdown"]}}};