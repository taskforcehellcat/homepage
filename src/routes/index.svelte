<script lang="ts">
</script>

<svelte:head>
	<title>Home | Task Force Hellcat</title>
</svelte:head>

<nav>
	<li class="currentpage"><a href="/">home</a></li>
	<li><a href="#about">über uns</a></li>
	<li><a href="https://wiki.taskforcehellcat.de/" target="_blank">wiki</a></li>
	<li><a href="#join">beitritt</a></li>
</nav>

<section id="home">
	<img id="hero-text" class="noselect" alt="TASK FORCE HELLCAT" src="/images/hero-text.svg" />
</section>
<section id="about" />
<section id="join" />

<style lang="scss">
	:global(body::-webkit-scrollbar) {
		display: none;
	}

	:global(body) {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	section {
		min-height: 100vh;
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: wheat;
	}

	section:nth-child(2n) {
		background-color: burlywood;
	}

	section#home {
		background-image: url('/images/hero.png');
		background-position-y: 70%;

		display: flex;
		justify-content: center;
		align-items: center;

		#hero-text {
			font-size: 180pt;
			color: #fff;
			text-transform: uppercase;

			img {
				width: 100%;
			}
		}
	}

	nav {
		align-items: center;
		height: 8rem;
		width: 100%;
		font-weight: 700;
		text-transform: uppercase;
		color: #fff;
		position: fixed;
		display: flex;
		justify-content: center;
		font-size: 17pt;
		gap: 2rem;

		li {
			display: inline-block;

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
</style>
