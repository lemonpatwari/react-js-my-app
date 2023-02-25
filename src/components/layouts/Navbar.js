import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                    <div className="collapse navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-home-circle mr-2" />Dashboards <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-dashboard">
                                    {/*<a href="index.html" className="dropdown-item">Default</a>*/}
                                    <NavLink to="/" className="dropdown-item">
                                        Default
                                    </NavLink>

                                    <NavLink to="/about" className="dropdown-item">
                                        About
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-tone mr-2" />UI Elements <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl" aria-labelledby="topnav-uielement">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-alerts.html" className="dropdown-item">Alerts</a>
                                                <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                                                <a href="ui-cards.html" className="dropdown-item">Cards</a>
                                                <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                                                <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                                                <a href="ui-grid.html" className="dropdown-item">Grid</a>
                                                <a href="ui-images.html" className="dropdown-item">Images</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-lightbox.html" className="dropdown-item">Lightbox</a>
                                                <a href="ui-modals.html" className="dropdown-item">Modals</a>
                                                <a href="ui-rangeslider.html" className="dropdown-item">Range Slider</a>
                                                <a href="ui-session-timeout.html" className="dropdown-item">Session Timeout</a>
                                                <a href="ui-progressbars.html" className="dropdown-item">Progress Bars</a>
                                                <a href="ui-sweet-alert.html" className="dropdown-item">Sweet-Alert</a>
                                                <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs &amp; Accordions</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-typography.html" className="dropdown-item">Typography</a>
                                                <a href="ui-video.html" className="dropdown-item">Video</a>
                                                <a href="ui-general.html" className="dropdown-item">General</a>
                                                <a href="ui-colors.html" className="dropdown-item">Colors</a>
                                                <a href="ui-rating.html" className="dropdown-item">Rating</a>
                                                <a href="ui-notifications.html" className="dropdown-item">Notifications</a>
                                                <a href="ui-image-cropper.html" className="dropdown-item">Image Cropper</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-customize mr-2" />Apps <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-pages">
                                    <a href="calendar.html" className="dropdown-item">Calendar</a>
                                    <a href="chat.html" className="dropdown-item">Chat</a>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Email <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-email">
                                            <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                            <a href="email-read.html" className="dropdown-item">Read Email</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-ecommerce" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Ecommerce <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                            <a href="ecommerce-products.html" className="dropdown-item">Products</a>
                                            <a href="ecommerce-product-detail.html" className="dropdown-item">Product Detail</a>
                                            <a href="ecommerce-orders.html" className="dropdown-item">Orders</a>
                                            <a href="ecommerce-customers.html" className="dropdown-item">Customers</a>
                                            <a href="ecommerce-cart.html" className="dropdown-item">Cart</a>
                                            <a href="ecommerce-checkout.html" className="dropdown-item">Checkout</a>
                                            <a href="ecommerce-shops.html" className="dropdown-item">Shops</a>
                                            <a href="ecommerce-add-product.html" className="dropdown-item">Add Product</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-crypto" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Crypto <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-crypto">
                                            <a href="crypto-wallets.html" className="dropdown-item">Wallets</a>
                                            <a href="crypto-buy-sell.html" className="dropdown-item">Buy/Sell</a>
                                            <a href="crypto-exchange.html" className="dropdown-item">Exchange</a>
                                            <a href="crypto-lending.html" className="dropdown-item">Lending</a>
                                            <a href="crypto-orders.html" className="dropdown-item">Orders</a>
                                            <a href="crypto-kyc-application.html" className="dropdown-item">KYC Application</a>
                                            <a href="crypto-ico-landing.html" className="dropdown-item">ICO Landing</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-project" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Projects <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-project">
                                            <a href="projects-grid.html" className="dropdown-item">Projects Grid</a>
                                            <a href="projects-list.html" className="dropdown-item">Projects List</a>
                                            <a href="projects-overview.html" className="dropdown-item">Project Overview</a>
                                            <a href="projects-create.html" className="dropdown-item">Create New</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-task" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tasks <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-task">
                                            <a href="tasks-list.html" className="dropdown-item">Task List</a>
                                            <a href="tasks-kanban.html" className="dropdown-item">Kanban Board</a>
                                            <a href="tasks-create.html" className="dropdown-item">Create Task</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contact" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Contacts <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-contact">
                                            <a href="contacts-grid.html" className="dropdown-item">User Grid</a>
                                            <a href="contacts-list.html" className="dropdown-item">User List</a>
                                            <a href="contacts-profile.html" className="dropdown-item">Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-collection mr-2" />Components <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-components">
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Forms <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-form">
                                            <a href="form-elements.html" className="dropdown-item">Form Elements</a>
                                            <a href="form-validation.html" className="dropdown-item">Form Validation</a>
                                            <a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
                                            <a href="form-editors.html" className="dropdown-item">Form Editors</a>
                                            <a href="form-uploads.html" className="dropdown-item">Form File Upload</a>
                                            <a href="form-xeditable.html" className="dropdown-item">Form Xeditable</a>
                                            <a href="form-repeater.html" className="dropdown-item">Form Repeater</a>
                                            <a href="form-wizard.html" className="dropdown-item">Form Wizard</a>
                                            <a href="form-mask.html" className="dropdown-item">Form Mask</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tables <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-table">
                                            <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                                            <a href="tables-datatable.html" className="dropdown-item">Data Tables</a>
                                            <a href="tables-responsive.html" className="dropdown-item">Responsive Table</a>
                                            <a href="tables-editable.html" className="dropdown-item">Editable Table</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Charts <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                            <a href="charts-apex.html" className="dropdown-item">Apex charts</a>
                                            <a href="charts-echart.html" className="dropdown-item">E charts</a>
                                            <a href="charts-chartjs.html" className="dropdown-item">Chartjs Chart</a>
                                            <a href="charts-flot.html" className="dropdown-item">Flot Chart</a>
                                            <a href="charts-tui.html" className="dropdown-item">Toast UI Chart</a>
                                            <a href="charts-knob.html" className="dropdown-item">Jquery Knob Chart</a>
                                            <a href="charts-sparkline.html" className="dropdown-item">Sparkline Chart</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Icons <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-">
                                            <a href="icons-boxicons.html" className="dropdown-item">Boxicons</a>
                                            <a href="icons-materialdesign.html" className="dropdown-item">Material Design</a>
                                            <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                                            <a href="icons-fontawesome.html" className="dropdown-item">Font awesome</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Maps <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-map">
                                            <a href="maps-google.html" className="dropdown-item">Google Maps</a>
                                            <a href="maps-vector.html" className="dropdown-item">Vector Maps</a>
                                            <a href="maps-leaflet.html" className="dropdown-item">Leaflet Maps</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-file mr-2" />Extra pages <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-more">
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-invoice" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Invoices <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-invoice">
                                            <a href="invoices-list.html" className="dropdown-item">Invoice List</a>
                                            <a href="invoices-detail.html" className="dropdown-item">Invoice Detail</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Authentication <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                            <a href="auth-login.html" className="dropdown-item">Login</a>
                                            <a href="auth-register.html" className="dropdown-item">Register</a>
                                            <a href="auth-recoverpw.html" className="dropdown-item">Recover Password</a>
                                            <a href="auth-lock-screen.html" className="dropdown-item">Lock Screen</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Utility <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                            <a href="pages-starter.html" className="dropdown-item">Starter Page</a>
                                            <a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
                                            <a href="pages-comingsoon.html" className="dropdown-item">Coming Soon</a>
                                            <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                                            <a href="pages-faqs.html" className="dropdown-item">FAQs</a>
                                            <a href="pages-pricing.html" className="dropdown-item">Pricing</a>
                                            <a href="pages-404.html" className="dropdown-item">Error 404</a>
                                            <a href="pages-500.html" className="dropdown-item">Error 500</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-layout mr-2" />Layouts <div className="arrow-down" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="topnav-layout">
                                    <a href="layouts-vertical.html" className="dropdown-item">Vertical</a>
                                    <a href="layouts-topbar-light.html" className="dropdown-item">Topbar light</a>
                                    <a href="layouts-boxed-width.html" className="dropdown-item">Boxed width</a>
                                    <a href="layouts-preloader.html" className="dropdown-item">Preloader</a>
                                    <a href="layouts-colored-header.html" className="dropdown-item">Colored Header</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;