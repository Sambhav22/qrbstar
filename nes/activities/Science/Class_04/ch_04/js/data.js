export const chapter = "Chapter - 4: Reproduction in Animals  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "What is the term used to describe the period during which living things are alive before they die?",
            options: ["Reproduction", "Lifespan", "Metamorphosis"],
            answer: "Lifespan",
          },
          {
            question: "How do mammals give birth to their young ones?",
            options: [
              "By laying eggs",
              "Through metamorphosis",
              "By giving live birth",
            ],
            answer: "By giving live birth",
          },
          {
            question:
              "What is the primary purpose of reproduction among living beings?",
            options: [
              "To ensure a longer lifespan",
              "To protect young ones from enemies",
              "To ensure the existence of their kind on Earth",
            ],
            answer: "To ensure the existence of their kind on Earth",
          },
          {
            question:
              "Which animals are referred to as oviparous, laying eggs for reproduction?",
            options: ["Mammals", "Insects", "Reptiles"],
            answer: "Insects",
          },
          {
            question:
              "What is the protective covering of eggs made of calcium carbonate called?",
            options: ["Shell", "Albumen", "Yolk"],
            answer: "Shell",
          },
          {
            question:
              "How do birds nurture their eggs before they hatch into young ones?",
            options: [
              "By building nests",
              "By shedding skin",
              "By metamorphosis",
            ],
            answer: "By building nests",
          },
          {
            question:
              "What is the term used for the young cockroach or grasshopper that hatches from an egg?",
            options: ["Larva", "Nymph", "Maggot"],
            answer: "Nymph",
          },
          {
            question:
              "What is the stage called when a caterpillar encloses itself within a case, and the case is called a cocoon?",
            options: ["Larva", "Pupa", "Metamorphosis"],
            answer: "Pupa",
          },
          {
            question:
              "In the life cycle of a frog, what do tadpoles use to breathe in water?",
            options: ["Gills", "Lungs", "Spiracles"],
            answer: "Gills",
          },
          {
            question:
              "Among reptiles, which group tends to both eggs and babies, providing parental care?",
            options: ["Snakes", "Crocodiles", "Turtles"],
            answer: "Crocodiles",
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
              "Animals such as dogs, cats, cows, and horses are examples of ____________.",
            options: ["Oviparous animals", "Mammals", "Insects"],
            answer: "Mammals",
          },
          {
            question: "Birds build nests to lay ____________.",
            options: ["Puppies", "Eggs", "Larvae"],
            answer: "Eggs",
          },
          {
            question:
              "The protective covering of eggs is made of ____________.",
            options: ["Yolk", "Albumen", "Shell"],
            answer: "Shell",
          },
          {
            question:
              "In the life cycle of a butterfly, the stage where caterpillars enclose themselves in a case is called ____________.",
            options: ["Larva", "Pupa", "Metamorphosis"],
            answer: "Pupa",
          },
          {
            question:
              "Tadpoles, in the life cycle of a frog, breathe through ____________.",
            options: ["Gills", "Lungs", "Spiracles"],
            answer: "Gills",
          },
          {
            question:
              "Reptiles such as lizards and turtles lay ____________, but most of them do not provide parental care.",
            options: ["Eggs", "Larvae", "Puppies"],
            answer: "Eggs",
          },
          {
            question:
              "The process by which living beings produce more of their own kind is known as ____________.",
            options: ["Metamorphosis", "Reproduction", "Lifespan"],
            answer: "Reproduction",
          },
          {
            question:
              "The young bird will only develop at the proper temperature, which happens when the bird sits on the eggs for ____________.",
            options: ["Hours", "Days", "Weeks"],
            answer: "Weeks",
          },
          {
            question:
              "Insects such as butterflies and houseflies undergo a process called ____________ during their development.",
            options: ["Evolution", "Metamorphosis", "Reproduction"],
            answer: "Metamorphosis",
          },
          {
            question:
              "Crocodiles make nests in the ground and provide parental care to their eggs and babies, carrying them to the waterbody after the eggs ____________.",
            options: ["Hatch", "Develop", "Multiply"],
            answer: "Hatch",
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
            question: "Earthworms are oviparous animals.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "All reptiles provide parental care to their eggs and babies.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Butterflies undergo metamorphosis during their life cycle.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "True",
          },
          {
            question: "Mammals lay eggs for reproduction.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Tadpoles, in the life cycle of a frog, have lungs for breathing.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question: "All birds build nests to lay eggs.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "True",
          },
          {
            question: "The shell of bird eggs is made of albumen.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Camels can endure harsh conditions due to their surplus of water storage.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Insects such as butterflies and houseflies do not undergo metamorphosis.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "False",
          },
          {
            question:
              "Crocodiles make nests in the ground and provide parental care to their eggs and babies.",
            optionA: "True",
            optionB: "False",
            correctAnswer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
