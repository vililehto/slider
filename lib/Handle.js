'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Handle = function (_React$Component) {
  _inherits(Handle, _React$Component);

  function Handle(props) {
    _classCallCheck(this, Handle);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      isTooltipVisible: false
    };
    return _this;
  }

  Handle.prototype.hideTooltip = function hideTooltip() {
    this.setState({
      isTooltipVisible: false
    });
  };

  Handle.prototype.showTooltip = function showTooltip() {
    this.setState({
      isTooltipVisible: true
    });
  };

  Handle.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        tooltipPrefixCls = _props.tooltipPrefixCls,
        className = _props.className,
        tipTransitionName = _props.tipTransitionName,
        tipFormatter = _props.tipFormatter,
        vertical = _props.vertical,
        offset = _props.offset,
        value = _props.value,
        dragging = _props.dragging,
        noTip = _props.noTip,
        index = _props.index;


    var style = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var handle = _react2["default"].createElement('div', { className: className, style: style,
      onMouseUp: this.showTooltip.bind(this),
      onMouseEnter: this.showTooltip.bind(this),
      onMouseLeave: this.hideTooltip.bind(this)
    });

    if (noTip) {
      return handle;
    }

    var isTooltipVisible = dragging || this.state.isTooltipVisible;
    return _react2["default"].createElement(
      _rcTooltip2["default"],
      {
        prefixCls: tooltipPrefixCls || prefixCls + '-tooltip',
        placement: 'top',
        visible: isTooltipVisible,
        overlay: _react2["default"].createElement(
          'span',
          null,
          tipFormatter(value, index)
        ),
        delay: 0,
        transitionName: tipTransitionName
      },
      handle
    );
  };

  return Handle;
}(_react2["default"].Component);

exports["default"] = Handle;


Handle.propTypes = {
  prefixCls: _react2["default"].PropTypes.string,
  tooltipPrefixCls: _react2["default"].PropTypes.string,
  className: _react2["default"].PropTypes.string,
  vertical: _react2["default"].PropTypes.bool,
  offset: _react2["default"].PropTypes.number,
  tipTransitionName: _react2["default"].PropTypes.string,
  tipFormatter: _react2["default"].PropTypes.func,
  value: _react2["default"].PropTypes.number,
  dragging: _react2["default"].PropTypes.bool,
  noTip: _react2["default"].PropTypes.bool,
  index: _react2["default"].PropTypes.number
};
module.exports = exports['default'];