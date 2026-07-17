export const chapter = "Chapter - 26: Unpacking Gender";
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
        question: "Who is commonly shown as a mechanic in TV advertisements?",
        optionA: "Women",
        optionB: "Men",
        optionC: "Children",
        correctAnswer: "Men",
      }),
      shuffleOptions({
        question: "Which section of society often restricts a girl’s mobility the most?",
        optionA: "School",
        optionB: "Family",
        optionC: "Neighbours",
        correctAnswer: "Family",
      }),
      shuffleOptions({
        question: "Who founded the Brahmo Samaj?",
        optionA: "Mahatma Phule",
        optionB: "Indira Gandhi",
        optionC: "Raja Ram Mohan Roy",
        correctAnswer: "Raja Ram Mohan Roy",
      }),
      shuffleOptions({
        question: "Which harmful practice kills a girl child before birth?",
        optionA: "Infanticide",
        optionB: "Female Foeticide",
        optionC: "Pardah",
        correctAnswer: "Female Foeticide",
      }),
      shuffleOptions({
        question: "Who demanded a ban on pardah and polygamy?",
        optionA: "Sir Syed Ahmed Khan",
        optionB: "Swami Dayanand",
        optionC: "Ishwar Chandra Vidyasagar",
        correctAnswer: "Sir Syed Ahmed Khan",
      }),
      shuffleOptions({
        question: "Which group of women mostly works in agricultural labour in India?",
        optionA: "Urban women",
        optionB: "Rural women",
        optionC: "Sportswomen",
        correctAnswer: "Rural women",
      }),
      shuffleOptions({
        question: "Who encouraged widow upliftment and opened the first girls’ school in Maharashtra?",
        optionA: "Mahatma Phule",
        optionB: "Guru Nanak",
        optionC: "Dayanand Saraswati",
        correctAnswer: "Mahatma Phule",
      }),
      shuffleOptions({
        question: "Which system allows men to control decisions in the family?",
        optionA: "Democratic system",
        optionB: "Patriarchal system",
        optionC: "Educational system",
        correctAnswer: "Patriarchal system",
      }),
      shuffleOptions({
        question: "Who often receives lower wages for the same job?",
        optionA: "Men",
        optionB: "Women",
        optionC: "Children",
        correctAnswer: "Women",
      }),
      shuffleOptions({
        question: "Media often shows women doing which type of work?",
        optionA: "House cleaning",
        optionB: "Mountain climbing",
        optionC: "Technical repairs",
        correctAnswer: "House cleaning",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gender roles are shaped by the ________.",
        optionA: "society",
        optionB: "weather",
        optionC: "machines",
        correctAnswer: "society",
      }),
      shuffleOptions({
        question: "Girls are often expected to focus on ________ work.",
        optionA: "household",
        optionB: "construction",
        optionC: "transport",
        correctAnswer: "household",
      }),
      shuffleOptions({
        question: "Women working at home usually receive ________ recognition.",
        optionA: "national",
        optionB: "no",
        optionC: "extra",
        correctAnswer: "no",
      }),
      shuffleOptions({
        question: "A girl child is sometimes viewed as a ________ on the family.",
        optionA: "leader",
        optionB: "burden",
        optionC: "guest",
        correctAnswer: "burden",
      }),
      shuffleOptions({
        question: "Male children often receive better ________ opportunities.",
        optionA: "education",
        optionB: "gardening",
        optionC: "travel routes",
        correctAnswer: "education",
      }),
      shuffleOptions({
        question: "Media shapes public ________ about gender.",
        optionA: "salaries",
        optionB: "perception",
        optionC: "uniforms",
        correctAnswer: "perception",
      }),
      shuffleOptions({
        question: "A widow faces strict ________ in many conservative societies.",
        optionA: "rights",
        optionB: "restrictions",
        optionC: "celebrations",
        correctAnswer: "restrictions",
      }),
      shuffleOptions({
        question: "Women form a large part of the ________ workforce in rural India.",
        optionA: "agricultural",
        optionB: "software",
        optionC: "aviation",
        correctAnswer: "agricultural",
      }),
      shuffleOptions({
        question: "Many girls are married early to reduce family ________.",
        optionA: "burden",
        optionB: "happiness",
        optionC: "wealth",
        correctAnswer: "burden",
      }),
      shuffleOptions({
        question: "Girls are often denied equal ________ inside the household.",
        optionA: "freedom",
        optionB: "access to nutrition",
        optionC: "both a and b",
        correctAnswer: "both a and b",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Girls always receive the same medical care as boys.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Women earn less than men for the same work in many places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Media sometimes reinforces gender stereotypes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A girl child is always considered a blessing in all families.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Exclusive schools exist only in villages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Patriarchal society gives men dominance over family decisions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Women in rural areas mainly work in unorganised sectors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Government has legally banned the dowry system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Early marriage is encouraged in modern society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Women’s unpaid domestic work is often ignored in economic calculations.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
