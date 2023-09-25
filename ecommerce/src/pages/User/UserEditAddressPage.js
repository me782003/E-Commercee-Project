import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserEditAddress from '../../components/User/UserEditAddress'

const UserEditAddressPage = () => {
    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar />
            </Row>
            <UserEditAddress />
        </Container>
    )
}
export default UserEditAddressPage