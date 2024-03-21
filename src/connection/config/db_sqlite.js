import { api_token, api_url } from '@env';
import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened'),
  error => console.error('Error opening database', error),
);

export const initDatabase = () => {
  database.transaction(tx => {
    tx.executeSql('DROP TABLE IF EXISTS household_survey_list', []);

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS household_survey_list (
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
          reamrks TEXT,
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
      (_, resultSet) =>
        console.log('household_survey_list table created successfully', resultSet),
      (_, error) => console.error('Error creating household_survey_list  table', error),
    );
  });
};


// api fetch(`${api_url}/wmg-hhs?api_token=${api_token}`)
export const insertHHSListAPI = () => {
  fetch(`${api_url}/wmg-hhs?api_token=${api_token}`)
  .then(response => response.json())
  .then(data => {
    database.transaction(tx => {

    data.forEach(household => {
      const values = [
        household.sub_project_id || null,
        household.wmg_id || null,
        household.sheet_number || null,
        household.sheet_sl_no || null,
        household.family_member_sl_no || null,
        household.division_id || null,
        household.district_id || null,
        household.upazila_id || null,
        household.union_id || null,
        household.vill_name || null,
        household.name || null,
        household.mobile_no || null,
        household.gender || null,
        household.guardian || null,
        household.guardian_name || null,
        household.age || null,
        household.education || null,
        household.marital_status || null,
        household.occupation || null,
        household.destitute_vulnerable || null,
        household.hhs_head || null,
        household.total_land || null,
        household.agriculture_land || null,
        household.homestead_land || null,
        household.total_pond || null,
        household.pond_area || null,
        household.fish_culture || null,
        household.wet_land_area || null,
        household.total_cow || null,
        household.total_goat || null,
        household.total_poultry || null,
        household.monthly_expenditure || null,
        household.monthly_income || null, 
        household.co_operative_m || null,
        household.co_operative_name || null,
        household.ngo_member || null,
        household.ngo_name || null,
        household.iga || null,
        household.training || null,
        household.drinking_water_source || null,
        household.tested || null,
        household.sanitation_status || null,
        household.total_irrigable_area || null,
        household.low_lift || null,
        household.low_lift_area || null,
        household.shallow_pump || null,
        household.shallow_pump_area || null,
        household.reamrks || null,
        household.description || null,
        household.serial || null,
        household.is_active || null,
        household.status_id || null,
        household.created_by || null,
        household.updated_by || null, 
        household.created_at || null,
        household.updated_at || null,
        household.hhs_number || null
      ];

      const sql = `
        INSERT INTO household_survey_list (
          sub_project_id, wmg_id, sheet_number, sheet_sl_no, family_member_sl_no,
          division_id, district_id, upazila_id, union_id, vill_name, name,
          mobile_no, gender, guardian, guardian_name, age, education, marital_status,
          occupation, destitute_vulnerable, hhs_head, total_land, agriculture_land,
          homestead_land, total_pond, pond_area, fish_culture, wet_land_area,
          total_cow, total_goat, total_poultry, monthly_expenditure, monthly_income,
          co_operative_m, co_operative_name, ngo_member, ngo_name, iga, training,
          drinking_water_source, tested, sanitation_status, total_irrigable_area,
          low_lift, low_lift_area, shallow_pump, shallow_pump_area, reamrks,
          description, serial, is_active, status_id, created_by, updated_by,
          created_at, updated_at, hhs_number
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      tx.executeSql(
        sql,
        values,
        (_, resultSet) =>
          console.log('Household inserted successfully', resultSet),
        (_, error) =>
          console.error('Error inserting household ', error, household)
      );
    });
  });
  })
  .catch(error => console.error('Error fetching data from API', error));
};

export const fetchHHSListAPI = successCallback => {
  database.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM household_survey_list',
      [],
      (_, resultSet) => {
        const HHSListData = [];
        for (let i = 0; i < resultSet.rows.length; i++) {
          const householdlist = resultSet.rows.item(i);
          HHSListData.push(householdlist);
        }
        successCallback(HHSListData);
      },
      (_, error) => {
        console.error('Error querying household list data', error);
        successCallback([]);
      },
    );
  });
};