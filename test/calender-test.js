const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {rename} = require('../src/calender.js');

describe('rename', function() {
  it('should give true', function() {
    strictEqual(rename(), true);
  });
});