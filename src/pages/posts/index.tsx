import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'publication')],
    { fetch: ['publication.title', 'publication.content'], pageSize: 100 }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
