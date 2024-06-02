import Quote from "@/types/quote";

export default async function getAuthorQuotes(
  author: string,
): Promise<Quote[]> {
  try {
    const response = await fetch(
      `http://localhost:5000/api/quotes/${encodeURIComponent(author)}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch quotes by ${author}`);
    }

    const data: Quote[] = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching quotes by ${author}: ${error}`);
  }
}
