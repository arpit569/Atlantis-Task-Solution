export const ListDetails = [
    {
        id: '1',
        text: 'Map View',
        navigateTo: 'map',
    },
    {
        id: '2',
        text: 'Watch Movies',
        navigateTo: 'movies',
    },
]

export type TMarkerLocation = {
    city: string
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
    desc: string
}

export const MarkerLocation: TMarkerLocation[] = [
    {
        city: 'Mumbai',
        latitude: 19.076,
        longitude: 72.8777,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Mumbai ',
    },
    {
        city: 'Delhi',
        latitude: 28.7041,
        longitude: 77.1025,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Delhi ',
    },
    {
        city: 'Bangalore',
        latitude: 12.9716,
        longitude: 77.5946,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Bangalore',
    },
    {
        city: 'Kolkata',
        latitude: 22.5726,
        longitude: 88.3639,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Kolkata',
    },
    {
        city: 'Chennai',
        latitude: 13.0827,
        longitude: 80.2707,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Chennai',
    },
    {
        city: 'Hyderabad',
        latitude: 17.385,
        longitude: 78.4867,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Hyderabad',
    },
    {
        city: 'Ahmedabad',
        latitude: 23.0225,
        longitude: 72.5714,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Ahmedabad',
    },
    {
        city: 'Pune',
        latitude: 18.5204,
        longitude: 73.8567,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Pune',
    },
    {
        city: 'Jaipur',
        latitude: 26.9124,
        longitude: 75.7873,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Jaipur',
    },
    {
        city: 'Surat',
        latitude: 21.1702,
        longitude: 72.8311,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        desc: 'This is Surat',
    },
]

export const dummyEmailPassword = [
    {
        userName: 'Test1',
        email: 'test1@mail.com',
        password: 'Test1@Password1234',
    },
    {
        userName: 'Test2',
        email: 'test2@mail.com',
        password: 'Test2@Password1234',
    },
    {
        userName: 'Test3',
        email: 'test3@mail.com',
        password: 'Test3@Password1234',
    },
]
