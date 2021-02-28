import { useQuery } from 'react-query';

import Container from '../../layout/Container';

import Title from '../../components/Title';
import TitleBar from '../../components/TitleBar';
import Filter from '../../widgets/Filter';
import NewsGrid from '../../layout/Grid/NewsGrid';

import { getLatestNews } from '../../api/news';

import FeaturedArticle from './components/FeaturedArticle';
import NewsArticle from './components/NewsArticle';

const News = () => {
	const { data, error, isLoading, isError } = useQuery('news', getLatestNews);

	if (isLoading) return <h1>Loading</h1>;

	console.log(data.articles);

	const featuredArticle = data.articles.shift();

	return (
		<Container>
			<TitleBar>
				<Title>News</Title>
				<Filter />
			</TitleBar>
			<NewsGrid>
				<FeaturedArticle
					src={featuredArticle.urlToImage}
					title={featuredArticle.title}
					author={featuredArticle.author}
					source={featuredArticle.source.name}
					description={featuredArticle.description}
					date={featuredArticle.publishedAt}
					url={featuredArticle.url}
				/>
				{data.articles.map((article) => (
					<NewsArticle
						src={article.urlToImage}
						title={article.title}
						source={article.source.name}
						author={article.author}
						url={article.url}
						published={article.publishedAt}
					/>
				))}
			</NewsGrid>
		</Container>
	);
};

export default News;
