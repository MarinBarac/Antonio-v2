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
        href: '/',
        label: 'LinkedIn',
        Icon: LinkedInIcon,
        target: "_blank",
    },
    {
        href: '/',
        label: 'Dribble',
        Icon: DribbleIcon,
        target: "_blank",
    },
    {
        href: '/',
        label: 'Medium',
        Icon: MediumIcon,
        target: "_blank",
    }
]