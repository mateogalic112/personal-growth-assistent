import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';

import Container from '../../layout/Container';

import Title from '../../components/TitleBar/Title';
import TitleBar from '../../components/TitleBar';
import Filter from '../../widgets/Filter';
import NewsGrid from '../../layout/Grid/NewsGrid';
import Loader from '../../components/Loader';

import { newsQuery } from '../../api/news';

import FeaturedArticle from './components/FeaturedArticle';
import NewsArticle from './components/NewsArticle';
import NewsFilter from './components/NewsFilter';

import { LoadMoreBtn } from '../../theme/Button';

const News = () => {
	const [articles, setArticles] = useState([]);
	const [articleLimit, setArticleLimit] = useState(3);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [queryString, setQueryString] = useState('');

	const { data, error, isLoading, isError } = useQuery(
		['news', queryString],
		() => newsQuery(queryString)
	);

	useEffect(() => {
		if (!isLoading) {
			setArticles(data.articles);
			setArticleLimit(3);
		}
	}, [data, isLoading]);

	const toggleFilter = () => {
		setIsFilterOpen((filterState) => !filterState);
	};

	const loadMore = () => {
		setArticleLimit((prevLimit) => prevLimit + 4);
	};

	if (isLoading) return <Loader />;

	if (isError) return <h1>{error}</h1>;

	return (
		<Container>
			<TitleBar>
				<Title>Latest News</Title>
				<Filter openFilter={toggleFilter} />
			</TitleBar>
			<NewsFilter active={isFilterOpen} setQueryString={setQueryString} />
			<NewsGrid>
				{Array.isArray(articles) && articles.length && (
					<FeaturedArticle article={articles[0]} />
				)}
				{Array.isArray(articles) &&
					articles.length &&
					articles
						.slice(1, articleLimit)
						.map((article) => (
							<NewsArticle
								key={article.title}
								article={article}
							/>
						))}
			</NewsGrid>
			{articleLimit < articles.length && (
				<LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
			)}
		</Container>
	);
};

export default News;
