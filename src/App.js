import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterStudentPage from "./pages/RegisterStudentPage.js"
import ListStudentsPage from "./pages/ListStudentsPage.js"
import InfoStudentPage from "./pages/InfoStudentPage.js"
import DeliveryProjectPage from "./pages/DeliveryProjectPage.js"
import ListProjectsPage from "./pages/ListProjectsPage.js"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterStudentPage />} />
                <Route path="/" element={<ListStudentsPage />} />
                <Route path="/students/:id" element={<InfoStudentPage />} />
                <Route path="/delivery" element={<DeliveryProjectPage />} />
                <Route path="/projects" element={<ListProjectsPage />} />
            </Routes>
        </BrowserRouter>
    )
}