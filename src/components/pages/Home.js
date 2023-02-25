import React from 'react';

const Home = () => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Dashboard</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card overflow-hidden">
                            <div className="bg-soft-primary">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-3">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p>Skote Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle" />
                                        </div>
                                        <h5 className="font-size-15 text-truncate">Henry Price</h5>
                                        <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="pt-4">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="font-size-15">125</h5>
                                                    <p className="text-muted mb-0">Projects</p>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="font-size-15">$1245</h5>
                                                    <p className="text-muted mb-0">Revenue</p>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <a href className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ml-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Monthly Earning</h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="text-muted">This month</p>
                                        <h3>$34,252</h3>
                                        <p className="text-muted"><span className="text-success mr-2"> 12% <i className="mdi mdi-arrow-up" /> </span> From previous period</p>
                                        <div className="mt-4">
                                            <a href className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ml-1" /></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mt-4 mt-sm-0">
                                            <div id="radialBar-chart" className="apex-charts" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted mb-0">We craft digital, graphic and dimensional thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mini-stats-wid">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <p className="text-muted font-weight-medium">Orders</p>
                                                <h4 className="mb-0">1,235</h4>
                                            </div>
                                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                          <span className="avatar-title">
                            <i className="bx bx-copy-alt font-size-24" />
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mini-stats-wid">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <p className="text-muted font-weight-medium">Revenue</p>
                                                <h4 className="mb-0">$35, 723</h4>
                                            </div>
                                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-primary">
                            <i className="bx bx-archive-in font-size-24" />
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mini-stats-wid">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <p className="text-muted font-weight-medium">Average Price</p>
                                                <h4 className="mb-0">$16.2</h4>
                                            </div>
                                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-primary">
                            <i className="bx bx-purchase-tag-alt font-size-24" />
                          </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4 float-sm-left">Email Sent</h4>
                                <div className="float-sm-right">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Week</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Month</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Year</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix" />
                                <div id="stacked-column-chart" className="apex-charts" dir="ltr" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Social Source</h4>
                                <div className="text-center">
                                    <div className="avatar-sm mx-auto mb-4">
                      <span className="avatar-title rounded-circle bg-soft-primary font-size-18">
                        <i className="mdi mdi-facebook text-primary" />
                      </span>
                                    </div>
                                    <p className="font-16 text-muted mb-2" />
                                    <h5><a href="#" className="text-dark">Facebook - <span className="text-muted font-16">125 sales</span> </a></h5>
                                    <p className="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                    <a href="#" className="text-primary font-16">Learn more <i className="mdi mdi-chevron-right" /></a>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-primary font-size-16">
                            <i className="mdi mdi-facebook text-white" />
                          </span>
                                            </div>
                                            <h5 className="font-size-15">Facebook</h5>
                                            <p className="text-muted mb-0">125 sales</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-info font-size-16">
                            <i className="mdi mdi-twitter text-white" />
                          </span>
                                            </div>
                                            <h5 className="font-size-15">Twitter</h5>
                                            <p className="text-muted mb-0">112 sales</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-pink font-size-16">
                            <i className="mdi mdi-instagram text-white" />
                          </span>
                                            </div>
                                            <h5 className="font-size-15">Instagram</h5>
                                            <p className="text-muted mb-0">104 sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-5">Activity</h4>
                                <ul className="verti-timeline list-unstyled">
                                    <li className="event-list">
                                        <div className="event-timeline-dot">
                                            <i className="bx bx-right-arrow-circle font-size-18" />
                                        </div>
                                        <div className="media">
                                            <div className="mr-3">
                                                <h5 className="font-size-14">22 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2" /></h5>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    Responded to need “Volunteer Activities
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="event-list">
                                        <div className="event-timeline-dot">
                                            <i className="bx bx-right-arrow-circle font-size-18" />
                                        </div>
                                        <div className="media">
                                            <div className="mr-3">
                                                <h5 className="font-size-14">17 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2" /></h5>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    Everyone realizes why a new common language would be desirable... <a href="#">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="event-list active">
                                        <div className="event-timeline-dot">
                                            <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
                                        </div>
                                        <div className="media">
                                            <div className="mr-3">
                                                <h5 className="font-size-14">15 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2" /></h5>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    Joined the group “Boardsmanship Forum”
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="event-list">
                                        <div className="event-timeline-dot">
                                            <i className="bx bx-right-arrow-circle font-size-18" />
                                        </div>
                                        <div className="media">
                                            <div className="mr-3">
                                                <h5 className="font-size-14">12 Nov <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2" /></h5>
                                            </div>
                                            <div className="media-body">
                                                <div>
                                                    Responded to need “In-Kind Opportunity”
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-center mt-4"><a href className="btn btn-primary waves-effect waves-light btn-sm">View More <i className="mdi mdi-arrow-right ml-1" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Top Cities Selling Product</h4>
                                <div className="text-center">
                                    <div className="mb-4">
                                        <i className="bx bx-map-pin text-primary display-4" />
                                    </div>
                                    <h3>1,456</h3>
                                    <p>San Francisco</p>
                                </div>
                                <div className="table-responsive mt-4">
                                    <table className="table table-centered table-nowrap">
                                        <tbody>
                                        <tr>
                                            <td style={{width: '30%'}}>
                                                <p className="mb-0">San Francisco</p>
                                            </td>
                                            <td style={{width: '25%'}}>
                                                <h5 className="mb-0">1,456</h5></td>
                                            <td>
                                                <div className="progress bg-transparent progress-sm">
                                                    <div className="progress-bar bg-primary rounded" role="progressbar" style={{width: '94%'}} aria-valuenow={94} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className="mb-0">Los Angeles</p>
                                            </td>
                                            <td>
                                                <h5 className="mb-0">1,123</h5>
                                            </td>
                                            <td>
                                                <div className="progress bg-transparent progress-sm">
                                                    <div className="progress-bar bg-success rounded" role="progressbar" style={{width: '82%'}} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className="mb-0">San Diego</p>
                                            </td>
                                            <td>
                                                <h5 className="mb-0">1,026</h5>
                                            </td>
                                            <td>
                                                <div className="progress bg-transparent progress-sm">
                                                    <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Latest Transaction</h4>
                                <div className="table-responsive">
                                    <table className="table table-centered table-nowrap mb-0">
                                        <thead className="thead-light">
                                        <tr>
                                            <th style={{width: '20px'}}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">&nbsp;</label>
                                                </div>
                                            </th>
                                            <th>Order ID</th>
                                            <th>Billing Name</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Payment Status</th>
                                            <th>Payment Method</th>
                                            <th>View Details</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2540</a> </td>
                                            <td>Neal Matthews</td>
                                            <td>
                                                07 Oct, 2019
                                            </td>
                                            <td>
                                                $400
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-mastercard mr-1" /> Mastercard
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2541</a> </td>
                                            <td>Jamal Burnett</td>
                                            <td>
                                                07 Oct, 2019
                                            </td>
                                            <td>
                                                $380
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-danger font-size-12">Chargeback</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-visa mr-1" /> Visa
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                    <label className="custom-control-label" htmlFor="customCheck4">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2542</a> </td>
                                            <td>Juan Mitchell</td>
                                            <td>
                                                06 Oct, 2019
                                            </td>
                                            <td>
                                                $384
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-paypal mr-1" /> Paypal
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                    <label className="custom-control-label" htmlFor="customCheck5">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2543</a> </td>
                                            <td>Barry Dick</td>
                                            <td>
                                                05 Oct, 2019
                                            </td>
                                            <td>
                                                $412
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-mastercard mr-1" /> Mastercard
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                    <label className="custom-control-label" htmlFor="customCheck6">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2544</a> </td>
                                            <td>Ronald Taylor</td>
                                            <td>
                                                04 Oct, 2019
                                            </td>
                                            <td>
                                                $404
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-warning font-size-12">Refund</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-visa mr-1" /> Visa
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                    <label className="custom-control-label" htmlFor="customCheck7">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a href="javascript: void(0);" className="text-body font-weight-bold">#SK2545</a> </td>
                                            <td>Jacob Hunter</td>
                                            <td>
                                                04 Oct, 2019
                                            </td>
                                            <td>
                                                $392
                                            </td>
                                            <td>
                                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                                            </td>
                                            <td>
                                                <i className="fab fa-cc-paypal mr-1" /> Paypal
                                            </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* end table-responsive */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end row */}
            </div>
            {/* container-fluid */}
        </div>
    );
};

export default Home;