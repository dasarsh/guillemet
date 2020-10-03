const logic = require('./logic');

exports['test pass no matter what'] = function (assert) {
    assert.equal(true, true, 'assert pass no matter what');
};

if (module == require.main) require('test').run(exports)