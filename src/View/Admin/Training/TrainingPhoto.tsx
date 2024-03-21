import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker'; // Import image picker library

const TrainingPhotoUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]); // State to store selected images

  // Function to handle image upload
const handleUploadImage = () => {
    launchImageLibrary({mediaType: 'photo', multiple: true}, response => {
        if (!response.didCancel) {
            setSelectedImages([...selectedImages, ...response.assets]); // Add selected images to the list
        }
    });
};

// Function to remove selected image
const removeSelectedImage = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
};

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Training Photos:
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleUploadImage}>
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Display selected images */}
      <FlatList
        data={selectedImages}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.imageContainer}>
            <Image source={{uri: item.uri}} style={styles.image} />
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeSelectedImage(index)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TrainingPhotoUpload;

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    marginRight: 10,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
