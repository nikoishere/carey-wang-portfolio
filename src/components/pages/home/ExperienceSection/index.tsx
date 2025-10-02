"use client";

import { useTranslations } from "next-intl";

// Helper function to render text with highlighted tech terms and bold section titles
const renderTextWithTechHighlight = (text: string) => {
    // First split by tech terms (**text**)
    const techParts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return techParts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const techTerm = part.slice(2, -2);
            return (
                <strong key={index} className="text-primary-200">
                    {techTerm}
                </strong>
            );
        }
        
        // Then split by section titles (text:)
        const sectionParts = part.split(/([^:]+:)/g);
        return sectionParts.map((sectionPart, sectionIndex) => {
            if (sectionPart.endsWith(':')) {
                return (
                    <strong key={`${index}-${sectionIndex}`}>
                        {sectionPart}
                    </strong>
                );
            }
            return sectionPart;
        });
    });
};

export default function ExperienceSection() {
    const t = useTranslations("Home.ExperienceSection");

    return (
        <section className="section-height bg-primary-400 bg-noise" id="experience">
            <div className="container py-12 lg:py-20">
                <h2 className="text-3xl font-bold md:text-6xl mb-12">
                    {t("title")}
                </h2>

                <div className="grid gap-12">
                    {/* SubMarts Experience */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold">
                                    {t("submarts.title")}
                                </h3>
                                <p className="text-lg font-semibold">
                                    {t("submarts.duration")}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-lg font-semibold">
                                    {t("submarts.company")}
                                </p>
                                <p className="text-lg font-semibold">
                                    {t("submarts.location")}
                                </p>
                            </div>
                            <p className="italic">
                                {t("submarts.description")}
                            </p>
                        </div>
                        
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("submarts.order-management"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("submarts.notification-service"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("submarts.third-party-integration"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("submarts.api-development"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("submarts.cloud-infrastructure"))}
                            </li>
                        </ul>
                    </div>

                    {/* UCI Experience */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold">
                                    {t("uci.title")}
                                </h3>
                                <p className="text-lg font-semibold">
                                    {t("uci.duration")}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-lg font-semibold">
                                    {t("uci.department")}
                                </p>
                                <p className="text-lg font-semibold">
                                    {t("uci.location")}
                                </p>
                            </div>
                            <p className="italic">
                                {t("uci.description")}
                            </p>
                        </div>
                        
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("uci.system-integration"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("uci.workflow-automation"))}
                            </li>
                            <li>
                                <strong className="text-primary-200">•</strong> {renderTextWithTechHighlight(t("uci.debugging-framework"))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}