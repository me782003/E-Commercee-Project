import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAllAddresses from '../../components/User/UserAllAddresses'

const UserAllAddresesPage = () => {
    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar />
            </Row>

            <UserAllAddresses />
        </Container>
    )
}

export default UserAllAddresesPage