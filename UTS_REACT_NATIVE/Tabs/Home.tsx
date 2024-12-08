import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import HeaderTabContents from '../Components/HeaderTabContents'

const Home = () => {
  const [tabContents, setTabContents] = useState('Journey Ticket');

  const handletabContents = (content: string): void => {
    setTabContents(content)
  }
  return (
    <>
      <Header />
      <Hero handletabContents={handletabContents} tabContents={tabContents}/>
      <HeaderTabContents tabContents={tabContents}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})