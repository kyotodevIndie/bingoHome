<script lang="ts" setup>

</script>

<template>
<nav class="bg-black fixed w-full z-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <div class="flex flex-row gap-6">
          <a href="/" class="flex items-center space-x-3">
            <img src="/BananaLogo.svg" class="w-36" alt="BananaGomes Logo" />
          </a>

          <ul class="flex flex-row items-center justify-center font-semibold text-secondary">
            <li class="px-3 bg-transparent hover:border-b-2 border-b-primary ">
              <a href="/">Home</a>
            </li>
            <li>
              <button
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-trigger="hover"
                class="flex items-center justify-between w-full py-2 px-3  text-secondary "
              >
                Live Games
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal divide-y  rounded-lg shadow w-44 bg-tertiary divide-gray-600"
              >
                <ul
                  class="py-2 text-sm"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-primary hover:text-secondary"
                    >
                      Game 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-primary hover:text-secondary"
                    >
                      Game 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-primary hover:text-secondary"
                    >
                      Game 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

          <Button class="px-6 hidden md:block" label="Message"/>
            <!-- <img src="./messageIcon.svg" alt="Message Icon" />
          </Button> -->
      </div>
    </nav>
</template>
