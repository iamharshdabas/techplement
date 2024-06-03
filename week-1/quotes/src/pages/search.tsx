import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Spinner } from '@nextui-org/spinner'
import Fuse from 'fuse.js'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import getAllAuthors from '@/api/allAuthors'
import { title } from '@/components/primitives'
import Meteors from '@/components/ui/meteors'
import NumberTicker from '@/components/ui/number-ticker'
import DefaultLayout from '@/layout'
import Author from '@/types/author'

export default function SearchPage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Author[]>([])
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true)
        const data = await getAllAuthors()

        setData(data)
      } finally {
        setLoading(false)
      }
    }
    fetchQuote()
  }, [])

  const fuse = new Fuse(data, {
    includeScore: true,
    threshold: 0.4,
  })

  const filteredData = searchValue
    ? fuse.search(searchValue).map((result) => result.item)
    : data

  return (
    <DefaultLayout>
      <section className="relative flex h-full flex-col items-center justify-start gap-16 overflow-hidden py-14 md:py-28">
        <Meteors number={64} />
        <div className="flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row">
          <div>
            <div className="hidden sm:inline">
              <h1 className={title({ size: 'sm' })}>Showing results </h1>
            </div>
            <NumberTicker
              className={title({ size: 'sm', color: 'cyan' })}
              delay={0.2}
              value={filteredData.length}
            />
            <h1 className={title({ size: 'sm' })}> of </h1>
            <NumberTicker
              className={title({ size: 'sm', color: 'blue' })}
              delay={0.2}
              value={data.length}
            />
          </div>
          <div>
            <Input
              label="Author"
              type="text"
              value={searchValue}
              variant="bordered"
              onValueChange={setSearchValue}
            />
          </div>
        </div>
        <div className="flex max-w-6xl flex-wrap justify-center gap-4 sm:gap-8">
          {loading ? (
            <Spinner />
          ) : (
            filteredData.map((author, index) => (
              <Button
                key={`${author}-${index}`}
                className="h-12 text-base"
                variant="bordered"
                onClick={() => {
                  navigate(`/${encodeURIComponent(author)}`)
                }}
              >
                {author}
              </Button>
            ))
          )}
        </div>
      </section>
    </DefaultLayout>
  )
}
