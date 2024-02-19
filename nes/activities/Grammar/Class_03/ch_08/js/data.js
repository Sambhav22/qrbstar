export const chapter = "Chapter - 8: Adjectives: Degrees of Comparison";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            'What degree of adjective is used in the sentence "A horse has a long neck"?',
          optionA: "Comparative Degree",
          optionB: "Superlative Degree",
          optionC: "Positive Degree",
          correctAnswer: "Positive Degree",
        },
        {
          question:
            'In the sentence "A camel has a longer neck than a horse," what type of degree is being used?',
          optionA: "Positive Degree",
          optionB: "Comparative Degree",
          optionC: "Superlative Degree",
          correctAnswer: "Comparative Degree",
        },
        {
          question:
            "Which degree of adjective is used when comparing a giraffe's neck to all other animals?",
          optionA: "Positive Degree",
          optionB: "Comparative Degree",
          optionC: "Superlative Degree",
          correctAnswer: "Superlative Degree",
        },
        {
          question: 'What is the Comparative Degree of the adjective "good"?',
          optionA: "Better",
          optionB: "Gooder",
          optionC: "Best",
          correctAnswer: "Better",
        },
        {
          question:
            "Which sentence illustrates the Positive Degree of an adjective?",
          optionA: "Zoya is tall.",
          optionB: "Sara is taller than Zoya.",
          optionC: "Sana is the tallest of the three.",
          correctAnswer: "Zoya is tall.",
        },
        {
          question:
            'In the sentence "Sara is taller than Zoya," what degree of adjective is used?',
          optionA: "Positive Degree",
          optionB: "Comparative Degree",
          optionC: "Superlative Degree",
          correctAnswer: "Comparative Degree",
        },
        {
          question: 'What is the Superlative Degree of the adjective "clean"?',
          optionA: "Cleaner",
          optionB: "Cleanest",
          optionC: "More clean",
          correctAnswer: "Cleanest",
        },
        {
          question:
            'Which degree of adjective is used in the sentence "Zoya = 120 cm, Sara = 125 cm, Sana = 130 cm"?',
          optionA: "Positive Degree",
          optionB: "Comparative Degree",
          optionC: "Superlative Degree",
          correctAnswer: "Positive Degree",
        },
        {
          question: "Poonam is __________ than Mohan.",
          optionA: "Younger",
          optionB: "Older",
          optionC: "Same age",
          correctAnswer: "Younger",
        },
        {
          question:
            'What is the age relationship between Poonam and Mohan in the sentence "Mohan is older than Poonam"?',
          optionA: "Poonam is older than Mohan.",
          optionB: "Poonam and Mohan are the same age.",
          optionC: "Mohan is older than Poonam.",
          correctAnswer: "Mohan is older than Poonam.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            'When we say, "A horse has a _____ neck," we are using the __________ degree of adjective.',
          optionA: "long, Positive",
          optionB: "longer, Comparative",
          optionC: "longest, Superlative",
          correctAnswer: "long, Positive",
        },
        {
          question:
            'In the sentence "A camel has a ______ neck than a horse," we are using the __________ degree of adjective.',
          optionA: "long, Positive",
          optionB: "longer, Comparative",
          optionC: "longest, Superlative",
          correctAnswer: "longer, Comparative",
        },
        {
          question:
            "A giraffe has the ______ neck of all animals, making it an example of the __________ degree of adjective.",
          optionA: "long, Positive",
          optionB: "longer, Comparative",
          optionC: "longest, Superlative",
          correctAnswer: "longest, Superlative",
        },
        {
          question: 'The Comparative Degree of "good" is ___________.',
          optionA: "gooder",
          optionB: "better",
          optionC: "best",
          correctAnswer: "better",
        },
        {
          question:
            "Zoya is ______, Sara is taller than Zoya, and Sana is the _______ of the three.",
          optionA: "tall, Positive",
          optionB: "taller, Comparative",
          optionC: "tallest, Superlative",
          correctAnswer: "taller, Comparative",
        },
        {
          question:
            "Poonam is ______ than Mohan, indicating a __________ relationship in age.",
          optionA: "older",
          optionB: "younger",
          optionC: "same age",
          correctAnswer: "younger",
        },
        {
          question:
            'When we describe a giraffe as having the "Cleanest" neck, we are using the _______ degree of adjective.',
          optionA: "Cleaner",
          optionB: "Cleanest",
          optionC: "More clean",
          correctAnswer: "Cleanest",
        },
        {
          question:
            "Sara is ______ than Zoya, demonstrating the use of the __________ degree of adjective.",
          optionA: "tall, Positive",
          optionB: "taller, Comparative",
          optionC: "tallest, Superlative",
          correctAnswer: "taller, Comparative",
        },
        {
          question: 'The _______ of the adjective "clean" is "Cleanest".',
          optionA: "Cleaner",
          optionB: "Cleanest",
          optionC: "More clean",
          correctAnswer: "Cleanest",
        },
        {
          question:
            "Mohan is ______ than Poonam, signifying an ________ relationship in age.",
          optionA: "older",
          optionB: "younger",
          optionC: "same age",
          correctAnswer: "older",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question: "A horse has the longest neck of all animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the Comparative Degree, we compare the quality of a person or thing with another.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Superlative Degree describes the quality of a person or thing in simple terms.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Zoya is taller than Sara, and Sara is the tallest of the three.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Poonam is younger than Mohan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The Comparative Degree of 'good' is 'better'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A giraffe has the longest neck of all animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Sara is shorter than Zoya.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Poonam is older than Mohan.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In Scratch, the Stage Area displays the progress of the project.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
