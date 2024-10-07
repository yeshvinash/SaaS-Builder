<template>
	<div class="header-spacing">
		<section class="sass-pattern space-120">
			<div class="container">
				<h2 class="font-fahkwang fw-700 mrBottom-50">
					Saas <span class="orange"> Patterns</span>
				</h2>

				<div class="sass-patterns-wrap">
					<div class="patterns-sidebar">
						<div
							class="search-wrap position-relative d-flex align-items-center justify-content-between"
						>
							<input
								type="text"
								class="search-input"
								placeholder="Search Pattern"
							/>
							<img
								src="../assets/images/icons/search.svg"
								alt="search"
								class="search-icon"
							/>
							<div>
								<button class="reset-btn custom-btn orange-btn">Reset</button>
							</div>
						</div>
						<div class="pattern-content-card">
							<div class="pattern-content-title">
								<h6>Pattern Types</h6>
							</div>
							<div class="pattern-content-wrap">
								<!--accordion start-->
								<div class="pattern-accordion">
									<div class="sepration">
										<div class="accordion" role="tablist">
											<b-card>
												<b-card-header
													header-tag="header"
													class="header-accordion-main-custom"
													role="tab"
												>
													<button
														block
														v-b-toggle.accordion-1
														variant="info"
														class="collapsed"
													>
														<span
															class="play-icon d-flex align-items-center justify-content-center"
														>
															<img
																src="../assets/images/icons/play.svg"
																alt="play"
															/>
														</span>
														<span
															class="d-flex align-items-center justify-content-between w-100"
														>
															Deployment Models
															<span class="toggle-accordion-icon"></span>
														</span>
													</button>
												</b-card-header>
												<b-collapse
													id="accordion-1"
													visible
													accordion="my-accordion"
													role="tabpanel"
												>
													<div class="accordion" role="tablist">
														<b-card>
															<b-card-header
																header-tag="header"
																class=" "
																role="tab"
															>
																<b-button
																	block
																	v-b-toggle.accordion-sub-1
																	variant="info"
																>
																	<span
																		class="play-icon d-flex align-items-center justify-content-center"
																		><img
																			src="../assets/images/icons/play.svg"
																			alt="play"
																	/></span>
																	<span
																		class="d-flex align-items-center justify-content-between w-100"
																	>
																		Full Stack Silo Deployment
																		<span class=""
																			><img
																				src="../assets/images/icons/pen.svg"
																				alt="pen"
																		/></span>
																	</span>
																</b-button>
															</b-card-header>
															<b-collapse
																id="accordion-sub-1"
																visible
																accordion="my-accordion-sub"
																role="tabpanel"
															>
																<b-card-body class="content-space">
																	<div>
																		<p class="fw-400 secondary-text">
																			Account per tenant
																		</p>
																		<p class="fw-400 secondary-text">
																			VPC per tenant
																		</p>
																	</div>
																</b-card-body>
															</b-collapse>
														</b-card>
													</div>
													<div
														class="d-flex align-items-center justify-content-between content-test"
													>
														<p class="fw-500">Full Stack Silo Deployment</p>
														<span>
															<img
																src="../assets/images/icons/pen.svg"
																alt="pen"
															/>
														</span>
													</div>
													<div
														class="d-flex align-items-center justify-content-between content-test"
													>
														<p class="fw-500">Siloed Compute</p>
														<span>
															<img
																src="../assets/images/icons/pen.svg"
																alt="pen"
															/>
														</span>
													</div>
												</b-collapse>
											</b-card>
										</div>
									</div>
									<div class="sepration">
										<div class="accordion" role="tablist">
											<b-card>
												<b-card-header
													header-tag="header"
													class="header-accordion-main-custom"
													role="tab"
												>
													<b-button block v-b-toggle.accordion-2 variant="info">
														<span
															class="play-icon d-flex align-items-center justify-content-center"
															><img
																src="../assets/images/icons/play.svg"
																alt="play"
														/></span>
														<span
															class="d-flex align-items-center justify-content-between w-100"
														>
															Identity
															<span class="toggle-accordion-icon"></span>
														</span>
													</b-button>
												</b-card-header>
												<b-collapse
													id="accordion-2"
													visible
													accordion="my-accordionTwo"
													role="tabpanel"
												>
													<b-card-body>
														<div
															class="d-flex align-items-center justify-content-between content-test space-identity"
														>
															<p class="fw-500">Self-Hosted Identity</p>
															<span>
																<img
																	src="../assets/images/icons/pen.svg"
																	alt="pen"
																/>
															</span>
														</div>
														<div
															class="d-flex align-items-center justify-content-between content-test space-identity"
														>
															<p class="fw-500">Externally Hosted Identity</p>
															<span>
																<img
																	src="../assets/images/icons/pen.svg"
																	alt="pen"
																/>
															</span>
														</div>
														<div
															class="d-flex align-items-center justify-content-between content-test space-identity"
														>
															<p class="fw-500">
																Just In Time Identity Migration
															</p>
															<span>
																<img
																	src="../assets/images/icons/pen.svg"
																	alt="pen"
																/>
															</span>
														</div>
													</b-card-body>
												</b-collapse>
											</b-card>
										</div>
									</div>
								</div>
								<!--accordion end-->
								<div
									class="submit-pattern-wrap d-flex align-items-center justify-content-center"
								>
									<button
										class="custom-btn orange-btn d-flex align-items-center justify-content-center w-100"
									>
										<h6 class="white">Submit a Pattern</h6>
										<div class="ms-4 signUp-btn-aero">
											<svg
												width="23"
												height="15"
												viewBox="0 0 23 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M16.5694 0.281178L22.6788 6.39058C23.0537 6.76548 23.0537 7.37332 22.6788 7.74822L16.5694 13.8576C16.1945 14.2325 15.5867 14.2325 15.2118 13.8576C14.8369 13.4827 14.8369 12.8749 15.2118 12.5L19.6824 8.0294H0.96C0.429806 8.0294 0 7.5996 0 7.0694C0 6.53921 0.429805 6.1094 0.959998 6.1094H19.6824L15.2118 1.63882C14.8369 1.26392 14.8369 0.656081 15.2118 0.281178C15.5867 -0.0937259 16.1945 -0.0937259 16.5694 0.281178Z"
													fill="white"
												></path>
											</svg>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- right side content start-->
					<div class="patterns-main-wrapper">
						<div class="patterns-header">
							<h4 class="small primary-text fw-500">Serverless Pattern</h4>
						</div>
						<main class="patterns-wrapper-content">
							<div class="serverless-container">
								<div class="serverless-wrap">
									<div class="serverless-title">
										<h6 class="primary-text font-500 line-height-30">
											Account Per Tenant
										</h6>
									</div>
									<div
										class="d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center"
									>
										<div class="avail-zone">
											<img
												src="../assets/images/icons/available-zone.svg"
												alt="available-zone"
												class="avail-zone-img"
											/>
										</div>
										<div class="avail-zone">
											<img
												src="../assets/images/icons/tetant.svg"
												alt="tetant"
												class="avail-zone-img"
											/>
										</div>
										<div class="avail-zone">
											<img
												src="../assets/images/icons/available-zone.svg"
												alt="available-zone"
												class="avail-zone-img"
											/>
										</div>
									</div>
								</div>
								<div class="sepration"></div>
								<!-- <hr class="separator tag-background" /> -->
								<div class="serverless-content-wrap">
									<div>
										<h6
											class="line-height-30 primary-text font-500 content-title"
										>
											Core Concept
										</h6>
									</div>
									<div class="core-wrap">
										<ul class="content-list">
											<li class="d-flex">
												<div>
													<img
														src="../assets/images/icons/mark.svg"
														alt="mark"
														class="tick-mark"
													/>
												</div>
												<div>
													<span
														class="page-title-label font-400 line-height-25 secondary-text"
													>
														The idea of full stack silo is that all of the
														infrastructure for a tenant is deployed in a single,
														self-contained construct. Silo models are used for a
														variety of reasons. Some rely on a silo based on
														compliance considerations. Others may choose silo
														based on noisy neighbor, legacy migration, or a host
														of other consideration. This model can have some
														adverse effects on the cost, operational, and
														agility efficiency of a SaaS environment.
													</span>
												</div>
											</li>
										</ul>
									</div>
									<div>
										<div>
											<h6
												class="line-height-30 primary-text font-500 content-title"
											>
												Key Considerations
											</h6>
										</div>
										<div>
											<ul class="content-list">
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															Silo is every bit as valid as any SaaS model that
															may share infrastructure. The key here is
															determining whether silo aligns with the needs of
															your customers or the state of your current
															application. Some teams that are migrating rely on
															this model as the starting point for lifting and
															shifting monolithic legacy applications into a
															SaaS model where the siloed nature of this model
															make it easier. The distributed/dedicate nature of
															this model does introduce operational complexity
															and can impact the cost efficiency of your
															offering. In some cases, you may choose to offer
															silo to a select set of “premium” tier tenants as
															a way to differentiate the experience of your SaaS
															solution.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															Even though each tenant has separate resources in
															a full stack silo model, these siloes will still
															be managed and operated collectively. When new
															features are released they are released to all of
															the tenants. Tenants are never allowed to run
															one-off versions or be deployed independently.
															This would undermine the value proposition of SaaS
															and move more toward a managed service model.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															That siloed nature of this model make the
															calculation of cost-per-tenant analytics much
															simpler. Here you can use tagging and other
															out-of-the-box AWS cost attribution constructs to
															profile the costs of each tenant silo.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															Siloes are inherently less cost efficient that
															pooled models. Even with auto-scaling and other
															mechanisms in place, you’re likely to have some
															static and/or under-consumed resources—especially
															when a tenant is idle.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															As you silo infrastructure, you must consider how
															you will route tenant workloads to specific tenant
															siloes. Each technology stack may support a
															variety of routing constructs. You’ll need to
															identify a model for observing tenant context and
															using that context to route requests to the
															appropriate tenant silo.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															Siloed environments generally have more complex
															deployment footprints. Your DevOps model will need
															to consider how it rolls out new features across
															the collection of tenant siloes.
														</span>
													</div>
												</li>
												<li class="d-flex content-list-item">
													<div>
														<img
															src="../assets/images/icons/mark.svg"
															alt="mark"
															class="tick-mark"
														/>
													</div>
													<div>
														<span
															class="page-title-label font-400 line-height-25 secondary-text"
														>
															While the resources of a siloed SaaS environment
															are not shared by tenants, this does not mean that
															you’re solution is not multi-tenant. If a silo
															manages, operates, onboards, and deploys all
															tenants with the same experience, then this is
															still a multi-tenant SaaS environment. It can
															still benefit from the same agility and
															operational efficiency that is part of SaaS.
														</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="ref-wrap">
									<div class="position-relative reference-container">
										<div class="reference-wrap">
											<p class="line-height-25 text-white font-500 mb-0">
												References
											</p>
										</div>
										<div class="aws-container">
											<div class="aws-wrap">
												<span
													class="page-title-label line-height-25 font-400 secondary-text"
												>
													AWS re:Invent 2019: SaaS tenant isolation patterns
												</span>
											</div>
										</div>
									</div>
									<div class="author-container">
										<div class="position-relative author">
											<div class="author-wrap">
												<img
													src="../assets/images/icons/author.svg"
													alt="author"
													class="author-img"
												/>
											</div>
											<div class="author-title">
												<p class="line-height-25 text-white font-500 mb-0">
													Author
												</p>
											</div>
										</div>
										<div>
											<div>
												<h6
													class="primary-text font-500 line-height-30 margin-5"
												>
													Authored By Tod Golding
												</h6>
											</div>
											<div>
												<span
													class="page-title-label secondary-text line-height-25 font-400 software-title"
												>
													Software architect and wannabe playwright
												</span>
											</div>
											<div>
												<span
													class="page-title-label line-height-30 font-500 primary-text margin-5"
												>
													Follow on:
												</span>
											</div>
											<div class="logo-wrapper">
												<a href="https://twitter.com" target="_blank">
													<div class="logo-container me-3">
														<div class="logo-wrap">
															<img
																src="../assets/images/icons/twitter.svg"
																alt="twitter"
																class="logo"
															/>
														</div>
														<div>
															<span
																class="page-title-label font-400 line-height-25 secondary-text mb-0"
															>
																Twitter
															</span>
														</div>
													</div></a
												>
												<a
													href="https://www.linkedin.com/login"
													target="_blank"
												>
													<div class="logo-container">
														<div class="logo-wrap">
															<img
																src="../assets/images/icons/linkdin.svg"
																alt="linkdin"
																class="logo"
															/>
														</div>
														<div>
															<span
																class="page-title-label font-400 line-height-25 secondary-text mb-0"
															>
																Linkedin
															</span>
														</div>
													</div></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
					<!-- right side content end-->
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: "pattern-view",
	title: "Pattern",
};
</script>

<style>
.sass-pattern {
	position: relative;
	/* margin-top: 100px; */
}
.sass-pattern::after {
	position: absolute;
	left: 0;
	top: -50px;
	background-image: url("../assets/images/backgrounds/saass-patterns-bg.png");
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	display: block;
	content: "";
	height: 100vh;
	z-index: -1;
}
.sass-patterns-wrap {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	overflow-y: hidden;
}

.patterns-sidebar {
	max-width: 400px;
	width: 100%;
}

.patterns-main-wrapper {
	width: calc(100% - 400px);
	display: flex;
	flex-direction: column;
	margin-left: 25px;
}

.patterns-header {
	height: 60px;
	display: flex;
	align-items: center;
}

.patterns-wrapper-content {
	height: 100%;
}

/* */
.search-wrap {
	width: 100%;
	height: 50px;
}
.search-input {
	width: 300px;
	height: 100%;
	font-size: 14px;
	padding: 15px 15px 15px 40px;
	border-width: 0;
	/* background-color: var(--white); */
	border: 1px solid transparent;
}

.search-input:focus-visible,
.search-input:active {
	/* border: 1px solid black; */
	border-width: 1px;
	outline-offset: 0px;
	outline: none;
	border: 1px solid gray;
}

.search-icon {
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
}
.pattern-content-card {
	border: 1px solid #bbc0cd;
	margin-top: 10px;
}
.pattern-content-title {
	padding: 15px 20px;
	background-color: rgb(130 139 163 / 10%);
}
.pattern-content-title h6 {
	line-height: 1.5;
}
.pattern-content-wrap {
	/* padding: 15px; */
	background-color: var(--white);
}

.pattern-accordion .card {
	border-width: 0;
	border-radius: 0 !important;
	/* border-bottom: 1px solid black; */
}
.pattern-accordion .card:last-child {
	border-bottom: none;
}
.pattern-accordion .card-header {
	border: none;
	padding: 0;
	border-radius: none;
	background-color: transparent;
}
.pattern-accordion .card-body {
	padding: 0;
}
.card-body.content-space {
	padding: 0 0 0 40px;
}
.space-none {
	padding: 0;
}

.pattern-accordion .card-header button {
	font-size: 20px;
	font-weight: 500;
	width: 100%;
	text-align: start;
	background: transparent;
	border: none;
	padding: 15px 0px;
	/* padding-left: 15px; */
	display: flex;
	align-items: center;
	justify-content: start;
}
.pattern-accordion .card-header button:hover,
.pattern-accordion .card-header button:focus {
	background-color: transparent;
}
.play-icon {
	margin-right: 15px;
}

.pattern-accordion .toggle-accordion-icon {
	width: 16px;
	height: 16px;
	position: relative;
	line-height: 1.2;
	display: inline-flex;
	border-radius: 100%;
	border: 1px solid var(--orange);
}
.pattern-accordion .toggle-accordion-icon::before,
.pattern-accordion .toggle-accordion-icon::after {
	content: "";
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 9px;
	height: 2px;
	display: block;
	margin: auto;
	position: absolute;
	background-color: var(--orange);
	transform-origin: 50% 50%;
	transition: all 0.25s;
}
.pattern-accordion .card-header button.collapsed .toggle-accordion-icon::after {
	transform: rotate(-90deg);
	opacity: 1;
}
.submit-pattern-wrap {
	padding: 15px;
}

.pattern-accordion .card-header.header-accordion-main-custom {
	border-bottom: 1px solid #eff0f2;
}
.content-test {
	padding-left: 40px;
	padding-top: 15px;
}
.content-test:last-child {
	padding-bottom: 15px;
}
.content-test.space-identity {
	padding-left: 30px;
}
.content-test.space-identity:last-child {
	padding-bottom: 15px;
}
.content-test p {
	padding-bottom: 0;
	margin-bottom: 0;
	line-height: 1.3;
}
.sepration {
	padding: 0 15px;
	border-bottom: 5px solid #f3f4f6;
}
.sepration:last-child {
	border-bottom: none;
}
/* */

/* line clamp start */

.qn-line-clamp {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.ans-line-clamp {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

/* line clamp end */

/* Serverless start */

.serverless-wrap {
	padding: 20px 20px 16px 20px;
}

.serverless-container {
	border: 1px solid #bbc0cd;
	background-color: white;
	/* max-width: 1095px;
    width: 100%;
    margin: 30px; */
}

.serverless-title {
	margin-bottom: 12px;
}

.avail-zone {
	max-width: 320px;
	max-height: 260px;
	margin-right: 10px;
}
.avail-zone:last-child {
	margin-right: 0;
}
.avail-zone-img {
	width: 100%;
	height: 100%;
}

.separator {
	width: 100%;
	margin-top: 0;
	margin-bottom: 15px;
}

hr:not([size]) {
	height: 5px;
}

.serverless-content-wrap {
	padding: 0px 18.5px 27px 20px;
}

.content-list {
	list-style: none;
	padding: 0;
}

.tick-mark {
	margin-right: 10px;
}

.content-title {
	margin-bottom: 10px;
}

.core-wrap {
	margin-bottom: 20px;
}

.content-list-item:not(:last-child) {
	margin-bottom: 15px;
}

.ref-wrap {
	padding: 27px 24px 41px 16px;
}

.reference-wrap {
	width: 140px;
	height: 42px;
	background-color: var(--orange);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -24px;
	z-index: 2;
	margin-left: 25px;
}

.aws-wrap {
	padding: 36px 25px 19px 25px;
}

.aws-container {
	background-color: var(--ref-back);
	position: relative;
}

.reference-container {
	margin-bottom: 15px;
}

.author-wrap {
	max-width: 150px;
	width: 150px;
	max-height: 170px;
	height: 170px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.author-img {
	width: 100%;
	object-fit: cover;
	height: 100%;
}

.author-title {
	width: 100px;
	height: 42px;
	background-color: var(--orange);
	display: flex;
	align-items: center;
	justify-content: center;
	top: 147px;
	position: absolute;
	left: 25px;
}

.logo-wrap {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	flex: 0 0 auto;
}

.logo-container {
	width: 130px;
	border-radius: 25px;
	height: 50px;
	background-color: var(--ref-back);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 21px 5px 5px;
}

.logo-container:not(:last-child) {
	margin-right: 10px;
}

.author-container {
	display: flex;
}

.logo-wrapper {
	display: flex;
}

.margin-5 {
	margin-bottom: 5px;
}

.software-title {
	margin-bottom: 25px;
}

.author {
	margin-right: 15px;
}

.logo {
	width: 24px;
	height: 24px;
}

/* Serverless end */
/* 
.pattern-accordion .header-accordion-main-custom .card-header button {
  color: red;
} */
</style>
