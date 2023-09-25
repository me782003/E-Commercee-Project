import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserProfile from '../../components/User/UserProfile'

const UserProfilePage = () => {
    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar/>
            </Row>
            <UserProfile />
        </Container>
    )
}
export default UserProfilePage
