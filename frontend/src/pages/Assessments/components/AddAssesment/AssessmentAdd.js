import { Modal, Spin } from "antd";
import React, { useState } from "react";
import { addAssessment } from "../../../../services/assessmentService";
import AssessmentForm from "./AssessmentForm";

// import { formatCategoriesArray } from "../../utilities/courseFormat";
// import './AssessmentForm.css';

function AssessmentAdd(props) {
  const [initialValues, setInitialValues] = useState({
    description: "",
    title: "",
    isActive: true,
    question: "",
    answerOptions: [],
  });

  const [status, setStatus] = useState({
    type: "IDLE",
    message: "In idle mode",
  });

  const onSubmit = async (values) => {
    console.log("Initial value", initialValues);

    let payload = {
      ...values,
    };

    setStatus({ type: "LOADING", message: "Request in Progress!" });
    await addAssessment(payload)
      .then((response) => {
        console.log("Successfully Added! ", response);
        setStatus({
          type: "SUCCESS",
          message: "Data added successfully!",
        });
      })
      .catch((error) => {
        alert("Posting data to backend failed!");
        if (error?.response?.data?.message)
          setStatus({
            type: "ERROR",
            message: error.response.data.message,
          });
        else setStatus({ type: "ERROR", message: "Something went wrong!" });
      });
  };
  return (
    <Modal
      title={`Add Assessment`}
      open={props.isOpen}
      onCancel={() => props.toggle()}
      footer={null}
      closable={true}
    >
      {status.type === "LOADING" ? (
        <Spin size="large" />
      ) : (
        <AssessmentForm
          type="Add"
          initialValues={initialValues}
          onSubmit={onSubmit}
          status={status}
          visible={props.isOpen}
          setStatus={setStatus}
          feedbackTemplates={props.feedbackTemplates}
        />
      )}
    </Modal>
  );
}

export default AssessmentAdd;
