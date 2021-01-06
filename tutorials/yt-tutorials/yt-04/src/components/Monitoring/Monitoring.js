import React, {Component} from 'react';

class Monitoring extends Component {
    render() {
        return (
            <div>
                <div>                    
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid">
                                <h1 className="mt-4">Charts</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active">Charts</li>
                                </ol>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                                        <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>
                                        .
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area mr-1"/>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myAreaChart" width="100%"
                                            height={30}/></div>
                                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-bar mr-1"/>
                                                Bar Chart Example
                                            </div>
                                            <div className="card-body"><canvas id="myBarChart" width="100%"
                                                    height={50}/></div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-pie mr-1"/>
                                                Pie Chart Example
                                            </div>
                                            <div className="card-body"><canvas id="myPieChart" width="100%"
                                                    height={50}/></div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © Your Website 2020</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        ·
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Monitoring;
