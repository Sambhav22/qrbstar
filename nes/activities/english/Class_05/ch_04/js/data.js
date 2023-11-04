export const chapter = "Chapter - 4: The Real Culprit ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What instrument did the little hunchback play and sing sweetly?",
          optionA: "Violin",
          optionB: "Tambour",
          optionC: "Flute",
          correctAnswer: "Tambour",
        },
        {
          question:
            "What did the barber and his wife serve for dinner on the evening of the incident?",
          optionA: "Chicken",
          optionB: "Fish",
          optionC: "Vegetables",
          correctAnswer: "Fish",
        },
        {
          question: "How did the hunchback die?",
          optionA: "He was poisoned",
          optionB: "He choked on a fishbone",
          optionC: "He had a heart attack",
          correctAnswer: "He choked on a fishbone",
        },
        {
          question:
            "What did the barber and his wife plan to do with the hunchback's body?",
          optionA: "Bury it in their backyard",
          optionB: "Leave it in the street",
          optionC: "Place it in the doctor's clinic",
          correctAnswer: "Place it in the doctor's clinic",
        },
        {
          question:
            "How did the doctor react when he tripped over the hunchback's body?",
          optionA: "He fainted",
          optionB: "He quickly left the scene",
          optionC: "He examined the body",
          correctAnswer: "He examined the body",
        },
        {
          question:
            "What was the neighbor's profession in whose store-room the body was hidden?",
          optionA: "Baker",
          optionB: "Oil man",
          optionC: "Tailor",
          correctAnswer: "Oil man",
        },
        {
          question: "Why did the oil man hit the dead body with a stout staff?",
          optionA: "He thought it was a thief",
          optionB: "He was practicing self-defense",
          optionC: "He was testing the body's reaction",
          correctAnswer: "He thought it was a thief",
        },
        {
          question: "How did the merchant get involved in the murder case?",
          optionA: "He was a witness to the murder",
          optionB: "He was the king's messenger",
          optionC: "He accidentally hit the body in self-defense",
          correctAnswer: "He accidentally hit the body in self-defense",
        },
        {
          question:
            "Who ultimately confessed to causing the hunchback's death?",
          optionA: "The merchant",
          optionB: "The doctor",
          optionC: "The barber",
          correctAnswer: "The barber",
        },
        {
          question:
            "What was the punishment ordered by the king for the barber?",
          optionA: "Death penalty",
          optionB: "Imprisonment",
          optionC: "Five lashes on his bare back",
          correctAnswer: "Five lashes on his bare back",
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
            "The little hunchback came to the barber's shop for a haircut. As he waited for his turn, he played a _______________ and sang sweetly. The ________ suggests this idea.",
          options: ["Guitar", "Tambour", "Flute"],
          correctAnswer: "Tambour",
        },
        {
          question:
            "The barber was very impressed with the hunchback's singing, so he decided to take him home to entertain his wife when he was away at the shop. The barber's wife cooked _______________ for dinner.",
          options: ["Chicken", "Fish", "Vegetables"],
          correctAnswer: "Fish",
        },
        {
          question:
            "Unfortunately, the hunchback choked to death when he swallowed a _______________ while having dinner with the barber and his wife. The ________ must ensure this.",
          options: ["Bone", "Nut", "Potato"],
          correctAnswer: "Bone",
        },
        {
          question:
            "Fearing that they would be accused of murder, the barber and his wife planned to leave the dead body at a _______________ clinic on the first floor. The ________ explained the entire story.",
          options: ["Dentist", "Tailor", "Doctor's"],
          correctAnswer: "Doctor's",
        },
        {
          question:
            "The doctor who lived on the first floor was not aware that the body was dead. He tripped over it while coming down the staircase. He thought he had killed the hunchback and decided to carry the body to his wife's _______________.",
          options: ["Bedroom", "Living room", "Kitchen"],
          correctAnswer: "Bedroom",
        },
        {
          question:
            "The doctor and his wife successfully moved the dead body to their neighbor's roof, who was an _______________ man. The ________ explained the entire story.",
          options: ["Electrician", "Oil", "Carpenter"],
          correctAnswer: "Oil",
        },
        {
          question:
            "The oil man returned home at midnight and found a _______________ standing by the wall, just below the chimney, where the body was hidden. He thought he was being attacked by a _______________.",
          options: ["Stranger", "Thief", "Policeman"],
          correctAnswer: "Thief",
        },
        {
          question:
            "The oil man thought he was being attacked and hit the thief on the head with a stout staff. He later realized he had killed the hunchback and believed he would be hanged to death. He decided to place the body near a _______________.",
          options: ["Police station", "Market", "River"],
          correctAnswer: "Market",
        },
        {
          question:
            "The merchant, returning from a feast in an intoxicated state, encountered the dead body in the dark. He touched the body, and it fell toward him. In his panic, he hit the body several times, believing he was being attacked by a _______________.",
          options: ["Ghost", "Wild animal", "Thief"],
          correctAnswer: "Thief",
        },
        {
          question:
            "In the end, the king learned the truth about the hunchback's death, and it was the ________ who explained the entire story.",
          options: ["Merchant", "Doctor", "Barber"],
          correctAnswer: "Barber",
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
            "The little hunchback played a musical instrument and sang sweetly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The barber's wife cooked fish for dinner when the hunchback came to their home.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The hunchback died because he swallowed a fishbone.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The doctor and his wife planned to leave the dead body at a dentist's clinic.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The oil man thought the body he found was a thief and hit it with a stout staff.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The merchant hit the dead body because he thought it was a wild animal.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The doctor and his wife successfully moved the dead body to their neighbor's roof.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The oil man placed the dead body near a police station.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The animals in the story wanted to keep the king from hunting them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The king ordered the barber to be hanged for the hunchback's death.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
