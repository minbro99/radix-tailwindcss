import React from 'react';
import { Post } from '../../../types/types';

interface PostListProps {
  posts: Post[];
  onDelete: (id: number) => void;
  onEdit: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete, onEdit }) => {
  return (
    <div>
      <h2 className="text-white">Posts</h2> {/* 제목 색상을 하얀색으로 변경 */}
      {posts.map(post => (
        <div key={post.id} className='border-2 border-rose-500 m-2.5 p-2.5'>
          <h3 className="text-black">{post.title}</h3> {/* 제목 색상을 하얀색으로 변경 */}
          <p className="text-black">{post.content}</p> {/* 내용 색상을 하얀색으로 변경 */}
          <div className='text-black'>
            <p><i>By {post.author} on {post.createdAt.toLocaleString()}</i></p>
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" 
              onClick={() => onEdit(post)}
            >
              Edit
            </button>
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" 
              onClick={() => onDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
