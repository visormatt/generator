import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export enum <%= customName %>Enum {
  Coral = 'coral',
  Dark = 'dark',
  Green = 'green',
  Light = 'light'
}

export interface <%= customName %>Props {
  className?: string;
}

/**
 * @name <%= customName %>
 * @description Stateless Component / Pure Function
 */
export const <%= customName %> = (props: <%= customName %>Props) => {
  const { className } = props;
  const classesComponent = classnames(styles.component, className);

  return (
    <div className={classesComponent}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
        accusantium, quod ipsum perferendis commodi fugiat architecto explicabo
        ad, rem labore accusamus tempore pariatur odit excepturi nam. Ad ullam
        vero ab?
      </p>
    </div>
  );
};
