import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'myDatabase.db', location: 'default'},
  () => {},
  error => {
    console.error('Error opening database: ', error);
  },
);

const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS household_survey (
        id INTEGER PRIMARY KEY,
        sub_project_id TEXT,
        wmg_id TEXT,
        sheet_number TEXT,
        sheet_sl_no TEXT,
        family_member_sl_no TEXT,
        division_id TEXT,
        district_id TEXT,
        upazila_id TEXT,
        union_id TEXT,
        vill_name TEXT,
        name TEXT,
        mobile_no TEXT,
        gender TEXT,
        guardian TEXT,
        guardian_name TEXT,
        age TEXT,
        education TEXT,
        marital_status TEXT,
        occupation TEXT,
        destitute_vulnerable TEXT,
        hhs_head TEXT,
        total_land TEXT,
        agriculture_land TEXT,
        homestead_land TEXT,
        total_pond TEXT,
        pond_area TEXT,
        fish_culture TEXT,
        wet_land_area TEXT,
        total_cow TEXT,
        total_goat TEXT,
        total_poultry TEXT,
        monthly_expenditure TEXT,
        monthly_income TEXT,
        co_operative_m TEXT,
        co_operative_name TEXT,
        ngo_member TEXT,
        ngo_name TEXT,
        iga TEXT,
        training TEXT,
        drinking_water_source TEXT,
        tested TEXT,
        sanitation_status TEXT,
        total_irrigable_area TEXT,
        low_lift TEXT,
        low_lift_area TEXT,
        shallow_pump TEXT,
        shallow_pump_area TEXT,
        remarks TEXT,
        description TEXT,
        serial TEXT,
        is_active TEXT,
        status_id TEXT,
        created_by TEXT,
        updated_by TEXT,
        created_at TEXT,
        updated_at TEXT,
        hhs_number TEXT
      )`,
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.error('Error creating table: ', error);
      },
    );
  });
};

const insertData = data => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO household_survey (
        sub_project_id,
        wmg_id,
        sheet_number,
        sheet_sl_no,
        family_member_sl_no,
        division_id,
        district_id,
        upazila_id,
        union_id,
        vill_name,
        name,
        mobile_no,
        gender,
        guardian,
        guardian_name,
        age,
        education,
        marital_status,
        occupation,
        destitute_vulnerable,
        hhs_head,
        total_land,
        agriculture_land,
        homestead_land,
        total_pond,
        pond_area,
        fish_culture,
        wet_land_area,
        total_cow,
        total_goat,
        total_poultry,
        monthly_expenditure,
        monthly_income,
        co_operative_m,
        co_operative_name,
        ngo_member,
        ngo_name,
        iga,
        training,
        drinking_water_source,
        tested,
        sanitation_status,
        total_irrigable_area,
        low_lift,
        low_lift_area,
        shallow_pump,
        shallow_pump_area,
        remarks,
        description,
        serial,
        is_active,
        status_id,
        created_by,
        updated_by,
        created_at,
        updated_at,
        hhs_number
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.sub_project_id,
        data.wmg_id,
        data.sheet_number,
        data.sheet_sl_no,
        data.family_member_sl_no,
        data.division_id,
        data.district_id,
        data.upazila_id,
        data.union_id,
        data.vill_name,
        data.name,
        data.mobile_no,
        data.gender,
        data.guardian,
        data.guardian_name,
        data.age,
        data.education,
        data.marital_status,
        data.occupation,
        data.destitute_vulnerable,
        data.hhs_head,
        data.total_land,
        data.agriculture_land,
        data.homestead_land,
        data.total_pond,
        data.pond_area,
        data.fish_culture,
        data.wet_land_area,
        data.total_cow,
        data.total_goat,
        data.total_poultry,
        data.monthly_expenditure,
        data.monthly_income,
        data.co_operative_m,
        data.co_operative_name,
        data.ngo_member,
        data.ngo_name,
        data.iga,
        data.training,
        data.drinking_water_source,
        data.tested,
        data.sanitation_status,
        data.total_irrigable_area,
        data.low_lift,
        data.low_lift_area,
        data.shallow_pump,
        data.shallow_pump_area,
        data.remarks,
        data.description,
        data.serial,
        data.is_active,
        data.status_id,
        data.created_by,
        data.updated_by,
        data.created_at,
        data.updated_at,
        data.hhs_number,
      ],
      () => {
        console.log('Data inserted successfully');
      },
      error => {
        console.error('Error inserting data: ', error);
      },
    );
  });
};

const retrieveData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM household_survey',
        [],
        (_, {rows}) => {
          const fetchedData = [];
          for (let i = 0; i < rows.length; i++) {
            fetchedData.push(rows.item(i));
          }
          resolve(fetchedData);
        },
        error => {
          console.error('Error fetching data from database: ', error);
          reject(error);
        },
      );
    });
  });
};

export {createTable, insertData, retrieveData};
