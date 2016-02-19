import React from 'react'
import {TabControl, TabItem} from '../components'
const {Component} = React

export default class App extends Component{

  render(){
    return (
      <TabControl active={0}>
        <TabItem title={'tab1'}>
          {'this is tab 1'}
        </TabItem>
        <TabItem title={'tab2'}>
          {'this is tab 2'}
        </TabItem>
        <TabItem title={'tab3'}>
          {'this is tab 3'}
        </TabItem>
      </TabControl>
    )
  }
}
