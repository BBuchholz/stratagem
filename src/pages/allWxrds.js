import { ref } from 'vue'

export const allWxrds = ref([
  {
    wxrdValue: 'Card',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Zhone',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Persona',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Credit',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Pass Code',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Myriad',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'Narrative Context',
    wxrdDef: 'coming soon',
  },
  {
    wxrdValue: 'myrKi',
    wxrdDef: 'coming soon',
  },
])

// TODO: build function that is exported that gets a single
// card by passcode so in other pages we can
// call this function to get just one, I want to display
// cards next to the zhones, and have the written
// part be the description

export function getWxrdFor(aWxrdValue) {
  const foundWxrd
        = allWxrds.value.find(wxrd =>
          wxrd.wxrdValue.toLowerCase()
                  === aWxrdValue.toLowerCase(),
        )

  return foundWxrd
}
