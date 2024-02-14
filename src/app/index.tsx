import { Header } from "@/components/header";
import { View } from "react-native";

export default function Home() {
  
  return(
    <View className="pt-8">
      <Header
        title="Faça seu pedido"
        cardQuantity={3}
      />
    </View>
  )
}