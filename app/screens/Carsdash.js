import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Image, TextInput } from "react-native";
import {
  PricingCard,
  lightColors,
  Text,
  Card,
  Button,
  Icon,
  ListItem,
  Dialog,
} from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import cars from "../../data/carsData";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { getCars } from "../redux/actions/carActions";
import { useSelector, useDispatch } from "react-redux";

const gradient = [colors[("drak-gray", colors.black)]];

const Home = () => {
  const [visibleBannerAction, setVisibleBannerAction] = useState(false);
  const [visibleCarAction, setVisibleCarAction] = useState(false);

  const toggleBannerDailog = () => {
    return setVisibleBannerAction(!visibleBannerAction);
  };

  const toggleCarDailog = () => {
    return setVisibleCarAction(!visibleCarAction);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const selectedCars = useSelector((state) => state.carReducers.Cars);
  console.log(selectedCars);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[colors.light, colors["dark-gray"]]}>
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
              placeholder="Search for car brand or Id"
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

          <LinearGradient
            colors={gradient}
            style={{
              padding: SPACING * 3,
              height: 160,
              borderRadius: SPACING * 2,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                maxWidth: "50%",
              }}
            >
              <Button
                title={"Actions"}
                onPress={toggleBannerDailog}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Dialog
                isVisible={visibleBannerAction}
                onBackdropPress={toggleBannerDailog}
              >
                <Dialog.Title title="Dialog Title" />
                <Text>Dialog body text. Add relevant information here.</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: SPACING * 1.5,
                    paddingBottom: SPACING * 1.5,
                  }}
                >
                  <Button color="primary">Hide</Button>
                  <Button color="secondary">Details</Button>
                  <Button color="warning">Edit</Button>
                  <Button color="error">Delete</Button>
                </View>
              </Dialog>
              <Text
                style={{
                  color: colors.black,
                  fontSize: SPACING * 3.5,
                  fontWeight: "800",
                  marginBottom: SPACING,
                }}
              >
                20%
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontWeight: "700",
                  fontSize: SPACING * 2,
                  marginBottom: SPACING,
                }}
              >
                New Arrival
              </Text>
              <Text
                style={{
                  color: colors.black,
                }}
              >
                Get a new car, used car alson on rent, only on Rscars
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                position: "relative",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: 100,
                }}
                source={require("../../assets/cars/bmw-wlcom.png")}
              />
            </View>
          </LinearGradient>
          <Text
            style={{
              color: colors.light,
              fontSize: SPACING * 2,
              fontWeight: "600",
            }}
          >
            Top Deals
          </Text>
          {cars.map((car, id) => (
            <Card key={id}>
              <Card.Title>{car.model}</Card.Title>
              <Card.Divider />
              {/* <Card.Image style={{ padding: 0 }} source={car.image} /> */}
              <ListItem
                style={{
                  justifyContent: "flex-end",
                }}
              >
                <ListItem.Title>Has Sunroof</ListItem.Title>
                <ListItem.Subtitle>
                  {car.has_sunroof ? "Yes" : "No"}
                </ListItem.Subtitle>

                <ListItem.Title>License Number</ListItem.Title>
                <ListItem.Subtitle>{car.license_number}</ListItem.Subtitle>

                <ListItem.Title>Stock Number</ListItem.Title>
                <ListItem.Subtitle>{car.stock_number}</ListItem.Subtitle>

                <ListItem.Title>Passenger Capacity</ListItem.Title>
                <ListItem.Subtitle>{car.passenger_capacity}</ListItem.Subtitle>

                <ListItem.Title>Manufacturing Year</ListItem.Title>
                <ListItem.Subtitle>{car.manufacturing_year}</ListItem.Subtitle>

                <ListItem.Title>Mileage</ListItem.Title>
                <ListItem.Subtitle>{car.mileage}</ListItem.Subtitle>

                <ListItem.Title>Total Run</ListItem.Title>
                <ListItem.Subtitle>{car.total_run}</ListItem.Subtitle>

                <ListItem.Title>Transmission Type</ListItem.Title>
                <ListItem.Subtitle>{car.transmission_type}</ListItem.Subtitle>
              </ListItem>
              <PricingCard
                key={id}
                color={lightColors.primary}
                title={car.brand}
                price={car.price}
                info={["Feature 1 ", "Feature 2", "Feature 3"]}
              />
              <Button
                title={"Action"}
                onPress={toggleCarDailog}
                icon={<Icon name="edit" color="#ffffff" />}
              />
              <Dialog
                isVisible={visibleCarAction}
                onBackdropPress={toggleCarDailog}
              >
                <Dialog.Title title={car.brand} />
                <Text>Dialog body text. Add relevant information here.</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: SPACING * 1.5,
                    paddingBottom: SPACING * 1.5,
                  }}
                >
                  {car.isFeatured ? (
                    <Button color="primary">Hide</Button>
                  ) : (
                    <Button color="primary">Show</Button>
                  )}
                  <Button color="secondary">Details</Button>
                  <Button color="warning">Edit</Button>
                  <Button color="error">Delete</Button>
                </View>
              </Dialog>
            </Card>
          ))}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;