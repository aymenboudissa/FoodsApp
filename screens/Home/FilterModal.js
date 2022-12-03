import React from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TwoPointSlider from "../../components/TwoPointSlider";
import COLORS from "../../consts/colors";
import items from "../../services/DataCategory";
const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFIlterModal] = React.useState(isVisible);
  const [selectedMins, setSelectedMins] = React.useState(10);
  const [selectedStar, setSelectedStar] = React.useState(5);
  const [selectedTag, setSelectedTag] = React.useState(1);

  const applyFilter = () => {};
  const renderItem = (value) => {
    const backgroundColorMins =
      value == selectedMins ? COLORS.primary : "#E2E2E2";
    const color = value == selectedMins ? COLORS.white : "#4F4F4F";
    return (
      <TouchableOpacity onPress={() => setSelectedMins(value)}>
        <View
          style={{
            backgroundColor: backgroundColorMins,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "700", color: color }}>{value} Mins</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderTag = (item) => {
    const backgroundColorTag =
      item.id == selectedTag ? COLORS.primary : "#E2E2E2";
    const color = item.id == selectedTag ? COLORS.white : "#4F4F4F";
    return (
      <TouchableOpacity onPress={() => setSelectedTag(item.id)} key={item.id}>
        <View
          style={{
            backgroundColor: backgroundColorTag,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            margin: 5,
          }}
        >
          <Text style={{ fontWeight: "700", color: color }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderStar = (value) => {
    const backgroundColorStar =
      value == selectedStar ? COLORS.primary : "#E2E2E2";
    const color = value == selectedStar ? COLORS.white : "#4F4F4F";
    return (
      <TouchableOpacity onPress={() => setSelectedStar(value)}>
        <View
          style={{
            backgroundColor: backgroundColorStar,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", color: color }}>{value} </Text>
          <Icon name="star" color={color} size={17} />
        </View>
      </TouchableOpacity>
    );
  };
  React.useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 50],
  });
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFIlterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            top: modalY,
            width: "100%",
            height: "100%",
            padding: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: "white",
          }}
        >
          <View style={styles.FilterHeader}>
            <Text style={{ fontWeight: "bold" }}>Filter Your Search</Text>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#9A9A9A",
              }}
              onPress={() => setShowFIlterModal(false)}
            >
              <Icon name="close-outline" color={"#9A9A9A"} size={30} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontWeight: "bold" }}>Distance</Text>
            <View style={{ alignItems: "center" }}>
              <TwoPointSlider
                values={[3, 10]}
                min={1}
                max={20}
                postfix="km"
                onValuesChange={(values) => console.log(values)}
              />
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>Delivery Time</Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {renderItem(10)}
              {renderItem(20)}
              {renderItem(30)}
            </View>
          </View>
          <View style={{ flexDirection: "column", marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>Price Range</Text>
            <View style={{ alignItems: "center" }}>
              <TwoPointSlider
                values={[10, 50]}
                min={1}
                max={100}
                postfix="$"
                onValuesChange={(values) => console.log(values)}
                price={true}
              />
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>Delivery Time</Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {renderStar(1)}
              {renderStar(2)}
              {renderStar(3)}
              {renderStar(4)}
              {renderStar(5)}
            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontWeight: "bold" }}>Tags</Text>
            <View
              style={{ marginTop: 10, flexDirection: "row", flexWrap: "wrap" }}
            >
              {items.map((item) => {
                return renderTag(item);
              })}
            </View>
          </View>
          <TouchableOpacity
            onPress={applyFilter}
            style={{
              backgroundColor: COLORS.primary,
              width: "100%",
              height: 45,
              paddingVertical: 7,
              position: "absolute",
              bottom: 50,
              left: 15,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Apply Filters
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  FilterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default FilterModal;
