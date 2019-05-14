// Vendor
import * as React from 'react';

// Internal
import { <%= name %>, <%= name %>Props } from '../<%= name %>';

describe('<%= name %>', () => {
  let props: <%= name %>Props;
  let wrapper: any;

  beforeEach(() => {
    props = {};
    wrapper = shallow(<<%= name %> {...props} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
