import React, { useMemo } from "react";
import { Popover } from "antd";
import IconCart from "../../ui/Icons/IconCart";
import { Link } from "react-router-dom";
//antd
import { Badge, Button, Card, Avatar, Empty, List } from "antd";

//store
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_TO_CART } from "../../store/modules/Course";

//ui
import Image from "../../ui/Image";

const HeaderCart = (props) => {
  const { listToCart } = useSelector((state) => state.Course);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return listToCart.reduce(
      (prev, curr) => (prev += Number(curr.giaBan.replace(",", ""))),
      0
    );
  }, [listToCart]);

  const showContent = useMemo(
    () => (
      <List
        itemLayout="horizontal"
        dataSource={listToCart}
        renderItem={(course) => (
          <List.Item>
            <div className="cart-item d-flex">
              <Image
                className="cart-item__img"
                src={course.hinhAnh}
                style={{ width: "70px", height: "70px", marginRight: "10px" }}
              />
              <div className="cart-item__detail">
                <Link to={`/detail/${course.maKhoaHoc}`}>
                  <strong className="title font-weight-bold">
                    {course.tenKhoaHoc}
                  </strong>
                </Link>
                <div className="cost">
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

                <Button
                  type="link"
                  danger
                  onClick={() => handleRemoveItem(course.maKhoaHoc)}
                >
                  Xóa sản phẩm
                </Button>
              </div>
            </div>
          </List.Item>
        )}
        footer={
          <div>
            <h4>
              Tổng tiền:
              {total &&
                `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`}
            </h4>
            <Button className="--full-width" type="dashed" primary onClick={() => handleCheckout()}>
              Thanh Toán
            </Button>
          </div>
        }
      />
    ),
    [listToCart]
  );

  const handleRemoveItem = (maKH) => {
    dispatch(REMOVE_TO_CART(maKH));
  };

 const handleCheckout = () => {

 }
 
  return (
    <div
      className="x-header-cart mx-4"
      style={{ position: "relative" }}
      {...props}
    >
      <Popover
        content={
          listToCart.length ? (
            showContent
          ) : (
            <Empty description={<span>Chưa có sản phẩm nào !!!</span>} />
          )
        }
        placement="bottomRight"
        title={
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Giỏ hàng của bạn
          </div>
        }
        trigger="hover"
      >
        <Badge size="default" count={listToCart.length}>
          <IconCart />
        </Badge>
      </Popover>
    </div>
  );
};

export default HeaderCart;
