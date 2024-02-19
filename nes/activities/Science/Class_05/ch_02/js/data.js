export const chapter = "Chapter - 2: Animal Life";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "How do birds, reptiles, and mammals primarily breathe?",
          optionA: "Through spiracles",
          optionB: "Through moist skin",
          optionC: "With the help of lungs",
          correctAnswer: "C",
        },
        {
          question:
            "What is the function of spiracles in insects like cockroach and grasshopper?",
          optionA: "To absorb oxygen from the water",
          optionB: "To carry air to all parts of the body",
          optionC: "To breathe through tiny holes on their bodies",
          correctAnswer: "C",
        },
        {
          question: "Which aquatic animals breathe through gills?",
          optionA: "Dolphins and whales",
          optionB: "Turtles and penguins",
          optionC: "Fish",
          correctAnswer: "C",
        },
        {
          question:
            "How do dolphins and whales differ in their breathing method from other mammals?",
          optionA: "They breathe through their nostrils and mouth",
          optionB: "They breathe through gills",
          optionC:
            "They breathe through the blowhole on the top of their heads",
          correctAnswer: "C",
        },
        {
          question: "What is the purpose of the hollow bones in birds?",
          optionA: "To help them swim",
          optionB: "To make flying easier",
          optionC: "To absorb oxygen from the air",
          correctAnswer: "B",
        },
        {
          question: "What body covering is common among fish and reptiles?",
          optionA: "Feathers",
          optionB: "Scales",
          optionC: "Fur",
          correctAnswer: "B",
        },
        {
          question: "How do feathers benefit birds?",
          optionA: "They make the body waterproof",
          optionB: "They help in breathing",
          optionC: "They assist in flying and keep the body warm",
          correctAnswer: "C",
        },
        {
          question: "What purpose does fur serve in mammals?",
          optionA: "To help them breathe",
          optionB: "To keep them warm in winter and cool in summer",
          optionC: "To protect them from predators",
          correctAnswer: "B",
        },
        {
          question: "What is migration in animals?",
          optionA: "Breathing process",
          optionB: "Large-scale movement from one place to another",
          optionC: "Types of body coverings",
          correctAnswer: "B",
        },
        {
          question:
            "Which animal species migrates from Canada and North America to Mexico?",
          optionA: "Arctic tern",
          optionB: "Siberian cranes",
          optionC: "Monarch butterflies",
          correctAnswer: "C",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "All animals breathe in oxygen, but they take it differently. Birds, reptiles, and mammals breathe with the help of __________, earthworms breathe through their __________, and fish breathe through their __________.",
          optionA: "Spiracles, skin, fins",
          optionB: "Lungs, skin, fins",
          optionC: "Gills, spiracles, skin",
          correctAnswer: "A",
        },
        {
          question:
            "Insects like cockroach and grasshopper breathe through tiny holes called __________ present on their bodies. Spiracles lead to air tubes, which carry air to all parts of the body, facilitating the exchange of gases through the process of __________.",
          optionA: "Gills, transpiration",
          optionB: "Spiracles, respiration",
          optionC: "Spiracles, transpiration",
          correctAnswer: "C",
        },
        {
          question:
            "Creatures living in damp environments, like frogs, use their lungs to breathe on land, but in water, they breathe through their __________.",
          optionA: "Fins",
          optionB: "Spiracles",
          optionC: "Moist skin",
          correctAnswer: "C",
        },
        {
          question:
            "Water animals breathe through their __________, which are thin and flat organs richly supplied with blood vessels. Dolphins and whales, although aquatic, breathe through their __________ instead of gills.",
          optionA: "Spiracles, fins",
          optionB: "Gills, lungs",
          optionC: "Fins, blowholes",
          correctAnswer: "B",
        },
        {
          question:
            "Turtles have four paddle-like limbs, while ducks and gulls have __________ to swim in water.",
          optionA: "Fins",
          optionB: "Webbed feet",
          optionC: "Flippers",
          correctAnswer: "B",
        },
        {
          question:
            "Insects, such as butterflies and houseflies, have __________ to fly.",
          optionA: "Fins",
          optionB: "Scales",
          optionC: "Wings",
          correctAnswer: "C",
        },
        {
          question:
            "The bodies of fish and reptiles are covered with __________. The scales on the body of fish are flexible, overlapping, and waterproof.",
          optionA: "Fur",
          optionB: "Feathers",
          optionC: "Scales",
          correctAnswer: "C",
        },
        {
          question:
            "Feathers help birds to fly and keep their bodies __________.",
          optionA: "Dry",
          optionB: "Warm",
          optionC: "Moist",
          correctAnswer: "B",
        },
        {
          question:
            "All mammals have fur of one sort or another. Fur keeps the animals __________ in winter and cool in summer.",
          optionA: "Wet",
          optionB: "Warm",
          optionC: "Cold",
          correctAnswer: "B",
        },
        {
          question:
            "Large-scale movement of an animal species from one place to another is called __________. Birds like the Arctic tern travel a very long distance from the Arctic to the Antarctica and back.",
          optionA: "Hibernation",
          optionB: "Migration",
          optionC: "Adaptation",
          correctAnswer: "B",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Animals like birds, reptiles, and mammals primarily breathe through spiracles, skin, and fins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Insects like cockroach and grasshopper breathe through tiny holes called spiracles, which lead to air tubes facilitating transpiration.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Creatures living in damp environments, like frogs, breathe through their fins when in water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Dolphins and whales, being aquatic mammals, breathe through gills instead of lungs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question:
            "Turtles have webbed feet, while ducks and gulls have flippers to swim in water.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Insects, such as butterflies and houseflies, have scales on their bodies to facilitate flight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question: "Feathers help birds to fly and keep their bodies moist.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question: "The bodies of fish and reptiles are covered with fur.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "b) False",
        },
        {
          question: "Fur keeps mammals warm in winter and cool in summer.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
        {
          question:
            "Migration is the large-scale movement of an animal species, such as birds traveling from the Arctic to the Antarctica and back.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "a) True",
        },
      ],
    ],
  };
}

export var activityData;
