interface IProps {
    text: string;
    location: string;
}

export default function PrimaryButton({ text, location } : IProps) {
    return (
        <a href={location} className="bg-christalle-500 text-white! rounded px-6 py-2 cursor-pointer button-shine text-sm md:text-base hover:no-underline!">
            { text }
        </a>
    )
}