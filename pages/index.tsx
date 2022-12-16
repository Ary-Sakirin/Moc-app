import Link from "next/link";
import GetStart from "../src/screens/home/GetStart";
import Testimonial from "../src/screens/home/Testimonial";
import Title from "../src/screens/home/Title";
import Blog from "../src/screens/home/Blog";

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
