export const chapter = "Chapter - 19: Conversation ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the appropriate response to 'Good morning!'?",
          optionA: "Excuse me!",
          optionB: "Shut the door",
          optionC: "Good morning!",
          correctAnswer: "Good morning!",
        },
        {
          question: "How should you react when someone says 'Pardon, please'?",
          optionA: "Never shout like that.",
          optionB: "Shut the door.",
          optionC: "Excuse me!",
          correctAnswer: "Excuse me!",
        },
        {
          question: "What is a polite request to close the entrance?",
          optionA: "Eat your food well.",
          optionB: "Shut the door.",
          optionC: "Don't fly kite now.",
          correctAnswer: "Shut the door.",
        },
        {
          question:
            "Which phrase suggests a disapproval of someone's loud behavior?",
          optionA: "Never shout like that.",
          optionB: "What is your name?",
          optionC: "Good afternoon!",
          correctAnswer: "Never shout like that.",
        },
        {
          question: "When is it advised not to fly a kite?",
          optionA: "Good morning!",
          optionB: "Don't fly kite now.",
          optionC: "Where are you going?",
          correctAnswer: "Don't fly kite now.",
        },
        {
          question:
            "What should you do after someone asks, 'What is your name?'",
          optionA: "Shut the door.",
          optionB: "Eat your food well.",
          optionC: "Answer the question.",
          correctAnswer: "Answer the question.",
        },
        {
          question: "Which question inquires about the ownership of a book?",
          optionA: "Eat your food well.",
          optionB: "Which book is yours?",
          optionC: "Where are you going?",
          correctAnswer: "Which book is yours?",
        },
        {
          question: "When is it appropriate to use the phrase 'Excuse me'?",
          optionA: "Shut the door.",
          optionB: "Excuse me!",
          optionC: "Never shout like that.",
          correctAnswer: "Excuse me!",
        },
        {
          question:
            "Which statement emphasizes the importance of eating properly?",
          optionA: "Good afternoon!",
          optionB: "Eat your food well.",
          optionC: "What is your name?",
          correctAnswer: "Eat your food well.",
        },
        {
          question: "What is a common inquiry about someone's destination?",
          optionA: "Don't fly kite now.",
          optionB: "Where are you going?",
          optionC: "Pardon, please.",
          correctAnswer: "Where are you going?",
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
          question: "Hello! ____________!",
          options: ["Good", "Shut", "Never shout"],
          correctAnswer: "Good",
        },
        {
          question: "__________, please.",
          options: ["Good afternoon", "Excuse me", "Eat your food well"],
          correctAnswer: "Excuse me",
        },
        {
          question: "__________ the door.",
          options: ["Pardon", "Shut", "Don't fly kite now"],
          correctAnswer: "Shut",
        },
        {
          question: "Never shout __________.",
          options: ["Shut the door", "like that", "What is your name"],
          correctAnswer: "like that",
        },
        {
          question: "What is __________?",
          options: ["Excuse me", "your name", "a common inquiry"],
          correctAnswer: "your name",
        },
        {
          question: "Which books __________?",
          options: ["What is your name", "is yours", "Don't fly kite now"],
          correctAnswer: "is yours",
        },
        {
          question: "Don't fly __________ now.",
          options: ["kite", "Eat your food well", "Good afternoon"],
          correctAnswer: "kite",
        },
        {
          question: "Eat your food __________.",
          options: ["Never shout", "well", "Where are you going"],
          correctAnswer: "well",
        },
        {
          question: "Where are __________?",
          options: ["you going", "Excuse me", "What is your name"],
          correctAnswer: "you going",
        },
        {
          question: "Excuse me! __________.",
          options: ["Shut the door", "Answer the question", "Pardon, please"],
          correctAnswer: "Pardon, please",
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
          question: "The boy is between the chair and the table.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The boy is in front of the car.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The boy falls from the roof.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'The boy is near the table,' the preposition is 'near.'",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The boy goes into the room.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Prepositions express relations with verbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The preposition in the sentence 'The boy is behind the car' is 'in front of.'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The boy is under the table.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The boy is between the chair and the table.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "The boy is beside the table.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
