import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
const AdminAllOrdersItem = ({ orderItem }) => {
  return (
    <Col sm="12" className=''>
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-2 d-flex"
        style={{ textDecoration: "none" }}
      >
        {/* <img width="160px" height="197px" src={mobile} alt="" /> */}
        <div className="w-100  px-2 px-md-5 pt-3">

          <Row className="d-flex align-items-center">
          <Col
                xs='12'
              className="text-start ef fs-6 fw-bolder"
              style={{ color: "#706d6dce", fontSize: "15px" }}
            >
              {orderItem.createdAt.match(/\d+-\d+-\d+/)}
            </Col>
            <Col xs='12'>
              <div className="py-1 order-title fw-bolder fs-5 text-secondary">
                طلب رقم #{orderItem.id}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className="">
              <div className="pt-2 cat-title mb-3">
                طلب من :{" "}
                <span className="fw-bolder fs-5" style={{ color: "#057d77" }}>
                  {orderItem.user.name || ""}
                </span>
              </div>
              <div className="d-inline pt-2 me-2 fw-bolder text-primary">
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>
          {/* <Row>
                        <Col sm="12" className=" d-flex">
                            <div className="mt-2  cat-text d-inline">الماركة :</div>
                            <div className="mt-1 barnd-text d-inline mx-1">ابل </div>
                            <div
                                className="color  me-1 border"
                                style={{ backgroundColor: "#E52C2C" }}>
                            </div>
                        </Col>
                    </Row> */}

          {/* <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="cat-text pt-1 d-inline">الكميه</div>
                                <input
                                    className="mx-2 mt-1"
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                />
                            </div>
                            <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div>
                        </Col>
                    </Row> */}
          <Row className="d-flex  justify-content-between">
            <Col
              className="d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-items-start align-items-md-center"
              style={{ lineHeight: "50px" }}
            >
              <div>
                <div className="d-inline">التوصيل:</div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true ? (
                    <span style={{ color: "#169571" }} className="fw-bolder">
                      تم التوصيل
                    </span>
                  ) : (
                    <span style={{ color: "#d91c18" }} className="fw-bolder">
                      لم يتم التوصيل
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="d-inline">الدفع:</div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? (
                    <span style={{ color: "#169571" }} className="fw-bolder">
                      تم الدفع
                    </span>
                  ) : (
                    <span style={{ color: "#d91c18" }} className="fw-bolder">
                      لم يتم الدفع
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="d-inline">طريقة الدفع:</div>
                <div className="d-inline mx-2">
                  {orderItem.paymentMethodType === "cash" ? (
                    <span
                      style={{
                        backgroundColor: "#169571",
                        color: "#fff",
                        padding: "0px 15px",
                        borderRadius: "100px",
                      }}
                      className="fw-bolder"
                    >
                      كاش
                    </span>
                  ) : (
                    <span
                      style={{
                        backgroundColor: "#169571",
                        color: "#fff",
                        padding: "0px 15px",
                        borderRadius: "100px",
                      }}
                      className="fw-bolder"
                    >
                      VISA
                    </span>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end my-2">
              <div>
                <div className="card-currency ef">
                  <span className="card-price font-monospace fs-5">
                    {orderItem.totalOrderPrice.toFixed(2)}
                  </span>{" "}
                  EGP
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
