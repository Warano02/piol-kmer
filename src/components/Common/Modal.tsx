import { useAppContext } from "@/hooks/useAppContext";
import type { ModalProps } from "@/types/Modal"

function Modal({ width = "" }: ModalProps) {
  console.log(width);
  const { setShowModal, showModal } = useAppContext()

  return (
    <div onClick={() => setShowModal(false)} className={`${showModal ? "fixed" : "hidden"}  top-0 left-0 w-full h-full z-60 bg-[#1312126b] p-10 select-none flex justify-center items-center ${showModal ? "opacity-100" : "opacity-0"}`} >
      <div className="w-3xs lg:w-xl h-64 rounded-3xl bg-white z-65" onClick={(e) => e.stopPropagation()}>

      </div>

    </div>
  )
}

export default Modal