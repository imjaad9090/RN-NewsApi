//import liraries
import React, { Component } from "react";
import ScaleSheet from "react-native-scalesheet";

import { View, Button, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Footer
} from "native-base";
import TimeAgo from "react-native-timeago";

class Business extends Component {
  state = {
    data: []
  };

  static navigationOptions = {
    title: "Business",
    headerLeft: null,
    headerTitleStyle: { alignSelf: "center", color: "#eee" },
    headerStyle: { backgroundColor: "#1565c0" }
  };

  business() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=138eebeba38f4655b51c1a532985542f"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson.articles });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.business();
  }
  render() {
    const { state, navigate } = this.props.navigation;

    return (
      <View style={styles.main}>
        <Container>
          <Content>
            <FlatList
              keyExtractor={(x, i) => i}
              data={this.state.data}
              renderItem={({ item }) => (
                <Card>
                  <CardItem>
                    <Body>
                      <Text>{`${item.title}`}..</Text>
                      <Text style={{ fontWeight: "bold" }}>{`${
                        item.source.name
                      }`}</Text>
                      <Text style={{ fontWeight: "100" }}>
                        Posted : <TimeAgo time={`${item.publishedAt}`} />
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              )}
            />
          </Content>

          <Footer style={{ backgroundColor: "#ffffff" }}>
            <View style={styles.container}>
              <Button
                color="#1565bf"
                title="Business"
                onPress={() => navigate("business")}
              />
              <Button
                color="#1565bf"
                title="Techology"
                onPress={() => navigate("tech")}
              />
              <Button
                color="#1565bf"
                title="Fashion"
                onPress={() => navigate("fashion")}
              />
            </View>
          </Footer>
        </Container>
      </View>
    );
  }
}

// define your styles
const styles = ScaleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eeeeee"
  },
  main: {
    flex: 1,
    backgroundColor: "#eeeeee"
  }
});

//make this component available to the app
export default Business;
