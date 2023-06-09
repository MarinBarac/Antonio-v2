import Button from "@components/Button";
import ListSection from "@components/ListSection";
import SectionTitle from "@components/SectionTitle/SectionTitle";

import styles from "./WorkSection.module.scss";
import { getLatesProjectPreviews } from "@services/contentful";
import Link from "next/link";

const WorkSection = async () => {
  const projects = await getLatesProjectPreviews();
  const projectsList = projects.map((project) => ({
    image: project.previewImage,
    title: project.projectName,
    description: project.description,
    slug: project.slug,
  }));

  return (
    <section className={`section ${styles.container}`}>
      <SectionTitle
        title="Work"
        description="Explore some of the work that I did and which I can share while not breaking an NDA."
        titleStyle={{ fontSize: "32px" }}
      />
      <ListSection list={projectsList} />
      <Link href="/projects"><Button>See more</Button></Link>
    </section>
  );
};

export default WorkSection;
