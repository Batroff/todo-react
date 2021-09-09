import * as React from "react";

import {Header} from "components/header/Header";
import {PageWrapper} from "components/wrapper/PageWrapper";
import {TodoCardList} from "../../components/todo/TodoCardList";


export const Home = () => {
    return (
        <PageWrapper>
            <Header username="Fav user"/>
            <TodoCardList/>
        </PageWrapper>
    )
}