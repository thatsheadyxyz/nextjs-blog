import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Declan</strong>. I'm a creative developer with an interest in web technologies & computer graphics.
        <br></br>
        Find me on <a href="https://twitter.com/DeclanTweetz">Twitter</a> & <a href="https://github.com/thatsheadyxyz">Github</a>
        </p>
        <p>
          This blog was made using <a href='https://nextjs.org/' target="_blank">Next.Js</a>, a next-gen framework for React applications, and hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Midjourney Art</h2>
      </section>
    </Layout>
  );
}