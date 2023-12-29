export const chapter = "Chapter - 18: The Doll's House";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What color was the doll's house in the story?",
        options: ["A) Blue", "B) Green", "C) Red"],
        answer: "B",
      },
      {
        question: "Where did the children initially place the doll's house?",
        options: [
          "A) In the kitchen",
          "B) In the garden",
          "C) In the courtyard",
        ],
        answer: "C",
      },
      {
        question: "What was Kezia's favorite feature of the doll's house?",
        options: ["A) The red carpet", "B) The tiny porch", "C) The lamp"],
        answer: "C",
      },
      {
        question:
          "Who were the first two girls chosen by Isabel to see the doll's house?",
        options: [
          "A) Emmie Cole and Lena Logan",
          "B) Lottie and Kezia",
          "C) The little Kelveys",
        ],
        answer: "A",
      },
      {
        question: "Why were the Kelveys shunned by the other children?",
        options: [
          "A) Because they were older",
          "B) Because they were wealthy",
          "C) Because their parents were different",
        ],
        answer: "C",
      },
      {
        question:
          "What derogatory comment did Lena Logan make about Lil Kelvey?",
        options: [
          "A) She's going to be a doctor",
          "B) She's going to be a teacher",
          "C) She's going to be a servant",
        ],
        answer: "C",
      },
      {
        question: "How did Lil Kelvey react when Lena Logan insulted her?",
        options: [
          "A) She cried",
          "B) She laughed",
          "C) She didn't seem to mind",
        ],
        answer: "C",
      },
      {
        question:
          "Who reprimanded the children for inviting the Kelveys into the courtyard?",
        options: ["A) Aunt Beryl", "B) Mrs. Burnell", "C) The teacher"],
        answer: "A",
      },
      {
        question:
          "What kind gesture did Aunt Beryl make after scolding the Kelveys?",
        options: [
          "A) She apologized",
          "B) She described the doll's house to them",
          "C) She invited them in for tea",
        ],
        answer: "C",
      },
      {
        question: "What were the little Kelveys' names in the story?",
        options: [
          "A) Kate and Emily",
          "B) Lil and Elise",
          "C) Isabel and Lottie",
        ],
        answer: "B",
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
          "The children received a doll's house from their dear old ______________.",
        options: ["A) aunt", "B) grandmother", "C) mother"],
        correctAnswer: "B) grandmother",
      },
      {
        question:
          "The doll's house was propped up on two ______________ in the courtyard.",
        options: ["A) chairs", "B) wooden boxes", "C) tables"],
        correctAnswer: "B) wooden boxes",
      },
      {
        question:
          "The doll's house was painted in a dark, oily, spinach ______________ color.",
        options: ["A) green", "B) blue", "C) red"],
        correctAnswer: "A) green",
      },
      {
        question:
          "Kezia was particularly fascinated by the little ______________ in the doll's house.",
        options: ["A) lamp", "B) chimney", "C) window"],
        correctAnswer: "A) lamp",
      },
      {
        question:
          "Isabel, the eldest, chose to invite ______________ to see the doll's house first.",
        options: [
          "A) Emmie Cole and Lena Logan",
          "B) Lottie and Kezia",
          "C) the little Kelveys",
        ],
        correctAnswer: "A) Emmie Cole and Lena Logan",
      },
      {
        question:
          "The Kelveys were shunned by the other children because of their ______________ parents.",
        options: ["A) wealthy", "B) rude", "C) different"],
        correctAnswer: "C) different",
      },
      {
        question:
          "When Lena Logan insulted Lil Kelvey, Lil reacted by ______________.",
        options: ["A) crying", "B) laughing", "C) not seeming to mind"],
        correctAnswer: "C) not seeming to mind",
      },
      {
        question:
          "Who scolded the children for inviting the Kelveys into the courtyard?",
        options: ["A) Aunt Beryl", "B) Mrs. Burnell", "C) The teacher"],
        correctAnswer: "A) Aunt Beryl",
      },
      {
        question:
          "Aunt Beryl later invited the Kelveys into the house for ______________.",
        options: ["A) tea", "B) punishment", "C) a lecture"],
        correctAnswer: "A) tea",
      },
      {
        question: "The Kelveys' names in the story were ______________.",
        options: [
          "A) Kate and Emily",
          "B) Lil and Elise",
          "C) Isabel and Lottie",
        ],
        correctAnswer: "B) Lil and Elise",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The doll's house was placed in the kitchen.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The doll's house had red plush chairs in the drawing-room.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Burnell children were allowed to invite the Kelveys to see the doll's house.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Aunt Beryl scolded the children for inviting the Kelveys into the courtyard.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Lil Kelvey reacted with anger when Lena Logan insulted her.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The doll's house had two solid little chimneys glued on the roof.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The doll's house had a real functioning lamp.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The children chose to invite Isabel's school teacher to see the doll's house.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Aunt Beryl invited the Kelveys into the house for tea after scolding them.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The Kelveys' names were Kate and Emily.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
