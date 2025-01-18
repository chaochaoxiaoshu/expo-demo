import { Tabs } from 'expo-router'
import { HomeHeader } from '~/components/home-header'
import { Home } from '~/lib/icons/home'
import { Smile } from '~/lib/icons/smile'
import { ShoppingBag } from '~/lib/icons/shopping-bag'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { height: 110 } }}>
      <Tabs.Screen
        name='index'
        options={{
          title: '首页',
          header: () => <HomeHeader />,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name='shopping-bag'
        options={{
          title: '购物袋',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: '我的',
          tabBarIcon: ({ color, size }) => <Smile color={color} size={size} />
        }}
      />
    </Tabs>
  )
}
