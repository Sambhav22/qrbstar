export const chapter = "Chapter - 2: Sentences";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is a sentence?",
            options: {
              a: "A group of words in any order",
              b: "A group of words in a proper order making sense",
              c: "A random collection of words",
            },
            answer: "b",
          },
          {
            question:
              "Why does the group of words '® a is cat chasing mouse a' not make sense?",
            options: {
              a: "The words are in a proper order",
              b: "The words are not in proper order",
              c: "The words are too long",
            },
            answer: "b",
          },
          {
            question:
              "What is the significance of the phrase 'A cat is chasing a mouse' in relation to being a sentence?",
            options: {
              a: "It's in improper order",
              b: "It's not a sentence",
              c: "It's in proper order and makes sense",
            },
            answer: "c",
          },
          {
            question: "According to the passage, what defines a sentence?",
            options: {
              a: "Words in a random order",
              b: "Words that are too long",
              c: "Words in proper order making sense",
            },
            answer: "c",
          },
          {
            question:
              "Why is 'A cat is chasing a mouse' considered a sentence?",
            options: {
              a: "It's too short",
              b: "It's in proper order but doesn't make sense",
              c: "It's in proper order and makes sense",
            },
            answer: "c",
          },
          {
            question: "What does the term '®' signify in the given text?",
            options: {
              a: "Proper sentence structure",
              b: "Improper sentence structure",
              c: "An example of a sentence",
            },
            answer: "b",
          },
          {
            question: "What distinguishes a sentence from a group of words?",
            options: {
              a: "Random placement of words",
              b: "Proper order and sense-making",
              c: "Long words",
            },
            answer: "b",
          },
          {
            question: "What characteristic does a sentence possess?",
            options: {
              a: "Irrelevant words",
              b: "Proper sequence and meaning",
              c: "Incomplete phrases",
            },
            answer: "b",
          },
          {
            question: "What determines if a group of words is a sentence?",
            options: {
              a: "The presence of punctuation",
              b: "Proper word order and coherence",
              c: "The number of words",
            },
            answer: "b",
          },
          {
            question: "Which phrase exemplifies a sentence?",
            options: {
              a: "Random words in order",
              b: "Words in proper order making sense",
              c: "Unrelated words",
            },
            answer: "b",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "A sentence is a group of words in ______ order making a ______ sense.",
            options: {
              a: "random, vague",
              b: "proper, clear",
              c: "scattered, specific",
            },
            answer: "b",
          },
          {
            question:
              "Read this group of words: ® a is cat chasing mouse a. These words are not in ______ order.",
            options: {
              a: "sensible",
              b: "proper",
              c: "coherent",
            },
            answer: "b",
          },
          {
            question:
              "A sentence is formed when words are arranged in a ______ order and convey ______.",
            options: {
              a: "jumbled, meaning",
              b: "sequential, chaos",
              c: "proper, sense",
            },
            answer: "c",
          },
          {
            question:
              '"A cat is chasing a mouse" is an example of a sentence as it is in ______ order and makes ______.',
            options: {
              a: "random, confusion",
              b: "proper, sense",
              c: "odd, coherence",
            },
            answer: "b",
          },
          {
            question:
              "A sentence consists of words placed in a ______ manner to convey a ______ idea.",
            options: {
              a: "coherent, jumbled",
              b: "disordered, clear",
              c: "structured, specific",
            },
            answer: "a",
          },
          {
            question:
              "Sentences are composed of words that follow a ______ structure and create ______.",
            options: {
              a: "sensible, chaos",
              b: "logical, meaning",
              c: "unordered, confusion",
            },
            answer: "b",
          },
          {
            question:
              'The phrase "A cat is chasing a mouse" forms a sentence because it is in ______ order and makes ______.',
            options: {
              a: "proper, sense",
              b: "irregular, coherence",
              c: "improper, confusion",
            },
            answer: "a",
          },
          {
            question:
              "A sentence comprises words in a ______ sequence that convey a ______ thought.",
            options: {
              a: "nonsensical, structured",
              b: "coherent, meaningful",
              c: "random, chaotic",
            },
            answer: "b",
          },
          {
            question:
              "Properly arranged words in a sentence create a ______ meaning and convey a ______ message.",
            options: {
              a: "jumbled, clear",
              b: "coherent, specific",
              c: "disorganized, scattered",
            },
            answer: "b",
          },
          {
            question:
              "Sentences are characterized by a ______ arrangement of words to express a ______ idea.",
            options: {
              a: "structured, clear",
              b: "disarrayed, vague",
              c: "chaotic, specific",
            },
            answer: "a",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The arrangement of words in a sentence is arbitrary.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "A sentence is formed when words are placed in an illogical sequence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "Sentences are composed of words that lack coherence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Properly structured words in a sentence convey a specific meaning.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "A sentence can be formed with words placed in a random order.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Sentences are characterized by a chaotic arrangement of words.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "A sentence needs to convey a clear and meaningful idea.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Properly arranged words in a sentence create a disorganized message.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "Sentences are formed by placing words in a structured manner.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "Coherence and meaning are essential characteristics of a sentence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
        ],
      },
    ],
  };
}

export var activityData;
