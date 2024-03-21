import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Dashboard from '../../Admin/Dashboard/Dashboard';
import HouseholdSurveyDetails from '../../Admin/HouseholdSurvey/HouseholdSurveyDetails';
import HouseholdSurveyEntry from '../../Admin/HouseholdSurvey/HouseholdSurveyEntry';
import HouseholdSurveyEntry2 from '../../Admin/HouseholdSurvey/HouseholdSurveyEntry2';
import HouseholdSurveyEntry3 from '../../Admin/HouseholdSurvey/HouseholdSurveyEntry3';
import HouseholdSurveyList from '../../Admin/HouseholdSurvey/HouseholdSurveyList';
import WMGEquipmentList from '../../Admin/WMGEquipmentList/WMGEquipmentList';
import WMGFinancesList from '../../Admin/WMGFinances/WMGFinancesList';
import WMGMemberList from '../../Admin/WMGMember/WMGMemberList';
import WMGMemberEntry from '../../Admin/WMGMember/WMGMemberEntry';
import WMOMonitoringList from '../../Admin/WMOMonitoringList/WMOMonitoringList';
import CustomDrawer from './CustomDrawer';
import TrainingList from '../../Admin/Training/TrainingList';
import WMGCapActivities from '../../Admin/WMGCapActivities/WMGCapActivities';
import TrainingPhoto from '../../Admin/Training/TrainingPhoto';

type DrawerParamList = {
  [key: string]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNav = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawerStyle,
          drawerItemStyle: styles.drawerItemStyles,
          drawerLabelStyle: styles.drawerLabelStyles,
        }}
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )}>
        {/* Home/Dashboard */}
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{drawerLabel: 'Dashboard', title: 'Home'}}
        />
        {/* Household Survey List */}
        <Drawer.Screen
          name="HouseholdSurveyList"
          component={HouseholdSurveyList}
          options={() => ({
            drawerLabel: 'Household Survey',
            title: 'Household Survey List',
            headerRight: () => (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  navigation.navigate('HouseholdSurveyEntry' as never)
                }>
                <Icon name="plus" style={styles.addButtonIcon} />
              </TouchableOpacity>
            ),
          })}
        />
        {/* WMG Member List */}
        <Drawer.Screen
          name="WMGMemberList"
          component={WMGMemberList}
          options={() => ({
            drawerLabel: 'WMG Member List',
            title: 'WMG Member List',
            headerRight: () => (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  navigation.navigate('WMGMemberEntry' as never)
                }>
                <Icon name="plus" style={styles.addButtonIcon} />
              </TouchableOpacity>
            ),
          })}
        />
        {/* WMG Finances List */}
        <Drawer.Screen
          name="WMGFinancesList"
          component={WMGFinancesList}
          options={() => ({
            drawerLabel: 'WMG Finances List',
            title: 'WMG Finances List',
          })}
        />
        {/* WMG Equipment List */}
        <Drawer.Screen
          name="WMGEquipmentList"
          component={WMGEquipmentList}
          options={() => ({
            drawerLabel: 'WMG Equipment List',
            title: 'WMG Equipment List',
          })}
        />
        {/* WMO Monitoring List */}
        <Drawer.Screen
          name="WMOMonitoringList"
          component={WMOMonitoringList}
          options={() => ({
            drawerLabel: 'WMO Monitoring List',
            title: 'WMO Monitoring List',
          })}
        />
        {/* WMO Monitoring List */}
        <Drawer.Screen
          name="WMGMemberEntry"
          component={WMGMemberEntry}
          options={() => ({
            drawerLabel: 'WMG Member Entry',
            title: 'WMG Member Entry',
            headerRight: () => (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  navigation.navigate('WMGMemberList' as never)
                }>
                <Icon name="arrow-left" style={styles.addButtonIcon} />
              </TouchableOpacity>
            ),
          })}
        />
        {/* Training List */}
        <Drawer.Screen
          name="TrainingList"
          component={TrainingList}
          options={{drawerLabel: 'Training', title: 'Training List'}}
        /> 
        {/* Training Photo */}
        <Drawer.Screen
          name="TrainingPhoto"
          component={TrainingPhoto}
          options={{drawerLabel: 'Training Photo', title: 'Training Photo'}}
        />

        {/* WMG Cap Activities */}
        <Drawer.Screen
          name="WMGCapActivities"
          component={WMGCapActivities}
          options={() => ({
            drawerLabel: 'WMG Cap Activities',
            title: 'WMG Cap Activities',
          })}
        />

        {/* Household Survey Entry Page 1 */}
        <Drawer.Screen
          name="HouseholdSurveyEntry"
          component={HouseholdSurveyEntry}
          options={() => {
            return {
              drawerLabel: 'Household Info Entry',
              title: 'Household Info Entry',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    navigation.navigate('HouseholdSurveyList' as never)
                  }>
                  <Icon name="arrow-left" style={styles.addButtonIcon} />
                </TouchableOpacity>
              ),
            };
          }}
        />
        {/* Household Survey Entry Page 2 */}
        <Drawer.Screen
          name="HouseholdSurveyEntry2"
          component={HouseholdSurveyEntry2}
          options={() => {
            return {
              drawerLabel: 'Household Info Entry 2',
              title: 'Household Info Entry 2',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    navigation.navigate('HouseholdSurveyEntry' as never)
                  }>
                  <Icon name="arrow-left" style={styles.addButtonIcon} />
                </TouchableOpacity>
              ),
            };
          }}
        />
        {/* Household Survey Entry Page 3 */}
        <Drawer.Screen
          name="HouseholdSurveyEntry3"
          component={HouseholdSurveyEntry3}
          options={() => {
            return {
              drawerLabel: 'Household Info Entry 3',
              title: 'Household Info Entry 3',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    navigation.navigate('HouseholdSurveyEntry2' as never)
                  }>
                  <Icon name="arrow-left" style={styles.addButtonIcon} />
                </TouchableOpacity>
              ),
            };
          }}
        />

        {/* Household Survey Details */}
        <Drawer.Screen
          name="HouseholdSurveyDetails"
          component={HouseholdSurveyDetails}
          options={() => {
            return {
              drawerLabel: 'Household Survey Details',
              title: 'Household Survey Details',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    navigation.navigate('HouseholdSurveyList' as never)
                  }>
                  <Icon name="arrow-left" style={styles.addButtonIcon} />
                </TouchableOpacity>
              ),
            };
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    width: 240,
  },
  drawerItemStyles: {
    borderRadius: 10,
  },
  drawerLabelStyles: {
    fontSize: 16,
    marginHorizontal: -16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  searchButton: {
    backgroundColor: '#007bff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: 'white',
  },
  addButton: {
    marginRight: 20,
    backgroundColor: '#007bff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  addButtonIcon: {
    fontSize: 20,
    color: 'white',
  },
});
