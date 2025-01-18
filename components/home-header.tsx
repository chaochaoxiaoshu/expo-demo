import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { Text } from '~/components/ui/text'
import { Input } from '~/components/ui/input'
import { Search } from '~/lib/icons/search'
import { Button } from '~/components/ui/button'
import { Bell } from '~/lib/icons/bell'
import { Globe } from '~/lib/icons/globe'
import { ChevronDown } from '~/lib/icons/chevron-down'

export function HomeHeader() {
  const insets = useSafeAreaInsets()
  return (
    <View
      className='flex-row items-center gap-x-4 px-5 py-4'
      style={{ paddingTop: insets.top }}
    >
      <View className='relative flex-1'>
        <Search
          className='z-10 absolute top-1/2 translate-y-[-50%] left-4 text-muted-foreground'
          size={18}
          strokeWidth={3}
        />
        <Input
          className='pl-12 rounded-full border-0 bg-muted'
          placeholder='搜索'
        />
      </View>
      <View className='flex-row items-center gap-x-2'>
        <Button variant='ghost' size='icon'>
          <Globe className='text-foreground' />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell className='text-foreground' />
        </Button>
        <Button
          size='sm'
          variant='ghost'
          className='flex-row items-center gap-x-1'
        >
          <Text>太原</Text>
          <ChevronDown
            className='text-foreground'
            size={16}
            strokeWidth={2.5}
          />
        </Button>
      </View>
    </View>
  )
}
