import { notification, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "../../../components/Common/Form.css";
import { getAssessment } from "../../../services/assessmentService";

const { Text, Title, Row, Col } = Typography;
const tableStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "12px",
  width: "100%",
};
const AssessmentPage = (props) => {
  const [assessment, setAssessment] = useState({});
  const assessmentId = props.match.params.id;

  const getAssessmentData = async () => {
    try {
      console.log("getting data");
      const result = await getAssessment({ id: assessmentId });
      setAssessment(result.data);
      console.log(assessment);
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: `Error: ${error.message}`,
      });
    }
  };

  useEffect(() => {
    getAssessmentData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {assessment ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Title level={2}>Assessment Details</Title>
            <div>
              <h1>{assessment.title}</h1>
              <p>
                <i>{assessment.description}</i>
              </p>
            </div>
            <table style={tableStyle}>
              <tbody>
                {assessment.sections
                  ? assessment.sections.map((section, i) => (
                      <div>
                        <tr style={{ border: "dotted", width: "100%" }}>
                          <th>{section.title ?? "Section " + (i + 1)}</th>
                          <td>{section.description ?? ""}</td>
                        </tr>
                        <tr style={{ width: "100%" }}>
                          <table style={tableStyle}>
                            <tbody>
                              {section && section.questions
                                ? section.questions.map((question, i) => (
                                    <div>
                                      <tr style={{ width: "100%" }}>
                                        <p>
                                          <b>{"Question " + (i + 1) + ": "}</b>
                                          {question.description ?? ""}
                                        </p>
                                      </tr>
                                      <ul>
                                        {question && question.answers
                                          ? question.answers.map(
                                              (answer, i) => (
                                                <div>
                                                  <li>{`${answer.description} ${
                                                    answer.isCorrect
                                                      ? "(correct)"
                                                      : ""
                                                  }`}</li>
                                                </div>
                                              )
                                            )
                                          : null}
                                      </ul>
                                    </div>
                                  ))
                                : null}
                            </tbody>
                          </table>
                        </tr>
                      </div>
                    ))
                  : null}
              </tbody>
            </table>
            {/* <section className="grey-section">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Text strong>{"Title"}</Text>
                </Col>
                <Col span={18}>{assessment.title}</Col>
              </Row>
              {assessment.sections
                ? assessment.sections.map(({ section, tab }, i) => (
                    <Text>{}</Text>
                  ))
                : null}
            </section> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default withRouter(AssessmentPage);
