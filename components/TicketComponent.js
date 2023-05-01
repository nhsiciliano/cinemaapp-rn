import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { MoviesCards } from '../Context'
import { useNavigation } from '@react-navigation/native'

const TicketComponent = () => {
    const { ticket } = useContext(MoviesCards) 
    const navigation = useNavigation();
    return (
        <View>
            {ticket.slice(0, 1).map((item, index) => (
                <ImageBackground
                key={index}
                style={{ aspectRatio: 5 / 2, height: 170 }}
                resizeMode="cover"
                source={{
                    uri: item.image,
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
                    <Text style={{ fontSize: 15, fontWeight: "500", color: "grey" }}>YOUR TICKET</Text>

                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 10}}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", color: "grey", marginTop: 4 }}>SPA/ENG</Text>
                        </View>

                        <Pressable onPress={() => navigation.navigate("Ticket")} style={{ backgroundColor: "#ffc40c", padding: 10, borderRadius: 6, marginRight: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}>VIEW TICKET</Text>
                        </Pressable>
                    </View>
                    <Text style={{ marginTop: 8, fontSize: 14, fontWeight: "500" }}>{item.mall}</Text>
                </Pressable>
            </ImageBackground>
            ))}
            <View style={{ marginTop: 110 }} />
        </View>
    )
}

export default TicketComponent

const styles = StyleSheet.create({})