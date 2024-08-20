/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Image1 from "@/public/snake-1.png";
import Image2 from "@/public/your-image.png";
import Snake2 from "@/public/snake-2.png";
import User1 from "@/public/users/user-1.png";
import User2 from "@/public/users/user-4.jpg";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pt-32 md:grid md:grid-cols-3 md:gap-x-0 md:pt-24">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute -top-16 left-0 hidden w-28 lg:block">
                <Image src={Image1} alt="image" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg text-muted-foreground md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own,
                <span className="px-2 font-semibold text-gray-800">
                  one-of-one
                </span>
                phone case. CaseCobra allows you to protect your memories, not
                just your phone.
              </p>

              <ul className="fle item-center mt-8 flex-col space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                </div>
                <div className="space-y-2">
                  <li className="item-center flex gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iphone model supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src={"/users/user-1.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-2.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-3.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-4.jpg"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full ring-2 ring-slate-100"
                  />
                  <Image
                    src={"/users/user-5.jpg"}
                    alt="user"
                    width={40}
                    height={40}
                    className="inline-block rounded-full object-cover ring-2 ring-slate-100"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-7 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src={Image2}
                alt="line"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <Image
                src="/line.png"
                alt="line"
                width={80}
                height={80}
                className="absolute -bottom-6 -left-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section  */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 text-center text-5xl font-bold !leading-tight tracking-tight md:text-5xl lg:text-6xl">
              What our{" "}
              <span className="px-2 sm:bg-green-600 sm:text-white">
                customers
              </span>{" "}
              says
            </h2>
            <Image
              className="order-0 w-24 lg:order-2"
              src={Snake2}
              alt="image"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 gap-y-20 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8">
              <div className="mb-2 flex gap-1">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I event got a compliment on the
                  design. Had the case for two and a half mouths now and{" "}
                  <span className="bg-slate-800 px-1.5 py-0.5 text-white">
                    The image is super clear,
                  </span>{" "}
                  on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it"
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={User1}
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jhanathan</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Check className="h-4 w-4 stroke-[3px] text-green-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8">
              <div className="mb-2 flex gap-1">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratch marks on all of my
                  last phone cases. Tis one, besides a barely noticeable scratch
                  on the corner{" "}
                  <span className="bg-slate-800 px-1.5 py-0.5 text-white">
                    looks brand new after about half year.
                  </span>{" "}
                  I dig it."
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={User2}
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Check className="h-4 w-4 stroke-[3px] text-green-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="py-12">
          <div className="mb-12 px-5 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 text-center text-5xl font-bold !leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Upload your photo and get{" "}
                <span className="bg-green-600 px-2 text-white">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
            <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
              <img
                src="/arrow.png"
                alt="arrow"
                className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
              />
              <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  alt="horse"
                  className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <Phone imgSrc="/horse_phone.jpg" className="w-60" />
            </div>
          </div>

          <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />5 years
              print warranty
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
              href={"/configure/upload"}
            >
              Create your case now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
