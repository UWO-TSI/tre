import YellowAccentButton from "@/othername";

export default function NotFound() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Image on left side */}
      <div style={{ width: "50%" }}>
        <img
          src="/images/404page.webp"
          alt="Child"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* text, logo and button on right side */}
      <div
        style={{
          width: "50%",
          backgroundColor: "#ffffff",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/Childcan-Logo.png.webp"
          alt="Childcan Logo"
          style={{
            width: "235px",
            marginBottom: "100px",
          }}
        />

        <h1
          style={{
            fontSize: "80px",
            color: "#514776",
            margin: 0,
          }}
        >
          404!
        </h1>

        <p
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            color: "#555",
            maxWidth: "400px",
          }}
        >
          We can't find the page you're looking for, sorry about that. It has
          either moved, or does not exist.
        </p>

        <YellowAccentButton>Home Page</YellowAccentButton>
      </div>
    </div>
  );
}
