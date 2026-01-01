

interface EventProps {
    title: string;
    description: string;
    date: string;
}

export default function Event(props: EventProps) {
    return (
        <div className="flex flex-col w-1/4 gap-4">
            <h3 className="text-h3 text-header-teal">{props.title}</h3>
            <p className="text-body text-secondary-grey">{props.description}</p>
            <p className="text-body-small text-footer-grey">{props.date}</p>
        </div>
    );
}