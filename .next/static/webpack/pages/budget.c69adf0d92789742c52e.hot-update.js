webpackHotUpdate_N_E("pages/budget",{

/***/ "./pages/budget.js":
/*!*************************!*\
  !*** ./pages/budget.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "D:\\Fabiano\\Projeto-orcamento\\Front-orcamento\\pages\\budget.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Budget() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    // function useState começa com os objetos vazio
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    project: ""
  }),
      budget = _useState[0],
      setBudget = _useState[1];

  var onChangeInput = function onChangeInput(e) {
    setBudget(_objectSpread(_objectSpread({}, budget), {}, Object(D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  var sendBudget = /*#__PURE__*/function () {
    var _ref = Object(D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var response, responseSend;
      return D_Fabiano_Projeto_orcamento_Front_orcamento_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(budget);
              _context.prev = 2;
              _context.next = 5;
              return fetch("http://localhost:8080/budget", {
                // envia dados a api e o bd
                method: "POST",
                // usa o metodo POST
                body: JSON.stringify(budget),
                // envia a variavel budget no formato de um objeto
                headers: {
                  'Content-Type': 'application/json'
                } // indica que vai enviar um conteudo em formato json

              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              responseSend = _context.sent;

              if (responseSend.error) {
                alert(responseSend.message);
              } else {
                alert(responseSend.message);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              alert("Erro: Orçamento não enviado!");

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendBudget(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Or\xE7amento"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Solicitar or\xE7amento para desenvolvimento web e Apps"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top{\n            background-color: #050c3d;\n            color: #00a1fc;\n            padding: 40px 40px;\n            margin-bottom: 0rem;\n          }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: "Orcamento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "form-budget",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".form-budget{\n             padding: 80px;\n             background-color: #ffffff;\n             margin-top: 0rem;\n        }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: sendBudget,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o seu nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu e-mail",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(xx) xxxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "whatsapp",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "whatsapp",
              id: "whatsapp",
              placeholder: "(xx) xxxxx-xxxx",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "project",
              children: "Projeto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "textarea",
              name: "project",
              id: "project",
              placeholder: "Fale um pouco de seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            type: "submit",
            outline: true,
            color: "primary",
            children: "Solicitar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(Budget, "HhZ7XZCP3jQo3DLTEwIqNuk3xHc=");

_c = Budget;
/* harmony default export */ __webpack_exports__["default"] = (Budget);

var _c;

$RefreshReg$(_c, "Budget");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVkZ2V0LmpzIl0sIm5hbWVzIjpbIkJ1ZGdldCIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c2FwcCIsInByb2plY3QiLCJidWRnZXQiLCJzZXRCdWRnZXQiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZEJ1ZGdldCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VTZW5kIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBVUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDO0FBQ25DO0FBQ0FDLFFBQUksRUFBRSxFQUY2QjtBQUduQ0MsU0FBSyxFQUFFLEVBSDRCO0FBSW5DQyxTQUFLLEVBQUUsRUFKNEI7QUFLbkNDLFlBQVEsRUFBRSxFQUx5QjtBQU1uQ0MsV0FBTyxFQUFFO0FBTjBCLEdBQUQsQ0FEcEI7QUFBQSxNQUNUQyxNQURTO0FBQUEsTUFDREMsU0FEQzs7QUFVaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0JGLGFBQVMsaUNBQU1ELE1BQU4sNkpBQWVHLENBQUMsQ0FBQ0MsTUFBRixDQUFTVCxJQUF4QixFQUErQlEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXhDLEdBQVQ7QUFDRCxHQUZEOztBQUdBLE1BQU1DLFVBQVU7QUFBQSxnVEFBRyxpQkFBT0gsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ0ksY0FBRjtBQUNBQyxxQkFBTyxD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QUFBO0FBQUEsa0JBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUFpR0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFHRDs7R0E1SVFULE07O0tBQUFBLE07QUE4SU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1ZGdldC5jNjlhZGYwZDkyNzg5NzQyYzUyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEp1bWJvdHJvbixcclxuICBCdXR0b24sXHJcbiAgRm9ybSxcclxuICBGb3JtR3JvdXAsXHJcbiAgTGFiZWwsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmZ1bmN0aW9uIEJ1ZGdldCgpIHtcclxuICBjb25zdCBbYnVkZ2V0LCBzZXRCdWRnZXRdID0gdXNlU3RhdGUoe1xyXG4gICAgLy8gZnVuY3Rpb24gdXNlU3RhdGUgY29tZcOnYSBjb20gb3Mgb2JqZXRvcyB2YXppb1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICB3aGF0c2FwcDogXCJcIixcclxuICAgIHByb2plY3Q6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgc2V0QnVkZ2V0KHsgLi4uYnVkZ2V0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VuZEJ1ZGdldCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhidWRnZXQpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9idWRnZXRcIiwgeyAvLyBlbnZpYSBkYWRvcyBhIGFwaSBlIG8gYmRcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyB1c2EgbyBtZXRvZG8gUE9TVFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJ1ZGdldCksIC8vIGVudmlhIGEgdmFyaWF2ZWwgYnVkZ2V0IG5vIGZvcm1hdG8gZGUgdW0gb2JqZXRvXHJcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9IC8vIGluZGljYSBxdWUgdmFpIGVudmlhciB1bSBjb250ZXVkbyBlbSBmb3JtYXRvIGpzb25cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZVNlbmQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgIGlmKHJlc3BvbnNlU2VuZC5lcnJvcil7XHJcbiAgICAgICAgYWxlcnQocmVzcG9uc2VTZW5kLm1lc3NhZ2UpXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGFsZXJ0KHJlc3BvbnNlU2VuZC5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoXCJFcnJvOiBPcsOnYW1lbnRvIG7Do28gZW52aWFkbyFcIilcclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+T3LDp2FtZW50bzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiU29saWNpdGFyIG9yw6dhbWVudG8gcGFyYSBkZXNlbnZvbHZpbWVudG8gd2ViIGUgQXBwc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVudSAvPlxyXG4gICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImRlc2NyLXRvcFwiPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgLmRlc2NyLXRvcHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MGMzZDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMGExZmM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5PcmNhbWVudG88L2gxPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZm9ybS1idWRnZXRcIj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YC5mb3JtLWJ1ZGdldHtcclxuICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgICAgICB9YH1cclxuICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRCdWRnZXR9PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuYW1lXCI+Tm9tZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmVlbmNoYSBjb20gbyBzZXUgbm9tZSBjb21wbGV0b1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZWVuY2hhIGNvbSBvIHNldSBlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJwaG9uZVwiPlRlbGVmb25lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKHh4KSB4eHh4eC14eHh4XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwid2hhdHNhcHBcIj5UZWxlZm9uZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwid2hhdHNhcHBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ3aGF0c2FwcFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIih4eCkgeHh4eHgteHh4eFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZXRvPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGYWxlIHVtIHBvdWNvIGRlIHNldSBwcm9qZXRvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBTb2xpY2l0YXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVkZ2V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9