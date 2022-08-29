import React, { useState } from "react";

import Article from "./Article";

import ArticleContent from "./ArticleContent";

import Boost from "./Boost";

import Description from "./Description";

import Input from "./Input";

import classes from './Main.module.css'

import ShortenedLink from "./ShortenedLink";

const Main = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [result, setResult] = useState([]);

    const [error, setError] = useState('');

    const addShortenedLink = (Link) => {
        setResult(prevLink => {
            return [...prevLink, Link]
        })
    }

    const newShortenedLink = result.map((item, index) =>
        <ShortenedLink key={index}
            userInput={item.reUrl}
            shortenedLink={item.shortenedUrl}
        />)

    return (
        <main>
            <Input onSubmitUrl={addShortenedLink}
                setError={setError}
                setIsLoading={setIsLoading} />
            {isLoading ? <p className={classes.Msg}>loading...</p> : error ? null : result.length!== 0 && newShortenedLink }
            {error && <p  className={classes.error}>{error}</p>}
            <Description />
            <div className={classes['horizontal-line']}></div>
            <div className={classes['article-container']}>
                {ArticleContent.map((item, index) =>
                    <Article key={index}
                        img={item.img}
                        title={item.title}
                        content={item.content}
                    />
                )}
            </div>
            <Boost />
        </main>
    )
};

export default Main;