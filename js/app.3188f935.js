(function(a){function t(t){for(var l,s,c=t[0],n=t[1],m=t[2],_=0,d=[];_<c.length;_++)s=c[_],i[s]&&d.push(i[s][0]),i[s]=0;for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l]);o&&o(t);while(d.length)d.shift()();return r.push.apply(r,m||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],l=!0,c=1;c<e.length;c++){var n=e[c];0!==i[n]&&(l=!1)}l&&(r.splice(t--,1),a=s(s.s=e[0]))}return a}var l={},i={app:0},r=[];function s(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=l,s.d=function(a,t,e){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var l in a)s.d(e,l,function(t){return a[t]}.bind(null,l));return e},s.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var o=n;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var l=e("f07b"),i=e.n(l);i.a},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c");var l=e("a026"),i=e("ce5b"),r=e.n(i);e("bf40");l["default"].use(r.a,{});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("CountCritical")],1)},c=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("div",{staticClass:"hello"},[e("h1",[a._v("崩壞三傷害倍率計算機")]),e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"primary",flat:""}},[e("v-toolbar-title",[a._v("爆擊率計算")]),e("v-spacer")],1),e("v-card-text",[e("v-form",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[e("v-text-field",{key:"critical",attrs:{label:"會心",type:"number",mask:"###"},model:{value:a.critical,callback:function(t){a.critical=a._n(t)},expression:"critical"}})],1),e("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[e("v-text-field",{key:"level",attrs:{label:"等級",type:"number",mask:"##"},model:{value:a.level,callback:function(t){a.level=a._n(t)},expression:"level"}})],1)],1),e("v-spacer"),e("h2",{staticStyle:{"text-align":"right"}},[a._v("爆擊率："+a._s(a.countCriticalRate)+"%")])],1)],1)],1)],1)],1)],1)],1),e("CountDamage")],1)])},m=[],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"damage"},[0==a.Compare?e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[a._v("傷害增益")]),e("v-spacer"),e("v-btn",{attrs:{depressed:"",small:"",round:"",color:"info",dark:""},on:{click:a.Switch}},[a._v("傷害比較")]),e("v-tabs",{attrs:{slot:"extension",color:"primary",grow:""},slot:"extension",model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("v-tabs-slider",{attrs:{color:"yellow"}}),a._l(a.items,function(t){return e("v-tab",{key:t},[a._v("\n                    "+a._s(t)+"\n                  ")])})],2)],1),e("v-tabs-items",{model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("v-tab-item",{key:"tab-1",attrs:{id:"tab-1"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-form",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力",type:"number",mask:"####"},model:{value:a.attack,callback:function(t){a.attack=a._n(t)},expression:"attack"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier,callback:function(t){a.multiplier=a._n(t)},expression:"multiplier"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"物理增傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage,callback:function(t){a.physical_damage=a._n(t)},expression:"physical_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"物理易傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage_yi,callback:function(t){a.physical_damage_yi=a._n(t)},expression:"physical_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害增傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage,callback:function(t){a.all_damage=a._n(t)},expression:"all_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害易傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi,callback:function(t){a.all_damage_yi=a._n(t)},expression:"all_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"爆擊率(%)",type:"number",suffix:"%"},model:{value:a.critical_rate,callback:function(t){a.critical_rate=a._n(t)},expression:"critical_rate"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"爆擊增傷(%)",type:"number",mask:"###",suffix:"%",hint:"此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"},model:{value:a.critical_damage,callback:function(t){a.critical_damage=a._n(t)},expression:"critical_damage"}})],1),e("v-layout",{attrs:{fluid:""}},[e("v-radio-group",{attrs:{row:""},model:{value:a.row,callback:function(t){a.row=t},expression:"row"}},[e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1)],1)],1),e("h2",{staticStyle:{"text-align":"right"}},[a._v("\n                  傷害倍率："+a._s(100*a.physicalDamageMultiplier)+"%")]),"radio-1"==a.row?e("h2",{staticStyle:{"text-align":"right",color:"red"}},[a._v("\n                  平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))]):"radio-2"==a.row?e("h2",{staticStyle:{"text-align":"right"}},[a._v("\n                  平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"right",color:"grey"}},[a._v("\n                  平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))])],1)],1)],1)],1),e("v-tab-item",{key:"tab-2",attrs:{id:"tab-2"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-form",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力",type:"number",mask:"####"},model:{value:a.attack,callback:function(t){a.attack=a._n(t)},expression:"attack"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier,callback:function(t){a.multiplier=a._n(t)},expression:"multiplier"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"元素增傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage,callback:function(t){a.element_damage=a._n(t)},expression:"element_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"元素易傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage_yi,callback:function(t){a.element_damage_yi=a._n(t)},expression:"element_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害增傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage,callback:function(t){a.all_damage=a._n(t)},expression:"all_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害易傷(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi,callback:function(t){a.all_damage_yi=a._n(t)},expression:"all_damage_yi"}})],1),e("v-layout",{attrs:{fluid:""}},[e("v-radio-group",{attrs:{row:""},model:{value:a.row,callback:function(t){a.row=t},expression:"row"}},[e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs4:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1)],1)],1),e("h2",{staticStyle:{"text-align":"right"}},[a._v("\n                        傷害倍率："+a._s(100*a.elementDamageMultiplier)+"%")]),"radio-1"==a.row?e("h2",{staticStyle:{"text-align":"right",color:"red"}},[a._v("\n                        平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))]):"radio-2"==a.row?e("h2",{staticStyle:{"text-align":"right"}},[a._v("\n                        平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"right",color:"grey"}},[a._v("\n                        平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1):e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[a._v("傷害增益比較")]),e("v-spacer"),e("v-btn",{attrs:{depressed:"",small:"",round:"",color:"info",dark:""},on:{click:a.Switch}},[a._v("取消比較")]),e("v-tabs",{attrs:{slot:"extension",color:"primary",grow:""},slot:"extension",model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("v-tabs-slider",{attrs:{color:"yellow"}}),a._l(a.items,function(t){return e("v-tab",{key:t},[a._v("\n                    "+a._s(t)+"\n                  ")])})],2)],1),e("v-tabs-items",{model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("v-tab-item",{key:"tab-1",attrs:{id:"tab-1"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-form",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力#1",type:"number",mask:"####"},model:{value:a.attack,callback:function(t){a.attack=a._n(t)},expression:"attack"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力#2",type:"number",mask:"####"},model:{value:a.attack_c,callback:function(t){a.attack_c=a._n(t)},expression:"attack_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率#1(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier,callback:function(t){a.multiplier=a._n(t)},expression:"multiplier"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率#2(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier_c,callback:function(t){a.multiplier_c=a._n(t)},expression:"multiplier_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"物理增傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage,callback:function(t){a.physical_damage=a._n(t)},expression:"physical_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"物理增傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage_c,callback:function(t){a.physical_damage_c=a._n(t)},expression:"physical_damage_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"物理易傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage_yi,callback:function(t){a.physical_damage_yi=a._n(t)},expression:"physical_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"物理易傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.physical_damage_yi_c,callback:function(t){a.physical_damage_yi_c=a._n(t)},expression:"physical_damage_yi_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害增傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage,callback:function(t){a.all_damage=a._n(t)},expression:"all_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害增傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_c,callback:function(t){a.all_damage_c=a._n(t)},expression:"all_damage_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害易傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi,callback:function(t){a.all_damage_yi=a._n(t)},expression:"all_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害易傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi_c,callback:function(t){a.all_damage_yi_c=a._n(t)},expression:"all_damage_yi_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"爆擊率#1(%)",type:"number",suffix:"%"},model:{value:a.critical_rate,callback:function(t){a.critical_rate=a._n(t)},expression:"critical_rate"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"爆擊率#2(%)",type:"number",suffix:"%"},model:{value:a.critical_rate_c,callback:function(t){a.critical_rate_c=a._n(t)},expression:"critical_rate_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"爆擊增傷#1(%)",type:"number",mask:"###",suffix:"%",hint:"此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"},model:{value:a.critical_damage,callback:function(t){a.critical_damage=a._n(t)},expression:"critical_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"爆擊增傷#2(%)",type:"number",mask:"###",suffix:"%",hint:"此為增加的爆擊傷害, 基礎爆擊傷害為200% (無增傷則填0)"},model:{value:a.critical_damage_c,callback:function(t){a.critical_damage_c=a._n(t)},expression:"critical_damage_c"}})],1),e("v-layout",{attrs:{fluid:""}},[e("v-radio-group",{attrs:{xs6:"",column:""},model:{value:a.row,callback:function(t){a.row=t},expression:"row"}},[e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1),e("v-radio-group",{attrs:{xs6:"",column:""},model:{value:a.row_c,callback:function(t){a.row_c=t},expression:"row_c"}},[e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1)],1)],1),e("v-layout",[e("v-flex",{attrs:{xs6:""}},[e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                    傷害倍率："+a._s(100*a.physicalDamageMultiplier)+"%")]),"radio-1"==a.row?e("h2",{staticStyle:{"text-align":"left",color:"red"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))]):"radio-2"==a.row?e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"left",color:"grey"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.physicalDamageMultiplier).toFixed(2)))])]),e("v-flex",{attrs:{xs6:""}},[e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                    傷害倍率："+a._s(100*a.physicalDamageMultiplier_c)+"%")]),"radio-1"==a.row_c?e("h2",{staticStyle:{"text-align":"left",color:"red"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.physicalDamageMultiplier_c).toFixed(2)))]):"radio-2"==a.row_c?e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.physicalDamageMultiplier_c).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"left",color:"grey"}},[a._v("\n                      平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.physicalDamageMultiplier_c).toFixed(2)))])])],1)],1)],1)],1)],1),e("v-tab-item",{key:"tab-2",attrs:{id:"tab-2"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-form",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力#1",type:"number",mask:"####"},model:{value:a.attack,callback:function(t){a.attack=a._n(t)},expression:"attack"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"attack",attrs:{label:"攻擊力#2",type:"number",mask:"####"},model:{value:a.attack_c,callback:function(t){a.attack_c=a._n(t)},expression:"attack_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率#1(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier,callback:function(t){a.multiplier=a._n(t)},expression:"multiplier"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{key:"mult",attrs:{label:"技能倍率#2(%)",type:"number",mask:"####",suffix:"%"},model:{value:a.multiplier_c,callback:function(t){a.multiplier_c=a._n(t)},expression:"multiplier_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"元素增傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage,callback:function(t){a.element_damage=a._n(t)},expression:"element_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"元素增傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage_c,callback:function(t){a.element_damage_c=a._n(t)},expression:"element_damage_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"元素易傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage_yi,callback:function(t){a.element_damage_yi=a._n(t)},expression:"element_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"元素易傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.element_damage_yi_c,callback:function(t){a.element_damage_yi_c=a._n(t)},expression:"element_damage_yi_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害增傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage,callback:function(t){a.all_damage=a._n(t)},expression:"all_damage"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害增傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_c,callback:function(t){a.all_damage_c=a._n(t)},expression:"all_damage_c"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[e("v-text-field",{attrs:{label:"全傷害易傷#1(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi,callback:function(t){a.all_damage_yi=a._n(t)},expression:"all_damage_yi"}})],1),e("v-flex",{attrs:{xs5:"",sm5:"",md5:"","offset-xs1":""}},[e("v-text-field",{attrs:{label:"全傷害易傷#2(%)",type:"number",mask:"###",suffix:"%"},model:{value:a.all_damage_yi_c,callback:function(t){a.all_damage_yi_c=a._n(t)},expression:"all_damage_yi_c"}})],1),e("v-layout",{attrs:{fluid:""}},[e("v-radio-group",{attrs:{xs6:"",column:""},model:{value:a.row,callback:function(t){a.row=t},expression:"row"}},[e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1),e("v-radio-group",{attrs:{xs6:"",column:""},model:{value:a.row_c,callback:function(t){a.row_c=t},expression:"row_c"}},[e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"克制",value:"radio-1",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"無克制",value:"radio-2",color:"primary"}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-radio",{attrs:{label:"被克制",value:"radio-3",color:"primary"}})],1)],1)],1)],1),e("v-layout",[e("v-flex",{attrs:{xs6:""}},[e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                          傷害倍率："+a._s(100*a.elementDamageMultiplier)+"%")]),"radio-1"==a.row?e("h2",{staticStyle:{"text-align":"left",color:"red"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))]):"radio-2"==a.row?e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"left",color:"grey"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier*(a.attack*(a.multiplier/100)*a.elementDamageMultiplier).toFixed(2)))])]),e("v-flex",{attrs:{xs6:""}},[e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                          傷害倍率："+a._s(100*a.elementDamageMultiplier_c)+"%")]),"radio-1"==a.row_c?e("h2",{staticStyle:{"text-align":"left",color:"red"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.elementDamageMultiplier_c).toFixed(2)))]):"radio-2"==a.row_c?e("h2",{staticStyle:{"text-align":"left"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.elementDamageMultiplier_c).toFixed(2)))]):e("h2",{staticStyle:{"text-align":"left",color:"grey"}},[a._v("\n                            平均傷害："+a._s(a.final_multipier_c*(a.attack_c*(a.multiplier_c/100)*a.elementDamageMultiplier_c).toFixed(2)))])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},_=[],d={data:function(){return{attack:1e3,multiplier:100,physical_damage:0,physical_damage_yi:0,element_damage:0,element_damage_yi:0,all_damage:0,all_damage_yi:0,critical_rate:0,critical_damage:0,attack_c:1e3,multiplier_c:100,physical_damage_c:0,physical_damage_yi_c:0,element_damage_c:0,element_damage_yi_c:0,all_damage_c:0,all_damage_yi_c:0,critical_rate_c:0,critical_damage_c:0,tab:null,row:"radio-2",row_c:"radio-2",items:["物理傷害","元素傷害"],Compare:!1}},computed:{physicalDamageMultiplier:function(){return((1+this.physical_damage/100)*(1+this.physical_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)*(this.critical_rate/100)*(2+this.critical_damage/100)+(1+this.physical_damage/100)*(1+this.physical_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)*(1-this.critical_rate/100)).toFixed(2)},elementDamageMultiplier:function(){return((1+this.element_damage/100)*(1+this.element_damage_yi/100)*(1+this.all_damage/100)*(1+this.all_damage_yi/100)).toFixed(4)},physicalDamageMultiplier_c:function(){return((1+this.physical_damage_c/100)*(1+this.physical_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)*(this.critical_rate_c/100)*(2+this.critical_damage_c/100)+(1+this.physical_damage_c/100)*(1+this.physical_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)*(1-this.critical_rate_c/100)).toFixed(2)},elementDamageMultiplier_c:function(){return((1+this.element_damage_c/100)*(1+this.element_damage_yi_c/100)*(1+this.all_damage_c/100)*(1+this.all_damage_yi_c/100)).toFixed(4)},final_multipier:function(){var a=1;return a="radio-1"==this.row?1.3:"radio-3"==this.row?.7:1,a},final_multipier_c:function(){var a=1;return a="radio-1"==this.row_c?1.3:"radio-3"==this.row_c?.7:1,a}},methods:{Switch:function(){this.attack_c=this.attack,this.multiplier_c=this.multiplier,this.physical_damage_c=this.physical_damage,this.physical_damage_yi_c=this.physical_damage_yi,this.element_damage_c=this.element_damage,this.element_damage_yi_c=this.element_damage_yi,this.all_damage_c=this.all_damage,this.all_damage_yi_c=this.all_damage_yi,this.critical_rate_c=this.critical_rate,this.critical_damage_c=this.critical_damage,this.Compare=!this.Compare}},components:{}},u=d,f=(e("5edd"),e("0c7c")),x=Object(f["a"])(u,o,_,!1,null,"6e900742",null),v=x.exports,p={data:function(){return{critical:100,level:80}},computed:{countCriticalRate:function(){return 100*(this.critical/(75+5*this.level)).toFixed(4)}},components:{CountDamage:v}},y=p,g=(e("cee1"),Object(f["a"])(y,n,m,!1,null,"1fc59b67",null)),b=g.exports,h={name:"app",components:{CountCritical:b}},k=h,w=(e("034f"),Object(f["a"])(k,s,c,!1,null,null,null)),S=w.exports;l["default"].config.productionTip=!1,l["default"].use(r.a,{}),new l["default"]({render:function(a){return a(S)}}).$mount("#app")},"5edd":function(a,t,e){"use strict";var l=e("9e1f"),i=e.n(l);i.a},"9e1f":function(a,t,e){},b2e1:function(a,t,e){},cee1:function(a,t,e){"use strict";var l=e("b2e1"),i=e.n(l);i.a},f07b:function(a,t,e){}});
//# sourceMappingURL=app.3188f935.js.map