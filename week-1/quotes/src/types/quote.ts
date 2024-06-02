import Author from "./author";

type Quote = {
  _id: string;
  quote: string;
  author: Author;
  __v: number;
};

export default Quote;
