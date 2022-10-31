

import React from "react";
import PropTypes from 'prop-types';

//Ui
import Box from "../../ui/Box";
import Row from "../../ui/Row";
import Col from "../../ui/Col";
import Banner from "../../ui/Banner";

//Component
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export const Register = () => {
  return (
    <div 
      className="x-register-page d-flex align-items-center justify-content-center"
      style={{
        height: 'auto',
        background: '#F4FBFF',
        padding: 40,
      }}>
        <Box
          shadow={true}
          style={{
            padding: '60px 10px', 
            width: '100%', 
            background:'#FFFF'
          }}>
            <Row  style={{height: 'auto'}}>
              <Col
                sm={{ span: 12, vcenter: true }}
                md={{ span: 7, vcenter: true }}
                lg={{ span: 7, vcenter: true }}
              >
                <Banner></Banner>
              </Col>
              <Col 
                sm={{ span: 12, vcenter: true }}
                md={{ span: 5, vcenter: true }}
                lg={{ span: 5, vcenter: true }}
                xl={{ span: 4, vcenter: true }}
              >
                <RegisterForm></RegisterForm>
              </Col>
            </Row>
        </Box>
    </div>
  )
}

Register.propTypes = {
 onSubmit: PropTypes.func,
}

Register.defaultProps = {
  onSubmit: () => {},
}
export default Register;
