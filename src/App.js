import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, Dimensions, ScrollView, Text } from 'react-native';
import images from './images';

const { width } = Dimensions.get("window");

function App() {
  const [users, setUsers] = useState([0, 0, 0]);

  return (
    <View style={styles.full}>
      <StatusBar hidden />
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => { setUsers([...users, 0]) }} style={styles.addUser}>
          <Image></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <Image></Image>
        </TouchableOpacity>
      </View>
      {/* Videos */}
      <View style={styles.videoView} >
        {
          users.length > 1
            ? <View style={{ flex: 1 }}>
              <View style={{ flex: 8 }}>
                <View style={{ flex: 1 }}>
                  <Image style={styles.tempImage} source={{ uri: images.tempUserImage }}></Image>
                </View>
              </View>
              <View style={{ flex: 2, backgroundColor: '#121116', flexDirection: 'row' }}>
                <View style={{ width: width / 7.5, height: width / 7.5, backgroundColor: '#444', borderRadius: width / 6, alignItems: 'center', marginHorizontal: 15, alignSelf: 'center' }}>
                  <Text style={{ fontSize: 22, lineHeight: width / 7.5, color: '#ABABAB', }}>+8</Text>
                </View>
                <ScrollView horizontal={true} decelerationRate={0}
                  snapToInterval={width / 2} snapToAlignment={'center'} style={{ flex: 1 }}>
                  {
                    users.slice(1).map((data) => (
                      <TouchableOpacity style={{ width: width / 4.5, borderRadius: 10, borderColor: '#fff', borderWidth: StyleSheet.hairlineWidth * 3, marginHorizontal: 2, marginVertical: 10 }}>
                        <View style={{ flex: 1, borderRadius: 10, }}>
                          <Image style={{ borderRadius: 10, ...styles.tempImage }} source={{ uri: images.tempUserImage }}></Image>
                        </View>
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
            </View>
            : users.length > 0
              ? <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                  <Image style={styles.tempImage} source={{ uri: images.tempUserImage }}></Image>
                </View>
              </View>
              : <Text>No users connected</Text>
        }
      </View>
      {/* Bottom Bar*/}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButtonRed}>
          <Image></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#333'
  },
  navbar: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  addUser: {
    height: '60%',
    width: 32,
    backgroundColor: '#dadada',
    marginHorizontal: 20,
  },
  options: {
    height: '60%',
    width: 10,
    backgroundColor: '#dadada',
    marginHorizontal: 20,
  },
  videoView: {
    flex: 10,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: width * .15 - 100 > 0 ? width * .15 - 100 : 0,
  },
  tempImage: {
    flex: 1,
  },
  bottomBar: {
    flex: 1.5,
    paddingHorizontal: '10%',
    backgroundColor: '#202125',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBarButton: {
    height: '60%',
    width: 50,
    backgroundColor: '#6D767D',
  },
  bottomBarButtonRed: {
    height: '60%',
    width: 50,
    backgroundColor: '#FF5E53',
  },
})

export default App;