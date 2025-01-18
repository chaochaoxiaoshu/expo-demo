import { View } from 'react-native'
import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'
import { ShoppingBag } from '~/lib/icons/shopping-bag'

export default function MessagesScreen() {
  return (
    <View className='flex-1'>
      <View className='items-center justify-center gap-4 py-12'>
        <ShoppingBag className='text-foreground' size={64} />
        <Text className='text-base text-muted-foreground'>
          购物袋空空，需要一点灵感嘛？
        </Text>
        <Button size='lg' className='mt-2 rounded-full'>
          <Text>探索家居灵感</Text>
        </Button>
      </View>
    </View>
  )
}
