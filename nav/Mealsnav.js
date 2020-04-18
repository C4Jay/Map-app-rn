import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PlaceslistScreen from '../screens/PlaceslistScreen';
import PlacesdetailScreen from '../screens/PlacesdetailScreen';
import MapScreen from '../screens/MapScreen';
import CreateplaceScreen from '../screens/CreateplaceScreen';
import MapScreenview from '../screens/MapScreenview';


const Mealsnav = createStackNavigator({
    Placeslist: PlaceslistScreen,
    Placesdetail: PlacesdetailScreen,
    Mapview: MapScreen,
    Createplace: CreateplaceScreen,
    Mapviewonly: MapScreenview
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? /* '#d303fc' */'#94cc3f' : '#d303fc',
          },
          headerTintColor: 'white',
          headerTitleStyle: { 
          },
          headerTitleAlign: 'center'
         
    }
})

/* const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meals: {
        screen: Mealsnav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    }
}) */


export default createAppContainer(Mealsnav);