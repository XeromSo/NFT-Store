import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { FAKE_BLOGS } from "~/store/defaults";
import BlogContainer from "~/containers/blogs/blog";
export async function loader({ params }) {
  const { blogId } = params;
  if (blogId) {
    const blog = FAKE_BLOGS.find((blog) => blog.id === Number(blogId));
    if (blog) return json(blog);
  }

  return json(null);
}
export default function SingleBlog() {
  const data = useLoaderData();
  return <BlogContainer blog={data} />;
}
