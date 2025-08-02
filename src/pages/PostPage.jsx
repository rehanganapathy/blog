// src/pages/PostPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntries({
                content_type: 'blogPost',
                'fields.slug': slug,
                limit: 1,
            })
            .then((res) => {
                if (res.items.length > 0) {
                    setPost(res.items[0].fields);
                } else {
                    setPost(null);
                }
            })
            .catch(console.error);
    }, [slug]);

    if (!post) {
        return <div className="pt-32 px-6 text-center">Loading or not found...</div>;
    }

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-4xl font-light text-neutral-800 mb-8 tracking-tight">
                    {post.title}
                </h1>

                {/* Optional Date and Read Time */}
                {/* <p className="text-sm text-neutral-500 mb-4">
          {post.date} · {post.readTime} read
        </p> */}

                <div className="prose prose-neutral max-w-none">
                    {documentToReactComponents(post.content)}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
