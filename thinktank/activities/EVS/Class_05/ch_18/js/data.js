export const chapter = "Chapter -18: Work and Pleasure";
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
          "question": "What are the two main types of work mentioned in the text?",
          "optionA": "Manual and Intellectual",
          "optionB": "Physical and Mental",
          "optionC": "Hard and Easy",
          "correctAnswer": "Manual and Intellectual"
        }),
      shuffleOptions({
          "question": "Which of the following is considered a manual work?",
          "optionA": "Lawyer",
          "optionB": "Doctor",
          "optionC": "Cobbler",
          "correctAnswer": "Cobbler"
        }),
      shuffleOptions({
          "question": "What type of work involves applying intellect skills or brain?",
          "optionA": "Carpentry",
          "optionB": "Masonry",
          "optionC": "Lawyer",
          "correctAnswer": "Lawyer"
        }),
      shuffleOptions({
          "question": "What are blue-collar jobs primarily associated with?",
          "optionA": "Managerial tasks",
          "optionB": "Intellectual tasks",
          "optionC": "Manual efforts",
          "correctAnswer": "Manual efforts"
        }),
      shuffleOptions({
          "question": "According to the text, what does dignity of work mean?",
          "optionA": "Some works are superior to others",
          "optionB": "All works are equally respectable",
          "optionC": "Manual work is inferior to intellectual work",
          "correctAnswer": "All works are equally respectable"
        }),
      shuffleOptions({
          "question": "Who raised his voice against the mistreatment of manual workers?",
          "optionA": "Mahatma Gandhi",
          "optionB": "Abraham Lincoln",
          "optionC": "Nelson Mandela",
          "correctAnswer": "Mahatma Gandhi"
        }),
      shuffleOptions({
          "question": "What did Mahatma Gandhi do in his ashram that highlighted his beliefs about work?",
          "optionA": "Performed manual tasks",
          "optionB": "Avoided manual work",
          "optionC": "Hired workers",
          "correctAnswer": "Performed manual tasks"
        }),
      shuffleOptions({
          "question": "What term is used for jobs that generally do not involve manual labor?",
          "optionA": "White-collar jobs",
          "optionB": "Blue-collar jobs",
          "optionC": "Manual jobs",
          "correctAnswer": "White-collar jobs"
        }),
      shuffleOptions({
          "question": "What type of workers did Mahatma Gandhi consider as special?",
          "optionA": "Intellectual workers",
          "optionB": "Manual workers",
          "optionC": "Managerial workers",
          "correctAnswer": "Manual workers"
        }),
      shuffleOptions({
          "question": "According to the text, what should every work that is done with honesty or sincerity deserve?",
          "optionA": "Criticisms",
          "optionB": "Appreciation",
          "optionC": "Rejection",
          "correctAnswer": "Appreciation"
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
          "question": "Manual work involves physical effort such as toil a land, carry a load with our __________.",
          "optionA": "Feet",
          "optionB": "Head",
          "optionC": "Hands",
          "correctAnswer": "Hands"
        }),
      shuffleOptions({
          "question": "__________ are considered blue-collar jobs.",
          "optionA": "Managers",
          "optionB": "Lawyers",
          "optionC": "Construction workers",
          "correctAnswer": "Construction workers"
        }),
      shuffleOptions({
          "question": "Intellectual work relies on applying __________ skills.",
          "optionA": "Physical",
          "optionB": "Emotional",
          "optionC": "Intellectual",
          "correctAnswer": "Intellectual"
        }),
      shuffleOptions({
          "question": "According to the text, all kinds of work are equally respectable and dignified, regardless of whether they are manual or __________.",
          "optionA": "Financial",
          "optionB": "Intellectual",
          "optionC": "Social",
          "correctAnswer": "Intellectual"
        }),
      shuffleOptions({
          "question": "__________ feathers help birds to keep their body warm.",
          "optionA": "Flight",
          "optionB": "Down",
          "optionC": "Long",
          "correctAnswer": "Down"
        }),
      shuffleOptions({
          "question": "Eagles and vultures have __________ beaks that help them tear the flesh of small animals.",
          "optionA": "Pointed",
          "optionB": "Hooked",
          "optionC": "Curved",
          "correctAnswer": "Hooked"
        }),
      shuffleOptions({
          "question": "Manual workers such as __________ deserve respect for their contributions.",
          "optionA": "Teachers",
          "optionB": "Sweepers",
          "optionC": "Doctors",
          "correctAnswer": "Sweepers"
        }),
      shuffleOptions({
          "question": "Gandhiji emphasized that no work is __________ or big.",
          "optionA": "Small",
          "optionB": "Insignificant",
          "optionC": "Minor",
          "correctAnswer": "Small"
        }),
      shuffleOptions({
          "question": "White-collar jobs typically do not involve __________ labor.",
          "optionA": "Manual",
          "optionB": "Physical",
          "optionC": "Intellectual",
          "correctAnswer": "Manual"
        }),
      shuffleOptions({
          "question": "The dignity of work means that every work done with honesty deserves __________.",
          "optionA": "Praise",
          "optionB": "Appreciation",
          "optionC": "Recognition",
          "correctAnswer": "Appreciation"
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
          "question": "Manual work only involves physical effort.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "All kinds of work are equally respectable according to the text.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Intellectual work does not require any professional degree.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Blue-collar jobs primarily involve intellectual labor.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Gandhiji believed that some works are superior to others.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Dignity of work means only manual work deserves appreciation.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Birds use their beaks primarily for flying.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Eagles and vultures have curved beaks.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Sweepers and cobblers do not deserve respect for their contributions.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "White-collar jobs primarily involve manual labor.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
