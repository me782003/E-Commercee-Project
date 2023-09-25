import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserFavoriteProduct from '../../components/User/UserFavoriteProduct'
import { useNavigate } from 'react-router-dom'

const UserFavProductsPage = () => {

    return (
        <Container fluid style={{minHeight:'100vh'}}>
            <Row>
                <UserSideBar />
            </Row>

            <UserFavoriteProduct />
        </Container>
    )
}

export default UserFavProductsPage