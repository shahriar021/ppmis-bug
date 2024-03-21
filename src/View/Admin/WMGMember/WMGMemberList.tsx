import {api_token, api_url} from '@env';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const WMGMemberList = () => {
  // const wmgMembers = [
  //   {
  //     id: 1,
  //     name: 'Michael Smith',
  //     gender: 'Male',
  //     dob: '1990-05-15',
  //     registrationDate: '2023-01-10',
  //   },
  //   {
  //     id: 2,
  //     name: 'Emily Johnson',
  //     gender: 'Female',
  //     dob: '1985-08-22',
  //     registrationDate: '2023-02-05',
  //   },
  // ];

  const [wmgMembers, setWmgMembers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_url}/wmg-members?wmg_id=15&&api_token=${api_token}`)
      .then(response => response.json())
      .then(data => {
        setWmgMembers(data);
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
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Gender</Text>
          <Text style={styles.headerText}>DOB</Text>
          <Text style={styles.headerText}>Registration Date</Text>
        </View>
        {/* Table Data */}
        {wmgMembers.map(member => (
          <View key={member.id} style={styles.tableRow}>
            <Text style={styles.cell}>{member.name}</Text>
            <Text style={styles.cell}>{member.gender}</Text>
            <Text style={styles.cell}>{member.birth_date.split(' ')[0]}</Text>
            <Text style={styles.cell}>{member.resign_date.split(' ')[0]}</Text>
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
  cell: {
    flex: 1,
    color: '#333',
    textAlign: 'left',
    marginHorizontal: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
});

export default WMGMemberList;
