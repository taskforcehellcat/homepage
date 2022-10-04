<script lang="ts">
	let navbar: HTMLElement;
	let navbox: HTMLElement;
	let main;

	function scrollHandler() {
		console.log('scrolled');
		if (main.scrollTop > 0) {
			navbox.classList.add('scrolled');
		} else {
			navbox.classList.remove('scrolled');
		}
	}
</script>

<svelte:head>
	<title>Home | Task Force Hellcat</title>
</svelte:head>

<main bind:this={main} on:scroll={() => scrollHandler()}>
	<div id="navbar" bind:this={navbar}>
		<nav bind:this={navbox}>
			<li class="currentpage"><a href="#home">home</a></li>
			<li><a href="#about">über uns</a></li>
			<li><a href="https://wiki.taskforcehellcat.de/" target="_blank">wiki</a></li>
			<li><a href="#join">beitritt</a></li>
		</nav>
	</div>

	<section id="home">
		<video id="bg-video" autoplay muted loop>
			<source src="/images/bg.mp4" poster="/images/hero.png" type="video/mp4" />
			Error: Your browser does not support HTML5 video.
		</video>
		<img id="hero-text" class="noselect" alt="TASK FORCE HELLCAT" src="/images/hero-text.svg" />
		<img id="hero-img" class="noselect" alt="" src="/images/soldier.png" />
	</section>
	<section id="about" />
	<section id="join" />
</main>

<style lang="scss">
	:global(body) {
		overflow: hidden;
	}

	#bg-video {
		position: fixed;
		z-index: -1;
		object-fit: cover;
		top: 0;
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

	section#home {
		background-image: none;
		background-color: rgba(0, 0, 0, 0);

		display: flex;
		justify-content: center;
		align-items: center;

		#hero-text {
			font-size: 180pt;
			color: rgb(255, 255, 255);
			text-transform: uppercase;
			width: min(95rem, 90%);
			opacity: 100;
			transition: opacity 3s ease-in;
			transform: translate(0, -3rem);
			z-index: 5;
		}

		#hero-img {
			z-index: 4;
			position: fixed;
			transform: translate(-14%, 16%);
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
		font-size: min(17pt, 5vw);

		nav {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			width: min(50rem, 90%);
			height: 100%;
			border-bottom-right-radius: 5rem;
			border-bottom-left-radius: 5rem;
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
