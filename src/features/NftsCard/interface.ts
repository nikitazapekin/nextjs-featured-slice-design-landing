import { StaticImageData } from 'next/image';
export interface Props {
    title: string,
    user: string,
    eth: string,
    weth: string,
    nftImage: StaticImageData,
    userAvatar: StaticImageData
}
