import debounce from 'lodash.debounce';
import React, { Component } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

import styles from './index.module.css';

export default class extends Component {
  constructor(props) {
    super(props);

    // Create a callback ref for the content element
    this.content = null;
    this.setContentRef = element => { this.content = element; };

    // Bind event handlers
    this.handleResize = debounce(this.handleResize.bind(this), 200);

    /**
     * Set the minHeight dynamically to workaround mobile sizing issues and keep the footer pinned
     * to the bottom of the viewport
     */
    this.setContentHeight = () => {
      if (this.content) this.content.style.minHeight = `${window.innerHeight}px`;
    };
  }

  componentDidMount() {
    this.setContentHeight();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.cancel);
  }

  handleResize(event) {
    this.setContentHeight();
  }

  render() {
    const contentClassNames = [];

    contentClassNames.push(styles.content);

    // Apply home-specific styles if on homepage
    if (this.props.location.pathname === '/') contentClassNames.push(styles.contentHome);

    return (
      <div className={styles.container}>
        <div/>
        <div className={contentClassNames.join(' ')} ref={this.setContentRef}>
          <Header pathname={this.props.location.pathname}/>
          <main>{this.props.children()}</main>
          <Footer/>
        </div>
        <div/>
      </div>
    );
  }
}
