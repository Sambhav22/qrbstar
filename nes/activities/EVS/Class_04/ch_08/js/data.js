export const chapter = "Chapter - 8: Blooming Flowers";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the main function of roots in a plant?",
            options: {
              a: "Producing flowers",
              b: "Absorbing water and minerals from the soil",
              c: "Holding the plant firmly into the soil",
            },
            answer: "b",
          },
          {
            question:
              "Which type of root system does grass, wheat, corn, rye, and rice plants have?",
            options: {
              a: "Taproot",
              b: "Fibrous root",
              c: "Both taproot and fibrous root",
            },
            answer: "b",
          },
          {
            question:
              "What is the outermost green part of the flower that protects it when it is a bud called?",
            options: {
              a: "Sepals",
              b: "Petals",
              c: "Stamens",
            },
            answer: "a",
          },
          {
            question:
              "Which part of the flower is responsible for producing pollen?",
            options: {
              a: "Sepals",
              b: "Petals",
              c: "Stamens",
            },
            answer: "c",
          },
          {
            question:
              "What is the female part of the flower consisting of stigma, style, and ovary called?",
            options: {
              a: "Sepals",
              b: "Petals",
              c: "Carpel",
            },
            answer: "c",
          },
          {
            question:
              "Which of the following is NOT a seasonal flower mentioned in the text?",
            options: {
              a: "Rose",
              b: "Tulip",
              c: "Jasmine",
            },
            answer: "c",
          },
          {
            question:
              "What is the primary purpose of flowers like rose, jasmine, and mogra?",
            options: {
              a: "Making food",
              b: "Producing pollen",
              c: "Making perfumes",
            },
            answer: "c",
          },
          {
            question:
              "What process is carried out by leaves in the presence of sunlight, as mentioned in the text?",
            options: {
              a: "Respiration",
              b: "Transpiration",
              c: "Photosynthesis",
            },
            answer: "c",
          },
          {
            question:
              "Which part of the plant is responsible for holding the plant firmly into the soil?",
            options: {
              a: "Stems",
              b: "Leaves",
              c: "Roots",
            },
            answer: "c",
          },
          {
            question: "What are some uses of flowers mentioned in the text?",
            options: {
              a: "Making food and perfumes",
              b: "Making honey and obtaining spices",
              c: "All of the above",
            },
            answer: "c",
          },
        ],
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
          "The ____________ of a plant are present under the ground and absorb water and minerals from the soil.",
        options: {
          a: "Stems",
          b: "Leaves",
          c: "Roots",
        },
        answer: "c",
      },
      {
        question:
          "__________ root consists of many small roots which branch out from the base of the stem.",
        options: {
          a: "Taproot",
          b: "Fibrous root",
          c: "Stamen",
        },
        answer: "b",
      },
      {
        question:
          "Flowers generally have a nice fragrance. Examples include rose, jasmine, lotus, and ____________.",
        options: {
          a: "Marigold",
          b: "Tulip",
          c: "Sunflower",
        },
        answer: "a",
      },
      {
        question:
          "The outermost green part of the flower, which protects the flower when it is a bud, is called ____________.",
        options: {
          a: "Sepals",
          b: "Petals",
          c: "Stamens",
        },
        answer: "a",
      },
      {
        question:
          "Stamens are the ____________ part of a flower, and they produce pollens in a part called the anther.",
        options: {
          a: "Female",
          b: "Male",
          c: "Both male and female",
        },
        answer: "b",
      },
      {
        question:
          "The thin flask-shaped structure in the middle of the flower, consisting of stigma, style, and ovary, is called ____________.",
        options: {
          a: "Sepals",
          b: "Petals",
          c: "Carpel",
        },
        answer: "c",
      },
      {
        question: "Flowers like palash and gulmohar bloom in ____________.",
        options: {
          a: "Spring",
          b: "Summer",
          c: "Winter",
        },
        answer: "a",
      },
      {
        question:
          "Fragrant flowers, like rose and jasmine, are used to make ____________.",
        options: {
          a: "Food",
          b: "Perfumes",
          c: "Honey",
        },
        answer: "b",
      },
      {
        question:
          "Leaves are of green color due to the presence of ____________.",
        options: {
          a: "Water",
          b: "Chlorophyll",
          c: "Sunlight",
        },
        answer: "b",
      },
      {
        question:
          "__________ is made from flowers, as bees collect nectar from flowers to prepare it.",
        options: {
          a: "Jam",
          b: "Honey",
          c: "Maple syrup",
        },
        answer: "b",
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
            statement:
              "The primary purpose of roots in a plant is to produce flowers.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Taproot is a type of root system where many small roots branch out from the base of the stem.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Sepals are the male parts of a flower responsible for producing pollens.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Stamens consist of the stigma, style, and ovary with ovules in a flower.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement: "Flowers like palash (butea) bloom in summer.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Fragrant flowers, like rose, jasmine, and mogra, are used to make spices.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Leaves are green due to the presence of chlorophyll and their main function is to carry out photosynthesis.",
            options: {
              true: true,
              false: false,
            },
            answer: true,
          },
          {
            statement:
              "Fibrous root consists of one main root that grows down straight from the stem.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Flowers of some plants, like broccoli, artichoke, and cauliflower, are used for decoration purposes.",
            options: {
              true: false,
              false: true,
            },
            answer: false,
          },
          {
            statement:
              "Honey is made from nectar collected by bees from flowers.",
            options: {
              true: true,
              false: false,
            },
            answer: true,
          },
        ],
      },
    ],
  };
}

export var activityData;
