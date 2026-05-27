import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/partyspatz",
        linkTitle: `Follow Patricia Elisabeth Martin on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:patriciaelisabethmar@icloud.com",
        linkTitle: `Send an email to Patricia`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=shannon",
        linkTitle: `Patricia Elisabeth Martinon Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-1825-0097",
        linkTitle: `Patricia Elisabeth Martin on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/patriciaelisabethmartin/",
        linkTitle: `Patricia Elisabeth Martin on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};