<template>
  <header id="header" class="font-alright text-base">
    <nav class="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="hidden w-full items-center justify-between py-6 lg:flex">
        <div class="flex items-center">
          <a class="relative -top-0.5" href="/">
            <span class="sr-only">Melatonin</span>
            <img
              class="h-20 w-auto"
              src="https://melatonin.dev/wp-content/uploads/2024/04/moon-logo-figma.png"
              alt=""
            />
          </a>
          <div class="ml-10 space-x-8">
            <a
              href="?mb_intent=view_product&mb_product_id=sine-machine-early-access"
              class="text-light-purple text-xl font-medium hover:text-white"
            >
              Downloads - HWG
            </a>
            <a
              href="/manuals/sine-machine/"
              class="text-light-purple text-xl font-medium hover:text-white"
            >
              Manual
            </a>
            <a href="/blog/" class="text-light-purple text-xl font-medium hover:text-white">
              Blog
            </a>
            <a href="/about/" class="text-light-purple text-xl font-medium hover:text-white">
              About
            </a>
            <a
              href="javascript:void(0);"
              onclick="Moonbase.view_account()"
              class="text-light-purple text-xl font-medium hover:text-white"
            >
              Account
            </a>
          </div>
        </div>
        <a
          href="javascript:void(0);"
          onclick="Moonbase.view_account()"
          class="text-light-purple hidden rounded-md border border-transparent px-4 py-2 font-medium hover:text-white"
        >
          Account
        </a>
        <a
          href="#buy-now"
          class="bg-buy-now-yellow inline-block rounded-md border border-transparent px-4 py-2 font-bold text-black hover:text-white"
        >
          Buy Now
        </a>
      </div>
      <div class="absolute top-0 left-0 block w-full pt-3 lg:hidden">
        <div class="relative z-50 flex justify-between">
          <a href="/" class="block">
            <span class="sr-only">Melatonin</span>
            <img
              class="relative -top-5 h-20 w-auto"
              src="https://melatonin.dev/wp-content/uploads/2024/04/moon-logo-figma.png"
              alt=""
            />
          </a>
          <a href="#" class="mt-2 mr-5 flex" id="menu-button">
            <div class="text-light-purple mr-2 text-xl font-medium">Menu</div>
            <div class="space-y-0.5 pt-2" style="position: relative; top: -2px">
              <div class="bg-light-purple h-0.5 w-4"></div>
              <div class="bg-light-purple h-0.5 w-4"></div>
              <div class="bg-light-purple h-0.5 w-4"></div>
              <div class="bg-light-purple h-0.5 w-4"></div>
            </div>
          </a>
        </div>
        <div
          id="menu-items"
          class="relative -top-24 z-30 hidden flex-col justify-center space-y-3 bg-black pt-20 pb-11 pl-4 opacity-90 lg:hidden"
          style="padding-top: 110px"
        >
          <a
            href="?mb_intent=view_product&mb_product_id=sine-machine-early-access"
            class="text-light-purple text-xl font-medium hover:text-indigo-50"
          >
            Downloads
          </a>
          <a
            href="/manuals/sine-machine/"
            class="text-light-purple text-xl font-medium hover:text-indigo-50"
          >
            Manual
          </a>
          <a href="/blog/" class="text-light-purple text-xl font-medium hover:text-indigo-50">
            Blog
          </a>
          <a
            href="javascript:void(0);"
            onclick="Moonbase.view_account()"
            class="text-light-purple text-xl font-medium hover:text-indigo-50"
          >
            Account
          </a>
          <a
            href="#buy-now"
            class="bg-buy-now-yellow relative top-3 block max-w-max rounded-md border border-transparent px-4 py-2 text-xl font-bold text-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
