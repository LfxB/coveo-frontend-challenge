import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Loading from '../Components/Loading';

// Loading tests
describe('Loading.tsx', () => {
  let wrapper: ShallowWrapper<React.FC<any>>;

  beforeEach(() => {
    wrapper = shallow(<Loading fullScreen={false} />);
  });

  it('Renders the app and matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Does not have loading-fullscreen class', async () => {
    wrapper = shallow(<Loading fullScreen={false} />);
    expect(wrapper.find('.loading-fullscreen').length).toBe(0);
  });
});
