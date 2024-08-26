import React, { useState } from 'react';
import { Post } from '../../../types/types';

interface PostFormProps {
  postToEdit?: Post; // postToEdit가 있을 수도 있고 없을 수도 있음
  onSave: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ postToEdit, onSave }) => {
  const [title, setTitle] = useState(postToEdit?.title || '');
  const [content, setContent] = useState(postToEdit?.content || '');
  const [author, setAuthor] = useState(postToEdit?.author || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      id: postToEdit?.id || Date.now(), // 새로운 포스트를 생성할 때 ID를 현재 시간으로 설정
      title,
      content,
      author,
      createdAt: new Date(), // 현재 날짜로 설정
    };
    onSave(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-blue-400'>{postToEdit ? 'Edit Post' : 'New Post'}</h2>
      <div className='bg-white p-4 rounded'>
        <label className='text-black block mb-2'>Title:</label> {/* 텍스트 색상 흰색으로 변경 */}
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='bg-slate-500 text-white p-2 rounded w-full'
        />
      </div>
      <div className='bg-white p-4 rounded mt-4'>
        <label className='text-black block mb-2'>Content:</label> {/* 텍스트 색상 흰색으로 변경 */}
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className='bg-slate-500 text-white p-2 rounded w-full'
          rows={4}
        />
      </div>
      <div className='bg-white p-4 rounded mt-4'>
        <label className='text-black block mb-2'>Author:</label> {/* 텍스트 색상 흰색으로 변경 */}
        <input
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className='bg-slate-500 text-black p-2 rounded w-full'
        />
      </div>
      <button type="submit" className='bg-slate-400 text-black p-2 rounded mt-4'>
        Save
      </button>
    </form>
  );
};

export default PostForm;
