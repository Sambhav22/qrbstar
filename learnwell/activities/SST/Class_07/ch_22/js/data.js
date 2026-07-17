export const chapter = "Chapter - 22: Institutional Representation of Democracy";
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
        question: "Who conducts free and fair elections in India?",
        optionA: "Parliament",
        optionB: "Election Commission",
        optionC: "State Government",
        correctAnswer: "Election Commission",
      }),
      shuffleOptions({
        question: "Who appoints the Chief Election Commissioner?",
        optionA: "Prime Minister",
        optionB: "President of India",
        optionC: "Lok Sabha Speaker",
        correctAnswer: "President of India",
      }),
      shuffleOptions({
        question: "Who announces the final result after counting votes?",
        optionA: "Returning Officer",
        optionB: "Polling Officer",
        optionC: "Candidate",
        correctAnswer: "Returning Officer",
      }),
      shuffleOptions({
        question: "Which committee is formed to run a coalition government smoothly?",
        optionA: "Finance Committee",
        optionB: "Coordination Committee",
        optionC: "Education Committee",
        correctAnswer: "Coordination Committee",
      }),
      shuffleOptions({
        question: "Who prepares the voter list before elections?",
        optionA: "Candidates",
        optionB: "Election Commission",
        optionC: "Media",
        correctAnswer: "Election Commission",
      }),
      shuffleOptions({
        question: "Who forms the government after winning the maximum seats?",
        optionA: "Third-largest party",
        optionB: "Ruling party",
        optionC: "Election Commission",
        correctAnswer: "Ruling party",
      }),
      shuffleOptions({
        question: "Who brings out the election manifesto?",
        optionA: "Election Officers",
        optionB: "Voters",
        optionC: "Political Parties",
        correctAnswer: "Political Parties",
      }),
      shuffleOptions({
        question: "Who represents people of a particular region or state?",
        optionA: "National party",
        optionB: "Regional party",
        optionC: "Independent candidate",
        correctAnswer: "Regional party",
      }),
      shuffleOptions({
        question: "Who presses the button on the EVM to cast a vote?",
        optionA: "Party agent",
        optionB: "The voter",
        optionC: "Presiding officer",
        correctAnswer: "The voter",
      }),
      shuffleOptions({
        question: "Who stops campaigning 48 hours before polling?",
        optionA: "Only national parties",
        optionB: "All candidates and parties",
        optionC: "Only regional parties",
        correctAnswer: "All candidates and parties",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Universal adult franchise gives every adult citizen the right to ________.",
        optionA: "contest",
        optionB: "vote",
        optionC: "campaign",
        correctAnswer: "vote",
      }),
      shuffleOptions({
        question: "Elections at the national level take place to choose members of the ________.",
        optionA: "Parliament",
        optionB: "Supreme Court",
        optionC: "Municipal body",
        correctAnswer: "Parliament",
      }),
      shuffleOptions({
        question: "Campaigning must stop ________ hours before polling.",
        optionA: "12",
        optionB: "24",
        optionC: "48",
        correctAnswer: "48",
      }),
      shuffleOptions({
        question: "A geographical area from which voters elect one representative is called a ________.",
        optionA: "constituency",
        optionB: "district",
        optionC: "region",
        correctAnswer: "constituency",
      }),
      shuffleOptions({
        question: "Votes in most polling booths in India are cast through the ________.",
        optionA: "ballot slip",
        optionB: "mobile app",
        optionC: "EVM",
        correctAnswer: "EVM",
      }),
      shuffleOptions({
        question: "A candidate must pay a security ________ during nomination.",
        optionA: "fine",
        optionB: "deposit",
        optionC: "penalty",
        correctAnswer: "deposit",
      }),
      shuffleOptions({
        question: "A government formed by two or more parties is called a ________ government.",
        optionA: "mixed",
        optionB: "coalition",
        optionC: "temporary",
        correctAnswer: "coalition",
      }),
      shuffleOptions({
        question: "A party that works only in one or two states is called a ________ party.",
        optionA: "national",
        optionB: "global",
        optionC: "regional",
        correctAnswer: "regional",
      }),
      shuffleOptions({
        question: "The group of candidates who do not win the majority form the ________.",
        optionA: "opposition",
        optionB: "ruling party",
        optionC: "media",
        correctAnswer: "opposition",
      }),
      shuffleOptions({
        question: "The ________ lists the goals, ideas, and promises of a political party.",
        optionA: "symbol",
        optionB: "manifesto",
        optionC: "report",
        correctAnswer: "manifesto",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Election symbols help voters identify candidates easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Regional parties work across the entire country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Counting of votes is done under strict security.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Only educated citizens can vote in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A by-election is held when a seat becomes vacant before the full term.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In India, voters can cast more than one vote in a single election.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Coalition governments may face delays in decision-making.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Political parties prepare manifestos before elections.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mid-term elections are held when the government completes five full years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Elections help the public choose their representatives.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
