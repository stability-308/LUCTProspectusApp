import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { faculties } from "../constants/coursesData";

export default function Quiz() {

  const questions = [
    {
      text: "Which activity do you enjoy most?",
      options: [
        { text: "Coding / Building apps", facultyId: "f1" },
        { text: "Working with numbers", facultyId: "f2" },
        { text: "Creating videos or media", facultyId: "f3" },
        { text: "Drawing or designing", facultyId: "f4" },
        { text: "Starting a business", facultyId: "f6" }
      ]
    },
    {
      text: "Which subject do you like most?",
      options: [
        { text: "Computer Science", facultyId: "f1" },
        { text: "Accounting", facultyId: "f2" },
        { text: "Media Studies", facultyId: "f3" },
        { text: "Art / Design", facultyId: "f4" },
        { text: "Business Studies", facultyId: "f6" }
      ]
    },
    {
      text: "Which project would you enjoy?",
      options: [
        { text: "Developing software", facultyId: "f1" },
        { text: "Managing company finances", facultyId: "f2" },
        { text: "Producing a film", facultyId: "f3" },
        { text: "Designing fashion or graphics", facultyId: "f4" },
        { text: "Launching a startup", facultyId: "f6" }
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const selectOption = (facultyId) => {
    const newAnswers = [...answers];
    newAnswers[index] = facultyId;
    setAnswers(newAnswers);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answersArray) => {
    const count = {};
    answersArray.forEach(id => {
      count[id] = (count[id] || 0) + 1;
    });

    let topFaculty = null;
    let max = 0;
    for (let id in count) {
      if (count[id] > max) {
        max = count[id];
        topFaculty = id;
      }
    }

    const faculty = faculties.find(f => f.id === topFaculty);
    setResult(faculty);
  };

  const restartQuiz = () => {
    setIndex(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Recommended Faculty</Text>

        <Text style={styles.faculty}>{result.name}</Text>
        <Text style={styles.description}>{result.description}</Text>

        <Text style={styles.subtitle}>Courses</Text>

        {result.courses.map(course => (
          <View key={course.id} style={styles.courseCard}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseDescription}>{course.description}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={restartQuiz}>
          <Text style={styles.buttonText}>Take Quiz Again</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const question = questions[index];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Question {index + 1} of {questions.length}
      </Text>

      <Text style={styles.question}>{question.text}</Text>

      {question.options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={styles.option}
          onPress={() => selectOption(option.facultyId)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f5f7"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#003366"
  },

  question: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#003366"
  },

  option: {
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3
  },

  optionText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  },

  faculty: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#003366"
  },

  description: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    color: "#333"
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#003366"
  },

  courseCard: {
    backgroundColor: "#e0e7ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },

  courseName: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#003366"
  },

  courseDescription: {
    color: "#333"
  },

  button: {
    backgroundColor: "#003366",
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
    alignSelf: "center",
    width: "70%"
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16
  }

});