import type { IconType } from 'react-icons'
import { CiWallet } from 'react-icons/ci'
import { GoHistory } from 'react-icons/go'
import { IoSwapHorizontalOutline } from 'react-icons/io5'

export const navLinks: { title: string; link: string; Icon: IconType }[] = [
  {
    title: 'Wallet',
    link: '/',
    Icon: CiWallet,
  },
  {
    title: 'Pay',
    link: '/payments',
    Icon: IoSwapHorizontalOutline,
  },
  {
    title: 'History',
    link: '/history',
    Icon: GoHistory,
  },
]
