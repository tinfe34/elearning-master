import React, { Component, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ADD_TO_CART } from "../../store/modules/Course";

//antd
import { Rate, Card, Avatar, Badge, notification } from "antd";

//Img
import Image from "../../ui/Image";
import Button from "../../ui/Button/Button";

const Course = ({ course }) => {
  const { listToCart } = useSelector((state) => state.Course);
  const dispatch = useDispatch();

  const checkItemCart = (maKH) => {
    return listToCart.find((item) => item.maKhoaHoc === maKH);
  };

  const addToCart = (maKH) => {
    dispatch(ADD_TO_CART(maKH));
    openNotifi();
  };

  const openNotifi = () => {
    notification.success({
      style: {
        fontWeight: 'bold',
        opacity: 0.9,
        cursor: 'pointer',
      },
      placement: 'bottomRight',
      message: 'Thêm sản phẩm thành công',
      description: `${course.tenKhoaHoc} đã thêm vào giỏ hàng.`,
      duration: 4,
    });
  };

  return (
    <Badge.Ribbon text="Giảm giá" color="red">
      <Card hoverable style={{ width: 330 }} className="course">
        <Link to={`/detail/${course.maKhoaHoc}`}>
          <Image
            className="course__img"
            src={course.hinhAnh}
            height={280}
            width={"100%"}
          />
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={course.tenKhoaHoc}
            description={course.moTa}
            style={{
              marginTop: "10px",
            }}
          />

          <div className="rating-star">
            <span
              style={{
                marginRight: "5px",
              }}
            >
              4.7
            </span>
            <Rate
              disabled
              allowHalf
              defaultValue={4.5}
              style={{
                fontSize: "15px",
                marginRight: "5px",
              }}
            />
            <span>{`(${course.luotXem})`}</span>
          </div>
          <div
            className="course__cost "
            style={{
              margin: "10px 0",
            }}
          >
            <span>{`${course.giaBan}đ`}</span>
            <s
              style={{
                color: "#6a6f73",
                margin: "0 10px",
              }}
            >
              1,000,000đ
            </s>
          </div>
        </Link>
        <Button
          onClick={() => addToCart(course.maKhoaHoc)}
          className="--full-width btn-primary"
          disabled={checkItemCart(course.maKhoaHoc)}
        >
          Thêm giỏ hàng
        </Button>
      </Card>
    </Badge.Ribbon>
  );
};

export default Course;
