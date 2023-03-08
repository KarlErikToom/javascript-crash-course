let users = {
  name: `Karl`,
  email: `toom.karl42@gmail.com`,
  password: `abc123`,
  subscriptionStatus: `VIP`,
  discordId: `toobal444`,
  lessonsCompleted: [0, 1],
};

function register(user) {
  users.push(user);
}

register({
   username:"karl",
   email:"toom.karl42@gmail.com",
   password:"abc123",
   subscriptionStatus:"VIP",
   discordId:"toobal444",
   lessonsCompleted:[0, 1]
  } );
   
  console.log(users)