"use client";

import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon } from "@src/icons";

export default function Footer() {
    return (
        <footer className="h-footer flex cursor-default items-center bg-primary-300 text-white">
            <div className="container flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                    <NextLink
                        href="https://github.com/nikoishere"
                        title="Github"
                    >
                        <GithubIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                    <NextLink
                        href="https://www.linkedin.com/in/careysde/"
                        title="Linkedin"
                    >
                        <LinkedinIcon className="h-8 w-8 fill-white transition hover:fill-primary-100" />
                    </NextLink>
                </div>
                <p className="hidden sm:inline-block">
                    © {new Date().getFullYear()} Carey Wang
                </p>
            </div>
        </footer>
    );
}
