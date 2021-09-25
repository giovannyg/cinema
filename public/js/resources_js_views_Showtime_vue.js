"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Showtime_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      columns: ['id', 'time', 'status', 'actions'],
      list: [],
      options: {
        texts: {
          count: "Showing {from} to {to} of {count} records|{count} records|One record",
          limit: 'Registros',
          filter: "",
          filterPlaceholder: "Buscar",
          page: "Página:",
          noResults: "No se encontaron registros",
          loading: 'Cargando...'
        },
        headings: {
          id: "ID",
          time: "Horario",
          status: "Estatus",
          actions: 'Acciones'
        },
        sortable: ["id", "time", "status"],
        filterable: ["time", "status"]
      }
    };
  },
  mounted: function mounted() {
    this.getList();
  },
  methods: {
    getList: function getList() {
      var _this = this;

      axios.get('/api/showtimes').then(function (response) {
        console.log(response.data);
        _this.list = response.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Showtime.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Showtime.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Showtime.vue?vue&type=template&id=ceb8932e& */ "./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e&");
/* harmony import */ var _Showtime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Showtime.vue?vue&type=script&lang=js& */ "./resources/js/views/Showtime.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Showtime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Showtime.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Showtime.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Showtime.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showtime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Showtime.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Showtime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Showtime_vue_vue_type_template_id_ceb8932e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Showtime.vue?vue&type=template&id=ceb8932e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Showtime.vue?vue&type=template&id=ceb8932e& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { attrs: { id: "people" } },
              [
                _c("v-client-table", {
                  attrs: {
                    data: _vm.list,
                    columns: _vm.columns,
                    options: _vm.options
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "status",
                      fn: function(ref) {
                        var row = ref.row
                        return _c("div", {}, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(row.status + "") +
                              "\n                "
                          )
                        ])
                      }
                    },
                    {
                      key: "actions",
                      fn: function(ref) {
                        var row = ref.row
                        return _c("div", {}, [
                          _vm._v(
                            "\n                  " +
                              _vm._s("actions") +
                              "\n                "
                          )
                        ])
                      }
                    }
                  ])
                })
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header d-flex" }, [
      _c("h4", { staticClass: "flex-grow-1" }, [_vm._v("Turnos")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Nuevo turno")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);