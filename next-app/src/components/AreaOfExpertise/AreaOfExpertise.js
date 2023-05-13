import styles from './AreaOfExpertise.module.scss';
import ListSection from '@components/ListSection';
import { AREAS } from './constants';

const AreaOfExpertise = ({ title, titleClass }) => {
    return <section className='section'>
        <h2 className={`${styles.title} ${styles[titleClass] || ''}`}>{title}</h2>
        <ListSection list={AREAS}/>
    </section>
}

export default AreaOfExpertise;