import axios from "axios";
import { BsChatDots,BsQuestionCircle,BsTelephone,BsPeople } from "react-icons/bs";
import { useRef, useState } from "react";
import Layout from "../components/Layout/Layout"

const ContactUs = () => {
    const names = useRef();
    const inputTextRef = useRef();

    const [success, setSuccess] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputText = inputTextRef.current.value;
        const inputName = names.current.value;
        axios
            .post(`http://localhost:8082/api/messages/${inputName}`, {
                text: inputText,
            })
            .then((res) => {
                setSuccess("SUCCESS");
            })
            .catch((err) => {
                console.log(err.message);
                setSuccess("ERROR");
            });

        inputTextRef.current.value = "";
    };
    return (
        <Layout>
            <div class="container px-5">
                <div class="bg-light rounded-3 py-5 px-4 px-md-5 mt-5">
                    <div class="text-center mb-5">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                        <h1 class="fw-bolder">Get in touch</h1>
                        <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <form onSubmit={onSubmitHandler}>
                                {success === "SUCCESS" && (
                                    <div className="form-success text-center">
                                        Message Sent Successfully!!
                                    </div>
                                )}
                                <div class="form-floating mb-3">
                                    <input ref={names} class="form-control" id="name" type="text" placeholder="Enter your name..." />
                                    <label for="name">Name</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <textarea ref={inputTextRef} class="form-control" id="message" type="text" name="text" placeholder="Enter your message here..." ></textarea>
                                    <label for="message">Message</label>
                                </div>

                                <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                    <div class="col">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsChatDots/></div>
                        <div class="h5 mb-2">Chat with us</div>
                        <p class="text-muted mb-0">Chat live with one of our support specialists.</p>
                    </div>
                    <div class="col">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsPeople/></div>
                        <div class="h5">Ask the community</div>
                        <p class="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                    </div>
                    <div class="col">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsQuestionCircle/></div>
                        <div class="h5">Support center</div>
                        <p class="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                    </div>
                    <div class="col">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsTelephone/></div>
                        <div class="h5">Call us</div>
                        <p class="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                    </div>
                </div>
            </div>
        </Layout>

    )
};
export default ContactUs;