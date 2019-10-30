import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Searchbar } from '../Components/Header/Searchbar';

// Searchbar tests
describe('Searchbar.tsx', () => {
  let wrapper: ShallowWrapper<React.FC<any>>;
  const updateQuery = jest.fn();
  const updateFirstResult = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Searchbar
        normalQuery={{ query: 'Avalon' }}
        updateQuery={updateQuery}
        updateFirstResult={updateFirstResult}
      />
    );
  });

  it('Renders the app and matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Displays the correct query', async () => {
    expect(wrapper.find('.search-form-text').prop('value')).toEqual('Avalon');
  });
});
