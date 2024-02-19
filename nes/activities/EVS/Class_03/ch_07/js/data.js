export const chapter = "Chapter - 7: Beautiful World of the Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is George's favorite type of toy?",
          optionA: "Cars",
          optionB: "Dinosaurs",
          optionC: "Robots",
          correctAnswer: "b. Dinosaurs",
        },
        {
          question: "Where did George's father plan a trip for his birthday?",
          optionA: "Zoo",
          optionB: "Aquarium",
          optionC: "Field Museum, Chicago",
          correctAnswer: "c. Field Museum, Chicago",
        },
        {
          question: "What is the first dinosaur they see at the museum?",
          optionA: "T-Rex",
          optionB: "Velociraptor",
          optionC: "Titanosaur",
          correctAnswer: "c. Titanosaur",
        },
        {
          question: "What kind of animals are elephant, horse, and giraffe?",
          optionA: "Wild Animals",
          optionB: "Domestic Animals",
          optionC: "Aquatic Animals",
          correctAnswer: "a. Wild Animals",
        },
        {
          question:
            "Which category do animals like sheep, goat, and pig belong to?",
          optionA: "Flyers",
          optionB: "Small Animals",
          optionC: "Reptiles",
          correctAnswer: "b. Small Animals",
        },
        {
          question: "Where do aquatic animals like fish and turtle live?",
          optionA: "Desert",
          optionB: "Jungle",
          optionC: "Water",
          correctAnswer: "c. Water",
        },
        {
          question:
            "What are animals like snake, lizard, and crocodile called?",
          optionA: "Flyers",
          optionB: "Reptiles",
          optionC: "Herbivores",
          correctAnswer: "b. Reptiles",
        },
        {
          question: "What do herbivores eat?",
          optionA: "Flesh of other animals",
          optionB: "Both plants and animals",
          optionC: "Plants or plant products",
          correctAnswer: "c. Plants or plant products",
        },
        {
          question:
            "What is the category of animals like lion, tiger, and crocodile?",
          optionA: "Omnivores",
          optionB: "Carnivores",
          optionC: "Herbivores",
          correctAnswer: "b. Carnivores",
        },
        {
          question: "Where do pet animals like dog and cat live?",
          optionA: "Farms",
          optionB: "Houses",
          optionC: "Jungle",
          correctAnswer: "b. Houses",
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
            "Animals like __________, __________, and __________ are big animals.",
          optionA: "Monkey, Squirrel, Pig",
          optionB: "Elephant, Horse, Giraffe",
          optionC: "Fish, Turtle, Octopus",
          correctAnswer: "b. Elephant, Horse, Giraffe",
        },
        {
          question:
            "Animals such as __________ and __________ are kept by humans for their products and are called domestic animals.",
          optionA: "Tiger, Lion",
          optionB: "Goat, Sheep",
          optionC: "Snake, Lizard",
          correctAnswer: "b. Goat, Sheep",
        },
        {
          question:
            "Water animals like __________, __________, and __________ are also called aquatic animals.",
          optionA: "Elephant, Horse, Giraffe",
          optionB: "Fish, Turtle, Whale",
          optionC: "Snake, Lizard, Crocodile",
          correctAnswer: "b. Fish, Turtle, Whale",
        },
        {
          question:
            "Reptiles, such as __________, __________, and __________, are also known as crawling animals.",
          optionA: "Lion, Tiger, Crocodile",
          optionB: "Elephant, Horse, Giraffe",
          optionC: "Snake, Lizard, Crocodile",
          correctAnswer: "c. Snake, Lizard, Crocodile",
        },
        {
          question: "Insects and birds are classified as __________.",
          optionA: "Crawlers",
          optionB: "Flyers",
          optionC: "Swimmers",
          correctAnswer: "b. Flyers",
        },
        {
          question:
            "Animals like cow, buffalo, goat, and sheep, which eat plants or plant products, are known as __________.",
          optionA: "Carnivores",
          optionB: "Omnivores",
          optionC: "Herbivores",
          correctAnswer: "c. Herbivores",
        },
        {
          question:
            "Animals like lion, tiger, crocodile, and fox, which eat the flesh of other animals, are categorized as __________.",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "b. Carnivores",
        },
        {
          question:
            "Some animals like bear, dog, cat, and rat eat both plants and animals, and they are called __________.",
          optionA: "Herbivores",
          optionB: "Carnivores",
          optionC: "Omnivores",
          correctAnswer: "c. Omnivores",
        },
        {
          question:
            "Pet animals like __________ and __________ live with us in our homes for recreation.",
          optionA: "Elephant, Horse",
          optionB: "Dog, Cat",
          optionC: "Fish, Turtle",
          correctAnswer: "b. Dog, Cat",
        },
        {
          question:
            "Animals like rabbit, snake, and others have different types of shelters, such as __________ and __________.",
          optionA: "Farms, Houses",
          optionB: "Holes, Land and Water",
          optionC: "Jungle, Desert",
          correctAnswer: "b. Holes, Land and Water",
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
            "Animals like elephant, horse, and giraffe are small animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Aquatic animals have special features that help them live on land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Insects and birds are classified as flyers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Herbivores eat the flesh of other animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Reptiles are also known as crawling animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Domestic animals are kept by humans for their products.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Carnivores eat both plants and animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Pet animals like dog and cat live in the jungle.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Aquatic animals include fish, turtle, and octopus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Omnivores eat both plants and animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
