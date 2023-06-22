import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { searchAboutMovie } from 'services/MovieApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getRewiews = async () => {
      await searchAboutMovie(movieId, 'reviews')
        .then(data => setReviews(data.results))
        .catch(error => console.log(error.message));
    };
    getRewiews();
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>We dont have any reviews for this movie</p>;
  }
  return (
    <div>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <p>Author:{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
