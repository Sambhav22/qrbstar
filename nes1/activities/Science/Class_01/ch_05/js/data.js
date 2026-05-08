export const chapter = "Chapter - 5: FOOD AND SHELTER FOR ANIMALS";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What do herbivores primarily eat?",
          optionA: "Flesh of other animals",
          optionB: "Both plants and flesh of other animals",
          optionC: "Plants and other parts of plants",
          correctAnswer: "Plants and other parts of plants",
        },
        {
          question: "Which of the following is an example of a carnivore?",
          optionA: "Monkey",
          optionB: "Eagle",
          optionC: "Cow",
          correctAnswer: "Eagle",
        },
        {
          question: "What do omnivores eat?",
          optionA: "Only plants",
          optionB: "Both plants and flesh of other animals",
          optionC: "Only flesh of other animals",
          correctAnswer: "Both plants and flesh of other animals",
        },
        {
          question: "Where do animals like lions, wolves, and bears live?",
          optionA: "On trees",
          optionB: "In kennels",
          optionC: "In dens",
          correctAnswer: "In dens",
        },
        {
          question: "Which animal lives under trees as a natural shelter?",
          optionA: "Elephant",
          optionB: "Monkey",
          optionC: "Lion",
          correctAnswer: "Elephant",
        },
        {
          question: "What do birds make for shelter?",
          optionA: "Beehive",
          optionB: "Nest",
          optionC: "Burrow",
          correctAnswer: "Nest",
        },
        {
          question: "What is the primary shelter for dogs?",
          optionA: "Stable",
          optionB: "Coop",
          optionC: "Kennel",
          correctAnswer: "Kennel",
        },
        {
          question: "Where do fish typically live as mentioned in the text?",
          optionA: "Stable",
          optionB: "Coop",
          optionC: "Aquarium",
          correctAnswer: "Aquarium",
        },
        {
          question: "Which animals make burrows as their homes?",
          optionA: "Bees",
          optionB: "Rabbits",
          optionC: "Ants",
          correctAnswer: "Rabbits",
        },
        {
          question:
            "Where are sheep and goats usually kept as mentioned in the text?",
          optionA: "Pen",
          optionB: "Den",
          optionC: "Kennel",
          correctAnswer: "Pen",
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
            "Herbivores are animals that primarily eat __________, grass, and other parts of plants.",
          optionA: "Meat",
          optionB: "Insects",
          optionC: "Plants",
          correctAnswer: "Plants",
        },
        {
          question:
            "Carnivores are animals that consume the __________ of other animals.",
          optionA: "Flesh",
          optionB: "Nectar",
          optionC: "Leaves",
          correctAnswer: "Flesh",
        },
        {
          question:
            "Omnivores are animals that eat both __________ and __________ of other animals.",
          optionA: "Plants, fruits",
          optionB: "Plants, flesh",
          optionC: "Insects, seeds",
          correctAnswer: "Plants, flesh",
        },
        {
          question:
            "Animals like lions, wolves, and bears often live in __________ as their natural shelters.",
          optionA: "Burrows",
          optionB: "Dens",
          optionC: "Nests",
          correctAnswer: "Dens",
        },
        {
          question:
            "Some animals, like elephants and zebras, live under __________ as a form of natural shelter.",
          optionA: "Burrows",
          optionB: "Trees",
          optionC: "Nests",
          correctAnswer: "Trees",
        },
        {
          question:
            "Monkeys, baboons, and koalas are examples of animals that live __________.",
          optionA: "Underwater",
          optionB: "On trees",
          optionC: "In burrows",
          correctAnswer: "On trees",
        },
        {
          question: "Birds create their shelters by building __________.",
          optionA: "Burrows",
          optionB: "Nests",
          optionC: "Beehives",
          correctAnswer: "Nests",
        },
        {
          question:
            "Rabbits make their homes in underground tunnels known as __________.",
          optionA: "Nests",
          optionB: "Burrows",
          optionC: "Dens",
          correctAnswer: "Burrows",
        },
        {
          question: "People often keep dogs in a __________.",
          optionA: "Coop",
          optionB: "Kennel",
          optionC: "Stable",
          correctAnswer: "Kennel",
        },
        {
          question: "Horses are commonly kept in a __________.",
          optionA: "Kennel",
          optionB: "Stable",
          optionC: "Shed",
          correctAnswer: "Stable",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Plants are examples of herbivores.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Carnivores are animals that primarily eat plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Omnivores eat both plants and flesh of other animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Dens are natural shelters for animals like lions, wolves, and bears.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Monkeys, baboons, and koalas live in burrows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Birds make nests as their shelters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Rabbits make beehives as their homes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Dogs are commonly kept in a stable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Fish are kept in an aquarium as their shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Sheep and goats are often kept in pens.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
