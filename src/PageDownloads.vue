<template>
  <div class="preflight font-alright text-base">
    <div class="mt-16 mb-20">
      <div
        class="mb-12 text-center text-5xl font-bold text-white text-shadow-black/50 text-shadow-xs"
      >
        Download Sine Machine
      </div>
      <div class="flex justify-center gap-7">
        <a
          style="text-decoration: none"
          href="https://melatonin.moonbase.sh/api/customer/inventory/products/sine-machine-early-access/download/windows/latest"
          class="flex h-50 w-70 cursor-pointer flex-col justify-center rounded-md border border-transparent bg-[#1e0543] text-base text-[#CFB8FF] no-underline shadow-md shadow-zinc-500/10 hover:border-gray-500 hover:text-white"
        >
          <svg class="mx-auto h-24 w-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M3,12V6.75L9,5.43v6.48L3,12M20,3v8.75L10,11.9V5.21L20,3M3,13l6,.09V19.9L3,18.75V13m17,.25V22L10,20.09v-7Z"
            />
          </svg>
          <div class="mt-4 text-center">Download Windows</div>
        </a>
        <a
          style="text-decoration: none"
          href="https://melatonin.moonbase.sh/api/customer/inventory/products/sine-machine-early-access/download/mac/latest"
          class="flex h-50 w-70 cursor-pointer flex-col justify-center rounded-md border border-transparent bg-[#1e0543] text-base text-[#CFB8FF] no-underline shadow-md shadow-zinc-500/10 hover:border-gray-500 hover:text-white"
        >
          <svg
            class="mx-auto h-24 w-24"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
            />
          </svg>
          <div class="mt-4 text-center">Download Mac</div>
        </a>
      </div>
    </div>
    <div class="mx-auto max-w-4xl pb-8">
      <div class="mb-2 text-center text-lg text-white">Changelog</div>
      <div
        class="mx-auto w-9/10 rounded-md bg-[#edebfc] *:border-b *:border-gray-200 *:p-6 *:last:border-0 *:even:bg-gray-200/20"
      >
        <!-- <div>
        <div class="mb-1 flex items-baseline gap-1">
          <div class="text-base font-bold">26.0.31</div>
          <div>&ndash;</div>
          <div class="text-sm">Nov 29, 2025</div>
        </div>
        <div class="mt-4">
          <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
            <li>
              ✨Allow for unison spread to change while a note is being held (thx Arden)
            </li>
              <li>Fixes crash when `Bluetooth MIDI` is clicked in Standalone (thx @bells)</li>
              <li>Fixes Pitchbend range for both MIDI 1 and MPE controllers (thx @jl)</li>
              <li>Fixes Decay/Hold/Release help text for `Low To High` and `High To Low` (thx Julian)</li>
            </li>
          </ul>
        </div>
      </div>
-->
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.23</div>
            <div>&ndash;</div>
            <div class="text-sm">Nov 18, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>
                Fixes “right channel drops out” issue reported by @James Swift, @Enchse and others
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.22</div>
            <div>&ndash;</div>
            <div class="text-sm">Oct 31, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>✨ Footer visualizer now stays at full brightness when preset browser is open</li>
              <li>Fix keyboard text input issue in Logic Pro</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.20</div>
            <div>&ndash;</div>
            <div class="text-sm">Oct 28, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>✨ New patches from DATABROTH’s stream</li>
              <li>More launch day fixes to initial DAW state loading.</li>
              <li>Advanced sustain values now always show correctly at first DAW load.</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.16 (soft launch)</div>
            <div>&ndash;</div>
            <div class="text-sm">Oct 27, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>
                When opening up a saved project containing sine machine in a DAW, some patches
                containing individual changes to the harmonics would not load properly. This is now
                fixed (thx Matthijs and Enrico)
              </li>
              <li>
                On first load, ensure “Advanced” view has proper formatting with labelled units.
              </li>
              <li>Add ability to run a 10s perfetto performance trace from settings.</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.4</div>
            <div>&ndash;</div>
            <div class="text-sm">Sept 20, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>✨New/updated presets by @DATABROTH (still going through some of em!)</li>
              <li>
                ✨ Resizing the plugin now scales the interface, keeping the aspect ratio. User
                Interface size/dimensions are stored and recalled globally across sessions
              </li>
              <li>
                Improve and smooth performance profile for low notes with lots of harmonics (thx
                @Mitch Schneider)
              </li>
              <li>Small UI tweaks</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">26.0.1</div>
            <div>&ndash;</div>
            <div class="text-sm">Sept 10, 2025</div>
          </div>
          <div class="mt-4">
            <p class="mb-4">
              New major version. Shows up as a new separate plugin in your DAW, v26.
            </p>

            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>✨ New gaussian Bandpass filter type</li>
              <li>
                ✨ New soft-clipper and limiter. This is behind the scenes (at least for now) to
                help out with “mastering” presets and UX in general.
              </li>
              <li>✨ 15+ new presets (thx @mleuc, @Mitch Schneider, @Andreya)</li>
              <li>
                ✨ Reverb level is now a mix slider and can go 100% wet. This is a breaking change.
                Factory presets are updated. Your user presets will auto-convert but you still might
                need to bump the reverb mix level UP for patches with unison voices.
              </li>
              <li>
                Correct totally embarrassing MIDI note timing issues on larger block sizes (thx
                @Mitch Schneider)
              </li>
              <li>
                Improve unison volume compensation (thx @Mitch Schneider). This is impossible to be
                perfect due to so many factors, but the compensation now depends on spread values.
              </li>
              <li>Volume now goes up to +20 db (was +15db)</li>
              <li>
                Fix voice handling bug where only a subset of unison voices fire on note-on (when
                all voices were utilized).
              </li>
              <li>Improve reverb performance, especially for patches with unison.</li>
              <li>Improve performance of noise algorithms on macOS 12 and above.</li>
              <li>
                Ensure the very first note after start of instrument actually glides when using
                rel/abs glide
              </li>
              <li>Add hover states for both text and icon selectors</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="mb-1 flex items-baseline gap-1">
            <div class="text-base font-bold">25.0.27</div>
            <div>&ndash;</div>
            <div class="text-sm">Aug 22, 2025</div>
          </div>
          <div class="mt-4">
            <ul class="ml-4 list-outside list-disc text-sm *:mb-2 *:pl-1">
              <li>✨ New draft patches from @mleuc!</li>
              <li>
                ✨ Triangle trem visualization finally displays sharpness and looks decent now
              </li>
              <li>
                Fix crash that could happen with very low frequencies hitting the reverb (thx
                @mleuc)
              </li>
              <li>
                Fix infs that can occur on Windows with frequencies way above nyquist (thx @mleuc)
              </li>
              <li>
                Improve reverb algorithm to better account for frequencies above nyquist and below
                its lower bound.
              </li>
              <li>Fix footer visualizer help text and let user know they can PANIC.</li>
              <li>Free modes renamed to Hz</li>
              <li>When sliders are disabled and grayed out, their labels now are too</li>
              <li>Add glide mode label.</li>
              <li>Clean up the text selectors, reduce font size and move them to small caps</li>
              <li>Allow utf-8 in the UI labels and help text (ENV→TREM etc)</li>
              <li>When odd/even selectors are disabled they are now grayed out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
