import { View, Text } from 'react-native'
import { CustomMaterialCommunityIcon, CustomMaterialIcon } from '../CustomIcon'

const Header = () => {
  return (
    <View className="w-full px-6 py-2 items-center justify-between flex-row bg-primary">
          <View className="items-center justify-center p-2 bg-primary/50 rounded-full">
            <CustomMaterialCommunityIcon
              name="image-plus"
              color="white"
              size={26}
            />
          </View>
          <View className="flex-row items-center gap-x-4">
            <View>
              <CustomMaterialCommunityIcon name="eye" color="white" />
            </View>
            <View>
              <CustomMaterialIcon name="help-outline" color="white" />
            </View>
            <View>
              <CustomMaterialIcon name="supervised-user-circle" color="white" />
            </View>
          </View>
        </View>
  )
}

export default Header