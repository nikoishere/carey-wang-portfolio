import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*"
        },
        sitemap: "https://carey.wang/sitemap.xml",
        host: "https://carey.wang"
    };
}
