import { Locale } from "@src/types";

type Config = {
    locales: Locale[];
    defaultLocale: Locale;
};

const siteConfig: Config = {
    locales: ["en"],
    defaultLocale: "en"
};

export default siteConfig;
