import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar, FlatList, Text, Platform } from 'react-native';
import images from './images';

function App() {
  const [users, setUsers] = useState([0, 0]);
  const [videoHeight, setVideoHeight] = useState('100%');
  const [videoWidth, setVideoWidth] = useState('40%');
  const [participantsView, setParticipantsView] = useState(0);

  const styleVideo = () => {
    return ({
      flex: 1,
      backgroundColor: '#333',
      minWidth: videoWidth,
      height: videoHeight,
      padding: StyleSheet.hairlineWidth * 2,
    })
  };

  useEffect(() => {
    if (users.length > 2)
      setVideoHeight('50%')
    if (users.length > 4)
      setVideoHeight('33.333%')
    if (users.length > 6) {
      setVideoHeight('33.333%')
      setVideoWidth('30%')
    }
    if (users.length > 9) {
      setVideoHeight('25%')
      setVideoWidth('30%')
    }
    if (users.length > 12) {
      setVideoHeight('25%')
      setVideoWidth('21%')
    }
  }, [users, videoHeight]);

  return (
    <View style={styles.full}>
      <StatusBar hidden />
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => { setParticipantsView(!participantsView) }} style={styles.participantsButton}>
          <Image></Image>
        </TouchableOpacity>
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
          participantsView ?
            <View style={styles.participantsView}>
              <FlatList data={participants} renderItem={({ item }) => {
                return (
                  <View style={{ flexDirection: 'row', flex:1, }}>
                    <Text style={ styles.participantsText }>
                      {item.title}
                    </Text>
                    <View style={styles.participantsButtonContainer}>
                      <TouchableOpacity style={styles.participantsMicButton } />
                      <TouchableOpacity style={styles.participantsMicButton } />
                    </View>
                  </View>
                )
              }} />
            </View>
            : <></>
        }
        {
          users.map((user) =>
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
  participantsButton: {
    height: '70%',
    width: 40,
    backgroundColor: '#0000aa',
    marginHorizontal: 20,
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
    //marginHorizontal: width*.15-100>0?width*.15-100:0,
  },
  tempImage: {
    flex: 1,
  },
  bottomBar: {
    flex: 1.5,
    paddingHorizontal: '10%',
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
  participantsView:{
    width: Platform.OS==='web'?'25%':'50%',
    height: '100%',
    backgroundColor: '#333',
    zIndex: 2,
    position: 'absolute',
  },
  participantsText:{
    flex:1,
    fontSize: Platform.OS==='web'?22:17,
    flexDirection:'row',
    color: '#fff',
    lineHeight: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
  participantsMicButton:{
    width: 17,
    height: 17,
    backgroundColor: '#777',
    marginTop: 10,
    marginLeft: 10
  },
  participantsButtonContainer:{
    flex:.3,
    flexDirection:'row',
    alignSelf:'flex-end',
    paddingRight:20,
  }
})

const participants = [{
  title: 'ekaansh',
  id: 0
},
{
  title: 'world',
  id: 1
},
{
  title: 'hello',
  id: 2
}];

export default App; 