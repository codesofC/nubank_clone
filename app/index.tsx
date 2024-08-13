import { CustomMaterialIcon } from "@/components/CustomIcon";
import CreditCard from "@/components/Home/CreditCard";
import Discover from "@/components/Home/Discover";
import Header from "@/components/Home/Header";
import OperationsContainer from "@/components/Home/OperationsContainer";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#9c44dc" />
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView className="w-full flex-1">
          <Header />
          <View className="divide-y divide-gray-300">
            <View className="flex-1 w-full px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.5}
                className="w-full flex-row justify-between mb-6"
              >
                <View className="gap-y-1">
                  <Text className="text-secondary-foreground text-lg font-semibold">
                    {" "}
                    Conta{" "}
                  </Text>
                  <Text className="text-secondary-foreground text-lg font-semibold">
                    {" "}
                    R$ 120,06{" "}
                  </Text>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
              <OperationsContainer />
              <Pressable className="flex-row w-full p-4 items-center bg-gray-200 mt-6 rounded-lg">
                <CustomMaterialIcon name="smartphone" color="black" />
                <Text> Meus cartões </Text>
              </Pressable>
            </View>
            <View>
              <CreditCard />
            </View>
            <View className="px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.6}
                className="w-full flex-row justify-between"
              >
                <View className="gap-y-2">
                  <Text className="text-lg font-semibold">Empréstimo</Text>
                  <View className="gap-y-1">
                    <Text className=""> Valor disponível de até </Text>
                    <Text className="text-lg font-semibold"> R$ 15.000,00</Text>
                  </View>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
            </View>
            <View className="px-6 py-4">
              <TouchableOpacity
                activeOpacity={0.6}
                className="w-full flex-row justify-between"
              >
                <View className="gap-y-2">
                  <Text className="text-lg font-semibold">
                    Próximo pagamento
                  </Text>
                  <View className="gap-y-1">
                    <Text className="text-lg"> Quarta-feira, 11 Set </Text>
                  </View>
                </View>
                <CustomMaterialIcon name="keyboard-arrow-right" color="gray" />
              </TouchableOpacity>
            </View>
            <View>
              <Discover />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
