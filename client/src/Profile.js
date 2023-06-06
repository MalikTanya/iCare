import React, { useEffect, useState } from "react";
import { Col, Form, Input, Row } from "antd";
import Layout from "./components/Layout";

import axios from "axios";
import { useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {
          userId: params.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="page-title">User Profile</h1>
      <hr />

      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item required label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
        </Col>

        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item required label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
    </Layout>
  );
}

export default UserProfile;
