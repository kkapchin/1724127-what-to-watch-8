import { connect, ConnectedProps } from 'react-redux';
import { Tab } from '../../const';
import { State } from '../../types/state';

const mapStateToProps = ({ comments }: State) => ({
  comments,
});

const connector = connect(mapStateToProps);

type ReviewsTabProps = {
  activeTab: Tab,
}

type propsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = ReviewsTabProps & propsFromRedux;

function ReviewsTab({ activeTab, comments }: ConnectedComponentProps): JSX.Element | null {
  if (!(activeTab === Tab.Reviews) || comments.length === 0) {
    return null;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>
    </div>
  );
}

export default connector(ReviewsTab);
