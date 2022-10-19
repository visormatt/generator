import * as enzyme from 'enzyme';
import * as React from 'react';

import { <%= name %>, <%= name %>Props } from '../<%= name %>';

describe('<%= name %>', () => {
  let props: <%= name %>Props;
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
