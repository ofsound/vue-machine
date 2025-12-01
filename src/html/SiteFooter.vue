<template>
  <div id="footer">
    <div
      class="font-alright mr-auto ml-auto block w-full max-w-[1130px] text-lg md:flex md:w-10/12"
    >
      <div class="mr-3 ml-auto box-border hidden w-1/3 shrink-0 overflow-hidden min-[1100px]:block">
        <div class="bg-bar-red mb-3 h-5"></div>
        <div class="bg-bar-orange mb-3 ml-[12%] h-5 w-full"></div>
        <div class="bg-bar-yellow mb-3 ml-[22%] h-5 w-full"></div>
        <div class="bg-bar-blue mb-3 ml-[30%] h-5 w-full"></div>
        <div class="bg-bar-purple mb-3 ml-[18%] h-5 w-full"></div>
        <div class="bg-bar-pink mb-3 ml-[1%] h-5 w-full"></div>
      </div>
      <div class="mr-3 mb-4 ml-auto w-full shrink-0 md:mb-0 md:w-60">
        <div class="bg-bar-red mb-3 h-5 pl-3">
          <div class="relative -top-[2.5px] font-black text-white italic">
            Sine Machine : Let's go
          </div>
        </div>
        <div class="mb-3 flex h-5">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a href="#buy-now" class="text-white">Buy Now</a>
          </div>
          <div class="bg-bar-orange w-full"></div>
        </div>
        <div class="mb-3 flex h-5">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a
              href="?mb_intent=view_product&mb_product_id=sine-machine-early-access"
              class="text-white"
            >
              Downloads
            </a>
          </div>
          <div class="bg-bar-yellow w-full"></div>
        </div>
        <div class="mb-3 flex h-5">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a href="/manuals/sine-machine/" class="text-white">Manual</a>
          </div>
          <div class="bg-bar-blue w-full"></div>
        </div>
        <div class="mb-3 flex h-5">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a href="mailto:sudara@melatonin.dev" class="text-white">Get Help</a>
          </div>
          <div class="bg-bar-purple w-full"></div>
        </div>
        <div class="bg-bar-pink mb-3 h-5 w-full"></div>
      </div>

      <div class="mt-9 mr-auto ml-auto box-border w-full sm:mt-0 md:w-2/3">
        <div class="bg-bar-red mb-3 flex h-5 pl-3">
          <div class="relative -top-[2.5px] font-black text-white italic">Melatonin.dev</div>
          <div class="relative -top-0.5 mr-2 ml-auto w-max md:mr-28">
            <a href="https://www.youtube.com/@melatonindev" class="relative -top-px text-white">
              YouTube&nbsp;
              <img
                class="relative -top-px left-1 inline"
                src="https://melatonin.dev/wp-content/uploads/2024/04/youtube.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="mr-0 flex md:mr-2">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a href="/about/" class="text-white"></a>
          </div>
          <div class="bg-bar-orange mb-3 h-5 w-full">
            <div class="relative -top-[3px] mr-2 ml-auto w-max md:mr-6">
              <a href="https://github.com/sudara" class="text-white">
                github
                <img
                  class="relative -top-0.5 left-1 inline"
                  src="https://melatonin.dev/wp-content/uploads/2024/04/github.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mr-0 flex md:mr-5">
          <div class="relative -top-0.5 mr-5 ml-3 shrink-0">
            <a href="/blog/" class="text-white">Blog</a>
          </div>
          <div class="bg-bar-yellow mb-3 h-5 w-full"></div>
        </div>
        <div class="mr-0 flex md:mr-16">
          <!-- <div class="relative -top-0.5 ml-3 mr-5 shrink-0">
      <a href="/open-source/" class="text-white">Open Source</a>
    </div> -->
          <div class="bg-bar-blue mb-3 h-5 w-full">
            <div class="relative -top-[3px] mr-2 ml-auto w-max md:mr-10">
              <a href="https://twitter.com/sudara" class="text-white">
                Twitter
                <img
                  class="relative -top-px left-1 inline"
                  src="https://melatonin.dev/wp-content/uploads/2024/04/twitter.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mr-0 flex md:mr-32">
          <!-- <div class="relative -top-0.5 ml-3 mr-5 shrink-0">
      <a href="/privacy-policy/" class="text-white">Privacy Policy</a>
    </div> -->
          <div class="bg-bar-purple mb-3 h-5 w-full">
            <div class="relative -top-[3px] mr-2 ml-auto w-max md:mr-24">
              <a href="https://www.instagram.com/melatonin.dev/" class="pl-1 text-white">
                Instagram
                <img
                  class="relative -top-0.5 left-1 inline h-3.5 w-3.5"
                  src="https://melatonin.dev/wp-content/uploads/2024/04/instagram.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mr-0 flex md:w-3/5">
          <!-- <div class="relative -top-0.5 ml-3 mr-5 shrink-0">
          <a href="/terms-and-conditions" class="text-white">Terms & Conditions</a>
        </div> -->
          <div class="bg-bar-pink mb-3 h-5 w-full"></div>
        </div>
      </div>
    </div>

    <footer class="mt-10">
      <div
        id="square-row"
        class="flex justify-between overflow-hidden bg-black px-4 pt-4 pb-3"
      ></div>
      <div
        class="hidden h-10 max-w-[42px] min-w-[42px] flex-row-reverse flex-wrap justify-between"
        id="squareX"
      >
        <div class="mr-1 h-[3px] w-[3px]" id="light0"></div>
      </div>
    </footer>
  </div>
</template>
