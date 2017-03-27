import React from "react";
import styled from "styled-components";

const Home = props => (
    <div>
        <ul> {props.posts.map(renderItem)}</ul>
    </div>
);

const renderItem = ({ title }) => <Li>{title}</Li>;

const Li = styled.li`
    font-size: 1.5em;
    margin: "5px 0px";
`;

export default Home;
