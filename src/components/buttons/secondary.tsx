interface IProps {
    text: string;
    location: string;
}

export default function SecondaryButton({ text, location }: IProps) {
    return (
        <a href={location} className="border-christalle-500 text-white! border hover:bg-christalle-500 rounded px-6 py-2.5 cursor-pointer button-shine text-sm md:text-base hover:no-underline!">
            { text }
        </a>
    )
}