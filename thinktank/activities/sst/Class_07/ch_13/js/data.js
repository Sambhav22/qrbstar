export const chapter = "Chapter - 13: Natural and Human Environment  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does the term 'environment' signify?",
        optionA: "Only the land we live on",
        optionB: "Only the air we breathe",
        optionC: "Surroundings or circumstances around a person or a thing",
        correctAnswer:
          "c) Surroundings or circumstances around a person or a thing",
      },
      {
        question:
          "How does the environment influence the types of natural vegetation, animals, and birds found in a place?",
        optionA: "Environment has no impact on natural features",
        optionB: "It determines the kinds of natural features at a place",
        optionC:
          "Natural features are random and not influenced by the environment",
        correctAnswer:
          "b) It determines the kinds of natural features at a place",
      },
      {
        question:
          "What are the two broad types of natural environment mentioned in the text?",
        optionA: "Urban and Rural Environment",
        optionB: "Physical Environment and Biological Environment",
        optionC: "Human-made Environment and Natural Environment",
        correctAnswer: "b) Physical Environment and Biological Environment",
      },
      {
        question:
          "Which sphere of the environment is described as the crust or uppermost solid layer of the earth?",
        optionA: "Hydrosphere",
        optionB: "Atmosphere",
        optionC: "Lithosphere",
        correctAnswer: "c) Lithosphere",
      },
      {
        question: "What is the primary component of the atmosphere?",
        optionA: "Carbon dioxide",
        optionB: "Nitrogen",
        optionC: "Ozone",
        correctAnswer: "b) Nitrogen",
      },
      {
        question:
          "Which zone is described as the narrow zone where the lithosphere, hydrosphere, and atmosphere come into contact with each other?",
        optionA: "Atmosphere",
        optionB: "Biosphere",
        optionC: "Hydrosphere",
        correctAnswer: "b) Biosphere",
      },
      {
        question:
          "What does the text identify as a potential threat to the environment?",
        optionA: "Trees",
        optionB: "Cows",
        optionC: "Plastic",
        correctAnswer: "c) Plastic",
      },
      {
        question:
          "What factors are mentioned as responsible for the continuous change in the environment?",
        optionA: "Earthquakes and Volcanoes",
        optionB: "Only natural factors",
        optionC: "Building activities and natural factors",
        correctAnswer: "c) Building activities and natural factors",
      },
      {
        question:
          "What is the result of massive changes in the environment caused by human activities?",
        optionA: "Nature easily balances the harm",
        optionB: "Adverse effects on the quality of the environment",
        optionC: "No impact on the environment",
        correctAnswer: "b) Adverse effects on the quality of the environment",
      },
      {
        question:
          "Why is it essential to make efforts to conserve the environment according to the text?",
        optionA: "To promote urbanization",
        optionB: "To prevent natural disasters",
        optionC: "To reduce the population",
        correctAnswer: "b) To prevent natural disasters",
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
          "The term 'environment' signifies surroundings or circumstances around a ________ or a thing.",
        optionA: "Mountain",
        optionB: "Person",
        optionC: "River",
        correctAnswer: "b) Person",
      },
      {
        question:
          "In India, the environment varies from place to place, including hills, plains, and plateaus, influencing the types of ________ found at a place.",
        optionA: "Deserts",
        optionB: "Natural vegetation",
        optionC: "Skyscrapers",
        correctAnswer: "b) Natural vegetation",
      },
      {
        question:
          "The environment is divided into two broad types: natural environment and ________ environment.",
        optionA: "Urban",
        optionB: "Industrial",
        optionC: "Manmade",
        correctAnswer: "c) Manmade",
      },
      {
        question:
          "The physical environment comprises non-living elements such as land, water, air, and ________.",
        optionA: "Fire",
        optionB: "Rocks",
        optionC: "Light",
        correctAnswer: "b) Rocks",
      },
      {
        question:
          "The hydrosphere includes oceans, seas, rivers, lakes, ponds, springs, and ________ water.",
        optionA: "Underground",
        optionB: "Distilled",
        optionC: "Salty",
        correctAnswer: "a) Underground",
      },
      {
        question:
          "The atmosphere is a thin layer of air enveloping the earth, consisting of gases such as nitrogen, oxygen, argon, carbon dioxide, ozone, hydrogen, helium, etc., and extends up to a height of ________ km above the surface of the earth.",
        optionA: "100",
        optionB: "500",
        optionC: "1600",
        correctAnswer: "c) 1600",
      },
      {
        question:
          "The biosphere is a narrow zone where the lithosphere, hydrosphere, and atmosphere come into contact, and it is crucial for the survival of all kinds of ________.",
        optionA: "Rocks",
        optionB: "Living organisms",
        optionC: "Inanimate objects",
        correctAnswer: "b) Living organisms",
      },
      {
        question:
          "Human beings, with evolving needs, have modified the environment in various ways, such as growing trees, building houses, and using ________.",
        optionA: "Wind energy",
        optionB: "Plastic",
        optionC: "Solar power",
        correctAnswer: "b) Plastic",
      },
      {
        question:
          "The environment undergoes continuous change due to natural factors like earthquakes, volcanoes, storms, wind, sunlight, and ________ factors, such as building activities.",
        optionA: "Manmade",
        optionB: "Extraterrestrial",
        optionC: "Ethereal",
        correctAnswer: "a) Manmade",
      },
      {
        question:
          "The present-day human activities are causing an irreversible change in the environment, posing a potential threat that can be very dangerous for ________.",
        optionA: "Technology",
        optionB: "Wildlife",
        optionC: "Agriculture",
        correctAnswer: "b) Wildlife",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The environment is uniform at all places.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "The term 'biology' means life, and the biological environment includes non-living elements.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "The lithosphere is the uppermost solid layer of the earth, made up of rocks and soil.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question:
          "The hydrosphere includes oceans, seas, rivers, lakes, ponds, springs, and underground water.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question:
          "The atmosphere is a thick layer of air enveloping our earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "The biosphere is a zone where only living organisms can survive.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "Manmade environment includes elements created by human activities, such as buildings and roads.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question:
          "Human activities have no impact on the continuous change in the environment.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
      {
        question:
          "Natural factors responsible for environmental change include earthquakes, volcanoes, and storms.",
        optionA: "True",
        optionB: "False",correctAnswer: "A) True",
      },
      {
        question:
          "Efforts to conserve the environment are unnecessary as it can naturally balance any harm caused by human activities.",
        optionA: "True",
        optionB: "False",correctAnswer: "B) False",
      },
    ],
  };
}

export var activityData;
