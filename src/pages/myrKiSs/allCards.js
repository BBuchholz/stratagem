import { ref } from 'vue'

export const allCards = ref([
  {
    passCode: 'BAOLG2',
    siteUrl: '',
    siteName: 'Builders Association Ov Layered Generalists',
    siteDesc: 'Builders Association Ov Layered Generalists',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BAOLG-0c83.png',
  },
  {
    passCode: 'BUILDER',
    siteUrl: '',
    siteName: '',
    siteDesc: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BUILDER-2f53.png',
  },
  {
    passCode: 'CARDS',
    siteUrl: 'https://myriad-central.netlify.app/',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png',
  },
  {
    passCode: 'CGBA',
    siteUrl: '',
    siteName: 'Coventry Grove Builders Association',
    siteDesc: 'Coventry Grove Builders Association',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CGBA-13c9.png',
  },
  {
    passCode: 'MCCU',
    siteUrl: '',
    siteName: 'Myriad Central Credit Union',
    siteDesc: 'Giving Credit Where Credit Is Due',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/MCCU-adec_CARD.png',
  },
  {
    passCode: 'PANDAEMONIC',
    siteUrl: '',
    siteName: '',
    siteDesc: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PANDAEMONIC-02ea_CARD.png',
  },
  {
    passCode: 'PLAY',
    siteUrl: '',
    siteName: 'Sonic Circle',
    siteDesc: 'A Place 4 Musicians 2 Play',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PLAY-4249.png',
  },
  {
    passCode: 'SYLFAN',
    siteUrl: '',
    siteName: 'Sylvan Circle Academy',
    siteDesc: 'Sylvan Circle Academy',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png',
  },
  {
    passCode: 'SYW5',
    siteUrl: 'https://myriad-central.netlify.app/',
    siteName: 'Myriad Central Node',
    siteDesc: 'Both a noun and a proper noun, thee Myriad Central Node is the template for all Myriad Central Nodes. Comes equipped with the basic tools to maintain a node as well as documentation explaining what the ecosystem is and how it all works',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYW5-ac89_CARD.png',
  },
  {
    passCode: 'WEWALKS',
    siteUrl: '',
    siteName: '',
    siteDesc: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/WEWALKS-9071_20230821_115243_0000.png',
  },
])

// TODO: build function that is exported that gets a single
// card by passcode so in other pages we can
// call this function to get just one, I want to display
// cards next to the zhones, and have the written
// part be the description

export function getCardFor(aPassCode) {
  const foundCard
        = allCards.value.find(card =>
          card.passCode.toLowerCase()
                  === aPassCode.toLowerCase(),
        )

  return foundCard
}
