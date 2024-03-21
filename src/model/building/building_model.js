const connection = require('../../connection/config/database');
/*building_create
building_edit
building_delete
building_list(offset,per_page)//per page: 0,20 30,20
building_search($search) // pdf, print, search
building_single($id)
SL No.*/
const BuildingModel = {

  building_search: async (req, res) => {
    try {
      //console.log("Search button clicked.");
      // Extract necessary data from request
      const { searchQuery,  selectedOrder, fromDate, toDate } = req.body;

      // Construct the base SQL query
      let sql = `SELECT * FROM building WHERE 1`;

      // Add search query condition
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        sql += ` AND LOWER(building_name) LIKE '%${query}%'`;
      }



      // Add date range condition
      if (fromDate && toDate) {
        sql += ` AND created_date BETWEEN '${fromDate}' AND '${toDate}'`;
      }

      // Add column sorting
      if (selectedOrder === '1') {
        sql += ' ORDER BY id ASC'; // Ascending order
      } else if (selectedOrder === '2') {
        sql += ' ORDER BY id DESC'; // Descending order
      }

      console.log("SQL Query:", sql);

      // Execute the constructed SQL query
      connection.query(sql, (error, results, fields) => {
        if (error) {
          console.error("Error occurred during search:", error);
          res.status(500).json({ error: "An error occurred during search." });
        } else {
          console.log("Search results:", results);
          res.status(200).json({ results });
        }
      });
    } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).json({ error: "An error occurred." });
    }
  },


  building_create: async (req, res) => {
    try {
      const {building_name, created_by, created_date} = req.body;

      const sql =
        'INSERT INTO building (building_name, created_by, created_date) VALUES (?, ?, ?)';
      const values = [building_name, created_by, created_date];

      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({message: ' building creation failed'});
        } else {
          res.status(200).json({
            message: 'building created successfully',
            result,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  building_list: async (req, res) => {
    // SELECT building.id, building.building_name, users.full_name, building.created_by, building.created_date
    // FROM building
    // INNER JOIN users ON building.created_by = users.id

    try {
      const query = `
      SELECT building.id, building.building_name, users.full_name, building.created_by, building.created_date
      FROM building
      LEFT JOIN users ON building.created_by = users.id
      ORDER BY building.id DESC`;

      // where $search
      // where id='$id'
      // order by building.id desc, building.building_name asc
      // limit 0,10

      connection.query(query, (error, result) => {
        if (!error) {
          console.log(result);
          return res.send(result);
        } else {
          console.log(error);
          return res.status(500).json({message: 'Failed to get buildings.'});
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  
  building_column_name: async (req, res) => {
    try {
      const query = `
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'building' AND column_name != 'id';
      `;
      
      connection.query(query, (error, result) => {
        if (!error) {
          const columnNames = result.map(row => row.column_name);
          console.log(columnNames);
          return res.send(columnNames);
        } else {
          console.log(error);
          return res.status(500).json({ message: 'Failed to get buildings.' });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  


  building_list_pagination: async (req, res) => {
    const pageNo = Number(req.params.pageNo);
    const perPage = Number(req.params.perPage);

    try {
      const skipRows = (pageNo - 1) * perPage;

      const query = `
    SELECT building.id, building.building_name, users.full_name AS created_by, building.created_date
    FROM building
    LEFT JOIN users ON building.created_by = users.id
    ORDER BY building.id DESC
    LIMIT ?, ?
`;


      connection.query(query, [skipRows, perPage], (error, result) => {
        if (!error) {
          console.log(result);
          return res.send(result);
        } else {
          console.log(error);
          return res.status(500).json({message: 'Failed to get buildings.'});
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Failed to get buildings.'});
    }
  },

  building_edit: async (req, res) => {
    try {
      const {building_name, modified_by, modified_date} = req.body;

      const query = `UPDATE building SET building_name = ?, modified_by = ?, modified_date = ? WHERE id = ?`;
      connection.query(
        query,
        [building_name, modified_by, modified_date, req.params.id],
        (error, result) => {
          if (!error && result.affectedRows > 0) {
            console.log(result);
            return res.send(result);
          } else {
            console.log(error || 'building not found');
            return res.status(404).json({message: 'building not found.'});
          }
        },
      );
    } catch (error) {
      console.log(error);
    }
  },
  building_delete: async (req, res) => {
    try {
      const query = 'DELETE FROM building WHERE id = ?';
      connection.query(query, [req.params.id], (error, result) => {
        if (!error && result.affectedRows > 0) {
          console.log(result);
          return res.send(result);
        } else {
          console.log(error || 'Product not found');
          return res.status(404).json({message: 'Product not found.'});
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = BuildingModel;
