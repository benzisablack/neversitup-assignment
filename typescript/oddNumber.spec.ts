import * as assert from 'assert';
import { oddNumber } from './oddNumber';

// [7] should return 7, because it occurs 1 time (which is odd).
function testOddNumberCase1() {
  const result = oddNumber([7]);
  assert.equal(result, 7);
}

// [0] should return 0, because it occurs 1 time (which is odd).
function testOddNumberCase2() {
  const result = oddNumber([0]);
  assert.equal(result, 0);
}

// [1,1,2] should return 2, because it occurs 1 time (which is odd).
function testOddNumberCase3() {
  const result = oddNumber([1, 1, 2]);
  assert.equal(result, 2);
}

// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
function testOddNumberCase4() {
  const result = oddNumber([0, 1, 0, 1, 0]);
  assert.equal(result, 0);
}

// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function testOddNumberCase5() {
  const result = oddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
  assert.equal(result, 4);
}

testOddNumberCase1();
testOddNumberCase2();
testOddNumberCase3();
testOddNumberCase4();
testOddNumberCase5();

console.log('All tests passed');
