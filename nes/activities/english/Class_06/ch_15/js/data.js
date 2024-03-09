export const chapter = "Chapter -15: The Cattle";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the primary source of animal protein in the diet of many people in the country mentioned in the text?",
          optionA: "Chicken",
          optionB: "Fish",
          optionC: "Milk",
          correctAnswer: "c. Milk",
        },
        {
          question: "What are the five products of a cow known as?",
          optionA: "Panchagavya",
          optionB: "Pentagavya",
          optionC: "Hexagavya",
          correctAnswer: "a. Panchagavya",
        },
        {
          question: "In Hinduism, why is the cow considered significant?",
          optionA: "It yields more milk than other animals",
          optionB: "Lord Krishna is associated with cows",
          optionC: "Cows are excellent for draught work",
          correctAnswer: "b. Lord Krishna is associated with cows",
        },
        {
          question:
            "In terms of milk production, how does buffalo milk compare to cow milk in India?",
          optionA: "Buffalo milk is considered less healthy",
          optionB: "Buffalo milk is richer with 50% more fat",
          optionC:
            "Buffalo milk is lighter and preferred in religious ceremonies",
          correctAnswer: "b. Buffalo milk is richer with 50% more fat",
        },
        {
          question:
            "What is the second most precious possession for a farmer in the mentioned country, after land?",
          optionA: "Gold",
          optionB: "Cattle",
          optionC: "Machinery",
          correctAnswer: "b. Cattle",
        },
        {
          question: "How many stomachs do cattle have, according to the text?",
          optionA: "One",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "c. Four",
        },
        {
          question:
            "Which breeds are mentioned as exotic breeds introduced in India to improve milk production?",
          optionA: "Amritmahal and Gir",
          optionB: "Jersey and Holstein-Friesian",
          optionC: "Bachuar and Dangi",
          correctAnswer: "b. Jersey and Holstein-Friesian",
        },
        {
          question:
            "What health issues can arise from consuming unclean milk, as mentioned in the text?",
          optionA: "Allergies",
          optionB: "Diabetes",
          optionC: "Typhoid fever, dysentery, and more",
          correctAnswer: "c. Typhoid fever, dysentery, and more",
        },
        {
          question: "How many sections is a cattle's stomach divided into?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "c. Four",
        },
        {
          question:
            "Why is pasteurization mentioned in relation to milk preservation?",
          optionA: "To improve taste",
          optionB: "To increase nutritional value",
          optionC:
            "To preserve milk over a longer period and eliminate bacteria",
          correctAnswer:
            "c. To preserve milk over a longer period and eliminate bacteria",
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
            "The cattle are often referred to as a farmer's second most precious possession after ______________.",
          optionA: "Gold",
          optionB: "Land",
          optionC: "Machinery",
          correctAnswer: "b. Land",
        },
        {
          question:
            "In Hinduism, Lord Krishna is known as Govind, which means the ______________ of cows.",
          optionA: "Protector",
          optionB: "Consumer",
          optionC: "Ignorer",
          correctAnswer: "a. Protector",
        },
        {
          question:
            "The five products of a cow, including milk, urine, dung, curd, and ghee, are collectively known as ______________.",
          optionA: "Pentalogy",
          optionB: "Panchagavya",
          optionC: "Hexalogy",
          correctAnswer: "b. Panchagavya",
        },
        {
          question:
            "Buffalo milk in India is considered healthier than cow milk due to its higher content of ______________.",
          optionA: "Protein",
          optionB: "Fat",
          optionC: "Calcium",
          correctAnswer: "b. Fat",
        },
        {
          question:
            "The cattle found in India are unique to the Indian subcontinent and are not found in ______________ countries.",
          optionA: "African",
          optionB: "European",
          optionC: "American",
          correctAnswer: "b. European",
        },
        {
          question:
            "The domesticated cattle differ from wild ones in their smaller size, horns, and the development of ______________ characteristics.",
          optionA: "Fur",
          optionB: "Milk",
          optionC: "Feather",
          correctAnswer: "b. Milk",
        },
        {
          question:
            "The cattle's stomach is divided into ______________ sections, which play different roles in digestion.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "c. Four",
        },
        {
          question:
            "Some courtiers grow jealous of the ragged minister in the story due to his ______________ at the court.",
          optionA: "Wealth",
          optionB: "Magical powers",
          optionC: "Position",
          correctAnswer: "c. Position",
        },
        {
          question:
            "The minister's daily routine is falsely rumored to include practicing ______________ before meeting the king.",
          optionA: "Magic",
          optionB: "Conspiracy",
          optionC: "Rebellion",
          correctAnswer: "a. Magic",
        },
        {
          question:
            "To preserve milk and eliminate bacteria, it is recommended to carry out proper ______________.",
          optionA: "Milking",
          optionB: "Feeding",
          optionC: "Housing",
          correctAnswer: "a. Milking",
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
            "The cattle are considered a farmer's most precious possession after land.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Buffalo milk in India is considered less healthy than cow milk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Domesticated cattle have smaller size, horns, and lack milk characteristics compared to wild ones.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The cattle's stomach is divided into three sections.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Jealous courtiers spread rumors about the ragged minister's involvement in dark arts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The minister's daily routine of practicing magic is proven true when the king visits his house.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The cattle's diet should comprise dry grass, green fodder, and grain mixture.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The ragged scholar approached the king for aid because his wife needed better shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The king decided to grant the ragged scholar a large sum of money to improve his living conditions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Pasteurization is recommended to preserve milk over a longer period and eliminate bacteria.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
   ],
  };
}

export var activityData;
