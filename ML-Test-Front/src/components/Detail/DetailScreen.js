import React from 'react'
import { useParams } from 'react-router';

import { MainContainer } from '../MainContainer';
import { NavSearch } from '../search/NavSearch';
import { DetailComponent } from './DetailComponent';

export const DetailScreen = ({ history }) => {


    const { id } = useParams()

    return (
        <>
            <NavSearch history={history} />
            <MainContainer id={id} component={<DetailComponent id={id} />} />
        </>
    )
}
