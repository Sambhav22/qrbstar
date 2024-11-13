export const chapter = "Chapter - 24: Notice and Messages";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the new schedule change mentioned in Sanchit's notice?",
          optionA:
            "Second period will be science and fourth period will be moral science.",
          optionB:
            "First period will be science and third period will be moral science.",
          optionC:
            "Third period will be science and fifth period will be moral science.",
          correctAnswer:
            "First period will be science and third period will be moral science.",
        },
        {
          question:
            "When is the proposed cultural programme mentioned in Sid Gupta's notice?",
          optionA: "12 January, 20xx",
          optionB: "18 January, 20xx",
          optionC: "24 January, 20xx",
          correctAnswer: "24 January, 20xx",
        },
        {
          question:
            "What type of performances are included in the cultural programme according to Sid Gupta's notice?",
          optionA: "Only skits",
          optionB: "Plays, skits, and song-dance sequences",
          optionC: "Only songs",
          correctAnswer: "Plays, skits, and song-dance sequences",
        },
        {
          question:
            "What time is Sakshi arriving according to the telephonic dialogue?",
          optionA: "4 pm",
          optionB: "6 pm",
          optionC: "8 pm",
          correctAnswer: "6 pm",
        },
        {
          question:
            "Who is unable to go to receive Sakshi at the railway station?",
          optionA: "Roopam",
          optionB: "Pragati",
          optionC: "Varun",
          correctAnswer: "Roopam",
        },
        {
          question:
            "What is the reason Roopam gives Pragati for not being able to go to the railway station?",
          optionA: "Sprained wrist",
          optionB: "Hurt ankle",
          optionC: "Fever",
          correctAnswer: "Hurt ankle",
        },
        {
          question: "When did Varun leave the message for Shivank's parents?",
          optionA: "4:00 am",
          optionB: "4:00 pm",
          optionC: "4:00 pm the next day",
          correctAnswer: "4:00 pm",
        },
        {
          question:
            "What does Varun inform in the message he leaves for Shivank's parents?",
          optionA:
            "Shivank's teacher wants to see them due to his good behavior.",
          optionB:
            "Shivank's teacher wants to see them due to his mischievous ways.",
          optionC:
            "Shivank's teacher wants to give them a gift for Shivank's achievements.",
          correctAnswer:
            "Shivank's teacher wants to see them due to his mischievous ways.",
        },
        {
          question:
            "When is Shivank's teacher expecting to see his parents according to Varun's message?",
          optionA: "The same day",
          optionB: "The next day in the morning",
          optionC: "The next day in the evening",
          correctAnswer: "The next day in the morning",
        },
        {
          question: "What did Varun do after finding Shivank's house locked?",
          optionA: "He waited outside the house.",
          optionB: "He called Shivank's parents.",
          optionC: "He left a message under the door.",
          correctAnswer: "He left a message under the door.",
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
            "Once upon a ________, in a small village, there lived a young boy named Rahul.",
          options: ["a) mountain", "b) river", "c) time"],
          correctAnswer: "b) river",
        },
        {
          question: "He was known for his ________ and determination.",
          options: ["a) laziness", "b) intelligence", "c) mischief"],
          correctAnswer: "b) intelligence",
        },
        {
          question:
            "One day, Rahul discovered a mysterious ________ in the forest.",
          options: ["a) cave", "b) book", "c) creature"],
          correctAnswer: "b) book",
        },
        {
          question: "Rahul decided to ________ its contents.",
          options: ["a) ignore", "b) burn", "c) explore"],
          correctAnswer: "c) explore",
        },
        {
          question:
            "As he flipped through the pages, he stumbled upon a ________ recipe for a potion.",
          options: ["a) modern", "b) ancient", "c) magical"],
          correctAnswer: "b) ancient",
        },
        {
          question:
            "Rahul gathered the ________ ingredients listed in the book.",
          options: ["a) common", "b) unusual", "c) poisonous"],
          correctAnswer: "b) unusual",
        },
        {
          question:
            "When he finally drank it, he felt a ________ sensation coursing through his veins.",
          options: ["a) familiar", "b) strange", "c) painful"],
          correctAnswer: "b) strange",
        },
        {
          question:
            "To his amazement, he could now ________ their joyful songs.",
          options: ["a) ignore", "b) understand", "c) mimic"],
          correctAnswer: "b) understand",
        },
        {
          question: "Villagers sought his help in ________ with their pets.",
          options: ["a) fighting", "b) communicating", "c) ignoring"],
          correctAnswer: "b) communicating",
        },
        {
          question:
            "Rahul became a beloved figure in the village, known not only for his ________ but also for his newfound connection with the animal kingdom.",
          options: [
            "a) cooking skills",
            "b) mischief",
            "c) extraordinary ability",
          ],
          correctAnswer: "c) extraordinary ability",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Rahul received a mysterious book from the forest.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question: "The potion recipe required common ingredients.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question:
            "Rahul understood the language of animals after drinking the potion.",
          options: ["A) True", "B) False"],
          correctAnswer: "A) True",
        },
        {
          question:
            "Villagers sought Rahul's help in dealing with plants on their farms.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question: "The book contained a modern recipe for a magical potion.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question:
            "Rahul became a beloved figure for his extraordinary ability and connection with the animal kingdom.",
          options: ["A) True", "B) False"],
          correctAnswer: "A) True",
        },
        {
          question: "The potion was brewed under the light of the new moon.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question: "Rahul approached a group of silent animals in the forest.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question: "The mysterious book was discovered in Rahul's room.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
        {
          question: "The potion's recipe required poisonous ingredients.",
          options: ["A) True", "B) False"],
          correctAnswer: "B) False",
        },
      ],
  };
}

export var activityData;
