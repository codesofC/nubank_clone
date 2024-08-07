import { CustomMaterialIcon } from "@/components/CustomIcon";
import Header from "@/components/Home/Header";
import OperationsContainer from "@/components/Home/OperationsContainer";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#9c44dc" />
      <SafeAreaView className="flex-1">
        <ScrollView className="w-full flex-1">
          <Header />
          <View className="flex-1 w-full bg-background px-6 py-2">
            <TouchableOpacity activeOpacity={.5} className="w-full flex-row justify-between mb-6">
              <View className="gap-y-1">
                <Text className="text-secondary-foreground text-lg font-semibold"> Conta </Text>
                <Text className="text-secondary-foreground text-lg font-semibold"> R$ 120,06 </Text>
              </View>
              <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
            </TouchableOpacity>
            <OperationsContainer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
