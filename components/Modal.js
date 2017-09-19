import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class Hint extends Component {
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
      <View style={styles.container}>
        <Modal
          animationType="fade"
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
          transparent={true}
          visible={this.state.isVisible}
          //onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.modalContent}>
          <View>
            <Text>swipe right to save</Text>
            <Text>swipe left to pass</Text>
            <TouchableHighlight onPress={() => {
              this.visibleModal(!this.state.isVisible)
            }}>
              <Text style={styles.gotIt}>Got it.</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.visibleModal(true)
        }}>
        <Text style={styles.hint}>Hint</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hint: {
    fontWeight: 'bold',
    backgroundColor: '#F2F3F2',
    padding: 10,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: 'black',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: 'black'
  },
  gotIt: {
    fontWeight: 'bold',
    backgroundColor: '#F2F3F2',
    padding: 10,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: 'black',
  }
})