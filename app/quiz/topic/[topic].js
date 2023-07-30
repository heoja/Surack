import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { topic } = router.query

  return (<p>Post: {topic}</p>)
}

export default Post