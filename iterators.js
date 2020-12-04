// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let i = 0;
  return () => {
    const el = arr[i];
    i++;
    return el;
  }
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  let i = 0;
  return { next: () => {
    const el = arr[i];
    i++;
    return el;
  }}
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  let val = 0;
  const iterator = nextIterator(arr);
  arr.forEach(() => val += iterator.next());
  return val;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  const el = set.values();
  return { next: () => el.next().value}

}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  let i = 0;
  return { next: () => {
    const el = [i, arr[i]];
    i++;
    return el;
  }}
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
  return this.str.split(' ');
}

Words.prototype[Symbol.iterator] = function() {
  let i = 0;
  return { next: () => {
    const el = this[i];
    i++;
    return el;
  }}

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
  let i = 0;
  return { sentence: () => {
    const el = i === 0 ? `${array[i]} is first` : `${array[i]} was found out ${i}`;
    i++;
    return el;
  }}
}

const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
  yield setInterval(() => {
    console.log(string === 'english' ? 'Hello there' : 'gibberish');
  }, 3000);
}

// createConversation('english').next();



//CHALLENGE 9
function waitForVerb(noun) {
  const verb = 'fart';
  return noun + ' ' + verb;
}

async function f(noun) {
  const madLib = waitForVerb(noun);
  setInterval(() => {
    console.log(madLib);
  }, 3000);
}

f("dog");

