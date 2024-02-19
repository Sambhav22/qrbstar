export const chapter = "Chapter - 4: My House ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does living together in a family teach us?",
          optionA: "To fly",
          optionB: "To share, be loving, and be caring",
          optionC: "To dance",
          correctAnswer: "To share, be loving, and be caring",
        },
        {
          question: "How many types of houses are mentioned in the text?",
          optionA: "Three",
          optionB: "Four",
          optionC: "Two",
          correctAnswer: "Two",
        },
        {
          question:
            "What materials are mentioned in the text as used in Navya's permanent house construction?",
          optionA: "Paper and plastic",
          optionB: "Bricks, cement, wood, etc.",
          optionC: "Glass and metal",
          correctAnswer: "Bricks, cement, wood, etc.",
        },
        {
          question: "What is the purpose of a drawing room in Navya's house?",
          optionA: "To draw pictures",
          optionB: "To sit and talk with guests",
          optionC: "To study",
          correctAnswer: "To sit and talk with guests",
        },
        {
          question: "Which room in Navya's house is meant for studying?",
          optionA: "Bathroom",
          optionB: "Kitchen",
          optionC: "Study room",
          correctAnswer: "Study room",
        },
        {
          question:
            "What kind of houses are mentioned as temporary in nature in the text?",
          optionA: "Brick houses",
          optionB: "Permanent houses",
          optionC: "Houseboat, caravan, igloo",
          correctAnswer: "Houseboat, caravan, igloo",
        },
        {
          question:
            "What are some materials mentioned for making temporary houses?",
          optionA: "Gold and silver",
          optionB: "Clothes, wood, ice, etc.",
          optionC: "Plastic and glass",
          correctAnswer: "Clothes, wood, ice, etc.",
        },
        {
          question:
            "What do all types of houses, whether permanent or temporary, provide to us?",
          optionA: "Entertainment",
          optionB: "Shelter",
          optionC: "Education",
          correctAnswer: "Shelter",
        },
        {
          question:
            "What ceremony is mentioned in the text related to Navya's house?",
          optionA: "Graduation ceremony",
          optionB: "Housewarming ceremony (havan)",
          optionC: "Wedding ceremony",
          correctAnswer: "Housewarming ceremony (havan)",
        },
        {
          question:
            "What is emphasized regarding the upkeep of houses in the text?",
          optionA: "They should be left dirty",
          optionB: "They should be kept neat and clean",
          optionC: "Only permanent houses should be cleaned",
          correctAnswer: "They should be kept neat and clean",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "We all live in a house with our ___________.",
          optionA: "Friends",
          optionB: "Family",
          optionC: "Neighbours",
          correctAnswer: "Family",
        },
        {
          question: "Living together teaches us to _________.",
          optionA: "Play video games",
          optionB: "Share, be loving, and be caring",
          optionC: "Avoid each other",
          correctAnswer: "Share, be loving, and be caring",
        },
        {
          question:
            "Generally, houses are of two types: permanent houses and __________.",
          optionA: "Temporary houses",
          optionB: "Mobile homes",
          optionC: "Floating houses",
          correctAnswer: "Temporary houses",
        },
        {
          question:
            "Navya's house is made up of bricks, cement, and ___________.",
          optionA: "Straw",
          optionB: "Wood",
          optionC: "Plastic",
          correctAnswer: "Wood",
        },
        {
          question:
            "The drawing room in Navya's house is used to sit and talk with ___________.",
          optionA: "Pets",
          optionB: "Ghosts",
          optionC: "Guests",
          correctAnswer: "Guests",
        },
        {
          question: "Navya's house has a study room for ___________.",
          optionA: "Watching TV",
          optionB: "Studying",
          optionC: "Sleeping",
          correctAnswer: "Studying",
        },
        {
          question: "The kitchen in Navya's house is used to ___________.",
          optionA: "Play music",
          optionB: "Cook food",
          optionC: "Paint",
          correctAnswer: "Cook food",
        },
        {
          question:
            "Houses made of clothes, wood, ice, etc., are examples of ___________ houses.",
          optionA: "Permanent",
          optionB: "Temporary",
          optionC: "Luxury",
          correctAnswer: "Temporary",
        },
        {
          question:
            "Houseboat, caravan, and igloo are examples of temporary houses made for ___________ purposes.",
          optionA: "Everyday living",
          optionB: "Particular",
          optionC: "Luxury",
          correctAnswer: "Particular",
        },
        {
          question:
            "All houses, whether permanent or temporary, provide ___________ to us.",
          optionA: "Entertainment",
          optionB: "Shelter",
          optionC: "Education",
          correctAnswer: "Shelter",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Living together teaches us to share, be loving, and be caring.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Navya's house is made up of plastic.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The drawing room in Navya's house is used for studying.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Houses made of clothes, wood, and ice are considered permanent.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Houseboat, caravan, and igloo are examples of temporary houses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "All houses, whether permanent or temporary, provide education to us.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The kitchen in Navya's house is used for cooking food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Housewarming ceremony (havan) is mentioned in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Houses made of bricks, cement, and wood are considered temporary.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We should keep our houses neat and clean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
