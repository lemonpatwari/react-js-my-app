import React from 'react';

const OrderModal = () => {
    return (
        <>
            <div className="right-bar">
                <div data-simplebar className="h-100">
                    <div className="rightbar-title px-3 py-4">
                        <a href="javascript:void(0);" className="right-bar-toggle float-right">
                            <i className="mdi mdi-close noti-icon"/>
                        </a>
                        <h5 className="m-0">Settings</h5>
                    </div>
                    {/* Settings */}
                    <hr className="mt-0"/>
                    <h6 className="text-center mb-0">Choose Layouts</h6>
                    <div className="p-4">
                        <div className="mb-2">
                            <img src="assets/images/layouts/layout-1.jpg" className="img-fluid img-thumbnail" alt=""/>
                        </div>
                        <div className="custom-control custom-switch mb-3">
                            <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch"
                                   defaultChecked/>
                            <label className="custom-control-label" htmlFor="light-mode-switch">Light Mode</label>
                        </div>
                        <div className="mb-2">
                            <img src="assets/images/layouts/layout-2.jpg" className="img-fluid img-thumbnail" alt=""/>
                        </div>
                        <div className="custom-control custom-switch mb-3">
                            <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch"
                                   data-bsstyle="assets/css/bootstrap-dark.min.css"
                                   data-appstyle="assets/css/app-dark.min.css"/>
                            <label className="custom-control-label" htmlFor="dark-mode-switch">Dark Mode</label>
                        </div>
                        <div className="mb-2">
                            <img src="assets/images/layouts/layout-3.jpg" className="img-fluid img-thumbnail" alt=""/>
                        </div>
                        <div className="custom-control custom-switch mb-5">
                            <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch"
                                   data-appstyle="assets/css/app-rtl.min.css"/>
                            <label className="custom-control-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                        </div>
                    </div>
                </div>
                {/* end slimscroll-menu*/}
            </div>
            <div className="rightbar-overlay"/>
        </>
    );
};
export default OrderModal;