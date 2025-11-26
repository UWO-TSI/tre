import Contact from "./Contact";

export default function FooterContent() {
    return (
        <div className="bg-main-darkpurple w-full">
            <div className="flex flex-col m-auto w-2/3 py-16 gap-10">
                <Contact />
                <p className="text-body-small text-footer-grey font-semibold">Copyright © 2025 Childcan, The Childhood Cancer Research Association, All Rights Reserved. <br/>Charitable Registration #11885 1930 RR0001</p>
            </div>
        </div>
    );
}