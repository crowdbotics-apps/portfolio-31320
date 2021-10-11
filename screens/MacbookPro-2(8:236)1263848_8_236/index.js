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
      <View style={styles.View_8_237} />
      <View style={styles.View_8_238} />
      <View style={styles.View_8_239} />
      <View style={styles.View_8_240} />
      <View style={styles.View_8_241} />
      <View style={styles.View_8_242} />
      <View style={styles.View_8_243} />
      <View style={styles.View_8_244} />
      <View style={styles.View_8_245} />
      <View style={styles.View_8_246} />
      <View style={styles.View_8_247} />
      <View style={styles.View_8_248} />
      <View style={styles.View_8_249}>
        <Text style={styles.Text_8_249}>Patrick IGWE</Text>
      </View>
      <View style={styles.View_8_250}>
        <Text style={styles.Text_8_250}>Frontend/Mobile Software Engineer</Text>
      </View>
      <View style={styles.View_8_251}>
        <View style={styles.View_8_252} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/5c5f/a5ca2d0586fdf5d9939306ad77f43d40"
          }}
          style={styles.ImageBackground_8_253}
        />
      </View>
      <View style={styles.View_8_255}>
        <View style={styles.View_8_256} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5c/a85e/38e3f415163bed91da5dd00b380c229d"
          }}
          style={styles.ImageBackground_8_257}
        />
      </View>
      <View style={styles.View_8_259}>
        <View style={styles.View_8_260} />
        <View style={styles.View_8_261}>
          <Text style={styles.Text_8_261}>Patrick.</Text>
        </View>
      </View>
      <View style={styles.View_8_262} />
      <View style={styles.View_8_263} />
      <TouchableOpacity
        style={styles.TouchableOpacity_8_264}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      >
        <View style={styles.View_8_265} />
        <View style={styles.View_8_266}>
          <Text style={styles.Text_8_266}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_267}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_237"))
        }
      >
        <View style={styles.View_8_268} />
        <View style={styles.View_8_269}>
          <Text style={styles.Text_8_269}>About me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_8_270}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_355"))
        }
      >
        <View style={styles.View_8_271} />
        <View style={styles.View_8_272}>
          <Text style={styles.Text_8_272}>Portfolio</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_8_273}>
        <View style={styles.View_8_274} />
        <View style={styles.View_8_275}>
          <Text style={styles.Text_8_275}>ENG</Text>
        </View>
      </View>
      <View style={styles.View_8_276}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f5/c0a9/831b7ffcf168bff5cbdb3ba6a1f7e31d"
          }}
          style={styles.ImageBackground_8_277}
        />
      </View>
      <View style={styles.View_8_278}>
        <Text style={styles.Text_8_278}>Professional Summary</Text>
      </View>
      <View style={styles.View_8_279}>
        <Text style={styles.Text_8_279}>
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
        style={styles.ImageBackground_8_280}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_8_281}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_285"))
        }
      />
      <View style={styles.View_8_282}>
        <Text style={styles.Text_8_282}>My Experience</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.95081967213115%") },
  View_8_237: {
    width: wp("100.06944444444446%"),
    minWidth: wp("100.06944444444446%"),
    height: hp("122.13114754098359%"),
    minHeight: hp("122.13114754098359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_238: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333334%"),
    top: hp("20.62841530054645%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_239: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.20833333333333%"),
    top: hp("20.62841530054645%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_240: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333332%"),
    top: hp("40.30054644808743%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_8_241: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("40.30054644808743%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_8_242: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333332%"),
    top: hp("59.97267759562842%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_8_243: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.20833333333333%"),
    top: hp("59.97267759562842%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_244: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(12, 66, 173, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_245: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333334%"),
    top: hp("59.97267759562842%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_246: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333332%"),
    top: hp("79.6448087431694%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_247: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333332%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_8_248: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("20.62841530054645%"),
    backgroundColor: "rgba(0, 54, 158, 1)"
  },
  View_8_249: {
    width: wp("15.069444444444443%"),
    minWidth: wp("15.069444444444443%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.916666666666664%"),
    top: hp("39.34426229508197%"),
    justifyContent: "flex-start"
  },
  Text_8_249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_250: {
    width: wp("37.916666666666664%"),
    minWidth: wp("37.916666666666664%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.125%"),
    top: hp("52.86885245901639%"),
    justifyContent: "flex-start"
  },
  Text_8_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_251: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.20833333333333%"),
    top: hp("0.9562841530054645%")
  },
  View_8_252: {
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
  ImageBackground_8_253: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_8_255: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("0.9562841530054645%")
  },
  View_8_256: {
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
  ImageBackground_8_257: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_8_259: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333334%"),
    top: hp("0.9562841530054645%")
  },
  View_8_260: {
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
  View_8_261: {
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
  Text_8_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_8_262: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_263: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208333333333332%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_8_264: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.208333333333336%"),
    top: hp("0.9562841530054645%")
  },
  View_8_265: {
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
  View_8_266: {
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
  Text_8_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_267: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("0.9562841530054645%")
  },
  View_8_268: {
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
  View_8_269: {
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
  Text_8_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_8_270: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.208333333333336%"),
    top: hp("0.9562841530054645%")
  },
  View_8_271: {
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
  View_8_272: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111143%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_272: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_273: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.20833333333333%"),
    top: hp("0.9562841530054645%")
  },
  View_8_274: {
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
  View_8_275: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777786%"),
    top: hp("8.60655737704918%"),
    justifyContent: "flex-start"
  },
  Text_8_275: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_8_276: {
    width: wp("72.91666666666666%"),
    minWidth: wp("72.91666666666666%"),
    height: hp("57.240437158469945%"),
    minHeight: hp("57.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.291666666666668%"),
    top: hp("59.97267759562842%")
  },
  ImageBackground_8_277: {
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
  View_8_278: {
    width: wp("47.22222222222222%"),
    minWidth: wp("47.22222222222222%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.333333333333336%"),
    top: hp("64.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_8_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_279: {
    width: wp("47.708333333333336%"),
    minWidth: wp("47.708333333333336%"),
    minHeight: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.125%"),
    top: hp("73.63387978142076%"),
    justifyContent: "flex-start"
  },
  Text_8_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_280: {
    width: wp("35.625%"),
    minWidth: wp("35.625%"),
    height: hp("90.98360655737704%"),
    minHeight: hp("90.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.486111111111111%"),
    top: hp("30.46448087431694%"),
    resizeMode: "cover"
  },
  TouchableOpacity_8_281: {
    width: wp("15.48611111111111%"),
    minWidth: wp("15.48611111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.47222222222222%"),
    top: hp("106.28415300546447%"),
    backgroundColor: "rgba(244, 220, 1, 1)"
  },
  View_8_282: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("108.33333333333333%"),
    justifyContent: "center"
  },
  Text_8_282: {
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
