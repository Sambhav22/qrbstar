export const chapter = "Chapter - 15: Enhance Your Skills";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
          question: "What is emphasized as essential for mastering skills?",
          optionA: "Wealth, power, and influence",
          optionB: "Dedication, knowledge, and experience",
          optionC: "Physical strength and agility",
          correctAnswer: "b) Dedication, knowledge, and experience",
         }),
      shuffleOptions({
          question:
            "In the past, how did the choice of occupation typically occur?",
          optionA: "Based on personal interests",
          optionB: "Dependent on individual skills",
          optionC: "Influenced by family proficiency",
          correctAnswer: "c) Influenced by family proficiency",
         }),
      shuffleOptions({
          question:
            "Who are considered professionals in the present time according to the text?",
          optionA: "Milk traders and carpenters",
          optionB: "Doctors, teachers, and nurses",
          optionC: "Fashion designers and architects",
          correctAnswer: "b) Doctors, teachers, and nurses",
         }),
      shuffleOptions({
          question: "What does a chef specialize in, according to the text?",
          optionA: "Sewing and designing clothes",
          optionB: "Planning and designing buildings",
          optionC: "Cooking different types of food",
          correctAnswer: "c) Cooking different types of food",
         }),
      shuffleOptions({
          question: "What is the role of a fashion designer?",
          optionA: "Apply design and beauty to clothes",
          optionB: "Plan and review the construction of buildings",
          optionC: "Conduct experiments in space",
          correctAnswer: "a) Apply design and beauty to clothes",
         }),
      shuffleOptions({
          question: "Who is mentioned as a renowned chef in the text?",
          optionA: "Manish Malhotra",
          optionB: "Ranveer Kapoor",
          optionC: "Sanjeev Kapoor",
          correctAnswer: "c) Sanjeev Kapoor",
         }),
      shuffleOptions({
          question: "What is the primary responsibility of an architect?",
          optionA: "Operating aircraft controls",
          optionB: "Cooking different types of food",
          optionC:
            "Planning, designing, and reviewing construction of buildings",
          correctAnswer:
            "c) Planning, designing, and reviewing construction of buildings",
         }),
      shuffleOptions({
          question:
            "What is the profession of someone who actively and directly operates aircraft controls?",
          optionA: "Chef",
          optionB: "Pilot",
          optionC: "Astronaut",
          correctAnswer: "b) Pilot",
         }),
      shuffleOptions({
          question: "What does a defense officer lead and protect in the text?",
          optionA: "The Navy at sea",
          optionB: "The Army at land",
          optionC: "The Air Force using aircraft",
          correctAnswer: "c) The Air Force using aircraft",
         }),
      shuffleOptions({
          question:
            "How has the role of girls and women in the workforce changed over time?",
          optionA: "They are still limited to household work",
          optionB: "They choose professions based on knowledge and skills",
          optionC: "They are only allowed in certain professions",
          correctAnswer:
            "b) They choose professions based on knowledge and skills",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Skills are learned and anyone can be a master at one skill or more, with the right amount of __________, knowledge, and experience.",
          options: ["a) dedication", "b) laziness", "c) luck"],
          correctAnswer: "a) dedication",
         }),
      shuffleOptions({
          question:
            "In the present scenario, children choose their profession based on their __________ and skills.",
          options: [
            "a) family traditions",
            "b) interests",
            "c) financial status",
          ],
          correctAnswer: "b) interests",
         }),
      shuffleOptions({
          question:
            "__________ is the seniormost cook in a restaurant. Special training is taken by chefs to cook different types of food.",
          options: ["a) Engineer", "b) Chef", "c) Doctor"],
          correctAnswer: "b) Chef",
         }),
      shuffleOptions({
          question:
            "Fashion Designer's work is to apply design and beauty to __________.",
          options: ["a) buildings", "b) clothes", "c) food"],
          correctAnswer: "b) clothes",
         }),
      shuffleOptions({
          question:
            "An astronaut is a space __________. Astronauts conduct experiments, launch satellites, and maintain spacecrafts and equipments.",
          options: ["a) designer", "b) traveler", "c) chef"],
          correctAnswer: "b) traveler",
         }),
      shuffleOptions({
          question:
            "A __________ is a person who actively and directly operates the directional flight controls of an aircraft.",
          options: ["a) chef", "b) pilot", "c) architect"],
          correctAnswer: "b) pilot",
         }),
      shuffleOptions({
          question:
            "Defense Officer is a leader of the defense force. The defense force protects the country at sea, the army at land, and the air force using __________.",
          options: ["a) spacecrafts", "b) buildings", "c) aircrafts"],
          correctAnswer: "c) aircrafts",
         }),
      shuffleOptions({
          question:
            "In earlier times, the choice of occupation mostly depended on __________.",
          options: [
            "a) personal interests",
            "b) family traditions",
            "c) financial status",
          ],
          correctAnswer: "b) family traditions",
         }),
      shuffleOptions({
          question:
            "Girls choose their profession according to their __________ and skills in the present scenario.",
          options: ["a) age", "b) gender", "c) knowledge"],
          correctAnswer: "c) knowledge",
         }),
      shuffleOptions({
          question:
            "Professionals like doctors, teachers, and nurses are considered __________ in the present time.",
          options: ["a) skilled", "b) outdated", "c) irrelevant"],
          correctAnswer: "a) skilled",
           }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
          question:
            "Skills are innate and cannot be learned through dedication and experience.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "In earlier times, the choice of occupation was solely based on individual interests.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "A chef's work involves applying design and beauty to clothes.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Fashion designers primarily plan, design, and review the construction of buildings.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Astronauts conduct experiments, launch satellites, and maintain spacecrafts and equipment.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Pilots are responsible for actively and directly operating the directional flight controls of an aircraft.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Defense officers lead the defense force and protect the country at sea, land, and air using aircraft.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Girls were always allowed to choose their professions based on knowledge and skills in earlier times.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
         }),
      shuffleOptions({
          question:
            "Girls are now involved in all professions, including teachers, doctors, engineers, and astronauts.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
         }),
      shuffleOptions({
          question:
            "Professionals like doctors, teachers, and nurses are not considered skilled in the present time.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
           }),
    ]),
  }
}

export var activityData;
