export const chapter = "Chapter - 2: Conduct in the Family";
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
        question: "What helps in passing traits from parents to children?",
        optionA: "Culture",
        optionB: "Heredity",
        optionC: "Education",
        correctAnswer: "Heredity",
      }),
      shuffleOptions({
        question: "Who mainly shapes a child’s values and manners?",
        optionA: "Parents",
        optionB: "Friends",
        optionC: "Neighbours",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "Karun’s mother dislikes cooking food in _____.",
        optionA: "Mustard oil",
        optionB: "Coconut oil",
        optionC: "Ghee",
        correctAnswer: "Mustard oil",
      }),
      shuffleOptions({
        question: "Who in Karun’s family enjoys decorating with rangoli?",
        optionA: "His grandmother",
        optionB: "His father",
        optionC: "His sister",
        correctAnswer: "His grandmother",
      }),
      shuffleOptions({
        question: "What does over-pampering often make children?",
        optionA: "Polite",
        optionB: "Stubborn",
        optionC: "Honest",
        correctAnswer: "Stubborn",
      }),
      shuffleOptions({
        question: "Which quality may be adopted from friends?",
        optionA: "Behaviour and habits",
        optionB: "Hair colour",
        optionC: "Eye shape",
        correctAnswer: "Behaviour and habits",
      }),
      shuffleOptions({
        question: "A vegetarian family generally prefers _____.",
        optionA: "Dal and roti",
        optionB: "Fish and meat",
        optionC: "Eggs and bread",
        correctAnswer: "Dal and roti",
      }),
      shuffleOptions({
        question: "When a baby is born, from whom does it learn first?",
        optionA: "Parents",
        optionB: "Teachers",
        optionC: "Friends",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "What word means giving too much comfort and attention?",
        optionA: "Pampering",
        optionB: "Sharing",
        optionC: "Teaching",
        correctAnswer: "Pampering",
      }),
      shuffleOptions({
        question: "Each member of a family is _____.",
        optionA: "Unique and special",
        optionB: "Exactly the same",
        optionC: "Ordinary",
        correctAnswer: "Unique and special",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Children inherit many of their physical traits from their _____.",
        optionA: "Parents",
        optionB: "Teachers",
        optionC: "Neighbours",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "The process of passing traits is called _____.",
        optionA: "Heredity",
        optionB: "Adaptation",
        optionC: "Observation",
        correctAnswer: "Heredity",
      }),
      shuffleOptions({
        question: "We also learn new qualities from our _____.",
        optionA: "Friends",
        optionB: "Toys",
        optionC: "Pets",
        correctAnswer: "Friends",
      }),
      shuffleOptions({
        question: "The culture of a family influences its members’ _____.",
        optionA: "Likes and dislikes",
        optionB: "Height",
        optionC: "Age",
        correctAnswer: "Likes and dislikes",
      }),
      shuffleOptions({
        question: "Karun and his father both like to eat _____.",
        optionA: "Fish",
        optionB: "Vegetables",
        optionC: "Rice and dal",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Children learn values and behaviour from their _____.",
        optionA: "Parents",
        optionB: "Classmates",
        optionC: "Games",
        correctAnswer: "Parents",
      }),
      shuffleOptions({
        question: "Our surroundings help us to _____ to new habits.",
        optionA: "Adapt",
        optionB: "Refuse",
        optionC: "Forget",
        correctAnswer: "Adapt",
      }),
      shuffleOptions({
        question: "A non-vegetarian family prefers to eat _____.",
        optionA: "Meat and fish",
        optionB: "Rice and dal",
        optionC: "Fruits and milk",
        correctAnswer: "Meat and fish",
      }),
      shuffleOptions({
        question: "When children misbehave to get their demands fulfilled, it is called a _____.",
        optionA: "Tantrum",
        optionB: "Compliment",
        optionC: "Discussion",
        correctAnswer: "Tantrum",
      }),
      shuffleOptions({
        question: "Showing respect and love in a family helps to keep it _____.",
        optionA: "United",
        optionB: "Divided",
        optionC: "Silent",
        correctAnswer: "United",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Heredity passes traits from one generation to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Parents have a strong influence on their children’s behaviour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Karun’s mother loves to cook food in mustard oil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Karun’s grandmother loves colours and rangoli.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All family members are identical in every way.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A child may learn qualities from friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Over-pampering helps a child become disciplined.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The culture of a family affects its eating habits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Each family member is special in their own way.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Disliking something always means it is bad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
