import React, { Component, Dimensions } from 'react'
import { StyleSheet } from 'react-native';
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { 
  Container,
  Header,
  Content,
  Text,
  StyleProvider,
  View,
  Button
} from 'native-base'

export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
        {/*<Header />*/}
          
        <View style={{
          flex: 1,
          flexDirection: "column",
        }}>

          <View style={ styles1.viewDad }>

              <View style={{  flexDirection: "row", flex: 1 }}>
                <Button style={ styles1.bottonParticipant } >
                  <Text> Jogador </Text>
                </Button>
              </View>
              
              <View style={{  flexDirection: "row", flex: 1 }}>
                
                <View style={ styles1.viewBottonTeam }>
                  <Button style={ styles1.buttonPoint } >
                    <Text> Team 1</Text>
                  </Button>
                </View>

                <View style={ styles1.viewtextResult }>
                  <Text style={ styles1.textResult } > 1 </Text>
                </View>

                <View style={{ flexDirection: "row", flex: 1 }} />
              </View>

          </View>

          <View style={ styles2.viewDad }>
              <View style={{  flexDirection: "row", flex: 1 }}>
                
                <View style={ styles2.viewBottonTeam }>
                  <Button style={ styles2.buttonPoint } >
                    <Text> Team 1</Text>
                  </Button>
                </View>

                <View style={ styles2.viewtextResult }>
                  <Text style={ styles2.textResult } > 1 </Text>
                </View>

                <View style={{ flexDirection: "row", flex: 1 }} />
              </View>

              <View style={{  flexDirection: "row", flex: 1 }}>
                <Button style={ styles2.bottonParticipant } >
                  <Text> Jogador </Text>
                </Button>
              </View>

          </View>

        </View>
        </Container>
      </StyleProvider>
    );
  }
}

const styles1 = StyleSheet.create({
  viewDad: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  buttonPoint: {
    transform: [{ rotate: '90deg'}],
    marginTop: 30,
    marginLeft: 10,
  },
  viewBottonTeam: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'red',
  },
  textResult: {
    fontSize: 24,
    transform: [{ rotate: '90deg'}]
  },
  viewtextResult: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'green'
  },
  bottonParticipant: {
    transform: [{ rotate: '90deg'}],
    position: 'absolute',
    right: 0,
    bottom: 50,
  }
});

const styles2 = StyleSheet.create({
  viewDad: {
    flex: 1,
    backgroundColor: 'orangered',
  },
  buttonPoint: {
    transform: [{ rotate: '90deg'}],
    position: 'absolute',
    left: 0,
    bottom: 30,
  },
  viewBottonTeam: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'red',
  },
  textResult: {
    fontSize: 24,
    transform: [{ rotate: '90deg'}]
  },
  viewtextResult: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'green'
  },
  bottonParticipant: {
    transform: [{ rotate: '90deg'}],
    position: 'absolute',
    right: 0,
    bottom: 50,
  }
});