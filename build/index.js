"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("../../style/components/modal.css");
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    setModalOpened = _ref.setModalOpened,
    children = _ref.children;
  var modalRef = (0, _react.useRef)(HTMLDialogElement);
  var _useState = (0, _react.useState)("none"),
    _useState2 = _slicedToArray(_useState, 2),
    modalDisplay = _useState2[0],
    setModalDisplay = _useState2[1];
  (0, _react.useEffect)(function () {
    var modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen === true) {
        setModalDisplay("flex");
      } else {
        setModalDisplay("none");
      }
    }
  }, [isOpen]);
  var handleEscapeKey = function handleEscapeKey(event) {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
  var handleCloseModal = function handleCloseModal() {
    setModalOpened(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: modalRef,
    onKeyDown: handleEscapeKey,
    className: "modal",
    style: {
      display: modalDisplay
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal_closeBtn",
    onClick: handleCloseModal
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/closeBtn.png",
    alt: "Bouton de fermeture"
  })), children);
}
var _default = exports["default"] = Modal;