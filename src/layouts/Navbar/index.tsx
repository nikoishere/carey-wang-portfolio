"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { NextImage, NextLink } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "experience", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");

    const pathname = usePathname();

    const t = useTranslations("Navigation");

    useEffect(() => {
        if (window.location.hash) {
            setActiveLink(window.location.hash.slice(1));
            const section = document.querySelector(window.location.hash);
            section?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <nav className="h-header sticky top-0 z-50 flex items-center border-b-2 border-primary-100 bg-primary-300">
            <div className="container flex items-center justify-between">
                <NextLink
                    className="rounded-full bg-primary-100 p-1"
                    href="#"
                    title=""
                    onClick={() => setActiveLink("")}
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        priority
                        alt="Site Logo"
                    />
                </NextLink>

                <ul className="hidden items-center justify-between gap-2 font-medium text-white xs:flex sm:gap-6">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <NextLink
                                href={`#${navigationLink}`}
                                onClick={() => setActiveLink(navigationLink)}
                                className={cn(
                                    "py-1 decoration-2 underline-offset-8",
                                    activeLink === navigationLink
                                        ? "text-primary-100 underline"
                                        : "transition hover:text-primary-100 hover:underline"
                                )}
                            >
                                {t(navigationLink)}
                            </NextLink>
                        </li>
                    ))}
                </ul>

                <div className="group relative inline-block">
                    <span
                        className="inline-block cursor-not-allowed rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium opacity-70"
                        aria-disabled="true"
                        title={t("resumeUnavailable")}
                    >
                        {t("resume")}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary-100 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {t("resumeUnavailable")}
                    </span>
                </div>
            </div>
        </nav>
    );
}
