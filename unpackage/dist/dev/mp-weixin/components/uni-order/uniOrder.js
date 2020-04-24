(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-order/uniOrder"],{

/***/ 63:
/*!****************************************************************!*\
  !*** D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniOrder.vue?vue&type=template&id=38ea8c6c&scoped=true& */ 64);
/* harmony import */ var _uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniOrder.vue?vue&type=script&lang=js& */ 66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniOrder.vue?vue&type=style&index=0&id=38ea8c6c&lang=scss&scoped=true& */ 72);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38ea8c6c",
  null,
  false,
  _uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni-app项目/wxProject/components/uni-order/uniOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/*!***********************************************************************************************************!*\
  !*** D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=template&id=38ea8c6c&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uniOrder.vue?vue&type=template&id=38ea8c6c&scoped=true& */ 65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_template_id_38ea8c6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 65:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=template&id=38ea8c6c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l2 = _vm.__map(_vm.newsList, function(tab, index1) {
    var l1 = _vm.__map(_vm.dailyList, function(it, index) {
      var f0 = _vm._f("priceFormat")(it.BILL_LEFTMONEY, 2, "￥", true)

      var l0 = _vm.__map(it.child, function(item, index) {
        var f1 = _vm._f("priceFormat")(item.BILLDETAIL_PRICE, 2, "￥", true)

        var f2 = _vm._f("priceFormat")(
          item.BILLDETAIL_TOTALMONEY,
          2,
          "￥",
          true
        )

        return {
          $orig: _vm.__get_orig(item),
          f1: f1,
          f2: f2
        }
      })

      return {
        $orig: _vm.__get_orig(it),
        f0: f0,
        l0: l0
      }
    })

    return {
      $orig: _vm.__get_orig(tab),
      l1: l1
    }
  })

  var f3 = _vm._f("priceFormat")(_vm.sales, 2, "￥", true)

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l2: l2,
        f3: f3
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 66:
/*!*****************************************************************************************!*\
  !*** D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uniOrder.vue?vue&type=script&lang=js& */ 67);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 24));
























































































var _loginPublic = _interopRequireDefault(__webpack_require__(/*! @/common/js/loginPublic.js */ 126));
var _md = _interopRequireDefault(__webpack_require__(/*! @/common/js/md5.js */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default2 =
{
  components: {},

  props: {
    scrollHeight: {
      type: [Number, String],
      default: function _default() {
        return 0;
      } },

    orderQuerry: { //从订单页面进入收款页面传入订单号和客户名
      type: Object,
      default: function _default() {
        return { key: false };
      } },

    maskTop: { //收款页面弹窗弹出高度
      type: String,
      default: function _default() {
        return '';
      } },

    fparams: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      tabBars: [//顶部滑动切换标题
      { id: 0, name: '全部', isTrue: true },
      { id: 1, name: '已结清', isTrue: false },
      { id: 2, name: '未结清', isTrue: false }],

      dailyList: [], //页面订单显示数组
      tabIndex: 0, //swiper下标
      orderList: { allData: [], clear: [], notClear: [] }, //订单页面需要三个数组存储数据全部、未结清、已结清防止已有数据再次请求
      newsList: [], //swiper分多少个页面页占位数组
      pageLarge: { nowIndexA: 0, nowIndexB: 0, nowIndexC: 0 }, //现在处于页数
      pageMaxSize: { pageA: -1, pageB: -1, pageC: -1 }, //最大页数
      nowInfo: { nowIndex: 0, maxSize: -1 }, //传入接口页面参数
      allCheck: false, //全选
      orderNums: 0, //订单数
      zMask: false, //查询时的遮罩层
      prepay_id: '',
      pageSettlement: 0, //0收款(数据不变) 1对账 2扫码
      chooseAll: false, //全选
      chooseAllIsShow: false,
      temporaryData: { order_id: '', order_code: "" }, //收款单临时数据
      isPay: false //是否完成支付
    };
  },
  methods: {
    choose: function choose() {var _this = this; //全选
      this.chooseAll = !this.chooseAll;
      this.dailyList.forEach(function (i) {
        i.isTrue = _this.chooseAll;
      });
    },
    displayMore: function displayMore(orderId) {var _this2 = this; //展开更多
      this.dailyList.some(function (i, j) {
        if (i.BILL_ID == orderId) {
          i.isShow = !i.isShow;
          _this2.$set(_this2.dailyList, j, i);
          return true;
        }
      });
    },
    refresh: function refresh() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                _this3.nowInfo.maxSize >= _this3.nowInfo.nowIndex || _this3.nowInfo.maxSize == -1)) {_context.next = 8;break;}
                _this3.addPageInfo();_context.next = 4;return (
                  _this3.wrquest(_this3.params));case 4:data = _context.sent;
                _this3.setDisplayData(data);_context.next = 10;break;case 8:

                uni.showToast({ title: '到底了', icon: 'none' });return _context.abrupt("return");case 10:case "end":return _context.stop();}}}, _callee);}))();


    },
    changeCheckStatu: function changeCheckStatu(id) {
      this.dailyList = this.dailyList.map(function (i) {
        if (i.BILL_CODE == id) {
          i.isTrue = !i.isTrue;
        }
        return i;
      });
    },
    setDisplayData: function setDisplayData(data) {
      var arr3 = this.contactDoubleArr(data);
      this.dailyList = arr3;
      switch (this.tabIndex) {
        case 0: //全部
          this.orderList.allData = arr3;
          break;
        case 1: //未结清
          this.orderList.clear = arr3;
          break;
        case 2: // 已结清
          this.orderList.notClear = arr3;
          break;
        default:
          break;}

    },
    addPageInfo: function addPageInfo() {// 当前页数+1
      switch (this.tabIndex) {
        case 0: //全部
          this.nowInfo.nowIndex = this.pageLarge.nowIndexA = this.pageLarge.nowIndexA + 1;
          this.nowInfo.maxSize = this.pageMaxSize.pageA;
          break;
        case 1: //未结清
          this.nowInfo.nowIndex = this.pageLarge.nowIndexB = this.pageLarge.nowIndexB + 1;
          this.nowInfo.maxSize = this.pageMaxSize.pageB;
          break;
        case 2: // 已结清
          this.nowInfo.nowIndex = this.pageLarge.nowIndexC = this.pageLarge.nowIndexC + 1;
          this.nowInfo.maxSize = this.pageMaxSize.pageC;
          break;
        default:
          break;}

    },
    setPageInfo: function setPageInfo() {//赋值切换当前页数和最大页数
      switch (this.tabIndex) {
        case 0: //全部
          this.nowInfo.nowIndex = this.pageLarge.nowIndexA;
          this.nowInfo.maxSize = this.pageMaxSize.pageA;
          break;
        case 1: //未结清
          this.nowInfo.nowIndex = this.pageLarge.nowIndexB;
          this.nowInfo.maxSize = this.pageMaxSize.pageB;
          break;
        case 2: // 已结清
          this.nowInfo.nowIndex = this.pageLarge.nowIndexC;
          this.nowInfo.maxSize = this.pageMaxSize.pageC;
          break;
        default:
          break;}

    },
    setMaxPage: function setMaxPage(max) {//设置最大页
      switch (this.tabIndex) {
        case 0: //全部
          this.nowInfo.maxSize = this.pageMaxSize.pageA = parseInt(max / 8);
          break;
        case 1: //未结清
          this.nowInfo.maxSize = this.pageMaxSize.pageB = parseInt(max / 8);
          break;
        case 2: // 已结清
          this.nowInfo.maxSize = this.pageMaxSize.pageC = parseInt(max / 8);
          break;
        default:
          break;}

    },
    someInit: function someInit() {//初始化条件与数据
      this.pageLarge = { nowIndexA: 0, nowIndexB: 0, nowIndexC: 0 }; //现在处于页数
      this.pageMaxSize = { pageA: -1, pageB: -1, pageC: -1 }; //最大页数
      this.nowInfo = { nowIndex: 0, maxSize: 0 }; //传入接口页面参数
      if (this.pageSettlement == 0) this.params.Status = '2'; //收款页面只展示未结清单子
      for (var key in this.params) {//遍历重置筛选条件
        this.params[key] = this.fparams[key];
      }
      this.changeType(0); //重置swiper位置
      this.tabIndex = 0; //重置swiper位置
      this.dailyList = [];
      this.orderList.allData = this.orderList.clear = this.orderList.notClear = []; //重置各个数组
    },
    changeType: function changeType(id) {//更换订单类别
      if (this.tabIndex == 2) {
        this.$emit('changeScrollHeight', { type: true, height: 70 });
      } else {
        this.$emit('changeScrollHeight', { type: false, height: 70 });
        this.chooseAll = false; //全选按钮恢复默认
      }
      this.tabBars.forEach(function (i) {
        i.isTrue = false;
        if (i.id == id) {
          i.isTrue = true;
        }
      });
    },
    ontabtap: function ontabtap(e) {//点击切换类别
      var index = parseInt(e.target.dataset.current || e.currentTarget.dataset.current);
      this.tabIndex = index;
    },
    ontabchange: function ontabchange(e) {//滑动切换类别
      var index = parseInt(e.target.current || e.detail.current);
      this.tabIndex = index;
      this.params.Status = index;
      this.setPageInfo();
      this.changeType(index);
      this.setOrderList(index, this.params);
    },
    changeScreen: function changeScreen(data) {//改变筛选条件 父组件调用
      var data1 = data.data1;
      var data2 = data.data2;
      this.someInit();
      if (data1.length != 0) this.packageData1(data1);
      if (data2.length != 0) this.packageData2(data2);
      this.queryData();
    },
    packageData1: function packageData1(data) {var _this4 = this; //顶部筛选数据
      data.forEach(function (i) {
        if (i.id == 102) {
          _this4.params.BEGINDATE = i.times.statrTime;
          var addOne = i.times.endTime;
          var arr = [];
          arr = addOne.split('-');
          arr[2] = parseInt(arr[2]) + 1;
          _this4.params.ENDDATE = arr.join('-');
        }
      });
    },
    wrquest: function wrquest() {var _this5 = this;var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params; //接口调用
      //this.params.PAGE_INDEX = this.nowInfo.nowIndex;
      uni.showLoading({ title: '加载中...' });
      return new Promise(function (resolv, reject) {
        uni.request({
          //url: this.url + '/public/query',
          //url: 'http://192.168.199.145:7798' + '/public/query',
          url: _this5.url + '/transit_server',
          //method: 'GET',
          method: 'POST',
          data: {
            interface_add: 'http://122.114.123.189:7798/public/query',
            token: _this5.token,
            //params: params,
            params: JSON.stringify(params) },

          success: function success(res) {
            if (res.data.status == 0) {
              _this5.setMaxPage(res.data.total);
              resolv(res.data.data);
            } else {
              reject(uni.showToast({ title: '异常', icon: 'none' }));
            }
          },
          fail: function fail(res) {
            uni.showToast({ title: '网络异常', icon: 'none' });
          },
          complete: function complete(res) {
            uni.hideLoading();
          } });

      });
    },
    queryData: function queryData() {var _arguments = arguments,_this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var params, data;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:params = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : _this6.params;_context2.next = 3;return (
                  _this6.wrquest(params));case 3:data = _context2.sent;
                _this6.dailyList = _this6.createDoubleArr(data);
                _this6.orderList.allData = _this6.dailyList;
                _this6.appendCheckBox();case 7:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    contactDoubleArr: function contactDoubleArr(arr) {//已有分组的情况下 下拉刷新出来的新数据处理
      var arr1 = this.createDoubleArr(arr); //新增的二维数组
      var num1 = 0,num2 = 0,num3 = 0;
      arr1.forEach(function (i) {
        num1 += i.child.length;
      });
      var arr2 = this.dailyList; //原来的二维数组
      arr2.forEach(function (i) {
        num2 += i.child.length;
      });
      arr1.forEach(function (i, j) {
        var flag = arr2.some(function (k, l) {
          if (i.BILL_ID == k.BILL_ID) {//新增数据在原有数组中存在
            k.child = k.child.concat(i.child);
            return true;
          }
        });
        if (!flag) {
          arr2.push(i);
        }
      });
      arr2.forEach(function (i) {
        num3 += i.child.length;
      });
      return arr2;
    },
    createDoubleArr: function createDoubleArr(arr) {
      var arr1 = [];
      arr.filter(function (i) {
        var obj = {};
        obj['BILL_CODE'] = i.BILL_CODE;
        obj['BILL_DATE_STR'] = i.BILL_DATE_STR;
        obj['BILL_ID'] = i.BILL_ID;
        obj['BILL_LEFTMONEY'] = i.BILL_LEFTMONEY;
        obj['child'] = [];
        arr1.push(obj);
      });
      arr1 = arr1.filter(function (i, j, self) {
        return self.findIndex(function (el) {return el.BILL_CODE == i.BILL_CODE;}) === j;
      });
      arr1.forEach(function (i, j) {
        arr.forEach(function (k, l) {
          var flag = false;
          var obj = {};
          if (i.BILL_ID == k.BILL_ID) {
            flag = true;
            obj['BILLDETAIL_GOODSNAME'] = k.BILLDETAIL_GOODSNAME;
            obj['BILLDETAIL_TOTALMONEY'] = k.BILLDETAIL_TOTALMONEY;
            obj['BILLDETAIL_W'] = k.BILLDETAIL_W;
            obj['BILLDETAIL_PRICE'] = k.BILLDETAIL_PRICE;
            obj['BILLDETAIL_H'] = k.BILLDETAIL_H;
            obj['BILLDETAIL_TOTALQTY'] = k.BILLDETAIL_TOTALQTY;
          }
          if (flag) i.child.push(obj);
        });
      });
      return arr1;
    },
    returnAppendCheckBox: function returnAppendCheckBox(arr) {//分页的时候添加可控属性
      arr.forEach(function (i, j) {
        i.isTrue = false;
        i.isShow = false;
      });
      return arr;
    },
    appendCheckBox: function appendCheckBox() {var _this7 = this; //添加可控筛选属性
      if (this.dailyList.length == 0) return;
      this.dailyList.forEach(function (i, j) {
        _this7.$set(_this7.dailyList[j], 'isTrue', false);
        _this7.$set(_this7.dailyList[j], 'isShow', false);
      });
    },
    pullRefresh: function pullRefresh() {
      this.params.PAGE_INDEX = 0;
      this.queryData();
    },
    jqueyForCustomer: function jqueyForCustomer(obj) {var _this8 = this;
      this.pageSettlement = 1;
      [1, 2, 3].forEach(function (i) {
        _this8.newsList.push(i);
      });
      this.chooseAllIsShow = true;
      this.nowInfo.nowIndex = 0;
      this.queryData();
    },
    // 付款逻辑开始
    package: function _package() {//组装数据
      var data = [];
      this.dailyList.forEach(function (i) {
        if (i.isTrue) {
          i.child.forEach(function (k, j) {
            var obj = {};
            obj.id = 0;
            obj.LpTotal = '0'; //后期工艺价格
            obj.total = k.BILLDETAIL_TOTALMONEY;
            obj.giveupmoney = '0';
            obj.refbillid = i.BILL_ID;
            data.push(obj);
          });
        }
      });
      var params = {
        MODE: 1,
        order: {
          id: 0,
          type: 2,
          Date: this.wpublic.getDay(0),
          partnerid: 1757112, //this.partnerid,//客户ID
          paymenttypeid: 258, //支付方式
          paymoney: this.sales,
          total: this.sales,
          remark: '微信小程序临时收款' },

        'OrderDetail': data };

      return params;
    },
    payStatus: function payStatus() {
      var flag = false;
      flag = this.dailyList.some(function (i) {
        if (i.isTrue) return true;
      });
      return flag;
    },
    complete: function complete(params) {var _this9 = this; //收成临时收款单
      return new Promise(function (resolve, reject) {
        uni.request({
          url: _this9.url + '/transit_server',
          //url: 'http://192.168.199.145:7798' + '/public/common',
          //method: 'GET',
          method: 'POST',
          data: {
            interface_add: 'http://122.114.123.189:7798/public/common',
            //token: '6DC6E3E243773B841717190112723222',
            token: _this9.token,
            params: JSON.stringify(params)
            //params:params,
          },
          success: function success(res) {
            var result = _loginPublic.default.loginJudge(res.data.status);
            if (result == false) {
              return false;
            }
            if (res.data.status == 0) {
              resolve(res.data);
            } else {
              reject(uni.showToast({ title: '订单修改失败' + res.data.message, icon: 'none' }));
            }
          },
          fail: function fail(res) {
            reject(uni.showToast({ title: '网络繁忙,稍后重试' + res.message, icon: 'none' }));

          } });

      });
    },
    pay: function pay() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var params, data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (
                _this10.payStatus()) {_context3.next = 3;break;}
                uni.showToast({ title: "请选择单子", icon: 'none' });return _context3.abrupt("return");case 3:if (!(


                _this10.partnerid != '')) {_context3.next = 11;break;}
                params = _this10.package();_context3.next = 7;return (
                  _this10.complete(params).catch(function () {return 'wrong';}));case 7:data = _context3.sent;
                if (data != 'wrong') {
                  if (data.status == 0) {
                    _this10.temporaryData.order_id = data.order_id;
                    _this10.temporaryData.order_code = data.order_code.replace(/-/g, '');
                    _this10.taskPay(_this10.temporaryData.order_code);
                  } else {
                    uni.showToast({ title: data.message, icon: 'none' });
                  }
                } else {
                  uni.showToast({ title: '异常', icon: 'none' });
                }_context3.next = 12;break;case 11:

                uni.showToast({ title: '客户ID获取异常', icon: 'none' });case 12:case "end":return _context3.stop();}}}, _callee3);}))();

    },
    deleteOrder: function deleteOrder(params) {var _this11 = this; //删除订单 登账
      uni.showLoading({ title: '加载中...' });
      uni.request({
        //url: this.url + '/public/common',
        url: this.url + '/transit_server',
        method: 'POST',
        //method: 'GET',
        data: {
          interface_add: 'http://122.114.123.189:7798/public/common',
          token: this.token,
          params: JSON.stringify(params) },

        success: function success(res) {
          var result = _loginPublic.default.loginJudge(res.data.status);
          if (result == false) {
            uni.showToast({ title: '验证码过期请重新登录', icon: 'none' });
            return false;
          }
          if (res.data.status == 0 && res.data.FailureCount == 0) {//登账接口返回成功
            if (params.type == 1) {
              uni.showToast({ title: '登账成功', icon: 'success' });
              setTimeout(function () {
                _this11.pullRefresh();
              }, 500);
            } else if (params.type == -1) {
              if (_this11.isPay) {
                _this11.isPay = false;
                _this11.taskBackMoney(_this11.temporaryData.order_code);
              }
              uni.showToast({ title: '删除临时账单成功', icon: 'success' });
            }
          } else {
            if (_this11.isPay) {
              _this11.isPay = false;
              _this11.taskBackMoney(_this11.temporaryData.order_code);
            }
            try {
              uni.showToast({
                title: res.data.FailureIdList[0].ERROR });

            } catch (e) {
              //TODO handle the exception
            }
          }
        },
        fail: function fail() {
          if (_this11.isPay) {
            _this11.isPay = false;
            _this11.taskBackMoney(_this11.temporaryData.order_code);
          }
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    beforeWXpay: function beforeWXpay(url, payOrderId) {
      uni.showLoading({ title: '发起支付中...' });
      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
            var code = res.code;
            //nonceStr->code MD5 
            uni.request({
              url: url + '/unifiedorder',
              method: 'POST',
              data: { total_fee: '0.01', code: code, out_trade_no: payOrderId },
              success: function success(res) {
                resolve(res);
              },
              fail: function fail(erro) {
                uni.showToast({ title: '请求失败' + '错误码201', icon: "none" });
                reject();
              } });

          } });

      });
    },
    taskPay: function taskPay(payOrderId) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var data, data1;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  _this12.beforeWXpay('https://proxy.fydlsoft.com', payOrderId).catch(function () {return { state: 500 };}));case 2:data = _context4.sent;if (!(
                data.statusCode == 200)) {_context4.next = 7;break;} //服务器正常连接
                if (data.data.status == 200) {
                  _this12.WXpay(data.data);
                } else {
                  _this12.taskPayWrong(data);
                }_context4.next = 16;break;case 7:if (!(
                data.statusCode == 404)) {_context4.next = 15;break;}
                uni.showToast({ title: '启用备用域名', icon: 'none' });_context4.next = 11;return (
                  _this12.beforeWXpay('https://cloud1.fydlsoft.com', payOrderId).catch(function () {return { state: 500 };}));case 11:data1 = _context4.sent;
                if (data1.statusCode == 200) {
                  if (data1.data.status == 200) {
                    _this12.WXpay(data1.data);
                  } else {
                    _this12.taskPayWrong(data1);
                  }
                } else {
                  _this12.taskPayWrong(data1);
                }_context4.next = 16;break;case 15:

                _this12.taskPayWrong(data);case 16:case "end":return _context4.stop();}}}, _callee4);}))();

    },
    taskPayWrong: function taskPayWrong(data) {var _this13 = this; // 调用微信支付前的接口报错
      var params = {
        Mode: 2,
        type: -1,
        idlist: [this.temporaryData.order_id] };

      uni.showToast({ title: data.data.RETURN_MSG, icon: 'none' });
      setTimeout(function () {
        _this13.deleteOrder(params);
      }, 1000);
    },
    taskBackMoney: function taskBackMoney(payOrderId) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var data, data1;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _this14.backMoney('https://proxy.fydlsoft.com', payOrderId).catch(function () {return { state: 500 };}));case 2:data = _context5.sent;if (!(
                data.statusCode == 200)) {_context5.next = 7;break;}
                if (data.data.status == 200) {
                  uni.showToast({ title: "退款成功", icon: 'success' });
                } else {
                  uni.showToast({ title: "自动退款失败请联系管理员", icon: 'success' });
                }_context5.next = 16;break;case 7:if (!(
                data.statusCode == 404)) {_context5.next = 15;break;}
                uni.showToast({ title: '启用备用域名', icon: 'none' });_context5.next = 11;return (
                  _this14.backMoney('https://cloud1.fydlsoft.com', payOrderId).catch(function () {return { state: 500 };}));case 11:data1 = _context5.sent;
                if (data1.statusCode == 200) {
                  if (data.data.status == 200) {
                    uni.showToast({ title: "退款成功", icon: 'success' });
                  } else {
                    uni.showToast({ title: "自动退款失败请联系管理员", icon: 'success' });
                  }
                } else {
                  uni.showToast({ title: "自动退款失败请联系管理员", icon: 'success' });
                }_context5.next = 16;break;case 15:

                uni.showToast({ title: "自动退款失败请联系管理员", icon: 'success' });case 16:case "end":return _context5.stop();}}}, _callee5);}))();

    },
    backMoney: function backMoney(url, payOrderId) {
      uni.showLoading({ title: '退款中...' });
      return new Promise(function (resolve, reject) {
        wx.login({
          success: function success(res) {
            var code = res.code;
            //nonceStr->code MD5 
            uni.request({
              url: url + '/refund',
              method: 'POST',
              data: { total_fee: '0.01', code: code, out_trade_no: payOrderId },
              success: function success(res) {
                resolve(res);
              },
              fail: function fail(erro) {
                reject();
              },
              complete: function complete() {
                uni.hideLoading();
              } });

          } });

      });
    },
    WXpay: function WXpay(data) {var _this15 = this; //调用微信支付
      uni.requestPayment({
        provider: 'wxpay',
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function success(res) {
          uni.showLoading({
            title: '支付结果查询中...' });

          console.log(res, '支付信息');
          if (res.errMsg == 'requestPayment:ok') {
            uni.showToast({ title: '支付成功', icon: 'success' });
            _this15.isPay = true;
            var params = {
              Mode: 2,
              type: 1,
              idlist: [_this15.temporaryData.order_id] };

            _this15.deleteOrder(params); //登账
          } else {
            var _params = {
              Mode: 2,
              type: -1,
              idlist: [_this15.temporaryData.order_id] };

            _this15.deleteOrder(_params);
          }
        },
        fail: function fail(err) {
          uni.showToast({ title: '支付已取消', icon: 'none' });
          var params = {
            Mode: 2,
            type: -1,
            idlist: [_this15.temporaryData.order_id] };

          _this15.deleteOrder(params);
        },
        complete: function complete() {
          _this15.isPay = true;
          console.log('comm', '错误');
          uni.hideLoading();
        } });

    },
    setOrderList: function setOrderList() {var _arguments2 = arguments,_this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var type, params, data, _data, _data2, _data3;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:type = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : -1;params = _arguments2.length > 1 ? _arguments2[1] : undefined;_context6.t0 =
                type;_context6.next = _context6.t0 ===
                -1 ? 5 : _context6.t0 ===




                0 ? 11 : _context6.t0 ===








                1 ? 21 : _context6.t0 ===








                2 ? 31 : 41;break;case 5:_context6.next = 7;return _this16.wrquest(params);case 7:data = _context6.sent;_this16.orderList.allData = _this16.createDoubleArr(data);_this16.dailyList = _this16.orderList.allData;return _context6.abrupt("break", 42);case 11:if (!(_this16.orderList.allData.length == 0)) {_context6.next = 19;break;}_context6.next = 14;return _this16.wrquest(params);case 14:_data = _context6.sent;_this16.orderList.allData = _this16.createDoubleArr(_data);_this16.dailyList = _this16.orderList.allData;_context6.next = 20;break;case 19:_this16.dailyList = _this16.orderList.allData;case 20:return _context6.abrupt("break", 42);case 21:if (!(_this16.orderList.clear.length == 0)) {_context6.next = 29;break;}_context6.next = 24;return _this16.wrquest(params);case 24:_data2 = _context6.sent;_this16.orderList.clear = _this16.createDoubleArr(_data2);_this16.dailyList = _this16.orderList.clear;_context6.next = 30;break;case 29:_this16.dailyList = _this16.orderList.clear;case 30:return _context6.abrupt("break", 42);case 31:if (!(
                _this16.orderList.notClear.length == 0)) {_context6.next = 39;break;}_context6.next = 34;return (
                  _this16.wrquest(params));case 34:_data3 = _context6.sent;
                _this16.orderList.notClear = _this16.createDoubleArr(_data3);
                _this16.dailyList = _this16.orderList.notClear;_context6.next = 40;break;case 39:

                _this16.dailyList = _this16.orderList.notClear;case 40:return _context6.abrupt("break", 42);case 41:return _context6.abrupt("break", 42);case 42:





                _this16.appendCheckBox();case 43:case "end":return _context6.stop();}}}, _callee6);}))();
    } },

  computed: {
    url: {
      get: function get() {
        return this.$store.state.loginParams.url;
      },
      set: function set() {
        return '';
      } },

    dbname: {
      get: function get() {
        return this.$store.state.loginParams.dbname;
      },
      set: function set() {
        return '';
      } },

    token: {
      get: function get() {
        return this.$store.state.token;
      },
      set: function set() {
        return '';
      } },

    params: { //筛选条件初始化由父页面传值
      set: function set() {
        return {};
      },
      get: function get() {
        var obj = this.wpublic.deepClone(this.fparams);
        return obj;
      } },

    num: {
      set: function set() {
        return 0;
      },
      get: function get() {
        if (this.pageSettlement == 0) {
          return this.dailyList.length;
        } else {
          var num = 0;
          this.dailyList.forEach(function (i) {
            if (i.isTrue) num++;
          });
          return num;
        }

      } },

    partnerid: {
      set: function set() {
        return 0;
      },
      get: function get() {
        return this.$store.state.loginParams.personId;
      } },

    sales: {
      set: function set() {
        return 0;
      },
      get: function get() {var _this17 = this;
        var nums = 0;
        this.dailyList.forEach(function (i) {
          if (_this17.pageSettlement == 0) {
            nums += Math.abs(parseFloat(i.BILL_LEFTMONEY));
          } else {
            if (i.isTrue) {
              nums += Math.abs(parseFloat(i.BILL_LEFTMONEY));
            }
          }
        });
        return nums;
      } } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 72:
/*!**************************************************************************************************************************!*\
  !*** D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=style&index=0&id=38ea8c6c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.2.3.7.20191024.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uniOrder.vue?vue&type=style&index=0&id=38ea8c6c&lang=scss&scoped=true& */ 73);
/* harmony import */ var _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uniOrder_vue_vue_type_style_index_0_id_38ea8c6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 73:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app项目/wxProject/components/uni-order/uniOrder.vue?vue&type=style&index=0&id=38ea8c6c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-order/uniOrder.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-order/uniOrder-create-component',
    {
        'components/uni-order/uniOrder-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(63))
        })
    },
    [['components/uni-order/uniOrder-create-component']]
]);
