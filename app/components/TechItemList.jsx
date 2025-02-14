import Image from "next/image";

export default function TechItemList({ iconSrc, name, size, extraCss }) {
  return (
    <li className="flex flex-row space-x-2">
      <Image
        height={50}
        width={50}
        src={iconSrc}
        className={extraCss}
        alt={`${name}-icon`}
      />
      <p className={`text-${size}  flex items-center text-black font-medium`}>{name}</p>
    </li >
  )
}
