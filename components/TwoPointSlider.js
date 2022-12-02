import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import COLORS from "../consts/colors";
import { Text, View } from "react-native";
const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
  price,
}) => {
  return (
    <MultiSlider
      values={values}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{ backgroundColor: COLORS.primary }}
      trackStyle={{ height: 10, borderRadius: 10, backgroundColor: "#DCDCDC" }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
              }}
            />
            {!price ? (
              <Text style={{ fontWeight: "700", color: "#ACA9A9" }}>
                {prefix}
                {e.currentValue} {postfix}
              </Text>
            ) : (
              <Text style={{ fontWeight: "700", color: "#ACA9A9" }}>
                {postfix} {prefix}
                {e.currentValue}
              </Text>
            )}
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  );
};

export default TwoPointSlider;
