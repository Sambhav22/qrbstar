export const chapter = "Chapter - 21: Story writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "Who was the eldest son of King Dasharatha?",
          optionA: "Rama",
          optionB: "Bharata",
          optionC: "Lakshmana",
          correctAnswer: "Rama",
        },
        {
          question: "Why did Rama decide to go into exile?",
          optionA: "Because he wanted to become the king",
          optionB: "Because his father fell ill",
          optionC:
            "Because his mother Kaikeyi wanted Bharata to become the king",
          correctAnswer:
            "Because his mother Kaikeyi wanted Bharata to become the king",
        },
        {
          question: "Who was kidnapped by Ravana, the demon king of Lanka?",
          optionA: "Lakshmana",
          optionB: "Bharata",
          optionC: "Seeta",
          correctAnswer: "Seeta",
        },
        {
          question: "What did Rama do to rescue Seeta?",
          optionA: "Formed a monkey army and defeated Ravana",
          optionB: "Formed a human army and defeated Ravana",
          optionC: "Negotiated with Ravana for Seeta's release",
          correctAnswer: "Formed a monkey army and defeated Ravana",
        },
        {
          question: "What is Rama's rule called?",
          optionA: "Bharat Rajya",
          optionB: "Ram Rajya",
          optionC: "Lakshmi Rajya",
          correctAnswer: "Ram Rajya",
        },
        {
          question:
            "What did the old man suggest was the identifying feature of the thieves?",
          optionA: "They wore distinctive clothing",
          optionB: "They had strands of cotton stuck to their beards",
          optionC: "They were seen near the godown",
          correctAnswer: "They had strands of cotton stuck to their beards",
        },
        {
          question: "How did the merchant find out who stole the cotton?",
          optionA: "By conducting a thorough investigation",
          optionB: "By offering a reward for information",
          optionC: "By hosting a feast and inviting the villagers",
          correctAnswer: "By hosting a feast and inviting the villagers",
        },
        {
          question: "Why did the thieves raise their hands during the feast?",
          optionA: "To indicate they were guilty",
          optionB: "To clear their beards of cotton",
          optionC: "To ask for more food",
          correctAnswer: "To clear their beards of cotton",
        },
        {
          question: "What was the merchant's business?",
          optionA: "Dealing in silk",
          optionB: "Dealing in cotton",
          optionC: "Dealing in spices",
          correctAnswer: "Dealing in cotton",
        },
        {
          question: "What was the reward the old man asked for his help?",
          optionA: "Money",
          optionB: "A feast",
          optionC: "A large cotton stock",
          correctAnswer: "A feast",
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
            "1. King Dasharatha wanted Rama to become the next king, but Kaikeyi secured two vows from the king, resulting in Rama being exiled to the forests for ________ years.",
          options: ["a) Ten", "b) Twelve", "c) Fourteen"],
          correctAnswer: "c) Fourteen",
        },
        {
          question:
            "2. During their exile, Seeta was kidnapped by ________, the demon king of Lanka.",
          options: ["a) Rama", "b) Bharata", "c) Ravana"],
          correctAnswer: "c) Ravana",
        },
        {
          question:
            "3. Rama formed a ________ army to defeat Ravana and secure the release of Seeta.",
          options: ["a) Human", "b) Lion", "c) Monkey"],
          correctAnswer: "c) Monkey",
        },
        {
          question:
            "4. When Rama returned to Ayodhya, ________ made him the king.",
          options: ["a) Lakshmana", "b) Bharata", "c) Kaikeyi"],
          correctAnswer: "b) Bharata",
        },
        {
          question:
            "5. Rama's rule is often referred to as ________, meaning the best rule the world has ever seen.",
          options: ["a) Rama Rajya", "b) Bharat Rajya", "c) Dasharatha Rajya"],
          correctAnswer: "a) Rama Rajya",
        },
        {
          question:
            "6. In the story of the rich merchant, an old man suggested that the thieves could be identified by the ________ stuck to their beards.",
          options: ["a) Leaves", "b) Cotton", "c) Dirt"],
          correctAnswer: "b) Cotton",
        },
        {
          question:
            "7. The merchant found out who stole the cotton by hosting a ________ and inviting the villagers.",
          options: ["a) Dance party", "b) Feast", "c) Meeting"],
          correctAnswer: "b) Feast",
        },
        {
          question:
            "8. During the feast, the thieves raised their hands to ________ their beards of cotton.",
          options: ["a) Wash", "b) Shave", "c) Clear"],
          correctAnswer: "c) Clear",
        },
        {
          question: "9. The merchant's business involved dealing in ________.",
          options: ["a) Silk", "b) Cotton", "c) Spices"],
          correctAnswer: "b) Cotton",
        },
        {
          question:
            "10. The old man asked for a ________ as a reward for helping the merchant.",
          options: ["a) Bag of gold", "b) Feast", "c) Large cotton stock"],
          correctAnswer: "b) Feast",
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
            "King Dasharatha had three sons: Rama, Bharata, and Lakshmana.",
          options: ["Rama", "Bharata"],
          correctAnswer: "false",
        },
        {
          question:
            "Kaikeyi, the mother of Rama, wanted her son to become the next king.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
        {
          question:
            "Seeta was kidnapped by Ravana during Rama's exile in the forests.",
          options: ["true", "false"],
          correctAnswer: "true",
        },
        {
          question:
            "Rama formed a human army to defeat Ravana and rescue Seeta.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
        {
          question: "Upon returning to Ayodhya, Bharata made Rama the king.",
          options: ["true", "false"],
          correctAnswer: "true",
        },
        {
          question: "The merchant in the story dealt in silk.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
        {
          question:
            "The old man in the story suggested identifying the thieves by the cotton stuck to their beards.",
          options: ["true", "false"],
          correctAnswer: "true",
        },
        {
          question:
            "The merchant found out who stole the cotton by conducting a thorough investigation.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
        {
          question:
            "During the feast, the thieves raised their hands to indicate they were guilty.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
        {
          question:
            "The old man asked for a bag of gold as a reward for helping the merchant.",
          options: ["true", "false"],
          correctAnswer: "false",
        },
      ],
  };
}

export var activityData;
