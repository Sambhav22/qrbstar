export const chapter = "Chapter -10: Aquatic Life";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "What are plants that fix themselves at one place to the bottom of the water body called?",
            "optionA": "Floating plants",
            "optionB": "Underwater plants",
            "optionC": "Fixed plants",
            "correctAnswer": "Fixed plants"
        }),
      shuffleOptions({
            "question": "Which of the following aquatic plants have poorly developed or even absent roots?",
            "optionA": "Fixed plants",
            "optionB": "Floating plants",
            "optionC": "Underwater plants",
            "correctAnswer": "Floating plants"
        }),
      shuffleOptions({
            "question": "Aquatic weeds such as pistia, marsilia, and hydrilla grow densely in water and cause:",
            "optionA": "Nutrient enrichment",
            "optionB": "Air purification",
            "optionC": "Water pollution",
            "correctAnswer": "Water pollution"
        }),
      shuffleOptions({
            "question": "What is the major concern regarding aquatic animals according to conservationists?",
            "optionA": "Overpopulation",
            "optionB": "Fragility of their environment",
            "optionC": "Adaptation to their surroundings",
            "correctAnswer": "Fragility of their environment"
        }),
      shuffleOptions({
            "question": "Animals that live on land are known as:",
            "optionA": "Terrestrial animals",
            "optionB": "Aquatic animals",
            "optionC": "Amphibians",
            "correctAnswer": "Terrestrial animals"
        }),
      shuffleOptions({
            "question": "Fishes breathe with the help of:",
            "optionA": "Lungs",
            "optionB": "Gills",
            "optionC": "Trachea",
            "correctAnswer": "Gills"
        }),
      shuffleOptions({
            "question": "Whales and dolphins are different from fishes because they:",
            "optionA": "Have fins",
            "optionB": "Breathe through lungs",
            "optionC": "Have scales",
            "correctAnswer": "Breathe through lungs"
        }),
      shuffleOptions({
            "question": "Crustaceans are shelled animals like shrimps, lobsters, and:",
            "optionA": "Barnacles",
            "optionB": "Turtles",
            "optionC": "Snakes",
            "correctAnswer": "Barnacles"
        }),
      shuffleOptions({
            "question": "Reptiles such as turtles move their front flippers through the water to swim while their rear flippers do the:",
            "optionA": "Steering",
            "optionB": "Breathing",
            "optionC": "Hunting",
            "correctAnswer": "Steering"
        }),
      shuffleOptions({
            "question": "Water birds such as ducks possess webbed feet which help them to:",
            "optionA": "Climb trees",
            "optionB": "Swim in water",
            "optionC": "Dig burrows",
            "correctAnswer": "Swim in water"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Aquatic plants that float on the surface of water are called __________ plants.",
          "optionA": "Fixed",
          "optionB": "Floating",
          "optionC": "Underwater",
          "correctAnswer": "Floating"
        }),
      shuffleOptions({
          "question": "Plants like lotus and water lily belong to which category of aquatic plants?",
          "optionA": "Fixed Plants",
          "optionB": "Floating Plants",
          "optionC": "Underwater Plants",
          "correctAnswer": "Fixed Plants"
        }),
      shuffleOptions({
          "question": "Which of the following aquatic plants remain completely immersed in water?",
          "optionA": "Lotus",
          "optionB": "Water Lily",
          "optionC": "Hydrilla",
          "correctAnswer": "Hydrilla"
        }),
      shuffleOptions({
          "question": "Aquatic weeds such as pistia, marsilia, and hydrilla grow densely in water and cause __________.",
          "optionA": "Water clarity",
          "optionB": "Water pollution",
          "optionC": "Water temperature increase",
          "correctAnswer": "Water pollution"
        }),
      shuffleOptions({
          "question": "Animals that live on land are known as __________ animals.",
          "optionA": "Aquatic",
          "optionB": "Terrestrial",
          "optionC": "Amphibious",
          "correctAnswer": "Terrestrial"
        }),
      shuffleOptions({
          "question": "Which of the following animals is an aquatic mammal?",
          "optionA": "Frog",
          "optionB": "Whale",
          "optionC": "Turtle",
          "correctAnswer": "Whale"
        }),
      shuffleOptions({
          "question": "What do crustaceans use to breathe?",
          "optionA": "Lungs",
          "optionB": "Gills",
          "optionC": "Trachea",
          "correctAnswer": "Gills"
        }),
      shuffleOptions({
          "question": "Which of the following animals is considered an amphibian?",
          "optionA": "Fish",
          "optionB": "Turtle",
          "optionC": "Frog",
          "correctAnswer": "Frog"
        }),
      shuffleOptions({
          "question": "Seahorse and seadragon are examples of __________ aquatic animals.",
          "optionA": "Common",
          "optionB": "Unusual",
          "optionC": "Marine",
          "correctAnswer": "Unusual"
        }),
      shuffleOptions({
          "question": "Amphibians are found both __________ and in water.",
          "optionA": "On land",
          "optionB": "In the air",
          "optionC": "Underwater",
          "correctAnswer": "On land"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Aquatic plants that float on the surface of water are called floating plants.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Plants like lotus and water lily belong to the category of underwater plants.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Aquatic weeds such as pistia, marsilia, and hydrilla help in keeping the water clean.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Animals that live on land are known as amphibious animals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Whales and dolphins are examples of aquatic mammals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Crustaceans breathe through lungs.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Turtles are considered amphibians.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Seahorse and seadragon are common aquatic animals.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Amphibians are found only on land.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "All fish breathe through gills.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
