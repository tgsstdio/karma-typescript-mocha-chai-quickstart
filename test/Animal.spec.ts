import { expect } from 'chai'

describe('A test suite', function () {
  beforeEach(function () { })
  afterEach(function () { })
  it('should fail', function () { expect(true).to.be.false; })
})

describe('A rogue suite', function () {
  it('should fail', function () { expect(true).to.be.false; })
})