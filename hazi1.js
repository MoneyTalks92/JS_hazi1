const nums = [3, 4, 9, 6, 2];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható');
  } else {
    console.log(nums[i] + ': nem osztható');
  }
}

const players = ['Peter', 'Kate', 'John'];

for (let i = 0; i < players.length; i++) {
  console.log(players.indexOf(players[i]) + 1 + '. ' + players[i]);
}

const x = ['', 4, true];

function type(x) {
  const a = [];
  for (let i = 0; i < x.length; i++) {
    a.push(typeof (x[i]));
  }
  return a;
}