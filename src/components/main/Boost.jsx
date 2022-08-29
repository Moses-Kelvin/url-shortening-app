 import React from "react";

import Button from '../UI/Button/Button'

import classes from './Boost.module.css'

const Boost = () => {
    return (
        <section className={classes['boost-section']}>
          <h1>Boost your links today</h1>
          <Button className={classes['boost-section__btn']} action='Get started' />
        </section>
    )
};

export default Boost;