import { useState } from "react"

export function useModal(isOpen: boolean = false) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return {
        isModalOpen,
        openModal,
        closeModal
    }
}