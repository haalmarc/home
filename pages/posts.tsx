import RevealWrapper from "../components/RevealWrapper";
import SectionTitle from "../components/SectionTitle";
import styles from "../styles/Posts.module.css";

interface Post {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export const getStaticProps = async () => {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@marcushaaland`;
  const request = await fetch(url);
  const data = await request.json();
  const posts = data.items as Post[];
  return { props: { posts }, revalidate: 10 }; // Revalidate each 10 second
};

interface IProps {
  posts: Post[];
}

export default function Posts({ posts }: IProps) {
  return (
    <div className={styles.postsPage}>
      <SectionTitle title="Blogg" id="" />

      <ul>
        {posts.map((p: Post) => (
          <li key={p.link}>
            <img src={p.thumbnail} />
            <div className={styles.postText}>
              <div>
                <h2>{p.title}</h2>
                <p>{removeTags(p.description).slice(0, 200)}...</p>
              </div>
              <a href={p.link}>Les mer</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function removeTags(htmlstring: string): string {
  // Remove tags and its content
  let formattedString = htmlstring.replace(/<img .*?>/g, "");
  formattedString = formattedString.replace(/<figure.*?figure>/g, "");
  formattedString = formattedString.replace(/<h3.*?h3>/g, "");

  // Remove tags
  formattedString = formattedString.replace(/(<([^>]+)>)/gi, "");

  return formattedString;
}
