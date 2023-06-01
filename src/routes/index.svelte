<script lang="ts">
  import { onMount } from 'svelte';

  let navbar: HTMLElement;
  let navbox: HTMLElement;
  let main;
  var y;

  function scrollHandler() {
    if (main.scrollTop > 0) {
      navbox.classList.add('scrolled');
    } else {
      navbox.classList.remove('scrolled');
    }
  }

  onMount(() => {
    const main = document.querySelector('main');
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('#navbar nav li');
    let currentPage;
    main.addEventListener('scroll', updateNav);

    function updateNav() {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (main.scrollTop >= sectionTop - sectionHeight / 3) {
          currentPage = section.getAttribute('id');
          // console.log(currentPage);
        }
      });

      navLi.forEach((li) => {
        // console.log(li);
        li.classList.remove('currentpage');
        if (li.classList.contains(currentPage)) {
          li.classList.add('currentpage');
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Home | Task Force Hellcat</title>
</svelte:head>

<main bind:this={main}>
  <div id="navbar" bind:this={navbar}>
    <nav bind:this={navbox}>
      <li class="home currentpage"><a href="#home">home</a></li>
      <li class="about"><a href="#about">über uns</a></li>
      <li class="wiki"><a href="#wiki">wiki</a></li>
      <li class="join"><a href="#join">kontakt</a></li>
    </nav>
  </div>

  <section id="home">
    <video id="bg-video" poster="/images/hero.png" autoplay muted loop>
      <source src="/images/bg.mp4" type="video/mp4" />
      Error: Your browser does not support HTML5 video.
    </video>
    <img id="hero-text" class="noselect reveal" alt="TASK FORCE HELLCAT" src="/images/hero-text.svg" />
  </section>
  <section id="about">
    <div id="barbed-wire" />
    <div class="content">
      <div class="text-block">
        <h2>Über uns</h2>
        <p>
          Die Task Force Hellcat ist eine 2021 gegründete Einheit, die Milsim in der von Bohemia Interactive
          entwickelten Militärsimulation Arma 3 spielt. Innerhalb des Spiels wird ein besonderer Wert auf
          Strategie, Immersion und einen gemeinschaftlichen Umgang gesetzt. Zur Steigerung der Immersion und
          des Realismus benutzen wir Modifikationen wie ACE3, ACRE2 und KAT.
        </p>
      </div>
      <img src="/images/m90.png" alt="Swedish M90 Soldier" class="img-right" />
    </div>
  </section>
  <section id="wiki" />
  <section id="join" />
</main>

<style lang="scss">
  :global(body) {
    overflow: hidden;
    color: #fff;
    font-family: 'GeneralSans-Variable', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  main {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    font-family: 'GeneralSans-Variable';
  }

  section {
    min-height: 100vh;
    font-size: 16pt;
    font-weight: 330;
    line-height: 2;
    letter-spacing: 0.1rem;
    background: #012d47;
    // background: linear-gradient(0deg, rgba(21, 64, 73, 1) 0%, rgba(21, 64, 73, 1) 90%, rgba(0, 0, 0, 1) 100%);

    &:nth-child(even) {
      background-color: #001f31;
    }

    p {
      text-align: justify;
      text-justify: inter-character;
      max-width: 60rem;
      font-weight: 200;
      word-spacing: -1px;

      @media screen and (max-width: 1020px) {
        text-align: unset;
        text-justify: unset;
      }
    }

    img:not(#hero-text) {
      width: min(100%, 400px);
      box-shadow: 86px 86px 18px -76px rgba(0, 0, 0, 0.25);
    }

    .content {
      width: min(100%, 150rem);
      padding-inline: 21rem;
      padding-block: 17rem;
      justify-content: space-between;
      height: 90%;
      margin-inline: auto;
      line-height: 4rem;
      display: flex;
      gap: 5rem;
      flex-wrap: wrap;

      @media screen and (max-width: 1020px) {
        padding-inline: 5rem;
      }

      h1,
      h2 {
        font-weight: 600;
        text-transform: uppercase;
      }

      .text-block {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  }

  section#about {
    .content {
      padding-block: 6rem;
    }

    #barbed-wire {
      --height: 10rem;
      width: 100%;
      // background-color: lime;
      height: var(--height);
      transform: translateY(-50%);
      background-image: url('/images/barbed-wire.svg');
      background-position-x: 4rem;
    }
  }

  section#home {
    background-image: none;
    background-color: rgba(0, 0, 0, 0);
    display: grid;
    place-items: center;
    height: 100vh;

    #bg-video,
    #hero-text {
      grid-row-start: 1;
      grid-column-start: 1;
    }

    #bg-video {
      object-fit: cover;
      width: min(100%, 1920px);
      height: 100vh;
      pointer-events: none;
      position: relative;
    }

    #hero-text {
      height: fit-content;
      width: min(80rem, 90%);
      pointer-events: none;
      z-index: 100;
    }
  }

  #navbar {
    align-items: center;
    height: 8rem;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    font-size: min(15pt, 5vw);
    z-index: 100;

    :global(&[data-scrolled='true']) {
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(127, 127, 127, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(9px);
    }

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in-out;

      &:global(.scrolled) {
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(127, 127, 127, 0.37);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(9px);
      }

      li {
        display: inline-block;
        white-space: nowrap;

        &.currentpage::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: #fff;
          margin-bottom: -2px;
          transition: width 2s ease-in-out;
          animation: expandX 0.5s;
          margin-inline: auto;
        }

        @keyframes expandX {
          0% {
            width: 0.1rem;
          }
          100% {
            width: 100%;
          }
        }

        a {
          color: inherit;
          text-decoration: none;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
</style>
