import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { FilterGroup } from '../Components/SearchMain/Filterbar/FilterGroup';

// FilterGroup tests
describe('FilterGroup.tsx', () => {
  let wrapper: ShallowWrapper<React.FC<any>>;
  const updateAdvancedQuery = jest.fn();
  const removeAdvancedQuery = jest.fn();
  const updateFirstResult = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <FilterGroup
        title="Categorie"
        field="tpcategorie"
        options={[
          {
            lookupValue: 'Vin blanc',
            numberOfResults: 6
          },
          {
            lookupValue: 'Vin rouge',
            numberOfResults: 8
          }
        ]}
        updateAdvancedQuery={updateAdvancedQuery}
        removeAdvancedQuery={removeAdvancedQuery}
        updateFirstResult={updateFirstResult}
      />
    );
  });

  it('Renders the app and matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Displays correct filter group information', async () => {
    const inputs = wrapper.find('input');
    const lookupValues = wrapper.find('.filter-group-option-name');
    const numResults = wrapper.find('.filter-group-option-count');

    expect(inputs.at(0).prop('name')).toBe('tpcategorie-Vin blanc');
    expect(inputs.at(1).prop('name')).toBe('tpcategorie-Vin rouge');
    expect(lookupValues.at(0).text()).toBe('Vin blanc');
    expect(numResults.at(0).text()).toBe('6');
    expect(lookupValues.at(1).text()).toBe('Vin rouge');
    expect(numResults.at(1).text()).toBe('8');
  });
});
