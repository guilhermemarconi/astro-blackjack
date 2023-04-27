/// <reference types="astro/client" />

type BaseDeckResponse = {
  success: boolean
  deck_id: string
  remaining: number
}

type ShuffledCardsResponse = BaseDeckResponse & {
  shuffled: boolean
}

type Card = {
  code: string
  image: string
  images: {
    svg: string
    png: string
  }
  value: string
  suit: string
}

type DrawCardResponse = BaseDeckResponse & {
  cards: Card[]
}

type PileResponse = BaseDeckResponse & {
  piles: {
    [pileName: string]: {
      remaining: number
      cards?: Omit<Card, 'images'>[]
    }
  }
}
