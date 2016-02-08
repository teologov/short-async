/*!
 * 
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/8/16
 */

"use strict";

const co = require("co");

module.exports = generator => done => co(generator).then(done, done);