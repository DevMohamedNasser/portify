import programmer from "../../assets/Images/programmer.jpg";

export default function About() {
  return (
    <section id='About' className="dark:bg-gray-900 bg-gray-100 dark:text-gray-100 py-24">
      <div className="container mx-auto text-start">
        <h2 className="text-gray-800 dark:text-gray-200">About Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-x-8">
          <div className="col-span-1">
            <img src={programmer} className="rounded-sm" alt="Programmer" />
          </div>
          <div className=" col-span-1 md:col-span-2">
            <p className="text-lg font-light">
              I’m Mohamed Nasser, a Computer Science student with a deep passion
              for web development. I started my journey learning programming
              with C++ and data structures, then moved into web technologies —
              mastering HTML, CSS, JavaScript, and React. Now, I build modern
              web interfaces with Next.js and Tailwind CSS, and I’m learning
              backend development to become a Full Stack Developer soon. I enjoy
              creating clean, functional, and visually appealing websites that
              bring ideas to life.
            </p>

            <ul>
              <li className="my-3 flex flex-wrap items-center gap-2">
                <span
                  className="text-green-700 fa-stack"
                  style={{ verticalAlign: "top" }}
                >
                  <i className="fa-solid fa-circle fa-stack-2x"></i>
                  <i className="fa-solid fa-graduation-cap fa-stack-1x fa-inverse"></i>
                </span>
                <span className="font-bold">Education</span> Faculty of Computers & Informatics — 3rd Year (CS)
              </li>
              <li className="my-3 flex flex-wrap items-center gap-2">
                <span
                  className="text-gray-700 fa-stack"
                  style={{ verticalAlign: "top" }}
                >
                  <i className="text-blue-700 fa-solid fa-circle fa-stack-2x"></i>
                  <i className="dark:text-white fa-solid fa-code fa-stack-1x fa-inverse"></i>
                </span>
                <span className="font-bold">Technology</span>  Next.js, React.js, Tailwind , Bootstrap, TS, JS
              </li>
              <li className="my-3 flex flex-wrap items-center gap-2">
                <span className="fa-stack" style={{ verticalAlign: "top" }}>
                  <i className="dark:text-black text-yellow-400 fa-solid fa-circle fa-stack-2x"></i>
                  <i className="dark:text-white fa-solid fa-lightbulb fa-stack-1x fa-inverse"></i>
                </span>
                Interested In Smart Web Systems, UI/UX, Modern Front-End & Back-end Tools
              </li>
              
              <li className="my-3 flex flex-wrap items-center gap-2">
                <span
                  className="text-gray-700 fa-stack"
                  style={{ verticalAlign: "top" }}
                >
                  <i className="text-red-700 dark:text-red-900 fa-solid fa-circle fa-stack-2x"></i>
                  <i className="dark:text-white fa-solid fa-location-dot fa-stack-1x fa-inverse"></i>
                </span>
                <span className="font-bold">Location</span>  Tanta, Egypt
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
