import React from "react";
import { Accordion } from "react-bootstrap";
import "./Faqs.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function Faqs(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="mt-5">
        <div class="d-flex flex-row mb-3">
          <div className="col-4 bg-div">
            <div class="p-3">
              <h3 className="text-center">
                {t("CampgroundComponents.Faqs.FAQs")}
              </h3>
            </div>
          </div>
          <div class="col-8">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.How do I get to know which facilities / services each Campground offers?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t("CampgroundComponents.Faqs.Please, have a look at")}{" "}
                  <a
                    className=" text-my-color fw-bold text-decoration-none "
                    href="#Facilities"
                  >
                    {t("CampgroundComponents.Faqs.Facilities")}
                  </a>{" "}
                  {t(
                    "CampgroundComponents.Faqs.In this section you will also find the Hotel facilities / services"
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.Do you charge any fees for your services?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "CampgroundComponents.Faqs.No, Booking.com doesn’t charge any fees for its services. Our service is completely free of charge and we will not add to your accommodation any additional fee for our service."
                  )}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.Are fees and taxes included in prices?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "CampgroundComponents.Faqs.This is different for each country and also any type of accommodation."
                  )}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.How do I know that my reservation is confirmed?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "CampgroundComponents.Faqs.After completing and sending us your order form, you will get an automatic receipt e-mail containing your order number. Within 30 minutes, you will receive Accommodation confirmation. The Accommodation confirmation serves you as a voucher so please do not forget to print it out and take it with you as it contains all the vital details (address of your hotel, contact phone numbers and other instructions). In case that you requested in your order form any special requests – ie. extra bed, non smoking room, parking etc, please always double check with the hotel directly that they noted your request and are able to arrange it for you."
                  )}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.Can I book your services by telephone, e-mail or fax?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "CampgroundComponents.Faqs.Unfortunately not. If you wish to make a booking, please fill in the order form on our website."
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  {t(
                    "CampgroundComponents.Faqs.I made a reservation but did not receive any confirmation. What should I do?"
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {t(
                    "CampgroundComponents.Faqs.Before finalizing your reservation please double check your e-mail address because a mistake in the e-mail address is the most common reason why our clients do not receive their confirmations. In some cases, our e-mails can also end up in the “spam folder” so please check it as well. In any case, please try to contact us by e-mail as we will be very happy to assist you and solve the problem as soon as possible."
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
