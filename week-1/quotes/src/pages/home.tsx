import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";

import getRandomQuote from "@/api/randomQuote";
import DefaultLayout from "@/layout";
import Quote from "@/types/quote";
import { title } from "@/components/primitives";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { FadeText } from "@/components/ui/fade-text";
import { MagicContainer, MagicCard } from "@/components/ui/magic-card";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Quote | null>();

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      setLoading(true);
      setData(null);
      const data = await getRandomQuote();

      setData(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DefaultLayout>
      <section className="flex h-full flex-col items-center justify-between gap-16 py-14 md:py-28">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] h-full",
          )}
          height={32}
          width={32}
        />
        <div className="inline-block max-w-6xl text-center justify-center">
          {loading ? (
            <Spinner size="lg" />
          ) : (
            <div className="flex flex-col gap-8">
              <FadeText
                className={title({ size: "lg" })}
                direction="up"
                framerProps={{ show: { transition: { delay: 0.2 } } }}
                text={data?.quote || "Something went wrong."}
              />
              <FadeText
                className={title({ size: "sm", color: "blue" })}
                direction="down"
                framerProps={{ show: { transition: { delay: 0.4 } } }}
                text={data?.author || "Server"}
              />
              <div>
                <Button
                  className="font-bold"
                  variant="ghost"
                  onClick={() => fetchQuote()}
                >
                  {data?.quote ? "NEXT" : "Try Again ?"}
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="inline-block max-w-6xl text-center justify-center">
          <MagicContainer
            className={
              "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
            }
          >
            <MagicCard className="flex w-full flex-col items-center justify-center overflow-hidden p-16 shadow-2xl">
              <h2 className={title({ size: "sm" })}>
                Inspiration for Every Day
              </h2>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
            <MagicCard className="flex w-full flex-col items-center justify-center overflow-hidden p-16 shadow-2xl">
              <h2 className={title({ size: "sm" })}>Wisdom Across Time</h2>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
            <MagicCard className="flex w-full flex-col items-center justify-center overflow-hidden p-16 shadow-2xl">
              <h2 className={title({ size: "sm" })}>Share and Reflect</h2>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
          </MagicContainer>
        </div>
      </section>
    </DefaultLayout>
  );
}
