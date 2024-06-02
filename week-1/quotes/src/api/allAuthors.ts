import Author from "@/types/author";

export default async function getAllAuthors(): Promise<Author[]> {
  try {
    const response = await fetch("http://localhost:5000/api/authors");

    if (!response.ok) {
      throw new Error("Failed to fetch authors");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching authors: " + error);
  }
}
