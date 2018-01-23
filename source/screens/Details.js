//import liraries
import React, { Component } from 'react';
import { View,Button, TouchableOpacity } from 'react-native';
import  ScaleSheet from "react-native-scalesheet";

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Footer,
    Left,
    Right,
    H1,
    H2
  } from "native-base";


// create a component
class Details extends Component {

    static navigationOptions = ({navigation})=>({
        title: "News Title",
    headerLeft: null,
    headerTitleStyle: { alignSelf: "center", color: "#eee" },
    headerStyle: { backgroundColor: "#1565c0" }
    });


    

    render() {

        const {state,navigate,goBack} = this.props.navigation;
        return (
            <View style={styles.main}>
                <Container>
                    <Content>
                    <Card>
                  <TouchableOpacity>
                  <CardItem>
                    <Body>
                        <H2>North Korea Invaded China..</H2>
                      <Text style={{marginTop:14,fontSize:15}}>It is a long established fact that a reader will be 
                          distracted by the readable content of a page when looking 
                          at its layout. The point of using Lorem Ipsum is that 
                          it has a more-or-less normal distribution of letters, as
                           opposed to using 'Content here, content here', making it look 
                           like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and
                            </Text>
                    </Body>
                  </CardItem>
                  </TouchableOpacity>
                </Card>
                     </Content>
                    
                     <TouchableOpacity onPress={()=> goBack()}>
                <Footer style={{alignItems:'center'}}>

                    <Text style={{fontSize:17,fontWeight:"bold",color:"white"}}>Go Back</Text>
                </Footer>
                </TouchableOpacity>
                </Container>
            </View>
        );
    }
}

// define your styles
const styles = ScaleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
});

//make this component available to the app
export default Details;
