import Link from "next/link";
import GetStart from "../src/screens/home/getStart";
import Testimonial from "../src/screens/home/testimonial";
import Title from "../src/screens/home/title";
import Blog from "../src/screens/home/blog";

export default function Home() {
  return (
    <>
      <GetStart />
      <Title />
      <Testimonial />
      <Blog />
    </>
  )
}
