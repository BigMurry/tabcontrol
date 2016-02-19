import React from 'react'
const {Component} = React

export default class TabItem extends Component{

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
