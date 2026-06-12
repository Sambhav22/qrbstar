export const chapter = "Chapter - 20: Unseen Comprehension";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What type of service does a post office provide?",
          optionA: "a) Banking",
          optionB: "b) Telecommunication",
          optionC: "c) Postal",
          correctAnswer: "c) Postal",
        },
        {
          question: "Why should we write the PIN code on a letter?",
          optionA: "a) It's optional",
          optionB: "b) It ensures faster delivery",
          optionC: "c) It's a security measure",
          correctAnswer: "b) It ensures faster delivery",
        },
        {
          question: "Write the full form of PIN.",
          optionA: "a) Personal Identification Number",
          optionB: "b) Postal Index Number",
          optionC: "c) Public Information Network",
          correctAnswer: "b) Postal Index Number",
        },
        {
          question:
            "Fill in the blanks:\n(a) The _____ was situated in a big hall.\n(b) There was a big table of the _____ behind the counters.\n(c) We should never forget to write the _____ on a letter.",
          optionA: "a) post office",
          optionB: "b) postmaster",
          optionC: "c) PIN code",
          correctAnswer: "a) post office\nb) postmaster\nc) PIN code",
        },
        {
          question: "What have the cities come to symbolize?",
          optionA: "a) Tradition and culture",
          optionB: "b) Progress and development",
          optionC: "c) Agricultural prosperity",
          correctAnswer: "b) Progress and development",
        },
        {
          question:
            "What problems arise as a result of availability of amenities in the cities?",
          optionA: "a) Decreased crime rates",
          optionB: "b) Congestion and pollution",
          optionC: "c) Improved living space",
          correctAnswer: "b) Congestion and pollution",
        },
        {
          question: "How can overcrowding in the cities be stopped?",
          optionA: "a) Increase city amenities",
          optionB: "b) Build more infrastructure",
          optionC: "c) Provide suitable facilities in rural areas",
          correctAnswer: "c) Provide suitable facilities in rural areas",
        },
        {
          question: "List any four amenities that are available in a city:",
          optionA: "a) Roads",
          optionB: "b) Hospitals",
          optionC: "c) Transport",
          correctAnswer: "a) Roads\nb) Hospitals\nc) Transport",
        },
        {
          question: "What is corruption?",
          optionA: "a) Serving public interests",
          optionB: "b) Foul practice for selfish interests",
          optionC: "c) Political activism",
          correctAnswer: "b) Foul practice for selfish interests",
        },
        {
          question: "What are the different forms of corruption?",
          optionA: "a) Honesty and transparency",
          optionB: "b) Bribery, nepotism, misappropriation",
          optionC: "c) Public service excellence",
          correctAnswer: "b) Bribery, nepotism, misappropriation",
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
          question:
            "Corruption is a moral perversion that upholds the values of life.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Advertising always guides buyers in the right direction.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Adding a Suffix involves placing it at the beginning of a word.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Compound words are formed by changing parts of speech.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Right to Information Act is contributing significantly to curbing corruption.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A hobby is a pursuit undertaken by an individual during leisure time.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Homework is never a chore, and students always adore it.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Sarva Shiksha Abhiyan aims to provide secondary education by 2025.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Good manners can be expressed with the words 'thanks' and 'please.'",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Computer terms like 'megabyte' and 'gigabyte' were originally related to animals.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };

export var activityData;
