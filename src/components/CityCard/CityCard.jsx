import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";


function CityCard({ post, isProfile, removeLike, addLike, user }) {
 

  const likeIndex = post.likes.findIndex(
    (like) => like.username === user.username
  );

  const clickHandler =
    likeIndex > -1
      ? () => removeLike(post.likes[likeIndex]._id)
      : () => addLike(post._id);

 
  const likeColor = likeIndex > -1 ? "red" : "grey";

  
  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.detail}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

export default CityCard;