import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="mb-4 md:mb-8 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg font-body text-center leading-10 font-normal text-slate-500 mb-4 max-w-md md:text-2xl">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center text-center gap-4">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
            <>{slice.primary.button_text}</>
          </Button>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
