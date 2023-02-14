import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal, Spin, Button, Space } from 'antd';
import { AlertTwoTone } from '@ant-design/icons';

const { Text } = Typography;

const DeleteWarningModalWithAction = ({
  isVisible,
  setIsVisible,
  action,
  question,
  buttonLabel,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    error: false,
    message: '',
  });

  const onOk = () => {
    setIsLoading(true);
    action();
    setIsLoading(false);
    setIsVisible(false);
  };

  const onCancel = () => {
    setIsVisible(false);
    setStatus({
      error: false,
      message: '',
    });
  };

  return (
    <Modal
      title="Warning"
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          {buttonLabel}
        </Button>,
      ]}
    >
      {isLoading ? (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Spin />
        </div>
      ) : status.error ? (
        <div>
          <Text strong>{status.message}</Text>
        </div>
      ) : (
        <Space>
          <AlertTwoTone twoToneColor="#FE4255" />
          <Text>{question}</Text>
        </Space>
      )}
    </Modal>
  );
};

DeleteWarningModalWithAction.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  question: PropTypes.string,
  buttonLabel: PropTypes.string,
};

DeleteWarningModalWithAction.defaultProps = {
  question: 'Are you sure you want to delete?',
  buttonLabel: 'Delete'
};

export default DeleteWarningModalWithAction;
