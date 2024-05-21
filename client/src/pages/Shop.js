import React from "react";
import TypeBar from "../components/TypeBar";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import BrandBar from "../components/BrandBar";


const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;