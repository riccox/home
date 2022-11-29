import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"--page justify-center items-center"}>
      <div className={`${styles.container}`}>
        <div className={`${styles.magic}`}></div>
        <div
          className={`absolute w-full h-full 
               gap-5 flex flex-col p-10 justify-center items-center rounded-3xl z-10
                drop-shadow-2xl dark:bg-neutral-900 bg-neutral-50`}
        >
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
            <Link href="/resume">Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
