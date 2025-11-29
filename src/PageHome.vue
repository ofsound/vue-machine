<template>
  <div id="home-content" class="font-alright preflight text-base">
    <h1 class="mt-24 px-5 text-center text-5xl font-bold text-white lg:mt-10 lg:px-0 lg:text-5xl">
      Sine Machine
    </h1>
    <h2 class="text-light-purple px-5 text-center text-2xl lg:px-0 lg:text-3xl">
      is an additive synthesizer
    </h2>

    <div class="relative">
      <div class="px-5">
        <div id="youtube-overlay-and-video" class="relative mx-auto mt-10 mb-12 max-w-[620px]">
          <div
            id="youtube-div"
            class="mx-a relative mt-2 h-0 w-full overflow-hidden pt-[85.7586%] opacity-0"
          >
            <iframe
              class="absolute top-0 right-0 left-0 mx-auto h-full w-full max-w-full rounded-lg"
              src="https://www.youtube.com/embed/2k0vsEe_FZs?enablejsapi=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay;"
              allowfullscreen
            ></iframe>
          </div>
          <div id="youtube-overlay" class="absolute top-0 z-20 h-0 w-full pt-[85.7586%]">
            <div
              class="absolute top-0 right-0 left-0 mx-auto flex h-full w-full items-center justify-center rounded-lg bg-[url('https://melatonin.dev/wp-content/uploads/2025/10/screenshot.png')] bg-cover bg-no-repeat"
            >
              <a id="youtube-overlay-play" class="group" href="javascript:void(0);">
                <img
                  class="w-20 group-hover:hidden"
                  src="https://melatonin.dev/wp-content/uploads/2024/04/triangle.svg"
                  alt=""
                />
                <img
                  class="hidden w-20 group-hover:block"
                  src="https://melatonin.dev/wp-content/uploads/2024/04/triangle-hover.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-0 right-0 left-0 -z-10 mx-auto mt-10 md:mt-32 lg:w-10/12">
        <div class="bg-bar-red mb-3 h-5"></div>
        <div class="bg-bar-orange mb-3 ml-[1%] h-5 w-[98%] md:ml-[3%] md:w-[96%]"></div>
        <div class="bg-bar-yellow mb-3 ml-[1.5%] h-5 w-[98%] md:ml-[6%] md:w-[92%]"></div>
        <div class="bg-bar-blue mb-3 ml-[2%] h-5 w-[97%] md:ml-[8%] md:w-[87%]"></div>
        <div class="bg-bar-purple mb-3 ml-[1%] h-5 w-[96.5%] md:ml-[5%] md:w-[83%]"></div>
        <div class="bg-bar-pink mb-3 ml-[.5%] h-5 w-[98%] md:ml-[1%] md:w-[79%]"></div>
      </div>
    </div>

    <div class="bg-gray-900 py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl sm:text-center">
          <h2
            class="mb-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl sm:text-balance"
          >
            sine machine is an instrument that you play in your DAW.
            <br />
            <br />
            it looks like this:
          </h2>

          <img
            src="https://melatonin.dev/wp-content/uploads/2025/10/screenshot.png"
            alt="Product screenshot"
            class="mx-auto w-full max-w-xl rounded-xl lg:max-w-5xl"
          />

          <p class="mx-auto max-w-2xl text-lg font-medium text-pretty text-white sm:text-xl/8">
            It runs on macOS and Windows.
            <br />
            It's a VST3, AU and CLAP instrument.
            <br />
            You can also run it as a Standalone app.
          </p>
        </div>
      </div>
    </div>

    <div class="relative h-[50vh] w-full overflow-hidden">
      <video class="absolute inset-0 h-full w-full object-cover" autoplay loop muted playsinline>
        <source
          src="https://melatonin.dev/wp-content/uploads/2025/10/trem3kbps.mp4"
          type="video/mp4"
        />
      </video>

      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(33,3,70,0.5)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2
          class="mb-2 px-[5%] text-4xl font-semibold tracking-tight text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-lg sm:text-5xl sm:text-balance"
        >
          sine machine has over
          <span class="text-[rgb(255,183,73)]">10,000 time domain oscillators</span>
        </h2>

        <p
          class="mx-auto max-w-2xl text-lg font-medium text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-md sm:text-xl/8"
        >
          (and over 20k lfos)
        </p>
      </div>
    </div>

    <div class="relative h-[50vh] w-full overflow-hidden">
      <video class="absolute inset-0 h-full w-full object-cover" autoplay loop muted playsinline>
        <source src="@/assets/videos/env.mp4" type="video/mp4" />
      </video>

      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(33,3,70,0.5)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2
          class="mb-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl sm:text-balance"
        >
          it is friendly
          <span class="text-buy-now-yellow">*</span>
        </h2>

        <p
          class="mx-auto max-w-2xl text-lg font-medium text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-md sm:text-xl/8"
        >
          <span class="text-buy-now-yellow">*for an additive synth...</span>
          <br />
          (in the worst case, fun and colorful?...)
        </p>
      </div>
    </div>

    <div class="relative h-[70vh] w-full overflow-hidden">
      <video class="absolute inset-0 h-full w-full object-cover" autoplay loop muted playsinline>
        <source
          src="https://melatonin.dev/wp-content/uploads/2025/10/harmonic-bars.mp4"
          type="video/mp4"
        />
      </video>

      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(33,3,70,0.95)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2
          class="mb-8 text-4xl font-semibold tracking-tight text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-lg sm:text-5xl sm:text-balance"
        >
          it has
          <span class="text-[rgb(255,183,73)]">features</span>
          <br />
        </h2>

        <ul
          class="mx-auto max-w-2xl text-lg/10 font-medium text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-md sm:text-xl/10"
        >
          <li>20 voices of 511 time-domain oscillators</li>
          <li>bulk-editing of per-harmonic ADSR, volume and pitch LFO</li>
          <li>additive "reverb" made out of 1000 sine waves</li>
          <li>additive "filters" including brickwall and gaussian band-pass</li>
          <li>per-harmonic gaussian pitch noise (yum)</li>
          <li>hackable plaintext presets (json format)</li>
          <li>90 factory presets</li>
          <li>0 knobs (don't ask)</li>
        </ul>
      </div>
    </div>

    <div class="relative h-[50vh] w-full overflow-hidden">
      <video class="absolute inset-0 h-full w-full object-cover" autoplay loop muted playsinline>
        <source src="https://melatonin.dev/wp-content/uploads/2025/10/pitch.mp4" type="video/mp4" />
      </video>

      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(33,3,70,0.5)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2
          class="mb-2 text-4xl font-semibold tracking-tight text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-lg sm:text-5xl sm:text-balance"
        >
          and lots of
          <span class="text-[rgb(255,183,73)]">visualizers</span>
        </h2>

        <p
          class="mx-auto max-w-2xl text-lg font-medium text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-md sm:text-xl/8"
        >
          (they help you understand wtf is going on)
        </p>
      </div>
    </div>

    <div class="relative h-[50vh] w-full overflow-hidden sm:h-[60vh]">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://melatonin.dev/wp-content/uploads/2025/10/sudara-melatonin.jpg"
        alt="Sudara, the developer of Sine Machine"
      />

      <div
        class="absolute inset-0 bg-gradient-to-br from-[rgba(33,3,70,0.5)] to-[rgba(0,0,0,0.7)]"
      ></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2
          class="mb-2 text-3xl font-semibold tracking-tight text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-lg sm:text-5xl sm:text-balance"
        >
          sine machine was built (and re-built) by Sudara over a period of 5 years
        </h2>

        <p
          class="mx-auto max-w-2xl text-lg font-medium text-pretty text-white text-shadow-[rgb(33,3,70)] text-shadow-md sm:text-xl/8"
        >
          (i'm a musician and indie dev who also does some
          <a
            class="font-semibold text-indigo-400 underline hover:text-indigo-300"
            href="https://github.com/sudara"
          >
            open source
          </a>
          )
        </p>
      </div>
    </div>

    <div class="bg-gray-900 py-12 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl rounded-3xl bg-gray-800/50 ring-1 ring-white/10 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div class="p-8 sm:p-10 lg:flex-auto">
            <h3 class="text-3xl font-semibold text-white">Buy "Early Access"</h3>
            <p class="mt-6 text-base/7 text-gray-300">
              It's November 2025 and Sine Machine just had a private beta. Bugs were fixed. Features
              were added. Now I want to quietly (shhh!!) let a few more people play with it while I
              polish things up, wrap up the manual, fix obscure DAW bugs, etc.
            </p>
            <div class="mt-10 flex items-center gap-x-4">
              <h4 class="flex-none text-sm/6 font-semibold text-indigo-400">What’s included</h4>
              <div class="h-px flex-auto bg-white/10"></div>
            </div>
            <ul
              role="list"
              class="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              <li class="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                MacOS AU, VST3, CLAP, Standalone (Apple Silicon and Intel)
              </li>
              <li class="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                Up to 3 installs per license (online activation required)
              </li>
              <li class="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                Windows VST3, CLAP, Standalone (Windows 10 and later)
              </li>
              <li class="flex gap-x-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                Updates included
              </li>
            </ul>
          </div>
          <div id="buy-now" class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div
              class="rounded-2xl bg-gray-900 py-10 text-center inset-ring inset-ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16"
            >
              <div class="mx-auto max-w-xs px-8">
                <p class="text-base font-semibold text-gray-400">Pay what you want!</p>
                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span id="slider-value" class="text-5xl font-semibold tracking-tight text-white">
                    $60
                  </span>
                  <span class="text-sm/6 font-semibold tracking-wide text-gray-400">USD</span>
                </p>
                <a
                  id="buy-button"
                  href="/?mb_intent=purchase&mb_product_id=sine-machine-early-access&mb_variation_id=sixty-dollars"
                  class="bg-buy-now-yellow mt-10 inline-block w-full rounded-md border border-transparent px-5 py-2 font-bold text-black hover:text-white sm:w-auto"
                >
                  Buy Now
                </a>

                <div
                  id="slider-container"
                  class="relative mt-8 h-24 w-full cursor-default touch-pan-x select-none"
                >
                  <div id="slider-track" class="h-7.5">
                    <div
                      class="absolute top-2.5 h-2.5 w-full rounded-md bg-[linear-gradient(180deg,rgba(33,13,60,0.5)_0%,rgba(48,19,91,0.5)_100%)] shadow-[inset_-2px_-2px_4px_rgba(142,88,255,0.2),inset_2px_2px_4px_rgba(11,0,19,0.5)]"
                    ></div>
                  </div>
                  <div
                    id="slider-progress"
                    class="pointer-events-none relative top-[-17px] h-1 w-0 translate-x-0.5 rounded-sm bg-linear-to-t from-[#ffbf44] to-[#ffbf44] shadow-[inset_0px_0px_11px_#ffb800,inset_0px_0px_22px_#ea5515,inset_0px_0.25px_1px_rgba(255,51,6,0.48),inset_0px_1px_2px_rgba(18,11,60,0.5),-2px_0px_8px_rgba(255,185,6,0.5),-2px_0px_6px_rgba(255,6,6,0.5)]"
                  ></div>

                  <div
                    id="slider-thumb"
                    class="relative top-[-30px] flex size-6 -translate-x-3 items-center justify-center rounded-full bg-gradient-to-b from-[rgb(233,123,19)] to-[rgb(254,62,0)] shadow-[0_2px_4px_rgba(255,138,0,0.4),0_1px_2px_rgb(12,10,51),0_1px_1px_rgb(12,13,49)]"
                  >
                    <div
                      class="size-4 rounded-full bg-gradient-to-b from-[rgb(31,10,60)] to-[rgb(43,15,84)]"
                    ></div>
                  </div>

                  <div id="tick-container" class="-mt-6">
                    <div id="base-tick" class="absolute flex -translate-x-1/2 cursor-pointer p-3">
                      <div class="h-3 w-0.5 bg-gray-400"></div>
                    </div>
                  </div>
                  <div id="label-container" class="mt-8">
                    <div
                      id="base-label"
                      class="centered absolute w-10 -translate-x-1/2 cursor-pointer text-white"
                    ></div>
                  </div>
                </div>

                <p class="mt-6 text-xs/5 text-pretty text-gray-400">
                  Pick a price that feels good to you.
                  <br />
                  All taxes are included in the price.
                  <br />
                  <br />
                  Note that I don't do discounts
                  <br />
                  or bLaCk fRiDaY dEaLZ!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Frequently asked questions
        </h2>
        <p class="mt-6 max-w-2xl text-base/7 text-gray-400">
          Have a different question? Hit me up at
          <a
            href="mailto:sudara@melatonin.dev"
            class="font-semibold text-indigo-400 underline hover:text-indigo-300"
          >
            sudara@melatonin.dev
          </a>
        </p>
        <div class="mt-20">
          <dl
            class="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:gap-x-10"
          >
            <div>
              <dt class="text-base/7 font-semibold text-white">
                What are the minimum requirements?
              </dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                Windows: Windows 10 and later
                <br />
                MacOS: Apple Silicon recommended.
                <br />
                Intel Macs are supported (macOS 11 and later), I'll be improving performance during
                early access.
              </dd>
            </div>

            <div>
              <dt class="text-base/7 font-semibold text-white">
                What formats does Sine Machine come in?
              </dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                VST3, AU and CLAP on macOS.
                <br />
                VST3 and CLAP on Windows.
                <br />
                Standalone on both.
              </dd>
            </div>
            <div>
              <dt class="text-base/7 font-semibold text-white">No AAX?</dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                Not at the moment. We recommend using Modalics' amazing (and free!)
                <a
                  class="font-semibold text-indigo-400 underline hover:text-indigo-300"
                  href="https://www.modalics.com/products/plugin-buddy-free"
                >
                  PluginBuddy
                </a>
                wrapper for people using Protools.
              </dd>
            </div>
            <div>
              <dt class="text-base/7 font-semibold text-white">Is Sine Machine CPU hungry?</dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                It can be heavy on older machines, especially low notes with unison voices and all
                the bells and whistles. Otherwise it's pretty chill.
              </dd>
            </div>
            <div>
              <dt class="text-base/7 font-semibold text-white">Is there a trial?</dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                Yup. 14 day trial.
                <a
                  class="font-semibold text-indigo-400 underline hover:text-indigo-300"
                  href="?mb_intent=view_product&mb_product_id=sine-machine-early-access"
                >
                  Download it here.
                </a>
              </dd>
            </div>
            <div>
              <dt class="text-base/7 font-semibold text-white">
                Do you offer offline license authorization?
              </dt>
              <dd class="mt-2 text-base/7 text-gray-400">
                Not at the moment, you'll need to be online to authorize the purchase on your
                computer.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <form
      action="https://dev.us20.list-manage.com/subscribe/post?u=aad1b140bd33d549e7d48839c&amp;id=27c552cd41&amp;f_id=006c63e7f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      validate
      class="mt-12 mb-16 px-5 sm:mx-auto sm:max-w-lg sm:px-0"
    >
      <h3 class="mb-5 text-3xl font-semibold tracking-tight text-white">
        Want email when there's news?
      </h3>

      <div class="sm:flex">
        <div class="min-w-0 flex-1">
          <label for="mce-EMAIL" class="sr-only">Email address</label>
          <input
            id="mce-EMAIL"
            type="email"
            required
            name="EMAIL"
            class="block w-full rounded-md border border-transparent bg-gray-300 px-5 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-0 focus:ring-offset-0"
            placeholder="Enter your email"
          />
        </div>
        <div class="mt-4 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            class="bg-buy-now-yellow inline-block w-full rounded-md border border-transparent px-5 py-2 font-bold text-black hover:text-white sm:w-auto"
          >
            Get Notified
          </button>
        </div>
      </div>
      <div id="mce-responses" class="pt-10 text-center text-white">
        <div class="response" id="mce-error-response" style="display: none"></div>
        <div class="response" id="mce-success-response" style="display: none"></div>
      </div>
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input type="text" name="b_aad1b140bd33d549e7d48839c_27c552cd41" tabindex="-1" value="" />
      </div>
    </form>

    <div class="mx-auto max-w-7xl px-10.5">
      <div class="md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div class="relative mb-10">
          <img
            src="./images/kelbin.png"
            alt=""
            class="border-buy-now-yellow absolute -top-4 -left-4 block aspect-square w-9 rounded-full border-2"
          />
          <div class="bg-buy-now-yellow rounded-t-xl px-[30px] pt-2.5 pb-2 text-sm">
            sine machine by
            <a href="">@sudara</a>
            is the best synth I have ever used
          </div>
          <div class="rounded-b-xl bg-[#2B1D53] px-[30px] py-2 text-xs text-white">
            Kelbin -
            <a href="">@imKelbin</a>
          </div>
        </div>
        <div class="relative mb-10">
          <img
            src="./images/anem0s.png"
            alt=""
            class="border-buy-now-yellow absolute -top-4 -left-4 block aspect-square w-9 rounded-full border-2"
          />
          <div class="bg-buy-now-yellow rounded-t-xl px-[30px] pt-2.5 pb-2 text-sm">
            got this a bit ago, just booted it up like 15 mins ago and this might be the coolest
            synth ive ever messed with what the fuck
          </div>
          <div class="rounded-b-xl bg-[#2B1D53] px-[30px] py-2 text-xs text-white">
            anem0s -
            <a href="">@anem0s1</a>
          </div>
        </div>
        <div class="relative mb-10">
          <img
            src="./images/kelbin.png"
            alt=""
            class="border-buy-now-yellow absolute -top-4 -left-4 block aspect-square w-9 rounded-full border-2"
          />
          <div class="bg-buy-now-yellow rounded-t-xl px-[30px] pt-2.5 pb-2 text-sm">
            sine machine by
            <a href="">@sudara</a>
            is the best synth I have ever used
          </div>
          <div class="rounded-b-xl bg-[#2B1D53] px-[30px] py-2 text-xs text-white">
            Kelbin -
            <a href="">@imKelbin</a>
          </div>
        </div>
        <div class="relative mb-10">
          <img
            src="./images/kelbin.png"
            alt=""
            class="border-buy-now-yellow absolute -top-4 -left-4 block aspect-square w-9 rounded-full border-2"
          />
          <div class="bg-buy-now-yellow rounded-t-xl px-[30px] pt-2.5 pb-2 text-sm">
            sine machine by
            <a href="">@sudara</a>
            is the best synth I have ever used
          </div>
          <div class="rounded-b-xl bg-[#2B1D53] px-[30px] py-2 text-xs text-white">
            Kelbin -
            <a href="">@imKelbin</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mb-24 columns-1 gap-6 md:columns-3 [&>*:nth-child(n+3)]:hidden md:[&>*:nth-child(n+3)]:block md:[&>*:nth-child(n+7)]:hidden"
    >
      <article class="mb-6 break-inside-avoid">
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            added the ability to map partials to arbitrary frequencies. instead of 500 harmonics,
            this is 500 sine waves tuned to the same pitch, spread apart a bit, going through
            various per-harmonic pitch and volume modulation
            <a href="https://t.co/VJSuWnj6bx">pic.twitter.com/VJSuWnj6bx</a>
          </p>
          &mdash; sudara (@sudara)
          <a href="https://twitter.com/sudara/status/1957960073541496836?ref_src=twsrc%5Etfw">
            August 20, 2025
          </a>
        </blockquote>
      </article>

      <article class="mb-6 break-inside-avoid">
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">last feature before private beta...</p>
          &mdash; sudara (@sudara)
          <a href="https://twitter.com/sudara/status/1894031139498549702?ref_src=twsrc%5Etfw">
            February 24, 2025
          </a>
        </blockquote>
      </article>

      <article class="mb-6 break-inside-avoid">
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            ok here we go, bending harmonics from a normal sawtooth to the set of fundamental
            frequencies contained in a 12tet minor 6/9 chord
            <a href="https://t.co/D213OyE9Vi">pic.twitter.com/D213OyE9Vi</a>
          </p>
          &mdash; sudara (@sudara)
          <a href="https://twitter.com/sudara/status/1630236704694239233?ref_src=twsrc%5Etfw">
            February 27, 2023
          </a>
        </blockquote>
      </article>
    </div>
  </div>
  <!-- /wp:html -->
</template>
