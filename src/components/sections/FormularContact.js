import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import ContactForm from "./ContactForm";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FormContact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Contact",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Formular contact</h3>
                <p className="m-0">S.C. ROMNATIONAL S.R.L.</p>
                <p className="m-0">Adresa: Str. Industriala nr.2, Constanta</p>
                <p className="m-0">
                  Telefon/Fax: +40.241.693.011, +40.241.513.363
                </p>
                <p className="m-0">
                  Mobil: +40.729.351.448 (dispecerat/informatii)
                </p>
                <p>
                  <ContactForm />
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <iframe
                  width={528}
                  height={396}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.59814542234!2d28.615930066968176!3d44.174141563130476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae567c8b0886b%3A0x6d9fca85b9b0aec2!2sRomnational!5e0!3m2!1sro!2sro!4v1403721255222"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FormContact.propTypes = propTypes;
FormContact.defaultProps = defaultProps;

export default FormContact;
