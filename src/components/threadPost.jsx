import { Heart, MessageCircle, Repeat2, Eye } from 'lucide-react';

const ThreadPost = ({ post }) => {
  return (
    <div className="thread-post">
      <div className="post-header">
        <img src={post.user.avatar} alt="User Avatar" className="avatar" />
        <div className="post-info">
          <span className="username">@{post.user.username}</span>
          <span className="time"> • {post.user.time}</span>
        </div>
      </div>
      <p className="post-text">{post.content}</p>
      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt="Post Media" className="post-image" />
        </div>
      )}
      <div className="post-actions">
        <span><Heart /> {""} {post.likes}</span>
        <span><MessageCircle /> {""} {post.comments}</span>
        <span><Repeat2 /> {""} {post.reposts}</span>
        <span><Eye /> {""} {post.views}</span>
      </div>
    </div>
  );
};

export default ThreadPost;