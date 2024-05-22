import React from "react";
import TypeBar from "../components/TypeBar";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";


const Shop = () => {
    return (
        <Container>
            <Row className="mt-2 shop-row">
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;