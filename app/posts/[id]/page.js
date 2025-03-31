import {posts} from "../../data/posts"
import styles from "./Post.module.css"
import Layout from "../../navigation"

function Post({params}) {
    const post = posts.find((post) => post.id === params.id);

    if(!post) {
        return <h1>Post not found!!</h1>
    }

  return (
    <Layout>
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Post Title: {post.title}</h1>
        </div>
        <div className={styles.content}>
            <h2>Post Content: {post.content}</h2>
        </div>
    </div>
    </Layout>
  )
}

export default Post