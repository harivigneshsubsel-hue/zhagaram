import {
  ArrowRight,
  Globe2,
  Handshake,
  Leaf,
  Play,
  Sprout,
} from "lucide-react";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.25rem] min-h-[760px] overflow-hidden bg-[#f8f8f4] text-[#10251b]">
      {/* ================================
          HERO IMAGE
      ================================= */}

      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[67%]">
        <img
          src="/images/hero/hero.png"
          alt="Indian agriculture and global export logistics"
          className="h-full w-full object-cover object-right"
        />

        {/* Fade image into white content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f4] via-[#f8f8f4]/65 to-transparent lg:from-[#f8f8f4] lg:via-[#f8f8f4]/15 lg:to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f8f4] to-transparent" />
      </div>

      {/* ================================
          HERO CONTENT
      ================================= */}

      <Container className="relative z-10 min-h-[760px]">
        <div className="grid min-h-[700px] items-center lg:grid-cols-[48%_52%]">
          {/* LEFT CONTENT */}

          <div className="relative z-20 pt-24 lg:pt-20">
            {/* Kicker */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b08a48]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#66736c]">
                Premium Indian Products
              </p>
            </div>

            {/* Main Heading */}

            <h1 className="max-w-[720px] text-[3.5rem] font-semibold leading-[0.94] tracking-[-0.055em] text-[#10251b] sm:text-[4.5rem] lg:text-[5.4rem] xl:text-[5.8rem]">
              From Indian Roots
              <br />
              <span className="text-[#a77b32]">
                to Global Routes.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-[590px] text-[16px] leading-7 text-[#53615a] sm:text-[17px]">
              <span className="font-semibold text-[#10251b]">
                ZHAGARAM EXIM LLP
              </span>{" "}
              is an India-based export and import company connecting quality
              agricultural and food products with international markets.
            </p>

            <p className="mt-2 text-[15px] font-medium text-[#26382f]">
              Trusted sourcing. Global standards. Lasting partnerships.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/products"
                variant="primary"
                size="lg"
                className="rounded-md bg-[#075333] px-7 shadow-lg shadow-[#075333]/10"
              >
                Explore Our Products
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button
                href="/get-a-quote"
                variant="outline"
                size="lg"
                className="rounded-md border-[#c9aa72] bg-white px-7 text-[#10251b] hover:bg-[#faf7ef]"
              >
                Get a Quote
              </Button>
            </div>

            {/* ================================
                TRUST ITEMS
            ================================= */}

            <div className="mt-12 flex max-w-[560px] items-center">
              {/* Quality */}

              <div className="flex items-center gap-3 pr-7">
                <div className="flex size-12 items-center justify-center">
                  <Leaf className="size-9 stroke-[1.4] text-[#0b5b38]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#10251b]">
                    Quality
                  </p>

                  <p className="text-sm text-[#66736c]">
                    Products
                  </p>
                </div>
              </div>

              {/* Divider */}

              <div className="h-10 w-px bg-[#d8ddd7]" />

              {/* Trusted */}

              <div className="flex items-center gap-3 px-7">
                <div className="flex size-12 items-center justify-center">
                  <Handshake className="size-9 stroke-[1.4] text-[#0b5b38]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#10251b]">
                    Trusted
                  </p>

                  <p className="text-sm text-[#66736c]">
                    Partners
                  </p>
                </div>
              </div>

              {/* Divider */}

              <div className="h-10 w-px bg-[#d8ddd7]" />

              {/* Worldwide */}

              <div className="flex items-center gap-3 pl-7">
                <div className="flex size-12 items-center justify-center">
                  <Globe2 className="size-9 stroke-[1.4] text-[#0b5b38]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#10251b]">
                    Worldwide
                  </p>

                  <p className="text-sm text-[#66736c]">
                    Supply
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SPACE */}

          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}