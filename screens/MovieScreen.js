import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker'
import malls from '../data/malls'

const MovieScreen = () => {
    const mallsData = malls;
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedDate, setSelectedDate] = useState("");
    const [seatsData, setSeatsData] = useState([]);
    const [mall, setMall] = useState([]);
    console.log(selectedDate, mall, "selected");
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons onPress={() => navigation.goBack()} style={{ marginLeft: 5 }} name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 5 }}>{route.params.name}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10}}>
                    <Ionicons name="search" size={24} color="black" />
                    <Ionicons style={{ marginHorizontal: 10 }} name="ios-filter-outline" size={24} color="black" />
                    <Ionicons name="share-outline" size={24} color="black" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginLeft: 5}}>
                <AntDesign name="Safety" size={24} color="grey" />
                <Text style={{ fontSize: 15, fontWeight: "500", paddingLeft: 4 }}>Your safety is our priority</Text>
            </View>
            <HorizontalDatepicker
                mode="gregorian"
                startDate={new Date('2023-04-23')}
                endDate={new Date('2024-04-30')}
                initialSelectedDate={new Date('2023-04-23')}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                selectedItemWidth={170}
                unselectedItemWidth={38}
                itemHeight={38}
                itemRadius={10}
                selectedItemTextStyle={styles.selectedItemTextStyle}
                unselectedItemTextStyle={styles.selectedItemTextStyle}
                selectedItemBackgroundColor="#222831"
                unselectedItemBackgroundColor="#ececec"
                flatListContainerStyle={styles.flatListContainerStyle}
                />
                {mallsData.map((item, index) => (
                    <Pressable onPress={() => {
                        setMall(item.name);
                        setSeatsData(item.tableData);
                    }} style={{ margin: 10 }} key={index}>
                        <Text 
                            style={{ 
                                fontSize: 16, 
                                fontWeight: "600", 
                                padding: 10, 
                                backgroundColor: "lightgrey", 
                                borderColor: "grey", 
                                borderWidth: 0.5, 
                                textAlign: "center" }}
                        >
                            {item.name}
                        </Text>
                        {mall.includes(item.name) ? (
                            <FlatList data={item.showtimes} renderItem={({ item }) => (
                                <Pressable onPress={() => navigation.navigate("Theatre", {
                                    mall: mall,
                                    name: route.params.name,
                                    timeSelected: item,
                                    tableSeats: seatsData,
                                    date: selectedDate,
                                    image: route.params.image
                                })} style={{ padding: 6 }}>
                                    <Text style={{fontSize: 16, fontWeight: "500", textAlign: "center" }}>{item}</Text>
                                </Pressable>
                            )} />
                        ) : (
                            null
                        )}
                    </Pressable>
                ))}
        </SafeAreaView>
    )
}

export default MovieScreen

const styles = StyleSheet.create({})