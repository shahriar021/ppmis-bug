import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const HouseholdSurveyDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Occupation:</Text>
          <Text style={styles.value}>Farmer</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Housing type:</Text>
          <Text style={styles.value}>Concrete Roof</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>TV or Fridge?:</Text>
          <Text style={styles.value}>TV</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Destitute/Vulnerable?:</Text>
          <Text style={styles.value}>Yes</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40, // Extra padding to ensure content doesn't get cut off by navigation bar
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light grey border color
    paddingBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: '#333', // Dark grey color
  },
  value: {
    flex: 1,
    color: '#666', // Light grey color
  },
});

export default HouseholdSurveyDetails;
