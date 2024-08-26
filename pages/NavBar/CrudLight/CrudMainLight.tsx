import React, { useState } from 'react';
import PostList from './PostListLight';
import PostForm from './PostFormLight';
import { Post } from '../../../types/types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined); // 초기값을 undefined로 설정

  const addOrUpdatePost = (post: Post) => {
    if (editingPost) {
      setPosts(posts.map(p => (p.id === post.id ? post : p)));
      setEditingPost(undefined); // undefined로 변경
    } else {
      setPosts([...posts, post]);
    }
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const editPost = (post: Post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black">게시판</h2>
      <PostForm postToEdit={editingPost} onSave={addOrUpdatePost} />
      <PostList posts={posts} onDelete={deletePost} onEdit={editPost} />
    </div>
  );
};

export default App;
