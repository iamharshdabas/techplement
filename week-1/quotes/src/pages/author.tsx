import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '@nextui-org/spinner'

import DefaultLayout from '@/layout'
import Quote from '@/types/quote'
import { title } from '@/components/primitives'
import { FadeText } from '@/components/ui/fade-text'
import getQuotesByAuthor from '@/api/autherQuotes'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function AuthorPage() {
  const { author } = useParams<{ author?: string }>() // NOTE: typr for author to prevent it being undefined
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Quote[]>([])

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true)
        const data = await getQuotesByAuthor(author!) // NOTE: i dont know what this `author!` does

        setData(data)
      } finally {
        setLoading(false)
      }
    }
    fetchQuote()
  }, [author])

  return (
    <DefaultLayout>
      <section className="flex h-full flex-col items-center justify-between gap-16 py-14 md:py-28">
        <BackgroundBeams />
        <div className="inline-block max-w-6xl justify-center text-center">
          {loading ? (
            <Spinner size="lg" />
          ) : (
            <div className="flex flex-col gap-8">
              {data.map((quote, index) => (
                <FadeText
                  key={index}
                  className={title({ size: 'lg' })}
                  direction="up"
                  framerProps={{ show: { transition: { delay: 0.2 } } }}
                  text={quote.quote || 'Something went wrong.'}
                />
              ))}
              <FadeText
                className={title({ size: 'sm', color: 'blue' })}
                direction="down"
                framerProps={{ show: { transition: { delay: 0.4 } } }}
                text={author || 'Server'}
              />
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  )
}
