"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Movie_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      showTimeoptions: [],
      alert: {
        show: false,
        variant: 'success',
        message: 'dasd'
      },
      editedItem: {},
      emptyFormData: {
        name: '',
        release_date: '',
        image: null,
        showtimes: []
      },
      formData: {
        name: '',
        release_date: '',
        image: null,
        showtimes: []
      },
      showForm: false,
      columns: ['id', 'name', 'release_date_fh', 'status', 'actions'],
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
          name: "Nombre",
          release_date_fh: "Fecha de publicación",
          status: "Estatus",
          actions: 'Acciones'
        },
        sortable: ["id", "name", "status", "release_date_fh"],
        filterable: ["name", "status", "release_date_fh"]
      }
    };
  },
  mounted: function mounted() {
    this.getList();
    this.formData.image = null;
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
      this.formData.image = null;
      this.showForm = true;
    },
    getList: function getList() {
      var _this = this;

      axios.get('/api/movies').then(function (response) {
        _this.list = response.data.list;
        _this.showTimeoptions = response.data.activeShowtimes;
      });
    },
    displayCreateForm: function displayCreateForm() {
      Object.assign(this.formData, this.emptyFormData);
      this.showForm = true;
    },
    submitForm: function submitForm() {
      var data = new FormData();
      Object.entries(this.formData).forEach(function (e) {
        if (e[0] !== 'showtimes') data.append(e[0], e[1]);
      });
      var showtimes = [];
      this.formData.showtimes.forEach(function (e) {
        showtimes.push(e.id);
      });
      data.append('showtimes', JSON.stringify(showtimes));
      if (!this.formData.id) this.store(data);else this.update(this.formData.id, data);
    },
    store: function store(data) {
      var _this2 = this;

      axios.post('/api/movies', data).then(function (response) {
        _this2.displayAlert(5, 'success', 'Película creada correctamente.');

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

      data.append("_method", "put");
      axios.post("/api/movies/".concat(id), data).then(function (response) {
        _this3.displayAlert(5, 'success', 'Película actualizada correctamente.');

        _this3.showForm = false;
        Object.assign(_this3.list.find(function (element) {
          return element.id === id;
        }), _this3.formData);
      })["catch"](function (error) {
        if (error.response.status === 422) _this3.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);else _this3.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
      });
    },
    changeStatus: function changeStatus(row) {
      var _this4 = this;

      var newStatus = {
        status: row.status == 0
      };
      axios.patch("/api/movies/".concat(row.id, "/change-status"), newStatus).then(function (response) {
        Object.assign(_this4.list.find(function (element) {
          return element.id === row.id;
        }), {
          status: row.status == 0 ? 1 : 0
        });
      })["catch"](function (error) {
        _this4.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
      });
    },
    deleteModel: function deleteModel(row) {
      var _this5 = this;

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
          axios["delete"]("/api/movies/".concat(row.id)).then(function (response) {
            _this5.displayAlert(5, 'success', 'Película eliminada.');

            _this5.list.splice(_this5.list.findIndex(function (e) {
              return e.id === row.id;
            }), 1);
          })["catch"](function (error) {
            _this5.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
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

/***/ "./resources/js/views/Movie.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Movie.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie.vue?vue&type=template&id=7f8f64be& */ "./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be&");
/* harmony import */ var _Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie.vue?vue&type=script&lang=js& */ "./resources/js/views/Movie.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__.render,
  _Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Movie.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Movie.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Movie.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Movie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Movie_vue_vue_type_template_id_7f8f64be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Movie.vue?vue&type=template&id=7f8f64be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Movie.vue?vue&type=template&id=7f8f64be& ***!
  \************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "flex-grow-1" }, [_vm._v("Películas")]),
              _vm._v(" "),
              !_vm.showForm
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.displayCreateForm }
                    },
                    [_vm._v("Nueva película")]
                  )
                : _vm._e()
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
                                        row.status == 1 ? "Activo" : "Inactivo"
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
                          527433428
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
                                label: "* Nombre",
                                "label-for": "name_input"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "name_input",
                                  placeholder: "Nombre"
                                },
                                model: {
                                  value: _vm.formData.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "name", $$v)
                                  },
                                  expression: "formData.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "* F. de publicación",
                                "label-for": "release_date_input"
                              }
                            },
                            [
                              _c("b-form-datepicker", {
                                attrs: { id: "release_date_input" },
                                model: {
                                  value: _vm.formData.release_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "release_date", $$v)
                                  },
                                  expression: "formData.release_date"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: (_vm.formData.id ? "" : "*") + " Imagen",
                                "label-for": "image_input"
                              }
                            },
                            [
                              _c("b-form-file", {
                                attrs: {
                                  id: "image_input",
                                  accept: "image/*",
                                  placeholder: "Selecciona una imagen...",
                                  "drop-placeholder": "Drop file here..."
                                },
                                model: {
                                  value: _vm.formData.image,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "image", $$v)
                                  },
                                  expression: "formData.image"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Turnos",
                                "label-for": "showtimes_input"
                              }
                            },
                            [
                              _c("multiselect", {
                                attrs: {
                                  id: "showtimes_input",
                                  options: _vm.showTimeoptions,
                                  label: "time",
                                  "track-by": "id",
                                  multiple: true,
                                  "show-no-results": false,
                                  searchable: true,
                                  placeholder: "Seleccionar turnos..."
                                },
                                model: {
                                  value: _vm.formData.showtimes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "showtimes", $$v)
                                  },
                                  expression: "formData.showtimes"
                                }
                              })
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