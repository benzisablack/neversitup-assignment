import * as assert from 'assert';
import { permutation } from './permutations';

function testPermutationA() {
  const result = permutation('a');
  assert.deepStrictEqual(result, ['a']);
}

function testPermutationAB() {
  const result = permutation('ab');
  assert.deepStrictEqual(result, ['ab', 'ba']);
}

function testPermutationABC() {
  const result = permutation('abc');
  assert.deepStrictEqual(result, ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
}

function testPermutationAABB() {
  const result = permutation('aabb');
  assert.deepStrictEqual(result, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
}

testPermutationA();
testPermutationAB();
testPermutationABC();
testPermutationAABB();

console.log('All tests passed');
