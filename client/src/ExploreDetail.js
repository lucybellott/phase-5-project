import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import './ExploreDetail.css';

export default function ExploreDetail({ posts, currentUser }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState('');

  const singlePost = posts.filter((post) => post.id == id);

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then((resp) => resp.json())
      .then((data) => setComments(data));
  }, []);

  const filteredComments = comments.filter((comment) => {
    return comment.post.id == id;
  });

  const displayComment = (newComment) => {
    let commentArray = [...comments, newComment];
    return setComments(commentArray);
  };

  function handleDeleteComment(deleteId) {
    fetch(`http://localhost:3000/comments/${deleteId}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(() => {
        let updatedComments = comments.filter((comment) => comment.id !== deleteId);
        setComments(updatedComments);
      });
  }

  const commentsArray = filteredComments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        {...comment}
        currentUser={currentUser}
        handleDeleteComment={handleDeleteComment}
      />
    );
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    let commentData = {
      post_id: id,
      user_id: currentUser.id,
      content: addComment
    };

    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then((res) => res.json())
      .then((singleComment) => displayComment(singleComment));

    setAddComment('');
  };

  const handleComment = (e) => {
    setAddComment(e.target.value);
  };

  return (
    <div>
      <h1 className="page-title">The Fake News Buster</h1>
      <div className="card" id="explore-card">
        <div>
          {singlePost.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <br />
              <img alt="user" className="post-image" src={post.image} />
              <br />
              <br />
              <br />
              <div className="post-content">
                <h5 className="claim-heading">Claim:</h5>
                <p>{post.claim}</p>
                <h5 className="fact-heading">Fact:</h5>
                <p>{post.fact}</p>
                <a className="source-link" href={post.source_link} target="_blank" rel="noreferrer">
                  Source Link
                </a>
                <br />
              </div>
              <p className="posted-by">Posted by:</p>
              <img
                alt="user"
                className="user-image"
                src={post.user.image}
              />
              <small className="user-name">{post.user.name}</small>
            </div>
          ))}
        </div>
        <div className="comments-section">
          <h5 className="comments-heading">Comments:</h5>
          <ul className="comments-list">{commentsArray}</ul>
          {currentUser ? (
            <div className="form-inputs">
              <form onSubmit={handleCommentSubmit}>
                <input
                  className="comment-input"
                  onChange={handleComment}
                  value={addComment}
                  type="text"
                  placeholder="Add a comment"
                />
                <br />
                <button className="comment-submit-btn" type="submit">
                  Submit
                </button>
              </form>
              <br />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
