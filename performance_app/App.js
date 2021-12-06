import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/containers/login';
import Register from './src/containers/register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tasks from './src/containers/tasks';
import {Ionicons} from '@expo/vector-icons';
// import Overview from './src/containers/overview';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewTask from './src/containers/tasks/ViewTask';
import AddTask from './src/containers/tasks/AddTask';
// import EditTask from './src/containers/tasks/EditTask';
import UpdateTask from './src/containers/tasks/UpdateTask';
import Logout from './src/containers/logout';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { store, persistor } from './src/store/configureStore';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AntDesignView(iconName) {
  return <AntDesign name={iconName} size={24} color="black" />;
}

function IoniconsView(iconName) {
  return <Ionicons name={iconName} size={24} color="black" />;
}

function FontAwesomeView(iconName) {
  return <FontAwesome name={iconName} size={24} color="black" />;
}

function TaskNav() {
  return (
    <Stack.Navigator initialRouteName = "ViewTask">
      <Stack.Screen name = 'ViewTask' component = {ViewTask} options={{headerShown:false}}/>
      {/* <Stack.Screen name = 'AddTask' component = {AddTask} options={{headerShown:false}}/> */}
      {/* <Stack.Screen name = 'EditTask' component = {EditTask} options={{headerShown:false}}/> */}
      <Stack.Screen name = 'UpdateTask' component = {UpdateTask} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

function TabNav() {
  return (
  <Tab.Navigator initialRouteName="Goals" 
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let iconType;

      if (route.name === 'Add Goal') {
        iconName = focused ? 'md-add-circle-sharp' : 'md-add-circle-outline';
        iconType = IoniconsView;
      } else if (route.name === 'Goals') {
        iconName = 'tasks';
        iconType = FontAwesomeView;
      } else if (route.name === 'Logout') {
        iconName = 'logout';
        iconType = AntDesignView;
      }
      // You can return 
      return iconType(iconName);
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'lightgray',
  })}>
    
    <Tab.Screen name = 'Goals' component = {TaskNav} options={{headerShown:false}}/>
    <Tab.Screen name = 'Add Goal' component = {AddTask} options={{headerShown:false}}/>
    <Tab.Screen name = 'Logout' component = {Logout} options={{headerShown:false}}/>
  </Tab.Navigator>
  )
}


export default function App() {
  return (
    <Provider store = {store} persistor = {persistor}>
      <NavigationContainer style = {styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
          <Stack.Screen name="View Goals" component={TabNav} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
