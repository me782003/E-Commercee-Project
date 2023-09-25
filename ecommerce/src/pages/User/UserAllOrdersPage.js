import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAllOrder from '../../components/User/UserAllOrder'

const UserAllOrdersPage = () => {
    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar />
            </Row>

            <UserAllOrder />

        </Container>
    )
}


export default UserAllOrdersPage
