import react, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Card, ListItem, Button, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import blogs from "../../data/blog";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {useSelector, useDispatch} from 'react-redux';
import {getBlogs} from '../redux/actions/blogActions';

const Blogdash = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch]);

  const selectedBlogs = useSelector((state) => state.blogReducers.Blogs);
  console.log(selectedBlogs);

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
              placeholder="Search for Blog metData or Id"
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
          {blogs.map((blog) => (
            <Card>
              <View
                   style={{
                    
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: SPACING * 1.5,
                    paddingBottom: SPACING * 1.5
                  }}
                >
                  <Button color="primary">Hide</Button>
                  <Button color="secondary">Details</Button>
                  <Button color="warning">Edit</Button>
                  <Button color="error">Delete</Button>
                </View>
                <Card.Divider />
              <Card.Title>{blog.metaData}</Card.Title>
              <Card.Divider />
              <Card.Image source={blog.image} />
              <Text style={{ marginBottom: 10 }}>{blog.message}</Text>
              <Button
                icon={<Icon name="inbox" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="Want to reply"
              />
            </Card>
          ))}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Blogdash;