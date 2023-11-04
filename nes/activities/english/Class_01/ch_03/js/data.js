export const chapter = "Chapter - 3: 'e' Sound";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We get fruits and vegetables from",
        optionA: "Animals",
        optionB: "Trees",
        optionC: "Both",
        correctAnswer: "Both",
      },
      {
        question: "What is the primary message conveyed in the given text?",
        optionA: "Instructions for counting body parts",
        optionB: "A conversation between Sahil and the teacher",
        optionC: "Advice on how to greet guests",
        correctAnswer: "A conversation between Sahil and the teacher",
      },
      {
        question:
          "In the sentence 'Take rest in bed,' what is the instruction given?",
        optionA: "Take a nap",
        optionB: "Get out of bed",
        optionC: "Sit in bed",
        correctAnswer: "Take a nap",
      },
      {
        question:
          "Which action is associated with the phrase 'Write the letter with the pen'?",
        optionA: "Typing on a computer",
        optionB: "Using a pencil",
        optionC: "Using a pen for writing",
        correctAnswer: "Using a pen for writing",
      },
      {
        question: "What is the purpose of the phrase 'Sit near me'?",
        optionA: "Offering a chair to someone",
        optionB: "Requesting someone to sit close",
        optionC: "Asking someone to leave",
        correctAnswer: "Requesting someone to sit close",
      },
      {
        question: "What body parts are mentioned in the text?",
        optionA: "Eyes and ears",
        optionB: "Hands and feet",
        optionC: "Nose and mouth",
        correctAnswer: "Eyes and ears",
      },
      {
        question: "Who asks, 'Where are your eyes?' in the text?",
        optionA: "Sahil",
        optionB: "The teacher",
        optionC: "Mahi",
        correctAnswer: "The teacher",
      },
      {
        question:
          "How does Sahil respond to the teacher's question about his eyes?",
        optionA: "He points to them",
        optionB: "He touches his ears",
        optionC: "He says he can't see them",
        correctAnswer: "He points to them",
      },
      {
        question: "How many eyes does Sahil have?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      },
      {
        question: "Who is asked to count the ears?",
        optionA: "Sahil",
        optionB: "The teacher",
        optionC: "Mahi",
        correctAnswer: "Mahi",
      },
      {
        question: "What is the purpose of counting body parts in the text?",
        optionA: "To learn about body anatomy",
        optionB: "To practice counting",
        optionC: "To test the students' knowledge",
        correctAnswer: "To practice counting",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Take ________ in bed.",
        optionA: "food",
        optionB: "rest",
        optionC: "book",
        correctAnswer: "rest",
      },
      {
        question: "Write the letter with ________ pen.",
        optionA: "your",
        optionB: "a",
        optionC: "the",
        correctAnswer: "a",
      },
      {
        question: "Greet ________ guest.",
        optionA: "a",
        optionB: "your",
        optionC: "the",
        correctAnswer: "the",
      },
      {
        question: "________ near me.",
        optionA: "Stand",
        optionB: "Sit",
        optionC: "Run",
        correctAnswer: "Sit",
      },
      {
        question: '"Where are your ________?" asked the teacher.',
        optionA: "ears",
        optionB: "nose",
        optionC: "mouth",
        correctAnswer: "ears",
      },
      {
        question: '"Here you can see them," said ________.',
        optionA: "Sahil",
        optionB: "Mahi",
        optionC: "the teacher",
        correctAnswer: "Sahil",
      },
      {
        question: '"And how many are they? Count ________," said the teacher.',
        optionA: "them",
        optionB: "it",
        optionC: "those",
        correctAnswer: "them",
      },
      {
        question:
          '"One, two," Sahil touched his ________ one by one and counted.',
        optionA: "eyes",
        optionB: "nose",
        optionC: "mouth",
        correctAnswer: "eyes",
      },
      {
        question: '"Now count ________ ears, Mahi," said the teacher.',
        optionA: "Sahil's",
        optionB: "your",
        optionC: "the",
        correctAnswer: "your",
      },
      {
        question:
          '"One, two," Mahi touched ________ ears one by one and counted.',
        optionA: "Sahil's",
        optionB: "her",
        optionC: "the teacher's",
        correctAnswer: "her",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Did Sahil count his eyes as 'Three, four'?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Was the teacher's question, 'Where are your ears?' asked in the text?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Did Sahil count his eyes one by one when asked by the teacher?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did Sahil count his ears when asked by the teacher?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Did Sahil respond with, 'Here you can see them,' when the teacher asked about his eyes?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Did Sahil respond with, 'Three, four,' when counting his eyes?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Was the instruction, 'Take rest in bed,' given in the text?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Was the instruction, 'Write the letter with the pen,' mentioned in the text?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Did the teacher ask Sahil, 'And how many are they? Count them,' about his eyes?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Did Mahi count the ears when instructed by the teacher?",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
