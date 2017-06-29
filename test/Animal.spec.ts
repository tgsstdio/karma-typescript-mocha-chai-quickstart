import { expect } from 'chai'
import { Animal } from '../src/Animal'

describe('A test suite', function () {
  beforeEach(function () { })
  afterEach(function () { })
  it('should fail', function () { expect(true).to.be.false; })
})

describe('A rogue suite', function () {
  let expected = 'Bob'
  let a = new Animal(expected)
  it('should fail', function () { expect(a.name).to.be.eq(expected) })
})