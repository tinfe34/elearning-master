import React, { Component, useEffect } from "react";
import { GET_DETAIL_COURSE, ADD_TO_CART } from "../../store/modules/Course";
import { useLoader } from "../../context/LoaderContext";
//ui
import Image from "../../ui/Image";
import Button from "../../ui/Button/Button";

//router
import { useParams } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

const CourseDetail = () => {
  const { setLoading } = useLoader();

  const { id } = useParams();
  const dispatch = useDispatch();
  const { courseDetail, listToCart } = useSelector((state) => state.Course);

  const checkItemCart = (maKH) => {
    return listToCart.find((item) => item.maKhoaHoc === maKH);
  };

  useEffect(() => {
    setLoading(true)
    dispatch(GET_DETAIL_COURSE(id)).then(res => {
      setLoading(false)
    });
  }, []);

  const addToCart = (maKH) => {
    dispatch(ADD_TO_CART(maKH));
  };

  return (
    <div className="course-detail">
      <div className="container">
        <div className="course-detail__main">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="course-detail__detail">
                <h1 className="course-detail__title">
                  Chuyên Gia { courseDetail.tenKhoaHoc || "" }
                </h1>
                <p>
                  Đã có hơn <b>6200 bạn offline và hơn 2000 bạn online</b> đã
                  đăng kí học và có việc làm thông qua chương trình đào tạo Lập
                  trình Front End chuyên nghiệp từ Zero tại CyberSoft &
                  CyberLearn. Khóa học <b>100% thực hành</b> cường độ cao theo
                  <b>dự án thực tế</b> và kết nối doanh nghiệp hỗ trợ tìm việc
                  ngay sau khi học. Phương pháp đào tạo nghề chuẩn đại học
                  Arizona - ASU Mỹ - tập trung tư duy, phân tích bài toán giúp
                  cho học viên dễ dàng phát triển từ dev lên senior, leader và
                  làm việc tại bất kì môi trường nào.
                </p>
                <div className="course-detail__guide">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        AI CÓ THỂ THAM GIA ?
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Đã có kiến thức về tư duy lập trình, lập trình hướng
                          đối tượng
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Trái ngành học lập trình, chuyển nghề đã biết tư duy
                          lập trình, lập trình hướng đối tượng
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Sinh viên học CNTT, Cao Đẳng, Đại học đã biết tư duy
                          lập trình, lập trình hướng đối tượng
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ
                          việc làm của dev đã biết tư duy lập trình, lập trình
                          hướng đối tượng
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Thêm nghề để kiếm thêm thu nhập ngoài giờ
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <p>
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        ></i>
                        HỌC XONG LÀM VIỆC TẠI ĐÂU ?
                      </p>
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Apply vào tất cả công ty tuyển dụng Front End Dev ở vị
                          trí fresher hoặc juinor
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Các công ty outsourcing - gia công phần mềm
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Các công ty startup - khởi nghiệp
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Công ty, tập đoàn trong nước và nước ngoài...
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Có thể apply ngay vào Fresher, Junior với mức lương
                          khởi điểm từ 8tr đến 15tr
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>
                          Nhận các job freelancer về xây dựng front end cho
                          website
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="course-detail__summary">
                  <div className="row">
                    <div className="col-6 col-lg-4">
                      <p>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        HỌC ONLINE VIDEO & MENTOR SUPPORT
                      </p>
                    </div>
                    <div className="col-6 col-lg-4">
                      <p>
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                        15 CHỦ ĐỀ TỪ NỀN TẢNG ĐẾN CHUYÊN SÂU
                      </p>
                    </div>
                    <div className="col-6 col-lg-4">
                      <p>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                        &gt; 600 VIDEO &amp; 200 GIỜ GIẢNG
                      </p>
                    </div>
                    <div className="col-6 col-lg-4">
                      <p>
                        <i
                          className="fa fa-graduation-cap"
                          aria-hidden="true"
                        ></i>
                        CẤP CHỨNG NHẬN SAU KHÓA HỌC
                      </p>
                    </div>
                    <div className="col-6 col-lg-4">
                      <p>
                        <i classname="fa fa-podcast" aria-hidden="true" />
                        &gt; 70 BÀI TẬP &amp; DỰ ÁN THỰC TẾ
                      </p>
                    </div>
                    <div className="col-6 col-lg-4">
                      <p>
                        <i className="fa fa-usd" aria-hidden="true"></i>HD LÀM
                        CV & KẾT NỐI VIỆC LÀM
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  <span className="review">
                    {" "}
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </p>
                <p>
                  <b>Giảng viên: </b>
                  { (courseDetail.nguoiTao && courseDetail.nguoiTao.hoTen) || ""}
                </p>
                <p>
                  <b>Lượt xem: </b>
                  {courseDetail.luotXem || ""}
                </p>
                <p>
                  <b>Khai giảng: </b>
                  {courseDetail.ngayTao || ""}
                </p>
                <Button className='btn-primary' disabled={checkItemCart(courseDetail.maKhoaHoc)} onClick={() => addToCart(courseDetail.maKhoaHoc)}>
                  <span>Đăng kí ngay</span>
                </Button>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="course-detail__video">
                <Image src={courseDetail.hinhAnh || ""} />
                <br />
                <div className="course-detail__video-icon">
                  <i
                    className="fa fa-play-circle"
                    data-toggle="modal"
                    data-target="#courseDetail"
                  ></i>
                </div>
              </div>
              <div className="course-detail__tag">
                <p>
                  <i className="fa fa-tags" aria-hidden="true"></i>
                  RẤT NHIỀU DỰ ÁN & CÔNG NGHỆ ĐÁP ỨNG VỊ TRÍ TUYỂN DỤNG
                  FRONT-END DEV
                </p>
                <ul>
                  <li>ReactJS</li>
                  <li>Angular</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>FLexGrid</li>
                  <li>Bootstrap</li>
                  <li>Javascript</li>
                  <li>Prototype</li>
                  <li>Ajax</li>
                  <li>JSON</li>
                </ul>
              </div>
              {/* <!-- The Modal --> */}
              <div className="modal fade" id="courseDetail">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <iframe
                      width="100%"
                      height="400px"
                      src="https://www.youtube.com/embed/0LTO0H2Duuc"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-detail__desc">
          <p className="course-detail__desc-title">
            <i className="fa fa-briefcase" aria-hidden="true"></i>THÔNG TIN KHÓA
            HỌC
          </p>
          <p> {courseDetail.moTa || ""}</p>
        </div>
        <div className="course-detail__adherence">
          <div className="row">
            <div className="col-12 col-lg-5">
              <img
                className="image-boxes-img img-responsive "
                src="https://cyberlearn.vn/wp-content/uploads/2019/10/illustration-e1d13505283e080ef19f77dc7566e00a.png"
                alt=""
                title="illustration-e1d13505283e080ef19f77dc7566e00a"
              />
            </div>
            <div className="col-12 col-lg-7">
              <p>
                <i className="fa fa-user-md" aria-hidden="true"></i>ĐỐI TƯỢNG
                THAM GIA
              </p>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Bạn đang là sinh viên Cao Đẳng hoặc Đại học CNTT muốn học
                  nhanh theo dự án để thực tập sớm, tìm việc làm sớm, có kinh
                  nghiệm chinh chiến dự án thực tế sớm
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Bạn là người đi làm trái nghề nhưng yêu thích CNTT và muốn
                  theo đuổi nó từ đầu và muốn tăng thu nhập, chuyển ngành có thu
                  nhập và việc làm luôn top đầu bất chấp dịch bệnh
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Bạn là sinh viên IT, Tester, Điện tử, Cơ điện tử, Kinh tế,
                  Ngân hàng, ... mong muốn chuyển nghề
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Bạn đam mê CNTT từ trước nhưng chưa có cơ hội học và đây là
                  thời điểm bạn mong muốn được tham gia lại từ đầu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;