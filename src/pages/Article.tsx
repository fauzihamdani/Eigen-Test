import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
   Col,
   Row,
   Card,
   Button,
   CardTitle,
   Input,
   CardText,
   Container,
   FormGroup,
   Form,
} from 'reactstrap';
import Header from '../components/Header';
import { URL } from '../constant';

import { Articles, News } from '../interfaces/interfaces';

const Article: React.FC = () => {
   const route = useHistory();

   const [articles, setArticles] = useState<News>();

   const getArticles = async (q = 'bitcoin') => {
      try {
         const fetchResult = await fetch(`${URL}${q}`);
         const result = await fetchResult.json();
         setArticles(result);
      } catch (error) {
         console.log(error);
      }
   };

   const onClickDetail = (detailArticle: Articles, index: number) => {
      route.push(`/article/${index}`, detailArticle);
   };

   useEffect(() => {
      getArticles();
   }, []);

   return (
      <div>
         <Container>
            <Row>
               {articles?.articles.map((article, i) => (
                  <Col sm="6" className="mt-3" key={i}>
                     <Card body>
                        <CardTitle>{article.title}</CardTitle>
                        <CardText>Author: {article.author}</CardText>
                        <CardText>Source Name: {article.source.name}</CardText>
                        <Button onClick={() => onClickDetail(article, i)}>
                           More Details
                        </Button>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
};

export default Article;
