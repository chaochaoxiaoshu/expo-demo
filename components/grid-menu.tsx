import { TouchableOpacity, View } from 'react-native'
import { Text } from '~/components/ui/text'
import { CreditCard } from '~/lib/icons/credit-card'
import { List } from '~/lib/icons/list'
import { Store } from '~/lib/icons/store'
import { PencilLine } from '~/lib/icons/pencil-line'
import { PencilRuler } from '~/lib/icons/pencil-ruler'
import { Sparkle } from '~/lib/icons/sparkle'
import { BriefcaseBusiness } from '~/lib/icons/briefcase-business'
import { Grid2x2 } from '~/lib/icons/grid-2x2'
import { Href, Link } from 'expo-router'

interface GridMenuButtonData {
  icon: React.ReactNode
  title: string
}

const rows = [
  [
    {
      icon: <CreditCard className='text-[#017BC2]' />,
      title: '会员中心'
    },
    {
      icon: <List className='text-[#C95107]' />,
      title: '排行榜'
    },
    {
      icon: <Store className='text-[#017BC2]' />,
      title: '宜家商场'
    },
    {
      icon: <PencilLine className='text-foreground' />,
      title: '全屋设计'
    }
  ],
  [
    {
      icon: <PencilRuler className='text-foreground' />,
      title: '自助设计'
    },
    {
      icon: <Sparkle className='text-[#C95107]' />,
      title: '新品'
    },
    {
      icon: <BriefcaseBusiness className='text-foreground' />,
      title: '对公业务'
    },
    {
      icon: <Grid2x2 className='text-foreground' />,
      title: '全部频道'
    }
  ]
] satisfies GridMenuButtonData[][]

export function GridMenu() {
  return (
    <View className='gap-2'>
      {rows.map((row, index) => {
        return (
          <View key={index} className='flex-row gap-x-4'>
            {row.map((item, index) => {
              return <GridMenuButton key={index} {...item} href='/detail' />
            })}
          </View>
        )
      })}
    </View>
  )
}

interface GridMenuButtonProps {
  icon: React.ReactNode
  title: string
  href: Href
}

function GridMenuButton(props: GridMenuButtonProps) {
  const { icon, title, href } = props
  return (
    <Link href={href} asChild>
      <TouchableOpacity className='flex-1 items-center gap-2 py-2'>
        <View className='aspect-square p-6 rounded-full bg-muted'>{icon}</View>
        <Text className='text-base font-semibold'>{title}</Text>
      </TouchableOpacity>
    </Link>
  )
}
