function linear(context) {
  this._context = context;
}

linear.prototype = {
  lineStart: function() { this._move = true; },
  lineEnd: function() {},
  point: function(x, y) {
    if (this._move) this._move = false, this._context.moveTo(x, y);
    else this._context.lineTo(x, y);
  }
};

export default linear;
