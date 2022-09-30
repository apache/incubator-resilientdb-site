<template>
	<div class="sponsor_section">
		<div class="title">
			We are grateful for the continued support from our following sponsors.
		</div>
		<div class="head">Sponsors</div>
		<ul class="sponsor-grid">
			<li class="sponsor">
				<img
					src="https://expolab.org/images/nsf.png"
					alt="nsf"
					style="width: 130px"
				/>
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/doe.png"
					alt="doe"
					style="width: 300px; height: 130px"
				/>
			</li>
		</ul>
		<ul class="sponsor-grid">
			<li class="sponsor">
				<img
					src="https://expolab.org/images/radix.png"
					alt="radix"
					style="width: 170px"
				/>
			</li>

			<li class="sponsor">
				<img
					src="https://img1.wsimg.com/isteam/ip/3bc6d213-a1c1-40c3-b5fd-8efb825a593b/400dpiLogo.jpg/:/rs=w:662,h:400,cg:true,m/cr=w:662,h:400/qt=q:95"
					alt="moka-blox"
					style="width: 200px"
				/>
			</li>
		</ul>
		<ul class="sponsor-grid">
			<li class="sponsor">
				<img
					src="https://expolab.org/images/google.png"
					alt="google"
					style="width: 130px"
				/>
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/aws.png"
					alt="aws"
					style="width: 65px"
				/>
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/microsoft.png"
					alt="microsoft"
					style="width: 170px; margin-top: -22px; margin-right: -29px"
				/>
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/logo_mousebelt.svg"
					alt="logo_mousebelt"
					style="width: 170px"
				/>
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/oracle.png"
					alt="oracle"
					style="width: 190px"
				/>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.title {
		padding: 1rem;
		margin-top: 3rem;
		font-size: 1rem;
		color: rgb(114, 114, 114);
	}
	.head {
		font-size: 1.5rem;
		font-weight: 600;
	}
	.sponsor_section {
		text-align: center;
	}
	.sponsor-grid {
		display: flex;
		/* grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); */
		/* gap: 4rem; */
		/* margin: 1rem 0; */
		max-width: 1100px;
		align-content: center;
		align-items: center;
		justify-content: space-evenly;
	}

	@media (max-width: 900px) {
		.sponsor-grid {
			display: contents;
		}
	}

	li p {
		margin-top: 1rem;
		/* font-family: system-ui; */
		/* text-align: center; */
	}
	.sponsor {
		margin: 0 1rem;
	}

	.sponsor img {
		aspect-ratio: 1 / 1;
		width: 100%;
		height: 110px;
		object-fit: contain;
	}

	ul {
		list-style-type: none;
	}

	/* .info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	} */
</style>
