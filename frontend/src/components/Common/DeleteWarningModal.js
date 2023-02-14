import React, { useState } from 'react';
import axios from '../shared/axios';
import { Typography, Modal, Spin, Button, notification } from 'antd';
import { AlertTwoTone } from '@ant-design/icons';

const { Text } = Typography;
const defaultDeleteWarning = 'Are you sure you want to delete?';

const DeleteWarningModal = (props) => {
  const isVisible = props.isVisible;
  const setIsVisible = props.setIsVisible;
  const deleteLink = props.deleteLink;
  const cb = props.cb;
  const params = props.params;
  const deleteWarning = props.deleteWarning;
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    error: false,
    message: ''
  });

  const onOk = () => {
    setIsLoading(true);
    axios
      .delete(deleteLink, { params })
      .then((response) => {
        if (cb) cb();
        setIsVisible(false);
        notification['success']({
          message: 'Data is deleted',
          description: 'Data is deleted',
          duration: 500
        });
      })
      .catch((err) => {
        setStatus({
          error: true,
          message: `${err}`
        });
      });
    setIsLoading(false);
  };

  const onCancel = () => {
    setIsVisible(false);
    setStatus({
      error: false,
      message: ''
    });
  };

  return (
    <Modal
      title="Warning"
      visible={isVisible}
      onCancel={onCancel}
      footer={[
        <Button key="submit" type="primary" onClick={onOk}>
          Delete
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
          <Text>{`${deleteWarning ?? defaultDeleteWarning}`}</Text>
        </>
      )}
    </Modal>
  );
};

export default DeleteWarningModal;
