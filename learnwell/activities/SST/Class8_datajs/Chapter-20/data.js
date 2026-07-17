export const chapter = "Chapter - 20: India After Independence";
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
        question: "Who took a fast-unto-death to stop communal violence during partition?",
        optionA: "Jawaharlal Nehru",
        optionB: "Mahatma Gandhi",
        optionC: "Sardar Patel",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who fled to Pakistan when the people of Junagadh voted to join India?",
        optionA: "Nizam",
        optionB: "Maharaja Hari Singh",
        optionC: "Nawab of Junagadh",
        correctAnswer: "Nawab of Junagadh",
      }),
      shuffleOptions({
        question: "Who persuaded most princely states to join India after independence?",
        optionA: "Dr. Ambedkar",
        optionB: "Sardar Vallabhbhai Patel",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Sardar Vallabhbhai Patel",
      }),
      shuffleOptions({
        question: "Who headed the Drafting Committee of the Indian Constitution?",
        optionA: "Rajendra Prasad",
        optionB: "Dr. B.R. Ambedkar",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "Dr. B.R. Ambedkar",
      }),
      shuffleOptions({
        question: "Who demanded Andhra state and died during a hunger strike?",
        optionA: "Lala Lajpat Rai",
        optionB: "Potti Sriramulu",
        optionC: "Gopal Krishna Gokhale",
        correctAnswer: "Potti Sriramulu",
      }),
      shuffleOptions({
        question: "Which Prime Minister travelled to Lahore in a peace attempt in 1999?",
        optionA: "Indira Gandhi",
        optionB: "Atal Bihari Vajpayee",
        optionC: "Lal Bahadur Shastri",
        correctAnswer: "Atal Bihari Vajpayee",
      }),
      shuffleOptions({
        question: "Which US President backed India's bid for a permanent UN Security Council seat?",
        optionA: "Barack Obama",
        optionB: "George W. Bush",
        optionC: "Donald Trump",
        correctAnswer: "Barack Obama",
      }),
      shuffleOptions({
        question: "Who performed surgical strikes across the Line of Control on 29 September 2016?",
        optionA: "Indian Army",
        optionB: "Indian Navy",
        optionC: "Indian Air Force",
        correctAnswer: "Indian Army",
      }),
      shuffleOptions({
        question: "Which country opposed India’s entry into the Nuclear Suppliers Group (NSG)?",
        optionA: "Japan",
        optionB: "China",
        optionC: "Bhutan",
        correctAnswer: "China",
      }),
      shuffleOptions({
        question: "Which nation supported India in setting up steel plants at Bhilai and Bokaro?",
        optionA: "USA",
        optionB: "Russia (USSR)",
        optionC: "Britain",
        correctAnswer: "Russia (USSR)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "India adopted the policy of ________ to keep conflicts away.",
        optionA: "Non-Alignment (NAM)",
        optionB: "Imperialism",
        optionC: "Militarism",
        correctAnswer: "Non-Alignment (NAM)",
      }),
      shuffleOptions({
        question: "Kashmir acceded to India after ________ entered its territory.",
        optionA: "British troops",
        optionB: "Pakistani invaders",
        optionC: "Afghan soldiers",
        correctAnswer: "Pakistani invaders",
      }),
      shuffleOptions({
        question: "The people of Junagadh voted to ________.",
        optionA: "join India",
        optionB: "remain independent",
        optionC: "join Afghanistan",
        correctAnswer: "join India",
      }),
      shuffleOptions({
        question: "The Constitution guarantees equality ________ law.",
        optionA: "without",
        optionB: "in front of",
        optionC: "before",
        correctAnswer: "before",
      }),
      shuffleOptions({
        question: "The Green Revolution made India ________ in foodgrains.",
        optionA: "dependent",
        optionB: "self-sufficient",
        optionC: "importing",
        correctAnswer: "self-sufficient",
      }),
      shuffleOptions({
        question: "Andhra Pradesh was formed mainly on ________ grounds.",
        optionA: "religious",
        optionB: "linguistic",
        optionC: "political",
        correctAnswer: "linguistic",
      }),
      shuffleOptions({
        question: "India and the US signed a major ________ cooperation agreement in New Delhi.",
        optionA: "cybersecurity",
        optionB: "tourism",
        optionC: "postal",
        correctAnswer: "cybersecurity",
      }),
      shuffleOptions({
        question: "After independence, India faced large-scale ________ due to partition.",
        optionA: "urbanisation",
        optionB: "migration of refugees",
        optionC: "industrialisation",
        correctAnswer: "migration of refugees",
      }),
      shuffleOptions({
        question: "Niti Ayog is based on the principle of ________ federalism.",
        optionA: "competitive",
        optionB: "cooperative",
        optionC: "strict",
        correctAnswer: "cooperative",
      }),
      shuffleOptions({
        question: "The Samjhauta Express was started to increase ________ between India and Pakistan.",
        optionA: "conflict",
        optionB: "communication/contact",
        optionC: "blockade",
        correctAnswer: "communication/contact",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Nizam of Hyderabad wished to remain independent after India’s independence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Doklam crisis affected India–China relations for more than two months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India supported China’s Belt and Road Initiative (BRI).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gandhi was assassinated in New Delhi in 1948.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India and the US signed LEMOA to strengthen defence cooperation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India became self-sufficient in food due to the Green Revolution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Russia helped India build major steel plants after independence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India’s Constitution ensures equal rights to all citizens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Linguistic protest in Madras Presidency led to formation of Andhra Pradesh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Niti Ayog has the power to grant funds to states.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
