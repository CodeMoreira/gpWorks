import Image from "next/image"

export default function Logo() {
    return (
        <Image
            loading="lazy"
            src={require('@/assets/images/Logo.png')}
            title='Logo'
            alt='Logo'
            width={32}
        />
    )
}