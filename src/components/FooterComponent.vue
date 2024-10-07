<template>
	<footer>
		<div class="container">
			<div class="footer-wrap text-center">
				<ul class="footer-menu">
					<li>
						<a href="javascript:void" class="primary-text fw-400">Privacy</a>
					</li>
					<li>
						<a href="javascript:void" class="primary-text fw-400">Site Terms</a>
					</li>
					<li>
						<a href="javascript:void" class="primary-text fw-400"
							>Cookie Preferences</a
						>
					</li>
					<li>
						<span class="primary-text fw-400">
							© Copyright 2022 SaasBuilder.com, Inc. or it's affiliates. All
							rights reserved
						</span>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	name: "header-component",
};
</script>
<style>
footer {
	padding: 35px 0;
	background-color: var(--white);
	border-top: 1px solid rgb(89, 181, 103, 0.3);
}
.footer-menu {
	display: inline-flex;
}
.footer-menu li {
	margin-right: 20px;
	font-size: 22px;
	position: relative;
}
.footer-menu li::after {
	content: "";
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: var(--text-lightgray);
	opacity: 0.5;
}
.footer-menu li:first-child::after {
	display: none;
}

.footer-menu li > * {
	transition: 0.3s all;
	margin-left: 30px;
}
.footer-menu a:hover {
	color: var(--orange);
}
</style>
