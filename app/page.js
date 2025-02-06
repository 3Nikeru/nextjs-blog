import Image from 'next/image';
import styles from './home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, consectetur eius ut ab debitis nostrum deserunt facilis ullam!</p>
        <div className={styles.buttons}>
          <Link href='/blog/' className={styles.button}>Learn More</Link>
          <Link href='/contact/' className={styles.button}>Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image 
            src='/brands.png'
            alt='brands'
            className={styles.brandImg}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
          <Image
            src='/hero.gif'
            alt='hero'
            fill
            className={styles.heroImg}
            unoptimized
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
      </div>
    </div>
  );
}

