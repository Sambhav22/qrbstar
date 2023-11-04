export const chapter = "Chapter - 17: School Friends";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is Neel Kamal doing at the railway station cafeteria?",
          optionA: "Ordering a cup of tea",
          optionB: "Relishing chhole-bhature",
          optionC: "Taking a selfie with the policeman",
          correctAnswer: "Relishing chhole-bhature",
        },
        {
          question:
            "What does Harsh Vardhan call Neel Kamal when he first sees him?",
          optionA: "His childhood buddy",
          optionB: "His schoolmate",
          optionC: "His loveliest friend",
          correctAnswer: "His loveliest friend",
        },
        {
          question: "What is the name of Harsh Vardhan's wife?",
          optionA: "Leela",
          optionB: "Bhabhi",
          optionC: "Vivek",
          correctAnswer: "Leela",
        },
        {
          question: "What was Neel Kamal known as during his school days?",
          optionA: "Stone",
          optionB: "ATM",
          optionC: "Plump Boy",
          correctAnswer: "Stone",
        },
        {
          question:
            "What nickname did Harsh Vardhan have during his school days?",
          optionA: "Stone",
          optionB: "ATM",
          optionC: "Plump Boy",
          correctAnswer: "ATM",
        },
        {
          question:
            "How does Harsh Vardhan's son, Vivek, react when Neel Kamal tries to hug him?",
          optionA: "He hugs Neel Kamal tightly",
          optionB: "He hides behind his father",
          optionC: "He shakes hands with Neel Kamal",
          correctAnswer: "He hides behind his father",
        },
        {
          question: "What profession did Harsh Vardhan pursue for some time?",
          optionA: "Journalist",
          optionB: "Doctor",
          optionC: "Engineer",
          correctAnswer: "Journalist",
        },
        {
          question:
            "How does Neel Kamal respond to Harsh Vardhan's revelation about being a municipality primary teacher?",
          optionA: "He is surprised and disappointed",
          optionB: "He is happy for his friend",
          optionC: "He offers him a better job",
          correctAnswer: "He is happy for his friend",
        },
        {
          question: "What position has Neel Kamal achieved in the town?",
          optionA: "Municipal Councillor",
          optionB: "School Principal",
          optionC: "Mayor",
          correctAnswer: "Mayor",
        },
        {
          question:
            "How does the thin man react when he learns that Neel Kamal is the mayor?",
          optionA: "He becomes pale and speechless",
          optionB: "He congratulates Neel Kamal warmly",
          optionC: "He shows artificial respectfulness",
          correctAnswer: "He shows artificial respectfulness",
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
            "Neel Kamal ordered a full plate of ___________ and is waiting for a bowl of chaat.",
          options: ["sandwiches", "chhole-bhature", "pizza"],
          correctAnswer: "chhole-bhature",
        },
        {
          question: "Harsh Vardhan's wife's name is ___________.",
          options: ["Leela", "Padmini", "Meena"],
          correctAnswer: "Leela",
        },
        {
          question:
            "Neel Kamal was known as '___________' during his school days because he had an athletic body.",
          options: ["Plump Boy", "ATM", "Stone"],
          correctAnswer: "Stone",
        },
        {
          question:
            "Harsh Vardhan's nickname during his school days was '___________' because he kept telling stories all the time.",
          options: ["ATM", "Plump Boy", "Devil's Boy"],
          correctAnswer: "ATM",
        },
        {
          question:
            "Harsh Vardhan's son, Vivek, is a schoolboy in the ________ class.",
          options: ["first", "second", "third"],
          correctAnswer: "third",
        },
        {
          question:
            "Neel Kamal used to be known as 'Stone' because he had an athletic body and could perform __________.",
          options: ["magic tricks", "somersaults", "dance moves"],
          correctAnswer: "somersaults",
        },
        {
          question: "Neel Kamal has become the ________ of the town.",
          options: ["Municipal Councillor", "Mayor", "School Principal"],
          correctAnswer: "Mayor",
        },
        {
          question:
            "Harsh Vardhan was initially a __________ before becoming a municipality primary teacher.",
          options: ["doctor", "journalist", "engineer"],
          correctAnswer: "journalist",
        },
        {
          question:
            "The thin man's response to learning that Neel Kamal is the mayor appears to be __________ and rigid.",
          options: ["joyful", "surprised", "pale"],
          correctAnswer: "pale",
        },
        {
          question:
            "The thin man's expression when saying goodbye to the mayor is one of __________ and artificiality.",
          options: ["sincerity", "sugariness", "indifference"],
          correctAnswer: "sugariness",
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
          question:
            "Neel Kamal is a good-natured man with salt and pepper hair.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Harsh Vardhan is surprised to see Neel Kamal at the railway station.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Neel Kamal and Harsh Vardhan were known as 'devil's boys' during their school days.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Harsh Vardhan was called 'ATM' because he kept telling stories all the time.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Harsh Vardhan's son, Vivek, is a schoolboy in the second class.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Neel Kamal was known as 'Stone' because he had an athletic body.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Neel Kamal has become the Municipal Councillor of the town.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Harsh Vardhan initially worked as a doctor before becoming a municipality primary teacher.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The thin man's response to learning that Neel Kamal is the mayor is one of joy and excitement.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The thin man's expression when saying goodbye to the mayor is sincere and genuine.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
