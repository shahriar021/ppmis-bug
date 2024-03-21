import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define the WMGCapActivities component
const WMGCapActivities = () => {
  // Define an array of WMG Cap Activities data
  const capActivities = [
    {
      capActivityName: 'Project X',
      totalMember: 20,
      timePeriod: '2024 Q1',
      area: 'Technology',
      startingDate: '2024-01-15',
      production: 'High',
      totalInvest: '$5000',
      returnAmount: '$7000',
      profitLoss: '$2000',
    },
    {
      capActivityName: 'Project Y',
      totalMember: 15,
      timePeriod: '2024 Q2',
      area: 'Marketing',
      startingDate: '2024-04-05',
      production: 'Medium',
      totalInvest: '$3000',
      returnAmount: '$4500',
      profitLoss: '$1500',
    },
    // Add more cap activity data as needed
  ];

  // Render the component
  return (
    <View style={styles.container}>
      {/* Map through the array of cap activities and render each activity */}
      {capActivities.map((activity, index) => (
        <View key={index} style={styles.capActivityContainer}>
          {/* Display the name of the cap activity */}
          <Text style={styles.title}>{activity.capActivityName}</Text>
          {/* Display details of the cap activity */}
          <View style={styles.detailsContainer}>
            <View style={styles.column}>
              <Text style={styles.label}>Total Member:</Text>
              <Text>{activity.totalMember}</Text>
              <Text style={styles.label}>Time Period:</Text>
              <Text>{activity.timePeriod}</Text>
              <Text style={styles.label}>Area:</Text>
              <Text>{activity.area}</Text>
              <Text style={styles.label}>Starting Date:</Text>
              <Text>{activity.startingDate}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Production:</Text>
              <Text>{activity.production}</Text>
              <Text style={styles.label}>Total Invest:</Text>
              <Text>{activity.totalInvest}</Text>
              <Text style={styles.label}>Return Amount:</Text>
              <Text>{activity.returnAmount}</Text>
              <Text style={styles.label}>Profit & Loss:</Text>
              <Text>{activity.profitLoss}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  capActivityContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#666',
  },
});

// Export the WMGCapActivities component
export default WMGCapActivities;
