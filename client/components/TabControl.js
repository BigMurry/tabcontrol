import React from 'react'
import classnames from 'classnames'

const {Component} = React

export default class TabControl extends Component{

  constructor(props){
    super(props)
    this._renderTabs = this._renderTabs.bind(this)
    this._renderContent = this._renderContent.bind(this)
    this.state = {
      activeIndex: props.active
    }
  }

  _clickTab(idx){
    this.setState({activeIndex: idx})
  }

  _renderTabs(){
    const tabs = this.props.children
    const {activeIndex} = this.state

    return(
      <div className={'tab-head-wrapper'}>
        {tabs.map((tabItem, idx) => {
          return(
            <div
              key={idx}
              onClick={this._clickTab.bind(this, idx)}
              className={classnames('tab-head',{'active': activeIndex === idx})}>
                {tabItem.props.title}
            </div>
          )
        })}
      </div>
    )
  }

  _renderContent(){
    const tabs = this.props.children
    const {activeIndex} = this.state
    return (
      <div className={'tab-content-wrapper'}>
        {tabs[activeIndex]}
      </div>
    )
  }

  render(){
    return (
      <div>
        {this._renderTabs()}
        {this._renderContent()}
      </div>
    )
  }
}
