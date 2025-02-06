'use client'
import { motion } from "framer-motion";
import {
    Book,
    Download,
} from "lucide-react";

export default function NIQ() {
    const handleDownload = (e) => {
        e.stopPropagation();
        const link = document.createElement("a");
        link.href = "brochures/NIQ.pdf";
        link.download = `NIQ.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <motion.div
            className="relative py-10 bg-[#0D0221]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Notice for Inviting Quotations
            </h2>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-24 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 mx-auto mb-8 rounded"
            />
            <motion.div
                className={`group w-[clamp(250px,30vw,100rem)] mx-auto rounded-xl p-8 cursor-pointer bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 ring-2 ring-purple-500`}
                style={{
                    height: "auto",
                }}
                whileHover={{ scale: 1.02 }}
            >
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />
                <div className="card-main-content">
                    <div className="flex items-center justify-between mb-6 relative">
                        <motion.div
                            className={`p-3 rounded-lg bg-gradient-to-br from-pink-600 to-rose-600`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Book className="w-6 h-6 text-white" />
                        </motion.div>

                        <motion.button
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(e);
                            }}
                        >
                            <span className="text-sm">Download</span>
                            <Download className="w-3 h-3" />
                        </motion.button>
                    </div>
                    <div className="relative">
                        <h2
                            className="text-2xl font-semibold mb-3 text-white group-hover:text-transparent 
                                group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 
                                group-hover:to-pink-400 transition-all duration-300"
                        >
                            Goonj Notice for Inviting Quotations 2025
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Quotations should be submitted as per the instructions in the downloaded document.
                        </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 pt-4 mt-8">
                        <span>8 pages</span>
                        <span>Updated 2025</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}