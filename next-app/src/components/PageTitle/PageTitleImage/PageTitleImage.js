import Image from "next/image";
import { GreenArrow } from "shared/assets/icons";
import { CvImage } from "shared/assets/images";

import styles from './PageTitleImage.module.scss';

const PageTitleImage = () => {
  console.log('Cv image: ' + CvImage.src);
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p className={styles.text}>
                Antonio
            </p>
            <GreenArrow className={styles.svg}/>
        </div>
      <Image
        alt="Antonio Vidakovic image"
        src={CvImage.src}
        width={CvImage.width}
        height={CvImage.height}
        className={styles.image}
      />
    </div>
  );
};

export default PageTitleImage;
