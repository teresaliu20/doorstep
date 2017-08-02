webpackHotUpdate(0,{

/***/ 420:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/pages/Welcome.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 618);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import styles from '../assets/stylesheets';\n\nvar Welcome = function (_React$Component) {\n  _inherits(Welcome, _React$Component);\n\n  function Welcome(props) {\n    _classCallCheck(this, Welcome);\n\n    var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));\n\n    _this.state = {\n      showLoginModal: false,\n      showRegisterModal: false\n    };\n    return _this;\n  }\n\n  _createClass(Welcome, [{\n    key: 'closeLogin',\n    value: function closeLogin() {\n      this.setState({ showLoginModal: false });\n    }\n  }, {\n    key: 'openLogin',\n    value: function openLogin() {\n      this.setState({ showLoginModal: true });\n    }\n  }, {\n    key: 'closeRegister',\n    value: function closeRegister() {\n      this.setState({ showRegisterModal: false });\n    }\n  }, {\n    key: 'openRegister',\n    value: function openRegister() {\n      this.setState({ showRegisterModal: true });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'welcome-page' },\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          {\n            bsStyle: 'primary',\n            bsSize: 'large',\n            onClick: function onClick() {\n              return _this2.openLogin();\n            }\n          },\n          'Login'\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          {\n            bsStyle: 'primary',\n            bsSize: 'large',\n            onClick: function onClick() {\n              return _this2.openRegister();\n            }\n          },\n          'Register'\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Modal,\n          { show: this.state.showLoginModal, onHide: function onHide() {\n              return _this2.closeLogin();\n            } },\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Header,\n            { closeButton: true },\n            _react2.default.createElement(\n              _reactBootstrap.Modal.Title,\n              null,\n              'Login'\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Body,\n            null,\n            _react2.default.createElement(\n              'form',\n              null,\n              _react2.default.createElement(_reactBootstrap.FieldGroup, {\n                id: 'formControlsText',\n                type: 'text',\n                label: 'Text',\n                placeholder: 'Username'\n              }),\n              _react2.default.createElement(_reactBootstrap.FieldGroup, {\n                id: 'formControlsPassword',\n                type: 'password',\n                label: 'Password',\n                placeholder: 'Password'\n              })\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Footer,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.Button,\n              { onClick: function onClick() {\n                  return _this2.closeLogin();\n                } },\n              'Login'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Modal,\n          { show: this.state.showRegisterModal, onHide: function onHide() {\n              return _this2.closeRegister();\n            } },\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Header,\n            { closeButton: true },\n            _react2.default.createElement(\n              _reactBootstrap.Modal.Title,\n              null,\n              'Register as a New User!'\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Body,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.Form,\n              { horizontal: true },\n              _react2.default.createElement(\n                _reactBootstrap.FormGroup,\n                { controlId: 'formHorizontalEmail' },\n                _react2.default.createElement(\n                  _reactBootstrap.Col,\n                  { componentClass: _reactBootstrap.ControlLabel, sm: 2 },\n                  'Email'\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Col,\n                  { sm: 10 },\n                  _react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', placeholder: 'Email' })\n                )\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.FormGroup,\n                { controlId: 'formHorizontalPassword' },\n                _react2.default.createElement(\n                  _reactBootstrap.Col,\n                  { componentClass: _reactBootstrap.ControlLabel, sm: 2 },\n                  'Password'\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Col,\n                  { sm: 10 },\n                  _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', placeholder: 'Password' })\n                )\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.FormGroup,\n                null,\n                _react2.default.createElement(\n                  _reactBootstrap.Col,\n                  { smOffset: 2, sm: 10 },\n                  _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { type: 'submit' },\n                    'Sign in'\n                  )\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Modal.Footer,\n            null,\n            _react2.default.createElement(\n              _reactBootstrap.Button,\n              { onClick: function onClick() {\n                  return _this2.closeRegister();\n                } },\n              'Register'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Welcome;\n}(_react2.default.Component);\n\nexports.default = Welcome;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3BhZ2VzL1dlbGNvbWUuanM/NWNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsXG4gICAgICAgICBCdXR0b24sXG4gICAgICAgICBGaWVsZEdyb3VwLFxuICAgICAgICAgRm9ybUdyb3VwLFxuICAgICAgICAgQ29sLFxuICAgICAgICAgQ29udHJvbExhYmVsLFxuICAgICAgICAgRm9ybSxcbiAgICAgICAgIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYXNzZXRzL3N0eWxlc2hlZXRzJztcblxuY2xhc3MgV2VsY29tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TG9naW5Nb2RhbDogZmFsc2UsXG4gICAgICBzaG93UmVnaXN0ZXJNb2RhbDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY2xvc2VMb2dpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvZ2luTW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgb3BlbkxvZ2luKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9naW5Nb2RhbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dSZWdpc3Rlck1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIG9wZW5SZWdpc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1JlZ2lzdGVyTW9kYWw6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1wYWdlXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub3BlbkxvZ2luKCl9XG4gICAgICAgID5Mb2dpblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJzU3R5bGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBic1NpemU9XCJsYXJnZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vcGVuUmVnaXN0ZXIoKX1cbiAgICAgICAgPlJlZ2lzdGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TG9naW5Nb2RhbH0gb25IaWRlPXsoKSA9PiB0aGlzLmNsb3NlTG9naW4oKX0+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Mb2dpbjwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICAgaWQ9XCJmb3JtQ29udHJvbHNUZXh0XCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dFwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIDxGaWVsZEdyb3VwXG4gICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZUxvZ2luKCl9PkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd1JlZ2lzdGVyTW9kYWx9IG9uSGlkZT17KCkgPT4gdGhpcy5jbG9zZVJlZ2lzdGVyKCl9PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+UmVnaXN0ZXIgYXMgYSBOZXcgVXNlciE8L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPEZvcm0gaG9yaXpvbnRhbD5cbiAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsRW1haWxcIj5cbiAgICAgIDxDb2wgY29tcG9uZW50Q2xhc3M9e0NvbnRyb2xMYWJlbH0gc209ezJ9PlxuICAgICAgICBFbWFpbFxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHNtPXsxMH0+XG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtSG9yaXpvbnRhbFBhc3N3b3JkXCI+XG4gICAgICA8Q29sIGNvbXBvbmVudENsYXNzPXtDb250cm9sTGFiZWx9IHNtPXsyfT5cbiAgICAgICAgUGFzc3dvcmRcbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzbT17MTB9PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICA8L0NvbD5cbiAgICA8L0Zvcm1Hcm91cD5cblxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8Q29sIHNtT2Zmc2V0PXsyfSBzbT17MTB9PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTaWduIGluXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Db2w+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIDwvRm9ybT5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZVJlZ2lzdGVyKCl9PlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvcGFnZXMvV2VsY29tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFwQkE7QUF5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFuQkE7QUFEQTtBQTZCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBakNBO0FBdENBO0FBNkVBOzs7O0FBeEdBO0FBQ0E7QUEwR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///420\n");

/***/ })

})