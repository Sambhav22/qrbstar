export const chapter = "Chapter -10: A Child's Biography";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "What was Louisa May Alcott's naughty habit in her childhood?",
          optionA: "Eating sweets without permission",
          optionB: "Running away",
          optionC: "Talking back to her parents",
          correctAnswer: "B) Running away",
        }),
      shuffleOptions({
          question:
            "What did Louisa do when she grew tired of playing on the ash heap?",
          optionA: "Went home immediately",
          optionB: "Explored the market area",
          optionC: "Joined another group of children",
          correctAnswer: "B) Explored the market area",
        }),
      shuffleOptions({
          question:
            "How did Louisa's parents try to locate her when she went missing?",
          optionA: "They hired a detective",
          optionB: "They asked neighbors for help",
          optionC: "They hired the town crier to search the city",
          correctAnswer: "C) They hired the town crier to search the city",
        }),
      shuffleOptions({
          question:
            "How did Louisa's parents prevent her from running away after the incident?",
          optionA: "They locked her in her room",
          optionB: "They tied her to a big sofa",
          optionC: "They restricted her outdoor activities",
          correctAnswer: "B) They tied her to a big sofa",
        }),
      shuffleOptions({
          question:
            "What did Louisa do to keep herself from running away again?",
          optionA: "Tied herself to the sofa",
          optionB: "Locked herself in her room",
          optionC: "Engaged in storytelling and writing",
          correctAnswer: "C) Engaged in storytelling and writing",
        }),
      shuffleOptions({
          question:
            "What did Louisa decide to do whenever she felt the desire to slip out of the house without permission?",
          optionA: "Tied herself to the sofa",
          optionB: "Went to her little room and shut the door",
          optionC: "Confessed to her mother immediately",
          correctAnswer: "B) Went to her little room and shut the door",
        }),
      shuffleOptions({
          question:
            "Why did Louisa's mother initially wonder why Louisa spent so much time in her room?",
          optionA: "Louisa was playing hide and seek",
          optionB: "Louisa was writing stories",
          optionC: "Louisa was studying hard",
          correctAnswer: "B) Louisa was writing stories",
        }),
      shuffleOptions({
          question:
            "What happened to Louisa when she worked as a nurse during the Civil War?",
          optionA: "She became very ill",
          optionB: "She became a war hero",
          optionC: "She received a promotion",
          correctAnswer: "A) She became very ill",
        }),
      shuffleOptions({
          question:
            "When did Louisa's books start selling well, providing her with a substantial income?",
          optionA: "After her first book",
          optionB: "After her return from the hospital",
          optionC: "After the Civil War",
          correctAnswer: "B) After her return from the hospital",
        }),
      shuffleOptions({
          question:
            "What did Louisa May Alcott enjoy most during her travels at the age of fifty?",
          optionA: "Meeting new people",
          optionB: "Exploring new places",
          optionC: "Eating different cuisines",
          correctAnswer: "B) Exploring new places",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Louisa May Alcott slipped out of the house and up the street as fast as her feet could carry her. Louisa thought the children she met were fine playmates, and they shared some cold potatoes and bread crusts with her. She would not have thought much of this lunch in her mother's dining-room, but for an outdoor picnic, it did very well. When she was tired of the ash heap, she bade the children goodbye and hop-skipped to the ________ area.",
          optionA: "Playground",
          optionB: "Market",
          optionC: "Park",
          correctAnswer: "B) Market",
        }),
      shuffleOptions({
          question:
            'Louisa threw herself down on some doorsteps to rest and to watch the lamplighter, as this was long before there was any gas or electricity in Boston. At this moment, a big dog came along, kissed her face and hands, and sat down beside her with a sober look in his eyes, as if he were thinking: "I guess, Little Girl, you need someone to take care of you!" The dog kept very still, not wanting to wake her. The town crier went by, ringing a bell and reading the description of a ________ child.',
          optionA: "Found",
          optionB: "Missing",
          optionC: "Happy",
          correctAnswer: "B) Missing",
        }),
      shuffleOptions({
          question:
            "Louisa's parents had missed her early in the forenoon and had looked for her in every place they could think of. Each hour they grew more worried, and at dusk, they decided to hire a man to search the ________.",
          optionA: "Woods",
          optionB: "City",
          optionC: "Countryside",
          correctAnswer: "B) City",
        }),
      shuffleOptions({
          question:
            'The runaway woke up and heard the town crier shouting: "Lost Lost - A little girl, six years old, in a pink frock, white hat, and new, green shoes." Louisa called out in the darkness: "Why, that\'s ________!"',
          optionA: "Funny",
          optionB: "Strange",
          optionC: "ME",
          correctAnswer: "C) ME",
        }),
      shuffleOptions({
          question:
            "Louisa's parents had many frights about her, including an incident when she was two years old. While travelling on a steamboat, she darted away and crawled into the ________ to watch the machinery.",
          optionA: "Dining area",
          optionB: "Engine-room",
          optionC: "Captain's cabin",
          correctAnswer: "B) Engine-room",
        }),
      shuffleOptions({
          question:
            "After her return home from working as a nurse during the Civil War, Louisa's books began to sell well. She found herself with a great deal of money, enough to buy luxuries and ________.",
          optionA: "Travel",
          optionB: "Jewelry",
          optionC: "Art",
          correctAnswer: "A) Travel",
        }),
      shuffleOptions({
          question:
            "Louisa decided to cure herself of the running-away habit and began shutting herself in her room. To keep her mind from bad plans, she would shut her eyes and make up ________.",
          optionA: "Games",
          optionB: "Stories",
          optionC: "Songs",
          correctAnswer: "B) Stories",
        }),
      shuffleOptions({
          question:
            "Louisa's mother wondered why Louisa grew so fond of staying in her little chamber at the head of the stairs. She was pleased that the runaway child had changed into such a quiet, like-to-stay-at-home girl, engaging in the enjoyable activity of ________.",
          optionA: "Painting",
          optionB: "Writing",
          optionC: "Cooking",
          correctAnswer: "B) Writing",
        }),
      shuffleOptions({
          question:
            "Louisa's mother advised her to keep on writing when Louisa finally told her about the stories and rhymes hidden in her desk. By and by, Louisa found she liked making stories better than anything she had ever done in her life and became one of the best American ________.",
          optionA: "Artists",
          optionB: "Athletes",
          optionC: "Storytellers",
          correctAnswer: "C) Storytellers",
        }),
      shuffleOptions({
          question:
            "Louisa taught school, did sewing, took care of children, or worked at anything to provide comforts for those she loved. When the Civil War broke out, she went into one of the Union hospitals as a nurse. Louisa worked so hard that she grew very ill, and her father had to go after her and bring her home. One of her books tells about her life in the ________.",
          optionA: "Countryside",
          optionB: "Hospital",
          optionC: "School",
          correctAnswer: "B) Hospital",
   }),
    ]),
  }
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          question:
            "Louisa May Alcott slipped out of the house and up the street as fast as her feet could carry her.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Louisa shared a substantial lunch with the children she met on the ash heap.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Louisa's parents hired a detective to search for her when she went missing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "The town crier announced Louisa's disappearance before she woke up on the doorsteps.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Louisa crawled into the engine-room of a steamboat when she was two years old.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Louisa became a war hero during her work as a nurse in the Civil War.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Louisa decided to avoid running away by tying herself to a big sofa.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Louisa's mother initially wondered why Louisa spent time in her room because she was playing hide and seek.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        }),
      shuffleOptions({
          question:
            "Louisa's books began to sell well after her return from the hospital.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        }),
      shuffleOptions({
          question:
            "Louisa enjoyed venturing into new places just as much at the age of fifty as she did when she sallied forth in her new green shoes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
   }),
    ]),
  }
}

export var activityData;
