var path = require('path');

module.exports = function (basedir) {
    return {
        join: function () {
            var args = Array.prototype.slice.call(arguments);

            args.unshift("/");

            return path.join(basedir,
                             path.join.apply(null, args)
                            ).replace(/[\/]$/, "");
        }
    };
};
