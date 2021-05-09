const nums = [3, 4, 9, 6, 2];

// végigmegyünk a nums tömb elemein
for (let i = 0; i < nums.length; i++) {
  // ha osztható kettővel a tömb valamelyik eleme, kiírjuk a számot + osztható
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható');
    // ha nem osztható, kiírjuk a számot + nem osztható
  } else {
    console.log(nums[i] + ': nem osztható');
  }
}

const players = ['Peter', 'Kate', 'John'];

// végigmegyünk a players tömb elemein
for (let i = 0; i < players.length; i++) {
  // kiírjuk a tömb elemeinek indexét, hozzáadunk egyet, majd kiírjuk a tömb elemeit
  console.log(players.indexOf(players[i]) + 1 + '. ' + players[i]);
}

const x = ['', 4, true];

// készítünk egy függvényt, aminek bemeneti paramétere az x tömb lesz
function myFunc(x) {
  //létrehozunk egy üres tömböt
  const a = [];
  //végigmegyünk a x tömbön
  for (let i = 0; i < x.length; i++) {
    //a push függvénnyel hozzáadjuk az x tömb elemeinek típusait az a tömbhöz
    a.push(typeof (x[i]));
  }
  //visszatérünk az a értékével
  return a;
}
//meghívjuk és kiírjuk a függvényt
console.log(myFunc(x));