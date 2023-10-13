import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import HomeView from "../views/Home/HomeView.vue";
import BlockExplorer from "../components/explorer/BlockExplorer.vue";
import Block from "../components/explorer/Block.vue";
import Transactions from "../components/explorer/Transactions.vue";
import {
	HomeOutlined,
	DeploymentUnitOutlined,
	MonitorOutlined,
	BuildOutlined,
} from "@ant-design/icons-vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "explorer",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: BlockExplorer,
			props: {
				icon: BuildOutlined,
			},
		},
		{
			path: "/block",
			name: "block",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: Block,
			props: {
				hiddenRoute: true,
				icon: BuildOutlined,
			},
		},
		{
			path: "/transactions",
			name: "transactions",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: Transactions,
			props: {
				hiddenRoute: true,
				icon: BuildOutlined,
			},
		},
	],
});

export default router;
