import {
  Button, Col, Form, Input, Row, Select, Typography
} from 'antd';
import React from 'react';
import {
  sortOrderList
} from '../constant';

const { Title, Text } = Typography;
const { Option } = Select;

const AssessmentsSearchForm = ({
  form,
  resetForm,
  onFinish,
  totalCount
}) => {
  return (
    <Form form={form} onFinish={onFinish}>
      <Row justify="space-between">
        <Title level={4}>Filters</Title>
        {/* <Text strong>Total Count: {totalCount}</Text> */}
      </Row>

      <Row gutter={16}>
        <Col span={4}>
          <Form.Item name="assessmentSearch">
            <Input placeholder="Enter Search Text" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="sortOrder">
            <Select
              placeholder="Sort by time"
              showSearch={true}
              defaultValue={sortOrderList[0].value}>
              {sortOrderList?.map((option, index) => (
                <Option key={index} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        {/* <Col span={4}>
          <Form.Item name="createdAt">
            <DatePicker
              showTime={true}
              showNow={false}
              format={dateFormat}
              style={{ width: '100%' }}
              placeholder="Select CreatedAt Date"
            />
          </Form.Item>
        </Col> */}
        <Col>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
        <Col>
          <Button htmlType="button" onClick={resetForm}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AssessmentsSearchForm;
