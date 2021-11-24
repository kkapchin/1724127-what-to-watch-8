import { connect, ConnectedProps } from 'react-redux';
import { Tab } from '../../const';
import { State } from '../../types/state';
import Reviews from './reviews';

const MAX_LENGTH = 3;
const START = 0;

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

  const commentsCopy = comments.slice();
  const parsedComments = new Array(Math.ceil(comments.length / MAX_LENGTH)).fill(null).map(() => commentsCopy.splice(START, MAX_LENGTH));

  return (
    <div className="film-card__reviews film-card__row">
      {parsedComments.map((element) => <Reviews key={parsedComments.indexOf(element)} comments={element} />)}
    </div>
  );
}

export default connector(ReviewsTab);
