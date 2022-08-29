import React, { useEffect, useState } from "react";

import Button from "../UI/Button/Button";

import classes from './ShortenedLink.module.css'

import CopyToClipboard from "react-copy-to-clipboard";


const ShortenedLink = (props) => {

    const [click, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    useEffect(() => {
        if (click) {
            const timer = setTimeout(() => {
                setClicked(false)
            }, 350);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [click]);

    return (
        <div className={classes['shortened-link__div']}>
            <div>
                <p>{props.userInput}</p>
            </div>
            <div>
                <p>{props.shortenedLink}</p>
                <CopyToClipboard text={props.shortenedLink}>
                    <Button onClick={handleClick}
                        className={`${classes['shortened-link__btn']} ${click && classes.style}`}
                        action={click ? 'Copied' : 'Copy'} />
                </CopyToClipboard>
            </div>
        </div>
    )
};

export default ShortenedLink;