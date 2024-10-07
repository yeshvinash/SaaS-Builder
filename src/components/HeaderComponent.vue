<template>
	<header class="gradientBlue">
		<div class="container">
			<div class="main-header">
				<div class="headerLogo-wrap">
					<router-link to="/">
						<img
							src="../assets/images/logos/saas-builder.svg"
							alt="saas-builder"
						/>
					</router-link>
				</div>
				<div class="headerMenu-wrap" id="navigation">
					<ul class="menu-list header-navitem">
						<li class="menu-item">
							<router-link to="/" class="hader-link">Home</router-link>
						</li>
						<li class="menu-item">
							<router-link to="/about-us" class="hader-link"
								>About Us</router-link
							>
						</li>
						<li class="menu-item">
							<router-link to="/pattern" class="hader-link"
								>Patterns</router-link
							>
						</li>
						<a href="#" class="custom-btn orange-btn">Log in</a>
					</ul>
				</div>
				<div
					class="hamburger toggle-btn d-block d-lg-none"
					id="hamburger"
					v-on:click="checkMenu"
				>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
	components: {
		RouterLink,
	},
	name: "header-component",
	title: "Header",
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		checkMenu: function () {
			if (this.showMenu === true) {
				document.documentElement.classList.add("show-menu");
			} else {
				document.documentElement.classList.remove("show-menu");
			}
			this.showMenu = !this.showMenu;
		},
	},
};
</script>

<style scoped>
/* header section start */
header {
	position: relative;
	padding: 20px;
	z-index: 111;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;
	height: 100px;
	display: flex;
	align-items: center;
}

header::before {
	background-image: url("../assets/images/icons/star.png");
	content: "";
	position: absolute;
	bottom: -15px;
	left: 25%;
	width: 30px;
	height: 30px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}

.main-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.menu-list {
	display: flex;
	align-items: center;
}

.menu-item {
	position: relative;
	margin-right: 7rem;
}

.menu-item a {
	color: var(--white);
	opacity: 0.6;
	font-size: 20px;
	font-weight: 400;
	transition: 0.3s all;
	position: relative;
}
.hader-link {
	position: relative;
	transition: 0.3s all;
}
.menu-item a:hover {
	opacity: 1;
	font-weight: 400;
}

.hader-link:after {
	position: absolute;
	left: 0;
	bottom: -10px;
	width: 0;
	height: 5px;
	border-radius: 10px;
	background: var(--white);
	content: "";
	transform: translateX(-50%);
	left: 50%;
	transition: 0.3s all;
}

.router-link-exact-active.hader-link::after {
	width: 30px;
}
.router-link-exact-active.hader-link {
	opacity: 1;
	font-weight: 400;
}

/* style added by AVN */
.headerLogo-wrap img {
	width: 209px;
	height: auto;
}

/* style added by AVN */

/* responsive style added by AVN  */
@media screen and (max-width: 1439px) {
	header {
		padding: 15px;
		height: 80px;
	}
}

@media screen and (max-width: 1199px) {
	.menu-item {
		font-size: 18px;
	}
}

@media screen and (max-width: 991px) {
	html {
		font-size: 5px;
	}

	.headerLogo-wrap img {
		width: 170px;
	}

	header[data-v-5c833af0] {
		padding: 15px;
		height: 60px;
	}

	/* - // _BEGINS > NAVBAR < AVN // - */
	/* - // _BEGINS > NAVBAR < AVN // - */
	.toggle-btn {
		background-color: transparent;
		line-height: normal;
		width: 36px;
		height: 36px;
		padding: 0;
		z-index: 99;
		display: block;
		margin-left: auto;
		position: relative;
		text-align: center;
		padding: 6px 0;
		cursor: pointer;
		border-radius: 36px;
		background-color: transparent;
		-webkit-transition: all 0.5s ease 0s;
		-moz-transition: all 0.5s ease 0s;
		-ms-transition: all 0.5s ease 0s;
		-o-transition: all 0.5s ease 0s;
		transition: all 0.5s ease 0s;
	}

	.show-menu .toggle-btn {
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		padding: 4px;
		z-index: 5;
		/* border: 2px solid var(--white); */
	}

	.hamburger .line {
		width: 20px;
		height: 2px;
		display: block;
		margin: 4px auto;
		background-color: var(--white);
		-webkit-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
	}

	html.show-menu #hamburger .line {
		width: 20px;
		background-color: var(--white);
	}

	html.show-menu #hamburger .line:nth-child(2) {
		opacity: 0;
	}

	html.show-menu #hamburger .line:nth-child(1) {
		-webkit-transform: translateY(6px);
		-ms-transform: translateY(6px);
		-o-transform: translateY(6px);
		transform: translateY(6px);
	}

	html.show-menu #hamburger .line:nth-child(3) {
		-webkit-transform: translateY(-6px) rotate(90deg);
		-ms-transform: translateY(-6px) rotate(90deg);
		-o-transform: translateY(-6px) rotate(90deg);
		transform: translateY(-6px) rotate(90deg);
	}

	#navigation {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 60%;
		overflow: auto;
		text-align: center;
		z-index: 3;
		height: 100vh !important;
		display: block !important;
		padding: 54px 16px 16px;
		background-color: #1e338f;
		box-shadow: 0 0 15px 5px #90909030;
		-webkit-transition: all 0.7s ease 0s;
		-moz-transition: all 0.7s ease 0s;
		-ms-transition: all 0.7s ease 0s;
		-o-transition: all 0.7s ease 0s;
		transition: all 0.7s ease 0s;
		-webkit-transform: translateX(110%);
		-moz-transform: translateX(110%);
		-ms-transform: translateX(110%);
		-o-transform: translateX(110%);
		transform: translateX(110%);
	}

	/* .navbar:focus-within #navbarNav, */
	.show-menu #navigation {
		-webkit-transform: translateX(0%);
		-moz-transform: translateX(0%);
		-ms-transform: translateX(0%);
		-o-transform: translateX(0%);
		transform: translateX(0%);
	}

	.header-navitem {
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.header-navitem li a {
		font-size: 20px;
		padding: 1rem;
		color: var(--white);
	}

	html.show-menu::after {
		background-color: rgb(0 0 0 / 60%);
		position: fixed;
		height: 100%;
		width: 100%;
		content: "";
		z-index: 1;
		top: 0;
		left: 0;
	}

	.header-navitem li {
		padding-right: 0;
		margin-bottom: 50px;
		margin-right: 0;
	}

	.header-navitem li a::after {
		display: unset;
	}

	.header-navbar {
		flex-direction: row;
	}

	/* - // _ENDS > NAVBAR < AVN // - */
}

@media only screen and (max-width: 575px) {
	#navigation {
		width: 100%;
	}

	#navigation {
		padding: 64px 16px 16px;
	}
}

@media only screen and (max-width: 414px) {
	.headerLogo-wrap img {
		width: 160px;
	}
}

/* header section end */
/* responsive style added by AVN */
</style>
