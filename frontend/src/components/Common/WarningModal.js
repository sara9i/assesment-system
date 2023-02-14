import React, { useState } from 'react';
import { Typography, Modal, Spin, Button } from 'antd';
import { AlertTwoTone } from '@ant-design/icons';

const { Text } = Typography;

const WarningModal = (props) => {
  const isOpen = props.isOpen;
  const toggle = props.toggle;
  const onClick = props.onClick;
  const warningText = props.warningText;
  const warningButtonText = props.warningButtonText;
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    error: false,
    message: ''
  });

  const onCancel = () => {
    toggle();
    setStatus({
      error: false,
      message: ''
    });
  };

  return (
    <Modal
      title="Warning"
      visible={isOpen}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={onClick}>
          {`${warningButtonText}`}
        </Button>
      ]}>
      {isLoading ? (
        <div
          style={{
            textAlign: 'center'
          }}>
          <Spin />
        </div>
      ) : status.error ? (
        <div>
          <Text strong>{status.message}</Text>
        </div>
      ) : (
        <>
          <AlertTwoTone twoToneColor="#FE4255" />
          <Text>{`${warningText}`}</Text>
        </>
      )}
    </Modal>
  );
};

export default WarningModal;
