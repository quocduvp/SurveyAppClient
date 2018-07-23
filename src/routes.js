import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
    return <div>Loading...</div>;
}

const Home = Loadable({
    loader: () => import('./views/Home/Home'),
    loading: Loading,
});

const Surveys = Loadable({
    loader: () => import('./views/Surveys/Surveys'),
    loading: Loading,
});

const SurveyReview = Loadable({
    loader: () => import('./views/Surveys/SurveyReview'),
    loading: Loading,
});

const SurveyJoin = Loadable({
    loader: () => import('./views/Surveys/SurveyJoinning'),
    loading: Loading,
});

const Support = Loadable({
    loader: () => import('./views/Support/Support'),
    loading: Loading,
});

//FAQs
const FAQs = Loadable({
    loader: () => import('./views/FAQs/FAQs'),
    loading: Loading,
});
const FAQsDetails = Loadable({
    loader: () => import('./views/FAQs/FAQsDetails'),
    loading: Loading,
});


const routes = [
    {path: '/', exact: true, name: 'Home', component: DefaultLayout},
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Surveys', exact: true, name: 'Surveys', component: Surveys},
    {path: '/Surveys/Reviews/:id', exact: true, name: 'Survey Reviews', component: SurveyReview},
    {path: '/Surveys/Joinning', exact: true, name: 'Survey Join', component: SurveyJoin},
    {path: '/Support', exact: true, name: 'Support', component: Support},
    {path: '/FAQs', exact: true, name: 'FAQs', component: FAQs},
    {path: '/FAQs/:id', exact: true, name: 'FAQs details', component: FAQsDetails}
];

export default routes;