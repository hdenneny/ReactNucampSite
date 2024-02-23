import {Col, Row} from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import {useSelector} from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { useState } from 'react';

const CampsitesList = () => {
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector ((state) => state.campsites.errMsg);
    const campsites = useSelector(selectAllCampsites);

    if (isLoading) {
        return (
            <Row>
                <Loading/>
            </Row>
        )
    }

    if (errMsg){
        return(
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }

    return (
        <Row>
            {campsites.map((campsite) => (
                <Col key={campsite.id} xs={12} sm={6} md={4} lg={3} xl={2} className='m-4'>
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        </Row>
    )
};

export default CampsitesList;