export const chapter = "Chapter - 21: Pairs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "Which pair of nouns represents human genders?",
            options: ["cup and saucer", "lock and key", "boys and girls"],
            answer: "boys and girls",
          },
          {
            question: "What pair of nouns can be found in a kitchen?",
            options: ["uncle and aunt", "cat and dog", "cup and saucer"],
            answer: "cup and saucer",
          },
          {
            question: "Which set of nouns represents familial relationships?",
            options: ["shoes and socks", "lock and key", "uncle and aunt"],
            answer: "uncle and aunt",
          },
          {
            question: "What pair of nouns are commonly kept as pets?",
            options: ["yes and no", "cat and dog", "fruits and vegetables"],
            answer: "cat and dog",
          },
          {
            question:
              "In which pair do both nouns belong to the same category of objects?",
            options: [
              "shoes and socks",
              "fruits and vegetables",
              "lock and key",
            ],
            answer: "fruits and vegetables",
          },
          {
            question:
              "Which pair of nouns is often used to express agreement or disagreement?",
            options: ["yes and no", "cat and dog", "cup and saucer"],
            answer: "yes and no",
          },
          {
            question:
              "What set of nouns are commonly associated with personal belongings?",
            options: ["lock and key", "boys and girls", "shoes and socks"],
            answer: "shoes and socks",
          },
          {
            question: "Which pair of nouns is related to securing something?",
            options: ["uncle and aunt", "lock and key", "cup and saucer"],
            answer: "lock and key",
          },
          {
            question: "What pair of nouns can represent living beings?",
            options: ["cup and saucer", "fruits and vegetables", "cat and dog"],
            answer: "cat and dog",
          },
          {
            question:
              "In which pair do both nouns typically refer to inanimate objects?",
            options: ["boys and girls", "lock and key", "uncle and aunt"],
            answer: "lock and key",
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
              "In a family, there is usually an ____________ and an ____________.",
            options: ["cup", "saucer", "uncle", "aunt", "cat", "dog"],
            answer: "uncle, aunt",
          },
          {
            question:
              "When deciding between options, we often say ____________ for approval and ____________ for disapproval.",
            options: ["yes", "no", "lock", "key", "shoes", "socks"],
            answer: "yes, no",
          },
          {
            question:
              "To secure your belongings, you might need to use a ____________ with the correct ____________.",
            options: ["cup", "saucer", "lock", "key", "cat", "dog"],
            answer: "lock, key",
          },
          {
            question:
              "In a pet store, you can find various ____________ and ____________ for companionship.",
            options: ["boys", "girls", "cat", "dog", "fruits", "vegetables"],
            answer: "cat, dog",
          },
          {
            question:
              "For a picnic, it's common to pack a basket with various ____________ and ____________.",
            options: [
              "shoes",
              "socks",
              "fruits",
              "vegetables",
              "cup",
              "saucer",
            ],
            answer: "fruits, vegetables",
          },
          {
            question:
              "When organizing your wardrobe, it's essential to pair your ____________ with the matching ____________.",
            options: ["uncle", "aunt", "lock", "key", "shoes", "socks"],
            answer: "shoes, socks",
          },
          {
            question:
              "At a party, you might find a variety of ____________ and ____________ for guests to use.",
            options: ["yes", "no", "cup", "saucer", "lock", "key"],
            answer: "cup, saucer",
          },
          {
            question:
              "In a school, there are usually separate facilities for ____________ and ____________.",
            options: ["boys", "girls", "lock", "key", "uncle", "aunt"],
            answer: "boys, girls",
          },
          {
            question:
              "When adopting a pet, you may choose between a ____________ or a ____________.",
            options: ["cat", "dog", "fruits", "vegetables", "yes", "no"],
            answer: "cat, dog",
          },
          {
            question:
              "To express agreement, you might say ____________, and to express disagreement, you might say ____________.",
            options: ["lock", "key", "boys", "girls", "yes", "no"],
            answer: "yes, no",
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
            question: "Cats and dogs are often kept as pets.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Lock and key are commonly used to secure belongings.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Fruits and vegetables are typically found in a picnic basket.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Uncle and aunt represent familial relationships.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Boys and girls are often associated with human genders.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "A cup and saucer are commonly used in a kitchen.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "Shoes and socks are typically worn together.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Yes and no are commonly used to express agreement and disagreement.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question: "A cat and a dog are examples of inanimate objects.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question: "Lock and key represent living beings.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
        ],
      },
    ],
  };
}

export var activityData;
