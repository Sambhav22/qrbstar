export const chapter = "Chapter - 15: Nationalist Movement (1885-1919)";
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
        question: "Who founded the Indian National Association?",
        optionA: "Surendranath Banerjee",
        optionB: "Raja Ram Mohan Roy",
        optionC: "Gopal Krishna Gokhale",
        correctAnswer: "Surendranath Banerjee",
      }),
      shuffleOptions({
        question: "Who presided over the first session of the Indian National Congress?",
        optionA: "Dadabhai Naoroji",
        optionB: "W.C. Banerjee",
        optionC: "A.O. Hume",
        correctAnswer: "W.C. Banerjee",
      }),
      shuffleOptions({
        question: "Who announced the Partition of Bengal?",
        optionA: "Lord Canning",
        optionB: "Lord Curzon",
        optionC: "Warren Hastings",
        correctAnswer: "Lord Curzon",
      }),
      shuffleOptions({
        question: "Who raised the slogan “Swaraj is my birthright and I shall have it”?",
        optionA: "Bipin Chandra Pal",
        optionB: "Lala Lajpat Rai",
        optionC: "Bal Gangadhar Tilak",
        correctAnswer: "Bal Gangadhar Tilak",
      }),
      shuffleOptions({
        question: "Who among the following was a revolutionary?",
        optionA: "Khudiram Bose",
        optionB: "Mahatma Gandhi",
        optionC: "W.C. Banerjee",
        correctAnswer: "Khudiram Bose",
      }),
      shuffleOptions({
        question: "Who among these was a famous social reformer?",
        optionA: "Narayan Guru",
        optionB: "Lord Curzon",
        optionC: "Warren Hastings",
        correctAnswer: "Narayan Guru",
      }),
      shuffleOptions({
        question: "Who were trained in using explosives and firearms?",
        optionA: "Moderates",
        optionB: "Revolutionaries",
        optionC: "Traders",
        correctAnswer: "Revolutionaries",
      }),
      shuffleOptions({
        question: "Who helped form the Indian National Congress in 1885?",
        optionA: "Raja Ram Mohan Roy",
        optionB: "A.O. Hume",
        optionC: "Rabindranath Tagore",
        correctAnswer: "A.O. Hume",
      }),
      shuffleOptions({
        question: "Who encouraged people to use swadeshi goods during the movement?",
        optionA: "Extremist leaders",
        optionB: "British officers",
        optionC: "Moderates",
        correctAnswer: "Extremist leaders",
      }),
      shuffleOptions({
        question: "Who threw a bomb at a British coach at Muzaffarpur in 1908?",
        optionA: "Ajit Singh",
        optionB: "Prafulla Chaki & Khudiram Bose",
        optionC: "Madam Cama",
        correctAnswer: "Prafulla Chaki & Khudiram Bose",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The British adopted the policy of ______ to weaken Indian unity.",
        optionA: "peace and cooperation",
        optionB: "divide and rule",
        optionC: "trade and commerce",
        correctAnswer: "divide and rule",
      }),
      shuffleOptions({
        question: "The growth of the ______ helped in spreading patriotism and new ideas.",
        optionA: "press",
        optionB: "schools",
        optionC: "factories",
        correctAnswer: "press",
      }),
      shuffleOptions({
        question: "Modern factories helped remove ______ barriers among people.",
        optionA: "economic",
        optionB: "caste",
        optionC: "physical",
        correctAnswer: "caste",
      }),
      shuffleOptions({
        question: "The INC held its first session in ______.",
        optionA: "Calcutta",
        optionB: "Bombay",
        optionC: "Madras",
        correctAnswer: "Bombay",
      }),
      shuffleOptions({
        question: "The Partition of Bengal took place in the year ______.",
        optionA: "1905",
        optionB: "1911",
        optionC: "1885",
        correctAnswer: "1905",
      }),
      shuffleOptions({
        question: "Protesters marched on streets singing ______.",
        optionA: "Jana Gana Mana",
        optionB: "Vande Mataram",
        optionC: "Bharat Mata ki Jai",
        correctAnswer: "Vande Mataram",
      }),
      shuffleOptions({
        question: "Revolutionaries believed in ______ methods.",
        optionA: "peaceful",
        optionB: "moderate",
        optionC: "violent / forceful",
        correctAnswer: "violent / forceful",
      }),
      shuffleOptions({
        question: "The Ghadar Party collected money and support from ______.",
        optionA: "America",
        optionB: "England",
        optionC: "Japan",
        correctAnswer: "America",
      }),
      shuffleOptions({
        question: "Indian soldiers were sent to fight in the ______ World War.",
        optionA: "First",
        optionB: "Second",
        optionC: "Third",
        correctAnswer: "First",
      }),
      shuffleOptions({
        question: "Gandhi returned to India around the end of the ______.",
        optionA: "movement",
        optionB: "First World War",
        optionC: "Swadeshi period",
        correctAnswer: "First World War",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Partition of Bengal was done mainly to create division between Hindus and Muslims.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Social reformers helped remove evils like sati and child marriage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Moderates believed only in peaceful petitions to the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Extremists believed that petitions alone could convince the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Revolutionaries wanted to remove British rule by force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "INC held meetings every year in different parts of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Swadeshi movement encouraged people to buy more British goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Khudiram Bose was very young when he joined revolutionary activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British were pleased with the increasing unity among Indians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "After the First World War, the British immediately gave freedom to India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
