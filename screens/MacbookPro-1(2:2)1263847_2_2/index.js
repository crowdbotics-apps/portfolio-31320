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
      <View style={styles.View_2_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad44/c5c8/98d8a4fc73ad8468c2ecc248ba8cb0d8"
        }}
        style={styles.ImageBackground_2_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72a3/d20d/21c21313bbe4655a4baf932089692cd9"
        }}
        style={styles.ImageBackground_2_4}
      />
      <View style={styles.View_2_15}>
        <View style={styles.View_2_16} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/5c5f/a5ca2d0586fdf5d9939306ad77f43d40"
          }}
          style={styles.ImageBackground_2_17}
        />
      </View>
      <View style={styles.View_2_19}>
        <View style={styles.View_2_20} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c5c/a85e/38e3f415163bed91da5dd00b380c229d"
          }}
          style={styles.ImageBackground_2_21}
        />
      </View>
      <View style={styles.View_2_23}>
        <View style={styles.View_2_24} />
        <View style={styles.View_2_25}>
          <Text style={styles.Text_2_25}>Patrick.</Text>
        </View>
      </View>
      <View style={styles.View_2_26} />
      <View style={styles.View_2_27} />
      <View style={styles.View_2_28} />
      <View style={styles.View_2_29} />
      <View style={styles.View_2_30} />
      <View style={styles.View_2_31} />
      <View style={styles.View_2_32} />
      <View style={styles.View_2_33} />
      <View style={styles.View_2_34} />
      <View style={styles.View_2_35} />
      <View style={styles.View_2_36} />
      <View style={styles.View_2_37} />
      <View style={styles.View_2_38} />
      <View style={styles.View_2_39} />
      <View style={styles.View_2_40} />
      <View style={styles.View_2_41} />
      <View style={styles.View_2_42} />
      <View style={styles.View_2_43} />
      <View style={styles.View_8_230} />
      <View style={styles.View_8_231} />
      <View style={styles.View_8_232} />
      <View style={styles.View_8_233} />
      <View style={styles.View_8_234} />
      <View style={styles.View_2_44} />
      <View style={styles.View_2_45}>
        <View style={styles.View_2_46} />
        <View style={styles.View_2_47}>
          <Text style={styles.Text_2_47}>Home</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_48}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_236"))
        }
      >
        <View style={styles.View_2_49} />
        <View style={styles.View_2_50}>
          <Text style={styles.Text_2_50}>About me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_51}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_355"))
        }
      >
        <View style={styles.View_2_52} />
        <View style={styles.View_2_53}>
          <Text style={styles.Text_2_53}>Portfolio</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_54}>
        <View style={styles.View_2_55} />
        <View style={styles.View_2_56}>
          <Text style={styles.Text_2_56}>ENG</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_57}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_355"))
        }
      >
        <View style={styles.View_2_58} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8205/21f7/249aa611f2f59bd2ab507bc574707bd1"
          }}
          style={styles.ImageBackground_2_59}
        />
      </TouchableOpacity>
      <View style={styles.View_2_62}>
        <View style={styles.View_2_63} />
      </View>
      <View style={styles.View_2_78}>
        <Text style={styles.Text_2_78}>
          Welcome to my thoughtscave Hi, i’m Patrick
        </Text>
      </View>
      <View style={styles.View_4_86}>
        <Text style={styles.Text_4_86}>Say Hello.</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_4_91}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_413"))
        }
      >
        <View style={styles.View_2_8}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ca9/4c38/c7430bb080f658f030b15e525572f26a"
            }}
            style={styles.ImageBackground_2_9}
          />
        </View>
        <View style={styles.View_4_89}>
          <Text style={styles.Text_4_89}>Hire me</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_4_90}>
        <Text style={styles.Text_4_90}>
          Front End Designer, based in Dubai, UAE{" "}
        </Text>
      </View>
      <View style={styles.View_4_92}>
        <Text style={styles.Text_4_92}>Download cv</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f81/d680/93ec6ba975da3d9a8cb193667f4b9d28"
        }}
        style={styles.ImageBackground_4_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/e316/8677d308bd6578216a536c587fa38f4c"
        }}
        style={styles.ImageBackground_4_81}
      />
      <View style={styles.View_6_2}>
        <Text style={styles.Text_6_2}>..................................</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2e/e99f/b5de81aa7e809d80c60c9515de23ccec"
        }}
        style={styles.TouchableOpacity_6_3}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_413"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292e/8743/868f4dad62b7cf73aff8fc0a34bc40f5"
        }}
        style={styles.ImageBackground_4_83}
      />
      <View style={styles.View_6_4} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b809/009a/643999696740ffe14be66df51f0e03fa"
        }}
        style={styles.ImageBackground_6_5}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("118.44262295081967%") },
  View_2_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118.16939890710383%"),
    minHeight: hp("118.16939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.273224043715847%")
  },
  ImageBackground_2_6: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.125%"),
    top: hp("112.97814207650273%")
  },
  ImageBackground_2_4: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("113.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.56944444444444%")
  },
  View_2_15: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.38888888888889%"),
    top: hp("0.1366120218579235%")
  },
  View_2_16: {
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
  ImageBackground_2_17: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_2_19: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.38888888888889%"),
    top: hp("0.1366120218579235%")
  },
  View_2_20: {
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
  ImageBackground_2_21: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%")
  },
  View_2_23: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("0.1366120218579235%")
  },
  View_2_24: {
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
  View_2_25: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500000000000001%"),
    top: hp("8.060109289617486%"),
    justifyContent: "flex-start"
  },
  Text_2_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_2_26: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.38888888888889%"),
    top: hp("78.82513661202186%"),
    backgroundColor: "rgba(3, 53, 151, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_27: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_2_28: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_29: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.38888888888889%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_30: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("39.48087431693989%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_31: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.38888888888889%"),
    top: hp("39.48087431693989%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_2_32: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_2_33: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.38888888888889%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 43, 127, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_2_34: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.38888888888889%"),
    top: hp("78.82513661202186%"),
    backgroundColor: "rgba(0, 55, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_2_35: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(12, 66, 173, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_36: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_37: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_38: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("59.15300546448088%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_2_39: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("78.82513661202186%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_40: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_41: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_2_42: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(6, 70, 189, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_43: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.388888888888886%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_8_230: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(12, 66, 173, 1)",
    borderTopLeftRadius: 72,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_231: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_232: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 72,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 72
  },
  View_8_233: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(6, 70, 189, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_8_234: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.388888888888886%"),
    top: hp("98.49726775956285%"),
    backgroundColor: "rgba(0, 54, 159, 1)"
  },
  View_2_44: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.38888888888889%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(0, 54, 158, 1)"
  },
  View_2_45: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.388888888888886%"),
    top: hp("0.1366120218579235%")
  },
  View_2_46: {
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
  View_2_47: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222285%"),
    top: hp("8.606557377049182%"),
    justifyContent: "flex-start"
  },
  Text_2_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_2_48: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("0.1366120218579235%")
  },
  View_2_49: {
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
  View_2_50: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.499999999999993%"),
    top: hp("8.606557377049182%"),
    justifyContent: "flex-start"
  },
  Text_2_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_2_51: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%"),
    top: hp("0.1366120218579235%")
  },
  View_2_52: {
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
  View_2_53: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111143%"),
    top: hp("8.606557377049182%"),
    justifyContent: "flex-start"
  },
  Text_2_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_2_54: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.38888888888889%"),
    top: hp("0.1366120218579235%")
  },
  View_2_55: {
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
  View_2_56: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777786%"),
    top: hp("8.606557377049182%"),
    justifyContent: "flex-start"
  },
  Text_2_56: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_2_57: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("98.49726775956285%")
  },
  View_2_58: {
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 72
  },
  ImageBackground_2_59: {
    width: wp("4.444444444444445%"),
    height: hp("8.743169398907105%"),
    top: hp("5.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_2_62: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.38888888888889%"),
    top: hp("98.49726775956285%")
  },
  View_2_63: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 0
  },
  View_2_78: {
    width: wp("33.611111111111114%"),
    minWidth: wp("33.611111111111114%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("45.90163934426229%"),
    justifyContent: "flex-start"
  },
  Text_2_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_4_86: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.09722222222221%"),
    top: hp("99.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_4_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  TouchableOpacity_4_91: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("64.89071038251366%")
  },
  View_2_8: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_9: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_89: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777786%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_4_89: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  View_4_90: {
    width: wp("27.361111111111114%"),
    minWidth: wp("27.361111111111114%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("55.46448087431693%"),
    justifyContent: "flex-start"
  },
  Text_4_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4,
    textTransform: "none"
  },
  View_4_92: {
    width: wp("10.069444444444445%"),
    minWidth: wp("10.069444444444445%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.291666666666664%"),
    top: hp("65.43715846994536%"),
    justifyContent: "flex-start"
  },
  Text_4_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  ImageBackground_4_79: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666666%")
  },
  ImageBackground_4_81: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.125%")
  },
  View_6_2: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.47222222222222%"),
    top: hp("66.80327868852459%"),
    justifyContent: "flex-start"
  },
  Text_6_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15,
    textTransform: "none"
  },
  TouchableOpacity_6_3: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.31944444444444%"),
    top: hp("106.28415300546447%")
  },
  ImageBackground_4_83: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.08333333333333%")
  },
  View_6_4: {
    width: wp("2.430555555555556%"),
    minWidth: wp("2.430555555555556%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.125%"),
    top: hp("65.43715846994536%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  ImageBackground_6_5: {
    width: wp("0.9722222222222222%"),
    minWidth: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.09722222222222%"),
    top: hp("67.07650273224044%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
