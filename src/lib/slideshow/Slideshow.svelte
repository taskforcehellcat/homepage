<script lang="ts">
  import { onMount } from 'svelte/internal';

  export let images: Array<string> = [];
  export let captions: Array<string> = [];

  let slideshow: HTMLDivElement;
  let showIndex = Math.floor(Math.random() * images.length);
  let interacting = false;

  let caption: string = '';

  function slide(direction: number): void {
    update(direction);

    setTimeout(() => {
      if (!interacting) {
        slide(1);
      }
    }, 8000);
  }

  function scrollSlide(direction: number): void {
    interacting = true;
    update(direction);
  }

  function update(direction: number): void {
    showIndex = (showIndex + direction + images.length) % images.length;
    slideshow.style.opacity = '0';

    caption = captions[showIndex];

    setTimeout(() => {
      slideshow.style.backgroundImage = `url(${images[showIndex]})`;
      slideshow.style.opacity = '1';
    }, 400);
  }

  onMount(() => {
    slide(0);
  });
</script>

<div class="container">
  <div class="image-wrapper">
    <div bind:this={slideshow} class="slideshow" />
    <button class="button button-left" on:click={() => scrollSlide(-1)}
      >&#10094;</button
    >
    <button class="button button-right" on:click={() => scrollSlide(1)}
      >&#10095;</button
    >
  </div>

  {#if caption}
    <span class="caption">{caption}</span>
  {/if}
</div>

<style lang="scss">
  .container {
    width: 100%;
    height: min(60rem, 50vw);
  }

  .image-wrapper {
    position: relative;
    height: 100%;
  }

  .slideshow {
    position: relative;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;

    transition: opacity 0.38s;
  }

  .button {
    position: absolute;
    top: 50%;

    height: 5rem;
    width: 3rem;

    border-radius: 0.4rem;
    border: none;

    transform: translate(0, -50%);
    opacity: '1';

    line-height: 3rem;

    background-color: rgba(213, 213, 213, 0.7);

    cursor: pointer;

    &:hover {
      background-color: rgba(228, 228, 228, 0.9);
    }

    &.button-right {
      right: -1.5rem;
    }

    &.button-left {
      left: -1.5rem;
    }
  }

  .caption {
    max-width: 100%;
    display: block;
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>
