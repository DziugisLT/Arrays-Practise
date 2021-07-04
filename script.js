'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia].slice(1, -2);
  // console.log(dogsJuliaCopy, dogsJulia);
  const dogsConnected = dogsJuliaCopy.concat(dogsKate);
  // console.log(dogsConnected);
  dogsConnected.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
};

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
