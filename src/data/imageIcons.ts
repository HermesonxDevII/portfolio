import { StaticImageData } from 'next/image'

import image from '../../public/icons/image.svg'
import large_image from '../../public/icons/large_image.svg'

type IconData = {
  index: number;
  icon: StaticImageData;
}

export const imageIcons: Record<string, IconData> = {
  'card': { 'index': 0, 'icon': image },
  'screen': { 'index': 1, 'icon': large_image },
}
