import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { slugify } from "@utils/functions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SingleHeroCategoryItem, HeroCategoryInnerBox, Title } from "./style";

const HeroCategory = ({ image, name }) => {
    const images = getImage(image);
    return (
        <SingleHeroCategoryItem>
            <Link to={`/category/${slugify(name)}`}>
                <GatsbyImage image={images} alt={name} />
                <HeroCategoryInnerBox className="single-hero-hover">
                    <Title>{name}</Title>
                    <i className="icon icofont-long-arrow-right"></i>
                </HeroCategoryInnerBox>
            </Link>
        </SingleHeroCategoryItem>
    );
};
HeroCategory.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
};
export default HeroCategory;
