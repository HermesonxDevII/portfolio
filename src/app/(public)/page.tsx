import "../globals.css";

import Presentation from "./home/components/Presentation";
import Skills from "./home/components/Skills";

export default function Home() {
  return (
    <div className="background-home min-h-screen px-6 sm:px-10">
      <Presentation />
      <Skills />
    </div>
  )
}
