import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker'; // Import necessary types and functions
import Icon from 'react-native-vector-icons/Ionicons';

const HouseholdSurveyEntry = () => {
  const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);
  const [showEnrollmentDatePicker, setShowEnrollmentDatePicker] =
    useState(false);
  const [showResignDatePicker, setShowResignDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleUploadImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo', // Set media type to photo
      quality: 0.5, // Set image quality
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.assets && response.assets.length > 0) {
        const fileName = response.assets[0].fileName;
        if (fileName) {
          setSelectedImage(fileName);
        } else {
          console.log('File name not found in the response');
        }
      } else {
        console.log('No assets found in the response');
      }
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (
    dateType: string,
    selectedDate: Date | undefined,
  ) => {
    switch (dateType) {
      case 'birth':
        setShowBirthDatePicker(false);
        if (selectedDate) {
          const formattedDate = `${
            selectedDate.getMonth() + 1
          }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
          handleInputChange('birth_date', formattedDate);
        }
        break;
      case 'enrollment':
        setShowEnrollmentDatePicker(false);
        if (selectedDate) {
          const formattedDate = `${
            selectedDate.getMonth() + 1
          }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
          handleInputChange('enroll_date', formattedDate);
        }
        break;
      case 'resignation':
        setShowResignDatePicker(false);
        if (selectedDate) {
          const formattedDate = `${
            selectedDate.getMonth() + 1
          }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
          handleInputChange('resign_date', formattedDate);
        }
        break;
      default:
        break;
    }
  };

  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    fathers_name: '',
    mothers_name: '',
    profession: '',
    land_area: '',
    division_id: '',
    district_id: '',
    upazila_id: '',
    union_id: '',
    post_office: '',
    village: '',
    gender: '',
    birth_date: '',
    religion: '',
    enroll_date: '',
    resign_date: '',
    nid: '',
    nominee_name: '',
    relation_with_nominee: '',
    nationality: '',
    cell_phone: '',
    address: '',
    share_bdt: '',
    enroll_fee: '',
  });

  const handleSubmit = () => {
    if (
      formData.name &&
       formData.fathers_name
      // &&
      // formData.mothers_name &&
      // formData.profession &&
      // formData.land_area &&
      // formData.division_id &&
      // formData.district_id &&
      // formData.upazila_id &&
      // formData.union_id &&
      // formData.post_office &&
      // formData.village &&
      // formData.gender &&
      // formData.birth_date &&
      // formData.religion &&
      // formData.enroll_date &&
      // formData.resign_date &&
      // formData.nid &&
      // formData.nominee_name &&
      // formData.relation_with_nominee &&
      // formData.nationality &&
      // formData.cell_phone &&
      // formData.address &&
      // formData.share_bdt &&
      // formData.enroll_fee &&
      // selectedImage
    ) {
      console.log('Form submitted successfully:', formData);
      navigation.navigate('WMGMemberList' as never);
    } else {
      Alert.alert('Please fill out all required fields.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Member name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={text => handleInputChange('name', text)}
            placeholder="Enter Member Name"
          />
        </View>
      </View>
      {/* Father's / Husband Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Father's / Husband Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.fathers_name}
            onChangeText={text => handleInputChange('fathers_name', text)}
            placeholder="Enter Father's / Husband Name"
          />
        </View>
      </View>
      {/* Mother's Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Mother's Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.mothers_name}
            onChangeText={text => handleInputChange('mothers_name', text)}
            placeholder="Enter Mother's Name"
          />
        </View>
      </View>
      {/* Profession */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Profession<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.profession}
            onChangeText={text => handleInputChange('profession', text)}
            placeholder="Enter Profession"
          />
        </View>
      </View>
      {/* Agriculture Land / Fisheries Pond Area */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Agriculture Land / Fisheries Pond Area
          <Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.land_area}
            onChangeText={text => handleInputChange('land_area', text)}
            keyboardType="numeric"
            placeholder="Enter Agriculture Land"
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
      {/* Post Office Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Post Office Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.post_office}
            onChangeText={text => handleInputChange('post_office', text)}
            placeholder="Enter Post Office Name"
          />
        </View>
      </View>
      {/* Village name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Village Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.village}
            onChangeText={text => handleInputChange('village', text)}
            placeholder="Enter Village Name"
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
      {/* Date of Birth */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Date of Birth<Text style={styles.require}>* </Text>:
        </Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShowBirthDatePicker(true)}>
          <TextInput
            style={[
              styles.input,
              {color: formData.birth_date ? '#000' : '#aaa'},
            ]}
            value={formData.birth_date || 'Enter Date Of Birth'}
            editable={false}
            placeholderTextColor="#aaa"
            placeholder="Enter Date Of Birth"
          />
          <Icon
            name="calendar"
            size={24}
            color="#000"
            style={styles.calendarIcon}
          />    
        </TouchableOpacity>
        {showBirthDatePicker && (
          <DateTimePicker
            value={new Date()} // Start with current date
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('birth', date)}
          />
        )}
      </View>
      {/*  Religion */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Religion<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={formData.religion}
            onValueChange={itemValue =>
              handleInputChange('religion', itemValue)
            }>
            <Picker.Item label="Select Here" value="" />
            <Picker.Item label="Islam" value="Islam" />
            <Picker.Item label="Hindu" value="Hindu" />
            <Picker.Item label="Christian" value="Christian" />
            <Picker.Item label="Buddha" value="Buddha" />
            <Picker.Item label="Others" value="Others" />
          </Picker>
        </View>
      </View>
      {/* Enrollment Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Enrollment Date<Text style={styles.require}>* </Text>:
        </Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShowEnrollmentDatePicker(true)}>
          <TextInput
            style={[
              styles.input,
              {color: formData.enroll_date ? '#000' : '#aaa'},
            ]}
            value={formData.enroll_date || 'Enter Enrollment Date'}
            editable={false}
            placeholderTextColor="#aaa"
            placeholder="Enter Enrollment Date"
          />
          <Icon
            name="calendar"
            size={24}
            color="#000"
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
        {showEnrollmentDatePicker && (
          <DateTimePicker
            value={new Date()} // Start with current date
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('enrollment', date)}
          />
        )}
      </View>
      {/* Resignation Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Resignation Date<Text style={styles.require}>* </Text>:
        </Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setShowResignDatePicker(true)}>
          <TextInput
            style={[
              styles.input,
              {color: formData.resign_date ? '#000' : '#aaa'},
            ]}
            value={formData.resign_date || 'Enter Resign Date'}
            editable={false}
            placeholderTextColor="#aaa"
            placeholder="Enter Resignation Date"
          />
          <Icon
            name="calendar"
            size={24}
            color="#000"
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
        {showResignDatePicker && (
          <DateTimePicker
            value={new Date()} // Start with current date
            mode="date"
            display="default"
            onChange={(event, date) => handleDateChange('resignation', date)}
          />
        )}
      </View>
      {/* NID */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          NID<Text style={styles.require}>* </Text>:
        </Text>
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
      {/* Nominee Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Nominee Name<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.nominee_name}
            onChangeText={text => handleInputChange('nominee_name', text)}
            placeholder="Enter Nominee Name"
          />
        </View>
      </View>
      {/* Relation with Nominee */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Relation with Nominee<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.relation_with_nominee}
            onChangeText={text =>
              handleInputChange('relation_with_nominee', text)
            }
            placeholder="Enter Relation with Nominee"
          />
        </View>
      </View>
      {/* Nationality */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Nationality<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.nationality}
            onChangeText={text => handleInputChange('nationality', text)}
            placeholder="Enter Nationality"
          />
        </View>
      </View>
      {/* Mobile Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Mobile Number<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.cell_phone}
            onChangeText={text => handleInputChange('cell_phone', text)}
            keyboardType="numeric"
            placeholder="Enter Mobile Number"
          />
        </View>
      </View>
      {/* Address */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Address<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.address}
            onChangeText={text => handleInputChange('address', text)}
            placeholder="Enter Address"
          />
        </View>
      </View>
      {/* Share (BDT) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Share (BDT)<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.share_bdt}
            onChangeText={text => handleInputChange('share_bdt', text)}
            keyboardType="numeric"
            placeholder="Enter Share (BDT)"
          />
        </View>
      </View>
      {/* Enrollment Fee (BDT) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Enrollment Fee (BDT)<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formData.enroll_fee}
            onChangeText={text => handleInputChange('enroll_fee', text)}
            keyboardType="numeric"
            placeholder="Enter Enrollment Fee (BDT)"
          />
        </View>
      </View>
      {/* Member Photo  */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Member Photo<Text style={styles.require}>* </Text>:
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.button} onPress={handleUploadImage}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <Text style={styles.selectedImageText}>
            {selectedImage ? selectedImage : 'No image selected'}
          </Text>
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
  // Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
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
    color: 'red',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
  },
  calendarIcon: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
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
  selectedImageText: {
    flex: 1,
    color: 'black',
    marginLeft: 10,
  },
});

export default HouseholdSurveyEntry;
