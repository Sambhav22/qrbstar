export const chapter = "Chapter - 25: Media and Advertising";
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
        question: "Which campaign was widely promoted in media to spread awareness about polio drops?",
        optionA: "Swachh School Mission",
        optionB: "Do Boond Zindagi Ki",
        optionC: "Save Electricity Drive",
        correctAnswer: "Do Boond Zindagi Ki",
      }),
      shuffleOptions({
        question: "Who introduced the printing press, which strengthened the early print media?",
        optionA: "Isaac Newton",
        optionB: "Johannes Gutenberg",
        optionC: "John Dalton",
        correctAnswer: "Johannes Gutenberg",
      }),
      shuffleOptions({
        question: "Which body acts as a watchdog to maintain ethics in the press?",
        optionA: "Central Vigilance Team",
        optionB: "Press Council of India",
        optionC: "Public Welfare Board",
        correctAnswer: "Press Council of India",
      }),
      shuffleOptions({
        question: "Which organisation in Rajasthan demanded access to public work records?",
        optionA: "Rural Rights Association",
        optionB: "Mazdoor Kisan Shakti Sangathan (MKSS)",
        optionC: "People’s Media Union",
        correctAnswer: "Mazdoor Kisan Shakti Sangathan (MKSS)",
      }),
      shuffleOptions({
        question: "Which form of media helps even illiterate people understand news easily?",
        optionA: "Research Magazines",
        optionB: "Weekly Journals",
        optionC: "Electronic Media (TV/Radio)",
        correctAnswer: "Electronic Media (TV/Radio)",
      }),
      shuffleOptions({
        question: "Which act was passed in 2005 to ensure transparency in government departments?",
        optionA: "Consumer Protection Act",
        optionB: "Right to Information Act (RTI)",
        optionC: "Public Service Act",
        correctAnswer: "Right to Information Act (RTI)",
      }),
      shuffleOptions({
        question: "Which type of media can instantly reach a very large audience?",
        optionA: "Local pamphlets",
        optionB: "Mass media",
        optionC: "School circulars",
        correctAnswer: "Mass media",
      }),
      shuffleOptions({
        question: "Which advertising method promotes the company’s social efforts rather than its products?",
        optionA: "Political advertising",
        optionB: "Institutional advertising",
        optionC: "Commercial advertising",
        correctAnswer: "Institutional advertising",
      }),
      shuffleOptions({
        question: "Which communication method spreads information through newspapers and journals?",
        optionA: "Print media",
        optionB: "Outdoor media",
        optionC: "Cable networking",
        correctAnswer: "Print media",
      }),
      shuffleOptions({
        question: "Which type of films raise awareness about issues like dowry or child discrimination?",
        optionA: "Action films",
        optionB: "Documentary films",
        optionC: "Comedy films",
        correctAnswer: "Documentary films",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Media that reaches a very large audience is called ______.",
        optionA: "solo media",
        optionB: "mass media",
        optionC: "open media",
        correctAnswer: "mass media",
      }),
      shuffleOptions({
        question: "The press is often described as the ______ of democracy.",
        optionA: "lighthouse",
        optionB: "pillar",
        optionC: "gate",
        correctAnswer: "lighthouse",
      }),
      shuffleOptions({
        question: "A secretly recorded exposure of corruption is known as a ______ operation.",
        optionA: "watch",
        optionB: "sting",
        optionC: "check",
        correctAnswer: "sting",
      }),
      shuffleOptions({
        question: "The RTI movement in Rajasthan demanded access to ______ records.",
        optionA: "public works",
        optionB: "private letters",
        optionC: "school registers",
        correctAnswer: "public works",
      }),
      shuffleOptions({
        question: "Advertising that spreads messages about health or cleanliness is called ______ advertising.",
        optionA: "commercial",
        optionB: "social",
        optionC: "political",
        correctAnswer: "social",
      }),
      shuffleOptions({
        question: "Media should collect information only from a ______ source.",
        optionA: "unreliable",
        optionB: "hidden",
        optionC: "genuine",
        correctAnswer: "genuine",
      }),
      shuffleOptions({
        question: "A brand recognised only within one country is called a ______ brand.",
        optionA: "local",
        optionB: "global",
        optionC: "universal",
        correctAnswer: "local",
      }),
      shuffleOptions({
        question: "Misleading and mocking advertisements are called ______ ads.",
        optionA: "spoof",
        optionB: "quality",
        optionC: "premium",
        correctAnswer: "spoof",
      }),
      shuffleOptions({
        question: "Protecting consumers from unfair prices or low-quality goods is known as ______.",
        optionA: "journalism",
        optionB: "consumerism",
        optionC: "federalism",
        correctAnswer: "consumerism",
      }),
      shuffleOptions({
        question: "The government communicates policy decisions through the ______.",
        optionA: "media",
        optionB: "post office",
        optionC: "school boards",
        correctAnswer: "media",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Electronic media can influence people even if they cannot read.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Media must remain impartial to avoid misinforming the public.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The chapter says that commercial advertising mainly aims at social welfare.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The RTI Act became effective across India (except J&K) in 2005.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spoof ads help other brands grow by praising them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "MKSS raised awareness through Jan Sunwai (public hearings).",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Documentary films have no role in highlighting social problems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Institutional advertising focuses on a company’s contribution to society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Public opinion is shaped partly by what the media highlights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Media should work under strict control of political leaders.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
