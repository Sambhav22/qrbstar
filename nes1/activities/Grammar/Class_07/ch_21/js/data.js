export const chapter = "Chapter - 21: Story Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'In the story "A Proud Cock," what warning did the hen have in her dream?',
          optionA: "a) The house was on fire.",
          optionB: "b) A cunning fox would attack the cock.",
          optionC: "c) The hens were planning to rebel.",
          correctAnswer: "b) A cunning fox would attack the cock.",
        },
        {
          question:
            'Why did the cock get attacked by the fox in "A Proud Cock"?',
          optionA: "a) The cock was too smart for the fox.",
          optionB: "b) The hens betrayed him.",
          optionC: "c) He was too proud and fell for flattery.",
          correctAnswer: "c) He was too proud and fell for flattery.",
        },
        {
          question: "What did the fox ask the cock to do before attacking him?",
          optionA: "a) Dance for him.",
          optionB: "b) Sing a song.",
          optionC: "c) Count the hens.",
          correctAnswer: "b) Sing a song.",
        },
        {
          question: 'What lesson can be learned from "A Proud Cock"?',
          optionA: "a) Pride comes before a fall.",
          optionB: "b) Foxes are always cunning.",
          optionC: "c) Hens are more intelligent than cocks.",
          correctAnswer: "a) Pride comes before a fall.",
        },
        {
          question:
            'In the story "Look Before You Leap," what did the dog do when the wolf entered the house?',
          optionA: "a) Hid in fear.",
          optionB: "b) Fought bravely to protect the child.",
          optionC: "c) Joined forces with the wolf.",
          correctAnswer: "b) Fought bravely to protect the child.",
        },
        {
          question:
            'Why did the farmer and his wife put the dog to death in "Look Before You Leap"?',
          optionA: "a) The dog was old and sick.",
          optionB: "b) They thought the dog killed their child.",
          optionC: "c) The dog was misbehaving.",
          correctAnswer: "b) They thought the dog killed their child.",
        },
        {
          question:
            'What did the farmer and his wife find when they entered the house in "Look Before You Leap"?',
          optionA: "a) A missing child.",
          optionB: "b) The dog covered in blood.",
          optionC: "c) A dead wolf beside the child's cradle.",
          correctAnswer: "c) A dead wolf beside the child's cradle.",
        },
        {
          question:
            'What was the actual reason for the dog\'s bloodied appearance in "Look Before You Leap"?',
          optionA: "a) The dog attacked the child.",
          optionB: "b) The dog fought and killed the wolf.",
          optionC: "c) The dog had an accident.",
          correctAnswer: "b) The dog fought and killed the wolf.",
        },
        {
          question:
            'What did the farmer and his wife realize at the end of "Look Before You Leap"?',
          optionA: "a) The dog was innocent.",
          optionB: "b) They should have been more careful.",
          optionC: "c) Wolves are dangerous.",
          correctAnswer: "a) The dog was innocent.",
        },
        {
          question: "What is the main theme shared by both stories?",
          optionA: "a) The importance of owning pets.",
          optionB: "b) The consequences of acting without thinking.",
          optionC: "c) The intelligence of farm animals.",
          correctAnswer: "b) The consequences of acting without thinking.",
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
            "In the story \"A Proud Cock,\" the hen had an ominous dream that a cunning fox would pounce upon the cock and make a short work of him. The cock, however, made light of her warning, and that day a sly fox did pass that way. The fox praised the cock's ___________ and flattered him, leading to the cock's tragic demise.",
          options: [
            "a) feather colors",
            "b) singing ability",
            "c) swift movements",
          ],
          correctAnswer: "b) singing ability",
        },
        {
          question:
            "The moral of \"A Proud Cock\" is that ____________ comes before a fall, as demonstrated by the cock's arrogance and the consequences he faced for falling for the fox's flattery.",
          options: ["a) humility", "b) pride", "c) generosity"],
          correctAnswer: "b) pride",
        },
        {
          question:
            'In the story "Look Before You Leap," the farmer and his wife, in their absence, mistakenly believed that the dog had killed their child, leading them to ___________ the dog when they returned.',
          options: ["a) reward", "b) befriend", "c) put to death"],
          correctAnswer: "c) put to death",
        },
        {
          question:
            "The dog, however, had bravely fought and killed a ___________ that entered the house, saving the child's life.",
          options: ["a) cat", "b) wolf", "c) fox"],
          correctAnswer: "b) wolf",
        },
        {
          question:
            "The farmer and his wife realized their ___________ when they found the child safe and sound, with a dead wolf beside the child's cradle.",
          options: ["a) wisdom", "b) mistake", "c) accomplishment"],
          correctAnswer: "b) mistake",
        },
        {
          question:
            "The main theme shared by both stories is the importance of ___________ before taking actions, as seen in the tragic outcomes resulting from the cock's vanity and the farmer's hasty decision regarding the dog.",
          options: [
            "a) courage",
            "b) careful consideration",
            "c) impulsiveness",
          ],
          correctAnswer: "b) careful consideration",
        },
        {
          question:
            "The cock's downfall in \"A Proud Cock\" occurred because he was too ___________ and fell for the fox's deceitful praise.",
          options: ["a) humble", "b) proud", "c) cautious"],
          correctAnswer: "b) proud",
        },
        {
          question:
            'The dog\'s bloodied appearance in "Look Before You Leap" was a result of its brave ___________ against the wolf to protect the child.',
          options: ["a) escape", "b) surrender", "c) fight"],
          correctAnswer: "c) fight",
        },
        {
          question:
            "The hen's dream about the fox attacking the cock served as a ___________ warning, but the cock dismissed it, leading to his tragic end.",
          options: ["a) ominous", "b) joyful", "c) peaceful"],
          correctAnswer: "a) ominous",
        },
        {
          question:
            "The stories highlight the consequences of being too ___________ and not heeding warnings, as seen in the cock's demise and the misunderstanding regarding the dog's actions.",
          options: ["a) cautious", "b) careless", "c) compassionate"],
          correctAnswer: "b) careless",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "In the story 'A Proud Cock,' the hen's dream warned about a cunning fox attacking the cock.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Correct",
        },
        {
          question:
            "The cock in 'A Proud Cock' was praised and flattered by a wise owl.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
        {
          question:
            "The farmer and his wife in 'Look Before You Leap' mistakenly believed the dog had killed their child.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Correct",
        },
        {
          question:
            "The dog in 'Look Before You Leap' fought and killed a cunning fox that entered the house.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
        {
          question:
            "The farmer and his wife in 'Look Before You Leap' realized their mistake when they found the child safe and sound.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Correct",
        },
        {
          question:
            "The main theme shared by both stories is the importance of impulsive actions.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
        {
          question:
            "In 'A Proud Cock,' the cock's downfall occurred because he was too humble and cautious.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
        {
          question:
            "The dog's bloodied appearance in 'Look Before You Leap' was a result of its brave fight against a wolf.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Correct",
        },
        {
          question:
            "The hen's dream about the fox attacking the cock served as a peaceful warning.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
        {
          question:
            "The stories highlight the consequences of being too careful and heeding warnings.",
          options: ["Correct", "Incorrect"],
          correctAnswer: "Incorrect",
        },
      ],
  };

export var activityData;
