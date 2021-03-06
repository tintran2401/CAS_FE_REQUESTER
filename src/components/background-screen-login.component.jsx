import React from "react";

import { View, Image, StyleSheet } from "react-native";

const BackgroundLogin = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require("../../assets/icons/background-login.png")} />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        position: "absolute",
        zIndex: 0,
        width: " 100%",
        height: "100%"
    }
});

export default BackgroundLogin;
