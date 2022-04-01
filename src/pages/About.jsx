import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { motion } from "framer-motion"


const About = () => {

    const [start, setStart] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setStart(true)
        }, 10000)
    }, [])


    return (
        <Layout>

            <div>
                <motion.div className="div"
                    animate={{ x: 100, y: 100, opacity: 1 }}
                    transition={{
                        when: start,
                        delay: 1,
                        // repeat: 1,
                        repeat: "infinity",
                        repeatType: "mirror",
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 2 }
                    }}
                >
                    how are you
                </motion.div>
            </div>

            <motion.div
                animate={{ rotate: 180 }}
                transition={{ from: 90, duration: 2 }}
            > hey there
            </motion.div>
        </Layout>
    )
}

export default About