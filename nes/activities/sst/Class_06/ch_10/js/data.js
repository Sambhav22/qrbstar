export const chapter = "Chapter - 10: Recording and Communicating Knowledge  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What distinguishes the human race from animals?",
        optionA: "Speech",
        optionB: "Knowledge",
        optionC: "Technology",
        correctAnswer: "Knowledge",
      },
      {
        question: "How is knowledge exchanged?",
        optionA: "Orally",
        optionB: "Physically",
        optionC: "Telepathically",
        correctAnswer: "Orally",
      },
      {
        question:
          "What was the earliest form of written communication using pictures and symbols?",
        optionA: "Pictograph",
        optionB: "Hieroglyphics",
        optionC: "Calligraphy",
        correctAnswer: "Pictograph",
      },
      {
        question:
          "Which ancient civilization is credited with developing the first known system of writing?",
        optionA: "Egyptians",
        optionB: "Sumerians",
        optionC: "Chinese",
        correctAnswer: "Sumerians",
      },
      {
        question: "Which script is the basis for most Indian languages today?",
        optionA: "Devanagari",
        optionB: "Brahmi",
        optionC: "Sumerian",
        correctAnswer: "Devanagari",
      },
      {
        question:
          "What is the most widely used system for writing numbers in most parts of the world today?",
        optionA: "Roman numerals",
        optionB: "Arabic numerals",
        optionC: "Chinese numerals",
        correctAnswer: "Arabic numerals",
      },
      {
        question:
          "What material was used to make true paper, as we know it today?",
        optionA: "Papyrus",
        optionB: "Animal skin",
        optionC: "Tree bark",
        correctAnswer: "Tree bark",
      },
      {
        question:
          "Who is credited with inventing the printing press in the year 1455?",
        optionA: "Louis Braille",
        optionB: "John Gutenberg",
        optionC: "Leonardo da Vinci",
        correctAnswer: "John Gutenberg",
      },
      {
        question:
          "What script allows visually-challenged individuals to read using patterns of small dots?",
        optionA: "Braille",
        optionB: "Hieroglyphics",
        optionC: "Sanskrit",
        correctAnswer: "Braille",
      },
      {
        question:
          "Why is literacy considered the key to progress in a country?",
        optionA: "It increases population",
        optionB: "It promotes culture",
        optionC: "It facilitates communication of knowledge",
        correctAnswer: "It facilitates communication of knowledge",
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
          "Knowledge is the primary factor that clearly distinguishes the human race from the animals. It has enabled us to make all the advancements in the ________ and ________ spheres that we have been able to achieve.",
        options: ["Art, Music", "Science, Technology", "Literature, History"],
        answer: "Science, Technology",
      },
      {
        question:
          "Exchange of knowledge is important in our life as our lives depend upon the information about a variety of subjects. Knowledge is exchanged in two different ways - by speaking (orally) or by ________.",
        options: ["Dancing", "Singing", "Writing"],
        answer: "Writing",
      },
      {
        question:
          "Long ago in ancient India, knowledge was passed orally from generation to generation. It was not recorded in written form. Because of this, knowledge was communicated to very few people. This may also have resulted in the loss of ________.",
        options: ["Wisdom", "Knowledge", "Information"],
        answer: "Knowledge",
      },
      {
        question:
          "The earliest form of written communication was through pictures and symbols. This type of writing is called ________.",
        options: ["Hieroglyphics", "Calligraphy", "Pictograph"],
        answer: "Pictograph",
      },
      {
        question:
          "In the beginning, man made these symbols as he perceived the things. For example, he drew almost a horse when he drew a symbol for a horse. It was difficult to draw these pictures, so he started to simplify these signs and symbols. He used lines, crosses, or circles for different features and then for whole things. For example, he drew one line to say 'one' and two lines to say '________'.",
        options: ["Four", "Two", "Three"],
        answer: "Three",
      },
      {
        question:
          "The Sumerians of Mesopotamia (now Iraq) were the first to develop a system of writing, called a script using signs, over ________ years ago.",
        options: ["1000", "2000", "5000"],
        answer: "2000",
      },
      {
        question:
          "The oldest script in India was discovered in the seals of the Indus Valley Civilization. No one has yet been able to read the script. Later, the Brahmi and other scripts were discovered. Most scripts used to write Indian languages today have been derived from the ________ script.",
        options: ["Devanagari", "Sumerian", "Brahmi"],
        answer: "Brahmi",
      },
      {
        question:
          "Numbers are very important in your life. You need them when you want to divide the candies with your friend, or when you want to compare your marks with those of your friends. Early Man too needed the knowledge of numbers, but he did not have it. In the beginning, Early Man started to keep one pebble or twig for each animal. If he had more than one type of animal or thing, he kept different things. For example, a pebble for a goat and a twig for a cow. Soon he thought that he could draw lines or circles on the ground or rocks. Sometimes, he attributed a sign for a group of animals or things. For example, a cross for three or four. He also used his fingers for counting. He faced a problem when he had a large number of things or animals. He gradually developed signs for things, animals, and ________.",
        options: ["People", "Numbers", "Words"],
        answer: "Numbers",
      },
      {
        question:
          "The common system of writing numbers used in most parts of the world today is the ________ system.",
        options: ["Roman numerals", "Greek numerals", "Hindu-Arabic system"],
        answer: "Hindu-Arabic system",
      },
      {
        question:
          "Today, modern machines are used to manufacture paper. The paper mills use wood pulp, clay, and other substances to manufacture paper of different types. The art of printing was developed after paper was invented. The printing press was invented in the year ________.",
        options: ["1255", "1355", "1455"],
        answer: "1455",
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
          "Knowledge is the primary factor that distinguishes the human race from animals.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The earliest form of written communication used in ancient India was pictographic.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "The Sumerians of Mesopotamia were the first to develop a system of writing using signs over 500 years ago.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The oldest script in India was discovered in the seals of the Indus Valley Civilization, and it can be read and understood today.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The Roman alphabet is used to write the English language and has 26 letters.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Groundwater is primarily obtained by drilling or pumping, contributing to more than 70% of the drinking water requirements in rural areas.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Dams are structures built across rivers, primarily for the purpose of increasing groundwater levels.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "The primary idea behind the invention of the printing press was to make the copying of books faster and more accurate.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Water makes up approximately 72% of the Earth's surface.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Braille is a script for the visually challenged that allows reading through patterns of small dots raised from the paper's surface.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
