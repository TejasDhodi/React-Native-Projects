import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect, useState } from 'react'
import GradientComponent from './GradientComponent'
import { allStationsList } from '../Service/Servicedata'

interface stations {
    sourceStation: string,
    destinationStation: string
}

interface modalProps {
    setModalVisibility: (visibility: boolean) => void,
    modalVisibility: boolean,
    setStations: React.Dispatch<React.SetStateAction<stations>>,
    selectedStationOption: string
}

const StationDatModal: React.FC<modalProps> = ({ modalVisibility, setModalVisibility, setStations, selectedStationOption }) => {
    const [activeRadio, setActiveRadio] = useState(1);
    const [stationData, setStationData] = useState(allStationsList);
    const [searchValue, setSearchValue] = useState('');

    const handleFilterSurban = () => {
        setActiveRadio(1)
        const filterData = allStationsList.filter(item => item.isSuburban);
        setStationData(filterData);
    }
    const handleFilterAll = () => {
        setActiveRadio(2)
        setStationData(allStationsList)
    }

    const handleSearchFilter = (text: string) => {
        setSearchValue(text)
        let searchVal = searchValue.toLocaleLowerCase();
        let searchedData = stationData.filter(stn => stn.stationName.toLocaleLowerCase().includes(searchVal) || stn.stationCode.toLocaleLowerCase().includes(searchVal));
        let emptyInput = text.trim() === '';

        if (emptyInput) {
            activeRadio === 1 ? handleFilterSurban() : handleFilterAll();
        } else {
            setStationData(searchedData);
        }
    }

    const setStationName = (stn: string) => {
        setStations((prevStations) => ({
            ...prevStations,
            [selectedStationOption === 'source' ? 'sourceStation' : 'destinationStation']: stn
        }))
        setModalVisibility(false);
        setSearchValue('')
    }

    useEffect(() => {
       modalVisibility &&  handleFilterSurban();
    }, [modalVisibility])
    return (
        <Modal
            visible={modalVisibility}
            animationType='fade'
            onRequestClose={() => setModalVisibility(false)}>


            <GradientComponent>
                <View style={styles.modalheader}>
                    <TouchableOpacity onPress={() => setModalVisibility(false)} >
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Enter Source Station</Text>
                </View>
            </GradientComponent>
            <View style={styles.stationdatacontainer}>
                <View style={styles.radioControlContainer}>
                    <TouchableOpacity style={styles.radioControl} onPress={() => handleFilterSurban()}>
                        <View style={[styles.radioBorder, activeRadio === 1 && styles.ActiveRadioBorder]}>
                            {activeRadio === 1 && <View style={styles.radioColor}></View>}
                        </View>
                        <Text style={styles.radioText}>SURBAN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.radioControl} onPress={() => handleFilterAll()}>
                        <View style={[styles.radioBorder, activeRadio === 2 && styles.ActiveRadioBorder]}>
                            {activeRadio === 2 && <View style={styles.radioColor}></View>}
                        </View>
                        <Text style={styles.radioText}>ALL STATIONS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBarContainer}>
                    <Text style={styles.searchBarText}>Enter Station Name / Code</Text>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={20} color="#ec685a" style={styles.searchIcon} />
                        <TextInput value={searchValue} style={styles.searchBarInput} autoFocus={true} onChangeText={(e) =>
                            handleSearchFilter(e)} />
                    </View>
                </View>
                <FlatList
                    data={stationData}
                    keyExtractor={item => item.stationCode}
                    renderItem={({ item }) => {
                        const { stationCode, stationName } = item
                        return (
                            <Text style={styles.stationNameCode} onPress={() => setStationName(stationName)}>{`${stationName} - ${stationCode}`}</Text>
                        )
                    }}
                />
            </View>

        </Modal>
    )
}

export default StationDatModal

const styles = StyleSheet.create({
    modalheader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 'auto',
        gap: 30,
        padding: 10,
    },
    headerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    },
    stationdatacontainer: {
        marginBlock: 10,
        marginInline: 15,
        boxShadow: '0 0 1 #000',
        padding: 15
    },
    radioControlContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 20,
        // padding: 15
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
        fontSize: 12,
        fontWeight: 900
    },
    searchBarContainer: {
        marginTop: 15
    },
    searchBarText: {
        color: '#ec685a',
        paddingLeft: 30
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ec685a',
        paddingInline: 5,
        marginBottom: 10
    },
    searchIcon: {
        width: 20,
        height: 'auto'
    },
    searchBarInput: {
        width: '90%'
    },
    stationNameCode: {
        boxShadow: '0 0 5px #00000033',
        paddingInline: 10,
        paddingBlock: 15,
        width: '90%',
        marginInline: 'auto',
        marginBlock: 2,
        textTransform: 'uppercase',
        borderRadius: 4
    }
})