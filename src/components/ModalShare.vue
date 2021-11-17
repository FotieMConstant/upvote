<template>
  <div
    id="modal-id"
    class="
      min-w-screen
      h-screen
      animated
      fadeIn
      faster
      fixed
      left-0
      top-0
      flex
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-no-repeat bg-center bg-cover
    "
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0" />
    <div
      class="
        w-full
        max-w-lg
        p-5
        relative
        mx-auto
        my-auto
        rounded-xl
        shadow-lg
        bg-white
      "
    >
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center p-5 flex-auto justify-center">
          <h2 class="text-xl font-bold py-4">
            Share with your connections on LinkedIn✨
          </h2>
          <p class="pb-4 text-gray-400">Your design is ready to download😊</p>
          <img :src="output" />
        </div>
        <!--footer-->
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="
              mb-2
              md:mb-0
              bg-green-500
              border border-green-500
              px-5
              py-2
              text-sm
              shadow-sm
              font-medium
              tracking-wider
              text-white
              rounded-full
              hover:shadow-lg hover:bg-green-600
            "
            @click="downloadDataUrl('upvote_design', output)"
          >
            Save image
          </button>
          <button
            class="
              mb-2
              md:mb-0
              bg-red-500
              border border-red-500
              px-5
              py-2
              text-sm
              shadow-sm
              font-medium
              tracking-wider
              text-white
              rounded-full
              hover:shadow-lg hover:bg-red-600
            "
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    output: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    closeModal() {
      this.$emit("closeModalFromChild", false);
    },
    // download file
    downloadDataUrl(filename, dataUrl) {
      // Construct the 'a' element
      var link = document.createElement("a");
      link.download = filename;
      link.target = "_blank";

      // Construct the URI
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();

      // Cleanup the DOM
      document.body.removeChild(link);
      // delete link;
    },
  },
};
</script>
<style scoped>
.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(255, 255, 255, 0)),
    color-stop(20%, rgba(255, 255, 255, 0.2)),
    color-stop(60%, rgba(255, 255, 255, 0.5)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: shimmer 3s infinite;
  animation: shimmer 3s infinite;
  content: "";
}
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>
