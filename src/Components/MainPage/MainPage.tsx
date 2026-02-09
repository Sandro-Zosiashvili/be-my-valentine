"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MainPage.module.scss'
import {useSearchParams} from "next/navigation";

const MainPage = () => {
    const [showResult, setShowResult] = useState(false);
    const [showBear, setShowBear] = useState(false);
    const searchParams = useSearchParams();
    const name = decodeURIComponent(searchParams.get("name") || "");



    const handleNoClick = () => {
        setShowBear(true);

        setTimeout(() => {
            setShowBear(false);
        }, 2500);
    };

    const handleYesClick = () => {
        setShowResult(true);
    };

    if (showResult) {
        return (
            <div className={styles.container}>
                <div className={styles.celebration}>
                    <div className={styles.confetti}>
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className={styles.confettiPiece}></div>
                        ))}
                    </div>
                    <motion.div
                        className={styles.resultBox}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                    >
                        <h1 className={styles.successTitle}>ეგრეც ვიცოდი<br/>მიყვარხარ ❤️</h1>
                        <div className={styles.loveHeart}>
                            <div className={styles.heartPulse}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.hearts}>
                <div className={styles.heart}></div>
                <div className={styles.heart}></div>
                <div className={styles.heart}></div>
                <div className={styles.heart}></div>
                <div className={styles.heart}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>{name}, იქნები ჩემი ვალენტინი?</h1>
                <div className={styles.bigHeart}>
                    <div className={styles.pulse}></div>
                </div>

                {/* დათვის GIF ცენტრში */}
                <AnimatePresence>
                    {showBear && (
                        <motion.div
                            className={styles.bearContainer}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.4, type: "spring" }}
                        >
                            <motion.img
                                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA1MWtvc2p5MDE0NHAyaHdvYnQxZHRraDUwbWxoZzl2MmtjczVpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SqmkZ5IdwzTP2/giphy.gif"
                                alt="Angry Bear"
                                className={styles.bearGif}
                                animate={{
                                    rotate: [-5, 5, -5, 5, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: 3
                                }}
                            />
                            <motion.div
                                className={styles.thumbsDown}
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{
                                    scale: [0, 1.2, 1],
                                    rotate: [0, -30, 30, -30, 30, 0]
                                }}
                                transition={{
                                    duration: 0.6,
                                    repeat: 3
                                }}
                            >

                            </motion.div>
                            <motion.div
                                className={styles.angrySymbol}
                                animate={{
                                    y: [0, -40],
                                    opacity: [1, 0],
                                    scale: [0.8, 1.8]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 0.2
                                }}
                            >
                                💢
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={styles.buttons}>
                    <motion.button
                        className={styles.yesButton}
                        onClick={handleYesClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        დიახ 💕
                    </motion.button>

                    <button
                        className={styles.noButton}
                        onClick={handleNoClick}
                    >
                        არა
                    </button>
                </div>
            </div>

            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.particle}></div>
                ))}
            </div>
        </div>
    )
}

export default MainPage;