import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Dashboard = () => {
  const navigation = useNavigation();

  const username = 'Shahriar Chowdhury';
  const lastLogin = 'Last login: 2024-02-21';

  const navigateToScreen = (
    screenName:
      | 'HouseholdSurveyList'
      | 'WMGMemberList'
      | 'WMGFinancesList'
      | 'WMGEquipmentList'
      | 'WMOMonitoringList'
      | 'TrainingList',
  ) => {
    navigation.navigate(screenName as never);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{`Welcome, ${username}`}</Text>
        <Text style={styles.lastLoginText}>{lastLogin}</Text>
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('HouseholdSurveyList')}>
          <Icon name="podium-outline" size={48} color="white" />
          <Text style={styles.cardText}>Household Survey</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('WMGMemberList')}>
          <Icon name="person-outline" size={48} color="white" />
          <Text style={styles.cardText}>WMG Member</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('WMGFinancesList')}>
          <Icon name="cash-outline" size={48} color="white" />
          <Text style={styles.cardText}>WMG Finances</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('WMGEquipmentList')}>
          <Icon name="briefcase-outline" size={48} color="white" />
          <Text style={styles.cardText}>WMG Equipment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('WMOMonitoringList')}>
          <Icon name="analytics-outline" size={48} color="white" />
          <Text style={styles.cardText}>WMO Monitoring</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCard}
          onPress={() => navigateToScreen('TrainingList')}>
          <Icon name="school-outline" size={48} color="white" />
          <Text style={styles.cardText}>Training</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastLoginText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonCard: {
    backgroundColor: '#2980b9',
    width: '48%',
    aspectRatio: 1,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Dashboard;
