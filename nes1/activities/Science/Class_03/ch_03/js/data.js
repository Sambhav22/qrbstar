export const chapter = "Chapter - 3: Eating Habits of Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What do herbivores eat primarily?",
          optionA: "Flesh of other animals",
          optionB: "Plants and their products",
          optionC: "Both plants and flesh",
          correctAnswer: "B) Plants and their products",
        },
        {
          question:
            "Which of the following animals is classified as a carnivore?",
          optionA: "Elephant",
          optionB: "Monkey",
          optionC: "Tiger",
          correctAnswer: "C) Tiger",
        },
        {
          question:
            "What is the special feeding habit of herbivores like cows and deer?",
          optionA: "Chewing bones",
          optionB: "Chewing the cud",
          optionC: "Swallowing prey whole",
          correctAnswer: "B) Chewing the cud",
        },
        {
          question:
            "How do carnivores like lions and tigers consume their food?",
          optionA: "Chewing bones",
          optionB: "Swallowing prey whole",
          optionC: "Chewing flesh and bones",
          correctAnswer: "C) Chewing flesh and bones",
        },
        {
          question:
            "Which group of animals uses a long and sticky tongue to catch prey?",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "B) Carnivores",
        },
        {
          question:
            "What do animals such as butterflies, moths, and mosquitoes use to consume liquid food?",
          optionA: "Sharp front teeth",
          optionB: "Long, hollow tube-like mouth part",
          optionC: "A trunk",
          correctAnswer: "B) Long, hollow tube-like mouth part",
        },
        {
          question:
            "Which type of animals lap up water or milk with their tongue?",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "B) Carnivores",
        },
        {
          question:
            "What is formed when plants are eaten by animals, and those animals are, in turn, eaten by other animals?",
          optionA: "Water cycle",
          optionB: "Food chain",
          optionC: "Plant cycle",
          correctAnswer: "B) Food chain",
        },
        {
          question:
            "How do animals like frogs, lizards, and chameleons catch their prey?",
          optionA: "Chewing",
          optionB: "Swallowing whole",
          optionC: "Using a long, sticky tongue",
          correctAnswer: "C) Using a long, sticky tongue",
        },
        {
          question: "What do earthworms primarily swallow?",
          optionA: "Solid food",
          optionB: "Leaves and branches",
          optionC: "Soil",
          correctAnswer: "C) Soil",
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
            "Herbivores are animals that primarily feed on ___________.",
          optionA: "Insects and worms",
          optionB: "Plants and their products",
          optionC: "Flesh of other animals",
          correctAnswer: "B",
        },
        {
          question:
            "Carnivores, such as lion, tiger, and fox, have sharp, pointed, and curved front teeth to tear ___________.",
          optionA: "Leaves and branches",
          optionB: "Flesh and bones",
          optionC: "Seeds and fruits",
          correctAnswer: "B",
        },
        {
          question:
            "Omnivores, like bears and chimpanzees, feed on both ___________.",
          optionA: "Plants and their products",
          optionB: "Insects and worms",
          optionC: "Flesh and bones",
          correctAnswer: "A",
        },
        {
          question:
            "Special feeding habits of herbivores, such as cows and deer, include a gum pad to help them eat ___________.",
          optionA: "Seeds and fruits",
          optionB: "Leaves and grass",
          optionC: "Insects and worms",
          correctAnswer: "B",
        },
        {
          question:
            "Animals like rabbits and squirrels have sharp front teeth to bite into ___________.",
          optionA: "Flesh and bones",
          optionB: "Leaves and branches",
          optionC: "Seeds and fruits",
          correctAnswer: "C",
        },
        {
          question:
            "Carnivores such as snakes do not have chewing teeth and swallow their whole ___________.",
          optionA: "Leaves and branches",
          optionB: "Prey",
          optionC: "Seeds and fruits",
          correctAnswer: "B",
        },
        {
          question:
            "Animals like butterflies, moths, and mosquitoes have a long, hollow tube-like mouth part used to suck ___________.",
          optionA: "Leaves and branches",
          optionB: "Liquid food",
          optionC: "Flesh and bones",
          correctAnswer: "B",
        },
        {
          question:
            "Cats and dogs lap up water or milk with their tongue but chew the solid ___________.",
          optionA: "Leaves and branches",
          optionB: "Flesh and bones",
          optionC: "Seeds and fruits",
          correctAnswer: "B",
        },
        {
          question:
            "The remains of dead plants and animals, as well as tiny insects, are found in the soil swallowed by ___________.",
          optionA: "Butterflies",
          optionB: "Earthworms",
          optionC: "Snakes",
          correctAnswer: "B",
        },
        {
          question:
            "A chain formed where plants are eaten by animals, and these animals are, in turn, eaten by other animals is called ___________.",
          optionA: "Water cycle",
          optionB: "Food web",
          optionC: "Food chain",
          correctAnswer: "C",
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
            "Herbivores feed on both plants and flesh of other animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Carnivores, like lions and tigers, have sharp front teeth to tear flesh.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Omnivores, such as bears and chimpanzees, eat only plants and their products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Herbivores like cows and deer have front teeth in their upper jaws for chewing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rabbits and squirrels have sharp front teeth to bite into seeds and fruits.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Carnivores such as snakes have grinding teeth at the back of their mouths.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Animals like butterflies, moths, and mosquitoes have no teeth at all.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Cats and dogs lap up water or milk with their tongue and also chew the solid food they eat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Earthworms swallow the soil, which contains the remains of dead plants and animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A food chain is formed when plants are eaten by animals, and those animals are, in turn, eaten by other animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
