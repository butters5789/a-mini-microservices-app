import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async (id) => {
    const res = await axios.get(
      `http://localhost:4001/posts/${id}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentCreate;
