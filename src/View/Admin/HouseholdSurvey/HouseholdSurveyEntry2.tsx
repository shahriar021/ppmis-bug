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

const HouseholdInformation2 = () => {

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Check if all required fields are filled out
    if (1) {
      // All required fields are filled out, proceed with form submission logic
      console.log('Form submitted successfully:', formData);
      navigation.navigate('HouseholdSurveyEntry3' as never);
      // Here you can proceed with further logic such as API calls or navigation
    } else {
      // At least one required field is missing, display an error message or handle it accordingly
      Alert.alert('Please fill out all required fields.');
      // You can also set an error state to display a message to the user
    }
  };

  const [formData, setFormData] = useState({
    total_poultry: '',
    avg_monthly_income: '',
    avg_monthly_expenditure: '',
    co_operative_m: '',
    co_operative_name: '',
    ngo_member: '',
    ngo_name: '',
    iga: '',
    training: '',
    drinking_water_source: '',
    tested: '',
    sanitation_status: '',
    users: '',
    total_llp_area: '',
    total_stw_area: '',
    total_dtw_area: '',
    total_irrigable_area: '',
    women_problem: '',
    suggestions: '',
    tree_plantation: '',
    common_diseases: '',
  });

  return (
    <ScrollView style={styles.container}>
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

      {/* Avg. Monthly Income */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Avg. Monthly Income:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.avg_monthly_income}
            onChangeText={text => handleInputChange('avg_monthly_income', text)}
            keyboardType="numeric"
            placeholder="Enter Avg. Monthly Income"
          />
        </View>
      </View>

      {/* Avg. Monthly Expenditure */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Avg. Monthly Expenditure:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.avg_monthly_expenditure}
            onChangeText={text =>
              handleInputChange('avg_monthly_expenditure', text)
            }
            keyboardType="numeric"
            placeholder="Enter Avg. Co-Operative Member"
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
        <Text style={styles.label}>Water Quality Tested(TW)?</Text>
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

      {/*  Arsenic Present(TW)? */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Arsenic Present(TW):</Text>
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

      {/* No. of Users */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. of Users:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.users}
            onChangeText={text => handleInputChange('users', text)}
            keyboardType="numeric"
            placeholder="Enter No. of Users"
          />
        </View>
      </View>

      {/* Total LLP land areas(dec) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total LLP land areas(dec):</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_llp_area}
            onChangeText={text => handleInputChange('total_llp_area', text)}
            keyboardType="numeric"
            placeholder="Enter Total LLP land areas(dec)"
          />
        </View>
      </View>

      {/* Total STW land areas(dec) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total STW land areas(dec):</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_stw_area}
            onChangeText={text => handleInputChange('total_stw_area', text)}
            keyboardType="numeric"
            placeholder="Enter Total STW land areas(dec)"
          />
        </View>
      </View>

      {/* Total DTW land areas(dec) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total DTW land areas(dec):</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.total_dtw_area}
            onChangeText={text => handleInputChange('total_dtw_area', text)}
            keyboardType="numeric"
            placeholder="Enter Total DTW land areas(dec)"
          />
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

      {/* Women problems in this area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Women problems in this area:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.women_problem}
            onValueChange={itemValue =>
              handleInputChange('women_problem', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label=" Child Marriage" value="CM" />
            <Picker.Item label=" Dowry" value="D" />
          </Picker>
        </View>
      </View>

      {/* Suggestions any */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Suggestions any:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.suggestions}
            onChangeText={text => handleInputChange('suggestions', text)}
            placeholder="Enter Suggestions"
          />
        </View>
      </View>

      {/* Trees plantations */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Trees plantations:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.tree_plantation}
            onValueChange={itemValue =>
              handleInputChange('tree_plantation', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Mango" value="mango" />
            <Picker.Item label="Dowry" value="D" />
          </Picker>
        </View>
      </View>
      {/* Common Diseases in Children */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Common Diseases in Children:</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.common_diseases}
            onValueChange={itemValue =>
              handleInputChange('common_diseases', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Flue" value="flue" />
            <Picker.Item label="Cold" value="cold" />
          </Picker>
        </View>
      </View>

      {/* Submit button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('HouseholdSurveyEntry' as never);
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
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

export default HouseholdInformation2;
