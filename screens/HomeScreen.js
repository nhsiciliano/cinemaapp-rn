import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import MovieCards from '../components/MovieCards'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#E0E0E0", flex: 1 }}>
            <MovieCards />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})