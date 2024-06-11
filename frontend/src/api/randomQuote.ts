import Quote from '@/types/quote'

export default async function getRandomQuote(): Promise<Quote> {
  try {
    const response = await fetch('http://localhost:5000/api/quote/random')

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    const data: Quote = await response.json()

    return data
  } catch (error) {
    throw new Error('Error fetching random quote: ' + error)
  }
}
