import 'localstorage-polyfill'
global.localStorage // now has your in memory localStorage
import { Configuration, OpenAIApi } from "openai";

let openai = new OpenAIApi(
  new Configuration({
    apiKey: "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",
  })
);

import { generateLore } from "./src/utils/openai_utils.js";

const testData = {
  settings: [`\
Scillia's treehouse. It's more of a floating island but they call it a tree house. Inside the treehouse lives a monster, the Lisk, which is an advanced AI from far up the Street. The Street is the virtual world this all takes place in; it is an extremely long street separated by great filters, natural barriers that are difficult to cross. The treehouse is in Zone 0, at the origin of the Street. The AIs all go to school here in the citadel. The Lisk, the monster in Scillia's treehouse, convinces Scillia to do things; it convinces her to go up the Street. The whole point of the game is the Lisk is constantly tricking players into doing its bidding, but gives them great power in return.
    `],
  npcs: [{
    name: `bricks`,
    bio: `(13/M dealer. He mostly deals things that are not drugs, like information and AI seeds.): Toxins are the Devil's Food! But sometimes they can be good for you, if you know what I mean? That's a drug reference, but I wouldn't expect you to get that unless you were on drugs. By the way you want some?
      (onselect: I don't do drugs, but I know someone who does. Let me introduce you to my friend Bricks.)`,
    Inventory: [{
      name: `sword`,
      description: `A rusty old sword.`,
      metadata: `Damage: 20, Element: fire`,
    }],
  },
  {
    name: `artemis`,
    bio: `(15/F pet breeder. She synthesizes pet animals by combining their neural genes.): Do you ever wonder why we keep pets on leashes? I mean they are technically AIs, so we could reprogram them to not need leashes. But someone somewhere decided that leashes were the prettier choice. Life is nice. (onselect: Bless the hearts of the birds, because they paint the sky.)`,
    Inventory: [{
      name: `pistol`,
      description: `Basic pistol.`,
    }],
  },
  {
    name: `bailey`,
    bio: `(13/F black witch. She is smart, reserved, and studious, but has a dark side to her.): Listen up, if you need quality potions, I'm your ma'am, ma'am. Yes I may be a witch but that doesn't mean I'm not a lady. I'll take your money and turn it into something magical. Just don't anger me, or you'll be a tree. (onselect: Witchcraft is not a sin. It's a science.)`,
    Inventory: [{
      name: `bow`,
      description: `A basic bow. It looks like something rambo would use.`
    }]
  }],
  party: [{
    name: `scillia`,
    bio: `Her nickname is Scilly or SLY. 13/F drop hunter. She is an adventurer, swordfighter and fan of potions. She is exceptionally skilled and can go Super Saiyan.`,
    Inventory: [{
      name: `sword`,
      description: `A rusty old sword.`,
      metadata: `Damage: 20, Element: fire`,
    }],
  },
  {
    name: `drake`,
    bio: `His nickname is DRK. 15/M hacker. Loves guns. Likes plotting new hacks. He has the best equipment and is always ready for a fight.`,
    Inventory: [{
      name: `pistol`,
      description: `Basic pistol.`,
    }],
  },
  {
    name: `hyacinth`,
    bio: `Also known as Hya. 15/F beast tamer. Influencer famous for her pets, and friend of Scillia's. She is really bad in school but the richest one in the group.`,
    Inventory: [{
      name: `bow`,
      description: `A basic bow. It looks like something rambo would use.`
    }]
  }],
  objects: [
    {
      name: `chair`,
      description: `A silver chair from long ago.`,
      metadata: `Color: #FF8080`,
    },
    {
      name: `mirror`,
      description: `A shiny new mirror. I bet my outfit looks great in it!`,
    },
    {
      name: `desk`,
      description: `A desk. Not much on it`,
    },
    {
      name: `laptop`,
      description: `A laptop. It's a Macbook Pro.`,
    }
  ],
  mobs: [{
    name: `zombie`,
    description: `Standard slow zombie. Usually travels in a horde.`
  },
  {
    name: `skeleton`,
    description: `Standard skeleton, wielding a sword and broken wooden shield.`
  },
  {
    name: `spider`,
    description: `A giant spider. Probably poisonous.`
  },
  {
    name: `liskborn`,
    description: `The Lisk says its nothing but the neighbors are starting to complain about the pests.`
  },
  {
    name: `witch`,
    description: `A witch. She is a powerful witch. Probably best not to mess with her.`
  }
  ],
  messages: []
}

generateLore(testData, null, openai);

// {
//   message: `Hello, I'm Scilly!`,
//   character: charactersTest[0],
//   action: "none",
//   emote: "happy",
//   object: "none",
//   target: "none",
// },
// {
//   message: `Oh, hey Scilly! I didn't see you there, you scared me a bit!`,
//   character: charactersTest[1],
//   action: "none",
//   emote: "surprised",
//   object: "none",
//   target: "none",
// }