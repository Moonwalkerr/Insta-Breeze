export default function Comment({ username, comment }) {
  return (
    <div class="comment">
      <p>
        <span style={{ color: "black", fontWeight: "500", marginRight: "4px" }}>
          {username}
        </span>
        {comment}
      </p>
    </div>
  );
}
