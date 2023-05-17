import ServicesList from '@modules/services/ServicesList/ServicesList';
import styles from './ServicesSection.module.scss';

const ServicesSection = () => {
    return <section className={`section ${styles.container}`}>
        <h2>Services</h2>
        <ServicesList />
    </section>
}

export default ServicesSection;