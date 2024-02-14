import { useState } from "react";

import { View, FlatList } from "react-native";

import { CategoryButton } from "@/components/category";
import { Header } from "@/components/header";

import { CATEGORIES } from "@/utils/data/products";

export default function Home() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return(
    <View className="pt-8">
      <Header
        title="Faça seu pedido"
        cardQuantity={3}
      />

      <FlatList
        className="max-h-10 mt-5"
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton 
            title={item}
            isSelected ={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}