import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";
import { Card, ListItem, Button, Icon } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import bookings from "../../data/booking";
import colors from "./../config/colors";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
import {getBookings} from '../redux/actions/bookingAction';


const Bookingdash = () => {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  const selectedBookings = useSelector((state) => state.bookingReducers.Bookings);
  console.log(selectedBookings);
  
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[colors.light, colors["drak-gray"]]}>
          <View
            style={{
              position: "relative",
              marginVertical: SPACING * 3,
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{
                backgroundColor: colors["dark-gray"],
                padding: SPACING * 1.5,
                borderRadius: SPACING * 2,
                color: colors.light,
                fontSize: SPACING * 2,
                paddingLeft: SPACING * 4,
              }}
              placeholder="Search for Booking Id"
              placeholderTextColor={colors["light"]}
            />
            <Ionicons
              style={{
                position: "absolute",
                left: SPACING,
                paddingTop: SPACING,
              }}
              size={SPACING * 2.5}
              color={colors.light}
              name="search"
            />
          </View>

          {bookings.map((bookings) => (
            <Card key={bookings.id}>
              <Card.Title>{bookings.status}</Card.Title>
              <Card.Divider />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: SPACING * 1.5,
                  paddingBottom: SPACING * 1.5,
                }}
              >
                <Button color="primary">More</Button>
                <Button color="secondary">Details</Button>
                <Button color="warning">Edit</Button>
                <Button color="error">Delete</Button>
              </View>
              <Card.Divider />
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>Name</ListItem.Title>
                  <ListItem.Subtitle>{bookings.name}</ListItem.Subtitle>

                  <ListItem.Title>Start Time</ListItem.Title>
                  <ListItem.Subtitle>{bookings.startDate}</ListItem.Subtitle>

                  <ListItem.Title>End Time</ListItem.Title>
                  <ListItem.Subtitle>{bookings.endDate}</ListItem.Subtitle>

                  <ListItem.Title>Total Days</ListItem.Title>
                  <ListItem.Subtitle>{bookings.totalDays}</ListItem.Subtitle>

                  <ListItem.Title>Total Price</ListItem.Title>
                  <ListItem.Subtitle>{bookings.totalPrice}</ListItem.Subtitle>

                  <ListItem.Title>fixedPrice</ListItem.Title>
                  <ListItem.Subtitle>{bookings.fixedPrice}</ListItem.Subtitle>

                  <ListItem.Title>Booked Car</ListItem.Title>
                  <ListItem.Subtitle>{bookings.car}</ListItem.Subtitle>

                  <ListItem.Title>Booked On</ListItem.Title>
                  <ListItem.Subtitle>{bookings.createdAt}</ListItem.Subtitle>

                  <ListItem.Title>Current Status</ListItem.Title>
                  <ListItem.Subtitle>{bookings.status}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              </Card>
          ))}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookingdash;
