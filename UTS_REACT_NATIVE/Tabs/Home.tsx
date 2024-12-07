import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import HeaderTabContents from '../Components/HeaderTabContents'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeaderTabContents />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})