export const chapter = "Chapter - 13: The Revolt of 1857-58";
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
        question: "Who led the rebels at Bareilly?",
        optionA: "Nana Sahib",
        optionB: "Khan Bahadur Khan",
        optionC: "Kunwar Singh",
        correctAnswer: "Khan Bahadur Khan",
      }),
      shuffleOptions({
        question: "Mangal Pandey belonged to which infantry regiment?",
        optionA: "34th Infantry",
        optionB: "12th Infantry",
        optionC: "19th Infantry",
        correctAnswer: "34th Infantry",
      }),
      shuffleOptions({
        question: "Which groups lost their livelihood after the annexation of Awadh?",
        optionA: "European merchants",
        optionB: "Artisans and court workers",
        optionC: "British officials",
        correctAnswer: "Artisans and court workers",
      }),
      shuffleOptions({
        question: "Who recaptured Delhi and suppressed the revolt there?",
        optionA: "Havelock",
        optionB: "Neil",
        optionC: "Nicholson",
        correctAnswer: "Nicholson",
      }),
      shuffleOptions({
        question: "Who used guerrilla warfare during the revolt?",
        optionA: "Lord Canning",
        optionB: "Tantya Tope",
        optionC: "Bakhat Khan",
        correctAnswer: "Tantya Tope",
      }),
      shuffleOptions({
        question: "Who proclaimed Birjis Kadr as the Nawab of Awadh?",
        optionA: "Begum Hazrat Mahal",
        optionB: "Maulvi Ahmadullah",
        optionC: "Rani Lakshmi Bai",
        correctAnswer: "Begum Hazrat Mahal",
      }),
      shuffleOptions({
        question: "What caused many peasants to lose land under British rule?",
        optionA: "Severe drought",
        optionB: "Heavy land revenue",
        optionC: "Lack of seeds",
        correctAnswer: "Heavy land revenue",
      }),
      shuffleOptions({
        question: "What was the ratio of Indian soldiers to British soldiers before the revolt?",
        optionA: "6:1",
        optionB: "1:1",
        optionC: "10:1",
        correctAnswer: "6:1",
      }),
      shuffleOptions({
        question: "Why did unrest prevail even in regions where no open uprising took place?",
        optionA: "Due to cultural restrictions",
        optionB: "Due to widespread dissatisfaction with British rule",
        optionC: "Due to religious festivals",
        correctAnswer: "Due to widespread dissatisfaction with British rule",
      }),
      shuffleOptions({
        question: "Which Act made Indian sepoys serve overseas?",
        optionA: "Indian Councils Act",
        optionB: "Army Reorganisation Act",
        optionC: "General Service Enlistment Act",
        correctAnswer: "General Service Enlistment Act",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The sepoys were angered by the rumour about greased ______.",
        optionA: "swords",
        optionB: "cartridges",
        optionC: "bayonets",
        correctAnswer: "cartridges",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai fought bravely in ______.",
        optionA: "Jhansi",
        optionB: "Kanpur",
        optionC: "Delhi",
        correctAnswer: "Jhansi",
      }),
      shuffleOptions({
        question: "Thousands of ______ lost their estates after Awadh was annexed.",
        optionA: "priests",
        optionB: "taluqdars",
        optionC: "zamindars of Punjab",
        correctAnswer: "taluqdars",
      }),
      shuffleOptions({
        question: "After the revolt, India came directly under the ______ government.",
        optionA: "Mughal",
        optionB: "British",
        optionC: "French",
        correctAnswer: "British",
      }),
      shuffleOptions({
        question: "Bahadur Shah Zafar was sent to ______ after he was imprisoned.",
        optionA: "Nepal",
        optionB: "Rangoon",
        optionC: "Kabul",
        correctAnswer: "Rangoon",
      }),
      shuffleOptions({
        question: "Cheap British goods ruined Indian ______.",
        optionA: "peasants",
        optionB: "artisans",
        optionC: "soldiers",
        correctAnswer: "artisans",
      }),
      shuffleOptions({
        question: "The British passed the ______ to control vernacular newspapers.",
        optionA: "Arms Act",
        optionB: "Press Regulation Act",
        optionC: "Land Act",
        correctAnswer: "Press Regulation Act",
      }),
      shuffleOptions({
        question: "The revolt spread across large parts of ______ India.",
        optionA: "southern",
        optionB: "northern",
        optionC: "western",
        correctAnswer: "northern",
      }),
      shuffleOptions({
        question: "Peasants who failed to pay land revenue were often ______.",
        optionA: "rewarded",
        optionB: "exempted",
        optionC: "flogged",
        correctAnswer: "flogged",
      }),
      shuffleOptions({
        question: "The British refused to recognise Nana Sahib as the heir to the ______.",
        optionA: "Mughal throne",
        optionB: "Peshwa title",
        optionC: "Sindhia estate",
        correctAnswer: "Peshwa title",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Begum Hazrat Mahal fought alongside Maulvi Ahmadullah against the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British always rewarded Indian sepoys for bravery in battles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The artisans and craftsmen faced unemployment due to the inflow of cheap British goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai surrendered to the British peacefully.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bahadur Shah Zafar was taken to Rangoon after the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British treated the Indian sepoys as equals in rank and status.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The revolt spread to Kanpur, Lucknow, Jhansi and Arrah.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Press Regulation Act was passed to support Indian newspapers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The revolt was supported by peasants, artisans and common people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nicholson and Neill both played roles in suppressing the revolt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
