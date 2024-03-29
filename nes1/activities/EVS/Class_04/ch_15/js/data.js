export const chapter = "Chapter -15: Enhance Your Skills";
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
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "What is emphasized as essential for mastering skills?",
          "optionA": "Natural talent",
          "optionB": "Dedication, knowledge, and experience",
          "optionC": "Financial resources",
          "correctAnswer": "Dedication, knowledge, and experience"
        }),
      shuffleOptions({
          "question": "In earlier times, how were occupations primarily chosen?",
          "optionA": "Based on personal interest",
          "optionB": "According to family expertise",
          "optionC": "Through formal education",
          "correctAnswer": "According to family expertise"
        }),
      shuffleOptions({
          "question": "Which of the following is NOT mentioned as a preferred profession in the present time?",
          "optionA": "Doctor",
          "optionB": "Engineer",
          "optionC": "Milk trader",
          "correctAnswer": "Milk trader"
        }),
      shuffleOptions({
          "question": "Who is typically considered the senior-most cook in a restaurant?",
          "optionA": "Waiter",
          "optionB": "Chef",
          "optionC": "Sous chef",
          "correctAnswer": "Chef"
        }),
      shuffleOptions({
          "question": "What is the primary responsibility of an architect?",
          "optionA": "Cooking food",
          "optionB": "Planning and designing buildings",
          "optionC": "Flying aircraft",
          "correctAnswer": "Planning and designing buildings"
        }),
      shuffleOptions({
          "question": "What is the main role of a pilot?",
          "optionA": "Operating spacecraft",
          "optionB": "Directing flight controls of an aircraft",
          "optionC": "Conducting experiments in space",
          "correctAnswer": "Directing flight controls of an aircraft"
        }),
      shuffleOptions({
          "question": "What is the traditional source of livelihood for craftsmen in rural India?",
          "optionA": "Farming",
          "optionB": "Making craft items",
          "optionC": "Teaching",
          "correctAnswer": "Making craft items"
        }),
      shuffleOptions({
          "question": "What was the traditional role of girls and women regarding work?",
          "optionA": "They were encouraged to pursue careers outside the home.",
          "optionB": "They were primarily engaged in household work.",
          "optionC": "They were trained to become astronauts.",
          "correctAnswer": "They were primarily engaged in household work."
        }),
      shuffleOptions({
          "question": "What is the modern-day scenario regarding women in professions?",
          "optionA": "Women are only allowed to work in specific fields.",
          "optionB": "Women have equal opportunities and can pursue various professions.",
          "optionC": "Women are restricted to traditional roles.",
          "correctAnswer": "Women have equal opportunities and can pursue various professions."
        }),
      shuffleOptions({
          "question": "What is the purpose of vocational training centers mentioned in the text?",
          "optionA": "To provide entertainment",
          "optionB": "To impart knowledge and promote talents",
          "optionC": "To sell craft items",
          "correctAnswer": "To impart knowledge and promote talents"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "The profession of a chef involves ___________.",
          "optionA": "cooking and special training",
          "optionB": "teaching and counseling",
          "correctAnswer": "cooking and special training"
        }),
      shuffleOptions({
          "question": "Fashion designers apply design and beauty to ___________.",
          "optionA": "cars and motorcycles",
          "optionB": "clothes",
          "correctAnswer": "clothes"
        }),
      shuffleOptions({
          "question": "An architect's work primarily involves ___________.",
          "optionA": "conducting experiments in space",
          "optionB": "planning and designing buildings",
          "correctAnswer": "planning and designing buildings"
        }),
      shuffleOptions({
          "question": "Pilots undergo extensive training to operate ___________.",
          "optionA": "spacecraft",
          "optionB": "aircraft",
          "correctAnswer": "aircraft"
        }),
      shuffleOptions({
          "question": "What is the primary responsibility of a defence officer?",
          "optionA": "Protecting the country's land",
          "optionB": "Selling crafts in the market",
          "correctAnswer": "Protecting the country's land"
        }),
      shuffleOptions({
          "question": "Crafts such as pottery and wooden baskets are made by craftsmen primarily for ___________.",
          "optionA": "personal use",
          "optionB": "selling in the market",
          "correctAnswer": "selling in the market"
        }),
      shuffleOptions({
          "question": "In earlier times, children's choice of occupation was mostly influenced by ___________.",
          "optionA": "their interests",
          "optionB": "their families' expertise",
          "correctAnswer": "their families' expertise"
        }),
      shuffleOptions({
          "question": "Girls and women in the present scenario choose their professions based on ___________.",
          "optionA": "societal norms",
          "optionB": "their skills and knowledge",
          "correctAnswer": "their skills and knowledge"
        }),
      shuffleOptions({
          "question": "Who are considered the seniormost cooks in a restaurant?",
          "optionA": "Teachers",
          "optionB": "Chefs",
          "correctAnswer": "Chefs"
        }),
      shuffleOptions({
          "question": "Which profession involves actively operating directional flight controls?",
          "optionA": "Doctor",
          "optionB": "Pilot",
          "correctAnswer": "Pilot"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "Skills are inherent and cannot be learned.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Occupations in earlier times were primarily determined by family expertise.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Children nowadays choose their professions solely based on family traditions.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Doctors, teachers, and engineers are considered preferred professions in modern times.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Fashion designers primarily work with automobiles and motorcycles.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Pilots undergo minimal training before operating aircraft.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Craftsmen in rural India primarily engage in agricultural activities for their livelihood.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Girls and women in the past were encouraged to pursue various professions according to their skills and interests.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Defence officers play a crucial role in protecting a country from attacks.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Vocational training centres are established to promote the skills and talents of craftsmen in rural areas.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ]
      
      
    ],
  };
}

export var activityData;
