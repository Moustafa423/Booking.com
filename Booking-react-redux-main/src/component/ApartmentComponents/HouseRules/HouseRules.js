import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function HouseRules(props) {
   const { t, i18n } = useTranslation();
     function handleClick(lang) {
       i18n.changeLanguage(lang);
     }
    return (
      <>
        <div className="mt-5" id="houseRules">
          <div className="d-flex mb-3">
            <div className="me-auto p-2">
              <h5 className="fw-bold">
                {t("ApartmentComponents.HouseRules.House rules")}
              </h5>
              <span>
                {props.apartment.apartmentName}{" "}
                {t(
                  "ApartmentComponents.HouseRules.takes special requests - add in the next step!"
                )}
              </span>
            </div>
          </div>

          <div className="bg-div">
            <div className="container p-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enable-background="new 0 0 1000 1000"
                    xmlSpace="preserve"
                    height="25"
                    width="25"
                  >
                    <g>
                      <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                        <path d="M8375.3,3647.3L7450,2722l-496.1,496.1l-496.1,496.1l-297.6-299.7l-299.7-297.7l795.7-795.7l793.7-793.7l1225,1225l1225,1225L9600.3,4277l-297.6,297.6L8375.3,3647.3z" />
                        <path d="M100-467.1v-3887.6h3887.6h3887.6v2365v2367l-222.7,24.3c-121.5,12.2-311.8,46.6-419.1,72.9c-109.3,28.3-200.4,50.6-202.5,50.6c-4,0-6.1-907.1-6.1-2014.7v-2014.7H3987.6H950.4v3037.2v3037.2H3123h2170.6v425.2v425.2H2697.8H100V-467.1z" />
                        <path d="M1841.3,828.8V-21.6h850.4h850.4v850.4v850.4h-850.4h-850.4V828.8z" />
                        <path d="M4433.1,828.8V-21.6h850.4h850.4V519v538.6l-137.7,143.8c-76.9,79-190.3,218.7-255.1,311.8l-117.4,166h-595.3h-595.3V828.8z" />
                        <path d="M1841.3-1762.9v-850.4h850.4h850.4v850.4v850.4h-850.4h-850.4V-1762.9z" />
                        <path d="M4433.1-1762.9v-850.4h850.4h850.4v850.4v850.4h-850.4h-850.4V-1762.9z" />
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="me-2">
                  <span className="fw-bold">
                    {t("ApartmentComponents.HouseRules.Check in")}
                  </span>
                </div>
                <div>
                  <span>{props.apartment.checkIn}</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="me-2">
                  <svg
                    height="25"
                    width="25"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enable-background="new 0 0 1000 1000"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                        <path d="M801.3,4942.9c-349.4-52.4-636.7-349.4-687.2-712.5c-11.7-79.6-15.5-1471.5-13.6-3509.8l5.8-3377.8l44.6-110.7c97.1-240.7,297-431,522.2-500.8c124.2-38.8,176.6-38.8,2259.6-38.8h2133.5v407.7v407.7H2989.1H911.9v834.8v834.7h3727.2h3727.2v2541.1c0,2492.6,0,2543.1-38.8,2667.3c-71.8,232.9-254.3,421.3-506.7,524.1l-104.8,42.7l-3406.9,1.9C2435.8,4956.5,857.6,4950.7,801.3,4942.9z M7551.1,3312.2v-834.8H4231.5H911.9v834.8V4147h3319.6h3319.6V3312.2z M7551.1,827.4V-7.3H4231.5H911.9v834.7v834.7h3319.6h3319.6V827.4z" />
                        <path d="M1339,3312.2v-407.7h1028.9h1028.9v407.7v407.7H2367.9H1339V3312.2z" />
                        <path d="M5359.4,3690.8c-299-93.2-378.6-493.1-139.8-695c256.3-213.5,662-29.1,662,300.9C5881.6,3578.2,5621.5,3774.2,5359.4,3690.8z" />
                        <path d="M6601.8,3690.8c-298.9-93.2-378.5-493.1-139.7-695c256.2-213.5,662-29.1,662,300.9C7124,3578.2,6863.8,3774.2,6601.8,3690.8z" />
                        <path d="M1339,827.4V419.7h1028.9h1028.9v407.7v407.7H2367.9H1339V827.4z" />
                        <path d="M5359.4,1206c-271.8-85.4-370.8-429-184.4-646.4c238.8-279.6,708.6-110.7,706.6,256.2C5879.6,1095.3,5621.5,1289.4,5359.4,1206z" />
                        <path d="M6601.8,1206c-298.9-93.2-378.5-493.1-139.7-695c256.2-213.5,662-29.1,662,300.9C7124,1093.4,6863.8,1289.4,6601.8,1206z" />
                        <path d="M1339-1657.4v-407.7h1028.9h1028.9v407.7v407.7H2367.9H1339V-1657.4z" />
                        <path d="M8438.2-2682.4l-887.2-887.2l-475.6,475.6l-475.6,475.6l-285.4-287.3L6027.2-3191l762.9-762.9l761-761l1174.5,1174.5L9900-2366l-287.3,287.3l-285.4,285.4L8438.2-2682.4z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="me-2">
                  <span className="fw-bold">
                    {t("ApartmentComponents.HouseRules.Check out")}
                  </span>
                </div>
                <div>
                  <span>{props.apartment.checkOut}</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </div>
                <div>
                  <span className="fw-bold">
                    {t(
                      "ApartmentComponents.HouseRules.Cancellation/ prepayment"
                    )}
                  </span>
                </div>
                <div className="ms-2">
                  <span>
                    {" "}
                    {t(
                      "ApartmentComponents.HouseRules.You can cancel your reservation and get your money back in"
                    )}
                    {props.apartment.cancellation}
                    {t("ApartmentComponents.HouseRules.days ")} before your
                    check in date
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="me-2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enable-background="new 0 0 1000 1000"
                    xmlSpace="preserve"
                    width="27"
                    height="27"
                  >
                    <g>
                      <path d="M500,10c137.5,0,248.8,111.1,248.8,248.3C748.8,388.9,637.5,500,500,500c-137.5,0-248.8-111.1-248.8-241.7C251.2,121.1,362.5,10,500,10L500,10z M702.9,526.1c-52.4,26.2-130.9,45.7-209.5,45.7c-85.1,0-150.6-19.6-203-52.2C179.2,598,100.6,728.7,100.6,800.5C100.6,918.1,283.9,990,500,990c222.6,0,399.4-71.9,399.4-189.5C899.4,728.7,820.8,598,702.9,526.1L702.9,526.1z M702.9,526.1L702.9,526.1" />
                    </g>
                  </svg>
                </div>
                <div>
                  <span className="fw-bold">
                    {" "}
                    {t("ApartmentComponents.HouseRules.No age restriction")}
                  </span>
                </div>
                <div className="ms-2">
                  <span>
                    {t(
                      "ApartmentComponents.HouseRules.There is no age requirement for check-in"
                    )}
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="me-2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enable-background="new 0 0 1000 1000"
                    xmlSpace="preserve"
                    width="25"
                    height="25"
                  >
                    <g>
                      <path d="M613.6,879.4c-33.2-3.6-61.4-33.9-86.5-60.8c-9.1-9.8-19.1-20-27-27.3c-8.5,7.5-17.9,17.5-27.1,27.3c-25.1,27-53.3,57.2-86.5,60.8c5.1,58.6,53.8,104.6,113.6,105.4C559.9,984,608.5,938,613.6,879.4z" />
                      <path d="M72,468.5c49.7,0,85.9-10.7,112-24.6V237.6c0-10.9,8.8-19.8,19.8-19.8s19.8,8.8,19.8,19.8v176.9v47.4l-5.5,5.8c-38.5,39.8-59.7,94.1-59.7,153c0,121.7,99.4,220.8,221.7,220.8c1.9,0,3.8-0.3,6.1-0.9c18.1-4.7,40-28.3,58-47.7c12.2-13.1,23.8-25.6,35.7-34.9v-76.5c-10-1.8-19.6-4.9-28.7-9c-40.1-18.5-68-59.1-68-106.2c0-64.6,52.3-116.9,116.8-117.1c64.3,0.1,116.8,52.5,116.8,117.1c0,47.1-27.8,87.7-67.8,106.2c-9,4.2-18.5,7.2-28.7,9v76.5c11.3,9.4,23.5,21.9,35.6,34.9c18.1,19.4,39.8,43,57.9,47.7c2.3,0.6,4.1,0.9,6.1,0.9c122.3,0,221.7-99,221.7-220.8c0-58.8-21.1-113.1-59.6-153l-5.4-5.8v-47.4V237.6c0-10.9,8.8-19.8,19.8-19.8c10.9,0,19.9,8.8,19.9,19.8v206.3c26,13.9,62.3,24.6,112,24.6c139.7,0,37.3-453.3-250.3-453.3H500H322.1C34.5,15.2-67.9,468.5,72,468.5z M575.7,272.2c0.3,0,0.7,0,0.9,0c20.9,0.6,37.7,17.6,37.7,38.7c0,9.7-3.6,18.5-9.5,25.3c-6.9,8-17,13.1-28.3,13.3c-0.3,0-0.7,0-0.9,0c-20.9,0-37.9-16.5-38.7-37.3c0-0.5,0-1,0-1.5C537.1,289.6,554.3,272.2,575.7,272.2z M424.2,272.2c21.3,0,38.7,17.4,38.7,38.7c0,0.5,0,1,0,1.5c-0.8,20.7-17.8,37.3-38.7,37.3c-11.7,0-22.1-5.2-29.2-13.4c-5.9-6.8-9.5-15.7-9.5-25.3C385.5,289.6,402.9,272.2,424.2,272.2z" />
                    </g>
                  </svg>
                </div>
                <div className="me-2">
                  <span className="fw-bold">
                    {t("ApartmentComponents.HouseRules.Pets")}
                  </span>
                </div>
                <div>
                  <span>
                    {props.apartment.pets ? (
                      <span>
                        {t("ApartmentComponents.HouseRules.Pets are allowed")}
                      </span>
                    ) : (
                      <span className="text-muted">
                        {" "}
                        {t(
                          "ApartmentComponents.HouseRules.Pets are not allowed"
                        )}
                      </span>
                    )}
                  </span>
                </div>
              </div>

              <div class="d-flex align-items-center">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-credit-card-2-front-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                  </svg>
                </div>
                <div>
                  <span className="fw-bold">
                    {t(
                      "ApartmentComponents.HouseRules.Payments by Booking.com"
                    )}
                  </span>
                </div>
                <div className="me-2">
                  <span>
                    {t(
                      "ApartmentComponents.HouseRules.Booking.com takes your payment on behalf of the property for this stay, but make sure you have cash for any extras once you get there"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
