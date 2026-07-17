export const chapter = "Chapter - 25: Understanding Criminal Justice System";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who supervises each police circle at the district level?",
        optionA: "Sub-Inspector",
        optionB: "Deputy Superintendent of Police (DSP)",
        optionC: "Constable",
        correctAnswer: "Deputy Superintendent of Police (DSP)",
      }),
      shuffleOptions({
        question: "Who assists the Jailor in running the district jail?",
        optionA: "Public Prosecutor",
        optionB: "Deputy Jailor",
        optionC: "Head Constable",
        correctAnswer: "Deputy Jailor",
      }),
      shuffleOptions({
        question: "Who takes charge of the case after the chargesheet is submitted to the court?",
        optionA: "Public Prosecutor",
        optionB: "Home Minister",
        optionC: "Defence Lawyer",
        correctAnswer: "Public Prosecutor",
      }),
      shuffleOptions({
        question: "Who issues guidelines such as wearing clear identification during arrest?",
        optionA: "Parliament",
        optionB: "Supreme Court (DK Basu Guidelines)",
        optionC: "Cabinet",
        correctAnswer: "Supreme Court (DK Basu Guidelines)",
      }),
      shuffleOptions({
        question: "Who cross-examines the witnesses presented by the prosecution?",
        optionA: "Judge",
        optionB: "Defence Lawyer",
        optionC: "Collector",
        correctAnswer: "Defence Lawyer",
      }),
      shuffleOptions({
        question: "Who ensures that trials are held impartially in an open court?",
        optionA: "Sub-Inspector",
        optionB: "ailor",
        optionC: "Judge J",
        correctAnswer: "Judge J",
      }),
      shuffleOptions({
        question: "Who can approach the Human Rights Commission in case of police bias?",
        optionA: "Only police officers",
        optionB: "Any complainant or citizen",
        optionC: "Only accused",
        correctAnswer: "Any complainant or citizen",
      }),
      shuffleOptions({
        question: "Who must sign the arrest memo besides the police officer?",
        optionA: "At least one witness and the arrested person",
        optionB: "The SP",
        optionC: "The Public Prosecutor",
        correctAnswer: "At least one witness and the arrested person",
      }),
      shuffleOptions({
        question: "Who may file a private complaint if the police refuse to record an FIR?",
        optionA: "Head Constable",
        optionB: "Any complainant or affected person",
        optionC: "Only the Sarpanch",
        correctAnswer: "Any complainant or affected person",
      }),
      shuffleOptions({
        question: "Who plays a neutral role in helping the court reach a conclusion?",
        optionA: "Public Prosecutor",
        optionB: "SHO",
        optionC: "Village Chowkidar",
        correctAnswer: "Public Prosecutor",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "An FIR must be written and signed before a copy is given to the ________.",
        optionA: "accused",
        optionB: "informant",
        optionC: "judge",
        correctAnswer: "informant",
      }),
      shuffleOptions({
        question: "The police must start the ________ immediately after an FIR is registered.",
        optionA: "trial",
        optionB: "investigation",
        optionC: "judgement",
        correctAnswer: "investigation",
      }),
      shuffleOptions({
        question: "A memo of arrest must contain the date and ________ of arrest.",
        optionA: "salary",
        optionB: "time",
        optionC: "distance",
        correctAnswer: "time",
      }),
      shuffleOptions({
        question: "A person arrested has the right to be defended by a ________ of his/her choice.",
        optionA: "doctor",
        optionB: "teacher",
        optionC: "lawyer",
        correctAnswer: "lawyer",
      }),
      shuffleOptions({
        question: "Information about a cognisable offence can be given ________.",
        optionA: "only in writing",
        optionB: "orally or in writing both",
        optionC: "only by the victim",
        correctAnswer: "orally or in writing both",
      }),
      shuffleOptions({
        question: "The police must inform a relative of the arrested person when the person is taken into ________.",
        optionA: "custody",
        optionB: "training",
        optionC: "hospital",
        correctAnswer: "custody",
      }),
      shuffleOptions({
        question: "PIL can be filed for protecting the ________ interest.",
        optionA: "political",
        optionB: "private",
        optionC: "public",
        correctAnswer: "public",
      }),
      shuffleOptions({
        question: "Police officers must wear clear identification and name ________ during arrest.",
        optionA: "belts",
        optionB: "tags",
        optionC: "jackets",
        correctAnswer: "tags",
      }),
      shuffleOptions({
        question: "A chargesheet is prepared at the end of the ________ stage.",
        optionA: "trial",
        optionB: "investigation",
        optionC: "punishment",
        correctAnswer: "investigation",
      }),
      shuffleOptions({
        question: "The trial must be conducted in an ________ court.",
        optionA: "empty",
        optionB: "locked",
        optionC: "open",
        correctAnswer: "open",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Police must read aloud an oral complaint before taking the complainant’s signature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Any person who knows about a cognisable offence may file an FIR.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A judge may convict someone without hearing the defence side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Police can deny lodging an FIR if they feel the complaint is unimportant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A memo of arrest must be counter-signed by the arrested person.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Public Prosecutor must remain neutral while assisting the court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A PIL can be started even by sending a letter to the court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "FIR can be filed only in the police station where the crime occurred.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Police must inform relatives of the arrested person if they live outside the district within 8–12 hours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After filing the chargesheet, the police continue controlling the court proceedings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
