import react, { useEffect } from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import feeds from "../../data/feed";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {getFeeds} from '../redux/actions/feedActions';


const Feeddash = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  const selectedFeeds = useSelector((state) => state.feedReducers.Feeds);
  console.log(selectedFeeds);

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
              placeholder="Search for feed metaData or Id"
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
          {feeds.map((feed, id) => (
            <Card key={id}>
              <Card.Title>{feed.metaData}</Card.Title>
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
              <Card.Image source={feed.image} />
              <Text style={{ marginBottom: 10 }}>{feed.message}</Text>
              <Card.Divider />
              <Button
                icon={<Icon name="thumb-up" color="#ffffff" />}
                title=" Like - 55"
              />
              <Card.Divider />
              <Text
                style={{
                  color: colors.light,
                  fontWeight: "700",
                  fontSize: SPACING * 2,
                  marginBottom: SPACING,
                }}
              >
                Comments
              </Text>
              {feed.comments.map((comment, id) => (
                <ListItem key={id} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title key={id}>{comment.name}</ListItem.Title>
                    <ListItem.Subtitle key={id}>
                      {comment.comment}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))}

              <TextInput
                style={{
                  borderColor: "red",
                  height: SPACING * 3,
                }}
                placeholder="Add Your Comment Here"
              />
              <Button
                icon={<Icon name="done" color={"red"} />}
                title="Submit"
              />
            </Card>
          ))}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feeddash;