import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddAddress from '../../components/User/UserAddAddress'

const UserAddAddressPage = () => {
    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar />
            </Row>
            <UserAddAddress />
        </Container>
    )
}
export default UserAddAddressPage
