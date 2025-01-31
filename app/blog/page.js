(()=>{var e={};e.id=831,e.ids=[831],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},413:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>h,tree:()=>u});var a=n(292),r=n(1979),i=n(3907),o=n.n(i),s=n(6108),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);n.d(t,l);let u=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,5779)),"C:\\dev\\masfintech\\app\\blog\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4095)),"C:\\dev\\masfintech\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9153,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,6652,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,7885,23)),"next/dist/client/components/unauthorized-error"]}],d=["C:\\dev\\masfintech\\app\\blog\\page.tsx"],c={require:n,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3959:(e,t,n)=>{Promise.resolve().then(n.bind(n,4619)),Promise.resolve().then(n.bind(n,3584)),Promise.resolve().then(n.bind(n,3261))},5631:(e,t,n)=>{Promise.resolve().then(n.bind(n,4991)),Promise.resolve().then(n.bind(n,1636)),Promise.resolve().then(n.bind(n,5370))},4991:(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var a=n(7120),r=n(8991),i=n(9256),o=n(6289),s=n(6316);let l=(0,o.default)(async()=>{},{loadableGenerated:{modules:["app\\ui\\blogs-landing.tsx -> react-lottie"]},ssr:!1}),u={loop:!0,autoplay:!0,animationData:s,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};function d(){let{t:e}=(0,i.B)();return(0,a.jsxs)(r.P.section,{className:"flex flex-col justify-center items-center min-h-[50vh] p-6 bg-[url(/background.png)] bg-cover bg-center relative w-full",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-black opacity-70",children:(0,a.jsx)(l,{options:u,width:"100%",height:"100%",style:{position:"absolute",opacity:"20%"}})}),(0,a.jsx)("div",{className:"relative z-10 text-center ",children:(0,a.jsx)("h1",{className:"text-4xl font-bold mb-4",children:e("blogs.heading","News & Articles")})})]})}},1636:(e,t,n)=>{"use strict";n.d(t,{default:()=>R});var a=n(7120),r=n(5211),i=n.n(r),o=n(6177),s=n(4707),l=n(9256);let u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(e){return (t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}let c={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(e){return(t,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;a=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;a=e.values[r]||e.values[t]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function m(e){return(t,n={})=>{let a;let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;let s=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}(l,e=>e.test(s)):function(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}(l,e=>e.test(s));return a=e.valueCallback?e.valueCallback(u):u,{value:a=n.valueCallback?n.valueCallback(a):a,rest:t.slice(s.length)}}}let f={code:"en-US",formatDistance:(e,t,n)=>{let a;let r=u[e];return(a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),n?.addSuffix)?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:c,formatRelative:(e,t,n,a)=>h[e],localize:{ordinalNumber:(e,t)=>{let n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function(e){return(t,n={})=>{let a=t.match(e.matchPattern);if(!a)return null;let r=a[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(r.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},b={},y=Symbol.for("constructDateFrom");function p(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&y in e?e[y](t):e instanceof Date?new e.constructor(t):new Date(t)}function w(e,t){return p(t||e,e)}function v(e){let t=w(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function x(e,t){let n=w(e,t?.in);return n.setHours(0,0,0,0),n}function k(e,t){let n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??b.weekStartsOn??b.locale?.options?.weekStartsOn??0,a=w(e,t?.in),r=a.getDay();return a.setDate(a.getDate()-((r<n?7:0)+r-n)),a.setHours(0,0,0,0),a}function M(e,t){return k(e,{...t,weekStartsOn:1})}function P(e,t){let n=w(e,t?.in),a=n.getFullYear(),r=p(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);let i=M(r),o=p(n,0);o.setFullYear(a,0,4),o.setHours(0,0,0,0);let s=M(o);return n.getTime()>=i.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}function C(e,t){let n=w(e,t?.in),a=n.getFullYear(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??b.firstWeekContainsDate??b.locale?.options?.firstWeekContainsDate??1,i=p(t?.in||e,0);i.setFullYear(a+1,0,r),i.setHours(0,0,0,0);let o=k(i,t),s=p(t?.in||e,0);s.setFullYear(a,0,r),s.setHours(0,0,0,0);let l=k(s,t);return+n>=+o?a+1:+n>=+l?a:a-1}function T(e,t){let n=Math.abs(e).toString().padStart(t,"0");return(e<0?"-":"")+n}let j={y(e,t){let n=e.getFullYear(),a=n>0?n:1-n;return T("yy"===t?a%100:a,t.length)},M(e,t){let n=e.getMonth();return"M"===t?String(n+1):T(n+1,2)},d:(e,t)=>T(e.getDate(),t.length),a(e,t){let n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>T(e.getHours()%12||12,t.length),H:(e,t)=>T(e.getHours(),t.length),m:(e,t)=>T(e.getMinutes(),t.length),s:(e,t)=>T(e.getSeconds(),t.length),S(e,t){let n=t.length;return T(Math.trunc(e.getMilliseconds()*Math.pow(10,n-3)),t.length)}},S={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},A={G:function(e,t,n){let a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){let t=e.getFullYear();return n.ordinalNumber(t>0?t:1-t,{unit:"year"})}return j.y(e,t)},Y:function(e,t,n,a){let r=C(e,a),i=r>0?r:1-r;return"YY"===t?T(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):T(i,t.length)},R:function(e,t){return T(P(e),t.length)},u:function(e,t){return T(e.getFullYear(),t.length)},Q:function(e,t,n){let a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return T(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){let a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return T(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){let a=e.getMonth();switch(t){case"M":case"MM":return j.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){let a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return T(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){let r=function(e,t){let n=w(e,t?.in);return Math.round((+k(n,t)-+function(e,t){let n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??b.firstWeekContainsDate??b.locale?.options?.firstWeekContainsDate??1,a=C(e,t),r=p(t?.in||e,0);return r.setFullYear(a,0,n),r.setHours(0,0,0,0),k(r,t)}(n,t))/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):T(r,t.length)},I:function(e,t,n){let a=function(e,t){let n=w(e,void 0);return Math.round((+M(n)-+function(e,t){let n=P(e,void 0),a=p(e,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),M(a)}(n))/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):T(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):j.d(e,t)},D:function(e,t,n){let a=function(e,t){let n=w(e,void 0);return function(e,t,n){let[a,r]=function(e,...t){let n=p.bind(null,e||t.find(e=>"object"==typeof e));return t.map(n)}(void 0,e,t),i=x(a),o=x(r);return Math.round((+i-v(i)-(+o-v(o)))/864e5)}(n,function(e,t){let n=w(e,void 0);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,t.length)},E:function(e,t,n){let a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){let r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){let r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return T(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){let a=e.getDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return T(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){let a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){let a;let r=e.getHours();switch(a=12===r?S.noon:0===r?S.midnight:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){let a;let r=e.getHours();switch(a=r>=17?S.evening:r>=12?S.afternoon:r>=4?S.morning:S.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return j.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):j.H(e,t)},K:function(e,t,n){let a=e.getHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):T(a,t.length)},k:function(e,t,n){let a=e.getHours();return(0===a&&(a=24),"ko"===t)?n.ordinalNumber(a,{unit:"hour"}):T(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):j.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):j.s(e,t)},S:function(e,t){return j.S(e,t)},X:function(e,t,n){let a=e.getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return D(a);case"XXXX":case"XX":return B(a);default:return B(a,":")}},x:function(e,t,n){let a=e.getTimezoneOffset();switch(t){case"x":return D(a);case"xxxx":case"xx":return B(a);default:return B(a,":")}},O:function(e,t,n){let a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+B(a,":")}},z:function(e,t,n){let a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+B(a,":")}},t:function(e,t,n){return T(Math.trunc(+e/1e3),t.length)},T:function(e,t,n){return T(+e,t.length)}};function N(e,t=""){let n=e>0?"-":"+",a=Math.abs(e),r=Math.trunc(a/60),i=a%60;return 0===i?n+String(r):n+String(r)+t+T(i,2)}function D(e,t){return e%60==0?(e>0?"-":"+")+T(Math.abs(e)/60,2):B(e,t)}function B(e,t=""){let n=Math.abs(e);return(e>0?"-":"+")+T(Math.trunc(n/60),2)+t+T(n%60,2)}let W=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},E=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},z={p:E,P:(e,t)=>{let n;let a=e.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return W(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",W(r,t)).replace("{{time}}",E(i,t))}},q=/^D+$/,F=/^Y+$/,Y=["D","DD","YY","YYYY"],O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,H=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,L=/^'([^]*?)'?$/,G=/''/g,U=/[a-zA-Z]/;var Q=n(8991),X=n(4912);let _=[{id:1,title:"First Blog Post",summary:"This is the summary of the first blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.",link:"/blog/first-blog-post",category:"Marketing",date:"2023-01-15"},{id:2,title:"Second Blog Post",summary:"This is the summary of the second blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.",link:"/blog/second-blog-post",category:"Marketing",date:"2023-02-20"},{id:3,title:"Third Blog Post",summary:"This is the summary of the third blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.",link:"/blog/third-blog-post",category:"Marketing",date:"2023-03-10"},{id:4,title:"Fourth Blog Post",summary:"This is the summary of the fourth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.",link:"/blog/fourth-blog-post",category:"Digital Marketing",date:"2023-04-05"},{id:5,title:"Fifth Blog Post",summary:"This is the summary of the fifth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.",link:"/blog/fifth-blog-post",category:"Content Marketing",date:"2023-05-25"},{id:6,title:"Sixth Blog Post",summary:"This is the summary of the sixth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/sixth-blog-post",category:"Analytics",date:"2023-06-30"},{id:7,title:"Seventh Blog Post",summary:"This is the summary of the seventh blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.",link:"/blog/seventh-blog-post",category:"Marketing",date:"2023-07-15"},{id:8,title:"Eighth Blog Post",summary:"This is the summary of the eighth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.",link:"/blog/eighth-blog-post",category:"Marketing",date:"2023-08-20"},{id:9,title:"Ninth Blog Post",summary:"This is the summary of the ninth blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.",link:"/blog/ninth-blog-post",category:"Marketing",date:"2023-09-10"},{id:10,title:"Tenth Blog Post",summary:"This is the summary of the tenth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.",link:"/blog/tenth-blog-post",category:"Digital Marketing",date:"2023-10-05"},{id:11,title:"Eleventh Blog Post",summary:"This is the summary of the eleventh blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.",link:"/blog/eleventh-blog-post",category:"Content Marketing",date:"2023-11-25"},{id:12,title:"Twelfth Blog Post",summary:"This is the summary of the twelfth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/twelfth-blog-post",category:"Analytics",date:"2023-12-30"},{id:13,title:"Thirteenth Blog Post",summary:"This is the summary of the thirteenth blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.",link:"/blog/thirteenth-blog-post",category:"Marketing",date:"2023-01-15"},{id:14,title:"Fourteenth Blog Post",summary:"This is the summary of the fourteenth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.",link:"/blog/fourteenth-blog-post",category:"Marketing",date:"2023-02-20"},{id:15,title:"Fifteenth Blog Post",summary:"This is the summary of the fifteenth blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.",link:"/blog/fifteenth-blog-post",category:"Marketing",date:"2023-03-10"},{id:16,title:"Sixteenth Blog Post",summary:"This is the summary of the sixteenth blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.",link:"/blog/sixteenth-blog-post",category:"Digital Marketing",date:"2023-04-05"},{id:17,title:"Seventeenth Blog Post",summary:"This is the summary of the seventeenth blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.",link:"/blog/seventeenth-blog-post",category:"Content Marketing",date:"2023-05-25"},{id:18,title:"Eighteenth Blog Post",summary:"This is the summary of the eighteenth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/eighteenth-blog-post",category:"Analytics",date:"2023-06-30"},{id:19,title:"Nineteenth Blog Post",summary:"This is the summary of the nineteenth blog post. Marketing is essential for business growth. It helps in reaching a wider audience and building brand awareness.",link:"/blog/nineteenth-blog-post",category:"Marketing",date:"2023-07-15"},{id:20,title:"Twentieth Blog Post",summary:"This is the summary of the twentieth blog post. Effective marketing strategies include social media campaigns, email marketing, and content marketing.",link:"/blog/twentieth-blog-post",category:"Marketing",date:"2023-08-20"},{id:21,title:"Twenty-First Blog Post",summary:"This is the summary of the twenty-first blog post. Understanding your target audience is crucial for successful marketing. Tailor your messages to meet their needs and preferences.",link:"/blog/twenty-first-blog-post",category:"Marketing",date:"2023-09-10"},{id:22,title:"Twenty-Second Blog Post",summary:"This is the summary of the twenty-second blog post. Digital marketing has revolutionized the way businesses connect with customers. Utilize SEO, PPC, and social media to enhance your online presence.",link:"/blog/twenty-second-blog-post",category:"Digital Marketing",date:"2023-10-05"},{id:23,title:"Twenty-Third Blog Post",summary:"This is the summary of the twenty-third blog post. Content marketing involves creating valuable content to attract and engage your audience. Blogs, videos, and infographics are effective tools.",link:"/blog/twenty-third-blog-post",category:"Content Marketing",date:"2023-11-25"},{id:24,title:"Twenty-Fourth Blog Post",summary:"This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/twenty-fourth-blog-post",category:"Analytics",date:"2023-12-30"},{id:25,title:"Twenty-Fourth Blog Post",summary:"This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/twenty-fourth-blog-post",category:"Analytics",date:"2023-12-30"},{id:26,title:"Twenty-Fourth Blog Post",summary:"This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/twenty-fourth-blog-post",category:"Analytics",date:"2023-12-30"},{id:27,title:"Twenty-Fourth Blog Post",summary:"This is the summary of the twenty-fourth blog post. Analyzing marketing data helps in understanding the effectiveness of your campaigns. Use analytics tools to measure performance and make informed decisions.",link:"/blog/twenty-fourth-blog-post",category:"Analytics",date:"2023-12-30"}],$=["All","Marketing","Digital Marketing","Content Marketing","Analytics"],I=["All","2023-01","2023-02","2023-03","2023-04","2023-05","2023-06"];function R(){let{t:e}=(0,l.B)(),[t,n]=(0,o.useState)("All"),[r,u]=(0,o.useState)("All"),[d,c]=(0,o.useState)(""),[h,g]=(0,o.useState)(1),m=_.filter(e=>{let n="All"===t||e.category===t,a="All"===r||e.date.startsWith(r),i=e.title.toLowerCase().includes(d.toLowerCase())||e.summary.toLowerCase().includes(d.toLowerCase());return n&&a&&i}),y=Math.ceil(m.length/6),p=m.slice((h-1)*6,6*h),{setIsLoading:v}=(0,X.M)();return(0,a.jsxs)("section",{className:"p-6",children:[(0,a.jsx)("div",{className:"mb-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-[1fr_1fr_5fr] gap-4 w-full",children:[(0,a.jsxs)(Q.P.div,{className:"w-full",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:e("blog.category","Category")}),(0,a.jsx)("select",{value:t,onChange:e=>n(e.target.value),className:"mt-1 block w-full p-2 border rounded bg-[#8A00C1]",children:$.map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]}),(0,a.jsxs)(Q.P.div,{className:"w-full",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:e("blog.date","Date")}),(0,a.jsx)("select",{value:r,onChange:e=>u(e.target.value),className:"mt-1 block w-full p-2 border rounded bg-[#8A00C1]",children:I.map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]}),(0,a.jsxs)(Q.P.div,{className:"relative w-full md:w-fit justify-self-end",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:e("blog.search","Search")}),(0,a.jsx)("input",{type:"text",value:d,onChange:e=>c(e.target.value),className:"mt-1 block w-full p-2 border rounded bg-[#8A00C1] pl-10",placeholder:e("blog.searchPlaceholder","Search by title or summary")}),(0,a.jsx)(s.KSO,{className:"absolute top-[45px] left-3 transform -translate-y-1/2 text-gray-400"})]})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:0===p.length?(0,a.jsx)("div",{className:"text-left text-white",children:e("blog.noPosts","No posts found. Please try a different search.")}):p.map(({id:t,title:n,summary:r,link:o,category:s,date:l})=>(0,a.jsxs)(Q.P.div,{className:"p-4 border rounded shadow-md bg-gradient-to-r from-[#190031] to-[#8A00C1]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:n}),(0,a.jsx)("p",{children:r}),(0,a.jsx)("p",{className:"text-sm text-gray-400",children:s}),(0,a.jsx)("p",{className:"text-sm text-gray-400",children:function(e,t,n){let a=(void 0)??b.locale??f,r=(void 0)??void 0??b.firstWeekContainsDate??b.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??b.weekStartsOn??b.locale?.options?.weekStartsOn??0,o=w(e,n?.in);if(!(o instanceof Date||"object"==typeof o&&"[object Date]"===Object.prototype.toString.call(o))&&"number"!=typeof o||isNaN(+w(o)))throw RangeError("Invalid time value");let s=t.match(H).map(e=>{let t=e[0];return"p"===t||"P"===t?(0,z[t])(e,a.formatLong):e}).join("").match(O).map(e=>{if("''"===e)return{isToken:!1,value:"'"};let t=e[0];if("'"===t)return{isToken:!1,value:function(e){let t=e.match(L);return t?t[1].replace(G,"'"):e}(e)};if(A[t])return{isToken:!0,value:e};if(t.match(U))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});a.localize.preprocessor&&(s=a.localize.preprocessor(o,s));let l={firstWeekContainsDate:r,weekStartsOn:i,locale:a};return s.map(r=>{if(!r.isToken)return r.value;let i=r.value;return(!n?.useAdditionalWeekYearTokens&&F.test(i)||!n?.useAdditionalDayOfYearTokens&&q.test(i))&&function(e,t,n){let a=function(e,t,n){let a="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(a),Y.includes(e))throw RangeError(a)}(i,t,String(e)),(0,A[i[0]])(o,i,a.localize,l)}).join("")}(new Date(l),"yyyy-MM-dd")}),(0,a.jsx)(i(),{onClick:()=>v(!0),href:o,className:"text-yellow-300 hover:underline",children:e("blog.readMore","Read more")})]},t))}),(0,a.jsx)("div",{className:"mt-4 flex justify-center",children:(()=>{if(y<=4)return Array.from({length:y},(e,t)=>(0,a.jsx)("button",{onClick:()=>g(t+1),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${h===t+1?"bg-[#8A00C1] text-white":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,children:t+1},t));let e=[];h>1&&e.push((0,a.jsx)("button",{onClick:()=>g(h-1),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${1===h?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,disabled:1===h,children:"<"},"prev")),e.push((0,a.jsx)("button",{onClick:()=>g(1),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${1===h?"bg-[#8A00C1] text-white":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,children:"1"},1)),h>3&&e.push((0,a.jsx)("span",{className:"mx-1 px-4 py-2",children:"..."},"start-ellipsis"));let t=Math.max(2,h-1),n=Math.min(y-1,h+1);for(let r=t;r<=n;r++)e.push((0,a.jsx)("button",{onClick:()=>g(r),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${h===r?"bg-[#8A00C1] text-white":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,children:r},r));return h<y-2&&e.push((0,a.jsx)("span",{className:"mx-1 px-4 py-2",children:"..."},"end-ellipsis")),e.push((0,a.jsx)("button",{onClick:()=>g(y),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${h===y?"bg-[#8A00C1] text-white":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,children:y},y)),h<y&&e.push((0,a.jsx)("button",{onClick:()=>g(h+1),className:`mx-1 px-4 py-2 border rounded transition-colors duration-200 ${h===y?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-white text-[#8A00C1] hover:bg-[#8A00C1] hover:text-white"}`,disabled:h===y,children:">"},"next")),e})()})]})}},5779:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u,metadata:()=>l});var a=n(532),r=n(3584),i=n(4619),o=n(1229),s=n(3261);let l={title:"Blog"};function u(){return(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,a.jsx)(s.default,{})}),children:(0,a.jsxs)("main",{className:"min-h-screen top-margin mt-[-103px]",children:[(0,a.jsx)(i.default,{}),(0,a.jsx)(r.default,{})]})})}},4619:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});let a=(0,n(9480).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\dev\\\\masfintech\\\\app\\\\ui\\\\blogs-landing.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\dev\\masfintech\\app\\ui\\blogs-landing.tsx","default")},3584:(e,t,n)=>{"use strict";n.d(t,{default:()=>a});let a=(0,n(9480).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\dev\\\\masfintech\\\\app\\\\ui\\\\blogs\\\\blog-posts.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\dev\\masfintech\\app\\ui\\blogs\\blog-posts.tsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),a=t.X(0,[992,801,664],()=>n(413));module.exports=a})();