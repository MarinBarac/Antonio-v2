import ProjectsList from '@modules/projects/ProjectsList';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = () => {
    return <section className='section'>
        <div className={styles.content}>
            <ProjectsList />
        </div>
    </section>
}

export default ProjectsSection;