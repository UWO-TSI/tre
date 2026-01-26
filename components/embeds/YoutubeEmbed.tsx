
export default function YoutubeEmbed(props: { url: string }) {
    const urlSplit: string[] = props.url.split("/");
    const videoId: string = urlSplit[urlSplit.length-1];
    
    return (
        <div className="relative w-full aspect-video">
            <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen>
            </iframe>
        </div>
    );
}