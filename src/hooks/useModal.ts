import { ModalRef } from "../components/modal/NativeModal";
import React from "react";

const useModal = () => {
    const modalRef = React.useRef<ModalRef>(null);

    const openModal = React.useCallback(() => {
        modalRef.current?.open();
    }, [modalRef.current]);

    const closeModal = React.useCallback(() => {
        modalRef.current?.close();
    }, [modalRef.current]);

    return { modalRef, openModal, closeModal }
}

export default useModal
