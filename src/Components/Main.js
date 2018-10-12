import React ,{Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';

const posts = [{
  id: "0",
  description: "Image1",
  imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
},{
  id: "1",
  description: "Image2",
  imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
},{
  id: "2",
  description: "Image3",
  imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
}]

class Main extends Component{
  render() {
    return(
      <div>
        <Title title={'Photowall'}/>
        <Photowall posts={posts}/>
      </div>
    )
  }
}

export default Main;
