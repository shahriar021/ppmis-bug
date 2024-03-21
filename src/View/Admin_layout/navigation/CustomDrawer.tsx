import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDrawer = ({navigation}: {navigation: any}) => {
  // Sample user data
  const username = 'MdHRShohel';

  // Handle navigation to the selected route
  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const handleLogOut = () => {
    // Redirect to login page
    navigation.navigate('Login');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
    // Clear the user data from async storage
    AsyncStorage.removeItem('userId');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Menu items */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <Icon name="home-outline" style={styles.icon} />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('HouseholdSurveyList')}>
        <Icon name="podium-outline" style={styles.icon} />
        <Text style={styles.menuText}>Household Survey</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('WMGMemberList')}>
        <Icon name="person-outline" style={styles.icon} />
        <Text style={styles.menuText}>WMG Member</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('WMGFinancesList')}>
        <Icon name="cash-outline" style={styles.icon} />
        <Text style={styles.menuText}>WMG Finances</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('WMGEquipmentList')}>
        <Icon name="briefcase-outline" style={styles.icon} />
        <Text style={styles.menuText}>WMG Equipment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('WMGCapActivities')}>
        <Icon name="git-network-outline" style={styles.icon} />
        <Text style={styles.menuText}>WMG Cap Activities</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('WMOMonitoringList')}>
        <Icon name="analytics-outline" style={styles.icon} />
        <Text style={styles.menuText}>WMO Monitoring</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation('TrainingList')}>
        <Icon name="school-outline" style={styles.icon} />
        <Text style={styles.menuText}>Training</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.menuItem} onPress={handleLogOut}>
        <Icon name="power-outline" style={styles.icon} />
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2470b3',
    marginTop: 5,
  },
  userInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userRole: {
    color: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  icon: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  menuText: {
    color: 'white',
  },
});

export default CustomDrawer;
