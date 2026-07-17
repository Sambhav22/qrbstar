export const chapter = "Chapter - 2: Viruses and Hackers";
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
        question: "Who first used the term “computer virus”?",
        optionA: "Bill Gates",
        optionB: "Fred Cohen",
        optionC: "Alan Turing",
        correctAnswer: "Fred Cohen",
      }),
      shuffleOptions({
        question: "Which virus hides itself by changing file size or creation date?",
        optionA: "Boot virus",
        optionB: "Stealth virus",
        optionC: "Program virus",
        correctAnswer: "Stealth virus",
      }),
      shuffleOptions({
        question: "Which virus infects both boot sector and executable files?",
        optionA: "Multipartite virus",
        optionB: "Macro virus",
        optionC: "Worm",
        correctAnswer: "Multipartite virus",
      }),
      shuffleOptions({
        question: "Which type of virus rewrites its own code when it runs?",
        optionA: "Metamorphic virus",
        optionB: "Polymorphic virus",
        optionC: "Boot virus",
        correctAnswer: "Metamorphic virus",
      }),
      shuffleOptions({
        question: "Which virus infects files created by software like MS Word?",
        optionA: "Macro virus",
        optionB: "Worm",
        optionC: "Trojan horse",
        correctAnswer: "Macro virus",
      }),
      shuffleOptions({
        question: "Which virus spreads through infected e-mail attachments?",
        optionA: "E-mail virus",
        optionB: "Boot virus",
        optionC: "Program virus",
        correctAnswer: "E-mail virus",
      }),
      shuffleOptions({
        question: "Which type of hacker works legally to find and fix system weaknesses?",
        optionA: "White Hat",
        optionB: "Black Hat",
        optionC: "Hacktivist",
        correctAnswer: "White Hat",
      }),
      shuffleOptions({
        question: "Which hackers break into systems for personal gain?",
        optionA: "Black Hat",
        optionB: "White Hat",
        optionC: "Grey Hat",
        correctAnswer: "Black Hat",
      }),
      shuffleOptions({
        question: "Which hacker uses hacking to promote social or political messages?",
        optionA: "Hacktivist",
        optionB: "Cracker",
        optionC: "Virus author",
        correctAnswer: "Hacktivist",
      }),
      shuffleOptions({
        question: "Which software helps prevent unauthorised access to a computer?",
        optionA: "Firewall",
        optionB: "Spyware",
        optionC: "Worm",
        correctAnswer: "Firewall",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A _______ virus infects the boot records of a computer.",
        optionA: "Boot",
        optionB: "Macro",
        optionC: "E-mail",
        correctAnswer: "Boot",
      }),
      shuffleOptions({
        question: "The person who creates a computer virus is known as a _______.",
        optionA: "Programmer",
        optionB: "Virus author",
        optionC: "Hacker",
        correctAnswer: "Virus author",
      }),
      shuffleOptions({
        question: "_______ virus conceals itself from antivirus software by hiding files.",
        optionA: "Stealth",
        optionB: "Worm",
        optionC: "Program",
        correctAnswer: "Stealth",
      }),
      shuffleOptions({
        question: "A _______ virus infects both the boot sector and executable files.",
        optionA: "Multipartite",
        optionB: "Macro",
        optionC: "Trojan",
        correctAnswer: "Multipartite",
      }),
      shuffleOptions({
        question: "_______ viruses are of two types – polymorphic and metamorphic.",
        optionA: "Self modifying",
        optionB: "Macro",
        optionC: "Boot",
        correctAnswer: "Self modifying",
      }),
      shuffleOptions({
        question: "A _______ pretends to be a useful program but does something harmful.",
        optionA: "Trojan horse",
        optionB: "Worm",
        optionC: "Boot virus",
        correctAnswer: "Trojan horse",
      }),
      shuffleOptions({
        question: "_______ hackers are also called ethical hackers.",
        optionA: "White Hat",
        optionB: "Black Hat",
        optionC: "Grey Hat",
        correctAnswer: "White Hat",
      }),
      shuffleOptions({
        question: "A _______ is a malicious program that can replicate itself and use memory.",
        optionA: "Worm",
        optionB: "E-mail virus",
        optionC: "Macro virus",
        correctAnswer: "Worm",
      }),
      shuffleOptions({
        question: "A _______ should be installed to protect a computer from virus attacks.",
        optionA: "Antivirus",
        optionB: "Trojan",
        optionC: "Macro",
        correctAnswer: "Antivirus",
      }),
      shuffleOptions({
        question: "_______ is a software that secretly gathers information about a user.",
        optionA: "Spyware",
        optionB: "Firewall",
        optionC: "Boot virus",
        correctAnswer: "Spyware",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A worm can attach itself to other programs to spread.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polymorphic viruses encrypt themselves differently each time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trojan horse spreads automatically through e-mails.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hacktivists hack systems to send social or political messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Firewall helps in protecting computers from hackers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spyware is used to protect computers from viruses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Boot virus becomes active when the computer is switched on.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "White Hat hackers are also called crackers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Macro viruses infect files created by applications containing macros.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Downloading e-mail attachments from strangers can spread viruses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
