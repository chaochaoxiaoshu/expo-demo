import { TouchableOpacity, View } from 'react-native'
import { Text } from '~/components/ui/text'
import { ChevronRight } from '~/lib/icons/chevron-right'

export function NoticeBar() {
  return (
    <TouchableOpacity className='flex-row items-center px-4 py-2 border border-border rounded-md'>
      <Text className='flex-1 text-base text-muted-foreground'>
        关于 2025 年春节期间服务时间调整
      </Text>
      <ChevronRight className='size-4 text-muted-foreground' size={16} />
    </TouchableOpacity>
  )
}
