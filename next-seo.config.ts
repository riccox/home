import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "Riccox",
  titleTemplate: "%s - Riccox",
  description: "Riccox is created by ricco xie",
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "//assets.riccox.com/logo/solid-rounded.svg",
      type: "image/x-icon",
    },
  ],
};

export default config;
