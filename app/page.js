'use client';
import { motion } from "framer-motion"
import RightSide from "../components/rightside"
import Banner from "portfolio/components/banner";

export default function Home() {
	return (
		<main className="w-full h-screen overflow-x-hidden overflow-y-hidden">
			<motion.div
				initial={{ opacity: 0}}
				animate={{ opacity: 1}}
				transition={{ delay: 1.5}}
				>
				<Banner />
			</motion.div>

			<div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
				<motion.div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
					initial={{ opacity: 0}}
					animate={{ opacity: 1}}
					transition={{ delay: 1}}
					>
					<RightSide />
				</motion.div>
			</div>

		</main>
	)
}
