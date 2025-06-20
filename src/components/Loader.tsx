import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { height, width } from '../utilities'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Loader = () => {
  const loader = useSelector<RootState>(val => val.loader.loader)
  return (
    <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: loader?'flex': 'none',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default Loader