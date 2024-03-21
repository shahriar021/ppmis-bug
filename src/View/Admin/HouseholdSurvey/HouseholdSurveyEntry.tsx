import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const HouseholdSurveyEntry = () => {
  
  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    bwdb_zone: '',
    bwdb_circle: '',
    bwdb_division: '',
    sub_project: '',
    wmf: '',
    wma: '',
    wmg: '',
    member_number: '',
    sheet_number: '',
    sheet_sl_no: '',
    family_member_sl_no: '',
    division_id: '',
    district_id: '',
    upazila_id: '',
    union_id: '',
    vill_name: '',
    name: '',
    mobile_no: '',
    gender: '',
    guardian_name: '',
    age: '',
    education: '',
    marital_status: '',
    occupation: '',
    destitute_vulnerable: '',
    hhs_head: '',
    total_land: '',
    agriculture_land: '',
    homestead_land: '',
    total_pond: '',
    pond_area: '',
    fish_culture: '',
    wet_land_area: '',
    total_cow: '',
    total_goat: '',
    total_poultry: '',
    monthly_expenditure: '',
    monthly_income: '',
    co_operative_m: '',
    co_operative_name: '',
    ngo_member: '',
    ngo_name: '',
    iga: '',
    training: '',
    drinking_water_source: '',
    tested: '',
    sanitation_status: '',
    total_irrigable_area: '',
    low_lift: '',
    low_lift_area: '',
    shallow_pump: '',
    shallow_pump_area: '',
    remarks: '',
    is_active: '',
  });

  const handleSubmit = () => {
    // Check if all required fields are filled out
    if (
      formData.bwdb_zone &&
      formData.bwdb_circle &&
      formData.bwdb_division &&
      formData.sub_project &&
      formData.wmf &&
      formData.wma &&
      formData.wmg &&
      formData.division_id &&
      formData.district_id &&
      formData.upazila_id &&
      formData.union_id &&
      formData.gender
    ) {
      // All required fields are filled out, proceed with form submission logic
      console.log('Form submitted successfully:', formData);
      navigation.navigate('HouseholdSurveyEntry2' as never);
      // Here you can proceed with further logic such as API calls or navigation
    } else {
      // At least one required field is missing, display an error message or handle it accordingly
      Alert.alert('Please fill out all required fields.');
      // You can also set an error state to display a message to the user
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* BWDB Zone Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          BWDB Zone Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.bwdb_zone}
            onValueChange={itemValue =>
              handleInputChange('bwdb_zone', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Zone 1" value="zone1" />
            <Picker.Item label="Zone 2" value="zone2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* BWDB Circle Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          BWDB Circle Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.bwdb_circle}
            onValueChange={itemValue =>
              handleInputChange('bwdb_circle', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Circle 1" value="circle1" />
            <Picker.Item label="Circle 2" value="circle2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* BWDB Division Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          BWDB Division Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.bwdb_division}
            onValueChange={itemValue =>
              handleInputChange('bwdb_division', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Division 1" value="division1" />
            <Picker.Item label="Division 2" value="division2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* sub_project */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Sub Project<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.sub_project}
            onValueChange={itemValue =>
              handleInputChange('sub_project', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Project 1" value="project1" />
            <Picker.Item label="Project 2" value="project2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* WMF Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          WMF Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.wmf}
            onValueChange={itemValue => handleInputChange('wmf', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Name 1" value="name1" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* WMA Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          WMA Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.wma}
            onValueChange={itemValue => handleInputChange('wma', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Name 1" value="name1" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* WMG Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          WMG Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.wmg}
            onValueChange={itemValue => handleInputChange('wmg', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Name 1" value="name1" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* Member Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Member Number:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.member_number}
            onChangeText={text => handleInputChange('member_number', text)}
            keyboardType="numeric"
            placeholder="Enter Member Number"
          />
        </View>
      </View>
      {/* Sheet Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sheet Number:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.sheet_number}
            onChangeText={text => handleInputChange('sheet_number', text)}
            keyboardType="numeric"
            placeholder="Enter Sheet Number"
          />
        </View>
      </View>
      {/* Sheet Serial No */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Sheet Serial No:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.sheet_sl_no}
            onChangeText={text => handleInputChange('sheet_sl_no', text)}
            keyboardType="numeric"
            placeholder="Enter Sheet Serial No"
          />
        </View>
      </View>
      {/* Family Member Serial No */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Family Member Serial No:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.family_member_sl_no}
            onChangeText={text =>
              handleInputChange('family_member_sl_no', text)
            }
            keyboardType="numeric"
            placeholder="Enter Family Member Serial No"
          />
        </View>
      </View>
      {/* Division Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Division Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.division_id}
            onValueChange={itemValue =>
              handleInputChange('division_id', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Division 1" value="division1" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* District Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          District Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.district_id}
            onValueChange={itemValue =>
              handleInputChange('district_id', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="District 1" value="district1" />
            <Picker.Item label="District 2" value="district2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/*  Upazila Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Upazila Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.upazila_id}
            onValueChange={itemValue =>
              handleInputChange('upazila_id', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Upazila 1" value="Upazila1" />
            <Picker.Item label=" Upazila 2" value="Upazila2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/*  Municipality / Union Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Municipality / Union Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.union_id}
            onValueChange={itemValue =>
              handleInputChange('union_id', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Union 1" value="union1" />
            <Picker.Item label="Union 2" value="union2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
      </View>
      {/* Village name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Village Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.vill_name}
            onChangeText={text => handleInputChange('vill_name', text)}
            placeholder="Enter Village Name"
          />
        </View>
      </View>
      {/* Member name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Member Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={text => handleInputChange('name', text)}
            placeholder="Enter Member Name"
          />
        </View>
      </View>
      {/* Mobile No */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mobile No:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.mobile_no}
            onChangeText={text => handleInputChange('mobile_no', text)}
            keyboardType="numeric"
            placeholder="Enter Mobile No"
          />
        </View>
      </View>
      {/*  Gender */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Gender<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.gender}
            onValueChange={itemValue => handleInputChange('gender', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Male" value="male" />
            <Picker.Item label=" Female" value="female" />
            <Picker.Item label=" Other" value="other" />
          </Picker>
        </View>
      </View>
      {/* Guardian name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Guardian Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.guardian_name}
            onChangeText={text => handleInputChange('guardian_name', text)}
            placeholder="Enter Guardian Name"
          />
        </View>
      </View>
      {/* Age */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.age}
            onChangeText={text => handleInputChange('age', text)}
            keyboardType="numeric"
            placeholder="Enter Age"
          />
        </View>
      </View>
      {/*  Education */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Education:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.education}
            onValueChange={itemValue =>
              handleInputChange('education', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" PhD" value="PhD" />
            <Picker.Item label=" Masters" value="Masters" />
            <Picker.Item label=" Honours" value="Honours" />
            <Picker.Item label=" HSC" value="HSC" />
            <Picker.Item label=" SSC" value="SSC" />
            <Picker.Item
              label=" Class Eight or Below"
              value="Class Eight or Below"
            />
          </Picker>
        </View>
      </View>
      {/*  Marital Status */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Marital Status:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.marital_status}
            onValueChange={itemValue =>
              handleInputChange('marital_status', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Single" value="Single" />
            <Picker.Item label=" Married" value="Married" />
            <Picker.Item label=" Divorced" value="Divorced" />
          </Picker>
        </View>
      </View>
      {/* Occupation */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Occupation:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.occupation}
            onChangeText={text => handleInputChange('occupation', text)}
            placeholder="Enter Occupation"
          />
        </View>
      </View>
      {/*  Destitute/Vulnerable? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Destitute/Vulnerable:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.destitute_vulnerable}
            onValueChange={itemValue =>
              handleInputChange('destitute_vulnerable', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Yes" value="1" />
            <Picker.Item label=" No" value="0" />
          </Picker>
        </View>
      </View>
      {/*  HHS Head? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>HHS Head:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.hhs_head}
            onValueChange={itemValue =>
              handleInputChange('hhs_head', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Yes" value="1" />
            <Picker.Item label=" No" value="0" />
          </Picker>
        </View>
      </View>
      {/* Total Land in decimals */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total Land in decimals:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_land}
            onChangeText={text => handleInputChange('total_land', text)}
            keyboardType="numeric"
            placeholder="Enter Total Land in decimals"
          />
        </View>
      </View>
      {/* Agriculture Land */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Agriculture Land:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.agriculture_land}
            onChangeText={text => handleInputChange('agriculture_land', text)}
            keyboardType="numeric"
            placeholder="Enter Agriculture Land"
          />
        </View>
      </View>
      {/* Homestead Land */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Homestead Land:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.homestead_land}
            onChangeText={text => handleInputChange('homestead_land', text)}
            keyboardType="numeric"
            placeholder="Enter Homestead Land"
          />
        </View>
      </View>
      {/* No. of Ponds */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. of Ponds:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_pond}
            onChangeText={text => handleInputChange('total_pond', text)}
            keyboardType="numeric"
            placeholder="Enter No. of Ponds"
          />
        </View>
      </View>
      {/* Total Yield in ponds */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total Yield in ponds:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.pond_area}
            onChangeText={text => handleInputChange('pond_area', text)}
            keyboardType="numeric"
            placeholder="Enter Total Yield in ponds"
          />
        </View>
      </View>
      {/* Fish Culture Type */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fish Culture Type:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.fish_culture}
            onValueChange={itemValue =>
              handleInputChange('fish_culture', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" M" value="1" />
            <Picker.Item label=" P" value="0" />
          </Picker>
        </View>
      </View>
      {/* Wet Land Area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Wet Land Area:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.wet_land_area}
            onChangeText={text => handleInputChange('wet_land_area', text)}
            keyboardType="numeric"
            placeholder="Enter Wet Land Area"
          />
        </View>
      </View>
      {/* No. of Cows */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. of Cows:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_cow}
            onChangeText={text => handleInputChange('total_cow', text)}
            keyboardType="numeric"
            placeholder="Enter No. of Cows"
          />
        </View>
      </View>
      {/* No. of Goats */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. of Goats:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_goat}
            onChangeText={text => handleInputChange('total_goat', text)}
            keyboardType="numeric"
            placeholder="Enter No. of Goats"
          />
        </View>
      </View>
      {/* No. of Poultry */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. of Poultry:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_poultry}
            onChangeText={text => handleInputChange('total_poultry', text)}
            keyboardType="numeric"
            placeholder="Enter No. of Poultry"
          />
        </View>
      </View>
      {/* Monthly Expenditure */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Monthly Expenditure:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.monthly_expenditure}
            onChangeText={text =>
              handleInputChange('monthly_expenditure', text)
            }
            keyboardType="numeric"
            placeholder="Enter Monthly Expenditure"
          />
        </View>
      </View>
      {/* Monthly Income */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Monthly Income:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.monthly_income}
            onChangeText={text => handleInputChange('monthly_income', text)}
            keyboardType="numeric"
            placeholder="Enter Monthly Income"
          />
        </View>
      </View>
      {/* Co-Operative Member */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Co-Operative Member:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.co_operative_m}
            onChangeText={text => handleInputChange('co_operative_m', text)}
            keyboardType="numeric"
            placeholder="Enter Co-Operative Member"
          />
        </View>
      </View>
      {/* Co-Operative Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Co-Operative Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.co_operative_name}
            onChangeText={text => handleInputChange('co_operative_name', text)}
            placeholder="Enter Co-Operative Name"
          />
        </View>
      </View>
      {/*  NGO Member? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>NGO Member:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.ngo_member}
            onValueChange={itemValue =>
              handleInputChange('ngo_member', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Yes" value="1" />
            <Picker.Item label=" No" value="0" />
          </Picker>
        </View>
      </View>
      {/* NGO Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>NGO Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.ngo_name}
            onChangeText={text => handleInputChange('ngo_name', text)}
            placeholder="Enter NGO Name"
          />
        </View>
      </View>
      {/* IGA involvement? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>IGA Involvement:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.iga}
            onValueChange={itemValue => handleInputChange('iga', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Yes" value="1" />
            <Picker.Item label=" No" value="0" />
          </Picker>
        </View>
      </View>
      {/* Training Received */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Training Received on:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.training}
            onValueChange={itemValue =>
              handleInputChange('training', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Agri" value="Agri" />
            <Picker.Item label="Fishery" value="Fishery" />
          </Picker>
        </View>
      </View>
      {/*  Drinking Water Source */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Drinking Water Source:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.drinking_water_source}
            onValueChange={itemValue =>
              handleInputChange('drinking_water_source', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Pond" value="Pond" />
            <Picker.Item label="Tubewell" value="Tw" />
          </Picker>
        </View>
      </View>
      {/*  Water Quality tested(TW)? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Water Quality Tested(TW)?:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.tested}
            onValueChange={itemValue => handleInputChange('tested', itemValue)}>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Yes" value="1" />
            <Picker.Item label=" No" value="0" />
          </Picker>
        </View>
      </View>
      {/* Sanitation Type */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}> Sanitation Type:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.sanitation_status}
            onValueChange={itemValue =>
              handleInputChange('sanitation_status', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Kaccha" value="Kaccha" />
            <Picker.Item label=" Pucca" value="Pucca" />
          </Picker>
        </View>
      </View>
      {/* Total Irrigated areas(dec) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total Irrigated areas(dec):</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_irrigable_area}
            onChangeText={text =>
              handleInputChange('total_irrigable_area', text)
            }
            keyboardType="numeric"
            placeholder="Enter Total Irrigated areas(dec)"
          />
        </View>
      </View>
      {/* Low Lift */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Low Lift:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.low_lift}
            onValueChange={itemValue =>
              handleInputChange('low_lift', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="0" />
          </Picker>
        </View>
      </View>
      {/* Low Lift Area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Low Lift Area:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.low_lift_area}
            onChangeText={text => handleInputChange('low_lift_area', text)}
            keyboardType="numeric"
            placeholder="Enter Low Lift Area"
          />
        </View>
      </View>
      {/* Shallow Pump */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Shallow Pump:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.shallow_pump}
            onValueChange={itemValue =>
              handleInputChange('shallow_pump', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="0" />
          </Picker>
        </View>
      </View>
      {/* Shallow Pump Area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Shallow Pump Area:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.shallow_pump_area}
            onChangeText={text => handleInputChange('shallow_pump_area', text)}
            keyboardType="numeric"
            placeholder="Enter  Shallow Pump Area"
          />
        </View>
      </View>
      {/* Remarks */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Remarks:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.remarks}
            onChangeText={text => handleInputChange('remarks', text)}
            placeholder="Enter Remarks"
          />
        </View>
      </View>
      {/* Status */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Status:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.is_active}
            onValueChange={itemValue =>
              handleInputChange('is_active', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="0" />
          </Picker>
        </View>
      </View>

      {/* Submit button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    //marginBottom: 50,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    paddingHorizontal: 5,
    color: 'black',
    fontWeight: '500',
  },
  require: {
    color: 'red', // Red color for required text
    fontWeight: 'bold', // Bold style for required text
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    height: 45,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HouseholdSurveyEntry;
