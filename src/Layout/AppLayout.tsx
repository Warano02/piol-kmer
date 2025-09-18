import Modal from "@/components/Common/Modal"
import { useAppContext } from "@/hooks/useAppContext"
import { Outlet } from "react-router-dom"

function AppLayout() {
    const { showModal } = useAppContext()
    return (
        <div>
            <Outlet />
            {showModal && <Modal />}
        </div>
    )
}

export default AppLayout