export const chapter = "Chapter - 15: The Cattle ";
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
        correctAnswer: "Milk",
      },
      {
        question:
          "In Hinduism, why are cows and bullocks considered important?",
        optionA: "They are considered sacred animals.",
        optionB: "They are excellent sources of meat.",
        optionC: "They are known for their racing abilities.",
        correctAnswer: "They are considered sacred animals.",
      },
      {
        question:
          "What is Nandi, an image of the bullock, associated with in Hindu temples?",
        optionA: "Lord Krishna",
        optionB: "Lord Shiva",
        optionC: "Goddess Durga",
        correctAnswer: "Lord Shiva",
      },
      {
        question:
          "Which of the following is NOT one of the five products associated with the cow that holds religious value for purification?",
        optionA: "Milk",
        optionB: "Dung",
        optionC: "Honey",
        correctAnswer: "Honey",
      },
      {
        question: "In several states, the slaughter of cows is:",
        optionA: "Encouraged",
        optionB: "Regulated",
        optionC: "Prohibited",
        correctAnswer: "Prohibited",
      },
      {
        question:
          "How are domesticated cattle different from wild ones, as mentioned in the text?",
        optionA: "They are smaller in size.",
        optionB: "They have larger horns.",
        optionC: "They produce more meat.",
        correctAnswer: "They are smaller in size.",
      },
      {
        question:
          "In India, what is the significance of cattle in a farmer's life?",
        optionA: "They are a source of entertainment.",
        optionB: "They are used primarily for transportation.",
        optionC:
          "They serve various purposes, including farming and replenishing fields with manure.",
        correctAnswer:
          "They serve various purposes, including farming and replenishing fields with manure.",
      },
      {
        question:
          "What is the primary reason for opposing entertainment activities like rodeos and bull-fighting involving cattle, according to the text?",
        optionA: "These activities are boring.",
        optionB: "They promote animal welfare and health.",
        optionC: "They are considered torture and cruelty to the animals.",
        correctAnswer:
          "They are considered torture and cruelty to the animals.",
      },
      {
        question:
          "How many distinct breeds of cattle are there in India, as mentioned in the text?",
        optionA: "10",
        optionB: "20",
        optionC: "26",
        correctAnswer: "26",
      },
      {
        question:
          "What is the primary diet of cattle, as mentioned in the text?",
        optionA: "Insects and small animals",
        optionB: "Plants and vegetable feeds",
        optionC: "Fruits and nuts",
        correctAnswer: "Plants and vegetable feeds",
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
          "Milk is the major source of animal protein in the diet of a large number of people in our country. The cattle are not only a source of milk but also other products, including meat, leather, and horns for making different products, and dung as fuel and manure for farming. Besides, the cattle, especially cow and bullocks, have a religious value too, especially in Hinduism. They have been attached importance right since the Vedic Age, and the cow is regarded as _______.",
        options: [
          "A sacred animal",
          "A source of entertainment",
          "A symbol of prosperity",
        ],
        correctAnswer: "A sacred animal",
      },
      {
        question:
          "Lord Krishna is believed to have been born in the family of cow-herders, and his early life passed among cows, so he is also called Govind, which means the protector of cows. You can find Nandi, an image of the bullock, in every Shiva temple. Nandi is believed to be the mount of Lord Shiva. Also, a cow's five products (milk, urine, dung, curd, and ghee) are called Panchagavya and _______ are attached religious value for purification.",
        options: ["They", "These", "Those"],
        correctAnswer: "They",
      },
      {
        question:
          "The cattle were domesticated at a very early stage of human civilization, and we have seen them depicted in mythology and animal tales. The drawings and carvings in the prehistoric cave have revealed depiction of the cattle, especially as beasts of burden. Evidence has also been found of their use in the Harappan civilization, which existed about _______ years ago.",
        options: ["1,000", "3,000", "5,000"],
        correctAnswer: "5,000",
      },
      {
        question:
          "The cattle found in India are unique to the Indian subcontinent and are not found in European countries. If we compared cow with buffalo, we would find that buffalo yields more milk than the cow, and its milk is also richer than that of cow by 50 percent more fat. Despite this fact, cow milk in India is considered healthier because it is _______ and is also used in several religious ceremonies.",
        options: ["Heavier", "Light", "Costly"],
        correctAnswer: "Light",
      },
      {
        question:
          "The bullock and buffalo-bullock are important draught animals, they may be slow, but are very powerful, and play a vital role in the Indian economy. They are used in transportation of goods as well as in several agricultural operations, like ploughing, threshing, churning, harvesting, lifting water, and so on. Of late, machines and transports are replacing them fast. However, they remain important when it comes to _______.",
        options: [
          "Large landholdings",
          "Small landholdings",
          "Industrial activities",
        ],
        correctAnswer: "Small landholdings",
      },
      {
        question:
          "In our country, the cattle are a farmer's second most precious possession after land because they are useful to him in several ways, including farming, transportation, and food. They also replenish the fields by supplying _______.",
        options: ["Water", "Electricity", "Manure"],
        correctAnswer: "Manure",
      },
      {
        question:
          "The cattle are also used for entertainment purposes, like rodeos, bullock-races, bull-fighting, etc. Of course, these types of entertainment are opposed by animal rights activists who consider these as _______.",
        options: [
          "Fun and harmless",
          "Torture and cruelty to the animals",
          "Essential for cultural preservation",
        ],
        correctAnswer: "Torture and cruelty to the animals",
      },
      {
        question:
          "The number of breeds of cattle in the world is surprisingly large. In Europe, there are as many as 40 to 50 distinct breeds, 11 alone in Great Britain. In India, there are 26 well-defined breeds of cattle and 6 breeds of buffaloes. Some of the important breeds in our country include Amritmahal, Bachuar, Bargur, Dangi, Deoni, Gir, Hariana, Khillari, etc. Different breeds have different body characteristics, and are useful for different purposes; for example, some breeds are good as milch animals while others are good as _______.",
        options: ["Racing animals", "Draught animals", "Pet animals"],
        correctAnswer: "Draught animals",
      },
      {
        question:
          "The cattle are herbivorous animals which convert plants and vegetable feeds into milk, meat, and working energy for the benefit of man. They require sufficient, well-balanced feed, which should be satisfying to them, both qualitatively as well as quantitatively. Interestingly, the cattle have one stomach, which is divided into four sections, so it is also said that they have _______.",
        options: ["Three stomachs", "Four stomachs", "Five stomachs"],
        correctAnswer: "Four stomachs",
      },
      {
        question:
          "Often, an incorrect method of milking can spoil milch animals. Milking should be carried out after cleaning or washing the animal and teats so that clean milk is obtained. If milk is not clean, it may cause several diseases as it can carry bacteria. The diseases caused by unclean milk can include typhoid fever, dysentery, diphtheria, septic sore-throat, scarlet fever, and tuberculosis. _______ helps to preserve milk over a longer period of time.",
        options: ["Pasteurization", "Boiling", "Freezing"],
        correctAnswer: "Pasteurization",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The poor farmer and his mother were wealthy.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The governor's proclamation demanded the execution of the elderly.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The farmer marked the path using stones.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The farmer made the 'rope of ashes' using straw.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The governor was displeased with the farmer's wit.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The governor mentioned a saying about the crown of snow and wisdom.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The farmer used the stars to guide him down the mountain.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The governor demanded a sack of gold from his subjects.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The elderly in the province could lead a life full of fear after the governor's proclamation was abolished.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The farmer's mother helped create the 'rope of ashes.'",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
