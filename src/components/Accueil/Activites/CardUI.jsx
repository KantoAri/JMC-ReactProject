const CardUI = ({ image, title, description, className = "" }) => {
  return (
    <div className={`col-lg-4 col-md-6 mb-4 ${className}`}>
      <div
        className="card h-100 shadow-sm border-0"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "20px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }}
      >
        <div
          className="card-img-top d-flex justify-content-center align-items-center"
          style={{
            height: "300px",
            backgroundColor: "#e9ecef",
            borderRadius: "10px 10px 0 0",
            overflow: "hidden",
          }}
        >
          {typeof image === "string" ? (
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            image
          )}
        </div>
        <div
          className="card-body text-center p-4 d-flex flex-column"
          style={{ minHeight: "300px" }}
        >
          {title && (
            <h5
              className="card-title mb-3"
              style={{
                color: "#2c3e50",
                fontWeight: "800",
                fontSize: "1.1rem",
              }}
            >
              {title}
            </h5>
          )}
          <p
            className="card-text"
            style={{
              fontSize: "0.95rem",
              lineHeight: "2",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
