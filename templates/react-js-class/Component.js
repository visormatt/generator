// Vendor
import React from 'react';
import classnames from 'classnames';

// CSS
import styles from './styles.css';

/**
 * @class <%= name %>
 * @description Brief description
 */
class <%= name %> extends React.Component {
  state = {
    open: false
  };

  render() {
    const classesComponent = classnames('container', styles.component);

    return (
      <div className={classesComponent}>
        <h2><%= name %></h2>
        <input onChange={this.onChange} type="text" />
      </div>
    );
  }

  onChange = (event) => {
    console.log('- onChange event', this.state, this.props);
  };
}

<%= name %>.defaultProps = {
  className: ''
};

export { <%= name %> as default, <%= name %> };
