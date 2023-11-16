export const chapter = "Chapter - 11: Our Helpers ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who sells us many things and services?",
        optionA: "Carpenter",
        optionB: "Shopkeeper",
        optionC: "Tailor",
        correctAnswer: "Shopkeeper",
      },
      {
        question: "Who stitches our clothes?",
        optionA: "Tailor",
        optionB: "Milkman",
        optionC: "Cobbler",
        correctAnswer: "Tailor",
      },
      {
        question: "Who sells us milk?",
        optionA: "Carpenter",
        optionB: "Policeman",
        optionC: "Milkman",
        correctAnswer: "Milkman",
      },
      {
        question: "Who makes furniture?",
        optionA: "Watchman",
        optionB: "Carpenter",
        optionC: "Doctor",
        correctAnswer: "Carpenter",
      },
      {
        question: "Who mends our shoes?",
        optionA: "Barber",
        optionB: "Cobbler",
        optionC: "Postman",
        correctAnswer: "Cobbler",
      },
      {
        question: "Who cuts our hair?",
        optionA: "Policeman",
        optionB: "Barber",
        optionC: "Shopkeeper",
        correctAnswer: "Barber",
      },
      {
        question: "Who protects us from thieves and robbers?",
        optionA: "Watchman",
        optionB: "Tailor",
        optionC: "Policeman",
        correctAnswer: "Policeman",
      },
      {
        question: "Who delivers letters to us?",
        optionA: "Doctor",
        optionB: "Postman",
        optionC: "Milkman",
        correctAnswer: "Postman",
      },
      {
        question: "Who treats us when we fall ill?",
        optionA: "Carpenter",
        optionB: "Doctor",
        optionC: "Cobbler",
        correctAnswer: "Doctor",
      },
      {
        question: "Who guards our houses at night?",
        optionA: "Watchman",
        optionB: "Shopkeeper",
        optionC: "Barber",
        correctAnswer: "Watchman",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "A shopkeeper sells us ______________ and services.",
        options: ["groceries", "many things", "toys"],
        correctAnswer: "many things",
      },
      {
        question: "A tailor ______________ our clothes.",
        options: ["cooks", "stitches", "delivers"],
        correctAnswer: "stitches",
      },
      {
        question: "A milkman sells us ______________.",
        options: ["ice cream", "milk", "newspapers"],
        correctAnswer: "milk",
      },
      {
        question: "A carpenter makes ______________.",
        options: ["shoes", "furniture", "sandwiches"],
        correctAnswer: "furniture",
      },
      {
        question: "A cobbler ______________ our shoes.",
        options: ["paints", "mends", "designs"],
        correctAnswer: "mends",
      },
      {
        question: "A barber ______________ our hair.",
        options: ["cuts", "washes", "combs"],
        correctAnswer: "cuts",
      },
      {
        question: "A policeman protects us from ______________ and robbers.",
        options: ["aliens", "thieves", "doctors"],
        correctAnswer: "thieves",
      },
      {
        question: "A postman delivers us ______________.",
        options: ["pizza", "letters", "flowers"],
        correctAnswer: "letters",
      },
      {
        question: "A doctor treats us when we fall ______________.",
        options: ["happy", "ill", "rich"],
        correctAnswer: "ill",
      },
      {
        question: "A watchman guards our houses at ______________.",
        options: ["noon", "night", "morning"],
        correctAnswer: "night",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A tailor is responsible for stitching our clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A milkman sells us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A carpenter can make furniture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A cobbler can mend our shoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A barber cuts our hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A policeman protects us from thieves and robbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A postman delivers us letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A doctor can treat us when we fall ill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A watchman guards our houses at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A shopkeeper sells us many things and services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
