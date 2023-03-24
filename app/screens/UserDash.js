import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { ListItem, Card, Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import Users from "../../data/users";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/userActions";

const Usersdash = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const selectedUsers = useSelector((state) => state.userReducers.Users);
  console.log(selectedUsers);

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
              placeholder="Search for User name, mail or Id"
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
          {Users.map((user, id) => (
            <Card>
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
              <ListItem key={id} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Name</ListItem.Title>
                  <ListItem.Subtitle>{user.name}</ListItem.Subtitle>

                  <ListItem.Title>Email</ListItem.Title>
                  <ListItem.Subtitle>{user.email}</ListItem.Subtitle>

                  <ListItem.Title>Password</ListItem.Title>
                  <ListItem.Subtitle>{user.password}</ListItem.Subtitle>

                  <ListItem.Title>Role</ListItem.Title>
                  <ListItem.Subtitle>{user.role}</ListItem.Subtitle>

                  <ListItem.Title>Created At</ListItem.Title>
                  <ListItem.Subtitle>{user.createdAt}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </Card>
          ))}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Usersdash;
