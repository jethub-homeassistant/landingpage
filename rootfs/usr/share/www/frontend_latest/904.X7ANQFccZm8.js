export const id=904;export const ids=[904];export const modules={7114:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CanonicalCodeForDisplayNames=function(e,a){if("language"===e)return(0,r.CanonicalizeLocaleList)([a])[0];if("region"===e){if(t=a,!i.test(t))throw RangeError("invalid region");return a.toUpperCase()}var t;if("script"===e){if(c=a,!o.test(c))throw RangeError("invalid script");return"".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())}var c;if("calendar"===e){if(!function(e){return n.test(e)}(a))throw RangeError("invalid calendar");return a.toLowerCase()}if("dateTimeField"===e){if(!(0,l.IsValidDateTimeFieldCode)(a))throw RangeError("invalid dateTimeField");return a}if((0,r.invariant)("currency"===e,"invalid type"),!(0,r.IsWellFormedCurrencyCode)(a))throw RangeError("invalid currency");return a.toUpperCase()};var r=t(7555),l=t(6622),i=/^([a-z]{2}|[0-9]{3})$/i,o=/^[a-z]{4}$/i,n=/^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i},6622:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.IsValidDateTimeFieldCode=function(e){return t.indexOf(e)>=0};var t=["era","year","quarter","month","weekOfYear","weekday","day","dayPeriod","hour","minute","second","timeZoneName"]},4121:(e,a,t)=>{t(4545),t(1855),t(2130),t(1743),t(2328),t(4959),t(2435),Object.defineProperty(a,"__esModule",{value:!0}),a.DisplayNames=void 0;var r=t(9192),l=t(7555),i=t(7114),o=t(6622),n=t(517),c=function(){function e(a,t){if(void 0===this.constructor)throw TypeError("Constructor Intl.DisplayNames requires 'new'");var r=(0,l.CanonicalizeLocaleList)(a);t=(0,l.GetOptionsObject)(t);var i=Object.create(null),o=e.localeData,c=(0,l.GetOption)(t,"localeMatcher","string",["lookup","best fit"],"best fit");i.localeMatcher=c;var s=(0,n.ResolveLocale)(Array.from(e.availableLocales),r,i,[],e.localeData,e.getDefaultLocale),d=(0,l.GetOption)(t,"style","string",["narrow","short","long"],"long");u(this,"style",d);var p=(0,l.GetOption)(t,"type","string",["language","region","script","currency","calendar","dateTimeField"],void 0);if(void 0===p)throw TypeError('Intl.DisplayNames constructor requires "type" option');u(this,"type",p),u(this,"fallback",(0,l.GetOption)(t,"fallback","string",["code","none"],"code")),u(this,"locale",s.locale);var f=s.dataLocale,v=o[f];(0,l.invariant)(!!v,"Missing locale data for ".concat(f)),u(this,"localeData",v),(0,l.invariant)(void 0!==v,"locale data for ".concat(s.locale," does not exist."));var y=v.types;(0,l.invariant)("object"==typeof y&&null!=y,"invalid types data");var g=y[p];(0,l.invariant)("object"==typeof g&&null!=g,"invalid typeFields data");var b=(0,l.GetOption)(t,"languageDisplay","string",["dialect","standard"],"dialect");if("language"===p){u(this,"languageDisplay",b);var h=y[p][b];(0,l.invariant)("object"==typeof h&&null!=h,"invalid language typeFields data")}var m="language"===p?y[p][b][d]:y[p][d];(0,l.invariant)("object"==typeof m&&null!=m,"invalid styleFields data"),u(this,"fields",m)}return e.supportedLocalesOf=function(a,t){return(0,l.SupportedLocales)(e.availableLocales,(0,l.CanonicalizeLocaleList)(a),t)},e.__addLocaleData=function(){for(var a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];for(var r=0,l=a;r<l.length;r++){var i=l[r],o=i.data,n=i.locale,c=new Intl.Locale(n).minimize().toString();e.localeData[n]=e.localeData[c]=o,e.availableLocales.add(c),e.availableLocales.add(n),e.__defaultLocale||(e.__defaultLocale=c)}},e.prototype.of=function(e){p(this,"of");var a=d(this,"type"),t=(0,l.ToString)(e);if(!function(e,a){switch(e){case"language":return/^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);case"region":return/^([a-z]{2}|\d{3})$/i.test(a);case"script":return/^[a-z]{4}$/i.test(a);case"currency":return(0,l.IsWellFormedCurrencyCode)(a);case"calendar":return/^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);case"dateTimeField":return(0,o.IsValidDateTimeFieldCode)(a)}}(a,t))throw RangeError("invalid code for Intl.DisplayNames.prototype.of");var r,n=(0,l.getMultiInternalSlots)(s,this,"localeData","style","fallback"),c=n.localeData,u=n.style,f=n.fallback,v=(0,i.CanonicalCodeForDisplayNames)(a,t);if("language"===a){r=function(e,a,t,r,l){var i=a.types.language[e],o=i[t][r]||i.long[r];if(void 0!==o)return o;var n=/-([a-z]{2}|\d{3})\b/i.exec(r);if(n){var c=r.substring(0,n.index)+r.substring(n.index+n[0].length),s=n[1],d=i[t][c]||i.long[c];if(void 0===d||!s)return d;var u=a.types.region,p=u[t][s]||u.long[s];if(p||"code"===l)return a.patterns.locale.replace("{0}",d).replace("{1}",p||s)}}(d(this,"languageDisplay"),c,u,v,f)}else{var y=c.types[a];r=y[u][v]||y.long[v]}return void 0!==r?r:"code"===f?t:void 0},e.prototype.resolvedOptions=function(){return p(this,"resolvedOptions"),r.__assign({},(0,l.getMultiInternalSlots)(s,this,"locale","style","type","fallback","languageDisplay"))},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=new Set,e.__defaultLocale="",e.polyfilled=!0,e}();a.DisplayNames=c;try{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c.prototype,Symbol.toStringTag,{value:"Intl.DisplayNames",configurable:!0,enumerable:!1,writable:!1}),Object.defineProperty(c,"length",{value:2,writable:!1,enumerable:!1,configurable:!0})}catch(e){}var s=new WeakMap;function d(e,a){return(0,l.getInternalSlot)(s,e,a)}function u(e,a,t){(0,l.setInternalSlot)(s,e,a,t)}function p(e,a){if(!(e instanceof c))throw TypeError("Method Intl.DisplayNames.prototype.".concat(a," called on incompatible receiver"))}},4904:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0});var r=t(4121);Object.defineProperty(Intl,"DisplayNames",{value:r.DisplayNames,enumerable:!1,writable:!0,configurable:!0})}};
//# sourceMappingURL=904.X7ANQFccZm8.js.map