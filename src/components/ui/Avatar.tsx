import Image from 'next/image'

interface AvatarProps {
    name: string
    image?: string
    showName?: boolean
}

interface GenerateAvatarProps {
    name: string
}

function GenerateAvatar({ name }: GenerateAvatarProps) {
    return (
        <div className="grid place-content-center h-full capitalize text-sm font-semibold text-white">
            {name.split(' ').map((word) => word.charAt(0))}
        </div>
    )
}

export default function Avatar({ name, image, showName }: AvatarProps) {
    return (
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-moderate-blue rounded-full">
                {image ? (
                    <Image src={image} alt="user" />
                ) : (
                    <GenerateAvatar name={name} />
                )}
            </div>
            {showName && <span>{name}</span>}
        </div>
    )
}
