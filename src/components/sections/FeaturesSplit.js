import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
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
    title: "Workflow that just works",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          {/*<SectionHeader data={sectionHeader} className="center-content" />*/}
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Despre noi
                </div>
                <h3 className="mt-0 mb-12">Compania ROMNATIONAL</h3>
                <p className="m-0">
                  ROMNATIONAL S.R.L. Constanta si-a inceput activitatea in in
                  1994 fiind înregistrata la CCINAIMG cu nr. J13/4645/1994,
                  avand codul fiscal nr. RO 6604618 si opereaza conform Legii
                  nr. 333/2003 privind paza obiectivelor, bunurilor, valorilor
                  si protectia persoanelor, deţinând licenţa de funcţionare nr.
                  0434/P din 01.04.2005 eliberata de către Inspectoratul General
                  al Politiei Romane Direcţia Politiei de Ordine Publica,
                  privind industria securitatii private
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/box.jpg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Scopul nostru
                </div>
                <h3 className="mt-0 mb-12">Misiune</h3>
                <p className="m-0">
                  ROMNATIONAL urmareste sa devina lider in serviciile de
                  securitate pe pieţele locale pe care activeaza, precum si sa
                  cucereasca noi pieţe prin Imgservicii de calitate,
                  personalizate in funcţie de necesitatile si caracteristicile
                  fiecărui client. Astfel se antreneaza sa asculte si sa
                  inteleaga nevoile clienţilor, sa elaboreze soluţii practice.
                  ROMNATIONAL cauta permanent sa ridice standardele in ceea ce
                  priveşte eficienta si rentabilitatea in beneficiul clienţilor,
                  angajaţilor si acţionarilor.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/despre.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Viitorul nostru
                </div>
                <h3 className="mt-0 mb-12">Viziune</h3>
                <p className="m-0">
                  Membri activi ai unei industrii dinamice, aflate intr-o
                  permanenta evoluţie, ne concentram eforturile pentru a atinge
                  nivelul maxim de profesionalism si ne folosim experienţele
                  acumulate pentru a oferi, intr-un timp cat mai scurt, cele mai
                  bune soluţii pentru confortul si siguranţa clienţilor si
                  partenerilor noştri. Indiferent de condiţiile si exigentele
                  din domeniu, punem la dispoziţie servicii elaborate, la un
                  “click” distanta.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/vision.jpg")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
