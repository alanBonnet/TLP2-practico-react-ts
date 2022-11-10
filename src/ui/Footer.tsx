import React from 'react'

interface Props {

}

export const Footer = (props: Props) => {
    return (
        // < !--Footer -- >
        <footer className="text-center text-lg-start bg-dark border-top border-secondary text-muted">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-facebook fs-5"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-twitter fs-5"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-google fs-5"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-instagram fs-5"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-github fs-5"></i>
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="bi bi-gem me-3"></i>Footer ejemplo
                            </h6>
                            <p>
                                loremcito xd de los dolores siteador amen, ameno dori, ameno dorime.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="bi bi-house me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="bi bi-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="bi bi-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="bi bi-printer me-3"></i> + 01 234 567 89</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4">
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
        // <!--Footer -->
    )
}
