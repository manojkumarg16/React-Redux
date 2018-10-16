import React ,{Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';

class Main extends Component{
  constructor() {
    super()
    this.state = {
      posts : [{
        id: 0,
        description: "Image1",
        imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
      },{
        id: 1,
        description: "Image2",
        imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
      },{
        id: 2,
        description: "Image3",
        imageLink: "http://newlovewallpapers.in/images/beautiful-love-pictures-images-photos/beautiful-love-pictures-images-photos-1-1280.jpg"
      }],
    }
    this.removephoto = this.removephoto.bind(this);
  }

  removephoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  addPhoto(postSubmitted) {
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }))
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }
  render() {
    return(
      <div>
        <Route exact path = '/' render = {() => (
          <div>
            <Title title={'Photowall'}/>
            <Photowall posts={this.state.posts} onRemovePhoto={this.removephoto} onNavigate={this.navigate}/>
          </div>
        )}/>
        <Route exact path = "/AddPhoto" render= {({history}) => (
          <AddPhoto onAddPhoto = {(addedPost) => {
            this.addPhoto(addedPost)
            history.push('/')
          }} />
        )} />
      </div>
    )
  }
}


export default Main;
