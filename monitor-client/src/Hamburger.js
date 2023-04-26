import * as React from "react";
import { motion } from "framer-motion";

const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 }
};

export const Hamburger = ({onClick}) => {
    return(
        <motion.div
            className="hamburger"
            onClick={onClick}
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
        >
            <motion.svg
                width="18"
                height="18"
            >
                <line x1="1" y1="3" x2="17" y2="3" stroke="#fff"/>
                <line x1="1" y1="9" x2="17" y2="9" stroke="#fff"/>
                <line x1="1" y1="15" x2="17" y2="15" stroke="#fff"/>
            </motion.svg>
        </motion.div>
    )
}