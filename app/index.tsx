import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Spectra</Text>

      <TouchableOpacity
        onPress={() => router.push("/auth")}
        style={{
          backgroundColor: "#4f46e5",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}
