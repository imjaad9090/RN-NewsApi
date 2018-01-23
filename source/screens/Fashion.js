//import liraries
import React, { Component } from "react";
import { View, Button, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
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
import ScaleSheet from "react-native-scalesheet";

import TimeAgo from "react-native-timeago";

// create a component
class Fashion extends Component {
  
  constructor(){
    super();
  
  
  this.state = {
    data: [],
  };
  }
  static navigationOptions = {
    title: "Fashion",
    headerLeft: null,
    headerTitleStyle: { alignSelf: "center", color: "#eee" },
    headerStyle: { backgroundColor: "#1565c0" }
  };

  fashion() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=138eebeba38f4655b51c1a532985542f"
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
    this.fashion();
  }


  _handleItemDataOnPress(data) {
    this.setState({
        
    })
    
}

  render() {
    const { state, navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.main}>
        <Container>
          <Content>
            <FlatList
              keyExtractor={(x, i) => i}
              data={this.state.data}
              onPress={() => navigate("details")}
              renderItem={({ item }) => (
                <Card>
                  <TouchableOpacity onPress={() => navigate("details")}>
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
                  </TouchableOpacity>
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
export default Fashion;
