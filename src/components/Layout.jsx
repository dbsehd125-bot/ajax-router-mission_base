// Layout.jsx - Outlet을 활용한 중첩 라우트 레이아웃
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout({ loaded }) {
  return (
    <div>
      <Header />
      {!loaded ? <p>로딩 중...</p> : <Outlet />}
    </div>
  );
}
