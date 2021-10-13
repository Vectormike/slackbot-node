process.env.NODE_ENV = 'test';
const server = require('./app');

const chai = require('chai');
chai.config.includeStack = true;

const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;

foo = proxyquire('.app.js', {});

assert.strictEqual(foo.bigBar(), 'BAR');
