import MedicalApp from '@assets/images/projects/medical-app.png';
import Flixbus from '@assets/images/projects/flixbus.png';
import Foodrect from '@assets/images/projects/foodrect.png';

import UxUi from '@assets/images/services/ux-ui.png';
import Consulting from '@assets/images/services/consulting.png';
import OneOnOne from '@assets/images/services/one-on-one.png';

export const LISTS = {
    projects: [
        {
            image: MedicalApp,
            title: 'Medical app',
            description: <>Application for pre and post-operational processes for patients to help them from an informational standpoint.</>
        },
        {
            image: Flixbus,
            title: 'FlixBus - Check out process',
            description: <>Worked on improving the checkout experience for one of the largest bus service companies.</>
        },
        {
            image: Foodrect,
            title: 'iOS Recipe App - Foodrec',
            description: <>Modern and clean concept of recipe app that tries to solve the main problem for most people: lack of idea for healthy food.</>
        }
    ],
    services: [
        {
            image: UxUi,
            title: 'UX/UI design work',
            price: 45,
            description: <>Open for contract based project for long and short term.</>
        },
        {
            image: Consulting,
            title: 'Consulting services - UX/UI',
            price: 100,
            description: <>Design systems, User experience, User flows,<br />User interface design</>
        },
        {
            image: OneOnOne,
            title: '1-on-1 training',
            price: 100,
            description: <>UX/UI in general, Figma,<br />Design systems</>
        },
    ]
}