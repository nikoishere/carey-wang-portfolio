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
            id: "uci-its-rca",
            title: "ActivitySim RCA & RAG Agent",
            description:
                "An AI-powered root cause analysis tool for failed ActivitySim transportation simulations. Uses a memory-safe reverse-chunk log parser, GPT-4o Structured Outputs, and a RAG knowledge base backed by pgvector on PostgreSQL and Amazon S3 to produce concise, cited root cause reports. Features rate limiting, exponential-backoff retries, and per-call cost metrics for production use on shared lab machines.",
            websiteLink: "https://github.com/nikoishere/uci-its-rca",
            sourceLink: "https://github.com/nikoishere/uci-its-rca",
            techStacks: ["Python", "GPT-4o", "pgvector", "PostgreSQL", "Amazon S3", "Docker"],
            showSourceCode: true,
            showWebsite: false
        },
        {
            id: "ai-orchestrator",
            title: "AI-Powered Software Development Orchestrator",
            description: "Developed a multi-agent AI system capable of automating the full software development lifecycle (SDLC), utilizing Model Context Protocol (MCP) and Google Gemini 2.5 models. Features an interactive Gradio web interface for iterative review and automatically generates comprehensive unit and integration tests.",
            websiteLink: "https://github.com/kennygchen/BudgetMaster",
            sourceLink: "https://github.com/kennygchen/BudgetMaster",
            techStacks: ["Python", "Gemini API", "MCP", "Gradio", "Node.js", "Docker"],
            showSourceCode: true,
            showWebsite: false
        },
        {
            id: "promomall",
            title: "PromoMall Lottery Platform",
            description:
                "A high-concurrency marketing lottery platform built with Java, Spring Boot, Redis, RocketMQ, and ElasticSearch. Designed rule-engine microservices and implemented Redis-based sliding-block locks to ensure consistency under thousands of concurrent requests.",
            websiteLink: "https://github.com/nikoishere/PromoMall",
            sourceLink: "https://github.com/nikoishere/PromoMall",
            techStacks: ["Java", "Spring Boot", "Redis", "Kafka", "ElasticSearch"],
            showSourceCode: true,
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
        },
        {
            id: "summailize",
            title: "Summailize - Gmail AI Summarizer Agent",
            description:
                "A lightweight AI agent that automatically summarizes Gmail messages into short, actionable insights. Built as a Chrome Extension with Flask backend, featuring Azure OpenAI integration, Firebase storage, and timezone-aware background scheduling for autonomous email processing.",
            websiteLink: "https://github.com/lydia-yan/Summailize",
            sourceLink: "https://github.com/lydia-yan/Summailize",
            techStacks: ["Python", "Flask", "Azure OpenAI", "Firebase", "React", "Chrome Extension"],
            showSourceCode: true,
            showWebsite: false
        }
    ],
    fullstack: [
        {
            id: "portfolio-website",
            title: "Personal Portfolio Website",
            description:
                "A modern, responsive portfolio website showcasing my projects, experience, and skills. Built with Next.js, React, TypeScript, and Tailwind CSS. Features interactive sections, smooth animations, and mobile-first design.",
            websiteLink: "https://carey.wang",
            sourceLink: "https://github.com/nikoishere/carey-wang-portfolio",
            techStacks: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
            showSourceCode: true,
            showWebsite: true
        },
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