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
import { faculties } from '../constants/coursesData';

// Flatten all courses
const allCourses = faculties.flatMap((faculty) => faculty.courses);

export default function Course() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Rating state
  const [courseRatings, setCourseRatings] = useState({});

  const rateCourse = (courseId) => {
    setCourseRatings((prev) => {
      const currentRating = prev[courseId] || 0;

      let newRating = currentRating + 1;

      // reset after 6
      if (newRating > 6) {
        newRating = 0;
      }

      return {
        ...prev,
        [courseId]: newRating,
      };
    });
  };

  // COURSE DETAIL PAGE
  if (selectedCourse) {
    return (
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setSelectedCourse(null)}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>{selectedCourse.name}</Text>
        </View>

        <View style={styles.content}>
          {/* Image */}
          <Image source={selectedCourse.image} style={styles.image} />

          {/* Description */}
          <Text style={styles.description}>
            {selectedCourse.description}
          </Text>

          {/* Video */}
          <Video
            source={selectedCourse.video}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            isLooping
          />

          {/* Minimum requirement */}
          {selectedCourse.minimumRequirement && (
            <Text style={styles.requirement}>
              Minimum Requirement: {selectedCourse.minimumRequirement}
            </Text>
          )}

          {/* Rating Button */}
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

  // COURSE LIST PAGE
  const renderCourseCard = ({ item }) => {
    const imageSource =
      typeof item.image === 'number'
        ? item.image
        : { uri: item.image };

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => setSelectedCourse(item)}
      >
        <Image
          source={imageSource}
          style={styles.cardImage}
          resizeMode="cover"
        />

        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.name}</Text>

          <Text numberOfLines={2} style={styles.cardDescription}>
            {item.description}
          </Text>

          {/* Small rating display */}
          <Text style={styles.cardRating}>
             {courseRatings[item.id] || 0}/6
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Courses</Text>
      </View>

      <FlatList
        data={allCourses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  backButton: {
    marginRight: 10,
  },

  backText: {
    color: 'white',
    fontSize: 24,
  },

  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },

  list: {
    padding: 16,
  },

  card: {
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  cardImage: {
    width: 100,
    height: 100,
  },

  cardInfo: {
    flex: 1,
    padding: 12,
  },

  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 14,
    color: 'black',
  },

  cardRating: {
    backgroundColor: 'blue',
    marginTop: 5,
    fontSize: 13,
    color: 'blue',
  },

  content: {
    padding: 20,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 15,
  },

  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
    lineHeight: 20,
  },

  video: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
  },

  requirement: {
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
  },

  ratingButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  ratingButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});