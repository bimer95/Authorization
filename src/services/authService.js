export const logIn = (username, password) =>
(new Promise((resolve, reject) => {
  if (username === 'steve.jobs@example.com' && password === 'password') {
    resolve();
  } else {


    reject(new Error(`Пользователя, ${username} не существует`));
  }
})
);

