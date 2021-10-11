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
      <View style={styles.View_8_286} />
      <View style={styles.View_8_287} />
      <View style={styles.View_8_288} />
      <View style={styles.View_8_289} />
      <View style={styles.View_8_290} />
      <View style={styles.View_8_291} />
      <View style={styles.View_8_292} />
      <View style={styles.View_8_293} />
      <View style={styles.View_8_294} />
      <View style={styles.View_8_295} />
      <View style={styles.View_8_296} />
      <View style={styles.View_8_297} />
      <View style={styles.View_8_298}>
        <Text style={styles.Text_8_298}>Patrick IGWE</Text>
      </View>
      <View style={styles.View_8_299}>
        <Text style={styles.Text_8_299}>Frontend/Mobile Software Engineer</Text>
      </View>
      <View style={styles.View_8_300}>
        <View style={styles.View_8_301} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/5c5f/a5ca2d0586fdf5d9939306ad77f43d40"
          }}
          style={styles.ImageBackground_8_302}
        />
      </View>
      <View style={styles.View_8_304}>
        <View style={styles.View_8_305} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5c/a85e/38e3f415163bed91da5dd00b380c229d"
          }}
          style={styles.ImageBackground_8_306}
        />
      </View>
      <View style={styles.View_8_308}>
        <View style={styles.View_8_309} />
        <View style={styles.View_8_310}>
          <Text style={styles.Text_8_310}>Patrick.</Text>
        </View>
      </View>
      <View style={styles.View_8_311} />
      <View style={styles.View_8_312} />
      <TouchableOpacity
        style={styles.TouchableOpacity_8_313}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_8_314} />
        <View style={styles.View_8_315}>
          <Text style={styles.Text_8_315}>Home</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_316}>
        <View style={styles.View_8_317} />
        <View style={styles.View_8_318}>
          <Text style={styles.Text_8_318}>About me</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_319}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_355"))
        }
      >
        <View style={styles.View_8_320} />
        <View style={styles.View_8_321}>
          <Text style={styles.Text_8_321}>Portfolio</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_322}>
        <View style={styles.View_8_323} />
        <View style={styles.View_8_324}>
          <Text style={styles.Text_8_324}>ENG</Text>
        </View>
      </View>
      <View style={styles.View_8_325}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a43/30b8/f1dec5b084f115c17b0747ecfb15b220"
          }}
          style={styles.ImageBackground_8_326}
        />
      </View>
      <View style={styles.View_8_327}>
        <Text style={styles.Text_8_327}>Professional Summary</Text>
      </View>
      <View style={styles.View_8_328}>
        <Text style={styles.Text_8_328}>
          Experienced Mobile and Front End developer with over 8 years of
          experience in the Software development Industry. Excellent reputation
          for resolving problems, improving customer satisfaction, and driving
          overall operational improvements. Consistently saved costs while
          increasing profits.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db99/1811/6704981f3f983aa302dcfd80c73c37b1"
        }}
        style={styles.ImageBackground_8_329}
      />
      <View style={styles.View_8_330} />
      <View style={styles.View_8_331}>
        <Text style={styles.Text_8_331}>My Experience</Text>
      </View>
      <View style={styles.View_9_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4b/1f7b/03144b33e5d484c537c0d29355814f6a"
          }}
          style={styles.ImageBackground_9_10}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4797/9795/fc168919da3b207582aa5d27b0645585"
        }}
        style={styles.ImageBackground_8_333}
      />
      <View style={styles.View_8_334} />
      <View style={styles.View_8_335} />
      <View style={styles.View_8_336} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19de/124e/53e7351c1ab3c9c67018af39a81f9612"
        }}
        style={styles.ImageBackground_8_337}
      />
      <View style={styles.View_8_338} />
      <View style={styles.View_8_339}>
        <Text style={styles.Text_8_339}>Experiences</Text>
      </View>
      <View style={styles.View_8_340}>
        <Text style={styles.Text_8_340}>Work</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00d5/e4be/41f14a3bcfeea289e5c0fa864d5de5ea"
        }}
        style={styles.TouchableOpacity_8_341}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_236"))
        }
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.95081967213115%") },
  View_8_286: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_287: {
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
  View_8_288: {
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
  View_8_289: {
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
  View_8_290: {
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
  View_8_291: {
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
  View_8_292: {
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
  View_8_293: {
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
  View_8_294: {
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
  View_8_295: {
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
  View_8_296: {
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
  View_8_297: {
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
  View_8_298: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.70833333333333%"),
    top: hp("38.3879781420765%"),
    justifyContent: "flex-start"
  },
  Text_8_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_299: {
    width: wp("37.916666666666664%"),
    minWidth: wp("37.916666666666664%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.916666666666664%"),
    top: hp("51.91256830601093%"),
    justifyContent: "flex-start"
  },
  Text_8_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_300: {
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
  View_8_301: {
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
  ImageBackground_8_302: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_8_304: {
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
  View_8_305: {
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
  ImageBackground_8_306: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%")
  },
  View_8_308: {
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
  View_8_309: {
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
  View_8_310: {
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
  Text_8_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_8_311: {
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
  View_8_312: {
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
  TouchableOpacity_8_313: {
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
  View_8_314: {
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
  View_8_315: {
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
  Text_8_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_316: {
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
  View_8_317: {
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
  View_8_318: {
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
  Text_8_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_319: {
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
  View_8_320: {
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
  View_8_321: {
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
  Text_8_321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_322: {
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
  View_8_323: {
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
  View_8_324: {
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
  Text_8_324: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_325: {
    width: wp("72.91666666666666%"),
    minWidth: wp("72.91666666666666%"),
    height: hp("57.240437158469945%"),
    minHeight: hp("57.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.083333333333332%"),
    top: hp("59.01639344262295%")
  },
  ImageBackground_8_326: {
    width: wp("72.91666666666666%"),
    minWidth: wp("72.91666666666666%"),
    height: hp("57.240437158469945%"),
    minHeight: hp("57.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_327: {
    width: wp("47.22222222222222%"),
    minWidth: wp("47.22222222222222%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.125%"),
    top: hp("63.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_8_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_328: {
    width: wp("47.708333333333336%"),
    minWidth: wp("47.708333333333336%"),
    minHeight: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.916666666666664%"),
    top: hp("72.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_8_328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_329: {
    width: wp("35.625%"),
    minWidth: wp("35.625%"),
    height: hp("90.98360655737704%"),
    minHeight: hp("90.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("29.508196721311474%"),
    resizeMode: "cover"
  },
  View_8_330: {
    width: wp("15.48611111111111%"),
    minWidth: wp("15.48611111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.26388888888889%"),
    top: hp("105.32786885245902%"),
    backgroundColor: "rgba(244, 220, 1, 1)"
  },
  View_8_331: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.166666666666664%"),
    top: hp("107.37704918032787%"),
    justifyContent: "center"
  },
  Text_8_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.1311475409836%"),
    minHeight: hp("97.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.81967213114754%")
  },
  ImageBackground_9_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.1311475409836%"),
    minHeight: hp("97.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_333: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.375%"),
    top: hp("29.508196721311474%")
  },
  View_8_334: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("32.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_335: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("62.841530054644814%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_8_336: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("90.98360655737704%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_8_337: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("95.3551912568306%"),
    minHeight: hp("95.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("25.81967213114754%")
  },
  View_8_338: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("89.34426229508196%")
  },
  View_8_339: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("110.51912568306011%"),
    justifyContent: "flex-start"
  },
  Text_8_339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_8_340: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("107.92349726775956%"),
    justifyContent: "flex-start"
  },
  Text_8_340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  TouchableOpacity_8_341: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.41666666666667%"),
    top: hp("31.693989071038253%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
