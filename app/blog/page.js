//index.js in /pages/blog
import React from 'react';
import Navbar from '../NavBar';

const BlogPage = () => {
  // You can fetch your blog posts or any relevant data here

  return (
    <div>
      <Navbar />
      <h1>Dawg with a Blog</h1>
      {/* Add your blog content here */}
    </div>
  );
};

export default BlogPage;
