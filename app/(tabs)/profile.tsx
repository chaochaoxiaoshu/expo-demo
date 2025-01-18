import { View, ScrollView } from 'react-native'
import { Text } from '~/components/ui/text'
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import { Bell } from '~/lib/icons/bell'
import { Settings } from '~/lib/icons/settings'
import { VipCard } from '~/components/vip-card'

export default function ProfileScreen() {
  return (
    <ScrollView className='flex-1 px-5 py-4'>
      <View className='gap-y-4'>
        <View className='flex-row items-center'>
          <View className='flex-row items-center gap-4'>
            <Avatar className='h-14 w-14' alt='用户头像'>
              <AvatarImage
                source={require('~/assets/images/avatar_example.png')}
              />
              <AvatarFallback>
                <Text className='text-lg font-medium'>朝</Text>
              </AvatarFallback>
            </Avatar>
            <View>
              <Text className='text-lg font-medium'>朝小树</Text>
              <View className='rounded-full bg-blue-100 px-2 py-0.5'>
                <Text className='text-xs font-semibold text-blue-700'>
                  L1 尝鲜人
                </Text>
              </View>
            </View>
          </View>
          <View className='ml-auto flex-row items-center gap-2'>
            <Button variant='ghost' size='icon'>
              <Bell className='text-foreground' size={24} strokeWidth={2} />
            </Button>
            <Button variant='ghost' size='icon'>
              <Settings className='text-foreground' size={24} strokeWidth={2} />
            </Button>
          </View>
        </View>
        <VipCard />
      </View>
    </ScrollView>
  )
}
