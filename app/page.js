'use client';
import { motion } from "framer-motion"
import RightSide from "../components/sections/rightside"
import Banner from "portfolio/components/sections/banner";
import About from "portfolio/components/sections/about";
import Skills from "portfolio/components/sections/skills";

export default function Home() {
	return (
		<main className="w-full h-full overflow-x-hidden overflow-y-hidden">
			<motion.div className="mx-auto p-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				>
				<Banner />
				<About />
				<Skills />
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
