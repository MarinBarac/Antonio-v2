const { HomeIcon, ServicesIcon, UserIcon, ContactIcon, LinkedInIcon, DribbleIcon, MediumIcon } = require("@components/icons");

export const PAGE_LINKS = [
    {
        href: '/',
        label: 'Home',
        Icon: HomeIcon,
    },
    {
        href: '/services',
        label: 'Services',
        Icon: ServicesIcon,
    },
    {
        href: '/projects',
        label: 'Projects',
        Icon: HomeIcon,
    },
    {
        href: '/about',
        label: 'About',
        Icon: UserIcon,
    },
    {
        href: '/contact',
        label: 'Contact',
        Icon: ContactIcon,
    }
];

export const SOCIAL_MEDIA = [
    {
        href: '/',
        label: 'LinkedIn',
        Icon: LinkedInIcon
    },
    {
        href: '/',
        label: 'Dribble',
        Icon: DribbleIcon
    },
    {
        href: '/',
        label: 'Medium',
        Icon: MediumIcon
    }
]