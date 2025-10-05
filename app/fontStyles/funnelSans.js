import localFont from 'next/font/local'

// Define Funnel Sans font family with all variants
export const funnelSans = localFont({
  src: [
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/funnel_sans/FunnelSans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-funnel-sans',
  display: 'swap',
})

// Export font class name for easy use
export const funnelSansClassName = funnelSans.className
