import React, { useState } from "react";
import PropTypes from "prop-types";
import { slugify } from "@utils/functions";
import Video from "@components/shared/video";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SingleFeaturedVideoItem,
    SinglePopupWrap,
    HtPopupVideo,
    VideoButtonTwo,
    VideoPlayIcon,
    FeaturedVdeoContent,
    FeaturedBlogPostTop,
    FrendingBlogPostCategory,
    PostMetaLeftSide,
    PostDate,
    ReadTime,
    PostMetaRightSide,
    Title,
} from "./style";

const FeaturedSmallVideoItems = ({
    title,
    thume_image,
    video_link,
    date,
    slug,
    dateSlug,
    categories,
}) => {
    const image = getImage(thume_image);

    // Video Modal Popup

    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <SingleFeaturedVideoItem>
            <div className="video-link mt-30">
                <SinglePopupWrap>
                    <GatsbyImage image={image} alt="" />
                    <HtPopupVideo>
                        <VideoButtonTwo>
                            <div
                                className="video-play-sm"
                                onClick={() => setOpen(true)}
                                role="button"
                                tabIndex="0"
                                onKeyPress={() => {}}
                            >
                                <VideoPlayIcon></VideoPlayIcon>
                            </div>
                        </VideoButtonTwo>
                    </HtPopupVideo>
                </SinglePopupWrap>
            </div>
            <Video
                channel={video_channel}
                videoId={video_id}
                isOpen={isOpen}
                setOpen={setOpen}
            />
            <FeaturedVdeoContent>
                <FeaturedBlogPostTop>
                    <FrendingBlogPostCategory>
                        {categories &&
                            categories.map((cat, i) => (
                                <Link
                                    key={i}
                                    to={`/category/${slugify(cat.name)}`}
                                    className={`cat-btn ${cat.color}`}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                    </FrendingBlogPostCategory>
                    <PostMetaLeftSide>
                        <PostDate>
                            <i className="icofont-ui-calendar"></i>
                            <Link to={`/date/${dateSlug}`}>{date}</Link>
                        </PostDate>
                    </PostMetaLeftSide>
                    <PostMetaRightSide>
                        <a href="/">
                            <StaticImage
                                src="../../data/images/icons/small-bookmark.png"
                                alt=""
                            />
                        </a>
                        <a href="/">
                            <StaticImage
                                src="../../data/images/icons/heart.png"
                                alt=""
                            />
                        </a>
                    </PostMetaRightSide>
                </FeaturedBlogPostTop>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
            </FeaturedVdeoContent>
        </SingleFeaturedVideoItem>
    );
};
FeaturedSmallVideoItems.propTypes = {
    title: PropTypes.string,
    thume_image: PropTypes.object,
    video_link: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    dateSlug: PropTypes.string,
    categories: PropTypes.array,
};
export default FeaturedSmallVideoItems;
