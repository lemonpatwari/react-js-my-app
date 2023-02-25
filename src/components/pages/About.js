import React from 'react';

const About = () => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Alerts</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">UI Elements</a></li>
                                    <li className="breadcrumb-item active">Alerts</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Default Alerts</h4>
                                <p className="card-title-desc">Alerts are available for any length of
                                    text, as well as an optional dismiss button. For proper styling, use one
                                    of the four <strong>required</strong> contextual classes (e.g., <code className="highlighter-rouge">.alert-success</code>). For inline
                                    dismissal, use the alerts jQuery plugin.</p>
                                <div className>
                                    <div className="alert alert-primary" role="alert">
                                        A simple primary alert—check it out!
                                    </div>
                                    <div className="alert alert-secondary" role="alert">
                                        A simple secondary alert—check it out!
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                        A simple danger alert—check it out!
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        A simple warning alert—check it out!
                                    </div>
                                    <div className="alert alert-info mb-0" role="alert">
                                        A simple info alert—check it out!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Link color</h4>
                                <p className="card-title-desc">Use the <code className="highlighter-rouge">.alert-link</code> utility class to
                                    quickly provide matching colored links within any alert.</p>
                                <div className>
                                    <div className="alert alert-primary" role="alert">
                                        A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-secondary" role="alert">
                                        A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                        A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-info mb-0" role="alert">
                                        A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Dismissing</h4>
                                <p className="card-title-desc">
                                    Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                                    to the right of the alert and positions the <code>.close</code> button.
                                </p>
                                <div className>
                                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                        A simple primary alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                        A simple secondary alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        A simple success alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        A simple danger alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        A simple warning alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show mb-0" role="alert">
                                        A simple info alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">With Icon</h4>
                                <div className>
                                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                        <i className="mdi mdi-bullseye-arrow mr-2" />
                                        A simple primary alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                        <i className="mdi mdi-grease-pencil mr-2" />
                                        A simple secondary alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <i className="mdi mdi-check-all mr-2" />
                                        A simple success alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        <i className="mdi mdi-block-helper mr-2" />
                                        A simple danger alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <i className="mdi mdi-alert-outline mr-2" />
                                        A simple warning alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show mb-0" role="alert">
                                        <i className="mdi mdi-alert-circle-outline mr-2" />
                                        A simple info alert—check it out!
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div> {/* container-fluid */}
        </div>
    );
};

export default About;