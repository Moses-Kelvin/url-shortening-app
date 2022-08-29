import React from 'react'

import Button from '../UI/Button/Button'

import illustration from '../../asset/illustration-working.svg'

import classes from './HeaderContent.module.css'

const HeaderContent = () => {
    return (
        <section className={classes['header-content']}>
            <div>
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <Button className={classes['header-content__btn']} action='Get started' />
            </div>
            <div>
                <img alt='' src={illustration} />
            </div>
        </section>
    )
};

export default HeaderContent;