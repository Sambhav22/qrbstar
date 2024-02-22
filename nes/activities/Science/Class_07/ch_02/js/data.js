export const chapter = "Chapter - 2:Nutrition in Animals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is holozoic nutrition?",
          optionA: "The process of photosynthesis",
          optionB:
            "Taking in complex, solid food and breaking it down inside the body",
          optionC: "Consuming only liquid nutrients",
          correctAnswer:
            "B) Taking in complex, solid food and breaking it down inside the body",
        },
        {
          question:
            "Which category of holozoic animals eats only plants and their products?",
          optionA: "Carnivores",
          optionB: "Omnivores",
          optionC: "Herbivores",
          correctAnswer: "C) Herbivores",
        },
        {
          question:
            "What is the role of pseudopodia in amoeba's nutrition process?",
          optionA: "Filtering food particles",
          optionB: "Entangling prey",
          optionC: "Capturing and ingesting food",
          correctAnswer: "C) Capturing and ingesting food",
        },
        {
          question: "Where does digestion in humans primarily take place?",
          optionA: "Large intestine",
          optionB: "Small intestine",
          optionC: "Stomach",
          correctAnswer: "C) Stomach",
        },
        {
          question: "Which organ secretes bile to aid in digestion?",
          optionA: "Pancreas",
          optionB: "Liver",
          optionC: "Stomach",
          correctAnswer: "B) Liver",
        },
        {
          question: "What is the function of villi in the small intestine?",
          optionA: "Absorb nutrients into the blood",
          optionB: "Store undigested food",
          optionC: "Produce digestive enzymes",
          correctAnswer: "A) Absorb nutrients into the blood",
        },
        {
          question: "Tooth decay is caused by:",
          optionA: "Excessive brushing",
          optionB: "Bacteria breaking down sugars and forming acids",
          optionC: "Lack of calcium in the diet",
          correctAnswer: "B) Bacteria breaking down sugars and forming acids",
        },
        {
          question:
            "What is the purpose of rumination in grass-eating animals?",
          optionA: "Speed up digestion",
          optionB: "Store excess water",
          optionC: "Chew cud to aid in breaking down cellulose",
          correctAnswer: "C) Chew cud to aid in breaking down cellulose",
        },
        {
          question: "What causes heartburn?",
          optionA: "Acid traveling into the stomach",
          optionB: "The stomach emptying its contents",
          optionC: "Bacterial infection",
          correctAnswer: "A) Acid traveling into the stomach",
        },
        {
          question: "How does the amoeba take in food?",
          optionA: "Through a feeding tube",
          optionB: "Using tentacles and stinging cells",
          optionC: "Swallowing whole prey",
          correctAnswer: "B) Using tentacles and stinging cells",
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
            "Holozoic nutrition is the process in which animals take in complex, solid food and break it down into simpler forms inside the ____________.",
          options: ["Cell", "Stomach", "Mouth"],
          correctAnswer: "Stomach",
        },
        {
          question:
            "On the basis of different food habits, holozoic animals are classified into three categories: Herbivores, Carnivores, and ____________.",
          options: ["Detritivores", "Insectivores", "Omnivores"],
          correctAnswer: "Omnivores",
        },
        {
          question:
            "In holozoic nutrition, the process of taking in food into the body is known as ____________.",
          options: ["Digestion", "Assimilation", "Ingestion"],
          correctAnswer: "Ingestion",
        },
        {
          question:
            "Amoeba is an ____________, feeding on both plants and animals.",
          options: ["Herbivore", "Omnivore", "Insectivore"],
          correctAnswer: "Omnivore",
        },
        {
          question:
            "Digestion in humans involves both mechanical and ____________ processes.",
          options: ["Respiratory", "Chemical", "Circulatory"],
          correctAnswer: "Chemical",
        },
        {
          question:
            "The digestive system of humans consists of the alimentary canal and ____________ glands.",
          options: ["Respiratory", "Endocrine", "Digestive"],
          correctAnswer: "Digestive",
        },
        {
          question:
            "Teeth break down food into smaller pieces, and humans have four types of teeth: Incisor, Canine, Premolar, and ____________.",
          options: ["Molar", "Wisdom", "Cuspid"],
          correctAnswer: "Molar",
        },
        {
          question:
            "The undigested residue of the food is expelled outside the body through a process called ____________.",
          options: ["Absorption", "Egestion", "Assimilation"],
          correctAnswer: "Egestion",
        },
        {
          question:
            "The large intestine absorbs water and useful minerals from undigested food, forming semi-solid faeces, which are then stored in the ____________.",
          options: ["Rectum", "Duodenum", "Ileum"],
          correctAnswer: "Rectum",
        },
        {
          question:
            "The organ that secretes a yellowish-green colored liquid called bile is the ____________.",
          options: ["Stomach", "Pancreas", "Liver"],
          correctAnswer: "Liver",
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
            "Holozoic nutrition involves animals taking in complex, solid food and breaking it down inside the body.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Carnivores are animals that eat only plants and their products.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Amoeba is a herbivorous microscopic organism found in pond water.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The process of taking in food into the body is known as assimilation.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Humans have two sets of teeth during their lifetime: primary teeth and permanent teeth.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The undigested residue of the food is expelled outside the body through a process called absorption.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The stomach is the widest part of the alimentary canal and is about 30 cm long.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The small intestine is the longest portion of the digestive tract and is more than 6-7 m long.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Salivary glands secrete a liquid called bile to aid in digestion.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Grass-eating animals, like goats and cows, chew half-digested food and are known as ruminants.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
