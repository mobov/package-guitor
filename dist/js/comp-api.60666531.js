(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comp-api"],{"6bc9":function(t,e,i){"use strict";var n=i("e636"),o=i.n(n);o.a},e636:function(t,e,i){},ff7e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("m-view",{staticClass:"comp-api",attrs:{paddingY:"md",paddingX:"sm"}},[t.isBox?i("div",[i("el-divider",{attrs:{"content-position":"left"}},[t._v("盒属性")]),t._l(t.boxConfigData,function(e,n){return i("control-item",{key:"boxConfig"+n,staticClass:"m-mb-sm m-px-sm",attrs:{type:e.type,label:e.label,config:e.config},on:{input:function(i){return t.handleUpdateBoxConfig(e.field,arguments[0])}},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})})],2):t._e(),i("div",[i("el-divider",{attrs:{"content-position":"left"}},[t._v("组件API")]),t.childrenApi?i("control-item",{key:"children",staticClass:"m-mb-sm m-px-sm",attrs:{type:t.childrenApi.type,label:t.childrenApi.label,config:t.childrenApi.config},model:{value:t.childrenData,callback:function(e){t.childrenData=e},expression:"childrenData"}}):t._e(),t._l(t.propsData,function(e,n){return i("control-item",{key:"props"+n,staticClass:"m-mb-sm m-px-sm",attrs:{type:e.type,label:e.label,config:e.config},on:{input:function(i){return t.handleUpdate("props",e.field,arguments[0])}},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})}),t._l(t.attrsData,function(e,n){return i("control-item",{key:"attrs"+n,staticClass:"m-mb-sm m-px-sm",attrs:{type:e.type,label:e.label,config:e.config},on:{input:function(i){return t.handleUpdate("attrs",e.field,arguments[0])}},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})})],2)])},o=[],a=(i("e125"),i("2e73"),i("0c1f"),i("c880"),i("ce72")),r=i("ee40"),c=i("9ce4"),s=i("e94e");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var u=Object(c["a"])("project"),f=u.mapGetters,d=u.mapState,h=u.mapMutations,m={name:"comp-api",components:{ControlItem:r["a"]},data:function(){return{propsData:[],attrsData:[],boxConfigData:[]}},computed:l({},f(["activeNode","activeNodeIsContainer"]),{},d(["activeUid"]),{isBox:function(){return this.compData.uiConfig&&this.compData.uiConfig.isBoxWrap},compData:function(){return this.$store.getters["library/getComponent"](this.activeNode.name)},boxConfigApi:function(){return this.$store.getters["library/getComponent"]("HBox").control.props},propsApi:function(){return this.compData.control.props||{}},attrsApi:function(){return this.compData.control.attrs||{}},childrenApi:function(){return this.compData.control.children||!1},childrenData:{get:function(){return this.activeNode.children||!1},set:function(t){this.activeNode.children=t}},boxConfigApiKeys:function(){return["flex","space"]},propsApiKeys:function(){return Object.keys(this.propsApi)},attrsApiKeys:function(){return Object.keys(this.attrsApi)}}),watch:{activeUid:{immediate:!0,handler:function(){this.init()}}},methods:l({},h(["SET_NODE_DATA","SET_NODE_BOX_CONFIG"]),{init:function(){this.initData("props"),this.initData("attrs"),this.isBox&&this.initBoxConfigData()},initBoxConfigData:function(){var t=this.boxConfigApiKeys,e=this.boxConfigApi,i=this.activeNode.boxConfig,n=[];t.forEach(function(t){var o=Object.assign({field:t,config:{}},Object(s["b"])(e[t]),void 0===i[t]?{}:{value:i[t]});n.push(o)}),this.boxConfigData=n},initData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"props",e=this["".concat(t,"ApiKeys")],i=this["".concat(t,"Api")],n=this.activeNode.nodeData[t],o=[];e.forEach(function(t){var e=Object.assign({field:t,config:{}},Object(s["b"])(i[t]),void 0===n[t]?{}:{value:n[t]});o.push(e)}),this["".concat(t,"Data")]=o},handleUpdate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"props",e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,n=Object(a["a"])({},e,i);this.SET_NODE_DATA(Object(a["a"])({uid:this.activeUid},t,n))},handleUpdateBoxConfig:function(t,e){this.SET_NODE_BOX_CONFIG({uid:this.activeUid,boxConfig:Object(a["a"])({},t,e)})}}),mounted:function(){}},b=m,v=(i("6bc9"),i("2be6")),g=Object(v["a"])(b,n,o,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=comp-api.60666531.js.map