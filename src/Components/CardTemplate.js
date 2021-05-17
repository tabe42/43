import '../index.css';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function CardTemplate(props) {
  const history = useHistory();
  const handleClick = () => history.push('/story1');
  return (
        <Card className='card-blog'>
            <Card.Img className='card-image' variant="top" src={props.link} />
            <Card.Body>
                <Card.Title>Story Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary" type="button" onClick={handleClick}>Read More....</Button>
            </Card.Body>
        </Card>

  );
}

export default CardTemplate;