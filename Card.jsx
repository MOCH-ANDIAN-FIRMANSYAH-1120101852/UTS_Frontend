const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>{props.title}</h5>
          <p>{props.content}</p>
          <a href="#" className="btn btn-primary">
            Pesan disini
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
