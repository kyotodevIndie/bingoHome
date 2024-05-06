
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
import Button from './Button.vue';

const closeDrawer = () => {
  const drawer = document.getElementById('drawer-right');
  if (drawer instanceof HTMLInputElement) {
    drawer.checked = false;
  }
}
</script>
<template>
  <div class="navbar navbar-sticky px-2 ">
	<div class="navbar-center gap-6 hidden md:flex">
    <RouterLink :to="{ name: 'home' }">
      <img src="/BananaLogo.svg" class="w-36" alt="BananaGomes Logo" />
    </RouterLink>

		<RouterLink :to="{ name: 'home' }" class="navbar-item border-b-primary rounded-none hover:border-b-2">Home</RouterLink>

		<div class="dropdown-container justify-center">
      <div class="dropdown dropdown-hover">
        <a class="navbar-item py-6 flex flex-row items-center gap-2" tabindex="0">Live Games  <Icon icon="tabler:chevron-down" /></a>
        <div class="dropdown-menu dropdown-menu-bottom-right mt-2">
          <RouterLink class="dropdown-item text-sm" :to="{ name: 'game', params: { id: 1 }}" replace> Roleta </RouterLink>
          <RouterLink tabindex="-1" class="dropdown-item text-sm" :to="{ name: 'game', params: { id: 2 }}" replace> Bingo </RouterLink>
          <RouterLink tabindex="-1" class="dropdown-item text-sm" :to="{ name: 'game', params: { id: 3 }}" replace> Roda </RouterLink>
        </div>
      </div>
    </div>

    <RouterLink :to="{ name: 'contact'}" class="ml-6 lg:ml-[40%]" >
      <Button class="btn btn-warning btn-xl px-6"> 
        <img src="/messageIcon.svg" alt="Message Icon" />
      </Button>
    </RouterLink>

	</div>
  <div class="navbar-start gap-6 md:hidden">
    <RouterLink :to="{ name: 'home' }">
      <img src="/BananaLogo.svg" class="w-36" alt="BananaGomes Logo" />
    </RouterLink>
  </div>
  <div class="navbar-end gap-6 md:hidden">
    <input type="checkbox" id="drawer-right" class="drawer-toggle" />

    <label for="drawer-right" class="btn btn-primary px-3"><Icon icon="tabler:menu-2" class="text-xl text-tertiary" /></label>
    <label class="overlay" for="drawer-right"></label>
    <div class="drawer drawer-right">
      <div class="drawer-content pt-10 flex flex-col h-full">
        <label for="drawer-right" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
	<section class="menu-section">
		<ul class="menu-items">
			<li class="menu-item" @click="closeDrawer" :to="{ name: 'home' }" >Home</li>
			<li>
				<input type="checkbox" id="menu-1" class="menu-toggle" />
				<label class="menu-item justify-between" for="menu-1">
					<span>Live Games</span>
					<span class="menu-icon">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h-4 stroke-content3">
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</span>
				</label>

				<div class="menu-item-collapse">
					<div class="min-h-0">
          <RouterLink @click="closeDrawer"  class="menu-item ml-6" :to="{ name: 'game', params: { id: 1 }}" > Roleta </RouterLink>
          <RouterLink @click="closeDrawer"  tabindex="-1" class="menu-item ml-6" :to="{ name: 'game', params: { id: 2 }}" > Bingo </RouterLink>
          <RouterLink @click="closeDrawer"  tabindex="-1" class="menu-item ml-6" :to="{ name: 'game', params: { id: 3 }}" > Roda </RouterLink>
					</div>
				</div>
			</li>
		</ul>
	</section>
      </div>
    </div>
  </div>
</div>
</template>
