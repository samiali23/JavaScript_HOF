console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (number){
    return function (plusNumber){
        return number + plusNumber
    }
} 

let plus15 = plus(15)
console.log(plus15(10))

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user)=> console.log(user.name))

  users.map((user)=> {
      console.log(user.name, user.score)
  })

  let activeUsers = users.filter((user)=> user.isActive);
  console.log(activeUsers)

 let sortedUsers = users.sort((a,b) => b.score - a.score)
 console.log(sortedUsers)

 let avgScore = users.reduce((sum, user)=> sum + user.score, 0) / users.length
 console.log(avgScore)