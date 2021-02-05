//user.js

const { db } = require('../util/admin');

exports.getUser = (request, response) => {
  db.collection('user')
    .get()
    .then((data) => {
      let user = [];
      data.forEach((doc) => {
        user.push({
          userId: doc.id,
          name: doc.data().name,
          age: doc.data().age,
          city: doc.data().city,
        });
      });
      return response.json(user);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
