import React from 'react';

const ContactForm = () => {
    return (
        <div className="page-content">
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 font-size-18">Form Elements</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Form Elements</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Textual inputs</h4>
                                <p className="card-title-desc">Here are examples of <code>.form-control</code> applied
                                    to each
                                    textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-md-2 col-form-label">Text</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="text" defaultValue="Artisanal kale"
                                               id="example-text-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-search-input"
                                           className="col-md-2 col-form-label">Search</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="search" defaultValue="How do I shoot web"
                                               id="example-search-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-email-input"
                                           className="col-md-2 col-form-label">Email</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="email"
                                               defaultValue="bootstrap@example.com" id="example-email-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-url-input" className="col-md-2 col-form-label">URL</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="url"
                                               defaultValue="https://getbootstrap.com" id="example-url-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-tel-input"
                                           className="col-md-2 col-form-label">Telephone</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="tel" defaultValue="1-(555)-555-5555"
                                               id="example-tel-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-password-input"
                                           className="col-md-2 col-form-label">Password</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="password" defaultValue="hunter2"
                                               id="example-password-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-number-input"
                                           className="col-md-2 col-form-label">Number</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="number" defaultValue={42}
                                               id="example-number-input"/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="example-date-input" className="col-md-2 col-form-label">Date</label>
                                    <div className="col-md-10">
                                        <input className="form-control" type="date" defaultValue="2019-08-19"
                                               id="example-date-input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>

            </div>
        </div>
    );
};

export default ContactForm;