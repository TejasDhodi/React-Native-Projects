import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight, TextInput } from 'react-native'
import React, { useState } from 'react'
import GradientComponent from './GradientComponent'
import { buttonsData } from '../Service/Servicedata'
import { Picker } from '@react-native-picker/picker'

interface HeaderTabProps {
    tabContents: string
}
const HeaderTabContents: React.FC<HeaderTabProps> = ({ tabContents }) => {
    const [activeRadio, setActiveRadio] = useState(0);
    const [Persons, setPersons] = useState(1);
    const [paymenType, setPaymentType] = useState('RWALLET');
    return (
        <View style={styles.headerContetContainer}>
            <GradientComponent>
                <Text style={styles.bookingHeader}>{tabContents !== 'Journey Ticket' ? tabContents : 'Normal Booking'}</Text>
            </GradientComponent>

            {
                tabContents !== 'QR Booking' &&
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
            }
            {
                tabContents === 'QR Booking' &&
                <View style={styles.QR_BookingSection}>
                    <TouchableHighlight style={[styles.gradientBtn, styles.qrBookingControl]}><GradientComponent><Text style={styles.bookingControlBtn}>JOURNEY TICKET BY QR</Text></GradientComponent></TouchableHighlight>
                    <TouchableHighlight style={[styles.gradientBtn, styles.qrBookingControl]}><GradientComponent><Text style={styles.bookingControlBtn}>pLATFORM TICKET BY QR</Text></GradientComponent></TouchableHighlight>
                    <TouchableHighlight style={[styles.gradientBtn, styles.qrBookingControl]}><GradientComponent><Text style={styles.bookingControlBtn}>SUPERFAST SUPERCHARGE BY QR</Text></GradientComponent></TouchableHighlight>
                </View>
            }
            {
                tabContents === 'Platform Ticket' &&
                <View style={styles.platformTicketSection}>
                    <View style={styles.searchStation}>
                        <Text style={styles.stationLabel}>Station Name / Code</Text>
                        <TextInput
                            style={styles.stationInputText}
                            placeholder='Station Name / Code'
                        />
                    </View>
                    <View style={styles.bookingCredentials}>
                        <View style={styles.bookingDropdownContainer}>
                            <Text>Person(s)</Text>
                            <Picker
                                selectedValue={Persons}
                                onValueChange={(person) => setPersons(person)}
                                style={styles.picker}
                            >
                                {['ONE (1)', 'TWO (2)', 'THREE (1)', 'FOUR (1)'].map((currElem, index) => (
                                    <Picker.Item
                                        label={currElem}
                                        value={index + 1}
                                        key={index}
                                        style={styles.pickerItem} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.bookingDropdownContainer}>
                            <Text>Payment Type</Text>
                            <Picker
                                selectedValue={paymenType}
                                onValueChange={(payment) => setPaymentType(payment)}
                                style={styles.picker}
                            >
                                {['RWALLET', 'PAY USING :- UPI, DEBIT CARD, CREDIT CARD OR NET BANKING'].map((currElem, index) => (
                                    <Picker.Item
                                        label={currElem}
                                        value={index + 1}
                                        key={index}
                                        style={styles.pickerItem} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
            }
            {
                tabContents === 'Journey Ticket' &&
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
            }
            {
                tabContents !== 'QR Booking' &&
                <View style={styles.bookingControlBtnContainer}>
                    {
                        buttonsData.map((buttons, index) => {
                            const { Journey_Ticket_Button, Quick_Booking_Button, Platform_ticket_Button, Season_ticket_Button } = buttons;
                            return (tabContents === 'Quick Booking' ? Quick_Booking_Button : tabContents === 'Platform Ticket' ? Platform_ticket_Button : tabContents === 'Season Ticket' ? Season_ticket_Button : Journey_Ticket_Button)?.map((btn, index) => {
                                return <Pressable style={styles.gradientBtn} key={index}><GradientComponent><Text style={styles.bookingControlBtn}>{btn}</Text></GradientComponent></Pressable>
                            })

                        })
                    }
                </View>
            }
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
        borderRadius: 5,
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
    bookingControlBtnContainer: {
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
    bookingControlBtn: {
        textAlign: 'center',
        paddingBlock: 8,
        borderRadius: 20,
        color: '#ffffff',
        fontWeight: 800
    },
    QR_BookingSection: {
        marginTop: 10,
    },
    qrBookingControl: {
        marginInline: 'auto',
        width: '70%'
    },
    platformTicketSection: {
        paddingInline: 15
    },
    searchStation: {},
    stationLabel: {
        marginBottom: 0
    },
    stationInputText: {
        borderColor: '#ec685a',
        borderBottomWidth: 2
    },
    bookingCredentials: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingInline: 0,
        gap: 5,
        marginBlock: 10
    },
    bookingDropdownContainer: {
        borderColor: '#ec685a',
        borderBottomWidth: 1,
        width: '50%'
    },
    picker: {

    },
    pickerItem: {
        borderColor: '#ec685a',
        borderBottomWidth: 1,
        fontSize: 14
    }
})