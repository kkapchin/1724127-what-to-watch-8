import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Tab } from '../../const';

type NavbarItemProps = {
  tabName: string,
  onNavbarItemClick: (evt: Tab) => void,
  isActive: (tab: Tab) => boolean,
}

function NavbarItem({ tabName, onNavbarItemClick, isActive }: NavbarItemProps): JSX.Element {
  const currentTab = () => {
    switch(tabName) {
      case Tab.Details:
        return Tab.Details;
      case Tab.Reviews:
        return Tab.Reviews;
      default:
        return Tab.Default;
    }
  };

  const handleNavbarClick = (/* evt: React.MouseEvent<HTMLElement> */) => {
    onNavbarItemClick(currentTab());
  };

  return (
    <li
      className={`film-nav__item ${isActive(currentTab()) ? 'film-nav__item--active' : ''}`}
      onClick={handleNavbarClick}
    >
      <NavLink to={useHistory().location.pathname} className="film-nav__link">{tabName}</NavLink>
    </li>
  );
}

export default NavbarItem;
