export const chapter = "Chapter - 10: Aquatic Life";
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
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What are plants that float on the surface of water called?",
            options: ["Fixed Plants", "Floating Plants", "Underwater Plants"],
            answer: "Floating Plants",
          },
          {
            question:
              "Which aquatic plants have long hollow stems and flat leaves that float on the surface of water?",
            options: ["Floating Plants", "Underwater Plants", "Fixed Plants"],
            answer: "Fixed Plants",
          },
          {
            question:
              "What is the primary characteristic of aquatic weeds that causes issues in water bodies?",
            options: [
              "They promote water cleanliness",
              "They spread slowly",
              "They grow unwantedly, clog waterways, and cause water pollution",
            ],
            answer:
              "They grow unwantedly, clog waterways, and cause water pollution",
          },
          {
            question:
              "What is the distinguishing feature of terrestrial animals?",
            options: [
              "They can swim",
              "They breathe through gills",
              "They live on land",
            ],
            answer: "They live on land",
          },
          {
            question: "What is the common method of respiration for fishes?",
            options: [
              "Breathing through lungs",
              "Breathing through nostrils",
              "Breathing through gills",
            ],
            answer: "Breathing through gills",
          },
          {
            question:
              "Which group of animals has flippers and special limbs for walking across the bottom of water bodies?",
            options: ["Fishes", "Crustaceans", "Reptiles"],
            answer: "Crustaceans",
          },
          {
            question:
              "What distinguishes water birds like ducks and herons in terms of adaptation to water environments?",
            options: ["Webbed feet", "Long and slim legs", "Flippers"],
            answer: "Webbed feet",
          },
          {
            question:
              "Which of the following is an unusual aquatic animal that looks like a piece of floating weed but is actually a fish?",
            options: ["Seahorse", "Seadragon", "Crocodile"],
            answer: "Seadragon",
          },
          {
            question: "What feature defines amphibians like frogs and toads?",
            options: [
              "They live only on land",
              "They breathe with the help of their moist skin and can live both in water or on land",
              "They have fins for swimming",
            ],
            answer:
              "They breathe with the help of their moist skin and can live both in water or on land",
          },
          {
            question:
              "How do whales and dolphins differ from fishes in terms of respiration?",
            options: [
              "They breathe through gills",
              "They breathe through lungs and come up to the surface to gulp in air",
              "They do not need to breathe",
            ],
            answer:
              "They breathe through lungs and come up to the surface to gulp in air",
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
        fillInTheBlankQuestions: [
          {
            question:
              "Aquatic plants like ____________, duckweed, water chestnut etc. that float on the surface of water are called floating plants.",
            options: ["Lotus", "Water Lily", "Water Hyacinth"],
            answer: "Water Hyacinth",
          },
          {
            question:
              "Weeds such as pistia, marsilia, hydrilla, etc. grow densely in water and spread very fast, causing ____________.",
            options: [
              "Water Cleanliness",
              "Clogged Waterways",
              "Aquatic Harmony",
            ],
            answer: "Clogged Waterways",
          },
          {
            question:
              "Animals that live on land are known as ____________ animals, including cats, dogs, lizards, mice, worms, etc.",
            options: ["Aquatic", "Terrestrial", "Amphibian"],
            answer: "Terrestrial",
          },
          {
            question:
              "Fishes move in water with the help of ____________ and breathe with the help of ____________.",
            options: ["Gills, Lungs", "Fins, Gills", "Fins, Lungs"],
            answer: "Fins, Gills",
          },
          {
            question:
              "Crustaceans, such as shrimps, lobsters, barnacles, crabs, prawns, etc., have special limbs that help them to walk across the bottom of water bodies and breathe through ____________.",
            options: ["Nostrils", "Lungs", "Gills"],
            answer: "Gills",
          },
          {
            question:
              "Water birds, such as duck or heron, breathe through lungs and tiny nostrils located at the top of their beaks, and ducks possess ____________ which help them to swim in water.",
            options: ["Webbed Feet", "Flippers", "Clawed Feet"],
            answer: "Webbed Feet",
          },
          {
            question:
              "Unusual aquatic animals like seadragon, seahorse, crocodile, fish, etc. also live in the seas or oceans. Seahorse is a fish that looks like a ____________.",
            options: ["Whale", "Dolphin", "Horse"],
            answer: "Horse",
          },
          {
            question:
              "Frogs or toads are known as ____________ as they are found both on land or in water.",
            options: ["Marine Animals", "Amphibians", "Reptiles"],
            answer: "Amphibians",
          },
          {
            question:
              "Whales and dolphins are aquatic mammals that breathe through ____________ and keep coming up to the surface to gulp in air.",
            options: ["Gills", "Nostrils", "Lungs"],
            answer: "Lungs",
          },
          {
            question:
              "Seadragon looks like a piece of floating weed but is actually a fish whose body is covered with plates and has very thin and transparent ____________.",
            options: ["Wings", "Fins", "Tails"],
            answer: "Fins",
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
        trueFalseQuestions: [
          {
            question:
              "Aquatic plants like lotus and water lily are examples of floating plants.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Fixed plants have roots that fix themselves at one place to the bottom of the water body.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Floating plants, such as water hyacinth, have well-developed roots fixed to the bottom of the water body.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Weeds like pistia, marsilia, and hydrilla can contribute to water pollution by clogging waterways.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question: "Alligators are examples of terrestrial animals.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Fishes move in water with the help of fins and breathe through lungs.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Crustaceans breathe through gills and have flippers and special limbs for walking across the bottom of water bodies.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Water birds, like ducks and herons, have webbed feet to help them stand in water.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Seadragon is a fish that looks like a piece of floating weed and has a body covered with plates and transparent fins.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "Amphibians like frogs and toads breathe with the help of gills in water and use webbed feet for swimming.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
