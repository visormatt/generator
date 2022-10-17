import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.css';

export interface <%= name %>Props {
  className?: string;
}

/**
 * @name <%= name %>
 * @description Stateless Component / Pure Function
 */
export const <%= name %> = (props: <%= name %>Props) => {
  const { className } = props;
  const classes = classnames(styles.component, className);

  return (
    <div className={classes}>
      <h2><%= name %></h2>
    </div>
  );
};
