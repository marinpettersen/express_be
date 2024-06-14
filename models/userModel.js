const pool = require('../config/database');
class UserModel {
  async createUser(name, email, age) {
      const query = 'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *';
      const result = await pool.query(query, [name, email, age]);
      return result.rows[0];
  }

  async getAllUsers() {
      const result = await pool.query('SELECT * FROM users');
      return result.rows;
  }

  async getUserById(id) {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
  }

  async updateUser(id, name, email, age) {
      const query = 'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *';
      const result = await pool.query(query, [name, email, age, id]);
      return result.rows[0];
  }

  async deleteUser(id) {
      const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
      const result = await pool.query(query, [id]);
      return result.rows[0];
  }
}

module.exports = new UserModel();
