import React from "react";

import Card from "../UI/Card/Card";

import classes from './Article.module.css'

const Article = (props) => {
    return (<Card className={classes.article}>
        <img alt="" src={props.img} />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </Card>
    )
};

export default Article;