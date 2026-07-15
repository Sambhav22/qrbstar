export const chapter = "Chapter - 6: Masculine and Feminine Nouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        text: "Some persons and animals are males. Some persons and animals are females. Male Nouns are called Masculine Nouns and Female Nouns are called Feminine Nouns. Example: Masculine Nouns Feminine Nouns uncle aunt horse mare bull COW prince princess peacock peahen cock hen",
        questions: [
          {
            question: "What are male nouns referred to as?",
            options: ["Masculine Nouns", "Feminine Nouns", "Neutral Nouns"],
            answer: "Masculine Nouns",
          },
          {
            question:
              "Which pair consists of a masculine noun and its feminine counterpart?",
            options: ["Horse, Cow", "Bull, Princess", "Peacock, Peahen"],
            answer: "Peacock, Peahen",
          },
          {
            question: "What term is used for female nouns?",
            options: ["Masculine Nouns", "Feminine Nouns", "Neutral Nouns"],
            answer: "Feminine Nouns",
          },
          {
            question: "Which noun represents a male animal?",
            options: ["Hen", "Mare", "Bull"],
            answer: "Bull",
          },
          {
            question: "Which of these is an example of a feminine noun?",
            options: ["Uncle", "Prince", "Aunt"],
            answer: "Aunt",
          },
          {
            question: "What is the female counterpart of a cock?",
            options: ["Hen", "Bull", "Mare"],
            answer: "Hen",
          },
          {
            question:
              "What word is used to describe nouns that represent males?",
            options: ["Female Nouns", "Masculine Nouns", "Androgynous Nouns"],
            answer: "Masculine Nouns",
          },
          {
            question:
              "Which noun pair signifies a male and a female respectively?",
            options: ["Princess, Uncle", "Horse, Mare", "Bull, Peahen"],
            answer: "Horse, Mare",
          },
          {
            question: "Which of these animals represents a female?",
            options: ["Peacock", "Bull", "Cow"],
            answer: "Cow",
          },
          {
            question: "What is the feminine noun for 'prince'?",
            options: ["Princess", "Aunt", "Peahen"],
            answer: "Princess",
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
        text: "Some persons and animals are males. Some persons and animals are females. Male Nouns are called Masculine Nouns and Female Nouns are called Feminine Nouns. Example: Masculine Nouns Feminine Nouns uncle aunt horse mare bull COW prince princess peacock peahen cock hen",
        questions: [
          {
            question:
              "__________ are called Masculine Nouns, while __________ are called Feminine Nouns.",
            options: [
              "Males, females",
              "Uncles, aunts",
              "Male Nouns, Female Nouns",
            ],
            answer: "Male Nouns, Female Nouns",
          },
          {
            question:
              "A ____________ is the Masculine Noun for a male horse, and a ____________ is the Feminine Noun for a female horse.",
            options: ["Stallion, cow", "Horse, mare", "Bull, peahen"],
            answer: "Horse, mare",
          },
          {
            question: "The Feminine Noun for a ____________ is COW.",
            options: ["Hen", "Bull", "Prince"],
            answer: "Bull",
          },
          {
            question:
              "An ____________ is referred to as the Masculine Noun for a male member of the royal family, and a ____________ is the Feminine Noun for a female member of the royal family.",
            options: ["Uncle, aunt", "Prince, princess", "Peacock, peahen"],
            answer: "Prince, princess",
          },
          {
            question: "For a ____________ (male), the Feminine Noun is peahen.",
            options: ["Cock", "Hen", "Bull"],
            answer: "Cock",
          },
          {
            question: "The Feminine Noun for a ____________ is hen.",
            options: ["Horse", "Prince", "Cock"],
            answer: "Cock",
          },
          {
            question:
              "Masculine Nouns are terms used for ____________, while Feminine Nouns are used for ____________.",
            options: [
              "Males, females",
              "Uncles, aunts",
              "Male animals, female animals",
            ],
            answer: "Male animals, female animals",
          },
          {
            question:
              "In the pair 'bull' and 'COW', 'bull' represents the ____________ Noun and 'COW' represents the ____________ Noun.",
            options: [
              "Masculine, Feminine",
              "Feminine, Masculine",
              "Female, Male",
            ],
            answer: "Masculine, Feminine",
          },
          {
            question:
              "A ____________ is the Masculine Noun for a male peacock, while a ____________ is the Feminine Noun for a female peacock.",
            options: ["Peacock, hen", "Cock, peahen", "Prince, princess"],
            answer: "Cock, peahen",
          },
          {
            question:
              "The Masculine Noun for 'uncle' corresponds to the Feminine Noun ____________.",
            options: ["Prince", "Aunt", "Horse"],
            answer: "Aunt",
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
        text: "Some persons and animals are males. Some persons and animals are females. Male Nouns are called Masculine Nouns and Female Nouns are called Feminine Nouns. Example: Masculine Nouns Feminine Nouns uncle aunt horse mare bull COW prince princess peacock peahen cock hen",
        questions: [
          {
            question:
              "Persons and animals can only be either males or females.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Masculine Nouns refer to female nouns.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "A bull represents a Feminine Noun.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The Feminine Noun for a peacock is peahen.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "A cock represents a Masculine Noun.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "All Male Nouns are referred to as Masculine Nouns.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Feminine Nouns are used for male animals.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Bull is a Masculine Noun.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "A peahen is the Feminine Noun for a peacock.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Uncle corresponds to a Feminine Noun.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
