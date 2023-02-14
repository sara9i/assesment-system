import {
  DeleteTwoTone,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";

// import {
const { Panel } = Collapse;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const { Text } = Typography;

const AssessmentForm = ({
  initialValues,
  onSubmit,
  status,
  type,
  setStatus,
  feedbackTemplates,
  currentUnits,
}) => {
  const [fetching, setFetching] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    //
  }, []);

  return (
    <div className="assessment-add-form">
      <Form
        labelCol={{ span: 7 }}
        onFinish={onSubmit}
        initialValues={initialValues}
        form={form}
      >
        <section>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <Input />
          </Form.Item>

          {/* add a mode dropdown for live/ondemand */}

          <Form.Item
            label="Is Active?"
            name="isActive"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value={true}>True</Select.Option>
              <Select.Option value={false}>False</Select.Option>
            </Select>
          </Form.Item>

          <section>
            <Form.List name={"sections"}>
              {(fields, { add, remove }) => {
                return (
                  <>
                    <section>
                      <Divider />
                      {fields.map((field, index) => {
                        return (
                          <section>
                            <Divider
                              orientation="center"
                              orientationMargin={50}
                            >
                              SECTION - {index + 1}
                              <DeleteTwoTone
                                onClick={() => remove(field.name)}
                                twoToneColor="#FE4255"
                              />
                            </Divider>
                            <Form.List name={[field.name, "questions"]}>
                              {(fields, { add, remove }) => {
                                return (
                                  <>
                                    <section>
                                      {fields.map((questionField, index) => {
                                        return (
                                          <section>
                                            <Divider
                                              orientation="left"
                                              orientationMargin={50}
                                            >
                                              Question - {index + 1}
                                              <DeleteTwoTone
                                                onClick={() =>
                                                  remove(questionField.name)
                                                }
                                                twoToneColor="#FE4255"
                                              />
                                            </Divider>
                                            <Form.Item
                                              name={[
                                                questionField.name,
                                                "description",
                                              ]}
                                              style={{ width: "400px" }}
                                              rules={[
                                                {
                                                  required: true,
                                                  message:
                                                    "please enter a question statement",
                                                },
                                                {
                                                  whitespace: true,
                                                },
                                              ]}
                                              hasFeedback
                                            >
                                              <Input.TextArea placeholder="Question Statement" />
                                            </Form.Item>
                                            <Form.List
                                              name={[
                                                questionField.name,
                                                "answers",
                                              ]}
                                            >
                                              {(fields, { add, remove }) => {
                                                return (
                                                  <>
                                                    <section>
                                                      {fields.map(
                                                        (
                                                          optionsField,
                                                          index
                                                        ) => {
                                                          return (
                                                            <section>
                                                              {/* <Divider
                                                                orientation="left"
                                                                orientationMargin={
                                                                  50
                                                                }
                                                              >
                                                                Option -{" "}
                                                                {index + 1}
                                                                <DeleteTwoTone
                                                                  onClick={() =>
                                                                    remove(
                                                                      optionsField.name
                                                                    )
                                                                  }
                                                                  twoToneColor="#FE4255"
                                                                />
                                                              </Divider> */}
                                                              <Row>
                                                                <Col span={1}>
                                                                  <DeleteTwoTone
                                                                    onClick={() =>
                                                                      remove(
                                                                        optionsField.name
                                                                      )
                                                                    }
                                                                    twoToneColor="#FE4255"
                                                                  />
                                                                </Col>
                                                                <Col span={12}>
                                                                  <Form.Item
                                                                    style={{
                                                                      width:
                                                                        "200px",
                                                                    }}
                                                                    rules={[
                                                                      {
                                                                        required: true,
                                                                        message:
                                                                          "please enter an answer option",
                                                                      },
                                                                      {
                                                                        whitespace: true,
                                                                      },
                                                                    ]}
                                                                    name={[
                                                                      optionsField.name,
                                                                      "description",
                                                                    ]}
                                                                    hasFeedback
                                                                  >
                                                                    <Input.TextArea placeholder="Option Statement" />
                                                                  </Form.Item>
                                                                </Col>
                                                                <Col span={11}>
                                                                  <Form.Item
                                                                    initialValue={
                                                                      false
                                                                    }
                                                                    name={[
                                                                      optionsField.name,
                                                                      "isCorrect",
                                                                    ]}
                                                                    valuePropName="checked"
                                                                    label="Is Correct? "
                                                                  >
                                                                    <Checkbox />
                                                                  </Form.Item>
                                                                </Col>
                                                              </Row>
                                                            </section>
                                                          );
                                                        }
                                                      )}
                                                    </section>
                                                    <Form.Item>
                                                      <PlusCircleOutlined
                                                        onClick={() => add()}
                                                      />
                                                      New Option
                                                    </Form.Item>
                                                  </>
                                                );
                                              }}
                                            </Form.List>
                                          </section>
                                        );
                                      })}
                                    </section>
                                    <Form.Item>
                                      <Button
                                        type="dashed"
                                        onClick={() => {
                                          add();
                                        }}
                                        icon={<PlusOutlined />}
                                      >
                                        New Question
                                      </Button>
                                    </Form.Item>
                                  </>
                                );
                              }}
                            </Form.List>

                            <Divider
                              orientation="center"
                              orientationMargin={50}
                              dashed={true}
                              plain={true}
                            >
                              END OF SECTION - {index + 1}
                            </Divider>
                          </section>
                        );
                      })}
                    </section>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                        }}
                        block
                        icon={<PlusOutlined />}
                      >
                        New Section
                      </Button>
                    </Form.Item>
                  </>
                );
              }}
            </Form.List>
          </section>
        </section>

        {status.type === "ERROR" ? (
          <Text type="danger">{status.message}</Text>
        ) : null}
        {status.type === "SUCCESS" ? (
          <Text type="success">Successful!</Text>
        ) : null}
        <br />
        <Row justify="end" gutter={12}>
          <Col>
            <Button type="primary" htmlType="submit">
              {type}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AssessmentForm;
