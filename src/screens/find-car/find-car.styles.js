import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        width: deviceRevolution.width,
        height: deviceRevolution.height,
        flexDirection: "column",
        backgroundColor: "#fff"
    },
    order__container: {
        width: deviceRevolution.width,
        height: deviceRevolution.height * 0.95,
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    reverse__order: {
        flexDirection: "column-reverse"
    },
    container_mapview: {
        flex: 1,
        marginTop: 10
    },
    map__view: {
        height: deviceRevolution.height * 0.4
    },
    loading: {
        height: deviceRevolution.height * 0.35,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        fontFamily: "Texgyreadventor-regular",
        color: "#444444",
        fontSize: 16
    },
    loading__icon: {
        width: 30,
        height: 30,
        marginVertical: 5
    },
    time__counter: {
        fontFamily: "Texgyreadventor-bold",
        color: "#444444",
        fontSize: 18
    },
    action: {
        backgroundColor: "#f30000",
        color: "#fff",
        fontSize: 16,
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular",
        elevation: 12
    },
    floatingButton: {
        position: "absolute",
        width: 30,
        height: 30,
        right: 20,
        bottom: 40,
        borderWidth: 0.5,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.25
    }
});

export default styles;
