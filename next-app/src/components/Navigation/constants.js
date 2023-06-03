const { HomeIcon, ServicesIcon, UserIcon, ContactIcon, LinkedInIcon, DribbleIcon, MediumIcon } = require("@components/icons");

export const PAGE_LINKS = [
    {
        href: '',
        label: 'Home',
        Icon: HomeIcon,
    },
    {
        href: 'services',
        label: 'Services',
        Icon: ServicesIcon,
    },
    {
        href: 'projects',
        label: 'Projects',
        Icon: HomeIcon,
    },
    {
        href: 'about',
        label: 'About',
        Icon: UserIcon,
    },
    {
        href: 'contact',
        label: 'Contact',
        Icon: ContactIcon,
    }
];

export const SOCIAL_MEDIA = [
    {
        href: 'https://www.linkedin.com/in/antonio-vidakovi%C4%87-331930125',
        label: 'LinkedIn',
        Icon: LinkedInIcon,
        target: "_blank",
    },
    {
        href: 'https://dribbble.com/vida994',
        label: 'Dribbble',
        Icon: DribbleIcon,
        target: "_blank",
    },
    {
        href: 'https://medium.com/@avidakovic14',
        label: 'Medium',
        Icon: MediumIcon,
        target: "_blank",
    }
]