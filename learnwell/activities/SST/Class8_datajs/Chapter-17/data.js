export const chapter = "Chapter - 17: Changes in the Arts";
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
        question: "Who introduced public bandstand performances in presidency cities?",
        optionA: "The British",
        optionB: "The French",
        optionC: "The Portuguese",
        correctAnswer: "The British",
      }),
      shuffleOptions({
        question: "Who developed a national modern style of painting based on Indian mythology?",
        optionA: "Jamini Roy",
        optionB: "Raja Ravi Verma",
        optionC: "Abanindranath Tagore",
        correctAnswer: "Raja Ravi Verma",
      }),
      shuffleOptions({
        question: "Who produced India’s first full-length silent film in 1913?",
        optionA: "Guru Dutt",
        optionB: "Dadasaheb Phalke",
        optionC: "Ardeshir Irani",
        correctAnswer: "Dadasaheb Phalke",
      }),
      shuffleOptions({
        question: "Which artists introduced realism and oil painting to India?",
        optionA: "Patuas",
        optionB: "Daniele brothers (Thomas & William)",
        optionC: "Chhayavad poets",
        correctAnswer: "Daniele brothers (Thomas & William)",
      }),
      shuffleOptions({
        question: "Who encouraged mural paintings and local traditions in Mysore?",
        optionA: "Mir Jafar",
        optionB: "Tipu Sultan",
        optionC: "Bahadur Shah II",
        correctAnswer: "Tipu Sultan",
      }),
      shuffleOptions({
        question: "Who popularised Indian dance on the world stage in the 1920s–30s?",
        optionA: "Uday Shankar",
        optionB: "Rukmini Devi",
        optionC: "Balasaraswati",
        correctAnswer: "Uday Shankar",
      }),
      shuffleOptions({
        question: "Who designed the Prince of Wales Museum building in Mumbai?",
        optionA: "George Wittet",
        optionB: "Edwin Lutyens",
        optionC: "Le Corbusier",
        correctAnswer: "George Wittet",
      }),
      shuffleOptions({
        question: "Which group created paintings mocking westernised Indians and corrupt priests?",
        optionA: "Court painters",
        optionB: "Kalighat painters",
        optionC: "Company artists",
        correctAnswer: "Kalighat painters",
      }),
      shuffleOptions({
        question: "Who wrote the patriotic poem “Saare Jahan Se Achchha”?",
        optionA: "Muhammad Iqbal",
        optionB: "Rabindranath Tagore",
        optionC: "Premchand",
        correctAnswer: "Muhammad Iqbal",
      }),
      shuffleOptions({
        question: "Who established Kala Bhavan at Santiniketan?",
        optionA: "Abanindranath Tagore",
        optionB: "Jamini Roy",
        optionC: "Rabindranath Tagore",
        correctAnswer: "Rabindranath Tagore",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Indian cinema began including songs and music after the arrival of ________.",
        optionA: "silent films",
        optionB: "sound technology",
        optionC: "colour films",
        correctAnswer: "sound technology",
      }),
      shuffleOptions({
        question: "Kalighat artists created bold figures using __________ lines.",
        optionA: "many detailed",
        optionB: "minimal and strong",
        optionC: "curved dotted",
        correctAnswer: "minimal and strong",
      }),
      shuffleOptions({
        question: "The first printing press in India was set up by the __________.",
        optionA: "Dutch",
        optionB: "British",
        optionC: "Portuguese",
        correctAnswer: "Portuguese",
      }),
      shuffleOptions({
        question: "The new theatre movement in 1942 was based mainly in __________.",
        optionA: "Bombay",
        optionB: "Calcutta (Kolkata)",
        optionC: "Madras",
        correctAnswer: "Calcutta (Kolkata)",
      }),
      shuffleOptions({
        question: "Mechanical printing presses became common in the ________ century.",
        optionA: "18th",
        optionB: "19th",
        optionC: "20th",
        correctAnswer: "19th",
      }),
      shuffleOptions({
        question: "The Daniele brothers produced lifelike ________ paintings.",
        optionA: "history",
        optionB: "landscape",
        optionC: "portrait",
        correctAnswer: "landscape",
      }),
      shuffleOptions({
        question: "The Gateway of India was built to honour the arrival of ________.",
        optionA: "King George V and Queen Mary",
        optionB: "Queen Victoria",
        optionC: "Edward VII",
        correctAnswer: "King George V and Queen Mary",
      }),
      shuffleOptions({
        question: "Dance performances moved from temples and courts to public stages during the ________ century.",
        optionA: "17th",
        optionB: "18th",
        optionC: "19th–20th",
        correctAnswer: "19th–20th",
      }),
      shuffleOptions({
        question: "Jamini Roy adopted the themes and materials of ________ art.",
        optionA: "classical",
        optionB: "folk",
        optionC: "Mughal",
        correctAnswer: "folk",
      }),
      shuffleOptions({
        question: "Lithography means engraving on ________.",
        optionA: "clay",
        optionB: "stone",
        optionC: "metal",
        correctAnswer: "stone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kalighat painters often criticised Indians who imitated Western lifestyles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Bengal School of Art was founded to promote European themes in Indian art.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mechanical printing presses helped art reach the common people at low cost.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Uday Shankar is regarded as a pioneer in modern Indian dance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The first talking film in India was “Raja Harishchandra.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Daniele brothers introduced three-dimensional bold figures in Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Prince of Wales Museum is located in Mumbai.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Company paintings blended Indian subjects with some European techniques.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mir Jafar and Mir Qasim supported miniature paintings in Murshidabad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chhatrapati Shivaji Terminus is an example of Indo-Saracenic architecture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
