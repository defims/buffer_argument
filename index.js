(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.buffer_argument = factory();
  }
}(this, function () {
    return function buffer_argument(f, callback) {
        var buffer = [];
        return callback(function() {
            var args = arguments,
                l = args.length > buffer.length ? args.length : buffer.length;
            while(l--)
                buffer[l] = typeof(args[l]) == "undefined" ? buffer[l] : args[l];
            return f.apply(this, buffer)
        })
    }

}));

