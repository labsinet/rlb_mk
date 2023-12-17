
const LikeCounter = ({ likes }) => {
  return (
    <div>
      <span role="img" aria-label="heart">
        ❤️
      </span>{' '}
      {likes}
    </div>
  );
};

export default LikeCounter;
