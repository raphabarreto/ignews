import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>28 de abril de 2021</time>
            <strong>Creating a monorepo</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe culpa delectus debitis doloremque fugiat tempore cupiditate
              aspernatur laboriosam perspiciatis unde quo consectetur tenetur
              corporis recusandae nisi, labore beatae. Ad!
            </p>
          </a>
          <a href="#">
            <time>28 de abril de 2021</time>
            <strong>Creating a monorepo</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe culpa delectus debitis doloremque fugiat tempore cupiditate
              aspernatur laboriosam perspiciatis unde quo consectetur tenetur
              corporis recusandae nisi, labore beatae. Ad!
            </p>
          </a>
          <a href="">
            <time>28 de abril de 2021</time>
            <strong>Creating a monorepo</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              saepe culpa delectus debitis doloremque fugiat tempore cupiditate
              aspernatur laboriosam perspiciatis unde quo consectetur tenetur
              corporis recusandae nisi, labore beatae. Ad!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
