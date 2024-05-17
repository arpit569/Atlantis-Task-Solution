import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, {
    Callout,
    Marker,
    PROVIDER_GOOGLE,
    Region,
} from 'react-native-maps'
import tw from 'twrnc'
import { MarkerLocation, TMarkerLocation } from '../dummyData'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { TouchAbleButton } from '../components'
import { StackNavigationProp } from '@react-navigation/stack'

const InittialLocation = {
    latitude: 28.535517,
    longitude: 77.391029,
    latitudeDelta: 24,
    longitudeDelta: 24,
}

type RootStackParamList = {}

type MapScreenNavigationProp = StackNavigationProp<RootStackParamList>

interface MapProps {
    navigation: MapScreenNavigationProp
}

export const Map: FC<any> = ({ navigation }) => {
    const mapRef = useRef<any>()
    const snapPoints = useMemo(() => ['25%'], [])
    const bottomSheetRef = useRef<BottomSheet | null>(null)
    const [selectedDetails, setSelectedDetails] =
        useState<TMarkerLocation | null>(null)

    const handleOpenPress = () => bottomSheetRef.current?.expand()

    const onRegionChange = useCallback((region: Region) => {
        console.log(region)
    }, [])

    const onMarkerSelected = useCallback((marker: TMarkerLocation) => {
        setSelectedDetails(marker)
        handleOpenPress()
    }, [])

    const handleBottomSheetNavigation = useCallback(() => {
        console.log({ selectedDetails })
        if (selectedDetails !== null) {
            navigation.navigate('mapDetails', {
                city: selectedDetails?.city,
                desc: selectedDetails?.desc,
            })
        }
    }, [selectedDetails])

    return (
        <View style={tw`flex h-full`}>
            <MapView
                style={[tw`w-full h-full`]}
                initialRegion={InittialLocation}
                provider={PROVIDER_GOOGLE}
                showsMyLocationButton
                ref={mapRef}
                onRegionChangeComplete={onRegionChange}
            >
                {MarkerLocation.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker}
                        onPress={() => onMarkerSelected(marker)}
                    />
                ))}
            </MapView>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                index={-1}
            >
                <BottomSheetView style={tw`flex flex-1 px-4 gap-1`}>
                    <View style={tw`flex flex-2 justify-center items-center `}>
                        <Text style={tw`text-3xl`}>
                            {selectedDetails?.city}
                        </Text>
                        <Text style={tw`text-xl`}>{selectedDetails?.desc}</Text>
                    </View>
                    <View style={tw`flex flex-1 justify-end items-center `}>
                        <TouchAbleButton
                            onPress={handleBottomSheetNavigation}
                            label="View Details"
                            classes={
                                'bg-zinc-300 p-1 rounded-2 w-40 flex justify-center items-center '
                            }
                        />
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}
