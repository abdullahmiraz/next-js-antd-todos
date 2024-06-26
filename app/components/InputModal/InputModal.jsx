"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";
import TaskForm from "../TaskForm/TaskForm";
const InputModal = ({ modalOpen }) => {
  const router = useRouter();
  const [open, setOpen] = useState(modalOpen);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal
      style={{marginTop: "-2.2rem"}}
        title="Add your task "
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <TaskForm />
      </Modal>
    </>
  );
};
export default InputModal;
