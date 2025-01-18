import { View } from 'react-native'
import { Text } from '~/components/ui/text'
import { cn } from '~/lib/utils'

export function HotPicks() {
  return (
    <View className='items-center gap-y-4'>
      <Text className='text-xl font-semibold mr-auto'>必逛好物</Text>
      <View className='flex-row items-stretch gap-x-2 h-60'>
        <View className='relative flex-1 h-full bg-muted rounded-md'>
          <HotPickBadge className='absolute top-5 left-5 bg-[#017CC0]'>
            限时特惠
          </HotPickBadge>
        </View>
        <View className='flex-1 flex-col gap-y-2'>
          <View className='relative flex-1 h-24 bg-muted rounded-md'>
            <HotPickBadge className='absolute top-5 left-5 bg-[#CB020A]'>
              更低价格
            </HotPickBadge>
            <Text className='absolute bottom-5 left-5 text-lg font-semibold'>
              ¥249.00
            </Text>
          </View>
          <View className='relative flex-1 h-24 bg-muted rounded-md'>
            <HotPickBadge className='absolute top-5 left-5 bg-[#C95009]'>
              新品
            </HotPickBadge>
            <Text className='absolute bottom-5 left-5 text-lg font-semibold'>
              ¥59.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

function HotPickBadge({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <View className={cn('px-2 py-1', className)}>
      <Text className='text-white text-base font-semibold'>{children}</Text>
    </View>
  )
}
