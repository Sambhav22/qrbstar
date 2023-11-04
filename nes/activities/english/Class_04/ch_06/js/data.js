export const chapter = "Chapter - 6: The Saintly Scientist";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What was the first 'magical' experience Albert Einstein had as a child?",
          optionA: "Playing the violin",
          optionB: "His mother playing the piano",
          optionC: "A compass needle pointing to the north",
          correctAnswer: "A compass needle pointing to the north",
        },
        {
          question:
            "Why did Einstein's father worry about his son's education?",
          optionA: "He was not interested in studying.",
          optionB: "He was making too many friends.",
          optionC: "He was excelling in all his subjects.",
          correctAnswer: "He was not interested in studying.",
        },
        {
          question:
            "What career path did Albert Einstein's father want him to pursue initially?",
          optionA: "Electrical engineering",
          optionB: "Teaching mathematics and physics",
          optionC: "Music",
          correctAnswer: "Electrical engineering",
        },
        {
          question:
            "How did Einstein become famous for his scientific discoveries?",
          optionA: "He published them in a popular magazine.",
          optionB: "He was appointed as a university professor.",
          optionC:
            "He published his work, and it gained worldwide recognition.",
          correctAnswer:
            "He published his work, and it gained worldwide recognition.",
        },
        {
          question:
            "For what discovery was Albert Einstein awarded the Nobel Prize for Physics?",
          optionA: "Theory of General Relativity",
          optionB: "Photoelectric effect",
          optionC: "Laws of thermodynamics",
          correctAnswer: "Photoelectric effect",
        },
        {
          question:
            "How did Einstein arrive at the Queen of Belgium's palace for a visit?",
          optionA: "By car",
          optionB: "On foot with a suitcase and a violin",
          optionC: "By train",
          correctAnswer: "On foot with a suitcase and a violin",
        },
        {
          question:
            "Why did Einstein refuse to support the German government during World War I?",
          optionA: "He was a pacifist and loved peace.",
          optionB: "He wanted to become a soldier.",
          optionC: "He had no interest in politics.",
          correctAnswer: "He was a pacifist and loved peace.",
        },
        {
          question:
            "What nationality did Albert Einstein choose over German when he had the chance?",
          optionA: "German",
          optionB: "Swiss",
          optionC: "Austrian",
          correctAnswer: "Swiss",
        },
        {
          question:
            "What country did Einstein visit where he refused to ride a man-pulled rickshaw?",
          optionA: "Germany",
          optionB: "India",
          optionC: "Japan",
          correctAnswer: "India",
        },
        {
          question: "How did Albert Einstein spend his last years?",
          optionA: "Traveling the world as a diplomat",
          optionB: "Living in a large mansion in the United States",
          optionC:
            "Living quietly with his books and dreams in a small house in the United States",
          correctAnswer:
            "Living quietly with his books and dreams in a small house in the United States",
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
            "Albert Einstein's father brought him a _______________ as a small boy to entertain him.",
          options: ["Toy train", "Compass", "Violin"],
          correctAnswer: "Compass",
        },
        {
          question:
            "Albert Einstein was too young to understand the principle of _______________ when he received the compass.",
          options: ["Gravity", "Magnetism", "Electricity"],
          correctAnswer: "Magnetism",
        },
        {
          question:
            "Albert Einstein's love for music was evident when he played the _______________.",
          options: ["Flute", "Violin", "Guitar"],
          correctAnswer: "Violin",
        },
        {
          question:
            "Einstein's father was concerned about his son's lack of interest in _______________.",
          options: ["Music", "Mathematics", "Studies"],
          correctAnswer: "Studies",
        },
        {
          question:
            "Albert Einstein entered the Zurich Polytechnic Academy to prepare for a teaching position in _______________.",
          options: ["History", "Chemistry", "Mathematics and physics"],
          correctAnswer: "Mathematics and physics",
        },
        {
          question:
            "Albert Einstein's refusal to support the German government during World War I was due to his strong _______________ beliefs.",
          options: ["Nationalist", "Pacifist", "Political"],
          correctAnswer: "Pacifist",
        },
        {
          question:
            "In India, Albert Einstein refused to ride a _______________ because he considered it disrespectful.",
          options: ["Bicycle", "Horse", "Man-pulled rickshaw"],
          correctAnswer: "Man-pulled rickshaw",
        },
        {
          question: "Einstein was saddened by the use of the _______________.",
          options: ["Steam engine", "Light bulb", "Atom bomb"],
          correctAnswer: "Atom bomb",
        },
        {
          question:
            "Albert Einstein left behind the memory of a man who looked at the universe with the eyes of a _______________.",
          options: ["Scientist", "Philosopher", "Mathematician"],
          correctAnswer: "Scientist",
        },
        {
          question:
            "Einstein's primary message in the text regarding the use of plastic was that _______________.",
          options: [
            "Plastic should be used for all products",
            "Plastic should be banned completely",
            "Plastic use should be limited, and awareness should be spread",
          ],
          correctAnswer:
            "Plastic use should be limited, and awareness should be spread",
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
            "Plastic is extensively used in clothing, cars, scooters, and electrical appliances.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Plastic containers used for heating or storing food can release poisonous chemicals into the food.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Using plastic bottles, plates, spoons, and glasses is encouraged in the text.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Animals like cows often ingest plastic bags, which can block their food pipes and lead to their deaths.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The text suggests that plastic is a threat to both human health and the environment.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Used plastic is recommended for use in the construction of roads and pathways.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Doctors in the text advise heating and storing food in plastic containers to prevent diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Plastic can be transparent or opaque, depending on its form.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Plastic has replaced wood, iron, and other metals to a great extent in various applications.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The text promotes the idea of using plastic bags to carry items from the market.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
