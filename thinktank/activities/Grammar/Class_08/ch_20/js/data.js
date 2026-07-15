export const chapter = "Chapter - 20: Unseen Comprehension ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the lion's reaction to hearing the echo?",
          optionA: "It becomes frightened and seeks revenge.",
          optionB: "It ignores the echo and continues roaring.",
          optionC:
            "It realizes the echo is just a reflection of its own voice.",
          correctAnswer: "A) It becomes frightened and seeks revenge.",
        },
        {
          question: "What does the echo repeatedly say to the lion?",
          optionA: '"I am the true king of the jungle."',
          optionB: '"You are a coward."',
          optionC: '"Defeat."',
          correctAnswer: 'C) "Defeat."',
        },
        {
          question: "How does the lion eventually react to the echo?",
          optionA: "It challenges the echo to a fight.",
          optionB: "It ignores the echo and walks away.",
          optionC: "It becomes exhausted and gives up.",
          correctAnswer: "C) It becomes exhausted and gives up.",
        },
        {
          question: "What realization does the bird convey to the lion?",
          optionA: "The echo is a deceptive trick played by other animals.",
          optionB: "The lion's fear is causing it to misinterpret the echo.",
          optionC: "The echo is a sign of danger lurking in the jungle.",
          correctAnswer:
            "B) The lion's fear is causing it to misinterpret the echo.",
        },
        {
          question:
            'What is the central theme of the poem "The rose that smiles today"?',
          optionA: "Impermanence of beauty and nature.",
          optionB: "Eternal youth and vigor.",
          optionC: "The significance of joy and happiness.",
          correctAnswer: "A) Impermanence of beauty and nature.",
        },
        {
          question: "What is the fate of the mountains according to the poem?",
          optionA: "They will remain forever.",
          optionB: "They will crumble someday.",
          optionC: "They will reach the sky.",
          correctAnswer: "B) They will crumble someday.",
        },
        {
          question: "What happens to the oceans in the poem?",
          optionA: "They remain filled with water.",
          optionB: "They dry up completely.",
          optionC: "They become deeper.",
          correctAnswer: "B) They dry up completely.",
        },
        {
          question: "What is the ultimate fate of the earth in the poem?",
          optionA: "It continues rolling fast.",
          optionB: "It explodes.",
          optionC: "It ceases to exist.",
          correctAnswer: "C) It ceases to exist.",
        },
        {
          question: "What will happen to the sun according to the poem?",
          optionA: "It will grow hotter.",
          optionB: "It will disappear.",
          optionC: "It will become pale and cold.",
          correctAnswer: "C) It will become pale and cold.",
        },
        {
          question: "What is the message conveyed by the poem?",
          optionA: "Everything in life is temporary.",
          optionB: "Joy and happiness are everlasting.",
          optionC: "Nature will always remain unchanged.",
          correctAnswer: "A) Everything in life is temporary.",
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
            "Pollution is causing extensive _____ to all sorts of life on the earth.",
          options: {
            a: "happiness",
            b: "damage",
            c: "prosperity",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Environmental pollution is a direct consequence of the _____ progress.",
          options: {
            a: "technological",
            b: "cultural",
            c: "social",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Over-population and industrialisation accelerate the rate of _____ pollution.",
          options: {
            a: "air",
            b: "light",
            c: "noise",
          },
          correctAnswer: "c",
        },
        {
          question: "We should create a _____ environment.",
          options: {
            a: "clean",
            b: "noisy",
            c: "congested",
          },
          correctAnswer: "a",
        },
        {
          question: "Voluntary blood donation is a _____ social service.",
          options: {
            a: "noble",
            b: "selfish",
            c: "harmful",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Blood _____ is needed by people suffering from diseases and accidents.",
          options: {
            a: "donation",
            b: "preservation",
            c: "consumption",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The blood donated is made up by the body within _____ hours.",
          options: {
            a: "24",
            b: "48",
            c: "72",
          },
          correctAnswer: "b",
        },
        {
          question:
            "A person can give blood at regular intervals without any _____.",
          options: {
            a: "concern",
            b: "compensation",
            c: "side effects",
          },
          correctAnswer: "c",
        },
        {
          question: "Change is the _____ of nature and life.",
          options: {
            a: "stagnation",
            b: "law",
            c: "exception",
          },
          correctAnswer: "b",
        },
        {
          question: "A sense of isolation haunts the _____.",
          options: {
            a: "young",
            b: "aged",
            c: "middle-aged",
          },
          correctAnswer: "b",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "We read the lives of common people.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question: "Great men are guardians of the erring humanity.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Great people stick to the pursuit of their cherished goals.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Reading autobiographies puts us on the path towards our goals.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Pollution is causing extensive damage to all sorts of life on the earth.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Environmental pollution is a direct consequence of cultural progress.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Over-population and industrialization accelerate the rate of air pollution.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question: "We should create a congested environment.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question: "Voluntary blood donation is a harmful social service.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question: "The blood donated is made up by the body within 72 hours.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
      ],
  };
}

export var activityData;
