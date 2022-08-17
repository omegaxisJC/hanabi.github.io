/*! For license information please see acc807ad.e10b2d1f.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[8235,5767,2601,7016,2368,5685,4307,4992,2701,4951,4273,7617,5876,7408,5977,7803,5232,7612,3732,4061,6085,4494,5974,2366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(7294),r=n(6010),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(3117),r=n(7294),a=n(6010),l=n(2389),s=n(7392),o=n(7094),c=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,g=e.values,h=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),k=w.tabGroupChoices,E=w.setTabGroupChoices,q=(0,r.useState)(x),N=q[0],P=q[1],O=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=k[h];null!=T&&T!==N&&v.some((function(e){return e.value===T}))&&P(T)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),i=v[n].value;i!==N&&(C(t),P(i),null!=h&&E(h,String(i)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,r=O.indexOf(e.currentTarget)+1;n=null!=(i=O[r])?i:O[0];break;case"ArrowLeft":var a,l=O.indexOf(e.currentTarget)-1;n=null!=(a=O[l])?a:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:j,onClick:j},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,i.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-7"]},"convention-attribution"]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(7872),r=n(7294),a=n(5774),l=n(6679),s=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],o=[];!function e(t,n){for(var r,a=(0,i.Z)(n);!(r=a()).done;){var l=r.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(o,s),"beginner"===o[0]&&o.shift();var c=o.length;function u(e){var t=e.id,n=o.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var i=Math.round((n+1)/c*100);return(0,r.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),r.createElement("div",{id:"percent"},r.createElement(a.Ip,{value:i,text:i+"%"}))}},2836:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return Q},contentTitle:function(){return A},default:function(){return L},frontMatter:function(){return V},metadata:function(){return W},toc:function(){return z}});var i,r,a,l,s,o,c,u,p,m,d,g,h,f,b,v,y,x,w,k,E,q,N,P,O,C,T=n(3117),j=n(102),S=n(7294),_=n(3905),R=n(1961),I=n(5488),B=n(5162),Z=["title","titleId"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},H.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=function(e){var t=e.title,n=e.titleId,T=D(e,Z);return S.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,i||(i=S.createElement("defs",null,S.createElement("filter",{x:0,y:0,width:1,height:1,id:"prompt-question-2_yml__a"},S.createElement("feFlood",{floodColor:"#0ff"})))),r||(r=S.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=S.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow2.svg"})),l||(l=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green1.svg"})),s||(s=S.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue2.svg"})),o||(o=S.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),S.createElement("svg",H({height:100,width:90,x:464,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=S.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#prompt-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=S.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),S.createElement("svg",H({height:100,width:70,x:554,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,p||(p=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",H({height:100,width:70,x:632,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,m||(m=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",H({height:100,width:70,x:710,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,d||(d=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",H({height:100,width:70,x:788,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,g||(g=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",H({height:100,width:70,x:866,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,h||(h=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",H({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow4.svg",y:125})),b||(b=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue4.svg",y:125})),v||(v=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/purple1.svg",y:125})),y||(y=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green1.svg",y:125})),x||(x=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple4.svg",y:125})),S.createElement("svg",H({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},T),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),w||(w=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/yellow2.svg",y:250})),k||(k=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red1.svg",y:250})),E||(E=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:247})),q||(q=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow3.svg",y:250})),N||(N=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),P||(P=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue3.svg",y:250})),O||(O=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),C||(C=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple5.svg",y:250})))},G=["components"],V={id:"prompt-question-2",title:"The Prompt (Question 2)"},A=void 0,W={unversionedId:"beginner/prompt-question-2",id:"beginner/prompt-question-2",title:"The Prompt (Question 2)",description:"<Tabs",source:"@site/docs/beginner/prompt-question-2.mdx",sourceDirName:"beginner",slug:"/beginner/prompt-question-2",permalink:"/docs/beginner/prompt-question-2",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/prompt-question-2.mdx",tags:[],version:"current",frontMatter:{id:"prompt-question-2",title:"The Prompt (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Prompt (Question 1)",permalink:"/docs/beginner/prompt-question-1"},next:{title:"The Prompt (Question 3)",permalink:"/docs/beginner/prompt-question-3"}},Q={},z=[],F={toc:z};function L(e){var t=e.components,n=(0,j.Z)(e,G);return(0,_.kt)("wrapper",(0,T.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,_.kt)(R.Z,{id:"prompt-question-2",mdxType:"BeginnersGuideProgress"}),(0,_.kt)(I.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,_.kt)(B.Z,{value:"question",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"Cathy has two unknown 3's in her hand."),(0,_.kt)("li",{parentName:"ul"},"What are the two possible clues that Alice can give?"),(0,_.kt)("li",{parentName:"ul"},"Which one is better and why?"))),(0,_.kt)(B.Z,{value:"solution",mdxType:"TabItem"},(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},"First, Alice can clue yellow to Bob:",(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},"This would be a ",(0,_.kt)("em",{parentName:"li"},"Play Clue")," on the yellow 4, which would ",(0,_.kt)("em",{parentName:"li"},"Prompt")," Cathy."),(0,_.kt)("li",{parentName:"ul"},"Cathy would play her left-most 3 and then stop."))),(0,_.kt)("li",{parentName:"ul"},"Second, Alice can also blue to Bob:",(0,_.kt)("ul",{parentName:"li"},(0,_.kt)("li",{parentName:"ul"},"This would be a ",(0,_.kt)("em",{parentName:"li"},"Play Clue")," on the blue 4, which would ",(0,_.kt)("em",{parentName:"li"},"Prompt")," Cathy."),(0,_.kt)("li",{parentName:"ul"},"Cathy would try to play blue 3 from slot 3. However, it would be yellow 3, which would successfully play."),(0,_.kt)("li",{parentName:"ul"},"Cathy would know that she is promised to have the blue 3, so she would go on to play her other 3 as the blue 3."))),(0,_.kt)("li",{parentName:"ul"},"The second clue is better than the first clue because it gets Cathy to play two cards instead of one.")))),(0,_.kt)(M,{mdxType:"PromptQuestion2"}))}L.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return o}});var i=n(7294),r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function a(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,c=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},c,s({pathRadius:a,dashRatio:r,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-n)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(t?-a:a)+"px"}}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,n),i)-n)/(i-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,l=e.counterClockwise,s=e.styles,o=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:o,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:o,style:s.path}),c?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);