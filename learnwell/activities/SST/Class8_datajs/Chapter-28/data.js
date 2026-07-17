export const chapter = "Chapter - 28: Public Facilities and Social Justice";
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
        question: "Which organisation trained local women to repair hand pumps in Gujarat?",
        optionA: "Sulabh",
        optionB: "SEWA",
        optionC: "UNICEF",
        correctAnswer: "SEWA",
      }),
      shuffleOptions({
        question: "Which programme was jointly implemented in 1200 villages of Uttar Pradesh and Uttaranchal?",
        optionA: "Swachh Bharat",
        optionB: "Swajal Yojna",
        optionC: "PMJDY",
        correctAnswer: "Swajal Yojna",
      }),
      shuffleOptions({
        question: "Which article of the Constitution recognises the right to water as part of the Right to Life?",
        optionA: "Article 14",
        optionB: "Article 19",
        optionC: "Article 21",
        correctAnswer: "Article 21",
      }),
      shuffleOptions({
        question: "Which project in Odisha is managed by the local Pani Panchayat?",
        optionA: "Hirakud Project",
        optionB: "Anuli Irrigation Project",
        optionC: "Bhakra Nangal Project",
        correctAnswer: "Anuli Irrigation Project",
      }),
      shuffleOptions({
        question: "Which organisation built more than 7500 public toilet blocks in India?",
        optionA: "SEWA",
        optionB: "Sulabh Organisation",
        optionC: "NLM",
        correctAnswer: "Sulabh Organisation",
      }),
      shuffleOptions({
        question: "Which scheme provides hydroelectricity through major dam projects?",
        optionA: "Antyodaya Yojana",
        optionB: "Hirakud Dam Project",
        optionC: "PMAY",
        correctAnswer: "Hirakud Dam Project",
      }),
      shuffleOptions({
        question: "Which programme aims to expand financial access through banking facilities?",
        optionA: "PMJDY",
        optionB: "SGSY",
        optionC: "Make in India",
        correctAnswer: "PMJDY",
      }),
      shuffleOptions({
        question: "Which campaign was launched to promote investment and manufacturing in India?",
        optionA: "Make in India",
        optionB: "Sarva Shiksha Abhiyan",
        optionC: "Rashtriya Swasthya Mission",
        correctAnswer: "Make in India",
      }),
      shuffleOptions({
        question: "Which scheme provides subsidised foodgrains to poor families?",
        optionA: "Antyodaya Anna Yojana",
        optionB: "PMRY",
        optionC: "Saansad Adarsh Gram Yojna",
        correctAnswer: "Antyodaya Anna Yojana",
      }),
      shuffleOptions({
        question: "Which ministry supervises all healthcare efforts taken by the government?",
        optionA: "Ministry of Social Justice",
        optionB: "Ministry of Health and Family Welfare",
        optionC: "Ministry of Education",
        correctAnswer: "Ministry of Health and Family Welfare",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Only ________ percent of drinking water in urban areas meets health and safety standards.",
        optionA: "10%",
        optionB: "20%",
        optionC: "50%",
        correctAnswer: "20%",
      }),
      shuffleOptions({
        question: "The community contributed ________ percent to the Swajal Yojna.",
        optionA: "15%",
        optionB: "5%",
        optionC: "10%",
        correctAnswer: "10%",
      }),
      shuffleOptions({
        question: "Electricity shortage increases particularly during ________.",
        optionA: "monsoon months",
        optionB: "peak summer and winter seasons",
        optionC: "spring",
        correctAnswer: "peak summer and winter seasons",
      }),
      shuffleOptions({
        question: "The organisation ________ has built more than one million private toilets.",
        optionA: "SEWA",
        optionB: "Sulabh Organisation",
        optionC: "UNICEF",
        correctAnswer: "Sulabh Organisation",
      }),
      shuffleOptions({
        question: "The National Health Policy was introduced in the year ________.",
        optionA: "1998",
        optionB: "2002",
        optionC: "1995",
        correctAnswer: "2002",
      }),
      shuffleOptions({
        question: "Major irrigation projects like Bhakra Nangal aim to supply ________ to farmlands.",
        optionA: "medicines",
        optionB: "electricity",
        optionC: "water throughout the year",
        correctAnswer: "water throughout the year",
      }),
      shuffleOptions({
        question: "Farmers earlier suffered heavy crop losses due to pests, diseases and ________.",
        optionA: "rainfall",
        optionB: "locusts",
        optionC: "poor seeds",
        correctAnswer: "locusts",
      }),
      shuffleOptions({
        question: "Agriculture supports many industries by providing essential ________.",
        optionA: "machinery",
        optionB: "insurance",
        optionC: "raw materials",
        correctAnswer: "raw materials",
      }),
      shuffleOptions({
        question: "Under crop insurance schemes, farmers receive compensation for losses caused by ________.",
        optionA: "natural calamities",
        optionB: "high prices",
        optionC: "overproduction",
        correctAnswer: "natural calamities",
      }),
      shuffleOptions({
        question: "PMJDY offers bank accounts with an inbuilt insurance cover of ________.",
        optionA: "₹50,000",
        optionB: "₹1 lakh",
        optionC: "₹10,000",
        correctAnswer: "₹1 lakh",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Safe drinking water is recognised as part of the Right to Life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In urban areas, 85% of the population has access to drinking water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Electricity shortage does not affect the quality of life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rural Primary Health Centres are fully equipped with all modern facilities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sulabh charges a very high fee for the use of toilets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Agriculture contributes to national income and employment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The government launched PMRY in 1993 to create self-employment opportunities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Make in India campaign aims to reduce foreign investment in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Major irrigation schemes help farmers irrigate their land during dry conditions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "SEWA trained women in Odisha to repair hand pumps.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
