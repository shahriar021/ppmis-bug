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

const HouseholdInformation3 = () => {

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
      Alert.alert('Form submitted successfully!');
      navigation.navigate('HouseholdSurveyList' as never);
      // Here you can proceed with further logic such as API calls or navigation
    } else {
      // At least one required field is missing, display an error message or handle it accordingly
      Alert.alert('Please fill out all required fields.');
      // You can also set an error state to display a message to the user
    }
  };

  const [formData, setFormData] = useState({
    common_diseases_female: '',
    common_diseases_male: '',
    remarks: '',
    nid: '',
    village: '',
  });

  return (
    <ScrollView style={styles.container}>
      {/* Common Diseases in Female  */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Common Diseases in Female :</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.common_diseases_female}
            onValueChange={itemValue =>
              handleInputChange('common_diseases_female', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Flue" value="flue" />
            <Picker.Item label="Cold" value="cold" />
          </Picker>
        </View>
      </View>

      {/* Common Diseases in male  */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Common Diseases in Male :</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.common_diseases_male}
            onValueChange={itemValue =>
              handleInputChange('common_diseases_male', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Flue" value="flue" />
            <Picker.Item label="Cold" value="cold" />
          </Picker>
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

      {/* NID */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>NID:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.nid}
            onChangeText={text => handleInputChange('nid', text)}
            keyboardType="numeric"
            placeholder="Enter NID Number"
          />
        </View>
      </View>

      {/* Submit button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HouseholdSurveyEntry2' as never)}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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

export default HouseholdInformation3;
