import React from 'react';
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
            Click Me
        </motion.button>
    );
};

export default Button;