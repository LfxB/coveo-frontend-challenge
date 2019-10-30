import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Components/Header';

describe('Header.tsx', () => {
  let store: any;
  let normalQuery: any;
  let showFilterMenu: any;
  let wrapper: ShallowWrapper<React.FC<any>>;

  beforeEach(() => {
    const buildStore = configureStore();
    showFilterMenu = { enabled: false };
    normalQuery = { query: 'Curator' };

    store = buildStore({
      showFilterMenu,
      normalQuery
    });

    wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it('Renders the header and matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
