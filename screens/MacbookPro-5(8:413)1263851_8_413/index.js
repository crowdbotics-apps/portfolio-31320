import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_414} />
      <View style={styles.View_8_415} />
      <View style={styles.View_8_416} />
      <View style={styles.View_8_417} />
      <View style={styles.View_8_418} />
      <View style={styles.View_8_419} />
      <View style={styles.View_8_420} />
      <View style={styles.View_8_421} />
      <View style={styles.View_8_422} />
      <View style={styles.View_8_423} />
      <View style={styles.View_8_424} />
      <View style={styles.View_8_425} />
      <View style={styles.View_8_426}>
        <View style={styles.View_8_427} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/5c5f/a5ca2d0586fdf5d9939306ad77f43d40"
          }}
          style={styles.ImageBackground_8_428}
        />
      </View>
      <View style={styles.View_8_430}>
        <View style={styles.View_8_431} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5c/a85e/38e3f415163bed91da5dd00b380c229d"
          }}
          style={styles.ImageBackground_8_432}
        />
      </View>
      <View style={styles.View_8_434}>
        <View style={styles.View_8_435} />
        <View style={styles.View_8_436}>
          <Text style={styles.Text_8_436}>Patrick.</Text>
        </View>
      </View>
      <View style={styles.View_8_437} />
      <View style={styles.View_8_438} />
      <TouchableOpacity
        style={styles.TouchableOpacity_8_439}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_8_440} />
        <View style={styles.View_8_441}>
          <Text style={styles.Text_8_441}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_442}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_236"))
        }
      >
        <View style={styles.View_8_443} />
        <View style={styles.View_8_444}>
          <Text style={styles.Text_8_444}>About me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_445}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_414"))
        }
      >
        <View style={styles.View_8_446} />
        <View style={styles.View_8_447}>
          <Text style={styles.Text_8_447}>Portfolio</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_448}>
        <View style={styles.View_8_449} />
        <View style={styles.View_8_450}>
          <Text style={styles.Text_8_450}>ENG</Text>
        </View>
      </View>
      <View style={styles.View_8_451}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72ea/9f20/e3d22ab4a444d2d0f25e9b034899f596"
          }}
          style={styles.ImageBackground_8_452}
        />
      </View>
      <View style={styles.View_8_455}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26d0/8dcb/bb212fd7663425bc7abc5995e391b31d"
          }}
          style={styles.ImageBackground_8_456}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_9_4}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_285"))
          }
        />
      </View>
      <View style={styles.View_8_464}>
        <Text style={styles.Text_8_464}>Contact Me</Text>
      </View>
      <View style={styles.View_8_465}>
        <Text style={styles.Text_8_465}>
          Hey! I would like to know how i can help.
        </Text>
      </View>
      <View style={styles.View_8_466} />
      <View style={styles.View_8_467} />
      <View style={styles.View_8_471}>
        <Text style={styles.Text_8_471}>How can we reach you?</Text>
      </View>
      <View style={styles.View_8_472}>
        <Text style={styles.Text_8_472}>Email Address</Text>
      </View>
      <View style={styles.View_8_468} />
      <View style={styles.View_8_469}>
        <Text style={styles.Text_8_469}>What can i call you?</Text>
      </View>
      <View style={styles.View_8_470}>
        <Text style={styles.Text_8_470}>Full Name</Text>
      </View>
      <View style={styles.View_9_2}>
        <Text style={styles.Text_9_2}>Alright, let me know</Text>
      </View>
      <View style={styles.View_9_3}>
        <Text style={styles.Text_9_3}>Message</Text>
      </View>
      <View style={styles.View_9_5}>
        <Text style={styles.Text_9_5}>Contact us</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.95081967213115%") },
  View_8_414: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("121.17486338797814%"),
    minHeight: hp("121.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_415: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_416: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_417: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("39.34426229508197%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_8_418: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("39.34426229508197%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_8_419: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("59.01639344262295%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_8_420: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("59.01639344262295%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_421: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("98.36065573770492%"),
    backgroundColor: "rgba(12, 66, 173, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_422: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("59.01639344262295%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_423: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("78.68852459016394%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_424: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("98.36065573770492%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_8_425: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("19.672131147540984%"),
    backgroundColor: "rgba(0, 54, 158, 1)"
  },
  View_8_426: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%")
  },
  View_8_427: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 36, 102, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_8_428: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_8_430: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_8_431: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 62, 171, 1)"
  },
  ImageBackground_8_432: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%")
  },
  View_8_434: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_8_435: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 220, 1, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_8_436: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("8.060109289617486%"),
    justifyContent: "flex-start"
  },
  Text_8_436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_8_437: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_438: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_8_439: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_8_440: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 61, 177, 1)"
  },
  View_8_441: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222214%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_442: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_8_443: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 56, 164, 1)"
  },
  View_8_444: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_445: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.00000000000001%"),
    top: hp("0%")
  },
  View_8_446: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 53, 155, 1)"
  },
  View_8_447: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.986111111111107%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_448: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%")
  },
  View_8_449: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 45, 132, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_450: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0277777777777715%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_450: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_451: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_8_452: {
    width: wp("28.26388888888889%"),
    minWidth: wp("28.26388888888889%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_455: {
    width: wp("45.416666666666664%"),
    minWidth: wp("45.416666666666664%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_8_456: {
    width: wp("45.416666666666664%"),
    minWidth: wp("45.416666666666664%"),
    height: hp("77.3224043715847%"),
    minHeight: hp("77.3224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_9_4: {
    width: wp("15.48611111111111%"),
    minWidth: wp("15.48611111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.5%"),
    top: hp("66.53005464480874%"),
    backgroundColor: "rgba(244, 220, 1, 1)"
  },
  View_8_464: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_8_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_8_465: {
    width: wp("40.486111111111114%"),
    minWidth: wp("40.486111111111114%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("35.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_8_465: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_8_466: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("51.36612021857923%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_467: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("65.84699453551912%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_471: {
    width: wp("16.25%"),
    minWidth: wp("16.25%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("71.03825136612022%"),
    justifyContent: "flex-start"
  },
  Text_8_471: {
    color: "rgba(88, 139, 236, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_8_472: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("67.07650273224044%"),
    justifyContent: "flex-start"
  },
  Text_8_472: {
    color: "rgba(0, 8, 23, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_8_468: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("80.19125683060109%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_469: {
    width: wp("16.25%"),
    minWidth: wp("16.25%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("55.73770491803278%"),
    justifyContent: "flex-start"
  },
  Text_8_469: {
    color: "rgba(88, 139, 236, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_8_470: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375%"),
    top: hp("52.04918032786885%"),
    justifyContent: "flex-start"
  },
  Text_8_470: {
    color: "rgba(0, 8, 23, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_9_2: {
    width: wp("16.25%"),
    minWidth: wp("16.25%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: hp("85.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_9_2: {
    color: "rgba(88, 139, 236, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_9_3: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: hp("81.55737704918032%"),
    justifyContent: "flex-start"
  },
  Text_9_3: {
    color: "rgba(0, 8, 23, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_9_5: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.68055555555556%"),
    top: hp("101.22950819672131%"),
    justifyContent: "center"
  },
  Text_9_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
