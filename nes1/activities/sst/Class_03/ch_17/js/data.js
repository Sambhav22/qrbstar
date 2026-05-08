export const chapter = "Chapter - 17: The Story of Early Men ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What were early men known for?",
        optionA: "Their advanced technology",
        optionB: "Their complex societies",
        optionC: "Their primitive way of life",
        correctAnswer: "C",
      },
      {
        question: "Early men belonged to which family of animals?",
        optionA: "Primates",
        optionB: "Canids",
        optionC: "Felines",
        correctAnswer: "A",
      },
      {
        question: "Where did early men live during their early years?",
        optionA: "Caves",
        optionB: "Skyscrapers",
        optionC: "Beaches",
        correctAnswer: "A",
      },
      {
        question: "How did early men procure food during their primitive era?",
        optionA: "By farming",
        optionB: "By hunting and gathering",
        optionC: "By trading with neighboring tribes",
        correctAnswer: "B",
      },
      {
        question: "What did early men use as tools to kill animals?",
        optionA: "Wooden sticks",
        optionB: "Sharp stones",
        optionC: "Metal spears",
        correctAnswer: "B",
      },
      {
        question: "How did early men discover fire?",
        optionA: "By rubbing sticks together",
        optionB: "By finding it in a jungle",
        optionC: "By watching animals use it",
        correctAnswer: "A",
      },
      {
        question: "What was the primary benefit of fire for early men?",
        optionA: "Cooking food",
        optionB: "Providing light",
        optionC: "Scaring away other tribes",
        correctAnswer: "A",
      },
      {
        question: "How did early men learn about agriculture?",
        optionA: "Through formal education",
        optionB: "By observing seeds growing from fallen fruits",
        optionC: "By trial and error",
        correctAnswer: "B",
      },
      {
        question: "Where did early men settle after learning agriculture?",
        optionA: "In caves",
        optionB: "Near riversides",
        optionC: "In treehouses",
        correctAnswer: "B",
      },
      {
        question:
          "What invention significantly improved land transportation for early men?",
        optionA: "Boats",
        optionB: "Wooden carts without wheels",
        optionC: "The wheel",
        correctAnswer: "C",
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
          "Early men used __________ for hitting animals and digging out roots.",
        options: ["Wooden sticks", "Sharp stones", "Metal tools"],
        correctAnswer: "Sharp stones",
      },
      {
        question:
          "The discovery of fire was a significant milestone for early men because it protected them from the _______.",
        options: ["Heat", "Cold", "Rain"],
        correctAnswer: "Cold",
      },
      {
        question: "Early men's primary source of food was hunting and _______.",
        options: ["Farming", "Food gathering", "Fishing"],
        correctAnswer: "Food gathering",
      },
      {
        question:
          "Early men learned about agriculture when they noticed that seeds from ripe fruits on the ground grew into _______.",
        options: ["Animals", "Trees", "Plants"],
        correctAnswer: "Plants",
      },
      {
        question:
          "To improve their farming, early men started to live near _______.",
        options: ["Mountains", "Riversides", "Deserts"],
        correctAnswer: "Riversides",
      },
      {
        question:
          "Early men used different tools to make farming easy and began to _______ animals.",
        options: ["Eat", "Hunt", "Tame"],
        correctAnswer: "Tame",
      },
      {
        question:
          "Early men saw logs of wood floating in the river and used them for _______.",
        options: ["Building houses", "Traveling by water", "Making fire"],
        correctAnswer: "Traveling by water",
      },
      {
        question:
          "Early men noticed that round pieces of tree trunks rolled easily and fitted them to their carts to create the first _______.",
        options: ["Boats", "Cars", "Wheels"],
        correctAnswer: "Wheels",
      },
      {
        question:
          "The invention of the wheel was a significant turning point in the life of early men, making traveling on land _______.",
        options: ["Slower", "Easier and faster", "Impossible"],
        correctAnswer: "Easier and faster",
      },
      {
        question:
          "Today, a variety of wheels made from wood, steel, rubber, etc., are used in various _______.",
        options: ["Foods", "Machines, toys, and vehicles", "Clothing items"],
        correctAnswer: "Machines, toys, and vehicles",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Early men lived in modern houses.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Early men primarily used wooden sticks as tools.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The discovery of fire had no significant impact on early men's lives.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Early men learned about agriculture by observing seeds growing from fallen fruits.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early men preferred to live in desert regions to grow crops.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Early men domesticated animals to help with farming and carrying loads.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early men used boats made from metal for traveling on water.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Early men invented the wheel to make traveling on land more challenging.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The invention of the wheel had a significant impact on early men's lives.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Early men used wheels made from wood, steel, and rubber in various machines, toys, and vehicles.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
