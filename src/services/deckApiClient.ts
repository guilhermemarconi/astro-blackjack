const baseUrl = 'https://deckofcardsapi.com/api/deck'

export const DeckApiClient = () => {
  let deckId = ''

  const get = async (path: string) => {
    const response = await fetch(`${baseUrl}/${path}`)
    const data: ShuffledCardsResponse | DrawCardResponse | PileResponse =
      await response.json()

    if (!deckId) {
      deckId = data.deck_id
    }

    return data
  }

  const newDeck = () =>
    get('/new/shuffle/?deck_count=6') as Promise<ShuffledCardsResponse>

  const drawCard = (count: number = 1) =>
    get(`/${deckId}/draw?count=${count}`) as Promise<DrawCardResponse>

  const addToPile = (pileName: string, cards: string[]) =>
    get(
      `/${deckId}/pile/${pileName}/add?cards=${cards.join()}`
    ) as Promise<PileResponse>

  return {
    newDeck,
    drawCard,
    addToPile,
  }
}
