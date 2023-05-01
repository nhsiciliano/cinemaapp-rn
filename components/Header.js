import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Header = () => {

    const types = [
        {
            id: "0",
            name: "IMAX",
        },
        {
            id: "1",
            name: "XD",
        },
        {
            id: "2",
            name: "3D",
        },
        {
            id: "3",
            name: "4D",
        },
        {
            id: "4",
            name: "PREMIUM",
        },
    ]

    return (
        <View>
            <ImageBackground
                style={{ aspectRatio: 5 / 2, height: 170 }}
                source={{
                    uri: "https://images.thedirect.com/media/article_full/the-batman-reviews.jpg"
                }}>
                <Pressable
                    style={{ 
                        position: "absolute", 
                        height: 130, 
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 8,
                        top: 140,
                        left: 20,
                        width: "82%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "500", color: "grey" }}>Releasing in 3 days!</Text>

                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 10}}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>THE BATMAN</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", color: "grey", marginTop: 4 }}>SPA/ENG</Text>
                        </View>

                        <Pressable style={{ backgroundColor: "#ffc40c", padding: 10, borderRadius: 6, marginRight: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}>BOOK</Text>
                        </Pressable>
                    </View>
                    <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "500" }}>Action, Thriller, Suspense</Text>
                </Pressable>
            </ImageBackground>

            <View style={{ marginTop: 110 }} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {types.map((item, index) => (
                    <View style={{ margin: 10, borderColor: "C0C0C0", borderWidth: 0.4, borderRadius: 4, padding: 8 }} key={index}>
                        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})