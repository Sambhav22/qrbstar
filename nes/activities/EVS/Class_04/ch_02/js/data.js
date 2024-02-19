export const chapter = "Chapter - 2: Houses- Then and Now";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What material is commonly used for constructing houses in desert regions?",
            options: [
              "a) Bamboo and wood",
              "b) Bricks, cement, steel",
              "c) Mud",
            ],
            answer: "c) Mud",
          },
          {
            question:
              "In places with heavy rainfall, what type of roofs do houses typically have?",
            options: [
              "a) Flat roofs",
              "b) Slanting roofs",
              "c) Thatched roofs",
            ],
            answer: "b) Slanting roofs",
          },
          {
            question:
              "What are houses in earthquake-prone areas primarily made of?",
            options: [
              "a) Bricks, cement, steel",
              "b) Bamboo and wood",
              "c) Blocks of snow",
            ],
            answer: "b) Bamboo and wood",
          },
          {
            question:
              "What type of houses are constructed in polar regions, using blocks of snow?",
            options: ["a) Igloos", "b) Bungalows", "c) Cottages"],
            answer: "a) Igloos",
          },
          {
            question:
              "What are modern architectural bungalows primarily made of in big cities?",
            options: [
              "a) Mud",
              "b) Bamboo and wood",
              "c) Bricks, cement, steel",
            ],
            answer: "c) Bricks, cement, steel",
          },
          {
            question:
              "What term is used for permanent, expensive houses that take a lot of time to build?",
            options: ["a) Slums", "b) Pucca houses", "c) Cottages"],
            answer: "b) Pucca houses",
          },
          {
            question:
              "What were the common building materials used in houses from olden times?",
            options: [
              "a) Cement, concrete, glass",
              "b) Bricks, mud, wood",
              "c) Steel, iron, marbles",
            ],
            answer: "b) Bricks, mud, wood",
          },
          {
            question: "What is lacking in slums according to the text?",
            options: [
              "a) Clean drinking water, public services, proper infrastructure",
              "b) Modern facilities",
              "c) Adequate sunlight",
            ],
            answer:
              "a) Clean drinking water, public services, proper infrastructure",
          },
          {
            question:
              "In the past, what open space was usually preferred by people for family gatherings?",
            options: ["a) Verandah", "b) Patio", "c) Terrace"],
            answer: "a) Verandah",
          },
          {
            question:
              "What has led to a change in the style of construction from olden to modern times?",
            options: [
              "a) Increase in population",
              "b) Lack of building materials",
              "c) Decrease in technology",
            ],
            answer: "a) Increase in population",
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
        fill_in_the_blank_questions: [
          {
            question:
              "In desert regions, houses are primarily made of __________ to keep them cooler inside.",
            options: ["a) Bamboo", "b) Mud", "c) Bricks, cement, steel"],
            answer: "b) Mud",
          },
          {
            question:
              "Houses in earthquake-prone areas are constructed using __________ and wood.",
            options: [
              "a) Snow blocks",
              "b) Bamboo",
              "c) Bricks, cement, steel",
            ],
            answer: "b) Bamboo",
          },
          {
            question:
              "In polar regions, houses are made up of blocks of __________, known as Igloos.",
            options: ["a) Wood", "b) Mud", "c) Snow"],
            answer: "c) Snow",
          },
          {
            question:
              "Beautiful bungalows with modern architectural design are made up of bricks, cement, steel, marbles, tiles, etc., and are known as __________ houses.",
            options: ["a) Pucca", "b) Thatched", "c) Slum"],
            answer: "a) Pucca",
          },
          {
            question:
              "Slums lack basic necessities like clean drinking water, public services, and proper __________.",
            options: ["a) Infrastructure", "b) Ventilation", "c) Sunlight"],
            answer: "a) Infrastructure",
          },
          {
            question:
              "From olden to modern times, the style of construction has changed, and houses are now made with newer building materials like cement, concrete, glass, bricks, steel, and __________.",
            options: ["a) Wood", "b) Iron", "c) Bamboo"],
            answer: "b) Iron",
          },
          {
            question:
              "People who live in slums lead a miserable life due to the lack of basic necessities such as clean drinking water, public services, and proper __________.",
            options: ["a) Sunlight", "b) Infrastructure", "c) Ventilation"],
            answer: "b) Infrastructure",
          },
          {
            question:
              "In olden times, houses were constructed with limestone, wood, stone chips, and __________ bricks.",
            options: ["a) Bamboo", "b) Mud", "c) Iron"],
            answer: "b) Mud",
          },
          {
            question:
              "The houses in present times are made in smaller areas than the houses of olden times due to the increase in __________.",
            options: [
              "a) Building materials",
              "b) Population",
              "c) Technology",
            ],
            answer: "b) Population",
          },
          {
            question:
              "Advanced technology has helped make modern houses with far more facilities than earlier, primarily found in __________ areas.",
            options: ["a) Rural", "b) Urban", "c) Polar"],
            answer: "b) Urban",
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
        true_false_questions: [
          {
            question:
              "Houses in desert regions are primarily made of mud to keep them cooler inside.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Houses in earthquake-prone areas are typically made of bamboo and wood.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "Polar region houses are constructed with bricks, cement, and steel.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Slums often lack basic necessities like clean drinking water, public services, and proper infrastructure.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "In olden times, houses were constructed with limestone, wood, stone chips, and bamboo.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Modern architectural bungalows are made of bricks, cement, steel, marbles, and tiles.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
          {
            question:
              "People living in slums lead a comfortable life with all the modern facilities.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Houses in present times are made with larger areas due to the decrease in population.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "From olden to modern times, the style of construction has remained the same.",
            options: ["a) True", "b) False"],
            answer: "b) False",
          },
          {
            question:
              "Advanced technology has contributed to making houses with more facilities than earlier.",
            options: ["a) True", "b) False"],
            answer: "a) True",
          },
        ],
      },
    ],
  };
}

export var activityData;
