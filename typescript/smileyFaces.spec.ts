import * as assert from 'assert';
import { countSmileys } from './smileyFaces';

// [':)', ';(', ';}', ':-D'] should return 2
function testCountSmileyCase1() {
  const result = countSmileys([':)', ';(', ';}', ':-D']);
  assert.equal(result, 2);
}

// [';D', ':-(', ':-)', ';~)'] should return 3
function testCountSmileyCase2() {
  const result = countSmileys([';D', ':-(', ':-)', ';~)']);
  assert.equal(result, 3);
}

// [';]', ':[', ';*', ':$', ';-D'] should return 1
function testCountSmileyCase3() {
  const result = countSmileys([';]', ':[', ';*', ':$', ';-D']);
  assert.equal(result, 1);
}
testCountSmileyCase1();
testCountSmileyCase2();
testCountSmileyCase3();

console.log('All tests passed');
