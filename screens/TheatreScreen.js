import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable, Alert, LogBox } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MoviesCards } from '../Context'
import { useStripe } from '@stripe/stripe-react-native'

const TheatreScreen = () => {
    LogBox.ignoreLogs([
            'Non-serializable values were found in the navigation state',
        ]);
    const stripe = useStripe();
    const navigation = useNavigation();
    const route = useRoute();
    const {seats, setSeats, occupied} = useContext(MoviesCards);
    const onSeatSelect = (item) => {
        const seatSelected = seats.find((seat) => seat === item);
        if (seatSelected) {
            setSeats(seats.filter((seat) => seat !== item));
        } else {
            setSeats([...seats, item]);
        }
    }
    const subscribe = async () => {
        const response = await fetch("http://localhost:8080/payment", {
        method: "POST",
        body: JSON.stringify({
            amount: Math.floor(total * 100),

        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) return Alert.alert(data.message);
        const clientSecret = data.clientSecret;
        const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        });
        if (initSheet.error) return Alert.alert(initSheet.error.message);
        const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
        });
        if (presentSheet.error) return Alert.alert(presentSheet.error.message);
        else {
            occupied.push(...seats);
            navigation.navigate("Ticket", {
                name: route.params.name,
                mall: route.params.mall,
                timeSelected: route.params.timeSelected,
                total: total,
                date: route.params.date,
                image: route.params.image,
                selectedSeats: displaySeats,
                priceValue: priceValue
            });

            setSeats([]);
        }
    }
    const displaySeats = [...seats];
    const fee = 2;
    const noOfSeats = seats.length;
    const priceValue = noOfSeats * 4;
    const total = seats.length > 0 ? fee + noOfSeats * 4 : 0;
    const showSeats = () => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {seats.map((seat, index) => (
                    <Text key={index} style={{ paddingHorizontal: 4, marginTop: 4, fontSize: 16 }}>{seat}</Text>
            ))}
            </View>
        )
    }
    console.log(seats, "seats selected");
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Ionicons onPress={() => navigation.goBack()} style={{ marginLeft: 6 }} name="arrow-back" size={24} color="black" />
                <View style={{ marginLeft: 6 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}>{route.params.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: "500", color: "grey", marginTop: 2 }}>{route.params.mall}</Text>
                </View>
                <AntDesign style={{ marginRight: 6 }} name="sharealt" size={24} color="black" />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 6 }}>{route.params.timeSelected}</Text>
            <View style={{ marginTop: 20 }} />
            <FlatList numColumns={7} data={route.params.tableSeats} renderItem={({ item }) => (
                <Pressable onPress={() => onSeatSelect(item)} style={{ margin: 10, borderWidth: 0.5, borderColor: "grey", borderRadius: 5 }}>
                    {seats.includes(item) ? (
                        <Text style={{ backgroundColor: "#ffc40c", padding: 8 }}>{item}</Text>
                        ) 
                    :
                    occupied.includes(item) ? (
                            <Text style={{ backgroundColor: "#989898", padding: 8 }}>{item}</Text>
                        )
                    : 
                        (
                        <Text style={{ padding: 8 }}>{item}</Text>
                    )}
                </Pressable>
            )} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20, backgroundColor: "#D8D8D8", padding: 10 }}>
                <View>
                    <FontAwesome style={{ textAlign: "center", marginBottom: 6 }} name="square" size={24} color="#ffc40c" />
                    <Text>Selected</Text>
                </View>
                <View style={{ marginHorizontal: -90 }}>
                    <FontAwesome style={{ textAlign: "center", marginBottom: 6 }} name="square" size={24} color="white" />
                    <Text>Vacant</Text>
                </View>
                <View>
                    <FontAwesome style={{ textAlign: "center", marginBottom: 6 }} name="square" size={24} color="#989898" />
                    <Text>Occupied</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                <View style={{ padding: 10 }}>
                    <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: "500" }}>Show end time aprox 6:50pm</Text>
                    {seats.length > 0 ? (
                        showSeats()
                    ) : (
                        <Text style={{ fontSize: 18 }}>Please select your seats</Text>
                    )}
                </View>
                <View style={{ padding: 6, backgroundColor: "#E0E0E0", borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}>
                    <Text style={{ width: 120, fontSize: 15 }}>Now with ticket cancellation</Text>
                </View>
            </View>
            <Pressable style={{ backgroundColor: "#ffc40c", padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 16 }}> 
                {seats.length > 0 ? (
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>{seats.length} Seat's selected</Text>
                ) : (
                    <Text></Text>
                )}
                <Pressable onPress={subscribe}>
                    <View style={{ backgroundColor: "#ffe866", padding: 10, borderRadius: 6, borderColor: "#806c00", borderWidth: 1.5 }}>
                        <Text style={{ fontSize: 14, color: "#665700" }}>PAY USD {total}</Text>
                    </View>
                </Pressable>
            </Pressable>
        </SafeAreaView>
    )
}

export default TheatreScreen

const styles = StyleSheet.create({})