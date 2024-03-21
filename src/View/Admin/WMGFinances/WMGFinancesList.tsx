import {api_url, api_token} from '@env';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const WMGFinancesList = () => {
  // const wmgFinances = [
  //   {
  //     particular: 'Michael Smith',
  //     amount: 5000,
  //   },
  //   {
  //     particular: 'Emily Johnson',
  //     amount: 6000,
  //   },
  //   {
  //     particular: 'Michael Smith',
  //     amount: 5000,
  //   },
  //   {
  //     particular: 'Emily Johnson',
  //     amount: 6000,
  //   },
  // ];

  const [wmgFinances, setWmgFinances] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_url}/wmg-fin?wmg_id=15&&api_token=${api_token}`)
      .then(response => response.json())
      .then(data => {
        setWmgFinances(data);
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
          <Text style={[styles.headerText, styles.slNo]}>SL No.</Text>
          <Text style={styles.headerText}>Particular</Text>
          <Text style={[styles.headerText, styles.amountCell]}>Amount (TK)</Text>
        </View>
        {/* Table Data */}
        {wmgFinances.map((finance, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.cell, styles.slNo]}>{index + 1}</Text>
            <Text style={styles.cell}>{finance.month}</Text>
            <Text style={[styles.cell, styles.amountCell]}>{finance.amount}</Text>
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
    marginHorizontal: 5,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  cell: {
    flex: 1,
  },
  slNo: {
    flex: 0.5,
  },
  amountCell: {
    textAlign: 'right',
  },

});

export default WMGFinancesList;
