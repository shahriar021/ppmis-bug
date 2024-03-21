import {SERVER_IP_ADDRESS} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface User {
  id: number;
  email: string;
  full_name: string;
}

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User[]>([]);
  const animatedValue = new Animated.Value(150);

  useEffect(() => {
    fetch(`${SERVER_IP_ADDRESS}/users/user_all`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: User[]) => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      setError('');
      try {
        const response = await fetch(`${SERVER_IP_ADDRESS}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        });

        if (response.ok) {
          const userInfo = user.find(user => user.email === email);
          console.log(userInfo, 'userInfo');
          if (userInfo) {
            await AsyncStorage.setItem('userId', userInfo.id.toString());
            await AsyncStorage.setItem('userEmail', userInfo.email);
            await AsyncStorage.setItem('userName', userInfo.full_name);
            console.log('Handle successful login');
            navigation.navigate('DrawerNav');
            navigation.reset({
              index: 0,
              routes: [{name: 'DrawerNav'}],
            });
          }
        } else {
          console.log('Handle login error');
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 100,
      friction: 5,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <Animated.Image
          source={require('../../../assets/logo/PPMIS_Logo.png')}
          style={[styles.logo, {width: animatedValue, height: animatedValue}]}
        />
        <Text style={styles.title}> South West Project </Text>
        <Text style={styles.subtitle}>
          Participatory Project Management Information System (PPMIS)
        </Text>
        <Text style={styles.description}>Welcome, Login to your account</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#666"
              placeholder="Enter Email Address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#666"
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#666"
                style={{marginLeft: 10}}
              />
            </TouchableOpacity>
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <View style={styles.buttonContent}>
              <Icon
                name="log-in"
                size={24}
                color="#fff"
                style={{marginRight: 10}}
              />
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  description: {
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Login;
