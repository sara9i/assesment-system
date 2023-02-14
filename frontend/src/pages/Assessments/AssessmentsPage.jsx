import { Button, Col, Form, notification, Row, Space, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableWithSorter from '../../components/Common/TableWithSorter';
import { getAssessments } from '../../services/assessmentService';
import AssessmentAdd from './components/AddAssesment/AssessmentAdd';
import AssessmentsSearchForm from './components/AssessmentsSearchForm.jsx';
import {
  defaultPageSize,
  sortOrderList
} from './constant';


const { Title } = Typography;

const AssessmentPage = () => {
  const [form] = Form.useForm();

  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [totalCount, setTotalCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [assessmentList, setAssessmentList] = useState([]);
  const [visibleAddModal, setVisibleAddModel] = useState(false);
  const onClickModal = () => {
    setVisibleAddModel(true);
  };

  const [filters, setFilters] = useState({
    sortOrder: sortOrderList[0].value,
    createdAt: null,
    endDate: null,
    sortBy: 'id',
    assessmentSearch: null
  });

  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
      render: (value, item, index) => <span>{index + 1}</span>
    },
    {
      title: 'Assessment ID',
      dataIndex: 'id',
      key: 'id',
      render: (text, record) => (
        <Space size="middle">
          <Link to={'/assessments/' + record.id}>{text}</Link>
        </Space>
      )
    },
    {

      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Space size="middle">
          <Link to={'/assessments/' + record.id}>{text}</Link>
        </Space>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => <span>{new Date(value).toLocaleString()}</span>,
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      sortDirections: ['descend', 'ascend']
    }
  ];


  const onPaginationChange = (data) => {
    setPageNo(data.current);
    setPageSize(data.pageSize);
  };

  const onFinish = (values) => {
    setPageNo(1);
    if (
      new Date(values?.createdAt).getTime() >
      new Date().getTime()
    ) {
      notification['error']({
        message: 'Error',
        description: 'createdAt Date cannot be in future'
      });
      return;
    }

    const filterData = {
      sortOrder: values.sortOrder ?? sortOrderList[0].value,
      sortBy: 'id',
      assessmentSearch: values.assessmentSearch ?? null,
      createdAt: values.createdAt ? values.createdAt.utc().format() : null,
    };

    setFilters(filterData);
  };

  const resetForm = () => {
    form.resetFields();
    form.submit();
  };

  const getAssessmentList = useCallback(async () => {
    try {
      setIsLoading(true);
      const values = await getAssessments({
        pageNo,
        pageSize,
        ...filters
      });
      const assessments = values?.data?.sort(
        (assessmentA, assessmentB) =>
        assessmentA.id > assessmentB.id
      );
      setTotalCount(values?.data?.totalCount);
      setAssessmentList(assessments);
    } catch (error) {
      notification['error']({
        message: 'Error',
        description: `Error: ${error.message}`
      });
    } finally {
      setIsLoading(false);
    }
  }, [form, pageNo, pageSize, filters]);

  useEffect(() => {
    getAssessmentList();
  }, [getAssessmentList]);

  return (
    <div>
      <div>
        <Row justify="space-between" align="middle">
          <Col>
            <Title>Assessments!</Title>
          </Col>
        </Row>
        <Button type="ghost" onClick={onClickModal}>
            Add
          </Button>
        <AssessmentAdd
            isOpen={visibleAddModal}
            toggle={() => setVisibleAddModel(false)}
          />
        <AssessmentsSearchForm
          onFinish={onFinish}
          resetForm={resetForm}
          form={form}
          totalCount={totalCount}
        />
        <TableWithSorter
          tableLayout="auto"
          scroll={{ x: 1000 }}
          expandable={{ defaultExpandAllRows: true }}
          loading={isLoading}
          dataSource={assessmentList}
          columns={columns}
          pagination={{
            total: totalCount,
            defaultPageSize: defaultPageSize,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '30', '50']
          }}
          onChange={onPaginationChange}
        />
      </div>
    </div>
  );
};

export default AssessmentPage;
