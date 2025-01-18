import { View } from 'react-native'
import { Text } from '~/components/ui/text'
import { Button } from '~/components/ui/button'
import { QrCode } from '~/lib/icons/qr-code'
import { ChevronRight } from '~/lib/icons/chevron-right'

export function VipCard() {
  return (
    <View className='rounded-xl border border-border overflow-hidden'>
      <View className='flex-row items-center justify-between p-4 bg-[#007BC1]'>
        <View>
          <Text className='text-white font-medium'>IKEA Family</Text>
          <Text className='text-white text-xl font-bold'>宜家会员俱乐部</Text>
        </View>
        <Button
          variant='secondary'
          className='flex-row items-center gap-2 bg-white/20 rounded-full'
        >
          <QrCode className='text-white' size={20} strokeWidth={2} />
          <Text className='text-white text-sm font-semibold'>会员码</Text>
        </Button>
      </View>
      <View className='bg-[#FFD704] h-1.5' />
      <View className='flex-row divide-x bg-background'>
        <View className='flex-1 px-4 py-8'>
          <Text className='text-sm font-medium'>可用积分</Text>
          <View className='flex-row items-center gap-2'>
            <Text className='text-lg font-bold'>1000</Text>
            <ChevronRight
              className='text-muted-foreground'
              size={20}
              strokeWidth={2}
            />
          </View>
        </View>
        <View className='flex-1 px-4 py-8'>
          <Text className='text-sm font-medium'>探索更多福利</Text>
          <View className='flex-row items-center gap-2'>
            <Text className='text-lg font-bold'>会员中心</Text>
            <ChevronRight
              className='text-muted-foreground'
              size={20}
              strokeWidth={2}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
