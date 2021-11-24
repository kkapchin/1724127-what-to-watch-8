import { CommentGet } from '../../types/comment-get';
import ReviewsItem from './reviews-item';

type ReviewsProps = {
  comments: CommentGet,
}

function Reviews({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {comments.map((comment) => <ReviewsItem key={comment.id} comment={comment} /> )}
    </div>
  );
}

export default Reviews;
