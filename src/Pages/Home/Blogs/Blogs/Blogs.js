import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(result => setBlogPosts(result))
    }, [])
    return (
        <div className="m-10">
            <h3 className="text-3xl font-bold text-[#2878EB]">BLOG POST</h3>
            <h3 className="text-5xl font-bold mt-5">Latest Articles From Our <br />Blog Post</h3>
            <div className="m-5 p-5  grid sm:grid-cols-1 lg:grid-cols-2">
                {
                    blogPosts.map(blogPost => <Blog
                        key={blogPost._id}
                        blogPost={blogPost}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;