let users = [
  {
    username: "karl",
    email: "toom.karl42@gmail.com",
    password: `test123`,
    subscriptionStatus: "VIP",
    discordId: "toobal#1111",
    lessonsCompleted: [0, 1],
  },
  {
    username: "toom",
    email: "mister42@gmail.com",
    password: `bro123`,
    subscriptionStatus: "VIP",
    discordId: "mooon#1111",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log(`log the user in - details are correct`);
      } else {
        console.log(`password is incorrect -try again`);
      }
      return;
    }
  }
  console.log(`could not find an email that matches`);
}

login(`toom.karl42@gmail.com`, `test123`);

function register(user) {
  users.push(user);
}

register({
  username: "zen",
  email: `zen@mail.ee`,
  password: `bigbog`,
  subscriptionStatus: `VIP`,
  discordId: `pog#1110`,
  lessonsCompleted: [0, 1],
});
console.log(users);
