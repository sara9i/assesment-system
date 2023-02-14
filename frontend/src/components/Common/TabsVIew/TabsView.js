import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsView = ({ data }) => {
  const renderTabs = () =>
    data.map(({ render, tab }, i) => (
      <TabPane tab={tab} key={i}>
        {render()}
      </TabPane>
    ));

  return <Tabs defaultActiveKey="0">{renderTabs()}</Tabs>;
};

TabsView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      render: PropTypes.func.isRequired,
      tab: PropTypes.string.isRequired,
    })
  ),
};

export default TabsView;
