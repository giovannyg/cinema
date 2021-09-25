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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      alert: {
        show: false,
        variant: 'success',
        message: 'dasd'
      },
      editedItem: {},
      emptyFormData: {
        time: '',
        status: false
      },
      formData: {
        time: '',
        status: false
      },
      showForm: false,
      columns: ['id', 'time', 'status', 'actions'],
      list: [],
      options: {
        texts: {
          count: "Mostrando {from} a {to} de {count} registros|{count} registros|1 registro",
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
    cancel: function cancel() {
      this.formData = _objectSpread({}, this.emptyFormData);
      this.alert.show = false;
      this.showForm = false;
    },
    edit: function edit(row) {
      Object.assign(this.formData, row);
      Object.assign(this.editedItem, row);
      this.displayForm();
    },
    getList: function getList() {
      var _this = this;

      axios.get('/api/showtimes').then(function (response) {
        _this.list = response.data;
      });
    },
    displayForm: function displayForm() {
      this.showForm = true;
    },
    submitForm: function submitForm() {
      if (!this.formData.id) this.store();else this.update(this.formData.id, this.formData);
    },
    store: function store() {
      var _this2 = this;

      axios.post('/api/showtimes', this.formData).then(function (response) {
        _this2.displayAlert(5, 'success', 'Turno creado correctamente.');

        _this2.list.push(response.data);

        _this2.showForm = false;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);
        } else _this2.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
      });
    },
    update: function update(id, data) {
      var _this3 = this;

      axios.patch("/api/showtimes/".concat(id), data).then(function (response) {
        _this3.displayAlert(5, 'success', 'Turno actualizado correctamente.');

        _this3.list.push(response.data);

        _this3.showForm = false;
        Object.assign(_this3.list.find(function (element) {
          return element.id === id;
        }), data);
      })["catch"](function (error) {
        if (error.response.status === 422) _this3.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);else _this3.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
      });
    },
    changeStatus: function changeStatus(row) {
      this.update(row.id, {
        status: !row.status,
        time: row.time
      });
    },
    deleteModel: function deleteModel(row) {
      var _this4 = this;

      this.$swal.fire({
        title: 'Eliminar',
        text: "¿Seguro que deseas eliminar este registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]("/api/showtimes/".concat(row.id)).then(function (response) {
            _this4.displayAlert(5, 'success', 'Turno eliminado.');

            _this4.list.splice(_this4.list.findIndex(function (e) {
              return e.id === row.id;
            }), 1);
          })["catch"](function (error) {
            _this4.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
          });
        }
      });
    },
    displayAlert: function displayAlert(show, variant, message) {
      this.alert.show = show;
      this.alert.variant = variant;
      this.alert.message = message;
    }
  },
  computed: {}
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
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c(
        "b-alert",
        {
          attrs: {
            variant: _vm.alert.variant,
            show: _vm.alert.show,
            dismissible: ""
          },
          on: {
            dismissed: function($event) {
              _vm.alert.show = 0
            }
          }
        },
        [_vm._v(_vm._s(_vm.alert.message))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card shadow-sm" }, [
            _c("div", { staticClass: "card-header d-flex" }, [
              _c("h4", { staticClass: "flex-grow-1" }, [_vm._v("Turnos")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.displayForm }
                },
                [_vm._v("Nuevo turno")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              !_vm.showForm
                ? _c(
                    "div",
                    [
                      _c("v-client-table", {
                        attrs: {
                          data: _vm.list,
                          columns: _vm.columns,
                          options: _vm.options
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "status",
                              fn: function(ref) {
                                var row = ref.row
                                return _c("div", {}, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(
                                        row.status ? "Activo" : "Inactivo"
                                      ) +
                                      "\n                  "
                                  )
                                ])
                              }
                            },
                            {
                              key: "actions",
                              fn: function(ref) {
                                var row = ref.row
                                return _c("div", {}, [
                                  _c(
                                    "div",
                                    { staticClass: "h4 mb-0" },
                                    [
                                      _c("b-icon", {
                                        staticClass: "color-primary px-1",
                                        attrs: {
                                          role: "button",
                                          icon: "pencil-fill"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.edit(row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-icon", {
                                        staticClass: "color-primary px-1",
                                        attrs: {
                                          role: "button",
                                          icon: "lock-fill"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus(row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-icon", {
                                        staticClass: "color-primary px-1",
                                        attrs: {
                                          role: "button",
                                          icon: "trash-fill"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteModel(row)
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              }
                            }
                          ],
                          null,
                          false,
                          3044521125
                        )
                      })
                    ],
                    1
                  )
                : _c(
                    "div",
                    [
                      _c(
                        "b-form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.submitForm.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "* Turno",
                                "label-for": "time_input"
                              }
                            },
                            [
                              _c("b-form-timepicker", {
                                attrs: { id: "time_input", locale: "en" },
                                model: {
                                  value: _vm.formData.time,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "time", $$v)
                                  },
                                  expression: "formData.time"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            [
                              _c(
                                "b-form-checkbox",
                                {
                                  attrs: {
                                    name: "status",
                                    value: "true",
                                    "unchecked-value": "false"
                                  },
                                  model: {
                                    value: _vm.formData.status,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "status", $$v)
                                    },
                                    expression: "formData.status"
                                  }
                                },
                                [_vm._v("Activo?\n                      ")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "button",
                                    variant: "outline-secondary"
                                  },
                                  on: { click: _vm.cancel }
                                },
                                [_vm._v("Cancelar")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "submit",
                                    variant: "outline-primary"
                                  }
                                },
                                [_vm._v("Guardar")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);