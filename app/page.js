'use client';
import { motion } from "framer-motion"
import RightSide from "../components/rightside"
import Banner from "portfolio/components/banner";
import About from "portfolio/components/about";

export default function Home() {
	return (
		<main className="w-full h-screen overflow-x-hidden overflow-y-hidden">
			<motion.div className="h-screen w-full mx-auto p-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				>
				<Banner />
				<About />
			</motion.div>

			<div>
				<motion.div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.5}}
					>
					<RightSide />
				</motion.div>
			</div>

		</main>
	)
}
