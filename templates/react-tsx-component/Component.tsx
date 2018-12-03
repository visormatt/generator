// Vendor
import * as React from 'react';
import classnames from 'classnames';

// CSS
import styles from './styles.css';

interface <%= name %>Props {
  className?: number;
}

/**
 * @name <%= name %>
 * @description Stateless Component / Pure Function
 */
const <%= name %>: React.SFC<<%= name %>Props> = (props) => {
  const { className } = props;
  const classes = classnames(styles.component, className);

  return (
    <div className={classes}>
      <h2><%= name %></h2>
    </div>
  );
};

<%= name %>.defaultProps = {
  className: ''
};

export { <%= name %>, <%= name %>Props };
