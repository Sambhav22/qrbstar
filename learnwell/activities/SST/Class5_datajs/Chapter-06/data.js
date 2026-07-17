export const chapter = "Chapter - 6: Prairies : The Grasslands";
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
        question: "Which warm wind helps melt the snow in the prairies during winter?",
        optionA: "Mistral",
        optionB: "Chinook",
        optionC: "Sirocco",
        correctAnswer: "Chinook",
      }),
      shuffleOptions({
        question: "Which animal once roamed in very large numbers across the prairies?",
        optionA: "Camel",
        optionB: "Bison",
        optionC: "Giraffe",
        correctAnswer: "Bison",
      }),
      shuffleOptions({
        question: "Which rodent is commonly found living in burrows on the prairies?",
        optionA: "Squirrel",
        optionB: "Prairie dog",
        optionC: "Hamster",
        correctAnswer: "Hamster",
      }),
      shuffleOptions({
        question: "Which continent contains the grasslands known as “steppes”?",
        optionA: "Europe & Asia",
        optionB: "Africa",
        optionC: "Australia",
        correctAnswer: "Europe & Asia",
      }),
      shuffleOptions({
        question: "Which part of the prairies is rocky, uneven and less fertile?",
        optionA: "Eastern",
        optionB: "Northern",
        optionC: "Western",
        correctAnswer: "Western",
      }),
      shuffleOptions({
        question: "Which bird of prey commonly hunts in the prairies?",
        optionA: "Falcon",
        optionB: "Parrot",
        optionC: "Kingfisher",
        correctAnswer: "Falcon",
      }),
      shuffleOptions({
        question: "What originally attracted grazing animals to the prairies?",
        optionA: "Dense forests",
        optionB: "Tall grasses spread over vast plains",
        optionC: "Desert shrubs",
        correctAnswer: "Tall grasses spread over vast plains",
      }),
      shuffleOptions({
        question: "Why do prairie farmers produce large quantities of grain?",
        optionA: "They use modern farming machines.",
        optionB: "They live in forests.",
        optionC: "They grow crops only in winter.",
        correctAnswer: "They use modern farming machines.",
      }),
      shuffleOptions({
        question: "Which crop grows well in the southern prairies?",
        optionA: "Cotton",
        optionB: "Rice",
        optionC: "Tea",
        correctAnswer: "Cotton",
      }),
      shuffleOptions({
        question: "Which major river passes through the prairies?",
        optionA: "Nile",
        optionB: "Mississippi",
        optionC: "Narmada",
        correctAnswer: "Mississippi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Prairie vegetation becomes ______ during the winter season.",
        optionA: "fresh",
        optionB: "dry",
        optionC: "tall",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "Before farming developed, herds of ______ roamed freely in the prairies.",
        optionA: "sheep",
        optionB: "bison",
        optionC: "yaks",
        correctAnswer: "bison",
      }),
      shuffleOptions({
        question: "The prairies lie in the ______ Zone.",
        optionA: "Torrid",
        optionB: "Temperate",
        optionC: "Frigid",
        correctAnswer: "Temperate",
      }),
      shuffleOptions({
        question: "Road, rail and canal networks have made the prairies highly ______.",
        optionA: "industrialised",
        optionB: "deserted",
        optionC: "forested",
        correctAnswer: "industrialised",
      }),
      shuffleOptions({
        question: "Prairie rodents live safely in underground ______.",
        optionA: "nests",
        optionB: "burrows",
        optionC: "tree holes",
        correctAnswer: "burrows",
      }),
      shuffleOptions({
        question: "Farmers in the prairies use ______ to store their surplus grain.",
        optionA: "bags",
        optionB: "silos",
        optionC: "boats",
        correctAnswer: "silos",
      }),
      shuffleOptions({
        question: "The grasslands of South America are known as ______.",
        optionA: "pampas",
        optionB: "velds",
        optionC: "steppes",
        correctAnswer: "pampas",
      }),
      shuffleOptions({
        question: "A thick sheet of ______ covers the prairies during winter.",
        optionA: "fog",
        optionB: "snow",
        optionC: "dust",
        correctAnswer: "snow",
      }),
      shuffleOptions({
        question: "Prairie farmers rear cattle on large open farms called ______.",
        optionA: "orchards",
        optionB: "ranches",
        optionC: "plantations",
        correctAnswer: "ranches",
      }),
      shuffleOptions({
        question: "Rodents such as rabbits and hamsters help loosen the soil through ______.",
        optionA: "climbing",
        optionB: "burrowing",
        optionC: "swimming",
        correctAnswer: "burrowing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Prairie summers are warm, while winters are extremely cold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rodents like hamsters and rabbits dig burrows to live safely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The western prairies receive heavy rainfall throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Prairie grasses die in winter but grow back when the temperature rises.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Birds such as owls and falcons help control the rodent population in the prairies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The prairies originally had very dense forests.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cotton is mainly grown in the southern part of the prairies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bison became nearly extinct because they were hunted for meat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Prairie farmers use only simple hand tools for farming.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Infrastructure in the prairies includes well-developed roads and railways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
