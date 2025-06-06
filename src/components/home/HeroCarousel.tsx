import React from "react";
import hero1 from "../../../public/images/hero-1.jpg";
import hero2 from "../../../public/images/hero-2.jpg";
import hero3 from "../../../public/images/hero-3.jpg";
import hero4 from "../../../public/images/hero-4.jpg";
import hero5 from "../../../public/images/hero-5.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const carouselImages = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
