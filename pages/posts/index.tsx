import Link from "next/link";

export default function index({ posts }) {
  return (
    <div>
      <h2>Posts API</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
