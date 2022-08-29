import React, { useEffect, useRef, useState } from "react";

import Button from "../UI/Button/Button";

import classes from './Input.module.css'


const Input = (props) => {

    const [userInput, setUserInput] = useState('');

    const [validateInput, setValidateInput] = useState(false);

    const inputRef = useRef();

    let error = 'unable to fetch shortened link'

    const fetchData = async () => {
        props.setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${userInput}`
            );
            const data = await response.json();
            error = data.error
            const links = {
                reUrl: userInput,
                shortenedUrl: data.result.full_short_link
            }
            props.onSubmitUrl(links);
        } catch (e) {
            props.setError(error);
            console.log(e);
        }
        props.setIsLoading(false);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (userInput.trim().length === 0) {
            inputRef.current.focus();
            return setValidateInput(true);
        }
        fetchData();
        setUserInput('');
    }

    const inputChangeHandler = (e) => {
        setUserInput(e.target.value);
    }

    useEffect(() => {
        if (userInput.trim().length > 0) {
            setValidateInput(false);
        }
    }, [userInput]);

    return (
        <section className={classes['input-section']}>
            <form onSubmit={submitHandler}>
                <input type='url'
                    ref={inputRef}
                    className={validateInput ? classes['placeholder_color'] : undefined}
                    autoComplete='off'
                    placeholder="shorten a link here..."
                    onChange={inputChangeHandler}
                    value={userInput} />
                <Button className={classes['input-section__btn']} action='Shorten it!' />
            </form>
            {validateInput && <p>please add a link</p>}
        </section>
    )
};

export default Input;

