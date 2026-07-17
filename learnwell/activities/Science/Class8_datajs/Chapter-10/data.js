export const chapter = "Chapter - 10: Reaching the Age of Adolescence";
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
        question: "Which stage marks the transition between childhood and adulthood?",
        optionA: "Infancy",
        optionB: "Adolescence",
        optionC: "Old age",
        correctAnswer: "Adolescence",
      }),
      shuffleOptions({
        question: "Which term refers to the rapid physical and hormonal changes during teenage years?",
        optionA: "Metamorphosis",
        optionB: "Puberty",
        optionC: "Fertilisation",
        correctAnswer: "Puberty",
      }),
      shuffleOptions({
        question: "Which gland is called the “master gland” of the human body?",
        optionA: "Thyroid",
        optionB: "Pituitary",
        optionC: "Adrenal",
        correctAnswer: "Pituitary",
      }),
      shuffleOptions({
        question: "Which hormone is responsible for the development of male secondary sexual characters?",
        optionA: "Oestrogen",
        optionB: "Testosterone",
        optionC: "Insulin",
        correctAnswer: "Testosterone",
      }),
      shuffleOptions({
        question: "Which hormone controls the development of secondary sexual characters in girls?",
        optionA: "Oestrogen",
        optionB: "Thyroxine",
        optionC: "Adrenaline",
        correctAnswer: "Oestrogen",
      }),
      shuffleOptions({
        question: "What is the part of a boy’s throat that becomes larger and more visible during puberty?",
        optionA: "Voice box",
        optionB: "Adam’s apple",
        optionC: "Windpipe",
        correctAnswer: "Adam’s apple",
      }),
      shuffleOptions({
        question: "Which gland produces the hormone insulin?",
        optionA: "Adrenal gland",
        optionB: "Pancreas",
        optionC: "Thyroid gland",
        correctAnswer: "Pancreas",
      }),
      shuffleOptions({
        question: "Which hormone prepares the body to deal with stress and emergencies?",
        optionA: "Adrenaline",
        optionB: "Thyroxine",
        optionC: "Progesterone",
        correctAnswer: "Adrenaline",
      }),
      shuffleOptions({
        question: "The deficiency of which hormone leads to goitre?",
        optionA: "Insulin",
        optionB: "Thyroxine",
        optionC: "Testosterone",
        correctAnswer: "Thyroxine",
      }),
      shuffleOptions({
        question: "AIDS is caused by which virus?",
        optionA: "HBV",
        optionB: "HIV",
        optionC: "HCV",
        correctAnswer: "HIV",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adolescence begins with the onset of ______.",
        optionA: "childhood",
        optionB: "puberty",
        optionC: "menopause",
        correctAnswer: "puberty",
      }),
      shuffleOptions({
        question: "The oily substance released by skin glands is called ______.",
        optionA: "sweat",
        optionB: "sebum",
        optionC: "mucus",
        correctAnswer: "sebum",
      }),
      shuffleOptions({
        question: "The first menstrual flow in girls is known as ______.",
        optionA: "menopause",
        optionB: "menarche",
        optionC: "ovulation",
        correctAnswer: "menarche",
      }),
      shuffleOptions({
        question: "The permanent stoppage of menstruation is called ______.",
        optionA: "puberty",
        optionB: "menopause",
        optionC: "adolescence",
        correctAnswer: "menopause",
      }),
      shuffleOptions({
        question: "The hormone necessary for maintaining pregnancy is ______.",
        optionA: "insulin",
        optionB: "progesterone",
        optionC: "testosterone",
        correctAnswer: "progesterone",
      }),
      shuffleOptions({
        question: "Chemical messengers produced by endocrine glands are known as ______.",
        optionA: "vitamins",
        optionB: "hormones",
        optionC: "enzymes",
        correctAnswer: "hormones",
      }),
      shuffleOptions({
        question: "Glands that release hormones directly into the blood are called ______ glands.",
        optionA: "sweat",
        optionB: "endocrine",
        optionC: "salivary",
        correctAnswer: "endocrine",
      }),
      shuffleOptions({
        question: "Organs on which hormones act are called ______ sites.",
        optionA: "target",
        optionB: "action",
        optionC: "working",
        correctAnswer: "target",
      }),
      shuffleOptions({
        question: "Excess intake of fats and sugars during adolescence may lead to ______.",
        optionA: "dehydration",
        optionB: "obesity",
        optionC: "anaemia",
        correctAnswer: "obesity",
      }),
      shuffleOptions({
        question: "The transformation of a tadpole into a frog is called ______.",
        optionA: "reproduction",
        optionB: "metamorphosis",
        optionC: "germination",
        correctAnswer: "metamorphosis",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Puberty is the stage when the reproductive system becomes capable of functioning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adam’s apple is more prominent in boys than in girls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hormones act only on the glands that produce them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Menstruation occurs roughly once every twenty-eight to thirty days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Insulin is produced by the adrenal gland.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ovaries produce both oestrogen and progesterone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A balanced diet contains all nutrients in proper proportion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pimples and acne during adolescence are caused by active sweat and oil glands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "AIDS is an incurable disease caused by a virus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Adolescence is a period with no major emotional changes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
