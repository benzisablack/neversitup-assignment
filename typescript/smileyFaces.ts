export function countSmileys(faces: string[]): number {
  const firstChar = [':', ';'];
  const secondChar = ['-', '~'];
  const thirdChar = [')', 'D'];

  function isValidFace(face: string) {
    // check if face length is 2 then check value contains in firstChar and thirdChar
    if (face.length === 2) {
      return firstChar.includes(face[0]) && thirdChar.includes(face[1]);
    }
    if (face.length === 3) {
      return firstChar.includes(face[0]) && secondChar.includes(face[1]) && thirdChar.includes(face[2]);
    }
  }

  // sum all valid face
  return faces.reduce((acc: number, curr: string) => {
    if (isValidFace(curr)) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
