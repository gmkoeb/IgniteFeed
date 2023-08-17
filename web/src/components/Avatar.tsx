import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    noBorder?: boolean;
    src: string
    alt?: string
    sidebar?: boolean
}

export function Avatar(props: AvatarProps){
    return(
        <img className={`w-16 h-16 rounded-lg ${props.sidebar ? '-translate-y-1/2' : ''} ${props.noBorder ? '' : 'border-solid border-2 border-gray-400 outline outline-2 outline-[#00875f]'}`} src={props.src} />        
    )
}