(function(){"use strict";var e={3107:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"d-flex justify-content-center align-items-center"},[n("font",{attrs:{color:"white",size:"7"}},[e._v("ポケモンえいごクイズ")])],1),n("router-view")],1)},s=[],a={name:"App"},o=a,l=n(1001),u=(0,l.Z)(o,i,s,!1,null,null,null),c=u.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},p=h,d=(0,l.Z)(p,v,f,!1,null,"b9167eee",null),m=d.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quiz container",staticStyle:{"padding-bottom":"30px"}},[n("transition",{attrs:{name:"vshow"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOverlay,expression:"isOverlay"}],staticClass:"fullOverlay"},[n("div",{staticClass:"text"},[e._v(e._s(e.resultText))]),e.isCorrect?n("div",[n("router-link",{staticClass:"replay-btn",attrs:{to:"/"}},[e._v("スタートに戻る")])],1):n("div",[n("div",{staticClass:"replay-btn",on:{click:e.replay}},[e._v("もういちど")]),n("router-link",{staticClass:"replay-btn",staticStyle:{top:"70%"},attrs:{to:"/"}},[e._v("スタートに戻る")])],1)])]),n("div",{staticClass:"panel"},[e.isLoading?n("div",{staticClass:"loading"},[e._v(" loading... ")]):n("div",{staticClass:"row panel-row"},[n("div",{staticClass:"col-md-5 panel-left d-flex flex-column justify-content-around align-items-center"},[n("div",{staticClass:"box2 d-flex justify-content-center align-items-center"},[n("font",{staticStyle:{width:"20rem"},attrs:{calss:"text-wrap",size:"5"}},[e._v(e._s(e.englishName))])],1),n("form",{staticClass:"box2 d-flex justify-content-center align-items-center",on:{submit:[function(e){e.preventDefault()},e.check]}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userAnswer,expression:"userAnswer"}],attrs:{type:"text",maxlength:"10"},domProps:{value:e.userAnswer},on:{input:function(t){t.target.composing||(e.userAnswer=t.target.value)}}})])]),n("div",{staticClass:"col-md-7 panel-right d-flex flex-column justify-content-around align-items-center"},e._l(e.hintDisplay,(function(t,r){return n("div",{key:r,staticClass:"d-flex justify-content-center align-items-center",class:e.isOpened[r]?"hint-opended":"hint-closed",on:{click:function(t){return e.openHint(r)}}},[n("font",{staticStyle:{width:"20rem"},attrs:{color:e.isOpened[r]?"darkslateblue":"white",calss:"text-wrap",size:"5"}},[e._v(e._s(e.hintDisplay[r]))])],1)})),0)])])],1)},_=[],b=n(6198),y=(n(8975),n(6166)),w=n.n(y),x={name:"QuizPanel",data:function(){return{isLoading:!0,englishName:"",japaneseName:"",hintText:["","",""],hintDisplay:["ヒント ①","ヒント ②","ヒント ③"],isOpened:[!1,!1,!1],userAnswer:"",isOverlay:!1,isCorrect:!1,resultText:""}},created:function(){this.initialize()},methods:{initialize:function(){var e=(0,b.Z)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w().get("/api/quiz").then((function(e){var n=e["data"];t.englishName=n["englishName"],t.japaneseName=n["japaneseName"],t.hintText=n["hintText"],console.log(e)})).catch((function(e){console.log("err:",e)}));case 2:this.isLoading=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),openHint:function(e){this.$set(this.isOpened,e,!0),this.$set(this.hintDisplay,e,this.hintText[e])},check:function(){this.japaneseName===this.userAnswer?(this.isCorrect=!0,this.resultText="正解！",this.isOverlay=!0):(this.isCorrect=!1,this.resultText="不正解！",this.isOverlay=!0)},replay:function(){this.isOverlay=!1}}},j=x,k=(0,l.Z)(j,g,_,!1,null,"50ed1f92",null),C=k.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quiz container",staticStyle:{"padding-bottom":"30px"}},[n("div",{staticClass:"panel d-flex justify-content-center align-items-center"},[n("router-link",{staticClass:"start-btn",attrs:{to:"/quiz"}},[e._v("スタート！")])],1)])},T=[],z={name:"StartPanel"},S=z,E=(0,l.Z)(S,O,T,!1,null,"6c6cb6c1",null),N=E.exports,$=n(2809);r["default"].use($.Z);var P=new $.Z({mode:"history",routes:[{path:"/",component:N},{path:"/quiz",component:C},{path:"/hello",component:m}]}),Z=n(150);n(44);r["default"].use(Z.ZPm),r["default"].config.productionTip=!1,new r["default"]({router:P,render:function(e){return e(c)}}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r](s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],s=e[c][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,a=r[0],o=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var c=l(n)}for(t&&t(r);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3107)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.c17390b1.js.map