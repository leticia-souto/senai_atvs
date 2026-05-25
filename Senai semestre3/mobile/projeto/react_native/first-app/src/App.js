
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/exemplos/bottom_tab_navigator';
import DrawerNavigator from './navigation/exemplos/drawer_navigator';



export default function App() {

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
});


