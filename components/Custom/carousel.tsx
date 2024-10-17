import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

export function CarouselCode() {
  return (
    <div>
      <div className="flex">
        <div>
          <h1>Empower Innovation</h1>
          <h6>Decentralized decision-making for a digital future</h6>

          <p>
            Join our DAO and be part of a community-driven ecosystem where every
            voice matters contribute to the project.
          </p>

          <div className="flex justify-start gap-5">
            <Button
              variant="destructive"
              className="bg-red-100 rounded-xl mb-10"
            >
              Join us now
            </Button>
            <Link href="#">Learn more</Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full">
        <Image
          src="/zkpass.png"
          width={800}  // Use larger width
          height={600} // Use appropriate height
          alt="z-pass image"
          className="w-full h-auto object-cover rounded-lg" // Make image responsive
        />
      </div>``````
      </div>
    </div>
  );
}
