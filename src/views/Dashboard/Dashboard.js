import React, { Component } from 'react';
import  { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader tag="h4">Welcome to Nightscout 2</CardHeader>
          <CardBody>
            <CardText>
                In the future, this langing page will be a dashboard with the
                most relevant reporting information automatically surfaced. For
                example, A1C for the last 90 days will be displayed in one of
                the widgets. Eventually, these widgest will be user definable,
                but in the beginning, they're be set to default reports.
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Dashboard;
