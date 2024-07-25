import styles from './page.module.css';
import { getSortedPostsData } from 'lib/post';
import Link from 'next/link';

export default async function Home() {
  return <div>HomePage</div>;
  // const allPostsData = await getSortedPostsData();
  // return (
  //   <div className={styles.container}>
  //     <section className={styles.headingMd}>
  //       <p>[Seiyeon Introduction]</p>
  //       <p>(This is a website)</p>
  //     </section>
  //     <section className={`${styles.headingMd} ${styles.padding1px}`}>
  //       <h2 className={styles.headingLg}>Blog</h2>
  //       <ul className={styles.list}>
  //         {allPostsData.map(({ id, title, date }) => (
  //           <li className={styles.listItem} key={id}>
  //             <Link href={`/posts/${id}`}>{title}</Link>
  //             <br />
  //             <small className={styles.lightText}>{date}</small>
  //           </li>
  //         ))}
  //       </ul>
  //     </section>
  //   </div>
  // );
}
