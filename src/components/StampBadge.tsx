import React from 'react';
import { motion } from 'framer-motion';

const StampBadge = () => {
    return (
        <div className="relative group">
            <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 1,
                    delay: 0.2
                }}
                className="relative w-40 h-40 flex items-center justify-center"
            >
                <img
                    src="/Stamp.png"
                    alt="Official Stamp"
                    className="w-full h-full object-contain drop-shadow-md"
                />
            </motion.div>
        </div>
    );
};

export default StampBadge;
