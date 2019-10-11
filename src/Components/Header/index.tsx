import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../Store';
import { toggleFilterMenu } from '../../Store/ShowFilterMenu/actions';
import Searchbar from './Searchbar';

import './index.css';

interface HeaderProps {
  showFilterMenu: boolean;
  toggleFilterMenu: typeof toggleFilterMenu;
}

const Header: React.FC<HeaderProps> = ({
  showFilterMenu,
  toggleFilterMenu
}) => {
  const onFilterClick = () => {
    toggleFilterMenu(!showFilterMenu);
  };

  return (
    <header className="header-container">
      <div className="header-title">SAQ</div>
      <Searchbar />
      <div className="header-filter-button" onClick={onFilterClick}>
        <div className="filter-open"></div>
      </div>
    </header>
  );
};

const mapStateToProps = (state: AppState) => ({
  showFilterMenu: state.showFilterMenu.enabled
});

export default connect(
  mapStateToProps,
  { toggleFilterMenu }
)(Header);
