import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const WMOMonitoringList = () => {
  const wmoMonitoringReports = [
    {
      id: 1,
      title: 'Monthly Report on Water Quality',
      reportType: 'Quality',
      publishDate: 'January 2024',
    },
    {
      id: 2,
      title: 'Annual Report on Water Consumption',
      reportType: 'Consumption',
      publishDate: 'December 2023',
    },
    {
      id: 3,
      title: 'Quarterly Report on Water Usage',
      reportType: 'Usage',
      publishDate: 'March 2024',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { flex: 1 }]}>SL No.</Text>
          <Text style={[styles.headerText, { flex: 2 }]}>Title</Text>
          <Text style={styles.headerText}>Report Type</Text>
          <Text style={styles.headerText}>Publish Date</Text>
        </View>
        {/* Table Data */}
        {wmoMonitoringReports.map((report, index) => (
          <View key={report.id} style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 0.5 }]}>{index + 1}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{report.title}</Text>
            <Text style={styles.cell}>{report.reportType}</Text>
            <Text style={styles.cell}>{report.publishDate}</Text>
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

export default WMOMonitoringList;
