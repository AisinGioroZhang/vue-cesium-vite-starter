<template>
  <div class="home viewer">
    <vc-viewer ref="viewerRef" @ready="onViewerReady">
      <vc-entity
        ref="entity"
        :billboard="billboard"
        :position="[108, 32]"
        :point="point"
        :label="label"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        />
      </vc-entity>
      <vc-layer-imagery>
        <vc-imagery-provider-osm />
      </vc-layer-imagery>
      <vc-navigation :position="position" :offset="offset" />
      <vc-measurements :offset="[0, 40]" :on-fab-updated="onFabUpdated" />
      <vc-drawings
        position="bottom-right"
        :main-fab-opts="mainFabOpts"
        :offset="[0, 40]"
      />
    </vc-viewer>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
onMounted(() => {
  console.log(props.msg);
});
const viewerRef = ref(null);
const position = ref("top-right");
const offset = ref([10, 20]); // right top

const mainFabOpts = {
  direction: "left",
};
// VcGraphicsPointProps;
const point = {
  pixelSize: 28,
  color: "red",
};
// : VcGraphicsLabelProps
const label = computed(() => {
  return {
    text: props.msg,
    pixelOffset: [0, 80],
    fillColor: "red",
  };
});
const label1 = {
  text: "Hello VueCesium",
  pixelOffset: [0, 80],
  fillColor: "red",
};
// VcGraphicsBillboardProps
const billboard = ref({
  image: "https://zouyaoji.top/vue-cesium/favicon.png",
  scale: 0.5,
});

//: VcReadyObject
const onViewerReady = (readyObj) => {
  console.log(readyObj.viewer);
};

// : VcPickEvent
const onEntityEvt = (e) => {
  console.log(e);
  if (e.type === "onmouseover") {
    billboard.value = {
      image: "https://zouyaoji.top/vue-cesium/favicon.png",
      scale: 0.6,
    };
  } else if (e.type === "onmouseout") {
    billboard.value = {
      image: "https://zouyaoji.top/vue-cesium/favicon.png",
      scale: 0.5,
    };
  }
};

const onFabUpdated = () => {
  //
};
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.viewer {
  height: 100vh;
}
</style>
