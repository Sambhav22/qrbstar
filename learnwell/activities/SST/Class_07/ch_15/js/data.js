export const chapter = "Chapter - 15: Medieval Architecture";
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
        question: "Which ruling dynasties mainly built temples in the Nagara style?",
        optionA: "Solankis, Palas and Chandelas",
        optionB: "Tughlaqs",
        optionC: "Pallavas",
        correctAnswer: "Solankis, Palas and Chandelas",
      }),
      shuffleOptions({
        question: "Who built the first Islamic structure in Delhi, the Quwwat-ul-Islam mosque?",
        optionA: "Iltutmish",
        optionB: "Ala-ud-din Khalji",
        optionC: "Qutb-ud-din Aibak",
        correctAnswer: "Qutb-ud-din Aibak",
      }),
      shuffleOptions({
        question: "Which temple built by Rajaraja I is a major example of Dravidian architecture?",
        optionA: "Sun Temple of Konark",
        optionB: "Brihadeshwara Temple",
        optionC: "Kandariya Mahadev Temple",
        correctAnswer: "Brihadeshwara Temple",
      }),
      shuffleOptions({
        question: "Which architectural feature was introduced in India during the Sultanate period?",
        optionA: "Pyramidal towers",
        optionB: "Domes and pointed arches",
        optionC: "Stone brackets",
        correctAnswer: "Domes and pointed arches",
      }),
      shuffleOptions({
        question: "Which structure is famous for its octagonal tomb built of bricks and stones?",
        optionA: "Tomb of Ghiyas-ud-din Tughlaq",
        optionB: "Tomb of Sikandar Lodhi",
        optionC: "Hoysaleswara Temple",
        correctAnswer: "Tomb of Ghiyas-ud-din Tughlaq",
      }),
      shuffleOptions({
        question: "Which architectural style is a blend of Islamic, Persian and Indian features?",
        optionA: "Dravidian",
        optionB: "Indo-Islamic",
        optionC: "Mughal architecture",
        correctAnswer: "Mughal architecture",
      }),
      shuffleOptions({
        question: "Which Mughal emperor built the Red Fort at Delhi?",
        optionA: "Akbar",
        optionB: "Shah Jahan",
        optionC: "Aurangzeb",
        correctAnswer: "Shah Jahan",
      }),
      shuffleOptions({
        question: "Which garden style divides the layout into four equal parts?",
        optionA: "Terrace garden",
        optionB: "Charbagh garden",
        optionC: "Crescent garden",
        correctAnswer: "Charbagh garden",
      }),
      shuffleOptions({
        question: "In which region are havelis famously decorated with colourful wall paintings?",
        optionA: "Punjab",
        optionB: "Gujarat and Rajasthan",
        optionC: "Bengal",
        correctAnswer: "Gujarat and Rajasthan",
      }),
      shuffleOptions({
        question: "Which ruler built the Alai Darwaza in 1311 CE?",
        optionA: "Ala-ud-din Khalji",
        optionB: "Babur",
        optionC: "Sikandar Lodhi",
        correctAnswer: "Ala-ud-din Khalji",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tall tower rising in tiers in a Dravidian temple is called a ______.",
        optionA: "shikhar",
        optionB: "vimana",
        optionC: "kalash",
        correctAnswer: "vimana",
      }),
      shuffleOptions({
        question: "The projecting balcony seen in Rajput and Mughal buildings is called a ______.",
        optionA: "mandap",
        optionB: "jharokha",
        optionC: "minaret",
        correctAnswer: "jharokha",
      }),
      shuffleOptions({
        question: "A special well with steps leading down to the water is known as a ______.",
        optionA: "baoli",
        optionB: "corridor",
        optionC: "pavilion",
        correctAnswer: "baoli",
      }),
      shuffleOptions({
        question: "The richly carved pillars of Dravidian temples are seen in the temples of ______.",
        optionA: "Pallavas, Pandyas and Cholas",
        optionB: "Tughlaqs",
        optionC: "Sayyids",
        correctAnswer: "Pallavas, Pandyas and Cholas",
      }),
      shuffleOptions({
        question: "The charbagh style garden is divided into ______ parts.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "The decorative inlay work on the Taj Mahal is called ______.",
        optionA: "stucco",
        optionB: "pietra dura",
        optionC: "tilak",
        correctAnswer: "pietra dura",
      }),
      shuffleOptions({
        question: "The forts were usually built on ______ to ensure better defence.",
        optionA: "hilltops",
        optionB: "riverbanks",
        optionC: "gardens",
        correctAnswer: "hilltops",
      }),
      shuffleOptions({
        question: "A grand palace city built by Akbar near Agra is ______.",
        optionA: "Delhi",
        optionB: "Fatehpur Sikri",
        optionC: "Agra Fort",
        correctAnswer: "Fatehpur Sikri",
      }),
      shuffleOptions({
        question: "The main entrance of the Agra Fort is known as the ______ Gate.",
        optionA: "Delhi Gate",
        optionB: "Lahore Gate",
        optionC: "India Gate",
        correctAnswer: "Delhi Gate",
      }),
      shuffleOptions({
        question: "Step-wells known as baolis are commonly found in ______.",
        optionA: "Gujarat and Haryana",
        optionB: "Bengal and Odisha",
        optionC: "Kerala and Tamil Nadu",
        correctAnswer: "Gujarat and Haryana",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The vimana of a Dravidian temple rises in several tiers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indo-Islamic buildings often include Hindu motifs like lotus and bell designs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Tughlaqs mainly used glazed tiles for decoration.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mughal gardens often featured water channels and fountains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Havelis were built with extensive use of woodwork.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Peacock Throne was taken away by Babur.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Quwwat-ul-Islam mosque was built in Ajmer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shah Jahan founded a new city called Shahjahanabad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Brihadeshwara Temple was built under the Pallavas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Mughal architecture reached its peak under Shah Jahan’s reign.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
