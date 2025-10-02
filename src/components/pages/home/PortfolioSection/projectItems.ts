export type Category = "backend" | "fullstack" | "mobile";

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    websiteLink: string;
    sourceLink: string;
    techStacks: string[];
    showSourceCode?: boolean; // Optional property to control source code button visibility
    showWebsite?: boolean; // Optional property to control website button visibility
};

export const projectItems = {
    backend: [
        {
            id: "promomall",
            title: "PromoMall Lottery Platform",
            description:
                "A high-concurrency marketing lottery platform built with Java, Spring Boot, Redis, RocketMQ, and ElasticSearch. Designed rule-engine microservices and implemented Redis-based sliding-block locks to ensure consistency under thousands of concurrent requests.",
            websiteLink: "https://github.com/carey-wang/promomall",
            sourceLink: "https://github.com/carey-wang/promomall",
            techStacks: ["Java", "Spring Boot", "Redis", "RocketMQ", "ElasticSearch"],
            showSourceCode: false,
            showWebsite: false
        },
        {
            id: "submarts",
            title: "SubMarts Subscription Commerce",
            description:
                "Built a subscription commerce platform with automated Stripe billing, order lifecycle management, and real-time notifications using Redis Streams and WebSockets. Reduced manual reconciliation by 85% through backend automation.",
            websiteLink: "https://github.com/carey-wang/submarts",
            sourceLink: "https://github.com/carey-wang/submarts",
            techStacks: ["Java", "Spring Boot", "Stripe", "Redis", "Docker"],
            showSourceCode: false,
            showWebsite: false
        },
        {
            id: "ai-agent",
            title: "AI Agent Orchestration Platform",
            description:
                "An orchestration system for AI agents using Spring Boot, MyBatis, Redis, and PGVector. Supports RAG knowledge bases, prompt orchestration, and hot-deploy low-code visual flows.",
            websiteLink: "https://github.com/carey-wang/ai-agent",
            sourceLink: "https://github.com/carey-wang/ai-agent",
            techStacks: ["Java", "Spring Boot", "PGVector", "Redis", "Docker"],
            showSourceCode: false,
            showWebsite: false
        }
    ],
    fullstack: [
        {
            id: "food-ordering",
            title: "Online Food Ordering Platform",
            description:
                "An online food ordering system similar to DoorDash, built with Spring MVC, Hibernate, and React. Features product management, order tracking, and secure login with Spring Security.",
            websiteLink: "https://github.com/carey-wang/food-ordering",
            sourceLink: "https://github.com/carey-wang/food-ordering",
            techStacks: ["ReactJS", "Spring MVC", "Hibernate", "Spring Security"],
            showSourceCode: false,
            showWebsite: false
        }
    ],
    mobile: [
        {
            id: "music-player",
            title: "Music Player App",
            description:
                "A Spotify-like Android music player built with Kotlin and MVVM architecture. Supports offline playback, playlist management, and a smooth UI powered by ExoPlayer.",
            websiteLink: "https://github.com/carey-wang/music-player",
            sourceLink: "https://github.com/carey-wang/music-player",
            techStacks: ["Kotlin", "MVVM", "Room", "ExoPlayer", "Hilt"],
            showSourceCode: false,
            showWebsite: false
        }
    ]
} satisfies Record<Category, ProjectItem[]>;