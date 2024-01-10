type CountMap = { [key: string]: number };
export function oddNumber(input: number[]): number {
  // check if input has only one element
  if (input.length === 1) {
    return input[0];
  }

  // Make count object from input like e.g { '1': 2, '2': 1, '3': 1 }
  const countObj = input.reduce((acc: CountMap, value: number) => ((acc[value] = acc[value] + 1 || 1), acc), {});

  // Check count value is odd then return its key
  for (const [key, value] of Object.entries(countObj)) {
    if (value % 2 === 1) {
      return Number(key);
    }
  }

  return 0;
}
