import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import GradientComponent from './GradientComponent'

const HeaderTabContents : React.FC = () => {
    const [activeRadio, setActiveRadio] = useState(0);
    return (
        <View style={styles.headerContetContainer}>
            <GradientComponent>
                <Text style={styles.bookingHeader}>Normal Booking</Text>
            </GradientComponent>

            <View style={styles.radioControlContainer}>
                <TouchableOpacity style={styles.radioControl} onPress={() => setActiveRadio(1)}>
                    <View style={[styles.radioBorder, activeRadio === 1 && styles.ActiveRadioBorder]}>
                        {activeRadio === 1 && <View style={styles.radioColor}></View>}
                    </View>
                    <Text style={styles.radioText}>Book & Travel (Paperless)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.radioControl} onPress={() => setActiveRadio(2)}>
                    <View style={[styles.radioBorder, activeRadio === 2 && styles.ActiveRadioBorder]}>
                        {activeRadio === 2 && <View style={styles.radioColor}></View>}
                    </View>
                    <Text style={styles.radioText}>Book & Print (Paper)</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.chooseStationsContainer}>
                <View style={[styles.chooseStation, styles.sourceStation]}>
                    <Text style={styles.chooseMsg}>Depart from</Text>
                    <Text style={styles.stationName}>STN</Text>
                    <Text style={[styles.chooseMsg, styles.chooseMsgLabel]}>Station Name</Text>
                </View>

                <Image source={require('../assets/Images/Swap_image.png')} style={styles.swapStationImg} />

                <View style={[styles.chooseStation, styles.destinationStation]}>
                    <Text style={styles.chooseMsg}>Going to</Text>
                    <Text style={styles.stationName}>STN</Text>
                    <Text style={[styles.chooseMsg, styles.chooseMsgLabel]}>Station Name</Text>
                </View>
            </View>

            <View style={styles.bookingControlContainer}>
                <Pressable style={styles.gradientBtn}><GradientComponent><Text style={styles.bookingControl}>NEXT TRAINS</Text></GradientComponent></Pressable>
                <Pressable style={styles.gradientBtn}><GradientComponent><Text style={styles.bookingControl}>GET FARE</Text></GradientComponent></Pressable>
            </View>
        </View>
    )
}

export default HeaderTabContents

const styles = StyleSheet.create({
    headerContetContainer: {
        width: '95%',
        boxShadow: '0 0 1px #000000',
        marginInline: 'auto',
        marginBlock: 20,
        // height: 'auto',
        borderRadius: 5
    },
    bookingHeader: {
        paddingBlock: 8,
        paddingInline: 20,
        fontSize: 18,
        fontWeight: 700,
        color: '#ffffff'
    },
    radioControlContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15
    },
    radioControl: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    radioBorder: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ActiveRadioBorder: {
        borderColor: '#ec685a',
        borderWidth: 2,
    },
    radioColor: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#ec685a',
    },
    radioText: {
        fontSize: 11,
        fontWeight: 700
    },
    chooseStationsContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 20,
        padding: 10, 
    },
    chooseStation: {
        padding: 10,
        borderBottomColor: '#ec685a',
        borderBottomWidth: 2,
        width: 'auto'
    },
    stationName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    chooseMsg: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    },
    chooseMsgLabel: {
        fontSize: 12
    },
    swapStationImg: {
        height: 30,
        width: 30
    },
    sourceStation: {},
    destinationStation: {},
    bookingControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    gradientBtn: {
        overflow: 'hidden',
        borderRadius: 200,
        width: '40%',
        marginBottom: 12
    },
    bookingControl: {
        textAlign: 'center',
        paddingBlock: 8,
        borderRadius: 20,
        color: '#ffffff',
        fontWeight: 800
    },
})