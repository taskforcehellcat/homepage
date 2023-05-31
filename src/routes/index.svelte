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
			<li class="join"><a href="#join">beitritt</a></li>
		</nav>
	</div>

	<section id="home">
		<video id="bg-video" poster="/images/hero.png" autoplay muted loop>
			<source src="/images/bg.mp4" type="video/mp4" />
			Error: Your browser does not support HTML5 video.
		</video>
		<div id="hero-text">
			<img class="noselect reveal" alt="TASK FORCE HELLCAT" src="/images/hero-text.svg" />
		</div>
		<img id="hero-img" class="noselect" alt="" src="/images/soldier.png" />
	</section>
	<section id="about" />
	<section id="wiki" />
	<section id="join" />
</main>

<style lang="scss">
	:global(body) {
		overflow: hidden;
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
	}

	section {
		min-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: #297e8f;
		background-position-x: 50%;

		background-position-y: 70%;
		background-attachment: fixed;
	}

	section:nth-child(2n) {
		background-color: #1e5c68;
	}

	section:not(section#home) {
		z-index: 10;
		position: relative;
	}

	section#about {
		background: rgb(21, 64, 73);
		// background: linear-gradient(0deg, rgba(21, 64, 73, 1) 0%, rgba(21, 64, 73, 1) 90%, rgba(0, 0, 0, 1) 100%);
	}

	section#home {
		background-image: none;
		background-color: rgba(0, 0, 0, 0);
		display: grid;
		grid-template-columns: 1fr;

		#bg-video,
		#hero-text,
		#hero-img {
			grid-row-start: 1;
			grid-column-start: 1;
		}

		#bg-video {
			object-fit: cover;
			width: 100%;
			width: max(100rem, 100%);
			pointer-events: none;
			position: fixed;
		}

		#hero-text {
			z-index: 2;
			font-size: 180pt;
			color: rgb(255, 255, 255);
			text-transform: uppercase;
			width: min(75rem, 85%);
			opacity: 100;
			transition: opacity 3s ease-in;
			transform: translate(0, -3rem);
			place-self: center;
		}

		#hero-img {
			z-index: 1;
			width: min(45rem, 100%);
			place-self: center;
			transform: translateX(-6rem);
			width: max(30rem, 35%);
			position: fixed;
			pointer-events: none;
		}
	}

	#navbar {
		align-items: center;
		height: 8rem;
		width: 100%;

		font-weight: 700;
		text-transform: uppercase;
		color: #fff;
		position: fixed;
		display: flex;
		justify-content: center;
		font-size: min(15pt, 5vw);
		z-index: 100;

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
