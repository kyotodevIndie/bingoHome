<script setup lang="ts">
//@ts-nocheck
import { ref, onMounted, watch } from 'vue';
import GameFeature from '../components/GameFeature.vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';

const route = useRoute();

const gameInfo = ref<any>({id:'', name: ''});

const gameInfos: any = {
  1 : {
    name: "Roleta Ao vivo",
    id: "85fd764e-72aa-40a0-b865-cac69725870b"
  },
  2: {
    name: "Bingo",
    id: "936e2f50-d607-4dd7-8088-57af0218137a",
  },
  3: {
    name: "Roda",
    id: "2dfe08e8-f41d-40d3-992d-ecbc8eddf665"
  }
}

watch(
  () => route.params,
  (toParams) => createNanoPlayer(toParams.id)
);


onMounted(() => {
  createNanoPlayer(route.params.id)
})


const createNanoPlayer = (id: any) => {
  
  gameInfo.value = gameInfos[id]

  var config = {
	"source": {
		"group": {
			"id": gameInfo.value.id,
			"apiurl": "https://bintu.nanocosmos.de"
		},
		"options": {
			"adaption": {
				"rule": "deviationOfMean2"
			}
		},
		"startIndex": 0
	},
	"playback": {
		"latencyControlMode": "classic",
		"autoplay": true,
		"automute": true,
		"faststart": true
	},
	"style": {
		"width": "auto",
		"height": "auto",
    "controls": false,
	},

};

    var player = new window.NanoPlayer("playerDiv");
    player.setup(config).then(function (config: any) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
    }, function (error: any) {
        alert(error.message);
    });
}


</script>


<template>

  <div class="bg-tertiary text-secondary">
   

    <div class=" pt-20 pb-0 flex flex-col items-center justify-center">
      <div id="playerDiv" class="w-full pt-[56.25%]  xl:pt-[42%]" />


      
      <div class=" relative md:bottom-[300px]  flex flex-col items-center justify-center md:[background:linear-gradient(180deg,_rgba(31,_21,_48,_0),_#2b1d00_50%,_#141418)] z-10">
      <div className="w-full md:w-3/4  flex md:flex-row flex-col justify-center items-center gap-12 pt-32 px-12 ">
          <div className="w-full md:w-2/4">
            <h1 className="text-5xl font-bungee">{{gameInfo.name}}</h1>
            <p class="">
              Our roulette is based on the traditional, European form, with a
              37-number wheel and a single zero. We provide all the traditional
              inside and outside bets as well as French bets on the racetrack -
              Voisins du Zero, Tiers and, Orphelins. Our betting mechanics
              include a revolutionary swipe to bet 
              Our roulette is based on the traditional, European form, with a
              37-number wheel and a single zero. We provide all the traditional
              inside and outside bets as well as French bets on the racetrack -
              Voisins du Zero, Tiers and, Orphelins. Our betting mechanics
              include a revolutionary swipe to bet 
            </p>
          </div>

        <div class="flex flex-col items-start justify-center gap-2 w-full md:w-1/4">
                <img
                  class=""
                  alt=""
                  src="/backofficef85e1f85svg.svg"
                />
                <h3 class="text-xl font-extrabold  font-roboto mt-4">
                  Back Office
                </h3>
                <p> For operators, our back office
features easy to set-up limits and
bet customisation. It provides you
with full control over the player
experience. </p>
        </div>
      </div>
      </div>
    </div>
<div class="md:mt-[-200px]">
  <GameFeature />

</div>

  </div>
</template>

