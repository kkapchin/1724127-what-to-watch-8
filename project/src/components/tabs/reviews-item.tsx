import { Comment } from '../../types/comment-get';
import { changeNumberFormat } from '../../utils';

type ReviewsItemProps = {
  comment: Comment,
}

function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{changeNumberFormat(comment.rating)}</div>
    </div>
  );
}

export default ReviewsItem;
