import {api_url, api_token} from '@env';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const WMGEquipmentList = () => {
  // const wmgEquipment = [
  //   {
  //     id: 1,
  //     equipmentName: 'Laptop',
  //     leaseTime: '12 months',
  //     beginningEndDate: '2023-01-15 to 2024-01-15',
  //     deedAmountReceiveAmount: '$1000 - $800',
  //     location: 'Building A, Room 101',
  //   },
  //   {
  //     id: 2,
  //     equipmentName: 'Projector',
  //     leaseTime: '6 months',
  //     beginningEndDate: '2023-03-10 to 2023-09-10',
  //     deedAmountReceiveAmount: '$500 - $400',
  //     location: 'Building B, Auditorium',
  //   },
  // ];

  const [wmgEquipment, setWmgEquipment] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_url}/wmg-eqp?wmg_id=15&&api_token=${api_token}`)
      .then(response => response.json())
      .then(data => {
        setWmgEquipment(data);
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
          <Text style={styles.headerText}>Item Name</Text>
          <Text style={styles.headerText}>Lease Time</Text>
          <Text style={styles.headerText}>Beginning & Ending Date</Text>
          <Text style={styles.headerText}>Deed & Receive Amount</Text>
          <Text style={styles.headerText}>Location</Text>
        </View>
        {/* Table Data */}
        {wmgEquipment.map((equipment) => (
          <View key={equipment.id} style={styles.tableRow}>
            <Text style={styles.cell}>{equipment.name}</Text>
            <Text style={styles.cell}>{equipment.date_of_purchased.split(' ')[0] }</Text>
            <Text style={styles.cell}>{equipment.beginningEndDate}</Text>
            <Text style={styles.cell}>{equipment.deedAmountReceiveAmount}</Text>
            <Text style={styles.cell}>{equipment.current_location}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    color: '#333',
    textAlign: 'left',
    paddingHorizontal: 2,
  },
});

export default WMGEquipmentList;
