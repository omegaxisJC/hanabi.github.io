/*! For license information please see 0ee6bda6.7749ab51.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2219],{8173:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),o=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(n),d=r,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(8173),r=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(c,s),"beginner"===c[0]&&c.shift();var o=c.length;function u(e){var t=e.id,n=c.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/o*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:i,text:i+"%"}))}},4732:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return D},default:function(){return Z},frontMatter:function(){return A},metadata:function(){return H},toc:function(){return G}});var i,r,a,l,s,c,o,u,p,g,d,m,h,b,f,v,y,x,w,k,E,q,O,P,N=n(2122),S=n(9756),C=n(7294),j=n(3905),T=n(1961),B=["title","titleId"];function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I=function(e){var t=e.title,n=e.titleId,N=_(e,B);return C.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:250,viewBox:"0 0 944 250",width:944,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,i||(i=C.createElement("defs",null,C.createElement("filter",{x:0,y:0,width:1,height:1,id:"5-save_yml__a"},C.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=C.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),a||(a=C.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=C.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),s||(s=C.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),c||(c=C.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),C.createElement("svg",R({height:100,width:90,x:464,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,o||(o=C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=C.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#5-save_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=C.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),C.createElement("svg",R({height:100,width:70,x:554,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,g||(g=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:632,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,d||(d=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:710,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,m||(m=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:788,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,h||(h=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:866,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,b||(b=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,f||(f=C.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),C.createElement("svg",R({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,v||(v=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,y||(y=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,x||(x=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),C.createElement("svg",R({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,w||(w=C.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),k||(k=C.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),C.createElement("svg",R({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,E||(E=C.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"}))),q||(q=C.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow.svg",y:85})),O||(O=C.createElement("circle",{cx:901,cy:110,r:15,stroke:"#fff",strokeWidth:2})),C.createElement("svg",R({height:16,width:16,x:893,y:102,className:"example","aria-labelledby":n},N),t?C.createElement("title",{id:n},t):null,P||(P=C.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"5"))))},M=["components"],A={id:"5-save",title:"The 5 Save"},D=void 0,H={unversionedId:"beginner/5-save",id:"beginner/5-save",isDocsHomePage:!1,title:"The 5 Save",description:"- In Hanabi, there is only one copy of each 5. So, we need to stop players from discarding them.",source:"@site/docs/beginner/5-save.md",sourceDirName:"beginner",slug:"/beginner/5-save",permalink:"/docs/beginner/5-save",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/5-save.md",version:"current",sidebarPosition:5,frontMatter:{id:"5-save",title:"The 5 Save"},sidebar:"mainSidebar",previous:{title:"Save Clues",permalink:"/docs/beginner/save-clues"},next:{title:"The 5 Save (Question 1)",permalink:"/docs/beginner/5-save-question-1"}},G=[],W={toc:G};function Z(e){var t=e.components,n=(0,S.Z)(e,M);return(0,j.kt)("wrapper",(0,N.Z)({},W,n,{components:t,mdxType:"MDXLayout"}),(0,j.kt)(T.Z,{id:"5-save",mdxType:"BeginnersGuideProgress"}),(0,j.kt)("ul",null,(0,j.kt)("li",{parentName:"ul"},"In Hanabi, there is only one copy of each 5. So, we need to stop players from discarding them."),(0,j.kt)("li",{parentName:"ul"},"We agree that 5's should be saved with ",(0,j.kt)("strong",{parentName:"li"},"a number 5 clue"),". This is called a ",(0,j.kt)("em",{parentName:"li"},"5 Save"),"."),(0,j.kt)("li",{parentName:"ul"},"In the example below:",(0,j.kt)("ul",{parentName:"li"},(0,j.kt)("li",{parentName:"ul"},"Alice clues Bob number 5, which touches a single 5 on slot 5."),(0,j.kt)("li",{parentName:"ul"},"Before this clue, Bob did not have any clued cards in his hand."),(0,j.kt)("li",{parentName:"ul"},"Since the clue was focused on his chop, Bob knows that this must be a ",(0,j.kt)("em",{parentName:"li"},"5 Save")," on the 5. It can be any 5 in the game.")))),(0,j.kt)(I,{mdxType:"FiveSave"}))}Z.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return c}});var i=n(7294),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);