// Vendor
import * as enzyme from 'enzyme';
import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';

// Internal
import { <%= customName %>, <%= customName %>Props } from '../index';

enzyme.configure({
  adapter: new Adapter()
});

describe('<%= customName %>', () => {
  let props: <%= customName %>Props;
  let wrapper: any;

  beforeEach(() => {
    props = {
      className: ''
    };

    wrapper = enzyme.shallow(<<%= customName %> {...props} />);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
