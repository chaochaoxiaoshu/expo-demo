import { View, Dimensions, ScrollView, Image } from 'react-native'
import { Text } from '~/components/ui/text'
import Carousel from 'react-native-reanimated-carousel'
import { GridMenu } from '~/components/grid-menu'
import { NoticeBar } from '~/components/notice-bar'
import { HotPicks } from '~/components/hot-picks'
import { ArrowDown } from '~/lib/icons/arrow-down'

const exampleImages = [
  require('~/assets/images/carousel_0.png'),
  require('~/assets/images/carousel_1.png'),
  require('~/assets/images/carousel_2.png')
]

export default function HomeScreen() {
  const width = Dimensions.get('window').width
  return (
    <ScrollView className='flex-1'>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={true}
        data={exampleImages}
        autoPlayInterval={3000}
        renderItem={({ item }) => (
          <Image source={item} className='w-full h-full' />
        )}
      />
      <View className='px-5 py-4 gap-y-4'>
        <GridMenu />
        <NoticeBar />
        <HotPicks />
      </View>
      <View className='p-5 gap-y-4 bg-muted'>
        <Text className='text-3xl font-semibold'>探索更多</Text>
        <ArrowDown
          className='text-foreground'
          size={40}
          strokeWidth={2.5}
          strokeLinecap='butt'
        />
        <Image
          source={require('~/assets/images/banner_0.webp')}
          className='w-full h-40 rounded-md'
        />
        <Text className='mt-4 text-xl font-semibold'>回收垃圾，减少浪费</Text>
        <Image
          source={require('~/assets/images/banner_1.png')}
          className='w-full h-64 rounded-md'
        />
      </View>
    </ScrollView>
  )
}
