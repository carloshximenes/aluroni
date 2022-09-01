import Footer from "components/Footer";
import Layout from "components/Layout";
import About from "pages/About";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const AppRouter = () => {
	return (
		<main className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="menu" element={<Menu />} />
						<Route path="about" element={<About />} />
						<Route path="/detail/:id" element={<Detail />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	);
};

export default AppRouter;
