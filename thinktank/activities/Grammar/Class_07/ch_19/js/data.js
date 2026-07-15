export const chapter = "Chapter - 19 : Spelling and formation of words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "How can new words be formed by a change in parts of speech?",
          optionA: "a. From Adjectives to Adverbs",
          optionB: "b. From Verbs to Nouns",
          optionC: "c. By Adding a Suffix",
          correctAnswer: "b. From Verbs to Nouns",
        },
        {
          question:
            "Which of the following is an example of forming a new word by adding a Prefix?",
          optionA: "a. happiness",
          optionB: "b. shorthand",
          optionC: "c. impure",
          correctAnswer: "c. impure",
        },
        {
          question: "What is the purpose of adding a Suffix to a word?",
          optionA: "a. To change the part of speech",
          optionB: "b. To form a new word",
          optionC: "c. To join two words",
          correctAnswer: "b. To form a new word",
        },
        {
          question:
            "Which pair represents a transformation from Adjectives to Nouns?",
          optionA: "a. brave - bravery",
          optionB: "b. sweet - sweetly",
          optionC: "c. broad - broadly",
          correctAnswer: "a. brave - bravery",
        },
        {
          question:
            "In the formation of compound words, what is the result of joining 'house' and 'hold'?",
          optionA: "a. householder",
          optionB: "b. household",
          optionC: "c. housebreak",
          correctAnswer: "b. household",
        },
        {
          question: "What is the purpose of adding a Prefix in word formation?",
          optionA: "a. To change the meaning of a word",
          optionB: "b. To create adverbs",
          optionC: "c. To form compound words",
          correctAnswer: "a. To change the meaning of a word",
        },
        {
          question:
            "Which transformation involves changing verbs into adjectives?",
          optionA: "a. From Verbs to Nouns",
          optionB: "b. From Adjectives to Nouns",
          optionC: "c. From Verbs to Adjectives",
          correctAnswer: "c. From Verbs to Adjectives",
        },
        {
          question:
            "What is the result of adding the Suffix '-ness' to the word 'happy'?",
          optionA: "a. happiness",
          optionB: "b. unhappiness",
          optionC: "c. happinessly",
          correctAnswer: "a. happiness",
        },
        {
          question: "How are compound words formed?",
          optionA: "a. By changing parts of speech",
          optionB: "b. By adding a Suffix",
          optionC: "c. By joining two words",
          correctAnswer: "c. By joining two words",
        },
        {
          question:
            "What type of word formation involves changing nouns into nouns?",
          optionA: "a. From Nouns to Nouns",
          optionB: "b. By Adding a Prefix",
          optionC: "c. By Making a Compound Word",
          correctAnswer: "a. From Nouns to Nouns",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "We can form a new word by changing parts of speech. For example, from verbs to nouns: bathe becomes __________.",
          options: ["a. bathe", "b. bath", "c. pacify"],
          correctAnswer: "b. bath",
        },
        {
          question:
            "From adjectives to nouns, 'brave' transforms into __________.",
          options: ["a. brave", "b. bravery", "c. financial"],
          correctAnswer: "b. bravery",
        },
        {
          question: "Adding a prefix involves placing it __________ of a word.",
          options: ["a. at the end", "b. in the middle", "c. at the beginning"],
          correctAnswer: "c. at the beginning",
        },
        {
          question: "By adding a suffix to a word, we place it __________.",
          options: ["a. at the beginning", "b. in the middle", "c. at the end"],
          correctAnswer: "c. at the end",
        },
        {
          question:
            "In the formation of compound words, 'arm' and 'chair' combine to create __________.",
          options: ["a. armchair", "b. household", "c. shorthand"],
          correctAnswer: "a. armchair",
        },
        {
          question:
            "The transformation of verbs into adjectives involves changing 'enable' to __________.",
          options: ["a. enable", "b. able", "c. civil"],
          correctAnswer: "b. able",
        },
        {
          question: "A prefix is added at the __________ of a word.",
          options: ["a. beginning", "b. middle", "c. end"],
          correctAnswer: "a. beginning",
        },
        {
          question:
            "Adding the suffix '-ness' to 'happy' results in __________.",
          options: ["a. happiness", "b. unhappiness", "c. happinessly"],
          correctAnswer: "a. happiness",
        },
        {
          question:
            "Forming a new word by joining two words is known as creating a __________.",
          options: ["a. prefix", "b. suffix", "c. compound word"],
          correctAnswer: "c. compound word",
        },
        {
          question:
            "Changing nouns into nouns involves transformations like 'mother' becoming __________.",
          options: ["a. motherhood", "b. mothering", "c. motherly"],
          correctAnswer: "a. motherhood",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A new word can be formed by changing parts of speech.",
          options: ["a. True", "b. False"],
          correctAnswer: "a. True",
        },
        {
          question: "Adding a prefix involves placing it at the end of a word.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question:
            "Names of days and months are written with a Capital letter.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question:
            "The Full Stop is used at the end of all sentences, including interrogative sentences.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question: "The Comma is used to separate different types of words.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question:
            "Forming a new word by joining two words is known as creating a prefix.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question:
            "The transformation of verbs into adjectives involves changing the meaning of the word.",
          options: ["a. True", "b. False"],
          correctAnswer: "a. True",
        },
        {
          question:
            "The Mark of Quotation is used in Direct Speech to repeat the speaker's statement indirectly.",
          options: ["a. True", "b. False"],
          correctAnswer: "b. False",
        },
        {
          question:
            "In the formation of compound words, 'arm' and 'chair' combine to create a compound word.",
          options: ["a. True", "b. False"],
          correctAnswer: "a. True",
        },
        {
          question:
            "Changing nouns into nouns involves transformations like 'mother' becoming motherhood.",
          options: ["a. True", "b. False"],
          correctAnswer: "a. True",
        },
      ],
  };

export var activityData;
