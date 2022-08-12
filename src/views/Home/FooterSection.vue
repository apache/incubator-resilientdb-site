<template>
	<!-- FOOTER START -->
	<div class="footer">
		<div class="contain">
			<!-- <div class="col">
				<h1>Company</h1>
				<ul>
					<li>About</li>
					<li>Mission</li>
					<li>Services</li>
					<li>Social</li>
					<li>Get in touch</li>
				</ul>
			</div> -->

			<div class="col">
				<h1>Resources</h1>
				<ul>
					<li>Documentation</li>
					<li>
						<a href="https://resilientdb.com/blog/"> ExpoLab Blog </a>
					</li>
					<li>
						<a href="https://github.com/resilientdb/resilientdb"> Github </a>
					</li>
				</ul>
			</div>
			<div class="col">
				<h1>Support</h1>
				<ul>
					<li>Contact us</li>
				</ul>
			</div>
			<div class="col social">
				<h1>Social</h1>
				<ul>
					<li>
						<a href="#"><linkedin-outlined /></a>
					</li>
					<li>
						<a href="#"> <twitter-outlined /></a>
					</li>
				</ul>
			</div>
			<div class="clearfix"></div>
		</div>
		<section class="copy">
			<div class="copy_text">
				<p>Copyright &copy; 2022, ResilientDB</p>
			</div>
			<div class="terms">
				<a href="#">Terms of service</a>
				<a href="#">Privacy policy</a>
			</div>
		</section>
	</div>
	<!-- END OF FOOTER -->
</template>

<style scoped>
	.footer {
		width: 100%;
		position: relative;
		height: auto;
		background-color: #070617;
		margin-top: 5rem;
	}
	.copy {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	.copy_text {
		margin-left: 1rem;
	}
	.terms a {
		margin-right: 1rem;
	}
	.footer .col {
		/* width: 190px; */
		height: auto;
		/* float: left; */
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		padding: 0px 20px 20px 20px;
	}
	.footer .col h1 {
		margin: 0;
		padding: 0;
		font-family: inherit;
		font-size: 12px;
		line-height: 17px;
		padding: 20px 0px 5px 0px;
		color: rgb(114, 114, 114);
		font-weight: normal;
		text-transform: uppercase;
		letter-spacing: 0.25em;
	}
	.footer .col ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.footer .col ul li {
		color: #999999;
		font-size: 14px;
		font-family: inherit;
		font-weight: bold;
		padding: 5px 0px 5px 0px;
		cursor: pointer;
		transition: 0.2s;
		-webkit-transition: 0.2s;
		-moz-transition: 0.2s;
	}
	.social ul li {
		display: inline-block;
		padding-right: 5px !important;
	}

	.footer .col ul li:hover {
		color: #ffffff;
		transition: 0.1s;
		-webkit-transition: 0.1s;
		-moz-transition: 0.1s;
	}
	.clearfix {
		clear: both;
	}

	.contain {
		display: flex;
		justify-content: space-evenly;
		margin: 0 auto;
		padding-top: 2rem;
	}

	@media only screen and (max-width: 1139px) {
		.contain .social {
			/* width: 1000px; */
			display: block;
		}
		.social h1 {
			margin: 0px;
		}
	}
	@media only screen and (max-width: 950px) {
		.footer .col {
			width: 33%;
		}
		.footer .col h1 {
			font-size: 14px;
		}
		.footer .col ul li {
			font-size: 13px;
		}
	}
	@media only screen and (max-width: 500px) {
		.footer .col {
			width: 50%;
		}
		.footer .col h1 {
			font-size: 14px;
		}
		.footer .col ul li {
			font-size: 13px;
		}
	}
	@media only screen and (max-width: 340px) {
		.footer .col {
			width: 100%;
		}
	}
</style>
<script>
	import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons-vue";

	export default {
		name: "FooterSection",
		components: {
			LinkedinOutlined,
			TwitterOutlined,
		},
	};
</script>
