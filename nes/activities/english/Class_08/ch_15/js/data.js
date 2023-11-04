export const chapter = "Chapter - 15: The Model Millionaire ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is Hughie's primary source of income?",
        optionA: "A successful profession",
        optionB: "An inheritance",
        optionC: "An old aunt's allowance",
        correctAnswer: "C) An old aunt's allowance",
      },
      {
        question: "Which profession did Hughie try but did not succeed in?",
        optionA: "Stock Exchange",
        optionB: "Tea merchant",
        optionC: "Dry sherry sales",
        correctAnswer: "B) Tea merchant",
      },
      {
        question:
          "What is the initial reaction of Hughie's friend Alan Trevor upon seeing him?",
        optionA: "He is annoyed to be interrupted.",
        optionB: "He is happy to see Hughie.",
        optionC: "He is indifferent to Hughie's presence.",
        correctAnswer: "B) He is happy to see Hughie.",
      },
      {
        question:
          "Why does Hughie's lover Laura's father refuse their engagement?",
        optionA: "He doesn't like Hughie.",
        optionB: "He thinks Hughie is poor.",
        optionC: "He wants Hughie to have 10,000 pounds.",
        correctAnswer: "C) He wants Hughie to have 10,000 pounds.",
      },
      {
        question:
          "How much does a model get for sitting, according to Alan Trevor?",
        optionA: "A pound an hour",
        optionB: "A guinea an hour",
        optionC: "A shilling an hour",
        correctAnswer: "C) A shilling an hour",
      },
      {
        question:
          "What gesture does Hughie make towards the old beggar in the studio?",
        optionA: "He ignores him.",
        optionB: "He offers him his old clothes.",
        optionC: "He gives him a sovereign.",
        correctAnswer: "C) He gives him a sovereign.",
      },
      {
        question:
          "What does Hughie discover about the old beggar from Alan Trevor?",
        optionA: "He is homeless and destitute.",
        optionB: "He is a millionaire.",
        optionC: "He is a famous artist.",
        correctAnswer: "B) He is a millionaire.",
      },
      {
        question:
          "How does Hughie react when he realizes he gave a sovereign to a millionaire?",
        optionA: "He feels happy for the beggar.",
        optionB: "He is angry at Alan for not telling him.",
        optionC: "He is embarrassed and upset.",
        correctAnswer: "C) He is embarrassed and upset.",
      },
      {
        question:
          "What does Baron Hausberg do for Hughie and Laura as a wedding present?",
        optionA: "He offers his congratulations.",
        optionB: "He delivers a heartfelt speech.",
        optionC: "He gives them a cheque for 10,000 pounds.",
        correctAnswer: "C) He gives them a cheque for 10,000 pounds.",
      },
      {
        question:
          "How does Alan Trevor describe model millionaires in the end?",
        optionA: "As ordinary individuals",
        optionB: "As rare but not unusual",
        optionC: "As exceptionally rare",
        correctAnswer: "C) As exceptionally rare",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "Hughie lives on two hundred pounds a year that an old aunt has _______ him.",
        options: ["left", "given", "allowed"],
        correctAnswer: "allowed",
      },
      {
        question:
          "Hughie tried a variety of professions, including the Stock Exchange, but made more _______ than profit.",
        options: ["loss", "money", "success"],
        correctAnswer: "loss",
      },
      {
        question:
          "Alan Trevor is a _______ with his brush, and his pictures are eagerly sought after.",
        options: ["failure", "master", "teacher"],
        correctAnswer: "master",
      },
      {
        question:
          "Laura's father, a retired colonel, wants Hughie to have _______ pounds of his own before allowing their engagement.",
        options: ["a hundred", "ten thousand", "a million"],
        correctAnswer: "ten thousand",
      },
      {
        question: "Alan Trevor is painting a model _______ in the studio.",
        options: ["artist", "friend", "beggar"],
        correctAnswer: "beggar",
      },
      {
        question:
          "Alan tells Hughie that the old beggar in the studio is one of the _______ men in Europe.",
        options: ["poorest", "richest", "kindest"],
        correctAnswer: "richest",
      },
      {
        question: "Hughie gives the old beggar a _______.",
        options: ["coat", "hat", "sovereign"],
        correctAnswer: "sovereign",
      },
      {
        question: "Baron Hausberg commissions Alan to paint him as a _______.",
        options: ["soldier", "dandy", "beggar"],
        correctAnswer: "beggar",
      },
      {
        question:
          "Hughie is surprised when he receives a cheque for _______ pounds as a wedding present from Baron Hausberg.",
        options: ["1,000", "5,000", "10,000"],
        correctAnswer: "10,000",
      },
      {
        question: "Alan remarks that model millionaires are _______.",
        options: ["ordinary", "rare but not unusual", "exceptionally rare"],
        correctAnswer: "exceptionally rare",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Hughie inherited a large fortune from his old aunt.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Hughie had a successful career at the Stock Exchange.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Alan Trevor is a famous painter with highly sought-after paintings.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Laura's father insisted that Hughie should have 10,000 pounds before their engagement.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The old beggar in Alan's studio was actually a millionaire named Baron Hausberg.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Hughie gave the old beggar a brand new coat.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Alan was aware of Baron Hausberg's true identity from the beginning.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Baron Hausberg gave Hughie a cheque for 1,000 pounds as a wedding present.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Hughie was happy to learn about Baron Hausberg's true identity.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Alan thought that model millionaires were quite common.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
