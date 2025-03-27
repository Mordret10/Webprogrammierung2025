<script>
  export default {
    data() {
      return {
        images: ["/GalleryPics/Gallery_Blaske.jpg", "/GalleryPics/Gallery_Eschwege.jpg", "/GalleryPics/Gallery_GCK.jpg", "/GalleryPics/Gallery_Goessnitz.jpg", "/GalleryPics/Gallery_Subway.jpg"],
        index: 0
      }
    },
    methods: {
      increase(){
        if(this.index === 4)
        {
          this.index = 0;
        }
        else {
          this.index += 1;
        }
      },
      decrease(){
        if(this.index === 0)
        {
          this.index = 4;
        }
        else {
          this.index -= 1;
        }
      }
    }
  }
</script>

<template>
  <h1>Gallery</h1>
  <div class="buttons">
    <button @click="decrease">Previous</button>
    <button @click="increase">Next</button>
  </div>
  <div>
    <img alt="Image" :src="images[index]" width="1000" height="1000" />
  </div>
</template>

<style>


img {
  object-fit: contain;
}

div.buttons {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  place-content: center;
  flex-wrap: wrap;
}

button {
  font-size: 1rem;
}
</style>