import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

// Fetch necessary data for the post with id
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// return an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        // paths contains the array of known paths returned by getAllPostIds()
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }