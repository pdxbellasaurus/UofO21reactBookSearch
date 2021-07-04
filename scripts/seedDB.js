const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

const bookSeed = [
  {
    title: 'The Darwin Variant',
    authors: 'Kenneth Johnson',
    description:
      "Kenneth Johnson plunges readers into a day-after-tomorrow thriller about an imminent global catastrophe and explores how ordinary people respond to extraordinary circumstances. When the icy shards of a rogue comet fall to Earth, they bring an unknown virus that accelerates evolution to extremes. Suddenly, infected plants grow stronger, choking out those uninfected. Animals turn aggressive and deadly. The eyes of loved ones go cold, and infected neighbors begin exhibiting signs of brutal domination. In a small Georgia town, fourteen-year-old Katie McLane sees her neighbors changing, one by one. Dr. Susan Perry, an epidemiologist at the Centers for Disease Control and Prevention, uncovers the frightening scope of the menace. The infected aren't just evolving. They're conspiring to alter the very nature of what it means to be human. Katie and Susan become fugitives because of what they know, encountering bitter betrayals and lethal dangers, but also loves ignited and inspiring camaraderie, as they fight to prevent a viral conspiracy from creating a terrifying brave new world.",
    image:
      'http://books.google.com/books/content?id=HziPtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    link: 'http://books.google.com/books?id=HziPtAEACAAJ&dq=darwin+variant&hl=&cd=1&source=gbs_api',
  },
  {
    title: 'Furiously Happy',
    authors: 'Jenny Lawson',
    description: `In LET'S PRETEND THIS NEVER HAPPENED, Jenny Lawson baffled readers with stories about growing up the daughter of a taxidermist. In her new book, FURIOUSLY HAPPY, Jenny explores her lifelong battle with mental illness. A hysterical, ridiculous book about crippling depression and anxiety? That sounds like a terrible idea. And terrible ideas are what Jenny does best. According to Jenny: "Some people might think that being 'furiously happy' is just an excuse to be stupid and irresponsible and invite a herd of kangaroos over to your house without telling your husband first because you suspect he would say no since he's never particularly liked kangaroos. And that would be ridiculous because no one would invitea herd of kangaroos into their house. Two is the limit. I speak from personal experience. My husband says thatnone is the new limit. I say he should have been clearer about that before I rented all those kangaroos." "Most of my favorite people are dangerously fucked-up but you'd never guess because we've learned to bare it so honestly that it becomes the new normal. Like John Hughes wrote inThe Breakfast Club, 'We're all pretty bizarre. Some of us are just better at hiding it.' Except go back and cross out the word 'hiding.'" Jenny's first book, LET'S PRETEND THIS NEVER HAPPENED, was ostensibly about family, but deep down it was about celebrating your own weirdness.FURIOUSLY HAPPY is a book about mental illness, but under the surface it's about embracing joy in fantastic and outrageous ways-and who doesn't need a bit more of that?`,
    image:
      'http://books.google.com/books/content?id=teFVCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link: 'http://books.google.com/books?id=teFVCgAAQBAJ&printsec=frontcover&dq=furiously+happy&hl=&cd=1&source=gbs_api',
  },

  {
    title: 'Veracity',
    authors: 'Douglas E. Richards',
    description:
      'A breathtaking near-future thriller. What if you developed a technology that made it impossible for anyone to lie? About anything. Would this save humanity from itself? Or would it tear society apart? And just how far would power players around the globe go to stop it? Elias Gibson has invented a technology that will profoundly change the essence of human behavior. But will this lead to a glorious future, or to the collapse of civilization? Before Elias can answer this question, he finds himself battling for his very survival, and racing to uncover the identities and motives of the treacherous forces arrayed against him. As he fights to stay alive, he will be stunned by one extraordinary revelation after another.',
    image:
      'http://books.google.com/books/content?id=7thjwgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    link: 'http://books.google.com/books?id=7thjwgEACAAJ&dq=Douglas+E.+Richards&hl=&cd=9&source=gbs_api',
  },

  {
    title: 'An Equal Justice',
    author: 'Chad Zunker',
    description:
      "Inside a prestigious law firm, a rookie lawyer is pulled into a dark maze of lies and violence. An ambitious Stanford graduate, David Adams has begun a fast-track career at Austin's most prestigious law firm. It's a personal victory for the rising superstar--a satisfying reversal from his impoverished and despairing childhood. Now he has the life he's always wanted: an extravagant salary, a high-rise condo, a luxury SUV, and no limit to how far he can go in the eyes of the top partners. But after the shocking suicide of a fellow associate--one who, in his final hours, offered David an ominous warning--he feels the pull of powerful forces behind the corporation's enviable trappings. The suicide leads unexpectedly to David's discovery of a secret enclave of the city's homeless, where he can't help but feel an affinity to these outcast souls. Nor can he ignore the feeling that they hold the key to the truth behind a dark conspiracy. When one of his new street friends is murdered, David's clear doubts about his employer start shifting into a dark reality. Now torn between two worlds, David must surrender all that he's achieved to fight for a larger cause of justice--and become his firm's most dangerous acquisition.",
    image:
      'http://books.google.com/books/content?id=TebHvQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    link: 'http://books.google.com/books?id=TebHvQEACAAJ&dq=chad+zunker&hl=&cd=1&source=gbs_api',
  },

  {
    title: 'Born a Crime: Stories from a South African Childhood',
    authors: 'Trevor Noah',
    description:
      "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
    image:
      'http://books.google.com/books/content?id=N97UCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link: 'http://books.google.com/books?id=N97UCwAAQBAJ&amp;printsec=frontcover&amp;dq=trever+noah&amp;hl=&amp;cd=1&amp;source=gbs_api',
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
