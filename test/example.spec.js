import { expect, assert, should } from 'chai';

describe('karma test with Chai', () => {
  it('should expose the Chai assert method', () => {
    assert.ok('everything', 'everything is ok');
  })

  it('should expose the Chai expect method', () => {
    expect('foo').to.not.equal('bar');
  })

  it('should expose the Chai should property', () => {
    (1).should.not.equal(2);
  })

  it('should work with ES6 fat arrow function', () => {
    (1).should.not.equal(2);
  })
})