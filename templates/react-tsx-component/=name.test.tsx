// Vendor
import * as enzyme from 'enzyme';
import * as React from 'react';

// Internal
import { <%= name %> } from './<%= name %>';

describe('<%= name %>', () => {
  let props: any;
  let wrapper: any;

  beforeEach(() => {
    props = {};
    wrapper = enzyme.shallow(<<%= name %> {...props} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
