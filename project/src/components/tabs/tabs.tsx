import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { Tab, tabs } from '../../const';
import { getComments } from '../../store/action';
import { Actions } from '../../types/action';
import { Film } from '../../types/films';
import DetailsTab from './details-tab';
import NavbarItem from './navbar-item';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  setComments: (id: number) => dispatch(getComments(id)),
});

const connector = connect(null, mapDispatchToProps);

type propsFromRedux = ConnectedProps<typeof connector>;

type TabsProps = {
  film: Film,
}

type ConnectedComponentProps = TabsProps & propsFromRedux;

function Tabs({ film, setComments }: ConnectedComponentProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Tab.Default);
  useEffect(() => {
    if (activeTab === Tab.Reviews) {
      setComments(film.id);
    }
  }, [activeTab, film.id, setComments]);

  const isActive = (tab: Tab) => tab === activeTab;

  const onNavbarItemClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => <NavbarItem key={tab} tabName={tab} onNavbarItemClick={onNavbarItemClick} isActive={isActive} />)}
        </ul>
      </nav>

      <OverviewTab film={film} activeTab={activeTab} />
      <DetailsTab film={film} activeTab={activeTab} />
      <ReviewsTab activeTab={activeTab} />
    </>
  );
}

export default connector(Tabs);
