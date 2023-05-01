import { StyleSheet, Text, View, SafeAreaView, Image, TextComponent, Pressable } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import moment from 'moment'
import SvgQRCode from 'react-native-qrcode-svg'
import { MoviesCards } from '../Context'

const TickekScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { ticket } = useContext(MoviesCards) 
    const ticketDetails = route.params;
    console.log(ticketDetails);
    useEffect(() => {
        const loadTicket = () => {
            ticket.push(ticketDetails);
        }
        loadTicket();
    }, [])
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "white", height: "90%", borderRadius: 6, margin: 15 }}>
                <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>{route.params.name}</Text>
                    <Text>{route.params.selectedSeats.length}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
                    <Text style={{ color: "grey", fontSize: 15 }}>ENG - 2D</Text>
                    <Text style={{ color: "red", fontSize: 16 }}>TICKETS</Text>
                </View>
                <Text style={{ fontSize: 15, fontWeight: "600", marginHorizontal: 10, marginTop: 10 }}>{route.params.mall}</Text>
                <Text style={{ borderRadius: 1, borderStyle: "dashed", borderColor: "grey", height: 1, borderWidth: 0.4, margin: 12 }}></Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ marginTop: 10, marginLeft: 45, marginRight: -50 }}>
                        <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>DATE & TIME</Text>
                        <Text style={{ marginVertical: 4, fontSize: 15 }}>{route.params.timeSelected}</Text>
                        <Text>{moment(route.params.date).utc().format("DD/MM/YYYY")}</Text>
                        <View style={{marginTop: 15, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ color: "grey", fontWeight: "600" }}>TICKETS</Text>
                                <Text style={{ marginTop: 2, textAlign: "center" }}>{route.params.selectedSeats.length}</Text>
                            </View>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ color: "grey", fontWeight: "600" }}>SEATS</Text>
                                <View>
                                    {route.params.selectedSeats.map((item, index) => (
                                        <Text style={{ marginTop: 2, textAlign: "center" }} key={index}>{item}</Text> 
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image style={{ aspectRatio: 4/2, height: 180, width: 320, borderRadius: 20 }} resizeMode="contain" source={{ uri: route.params.image }} />
                </View>
                <Text style={{ borderRadius: 1, borderStyle: "dashed", borderColor: "grey", height: 1, borderWidth: 0.4, margin: 12, marginVertical: 20 }}></Text>
                <View style={{ height: 140, backgroundColor: "orange", borderRadius: 6, margin: 10, marginTop: -5 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 17, color: "#2f4f4f", fontWeight: "bold", marginBottom: 8 }}>Price Details</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 2 }}>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>Seats Value</Text>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>USD {route.params.priceValue}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>Convenience Fee</Text>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>USD 2</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 2 }}>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>Grand Total</Text>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>USD {route.params.total}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>ID NO</Text>
                            <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>FG474MY387WQ0</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ borderRadius: 1, borderStyle: "dashed", borderColor: "grey", height: 1, borderWidth: 0.4, margin: 12, marginVertical: 8 }}></Text>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                    <SvgQRCode value={"My cinema app"} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}>X435JM32</Text>
                <Text style={{ borderRadius: 1, borderStyle: "dashed", borderColor: "grey", height: 1, borderWidth: 0.4, margin: 12, marginVertical: 8 }}></Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor: "green", marginLeft: "auto", marginRight: "auto", padding: 10, width: 120, borderRadius: 4 }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 16, fontWeight: "700" }}>HOME</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default TickekScreen

const styles = StyleSheet.create({})