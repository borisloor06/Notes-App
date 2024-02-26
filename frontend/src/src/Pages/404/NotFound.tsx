function NotFound() {
  return (
    <div className="text-center vh-100 b-404">
      <h1 className="py-2 text-light">Page Not Found</h1>
      <img
        className="mx-auto w-100"
        src="src/assets/404.webp"
        alt="Page not found"
      />
    </div>
  );
}

export default NotFound;
