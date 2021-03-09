import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/home/hero";
import Search from "../../components/home/search";
import FeaturedPosts from "../../components/home/feature-posts";
import LatestPosts from '../../components/home/latest-posts';
import Error from "../../components/error";
import { isEmpty } from 'lodash';
import SEO from "../../components/seo";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
			      page: { frontPageMeta: { banner, searchSection, featuredPostsSection } },
			      posts,
			      postSearchData: { allPosts, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<SEO title="Phoenix: Gatsby WordPress Theme" seo={props?.pageContext?.page?.seo} uri={'/'}/>
						<Hero data={ banner }/>
						<Search data={ searchSection } posts={ allPosts } engine={ options }/>
						<FeaturedPosts data={ featuredPostsSection }/>
						<LatestPosts data={ posts }/>
					</>
				) : (
					<Error message="Something Went Wrong"/>
				)
			}
		</Layout>
	)
};
export default FrontPage;

