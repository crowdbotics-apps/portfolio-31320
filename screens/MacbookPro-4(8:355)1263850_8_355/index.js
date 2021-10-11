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
      <View style={styles.View_8_356} />
      <View style={styles.View_8_357} />
      <View style={styles.View_8_358} />
      <View style={styles.View_8_359} />
      <View style={styles.View_8_360} />
      <View style={styles.View_8_361} />
      <View style={styles.View_8_362} />
      <View style={styles.View_8_363} />
      <View style={styles.View_8_364} />
      <View style={styles.View_8_365} />
      <View style={styles.View_8_366} />
      <View style={styles.View_8_367} />
      <View style={styles.View_8_368}>
        <View style={styles.View_8_369} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/5c5f/a5ca2d0586fdf5d9939306ad77f43d40"
          }}
          style={styles.ImageBackground_8_370}
        />
      </View>
      <View style={styles.View_8_372}>
        <View style={styles.View_8_373} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5c/a85e/38e3f415163bed91da5dd00b380c229d"
          }}
          style={styles.ImageBackground_8_374}
        />
      </View>
      <View style={styles.View_8_376}>
        <View style={styles.View_8_377} />
        <View style={styles.View_8_378}>
          <Text style={styles.Text_8_378}>Patrick.</Text>
        </View>
      </View>
      <View style={styles.View_8_379} />
      <View style={styles.View_8_380} />
      <TouchableOpacity
        style={styles.TouchableOpacity_8_381}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_8_382} />
        <View style={styles.View_8_383}>
          <Text style={styles.Text_8_383}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_384}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_236"))
        }
      >
        <View style={styles.View_8_385} />
        <View style={styles.View_8_386}>
          <Text style={styles.Text_8_386}>About me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_387}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_356"))
        }
      >
        <View style={styles.View_8_388} />
        <View style={styles.View_8_389}>
          <Text style={styles.Text_8_389}>Portfolio</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_390}>
        <View style={styles.View_8_391} />
        <View style={styles.View_8_392}>
          <Text style={styles.Text_8_392}>ENG</Text>
        </View>
      </View>
      <View style={styles.View_8_393}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f538/05cd/9c2f2e1edb33cddc166387075f9e7eb5"
          }}
          style={styles.ImageBackground_8_394}
        />
      </View>
      <View style={styles.View_8_395}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5166/8157/c58a1c10e47866e15e045e26a8c1f9a7"
          }}
          style={styles.ImageBackground_8_396}
        />
      </View>
      <View style={styles.View_8_397}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bde8/34b5/76966438361e6bb46b2ccc92e75c168f"
          }}
          style={styles.ImageBackground_8_398}
        />
      </View>
      <View style={styles.View_8_399}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3d4/4d32/99c6fe60bcb11605a7530c26a0e933b8"
          }}
          style={styles.ImageBackground_8_400}
        />
      </View>
      <View style={styles.View_8_401}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11c/47fa/77aeb13084be4d4eab887f69244a4a60"
          }}
          style={styles.ImageBackground_8_402}
        />
      </View>
      <View style={styles.View_8_403}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0a6/b01c/7353ef1c00fc1ec0fe2c6bf18071eaf9"
          }}
          style={styles.ImageBackground_8_404}
        />
      </View>
      <View style={styles.View_8_405}>
        <Text style={styles.Text_8_405}>Portfolio</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.95081967213115%") },
  View_8_356: {
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
  View_8_357: {
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
  View_8_358: {
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
  View_8_359: {
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
  View_8_360: {
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
  View_8_361: {
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
  View_8_362: {
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
  View_8_363: {
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
  View_8_364: {
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
  View_8_365: {
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
  View_8_366: {
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
  View_8_367: {
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
  View_8_368: {
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
  View_8_369: {
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
  ImageBackground_8_370: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_8_372: {
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
  View_8_373: {
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
  ImageBackground_8_374: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%")
  },
  View_8_376: {
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
  View_8_377: {
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
  View_8_378: {
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
  Text_8_378: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_8_379: {
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
  View_8_380: {
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
  TouchableOpacity_8_381: {
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
  View_8_382: {
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
  View_8_383: {
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
  Text_8_383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_384: {
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
  View_8_385: {
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
  View_8_386: {
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
  Text_8_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_387: {
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
  View_8_388: {
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
  View_8_389: {
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
  Text_8_389: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_390: {
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
  View_8_391: {
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
  View_8_392: {
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
  Text_8_392: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_393: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_8_394: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_395: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_8_396: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_397: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.01388888888889%"),
    top: hp("32.92349726775956%")
  },
  ImageBackground_8_398: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_399: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.61111111111111%"),
    top: hp("112.43169398907105%")
  },
  ImageBackground_8_400: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_401: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.69444444444444%"),
    top: hp("112.43169398907105%")
  },
  ImageBackground_8_402: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_403: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.43055555555556%"),
    top: hp("112.43169398907105%")
  },
  ImageBackground_8_404: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    height: hp("71.17486338797814%"),
    minHeight: hp("71.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_405: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("20.901639344262296%"),
    justifyContent: "flex-start"
  },
  Text_8_405: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
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
