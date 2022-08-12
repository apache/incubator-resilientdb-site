<template>
	<div class="sponsor_section">
		<div class="title">
			We are grateful for the continued support from our following sponsors.
		</div>
		<div class="head">Sponsors</div>
		<ul class="sponsor-grid">
			<li class="sponsor">
				<img src="https://expolab.org/images/nsf.png" alt="nsf" />
			</li>
			<li class="sponsor">
				<img src="https://expolab.org/images/radix.png" alt="radix" />
			</li>
			<li class="sponsor">
				<img src="https://expolab.org/images/microsoft.png" alt="microsoft" />
			</li>
			<li class="sponsor">
				<img src="https://expolab.org/images/google.png" alt="google" />
			</li>
			<li class="sponsor">
				<img src="https://expolab.org/images/aws.png" alt="aws" />
			</li>
			<li class="sponsor">
				<img
					src="https://expolab.org/images/logo_mousebelt.svg"
					alt="logo_mousebelt"
				/>
			</li>
			<li class="sponsor">
				<img src="https://expolab.org/images/doe.png" alt="doe" />
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
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 4rem;
		margin: 1rem 0;
		max-width: 1100px;
	}

	li p {
		margin-top: 1rem;
		/* font-family: system-ui; */
		/* text-align: center; */
	}

	.sponsor img {
		aspect-ratio: 1 / 1;
		width: 100%;
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
