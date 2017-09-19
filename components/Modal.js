import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight } from 'react-native';

export default class Modally extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  visibleModal (visible) {
    this.setState({ isVisible: visible });
  }


  render () {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.visibleModal(!this.state.isVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.visibleModal(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    )
  }
}