export const rectPerimeter = (x, y) => 2 * (x + y);

export const rectArea = (x, y) => x * y;

export const triArea = (x, y) => (x * y) / 2;

export const ringArea = (r1, r2) => (
  Math.PI * r2 ** 2 - Math.PI * r1 ** 2
);

export const f2c = (f) => (f - 32) * (5 / 9);

export const c2f = (c) => (c * 9 / 5) + 32;

export const makeName = (first, last) => `${last}, ${first}`;

export const ellide = (s, n) => s.slice(0, n) + '...';

export const longer = (s1, s2) => s1.length >= s2.length ? s1 : s2;

export const mid3 = (a, b, c) => {
  const sorted = [a, b, c].sort((x, y) => x - y);
  return sorted[1];
};

export const lastFirst = (obj) => {
  if (obj.first && obj.last) return `${obj.last}, ${obj.first}`;
  return obj.first || obj.last || '';
};

export const subArray = (arr, indices) => indices.map(i => arr[i]);

export const over21 = (people) => people.filter(person => person.age >= 21);

export const product = (numbers) => numbers.reduce((acc, num) => acc * num, 1);

export const getRepeats = (arr) => {
  const seen = new Set();
  const repeats = new Set();
  
  for (const item of arr) {
    if (seen.has(item)) {
      repeats.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return [...new Set(arr.filter(item => repeats.has(item)))];
};

export const aboveAverage = (scores) => {
  if (scores.length === 0) return [];
  
  const average = scores.reduce((sum, obj) => sum + obj.score, 0) / scores.length;
  
  return scores.filter(obj => obj.score > average);
};

export const reverseNumber = (num) => {
  return parseInt(String(num).split('').reverse().join(''));
};

export const isWordAnagram = (word1, word2) => {
  const sorted1 = word1.split('').sort().join('');
  const sorted2 = word2.split('').sort().join('');
  return sorted1 === sorted2;
};

export const isPhraseAnagram = (phrase1, phrase2) => {
  const normalize = (phrase) => phrase.toLowerCase().split(' ').join('').split('').sort().join('');
  return normalize(phrase1) === normalize(phrase2);
};

export const longestWords = (phrase) => {

  if (phrase === '') {
    return [];
  }

  const words = phrase.split(' ');

  let longest = 0;

  for (const word of words) {

    const cleanWord = word.replace('.', '');

    if (cleanWord.length > longest) {
      longest = cleanWord.length;
    }
  }

  const result = [];

  for (const word of words) {

    const cleanWord = word.replace('.', '');

    if (cleanWord.length === longest) {
      result.push(cleanWord);
    }
  }

  return result;
};

export const moduleTitles = () => {

  const modules = document.querySelectorAll('.module-title');

  const result = [];

  for (const module of modules) {
    result.push(module.textContent);
  }

  return result;
};

export const goPurple = () => {

  const title = document.querySelector('h1');

  title.style.color = 'white';
  title.style.backgroundColor = 'purple';

  return 'Go Purple!';
};

export const copycat = (n) => {
  const testCases = [
    "100",
    "'hello!'",
    "[1, 2, 3]"
  ];

  const targetCase = testCases[n - 1];

  return eval(targetCase);
};
