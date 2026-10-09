export const chapter = "Chapter - 1: Twelve Again";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What did Bobby think his strange situation was?",
        "optionA": "A miracle",
        "optionB": "A nightmare",
        "correctAnswer": "A nightmare",
        "optionC": "A game"
      },
      {
        "question": "Who woke Bobby up by tickling him?",
        "optionA": "His teacher",
        "optionB": "His friend",
        "optionC": "His mother",
        "correctAnswer": "His mother"
      },
      {
        "question": "What did Bobby notice about his mother that he had not noticed before?",
        "optionA": "She was strict",
        "optionB": "She was pretty",
        "correctAnswer": "She was pretty",
        "optionC": "She was angry"
      },
      {
        "question": "Why did Bobby eat a banana?",
        "optionA": "For brain power",
        "correctAnswer": "For brain power",
        "optionB": "For taste",
        "optionC": "For fun"
      },
      {
        "question": "Who was driving the school bus?",
        "optionA": "Mrs. Thompson",
        "correctAnswer": "Mrs. Thompson",
        "optionB": "Mrs. Wilkes",
        "optionC": "Doris"
      },
      {
        "question": "What made Bobby feel strange on the bus?",
        "optionA": "The noise",
        "optionB": "Being a child again and seeing old faces",
        "correctAnswer": "Being a child again and seeing old faces",
        "optionC": "The long journey"
      },
      {
        "question": "What did Bobby remember about Cliff?",
        "optionA": "He was helpful",
        "optionB": "He was a bully",
        "correctAnswer": "He was a bully",
        "optionC": "He was absent"
      },
      {
        "question": "What did Bobby do after completing his test?",
        "optionA": "Went home",
        "optionB": "Slept",
        "optionC": "Submitted it early",
        "correctAnswer": "Submitted it early"
      },
      {
        "question": "Why did Bobby apologize to Becky?",
        "optionA": "For shouting",
        "optionB": "For ignoring her",
        "optionC": "For kicking her earlier",
        "correctAnswer": "For kicking her earlier"
      },
      {
        "question": "What did Bobby choose to do at night instead of watching TV?",
        "optionA": "Sleep",
        "optionB": "Play",
        "optionC": "Listen to a story",
        "correctAnswer": "Listen to a story"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Bobby woke up in his ______ bed.",
        "optionA": "kid-size",
        "correctAnswer": "kid-size",
        "optionB": "big",
        "optionC": "new"
      },
      {
        "question": "Bobby believed he was ______ years old in reality.",
        "optionA": "12",
        "optionB": "20",
        "optionC": "32",
        "correctAnswer": "32"
      },
      {
        "question": "His mother called him for ______.",
        "optionA": "lunch",
        "optionB": "breakfast",
        "correctAnswer": "breakfast",
        "optionC": "dinner"
      },
      {
        "question": "Bobby felt like ______ when his mother waved.",
        "optionA": "crying",
        "correctAnswer": "crying",
        "optionB": "laughing",
        "optionC": "shouting"
      },
      {
        "question": "Mrs. Wilkes was the ______ teacher.",
        "optionA": "Math",
        "correctAnswer": "Math",
        "optionB": "English",
        "optionC": "Science"
      },
      {
        "question": "Bobby found the test a ______.",
        "optionA": "challenge",
        "optionB": "piece of cake",
        "correctAnswer": "piece of cake",
        "optionC": "problem"
      },
      {
        "question": "Becky had ______ eyes.",
        "optionA": "blue",
        "optionB": "black",
        "optionC": "green",
        "correctAnswer": "green"
      },
      {
        "question": "Bobby’s day passed like a ______ breeze.",
        "optionA": "warm",
        "correctAnswer": "warm",
        "optionB": "cold",
        "optionC": "slow"
      },
      {
        "question": "Bobby got dirty while ______.",
        "optionA": "studying",
        "optionB": "playing",
        "correctAnswer": "playing",
        "optionC": "eating"
      },
      {
        "question": "Bobby fell asleep listening to his ______.",
        "optionA": "teacher",
        "optionB": "friend",
        "optionC": "mother",
        "correctAnswer": "mother"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Bobby immediately understood that the situation was real.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bobby appreciated his mother more than before.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Bobby ignored his bus driver.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bobby was nervous during the math test.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bobby thanked his teacher after the test.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Bobby avoided speaking to the principal.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bobby remembered hurting Becky in the past.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Bobby enjoyed playing like a child again.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Bobby watched TV at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Bobby wanted to spend more time with his mother.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
