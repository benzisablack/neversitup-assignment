export function permutation(input: string): string[] {
  // return input if input is empty or length is 1
  if (input.length <= 1) {
    return [input];
  }

  let result: string[] = [input[0]];

  // loop each of input
  for (let i = 1; i < input.length; i++) {
    const loopList: string[] = [];

    // loop each of result
    for (const each of result) {
      for (let j = 0; j <= each.length; j++) {
        // push each + input[i] + each
        loopList.push(each.slice(0, j).concat(input[i]).concat(each.slice(j)));
      }
    }

    // assign loopList to result
    result = loopList;
  }

  // make unique and sorted ascending
  return [...new Set(result)].sort();
}
