import React, { Component } from 'react';
import css from './App.css';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import SideDrawerBackdrop from './components/SideDrawerBackdrop/SideDrawerBackdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };


  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <SideDrawerBackdrop click={this.backdropClickHandler}/> //add thes companents back under <Toolbar /> to work again.
    }
    return (
      <div style ={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <Layout />
      </div>
    );
  }
}
export default App;
