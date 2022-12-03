import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Servicii oferite:",
    paragraph:
      //"Asiguram servicii de paza umana in judetele Constanta, Tulcea si Galati, serviciul de monitorizare/ interventie umana desfasurand-l in urmatoarele localitati: Constanta, Cumpana, Agigea, Eforie, Techirghiol, Tuzla, Mangalia, Olimp, Neptun, 2 Mai, Mamaia Sat, Navodari, Medgidia, Medgidia, Lumina, Valu Traian, Murfatlar, Poarta Alba, Ovidiu, Poiana, Mihail Kogalniceanu si Municipiul Tulcea. De asemenea, este important sa stiti faptul ca asiguram prin subcontractori interventie inclusiv in localitatile Cernavoda, Costinesti, Harsova si Baneasa.",
      "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/gardare.jpg")}
                      alt="Features tile icon 01"
                      width={256}
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Gardarea transporturilor pe calea ferata
                  </h4>
                  <p className="m-0 text-sm">
                    Utilizarea armamentului, a cainilor de serviciu, echipajele
                    mobile de interventie dispuse pe plan national au conferit
                    serviciilor noastre de gardare o nota aparte, apreciata de
                    beneficiarii nostri si recomandata catre principalii
                    transportatori autorizati in domeniu.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/dispecerat.jpg")}
                      alt="Features tile icon 02"
                      width={256}
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Monitorizare si interventie</h4>
                  <p className="m-0 text-sm">
                    Dispeceratul firmei asigura comunicarea cu personalul din
                    teren prin intermediul statiilor radio emisie-receptie si
                    telefoane mobile, iar controlul, intervenţiile si
                    sprijinirea agenţilor se face cu echipaje specializate ce se
                    deplaseaza cu autovehiculele firmei destinate acestui scop
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/instalare.jpg")}
                      alt="Features tile icon 03"
                      width={256}
                      height={256}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Instalare sisteme supraveghere</h4>
                  <p className="m-0 text-sm">
                    Firma noastra instaleaza si asigura mentenanta post garantie
                    pentru sisteme de detectie, alarmare anti-efractie si
                    incendiu, sisteme video cu circuit inchis, sisteme de
                    monitorizare prin GPS pe care le monitorizează computerizat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
