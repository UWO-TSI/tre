import PageContent from "@/components/pageLayout/PageContent";
import { Image } from "@/components/pageLayout/PageElement";

export default function SponsorsCollage() {
  const images: Image[] = [
    {
      type: "Image",
      src: "/images/BrucePower.webp",
      alt: "Bruce Power",
      className: "w-50 h-25",
      href: "https://www.brucepower.com/",
    },
    {
      type: "Image",
      src: "/images/CIBC.webp",
      alt: "CIBC",
      className: "w-50 aspect-[2/1]",
      href: "https://www.cibc.com/",
    },
    {
      type: "Image",
      src: "/images/GOC.webp",
      alt: "Government of Canada",
      className: "w-50 aspect-[2/1]",
    },
    {
      type: "Image",
      src: "/images/Catalent.webp",
      alt: "Catalent Cares",
      className: "w-50 aspect-[2/1]",
      href: "https://www.catalent.com/",
    },
    {
      type: "Image",
      src: "/images/FactoryShoe.webp",
      alt: "Factory Shoe",
      className: "w-50 aspect-[2/1]",
      href: "https://www.factoryshoe.ca/_store/",
    },
    {
      type: "Image",
      src: "/images/Lutheran.webp",
      alt: "Lutheran Social Services",
      className: "w-50 aspect-[2/1]",
      href: "https://lutheransocialserviceslondon.ca/",
    },
    {
      type: "Image",
      src: "/images/MMM.webp",
      alt: "Miracle Max Minions",
      className: "w-50 aspect-[2/1]",
      href: "https://www.facebook.com/profile.php?id=100067820967084",
    },
    {
      type: "Image",
      src: "/images/PetroCanada.webp",
      alt: "Petro-Canada CareMakers Foundation",
      className: "w-50 aspect-[2/1]",
      href: "https://caremakers.ca/",
    },
    {
      type: "Image",
      src: "/images/WestministerCollege.webp",
      alt: "Westminister College Foundation",
      className: "w-50 aspect-[2/1]",
      href: "http://www.wcfoundation.ca/",
    },
    {
      type: "Image",
      src: "/images/PreferredInsurance.webp",
      alt: "Preferred Insurance",
      className: "w-50 aspect-[2/1]",
    },
    {
      type: "Image",
      src: "/images/Solcz.webp",
      alt: "Solcz Family Foundation",
      className: "w-50 aspect-[2/1]",
      href: "https://www.solczfamilyfoundation.com/",
    },
    {
      type: "Image",
      src: "/images/MayCourt.webp",
      alt: "The Flag Court Clubs of Canada",
      className: "w-50 aspect-[2/1]",
      href: "http://windsormaycourt.com/",
    },
    {
      type: "Image",
      src: "/images/UCDA.webp",
      alt: "UCDA",
      className: "w-50 aspect-[2/1]",
      href: "https://www.ucda.org/",
    },
    {
      type: "Image",
      src: "/images/Wawanesa.webp",
      alt: "Wawanesa Insurance",
      className: "w-50 aspect-[2/1]",
      href: "https://www.wawanesa.com/canada/",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {images.map((image) => {
        return <PageContent key={image.src} pageLayout={[image]}></PageContent>;
      })}
    </div>
  );
}
