<template>
  <div class="home">
    <div class="relative">
      <!-- {{ $t("welcome") }} -->
      <div class="flex justify-between">
        <!-- the div to be converted to img -->
        <div ref="printMe" class="bg-gray-100 w-full h-screen">
          <div class="pt-20">
            <!-- in display mode only -->
            <div v-show="editMode.title == false">
              <label
                @dblclick="editMode.title = true"
                class="font-bold text-gray-700 text-5xl"
              >
                {{ data.title }}
              </label>
            </div>
            <!-- When in edit mode -->
            <input
              class="
                font-bold
                bg-gray-100
                text-gray-700 text-5xl
                focus:outline-none
              "
              v-show="editMode.title == true"
              v-model="data.title"
              @blur="editMode.title = false"
              @keyup.enter="editMode.title = false"
            />
            <div class="flex justify-between space-x-2 px-6 mt-16">
              <div class="">
                <PickImagePreview />
              </div>
              <div class="">
                <PickImagePreview />
              </div>
            </div>
            <!-- copyright -->
            <div
              class="
                font-bold
                text-center text-gray-400
                space-x-2
                italic
                text-sm
              "
            >
              <!-- display mode -->
              <div v-show="editMode.creatorName == false">
                <label
                  @dblclick="editMode.creatorName = true"
                  class="font-bold text-gray-700 text-sm"
                >
                  {{ data.creatorName }}
                </label>
              </div>
              <!-- edit mode -->
              <input
                class="
                  font-bold
                  bg-gray-100
                  text-gray-700 text-sm
                  focus:outline-none
                "
                v-show="editMode.creatorName == true"
                v-model="data.creatorName"
                @blur="editMode.creatorName = false"
                @keyup.enter="editMode.creatorName = false"
              />
            </div>
            <!-- designed by -->
            <div
              class="
                font-bold
                absolute
                bottom-2
                right-2
                text-gray-400
                space-x-2
                italic
                text-sm
              "
            >
              <div>Designed with upvote!</div>
            </div>
          </div>
        </div>
        <!-- <div class="bg-red-100 w-3/12">
          <button @click="print">Share this</button>
        </div> -->
      </div>
      <!-- modal -->
      <ModalShare
        v-show="showOutputModal"
        :output="output"
        @closeModalFromChild="closeModal"
      />
    </div>
    <button
      class="
        absolute
        bottom-0
        bg-blue-500
        text-white
        p-2
        rounded
        hover:bg-blue-800
        m-2
      "
      @click="print"
    >
      Share +
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalShare from "@/components/ModalShare.vue";
import PickImagePreview from "@/components/PickImagePreview.vue";

export default {
  name: "Home",
  components: {
    ModalShare,
    PickImagePreview,
  },
  data() {
    return {
      // imgOneURL: null, // for preview image
      // imgTwoURL: null, // for preview image
      output: null, // for final image
      showOutputModal: false,
      editMode: {
        title: false,
        creatorName: false,
      },
      data: {
        title: "What's up?",
        creatorName: "@creator_name",
      },
    };
  },
  mounted() {},
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
      };
      try {
        this.output = await this.$html2canvas(el, options);
        this.showOutputModal = true;
      } catch (error) {
        console.error(error);
      }
    },
    closeModal(modalState) {
      this.showOutputModal = modalState;
    },
    // // onFileChange preview images
    // onFileChangeImgOne(e) {
    //   const file = e.target.files[0];
    //   this.imgOneURL = URL.createObjectURL(file);
    // },
    // onFileChangeImgTwo(e) {
    //   const file = e.target.files[0];
    //   this.imgTwoURL = URL.createObjectURL(file);
    // },
  },
};
</script>
