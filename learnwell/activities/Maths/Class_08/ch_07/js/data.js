export const chapter = "Chapter - 7: The Little Metal Sentinel";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What toy was disguised as a pudding pot?",
        optionA: "Toy train",
        optionB: "Jack-in-the-box",
        optionC: "Alarm clock",
        correctAnswer: "Jack-in-the-box",
      }),
      shuffleOptions({
        question: "Where was the ballerina placed in the castle arrangement?",
        optionA: "On the projection",
        optionB: "In the moat",
        optionC: "At the gate",
        correctAnswer: "On the projection",
      }),
      shuffleOptions({
        question: "Who suggested putting the one-legged sentinel on the ship?",
        optionA: "The boy",
        optionB: "The girl",
        optionC: "The grandfather",
        correctAnswer: "The girl",
      }),
      shuffleOptions({
        question: "What did the sentinel admire under the moonlight?",
        optionA: "Her veil",
        optionB: "Her broach",
        optionC: "Her shoes",
        correctAnswer: "Her broach",
      }),
      shuffleOptions({
        question: "What did the rat demand from the sentinel?",
        optionA: "Money",
        optionB: "Passport",
        optionC: "Rifle",
        correctAnswer: "Passport",
      }),
      shuffleOptions({
        question: "What light did the sentinel see after coming out of the fish?",
        optionA: "Torch",
        optionB: "Bulb",
        optionC: "Sunlight",
        correctAnswer: "Bulb",
      }),
      shuffleOptions({
        question: "Who scorned the sentinel for looking at the ballerina?",
        optionA: "The imp",
        optionB: "The boy",
        optionC: "The rat",
        correctAnswer: "The imp",
      }),
      shuffleOptions({
        question: "At what time did the toys come alive?",
        optionA: "Midnight",
        optionB: "Dawn",
        optionC: "Noon",
        correctAnswer: "Midnight",
      }),
      shuffleOptions({
        question: "What did the boy exclaim on seeing the sentinel with the ballerina?",
        optionA: "“How lovely!”",
        optionB: "“How nasty!”",
        optionC: "“How funny!”",
        correctAnswer: "“How nasty!”",
      }),
      shuffleOptions({
        question: "What did the maid find in the fireplace ash?",
        optionA: "A key and a ribbon",
        optionB: "A heart of metal and a broach",
        optionC: "A shield and a rifle",
        correctAnswer: "A heart of metal and a broach",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The boy received ___ metal sentinels.",
        optionA: "twenty",
        optionB: "twenty-five",
        optionC: "thirty",
        correctAnswer: "twenty-five",
      }),
      shuffleOptions({
        question: "The ballerina stood in a graceful ___ posture.",
        optionA: "dancing",
        optionB: "sitting",
        optionC: "sleeping",
        correctAnswer: "dancing",
      }),
      shuffleOptions({
        question: "The sentinel thought the ballerina would be a good ___.",
        optionA: "sister",
        optionB: "wife",
        optionC: "friend",
        correctAnswer: "wife",
      }),
      shuffleOptions({
        question: "The ship disappeared into a ___.",
        optionA: "pit",
        optionB: "manhole",
        optionC: "pond",
        correctAnswer: "manhole",
      }),
      shuffleOptions({
        question: "The sentinel told himself, “I am a ___, I must not get scared.”",
        optionA: "guard",
        optionB: "sentinel",
        optionC: "soldier",
        correctAnswer: "sentinel",
      }),
      shuffleOptions({
        question: "The fish that swallowed him was almost ___ times bigger.",
        optionA: "ten",
        optionB: "twenty",
        optionC: "thirty",
        correctAnswer: "twenty",
      }),
      shuffleOptions({
        question: "The old lady placed the sentinel near the ___.",
        optionA: "jack-in-the-box",
        optionB: "ballerina",
        optionC: "toy ship",
        correctAnswer: "jack-in-the-box",
      }),
      shuffleOptions({
        question: "The ballerina declared, “I too ___ him.”",
        optionA: "like",
        optionB: "love",
        optionC: "admire",
        correctAnswer: "love",
      }),
      shuffleOptions({
        question: "The boy angrily threw the sentinel into the ___.",
        optionA: "river",
        optionB: "fireplace",
        optionC: "moat",
        correctAnswer: "fireplace",
      }),
      shuffleOptions({
        question: "The ballerina’s ___ flashed like lightning in the fire.",
        optionA: "broach",
        optionB: "veil",
        optionC: "crown",
        correctAnswer: "broach",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The one-legged sentinel could not stand upright.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ballerina was placed on the moat of the castle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The sentinel admired the ballerina all through the night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The ship entered the sewer through a manhole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rat was frightened when the ship dashed past him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sentinel enjoyed the sight of fishes and got distracted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The imp praised the sentinel for his courage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ballerina confessed her love for the sentinel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The boy was happy to see the sentinel arm-in-arm with the ballerina.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In the ash, a heart of metal was found.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
