import React from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'gatsby';
import config from '../../../../client-config';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import './style.scss';
import { sanitize } from "../../../utils/functions";

const LatestPosts = ( props ) => {

	const imgData = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "default/default.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`);

	const { data } = props;

	return ! isEmpty( data ) ? (
		<div className="latest-posts-section">
			<div className="wrapper">
				<h2>{ ! isEmpty( config.latestPostHeading ) ? config.latestPostHeading : 'Latest Posts'  }</h2>

				{ ! isEmpty( data ) ? (
					<div className="latest-posts-section__wrap">
						{ data.map(
							( post, index ) => (
								<div
									key={ post.id }
									className="latest-post-section"
								>
									<Link to={ post.uri }>
										{ ! isEmpty( post.featuredImage ) ? (
											<div className="latest-post-section__img">
												<Img fluid={post.featuredImage.sourceUrlSharp.childImageSharp.fluid} alt={ post.altText ? post.altText : post.title } />
											</div>
										) : (
											<div className="latest-post-section__img">
												<Img fluid={imgData.file.childImageSharp.fluid} alt="Default" />
											</div>
										) }
										<div className="latest-post-section__content">
											{ post.excerpt ? (
												<div className="latest-post-section__excerpt" dangerouslySetInnerHTML={ { __html: sanitize(post?.excerpt) } }/>
											) : null }
										</div>
									</Link>
								</div>
							)
						) }
					</div>
				) : null }
			</div>

			<div className="view-all-wrap">
				<Link to="/blog"><button>View All</button></Link>
			</div>
		</div>
	) : (
		''
	);
};

export default LatestPosts;
