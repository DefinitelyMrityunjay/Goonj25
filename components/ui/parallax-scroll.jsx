"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ tier, gridRef, className }) => {
	const { scrollYProgress } = useScroll({
		container: gridRef, // remove this if your container is not fixed height
		offset: ["start start", "end start"], // remove this if your container is not fixed height
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const third = Math.ceil(tier.sponsors.length / 3);

	const firstPart = tier.sponsors.slice(0, third);
	const secondPart = tier.sponsors.slice(third, 2 * third);
	const thirdPart = tier.sponsors.slice(2 * third);

	return (
		<div
			className={cn("items-start overflow-y-auto w-full", className)}
		>
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 pt-10 pb-40 px-10"
			>
				<div className="grid gap-10">
					{firstPart.map((sponsor, idx) => (
						<motion.div
							// variants={itemVariants}
							style={{ y: translateFirst }}
							key={"grid-1" + idx}
							whileHover={{ scale: 1.03 }}
							className="group"
						>
							<Card className="bg-white/5 backdrop-blur-sm border-2 border-emerald-900/20 overflow-hidden">
								<CardContent className="p-8">
									<div className="flex flex-col items-center text-center">
										<Image
											src={sponsor.image}
											alt={sponsor.name}
											// className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
											width={300}
											height={300}
											className="pb-4"
										/>
										<h3 className="text-2xl font-bold text-gray-200 mb-3">
											{sponsor.name}
										</h3>
										<Badge
											variant="secondary"
											className={`bg-gradient-to-r ${tier.color[Math.floor(Math.random() * tier.color.length)]} text-gray-900 font-semibold`}
										>
											{sponsor.type}
										</Badge>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
				<div className="grid gap-10">
					{secondPart.map((sponsor, idx) => (
						<motion.div
							// variants={itemVariants}
							style={{ y: translateSecond }}
							key={"grid-1" + idx}
							whileHover={{ scale: 1.03 }}
							className="group"
						>
							<Card className="bg-white/5 backdrop-blur-sm border-2 border-emerald-900/20 overflow-hidden">
								<CardContent className="p-8">
									<div className="flex flex-col items-center text-center">
										<Image
											src={sponsor.image}
											alt={sponsor.name}
											// className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
											width={300}
											height={300}
											className="pb-4"
										/>
										<h3 className="text-2xl font-bold text-gray-200 mb-3">
											{sponsor.name}
										</h3>
										<Badge
											variant="secondary"
											className={`bg-gradient-to-r ${tier.color[Math.floor(Math.random() * tier.color.length)]} text-gray-900 font-semibold`}
										>
											{sponsor.type}
										</Badge>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
				<div className="grid gap-10">
					{thirdPart.map((sponsor, idx) => (
						<motion.div
							// variants={itemVariants}
							style={{ y: translateThird }}
							key={"grid-1" + idx}
							whileHover={{ scale: 1.03 }}
							className="group"
						>
							<Card className="bg-white/5 backdrop-blur-sm border-2 border-emerald-900/20 overflow-hidden">
								<CardContent className="p-8">
									<div className="flex flex-col items-center text-center">
										<Image
											src={sponsor.image}
											alt={sponsor.name}
											// className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
											width={300}
											height={300}
											className="pb-4"
										/>
										<h3 className="text-2xl font-bold text-gray-200 mb-3">
											{sponsor.name}
										</h3>
										<Badge
											variant="secondary"
											className={`bg-gradient-to-r ${tier.color[Math.floor(Math.random() * tier.color.length)]} text-gray-900 font-semibold`}
										>
											{sponsor.type}
										</Badge>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
