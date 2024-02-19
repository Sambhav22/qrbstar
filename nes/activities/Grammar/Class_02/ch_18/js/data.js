export const chapter = "Chapter - 18:  Prepositions ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary function of prepositions in a sentence?",
          optionA: "To describe actions",
          optionB: "To show the relations of one thing with another",
          optionC: "To emphasize nouns",
          correctAnswer: "To show the relations of one thing with another",
        },
        {
          question: "Which of the following is not a preposition?",
          optionA: "After",
          optionB: "Falls",
          optionC: "Beside",
          correctAnswer: "Falls",
        },
        {
          question:
            "In the sentence 'The boy is between the chair and the table,' what is the preposition?",
          optionA: "Between",
          optionB: "Is",
          optionC: "Table",
          correctAnswer: "Between",
        },
        {
          question:
            "What category of words do prepositions express relations with?",
          optionA: "Verbs",
          optionB: "Adjectives",
          optionC: "Nouns and Pronouns",
          correctAnswer: "Nouns and Pronouns",
        },
        {
          question:
            "Which preposition is used to indicate a location higher than something else?",
          optionA: "Under",
          optionB: "Above",
          optionC: "Till",
          correctAnswer: "Above",
        },
        {
          question:
            "In the sentence 'The boy goes into the room,' what is the preposition?",
          optionA: "Room",
          optionB: "Goes",
          optionC: "Into",
          correctAnswer: "Into",
        },
        {
          question:
            "What preposition is used to express a position behind something?",
          optionA: "In front of",
          optionB: "Behind",
          optionC: "Beside",
          correctAnswer: "Behind",
        },
        {
          question:
            "Which of the following is a preposition indicating movement from a higher position?",
          optionA: "Off",
          optionB: "From",
          optionC: "On",
          correctAnswer: "From",
        },
        {
          question:
            "What preposition is used to express a relationship indicating close proximity?",
          optionA: "Without",
          optionB: "Near",
          optionC: "In front of",
          correctAnswer: "Near",
        },
        {
          question:
            "In the sentence 'The boy is out till midnight,' what is the preposition?",
          optionA: "Out",
          optionB: "Midnight",
          optionC: "Till",
          correctAnswer: "Till",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "The boy is _____ the chair and the table.",
          options: ["Above", "Between", "Beside"],
          correctAnswer: "Between",
        },
        {
          question: "The boy is in front of _____.",
          options: ["The car", "The roof", "The room"],
          correctAnswer: "The car",
        },
        {
          question: "The boy falls _____ the roof.",
          options: ["Under", "From", "On"],
          correctAnswer: "From",
        },
        {
          question:
            "The preposition expressing a relationship indicating close proximity in the sentence 'The boy is _____ the table' is _____.",
          options: ["Near, beside", "On, under", "In front of, behind"],
          correctAnswer: "Near, beside",
        },
        {
          question: "The boy goes _____ the room.",
          options: ["In", "Into", "On"],
          correctAnswer: "Into",
        },
        {
          question:
            "The words that express the relation of Nouns and Pronouns with other words are called _____.",
          options: ["Verbs", "Adjectives", "Prepositions"],
          correctAnswer: "Prepositions",
        },
        {
          question:
            "Identify the preposition in the sentence 'The boy is _____ the car.'",
          options: ["In front of", "Behind", "Under"],
          correctAnswer: "Behind",
        },
        {
          question: "The boy is _____ the table.",
          options: ["Over", "Till", "Under"],
          correctAnswer: "Under",
        },
        {
          question: "The boy is _____ the chair and the table.",
          options: ["After", "Between", "Without"],
          correctAnswer: "Between",
        },
        {
          question: "The boy is _____ the table.",
          options: ["With", "In front of", "Beside"],
          correctAnswer: "Beside",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Conjunctions are separating words.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A conjunction is a word that joins phrases, numbers, and sentences.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In the sentence 'Jyoti is poor honest,' a conjunction is missing.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Vinayak is either a singer or an artist.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The conjunction in the sentence 'Have some tea. Have some coffee. Have some tea or coffee.' is 'and'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Mukti and Shakti is a sentence with a conjunction.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The sentence 'Asha reads. Deepak reads. Asha and Deepak read.' contains the conjunction 'or'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Common conjunctions include also, but, else.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The sentence 'Vinayak is neither a singer nor an artist.' does not contain a conjunction.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The correct conjunction to complete the sentence 'Read some common conjunctions so you understand their usage.' is 'and'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
