import { NextSeo } from "next-seo";
import styles from "../styles/resume.module.css";
import { useTranslation } from "react-i18next";
import {
  FaBriefcase,
  FaCalendarWeek,
  FaEnvelope,
  FaGithub,
  FaLocationArrow,
  FaTwitter,
  FaUserGraduate,
  FaWeixin,
  FaZhihu,
} from "react-icons/fa";
import {
  FcCommandLine,
  FcMultipleSmartphones,
  FcWorkflow,
} from "react-icons/fc";
import { ResumeTimeline } from "../components/Timeline/resume";
import {
  ResumeDoingCard,
  ResumeSkillsStatsCard,
} from "../components/Card/rusume";

const skillsCardsData = [4, 8, 2, 7, 4, 2];

export default function Resume() {
  const { t } = useTranslation("resume");

  return (
    <>
      <NextSeo title={"Resume"} />
      <div
        className={`justify-center items-start text-gray-600 dark:text-gray-300 px-10 py-[3vw] gap-10 
        --page flex-row flex-wrap overflow-scroll bg-fixed bg-cover
         selection:bg-none selection:text-indigo-500 ${styles.bg}`}
      >
        {/* profile card */}
        <div
          className={`xl:sticky xl:top-[4vw] w-full xl:w-auto bg-light dark:bg-dark rounded-3xl flex flex-col items-stretch shadow-2xl`}
        >
          <div
            className={`flex flex-col items-center px-12 py-4 gap-[2vw] md:gap-[1vw]`}
          >
            <div
              className={`--img-container drop-shadow-2xl rounded-3xl w-[16vw] md:w-[12vw] lg:w-[8vw] self-center xl:-translate-y-1/2
                ease-in-out duration-300 transition-all hover:shadow-xl`}
            >
              <img
                src="//assets.riccox.com/member/avatar/ricco-animated-1.jpg"
                alt={"ricco-animated-avatar"}
              />
            </div>
            <div
              className={`xl:-mt-[40%] text-3xl font-bolder text-center tracking-wide hover:underline underline-offset-4`}
            >
              {t("profile.name")}
            </div>
            <div
              className={`ease-in-out duration-300 transition-colors rounded-3xl 
              bg-gray-200 dark:bg-gray-700 text-sm
                py-1.5 px-5 text-center tracking-wider ring-purple-600 dark:ring-purple-400
                dark:hover:bg-purple-800 dark:hover:text-purple-200
                hover:ring-2 hover:bg-purple-100 hover:text-purple-700 ring-offset-2`}
            >
              {t("profile.title")}
            </div>
            <div className={`flex justify-center items-center gap-5`}>
              <a
                href={"https://github.com/riccox"}
                className={`hover:text-zinc-500`}
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={"https://twitter.com/riccoxie"}
                className={`hover:text-sky-500`}
                target={"_blank"}
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href={"https://zhihu.com/people/riccoxie"}
                className={`hover:text-blue-600 scale-150`}
                target={"_blank"}
                rel="noreferrer"
              >
                <FaZhihu />
              </a>
            </div>
          </div>
          <div
            className={`bg-gray-200 dark:bg-neutral-900 rounded-[0_0_1.5rem_1.5rem] flex flex-col items-stretch py-8 px-10`}
          >
            <div className={`flex flex-col items-start gap-4 text-sm`}>
              <div
                className={`flex items-center gap-5 hover:text-orange-600`}
                data-tip={t("dob")}
              >
                <FaCalendarWeek />
                <span>{t("profile.dob")}</span>
              </div>
              <div
                className={`flex items-center gap-5 hover:text-sky-600`}
                data-tip={t("city")}
              >
                <FaLocationArrow />
                <span>{t("profile.city")}</span>
              </div>
              <div
                className={`flex items-center gap-5 hover:text-red-500`}
                data-tip={t("email")}
              >
                <FaEnvelope />
                <span>ricco@riccox.com</span>
              </div>
              <div
                className={`flex items-center gap-5 hover:text-green-600`}
                data-tip={t("wechat")}
              >
                <FaWeixin className={`scale-125`} />
                <span>riccoxie</span>
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
        <div
          className={`bg-light dark:bg-dark rounded-3xl w-full xl:w-1/2 overflow-hidden`}
        >
          {/* about me */}
          <div className={`odd:bg-white dark:odd:bg-neutral-900 p-10`}>
            <div className={`text-4xl font-bold`}>{t("about")}</div>
            <div
              className={`bg-blue-500 rounded-3xl h-[0.6vh] w-20 my-4`}
            ></div>
            <p className={`whitespace-pre-wrap pt-2`}>{t("intro.about")}</p>
          </div>
          {/* doing */}
          <div className={`odd:bg-white dark:odd:bg-neutral-900 p-10`}>
            <div className={`text-4xl font-bold`}>{t("doing")}</div>
            <div className={`grid grid-cols-1 xl:grid-cols-2 gap-4 pt-8`}>
              <ResumeDoingCard
                icon={<FcCommandLine size={"5rem"} />}
                title={t("intro.doing.0.title")}
                description={t("intro.doing.0.description")}
              />
              <ResumeDoingCard
                icon={<FcMultipleSmartphones size={"5rem"} />}
                title={t("intro.doing.1.title")}
                description={t("intro.doing.1.description")}
              />
              <ResumeDoingCard
                icon={<FcWorkflow size={"5rem"} />}
                title={t("intro.doing.2.title")}
                description={t("intro.doing.2.description")}
              />
            </div>
          </div>
          {/* experience */}
          <div className={`odd:bg-white dark:odd:bg-neutral-900 p-10`}>
            <div className={`text-4xl font-bold`}>{t("experience")}</div>
            <div
              className={`bg-blue-500 rounded-3xl h-[0.6vh] w-20 my-4`}
            ></div>
            <div className={`flex pt-4 gap-8 flex-wrap flex-col xl:flex-row`}>
              <div className={`flex-1`}>
                <div className={`flex gap-4 items-center`}>
                  <div className={` text-blue-500`}>
                    <FaUserGraduate size={"2rem"} />
                  </div>
                  <div className={`font-semibold text-2xl`}>{t("study")}</div>
                </div>
                {/*timeline*/}
                <ResumeTimeline
                  className={`pt-6 pl-2`}
                  items={Array.apply(null, Array(3)).map((e, i) => ({
                    title: t(`experiences.study.${i}.school`),
                    tip: t(`experiences.study.${i}.time`),
                    description: t(`experiences.study.${i}.major`),
                  }))}
                />
              </div>
              <div className={`flex-1`}>
                <div className={`flex gap-4 items-center`}>
                  <div className={` text-blue-500`}>
                    <FaBriefcase size={"2rem"} />
                  </div>
                  <div className={`font-semibold text-2xl`}>{t("work")}</div>
                </div>
                {/*timeline*/}
                <ResumeTimeline
                  className={`pt-6 pl-2`}
                  items={Array.apply(null, Array(1)).map((e, i) => ({
                    title: t(`experiences.work.${i}.title`),
                    tip: t(`experiences.work.${i}.time`),
                    description: t(`experiences.work.${i}.description`),
                  }))}
                />
              </div>
            </div>
          </div>
          {/* skills */}
          <div className={`odd:bg-white dark:odd:bg-neutral-900 p-10`}>
            <div className={`text-4xl font-bold`}>{t("skill")}</div>
            <div className={`container xl:columns-2 pt-8 gap-6`}>
              {skillsCardsData.map((itemCount, index) => (
                <ResumeSkillsStatsCard
                  key={index}
                  title={t(`skills.${index}.title`)}
                  items={Array.apply(null, Array(itemCount)).map((e, i) => ({
                    label: t(`skills.${index}.items.${i}.label`),
                    percentage: parseInt(
                      t(`skills.${index}.items.${i}.percentage`)
                    ),
                  }))}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
