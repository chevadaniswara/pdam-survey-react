import React from 'react'
import { motion } from 'framer-motion' //animasi menggunakan framer-motion

const animations = {
    intiial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 15 },
    exit: { opacity: 0, x: -100 },
}

const Animation = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            // style={{ position: 'absolute', width: '100%', height: '100%'}}
            initial="initial"
            animate="animate"
            exit="exit"
            // transition={{duration: 0.2}}
        >
            {children}
        </motion.div>
    )
}

export default Animation