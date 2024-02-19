export const chapter = "Chapter - 15: Enhance Your Skills";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is emphasized as essential for mastering skills?",
          optionA: "Wealth, power, and influence",
          optionB: "Dedication, knowledge, and experience",
          optionC: "Physical strength and agility",
          correctAnswer: "b) Dedication, knowledge, and experience",
        },
        {
          question:
            "In the past, how did the choice of occupation typically occur?",
          optionA: "Based on personal interests",
          optionB: "Dependent on individual skills",
          optionC: "Influenced by family proficiency",
          correctAnswer: "c) Influenced by family proficiency",
        },
        {
          question:
            "Who are considered professionals in the present time according to the text?",
          optionA: "Milk traders and carpenters",
          optionB: "Doctors, teachers, and nurses",
          optionC: "Fashion designers and architects",
          correctAnswer: "b) Doctors, teachers, and nurses",
        },
        {
          question: "What does a chef specialize in, according to the text?",
          optionA: "Sewing and designing clothes",
          optionB: "Planning and designing buildings",
          optionC: "Cooking different types of food",
          correctAnswer: "c) Cooking different types of food",
        },
        {
          question: "What is the role of a fashion designer?",
          optionA: "Apply design and beauty to clothes",
          optionB: "Plan and review the construction of buildings",
          optionC: "Conduct experiments in space",
          correctAnswer: "a) Apply design and beauty to clothes",
        },
        {
          question: "Who is mentioned as a renowned chef in the text?",
          optionA: "Manish Malhotra",
          optionB: "Ranveer Kapoor",
          optionC: "Sanjeev Kapoor",
          correctAnswer: "c) Sanjeev Kapoor",
        },
        {
          question: "What is the primary responsibility of an architect?",
          optionA: "Operating aircraft controls",
          optionB: "Cooking different types of food",
          optionC:
            "Planning, designing, and reviewing construction of buildings",
          correctAnswer:
            "c) Planning, designing, and reviewing construction of buildings",
        },
        {
          question:
            "What is the profession of someone who actively and directly operates aircraft controls?",
          optionA: "Chef",
          optionB: "Pilot",
          optionC: "Astronaut",
          correctAnswer: "b) Pilot",
        },
        {
          question: "What does a defense officer lead and protect in the text?",
          optionA: "The Navy at sea",
          optionB: "The Army at land",
          optionC: "The Air Force using aircraft",
          correctAnswer: "c) The Air Force using aircraft",
        },
        {
          question:
            "How has the role of girls and women in the workforce changed over time?",
          optionA: "They are still limited to household work",
          optionB: "They choose professions based on knowledge and skills",
          optionC: "They are only allowed in certain professions",
          correctAnswer:
            "b) They choose professions based on knowledge and skills",
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
            "Skills are learned and anyone can be a master at one skill or more, with the right amount of __________, knowledge, and experience.",
          options: ["a) dedication", "b) laziness", "c) luck"],
          correctAnswer: "a) dedication",
        },
        {
          question:
            "In the present scenario, children choose their profession based on their __________ and skills.",
          options: [
            "a) family traditions",
            "b) interests",
            "c) financial status",
          ],
          correctAnswer: "b) interests",
        },
        {
          question:
            "__________ is the seniormost cook in a restaurant. Special training is taken by chefs to cook different types of food.",
          options: ["a) Engineer", "b) Chef", "c) Doctor"],
          correctAnswer: "b) Chef",
        },
        {
          question:
            "Fashion Designer's work is to apply design and beauty to __________.",
          options: ["a) buildings", "b) clothes", "c) food"],
          correctAnswer: "b) clothes",
        },
        {
          question:
            "An astronaut is a space __________. Astronauts conduct experiments, launch satellites, and maintain spacecrafts and equipments.",
          options: ["a) designer", "b) traveler", "c) chef"],
          correctAnswer: "b) traveler",
        },
        {
          question:
            "A __________ is a person who actively and directly operates the directional flight controls of an aircraft.",
          options: ["a) chef", "b) pilot", "c) architect"],
          correctAnswer: "b) pilot",
        },
        {
          question:
            "Defense Officer is a leader of the defense force. The defense force protects the country at sea, the army at land, and the air force using __________.",
          options: ["a) spacecrafts", "b) buildings", "c) aircrafts"],
          correctAnswer: "c) aircrafts",
        },
        {
          question:
            "In earlier times, the choice of occupation mostly depended on __________.",
          options: [
            "a) personal interests",
            "b) family traditions",
            "c) financial status",
          ],
          correctAnswer: "b) family traditions",
        },
        {
          question:
            "Girls choose their profession according to their __________ and skills in the present scenario.",
          options: ["a) age", "b) gender", "c) knowledge"],
          correctAnswer: "c) knowledge",
        },
        {
          question:
            "Professionals like doctors, teachers, and nurses are considered __________ in the present time.",
          options: ["a) skilled", "b) outdated", "c) irrelevant"],
          correctAnswer: "a) skilled",
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
            "Skills are innate and cannot be learned through dedication and experience.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "In earlier times, the choice of occupation was solely based on individual interests.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A chef's work involves applying design and beauty to clothes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Fashion designers primarily plan, design, and review the construction of buildings.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Astronauts conduct experiments, launch satellites, and maintain spacecrafts and equipment.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Pilots are responsible for actively and directly operating the directional flight controls of an aircraft.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Defense officers lead the defense force and protect the country at sea, land, and air using aircraft.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Girls were always allowed to choose their professions based on knowledge and skills in earlier times.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Girls are now involved in all professions, including teachers, doctors, engineers, and astronauts.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Professionals like doctors, teachers, and nurses are not considered skilled in the present time.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
