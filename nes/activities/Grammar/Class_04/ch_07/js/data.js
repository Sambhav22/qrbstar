export const chapter = "Chapter - 7: Adjectives";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the primary function of adjectives?",
          optionA: "Emphasize verbs",
          optionB: "Describe Nouns or Pronouns",
          optionC: "Replace prepositions",
          correctAnswer: "Describe Nouns or Pronouns",
        },
        {
          question:
            "In the phrase 'a beautiful flower,' what kind of adjective is 'beautiful'?",
          optionA: "Demonstrative",
          optionB: "Adjective of Quality",
          optionC: "Adjective of Quantity",
          correctAnswer: "Adjective of Quality",
        },
        {
          question: "Where can adjectives be placed in a sentence?",
          optionA: "Only before a Noun",
          optionB: "Only after a Noun",
          optionC: "Before or after a Noun",
          correctAnswer: "Before or after a Noun",
        },
        {
          question:
            "What question helps identify an Adjective of Quality in a sentence?",
          optionA: "How much?",
          optionB: "What kind is it?",
          optionC: "How many?",
          correctAnswer: "What kind is it?",
        },
        {
          question: "Which of the following is an Adjective of Quantity?",
          optionA: "Tall",
          optionB: "Sufficient",
          optionC: "Beautiful",
          correctAnswer: "Sufficient",
        },
        {
          question:
            "How can you identify an Adjective of Number in a sentence?",
          optionA: "Asking 'What kind is it?'",
          optionB: "Asking 'How much?'",
          optionC: "Asking 'How many?'",
          correctAnswer: "Asking 'How many?'",
        },
        {
          question: "What do Demonstrative Adjectives do?",
          optionA: "Describe qualities",
          optionB: "Point out persons or things",
          optionC: "Indicate quantities",
          correctAnswer: "Point out persons or things",
        },
        {
          question:
            "In the phrase 'a noisy classroom,' what type of adjective is 'noisy'?",
          optionA: "Adjective of Quantity",
          optionB: "Demonstrative Adjective",
          optionC: "Adjective of Quality",
          correctAnswer: "Adjective of Quality",
        },
        {
          question:
            "Which question helps identify an Adjective of Quantity in a sentence?",
          optionA: "What kind is it?",
          optionB: "How much?",
          optionC: "How many?",
          correctAnswer: "How much?",
        },
        {
          question: "What is the function of Adjectives of Number?",
          optionA: "Describe qualities",
          optionB: "Indicate quantities",
          optionC: "Point out persons or things",
          correctAnswer: "Indicate quantities",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Adjectives tell us more about ________ or _________.",
          options: ["Verbs", "Nouns", "Pronouns"],
          correctAnswer: "Nouns",
        },
        {
          question: "Adjectives can be placed before a Noun or _________.",
          options: ["After a Noun", "Before a Verb", "After a Pronoun"],
          correctAnswer: "After a Noun",
        },
        {
          question: "Adjectives of Quality describe the ________ of a Noun.",
          options: ["Color", "Size", "Quality"],
          correctAnswer: "Quality",
        },
        {
          question: "Adjectives of Quantity tell us the ________ of Nouns.",
          options: ["Color", "Size", "Quantity"],
          correctAnswer: "Quantity",
        },
        {
          question:
            "Adjectives of Number tell us the ________ of persons or things.",
          options: ["Size", "Number", "Color"],
          correctAnswer: "Number",
        },
        {
          question: "Demonstrative Adjectives point out ________ or ________.",
          options: ["Colors", "Persons", "Things"],
          correctAnswer: "Persons",
        },
        {
          question: "Adjectives can be placed ________ a Noun or after a Noun.",
          options: ["Only before", "Only after", "Before or after"],
          correctAnswer: "Before or after",
        },
        {
          question: "Adjectives of Quality are identified by asking: ________.",
          options: ["How much?", "What kind is it?", "How many?"],
          correctAnswer: "What kind is it?",
        },
        {
          question:
            "Adjectives of Quantity are identified by asking: ________.",
          options: ["How much?", "What kind is it?", "How many?"],
          correctAnswer: "How much?",
        },
        {
          question:
            "Demonstrative Adjectives point out ________ that they are used with.",
          options: ["Colors", "Persons", "Things"],
          correctAnswer: "Persons",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Adjectives emphasize verbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adjectives of Quality describe the color of a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adjectives can only be placed after a Noun.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adjectives of Quantity tell us the quantity of Nouns.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Adjectives of Number tell us the size of persons or things.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Demonstrative Adjectives point out colors.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adjectives can be placed both before and after a Noun.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Adjectives of Quality are identified by asking 'How much?'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Adjectives of Quantity are identified by asking 'What kind is it?'",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Demonstrative Adjectives point out persons that they are used with.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
