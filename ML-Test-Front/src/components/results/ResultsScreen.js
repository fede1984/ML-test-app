import React from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { NavSearch } from '../search/NavSearch';
import { MainContainer } from '../MainContainer';
import { ResultsComponent } from '../results/ResultsComponent';

export const ResultsScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    return (
        <>
            <NavSearch history={history} />
            <MainContainer query={q} component={<ResultsComponent query={q} />} />
        </>
    )
}
