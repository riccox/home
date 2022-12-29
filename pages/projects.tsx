import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  link: string;
  status: { label: string; color: string };
  description: string;
  github?: string;
  logo?: string;
  tags?: string[];
}

export default function Projects() {
  const { t } = useTranslation("projects");
  const projects = t("projects") as unknown as Project[];
  return (
    <>
      <NextSeo title={t("title") as string} />
      <div
        className={`bg-light dark:bg-neutral-900 --page justify-center items-center 
          p-[5vw]
          md:py-[5vh] md:px-[5vw]
          xl:py-[10vh] xl:px-[15vw]`}
      >
        <div
          className={`w-full h-full --border dark:bg-dark rounded-3xl flex flex-col items-stretch overflow-hidden
          py-4 px-4
          md:py-3 xl:px-8
          xl:py-4 xl:px-10`}
        >
          <div
            className={`p-3 md:p-6 xl:py-10 xl:px-10 flex justify-between flex-wrap gap-2`}
          >
            <div className={` text-4xl font-bold`}>{t("title")}</div>
            <a
              href="https://www.buymeacoffee.com/riccoxie"
              target={'_blank'}
              rel={'noreferrer'}
              className={`--img-container aspect-auto drop-shadow xl:w-[8vw] md:w-[16vw] w-[28vw]`}
            >
              <img
                alt={`buy-me-a-coffee`}
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              />
            </a>
          </div>
          <div
            className={`flex flex-col gap-4 p-1 md:p-2 xl:p-3 overflow-scroll`}
          >
            {projects.map((p) => (
              <div
                className={`--border dark:bg-neutral-900 rounded-2xl flex justify-between 
                 p-4 gap-3
                 md:p-6
                 xl:p-10
                hover:ring ring-rose-400 dark:ring-fuchsia-900`}
                key={p.name}
              >
                <div className={`flex flex-col gap-3`}>
                  <div className={`flex gap-4 items-center flex-wrap`}>
                    {p.logo && (
                      <div
                        className={`--img-container drop-shadow rounded-xl md:hidden xl:hidden w-[11vw] p-2`}
                      >
                        <img
                          src={p.logo}
                          alt={`${p.name}-logo`}
                          className={`h-full`}
                        />
                      </div>
                    )}
                    <Link
                      target={"_blank"}
                      href={p.link}
                      className={`text-3xl font-semibold`}
                    >
                      {p.name}
                    </Link>
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-2xl text-white`}
                      style={{ background: p.status.color }}
                    >
                      {p.status.label}
                    </span>
                    {p.github && (
                      <a
                        href={p.github}
                        className={`hover:opacity-80`}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  {p.tags && p.tags.length > 0 && (
                    <div className={`flex gap-2 flex-wrap`}>
                      {p.tags?.map((t) => (
                        <div
                          key={t}
                          className={`px-2 py-1 text-sm rounded-xl bg-neutral-200 dark:bg-neutral-800`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  )}
                  <p
                    className={`text-neutral-600 dark:text-neutral-400  whitespace-pre-wrap`}
                  >
                    {p.description}
                  </p>
                </div>
                {p.logo && (
                  <div
                    className={`--img-container drop-shadow-lg rounded-xl hidden md:flex xl:flex md:w-[20vw] xl:w-[4vw] p-2`}
                  >
                    <img
                      src={p.logo}
                      alt={`${p.name}-logo`}
                      className={`h-full`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
