import { useParams } from "react-router-dom";

import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import Container from '../../layout/Container';

import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import NewsGrid from '../../layout/Grid/NewsGrid';
import Loader from '../../components/Loader';

import { newsQuery } from '../../api/news';

import FeaturedArticle from '../News/components/FeaturedArticle';
import NewsArticle from '../News/components/NewsArticle';

import { LoadMoreBtn } from '../../theme/Button';

const Search = () => {
    const { keyword } = useParams()
	const [articles, setArticles] = useState([]);
	const [articleLimit, setArticleLimit] = useState(5);

	const { data, error, isLoading, isError } = useQuery(
		['search', keyword],
		() => newsQuery(keyword)
	);

	useEffect(() => {
		if (!isLoading) {
			setArticles(data.articles);
			setArticleLimit(5);
		}
	}, [data, isLoading]);

	const loadMore = () => {
		setArticleLimit((prevLimit) => prevLimit + 5);
	};

	if (isLoading) return <Loader />;

	if (isError) return <h1>{error.message}</h1>;

	return (
		<Container>
			<TitleBar>
				<Title><span style={{fontWeight: 400}}>News for</span> {keyword}</Title>
			</TitleBar>
			<NewsGrid>
                {!Array.isArray(articles) || !articles.length ? <h1>No results for {keyword}</h1> : null}
				{Array.isArray(articles) && articles.length ? (
					<FeaturedArticle article={articles[0]} />
				) : null}
				{Array.isArray(articles) &&
					articles.length ?
					articles
						.slice(1, articleLimit)
						.map((article) => (
							<NewsArticle
								key={article.title}
								article={article}
							/>
						)) : null}
			</NewsGrid>
			{articleLimit < articles.length && (
				<LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
			)}
		</Container>
	);
};

export default Search;
