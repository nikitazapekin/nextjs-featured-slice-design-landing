import { StaticImageData } from 'next/image';

export interface Props {
    title: string,
    about: string, 
    image: StaticImageData,
    button: string
}