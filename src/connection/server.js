const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const building = require('../model/building/building_model');

app.post('/building/building_create', building.building_create);
app.post('/building/building_delete/:id', building.building_delete);
app.post('/building/building_edit/:id', building.building_edit);
app.post('/building/building_search', building.building_search);
app.get('/building/building_column_name', building.building_column_name);

app.get(
  '/building/building_list/:pageNo/:perPage',
  building.building_list_pagination,
);

const ModuleInfoModel = require('../model/module_info/module_info_model');
app.get('/module_info/module_info_list', ModuleInfoModel.moduleInfoList);

const users = require('../model/users/users_model');
app.post('/users/login', users.LoginUserEmailAndPassword);
app.get('/users/user_all', users.usersAll);


app.get('/', (req, res) => {
  res.send('Server running from MDHRShohel');
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`server is running on port: ${port} from MDHRShohel`);
});
