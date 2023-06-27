/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let charCount = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const charAtIndex = magazine[i];
    if (charCount.has(charAtIndex)) {
      charCount.set(charAtIndex, charCount.get(charAtIndex) + 1);
    } else {
      charCount.set(charAtIndex, 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!charCount.has(char) || charCount.get(char) < 1) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
};
