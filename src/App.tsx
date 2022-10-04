import { useState } from "react";
import "virtual:windi.css";
import Line from "./Line";

function App() {
  const [ui, setUi] = useState("None");

  return (
    <div className="App flex justify-center items-center w-screen min-h-screen bg-dark-900 text-light-900 p-8">
      <div className="grid w-[95vw] min-h-[90vh] md:(grid-cols-2 gap-60) border-1 border-light-900 py-4 px-6">
        {/* Left */}
        <nav>
          <h1 className="text-6xl font-light">Ahmad K. A.</h1>
          <p className="my-4">An aspiring web developer</p>
          <p className="mb-12">
            This version is inspired by{" "}
            <a className="font-bold" href="https://p5aholic.me/projects/">
              this website
            </a>{" "}
            and is made to be quite simple and mono. Sometimes websites need to
            be uncommon.
          </p>
          {/* List */}
          <ul>
            {/* Projects */}
            <li
              onClick={() => setUi(() => "Projects")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Projects" ? "█" : "Projects"}
            </li>
            {/* Skills */}
            <li
              onClick={() => setUi(() => "Skills")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Skills" ? "█" : "Skills"}
            </li>
            {/* Experience */}
            <li
              onClick={() => setUi(() => "Experience")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Experience" ? "█" : "Experience"}
            </li>
          </ul>
        </nav>
        {/* Right */}
        <main className="self-end justify-self-end font-light ">
          {ui == "Projects" && (
            <Line
              title="Projects"
              items={["JournalV", "Hawr", "Centerm", "Gettube", "Subnt"]}
            />
          )}
          {ui == "Skills" && (
            <Line
              title="Skills"
              items={["Javascript/Typescript", "Go", "Linux"]}
            />
          )}
          {ui == "Experience" && (
            <Line
              title="Experience"
              items={[
                "IT Technician",
                "Data Entry",
                "IT Support",
                "Translation",
              ]}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
