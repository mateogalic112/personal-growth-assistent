import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import Container from '../../layout/Container';

import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Filter from '../../widgets/Filter';
import NewsGrid from '../../layout/Grid/NewsGrid';

import { getLatestNews } from '../../api/news';

import FeaturedArticle from './components/FeaturedArticle';
import NewsArticle from './components/NewsArticle';

const News = () => {
	const [articles, setArticles] = useState(null);
	const { data, error, isLoading, isError } = useQuery(
		'news',
		getLatestNews,
		{ refetchOnWindowFocus: false, refetchOnMount: false }
	);

	useEffect(() => {
		if (!isLoading) {
			setArticles(data.articles ?? []);
		}
	}, [data?.articles, isError, isLoading]);

	if (isLoading) return <h1>Loading</h1>;

	if (isError) return <h1>{error}</h1>;

	return (
		<Container>
			<TitleBar>
				<Title>News</Title>
				<Filter />
			</TitleBar>
			<NewsGrid>
				{Array.isArray(articles) && articles.length && (
					<FeaturedArticle article={articles.shift()} />
				)}
				{Array.isArray(articles) &&
					articles.length &&
					articles.map((article) => (
						<NewsArticle key={article.title} article={article} />
					))}
			</NewsGrid>
		</Container>
	);
};

export default News;
