import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ResultItem from '../Components/SearchMain/SearchResults/ResultItem';

// Result Item tests
describe('ResultItem.tsx', () => {
  let wrapper: ShallowWrapper<React.FC<any>>;

  beforeEach(() => {
    wrapper = shallow(
      <ResultItem
        title={'test'}
        uri={'www.google.com'}
        pays={'Canada'}
        categorie={'category'}
        thumbnailuri={'thumbworld.com'}
        prixnum={123}
      />
    );
  });

  it('Renders the app and matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Displays the correct price', async () => {
    expect(wrapper.find('.results-pays-prix').text()).toEqual('Canada $123.00');
  });
});
