import * as React from 'react';
import { withReadme } from 'storybook-readme';

import readme from '../README.md';
import { <%= customName %>, <%= customName %>Enum } from './index';
import { name } from '../package.json';

const story = (stories: any) => {
  const demo = () => <<%= customName %> />;

  stories.addWithJSX(name, withReadme(readme, demo));
};

export default story;
