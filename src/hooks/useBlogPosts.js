// src/hooks/useBlogPosts.js
import { useEffect, useState } from 'react';
import client from '../contentful';

const useBlogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .getEntries({ content_type: 'blogPost' })
            .then((res) => {
                const mapped = res.items.map(({ sys, fields }) => ({
                    id: sys.id,
                    title: fields.title || 'Untitled',
                    slug: fields.slug || '',
                    excerpt: fields.excerpt || '', // optional fallback
                    content: fields.content || null,
                }));
                setPosts(mapped);
            })
            .catch(console.error);
    }, []);

    return posts;
};

export default useBlogPosts;
