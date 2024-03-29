import classnames from 'classnames';
import React from 'react';

import styles from './styles.css';

/**
 * @name <%= name %>
 * @description Stateless Component / Pure Function
 */
export const <%= name %> = (props) => {
  const { className } = props;
  const classes = classnames(styles.component, className);

  return (
    <div className={classes}>
      <h2><%= name %></h2>
    </div>
  );
};

export <%= name %>.defaultProps = {
  className: ''
};
