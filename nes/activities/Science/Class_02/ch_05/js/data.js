export const chapter = "Chapter - 5: USEFUL ANIMALS";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the primary source of milk?",
          optionA: "Sheep",
          optionB: "Cow",
          optionC: "Goat",
          correctAnswer: "Cow",
        },
        {
          question:
            "Which of the following is not mentioned as a product derived from milk?",
          optionA: "Ghee",
          optionB: "Jam",
          optionC: "Cheese",
          correctAnswer: "Jam",
        },
        {
          question: "What is honey collected from?",
          optionA: "Ants",
          optionB: "Honeydew",
          optionC: "Honeybees",
          correctAnswer: "Honeybees",
        },
        {
          question: "Wool is primarily obtained from which animal?",
          optionA: "Goat",
          optionB: "Sheep",
          optionC: "Camel",
          correctAnswer: "Sheep",
        },
        {
          question: "What is silk obtained from?",
          optionA: "Sheep",
          optionB: "Silkworms",
          optionC: "Spiders",
          correctAnswer: "Silkworms",
        },
        {
          question: "Leather is made from the skin of which animals?",
          optionA: "Tigers",
          optionB: "Buffaloes",
          optionC: "Lions",
          correctAnswer: "Buffaloes",
        },
        {
          question:
            "What are animals like horses, donkeys, and elephants referred to when used for carrying loads?",
          optionA: "Beasts of Leisure",
          optionB: "Beasts of Burden",
          optionC: "Beasts of Speed",
          correctAnswer: "Beasts of Burden",
        },
        {
          question:
            "Which animals are used for ploughing fields in agriculture?",
          optionA: "Sheep",
          optionB: "Oxen",
          optionC: "Camels",
          correctAnswer: "Oxen",
        },
        {
          question: "What is a sweet, thick liquid collected from honeybees?",
          optionA: "Syrup",
          optionB: "Honey",
          optionC: "Nectar",
          correctAnswer: "Honey",
        },
        {
          question:
            "Which animal product is commonly used to make footwear, belts, wallets, and bags?",
          optionA: "Fur",
          optionB: "Leather",
          optionC: "Silk",
          correctAnswer: "Leather",
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
            "We get _______ from cow, buffalo, goat, etc. Milk is an essential part of our daily diet.",
          optionA: "Meat",
          optionB: "Eggs",
          optionC: "Milk",
          correctAnswer: "Milk",
        },
        {
          question:
            "People get eggs from hens, ducks, and geese. Eggs are used in making cakes, pastries, _______ etc.",
          optionA: "Milk",
          optionB: "Cookies",
          optionC: "Meat",
          correctAnswer: "Cookies",
        },
        {
          question:
            "Some people consume meat of animals like chicken, goat, sheep, fish as a part of their _______.",
          optionA: "Clothing",
          optionB: "Diet",
          optionC: "Transport",
          correctAnswer: "Diet",
        },
        {
          question:
            "Honey is a sweet, thick liquid. Which is collected from the hives of _______.",
          optionA: "Cows",
          optionB: "Hens",
          optionC: "Honeybees",
          correctAnswer: "Honeybees",
        },
        {
          question:
            "Wool is obtained from _______. It is used to make woollen clothes like sweaters, scarfs, caps, socks, gloves, etc.",
          optionA: "Silkworms",
          optionB: "Buffaloes",
          optionC: "Sheep",
          correctAnswer: "Sheep",
        },
        {
          question:
            "Silk is obtained from _______. It is used to make clothes like sarees, suits, shirts, etc.",
          optionA: "Silkworms",
          optionB: "Sheep",
          optionC: "Buffaloes",
          correctAnswer: "Silkworms",
        },
        {
          question:
            "Leather is made from the skin of dead animals like buffaloes, crocodiles, snakes, etc. This leather is used for making _______.",
          optionA: "Food",
          optionB: "Clothing",
          optionC: "Footwear, belts, wallets, bags, etc.",
          correctAnswer: "Footwear, belts, wallets, bags, etc.",
        },
        {
          question:
            "Animals like horses, donkeys, elephants, and ponies are used for carrying loads. These animals are called _______.",
          optionA: "Beasts of Leisure",
          optionB: "Beasts of Burden",
          optionC: "Beasts of Speed",
          correctAnswer: "Beasts of Burden",
        },
        {
          question:
            "Some animals like horses, oxen, camels, etc. pull carts and carry us from one place to another, serving as a means of _______.",
          optionA: "Clothing",
          optionB: "Transport",
          optionC: "Agriculture",
          correctAnswer: "Transport",
        },
        {
          question:
            "Animals like oxen and bulls are used to plough the fields in _______.",
          optionA: "Clothing",
          optionB: "Transport",
          optionC: "Agriculture",
          correctAnswer: "Agriculture",
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
            "Milk is used as baby food, for making tea, sweets, and other products like curd, ghee, cheese, butter, etc.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Honey is obtained from the hives of butterflies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wool is primarily obtained from sheep and is used to make woollen clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Silk is obtained from silkworms and is used to make clothes like sarees, suits, shirts, etc.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Leather is made from the skin of dead animals like buffaloes, crocodiles, and snakes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Animals like horses, donkeys, elephants, and ponies are called 'Beasts of Leisure.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Some animals like horses, oxen, and camels pull carts and carry us from one place to another.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Animals like oxen and bulls are commonly used for ploughing the fields in agriculture.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Eggs are used in making cookies, pastries, and cakes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Honey is a sour, thin liquid collected from the hives of honeybees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
