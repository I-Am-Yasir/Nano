import React from 'react';

const Blog = () => {
  return (
    <>
      <div className="blog px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl pb-3">Our Blogs</h1>
          <p className="text-base md:text-lg">Read, Learn, Evolve with Insights in Tech.</p>
        </div>

        <div className="blog-grid-cards grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
          {/* Blog Card 1 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog1.jpg" alt="Blog 1" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>

          {/* Blog Card 2 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog2.jpg" alt="Blog 2" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>

          {/* Blog Card 3 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog3.jpg" alt="Blog 3" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>

          {/* Blog Card 4 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog4.jpg" alt="Blog 4" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>

          {/* Blog Card 5 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog5.jpg" alt="Blog 5" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>

          {/* Blog Card 6 */}
          <div className="blog-card p-4 mb-6 border rounded-lg w-full max-w-[400px] h-auto">
            <img className="object-cover w-full h-[200px] rounded-md" src="/blog6.jpg" alt="Blog 6" />
            <h2 className="font-bold text-xl mt-4">Generative API: 3 AI Foundational Models You Must Know About</h2>
            <button className="mt-4 text-blue-500 hover:underline">Read More ➡</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
