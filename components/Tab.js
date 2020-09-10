import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };

    constructor(props){
      super(props);
    }
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = `${this.props.tabListItem}`;
  
      if (activeTab === label) {
        className += ` ${this.props.tabListActive}`;
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
        >
          <span>
            {label}
          </span>
        </li>
      );
    }
  }
  
  export default Tab;