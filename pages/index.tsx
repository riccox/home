export default function Home() {
  return (
    <div className={"--page justify-center items-center"}>
      <main className="flex flex-col p-10 justify-center items-center w-3/4 h-4/5 sm:w-2/3 sm:h-3/4 lg:w-1/2 lg:h-2/3 gap-5 rounded-3xl border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 bg-neutral-50">
        <div className="rounded-full w-40 p-1 bg-gradient-to-bl from-brandFrom via-brandVia to-brandTo">
          <div className="rounded-full w-full p-1 dark:bg-neutral-900 bg-neutral-50">
            <div className="rounded-full w-full --img-container">
              <img
                alt="avatar-ricco"
                className="--rectangle"
                src="//assets.riccox.com/member/avatar/ricco.jpg"
              />
            </div>
          </div>
        </div>
        <div className="text-4xl">Riccox (Ricco Xie)</div>
        <div className="text-xl">Mail: contact@riccox.com</div>
        <div className="text-sm flex  gap-3 ">
          <a href="https://github.com/riccox">Github</a>
          <i className=" opacity-30">•</i>
          <a href="/resume">Resume</a>
        </div>
      </main>
    </div>
  );
}
