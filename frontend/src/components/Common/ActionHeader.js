import React from 'react';
import { Typography, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ActionHeader = (props) => {
  const title = props.title;
  const actionMenu = props.actionMenu;

  return (
    <header style={{ paddingBottom: '30px' }}>
      <Title level={3} style={{ float: 'left' }}>
        {title}
      </Title>
      {actionMenu && (
        <div
          style={{
            float: 'right',
            position: 'relative',
          }}
        >
          <Dropdown overlay={actionMenu} placement="bottomLeft">
            <Button>
              Actions <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      )}
    </header>
  );
};

export default ActionHeader;
