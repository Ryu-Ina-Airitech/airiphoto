import React from "react";
import PropTypes from "prop-types";
//import { Flex } from "@aws-amplify/ui-react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    }
  });
/**
 * Given a DOM element, searches it for <img> tags and checks if all of them
 * have finished loading or not.
 * @param  {Element} parentNode
 * @return {Boolean}
 */
function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  handleImageChange = () => {
    this.setState({
      loading: !imagesLoaded(this.galleryElement)
    });
  };

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return <span className="spinner" />;
  }

  renderImage(imageUrl) {
    return (
        <div className='row' style={{display: 'flex',justifyContent: 'space-between',
         backgroundColor: '#ecf0f1',
        padding: 8, alignItems:'center' }}>
            <CardContent>
                <Typography component="p" style={{minHeight: '50px', overflow: 'scroll'}}>
                    <img
                    src={imageUrl}
                    onLoad={this.handleImageChange}
                    onError={this.handleImageChange}
                    alt=""
                    />
                </Typography>
            </CardContent>
            <Card className='card' style={{ maxWidth: 300,}}>
                <CardActions className={styles.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
                        <FavoriteIcon color={this.props.isKudo ? "secondary" : "primary"} />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
  }

  render() {
    return (
      <div
        className="gallery"
        ref={element => {
          this.galleryElement = element;
        }}
      >
        {this.renderSpinner()}
        <div className="images" style={{display: 'flex'}}>
        {/* <div className={styles.container}> */}
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Gallery;