import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Video } from 'expo-av';
import Logo from '../assets/logo.png';
import { faculties } from '../constants/coursesData';

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseRatings, setCourseRatings] = useState({});

  const rateCourse = (courseId) => {
    setCourseRatings((prev) => {
      const currentRating = prev[courseId] || 0;
      let newRating = currentRating + 1;
      if (newRating > 6) newRating = 0;
      return { ...prev, [courseId]: newRating };
    });
  };

  // Course detail view
  if (selectedFaculty) {
    if (selectedCourse) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setSelectedCourse(null)}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.headerTitle}>{selectedCourse.name}</Text>
          </View>

          <View style={styles.content}>
            <Image source={selectedCourse.image} style={styles.detailImage} />
            <Text style={styles.description}>
              {selectedCourse.description}
            </Text>

            {selectedCourse.minimumRequirement && (
              <Text style={styles.requirement}>
                Minimum Requirement: {selectedCourse.minimumRequirement}
              </Text>
            )}

            <Video
              source={selectedCourse.video}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              isLooping
            />

            <TouchableOpacity
              style={styles.ratingButton}
              onPress={() => rateCourse(selectedCourse.id)}
            >
              <Text style={styles.ratingButtonText}>
                Rating: {courseRatings[selectedCourse.id] || 0} / 6
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    // Faculty courses list (quiz-style)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setSelectedFaculty(null)}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.headerTitle}>{selectedFaculty.name}</Text>
        </View>

        <View style={styles.content}>
          <Image source={selectedFaculty.image} style={styles.detailImage} />
          <Text style={styles.description}>{selectedFaculty.description}</Text>

          <Text style={styles.sectionTitle}>Courses Offered</Text>

          {selectedFaculty.courses?.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => setSelectedCourse(course)}
            >
              <Text style={styles.courseName}>{course.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }

  // Faculty list view (quiz-style)
  const renderFacultyCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedFaculty(item)}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.headerTitle}>Faculties</Text>
      </View>

      <FlatList
        data={faculties}
        keyExtractor={(item) => item.id}
        renderItem={renderFacultyCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7' },

  
  header: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  backButton: { marginRight: 10 },
  backText: { color: 'white', fontSize: 24 },
  logo: { width: 35, height: 35, marginRight: 10, resizeMode: 'contain' },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },


  list: { padding: 16 },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardImage: { width: '100%', height: 140, borderRadius: 20 },
  cardName: { fontSize: 18, fontWeight: '600', padding: 12, color: 'black' },

  
  content: { padding: 20 },
  detailImage: { width: '100%', height: 200, borderRadius: 20, marginBottom: 15 },
  description: { fontSize: 14, color: 'black', lineHeight: 20, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' },
  courseCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  courseName: { fontSize: 16, fontWeight: '600', color: 'darkblue' },


  video: { width: '100%', height: 250, borderRadius: 20, marginBottom: 20 },
  requirement: { fontSize: 14, color: 'brown', marginBottom: 20 },
  ratingButton: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  ratingButtonText: { fontSize: 16, fontWeight: '600', color: 'white' },
});