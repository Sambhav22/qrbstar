export const chapter = "Chapter - 12: Teeth and Tongue";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the function of incisors in our mouth?",
          optionA: "Piercing and tearing",
          optionB: "Biting and cutting",
          optionC: "Chewing and grinding",
          correctAnswer: "Biting and cutting",
        },

        {
          question: "How many canines are there in each jaw?",
          optionA: "Four",
          optionB: "Two",
          optionC: "Six",
          correctAnswer: "Two",
        },

        {
          question: "When do milk teeth start growing in babies?",
          optionA: "6-8 years",
          optionB: "8-12 months",
          optionC: "12-18 months",
          correctAnswer: "8-12 months",
        },

        {
          question: "What are milk teeth, and when do they begin to fall off?",
          optionA: "Permanent set of teeth, fall off at old age",
          optionB: "Temporary set of teeth, fall off at 6-8 years",
          optionC: "Permanent set of teeth, remain till old age",
          correctAnswer: "Temporary set of teeth, fall off at 6-8 years",
        },

        {
          question:
            "What should be used to clean off the food particles between teeth?",
          optionA: "Toothbrush",
          optionB: "Mouthwash",
          optionC: "Floss",
          correctAnswer: "Floss",
        },

        {
          question: "How many premolars are there in each jaw?",
          optionA: "Two",
          optionB: "Four",
          optionC: "Six",
          correctAnswer: "Four",
        },

        {
          question:
            "What should be done to take care of teeth according to the text?",
          optionA: "Rinse mouth with soda after meals",
          optionB: "Brush teeth once a day",
          optionC:
            "Rinse mouth with clean water after meals and brush teeth twice a day",
          correctAnswer:
            "Rinse mouth with clean water after meals and brush teeth twice a day",
        },

        {
          question: "What is the primary function of the tongue during eating?",
          optionA: "Breaking down food into small pieces",
          optionB: "Mixing saliva with food",
          optionC: "Chewing and grinding food",
          correctAnswer: "Mixing saliva with food",
        },

        {
          question: "How many molars are there on each side of the mouth?",
          optionA: "Two",
          optionB: "Three",
          optionC: "Six",
          correctAnswer: "Three",
        },

        {
          question:
            "Where are taste buds located, allowing us to sense different tastes?",
          optionA: "Teeth",
          optionB: "Lips",
          optionC: "Tongue",
          correctAnswer: "Tongue",
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
            "Our teeth break down the food into small pieces, and then we ________ these pieces.",
          options: ["chew", "swallow", "taste"],
          correctAnswer: "swallow",
        },

        {
          question:
            "There are four types of teeth: Incisors, Canines, Premolars, and ________.",
          options: ["Molars", "Wisdom Teeth", "Enamel"],
          correctAnswer: "Molars",
        },

        {
          question:
            "Teeth start growing in babies at the age of ________ months.",
          options: ["6-8", "8-12", "12-18"],
          correctAnswer: "8-12",
        },

        {
          question:
            "Milk teeth begin to fall off at the age of ________ years.",
          options: ["4-6", "6-8", "8-10"],
          correctAnswer: "6-8",
        },

        {
          question:
            "To take care of our teeth, we should eat less ________ food and avoid excess sweets.",
          options: ["sugary", "spicy", "fatty"],
          correctAnswer: "sugary",
        },

        {
          question:
            "The tongue is a muscular organ that is ________ cm long and weighs about 56 grams.",
          options: ["5", "10", "15"],
          correctAnswer: "10",
        },

        {
          question:
            "The primary function of the tongue is mixing ________ with food during chewing.",
          options: ["water", "saliva", "juice"],
          correctAnswer: "saliva",
        },

        {
          question:
            "On the tongue, taste buds are located, allowing us to sense four types of taste: sweet, salty, sour, and ________.",
          options: ["spicy", "bitter", "umami"],
          correctAnswer: "bitter",
        },

        {
          question: "Teeth should be brushed ________ a day for proper care.",
          options: ["once", "twice", "thrice"],
          correctAnswer: "twice",
        },

        {
          question:
            "Floss should be used to clean off the food particles ________ teeth.",
          options: ["between", "under", "on"],
          correctAnswer: "between",
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
            "Our teeth have four types: Incisors, Canines, Premolars, and Molars.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question:
            "Milk teeth are a permanent set of teeth that remain till old age.",
          options: ["True", "False"],
          correctAnswer: "False",
        },

        {
          question: "Teeth start growing in babies at the age of 8-12 months.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question:
            "Floss should be used to clean off the food particles between teeth.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question:
            "Premolars are the large, pointed teeth just behind the incisors.",
          options: ["True", "False"],
          correctAnswer: "False",
        },

        {
          question:
            "The tongue helps in mixing saliva with food during chewing.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question:
            "Molars are located just behind the premolars, towards the back of our mouth.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question: "Milk teeth begin to fall off at the age of 6-8 years.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question: "There are two canines in each jaw.",
          options: ["True", "False"],
          correctAnswer: "True",
        },

        {
          question:
            "Eating less sugary food is recommended for taking care of our teeth.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
