(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{265:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(101).default)("2e107364",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(265)},273:function(t,e,n){var r=n(100)(!1);r.push([t.i,".links{display:flex;justify-content:center;grid-gap:40px;gap:40px;margin-top:30px}.links a{color:#fff}",""]),t.exports=r},280:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(58),n(69),{name:"IndexPage",data:function(){return{players:-1,playersMax:-1,timer:null}},computed:{playersShow:function(){return this.players>-1?this.players:"---"},playersMaxShow:function(){return this.playersMax>-1?this.playersMax:"---"}},mounted:function(){this.fetchPlayers(),this.timer=setInterval(this.fetchPlayers,5e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{fetchPlayers:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://api.info.qplay.cz/public/players/online");case 2:return data=e.sent,e.next=5,t.$axios.$get("https://api.info.qplay.cz/public/players/max");case 5:n=e.sent,data&&(t.players=data),n&&(t.playersMax=n);case 8:case"end":return e.stop()}}),e)})))()}}}),c=(n(272),n(30)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"banner"},[t._v(" ")]),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"wrapper style2"},[n("div",{staticClass:"container"},[n("header",{staticClass:"major"},[n("h2",[t._v("mc.qplay.cz")]),t._v(" "),n("p",[t._v("Online Players: "+t._s(t.playersShow)+"/"+t._s(t.playersMaxShow))])])])]),t._v(" "),n("section",{staticClass:"wrapper style3",attrs:{id:"cta"}},[n("div",{staticClass:"container"},[t._m(1),t._v(" "),n("div",{staticClass:"links"},[n("div",[n("a",{ref:"QPlay.cz",attrs:{href:"https://www.instagram.com/qplaycz/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),n("div",[n("a",{ref:"QPlay.cz",attrs:{href:"https://www.youtube.com/qplaycz",target:"_blank"}},[t._v("Youtube")])]),t._v(" "),n("div",[n("a",{ref:"QPlay.cz",attrs:{href:"https://www.facebook.com/QPlay.cz/",target:"_blank"}},[t._v("Facebook")])])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner",staticStyle:{"background-image":"none",height:"inherit"}},[n("header",{staticClass:"external",staticStyle:{position:"relative"}},[n("a",{staticClass:"button",attrs:{href:"https://info.qplay.cz/",target:"_blank"}},[t._v("\n        Přihlášení do Info Panelu\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h2",[t._v("Chceš se také připojit?")]),t._v(" "),n("a",{staticClass:"button",attrs:{href:"/jak-se-pripojit"}},[t._v("Klikni zde")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper style1"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row 200%"},[n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/coalblock.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("MiniAnnihilation")]),t._v(" "),n("p",[t._v("\n              Natěž si suroviny, ze kterých si vytvoříš své brnění a nástroje.\n              Ovládni střed mapy, abys získal i diamantové věci. Poté znič\n              nexus ostatním týmům.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/ender_pearl.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("SkyWars")]),t._v(" "),n("p",[t._v("\n              Posbírej z truhel na ostrovech ty nejlepší věci pro boj a zabij\n              všechny nepřátele.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/minecraft_golden_apple.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("MiniUHC")]),t._v(" "),n("p",[t._v("\n              Natěž si ve volné přírodě co nejlepší suroviny a zabij všechny\n              nepřátele.\n            ")])])])]),t._v(" "),n("div",{staticClass:"row 200%"},[n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/1vs1.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("1vs1")]),t._v(" "),n("p",[t._v("\n              Myslíš si, že jsi výborný zabiják? Dokaž to! Vyzvi svého\n              kamaráda nebo náhodného hráče na souboj a zab ho.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/bed.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("BedWars")]),t._v(" "),n("p",[t._v("\n              Nasbírej na svém ostrově co nejvíce ingotů (bronze, iron, gold),\n              zakup si věci u vesničana a znič postel ostatním týmům.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/crystals.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("Crystals")]),t._v(" "),n("p",[t._v("\n              Natěž si na svém ostrově suroviny, zakup si u vesničana\n              speciální předměty a připrav se k boji. Jakmile budeš připraven,\n              znič srdce ostatním týmům.\n            ")])])])]),t._v(" "),n("div",{staticClass:"row 200%"},[n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/gold_ingot.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("GoldRush")]),t._v(" "),n("p",[t._v("\n              Nakup si za získané levely věci k boji a získej od pig-zombie\n              pro svůj tým co nejvíce zlatých cihel.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/nether_star.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("MicroBattle")]),t._v(" "),n("p",[t._v("\n              Chop se zbraně se svým spoluhráčem a vyzabíjej na mapě všechny\n              nepřátele.\n            ")])])]),t._v(" "),n("section",{staticClass:"4u 12u(narrower)"},[n("div",{staticClass:"box highlight"},[n("i",{staticClass:"icon major",attrs:{STYLE:"background-image: url(icons/ironsword.png);background-size: contain; background-repeat: no-repeat;"}}),t._v(" "),n("h3",[t._v("Murder Mystery")]),t._v(" "),n("p",[t._v("\n              Sbírej gold ingoty, za které získáš šíp, a následně zabij\n              Murdera. V roli Murdera zabij všechny ostatní hráče.\n            ")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);