export const chapter = "Chapter - 22: Essay writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What does the saffron color in the Indian National Flag symbolize?",
          optionA: "Truth and purity",
          optionB: "Sacrifice and selflessness",
          optionC: "Youth and energy",
          correctAnswer: "Sacrifice and selflessness",
        },
        {
          question: "Which social evil is highlighted in the text?",
          optionA: "Child marriage",
          optionB: "Gender inequality",
          optionC: "Religious discrimination",
          correctAnswer: "Child marriage",
        },
        {
          question:
            "According to the text, what is the consequence of wasting time?",
          optionA: "Financial loss",
          optionB: "Health deterioration",
          optionC: "Irreversible loss",
          correctAnswer: "Irreversible loss",
        },
        {
          question: "What invention is emphasized in the text?",
          optionA: "Television",
          optionB: "Microwave",
          optionC: "Mobile phone",
          correctAnswer: "Mobile phone",
        },
        {
          question:
            "What is the significance of Christmas according to the text?",
          optionA: "Celebration of nature",
          optionB: "Observance of Jesus Christ's birth",
          optionC: "Honor for Santa Claus",
          correctAnswer: "Observance of Jesus Christ's birth",
        },
        {
          question:
            "What was Swami Vivekananda's role in the Parliament of Religions in 1893?",
          optionA: "He delivered a speech.",
          optionB: "He organized the event.",
          optionC: "He sponsored the event.",
          correctAnswer: "He delivered a speech.",
        },
        {
          question:
            "What is the biggest danger to the environment according to the text?",
          optionA: "Climate change",
          optionB: "Pollution",
          optionC: "Deforestation",
          correctAnswer: "Pollution",
        },
        {
          question:
            "What is one major reason for unemployment mentioned in the text?",
          optionA: "Lack of education",
          optionB: "Slow economic growth",
          optionC: "Overpopulation",
          correctAnswer: "Overpopulation",
        },
        {
          question:
            "What is emphasized as crucial for success in life according to the text?",
          optionA: "Talent",
          optionB: "Luck",
          optionC: "Time management",
          correctAnswer: "Time management",
        },
        {
          question:
            "What is the primary occupation of a large portion of India's population?",
          optionA: "Service industry",
          optionB: "Agriculture",
          optionC: "Manufacturing",
          correctAnswer: "Agriculture",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Our National Flag is also known as _______________.",
          options: ["A) Tricolour", "B) Monochrome", "C) Rainbow"],
          correctAnswer: "A) Tricolour",
        },
        {
          question:
            "The saffron color in the Indian National Flag symbolizes _______________ and _______________.",
          options: [
            "A) Sacrifice, selflessness",
            "B) Truth, purity",
            "C) Youth, energy",
          ],
          correctAnswer: "A) Sacrifice, selflessness",
        },
        {
          question:
            "Swami Vivekananda was born in the city of _______________.",
          options: ["A) Kolkata", "B) Delhi", "C) Mumbai"],
          correctAnswer: "A) Kolkata",
        },
        {
          question: "Swami Vivekananda was initially known as _______________.",
          options: [
            "A) Narendranath Dutta",
            "B) Ramakrishna",
            "C) Narendra Modi",
          ],
          correctAnswer: "A) Narendranath Dutta",
        },
        {
          question:
            "The festival of Christmas is celebrated on _______________.",
          options: ["A) 24th December", "B) 25th December", "C) 26th December"],
          correctAnswer: "B) 25th December",
        },
        {
          question:
            "The Christmas festival is observed to mark the birth of _______________.",
          options: ["A) Santa Claus", "B) Jesus Christ", "C) Mother Mary"],
          correctAnswer: "B) Jesus Christ",
        },
        {
          question:
            "Pollution is considered the biggest danger to the _______________.",
          options: ["A) Environment", "B) Economy", "C) Society"],
          correctAnswer: "A) Environment",
        },
        {
          question:
            "Unemployment is a situation where a skilled person cannot find a _______________ job.",
          options: ["A) Proper", "B) Temporary", "C) Voluntary"],
          correctAnswer: "A) Proper",
        },
        {
          question:
            "Time once lost cannot be recovered under any _______________.",
          options: ["A) Condition", "B) Situation", "C) Circumstances"],
          correctAnswer: "C) Circumstances",
        },
        {
          question:
            "The primary occupation of a large portion of India's population is _______________.",
          options: ["A) Farming", "B) Trading", "C) Manufacturing"],
          correctAnswer: "A) Farming",
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
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
        {
          question:
            "Seeta was kidnapped by Ravana during Rama's exile in the forests.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "true",
        },
        {
          question:
            "Rama formed a human army to defeat Ravana and rescue Seeta.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
        {
          question: "Upon returning to Ayodhya, Bharata made Rama the king.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "true",
        },
        {
          question: "The merchant in the story dealt in silk.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
        {
          question:
            "The old man in the story suggested identifying the thieves by the cotton stuck to their beards.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "true",
        },
        {
          question:
            "The merchant found out who stole the cotton by conducting a thorough investigation.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
        {
          question:
            "During the feast, the thieves raised their hands to indicate they were guilty.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
        {
          question:
            "The old man asked for a bag of gold as a reward for helping the merchant.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "false",
        },
      ],
  };
}

export var activityData;
