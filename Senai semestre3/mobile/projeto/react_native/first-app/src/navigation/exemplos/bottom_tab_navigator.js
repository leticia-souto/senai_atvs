import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";



const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator initialRouteName="HOME">
            <Tab.Screen name="HOME" component={HomeScreen}/>
            <Tab.Screen name="Perfil" component={PerfilScreen}/>
        </Tab.Navigator>
    )
}