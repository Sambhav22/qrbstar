export const chapter = "Chapter -7: Museums of India";
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
            "What is the main purpose of a museum as stated in the text?",
          optionA: "To generate income for the government",
          optionB: "To preserve natural heritage",
          optionC: "To store knowledge about the past",
          correctAnswer: "C) To store knowledge about the past",
        }),
      shuffleOptions({
          question:
            "Which museum is considered the oldest and largest in India?",
          optionA: "National Rail Museum, Delhi",
          optionB: "Calico Museum of Textiles",
          optionC: "Indian Museum, Kolkata",
          correctAnswer: "C) Indian Museum, Kolkata",
        }),
      shuffleOptions({
          question:
            "What is the unique feature of the Indian Museum, Kolkata mentioned in the text?",
          optionA: "Online artifact viewing",
          optionB: "Largest outdoor area",
          optionC: "Exclusive collection of paintings",
          correctAnswer: "A) Online artifact viewing",
        }),
      shuffleOptions({
          question:
            "Why was the Napier Museum, Thiruvananthapuram's original building pulled down and reconstructed?",
          optionA: "To expand its collection",
          optionB: "To make space for a zoo",
          optionC: "Insufficient space for all artifacts",
          correctAnswer: "C) Insufficient space for all artifacts",
        }),
      shuffleOptions({
          question:
            "Which museum is dedicated solely to the history and development of the railway in India?",
          optionA: "Calico Museum of Textiles",
          optionB: "Indian Museum, Kolkata",
          optionC: "National Rail Museum, Delhi",
          correctAnswer: "C) National Rail Museum, Delhi",
        }),
      shuffleOptions({
          question:
            "In which year was the National Rail Museum in Delhi inaugurated in its present form?",
          optionA: "1977",
          optionB: "1995",
          optionC: "1853",
          correctAnswer: "B) 1995",
        }),
      shuffleOptions({
          question: "Who founded the Calico Museum of Textiles?",
          optionA: "Gautam Sarabhai",
          optionB: "Rakesh Sharma",
          optionC: "Lord Napier",
          correctAnswer: "A) Gautam Sarabhai",
        }),
      shuffleOptions({
          question: "What is the main focus of the Calico Museum of Textiles?",
          optionA: "Displaying aviation history",
          optionB: "Textiles and related arts",
          optionC: "Preserving ancient coins",
          correctAnswer: "B) Textiles and related arts",
        }),
      shuffleOptions({
          question:
            "What does the Air Force Museum, Palam, New Delhi mainly showcase in its hangar section?",
          optionA: "Ancient artifacts",
          optionB: "Royal tents and furnishings",
          optionC: "Different types of aircraft",
          correctAnswer: "C) Different types of aircraft",
        }),
      shuffleOptions({
          question:
            "Who is mentioned as the only Param Vir Chakra awardee in the Indian Air Force in the text?",
          optionA: "Nirmal Jit Sekhon",
          optionB: "Rakesh Sharma",
          optionC: "Velu Thampi Dhalawa",
          correctAnswer: "A) Nirmal Jit Sekhon",
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
            "A museum is a storehouse of ________________.\nIt gives us a glimpse into our past through a variety of objects, like photographs, artifacts, statues, coins, weapons, clothes, jewellery, pottery, furniture and more. It holds the key to the country's historic, cultural, artistic and scientific past, so a museum is an important part and parcel of our national identity. It showcases development of heritage and culture in particular. This is the reason that we should visit different museums, so we can feel proud of our rich traditions. A museum is established to focus on the country's socio-cultural activities, entertainment of people, dissemination of information, preservation of natural heritage and strengthening national unity, because it is an important place to educate posterity about different aspects of life that the country has experienced in the bygone times. At present, there are over 400 museums located in different districts spread over the length and breadth of the country. We shall discuss only a few of them.",
          optionA: "Books",
          optionB: "Knowledge",
          optionC: "Food",
          correctAnswer: "B) Knowledge",
        }),
      shuffleOptions({
          question:
            "The Indian Museum in Kolkata is the _______ oldest museum in the world.\nIt is the oldest and largest museum in India, and is also the ninth oldest museum in the world. It is the largest museum in the Asia-Pacific region of the world. It was established in 1814 and was shifted to its present location in 1878. The museum has over 60 galleries spread over an area of 10,000 square feet and houses a rare collection of artifacts of Indian and trans-Indian origin. It is funded by the Department of Culture, Government of India. Its galleries display rare artifacts like coins, pottery, textiles, statues, sculpture, and is very popular for the collection of its artifacts on Goddess Durga and the Buddha. A special feature of this museum is that you can still see many of its artifacts without having to physically visit Kolkata; this you can do online. Just visit its page and take a tour of education and entertainment through its galleries. Napier Museum, Thiruvananthapuram This museum was originally established in 1857; however, its building was not big enough to display all its artifacts, so it was pulled down and a new building was constructed at its present site in 1880. This museum gets its name from Lord Napier, who was the Governor of Madras Presidency then. Located in the heart of the city, quite close to the Zoo, this museum offers an array of artistic, cultural and antique objects comprising sculptures in bronze and stone, carving of wood and ivory, lamps, textiles, Kathakali models, and coins representing different dynasties of South India. It also displays a variety of statues of Shiva, Vishnu, Parvati and Lakshmi. Each object in the museum is unique, and is a joy to watch from near. You will learn from here that image-making has been practised in South India from very old times; the oldest image here belongs to the 8th century AD. An important artifact of this museum is a sword belonging to Velu Thampi Dhalawa, who was the first martyr of the Indian freedom struggle; this sword is proudly displayed in the central hall. There are also other attractions close to the museum, like the Zoo and a Children's Park.",
          optionA: "Fifth",
          optionB: "Ninth",
          optionC: "Twelfth",
          correctAnswer: "B) Ninth",
        }),
      shuffleOptions({
          question:
            "The Napier Museum in Thiruvananthapuram was originally established in ________.\nThis museum was originally established in 1857; however, its building was not big enough to display all its artifacts, so it was pulled down and a new building was constructed at its present site in 1880. This museum gets its name from Lord Napier, who was the Governor of Madras Presidency then. Located in the heart of the city, quite close to the Zoo, this museum offers an array of artistic, cultural and antique objects comprising sculptures in bronze and stone, carving of wood and ivory, lamps, textiles, Kathakali models, and coins representing different dynasties of South India. It also displays a variety of statues of Shiva, Vishnu, Parvati and Lakshmi. Each object in the museum is unique, and is a joy to watch from near. You will learn from here that image-making has been practised in South India from very old times; the oldest image here belongs to the 8th century AD. An important artifact of this museum is a sword belonging to Velu Thampi Dhalawa, who was the first martyr of the Indian freedom struggle; this sword is proudly displayed in the central hall. There are also other attractions close to the museum, like the Zoo and a Children's Park.",
          optionA: "1850",
          optionB: "1857",
          optionC: "1880",
          correctAnswer: "B) 1857",
        }),
      shuffleOptions({
          question:
            'The runaway woke up and heard the town crier shouting: "Lost Lost - A little girl, six years old, in a pink frock, white hat, and new, green shoes." Louisa called out in the darkness: "Why, that\'s ________!"\nLouisa\'s parents had missed her early in the forenoon and had looked for her in every place they could think of. Each hour they grew more worried, and at dusk, they decided to hire a man to search the ________.',
          optionA: "Funny",
          optionB: "Strange",
          optionC: "ME",
          correctAnswer: "C) ME",
        }),
      shuffleOptions({
          question:
            "Louisa's parents had missed her early in the forenoon and had looked for her in every place they could think of. Each hour they grew more worried, and at dusk, they decided to hire a man to search the ________.\nLouisa's parents had missed her early in the forenoon and had looked for her in every place they could think of. Each hour they grew more worried, and at dusk, they decided to hire a man to search the ________.",
          optionA: "Woods",
          optionB: "City",
          optionC: "Countryside",
          correctAnswer: "B) City",
        }),
      shuffleOptions({
          question:
            "After her return home from working as a nurse during the Civil War, Louisa's books began to sell well. She found herself with a great deal of money, enough to buy luxuries and ________.\nRailway is an important mode of transport in the country and is the lifeline of our economy. Its history of development in India is very interesting. The railway started its operations in India in 1853, and ever since it has grown to the present level; once the steam engine was its workhorse, but today, modern engines run on diesel and electricity form the backbone of the railway; so it is appropriate to know more about them, and this can be done by visiting the museum solely devoted to it. The National Rail Museum is the first of its kind in the country. In fact, it was first established as the Rail Transport Museum and was inaugurated in 1977, but it was brought into its present form in 1995, devoted to the railway full-fledged. The museum covers a land area over 11 acre and its indoor gallery comprises an elegantly designed octagonal building housing six display galleries and a large open area laid out to stimulate the atmosphere of a railway yard. The museum collection comprises life-size exhibits and other rail components in the country. It houses locomotives and coaches from the princely states across the Indian subcontinent. It is upgraded from time to time. The museum also houses the maximum number of rail simulators anywhere in the world. Its 3-D virtual reality technology takes a visitor back in time. It is a learning experience being here.",
          optionA: "Travel",
          optionB: "Jewelry",
          optionC: "Art",
          correctAnswer: "A) Travel",
        }),
      shuffleOptions({
          question:
            "Louisa decided to cure herself of the running-away habit and began shutting herself in her room. To keep her mind from bad plans, she would shut her eyes and make up ________.\nThe museum was founded by Gautam Sarabhai, his sister Gira Sarabhai and the industrial house of Calico in 1949. Mainly devoted to textiles, it also displays sacred bronze images from South India, Jain manuscripts, sculpture and objects, Indian miniature paintings as well as other arts. However, textiles remain its main attractions. Built in a heritage style, the museum presents a tasteful display of the buildings. It is divided into two parts. The first part is the Haveli, which displays religious textiles, bronze images, Mughal and other miniature paintings. The second part is Chauk, which displays royal tents, carpets, furnishings and costumes of the Mughal and regional royal courts. It also displays the textiles which were exported and shows our ethnographic textiles.",
          optionA: "Games",
          optionB: "Stories",
          optionC: "Songs",
          correctAnswer: "B) Stories",
        }),
      shuffleOptions({
          question:
            "Louisa's mother wondered why Louisa grew so fond of staying in her little chamber at the head of the stairs. She was pleased that the runaway child had changed into such a quiet, like-to-stay-at-home girl, engaging in the enjoyable activity of ________.\nThe museum was founded by Gautam Sarabhai, his sister Gira Sarabhai and the industrial house of Calico in 1949. Mainly devoted to textiles, it also displays sacred bronze images from South India, Jain manuscripts, sculpture and objects, Indian miniature paintings as well as other arts. However, textiles remain its main attractions. Built in a heritage style, the museum presents a tasteful display of the buildings. It is divided into two parts. The first part is the Haveli, which displays religious textiles, bronze images, Mughal and other miniature paintings. The second part is Chauk, which displays royal tents, carpets, furnishings and costumes of the Mughal and regional royal courts. It also displays the textiles which were exported and shows our ethnographic textiles.",
          optionA: "Painting",
          optionB: "Writing",
          optionC: "Cooking",
          correctAnswer: "B) Writing",
        }),
      shuffleOptions({
          question:
            "Louisa's mother advised her to keep on writing when Louisa finally told her about the stories and rhymes hidden in her desk. By and by, Louisa found she liked making stories better than anything she had ever done in her life and became one of the best American ________.\nThe Air Force Museum is fully devoted to the Indian Air Force and houses a rich collection of exhibits about the air arm of our armed forces. It is mainly divided into two main parts - annexe and hangar. The annexe is divided into three galleries. The first of these displays some unique photographs showing some of the iconic officers as well as historical occasions. The second and third galleries also house photographs about more occasions of aviation history and the operations conducted by the Indian Air Force. The models of different types of aircraft and weaponry are added attractions. The evolving Air Force uniform is also tastefully displayed. The children are most excited when they visit the hangar. It houses a total of 15 aircraft, comprising transport, bomber and fighter varieties, showing the role our Air Force can play in war and peace. A visitor's spirit is shot high when he watches the photographs of Flying Officer Nirmal Jit Sekhon, the only Param Vir Chakra awardee in the Air Force, and the little Gnat called Sabre-slayer. Also on display are the bombs and missiles. There is also a model of the Soyuz, the spaceship in which the first Indian Squadron Leader Rakesh Sharma went into the space. We feel proud of our airmen when we see different Pakistani tanks, aircraft and other equipment destroyed by us in different wars and operations.",
          optionA: "Artists",
          optionB: "Athletes",
          optionC: "Storytellers",
          correctAnswer: "C) Storytellers",
        }),
      shuffleOptions({
          question:
            "Louisa taught school, did sewing, took care of children, or worked at anything to provide comforts for those she loved. When the Civil War broke out, she went into one of the Union hospitals as a nurse. Louisa worked so hard that she grew very ill, and her father had to go after her and bring her home. One of her books tells about her life in the ________.\nThe museum was first established as the Rail Transport Museum and was inaugurated in 1977, but it was brought into its present form in 1995, devoted to the railway full-fledged. The museum covers a land area over 11 acre and its indoor gallery comprises an elegantly designed octagonal building housing six display galleries and a large open area laid out to stimulate the atmosphere of a railway yard. The museum collection comprises life-size exhibits and other rail components in the country. It houses locomotives and coaches from the princely states across the Indian subcontinent. It is upgraded from time to time. The museum also houses the maximum number of rail simulators anywhere in the world. Its 3-D virtual reality technology takes a visitor back in time. It is a learning experience being here.",
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
