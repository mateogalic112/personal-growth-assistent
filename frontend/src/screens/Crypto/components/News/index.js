import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';
import { newsQuery } from '../../../../api/news';

import Container from '../../../../layout/Container';

import Loader from '../../../../components/Loader';
import NewsArticle from '../../../News/components/NewsArticle';

import { LoadMoreBtn } from '../../../../theme/Button';
import CryptoGrid from '../../../../layout/Grid/CryptoGrid';

const News = () => {
	const [articles, setArticles] = useState([]);
	const [articleLimit, setArticleLimit] = useState(5);

	const { data, error, isLoading, isError } = useQuery(
		['news', 'crypto'],
		() => newsQuery('crypto')
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
            <CryptoGrid>
				{Array.isArray(articles) &&
					articles.length &&
					articles
                        .slice(0, articleLimit)
						.map((article) => (
							<NewsArticle
								key={article.title}
								article={article}
							/>
						))}
            </CryptoGrid>
			{articleLimit < articles.length && (
				<LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
			)}
		</Container>
	);
};

export default News;
