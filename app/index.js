import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Carsdash,
  HomeScreen,
  Bookingdash,
  Feeddash,
  UserDash,
  Blogdash
} from './screens'
import { Provider } from "react-redux";
import store from "./redux/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <Provider store={store}>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cars" component={Carsdash} />
      <Drawer.Screen name="Bookings" component={Bookingdash} />
      <Drawer.Screen name="Feeds" component={Feeddash} />
      <Drawer.Screen name="Users" component={UserDash} />
      <Drawer.Screen name="Blogs" component={Blogdash} />
    </Drawer.Navigator>
     </Provider>
  );
}
