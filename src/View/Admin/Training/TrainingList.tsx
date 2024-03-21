import {api_token, api_url} from '@env';
import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const TrainingList = () => {
  const navigation = useNavigation();

  // const trainings = [
  //   {
  //     trainingName: 'Leadership Workshop',
  //     plannedDate: '2024-03-15',
  //     implementedDate: '2024-03-20',
  //     plannedEvents: 5,
  //     implementedEvents: 4,
  //     totalTrainees: 50,
  //     totalTrainers: 3,
  //     location: 'Conference Room A',
  //   },
  //   {
  //     trainingName: 'Technical Skills Training',
  //     plannedDate: '2024-04-10',
  //     implementedDate: '2024-04-15',
  //     plannedEvents: 7,
  //     implementedEvents: 6,
  //     totalTrainees: 70,
  //     totalTrainers: 5,
  //     location: 'Training Hall B',
  //   },
  // ];

  const [trainings, setTrainings] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${api_url}/training-program?api_token=${api_token}`)
      .then(response => response.json())
      .then(data => {
        setTrainings(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {trainings.map((training, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('TrainingPhoto' as never)}>
          <View style={styles.trainingContainer}>
            <Text style={styles.title}>{training.name}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.column}>
                <Text style={styles.label}>Planned Date:</Text>
                <Text style={styles.detailText}>{training.planned_date.split(' ')[0]}</Text>
                <Text style={styles.label}>Planned Events:</Text>
                <Text style={styles.detailText}>{training.planned_of_events}</Text>
                <Text style={styles.label}>Total Trainees:</Text>
                <Text style={styles.detailText}>{training.total_trainee}</Text>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.detailText}>{training.location}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>Implemented Date:</Text>
                <Text style={styles.detailText}>
                  {training.implt_date.split(' ')[0]}
                </Text>
                <Text style={styles.label}>Implemented Events:</Text>
                <Text style={styles.detailText}>
                  {training.implt_of_events}
                </Text>
                <Text style={styles.label}>Total Trainers:</Text>
                <Text style={styles.detailText}>{training.total_trainer}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  trainingContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#666',
  },
  detailText: {
    marginBottom: 6,
    color: '#444',
  },
});

export default TrainingList;
