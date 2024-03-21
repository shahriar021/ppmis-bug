import {api_token, api_url} from '@env';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
// import {
//   fetchHHSListAPI,
//   initDatabase,
//   insertHHSListAPI,
// } from '../../../connection/config/db_sqlite';

// initDatabase();
// insertHHSListAPI();

const HouseholdSurveyList = () => {
  const navigation = useNavigation();
  const [households, setHouseholds] = useState<any[]>([]);

  // useEffect(() => {
  //   fetchHHSListAPI((data: any[]) => {
  //     setHouseholds(data);
  //   });
  // }, []);

  useEffect(() => {
    fetch(`${api_url}/wmg-hhs?api_token=${api_token}`)
      .then(response => response.json())
      .then(data => {
        setHouseholds(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, styles.idCell]}>ID</Text>
          {/* <Text style={styles.headerText}>NID</Text> */}
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Village</Text>
          <Text style={[styles.headerText, styles.actionHeaderCell]}>
            Actions
          </Text>
        </View>
        {/* Table Data */}
        {households.map(household => (
          <View key={household.id} style={styles.tableRow}>
            <Text style={[styles.cell, styles.idCell]}>{household.id}</Text>
            {/* <Text style={styles.cell}>{household.nid}</Text> */}
            <Text style={styles.cell}>{household.name}</Text>
            <Text style={styles.cell}>{household.vill_name}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {
                  // navigation here
                  navigation.navigate('HouseholdSurveyDetails' as never);
                }}>
                <Icon name="eye-outline" size={24} color="#007bff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="create-outline" size={24} color="#007bff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  idCell: {
    flex: 0.4,
  },
  cell: {
    flex: 1.4,
    color: '#333',
    textAlign: 'left',
    marginHorizontal: 2,
  },
  actionHeaderCell: {
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  actionButton: {
    paddingHorizontal: 5,
  },
});

export default HouseholdSurveyList;
