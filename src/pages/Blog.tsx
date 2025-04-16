import React from 'react';
import { Calendar, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Evolution of Sneaker Culture',
    excerpt: 'From athletic wear to fashion statements, explore the journey of sneakers through decades.',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c',
    author: 'Sarah Johnson',
    date: '2024-02-20',
    category: 'Culture'
  },
  {
    id: 2,
    title: 'Sustainable Sneakers: The Future of Footwear',
    excerpt: 'How eco-friendly materials are revolutionizing sneaker manufacturing.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    author: 'Mike Chen',
    date: '2024-02-18',
    category: 'Innovation'
  },
  {
    id: 3,
    title: 'Custom Sneakers: Express Your Identity',
    excerpt: 'The rise of personalized sneakers and what it means for self-expression.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    author: 'Alex Rivera',
    date: '2024-02-15',
    category: 'Design'
  }
];

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Sneaker Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative pb-[60%]">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="inline-flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </span>
                <span className="inline-flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {post.category}
                </span>
                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}