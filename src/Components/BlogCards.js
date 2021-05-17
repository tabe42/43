import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTemplate from './CardTemplate'

function BlogCards() {
  return (
    <div className="Blog-section">
        <CardTemplate link='https://picsum.photos/1920/1080?random=1'/>
        <CardTemplate link='https://picsum.photos/1920/1080?random=2'/>
        <CardTemplate link='https://picsum.photos/1920/1080?random=3'/>
     
        
    </div>
  );
}

export default BlogCards;