import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import images from './images'; 

const {width} = Dimensions.get("window");

function App() {
  const [users, setUsers] = useState([0, 0]);
  const [videoHeight, setVideoHeight] = useState('100%');
  const [videoWidth, setVideoWidth] = useState('40%');

  const styleVideo = () => {
    return ({
      flex: 1,
      backgroundColor: '#333',
      minWidth: videoWidth,
      height: videoHeight,
      padding: StyleSheet.hairlineWidth*2,
    })
  };

  useEffect(() => {
    if (users.length > 2)
      setVideoHeight('50%')
    if (users.length > 4)
      setVideoHeight('33.333%')
    if (users.length > 6) {
      setVideoHeight('33.333%')
      setVideoWidth('30%')}
    if (users.length > 9) {
      setVideoHeight('25%')
      setVideoWidth('30%')}
    if (users.length > 12) {
      setVideoHeight('25%')
      setVideoWidth('21%')}
  }, [users, videoHeight]);

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
        {users.map((user) =>
            <View style={styleVideo()} >
              <Image style={styles.tempImage} source={{ uri: images.tempUserImage }}></Image>
            </View>
        )}
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
        <TouchableOpacity style={styles.bottomBarButton}>
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
    height: '70%',
    width: 40,
    backgroundColor: '#00aa00',
    marginHorizontal: 20,
  },
  options: {
    height: '70%',
    width: 20,
    backgroundColor: '#aa0000',
    marginHorizontal: 20,
  },
  videoView: {
    flex: 11,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: width*.15-100>0?width*.15-100:0,
  },
  tempImage: {
    flex: 1,
  },
  bottomBar:{
    flex: 1.5,
    paddingHorizontal:'10%',
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomBarButton: {
    height: '70%',
    width: 60,
    backgroundColor: '#6D767D',
  },
})

export default App;