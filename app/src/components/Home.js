// @flow

import React from "react"
import { branch, renderComponent } from "recompose"
import styled from "styled-components"

import type { HOC } from "../types"

type Props = {
    posts: Array<Object>,
    isFetching: boolean
}

const HomeList = (props: { posts: Array<Object> }) => (
    <div>
        <ul> {props.posts.map(renderItem)}</ul>
    </div>
)

// for each item in posts, map it to a <Li> styled-component containing the title
const renderItem = ({ title }: { title: string }) => (
    <Li key={title}>{title}</Li>
)

const Loading = props => <h2>loading...</h2>

// HoC for conditional rendering of the HomeList
const enhance: HOC<Props> = branch(
    props => props.isFetching,
    renderComponent(Loading),
    i => i
)

const Li = styled.li`
    font-size: 1.5em;
    margin: "5px 0px";
`

export default enhance(HomeList)
