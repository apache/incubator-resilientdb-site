<template>
	<!-- <vue-horizontal-timeline
		:items="items"
		min-width="100px"
		timeline-background="#00010300"
		title-class="_title"
		line-color="#59B4A9"
	/> -->
	<section class="about-timeline">
		<div class="wrapper inner-wrapper-padding">
			<div class="start-point">
				<div class="black-dot"></div>
				<h4>Inception</h4>
				<div class="corner bl"></div>
			</div>

			<div class="timeline-main">
				<div class="timeline-row">
					<div class="timeline-box logo-timeline-arrow">
						<div class="timeline-box-wrap">
							<h6>January 2018</h6>
							<div class="timeline-content">
								<a
									href="https://www.youtube.com/watch?v=whgGTSQttds&feature=emb_logo"
								>
									<div class="timeline-content-txt">
										<p>ResilientDB Vision</p>
									</div>
								</a>
							</div>
						</div>
					</div>

					<div class="timeline-box logo-timeline-arrow">
						<div class="timeline-box-wrap">
							<h6>April 2018</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Optimal Batching</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>September 2018</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Deep Pipeline Architecture</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>March 2019</h6>
							<div class="timeline-content">
								<a
									href="https://www.morganclaypool.com/doi/abs/10.2200/S00896ED1V01Y201901DTM058"
								>
									<div class="timeline-content-txt">
										<p>Advanced Transaction Processing Textbook</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box top-timeline-arrow">
						<div class="timeline-box-wrap">
							<h6>May 2019</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Out-of-order Communication</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>
				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>July 2019</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>De-coupled Execution</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>September 2019</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Off-Chain Management</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>November 2019</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Release V1.0</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>
				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>December 2019</h6>
							<div class="timeline-content">
								<a
									href="https://drops.dagstuhl.de/opus/volltexte/2019/11352/pdf/LIPIcs-DISC-2019-45.pdf"
								>
									<div class="timeline-content-txt">
										<p>Reliable Cluster Sending</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>January 2020</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/pdf/1911.00838.pdf">
									<div class="timeline-content-txt">
										<p>Speculative Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>February 2020</h6>
							<div class="timeline-content">
								<a
									href="https://drops.dagstuhl.de/opus/volltexte/2019/11351/pdf/LIPIcs-DISC-2019-44.pdf"
								>
									<div class="timeline-content-txt">
										<p>Wait-free Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>March 2020</h6>
							<div class="timeline-content">
								<a href="https://www.youtube.com/watch?v=0kObJ0KPdkw">
									<div class="timeline-content-txt">
										<p>DB-based Chain, Smart Contract, Admin UI, Dashboard</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>April 2020</h6>
							<div class="timeline-content">
								<a href="https://www.youtube.com/watch?v=tbUNAPiAcYI">
									<div class="timeline-content-txt">
										<p>Delayed Replication</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>May 2020</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<span>
											<a href="https://www.youtube.com/watch?v=33k9aFoDtBw">
												Geo Consensus
											</a> </span
										>,
										<span>
											<a href="https://www.youtube.com/watch?v=lvftXtpxEEc">
												Architectural Lessons Learned
											</a> </span
										>,
										<span>
											<a href="https://youtu.be/frXpHYf_kSI">
												The Story Behind Building ResilientDB
											</a>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>August 2020</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/pdf/2008.04450.pdf">
									<div class="timeline-content-txt">
										<p>Cerberus: Minimalistic Sharded Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>October 2020</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/abs/1911.00837">
									<div class="timeline-content-txt">
										<p>Concurrent Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>November 2020</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/abs/1911.00838">
									<div class="timeline-content-txt">
										<p>Linear Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>February 4, 2021</h6>
							<div class="timeline-content">
								<a
									href="https://www.morganclaypool.com/doi/abs/10.2200/S01068ED1V01Y202012DTM065"
								>
									<div class="timeline-content-txt">
										<p>Authoritative Blockchain Textbook</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Spring 2021</h6>
							<div class="timeline-content">
								<a href="https://expolab.org/papers/byshard-vldb.pdf">
									<div class="timeline-content-txt">
										<p>ByShard: Theoretical Sharding Foundation</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Summer 2021</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<span>
											<a href="https://arxiv.org/pdf/2107.13047.pdf">
												RingBFT: Practical Sharded Consensus on Ring Topology
											</a> </span
										>,
										<span>
											<a href="https://arxiv.org/pdf/2108.08541.pdf">
												Probabilistic Reliable Cluster Communication
											</a>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>September 30, 2021</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<span>
											<a href="https://github.com/resilientdb/resilientdb">
												ResilientDB 3.0
											</a> </span
										>,
										<span>
											and
											<a href="https://resilientdb.com/blog/"> ExpoBlog </a>
										</span>
										Release
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Fall 2021</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/abs/2201.00982">
									<div class="timeline-content-txt">
										<p>Fault-tolerant Serverless Infrastructure</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Winter 2022</h6>
							<div class="timeline-content">
								<a href="https://arxiv.org/abs/2202.01354">
									<div class="timeline-content-txt">
										<p>SGX Accelerated Consensus</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Spring 2022</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<span>
											<a href="https://arxiv.org/abs/2204.03552">
												On the Correctness of Speculative Consensus
											</a> </span
										>,
										<span>
											<a href="https://arxiv.org/abs/2205.04534">
												The Bedrock of BFT</a
											>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Summer 2022</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<span>
											<a
												href="http://sites.computer.org/debull/A22june/p25.pdf"
											>
												Hybrid Consensus: Power-of-Collaboration
											</a>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>Fall 2022</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										<a
											href="https://www.cidrdb.org/cidr2023/papers/p85-gupta.pdf"
										>
											Chemistry behind Agreement
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>September 30, 2022</h6>
							<div class="timeline-content">
								<a
									href="https://github.com/resilientdb/resilientdb/releases/tag/nexres-v1.0.0"
								>
									<div class="timeline-content-txt">
										<p>NexRes: A New Sustainable Foundation</p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap">
							<h6>February 4, 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										Consensus in Data Management: From Distributed Commit to
										Blockchain
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Winter 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>View-Change-Less Consensus</p>
								</div>
							</div>
						</div>
					</div>

					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Spring 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										View-Change-Less Consensus, Extended SDK, Smart Contract &
										Wallet Integration, Exploration & Deployment Dashboard
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Summer 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>
										Application Landscape:
										<span>
											<a href="https://nft.resilientdb.com/"> NFT</a>
										</span>
										&
										<span>
											<a href="https://debitable.resilientdb.com/">
												Debitable,
											</a>
										</span>
										Minting Resilient Token (RoK)
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Fall 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>DAG Meets BFT</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>September 30, 2023</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Apache Incubation</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Winter 2024</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Philosophical Pillars of Blockchain</p>
								</div>
							</div>
						</div>
					</div>

					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Spring 2024</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Smart Contract Concurrency Control</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Summer 2024</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>FLeX: Fault-tolerant Learner-Executer Paradigm</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Fall 2024</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Off-chain Decentralized Storage</p>
								</div>
							</div>
						</div>
					</div>

					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
				</div>

				<div class="timeline-row">
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Winter 2025</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Reconfigurable Ecosystem</p>
								</div>
							</div>
						</div>
					</div>
					<div class="timeline-box">
						<div class="timeline-box-wrap future">
							<h6>Spring 2025</h6>
							<div class="timeline-content">
								<div class="timeline-content-txt">
									<p>Planet Scale Reliability</p>
								</div>
							</div>
						</div>
					</div>
					<div class="horizontal-line"></div>
					<div class="verticle-line"></div>
					<div class="corner top"></div>
					<div class="corner bottom"></div>
					<div class="start-point end-point">
						<h4>Just Getting Started</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	// import { VueHorizontalTimeline } from "vue-horizontal-timeline";

	// export default {
	// 	components: {
	// 		VueHorizontalTimeline,
	// 	},
	// 	data: () => ({
	// 		items: [
	// 			{
	// 				title: "Winter 2024",
	// 				content: "Planet Scale",
	// 			},
	// 			{
	// 				title: "Spring 2023",
	// 				content: "Reconfigurable Ecosystem",
	// 			},
	// 			{
	// 				title: "Fall 2022",
	// 				content: "NexRes: A New Sustainable Foundation",
	// 			},
	// 			{
	// 				title: "Summer 2022",
	// 				content:
	// 					"Hybrid Consensus: BFT + PoS + PoW, View-Change-Less Consensus, Hybrid Consensus: Power-of-Collaboration",
	// 			},
	// 			{
	// 				title: "Spring 2022",
	// 				content:
	// 					"On the Correctness of Speculative Consensus, The Bedrock of BFT",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "Winter 2022",
	// 				content: "SGX Accelerated Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "Fall 2021",
	// 				content: "Fault-tolerant Serverless Infrastructure",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "September 30, 2021",
	// 				content: "ResilientDB 3.0 and ExpoBlog Release",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "Summer 2021",
	// 				content: "RingBFT: Practical Sharded Consensus on Ring Topology",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "Spring 2021",
	// 				content: "ByShard: Theoretical Sharding Foundation",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "February 4, 2021",
	// 				content: "Authoritative Blockchain Textbook",
	// 				stepCssClass: "has-step-green",
	// 			},

	// 			{
	// 				title: "November 2020",
	// 				content: "Linear Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "October 2020",
	// 				content: "Concurrent Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "August 2020",
	// 				content: "Cerberus: Minimalistic Sharded Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "May 2020",
	// 				content:
	// 					"Geo Consensus, Architectural Lessons Learned, The Story Behind Building ResilientDB",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "April 2020",
	// 				content: "Delayed Replication",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "March 2020",
	// 				content: "DB-based Chain, Smart Contract, Admin UI, Dashboard",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "February 2020",
	// 				content: "Wait-free Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "January 2020",
	// 				content: "Speculative Consensus",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "December 2019",
	// 				content: "Reliable Cluster Sending",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "November 2019",
	// 				content: "Release V1.0",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "September 2019",
	// 				content: "Off-Chain Management",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "July 2019",
	// 				content: "De-coupled Execution",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "May 2019",
	// 				content: "Out-of-order Communication",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "March 2019",
	// 				content: "Advanced Transaction Processing Textbook",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "September 2018",
	// 				content: "Deep Pipeline Architecture",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "April 2018",
	// 				content: "Optimal Batching",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 			{
	// 				title: "January 2018",
	// 				content: "ResilientDB Vision",
	// 				stepCssClass: "has-step-green",
	// 			},
	// 		],
	// 	}),
	// 	created: function () {
	// 		var myDiv = document.getElementById("scroll");
	// 		console.log(myDiv);
	// 		setTimeout(function () {
	// 			myDiv.scrollLeft = myDiv.scrollWidth;
	// 		}, 500);
	// 	},
	// };
</script>

<style scoped>
	* {
		box-sizing: border-box;
		outline: none !important;
	}
	button:focus {
		outline: none !important;
		box-shadow: none !important;
	}
	a:focus {
		outline: none !important;
	}
	body {
		/* font-family: "Inter", sans-serif; */
		color: aliceblue;
		font-weight: 400;
		font-size: 20px;
		line-height: 1.5;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		-webkit-text-size-adjust: 100%;
	}
	img {
		max-width: 100%;
	}
	p,
	li {
		font-size: 20px;
		color: aliceblue;
		line-height: 1.5;
	}
	p {
		margin: 0 0 20px 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		margin-top: 0px;
		line-height: normal;
		/* font-family: "Poppins", sans-serif; */
		line-height: 1.1;
		font-weight: 700;
	}
	.wrapper {
		margin: 0 auto;
		width: 100%;
		max-width: 1642px;
	}
	.inner-wrapper-padding {
		padding: 0 80px;
	}

	.about-timeline {
		/* background-color: #f3f3f3;
		padding: 140px 0 125px; */
	}

	.timeline-box h6 {
		font-size: 24px;
		line-height: 1;
		color: #59b4a9;
		font-weight: 700;
		/* font-family: "Poppins", sans-serif; */
		/* background-color: rgb(114, 114, 114); */
		position: relative;
		z-index: 1;
		display: inline-block;
		width: auto;
		padding: 6px 10px;
		margin-top: 0;
		/* transform: translate(0, -50%); */
	}

	.timeline-box p {
		font-size: 13px;
		line-height: 27px;
		color: aliceblue;
		font-weight: 400;
		margin-bottom: 26px;
		/* font-family: "Inter", sans-serif; */
	}
	.timeline-box p:last-of-type {
		margin-bottom: 15px;
	}
	.start-point h4 {
		font-size: 17px;
		line-height: 23px;
		color: #ffffff;
		font-weight: 600;
		text-transform: uppercase;
		background-color: #59b4a9;
		border-radius: 16px;
		display: block;
		width: auto;
		text-align: center;
		padding: 5px 25px;
		position: relative;
		margin-bottom: 45px;
		/* font-family: "Inter", sans-serif; */
	}
	.black-dot {
		width: 21px;
		height: 21px;
		background-color: #59b4a9;
		border-radius: 50%;
		display: block;
		margin: 0 auto 62px;
		z-index: 1;
	}
	.start-point {
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.start-point:before {
		content: "";
		position: absolute;
		left: 0;
		height: 100%;
		width: 0px;
		background-color: #aaa;
		left: 50%;
		top: 0;
		transform: translate(-50%, 0%);
		-webkit-transform: translate(-50%, 0%);
		-moz-transform: translate(-50%, 0%);
		border-left: 1px solid #aaa;
	}
	.timeline-row .horizontal-line {
		border-top: 1px solid #aaa;
		width: calc(100% - 150px);
		margin: 0 auto;
		position: absolute;
		top: 0;
		left: 50%;
		z-index: 0;
		transform: translate(-50%, 0%);
	}
	.timeline-row .verticle-line {
		margin: 0;
		padding: 0;
		width: 2px;
		border-right: 1px solid #aaa;
		height: calc(100% - 150px);
		position: absolute;
		top: 0;
		right: 0;
		margin: auto 0;
		bottom: 0;
	}
	.timeline-row:nth-child(2n + 2) .verticle-line {
		left: -1px;
		right: inherit;
	}
	.corner {
		position: absolute;
		border-right: 1px solid #aaa;
		width: 76px;
		height: 76px;
		right: 0;
		border-top: 1px solid #aaa;
		top: 74.9px;
		border-radius: 0 70px 0 0;
		top: 0;
	}
	.timeline-row:nth-child(2n + 2) .corner {
		right: inherit;
		left: 0;
		border-left: 1px solid #aaa;
		border-right: 0;
		border-radius: 70px 0 0 0;
	}
	.corner.bottom {
		bottom: -76px;
		top: inherit;
		border-radius: 0;
		border-top: 0;
		border-bottom: 1px solid #aaa;
		border-radius: 0 0 70px 0;
		right: 0;
		z-index: 1;
		bottom: -1px;
	}
	.timeline-row:nth-child(2n + 2) .corner {
		right: inherit;
		left: 0;
		border-left: 1px solid #aaa;
		border-right: 0;
		border-radius: 70px 0 0 0;
	}
	.timeline-row:nth-child(2n + 2) .corner.bottom {
		border-radius: 0 0 0 70px;
	}
	.timeline-row {
		display: flex;
		justify-content: space-around;
		/* flex-wrap: wrap; */
		padding-bottom: 0px;
		position: relative; /*padding: 0 66px 130px;margin-right: 111px;*/
	}
	.timeline-row:nth-child(2n + 2) {
		justify-content: space-around;
		text-align: center;
		padding: 0 2%;
	}
	.timeline-row:nth-child(2n + 2) {
		flex-direction: row-reverse;
	}
	/*.timeline-row:nth-child(2n+2) .timeline-content-txt { text-align: center; }*/
	.timeline-box {
		/*padding: 45px 50px 130px;*/
		max-width: 550px;
		margin-right: 25px;
		position: relative;
	}
	.timeline-main {
		margin-top: 75px;
	}
	.timeline-row:first-child {
		margin: 0 0px 0 auto;
		max-width: 50%;
		justify-content: space-between;
		padding: 0 0 0 120px;
	}
	.corner.bl {
		bottom: 0;
		left: 0;
		border-left: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		border-radius: 0 0 0px 100%;
		border-right: none;
		border-top: none;
		height: 76px;
		width: 76px;
	}
	.start-point .corner.bl {
		left: 50%;
		bottom: 0px;
		transform: translateY(100%);
		top: unset;
	}
	.timeline-box:before {
		content: "";
		position: absolute;
		left: 0;
		top: 27.5px;
		height: 1px;
		width: 100%;
	}
	.timeline-box-wrap {
		padding: 45px 0px 0;
		position: relative;
		background: #2d2d2d;
		/*min-height: 318px;*/
		padding: 0;
		margin-bottom: 90px;
	}

	.future > h6 {
		color: #1890ff;
	}
	/*.timeline-row:after{content: ''; position: absolute; left: 50%; top: 74.5px; height: 1px; width: 91%; background-color: #aaa; transform: translateX(-50%);top: 0;} .timeline-row .verticle-line { margin: 0; padding: 0; width: 1px; border-right: 1px solid #aaa; height:calc(100% - 126px); position: absolute; top: calc( 50% + 75px );; right: 0; margin: auto 0; bottom: unset; transform: translateY(-50%);top: 50%; } */
	.timeline-row:first-child::after {
		left: -54px;
		width: 97%;
		transform: none;
	}
	/*.timeline-row:first-child .timeline-box:last-child{margin-right: 5%;} */
	.timeline-content {
		padding: 10px 10px 4px;
	}
	.timeline-content a:hover {
		/* padding: 10px 0 0 0; */
		text-decoration: underline;
		color: #f0f8ff;
	}
	.timeline-content-txt a {
		/* padding: 10px 0 0 0; */
		color: #f0f8ff;
	}
	.timeline-content-txt a:hover {
		/* padding: 10px 0 0 0; */
		text-decoration: underline;
	}
	.timeline-box.img-right .timeline-content,
	.timeline-box.img-left .timeline-content {
		display: flex;
		align-items: flex-start;
	}
	.timeline-box.img-right .timeline-content img {
		margin-left: 18px;
	}
	.timeline-box.img-left .timeline-content img {
		margin-right: 18px;
	}
	.timeline-box.img-left .timeline-content {
		flex-direction: row-reverse;
	}
	.timeline-row:first-child .timeline-box:first-child img {
		filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.16));
		-webkit-filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.16));
		display: block;
		margin: 0;
	}
	.timeline-box-wrap .timeline-content img {
		filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.16));
		-webkit-filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.16));
		z-index: 2;
		position: relative;
	}
	.timeline-row:last-child .corner.bottom {
		display: none;
	}
	.timeline-row:nth-child(2n + 1) .timeline-box:last-child .timeline-box-wrap {
		text-align: center;
	}
	.start-point.end-point:before {
		display: none;
	}
	.start-point.end-point {
		position: absolute;
		bottom: 0;
		right: 0%;
		transform: translateX(50%);
	}
	.timeline-row:nth-child(2n + 2) .start-point.end-point {
		left: 0;
		transform: translateX(-50%);
		right: unset;
	}

	.timeline-box.img-right .timeline-content-txt {
		text-align: right;
	}
	.timeline-box.img-left .timeline-content-txt {
		text-align: left;
	}
	.timeline-box.img-left,
	.timeline-box.img-right {
		text-align: center;
	}
	.timeline-row:first-child .timeline-box::after {
		left: auto;
		right: 0;
		-webkit-transform: translate(100%, -50%) rotate(0deg);
		transform: translate(100%, -50%) rotate(0deg);
	}
	.timeline-row:first-child .timeline-box:first-child {
		width: 36%;
	}
	.timeline-row .timeline-box:nth-child(3)::after {
		display: none;
	}
	.timeline-row:last-child .verticle-line::after {
		display: none;
	}
	.timeline-row:first-child .timeline-box:nth-child(2)::after {
		display: none;
	}

	.timeline-content-img .timeline-content {
		position: relative;
	}

	/*==============Responsive==============*/

	@media screen and (max-width: 1800px) {
		.about-timeline {
			margin: 0 5rem;
		}
		.timeline-box {
			max-width: 460px;
		}
		.timeline-box.img-right .timeline-content img,
		.timeline-box.img-left .timeline-content img {
			max-width: 220px;
			max-height: 230px;
		}
		.timeline-box-wrap .timeline-content img {
			max-width: 100%;
		}

		.timeline-row {
			flex-wrap: nowrap;
		}
	}

	@media screen and (max-width: 1440px) {
		.about-timeline {
			padding: 100px 0 80px;
		}

		.start-point h4 {
			font-size: 15px;
			letter-spacing: 0;
		}
		.timeline-box h6 {
			font-size: 26px;
		}
		.timeline-row:first-child .timeline-box:first-child {
			width: 45%;
		}
		.timeline-box p {
			font-size: 15px;
			line-height: 1.4;
		}
		.timeline-box {
			max-width: 300px;
		}
		.timeline-box.img-right .timeline-content img,
		.timeline-box.img-left .timeline-content img {
			max-width: 140px;
			max-height: 200px;
		}
		.timeline-box-wrap .timeline-content img {
			max-width: 100%;
		}
		.timeline-row:first-child .timeline-box:nth-child(2) {
			width: 150px;
		}
	}

	@media screen and (max-width: 1199px) {
		.about-timeline {
			padding: 90px 0 60px;
		}
		.timeline-box h6 {
			font-size: 24px;
		}
		.timeline-box {
			max-width: 240px;
		}
		.timeline-row:first-child {
			padding: 0 0 0 60px;
		}
		.timeline-row:first-child .timeline-box:first-child {
			width: 42%;
		}
		.timeline-box.img-right .timeline-content,
		.timeline-box.img-left .timeline-content {
			flex-wrap: wrap;
		}
		.timeline-box.img-right .timeline-content img,
		.timeline-box.img-left .timeline-content img {
			max-width: 180px;
			max-height: 200px;
		}
		.top-timeline-arrow.timeline-content-img .timeline-content::after {
			right: 0;
		}
		.img-right.timeline-content-img .timeline-content::after {
			top: -20px;
			right: -45px;
		}
		.timeline-box.img-right .timeline-content-txt {
			width: 90%;
		}
	}

	@media screen and (max-width: 1024px) {
		.corner {
			display: none;
		}
		.timeline-row .horizontal-line {
			display: none;
		}
		.timeline-row:first-child {
			max-width: 100%;
			padding: 0;
		}
		.timeline-main {
			margin-top: 0;
		}
		.timeline-row .verticle-line {
			right: 50%;
			transform: translate(50%, 0);
			height: calc(100% - 0px);
		}
		.timeline-row:nth-child(2n + 2) .verticle-line {
			left: auto;
			right: 50%;
		}
		.verticle-line::after {
			display: none;
		}

		.timeline-row .timeline-box {
			width: 100%;
			max-width: 100%;
			margin: 0;
		}
		.timeline-row:first-child .timeline-box:first-child {
			width: 100%;
			margin: 0;
		}
		.timeline-row:first-child .timeline-box:nth-child(2) {
			width: 100%;
		}
		.timeline-box p br {
			display: none;
		}
		.timeline-box h6 {
			transform: translate(0, -0%);
			padding: 0;
		}
		.timeline-content {
			padding: 4px;
		}
		.timeline-box.img-right .timeline-content-txt {
			width: 100%;
		}
		.start-point.end-point {
			right: unset !important;
			left: unset !important;
			transform: translateX(0%) !important;
		}
		.start-point h4 {
			margin-bottom: 0;
		}
		.about-timeline {
			padding: 80px 0;
			margin: 0;
		}
		.timeline-box::after {
			-webkit-transform: translate(-100%, 100%) rotate(180deg);
			transform: translate(-100%, 100%) rotate(180deg);
			right: 50%;
			top: 20px;
			left: 50%;
		}
		.timeline-box-wrap {
			width: 50%;
			text-align: center;
			padding-top: 4px;
			/* padding: 0 30px 0 0; */
			margin: 40px 0 0 0;
		}
		.timeline-row .timeline-box img {
			margin: 0 0 0 auto;
		}
		.timeline-row:first-child .timeline-box:nth-child(2)::after {
			display: block;
		}
		.timeline-row:first-child .timeline-box:first-child img {
			margin: 0 0 0 auto;
		}
		.timeline-box.img-right .timeline-content img,
		.timeline-box.img-left .timeline-content img {
			margin: 0 0 0 auto;
		}
		.timeline-row .timeline-box:nth-child(2n) .timeline-box-wrap {
			margin: 40px 0 0 auto;
			padding-top: 4px;
			/* padding: 0 0 0 30px; */
			text-align: center;
		}
		.timeline-row:nth-child(2n + 1) .timeline-box::after {
			left: auto;
			right: 50%;
			-webkit-transform: translate(0%, 100%) rotate(180deg);
			transform: translate(0%, 100%) rotate(180deg);
			top: 20px;
		}
		.timeline-row .timeline-box:nth-child(2n)::after {
			transform: translate(100%, 100%) rotate(0deg);
			-webkit-transform: translate(100%, 100%) rotate(0deg);
			right: 50%;
			left: auto;
		}
		.timeline-row .timeline-box:nth-child(3)::after {
			display: block;
		}
		.timeline-box.img-left .timeline-content-txt {
			text-align: center;
		}
		.timeline-row:last-child {
			padding-bottom: 70px;
		}
		.timeline-row {
			flex-wrap: wrap;
		}
	}

	@media screen and (max-width: 640px) {
		.about-timeline {
			padding: 50px 0;
			margin: 0;
		}
		.timeline-box h6 {
			font-size: 16px;
		}
		.timeline-box p {
			font-size: 11px;
			line-height: 1.4;
		}
		.timeline-box-wrap {
			margin: 30px 0 0 0;
		}
		.timeline-row .timeline-box:nth-child(2n) .timeline-box-wrap {
			margin: 30px 0 0 auto;
		}
		.timeline-box::after,
		.timeline-row:nth-child(2n + 1) .timeline-box::after {
			top: 6px;
		}
		.timeline-box-wrap .timeline-content img {
			max-width: 100%;
		}
		.timeline-box.img-right .timeline-content img,
		.timeline-box.img-left .timeline-content img {
			max-width: 100%;
			max-height: unset;
		}
		.timeline-row {
			flex-wrap: wrap;
		}
	}
</style>
