import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Login from './View/Admin/login/login';
import DrawerNav from './View/Admin_layout/navigation/DrawerNav';

const Stack = createStackNavigator();

const App = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId);
      } catch (error) {
        console.error('Error retrieving userId:', error);
      } finally {
        setIsLoading(false); // Indicate that the data fetching process is complete
      }
    };
    fetchUserId();
  }, []);

  // Render loading indicator while fetching data
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  //console.log('userId:', userId);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={userId ? 'DrawerNav' : 'DrawerNav'}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerShown: false, // Hide the header
            }}
          />
          <Stack.Screen
            name="DrawerNav"
            component={DrawerNav}
            options={{
              title: 'DrawerNav',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
