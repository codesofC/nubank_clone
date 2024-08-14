import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CASHBACKS } from '@/constants/Operations'
import { CashBacksProps } from '@/types'

const Cashbacks = () => {


    const renderItem = ({item}: {item:CashBacksProps}) => (
        <TouchableOpacity
            activeOpacity={.6}
            className='items-center mr-4'
        >
            <View className='w-16 h-16 rounded-full overflow-hidden p-2'>
                <Image 
                    source={{uri: item.platform.logo}}
                    alt={item.platform.name}
                    resizeMode='contain'
                    className='w-full h-full'
                />
            </View>
            <View className='items-center'>
                <Text className='text-xs text-secondary-foreground'>
                    {item.platform.name}
                </Text>
                <Text className='font-semibold text-xs text-secondary-foreground'>
                    {item.value} %
                </Text>
            </View>
        </TouchableOpacity>
    )

  return (
    <View className='px-6 py-4'>
      <Text className='font-bold text-lg'>Melhores cashbacks da semana</Text>
      <FlatList 
        data={CASHBACKS}
        renderItem={renderItem}
        keyExtractor={(_s, index) => index.toString()}
        horizontal
      />
    </View>
  )
}

export default Cashbacks