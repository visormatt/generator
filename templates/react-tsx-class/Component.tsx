// Vendor
import * as React from 'react';
import classnames from 'classnames';

// CSS
import styles from './styles.css';

interface <%= name %>Props {
  className?: string;
}

interface <%= name %>State {
  open: boolean;
}

/**
 * @class <%= name %>
 * @description Brief description
 */
class <%= name %> extends React.Component<<%= name %>Props, <%= name %>State> {
  public static defaultProps: any;

  public state: <%= name %>State = {
    open: false
  };

  public render() {
    const classesComponent = classnames('container', styles.component);

    return (
      <div className={classesComponent}>
        <h2><%= name %></h2>
        <input onChange={this.onChange} type="text" />
      </div>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('- onChange event', this.state, this.props);
  };
}

<%= name %>.defaultProps = {
  className: ''
};

export { <%= name %>, <%= name %>Props, <%= name %>State };
