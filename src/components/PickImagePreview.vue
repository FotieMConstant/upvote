<template>
  <div>
    <!-- img one -->
    <input v-if="!imgURL" type="file" @change="onFileChange" />

    <div id="preview">
      <img class="shadow-lg" v-if="imgURL" :src="imgURL" />
    </div>
    <!-- Defualt icon -->
    <div class="bg-white rounded-full w-20 shadow-lg mx-auto">
      <div class="mt-6">
        <img
          @click="showAllIcons = !showAllIcons"
          class="p-5 mx-auto"
          :src="require(`@/assets/icons/${defaultIcon}`)"
          alt=""
        />
      </div>
    </div>
    <!-- select icone -->
    <div
      v-show="showAllIcons"
      class="bg-white rounded-full w-full shadow-lg mx-auto"
    >
      <div class="flex justify-between px-3">
        <div v-for="icon in icons" :key="icon.name" class="mt-2 p-2">
          <img
            @click="selectIcon(icon.name, icon.icon)"
            class="mx-auto"
            :class="icon.name == 'insightful' ? 'w-6' : 'w-9'"
            :src="require(`@/assets/icons/${icon.icon}`)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: null, // for preview image
      showAllIcons: false, // for all icons
      defaultIcon: "Linkedin-Like-Icon-Thumbup500.png",
      icons: [
        {
          name: "like",
          icon: "Linkedin-Like-Icon-Thumbup500.png",
        },
        {
          name: "celebrate",
          icon: "Linkedin-Celebrate-Icon-ClappingHands.png",
        },
        {
          name: "support",
          icon: "Linkedin-Support-Icon-HeartinHand500.png",
        },
        {
          name: "love",
          icon: "Linkedin-Love-Icon-Heart250.png",
        },
        {
          name: "insightful",
          icon: "Linkedin-Insightful-Icon-Lamp500.png",
        },
        {
          name: "curious",
          icon: "Linkedin-Curious-Icon-PurpleSmiley500.png",
        },
      ],
    };
  },
  methods: {
    // onFileChange preview images
    onFileChange(e) {
      const file = e.target.files[0];
      this.imgURL = URL.createObjectURL(file);
    },
    selectIcon(iconName, icon) {
      console.log("Picking", iconName, icon);
      this.defaultIcon = icon; //setting the new icon
      this.showAllIcons = false; //close the icon menu
    },
  },
};
</script>

<style></style>
