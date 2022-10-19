import { <%= name %> } from '../<%= name %>';

describe('<%= name %>', () => {
  let props;
  let wrapper;

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
