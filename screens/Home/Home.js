import React, { useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Catagories from "../../components/Catagories";
import List from "../../components/List";
import Loading from "../../components/Loading";
import { getProducts, getProductsByCategory } from "../../services/services";
import User from "../../components/User";
import { useAuth } from "../../components/Auth/useAuth";
import SideBar from "../../components/SideBar";
import ToastManager, { Toast } from "toastify-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../config";
import { getAuth } from "firebase/auth";
import Icon from "react-native-vector-icons/Fontisto";
import COLORS from "../../consts/colors";
import FilterModal from "./FilterModal";
const Home = ({ navigation }) => {
  const [foods, setFoods] = React.useState();
  const [showFilterMode, setShowFilterMode] = React.useState();
  const [selectedId, setSelectedId] = React.useState(null);
  const [showMen, setShowMenu] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [userIn, setUserIn] = React.useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const clsoeButtonOffset = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (selectedId !== null) {
      setFoods(null);
      setLoaded(false);
      getProductsByCategory(selectedId)
        .then((food) => {
          setFoods(food);
        })
        .finally(() => {
          setLoaded(true);
        });
    } else {
      getProducts()
        .then((best) => {
          setFoods(best);
        })
        .finally(() => {
          setLoaded(true);
        });
    }
  }, [selectedId]);

  return (
    <React.Fragment>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
            borderRadius: showMen ? 20 : 0,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateY: clsoeButtonOffset }] },
          ]}
        >
          <ToastManager />

          <View style={styles.containerUser}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMen ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(offsetValue, {
                  toValue: showMen ? 1 : 220,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                Animated.timing(clsoeButtonOffset, {
                  toValue: !showMen ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();
                setShowMenu((prev) => !prev);
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/user.jpg")}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.text1}>{auth.currentUser.email}</Text>
              <Text style={styles.text2}>What do you want today</Text>
            </View>
          </View>
          <Catagories selectedId={selectedId} setSelectedId={setSelectedId} />
          {/* FIlter Button */}
          <TouchableOpacity onPress={() => setShowFilterMode(true)}>
            <View style={styles.buttonFilter}>
              <Icon color={"#4F4F4F"} name="filter" size={16} />
            </View>
          </TouchableOpacity>
          {showFilterMode && (
            <FilterModal
              isVisible={showFilterMode}
              onClose={() => setShowFilterMode(false)}
            />
          )}
          {!loaded && <Loading />}
          <List
            content={foods}
            navigattion={navigation}
            categorieID={selectedId}
          />
        </Animated.View>
      </Animated.View>

      <SideBar navigation={navigation} />
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    flexGrow: 1,
    backgroundColor: "white",
    zIndex: 1,

    paddingVertical: 15,
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#FBB403",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ABAAA9",
  },
  containerUser: {
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  buttonFilter: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2E2E2",
    width: 50,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
export default Home;
