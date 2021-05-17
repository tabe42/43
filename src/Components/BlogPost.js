import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTemplate from './CardTemplate'
import {useHistory} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap';
function BlogPost() {
  const history = useHistory();
  const handleClick = () => history.push('/');
  return (
    <div className="Blog-section">
      <Card className='card-blog'>
            <Card.Img className='card-image' variant="top" src="https://picsum.photos/1920/1080?random=1" />
            <Card.Body>
                <Card.Title>Story Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary" type="button" onClick={handleClick}>Go back Home</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default BlogPost;