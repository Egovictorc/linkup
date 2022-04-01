import React from 'react'
import Layout from '../components/Layout'


import Hero from '../components/Hero';
import LinkUpAction from '../components/LinkUpAction';
import Step from '../components/Step';
import steps from '../components/steps';

import { motion } from "framer-motion"




const LandingPage = () => {
    return (
        <Layout>
            <Hero />
            <LinkUpAction />
            <div className="container">
                <div className="row m-auto">
                    <div className="col-auto mx-auto mt-5 mb-3">
                        <h4>How It Works</h4>
                    </div>
                </div>
                {
                    steps.map(({ title, meta, src, alt }, index) => (
                        <Step title={title} meta={meta} src={src}
                            alt={alt} key={src} index={index} />
                    ))
                }
            </div>

        </Layout>
    )
}

export default LandingPage