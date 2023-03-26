import { Home, WindPower, Thermostat, Opacity } from '@mui/icons-material';


export const actionItems = [
    {
        title: 'Home',
        icon: <Home />,
        url: '/'
    },
    {
        title: 'Temperature',
        icon: <Thermostat />,
        url: '/temperature'
    },
    {
        title: 'Wind',
        icon: <WindPower />,
        url: '/wind'
    },
    {
        title: 'Humidity',
        icon: <Opacity />,
        url: '/humidity'
    },
]