import React from "react";
import "../assets/css/Page404.css";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <div className="err_page">
      <div className="err_page_left">
        <img
          className="img"
          style={{ width: "360px", height: "250px" }}
          src="https://github.com/abhinanduN/codepen/blob/master/err.png?raw=true"
          alt="bebe"
        ></img>
      </div>
      <div className="err_page_right">
        <h1>404</h1>
        <h4>Ôi không. Hình như trang mà bạn tìm kiếm không có tồn tại!</h4>
        <p>
          Đừng lo lắng. Bạn có thể quay về trang chủ hoặc liên hệ với chúng tôi.
        </p>

        <Link to="/">
          <button className="err_btn"> Trở về trang chủ</button>
        </Link>
        {"  "}
        <Link to="/about">
          <button className="err_btn"> Liên hệ với chúng tôi!</button>
        </Link>
        {"  "}
      </div>
    </div>
  );
}

export default Page404;
