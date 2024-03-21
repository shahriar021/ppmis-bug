const connection = require('../../connection/config/database');
const sha1 = require('sha1');

const usersModel = {
  LoginUserEmailAndPassword: async (req, res) => {
    const {email, password} = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    connection.query(sql, [email], async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({message: 'Login failed'});
      } else if (result.length === 0) {
        res.status(401).json({message: 'User not found'});
      } else {
        const user = result[0];
        const hashedPassword = sha1(password); // Hash the password using SHA-1

        if (hashedPassword === user.password) {
          // Compare with the stored hash
          res.status(200).json({message: 'Login successful'});
          // res.redirect('http://192.168.0.107:3000')
        } else {
          res.status(401).json({message: 'Invalid password'});
        }
      }
    });
  },

  usersAll: async (req, res) => {
    try {
      const query = 'SELECT * FROM users';
      connection.query(query, (error, result) => {
        if (!error) {
          console.log(result);
          return res.send(result);
        } else {
          console.log(error);
          return res.status(500).json({message: 'Failed to get products.'});
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usersModel;
