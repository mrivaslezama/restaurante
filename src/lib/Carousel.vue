<template>
  <div class="carousel">
    <button class="prev" @click="prevImage">Previous</button>
    <div class="image-container">
      <img :src="currentImage" :alt="currentImageAlt" />
    </div>
    <button class="next" @click="nextImage">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        // Add more image paths as needed
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentImageAlt() {
      return `Image ${this.currentIndex + 1}`;
    },
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev,
.next {
  padding: 8px 16px;
}

.image-container {
  margin: 16px;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
